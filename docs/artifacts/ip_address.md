# IP Address

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :material-lightbulb-on:{ .lg .middle } __Definition__

    ---
	An [Internet Protocol address](https://en.wikipedia.org/wiki/IP_address) is a numerical label assigned to a device connected to a computer network.

-   :material-flower-tulip:{ .lg .middle } __Examples__

    ---
    `8.8.8.8`
	
	`1.2.3.4`
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart TD
		A("IP Address") -- rDNS --> B("Domain / Subdomain")
		A -- pDNS --> B
		B -- fDNS --> A
		A -- ASN --> C("IP Address")
		A -- NS --> C
		A <-- flow --> C
		A -- hosts --> D("Server")
		click B "#domains"
		click C "#ip-addresses"
		click D "#servers"
	```
</div>

## Pivots

### Servers
####[Servers](/artifacts/server) hosted by it

An IP address can host one or more servers on various ports. Every port might reveal different information.

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
	TO DO
    ```
=== "Censys (API)"
    ``` console
	TO DO
    ```

### Domains
####[Domains or subdomains](/artifacts/domain) that resolve to it

An IP address might be resolved by one or more domains or subdomains operated by the same actor.
In some cases, an IP address might be used for multiple purposes at once (e.g., malware C2, serving phishing pages, proxying traffic, etc.)

=== "DNSChecker"
    ```
	https://dnschecker.org/reverse-dns.php?query={IP_ADDRESS}
    ```

####[Domains or subdomains](/artifacts/domain) that have historically resolved to it

Reverse DNS queries are usually less acurate than passive DNS, which has the added benefit of querying past records as well.

=== "SecurityTrails"
    ```
	TO DO
    ```

### IP Addresses

#### Other IP addresses in the same ASN

Some ASNs are known to be operated by malicious actors, and in some cases an address's ASN may contain additional addresses owned by the same actor.

=== "DNSChecker"
    ```
	https://dnschecker.org/reverse-dns.php?query={IP_ADDRESS}
    ```

#### Other IP addresses with the same NS

=== "DNSChecker"
    ```
	https://dnschecker.org/reverse-dns.php?query={IP_ADDRESS}
    ```

#### Other IP addresses observed communicating with it

If you have access to aggregated Netflow data, you can check for other IP addresses that may have been observed in communication with this IP address.