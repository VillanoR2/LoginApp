<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <button class='xm-bind-id-button'>{{generetButtonName()}}</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
    }
  },
  methods: {

    generetButtonName(){
      if(this.requireRegister){
        return "Sign Up"
      }else{
        return "Login"
      }
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d4680;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #0d4680;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.xm-bind-id-button {
  border: none;
  background: none;
  color: aliceblue;

}
</style>

