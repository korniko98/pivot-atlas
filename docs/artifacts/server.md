# Server

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__

    ---
	<span style="font-size:0.9em;">
	A server is an [IP address](/artifacts/ip-address) and port combination that serves an application to clients. Threat actors deploy these to host various parts of their infrastructure, such as phishing websites, repositories from which victim devices download malicious payloads, command and control servers to which malware connects for recieving commands, storage for exfiltrated data, and proxies for routing malicious traffic.
	</span>

-   :octicons-eye-16:{ .lg .middle } __Example__

    ---
	<span style="font-size:0.9em;">
    `8.8.8.8:80`
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		IP_ADDRESS("IP Address") -- hosts --> SERVER("Server")
		SAMPLE("Sample") -- communicates --> SERVER
		SAMPLE -- references --> SERVER
		SERVER <-- JA4+/JARM --> SERVER_("Server")
		SERVER <-- banner --> SERVER_
		SERVER <-- favicon --> SERVER_
		SERVER <-- content/look --> SERVER_
		SERVER <-- URL path --> SERVER_
		SERVER -- stores --> SAMPLE
		TLS_CERT("TLS Certificate") -- served by--> SERVER
		click IP_ADDRESS "#ip-addresses"
		click SAMPLE "#samples"
		click SERVER_ "#servers"
		click TLS_CERT "#tls-certificates"
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

####:octicons-arrow-right-24: Other servers with the same JA4+ signature

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

####:octicons-arrow-right-24: Other servers with the same response banner

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

####:octicons-arrow-right-24: Other servers with the same favicon

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

####:octicons-arrow-right-24: Other servers with the same content

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

####:octicons-arrow-right-24: Other servers with the same URL path

??? example "Try it out"

	=== "URLScan (URL)"
		```
		TO DO
		```
	=== "URLScan (API)"
		``` console
		TO DO
		```

####:octicons-arrow-right-24: Other servers with the same visual appearance

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