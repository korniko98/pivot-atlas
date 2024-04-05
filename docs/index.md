# About

## Introduction

Welcome to **Pivot Atlas**, a pivoting handbook for cyber threat intelligence analysts, containing simple reference material for how to make the best use of various threat activity observables, such as [IP addresses](/artifacts/ip-address) and [file hashes](/fingerprints#file-hash).

!!! example ""
    <div class="word-flip">
		<span style="font-size:1.5em;font-style: italic;" id="word">"While investigating threat activity, I found </span>
		<span id="dynamic-word-container">
			<span style="font-size:1.5em;font-style: italic;" id="indefinite-article"></span>
			<span style="font-size:1.5em;" id="dynamic-word" class="animated-word"></span>
		</span>
		<span id="word-list" style="display: none;">
			phishing domain,IP address,malware sample,file hash,TLS certificate,user agent
		</span>
	</div>
	<div style="text-align: right;">
	<span align="center" style="font-size:1.5em;font-style: italic;">...what can I do with it?"</span>
	</div>
	<span style="font-size:1.1em;">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— You, probably.
	</span>

For any given type of observable encountered during an investigation, analysts can use this handbook to figure out what steps they should take to reveal potentially related infrastructure or tooling. Every listed pivoting method can be performed using one or more platforms (depending on preference or availability), and query examples are provided for the most commonly used tools. Diagrams are also provided for easy navigation between artifact types, for example:

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		A("IP Address") -- rDNS --> B("Domain / Subdomain")
		A -- pDNS --> B
		B -- fDNS --> A
		A <-- ASN --> C("IP Address")
		A <--> E("User Agent")
		E <--> C
		A <-- Netflow --> C
		A -- hosts --> D("Server")
		click A "artifacts/ip-address"
		click B "artifacts/domain"
		click C "artifacts/ip-address"
		click D "artifacts/server"
		click E "artifacts/user-agents"
	```
</div>

This project is a work in progress and cannot yet serve as a truly comprehensive guide to pivoting, but in time it could. If you would like to learn more about pivoting, I highly recommend checking out the [references section](/references). If you would like to contribute content to this project, please feel free to submit a pull request [here](https://github.com/korniko98/pivot-handbook).

## How do I use this?

* To learn about recommended pivots, check out the items in the **Artifacts** section.
* To learn about useful artifact fingerprints, take a look at the **[Fingerprints](/fingerprints)** page.
* To learn about tools of the trade, head on over to the **[Tools](/tools)** page.