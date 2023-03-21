import Home from "./Home"
import Join from "./Join";
import About from "./About";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/join" element={<Join />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
