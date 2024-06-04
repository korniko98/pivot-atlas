---
icon: material/bug
---

# :material-bug: Sample

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__

	<span style="font-size:0.9em;">
	A sample is a copy of a malicious file such as a malware component, which can be reverse engineered to discover how it works and to extract indicators of compromise (IOCs). Samples are often represented using their [SHA1, SHA256 or MD5 hash](/fingerprints#file-hash).
	</span>

-   :octicons-bug-16:{ .lg .middle } __Usecase__

	<span style="font-size:0.9em;">
    Threat actors use different types of malicious software for various purposes - these can include malware deployed on victim devices (e.g., for backdooring or cryptojacking), botnet management software installed on C&C servers, phishing infrastructure utilized on phishing landing pages, malicious scripts injected into hijacked webpages, and more.
	</span>
</div>

<div class="grid cards" markdown>
-   :octicons-eye-16:{ .lg .middle } __Example__

	<span style="font-size:0.9em;">
    [`88c8b472108e0d79d16a1634499c1b45048a10a38ee799054414613cc9dccccc`](https://www.virustotal.com/gui/file/88c8b472108e0d79d16a1634499c1b45048a10a38ee799054414613cc9dccccc) is the SHA-256 hash of a malware binary deployed on victim devices by the threat actor known as Black Basta.[^1]
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
		DOMAIN(Domain)
		SERVER([Server / Client])
		SAMPLE(Sample):::primary
		USER_AGENT(User Agent)
		SAMPLE_(Sample):::secondary
		CODE([Code])
		
		%% define edges

		SAMPLE -- references ---> IP_ADDRESS
		SERVER -. hosted by .-> IP_ADDRESS
		SERVER -- stores --> SAMPLE
		SAMPLE -- communicates ---> SERVER
		SAMPLE -- hash ---> SAMPLE_
		SAMPLE -- code similarity --> SAMPLE_
		SAMPLE -- behavior --> SAMPLE_

		SAMPLE -- references ---> DOMAIN
		SAMPLE -- queries ---> DOMAIN
		SAMPLE -- references --> USER_AGENT
		SAMPLE -- identifies as ---> USER_AGENT
		
		CODE -. compiles to ..-> SAMPLE
		
		%% define links
		click IP_ADDRESS "#ip-addresses"
		click DOMAIN "#domains"
		click SERVER "#servers"
		click SAMPLE_ "#samples"
		click USER_AGENT "#user-agents"
		click CODE "#source-code"
	```
</div>

!!! warning "Victim-side vs. attacker-side tooling"
	When pivoting on a file sample, one must consider where the threat actor is expected to use it. For instance, while malware is more likely to be found within victim networks, toolkits and botnet management software are almost certain to only be identified on attacker-controlled servers.

## Pivots

### Clients

####:octicons-arrow-right-24: Clients it can be found on

Samples of malware may be retrieved from infected clients by performing forensics, or through security product telemetry.

Conversely, samples of attacker-side toolkits can be found on threat actor machines (e.g., their laptops) and remote jump boxes they operate for connecting to servers or infected devices.

---

### Servers

####:octicons-arrow-right-24: Servers storing it

Attacker-controlled servers may store malware for victim devices to download during an infection process. Gaining access to such servers may therefore afford access to samples of the aforementioned malware.

####:octicons-arrow-right-24: Servers it communicates with at runtime

By executing a malware sample in a sandboxed environment, by observing malware that has infected a honeypot, or by analyzing security product telemetry sourced from an infected device, one can determine if the infected machine communicates with any IP addresses of attacker-controlled servers for C&C, data exfiltration, etc.

---

### Domains

####:octicons-arrow-right-24: Domains it references or queries

Threat actors often configure their malware to communicate with one or more C&C [servers](/artifacts/server), and this usually involves listing a domain within the malware's code (in such instances, the domain is said to be "hardcoded" in the malware).

When executed (on an infected device, honeypot, or in a sandboxed environment), the malware will send a DNS request to resolve the domain, and then communicate with the server hosted on the resolving IP address. By running a static analysis of the sample (even through something as simple as using [`strings`](https://learn.microsoft.com/en-us/sysinternals/downloads/strings)), one can reveal any such hardcoded domains it may contain.

<div class="grid cards" markdown>
-   :material-map-search:{ .lg .middle } __Pivot Minimap__
	```mermaid
	flowchart LR
		classDef primary stroke-width: 2px
		classDef secondary stroke-dasharray: 5 5
		classDef tool fill:#1433F7, stroke:#556CFF, fill-opacity:0.2
		classDef fingerprint fill:#02FF25, stroke:#02FF25, fill-opacity:0.2
		
		%% define nodes
		DOMAIN(Domain)
		SAMPLE(Sample):::primary
		sg1:::tool

		FILE_HASH[File Hash]:::fingerprint

		
		%% define edges
		SAMPLE -. hashed to .-> FILE_HASH
		FILE_HASH -- queried in --> sg2

		
		subgraph sg1 [Malware Zoo]
		subgraph sg2 [Database]
		SAMPLE_(Sample):::secondary
		end
		subgraph sg3 [Analysis]
		SANDBOX[Sandbox]
		STRINGS[Strings]
		end
		end
		SAMPLE -- uploaded to --> sg3
		SANDBOX -- queries --> DOMAIN
		STRINGS -- references --> DOMAIN
		SAMPLE_ -- relates to ---> DOMAIN
		
		%% define links
		click SAMPLE_ "#samples"
		click HASH "/fingerprints/#file-hash"
		click MALWARE_ZOO "/tools/#malware-zoos"
	```
</div>

---

### IP Addresses

####:octicons-arrow-right-24: IP addresses it references

By statically scanning a malware sample or reverse engineering it, analysts can identify server IP addresses that may be included in its source code, depending on how well the sample is [obfuscated](https://attack.mitre.org/techniques/T1027/).

---

### User Agents

####:octicons-arrow-right-24: User agents identifying it or referenced by it

Malware, attacker-side toolkits, and attacker-operated crawlers must identify as a specific [user agent](/artifacts/user-agent) if they communicate over HTTP/S (as a requirement of the protocol). While most threat actors will therefore configure their tools to use a prevalent user agent (or rotate between a set of common user agents) in order to blend in with background noise, at times they might make the mistake of using a unique user agent (perhaps as result of a typo) or a nonsensical one (such as a machine identifying as an iPhone but fingerprinted as an IoT device). In such cases, the combination of user agent and other parameters might be uniquely identifiable enough to be used as an effective indicator for discovering infected clients or attacker-controlled infrastructure.

By observing a given sample in a sandboxed environment, honeypot, infected device, or via security product telemetry, analysts can identify which user agents it identifies as. Similarly, analysts can reveal such user agents through static analysis or reverse engineering of the sample, depending on its level of obfuscation.

---

### Samples

####:octicons-arrow-right-24: Samples with same hash

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

####:octicons-arrow-right-24: Samples with code similarity to it

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

####:octicons-arrow-right-24: Samples with overlapping behavior

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

####:octicons-arrow-right-24: Samples with overlapping observables

Malware is not often deployed as a single file on the disk of an infected device, but rather leaves traces in multiple locations, such as files in certain paths, registry keys, process names, etc. By observing an infected device, sandbox, honeypot, or by checking security product telemetry, an analyst can identify such traces and leverage them to detect other instances of the same sample, or variants of it.

Given a sample, analysts can use ["malware zoo"](/tools/#malware-zoos) platforms such as [VirusTotal](https://virustotal.com) to query for any such previously encountered samples, usually using [YARA rules](https://virustotal.github.io/yara/) for this purpose.

---

### Source Code

####:octicons-arrow-right-24: Code which compiles to it

If a threat actor is using an open-source tool that isn't unique to their own operations, its source code is likely to be available in a code repository.

Conversely, source code for proprietary tools can be found on attacker-controlled machines, and is sometimes published online as a result of hack-and-leak operations oconducted against the threat actor, or following internal disputes within threat actor groups.

[^1]: [#StopRansomware: Black Basta](https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-131a)