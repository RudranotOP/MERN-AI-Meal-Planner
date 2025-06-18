import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
    }
  }, []);

  return (
    <span
      id="dark-mode-toggle"
      onClick={() => setDark(!dark)}
      style={{ cursor: "pointer", fontSize: "1.5rem", marginLeft: "1rem" }}
      title="Toggle Dark Mode"
    >
      {dark ? "🌞" : "🌙"}
    </span>
  );
};

export default DarkModeToggle;
