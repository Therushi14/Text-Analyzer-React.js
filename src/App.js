import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Testutils" />
      <div className="Container my-3"/>
     {/* <TextForm heading = "Enter the text to analyze"/> */}
     <About />
    </>
  );
}

export default App;
