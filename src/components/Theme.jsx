import React, { useState, useEffect, useRef } from "react";
import { VscSettings } from "react-icons/vsc";

const Theme = () => {
  const [activeTheme, setActiveTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'dark'
    return localStorage.getItem("theme") || "dark";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const themes = [
    { name: "dark", color: "#1f2937" },
    { name: "light", color: "#f9fafb" },
    { name: "coffee", color: "#f59e0b" },
    { name: "forest", color: "#10b981" },
    { name: "sunset", color: "#f97316" },
    { name: "purple", color: "#a855f7" },
  ];

  // Apply theme on component mount and when activeTheme changes
  useEffect(() => {
    const root = document.documentElement;

    // Remove all theme classes first
    themes.forEach((theme) => {
      root.classList.remove(theme.name);
    });

    // Add the active theme class
    root.classList.add(activeTheme);

    // Save to localStorage
    localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeSelect = (themeName, e) => {
    e.stopPropagation();
    setActiveTheme(themeName);
    setIsMenuOpen(false);
  };

  const getThemeColor = (themeName) => {
    const theme = themes.find((t) => t.name === themeName);
    return theme?.color || "#6b7280";
  };

  return (
    <div className="fixed right-[26px] top-[21px] z-[1000]">
      {/* Theme Toggle Button */}
      <div
        ref={buttonRef}
        className="w-[45px] rounded-lg aspect-square flex z-[100] items-center justify-center bg-button hover:bg-button-hover transition-all duration-200 cursor-pointer ease-in"
        onClick={toggleMenu}
        aria-label="Toggle theme menu"
      >
        <VscSettings className="size-5 text-button-text" />
      </div>

      {/* Theme Selection Menu */}
      {isMenuOpen && (
        <ul
          ref={menuRef}
          className="absolute bg-button -left-11 sm:-left-26 top-0 rounded-lg p-1 shadow-lg animate-fade-in sm:w-[100px]"
          style={{
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          {themes.map((theme, index) => (
            <li
              key={theme.name}
              className={`px-2 py-1 text-xs flex gap-2 items-center hover:bg-bg-2 rounded-lg text-button-text transition-all duration-200 cursor-pointer capitalize ${
                activeTheme === theme.name ? "bg-bg-2" : ""
              }`}
              onClick={(e) => handleThemeSelect(theme.name, e)}
            >
              <div
                className="w-4 aspect-square rounded-full"
                style={{ backgroundColor: theme.color, opacity: "60%" }}
              />
              <span className="hidden sm:flex flex-1">{theme.name}</span>
              {activeTheme === theme.name && (
                <span className="hidden sm:flex text-[8px]">✓</span>
              )}
            </li>
          ))}
        </ul>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Theme;
