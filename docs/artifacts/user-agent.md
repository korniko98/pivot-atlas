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
    Threat actors often configure their malware to use common user agents in order to blend in with legitimate communications, but they sometimes make mistakes such as typos or choosing a nonsensical user agent, which can allow detection and pivoting (e.g., an infected Linux machine using a Windows user agent).
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
		classDef secondary stroke-dasharray: 5 5
		
		%% define nodes
		IP_ADDRESS(IP Address)
		SAMPLE(Sample)
		USER_AGENT(User Agent)
		USER_AGENT_(User Agent):::secondary
		
		%% define edges
		IP_ADDRESS -- uses --> USER_AGENT
		USER_AGENT <-- similar --> USER_AGENT_
		SAMPLE -- uses --> USER_AGENT
	```
</div>

### IP Addresses

####:octicons-arrow-right-24: Addresses of attacker-controlled servers using it

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar. Donec et dolor at velit dictum lobortis. Vivamus rhoncus suscipit faucibus. Donec iaculis turpis ultricies augue bibendum venenatis. Praesent massa erat, scelerisque et consequat a, sollicitudin eu nulla.

??? example "Try it out"

	=== "Shodan (URL)"
		```
		TO DO
		```
	=== "Shodan (API)"
		``` console
		TO DO
		```
	=== "Censys (URL)"
		```
		TO DO
		```
	=== "Censys (API)"
		``` console
		TO DO
		```

####:octicons-arrow-right-24: Addresses of infected clients using it

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar. Donec et dolor at velit dictum lobortis. Vivamus rhoncus suscipit faucibus. Donec iaculis turpis ultricies augue bibendum venenatis. Praesent massa erat, scelerisque et consequat a, sollicitudin eu nulla.

??? example "Try it out"

	=== "Shodan (URL)"
		```
		TO DO
		```
	=== "Shodan (API)"
		``` console
		TO DO
		```
	=== "Censys (URL)"
		```
		TO DO
		```
	=== "Censys (API)"
		``` console
		TO DO
		```

### Samples

####:octicons-arrow-right-24: Samples of malware using it

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium libero libero, at rutrum libero finibus id. In sit amet maximus dui, sed rhoncus lectus. Donec a neque facilisis lacus vestibulum convallis eu et nibh. Vivamus non viverra sapien. Cras scelerisque sem eget sem luctus pulvinar. Donec et dolor at velit dictum lobortis. Vivamus rhoncus suscipit faucibus. Donec iaculis turpis ultricies augue bibendum venenatis. Praesent massa erat, scelerisque et consequat a, sollicitudin eu nulla.