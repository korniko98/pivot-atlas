---
hide:
  - navigation
icon: material/information
---

#:material-information:About

## Introduction

Welcome to **Pivot Atlas**, an educational pivoting handbook for cyber threat intelligence analysts, containing simple reference material for how to make the best use of various threat activity observables, such as [IP addresses](/artifacts/ip-address) and [file hashes](/fingerprints#file-hash).

This website aims to map the **pivotability** of every type of artifact that analysts might encounter in the course of their investigations:

!!! quote ""
    <div class="word-flip">
		<span style="font-size:1.5em;font-style: italic;" id="word">"While investigating threat activity, I found </span>
		<span id="dynamic-word-container">
			<span style="font-size:1.5em;font-style: italic;" id="indefinite-article"></span>
			<span style="font-size:1.5em;" id="dynamic-word" class="animated-word"></span>
		</span>
		<span id="word-list" style="display: none;">
			domain,IP address,sample,file hash,certificate,user agent
		</span>
		<span style="font-size:1.5em;font-style: italic;">...what can I do with it?"</span>
	</div>
	
	<span style="font-size:1.1em;">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— You, possibly.
	</span>

For any given observable, analysts can use this handbook to figure out what steps they should take to reveal potentially related malicious infrastructure or tooling. Every listed pivoting method can be performed using one or more [tools](/tools) (depending on preference or which platforms you have access to), and query examples are provided for the most commonly used tools.

Diagrams are also included for easy and clickable navigation between artifact types, as in the following example or in the [full map](/map) (the diagram may take a few seconds to load in your browser if you're visiting this website for the first time):

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		classDef primary stroke-width: 2px
		classDef secondary stroke-dasharray: 5 5
		
		%% define nodes
		IP_ADDRESS(IP Address)
		DOMAIN(Domain):::primary
		DOMAIN_(Domain):::secondary
		TLS_CERT(TLS Certificate)
		SAMPLE(Sample)
		
		%% define edges
		DOMAIN -- fDNS --> IP_ADDRESS
		IP_ADDRESS -- rDNS ---> DOMAIN
		DOMAIN <-- DNS history --> IP_ADDRESS
		TLS_CERT -- CN ---> DOMAIN
		DOMAIN <-- similar name ---> DOMAIN_
		DOMAIN <-- registrant ---> DOMAIN_
		DOMAIN <-- registrar --> DOMAIN_
		DOMAIN <-- NS --> DOMAIN_
		DOMAIN <-- TLD --> DOMAIN_
		DOMAIN <-- reg. time --> DOMAIN_
		DOMAIN <-- URL path --> DOMAIN_
		SAMPLE -- references ---> DOMAIN
		
		%% define links
		click TLS_CERT "/artifacts/tls-certificate"
		click IP_ADDRESS "/artifacts/ip-address"
		click DOMAIN "/artifacts/domain"
		click SAMPLE "/artifacts/sample"
	```
</div>

## Frequently asked questions (FAQ)

### How should I use Pivot Atlas?
* To learn about recommended pivots for a given type of artifact, check out the **[Artifacts](/artifacts)** section.
* To learn about useful artifact fingerprints, take a look at the **[Fingerprints](/fingerprints)** section.
* To learn about various tools of the trade, head on over to the **[Tools](/tools)** section.

### What's the best way to contribute to this project?
You are welcome to submit information about publicly known examples of investigations demonstrating novel or creative pivots (or anything else you've noticed may be missing from this website). You can also review the "Future plans" section of [this blogpost](/updates/2024/05/13/hello-world/) for ideas on areas that require expansion or improvement. To contribute, you can either submit a pull request yourself or simply add an issue to the [GitHub project](https://github.com/korniko98/pivot-atlas/issues/new) (pull requests are preferred but issues are welcome).

### Where can I learn more about pivoting?
If you'd like to learn more about pivoting in cyber threat intelligence, be sure to check out the following resources:

* [Formulating a Robust Pivoting Methodology](https://pylos.co/wp-content/uploads/2021/02/pivoting.pdf) by [Joe Slowik](https://twitter.com/jfslowik)
* [Pivoting from Art to Science](https://www.youtube.com/watch?v=IhUJH_mgVVk) by [Joe Slowik](https://twitter.com/jfslowik)
* [A Cyber Threat Intelligence Self-Study Plan](https://medium.com/katies-five-cents/a-cyber-threat-intelligence-self-study-plan-part-2-d04b7a529d36) by [Katie Nickels](https://twitter.com/likethecoins)
* [A Beginner’s Guide to Tracking Malware Infrastructure](https://censys.com/a-beginners-guide-to-tracking-malware-infrastructure/) by [Embee Research](https://twitter.com/embee_research)

### Where can I learn more about offensive cyber operations?
If you'd like to learn more about how threat actors operate, the following books are an excellent place to start:

* [Network Attacks and Exploitation: A Framework](https://www.wiley.com/en-us/Network+Attacks+and+Exploitation%3A+A+Framework-p-9781118987124) by Matthew Monte
* [Attribution of Advanced Persistent Threats](https://link.springer.com/book/10.1007/978-3-662-61313-9) by [Timo Steffens](https://twitter.com/Timo_Steffens)

---

This project is a work in progress, but in time it might serve as a comprehensive guide to pivoting. If you would like to learn more about pivoting and cyber threat intelligence, please check out the references listed at the end of this page. If you would like to contribute content to this project, please feel free to reach out on [Twitter](https://twitter.com/AmitaiCo) or submit an issue or pull request [here](https://github.com/korniko98/pivot-atlas).