---
hide:
  - navigation
---

# Fingerprints

!!! warning "Under Construction"

In order to make threat intel sharing easier and analysis more practical, reports and feeds rely on fingerprinting as a sort of shorthand for representing artifacts. These fingerprints are commonly refered to as IOCs, short for "Indicators of Compromise".

Some fingerprints are "lossless", in the sense that they are a one-to-one representation of a single specific artifact, while others are "lossy", in the sense that they might represent a specific aspect of many different artifacts.

Additionally, some fingerprints are are considered [fuzzy](https://en.wikipedia.org/wiki/Fuzzy_hashing), meaning that similar artifacts have similar fingerprints (e.g., two files that differ by only one byte will have nearly identical [ssdeep](https://ssdeep-project.github.io/ssdeep/index.html) hashes).

## File Hash

[File samples](/artifacts/sample) can be hashed using various methods, the most common of which are [SHA1](https://en.wikipedia.org/wiki/SHA-1), [SHA256](https://en.wikipedia.org/wiki/SHA-2) (SHA-2 with a digest size of 256 bits) and [MD5](https://en.wikipedia.org/wiki/MD5). Additionally, files are sometimes hashed using fuzzy hashing algorithms such as CTPH (short for "Context Triggered Piecewise Hash"), commonly implemented by a tool called [ssdeep](https://ssdeep-project.github.io/ssdeep/index.html).

Threat intel practitioners use file hashes as one-to-one representations of specific files (while mostly ignoring the possibility of hash collisions).

## Certificate Hash

[TLS certificates](/artifacts/tls-certificate) can be hashed using various methods, the most common of which are SHA1 and SHA256.

## HHHash Fingerprint

[HTTP Headers Hashing](https://www.foo.be/2023/07/HTTP-Headers-Hashing_HHHash) is a technique used to create a fingerprint of an HTTP [server](/artifacts/server) based on the headers it returns.

## JA4+ Fingerprints

[JA4+](https://medium.com/foxio/ja4-network-fingerprinting-9376fe9ca637) is a set of methods for fingerprinting SSL/TLS clients and [servers](/artifacts/server), that builds upon its previous iterations, [JA3 and JA3S](https://engineering.salesforce.com/tls-fingerprinting-with-ja3-and-ja3s-247362855967/).

## JARM Fingerprint

[JARM](https://engineering.salesforce.com/easily-identify-malicious-servers-on-the-internet-with-jarm-e095edac525a/) is an active TLS [server](/artifacts/server) fingerprinting tool (named after the first letters of its inventors' names)