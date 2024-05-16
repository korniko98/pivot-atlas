# IP Address

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__

    ---
	<span style="font-size:0.9em;">
	An [Internet Protocol address](https://en.wikipedia.org/wiki/IP_address) is a numerical label assigned to a device connected to a computer network.
	</span>

-   :octicons-bug-16:{ .lg .middle } __Usecase__

    ---
	<span style="font-size:0.9em;">
    Threat actors purchase or hijack IP addresses and assign them to clients or [servers](/artifacts/server).
	</span>
</div>

<div class="grid cards" markdown>
-   :octicons-eye-16:{ .lg .middle } __Example__

    ---
	<span style="font-size:0.9em;">
    `134.209.127[.]249` was in use by an unknown threat actor for the triple purpose of running commands against cloud environments, sending phishing SMS messages to targets, and serving phishing websites.[^1]
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		classDef secondary stroke-dasharray: 5 5
		
		%% define nodes
		IP_ADDRESS(IP Address)
		IP_ADDRESS_(IP Address):::secondary
		DOMAIN(Domain)
		SERVER(Server)
		SAMPLE(Sample)
		USER_AGENT(User Agent)
		
		%% define edges
		DOMAIN -- resolves --> IP_ADDRESS
		IP_ADDRESS -- rDNS --> DOMAIN
		IP_ADDRESS -- prev. resolved --> DOMAIN
		IP_ADDRESS <-- ASN --> IP_ADDRESS_
		IP_ADDRESS -- uses --> USER_AGENT
		IP_ADDRESS <-- Netflow --> IP_ADDRESS_
		IP_ADDRESS <-- WHOIS --> IP_ADDRESS_
		SERVER -- hosted by --> IP_ADDRESS
		SAMPLE -- references --> IP_ADDRESS
	```
</div>

!!! warning "Static vs. dynamic addresses"
	IP addresses can be either static or dynamic, with the first type remaining under the control of the same user for prolonged periods of time, and the second type often changing hands. Therefore, dynamic IP addresses are much less useful for pivoting than their static counterparts, since any pivots could lead to entirely unrelated activity, depending on the timeframe of our query.

!!! warning "Clients vs. servers"
	IP addresses can be assigned by threat actors to either clients or [servers](/artifacts/server), which affects how they appear in logs and therefore how one should pivot on them. For example, clients can be observed scanning victims' networks or connecting to compromised target machines, whereas servers are applications that recieve connections from compromised devices or attacker-controlled clients.

## Pivots

### [Servers](/artifacts/server)
####:octicons-arrow-right-24: Servers hosted by it

An IP address can host one or more servers on various ports. Scanning different ports can reveal new information about how a threat actor is using a given IP address.

[Host scanning services](/tools/#host-scanners) such as [Shodan](https://www.shodan.io) and [Censys](https://search.censys.io) regularly scan the entire IPv4 space and report their findings in queryable databases.

??? example "Try it out"

	=== "Shodan (URL)"
		```
		https://www.shodan.io/host/{IP_ADDRESS}
		```
	=== "Shodan (API)"
		``` console
		$ curl -X GET "https://api.shodan.io/shodan/host/{IP_ADDRESS}?key={YOUR_API_KEY}"
		```
	=== "Censys (URL)"
		```
		https://search.censys.io/hosts/{IP_ADDRESS}
		```
	=== "Censys (API)"
		``` console
		TO DO
		```

####:octicons-arrow-right-24: Clients connecting from it

Besides their use for hosting traditional servers, threat actors can also use IP addresses to connect as clients to victim infrastructure. Threat actors can do so using IP addresses they own or via proxy or VPN servers. Client behavior (whether automated or "hands-on-keyboard") can be observed during brute-force attacks, password spray attacks, as well as remote connection sessions such as logging into a target database.

In some cases, client behavior can be pivoted upon between different IP addresses based on shared user agents (though this is considered a relatively weak correlation, since the same user agent could have legitimate uses as well).

---

### [Domains](/artifacts/domain)
####:octicons-arrow-right-24: Domains or subdomains that currently resolve to it

An IP address might be resolved by one or more domains or subdomains operated by the same threat actor. In some cases, an IP address might be used for multiple purposes at once (e.g., malware C2, serving phishing pages, proxying traffic, etc.), with every server fronted by a different domain or subdomain.

Since most normal network traffic initiates in DNS queries and uses host headers for communicating between clients and servers, actors often configure their malware to communicate with domains rather than directly connecting to an IP address. This affords their activity a measure of stealth, with the added benefit of greater operational flexibility.

While querying a domain for its resolving IP address is called forward DNS (fDNS for short), the opposite query is known as reverse DNS (or rDNS).

??? example "Try it out"

	=== "DNSChecker"
		```
		https://dnschecker.org/reverse-dns.php?query={IP_ADDRESS}
		```

####:octicons-arrow-right-24: Domains or subdomains that have previously resolved to it

Pivoting to past DNS records is especially useful when investigating a long-term campaign or cases in which a threat actor has already shut down their operations.

Historic DNS resolutions can be based on either passive DNS collection (pDNS), which involves continuously recording DNS queries from various sources and aggregating their results into a queryable database, or active forward DNS collection (fDNS), which involves regularly querying for known domains and storing their resolutions.

---

### IP Addresses

####:octicons-arrow-right-24: IP addresses in the same ASN

Some Autonomous System Numbers (ASN) are known to be operated by malicious actors[^2], and in some cases an address's ASN may contain additional addresses in use by the same actor.

??? example "Try it out"

	=== "WHOIS (API)"
		``` console
		TO DO
		```
	=== "Dig (API)"
		``` console
		TO DO
		```
	=== "Driftnet (URL)"
		```
		TO DO
		```

####:octicons-arrow-right-24: IP addresses with overlapping registration details

When actors purchase an IP address, they must supply registrant information, which is made publicly available through the WHOIS protocol. This requirement is different than for registering a domain, a process which allows for registrant privacy. While stealthy actors will often provide fake registration details, these can sometimes still be useful for pivoting if they are rare enough. Note that if a threat actor leases a (static or dynamic) IP address from a cloud provider, a WHOIS query will only return information about the provider.

??? example "Try it out"

	=== "WHOIS (API)"
		``` console
		TO DO
		```
	=== "Dig (API)"
		``` console
		TO DO
		```
	=== "Driftnet (URL)"
		```
		TO DO
		```

!!! abstract inline end "Example"

	Proofpoint and Team Cymru analyzed Netflow data to surface a common server observed in communication with multiple C2 servers used by Latrodectus malware operators.[^3]

####:octicons-arrow-right-24: IP addresses observed communicating with it

If you have access to [aggregated Netflow data](/tools/#flow-logs), you can check for other IP addresses that may have been observed in communication with this IP address. This can reveal victim devices communicating with malicious infrastructure, or other components of a threat actor's operation (such as proxy servers).

[^1]: [Tales from the cloud trenches: Using malicious AWS activity to spot phishing campaigns](https://securitylabs.datadoghq.com/articles/tales-from-the-cloud-trenches-aws-activity-to-phishing/)
[^2]: [Risky Business: Determining Malicious Probabilities Through ASNs](https://www.akamai.com/blog/security/determining-malicious-probabilities-through-asns/)
[^3]: [Latrodectus: This Spider Bytes Like Ice](https://www.proofpoint.com/us/blog/threat-insight/latrodectus-spider-bytes-ice)