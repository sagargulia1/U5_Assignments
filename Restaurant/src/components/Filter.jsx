import React from 'react'

export const Filter = ({filter,current,updatefilter}) => {
  return (
    <div className="container restaurants">
            <h1>50 restaurants</h1>
            <div className="restaurant-options"> 
            
               {Object.entries(filter).map(([key,value])=><div onClick={()=>{updatefilter(key)}} className={`restaurant-option ${
                 current==key?"underline":""
               }`}>{value}</div>)}
                
            </div>
        </div>
  )
}
