# Sample

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
		SERVER(Server)
		SAMPLE(Sample):::primary
		USER_AGENT(User Agent)
		SAMPLE_(Sample):::secondary
		
		%% define edges
		SERVER -- stores --> SAMPLE
		SAMPLE -- communicates --> SERVER
		SAMPLE -- references --> SERVER
		SAMPLE -- hash --> SAMPLE_
		SAMPLE -- code similarity --> SAMPLE_
		SAMPLE -- behavior --> SAMPLE_
		SAMPLE -- references --> DOMAIN
		SAMPLE -- references --> IP_ADDRESS
		SAMPLE -- uses --> USER_AGENT
		
		%% define links
		click IP_ADDRESS "#ip-addresses"
		click DOMAIN "#domains"
		click SERVER "#servers"
		click SAMPLE_ "#samples"
		click USER_AGENT "#user-agents"
	```
</div>

!!! warning "Victim-side vs. attacker-side tooling"
	When pivoting on a file sample, one must consider where the threat actor is expected to use it. For instance, while malware is more likely to be found within victim networks, toolkits and botnet management software are almost certain to only be identified on attacker-controlled servers.

## Pivots

### Servers

####:octicons-arrow-right-24: Servers serving it

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

####:octicons-arrow-right-24: Servers it communicates with at runtime

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

####:octicons-arrow-right-24: Servers it references

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

---

### Domains

####:octicons-arrow-right-24: Domains it references

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

---

### IP Addresses

####:octicons-arrow-right-24: IP addresses it references

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

---

### User Agents

####:octicons-arrow-right-24: User agents it uses

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

---

### Samples

####:octicons-arrow-right-24: Samples with the same hash

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

####:octicons-arrow-right-24: Samples with code similarity to it

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

####:octicons-arrow-right-24: Samples with overlapping behavior

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

[^1]: [#StopRansomware: Black Basta](https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-131a)