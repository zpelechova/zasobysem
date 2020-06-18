<template class = "to__retailers">
  <div class="pro__rozvozce__container">
    <div class="background__image">
      <div class="content">
        <p>KONTAKTUJTE NÁS</p>
        <p>Také rozvážíte zboží na adresy a chtěli byste být součástí srovnávání rozvozů na našich stránkách? Napište nám.</p>
        <form>
          <div>
          <input type="text" class="name" name="name" placeholder="JMÉNO" />
          <input type="text" class="eshop__address" name="eshop__address" placeholder="ADRESA E-SHOPU" />
          </div>
          <div> 
          <input type="text" class="person" name="person" placeholder="KONTAKTNÍ OSOBA"/>
          <input type="text" class="email" name="email" placeholder="E-MAIL" />
          </div>
          <div>
          <input type="text" class="phone__number" name="phone__number" placeholder="TELEFON" />
          <button type="button">POSLAT</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pro__rozvozce"
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
  background-image: url(../assets/img/woodland-656969_registration.jpg);
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
    flex-basis: 62vw;
    padding: 8vh 0vw 8vh 0vw;
    margin-bottom: 19vh;
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
}
</style>