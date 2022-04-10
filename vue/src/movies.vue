<template>
  <Header/>
  <div class="one">
    <div class="oneimg">
          <img src="./assets/images/create_profiles_for_kids.png">
      </div>
      <div class="oneconcenter">
          <div class="onetitle">
              <p>CREATE PROFILES FOR KIDS.</p>
          </div>
          <div class="onec">
              <p>Send kids on adventures with their favorite characters in a space made</p>
              <p>just for them--free with your membership.</p>
          </div>
      </div>
  </div>
  <div class="bgpink">
    <div class="movielist">
        <div class="movieimg">
            <img src="./assets/images/video/arrival.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/beauty.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/brooklyn.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/colonia.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/deadpool.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/donjon.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/dunkirk.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/eddie.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/force.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/gravity.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/guardians.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/guardians2.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/hacksaw.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/logan.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/okja.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/pi.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/revenant.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/silver.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/trolls.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/walk.jpg">
        </div>
        <div class="movieimg">
            <img src="./assets/images/video/whiplash.jpg">
        </div>
    </div>
    <div class="onebutton">
        <button class="bg_blue">SIGN IN</button>
    </div>
  </div>
  <div class="videoinner">
    <video controls>
        <source src="./assets/video/avengers.mp4" type="video/mp4">
    </video>
  </div>
  <Footer/>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import  './assets/css/movie.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

