# Server

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :material-lightbulb-on:{ .lg .middle } __Definition__

    ---
	<span style="font-size:0.8em;">
	A server is an [IP address](/artifacts/ip-address) and port combination that serves an application to clients. Threat actors deploy these to host various parts of their infrastructure, such as phishing websites, repositories from which victim devices download malicious payloads, command and control servers to which malware connects for recieving commands, storage for exfiltrated data, and proxies for routing malicious traffic.
	</span>

-   :material-flower-tulip:{ .lg .middle } __Example__

    ---
	<span style="font-size:0.8em;">
    `8.8.8.8:80`
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		A("IP Address") -- hosts --> B("Server")
		C("Sample") -- communicates --> B
		C -- references --> B
		B <-- JA4+/JARM --> D("Server")
		B <-- banner --> D
		B <-- content/look --> D
		B <-- URL path --> D
		B -- stores --> C
		E("TLS Certificate") -- served by--> B
		click A "#ip-addresses"
		click C "#samples"
		click D "#servers"
		click E "#tls-certificates"
	```
</div>

## Pivots

### [TLS Certificates](/artifacts/tls_certificate)

####:octicons-arrow-right-24: Certificates served by it

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

### [Servers](/artifacts/server)

####:octicons-arrow-right-24: Other servers with the same JA4+ signature

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

=== "URLScan (URL)"
    ```
	TO DO
    ```
=== "URLScan (API)"
    ``` console
	TO DO
    ```

####:octicons-arrow-right-24: Other servers with the same visual appearance

=== "URLScan (URL)"
    ```
	TO DO
    ```
=== "URLScan (API)"
    ``` console
	TO DO
    ```

### [Samples](/artifacts/sample)

####:octicons-arrow-right-24: Samples that reference it in their code

=== "VirusTotal (URL)"
    ```
	TO DO
    ```
=== "VirusTotal (API)"
    ``` console
	TO DO
    ```

####:octicons-arrow-right-24: Samples that communicate with it at runtime

=== "VirusTotal (URL)"
    ```
	TO DO
    ```
=== "VirusTotal (API)"
    ``` console
	TO DO
    ```

####:octicons-arrow-right-24: Samples that it stores

=== "VirusTotal (URL)"
    ```
	TO DO
    ```
=== "VirusTotal (API)"
    ``` console
	TO DO
    ```