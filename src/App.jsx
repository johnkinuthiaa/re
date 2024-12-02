
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Characters from "./pages/Characters.jsx";
import CharacterDesc from "./pages/CharacterDesc.jsx";

function App() {


  return (
      <>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/about"} element={<About/>}/>
              <Route path={"/characters"} element={<Characters/>}/>
              <Route path={"/character/description/:name"} element={<CharacterDesc/>}/>
          </Routes>
      </>

  )
}

export default App
