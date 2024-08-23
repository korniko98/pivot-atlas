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

JA4+ Fingerprints:
- JA4 is the TLS Client fingerprint. It is based on the TLS Client Hello packet.
- JA4Server (JA4S) is the TLS Server/Session fingerprint. It is based on the TLS Server Hello packet.
- JA4HTTP (JA4H) is the HTTP Client fingerprint. It is based on the HTTP request sent by a client.
- JA4Latency (JA4L) is the Light Distance/Location fingerprint. The distance is measured by looking at the latency between packets at session setup.
- JA4X509 (JA4X) is the X509 TLS Certificate fingerprint. It fingerprints how a certificate is created.
- JA4SSH is the SSH Traffic fingerprint. It fingerprints SSH sessions by looking at SSH packets.
- JA4TCP (JA4T) is a passive TCP Client fingerprint. It is based on the client’s TCP SYN packet.
- JA4TCPServer (JA4TS) is a passive TCP Server Response fingerprint. It is based on the SYN-ACK response of a server.
- JA4TCPScan (JA4TScan) is the active TCP Server fingerprint.

A more detailed explanation of the JA4+ fingerprints can be found in the FoxIO blog posts regarding [JA4+ Network Fingerprinting](https://blog.foxio.io/ja4+-network-fingerprinting) and [JA4T: TCP Fingerprinting](https://blog.foxio.io/ja4t-tcp-fingerprinting).


## JARM Fingerprint

[JARM](https://engineering.salesforce.com/easily-identify-malicious-servers-on-the-internet-with-jarm-e095edac525a/) is an active TLS server fingerprinting tool (also named after the first letters of its inventors' names). JARM is "active" in the sense that it involves sending multiple TLS Client Hello packets to a target server and recording certain attributes of the resulting TLS Server Hello responses, which are then hashed.

## HHHash Fingerprint

[HTTP Headers Hashing](https://www.foo.be/2023/07/HTTP-Headers-Hashing_HHHash) is a technique used to create a fingerprint of an HTTP server based on the headers it returns.

## IP Address Feature Vector

[IP similarity](https://www.greynoise.io/blog/how-we-built-ip-similarity) is a method developed by [Greynoise](https://www.greynoise.io/) to measure similarity between different IP addresses by calculating a vector of certain features (such as which user agents identify any clients connecting from the IP address, which ports they scan for on other servers, and which URL paths they enumerate).

## HASSH

[HASSH](https://engineering.salesforce.com/open-sourcing-hassh-abed3ae5044c/), developed by Ben Reardon, is a fingerprinting technique used to identify specific Client (hassh) and Server (hasshServer) SSH implementations. HASSH combines Key Exchange methods, Encryption, Message Auth, and Compression algorithms from the `SSH_MSG_KEXINIT` packets to create hassh and hasshServer.

## HTML Response Body Hash

It is possible to create a [SHA-1](https://en.wikipedia.org/wiki/SHA-1), [SHA-256](https://en.wikipedia.org/wiki/SHA-2) and [MD5](https://en.wikipedia.org/wiki/MD5) fingerprint based on the HTML Server Response Body Hash. The fingerprint can serve as a good pivot point if the HTML response body is unique enough. It is possible to search the fingerprint on the [host scanners](https://gopivot.ing/tools/) platforms. This [research](https://www.embeeresearch.io/amadey-bot-infrastructure/) by Embee Research illustrates one possible example of its use.
