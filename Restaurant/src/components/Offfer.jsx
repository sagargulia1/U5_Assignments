import React from 'react'

export const Offfer = ({offer}) => {
  return (
    <section className="offers">
    <div className="container">
        {offer.map(e=> <img className="offer" src={e.offer}></img>)}
    </div>
</section>
  )
}
