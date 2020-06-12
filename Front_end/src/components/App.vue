<template>
  <div class="container">
    <div class="navigation">
      <div class="home">
        <router-link to="/">
          <img
            class="zasoby_logo"
            border="0"
            alt="Zasoby_sem_logo"
            src="..\assets\img\zasoby_sem_logo.png"
          />
        </router-link>
      </div>
      <div class="menu">
        <router-link to="/o_projektu" class="about__us">O PROJEKTU</router-link>
        <router-link to="/pro_rozvozce" class="pro__rozvozce">ROZVOZCŮM</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
  background-color: #fff9e8;
  margin: 0px;
  border: 0px;
}

html {
  font-family: "Cormorant", serif;
  font-size: 15px;
}

*,
:after,
:before {
  box-sizing: inherit;
}

.navigation {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 1vh;
}
.zasoby_logo {
  width: 62vw;
  height: auto;
}
.menu {
  background-color: #9d9065;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2vh 20vw 2vh 20vw;
}
.about__us,
.pro__rozvozce {
  text-decoration: none;
  background-color: #9d9065;
  color: #fff9e8;
  font-size: 1.25em;
  font-weight: bold;
  padding: 2vh;
  flex: 1 1;
}

.pro__rozvozce {
}

@media screen (min-width: 768px) and (max-width: 1199px) {
  
}

@media screen and (min-width: 1200px) {
  .navigation {
    /* justify-content: space-evenly; */
    flex-direction: row;
  }
  .home {
    margin-left: 19vw;
    margin-top: 3vw;
    margin-right: 2vw;
    margin-bottom: 3vw;
    flex-grow: 1;
  }
  .zasoby_logo {
    width: 20vw;
    height: auto;
  }

  .about__us,
  .pro__rozvozce {
    background-color: #fff9e8;
    color: #9d9065;
    font-weight: bold;
    font-size: 2.441vh;
    padding: 0vh;
  }

  .menu {
    background-color: #fff9e8;
    flex-wrap: nowrap;
    align-items: center;
    flex-grow: 2;
    padding: 0px;
  }

  .pro__rozvozce {
    margin-right: 19vw;
  }
}
</style>