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

For any given type of observable encountered during an investigation, analysts can use this handbook to figure out what steps they should take to reveal potentially related infrastructure or tooling. Every listed pivoting method can be performed using one or more platforms (depending on preference or availability), and query examples are provided for the most commonly used tools. Diagrams are also included for easy navigation between artifact types, for example:

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		IP_ADDRESS("IP Address") -- rDNS --> DOMAIN("Domain / Subdomain")
		IP_ADDRESS -- pDNS --> DOMAIN
		DOMAIN -- fDNS --> IP_ADDRESS
		IP_ADDRESS <-- ASN --> IP_ADDRESS_("IP Address")
		IP_ADDRESS <--> USER_AGENT("User Agent")
		USER_AGENT <--> IP_ADDRESS_
		IP_ADDRESS <-- Netflow --> IP_ADDRESS_
		IP_ADDRESS <-- WHOIS --> IP_ADDRESS_
		IP_ADDRESS -- hosts --> SERVER("Server")
		click IP_ADDRESS "artifacts/ip-address"
		click DOMAIN "artifacts/domain"
		click IP_ADDRESS_ "artifacts/ip-address"
		click SERVER "artifacts/server"
		click USER_AGENT "artifacts/user-agent"
	```
</div>

This project is a work in progress and cannot yet serve as a truly comprehensive guide to pivoting, but in time it could. If you would like to learn more about pivoting, I highly recommend checking out the [references section](/references). If you would like to contribute content to this project, please feel free to submit a pull request [here](https://github.com/korniko98/pivot-handbook).

## Frequently asked questions (FAQ)

### How should I use Pivot Atlas?
* To learn about recommended pivots, check out the items in the **Artifacts** section.
* To learn about useful artifact fingerprints, take a look at the **[Fingerprints](/fingerprints)** page.
* To learn about tools of the trade, head on over to the **[Tools](/tools)** page.

### What are the organizing principles of this website?
In graph terminology, I've chosen to use nodes to represent artifacts, meaning things that exist in reality (i.e., cyberspace), whereas pivots are represented as egdes between them. Similarly, fingerprints (such as JA4) are also represented as edges, since they can be considered higher-order abstractions of artifacts (whether lossy or lossless), rather than artifacts in and of themselves.

### What's the best way to contribute?
Submit publicly known examples of investigations demonstrating novel or creative pivots. You can either submit a pull request or simply add an issue to the GitHub project.