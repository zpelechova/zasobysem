<template class = "to__retailers">
  <div class="delivery__container">
    <div class="background__image">
      <div class="content">
        <p>NÁKUP NA VAŠI ADRESU VÁM MŮŽE PŘIVÉZT</p>
        <p>Mezi rozvozovými časy eshopů přepínejte přes logo rozvozce.</p>
        <div class="retailer__logos">
          <a href="https://www.kosik.cz/" target="_blank">
            <img
              class="kosik__logo"
              border="0"
              alt="kosik__logo"
              src="..\assets\img\kosik_logo.png"
            />
          </a>
          <a href="https://rohlik.cz" target="_blank">
            <img
              class="rohlik__logo"
              border="0"
              alt="rohlik__logo"
              src="..\assets\img\rohlik_logo.png"
            />
          </a>
          <a href="https://nakup.itesco.cz/groceries/" target="_blank">
            <img
              class="tesco__logo"
              border="0"
              alt="tesco__logo"
              src="..\assets\img\tesco_logo.png"
            />
          </a>
        </div>
        <p>????? MÁ ČAS PŘIVÉZT ZÁSOBY:</p>

        <p>INFORMACE K ROZVOZU:</p>
        <p>Tady se mají načítat informace o ceně dopravy, výši minimálního odběru</p>
        <a href="https://www.kosik.cz/stranky/caste-dotazy?kampan=paticka" target="_blank">JAK NAKUPOVAT NA KOŠÍKU</a>
        <a href="https://www.rohlik.cz/stranka/caste-dotazy" target="_blank">JAK NAKUPOVAT NA ROHLÍKU</a>
        <a href="https://itesco.cz/sluzby-a-znacky/nakupy/vase-prvni-online-nakupy/" target="_blank">JAK NAKUPOVAT NA TESCU</a>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Delivery"
};
</script>

<style scoped>
p {
  font: Cabin;
  font-size: 15px;
}

h1 {
  font-size: 1.563em;
}

h2 {
  font-size: 1.25em;
}

.delivery__container {
  min-height: 62vh;
  margin-left: auto;
  margin-right: auto;
  width: 95vw;
  display: flex;
  justify-content: center;
}

.background__image {
  background-image: url(../assets/img/road-5019069_about_us.jpg);
  display: flex;
  flex-basis: 100vw;
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
.kosik__logo,
.rohlik__logo,
.tesco__logo {
  width: 5vw;
  height: auto;
}
@media screen and (min-width: 576px) and (max-width: 991px) {
  h1 {
    font-size: 2.441em;
  }

  h2 {
    font-size: 1.953em;
  }
  .background__image {
    min-height: 62vh;
    padding: 8vh 0vw 8vh 0vw;
    margin-bottom: 19vh;
  }
}

@media screen and (min-width: 992px) {
  p {
    font-size: 1.25em;
  }

  h1 {
    font-size: 3.815em;
  }

  h2 {
    font-size: 3.052em;
  }

  .background__image {
    min-height: 62vh;
    padding: 8vh 0vw 8vh 0vw;
    margin-bottom: 19vh;
  }
.delivery__container {
  width: 62vw;
}
}

@media screen and (min-width: 1200px) {
  .background__image {
    flex-basis: 62vw;
    min-height: 62vh;
    padding: 8vh 19vh 8vh 19vh;
    margin-bottom: 19vh;
  }

  .content[data-v-5d0d7ea8] {
    width: 38vw;
    border: 5px solid #9d9065;
    padding: 1em;
  }
  .delivery__container {
  width: 62vw;
  }
}
</style>