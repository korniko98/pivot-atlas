# Server

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :material-lightbulb-on:{ .lg .middle } __Definition__

    ---
	A server is an [IP address](/artifacts/ip-address) and port combination that serves an application to clients.

-   :material-flower-tulip:{ .lg .middle } __Examples__

    ---
    `8.8.8.8:80`
	
	`1.2.3.4:443`
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart TD
		A("IP Address") -- hosts --> B("Server")
		C("Sample") -- communicates --> B
		C -- references --> B
		B -- JA4+ --> D("Server")
		B -- stores --> C
		B -- serves--> E("TLS Certificate")
		click A "#ip-addresses"
		click C "#samples"
		click D "#server"
		click E "#tls-certificates"
	```
</div>

## Pivots

### TLS Certificate

#### [Certificates](/artifacts/tls_certificate) served by it

=== "Shodan (URL)"
    ```
	https://www.shodan.io/host/{IP_ADDRESS}
    ```
=== "Shodan (API)"
    ``` console
	$ curl -X GET "https://api.shodan.io/shodan/host/{IP_ADDRESS}?key={YOUR_API_KEY}"
    ```
=== "Censys (URL)"
    ```
	TO DO
    ```
=== "Censys (API)"
    ``` console
	TO DO
    ```

### Servers

#### Other servers with the same [JA4+](/methods/ja4) signature

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

### Samples

####[Samples](/artifacts/sample) that reference it in their code

=== "VirusTotal (URL)"
    ```
	TO DO
    ```
=== "VirusTotal (API)"
    ``` console
	TO DO
    ```

####[Samples](/artifacts/sample) that communicate with it at runtime

=== "VirusTotal (URL)"
    ```
	TO DO
    ```
=== "VirusTotal (API)"
    ``` console
	TO DO
    ```

####[Samples](/artifacts/sample) that it stores

=== "VirusTotal (URL)"
    ```
	TO DO
    ```
=== "VirusTotal (API)"
    ``` console
	TO DO
    ```