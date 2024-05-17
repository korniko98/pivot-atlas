---
hide:
  - navigation
icon: material/map
---

#:material-map:Map

The following diagram shows all pivots between various [artifact](/artifacts) types, as detailed on this website (the list isn't conclusive, and will grow and change as more content is added):

```mermaid
flowchart LR
	classDef secondary stroke-dasharray: 5 5
	
	%% define nodes
	IP_ADDRESS(IP Address)
	DOMAIN(Domain)
	SERVER(Server)
	TLS_CERT(TLS Certificate)
	SAMPLE(Sample)
	USER_AGENT(User Agent)
	IP_ADDRESS_(IP Address):::secondary
	DOMAIN_(Domain):::secondary
	SERVER_(Server):::secondary
	TLS_CERT_(TLS Certificate):::secondary
	SAMPLE_(Sample):::secondary
	USER_AGENT_(User Agent):::secondary
	
	%% define edges
	DOMAIN -- resolves --> IP_ADDRESS
	DOMAIN -- prev. resolved --> IP_ADDRESS
	DOMAIN <-- similar name --> DOMAIN_
	IP_ADDRESS -- rDNS --> DOMAIN
	IP_ADDRESS <-- ASN --> IP_ADDRESS_
	IP_ADDRESS -- uses --> USER_AGENT
	IP_ADDRESS <-- Netflow --> IP_ADDRESS_
	IP_ADDRESS <-- WHOIS --> IP_ADDRESS_
	IP_ADDRESS -- hosts --> SERVER
	SERVER <-- fingerprint --> SERVER_
	SERVER <-- banner --> SERVER_
	SERVER <-- favicon --> SERVER_
	SERVER <-- content --> SERVER_
	SERVER <-- URL path --> SERVER_
	SERVER -- stores --> SAMPLE
	TLS_CERT -- served by--> SERVER
	TLS_CERT -- CN --> DOMAIN
	TLS_CERT <-- authority--> TLS_CERT_
	TLS_CERT <-- time--> TLS_CERT_
	USER_AGENT <-- similar --> USER_AGENT_
	SAMPLE -- communicates --> SERVER
	SAMPLE -- references --> SERVER
	SAMPLE -- hash --> SAMPLE_
	SAMPLE -- code similarity --> SAMPLE_
	SAMPLE -- references --> DOMAIN
	SAMPLE -- references --> IP_ADDRESS
	SAMPLE -- uses --> USER_AGENT
```