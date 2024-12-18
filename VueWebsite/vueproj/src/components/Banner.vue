<template>
  <div class="banner_section layout_padding">
    <div class="container-fluid">
      <div id="my_slider" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-6">
                <div class="banner_title">
                  <h1 class="dance_text">Dance beat</h1>
                  <p>Move with us - your ultimate dance journey starts here!</p>
                  <div class="banner-btn about-btn"><router-link to="/About">About Us</router-link></div>
                  <div class="banner-btn contact-btn"><router-link to="/Contact">Contact Us</router-link></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-1"><img src="/images/img-1.png"></div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-6">
                <div class="banner_title">
                  <h1 class="dance_text">Dance beat</h1>
                  <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magn</p>
                  <div class="banner-btn about-btn"><router-link to="/About">About Us</router-link></div>
                  <div class="banner-btn contact-btn"><router-link to="Contact">Contact Us</router-link></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-1"><img src="/images/img-1.png"></div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-6">
                <div class="banner_title">
                  <h1 class="dance_text">Dance beat</h1>
                  <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magn</p>
                  <div class="banner-btn about-btn"><router-link to="about.html">About Us</router-link></div>
                  <div class="banner-btn contact-btn"><router-link to="contact.html">Contact Us</router-link></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="img-1"><img src="/images/img-1.png"></div>
              </div>
            </div>
          </div>
        </div>
        <button ref="l-btn" class="carousel-control-prev" type="button"
                data-bs-target="#my_slider" data-bs-slide="prev">
          <i class="fa fa-left"><img src="/images/left-icon.png"></i>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#my_slider" data-bs-slide="next">
          <i class="fa fa-right"><img src="/images/right-icon.png"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="ram">
    <div class="border_bg"></div>
  </div>
</template>

<script>
export default {
  name: "Banner",
}
</script>



<style>

</style>