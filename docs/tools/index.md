---
hide:
  - navigation
icon: material/tools
title: Tools
---

#:material-tools: Tools

This section lists various tools and platforms that enable pivoting on a given artifact or fingerprint. Every tool on this list allows analysts to perform different types of pivots on different types of data, and analysts must usually utilize multiple tools in order to conduct a full-scale investigation.

This aspect of analysis is made evident in the comparison table below, which demonstrates that no single tool is sufficient for all types of pivots. Moreover, every platform is likely to contain slightly different data depending on its unique visibility and user base. Having said that, some platforms do offer more pivots than others, and [enrichment platforms](/tools/#enrichment) can serve as combo tools for querying multiple tools at once for any given artifact or fingerprint.

## Overview

{{ read_csv('tools.csv') }}

## Certificate data

### Registered certificates

Certificate transparency log aggregators such as [crt.sh](https://crt.sh/) allow querying for metadata related to registered TLS certificates.

### Observed certificates

Many host scanning tools provide certificate metadata sourced from the servers hosting them.

## Source code scanners

Source code repositories such as GitHub allow [querying for code snippets](https://github.com/search), which can be useful for identifying malware source code.

## WHOIS data

### WHOIS Lookup

Tools such as [DNSChecker](https://dnschecker.org/) allow querying for current WHOIS information about domains and IP addresses.

You can also use a [WHOIS CLI tool](https://www.arin.net/resources/registry/whois/rws/cli/) to perform lookups.

### WHOIS History

Platforms such as [Silent Push](https://silentpush.com/) retain WHOIS data, allowing analysts to query for historical registration information about domains and IP addresses. This can be useful when investigating long-term activity, during which time the threat actor is likely to have made various changes to their infrastructure.

## DNS data

### DNS

Tools such as [DNSChecker](https://dnschecker.org/) allow querying for current DNS resolutions for domains and IP addresses.

You can also use a CLI tool such as `dig` to perform DNS lookups (or use an online version such as [this one](https://toolbox.googleapps.com/apps/dig/)).

### DNS History

Platforms such as [Silent Push](https://silentpush.com/) retain DNS resolution data, allowing analysts to query for historical resolutions. This can be useful when investigating long-term activity, during which time the threat actor is likely to have made various changes to their infrastructure.

## Traffic aggregation

### Web traffic

Companies such as [Team Cymru](https://www.team-cymru.com/cyber-threat-hunting-tools) collect and aggregate netflow data from globally deployed sensors, allowing analysts to query their platform for any evidence of historical connections between IP addresses.

Additionally, platforms such as [SimilarWeb](https://www.similarweb.com/) aggregate information about client connections to websites, allowing analysts to query for traffic statistics relating to any given site's current or historical popularity in certain regions, as well as common redirections between websites.

Another source of traffic information about websites in particular is [urlscan.io](https://urlscan.io/), which allows analysts to check what servers a given website connects to in order to download data (such as JavaScript code), and what other websites it may be forwarding users to (this can be a useful pivot for surfacing relationships between phishing landing pages, hijacked websites and infection servers).

## Host scanners

Platforms such as [Censys](https://search.censys.io/), [Shodan](https://www.shodan.io/), and [Validin](https://www.validin.com/) regularly scan IP addresses to determine what servers they're hosting, allowing analysts to query for current or historical information in their scan databases.

## Honeypots

Analysts can set up purposely vulnerable honeypots to lure opportunistic threat actors to infect them, thereby revealing their tools, client IP addresses, etc.

Platforms such as [GreyNoise](https://www.greynoise.io/) operate global fleets of honeypots and allow analysts to query their database by client IP address, [user agent](/artifacts/user-agent/), and more.

## URL Scanners

Platforms such as [urlscan.io](https://urlscan.io/) allow analysts to perform scans of any website, and also query by URL for previously scanned sites.

## Malware zoos

### Sample repositories

Platforms such as [MalwareBazaar](https://bazaar.abuse.ch/) allow analysts to publicly share samples with the community. Analysts can query by [file hash](/fingerprints/#file-hash) and download any matching samples.

### Sandboxes

Platforms such as [any.run](https://any.run/) and [HybridAnalysis](https://www.hybrid-analysis.com/) allow analysts to upload samples for dynamic analysis, revealing their behavior, including process names they use, registry keys they create, DNS queries they perform, etc.

### Code similarity scanners

Platforms such as [Intezer Analyze](https://analyze.intezer.com/) and [VirusTotal](https://virustotal.com) allow analysts to upload samples, scan them, and check for [code similarity](/artifacts/sample/#samples-with-code-similarity-to-it) to other previously uploaded samples.

## Automation

### Enrichment

Enrichment tools such as [Yeti](https://yeti-platform.io/) often serve a dual purpose of knowledge management and automatic querying of metadata about artifacts.