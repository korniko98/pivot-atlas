# Sample

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__


    ---
	<span style="font-size:0.9em;">
	A file sample ... samples are often represented using a [SHA1, SHA256 or MD5 hash](/fingerprints#file-hash).
	</span>

-   :octicons-bug-16:{ .lg .middle } __Usecase__

    ---
	<span style="font-size:0.9em;">
    Threat actors use malware for ...
	</span>
</div>

<div class="grid cards" markdown>
-   :octicons-eye-16:{ .lg .middle } __Example__

    ---
	<span style="font-size:0.9em;">
    [`88c8b472108e0d79d16a1634499c1b45048a10a38ee799054414613cc9dccccc`](https://www.virustotal.com/gui/file/88c8b472108e0d79d16a1634499c1b45048a10a38ee799054414613cc9dccccc) is the SHA-256 hash of a malware binary used by the threat actor known as Black Basta.[^1]
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		SERVER("Server") -- stores --> SAMPLE("Sample")
		SAMPLE -- hash --> SAMPLE_("Sample")
		SAMPLE -- uses --> USER_AGENT("User Agent")
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

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

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

[^1]: [#StopRansomware: Black Basta](https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-131a)