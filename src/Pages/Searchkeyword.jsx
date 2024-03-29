import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "../components/List";

export default function Searchkeyword() {
  const urlParams = new URLSearchParams(window.location.search);

  const [name, setname] = useState(urlParams.get("name"));

  const [results, setresult] = useState([]);
  const [results2, setresult2] = useState([]);

  const [type, setType] = useState("movies");
  const [count, setcount] = useState(1);

  const fetchData = async (id) => {
    const url = `https://api.themoviedb.org/3/discover/movie?with_keywords=${urlParams.get(
      "id"
    )}&page=${count}`;
    const url2 = `https://api.themoviedb.org/3/discover/tv?with_keywords=${urlParams.get(
      "id"
    )}&page=${count}`;

    const options = {
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_GAPI_KEY_ENV,
      },
    };
    try {
      const response1 = await axios.get(url, { ...options });
      const response2 = await axios.get(url2, { ...options });

      setresult(response1.data);
      setresult2(response2.data);
      console.log(response1.data);
    } catch (error) {
      console.error("error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [count]);
  return (
 
    <div className="wholepageofkeywordsearch">
       {results && 
       <div>
      <div className="boxthathastbt">

        <div id="titleks">
          Search {type} by keyword : "{name}"
        </div>
        <div className="wishlistbtms">
          <div
            id="moviebt"
            onClick={() => {
              setType("movies");
              let bt = document.getElementById("moviebt");
              bt.style.background = "white";
              bt.style.color = "black";
              let bt1 = document.getElementById("seriesbt");
              bt1.style.background = "black";
              bt1.style.color = "white";
            }}
          >
            movies
          </div>
          <div
            id="seriesbt"
            onClick={() => {
              setType("series");
              let bt = document.getElementById("seriesbt");
              bt.style.background = "white";
              bt.style.color = "black";
              let bt1 = document.getElementById("moviebt");
              bt1.style.background = "black";
              bt1.style.color = "white";
            }}
          >
            series
          </div>
        </div>
      </div>
      
      <div className="boxks">
        {type == "movies" ? (
          <List tren={results} movies="true" />
        ) : (
          <List tren={results2} movies="false" />
        )}
      </div>
      <div className="leftrightsym">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            if (count == 1 ){
                return null
            }
            else{
                setcount((count - 1));

            }
        
          }}
          fill="white"
          height="34"
          viewBox="0 -960 960 960"
          width="34"
        >
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setcount((count + 1));
           
          }}
          fill="white"
          height="34"
          viewBox="0 -960 960 960"
          width="34"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>
      <div className="pagecountr">Page {count}</div>
       </div>}
       
    </div>

        
  );

}
