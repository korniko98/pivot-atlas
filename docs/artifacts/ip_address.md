# IP Address

## Overview

<div class="grid cards" markdown>
-   :material-lightbulb-on:{ .lg .middle } __Definition__

    ---
	<span style="font-size:0.8em;">
	An [Internet Protocol address](https://en.wikipedia.org/wiki/IP_address) is a numerical label assigned to a device connected to a computer network. Threat actors purchase or hijack IP addresses to host [servers](/pivot-handbook/artifacts/server) for malicious purposes.
	</span>

-   :material-flower-tulip:{ .lg .middle } __Examples__

    ---
	<span style="font-size:0.8em;">
    `134.209.127[.]249` was in use by an unknown threat actor for the triple purpose of running commands against cloud environments, sending phishing SMS messages to targets, and serving phishing websites.[^1]
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		A("IP Address") -- rDNS --> B("Domain / Subdomain")
		A -- pDNS --> B
		B -- fDNS --> A
		A <-- ASN --> C("IP Address")
		A <--> E("User Agent")
		E <--> C
		A <-- Netflow --> C
		A -- hosts --> D("Server")
		click B "#domains"
		click C "#ip-addresses"
		click D "#servers"
	```
</div>

!!! warning "Static vs. dynamic addresses"
	IP addresses can be either static or dynamic, with the first type remaining under the control of the same user for prolonged periods of time, and the second type often changing hands. Therefore, dynamic IP addresses are much less useful for pivoting than their static counterparts, since any pivots could lead to entirely unrelated activity, depending on the timeframe of our query.

## Pivots

### Servers
####:octicons-arrow-right-24: [Servers](/pivot-handbook/artifacts/server) hosted by it

An IP address can host one or more servers on various ports. Scanning different ports can reveal new information about how a threat actor is using a given IP address.

[Host scanning services](/pivot-handbook/tools/host_scanners) such as [Shodan](https://www.shodan.io) and [Censys](https://search.censys.io) regularly scan the entire IPv4 space and report their findings in queryable databases.

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

### Domains
####:octicons-arrow-right-24: [Domains or subdomains](/pivot-handbook/artifacts/domain) that resolve to it

An IP address might be resolved by one or more domains or subdomains operated by the same threat actor. In some cases, an IP address might be used for multiple purposes at once (e.g., malware C2, serving phishing pages, proxying traffic, etc.), with every server fronted by a different domain or subdomain.

Since most normal network traffic initiates in DNS queries and uses host headers for communicating between clients and servers, actors often configure their malware to communicate with domains rather than directly connecting to an IP address. This affords their activity a measure of stealth, with the added benefit of greater operational flexibility.

While querying a domain for its resolving IP address is called forward DNS (fDNS for short), the opposite query is known as reverse DNS (or rDNS).

=== "DNSChecker"
    ```
	https://dnschecker.org/reverse-dns.php?query={IP_ADDRESS}
    ```

####:octicons-arrow-right-24: [Domains or subdomains](/pivot-handbook/artifacts/domain) that have historically resolved to it

Passive DNS queries are usually more accurate than reverse DNS queries, since the former relies on continuously recording DNS queries from various sources and aggregating their results into a queryable database. This has the added benefit of enabling pivots to past DNS records as well, which is especially useful when investigating a long-term campaign or cases in which a threat actor has already shut down their operations.

---

### IP Addresses

####:octicons-arrow-right-24: Other IP addresses in the same ASN

Some Autonomous System Numbers (ASN) are known to be operated by malicious actors[^2], and in some cases an address's ASN may contain additional addresses in use by the same actor.

=== "Shodan (URL)"
    ```
	TO DO
    ```
=== "Shodan (API)"
    ``` console
	TO DO
    ```
=== "Censys (URL)"
    ```
	https://search.censys.io/search?q=autonomous_system.asn%3A+{ASN}&resource=hosts
    ```
=== "Censys (API)"
    ``` console
	TO DO
    ```

####:octicons-arrow-right-24: Other IP addresses observed communicating with it

If you have access to [aggregated Netflow data](/pivot-handbook/tools/flow_logs), you can check for other IP addresses that may have been observed in communication with this IP address. This can reveal victim devices communicating with malicious infrastructure, or other components of a threat actor's operation (such as proxy servers).

*[ASN]: Autonomous System Number
*[DNS]: Domain Name System

[^1]: [Tales from the cloud trenches: Using malicious AWS activity to spot phishing campaigns](https://securitylabs.datadoghq.com/articles/tales-from-the-cloud-trenches-aws-activity-to-phishing/)
[^2]: [Risky Business: Determining Malicious Probabilities Through ASNs](https://www.akamai.com/blog/security/determining-malicious-probabilities-through-asns/)