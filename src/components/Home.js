import React from 'react'
import '../App.css';

function Home(props) {
  console.log("props",props)
  return (
    <div>
      <h1>Cart</h1>
      
      <div className='cart'>
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img src="https://i.gadgets360cdn.com/products/large/iphone-15-plus-553x800-1694549227.jpg" alt="iphone" />
            
          </div>
          <div className="text-wrapper item">
            <span>
              I-Phone
            </span>
            <span>
              Price: $1000.00
            </span>
          </div>

          <div className="btn-wrapper">
            <button 
            onClick={()=>props.addToCartHandler({price:1000,name:'Iphone 15',})}
            >Add TO Cart</button>
          </div>
          <div className="btn-wrapper">
            <button>Remove</button>
          </div>

        </div>

        
      </div>


    </div>
    
  )
}

export default Home