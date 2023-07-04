import { useState } from "react";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import './App.css'
export default function App() {
  const [themeColor, setThemeColor] = useState('dark');
  const toggleTheme = () => {
    setThemeColor( themeColor === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme}}>
       <div className={ themeColor }>
        <Header />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
