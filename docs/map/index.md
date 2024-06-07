---
hide:
  - navigation
  - toc
icon: material/map
---

#:material-map: Map

The following diagram shows all pivots between various [artifact](/artifacts) types, as detailed on this website. Note that the list of pivots and artifacts isn't conclusive, and will grow and change as more content is added (the diagram may take a few seconds to load in your browser if you're visiting this website for the first time):

```mermaid
flowchart LR
	classDef secondary stroke-dasharray: 5 5
	
	%% define nodes
	CODE([Code])
	DOMAIN(Domain)
	DOMAIN_(Domain):::secondary
	IP_ADDRESS(IP Address)
	IP_ADDRESS_(IP Address):::secondary
	SAMPLE(Sample)
	SAMPLE_(Sample):::secondary
	SERVER([Server / Client])
	SERVER_([Server / Client]):::secondary
	USER_AGENT(User Agent)
	USER_AGENT_(User Agent):::secondary
	TLS_CERT(TLS Certificate)
	TLS_CERT_(TLS Certificate):::secondary

	%% define edges
	DOMAIN -- forward DNS ---> IP_ADDRESS
	DOMAIN <-- DNS history ---> IP_ADDRESS
	DOMAIN <-- NS ---> DOMAIN_
	DOMAIN <-- reg. time ---> DOMAIN_
	DOMAIN <-- registrant ---> DOMAIN_
	DOMAIN <-- registrar ---> DOMAIN_
	DOMAIN <-- similar name ---> DOMAIN_
	DOMAIN <-- TLD ---> DOMAIN_
	DOMAIN <-- URL path ---> DOMAIN_
	TLS_CERT -- CN  ---> DOMAIN
	TLS_CERT -- served by  --> SERVER
	TLS_CERT_ <-- CA  --> TLS_CERT
	TLS_CERT_ <-- CN  --> TLS_CERT
	TLS_CERT_ <-- subject  --> TLS_CERT
	TLS_CERT_ <-- time ---> TLS_CERT
	IP_ADDRESS -- reverse DNS  ---> DOMAIN
	IP_ADDRESS -. hosts ..-> SERVER
	IP_ADDRESS <-- ASN ---> IP_ADDRESS_
	IP_ADDRESS <-- Netflow ---> IP_ADDRESS_
	IP_ADDRESS <-- ports ---> IP_ADDRESS_
	IP_ADDRESS <-- WHOIS details  ---> IP_ADDRESS_
	IP_ADDRESS <-- WHOIS history  ---> IP_ADDRESS_
	USER_AGENT <-- similar  --> USER_AGENT_
	SERVER -- identifies as ---> USER_AGENT
	SERVER -- stores --> SAMPLE
	SERVER <-- banner  ---> SERVER_
	SERVER <-- content ---> SERVER_
	SERVER <-- favicon ---> SERVER_
	SERVER <-- fingerprint ---> SERVER_
	SERVER <-- URL path ---> SERVER_
	SERVER -- identifies as --> USER_AGENT
	SAMPLE_ <-- behavior ---> SAMPLE
	SAMPLE_ <-- code similarity ---> SAMPLE
	SAMPLE -- communicates --> SERVER
	SAMPLE -- connects --> SERVER
	SAMPLE_ <-- hash  ---> SAMPLE
	SAMPLE -- identifies as ---> USER_AGENT
	SAMPLE -- queries ---> DOMAIN
	SAMPLE -- references  ---> DOMAIN
	SAMPLE -- references ---> IP_ADDRESS
	SAMPLE -- references --> USER_AGENT
	CODE -. compiles to ..-> SAMPLE

	%% define links
	click DOMAIN "/artifacts/domain/"
	click IP_ADDRESS "/artifacts/ip-address/"
	click SAMPLE "/artifacts/sample/"
	click TLS_CERT "/artifacts/tls-certificate/"
	click USER_AGENT "/artifacts/user-agent/"
```