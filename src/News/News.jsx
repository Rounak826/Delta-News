import './News.css';
import Card from "../Card/Card";
import placeholder from '../Assets/placeholder.png';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../spinner/Spinner';
import { useState, useEffect, useRef, useCallback } from 'react';
import dummyData from './data';
import Error from '../Error/Error.jsx'
var isDeepEqual = require('fast-deep-equal');
let key = 0;




let corsNotAllowed= false;
const News = (props) => {
  
    const API_KEY = 'bea89a6442494002b6e2374fb42c10e1';
    const [data, setData] = useState(
        {

            "status": "ok",
            "totalResults": 1,
            "message": ''
        }
    );
    const country = 'in';
    const pageSize = 8;
    const [page, setPage] = useState(2);
    const [articles, setArticles] = useState([]);
    const [status, setStatus] = useState(
        {
            noError:true,
            code:200
        }
        
        );
    const firstLoad = useRef(false);
    const prevCategory = useRef(props.category);
    let fetchNews = useCallback( 
        async () => {
            let resData= {};
        try{
            
        // let url2= `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=${props.category}&page=${page}&language=En`
            let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`;
            let data = await fetch(url);
            resData = await data.json();
            corsNotAllowed = await data.status===426;
            console.log('before',corsNotAllowed)
            setStatus(
                {
                    noError:resData.status === 'ok',
                    code: data.code
                }
                )
            console.log('realtime',data.status===426, corsNotAllowed);
            
            if(corsNotAllowed) {throw new Error(data.status, resData.message)};


        }
        catch{

            resData = await dummyData(props.category,page);
            setStatus(
                {
                    noError:resData.status === 'ok',
                    code: data.code
                    
                }
                );
            
        }
        setArticles(resData.articles)
        
        setData({
            "status": resData.status,
            "totalResults": resData.totalResults,
            "message": resData.message
        });

        return await resData;
    }, [props.category,country,pageSize,page,API_KEY,data.code])
    let fetchMoreData = async () => {
        setPage(page + 1);
        let resData={};

        try{
            let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`;
            let data = await fetch(url);
            resData = await data.json();
            corsNotAllowed = await data.status===426;
            setStatus(
                {
                    noError:resData.status === 'ok',
                    code: data.status
                }
                );
            if(corsNotAllowed) {throw new Error(data.status, resData.message)};

        }catch{

            resData = await dummyData(props.category,page);
            if(page===3){
                setPage(1);
            }
            setStatus(
                {
                    noError:resData.status === 'ok',
                    code: data.code
                }
                );
        }
        // let url2= `https://newsdata.io/api/1/news?apikey=${API_KEY}&category=${props.category}&page=${page}&language=En`
        
        setArticles(articles.concat(resData.articles));
        setData({
            "status": resData.status,
            "totalResults": resData.totalResults,
            "message": resData.message
        });
    };

    /*  useEffect(() => {
       
          let url = `https://newsapi.org/v2/top-headlines?props.category=${props.category}&country=${country}&apiKey=${API_KEY}&pageSize=${pageSize}&page=${page}`;
          fetch(url)
          .then(response => response.json())
          .then(json => setData(json))
      }, [props.category,country,page,pageSize])
      
     */
    useEffect(() => {
      if(!isDeepEqual(prevCategory.current, props.category)){
        setPage(1);
        fetchNews();
        setArticles([]);
        prevCategory.current= props.category;
      }

    }, [props.category,fetchNews])


    useEffect(() => {
        if(!firstLoad.current){
            fetchNews();
            setPage(2);
            firstLoad.current = true;
        }

    }, [fetchNews])

    const textLimiter = (text, length) => {
        return text.slice(0, length) + '...';
    }


    return (
        <>
            {corsNotAllowed&&<div className="alert alert-warning alert-dismissible fade show" role="alert">
                This is old Data from newsApi.org <a href="/know-more" className="alert-link">know more</a>. click to know more.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
            <h1>Top {props.category}-News</h1>

            {status.noError ? <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== data.totalResults}
                loader={<Spinner />}
            >
                <div className="container-fluid">
                    <div className="row px-0">
                        {articles.map((news) => {
                            key++
                            return (
                                <Card key={"key" + key} img={news.urlToImage ? news.urlToImage : placeholder} title={news.title ? news.title : 'title'} author={news.author ? '- ' + news.author : ''} desc={news.description ? textLimiter(news.description, 300) : 'No Description'} link={news.url} />
                            );
                        })

                        }
                    </div>
                </div>
            </InfiniteScroll> : <Error message={data.message} />}

        </>


    );
}
export default News;