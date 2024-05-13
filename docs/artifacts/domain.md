# Domain

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__


    ---
	<span style="font-size:0.9em;">
	A domain is ...
	</span>

-   :octicons-eye-16:{ .lg .middle } __Example__

    ---
	<span style="font-size:0.9em;">
    dfg
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		A("Server") -- serves --> B("TLS Certificate")
		B <-- domain--> E("TLS Certificate")
		B <-- authority--> E("TLS Certificate")
		B <-- time--> E("TLS Certificate")
		click A "#servers"
		click C "#samples"
		click D "#servers"
		click E "#tls-certificates"
	```
</div>

## Pivots

### Domains

####:octicons-arrow-right-24: Domains with similar names

??? example "Try it out"

	=== "Validin (URL)"
		```
		TO DO
		```
	=== "Validin (API)"
		``` console
		TO DO
		```

!!! abstract inline end "Example"

	Embee Research analyzed certificate data related to a domain associated with MatanBuchus in order to surface additional domains using certificates with the same subdomains, certificate authority, and registration period.[^1]

####:octicons-arrow-right-24: Domains with certificate field overlap

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar. Donec et dolor at velit dictum lobortis. Vivamus rhoncus suscipit faucibus. Donec iaculis turpis ultricies augue bibendum venenatis. Praesent massa erat, scelerisque et consequat a, sollicitudin eu nulla.

---

### IP Addresses

!!! abstract inline end "Example"

	Embee Research analyzed passive DNS data related to several domains associated with ACTINIUM in order to surface additional IP addresses to which they previously resolved.[^2]

####:octicons-arrow-right-24: IP addresses to which the domain previously resolved

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar. Donec et dolor at velit dictum lobortis. Vivamus rhoncus suscipit faucibus. Donec iaculis turpis ultricies augue bibendum venenatis. Praesent massa erat, scelerisque et consequat a, sollicitudin eu nulla.

[^1]: [Identifying MatanBuchus Domains Through Hardcoded Certificate Values](https://www.embeeresearch.io/tls-certificates-for-threat-intel-dns/)
[^2]: [Passive DNS Pivoting - Uncovering APT Infrastructure Through Historical Records and Subdomain Analysis](https://www.embeeresearch.io/uncovering-apt-infrastructure-with-passive-dns-pivoting/)