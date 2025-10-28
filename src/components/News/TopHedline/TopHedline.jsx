import React, { useEffect, useState } from 'react';
import News from '../News';

const TopHedline = () => {
const [articles , setArticles] = useState([]);
    useEffect(() => {
        const url ='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1f7c499b672d4808ba7e18cb3be3ef0d';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles) )
    })
console.log(articles);
    return (
        
        <div>
                

            <h2>Top hedline : {articles.length}</h2>

            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHedline;