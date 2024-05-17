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
		classDef secondary stroke-dasharray: 5 5
		
		%% define nodes
		IP_ADDRESS(IP Address)
		SERVER(Server)
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
		SERVER -- stores --> SAMPLE
		TLS_CERT -- served by--> SERVER
		SAMPLE -- communicates --> SERVER
		SAMPLE -- references --> SERVER
	```
</div>

## Pivots

### [TLS Certificates](/artifacts/tls_certificate)

####:octicons-arrow-right-24: Certificates served by it

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

### [Servers](/artifacts/server)

####:octicons-arrow-right-24: Servers with the same banner

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

####:octicons-arrow-right-24: Servers with the same JA4+ fingerprint

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

####:octicons-arrow-right-24: Servers with the same JARM fingerprint

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

####:octicons-arrow-right-24: Servers with the same HHHash fingerprint

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

####:octicons-arrow-right-24: Servers with the same response banner

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

####:octicons-arrow-right-24: Servers with the same favicon

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

####:octicons-arrow-right-24: Servers with similar content or appearance

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

####:octicons-arrow-right-24: Servers with the same URL path

??? example "Try it out"

	=== "URLScan (URL)"
		```
		TO DO
		```
	=== "URLScan (API)"
		``` console
		TO DO
		```

####:octicons-arrow-right-24: Servers with the same visual appearance

??? example "Try it out"

	=== "URLScan (URL)"
		```
		TO DO
		```
	=== "URLScan (API)"
		``` console
		TO DO
		```

---

### [Samples](/artifacts/sample)

####:octicons-arrow-right-24: Samples that reference it in their code

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

??? example "Try it out"

	=== "VirusTotal (URL)"
		```
		TO DO
		```
	=== "VirusTotal (API)"
		``` console
		TO DO
		```