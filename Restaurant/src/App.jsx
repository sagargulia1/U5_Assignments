import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Offfer } from './components/Offfer';
import { Filter } from './components/Filter';
import { Restaurant } from './components/Restaurant';
import userinfo from "./data/userinfo.json"
import offer from "./data/offerdata.json"
import restaurant from "./data/retaurant.json"
import { useState } from 'react';
let filter = {
    
  1: "Cost High to Low",
  2: "Cost Low to High",
  3: "Ratings",
  4: "Delivery Time",
  5: "Relevance",

}

function App() {
  const [filterdata , setfilter] = useState("")
  const [data , setdata] = useState(restaurant)
  const [search , setsearch] = useState("")
  
  const updatefilter=(value)=>{
    switch(value){
      case "1":{
        setfilter(1)
        data.sort((a,b)=>(b.costfortwo-a.costfortwo))
        setdata(data)
        break;
      }
      case "2":{
        setfilter(2)
        data.sort((a,b)=>(a.costfortwo-b.costfortwo))
        setdata(data)
        break;
      }
      case "3":{
        setfilter(3)
        data.sort((a,b)=>(b.rating-a.rating))
        setdata(data)
        break;
      }
      case "4":{
        setfilter(4)
        data.sort((a,b)=>(a.deliveryTimings-b.deliveryTimings))
        setdata(data)
        break;
      }
      case "5":{
        setfilter(5)
        // data.sort((a,b)=>(a.deliveryTimings-b.deliveryTimings))
        setdata(restaurant)
        break;
      }
      default:{
        setdata(restaurant)
        break;
      }
    }
   }
  


  return (
    <div >
     <Navbar setsearch={setsearch} userinfo={userinfo.location}></Navbar>
     <Offfer offer={offer}></Offfer>
     <section className='near-you'>
       <Filter  current={filterdata} filter={filter} updatefilter={updatefilter}></Filter>
       <Restaurant search={search} restaurant={data}></Restaurant>
     </section>
    </div>
  );
}

export default App;
