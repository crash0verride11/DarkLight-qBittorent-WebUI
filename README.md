# qBittorent-WebUI-DarkLight
A version of Dark/Light mode for the standard WeubUI using custom CSS Properties as variables. This should support the same browsers as the standard WebUI, excluding IE, as long as the version is new enough to support custom CSS properties (updated within the last three years or so). I'll breakdown full browser version support in a table later. The theme is toggle-able and preferences for the dark or light theme are stored and local storage and remembered. I'll eventually add a time-out for this so it is only remembered for a 8 hours with instuctions to disable or change timeout. This also scales the user interface for mobile on the login page.

**Fields/buttons/scrollbars:** Change automatically in Safari because it respsects the "color-scheme" property. This is my primary browser, but in the next few weeks I'll add some CSS for these as well to support other browsers.

**Search Tab:** Is broken in the current version of the qBittorent-Master, so can't be sure on all the theming there. I also don't use RSS, but I did some testing there.

Basically I wanted to refresh my CSS / SASS skills by creating a dark mode for qBittorrent. The only other version of the standard UI I've seen is not toggle-albe. I've managed to keep changes primarily to the CSS files, though minor changes have been made to a few of the JS, and a few of the htmls as well. The changes outside of the CSS files primarily involve swapping img tags for divs with backgrounds so they can be changed dynamically without scripting.

**Icons:** I've compiled UI icons that I've re-colored for dark mode into an ".ai" for quick recoloring.

**Colors/Design:** I'll probably fork this eventually with custom icons throughout and a redsigned style, but I'll be leaving this in-tact as  relatively close version of the original UI.

**Near future:** I won't be making many changes, just stream-lineing the SASS with some more mixins and field/scrollbar support. 

Long term I intend to attempt mobile layouts, but those may never make it here. For the short term I've made the login page more mobile device friendly (not tiny). If this gets noticed by the qBittorent master branch, and fallback support for IE (just light) is desired, I may add that as well eventually.

# Preview
![Preview Image](https://github.com/raylanser/DarkLight-qBittorent-WebUI/blob/master/preview.png)

# Installation
Instructions for using my Alternate WebUI:
* Start with the instructions on alternate UI usage from the [qBittorent Master](https://github.com/qbittorrent/qBittorrent/wiki/Developing-alternate-WebUIs-(WIP)) (Download the files and place them in the inidcated locations)
	* You can ignore the step adding the icons to the public folder. (A lot of unused files)
* Download the DarkLight UI files
	* **DarkLight Public folder:** The entire DarkLight public folder can replace the qBittorrent Master version.
	* **DarkLight Private folder:** Here I've only included the files I've modified. Move, and overwrite as necessary, the new DarkLight files to their matching locations in from [qBittorent Master](https://github.com/qbittorrent/qBittorrent/wiki/Developing-alternate-WebUIs-(WIP)) files.
* Follow the [Instructions](https://github.com/qbittorrent/qBittorrent/wiki/Alternate-WebUI-usage) in the qBittorrent master for activating the new webUI.
