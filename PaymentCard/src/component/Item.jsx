import React from "react";

const Item = (props) => {
  console.log(props);
  return (
    <div id="card">
      <div id="card1">
        <div id="laft">
          <p id="para"> {props.Date}</p>
          <button id="btn">Case Study</button>
          <h1 id="h1">{props.title}</h1>
          <h2 id="h2">{props.title2}</h2>
        </div>
        <div id="right">
            <img id="img" src={props.img} alt="yaha img hai"/>
            <div id="right2"><i id='arrow' class="fa fa-long-arrow-right"  aria-hidden="true"></i></div>

        </div>
      </div>
    </div>
  );
};

export default Item;
