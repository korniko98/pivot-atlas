# Sample

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__


    ---
	<span style="font-size:0.9em;">
	A file sample ... Certificates are often represented using a [SHA1, SHA256 or MD5 hash](/fingerprints#file-hash).
	</span>

-   :octicons-eye-16:{ .lg .middle } __Example__

    ---
	<span style="font-size:0.9em;">
    [`cd4c0fe2cb8a00edf4e97a22f550e080a8732b1666c7a16dc01be4ac0ccb2244`](https://crt.sh/?q=cd4c0fe2cb8a00edf4e97a22f550e080a8732b1666c7a16dc01be4ac0ccb2244) is the SHA1 hash of a malware binary known as ...
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		SERVER("Server") -- serves --> SAMPLE("Sample")
		SAMPLE -- hash --> SAMPLE_("Sample")
		SAMPLE -- code similarity --> SAMPLE_
		SAMPLE -- references --> DOMAIN("Domain")
		SAMPLE -- references --> IP_ADDRESS("IP Address")
		click SERVER "#servers"
		click SAMPLE "#samples"
		click DOMAIN "#domains"
		click IP_ADDRESS "#ip-addresses"
	```
</div>

### Servers

####:octicons-arrow-right-24: Servers serving it

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