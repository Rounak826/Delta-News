import './News.css';
import Card from "../Card/Card";
import placeholder from '../Assets/placeholder.png';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../spinner/Spinner';
import { useEffect } from 'react';
import { useState } from 'react';

import Error from '../Error/Error.jsx'
let key = 0;
const News = (props) => {
    const API_KEY = '3a2411bf631f470eadd09af41c8ea5c4';
    const [data, setData] = useState(
        {

            "status": "ok",
            "totalResults": 1,
            "message":''
        }
    );
    const [country, setCountry] = useState('in');
    
    const [pageSize, setPageSize] = useState('8');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    let fetchNews = async () => {
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`;
        let data = await fetch(url);
        let resData = await data.json();
        setArticles(resData.articles)  
        
        setData({
            "status": resData.status,
            "totalResults": resData.totalResults,
            "message":resData.message
        });
        setLoading(false);
        return await resData;
    }
    let fetchMoreData = async () => {
        setPage(page+1);
        console.log(page);
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`;
        let data = await fetch(url);
        let resData = await data.json();
        setArticles(articles.concat(resData.articles));
        setData({
            "status": resData.status,
            "totalResults": resData.totalResults,
            "message":resData.message
        });
        setLoading(false);
    };
    
    /*  useEffect(() => {
        console.log('change: ',props.category)
          let url = `https://newsapi.org/v2/top-headlines?props.category=${props.category}&country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`;
          fetch(url)
          .then(response => response.json())
          .then(json => setData(json))
      }, [props.category,country,page,pageSize])
      
     */
      useEffect(() => {
        console.log('category change');
        fetchNews();
        setPage(1);
        setArticles([]);
    }, [props.category])


    useEffect(() => {
        console.log('first loading');
        fetchNews();
        setPage(page+1);
    }, [])
    return (
        <>
            <h1>New-{props.category}</h1>

            {console.log(data.status,data.message)}
            {articles?<InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== data.totalResults}
                loader={<Spinner />}
            >
                <div className="container-fluid">
                    <div className="row px-5">
                        {articles.map((news) => {
                            key++
                            return (
                                <Card key={"key" + key} img={news.urlToImage ? news.urlToImage : placeholder} title={news.title ? news.title : 'title'} author={news.author ? news.author : 'Author'} desc={news.description ? news.description : 'Description'} />
                            );
                        })

                        }
                    </div>
                </div>
            </InfiniteScroll>:<Error message={data.message}/>}
                         
        </>
        

    );
}
export default News;