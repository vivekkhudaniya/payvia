import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
export default class Index extends React.Component {
    constructor(){
        super();
        this.state = {name:"Vivek"}
    }
    render() {
        setTimeout(() =>{
            this.setState({name:"Bob"})
        },1000)
        return (
            <div>
                {this.state.name}
               <Header/>

                <div class="container_fluid abc">
                    <div class="container">
                        <div class="top_banner">
                            <div class="top_banner_left"><img src="image/146462.jpg" /></div>
                            <div class="top_banner_right">
                                <h4>Live Deals</h4>
                                <ul>
                                    <li>
                                        <div class="banner_left"><img src="image/medium_13600_download.png" /></div>
                                        <div class="banner_middle">
                                            <p>LOOT Back- Crocs Footwears at </p>
                                            <p>Flat Rs. 500 + FREE Shipping</p>
                                            <p><span class="price_color">4999</span>500</p>
                                        </div>
                                        <div class="banner_right">36
                        <p>viewing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="banner_left"><img src="image/medium_151801_121.jpg" /></div>
                                        <div class="banner_middle">
                                            <p>LOOT Back- Crocs Footwears at </p>
                                            <p>Flat Rs. 500 + FREE Shipping</p>
                                            <p><span class="price_color">4999 </span>500</p>
                                        </div>
                                        <div class="banner_right">36
                        <p>viewing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="banner_left"><img src="image/medium_145317_vgsbdanfsgd.jpg" /></div>
                                        <div class="banner_middle">
                                            <p>LOOT Back- Crocs Footwears at </p>
                                            <p>Flat Rs. 500 + FREE Shipping</p>
                                            <p><span class="price_color">4999</span>500</p>
                                        </div>
                                        <div class="banner_right">36
                        <p>viewing</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="container_fluid abc">
                    <div class="container">
                        <div class="banners">
                            <ul>
                                <li><img src="image/facewash.png" /></li>
                                <li><img src="image/sui-dhaga-prime-banner.png" /></li>
                                <li><img src="image/letsshave-desktop-sale-banner.png" /></li>
                                <li><img src="image/facewash.png" /></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="container_fluid abc">
                    <div class="container">
                        <div class="need">
                            <div class="need_coupon">
                                <div class="coupon">Need a coupon ?</div>
                                <div class="get_it_here">
                                    <input type="button" class="button" value="Get it here" />
                                </div>
                                <div class="honey">honey</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container_fluid abc">
                    <div class="container">
                        <div class="featured_detail">
                            <div class="Featured_Category_logo"> <img src="image/hand.png" /></div>
                            <div class="Featured_Category_text">
                                <h2>Featured Details </h2></div>
                            <ul>
                                <li>
                                    <div class="featured_detail_image">
                                        <div class="featured_detail_image_image"><img src="image/jeans.png" /></div>
                                        <div class="featured_detail_image_price">
                                            <p><strike>₹4999</strike></p>
                                            <h2>₹299</h2></div>
                                    </div>
                                    <div class="featured_detail_descreption">
                                        <p>Grab fast: Flat Rs 300
                        <br /> Cashback on branded jeans </p>
                                    </div>
                                </li>

                                <li>
                                    <div class="featured_detail_image">
                                        <div class="featured_detail_image_image"><img src="image/ketchup.png" /></div>
                                        <div class="featured_detail_image_price">
                                            <p><strike>₹4999</strike></p>
                                            <h2>₹299</h2></div>
                                    </div>
                                    <div class="featured_detail_descreption">
                                        <p>Grab fast: Flat Rs 300
                        <br /> Cashback on branded jeans </p>
                                    </div>
                                </li>

                                <li>
                                    <div class="featured_detail_image">
                                        <div class="featured_detail_image_image"><img src="image/cashback.png" /></div>
                                        <div class="featured_detail_image_price">
                                            <p><strike>₹4999</strike></p>
                                            <h2>₹299</h2></div>
                                    </div>
                                    <div class="featured_detail_descreption">
                                        <p>Grab fast: Flat Rs 300
                        <br /> Cashback on branded jeans </p>
                                    </div>
                                </li>

                                <li>
                                    <div class="featured_detail_image">
                                        <div class="featured_detail_image_image"><img src="image/razor.jpg" /></div>
                                        <div class="featured_detail_image_price">
                                            <p><strike>₹4999</strike></p>
                                            <h2>₹299</h2></div>
                                    </div>
                                    <div class="featured_detail_descreption">
                                        <p>Grab fast: Flat Rs 300
                        <br /> Cashback on branded jeans </p>
                                    </div>
                                </li>

                            </ul>

                            <ul>
                                <li>
                                    <div class="featured_detail_image">
                                        <div class="featured_detail_image_image"><img src="image/large_151076_a.png" /></div>
                                        <div class="featured_detail_image_price">
                                            <p><strike>₹4999</strike></p>
                                            <h2>₹299</h2></div>
                                    </div>
                                    <div class="featured_detail_descreption">
                                        <p>Grab fast: Flat Rs 300
                        <br /> Cashback on branded jeans </p>
                                    </div>
                                </li>

                                <li>
                                    <div class="featured_detail_image">
                                        <div class="featured_detail_image_image"><img src="image/small_151292_lybrate-free-sample.jpg" /></div>
                                        <div class="featured_detail_image_price">
                                            <p><strike>₹4999</strike></p>
                                            <h2>₹299</h2></div>
                                    </div>
                                    <div class="featured_detail_descreption">
                                        <p>Grab fast: Flat Rs 300
                        <br /> Cashback on branded jeans </p>
                                    </div>
                                </li>

                                <li>
                                    <div class="featured_detail_image">
                                        <div class="featured_detail_image_image"><img src="image/small_147816_ankursingh.jpg" /></div>
                                        <div class="featured_detail_image_price">
                                            <p><strike>₹4999</strike></p>
                                            <h2>₹299</h2></div>
                                    </div>
                                    <div class="featured_detail_descreption">
                                        <p>Grab fast: Flat Rs 300
                        <br /> Cashback on branded jeans </p>
                                    </div>
                                </li>

                                <li>
                                    <div class="featured_detail_image">
                                        <div class="featured_detail_image_image"><img src="image/small_151533_gbndgfhgbn.jpg" /></div>
                                        <div class="featured_detail_image_price">
                                            <p><strike>₹4999</strike></p>
                                            <h2>₹299</h2></div>
                                    </div>
                                    <div class="featured_detail_descreption">
                                        <p>Grab fast: Flat Rs 300
                        <br /> Cashback on branded jeans </p>
                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>

                <div class="container_fluid abc">
                    <div class="container">
                        <div class="deals">
                            <ul>
                                <li>HOT DEAL</li>
                                <li>100% CASHBACK </li>
                                <li>TRENDING DEAL</li>
                                <li>COUPONS</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="container_fluid abc">
                    <div class="container">
                        <div class="hotdeals_range">
                            <ul>
                                <li>
                                    <div class="hotdeals_range_image"><img src="image/large_141930_1q.png" /></div>
                                    <div class="hotdeals_range_data">
                                        <p> Get Flat Rs. 50 Off + Rs. 50
                        <br /> Cashback On Milmila !! Hurry !!</p>
                                    </div>

                                    <div class="hotdeal">
                                        <div class="hotdeal_left"><img src="image/amazon-logo-rgb.png" />
                                            <p><strike>₹ 432</strike></p>
                                            <h4>₹ 240</h4> </div>
                                        <div class="hotdeal_right">
                                            <p> 21 min ago</p>
                                            <input type="button" class="buttonn" value="SHOP NOW" /> </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="hotdeals_range_image"><img src="image/large_151770_ertytyjyjy.jpg" /></div>
                                    <div class="hotdeals_range_data">
                                        <p> Get Flat Rs. 50 Off + Rs. 50
                        <br /> Cashback On Milmila !! Hurry !!</p>
                                    </div>

                                    <div class="hotdeal">
                                        <div class="hotdeal_left"><img src="image/amazon-logo-rgb.png" />
                                            <p><strike>₹ 432</strike></p>
                                            <h4>₹ 240</h4> </div>
                                        <div class="hotdeal_right">
                                            <p> 21 min ago</p>
                                            <input type="button" class="buttonn" value="SHOP NOW" /> </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="hotdeals_range_image"><img src="image/large_141226_2.png" /></div>
                                    <div class="hotdeals_range_data">
                                        <p> Get Flat Rs. 50 Off + Rs. 50
                        <br /> Cashback On Milmila !! Hurry !!</p>
                                    </div>

                                    <div class="hotdeal">
                                        <div class="hotdeal_left"><img src="image/amazon-logo-rgb.png" />
                                            <p><strike>₹ 432</strike></p>
                                            <h4>₹ 240</h4> </div>
                                        <div class="hotdeal_right">
                                            <p> 21 min ago</p>
                                            <input type="button" class="buttonn" value="SHOP NOW" /> </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="hotdeals_range_image"><img src="image/large_143598_tyjjyukjuu.jpg" /></div>
                                    <div class="hotdeals_range_data">
                                        <p> Get Flat Rs. 50 Off + Rs. 50
                        <br /> Cashback On Milmila !! Hurry !!</p>
                                    </div>

                                    <div class="hotdeal">
                                        <div class="hotdeal_left"><img src="image/amazon-logo-rgb.png" />
                                            <p><strike>₹ 432</strike></p>
                                            <h4>₹ 240</h4> </div>
                                        <div class="hotdeal_right">
                                            <p> 21 min ago</p>
                                            <input type="button" class="buttonn" value="SHOP NOW" /> </div>
                                    </div>
                                </li>

                            </ul>

                            <ul>
                                <li>
                                    <div class="hotdeals_range_image"><img src="image/large_151827_a2.jpg" /></div>
                                    <div class="hotdeals_range_data">
                                        <p> Get Flat Rs. 50 Off + Rs. 50
                        <br /> Cashback On Milmila !! Hurry !!</p>
                                    </div>

                                    <div class="hotdeal">
                                        <div class="hotdeal_left"><img src="image/amazon-logo-rgb.png" />
                                            <p><strike>₹ 432</strike></p>
                                            <h4>₹ 240</h4> </div>
                                        <div class="hotdeal_right">
                                            <p> 21 min ago</p>
                                            <input type="button" class="buttonn" value="SHOP NOW" /> </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="hotdeals_range_image"><img src="image/large_151848_a1.jpg" /></div>
                                    <div class="hotdeals_range_data">
                                        <p> Get Flat Rs. 50 Off + Rs. 50
                        <br /> Cashback On Milmila !! Hurry !!</p>
                                    </div>

                                    <div class="hotdeal">
                                        <div class="hotdeal_left"><img src="image/amazon-logo-rgb.png" />
                                            <p><strike>₹ 432 </strike></p>
                                            <h4>₹ 240</h4> </div>
                                        <div class="hotdeal_right">
                                            <p> 21 min ago</p>
                                            <input type="button" class="buttonn" value="SHOP NOW" /> </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="hotdeals_range_image"><img src="image/large_141115_7uuil.jpg" /></div>
                                    <div class="hotdeals_range_data">
                                        <p> Get Flat Rs. 50 Off + Rs. 50
                        <br /> Cashback On Milmila !! Hurry !!</p>
                                    </div>

                                    <div class="hotdeal">
                                        <div class="hotdeal_left"><img src="image/amazon-logo-rgb.png" />
                                            <p><strike>₹ 432</strike></p>
                                            <h4>₹ 240</h4> </div>
                                        <div class="hotdeal_right">
                                            <p> 21 min ago</p>
                                            <input type="button" class="buttonn" value="SHOP NOW" /> </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="hotdeals_range_image"><img src="image/large_140216_bdwngehr.png" /></div>
                                    <div class="hotdeals_range_data">
                                        <p> Get Flat Rs. 50 Off + Rs. 50
                        <br /> Cashback On Milmila !! Hurry !!</p>
                                    </div>

                                    <div class="hotdeal">
                                        <div class="hotdeal_left"><img src="image/amazon-logo-rgb.png" />
                                            <p><strike>₹ 432</strike></p>
                                            <h4>₹ 240</h4> </div>
                                        <div class="hotdeal_right">
                                            <p> 21 min ago</p>
                                            <input type="button" class="buttonn" value="SHOP NOW" /> </div>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>

                <div class="container_fluid abc">
                    <div class="container">
                        <div class="load_more">
                            <input type="button" class="buttn" value="LOAD MORE" />
                        </div>
                    </div>
                </div>

                <div class="container_fluid abcd">
                    <div class="container">
                        <div class="top_cashback_store">
                            <div class="top_cashback_logo"> <img src="image/rup_imagee.jpg" /></div>
                            <div class="top_cashback_text">
                                <h2>Top Cashback Stores </h2></div>
                            <ul>
                                <li>
                                    <div class="top_cashback_image"><img src="image/28.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="top_cashback_image"><img src="image/2860.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="top_cashback_image"><img src="image/3248.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="top_cashback_image"><img src="image/127.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="top_cashback_image"><img src="image/3130.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>

                            </ul>

                            <ul>
                                <li>
                                    <div class="top_cashback_image"><img src="image/2051.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="top_cashback_image"><img src="image/127.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="top_cashback_image"><img src="image/3060.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="top_cashback_image"><img src="image/2860.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="top_cashback_image"><img src="image/842.jpg" /></div>
                                    <div class="top_cashback_descreption">
                                        <p><span class="rupees_color">₹ 600</span> cashback</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="container_fluid abc">
                        <div class="container">
                            <div class="product_range">
                                <div class="heading_logo"> <img src="image/rupees.png" /></div>
                                <div class="heading_text">
                                    <h2>Top Cashback Deals</h2></div>
                                <ul>
                                    <li>
                                        <div class="product_range_image"><img src="image/large_146077_sdx.png" /></div>
                                        <div class="product_range_data">
                                            <h3>₹50.00 Cashback</h3>
                                            <p> Get Flat Rs. 50 Off + Rs. 50
                            <br /> Cashback On Milmila !! Hurry !!</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product_range_image"><img src="image/large_150384_35825612202018.png" /></div>
                                        <div class="product_range_data">
                                            <h3>₹50.00 Cashback</h3>
                                            <p> Get Flat Rs. 50 Off + Rs. 50
                            <br /> Cashback On Milmila !! Hurry !!</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product_range_image"><img src="image/large_151076_a.png" /></div>
                                        <div class="product_range_data">
                                            <h3>₹50.00 Cashback</h3>
                                            <p> Get Flat Rs. 50 Off + Rs. 50
                            <br /> Cashback On Milmila !! Hurry !!</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product_range_image"><img src="image/large_151132_a.png" /></div>
                                        <div class="product_range_data">
                                            <h3>₹50.00 Cashback</h3>
                                            <p> Get Flat Rs. 50 Off + Rs. 50
                            <br /> Cashback On Milmila !! Hurry !!</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="container_fluid abc">
                        <div class="container">
                            <div class="product_range">
                                <div class="heading_logo"> <img src="image/rupees.png" /></div>
                                <div class="heading_text">
                                    <h2>Trending Coupons</h2></div>
                                <ul>
                                    <li>
                                        <div class="product_range_image"><img src="image/large_146077_sdx.png" /></div>
                                        <div class="product_range_data">
                                            <h3>₹50.00 Cashback</h3>
                                            <p> Get Flat Rs. 50 Off + Rs. 50
                            <br /> Cashback On Milmila !! Hurry !!</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product_range_image"><img src="image/large_150384_35825612202018.png" /></div>
                                        <div class="product_range_data">
                                            <h3>₹50.00 Cashback</h3>
                                            <p> Get Flat Rs. 50 Off + Rs. 50
                            <br /> Cashback On Milmila !! Hurry !!</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product_range_image"><img src="image/large_151076_a.png" /></div>
                                        <div class="product_range_data">
                                            <h3>₹50.00 Cashback</h3>
                                            <p> Get Flat Rs. 50 Off + Rs. 50
                            <br /> Cashback On Milmila !! Hurry !!</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product_range_image"><img src="image/large_151132_a.png" /></div>
                                        <div class="product_range_data">
                                            <h3>₹50.00 Cashback</h3>
                                            <p> Get Flat Rs. 50 Off + Rs. 50
                            <br /> Cashback On Milmila !! Hurry !!</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="container_fluid abc">
                        <div class="container">

                            <div class="Featured_Category">
                                <div class="Featured_Category_logo"> <img src="image/featured.png" /></div>
                                <div class="Featured_Category_text">
                                    <h2>Featured Categorys</h2></div>
                                <ul>
                                    <li>
                                        <div class="Featured_Category_image"><img src="image/10.png" /></div>
                                        <div class="Featured_Category_descreption">footware</div>
                                    </li>

                                    <li>
                                        <div class="Featured_Category_image"><img src="image/14.png" /></div>
                                        <div class="Featured_Category_descreption">Electronic</div>
                                    </li>

                                    <li>
                                        <div class="Featured_Category_image"><img src="image/15.png" /></div>
                                        <div class="Featured_Category_descreption">Travel</div>
                                    </li>

                                    <li>
                                        <div class="Featured_Category_image"><img src="image/16.png" /></div>
                                        <div class="Featured_Category_descreption">Food</div>
                                    </li>

                                    <li>
                                        <div class="Featured_Category_image"><img src="image/17.png" /></div>
                                        <div class="Featured_Category_descreption">Grocery</div>
                                    </li>
                                </ul>

                                <ul>
                                    <li>
                                        <div class="Featured_Category_image"><img src="image/26.png" /></div>
                                        <div class="Featured_Category_descreption">Entertainment</div>
                                    </li>

                                    <li>
                                        <div class="Featured_Category_image"><img src="image/33.png" /></div>
                                        <div class="Featured_Category_descreption">Loot</div>
                                    </li>

                                    <li>
                                        <div class="Featured_Category_image"><img src="image/39.png" /></div>
                                        <div class="Featured_Category_descreption">Free sample in india</div>
                                    </li>

                                    <li>
                                        <div class="Featured_Category_image"><img src="image/42.png" /></div>
                                        <div class="Featured_Category_descreption">Credit card</div>
                                    </li>

                                    <li>
                                        <div class="Featured_Category_image"><img src="image/31.png" /></div>
                                        <div class="Featured_Category_descreption">Fashion</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="container_fluid abc">
                        <div class="container">
                            <div class="we_are_in_news">

                                <div class="Featured_Category_logo"> <img src="image/news.png" /></div>
                                <div class="Featured_Category_text">
                                    <h2>We're In News</h2></div>

                                <div class="we_are_in_news_picture"><img src="image/press-logo (1).png" /></div>

                            </div>
                        </div>
                    </div>

                    <Footer/>

                   
                </div>
        
</div>
        )  
                    }
                }