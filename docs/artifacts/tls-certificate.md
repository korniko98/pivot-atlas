---
icon: material/file-certificate
---

# :material-file-certificate: TLS Certificate

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
-   :octicons-package-16:{ .lg .middle } __Components__
	
	<span style="font-size:0.9em;">
	The certificate used by this website as of 2024-06-04 contains some of the following pivotable data:
	</span>
    ```
	Serial Number:
		04:23:7a:e2:8d:c6:17:e3:78:6e:dd:e6:0a:42:24:40:1c:1e
	Issuer: (CA ID: 183267)
		commonName                = R3
		organizationName          = Let's Encrypt
		countryName               = US
	Validity
		Not Before: May 20 05:50:30 2024 GMT
		Not After : Aug 18 05:50:29 2024 GMT
	Subject:
		commonName                = gopivot.ing
	```
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
		TLS_CERT <-- CN ---> TLS_CERT_
		TLS_CERT <-- subject ---> TLS_CERT_
		TLS_CERT <-- CA ---> TLS_CERT_
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

	Embee Research analyzed certificate data related to a domain associated with MatanBuchus in order to surface additional domains using certificates with the same subdomains, certificate authority, and registration period.[^2]

####:octicons-arrow-right-24: Domains matching its CN

TLS certificates contain many fields denoting registrant information, registar information, and various "names" indicating which domain or subdomains the certificate applies to. Further pivoting on the domain listed in the common name field (CN) can lead to other certificates listing the same one or similar ones.

&nbsp;

### TLS Certificates

!!! abstract inline end "Example"

	ThreatConnect identified an IP address associated with APT28 serving a certificate that listed the common name `ecitcom[.]net`. Pivoting on this name led to several other servers using certificates with the same CN, that resolved domains with completely different names.[^3]

####:octicons-arrow-right-24: Certificates with same CN

Threat actors may register more than one certificate with the same common name (CN), and use each certificate on a different server, even if the domain name resolving to a server does not match the common name of the certificate.

&nbsp;

&nbsp;

??? example "Try it out"

	=== "crt.sh (URL)"
		```
		https://crt.sh/?CN={COMMON_NAME}
		```

####:octicons-arrow-right-24: Certificates with similar subject details

Threat actors may reuse certain subject details when registering more than one certificate. If these details are relatively unique (on their own or in combination), analysts can pivot on them to discover additional potentially related certificates.

####:octicons-arrow-right-24: Certificates registered with same CA

Threat actors may register multiple certificates using the same certificate authority (CA), which is listed in the issuer organization field. If the CA itself is uncommon, or if a combination of CA and other factors is relatively unique, analysts can leverage this commonality to identify additional certificates registered by the same actor.

!!! abstract inline end "Example"

	ThreatConnect determined that most certificates suspected to be in use by APT28 as of March 2018 were registered during working hours of Moscow's time zone. While this wasn't unique enough for pivoting to unknown certificates, it did serve to increase their confidence in their attribution of related activity to this threat actor.[^3]

####:octicons-arrow-right-24: Certificates registered in the same timeframe

Threat actors may register many TLS certificates throughout their period of activity, or for the purpose of a particular operation or campaign. In order to maintain OPSEC, they may register every certificate at a different time and at irregular intervals. However, less savvy threat actors could very well register many of their certificates around the same time, a mistake which analysts can leverage along with other parameters in order to identify additional potentially related certificates.

&nbsp;

[^1]: [Hunting Cobalt Strike Servers](https://bank-security.medium.com/hunting-cobalt-strike-servers-385c5bedda7b)
[^2]: [Identifying MatanBuchus Domains Through Hardcoded Certificate Values](https://www.embeeresearch.io/tls-certificates-for-threat-intel-dns/)
[^3]: [A Song of Intel and Fancy](https://threatconnect.com/blog/using-fancy-bear-ssl-certificate-information-to-identify-their-infrastructure/)