import React, {useState,useEffect} from 'react';
import {fetchData, mentalOptions } from '../utils/fetchData';

const MentalHealth = ({title, url}) => {
    const [mentalNews, setMentalNews] = useState([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    
        const fetchMentalData = async () => {
            const news = await fetchData(`https://mental-health-info-api.p.rapidapi.com/news`, mentalOptions);
            setMentalNews(news);
            console.log(news);
    
        };
    
        fetchMentalData();
      }, []);
  return (
    <div>
        <h1>mentaldata</h1>
        {mentalNews.map((item) => {
            return(
            <div>
                <h2>{item.title}</h2>
                <a href={item.url}>{item.url}</a>
            </div>
            )
        })}
    </div>
  )
}

export default MentalHealth