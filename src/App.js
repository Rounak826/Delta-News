import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav.jsx';
import News from './News/News.jsx';
import spinner from "./Assets/spinner.gif"
import placeholder from "./Assets/placeholder.png"
import Spinner from './spinner/Spinner';


function App() {
  const API_KEY = 'bea89a6442494002b6e2374fb42c10e1';
  const [data ,setData] = useState(
    {
    
      "status": "ok",
      "totalResults": 1,
      "articles": [
        {
          "source": {
            "id": "default",
            "name": "news default"
          },
          "author": "Author",
          "title": "News Title",
          "description": "News Description",
          "url": "/",
          "urlToImage": placeholder,
          "publishedAt": "2021-11-29T12:12:00Z",
          "content": null
        }
      ]
    
    
    }
  );
const [country, setCountry] = useState('in');
const [category, setCategory] =useState('general')
const [pageSize, setPageSize] = useState('8');
const [page,setPage] = useState(1);
const [loading,setLoading] =useState(false);
let fetchData=async ()=>{
  setLoading(true);
  let url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`;
  let data = await fetch(url);
  let resData =await data.json();
  console.log(resData);
  setData(resData);
  setLoading(false);
  return await resData;
}

useEffect(() => {
  fetchData();
}, [])

return (
    <div className="App">
      <Nav loading ={loading} />
      {console.log(loading),loading && <Spinner src={spinner}/>}
      <News data={data}/>
      <Footer />
      
    </div>
  );
}

export default App;
