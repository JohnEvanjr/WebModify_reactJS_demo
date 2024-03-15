import "./header.css"
import React from 'react'

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Heath&Fitness</span>
          <span className="headerTitleLg">Website</span>
        </div>
        <img className="headerImg" src={process.env.PUBLIC_URL + '/img/heathbanner2.jpg'} alt=""  />
    </div>
  )
}