import React, { useEffect, useState } from "react";
import "./InfoContent.css";
import { Card } from "@material-ui/core";
import newsPic from "./breaking__news.jpg";
import SafetyTips from "./SafetyTips";

// gnews token 15a7f1426fb936cb4f17aca4945bb9d9
function InfoContent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const newsData = async () => {
      let articles = [];
      await fetch(
        "https://gnews.io/api/v3/search?q=covid&token=15a7f1426fb936cb4f17aca4945bb9d9"
      )
        .then((response) => response.json())
        .then((data) => {
          setNews(data.articles);
        });
    };
    newsData();
  }, []);

  console.log(news);

  return (
    <div className="infoContent">
      <div className="infoContent__safetyTips">
        <SafetyTips />
      </div>
      <div className="infoContent__news">
        <h1>News on Covid-19</h1>
        {news.length > 0 ? (
          news.map((country) => (
            <Card className="infoContent__desc">
              <div className="infoContent__descInner">
                <div className="infoContent__articleRef">
                  <h1 className="infoContent__articleTitle">{country.title}</h1>

                  <h2 className="infoContent__articleSource">{`Source: ${
                    country.source.name || "not listed"
                  }`}</h2>

                  <img src={country.image || newsPic} alt="news article pic" />
                </div>
                <div className="infoContent__articleContent">
                  {country.description}
                </div>
                {/*    <div className="infoContent__articleDesc">
                  {country.description}
                </div> */}
                <div className="infoContent__articleInfo">
                  <div className="infoContent__articleLink">
                    To see more,{" "}
                    <a href={country.url}>
                      Click me to see the rest of the story
                    </a>
                  </div>
                  <div className="infoContent__articlePublishedDate">
                    {`Published Time: ${country.publishedAt}`}
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <h1>loading....Will show more update news soon</h1>
        )}
      </div>
    </div>
  );
}

export default InfoContent;
