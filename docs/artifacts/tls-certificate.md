# TLS Certificate

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__

	<span style="font-size:0.9em;">
	An SSL/TLS certificate allows systems to verify the identity of another system and establish an encrypted network connection between them using the SSL/TLS protocol. Certificates are often represented using a [SHA1 or SHA256 fingerprint](/fingerprints#certificate-hash).
	</span>

-   :octicons-bug-16:{ .lg .middle } __Usecase__

	<span style="font-size:0.9em;">
    Threat actors use these certificates much like in the legitimate usecase, such as to enable encrypted TLS communication between infected clients and C&C servers.
	</span>
</div>

<div class="grid cards" markdown>
-   :octicons-eye-16:{ .lg .middle } __Example__

	<span style="font-size:0.9em;">
    [`cd4c0fe2cb8a00edf4e97a22f550e080a8732b1666c7a16dc01be4ac0ccb2244`](https://crt.sh/?q=cd4c0fe2cb8a00edf4e97a22f550e080a8732b1666c7a16dc01be4ac0ccb2244) is the SHA-1 hash of a certificate in use by `google.com` for a period of several weeks in 2024.
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		classDef primary stroke-width: 2px
		classDef secondary stroke-dasharray: 5 5
		
		%% define nodes
		DOMAIN(Domain)
		SERVER([Server])
		IP_ADDRESS(IP Address)
		TLS_CERT(TLS Certificate):::primary
		TLS_CERT_(TLS Certificate):::secondary
		
		%% define edges
		TLS_CERT -- served by ---> SERVER
		SERVER -. hosted by ..-> IP_ADDRESS
		TLS_CERT -- CN ---> DOMAIN
		TLS_CERT <-- authority ---> TLS_CERT_
		TLS_CERT <-- time --> TLS_CERT_
		
		%% define links
		click DOMAIN "#domains"
		click SERVER "#servers"
		click TLS_CERT_ "#tls-certificates"
	```
</div>

## Pivots

### Servers

!!! abstract inline end "Example"

	The default configuration of Cobalt Strike servers is to use a specific self-signed TLS certificate (SHA-1 `6ECE5ECE4192683D2D84E25B0BA7E04F9CB7EB7C`). Some threat actors make the mistake of using this default certificate, which can be leveraged for identification.[^1]

####:octicons-arrow-right-24: Servers serving it

Threat actors use [TLS certificates](/artifacts/tls-certificate) to enable encrypted TLS communication between attacker-controlled servers, as well as between infected clients and attacker-controlled servers (such as for encrypting communication between malware and its C&C server). If a threat actor deploys multiple servers as part of the same campaign, they might use the same certificate across a subset of their fleet, or use several certificates with partially overlapping details.

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

### TLS Certificates

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