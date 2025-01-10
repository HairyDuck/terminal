document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('output');
    const terminal = document.querySelector('.terminal');
    const inputLine = document.querySelector('.input-line');
    const asciiHeader = document.querySelector('.ascii-header');

    // Hide input initially
    inputLine.style.display = 'none';

    const asciiLogo = `
     ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗         ██╗   ██╗ ██╗    ██████╗ 
    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║         ██║   ██║███║   ██╔═████╗
       ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║         ██║   ██║╚██║   ██║██╔██║
       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║         ╚██╗ ██╔╝ ██║   ████╔╝██║
       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗     ╚████╔╝  ██║██╗╚██████╔╝
       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝      ╚═══╝   ╚═╝╚═╝ ╚═════╝ 
    `;

    // Set the ASCII art in the header
    asciiHeader.textContent = asciiLogo;
    asciiHeader.setAttribute('data-text', asciiLogo);

    const bootMessages = [
        { text: 'Initializing HairyDuck Terminal v1.0...', delay: 500 },
        { text: 'Running memory check...', delay: 800 },
        { text: 'Memory OK: 640K Base, 64M Extended', delay: 400 },
        { text: 'CPU: HairyDuck Terminal v1.0 @ 4.77 MHz', delay: 300 },
        { text: 'Source: <a href="https://github.com/HairyDuck/terminal" target="_blank" class="terminal-link">https://github.com/HairyDuck/terminal</a>', delay: 1000 },
        { text: 'HairyDuck Terminal Ready.', delay: 500 },
        { text: '> Type your commands below:', delay: 300 }
    ];

    async function typeText(text, speed = 10, isAscii = false) {
        const lines = text.split('\n');
        const wrapper = document.createElement('div');
        wrapper.className = isAscii ? 'ascii-art' : 'output-line';
        wrapper.innerHTML = lines.join('\n');
        if (isAscii) {
            wrapper.setAttribute('data-text', text);
        }
        output.appendChild(wrapper);
        output.scrollTop = output.scrollHeight;
        if (speed > 0) {
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    }

    async function bootSequence() {
        for (const message of bootMessages) {
            await typeText(message.text, message.text === asciiLogo ? 0 : 10, message.isAscii);
            await new Promise(resolve => setTimeout(resolve, message.delay));
        }
        // Show input line after boot sequence
        inputLine.style.display = 'flex';
        input.focus();
    }

    // Add glitch function
    function randomGlitch() {
        const asciiArt = document.querySelector('.ascii-art');
        if (!asciiArt) return;

        function checkGlitch() {
            if (Math.random() < 0.85) { // Increased probability of glitch
                asciiArt.classList.add('glitch');
                asciiArt.setAttribute('data-text', asciiArt.textContent);
                
                const glitchDuration = Math.floor(Math.random() * 1500) + 500;
                setTimeout(() => {
                    asciiArt.classList.remove('glitch');
                }, glitchDuration);
            }
            
            const nextCheck = Math.floor(Math.random() * 15000) + 1000; // Reduced time between checks
            setTimeout(checkGlitch, nextCheck);
        }

        checkGlitch();
    }

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = input.value;
            
            // Add the command to output
            const commandLine = document.createElement('div');
            commandLine.className = 'output-line';
            commandLine.textContent = `> ${command}`;
            output.appendChild(commandLine);
            
            // Clear input
            input.value = '';
            
            // Scroll to bottom
            output.scrollTop = output.scrollHeight;
        }
    });

    // Focus input on click anywhere in the terminal
    terminal.addEventListener('click', () => {
        input.focus();
    });

    // Start glitch effects immediately for the header
    randomGlitch();

    // Start boot sequence
    bootSequence().then(() => {
        // The ASCII art is already showing and glitching
    });
});
