████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗         ██╗   ██╗ ██╗    ██████╗ 
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║         ██║   ██║███║   ██╔═████╗
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║         ██║   ██║╚██║   ██║██╔██║
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║         ╚██╗ ██╔╝ ██║   ████╔╝██║
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗     ╚████╔╝  ██║██╗╚██████╔╝
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝      ╚═══╝   ╚═╝╚═╝ ╚═════╝ 

> INITIALIZING DOCUMENTATION...  
> LOADING README.MD...  
> SYSTEM READY.  

[SYSTEM INFORMATION]
-------------------
VERSION: 1.0.0  
STATUS: OPERATIONAL  
AUTHOR: HairyDuck  
LICENSE: MIT (Attribution Required)  
REPOSITORY: https://github.com/HairyDuck/terminal  
WORKING DEMO: https://projects.lukedev.co.uk/terminal  

[DESCRIPTION]
------------
> A retro CRT terminal template with authentic effects  
> Perfect for creating old-school terminal interfaces  
> Includes realistic CRT monitor effects and animations  
> Originally created for lukedev.co.uk  

[CORE FEATURES]
--------------
> DISPLAY
  - Authentic CRT screen flicker
  - Moving scan lines
  - Text glitch effects
  - Terminal glow effects
  - Retro monospace font (VT323)

> FUNCTIONALITY
  - Customizable boot sequence
  - Interactive command input
  - Clickable styled links
  - Mobile responsive design

[INSTALLATION]
-------------
> CLONE REPOSITORY:
```bash
git clone https://github.com/HairyDuck/terminal.git
```

> REQUIRED FILES:
  - index.html
  - terminal.css
  - terminal.js

> DEPENDENCIES:
  - Google Fonts (VT323)

[QUICK START]
------------
1. Copy files to your project directory
2. Link the CSS and JS files in your HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
<link rel="stylesheet" href="terminal.css">
<script src="terminal.js"></script>
```

3. Add the HTML structure:
```html
<div class="crt">
    <div class="scanline"></div>
</div>
<div class="terminal-container">
    <div class="ascii-header ascii-art" data-text=""></div>
    <div class="terminal">
        <div id="output"></div>
        <div class="input-line">
            <span class="prompt">></span>
            <input type="text" id="terminal-input" autofocus>
        </div>
    </div>
</div>
```

[CUSTOMIZATION]
--------------
> MODIFY COLORS:
```css
:root {
    --terminal-green: #4af626;
    --terminal-bg: #0a0a0a;
}
```

> CUSTOMIZE BOOT SEQUENCE:
```javascript
const bootMessages = [
    { text: 'System initializing...', delay: 500 },
    { text: 'Loading modules...', delay: 800 },
    // Add your custom boot messages
];
```

> UPDATE ASCII ART:
```javascript
const asciiLogo = `
    // Your custom ASCII art here
`;
```

-------------
> PULL REQUESTS WELCOME
> GUIDELINES:
  1. Fork the repository
  2. Create feature branch
  3. Commit changes
  4. Push to branch
  5. Create pull request

[SUPPORT]
---------
> REPORT ISSUES:
  - https://github.com/HairyDuck/terminal/issues
> CONTACT:
  - GitHub: @HairyDuck

[ATTRIBUTION]
------------
> Created by HairyDuck  
> Inspired by classic CRT monitors and retro terminals  
> Please maintain attribution when using this template  
> Original implementation at lukedev.co.uk  

[STATUS: READY]
--------------
> Documentation complete  
> Terminal ready for deployment  
> System operational  

[END OF TRANSMISSION]
--------------------
> Remember to star ⭐ if this helped you!  
> _
