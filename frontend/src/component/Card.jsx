import React, { useEffect, useState } from "react";
import "../component/Card.scss";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Link } from "react-router-dom";

import axios from "axios";
import { MainContext } from "../Context/Context";
import { useContext } from "react";
const Card = () => { 
   const{basketItems,setBasketItems}=useContext(MainContext)

  const [data, setData] = useState([]);
  const [seacrhValue, setSearchValue] = useState([]);
  const [dummys, setDummy] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:7075/").then((res) => {
      setData(res.data);
    });
  }, [seacrhValue === "", dummys ? data : ""]);
  return (
    <div>
      <input
        placeholder="search...."
        onChange={(e) => {
          setSearchValue(e.target.value);
          setData(data.filter((item) => item.name.includes(seacrhValue)));
        }}
        type="text"
      />

      <button
        onClick={() => {
          setData([...data.sort((a, b) => a.price - b.price)]);
        }}
      >
        sort by price
      </button>
      <div className="cards">
        {data.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="card__img">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <div className="card__button">
                <button
                  onClick={() => {
                    axios
                      .delete(`http://localhost:7075/${item._id}`)
                      .then((res) => {
                        setDummy(true);
                        console.log("delete");
                      });
                  }}
                >
                  Delete
                </button>

                <button  onClick={()=>{
              setBasketItems([...basketItems,item])
            }}>Add to basket</button>
              </div>

              <div className="card__icon">
                <button>
                  <ThumbUpOffAltIcon />
                </button>
                <Link to="detail">Detail</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
