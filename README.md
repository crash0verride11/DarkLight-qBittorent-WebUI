# qBittorent-WebUI-DarkLight
A version of Dark/Light mode for the standard WebUI using custom CSS Properties. This should support the same browsers as the standard WebUI, excluding IE, as long as the version is new enough to support vars and custom CSS properties (indicated in the table at the bottom). The theme respects OS default, but is also toggle-able. 

I wanted to refresh my CSS / SASS skills by creating a dark mode for qBittorrent. The only other version of the standard UI I've seen is not toggle-albe. I also primarily see versions that change colors but leave all the icons as is (not ideal for dark mode). I've managed to keep changes primarily to the CSS files, though minor changes have been made to a few of the JSs and the index. 

# This Project is now English-Only
qBittorrent has removed built-in support for third-party webUI translation.

# Notes
**Updates Nov 2022** qBittorent appears in the process of swapping out all their icons, and may soon be implementing it's own dark mode based on comments in code commits, rendering this project mostly useless (let's hope), except as a base for easy custom theming. This was a relatively big update, with new icons, and some file path changes. The new icons are what's in the current qBittorent master and beta release. Some of these are awful in my opinion, but I've tried to remain faithful to the master for now. Hopefully they tweak them further.

**Updates Dec 2021** I've recently made a large update to the method for image replacement, that will have reduced compatibility for image toggling, but has greatly reduced the amount of code altered outside the CSS files. The plus side, the images will fall back to the normal icons. Modern browsers should support the image replacement, but with issues in Firefox (I've tested working correctly in safari, chrome, edge, and opera). No guarantees for older OSs / browsers. I previously replaced every single image tag with a div tag in the html files to make image toggling work, now I've reduced that to zero. 

**Firefox Compatibility** Firefox prioritizes the static src image defined in the HTML over the dynamic image defined in CSS. I've attempted some fixes for firefox, but I haven't tested extensively and if you use a plugin the masks your browser type, the fixes will fail. Fixes have a slight delay in swapping to dark on page load and refresh. 

**Theme Override** Clicking the theme toggle button will override the OS preference for the dark or light theme and this value is stored in local storage and remembered on page refresh. The alternate webUI will ignore the theme override after six hours and return to the OS preference. This can also now be reset to OS preference by opt/alt + clicking the theme toggle button.

**Older Versions of qBittorrent:** I am prioritizing latest releases of qBittorent. With the recent rebuild of project, this may work with more older qBit versions in the future, but will definitely break with every mootools update. See the legacy branch for an older version of this project and maybe you'll get lucky. 

**Search/RSS Tabs:** I don't use either of these tabs, but I've done a fair amount of testing for theming, but there may be specific scenarios I haven't  accounted for. If you see something that clearly is not as it should be, let me know in the issues.

**Icons:** I've compiled UI icons into "_IC" .ai files for quick recoloring to those who have a compatible editor.

**Colors/Design:** I may branch this eventually with custom icons throughout and a redesigned style. I recently did another icon re-color, but will likely slowly iterate away from the original qBittorrent icons over time. I'll be leaving "Wide Compatibility (Div)" and "Legacy" branch icons as the closest version to the original UI.

**Scrollbars:** Use CSS styling, which has only really been supported in the last few years. Compatibility may vary, but works in current versions of Safari, Chrome, and Firefox. I doubt I'll ever implement a javascript method.

**Near future:** I won't be making many changes, just stream-lining the SASS with some more mixins. 

**Long term:** I may attempt mobile layouts, but those could never make it here. For the short term I've made the login page more mobile device friendly (not tiny). 

# Preview
![Preview Image](https://github.com/raylanser/DarkLight-qBittorent-WebUI/blob/default/preview.png)

# Installation
**Releases are Available:** Using a release is highlight recommend. With the removal of translation support, regex must be used to modify the qBittorent master files, and combining my files with the qBitorrent master version files, is not very straightforward, but the easiest way to maintain. 
* For releases, just download the release www.zip, extract the folder, and follow the [Instructions](https://github.com/qbittorrent/qBittorrent/wiki/Alternate-WebUI-usage) in the qBittorrent master for activating the new webUI.

**Instructions for using my Alternate WebUI:**
* The instructions on alternate UI usage from the [qBittorent Master](https://github.com/qbittorrent/qBittorrent/wiki/Developing-alternate-WebUIs-(WIP)) are currently out-dated with recent changes, but start here. Only downloading the "/www/" files are necessary now.
* Remove translation related code from the qBittorrent master files using regex `QBT_TR?\(` and `\)QBT_TR\[CONTEXT=.*?\]`
* Download the DarkLight UI files
	* **DarkLight Public folder:** The entire modified DarkLight public folder can replace the qBittorrent Master version.
	* **DarkLight Private folder:** In the modified DarkLight private folder I've only included the files I've changed. Move, and overwrite as necessary, the new DarkLight files to their matching [qBittorent Master](https://github.com/qbittorrent/qBittorrent/wiki/Developing-alternate-WebUIs-(WIP)) file locations.
* Follow the [Instructions](https://github.com/qbittorrent/qBittorrent/wiki/Alternate-WebUI-usage) in the qBittorrent master for activating the new webUI.

# Post-Installation
* Issues with parts of the UI not showing as dark, icon sizes, missing icons may be a result of conflicting existing cached website data. To clear your cache on different browsers try: (some methods clear all website data)
	* Firefox: https://support.mozilla.org/en-US/kb/how-clear-firefox-cache (Shift+opt clicking the page refresh button also works for me)
	* Chrome: https://support.google.com/accounts/answer/32050?hl
	* Safari: https://www.macrumors.com/how-to/clear-safari-cache/

# ISSUES
Please **ensure you have cleared your cached browser data** before opening an issue. 
Please **try a release before opening an issue**, especially if you were confused by installation instructions.

# Compatibility
This should be the primary indicator of general compatibility (aside from image files).
![Preview image](https://github.com/crash0verride11/DarkLight-qBittorent-WebUI/blob/default/compatibility.png)
This should be the primary indicator of image toggle compatibility (excluding firefox, which technically works, but not the same way as other browsers)
![Preview image](https://github.com/crash0verride11/DarkLight-qBittorent-WebUI/blob/default/compatability2.png)
