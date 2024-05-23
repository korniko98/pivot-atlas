# Server

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__

	<span style="font-size:0.9em;">
	A server is an application listening on an [IP address](/artifacts/ip-address) and port combination (also known as a socket) that serves clients connecting to it. Servers run on hosts, which might be physical devices, virtual machines, or containers.
	</span>

-   :octicons-bug-16:{ .lg .middle } __Usecase__

	<span style="font-size:0.9em;">
    Threat actors deploy servers to host various parts of their infrastructure, such as phishing websites, repositories from which victim devices download malicious payloads, C&C servers to which malware connects for recieving commands, storage for exfiltrated data, and proxies for routing malicious traffic.
	</span>
</div>

<div class="grid cards" markdown>
-   :octicons-eye-16:{ .lg .middle } __Example__

	<span style="font-size:0.9em;">
    [...]
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		classDef primary stroke-width: 2px
		classDef secondary stroke-dasharray: 5 5
		
		%% define nodes
		IP_ADDRESS(IP Address)
		SERVER(Server):::primary
		SERVER_(Server):::secondary
		TLS_CERT(TLS Certificate)
		SAMPLE(Sample)
		
		%% define edges
		IP_ADDRESS -- hosts --> SERVER
		SERVER <-- fingerprint --> SERVER_
		SERVER <-- banner --> SERVER_
		SERVER <-- favicon --> SERVER_
		SERVER <-- content --> SERVER_
		SERVER <-- URL path --> SERVER_
		SERVER <-- port --> SERVER_
		SERVER -- stores --> SAMPLE
		TLS_CERT -- served by--> SERVER
		SAMPLE -- communicates --> SERVER
		SAMPLE -- references --> SERVER
		
		%% define links
		click IP_ADDRESS "#ip-addresses"
		click SERVER_ "#servers"
		click SAMPLE "#samples"
		click TLS_CERT "#tls-certificate"
	```
</div>

## Pivots

### TLS Certificates

!!! abstract inline end "Example"

	The default configuration of Cobalt Strike servers is to use a specific self-signed TLS certificate (SHA-1 `6ECE5ECE4192683D2D84E25B0BA7E04F9CB7EB7C`). Some threat actors make the mistake of using this default certificate, which can be leveraged for identification.[^1]

####:octicons-arrow-right-24: Certificates served by it

Threat actors use [TLS certificates](/artifacts/tls-certificate) to enable encrypted TLS communication between attacker-controlled servers, as well as between infected clients and attacker-controlled servers (such as for encrypting communication between malware and its C&C server). If a threat actor deploys multiple servers as part of the same campaign, they might use the same certificate across a subset of their fleet, or use several certificates with partially overlapping details.

---

### Servers

####:octicons-arrow-right-24: Servers with the same fingerprint

Attacker-controlled servers operated by the same threat actor or that are part of the same campaign often have overlapping techstacks (meaning that they run the same set of software components). Moreover, these servers might be configured in the exact same way. This can result in a subset of malicious servers that can be uniquely identified by their fingerprint (or a set of fingerprint types), such as [JARM](/fingerprints#jarm-fingerprint), [HHHash](/fingerprints/#hhhash-fingerprint), or one of the [JA4+](/fingerprints/#ja4-fingerprints) fingerprints.

!!! abstract inline end "Example"

	Until January 2019, Cobalt Strike servers contained an “extraneous space” in their default HTTP response header, which could be leveraged for unique identification.[^2]

####:octicons-arrow-right-24: Servers with the same response banner

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

####:octicons-arrow-right-24: Servers with the same favicon

[Favicons](https://en.wikipedia.org/wiki/Favicon) are icons displayed in browser windows or tabs when viewing a given webpage, and they are usually associated with a specific company or software component. When threat actors reuse software between different servers, this sometimes leads to these servers also sharing the same favicon, which can be leveraged for pivoting.

####:octicons-arrow-right-24: Servers with similar content or visual appearance

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

####:octicons-arrow-right-24: Servers with the same URL path

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

??? example "Try it out"

	=== "URLScan (URL)"
		```
		TO DO
		```
	=== "URLScan (API)"
		``` console
		TO DO
		```

####:octicons-arrow-right-24: Servers with the same open ports

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

---

### Samples

####:octicons-arrow-right-24: Samples that reference it in their code

[samples](/artifacts/sample)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

??? example "Try it out"

	=== "VirusTotal (URL)"
		```
		TO DO
		```
	=== "VirusTotal (API)"
		``` console
		TO DO
		```

####:octicons-arrow-right-24: Samples that communicate with it at runtime

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

??? example "Try it out"

	=== "VirusTotal (URL)"
		```
		TO DO
		```
	=== "VirusTotal (API)"
		``` console
		TO DO
		```

####:octicons-arrow-right-24: Samples that it stores

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

??? example "Try it out"

	=== "VirusTotal (URL)"
		```
		TO DO
		```
	=== "VirusTotal (API)"
		``` console
		TO DO
		```

[^1]: [Hunting Cobalt Strike Servers](https://bank-security.medium.com/hunting-cobalt-strike-servers-385c5bedda7b)
[^2]: [Identifying Cobalt Strike team servers in the wild](https://blog.fox-it.com/2019/02/26/identifying-cobalt-strike-team-servers-in-the-wild/)