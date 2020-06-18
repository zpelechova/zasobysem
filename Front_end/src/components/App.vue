<template>
  <div>
    <div class="top__navigation">
      <div class="home">
        <router-link to="/">
          <img
            class="zasoby_logo"
            border="0"
            alt="Zasoby_sem_logo"
            src="..\assets\img\zasoby_logo.png"
          />
        </router-link>
        <a @click="toggle" class="icon">
          <i class="hamburger fa fa-bars"></i>
        </a>
      </div>
      <div :class="isOpen ? 'menu' : 'closed__menu'">
        <router-link to="/o_projektu" class="about__us">O PROJEKTU</router-link>
        <router-link to="/pro_rozvozce" class="pro__rozvozce">ROZVOZCŮM</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
// <button
//         class="btn" :class="{'btn-active':active}"
//         v-on:click="isOpen"
//       >
<script>
export default {
  name: "App",
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      console.log("click");
    }
  }
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
  margin: 0px;
  border: 0px;
}

html {
  width: 100vw;
  height: 100vh;
  font-family: "Cormorant", serif;
  font-weight: bold;
  color: #9d9065;
  font-size: 15px;
}

body {
  width: 100vw;
  height: 100vh;
  background-color: #fff9e8;
}

.top__navigation {
  display: flex;
}

.closed__menu {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-grow: 1;
}
.about__us,
.pro__rozvozce {
  margin: 3vh;
  text-decoration: none;
  color: #9d9065;
}

.icon {
  display: none;
}

.zasoby_logo {
  width: 8vw;
  margin: 3vh;
  margin-left: 4vh;
  flex-grow: 1
}

@media screen and (max-width: 575px) {
.top__navigation {
  display: block;
}
.home {
  height: 10vh;
  margin-bottom: 3vh;
}

.zasoby_logo {
  width: 20vw;
  height: auto;
  margin: 3vw;
}

i.hamburger {
  font-size: 15vw;
  margin: 3vw;
}

.menu {
    background-color: #9d9065;
    box-shadow: 0 0 10px 8px #9d9065;
    margin-top: 3vh;
    margin-bottom: 3vh;
}

.closed__menu {
    background-color: #9d9065;
    box-shadow: 0 0 10px 8px #9d9065;
    margin-top: 3vh;
    margin-bottom: 3vh;
    display: none;
}
/* .top__navigation {
  overflow: hidden;
  background-color: #fff9e8;
} */

.zasoby_logo,
.icon {
  float: left;
  display: block;
}

.about__us,
.pro__rozvozce {
    display: block;
    text-align: center;
    color: #fff9e8;
    text-decoration: none;
    font-size: 3vh;
    margin: 3vw;
}
.zasoby_logo:hover {
  background-color: #ffe355;
}

  .top__navigation a.icon {
    float: right;
    display: block;
  }

.top__navigation a:hover {
  background-color: #ffe355;
  color: #9d9065;
}
/* k čemu je tohle? */
.top__navigation a.active {
  background-color: #9d9065;
  color: #fff9e8;
}





    /* .top__navigation__open {
      position: relative;
    } */
    /* .top__navigation__open .icon {
      position: absolute;
      right: 0;
      top: 0;
    } */
    /* .top__navigation__open a {
      float: none;
      display: block;
      text-align: left;
    } */
    }
</style>