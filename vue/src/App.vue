<template>
  <Header/>
  <div class="one">
      <div class="onecon">
          <div class="onetitle">
              <p>Roku Flashback</p>
          </div>
          <div class="onec">
              <p>WELCOME TO</p>
              <p>YOUR PERSINAL VIDEO PLACE</p>
          </div>
          <div class="onebutton">
              <button class="bg_purple">WATCH NOW</button>
          </div>
          <div class="onebom">
              <p>Watching Anywhere,Enjoy Anytime</p>
          </div>
      </div>
      <div class="oneimg">
          <img src="./assets/images/avengers.png">
      </div>
  </div>
  <div class="bgblack">
      <div class="threetitle">
          <p>VIDEO TOUR</p>
      </div>
      <div class="threecon">
          <p>Unlimited movies,TV shows,and more.</p>
          <p>Watching Anywhere,Enjoy Anytime.</p>
      </div>
      <div class="threeimg">
          <div class="threeimgper">
              <img src="./assets/images/sci-fi.png">
          </div>
          <div class="threeimgper">
              <img src="./assets/images/comdey.png">
          </div>
          <div class="threeimgper">
              <img src="./assets/images/horror.png">
          </div>
      </div>
  </div>

  <div class="one">
    <div class="oneimg">
          <img src="./assets/images/what_to_watch.png">
      </div>
      <div class="oneconcenter">
          <div class="onetitle">
              <p>WHAT TO WATCH</p>
          </div>
          <div class="onec">
              <p>Sign in to access your Watchlist</p>
              <p>Save shows and movies to keep track</p>
              <p>of what you want to watch</p>
          </div>
          <div class="onebutton">
              <button class="bg_green">SIGN IN</button>
          </div>
      </div>
  </div>

  <div class="one">
      <div class="oneconcenter">
          <div class="onetitle">
              <p>ENJOY ON YOUR TV</p>
          </div>
          <div class="onec">
              <p>Watch on Smart TVs,Playstation,Xbox,</p>
              <p>Chromecast,Apple TV,Blu-ray players,</p>
              <p>and more.</p>
          </div>
      </div>
      <div class="oneimg">
          <img src="./assets/images/enjoy_on_your_tv.png">
      </div>
  </div>

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

  <div class="bgblue">
    <div class="four">
      <div class="fourtitle">
          <p>OUR STATISTICS</p>
      </div>
      <div class="fourcon">
          <p>Trusted by our community of over 2 million users</p>
      </div>
      <div class="fourbom">
          <div class="fourper">
              <p class="fourptitle">1240+</p>
              <p>Cooperation</p>
          </div>
          <div class="fourper">
              <p class="fourptitle">20000+</p>
              <p>Active Member</p>
          </div>
          <div class="fourper">
              <p class="fourptitle">1000+</p>
              <p>Film & TV Show</p>
          </div>
      </div>
    </div>
  </div>

  <div class="bgpink">
    <div class="fivetitle">
          <p>MORE TO EXPLORE</p>
      </div>
      <div class="fiveimg">
          <div class="fiveimgper">
              <img src="./assets/images/explore2.png">
          </div>
          <div class="threeimgper">
              <img src="./assets/images/explore3.png">
          </div>
          <div class="threeimgper">
              <img src="./assets/images/explore1.png">
          </div>
      </div>
      <div class="fivecon">
          <p>Roku helps you select the perfect next show or movie to watch.</p>
      </div>
      
  </div>

  <div class="bgblue">
    <div class="four">
      <div class="fourtitle">
          <p>SUBSCRIBE</p>
      </div>
      <div class="fourcon">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      <div class="fourform">
          <form action="">
              <input type="text" class="formtext" placeholder="Your Email">
              <input type="submit" value="SUBSCRIBE" class="formsub">
          </form>
      </div>
    </div>
  </div>

  <Footer/>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import  './assets/css/index.css'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>
