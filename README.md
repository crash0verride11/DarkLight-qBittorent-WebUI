# qBittorent-WebUI-DarkLight
A version of Dark/Light mode for the standard WeubUI using custom CSS Properties as variables. This should support the same browsers as the standard WebUI, excluding IE as long as the version supports custom CSS properties. I'll breakdown browser support in a table later. In the near future I'll be updating with toggle support for dark/light (on the login page currently). Currently it detects device preferences.

Basically I wanted to refresh my CSS / SASS skills by creating a dark mode for qBittorrent. The only other version of the standard UI I've seen uses a plugin which is not available for Safari. I've managed to keep changes primarily to the CSS files, though minor changes have been made to the dynamictable and client js, and index and filters htmls as well. The changes involve swapping img tags for divs with backgrounds so they can be changed dynamically without scripting.

Long term I intend to attempt mobile layouts. For the short term I've made the login page more mobile device friendly (not tiny).
