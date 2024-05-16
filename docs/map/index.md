---
hide:
  - navigation
icon: material/map
---

#:material-map:Map

!!! warning "Under Construction"

The following diagram shows all possible pivots between various [artifact](/artifacts) types:

```mermaid
flowchart LR
	classDef secondary stroke-dasharray: 5 5
	
	%% define nodes
	IP_ADDRESS(IP Address)
	IP_ADDRESS_(IP Address):::secondary
	DOMAIN(Domain)
	DOMAIN_(Domain):::secondary
	SERVER(Server)
	SERVER_(Server):::secondary
	TLS_CERT(TLS Certificate)
	TLS_CERT_(TLS Certificate):::secondary
	SAMPLE(Sample)
	SAMPLE_(Sample):::secondary
	USER_AGENT(User Agent)
	USER_AGENT_(User Agent):::secondary
	
	%% define edges
	DOMAIN -- resolves --> IP_ADDRESS
	IP_ADDRESS -- rDNS --> DOMAIN
	IP_ADDRESS -- prev. resolved --> DOMAIN
	IP_ADDRESS <-- ASN --> IP_ADDRESS_
	IP_ADDRESS -- uses --> USER_AGENT
	IP_ADDRESS <-- Netflow --> IP_ADDRESS_
	IP_ADDRESS <-- WHOIS --> IP_ADDRESS_
	SERVER -- hosted by --> IP_ADDRESS
	SAMPLE -- communicates --> SERVER
	SAMPLE -- references --> SERVER
	SERVER <-- fingerprint --> SERVER_
	SERVER <-- banner --> SERVER_
	SERVER <-- favicon --> SERVER_
	SERVER <-- content --> SERVER_
	SERVER <-- URL path --> SERVER_
	SERVER -- stores --> SAMPLE
	TLS_CERT -- served by--> SERVER
	DOMAIN <-- CN --> TLS_CERT
	DOMAIN <-- similar name --> DOMAIN_
	SAMPLE -- hash --> SAMPLE_
	SAMPLE -- code similarity --> SAMPLE_
	SAMPLE -- references --> DOMAIN
	SAMPLE -- references --> IP_ADDRESS
	SAMPLE -- uses --> USER_AGENT
	TLS_CERT <-- authority--> TLS_CERT_
	TLS_CERT <-- time--> TLS_CERT_
	USER_AGENT <-- similar --> USER_AGENT_
```