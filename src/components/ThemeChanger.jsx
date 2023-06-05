import { ThemeContext } from "./ThemeContext";
import React, { useContext, useState } from "react";
import Switch from "react-switch";

function ThemeChanger() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setTheme(checked ? "special" : "standard");
    setChecked(!checked);
  };
  return (
    <div>
      <button
        style={{ display: "none" }}
        onClick={() => {
          setTheme(theme === "standard" ? "special" : "standard");
          // Wenn theme den Wert "standard" hat, ändere diesen zu "special",
          // ansonsten ändere den wert zu "standars"
        }}
      >
        Wechsle das Theme
      </button>
      Special Theme:
      <Switch onChange={handleClick} checked={checked} />
    </div>
  );
}

export default ThemeChanger;
