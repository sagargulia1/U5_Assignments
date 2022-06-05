import React from 'react';
import Item from './Item';
import db from "../db.json"
const Card = () => {
  return (
    <div>

    {db.map((item)=>{
          return <Item backgroundColor={item.id===1 ? "yellow" : "gray"} key={item.id} {...item}/ >
    })}


    </div>
  )
}

export default Card
