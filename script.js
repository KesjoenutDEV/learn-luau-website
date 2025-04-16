// Vertalingen voor de talen
const translations = {
  nl: {
    intro: "Leer gratis LuaU en bouw je eigen Roblox-games!",
    downloadTitle: "Download de App",
    downloadBtn: "Download voor Windows",
    whatTitle: "Wat is LuaU?",
    whatText: "LuaU is de scripttaal voor Roblox Studio. Met LuaU kun je interactieve games bouwen. Onze app leert je alles!",
    footer: "© 2025 Learn-LuaU. Gemaakt voor beginnende ontwikkelaars.",
    toggle: "Switch to English"
  },
  en: {
    intro: "Learn LuaU for free and build your own Roblox games!",
    downloadTitle: "Download the App",
    downloadBtn: "Download for Windows",
    whatTitle: "What is LuaU?",
    whatText: "LuaU is the scripting language for Roblox Studio. With LuaU, you can build interactive games. Our app teaches you everything!",
    footer: "© 2025 Learn-LuaU. Made for beginner developers.",
    toggle: "Wissel naar Nederlands"
  }
};

let currentLang = 'nl';

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === 'nl' ? 'en' : 'nl';
  const t = translations[currentLang];
  document.getElementById("intro-text").textContent = t.intro;
  document.getElementById("download-title").textContent = t.downloadTitle;
  document.getElementById("download-btn").textContent = t.downloadBtn;
  document.getElementById("what-title").textContent = t.whatTitle;
  document.getElementById("what-text").textContent = t.whatText;
  document.getElementById("footer-text").textContent = t.footer;
  document.getElementById("lang-toggle").textContent = t.toggle;
});
