import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Routes/Home";
import About from "./Component/Routes/About";
import Contact from "./Component/Routes/Contact";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./Component/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
