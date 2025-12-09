---
icon: material/github
title: GitHub User
---

# :material-github: GitHub User

## Overview

<div class="grid cards" markdown>
-   :octicons-book-16:{ .lg .middle } __Definition__

	<span style="font-size:0.9em;">
	A GitHub user is an account with its own profile, capable of contributing to repositories, collaborating across projects, and optionally associating with organizations.
	</span>

-   :octicons-bug-16:{ .lg .middle } __Usecase__

	<span style="font-size:0.9em;">
    Threat actors may create or hijack GitHub users in order to abuse GitHub for malware storage or C2. They can also compromise GitHub repositories by exploiting vulnerabilities such as Pwn Requests. Legitimate GitHub users can also be victims of malicious activity targeting their own accounts.
	</span>
</div>

<div class="grid cards" markdown>
-   :octicons-eye-16:{ .lg .middle } __Example__

	<span style="font-size:0.9em;">
    https://github.com/JiaT75 is the GitHub user of "Jia Tan", a sockpuppet account that infiltrated the XZ Utils project in order to backdoor it as part of a supply chain attack.[^1]
	</span>
</div>

<div class="grid cards" markdown>
-   :material-globe-model:{ .lg .middle } __Pivot Map__
	```mermaid
	flowchart LR
		classDef primary stroke-width: 2px
		classDef secondary stroke-dasharray: 5 5
		
		%% define nodes
	    USER(User):::primary
	    USER_(User):::secondary
	    EMAIL(User Email)
	    EMAIL_(noreply Email)
	    ORG(Organization)
	    COMMIT(Commit)
	    REPO(Repository)
	    REPO_(Repository):::secondary
	    BRANCH(Branch)
	    COMMIT_(Commit):::secondary
	    KEY(Key)
	    KEY_(Key)
	    PR(Pull Request)
	    FORK(Fork)
		
		%% define edges
	    USER -- created --> REPO
	    USER -- similar name --> USER_
	    USER -- similar image --> USER_
	    USER -- made --> COMMIT
	    USER -- created / commited to --> BRANCH
	    USER -- forked --> FORK
	    USER -- uses --> KEY_
	    USER -- opened / reviewed --> PR
	    EMAIL_ -- contains --> USER_
	    EMAIL -- listed by ---> COMMIT_
	    BRANCH -- in --> REPO
	    FORK -- of --> REPO
	    COMMIT -- lists --> EMAIL
	    COMMIT -- lists --> EMAIL_
	    COMMIT -- signed by ---> KEY
	    KEY -- signed ---> COMMIT_
	    KEY_ -- used by --> USER_
	    COMMIT_ --made by --> USER_
	    PR -- to --> REPO
	    REPO -- owned by ---> ORG
	    REPO -- similar metadata / content --> REPO_
	    USER -- belongs to --> ORG
	    ORG -- has --> USER_
	    ORG -- has --> REPO_
	```
</div>

[^1]: [Backdoor in XZ Utils allows RCE: everything you need to know](https://www.wiz.io/blog/cve-2024-3094-critical-rce-vulnerability-found-in-xz-utils)
