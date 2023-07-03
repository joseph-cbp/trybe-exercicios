import ThemeContext from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeContext.Provider value={{ color: 'dark' }}>
      <div>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
