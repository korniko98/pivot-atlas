---
hide:
  - navigation
icon: material/tools
---

#:material-tools:Tools

!!! warning "Under Construction"

This section lists various tools and platforms that enable pivoting. Every tool allows analysts to perform different types of pivots on different types of data, and analysts must usually utilize multiple tools in order to conduct full-scale investigations. This aspect of analysis can be observed in the comparison table below, which demonstrates that no single tool is sufficient for all types of pivots.

## Overview

{{ read_csv('tools.csv') }}

## Certificate metadata

### Registered certificates

Certificate transparency log aggregators such as [crt.sh](https://crt.sh/) allow querying for metadata related to registered TLS certificates.

### Observed certificates

Many host scanning tools provide certificate metadata sourced from the servers hosting them.

## Source code scanners

Source code repositories such as GitHub allow [querying for code snippets](https://github.com/search), which can be useful for identifying malware source code.

## DNS data

### WHOIS Lookup

[...]

### DNS History / Passive DNS

[...]

## Traffic aggregation

### Netflow

[...]

### Web traffic

[...]

## Host scanners

[...]

## Honeypots

[...]

## URL Scanners

[...]

## Malware zoos

### Sample repositories

[...]

### Sandboxes

[...]

### Code similarity scanners

[...]

## Automation

### Enrichment

Enrichment tools such as [Yeti](https://yeti-platform.io/) often serve a dual purpose of knowledge management and automatic querying of metadata about artifacts.