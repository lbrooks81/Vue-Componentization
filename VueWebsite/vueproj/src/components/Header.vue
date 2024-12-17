<template>
  <div class="header_section">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="logo"><a href="index.html"><img src="/images/logo.png"></a></div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item active" to="/App">
            <li class="nav-link">HOME</li>
          </router-link>
          <router-link class="nav-item" :to="{
            name: 'Dancing',
            params: { rendered: true }
          }">
            <li class="nav-link">TRAININGS</li>
          </router-link>
          <router-link class="nav-item" to="/Classes">
            <li class="nav-link">CLASSES</li>
          </router-link>
          <router-link class="nav-item" to="/Hours">
            <li class="nav-link">SHOWS</li>
          </router-link>
          <router-link class="nav-item" to="/About">
            <li class="nav-link">ABOUT</li>
          </router-link>
          <router-link class="nav-item" to="/Contact">
            <li class="nav-link">CONTACT</li>
          </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <div class="search_icon"><a href="#"><img src="/images/search-icon.png"></a></div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>





export default {
  name: "Header",
}

</script>



<style scoped>

</style>