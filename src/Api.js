import React, { useEffect, useState } from "react";
import "./App.css";

const Api = () => {
  const [data, setdata] = useState([]);

  const loadData = async () => {
    const res = await fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts");
    setdata(await res.json());
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="r">
      {data.map((item) => {
        const { id, title, content, thumbnail , author } = item;
        return (
          <div className="rk" key={id}>
            <div className="card">
              <img src={thumbnail.large} alt="Avatar" />
              <div className="contain">
                <h4> {title} </h4>
                <p> {content} </p>
                <p> {author.name} </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
