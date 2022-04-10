<template>
  <div class="header">
      <div class="container">
          <div class="logo">
              <img src="../assets/images/roku_logo.png">
          </div>
          <div class="nav">
              <ul>
                  <li><a href="/index">HOME</a></li>
                  <li><a href="/movies">VIDEO TOUR</a></li>
                  <li><a href="">KID</a></li>
                  <li><a href="">SUBSCRIBE</a></li>
                  <li><a href="/login">LOG IN</a></li>
              </ul>
          </div>
          <div class="login">
              <ul>
                  <li><img src="../assets/images/lognicon.png"></li>
                  <li><img src="../assets/images/searchicon.png"></li>
              </ul>
          </div>
      </div>
  </div>  
</template>

<script>
import  '../assets/css/public.css'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
