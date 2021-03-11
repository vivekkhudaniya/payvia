import React from 'react'
import {Link} from 'react-router-dom'
export default class Header extends React.Component{
    render(){
        return(
            <div>
                <div class="container_fluid inner_header">

<div class="product_menu_logo">
    <img src="image/ll.png" /></div>
<div class="product_menu_inputbox">

    <input type="text" placeholder="what are you looking for ?" class="inputbox" required />

</div>

<div class="product_menu_menu">
    <ul>
        <li><Link to ="/">Top Categories</Link></li>
        <li><Link to ="/Product">Top Coupon</Link></li>
        <li><Link to ="/Description">Post Deal</Link></li>
    </ul>
</div>
<div class="check"><img src="image/mnu.png" /></div>
<div class="product_menu_menu_icon">
    <ul>
        <li>
            <a href="#"><img src="image/bell.png" /></a>
        </li>
        <li>
            <a href="#"> <img src="image/emaill.png" /></a>
        </li>
        <li>
            <a href="#"> <img src="image/lik.png" /></a>
        </li>
    </ul>

</div>

</div>
            </div>
        )
    }
}