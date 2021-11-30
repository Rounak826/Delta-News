import './News.css';
import Card from "../Card/Card";



const News = (props) => {
    return (
        <div className="news container-fluid px-5 py-5">
            <h1>News</h1>
            <div className="row row-cols-1 row-cols-md-4 text-center">
                {props.data.articles.map((news)=>{
                    return(
                        <Card key={news.url} img={news.urlToImage} title={news.title} author={news.author} desc={news.description} />
                    );
                })
                
    }
                
            </div>
        </div>
    );
}
export default News;