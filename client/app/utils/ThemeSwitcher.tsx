'use client'
import { useState,useEffect } from "react"
import { useTheme } from "next-themes"
import {BiMoon,BiSun} from "react-icons/bi"
// ... (import statements)

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
  
    useEffect(() => setMounted(true), []);
  
    if (!mounted) {
      return null;
    }
  
    return (
      <div className="flex items-center justify-center mx-4">
        {theme === "light" ? (
          <BiMoon
            className="cursor-pointer"
            fill="black"
            size={30}
            onClick={() => setTheme("dark")}
          />
        ) : (
          <BiSun
            size={30}
            className="cursor-pointer"
            onClick={() => setTheme("light")}
            // Set a contrasting color for the sun icon when the theme is dark
            color="#fff"
          />
        )}
      </div>
    );
  };
  