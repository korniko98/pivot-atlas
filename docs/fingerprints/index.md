---
hide:
  - navigation
icon: material/fingerprint
title: Fingerprints
---

#:material-fingerprint: Fingerprints

In order to make threat intel sharing easier and analysis more practical, reports and feeds rely on fingerprinting as a sort of shorthand for representing artifacts. These fingerprints are commonly refered to as IOCs, short for "Indicators of Compromise".

Some fingerprints are "lossless", in the sense that they are a one-to-one representation of a single specific artifact, while other fingerprints are "lossy", in the sense that they might represent a one-to-many representation of different artifacts with some common property.

Additionally, some fingerprints are are considered [fuzzy](https://en.wikipedia.org/wiki/Fuzzy_hashing), meaning that similar artifacts have similar fingerprints (e.g., two files that differ by only one byte will have nearly identical [ssdeep](https://ssdeep-project.github.io/ssdeep/index.html) hashes).

## File Hash

[File samples](/artifacts/sample) can be hashed using various methods, the most common of which are [SHA-1](https://en.wikipedia.org/wiki/SHA-1), [SHA-256](https://en.wikipedia.org/wiki/SHA-2) (SHA-2 with a digest size of 256 bits) and [MD5](https://en.wikipedia.org/wiki/MD5). Additionally, files are sometimes hashed using fuzzy hashing algorithms such as CTPH (short for "Context Triggered Piecewise Hash"), commonly implemented by a tool called [ssdeep](https://ssdeep-project.github.io/ssdeep/index.html).

Threat intel practitioners use file hashes as one-to-one representations of specific malicious files (while mostly ignoring the possibility of hash collisions).

## Certificate Hash

[TLS certificates](/artifacts/tls-certificate) can be hashed using various methods, the most common of which are SHA-1 and SHA-256.

Much like file hashes, threat intel practitioners use certificate hashes as one-to-one representations of specific certificates.

## JA4+ Fingerprints

[JA4+](https://medium.com/foxio/ja4-network-fingerprinting-9376fe9ca637) is a set of methods for fingerprinting various types of clients and servers hosted on [IP addresses](/artifacts/ip-address) based on specific aspects of the network traffic they generate. JA4+ builds upon its previous iterations, [JA3 and JA3S](https://engineering.salesforce.com/tls-fingerprinting-with-ja3-and-ja3s-247362855967/) (originally named after the first letters of its inventors' names).

## JARM Fingerprint

[JARM](https://engineering.salesforce.com/easily-identify-malicious-servers-on-the-internet-with-jarm-e095edac525a/) is an active TLS server fingerprinting tool (also named after the first letters of its inventors' names). JARM is "active" in the sense that it involves sending multiple TLS Client Hello packets to a target server and recording certain attributes of the resulting TLS Server Hello responses, which are then hashed.

## HHHash Fingerprint

[HTTP Headers Hashing](https://www.foo.be/2023/07/HTTP-Headers-Hashing_HHHash) is a technique used to create a fingerprint of an HTTP server based on the headers it returns.

## IP Address Feature Vector

[IP similarity](https://www.greynoise.io/blog/how-we-built-ip-similarity) is a method developed by [Greynoise](https://www.greynoise.io/) to measure similarity between different IP addresses by calculating a vector of certain features (such as which user agents identify any clients connecting from the IP address, which ports they scan for on other servers, and which URL paths they enumerate).