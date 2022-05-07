import NewsItem from "./NewsItem";
import React, { useState, useEffect } from "react";
import Button from "./Button";
const Entertainment = ({apiKey, newsCategory}) => {
  const [newsData, setnewsData] = useState([]);
  const [pageNo, setpageNo] = useState(0);

  useEffect(() => {
    const getNewFromUrl = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${newsCategory}&page=${pageNo}`
      );
      const jsonData = await response.json();
      setnewsData(jsonData.articles);
    };
    getNewFromUrl();
  }, [pageNo, apiKey, newsCategory]);

  const handleClickp = async () => {
    if (pageNo > 1) {
      setpageNo((prevval) => {
        return prevval - 1;
      });
    }
  };

  const handleClickn = async () => {
    if (pageNo < 4) {
      setpageNo((prevval) => {
        return prevval + 1;
      });
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  



  return (
    <div>
      <h1 className="heading">{capitalizeFirstLetter(newsCategory)}</h1>


      <div className="btncontainer">
        <Button text="Previous" onClick={handleClickp} />
        <Button text="Next" width="66px" onClick={handleClickn} />
      </div>

      <div className="item-container">
        {newsData.map((data) => {
          return (
            <NewsItem
              key={data.urlToImage}
              urll={data.url}
              urlToImage={data.urlToImage}
              title={data.title}
              content={data.content}
            />
          );
        })}
      </div>


    </div>
  );
};

export default Entertainment;
