import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function List({
  tren,
  putInDbMovies,
  putInDbSeries,
  mylist,
  deleteindb,
  movies,
  
}) {
  const navigate = useNavigate();
  const [reviewmy, setreviewmy] = useState(false);

  const handleButtonClick = (id) => {
   
      navigate(`/detes/${id}?m=${movies}`);

 // window.location.href=`/detes/${id}?m=${movies}`;
 
  };


  return (
    <>
      {/* <div className="btmvser">
                      <div
                        id="mvbt"
                        onClick={() => {
                          setseries1('false');
                          let bt = document.getElementById("mvbt");
                          bt.style.background = "white";
                          bt.style.color = "black";
                          let bt1 = document.getElementById("svbt");
                          bt1.style.background = "black";
                          bt1.style.color = "white";
                        }}
                      >
                        movie
                      </div>
                      <div
                        id="svbt"
                        onClick={() => {
                          setseries1('true');
                          let bt = document.getElementById("svbt");
                          bt.style.background = "white";
                          bt.style.color = "black";
                          let bt1 = document.getElementById("mvbt");
                          bt1.style.background = "black";
                          bt1.style.color = "white";
                        }}
                      >
                        series
                      </div>
                    </div> */}
      {/* {reviewmy && (
        <div className="rvmybox">
          {" "}
          <div className="innerrvbox">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setreviewmy(false);
              }}
              fill="white"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              id="myrvboxclose"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            <div id="ratinguser">
              <div>Your Rating</div>
              <div className="ratinguserinner">
                <svg
                fill="gold"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
                <svg
                fill="gold"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
                <svg
                fill="gold"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
                <svg
                                fill="gold"

                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
                <svg
                                fill="gold"

                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                </svg>
                
              </div>
            </div>
            <div id="reviewuser">
              <div>Your Review for this Movie</div>
              <div id="rvinput">
                <textarea placeholder="write here" />
              </div>
              <svg
                     className="sendsymbol"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => {
             
                        sendcompletedidtodb(ClickedCompledid);
                      }}
                      fill="white"
                      opacity="1"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                    </svg>
            </div>
          </div>
        </div>
      )} */}
      {tren.results &&
        tren.results.map(
          (item, index) =>
            (item.poster_path || item.URL) && (
              <div key={index} id="trengallary">
                <div id="outimg">
                  {mylist ? (
                    <svg
                      onClick={(event) => {
                        deleteindb(item.id);
                        event.target.parentElement.parentElement.parentElement.remove();
                        console.log(
                          event.target.parentElement.parentElement.parentElement
                        );
                      }}
                      id="tdots"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                      fill="white"
                    >
                      <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
                    </svg>
                  ) : (
                    <svg
                      id="tdots"
                      onClick={() => {
  if (putInDbMovies) {
    putInDbMovies(item.id, item.poster_path, item.title);
  }
  if (putInDbSeries) {
    putInDbSeries(item.id, item.poster_path, item.name);
  }
}}

                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path
                        fill="white"
                        d="M200-120v-640q0-33 23.5-56.5T280-840h400q33
                     0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 
                     200-86 200 86v-518H280v518Zm0-518h400-400Z"
                      />
                    </svg>
                  )}
                  {mylist && (
                    <svg
                      className="checksvg"
                      onClick={() => {
                        setreviewmy(true);
                        setclieckedcomid(item.id);
                      }}
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                  )}

                  <img
                    onClick={() => {
                      handleButtonClick(item.id);

                      
                    }} 

                    
                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path || item.URL}`}
                    alt={item.title || "Image Alt Text"}
                  />
<a href={`http://localhost:5173/detes/${item.id}?m=${movies}`} id="clickthis"></a>
                </div>
                <div className="trndetes">
                  <div id="listcon">
                    <div>{item.title || item.name }</div>
                    <div id="year">
                      {item.release_date ? item.release_date.slice(0, 4) : ""}
                    </div>
                  </div>{" "}
                  <div id="starstrn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gold"
                      height="15"
                      viewBox="0 -960 960 960"
                      width="15"
                    >
                      <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                    </svg>

                    {item.vote_average ? item.vote_average.toFixed(1) : ""}
                  </div>
                </div>
              </div>
            )
        )}
    </>
  );
}
