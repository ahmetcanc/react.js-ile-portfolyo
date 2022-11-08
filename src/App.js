import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experiance from './Pages/Experiance';
import ErrorPage from './Pages/ErrorPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectDisplay from "./Pages/ProjectDisplay";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay/>}/>
          <Route path="/experiance" element={<Experiance />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
