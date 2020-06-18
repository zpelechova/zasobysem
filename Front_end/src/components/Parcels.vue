<template class = "to__retailers">
  <div
    class="parcels__container">
      <div class="background__image">

         
          <div class="content">
          <p>NA VAŠI ADRESU ZASÍLÁ TRVANLIVÝ SORTIMENT:</p> 
         <p>Na eshop se dostanete skrz logo rozvozce..</p>
          <a href="https://www.kosik.cz/" target="_blank">
            <img
              class="kosik__logo"
              border="0"
              alt="kosik__logo"
              src="..\assets\img\kosik_logo.png"
            />
          </a>
          <a href="https://nakup.itesco.cz/groceries/" target="_blank">
            <img
              class="tesco__logo"
              border="0"
              alt="kosik__logo"
              src="..\assets\img\tesco_logo.png"
            />
          </a>
          <p>Čerstvé pečivo si sice neobjednáte, ale nebuďte smutní, objednejte si mouku a upečte si svoje vlastní domácí pečivo. Jak na to se dozvíte <router-link to="/bake_bread" class="bake__bread">ZDE</router-link></p> 
         
         
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Parcels",
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

.pro__rozvozce__container {
    min-height: 62vh;
    margin-left: auto;
    margin-right: auto;
    width: 95vw;
    display: flex;
    justify-content: center;
}

.background__image {
  background-image: url(../assets/img/full_supplies_not_available_road.jpg);
  display: flex;
  flex-basis: 100vw;
  justify-content: center;
  align-items: flex-start;
  min-height: 62vh;
  background-color: #9D9065;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 0 10px 8px #9D9065;
  padding: 19vw 13vw 19vw 13vw;
}

.content {
  width: 62vw;
  border: 5px solid  #9D9065;
  padding: 1em;
  opacity: 0.75;
  box-shadow: 0 0 10px 8px #9D9065;
  background-color: #fff9e8;
}

.kosik__logo,
.tesco__logo {
  width: 5vw;
  height:auto;
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

.background__image{
    min-height: 62vh;
    padding: 8vh 0vw 8vh 0vw;
    margin-bottom: 19vh;
}
.parcels__container {
  width: 62vw;
  }

}

@media screen and (min-width: 1200px) {
  .background__image {
    flex-basis: 62vw;
    min-height: 62vh;
    padding: 8vh 19vh 8vh 19vh;
    margin-bottom: 19vh
  }

  .content[data-v-5d0d7ea8] {
    width: 38vw;
    border: 5px solid #9D9065;
    padding: 1em;
}
.parcels__container {
  width: 62vw;
  }
}

</style>