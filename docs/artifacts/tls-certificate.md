# TLS Certificate

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__


    ---
	<span style="font-size:0.9em;">
	An SSL/TLS certificate allows systems to verify the identity of another system and establish an encrypted network connection between them using the SSL/TLS protocol. Certificates are often represented using a [SHA1 or SHA256 fingerprint](/fingerprints#certificate-hash).
	</span>

-   :octicons-eye-16:{ .lg .middle } __Example__

    ---
	<span style="font-size:0.9em;">
    [`cd4c0fe2cb8a00edf4e97a22f550e080a8732b1666c7a16dc01be4ac0ccb2244`](https://crt.sh/?q=cd4c0fe2cb8a00edf4e97a22f550e080a8732b1666c7a16dc01be4ac0ccb2244) is the SHA-1 hash of a certificate in use by `google.com` for a period of several weeks in 2024.
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		TLS_CERT("TLS Certificate") -- served by --> SERVER("Server")
		TLS_CERT -- CN --> DOMAIN("Domain")
		TLS_CERT <-- authority--> TLS_CERT_("TLS Certificate")
		TLS_CERT <-- time--> TLS_CERT_("TLS Certificate")
		click SERVER "#servers"
		click DOMAIN "#domains"
		click TLS_CERT_ "#tls-certificates"
	```
</div>

## Pivots

### Servers

####:octicons-arrow-right-24: Servers serving it

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

??? example "Try it out"

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
		TO DO
		```
	=== "Censys (API)"
		``` console
		TO DO
		```

---

### Domains

!!! abstract inline end "Example"

	Embee Research analyzed certificate data related to a domain associated with MatanBuchus in order to surface additional domains using certificates with the same subdomains, certificate authority, and registration period.[^1]

####:octicons-arrow-right-24: Domains matching its common name (CN)

TLS certificates contain many fields denoting registrant information, registar information, and various "names" indicating which domain or subdomains the certificate applies to. Further pivoting on the domain listed in the common name field (CN) can lead to other certificates listing the same one or similar ones.

&nbsp;

??? example "Try it out"

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
		TO DO
		```
	=== "Censys (API)"
		``` console
		TO DO
		```

---

### Certificates

####:octicons-arrow-right-24: Certificates registered with the same authority

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

??? example "Try it out"

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
		TO DO
		```
	=== "Censys (API)"
		``` console
		TO DO
		```

####:octicons-arrow-right-24: Certificates registered in the same timeframe

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

??? example "Try it out"

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
		TO DO
		```
	=== "Censys (API)"
		``` console
		TO DO
		```

[^1]: [Identifying MatanBuchus Domains Through Hardcoded Certificate Values](https://www.embeeresearch.io/tls-certificates-for-threat-intel-dns/)