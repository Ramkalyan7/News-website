import { useState } from "react";
import News from "./components/News.js";
import Home from "./components/Home"
import Resnav from "./components/Resnav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const apiKey=process.env.REACT_APP_API_KEY;


const App = () => {
  const [styleState, setStyleState] = useState({});
  return (
    <Router>
      <div>
        <div className="navbar">
          <div className="brand">
            <p>NewZZ</p>
          </div>
          <Resnav state={styleState} setStateFunc={setStyleState} />
          <div className="navbar-links" style={styleState}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/entertainment">Entertainment</Link>
              </li>
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/sports">Sports</Link>
              </li>
              <li>
                <Link to="/technology">Technology</Link>
              </li>
              
            </ul>
          </div>
        </div>


        <Routes>
       
          <Route path='/entertainment' element={<News   apiKey={apiKey}  newsCategory="entertainment" />} />
          <Route path='/sports' element={<News   apiKey={apiKey}  newsCategory="sports"  />} />
          <Route path='/technology' element={<News  apiKey={apiKey} newsCategory="technology" />} />
          <Route path='/' element={<Home/>} />
          <Route path='/business' element={<News  apiKey={apiKey} newsCategory="business"  />} />
        
          
        </Routes>



      </div>
    </Router>
  );
};
export default App;
