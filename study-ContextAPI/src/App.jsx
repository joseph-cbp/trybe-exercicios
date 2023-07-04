import { useState } from "react";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";

export default function App() {
  const [themeColor, setThemeColor] = useState('dark');
  const toggleTheme = () => {
    setThemeColor( themeColor === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme}}>
      <div>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
