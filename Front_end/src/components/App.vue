<template>
  <div>
    <header class="container">
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
    </header>
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
  width: 100vw;
  height: 100vh;
  font-family: "Cormorant", serif;
  font-weight: bold;
  color: #9D9065;
  font-size: 15px;

}

body {
  width: 100vw;
  height: 100vh;
}

.navigation {
  height: 19vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
}

.home {
  flex-basis: 100vw;
  height: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zasoby_logo {
  width: 62vw;
  height: auto;
}
.menu {
    height: 6vh;
    flex-basis: 95vw;
    background-color: #9D9065;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 10px 9px #9D9065;
}

.about__us,
.pro__rozvozce {
  text-decoration: none;
  background-color: #9d9065;
  color: #fff9e8;
  font-size: 2vh;
  font-weight: bold;
  text-shadow: 0px 0px 10px #fff9e8;
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  .navigation {
    flex-wrap: nowrap;
  }
  .home {
    height: 19vh;
    flex-basis: 34vw;
  }
  .zasoby_logo {
    width: auto;
    height: 7vh;
  }

  .about__us,
  .pro__rozvozce {
    background-color: #fff9e8;
    color: #9d9065;
    font-weight: bold;
    font-size: 3vh;
  }

  .menu {
    flex-basis: 66vw;
    height: 19vh;
    background-color: #fff9e8;
    align-items: center;
    box-shadow: none;
    text-shadow: 0px 0px 10px #9D9065;
  }
}

@media screen and (min-width: 992px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .navigation {
    width: 62vw;
    justify-content: center;
    flex-wrap: nowrap;
  }
  .home {
    height: 19vh;
    flex-basis: 34%;
  }
  .zasoby_logo {
    width: auto;
    height: 7vh;
  }

  .about__us,
  .pro__rozvozce {
    background-color: #fff9e8;
    color: #9d9065;
    font-weight: bold;
    font-size: 4vh;
  }

  .menu {
    flex-basis: 66%;
    height: 19vh;
    background-color: #fff9e8;
    align-items: center;
    box-shadow: none;
    text-shadow: 0px 0px 10px #9D9065;
  }
}
</style>