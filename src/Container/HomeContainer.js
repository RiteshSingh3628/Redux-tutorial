import Home from "../components/Home";
import {connect} from 'react-redux'
import {addToCart,removeFromCart} from '../Services/Action/Action'


const mapStateToProps = state =>({
    cartData:state

})

const mapDispatchToProps = dispatch =>({
    addToCartHandler:data =>dispatch(addToCart(data)),
    removeFromCartHandler:data => dispatch(removeFromCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
