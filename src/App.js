import { useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav.jsx';
import News from './News/News.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
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
    console.log(category);
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
      </Routes>
      <Footer />

    </div>
    </Router>
  );
}

export default App;
