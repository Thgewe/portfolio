import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            <About />
            <Footer />
        </div>
  );
}

export default App;
