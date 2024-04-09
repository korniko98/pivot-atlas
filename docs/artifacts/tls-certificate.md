# TLS Certificate

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :material-lightbulb-on:{ .lg .middle } __Definition__

    ---
	<span style="font-size:0.8em;">
	An SSL/TLS certificate allows systems to verify the identity of another system and establish an encrypted network connection between them using the SSL/TLS protocol. Certificates are often represented using a [SHA1 or SHA256 fingerprint](/fingerprints#certificate-hash).
	</span>

-   :material-flower-tulip:{ .lg .middle } __Example__

    ---
	<span style="font-size:0.8em;">
     [`cd4c0fe2cb8a00edf4e97a22f550e080a8732b1666c7a16dc01be4ac0ccb2244`](https://crt.sh/?q=cd4c0fe2cb8a00edf4e97a22f550e080a8732b1666c7a16dc01be4ac0ccb2244) is the SHA1 hash of a certificate in use by `google.com` for a period of several weeks in 2024.
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		A("Server") -- serves --> B("TLS Certificate")
		B <-- domain--> E("TLS Certificate")
		B <-- authority--> E("TLS Certificate")
		B <-- time--> E("TLS Certificate")
		click A "#servers"
		click C "#samples"
		click D "#servers"
		click E "#tls-certificates"
	```
</div>

### Servers

#### Servers serving it

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

### Certificates

#### Other certificates with the same domain or subdomain names

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

#### Other certificates registered with the same authority

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

#### Other certificates registered in the same timeframe

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