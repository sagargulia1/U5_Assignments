import React from 'react'


export const Navbar = ({userinfo,setsearch}) => {
  return (
      
    <section className="navbar">
        <div className="container">
            <img className="logo" src="assets/logo.svg"/>
            <div className="location">
                <span className="city"> {userinfo.city}</span>
                <span className="state">{userinfo.state}, {userinfo.country}</span>
            </div>
            <div className="navbar-options">
                <div className="navbar-option">
                    <span className="material-icons"> person_outline</span> Sign In
                </div>
                <div className="navbar-option">
                    <span className="material-icons">
                        shopping_bag
                        </span> Cart
                </div>
                <div className="navbar-option">
                    <span className="material-icons">support</span> Help
                </div>
                <div className="navbar-option">
                <input type="text" placeholder='Search Your Food' onChange={(e)=>{setsearch(e.target.value)}}/>
                    <span className="material-icons">search</span> Search
                </div>
            </div>
        </div>
    </section>
  )
}
