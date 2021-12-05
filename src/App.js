import { useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav.jsx';
import News from './News/News.jsx';
import warningImg from './Assets/warning.svg'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './Contact/Contact';
import About from './About/About';
import Error from './Error/Error';

function App() {
const warning =`The reason why this app is showing old articles is that this app was developed as a project for practicing my skills. This API used in this website is in developer mode which provides only limited resources and domains to work properly. If you wish to use this app you can download it from my GitHub repo and apply your API key and run it on your local server.`;

  const [category, setCategory] = useState('general')
  const categoryHandler = (cat) => {
    switch (cat) {
        case 'general': setCategory('general');
            break;
        case 'entertainment': setCategory('entertainment');
            break;
        case 'science': setCategory('science');
            break;
        case 'sports': setCategory('sports');
            break;
        case 'buisness': setCategory('business');
            break;
        case 'technology': setCategory('technology');
            break;
        default: setCategory('general');
            break;
    }
    
}
  return (
    
    <Router>
    <div className="App">
    
      <Nav catHandler={categoryHandler} />
      <Routes>
        <Route path='/' element={<News category='general'/>}/>
        <Route path='/buisness' element={<News category={category}/>}/>
        <Route path='/entertainment' element={<News category={category}/>}/>
        <Route path='/technology' element={<News category={category}/>}/>
        <Route path='/sports' element={<News category={category}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/know' element={<Error head={'Why old Data is being shown to me?'} message={warning} img={warningImg}><a href="http://github.com/rounak826/delta-news" target="_blank" rel="noreferrer">Github - Delta-News</a></Error>}/>

      </Routes>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
