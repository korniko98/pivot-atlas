# Domain

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__


    ---
	<span style="font-size:0.9em;">
	A fully qualified domain name (FQDN) is the technical term for domains (e.g., `google.com`) and subdomains (e.g., `drive.google.com`).
	</span>

-   :octicons-bug-16:{ .lg .middle } __Usecase__

    ---
	<span style="font-size:0.9em;">
    Threat actors acquire FQDNs and configure them to resolve to servers they control. This allows them to to direct phishing victims to FQDNs which resolve to malicious landing pages, and allow malware-infected devices to send an initial DNS resolution request for FQDNs associated with C&C servers.
	</span>
</div>

<div class="grid cards" markdown>
-   :octicons-eye-16:{ .lg .middle } __Example__

    ---
	<span style="font-size:0.9em;">
    `realbumblebee[.]net`, `recentbee[.]net`, and `currentbee[.]net` were domains that resolved to [Cobalt Strike](https://www.cobaltstrike.com/) C&C servers operated by the threat actor known as Black Basta.[^1]
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		IP_ADDRESS("IP Address") -- rDNS --> DOMAIN("Domain")
		IP_ADDRESS -- pDNS --> DOMAIN
		DOMAIN -- fDNS --> IP_ADDRESS
		DOMAIN <-- CN --> TLS_CERT("TLS Certificate")
		DOMAIN <-- similar name --> DOMAIN_("Domain")
		click DOMAIN_ "#domains"
		click TLS_CERT "#tls-certificates"
		click IP_ADDRESS "#ip-addresses"
	```
</div>

!!! warning "Actor-controlled subdomains of shared domains"
	Some domains resolve to platforms owned by legitimate entities, but threat actors abuse them by registering subdomains (usually for free) which they use for maliicous purposes. For example, `oast.pro` is a legitimate domain operated by Project Discovery for use with a pentesting tool they maintain called Interactsh. However, malicious actors might register subdomains of `oast.pro` (e.g., `c59e3crp82ke7bcnedq0cfjqdpeyyyyyn.oast.pro`). In this case, only the subdomain would be uniquely associated with specific malicious activity, whereas the domain would not.

## Pivots

### Domains

####:octicons-arrow-right-24: Domains with similar names

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

??? example "Try it out"

	=== "Validin (URL)"
		```
		TO DO
		```
	=== "Validin (API)"
		``` console
		TO DO
		```

### TLS Certificates

!!! abstract inline end "Example"

	Embee Research analyzed certificate data related to a domain associated with MatanBuchus in order to surface additional domains using certificates with the same subdomains, certificate authority, and registration period.[^2]

####:octicons-arrow-right-24: TLS certificates listing it as common name (CN)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

&nbsp;

---

### IP Addresses

!!! abstract inline end "Example"

	Embee Research analyzed passive DNS data related to several domains associated with ACTINIUM in order to surface additional IP addresses to which they previously resolved.[^3]

####:octicons-arrow-right-24: IP addresses to which it previously resolved

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

[^1]: [#StopRansomware: Black Basta](https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-131a)
[^2]: [Identifying MatanBuchus Domains Through Hardcoded Certificate Values](https://www.embeeresearch.io/tls-certificates-for-threat-intel-dns/)
[^3]: [Passive DNS Pivoting - Uncovering APT Infrastructure Through Historical Records and Subdomain Analysis](https://www.embeeresearch.io/uncovering-apt-infrastructure-with-passive-dns-pivoting/)