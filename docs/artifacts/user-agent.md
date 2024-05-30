# User Agent

!!! warning "Under Construction"

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__

	<span style="font-size:0.9em;">
	The `User-Agent` request header in HTTP/S communication allows servers to identify various properties of the client, such as what operating system and browser they're using.
	</span>

-   :octicons-bug-16:{ .lg .middle } __Usecase__

	<span style="font-size:0.9em;">
    Threat actors often configure their tools to use common user agents in order to blend in with legitimate communications, but they sometimes make mistakes such as typos or choosing a nonsensical user agent, which can allow detection and pivoting (e.g., an infected Linux machine using a Windows user agent).
	</span>
</div>

<div class="grid cards" markdown>
-   :octicons-eye-16:{ .lg .middle } __Example__

	<span style="font-size:0.9em;">
    ... is a user-agent typical of ...
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
		SAMPLE(Sample)
		CLIENT([Client])
		USER_AGENT(User Agent):::primary
		USER_AGENT_(User Agent):::secondary
		
		%% define edges
		IP_ADDRESS -. hosts .-> CLIENT
		CLIENT -- uses --> USER_AGENT
		USER_AGENT <-- similar ---> USER_AGENT_
		SAMPLE -- uses --> USER_AGENT
		
		%% define links
		click IP_ADDRESS "#ip-addresses"
		click SAMPLE "#samples"
		click USER_AGENT_ "#user-agents"
	```
</div>

!!! warning "Unique user agents"
	In some cases, client behavior can indeed be pivoted upon between different IP addresses based on shared user agents or certain commonalities between them. However, this is usually considered a relatively weak correlation, since the same user agent could have legitimate uses as well, unless its unique in some way. Identifying such unique attributes or combinations of attributes is one of the many challenges of analysis.

## Pivots

### IP Addresses

!!! abstract inline end "Example"

	Obsidian Security identified a malicious residential proxy network in which the threat actor had configured their malware to use an outdated Chrome user agent from 2019, which is rare enough as of 2024 to be a strong indicator.[^1]

####:octicons-arrow-right-24: Addresses of clients identifying as it

Various components of malicious activity involve clients identifying as certain user agents. This includes devices infected with malware, machines running attacker-side toolkits, as well as machines running crawlers and scanners.

&nbsp;

&nbsp;

---

### Samples

####:octicons-arrow-right-24: Samples identifying as it or referencing it

Malware, attacker-side toolkits, and attacker-operated crawlers must identify as a specific [user agent](/artifacts/user-agent) if they communicate over HTTP/S (as a requirement of the protocol). While most threat actors will therefore configure their tools to use a prevalent user agent (or rotate between a set of common user agents) in order to blend in with background noise, at times they might make the mistake of using a unique user agent (perhaps as result of a typo) or a nonsensical one (such as an IoT device identifying as an iPhone). In such cases, the combination of user agent and other parameters might be uniquely identifiable enough to be used as an effective indicator for discovering infected clients or attacker-controlled infrastructure.

Given a user agent, analysts can use ["malware zoo"](/tools/#malware-zoos) platforms such as [VirusTotal](https://virustotal.com) to query for any previously encountered samples identifying as it or referencing it in their code.

---

### User Agents

####:octicons-arrow-right-24: User agents similar to it

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar.

[^1]: [Emerging Identity Threats: The Muddy Waters of Residential Proxies](https://www.obsidiansecurity.com/blog/emerging-identity-threats-the-muddy-waters-of-residential-proxies/)