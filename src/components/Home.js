import NewsItem from "./NewsItem";
import React, { useState, useEffect } from "react";
import Button from "./Button";
const Home = () => {
  const [newsData, setnewsData] = useState([]);
  const [pageNo, setpageNo] = useState(0);

  useEffect(() => {
    const getNewFromUrl = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&page=${pageNo}`
      );
      const jsonData = await response.json();
      setnewsData(jsonData.articles);
    };
    getNewFromUrl();
  }, [pageNo]);

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
  return (
    <div>
      <h1 className="heading">WELCOME TO NEWZZ</h1>
      <p className="headingpara">
        Get India's Latest News and Update Yourself Within Minutes
      </p>

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

export default Home;
