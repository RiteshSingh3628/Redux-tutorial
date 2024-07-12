import React from 'react'

function Header(props) {
    console.log("Header",props)
  return (
    <div>
        <div className="add-to-cart">
        <img src="https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg" alt="" />
        <div className="cart-counter">{}</div>
      </div>
    </div>
  )
}

export default Header