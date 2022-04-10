<template>
  <Header/>
  <div class="login">
    <div class="loginimg">
        <img src="./assets/images/login.jpg">
    </div>
    <div class="logininner">
        <div class="logintitle">
            <p>USER LOGIN</p>
        </div>
        <div class="logincon">
            
                <div class="loginper">
                    <div class="loginin">
                        <div class="loginicon">
                            <p> <img src="./assets/images/login/user.png"></p>
                        </div>
                        <div class="logincc">
                            <input type="text" class="formtext" v-model="username">
                        </div>
                    </div>
                </div>
                <div class="loginper">
                    <div class="loginin">
                        <div class="loginicon">
                            <p> <img src="./assets/images/login/password.png"></p>
                        </div>
                        <div class="logincc">
                            <input type="password" class="formtext" v-model="password">
                        </div>
                    </div>
                </div>
                <div class="loginper">
                    <button @click="login()"></button>
                </div>
            
        </div>
    </div>
  </div>

  <Footer/>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import  './assets/css/login.css'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods:{
    login:function(){
      //console.log(this.username);
      var api = "http://localhost:3000/users?username=" + this.username + "&password=" + this.password;
      fetch(api, {
        method: "GET"
      })
        .then(res => res.json())
        .then(response => {
            //console.log(response.res);
        
        if(response.res == 0){
            alert("the username or password error");
        }if(response.res == 1){
            alert("success");
             window.location.href="/index"; 
        }
        
    })
    
    .catch(ex => {
        alert(ex);
    });

    }
  }

}

</script>
