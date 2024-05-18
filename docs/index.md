---
hide:
  - navigation
icon: material/information
---

#:material-information:About

## Introduction

Welcome to **Pivot Atlas**, a pivoting handbook for cyber threat intelligence analysts, containing simple reference material for how to make the best use of various threat activity observables, such as [IP addresses](/artifacts/ip-address) and [file hashes](/fingerprints#file-hash).

!!! quote ""
    <div class="word-flip">
		<span style="font-size:1.5em;font-style: italic;" id="word">"While investigating threat activity, I found </span>
		<span id="dynamic-word-container">
			<span style="font-size:1.5em;font-style: italic;" id="indefinite-article"></span>
			<span style="font-size:1.5em;" id="dynamic-word" class="animated-word"></span>
		</span>
		<span id="word-list" style="display: none;">
			phishing domain,IP address,malware sample,file hash,TLS certificate,user agent
		</span>
		<span style="font-size:1.5em;font-style: italic;">...what can I do with it?"</span>
	</div>
	
	<span style="font-size:1.1em;">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— You, probably.
	</span>

For any given type of observable encountered during an investigation, analysts can use this handbook to figure out what steps they should take to reveal potentially related infrastructure or tooling. Every listed pivoting method can be performed using one or more [tools](/tools) (depending on your preference or which tools you have access to), and query examples are provided for the most commonly used tools. Diagrams are also included for easy and clickable navigation between artifact types, as in the following example or in the [full map](/map) (the diagram may take a few seconds to load in your browser if you're visiting this website for the first time):

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		classDef secondary stroke-dasharray: 5 5
		
		%% define nodes
		IP_ADDRESS(IP Address)
		IP_ADDRESS_(IP Address):::secondary
		DOMAIN(Domain)
		SERVER(Server)
		SAMPLE(Sample)
		USER_AGENT(User Agent)
		
		%% define edges
		DOMAIN -- resolves --> IP_ADDRESS
		IP_ADDRESS -- rDNS --> DOMAIN
		IP_ADDRESS -- prev. resolved --> DOMAIN
		IP_ADDRESS <-- ASN --> IP_ADDRESS_
		IP_ADDRESS -- uses --> USER_AGENT
		IP_ADDRESS <-- Netflow --> IP_ADDRESS_
		IP_ADDRESS <-- WHOIS --> IP_ADDRESS_
		SERVER -- hosted by --> IP_ADDRESS
		SAMPLE -- references --> IP_ADDRESS
		
		%% define links
		click IP_ADDRESS "/artifacts/ip-address"
		click DOMAIN "/artifacts/domain"
		click SERVER "/artifacts/server"
		click SAMPLE "/artifacts/sample"
		click USER_AGENT "/artifacts/user-agent"
	```
</div>

This project is a work in progress, but in time I hope it can serve as a comprehensive guide to pivoting. If you would like to learn more about pivoting and cyber threat intelligence, I highly recommend checking out the references listed at the end of this page. If you would like to contribute content to this project, please feel free to submit a pull request [here](https://github.com/korniko98/pivot-atlas).

## Frequently asked questions (FAQ)

### How should I use Pivot Atlas?
* To learn about recommended pivots, check out the items in the **[Artifacts](/artifacts)** section.
* To learn about useful artifact fingerprints, take a look at the **[Fingerprints](/fingerprints)** section.
* To learn about various tools of the trade, head on over to the **[Tools](/tools)** section.

### What's the best way to contribute to this project?
Submit information about publicly known examples of investigations demonstrating novel or creative pivots (or anything else you've noticed may be missing from this website). I also recommend reviewing the "Future plans" section of [this blogpost](/updates/2024/05/13/hello-world/) for ideas on other areas I'd like to expand or improve. To contribute, you can either submit a pull request yourself or simply add an issue to the GitHub project (pull requests are preferred but issues are welcome).

### Where can I learn more about pivoting?
If you'd like to learn more about pivoting in cyber threat intelligence, be sure to check out the following resources:

* [Formulating a Robust Pivoting Methodology](https://pylos.co/wp-content/uploads/2021/02/pivoting.pdf) by [Joe Slowik](https://twitter.com/jfslowik)
* [Pivoting from Art to Science](https://www.youtube.com/watch?v=IhUJH_mgVVk) by [Joe Slowik](https://twitter.com/jfslowik)
* [A Cyber Threat Intelligence Self-Study Plan](https://medium.com/katies-five-cents/a-cyber-threat-intelligence-self-study-plan-part-2-d04b7a529d36) by [Katie Nickels](https://twitter.com/likethecoins)
* [A Beginner’s Guide to Tracking Malware Infrastructure](https://censys.com/a-beginners-guide-to-tracking-malware-infrastructure/) by [Embee Research](https://twitter.com/embee_research)

### Where can I learn more about offensive cyber operations?
If you'd like to learn more about how threat actors operate, I recommend reading the following books:

* [Network Attacks and Exploitation: A Framework](https://www.wiley.com/en-us/Network+Attacks+and+Exploitation%3A+A+Framework-p-9781118987124) by Matthew Monte
* [Attribution of Advanced Persistent Threats](https://link.springer.com/book/10.1007/978-3-662-61313-9) by [Timo Steffens](https://twitter.com/Timo_Steffens)