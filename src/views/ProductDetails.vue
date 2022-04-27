
<template>
    <section class="padding-bottom">
        <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">MEN'S SHOES FASHION</h4>
        </header>
		<div class="card product-details">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
					<div class="preview-pic tab-content">
						<div class="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
						<div class="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252"/></div>
						<div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						<div class="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						<div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
					</div>
					<ul class="preview-thumbnail nav nav-tabs">
						<li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						<li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						<li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						<li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						<li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
					</ul>
						
					</div>
					<div class="details col-md-6">
						<h4 class="product-title">men's shoes fashion</h4>
						
						<p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h5 class="price">current price: <span>$180</span></h5>
						
						
						
                        <div class="container mt-5">
                            <div class="row">
                                
                                <div class="col-sm-4 col-6">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-dark btn-sm" id="minus-btn"><i class="fa fa-minus"></i></button>
                                        </div>
                                        <input type="number" id="qty_input" class="form-control" value="1" min="1">
                                        <div class="input-group-prepend">
                                            <button class="btn btn-dark btn-sm" id="plus-btn"><i class="fa fa-plus"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-8 col-6"></div>
                            </div>
                        </div>
                         
						<div class="action">
							<button class="add-to-cart btn btn-default" type="button">add to cart</button>
                            <button class="buy-now btn btn-default" type="button">buy now</button>
							<button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>

    </section>

     <!-- =============== SECTION 1 sample 2 =============== -->
        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">RELATED PRODUCTS</h4>
            </header>

            <div class="card card-home-category">
                <div class="row">
                    <div class="col-6 col-md-3 col-sm-6">
                        <div class="product-grid4">
                            <div class="product-image4">
                                <router-link to="/product-page">
                                    <img class="pic-1" src="assets/images/items/7.jpg">
                                    <img class="pic-2" src="assets/images/items/7.jpg">
                                </router-link>
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-bag"></i></a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><router-link to="/product-page">Women's Black Top</router-link></h3>
                                <div class="price">
                                    TZS 50,000
                                </div>
                                <a class="add-to-cart" href="">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col-sm-6">
                        <div class="product-grid4">
                            <div class="product-image4">
                                <router-link to="/product-page">
                                    <img class="pic-1" src="assets/images/items/14.jpg">
                                    <img class="pic-2" src="assets/images/items/14.jpg">
                                </router-link>
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-bag"></i></a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><router-link to="/product-page">Women's Black Top</router-link></h3>
                                <div class="price">
                                    TZS 550,000
                                </div>
                                <a class="add-to-cart" href="">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col-sm-6">
                        <div class="product-grid4">
                            <div class="product-image4">
                                <router-link to="/product-page">
                                    <img class="pic-1" src="assets/images/items/11.jpg">
                                    <img class="pic-2" src="assets/images/items/11.jpg">
                                </router-link>
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-bag"></i></a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><router-link to="/product-page">Women's Black Top</router-link></h3>
                                <div class="price">
                                    TZS 1,200,000
                                </div>
                                <a class="add-to-cart" href="">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-3 col-sm-6">
                        <div class="product-grid4">
                            <div class="product-image4">
                                <router-link to="/product-page">
                                    <img class="pic-1" src="assets/images/items/9.jpg">
                                    <img class="pic-2" src="assets/images/items/9.jpg">
                                </router-link>
                                <ul class="social">
                                    <li><a href="#"><i class="fa fa-eye"></i></a></li>
                                    <li><a href="#"><i class="fa fa-shopping-bag"></i></a>
                                    </li>
                                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <div class="product-content">
                                <h3 class="title"><router-link to="/product-page">Women's Black Top</router-link></h3>
                                <div class="price">
                                    TZS 20,000
                                </div>
                                <a class="add-to-cart" href="">ADD TO CART</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- row.// -->
            </div>
            <!-- card.// -->
        </section>
        <!-- =============== SECTION 1 END =============== -->    
</template>

<script>

export default {
    
}

	/*$(document).ready(function(){
    $('#qty_input').prop('disabled', true);
    $('#plus-btn').click(function(){
    	$('#qty_input').val(parseInt($('#qty_input').val()) + 1 );
    	    });
        $('#minus-btn').click(function(){
    	$('#qty_input').val(parseInt($('#qty_input').val()) - 1 );
    	if ($('#qty_input').val() == 0) {
			$('#qty_input').val(1);
		}

    	    });
 });*/

</script>

<style scoped>
.btn-sm{
    border-radius: 0;
}
input { 
    text-align: center; 
}
.padding-bottom{
    margin-top: 20px;
}
.product-details{
    background:#fff !important;
}
    img {
  max-width: 100%; }

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px; } }

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px; }
  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
      max-width: 100%;
      display: block; }
    .preview-thumbnail.nav-tabs li a {
      padding: 0;
      margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
      margin-right: 0; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; }

.card {
  margin-top: 10px;
  padding: 2em;
  line-height: 1.5em; }

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; } }

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: 600; }

.checked, .price span {
  color: #ff9017; }

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px; }

.product-title {
  margin-top: 0;
  font-size: 18px; }
  .price, .colors{
      font-size: 16px;
  }

.size {
  margin-right: 10px; }
  .size:first-of-type {
    margin-left: 40px; }

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px; }
  .color:first-of-type {
    margin-left: 20px; }

.add-to-cart, .like, .buy-now {
  background: #ff9017;
  padding: 0.65em 0.85em;
  border: none;
  margin: 1%;
  text-transform: UPPERCASE;
  font-weight: 400;
  color: #fff;
  -webkit-transition: background .3s ease;
          transition: background .3s ease; }
.buy-now{
    background: #d7292a;
}
.add-to-cart:hover, .like:hover {
    background:#fff;
    color: #ff9017;
    border:1px solid #ff9017; 
}
.buy-now:hover {
    background:#fff;
    color: #d7292a;
    border:1px solid #d7292a; 
}



.not-available {
  text-align: center;
  line-height: 2em; }
  .not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff; }

.orange {
  background: #ff9017; }

.green {
  background: #85ad00; }

.blue {
  background: #0076ad; }

.tooltip-inner {
  padding: 1.3em; }

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@media only screen and (max-width: 767px) {
    .product-details{
        padding-left:2%;
        padding-right:2%;
    }

    .product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: 600; }

  .product-title {
  font-size: 16px; }
  .price, .colors{
      font-size: 14px;
  }
}            

</style>