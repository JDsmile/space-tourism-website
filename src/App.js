
import './css/App.css';
import Header from './components/Header'
import {BrowserRouter as Router} from "react-router-dom"
import {Routes,Route} from "react-router-dom"
import Homepage  from './components/Homepage';
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"

function App() {
  return (
    <Router>
    <div className="App">

      
        <Header />  


        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/destination" element={<Destination />}/>
          <Route path="/crew" element={<Crew />}/>
          <Route path="/technology" element={<Technology />}/>
        </Routes>

    </div>
    </Router>
  );
}

export default App;
