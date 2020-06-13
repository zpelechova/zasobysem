<template class = "to__retailers">
  <div
    class="pro__rozvozce__container">
      <div class="background__image">
        <div class="content">
          
        <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus odio omnis dolores. Aut dolores modi asperiores fugiat? Sunt, assumenda perspiciatis? 
        </p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Pro__rozvozce",
};
</script>

<style scoped>
.pro__rozvozce__container {
height: 81vh;
}

.background__image {
  background-image: url(../assets/img/woodland-656969_registration.jpg);
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  height: 62vh;
  background-color: #9D9065;
  background-size: cover;
  background-position: center center;
  border: 5px solid  #9D9065;
}

.content {
  width:38vw;
  height: 38vh;
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
 .background__image {

 } 
}

@media screen and (min-width: 1200px) {
.pro__rozvozce__container {
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction:row;
}
.background__image{

}
}
</style>