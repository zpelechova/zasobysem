<template class = "homepage">
  <div class="homepage__container">
    <div class="background__image">
      <div class="content">
        <p>KDO MI DOVEZE NÁKUP?</p>
        <form>
          <div>
            <input
              type="text"
              class="street__address"
              name="street__address"
              placeholder="ULICE A ČÍSLO"
            />
            <input 
            type="text" 
            class="postcode" 
            name="postcode" 
            placeholder="PSČ" 
            />
          </div>
          <div>
            <button type="button">POSLAT</button>
          </div>
        </form>

        <router-link to="/Delivery" class="delivery">ROZVOZ</router-link>
        <router-link to="/Parcels" class="parcels">BALÍKY</router-link>
      </div>
    </div>
    <div class="retailer__logos">
      <a href="https://www.kosik.cz/" target="_blank">
        <img class="kosik__logo" border="0" alt="kosik__logo" src="..\assets\img\kosik_logo.png" />
      </a>
      <a href="https://rohlik.cz" target="_blank">
        <img class="rohlik__logo" border="0" alt="rohlik__logo" src="..\assets\img\rohlik_logo.png" />
      </a>
      <a href="https://nakup.itesco.cz/groceries/" target="_blank">
        <img class="tesco__logo" border="0" alt="tesco__logo" src="..\assets\img\tesco_logo.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage"
};
</script>

<style scoped>
p {
  font: Cabin;
  font-size: 15px;
}

.homepage__container {
    max-height: 85vh;
    margin-left: auto;
    margin-right: auto;
    width: 95vw;
    display: flex;
    flex-direction: column;
}

.background__image {
  background-image: url(../assets/img/homepage_road.jpg);
  display: flex;
  flex-grow: 4;
  flex-shrink: 4;
  justify-content: center;
  align-items: flex-start;
  min-height: 62vh;
  background-color: #9d9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 8px #9d9065;
  padding: 19vw 13vw 19vw 13vw;
}

.content {
  width: 62vw;
  border: 5px solid #9d9065;
  padding: 1em;
  opacity: 0.75;
  box-shadow: 0 0 10px 8px #9d9065;
  background-color: #fff9e8;

}

.retailer__logos{
    align-self: center;
    padding: 3vh;
    width: 100vw;
    display: flex;
    flex-grow: 0.3;
    flex-shrink: 0.3;
    align-items: flex-end;
    align-items: space-evenly;
    justify-content: space-evenly;
}

.kosik__logo,
.rohlik__logo,
.tesco__logo {
  width: 20vw;
  height: auto;
}

@media screen and (min-width: 576px) and (max-width: 991px) {

  .background__image {
    min-height: 78vh;
    padding: 8vh 0vw 8vh 0vw;
  }
.homepage__container {
  height: auto;
}
.kosik__logo, 
.rohlik__logo, 
.tesco__logo {
    width: 10vw;
    height: auto;
}
}

@media screen and (min-width: 992px) {
  p {
    font-size: 1.25em;
  }

  .background__image {
    min-height: 62vh;
        padding: 8vh 8vw 8vh 8vw;
  }
  .homepage__container {
  height: auto;
  width: 62vw;
}
.kosik__logo, 
.rohlik__logo, 
.tesco__logo {
    width: 10vw;
    height: auto;
}
}

@media screen and (min-width: 1200px) {
  .background__image {
    flex-basis: 62vw;
    min-height: 62vh;
   padding: 8vh 8vw 8vh 8vw;
  }

  .content {
    width: 38vw;
    border: 5px solid #9d9065;
    padding: 1em;
  }
  .homepage__container {
  height: auto;
  width: 62vw;
}
.kosik__logo, 
.rohlik__logo, 
.tesco__logo {
    width: 10vw;
    height: auto;
}
}
</style>
