---
hide:
  - navigation
icon: material/target
title: Impact
---

#:material-target: Impact

This section discusses how analysts can utilize [artifacts](/artifacts) discovered during threat investigations in ways that are impactful. The items listed here are ranked according to their long-term impact, from least to most impactful (though low-impact activities often serve as building blocks for high-impact activities).

## Monitoring

Once an artifact has been identified and all immdediate pivoting opportunities have been exhausted, analysts can continue to monitor for new attacker activity related to the artifact, such as new domains registered with familiar registration details, or new samples communicating with a known domain at runtime (some ["malware zoo"](/tools/#malware-zoos) platforms lend themselves rather well to this kind of activity, such as VirusTotal's [Hunting](https://www.virustotal.com/gui/hunting-overview) feature, which notifies the user whenever a new sample is uploaded to VirusTotal's corpus that matches a given [YARA](https://virustotal.github.io/yara/) rule).

If the analyst's patience pays off, the original artifact (or set of artifacts) can become the core of a [threat activity cluster](https://vertex.link/blogs/what-is-a-threat-cluster/), which serves to surface additional malicious infrastructure and tooling. In other words, analysts can utilize artifacts by continuously pivoting off them (ideally via automation) in order to discover additional artifacts.

While monitoring is necessary, its real-world impact in and of itself is limited, since it has zero effect on an organization's defensive posture; artifacts must be **operationalized** in order to be impactful.

## Detection

One way to operationalize artifacts and fingerprints is to use them as IOCs in detection mechanisms such as those found in EDRs. This usually means building detection rules that check the reputation of a given file, IP address, domain, etc. against a list of known malicious artifacts, or building rules that check for content or behavior that matches those of such artifacts.

Some artifacts and fingerprints are more useful as IOCs than others — this has to do with the longevity and uniqueness of certain artifact types which makes them better suited for reliably detecting malicious activity. For more on this, be sure to look up [the Pyramid of Pain](https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html), also discussed [here](https://amitaico.substack.com/p/the-other-pyramids).

Beyond straight-forward detection rules, analysts can also study a threat actor's behavior and tooling to determine their goals and modus operandi (also known as TTPs). This can be useful for building more robust behavioral detection rules, as well as devising potential lures for deception purposes, such as [honeypots](https://en.wikipedia.org/wiki/Honeypot_(computing)) and decoy environments designed to take advantage of an actor's motivations. For example, if a threat actor is known to employ malware that scans infected hosts for cloud API keys, an analyst can set up a vulnerable Internet-facing honeypot containing an [AWS API canary token](https://docs.canarytokens.org/guide/aws-keys-token.html) in the hopes that the threat actor will compromise it, steal the token, and attempt to use it, thereby revealing their IP address to the analyst.

## Threat hunting

Beyond detection, analysts can also use artifacts and fingerprints for threat hunting purposes, by following up on detections and investigating further. Moreover, analysts can utilize low-confidence IOCs or TTPs by incorporating them in hunting rules (such IOCs might be considered unfit for production-grade detection rules on account of generating too many noisy false positives). By manually reviewing the results of such rules, analysts might discover semi-related threat activity and thereby surface new high-confidence IOCs.

## Prevention

Analysts can incorporate artifacts and fingerprints in blocking mechanisms, such as firewalls which block access from known malicious IP addresses (note that due to the dynamic nature of the IP address space, IP addresses should only be blocked for limited periods of time, since a malicious address will eventually change hands).

Additionally, analysts can study the behavior of attackers and their tooling, and operationalize their knowledge for prevention purposes. For instance, an understanding of the details of malicious activity can be translated into building runtime blocking mechanisms that limit the execution of processes that match known malicious behavioral patterns. Similarly, this knowledge can (indirectly) serve the development process of security controls for detecting risks exploited by threat actors, such as writing new [Nuclei templates](https://docs.projectdiscovery.io/templates/introduction) for identifying vulnerable or misconfigured servers.

The latter approach can be taken a step further by developing mitigations that block certain types of malicious behavior entirely, such as refactoring old code while switching to a memory-safe language in order to eliminate dangerous bug classes, or disabling highly abusable features (such as [blocking execution](https://learn.microsoft.com/en-us/deployoffice/security/internet-macros-blocked) of macros in Microsoft Office documents downloaded from the Internet).

## Sharing

Analysts can share information gleaned from an investigation with other analysts working at other organizations, or even include their findings in a public report as a way to share them with everyone (including threat actors, unfortunately, who will get the chance to learn from their mistakes and improve their operational security, making future detection more difficult).

Sharing information with other trusted analysts is mutually beneficial, since every organization has different (at times overlapping) visibility into threat activity, depending on their business sector and types of monitored environments, for example.

## Friction

(takedowns)

## Attribution

...

## Imposing cost

...