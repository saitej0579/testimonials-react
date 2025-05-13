import React from "react";
import { useState } from 'react';
import { ImQuotesLeft,ImQuotesRight } from "react-icons/im";
import { FaAngleLeft,FaAngleRight } from "react-icons/fa6";
const Card = ({reviews}) => {
  const [index,setIndex] = useState(0);
  const leftHandler = ()=>{
      if(index === 0){
        setIndex(4);
      }
      else{
        setIndex(index-1)
      }
  }
  const rightHandler = ()=>{
      if(index === 4){
        setIndex(0);
      }
      else{
        setIndex(index+1)
      }
  }
  const supriseHandler = ()=>{
    setIndex(Math.floor(Math.random() * 5));
  }
    return (
      <div className="card-container">
        <img src={reviews[index].image} alt=""></img>
        <div className="card-names">
          <p className="card-name">{reviews[index].name}</p>
          <p className="card-role">{reviews[index].job}</p>
        </div>
        <ImQuotesLeft className="left-quote"></ImQuotesLeft>
        <p className="card-text">{reviews[index].text}</p>
        <ImQuotesRight className="right-quote"></ImQuotesRight>
        <div className="card-left-right">
          <FaAngleLeft onClick={leftHandler} className="left-btn"></FaAngleLeft>
          <FaAngleRight onClick={rightHandler} className="right-btn"></FaAngleRight>
        </div>
        <div>
          <button onClick={supriseHandler} className="surprise-btn">
            Surprise Me
          </button>
        </div>
      </div>
    );
};

export default Card;
