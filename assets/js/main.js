// === main.js ===

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-icon");

  // Check localStorage for saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  // Toggle theme on click
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // Save theme preference
    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });


  
  // Typing effect for hero title
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = [
  "Hi, I am Anant",
  "[anant@root]# ./exploit.sh",
  ">> Initiating Recon_Protocol 🛰️",
  ":: BugBounty >> Active 🐞",
  "h4ck3r_m0d3_enabled",
  "defend > attack && adapt",
  "C:\\Users\\Anant>_whoami",
  "/anantsec:~$ sudo elevate",
  "access_granted@anantsec.dev",
  "> echo 'pwnd!' | netcat",
  "{404} logic not found",
  "<injecting_payload>...",
  "[+] Shell obtained",
  ">> echo $FLAG > ~/success.txt",
  "🛡️ ethical_hack.exe"]; // Add more titles if needed
  const typingDelay = 65;
  const erasingDelay = 50;
  const newTextDelay = 1500;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }

  setTimeout(type, 1000);
});



// logo script

const svgIcons = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z"/></svg>`, // terminal lines
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C7.03 2 3 6.03 3 11c0 4.64 3.41 8.47 8 8.94V22h2v-2.06c4.59-.47 8-4.3 8-8.94 0-4.97-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7 0-3.86 3.14-7 7-7s7 3.14 7 7c0 3.86-3.14 7-7 7z"/></svg>`, // radar
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`, // user/hacker
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a9.93 9.93 0 0 0-7.07 2.93A10.01 10.01 0 0 0 2 12c0 2.21.71 4.25 1.93 5.93L2 22l4.07-1.93A9.93 9.93 0 0 0 12 22a10 10 0 1 0 0-20z"/></svg>`, // chat bug
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.25 3.25 10 9 12 5.75-2 9-6.75 9-12V5l-9-4z"/></svg>` // shield
  ];

  const svgContainer = document.getElementById('svg-icon');

  function changeIcon() {
    const randomIcon = svgIcons[Math.floor(Math.random() * svgIcons.length)];
    svgContainer.innerHTML = randomIcon;
  }

  changeIcon(); // set on page load
  setInterval(changeIcon, 1500); // change every 2.5s



// theme checker
// === Apply saved theme on page load ===
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
  }
});

// === Toggle theme & save it ===
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.theme-icon');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light');
      // Save preference
      if (document.body.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    });
  }
});
