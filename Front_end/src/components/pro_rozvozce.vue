<template class = "to__retailers">
  <div
    class="container">
      <div class="background__image">
        <!-- <div><h1 >KONTAKTUJTE NÁS</h1>
        <p>
          Také rozvážíte zboží na adresy a chtěli byste být součástí srovnávání rozvozů na našich stránkách? Napište nám.
        </p>
        </div> -->
      </div>
  </div>
</template>

<script>
export default {
  name: "Pro__rozvozce",
};
</script>

<style scoped>
.container {
  display: flex;
  min-height: 100vh;
  align-items: center;
}
.background__image {
  background-image: url(../assets/img/woodland-656969_registration.jpg);
  display: flex;
  flex-basis: 100%;
  align-items: center;
  height: 62vh;
  background-color: #9D9065;
  background-size: cover;
  background-position: center center;
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
 .background__image {

 } 
}

@media screen and (min-width: 1200px) {
.container{
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}
.background__image{
  flex-basis: 62vw;
}
}
</style>