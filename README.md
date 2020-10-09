# qBittorent-WebUI-DarkLight
A version of Dark/Light mode for the standard WebUI using custom CSS Properties. This should support the same browsers as the standard WebUI, excluding IE, as long as the version is new enough to support vars and custom CSS properties (indicated in the table at the bottom). The theme respects OS default, but is also toggle-able. Preferences for the dark or light theme toggle are stored in local storage and remembered. The alternate webUI is set to ignore the toggled theme after three hours and use the OS preference instead. This can be disabled or the length of time extended by changing values in "/private/scripts/mootools-1.2-core-yc.js" (the only script file that was already linked in all the htmls) I'll add clearer instructions on changing this eventually.

Basically I wanted to refresh my CSS / SASS skills by creating a dark mode for qBittorrent. The only other version of the standard UI I've seen is not toggle-albe. I also primarily see versions that change colors but leave all the icons as is (not ideal for dark mode). I've managed to keep changes primarily to the CSS files, though minor changes have been made to a few of the JS, and a few of the htmls as well. The changes outside of the CSS files primarily involve swapping img tags for divs with backgrounds so they can be changed dynamically without scripting.

# Notes
**Search Tab:** Is broken in the current version of the qBittorent-Master, so can't be sure on all the theming there. I also don't use RSS, but I did some testing there.

**Icons:** I've compiled UI icons that I've re-colored for dark mode into an "_IC.ai" for quick recoloring.

**Colors/Design:** I'll probably fork this eventually with custom icons throughout and a redsigned style, but I'll be leaving this in-tact as relatively close version of the original UI.

**Scrollbars:** Use CSS styling, which has only really been supported in the last few years. Compatibility may vary, but works in current versions of Safari, Chrome, and Firefox. I doubt I'll ever implement a javascript method. 

**Near future:** I won't be making many changes, just stream-lineing the SASS with some more mixins. 

Long term I intend to attempt mobile layouts, but those may never make it here. For the short term I've made the login page more mobile device friendly (not tiny). If this webUI gets noticed by the qBittorent master branch, and fallback support for IE (just light) is desired, I may add that as well eventually. I may also work on changing the icons to a diferent tag and try some methods to stylesheet the fills.

# Preview
![Preview Image](https://github.com/raylanser/DarkLight-qBittorent-WebUI/blob/master/preview.png)

# Installation
Instructions for using my Alternate WebUI:
* Start with the instructions on alternate UI usage from the [qBittorent Master](https://github.com/qbittorrent/qBittorrent/wiki/Developing-alternate-WebUIs-(WIP)) (Download the files and place them in the inidcated locations)
	* You can ignore the step adding the icons to the public folder. (A lot of unused files)
* Download the DarkLight UI files
	* **DarkLight Public folder:** The entire DarkLight public folder can replace the qBittorrent Master version.
	* **DarkLight Private folder:** Here I've only included the files I've modified. Move, and overwrite as necessary, the new DarkLight files to their matching [qBittorent Master](https://github.com/qbittorrent/qBittorrent/wiki/Developing-alternate-WebUIs-(WIP)) file locations. Just be sure the dark folder is inside the icons folder (private/icons/dark/iconfiles.svg)
* Follow the [Instructions](https://github.com/qbittorrent/qBittorrent/wiki/Alternate-WebUI-usage) in the qBittorrent master for activating the new webUI.

# Compatibility
This should be the primary indicator of compatibility.
![Preview image](https://github.com/raylanser/DarkLight-qBittorent-WebUI/blob/master/compatibility.png)
