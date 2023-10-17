import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Contacts from "./components/Contacts/Contacts";
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <div className="app">
            <Header />
            <Home />
            <About />
            <Projects />
            <Contacts />
            <Footer />
        </div>
  );
}

export default App;
