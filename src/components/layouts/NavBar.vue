// eslint-disable-next-line vue/multi-word-component-names
<template>
  <header class="section-header">
        <section class="header-main border-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-3 col-md-12">
                        <a href="#" class="brand-wrap">
                            <img src="assets/images/logos/logodemo.png" height="50px" alt=""/>
                        </a>
                        <!-- brand-wrap.// -->
                    </div>
                    <div class="col-xl-6 col-lg-5 col-md-6">
                        <form action="#" class="search-header">
                            <div class="input-group w-100">
                                <select class="custom-select border-right" name="category_name">
                                    <option value="value">All</option>
                                    <option value="codex">Special</option>
                                    <option value="comments">Only best</option>
                                    <option value="content">Latest</option>
                                    <option value="content">The longest option</option>
                                </select>
                                <input type="text" class="form-control" placeholder="Search" />

                                <div class="input-group-append">
                                    <button class="btn btn-warning" type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <!-- search-wrap .end// -->
                    </div>
                    <!-- col.// -->
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="widgets-wrap float-md-right">
                            <div class="widget-header mr-3">
                                <a href="#" class="widget-view">
                                    <div class="icon-area">
                                        <i class="fa fa-user"></i>
                                        <span class="notify">3</span>
                                    </div>
                                    <small class="text">My profile</small>
                                </a>
                            </div>
                            <div class="widget-header mr-3">
                                <a href="#" class="widget-view">
                                    <div class="icon-area">
                                        <i class="fa fa-comment-dots"></i>
                                        <span class="notify">13</span>
                                    </div>
                                    <small class="text">Message</small>
                                </a>
                            </div>
                            <div class="widget-header mr-3">
                                <a href="#" class="widget-view">
                                    <div class="icon-area">
                                        <i class="fa fa-store"></i>
                                    </div>
                                    <small class="text">Orders</small>
                                </a>
                            </div>
                            <div class="widget-header">
                                <a href="#" class="widget-view">
                                    <div class="icon-area">
                                        <i class="fa fa-shopping-cart"></i>
                                    </div>
                                    <small class="text">Cart</small>
                                </a>
                            </div>
                        </div>
                        <!-- widgets-wrap.// -->
                    </div>
                    <!-- col.// -->
                </div>
                <!-- row.// -->
            </div>
            <!-- container.// -->
        </section>
        <!-- header-main .// -->

        <nav class="navbar navbar-main navbar-expand-lg border-bottom">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav"
                    aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="#">Trade shows</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/services">Services</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="#">Sell with us</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-md-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" to="#">Get the app</router-link>
                        </li>

                    </ul>
                </div>
                <!-- collapse .// -->
            </div>
            <!-- container .// -->
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>