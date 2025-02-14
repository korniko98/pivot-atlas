---
icon: material/laptop
title: IP Address
---

# :material-laptop: IP Address

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__

	<span style="font-size:0.9em;">
	An [Internet Protocol address](https://en.wikipedia.org/wiki/IP_address) is a numerical label assigned to a device connected to a computer network, which can function as either a client, a server, or both.
	</span>

-   :octicons-bug-16:{ .lg .middle } __Usecase__

	<span style="font-size:0.9em;">
    Threat actors purchase or hijack IP addresses and assign them to clients or servers, which they deploy to host various parts of their infrastructure, such as phishing websites, crawlers, malware storage, C&C, exfiltrated data storage, and proxies for routing malicious traffic. Similarly, infected clients also have IP addresses.
	</span>
</div>

<div class="grid cards" markdown>
-   :octicons-eye-16:{ .lg .middle } __Example__

	<span style="font-size:0.9em;">
    `134.209.127[.]249` was in use by an unknown threat actor for the triple purpose of hosting servers for running commands against cloud environments, sending phishing SMS messages to targets, and hosting phishing websites.[^1]
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		classDef primary stroke-width: 2px
		classDef secondary stroke-dasharray: 5 5
		
		%% define nodes
		IP_ADDRESS(IP Address):::primary
		IP_ADDRESS_(IP Address):::secondary
		DOMAIN(Domain)
		SERVER([Server / Client])
		SERVER_([Server]):::secondary
		SAMPLE(Sample)
		USER_AGENT(User Agent)
		TLS_CERT(TLS Certificate)
		
		%% define edges
		SERVER -- identifies as ---> USER_AGENT
		IP_ADDRESS <-- ASN --> IP_ADDRESS_
		IP_ADDRESS <-- traffic --> IP_ADDRESS_
		IP_ADDRESS <-- WHOIS details ---> IP_ADDRESS_
		IP_ADDRESS <-- WHOIS history ---> IP_ADDRESS_
		IP_ADDRESS <-- ports --> IP_ADDRESS_
		IP_ADDRESS -. hosts ..-> SERVER
		TLS_CERT -- served by ---> SERVER
		SERVER <-- fingerprint ---> SERVER_
		SERVER <-- banner ---> SERVER_
		SERVER <-- favicon ---> SERVER_
		SERVER <-- content ---> SERVER_
		SERVER <-- URL path ---> SERVER_
		SERVER -- stores ---> SAMPLE
		SAMPLE -- connects --> SERVER
		SAMPLE -- references --> IP_ADDRESS
		DOMAIN -- forward DNS --> IP_ADDRESS
		DOMAIN <-- DNS history --> IP_ADDRESS
		IP_ADDRESS -- reverse DNS ---> DOMAIN
		
		%% define links
		click IP_ADDRESS_ "#ip-addresses"
		click DOMAIN "#domains"
		click SERVER "#servers"
		click SAMPLE "#samples"
		click USER_AGENT "#user-agents"
		click TLS_CERT "#tls-certificates"
	```
</div>

!!! warning "Static vs. dynamic addresses"
	IP addresses can be either static or dynamic, with the first type remaining under the control of the same user for prolonged periods of time, and the second type often changing hands. Therefore, dynamic IP addresses are much less useful for pivoting than their static counterparts, since any pivots could lead to entirely unrelated activity, depending on the timeframe of our query.

!!! warning "Clients vs. servers"
	IP addresses can be assigned by threat actors to either clients or servers, which affects how they appear in logs and therefore how one should pivot on them. For example, clients can be observed scanning victims' networks or connecting to compromised target machines, whereas servers are applications that recieve connections from compromised devices or attacker-controlled clients.
	
	In some cases, the same IP address can operate as both as server and a client. For example, threat actors may use the same IP address for both crawling and C&C. Similarly, threat actors may establish networks of ORBs composed of compromised devices - these would function as proxies, connecting both to and from other devices.

## Pivots

### Domains
####:octicons-arrow-right-24: Domains resolving to it

An IP address might be resolved by one or more [domains or subdomains](/artifacts/domain) operated by the same threat actor. In some cases, an IP address might be used for multiple purposes at once (e.g., malware C2, serving phishing pages, proxying traffic, etc.), with every server fronted by a different domain or subdomain.

Since most normal network traffic initiates in DNS queries and uses host headers for communicating between clients and servers, actors often configure their malware to communicate with domains rather than directly connecting to an IP address. This affords their activity a measure of stealth, with the added benefit of greater operational flexibility.

While querying a domain for its resolving IP address is called forward DNS (fDNS for short), the opposite query is known as reverse DNS (or rDNS).

??? example "Try it out"

	=== "DNSChecker (URL) - rDNS"
		```
		https://dnschecker.org/reverse-dns.php?query={IP_ADDRESS}
		```
	=== "Driftnet (API) - rDNS"
		``` console
		$ curl -s -H 'Authorization: Bearer {API_TOKEN}' \
		'https://api.driftnet.io/v1/domain/rdns?ip={IP_ADDRESS}' \
		| jq . \
		| less -S
		```

####:octicons-arrow-right-24: Domains that previously resolved to it

Pivoting to past DNS records is especially useful when investigating a long-term campaign or cases in which a threat actor has already shut down their operations.

Historic DNS resolutions can be based on either passive DNS collection (pDNS), which involves continuously recording DNS queries from various sources and aggregating their results into a queryable database, or active forward DNS collection (fDNS), which involves regularly querying for known domains and storing their resolutions.

??? example "Try it out"

	=== "Validin (URL)"
		```
		https://app.validin.com/detail?type=ip&find={IP_ADDRESS}#tab=resolutions
		```

---

### IP Addresses

####:octicons-arrow-right-24: Addresses in same ASN

Some Autonomous System Numbers (ASN) are known to be operated by malicious actors[^2], and in some cases an address's ASN may contain additional addresses in use by the same actor.

Given an ASN, analysts can use [DNS tools](/tools/#dns-data) such as [MXToolBox](https://mxtoolbox.com/SuperTool.aspx) to identify the IP ranges associated with it.

####:octicons-arrow-right-24: Addresses with similar registration details

When actors purchase an IP address, they must supply registrant information, which is made publicly available through the WHOIS protocol. Unlike domain registration, leasing an IP address does not allow for registrant privacy; the registrant must supply their personal or business details. While stealthy actors will often provide fake registration details, these can sometimes still be useful for pivoting if they are rare enough and the actor uses the same details more than once. Note that if a threat actor leases a (static or dynamic) IP address from a cloud provider, a WHOIS query will only return information about the provider.

<div class="grid cards" markdown>
-   :octicons-package-16:{ .lg .middle } __Features__
	
	<span style="font-size:0.9em;">
	Some of the registrant details of [`140.82.112.3`](https://who.is/whois-ip/ip-address/140.82.112.3), which resolves `github.com` as of 17/06/24:
	</span>
    ```
	OrgName:		GitHub, Inc.
	OrgId:			GITHU
	Address:		88 Colin P Kelly Jr Street
	City:			San Francisco
	StateProv:		CA
	PostalCode:		94107
	Country:		US
	RegDate:		2012-10-22
	Updated:		2021-05-20
	OrgNOCHandle:	GITHU-ARIN
	OrgNOCPhone:	+1-415-735-4488
	OrgNOCEmail:	hostmaster@github.com
	OrgNOCRef:		https://rdap.arin.net/registry/entity/GITHU-ARIN
	```
</div>

####:octicons-arrow-right-24: Addresses with historically similar registrant details

As mentioned above, threat actors may lease different IP addresses at different times but reuse certain registration details (which might be real or fake). By reviewing [WHOIS history](/tools/#whois-history) platforms, analysts can reveal past similarities which may no longer exist in the current record.

####:octicons-arrow-right-24: Addresses with same open ports

If an IP address hosting a C&C server has a relatively unique set of open ports (e.g., `80`, `443`, `5432`, and `6379`), analysts can leverage this to query [host scanning services](/tools/#host-scanners) such as [Shodan](https://www.shodan.io) and [Censys](https://search.censys.io) for other IP addresses with the exact same set of open ports, some of which might be hosting servers operated by the same threat actor or running the same malicious applications.

!!! abstract "Example"

	Cobalt Strike team server is configured to listen on port 50050 by default, and threat actors don't always bother to change the default configuration prior to deployment.[^4]

---

### Clients

####:octicons-arrow-right-24: Clients connecting to it

If you have access to [traffic aggregation data](/tools/#traffic-aggregation), you can check for other IP addresses that may have been observed in communication with this IP address. This can reveal victim devices communicating with malicious infrastructure, or other components of a threat actor's operation (such as proxy servers).

!!! abstract "Example"

	Proofpoint and Team Cymru analyzed Netflow data to surface a common server observed in communication with multiple C2 servers used by Latrodectus malware operators.[^3]

####:octicons-arrow-right-24: Clients connecting from it

Besides their use for hosting traditional servers, threat actors can also use IP addresses to connect as clients to victim infrastructure. Threat actors can do so using IP addresses they own or via proxy or VPN servers. Client behavior (whether automated or "hands-on-keyboard") can be observed during brute-force attacks, password spray attacks, as well as remote connection sessions such as logging into a target database.

####:octicons-arrow-right-24: Clients with same fingerprint

Infected or attacker-controlled clients running the same tools often have overlapping techstacks (meaning that they run the same set of software components). Moreover, these clients might be configured in the exact same way. This can result in a subset of such clients that can be uniquely identified by their fingerprint (or a set of fingerprint types), such as one of the [JA4+](/fingerprints/#ja4-fingerprints) fingerprints.

---

### User Agents

####:octicons-arrow-right-24: User agents identifying it

Various components of malicious activity involve clients identifying as certain [user agents](/artifacts/user-agent). In some cases, client behavior can be pivoted upon between different IP addresses based on shared user agents. However, this is usually considered a relatively weak correlation, since the same user agent could have legitimate uses as well, unless it's unique.

Given the IP address of a device infected with malware, or a machine running an attacker-side tool (such as a toolkit, crawler or scanner), analysts can review network activity logs to determine which user agents identify the IP address.

!!! abstract "Example"

	 Permiso identified a threat actor using [S3 Browser](https://s3browser.com/) and identifying as the user agent `S3 Browser 9.5.5 <https://s3browser.com>`. While this tool and user agent can be used legitimately, in this case it was never used by employees in the target environment, and was therefore unique to this actor's activity in that specific context.[^5]

---

### Servers
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

####:octicons-arrow-right-24: Servers with same fingerprint

Attacker-controlled servers operated by the same threat actor or that are part of the same campaign often have overlapping techstacks (meaning that they run the same set of software components). Moreover, these servers might be configured in the exact same way. This can result in a subset of malicious servers that can be uniquely identified by their fingerprint (or a set of fingerprint types), such as [JARM](/fingerprints#jarm-fingerprint), [HHHash](/fingerprints/#hhhash-fingerprint), one of the [JA4+](/fingerprints/#ja4-fingerprints) fingerprints, [HASSH](/fingerprints/#hassh), or the [HTML Response Body Hash](/fingerprints/#html-response-body-hash).

####:octicons-arrow-right-24: Servers with same title

When threat actors deploy open-source or commercial command and control servers, they often neglect to modify the default HTML title of the server, or they might reuse the same title across multiple deployments. Pivoting on the HTML title via [host scanning](/tools/#host-scanners) platforms thereby allows analysts to discover additional such servers. However, when pivoting on default titles in particular, note that the resulting servers are unlikely to be operated by the same actor, but rather any actor that happened to make the same configuration mistake.

!!! abstract "Example"

	Mythic C2 by default uses "Mythic" as its HTML title.[^9]

####:octicons-arrow-right-24: Servers with same banner or headers

Depending on the protocols in use, servers normally respond to clients with a specific canned response. HTTP/S servers return response headers, whereas non-HTTP servers return banners. Analysts can leverage this to perform a type of scan called [banner grabbing](https://www.recordedfuture.com/threat-intelligence-101/tools-and-techniques/banner-grabbing) to identify what applications are running on the server.

Given an IP address, analysts can query [host scanning](/tools/#host-scanners) platforms such as [Censys](https://search.censys.io/) to see the results of past scans of any servers it hosts.

!!! abstract "Example"

	Until January 2019, Cobalt Strike team servers contained an “extraneous space” in their default HTTP response headers (after the word `OK` in `HTTP/1.1 200 OK`). At the time, this mistake could be leveraged for unique identification of such servers.[^6]

####:octicons-arrow-right-24: Servers with same favicon

[Favicons](https://en.wikipedia.org/wiki/Favicon) are icons displayed in browser windows or tabs when viewing a given webpage, and they are usually associated with a specific company or software component. When threat actors reuse software between different servers, this sometimes leads to these servers also sharing the same favicon, which can be leveraged for pivoting by querying [host scanning services](/tools/#host-scanners) such as [Shodan](https://www.shodan.io) (see [this blogpost](https://blog.shodan.io/deep-dive-http-favicon/) from Shodan for more information).

####:octicons-arrow-right-24: Servers with similar content

When threat actors set up landing pages for a phishing campaign, they may reuse certain assets across multiple sites. Similarly, threat actors might inject the same malicious JavaScript or JavaScript tags into hijacked websites. This can be leveraged by analysts to pivot from one landing page or compromised website to others through [host scanning](/tools/#host-scanners) platforms such as [Censys](https://search.censys.io/) or [URL scanning](/tools/#url-scanners) platforms such as [URLScan](https://urlscan.io/), by searching for these particular elements.

In other cases, phishing websites operated by the same threat actor may only share their general visual appearance, which can occasionally be leveraged for pivoting as well, albeit as a much weaker signal, and only if content-based scanning fails to surface actual code overlap.

!!! abstract "Example"

	Sucuri tracked a website hijacking campaign in which the threat actor compromised the hosting server and then injected malicious code into JavaScript files. This code consistently began with a unique string (`/*trackmyposs*/eval`). By querying [PublicWWW](https://publicwww.com/) for the indicative string, Sucuri were able to effectively identify many such compromised websites.[^7]

####:octicons-arrow-right-24: Servers with same URL path

Threat actors may set up various API endpoints on their servers to facilitate the required functionality for their malicious infrastructure. Each of these endpoints may be available on a different URL path (e.g., malware may connect to an `/upload/` endpoint to exfiltrate data). Similarly, threat actors may hijack legitimate servers and deploy a file containing malicious code, which may be located on a consistent URL path across multiple compromised servers.

Therefore, given a server with an indicative URL path, analysts can run a wide scan to identify related servers with the same URL path that may be available on other IP addresses. Alternatively, analysts can query the databases of [URL scanning services](/tools/url-scanners) such as [URLScan](https://urlscan.io/) for a given URL path in order to surface domains resolving to potentially related servers.

??? example "Try it out"

	=== "URLScan (URL)"
		```
		https://urlscan.io/search/#page.url%3A%22{PATH}%22
		```
---

### TLS Certificates

####:octicons-arrow-right-24: Certificates served by it

Threat actors use [TLS certificates](/artifacts/tls-certificate) to enable encrypted TLS communication between attacker-controlled servers, as well as between infected clients and attacker-controlled servers (such as for encrypting communication between malware and its C&C server). If a threat actor deploys multiple servers as part of the same campaign, they might use the same certificate across a subset of their fleet, or use several certificates with partially overlapping details.

!!! abstract "Example"

	The default configuration of Cobalt Strike servers is to use a specific self-signed TLS certificate (SHA-1 `6ECE5ECE4192683D2D84E25B0BA7E04F9CB7EB7C`). Some threat actors make the mistake of using this default certificate, which can be leveraged for identification.[^8]

---

### Samples

####:octicons-arrow-right-24: Samples that reference it in their code

By statically scanning a [malware sample](/artifacts/sample) or reverse engineering it, analysts can identify server IP addresses that may be included in its source code, depending on how well the sample is [obfuscated](https://attack.mitre.org/techniques/T1027/).

Given an IP address, analysts can use ["malware zoo"](/tools/#malware-zoos) platforms such as [VirusTotal](https://virustotal.com) to query for any such previously encountered samples.

####:octicons-arrow-right-24: Samples that communicate with it at runtime

By executing a malware sample in a sandboxed environment, or by observing the behavior of malware that has infected a honeypot, one can determine if the infected machine communicates with any IP addresses of C&C or data exfiltration servers.

Given an IP address, analysts can use ["malware zoo"](/tools/#malware-zoos) platforms such as [VirusTotal](https://virustotal.com) to query for any such previously encountered samples.

####:octicons-arrow-right-24: Samples it stores

Attacker-controlled servers hosted on an IP address may store malware for victim devices to download. Gaining access to such servers may therefore afford access to samples of aforementioned malware. Similarly, samples may be retrieved from infected clients by performing forensics, or through security product telemetry.

[^1]: [Tales from the cloud trenches: Using malicious AWS activity to spot phishing campaigns](https://securitylabs.datadoghq.com/articles/tales-from-the-cloud-trenches-aws-activity-to-phishing/)
[^2]: [Risky Business: Determining Malicious Probabilities Through ASNs](https://www.akamai.com/blog/security/determining-malicious-probabilities-through-asns/)
[^3]: [Latrodectus: This Spider Bytes Like Ice](https://www.proofpoint.com/us/blog/threat-insight/latrodectus-spider-bytes-ice)
[^4]: [Cobalt Strike Team Server Population Study](https://www.cobaltstrike.com/blog/cobalt-strike-team-server-population-study)
[^5]: [Anatomy of an Attack: Exposed Keys Lead to Crypto Mining](https://permiso.io/blog/s/anatomy-of-attack-exposed-keys-to-crypto-mining/)
[^6]: [Identifying Cobalt Strike team servers in the wild](https://blog.fox-it.com/2019/02/26/identifying-cobalt-strike-team-servers-in-the-wild/)
[^7]: [Massive WordPress JavaScript Injection Campaign Redirects to Ads ](https://blog.sucuri.net/2022/05/massive-wordpress-javascript-injection-campaign-redirects-to-ads.html)
[^8]: [Hunting Cobalt Strike Servers](https://bank-security.medium.com/hunting-cobalt-strike-servers-385c5bedda7b)
[^9]: [A Beginner's Guide to Tracking Malware Infrastructure](https://censys.com/a-beginners-guide-to-tracking-malware-infrastructure/)
