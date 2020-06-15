<template class = "homepage">
  <div class="homepage__container">
      <div class="background__image">
        <div class="content">
         <h1>Lorem ipsum,</h1> 
         <h2>dolor sit amet</h2>
          <p>consectetur adipisicing elit. Perspiciatis minima totam quam eligendi, facilis voluptas quibusdam, vel nostrum temporibus impedit iure id voluptates cum ad provident sunt</p> 
         
         <!-- voluptate fugiat magni, optio numquam reprehenderit. Dolores neque doloremque corporis, soluta, optio assumenda nostrum, maiores porro laudantium eius similique architecto vitae minima. Vero voluptates accusamus tenetur debitis veritatis distinctio modi quibusdam rerum exercitationem, perferendis officia nisi et velit molestiae neque mollitia? Repudiandae assumenda dolore et! Ut vel aperiam qui omnis facilis, dolorem totam consectetur obcaecati inventore nobis veniam, eveniet alias officia, nisi ullam suscipit maxime impedit asperiores laborum distinctio nemo molestias in iure!   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis minima totam quam eligendi, facilis voluptas quibusdam, vel nostrum temporibus impedit iure id voluptates cum ad provident sunt  -->
         
         <!-- voluptate fugiat magni, optio numquam reprehenderit. Dolores neque doloremque corporis, soluta, optio assumenda nostrum, maiores porro laudantium eius similique architecto vitae minima. Vero voluptates accusamus tenetur debitis veritatis distinctio modi quibusdam rerum exercitationem, perferendis officia nisi et velit molestiae neque mollitia? Repudiandae assumenda dolore et! Ut vel aperiam qui omnis facilis, dolorem totam consectetur obcaecati inventore nobis veniam, eveniet alias officia, nisi ullam suscipit maxime impedit asperiores laborum distinctio nemo molestias in iure!  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis minima totam quam eligendi, facilis voluptas quibusdam, vel nostrum temporibus impedit iure id voluptates cum ad provident sunt 
         
         voluptate fugiat magni, optio numquam reprehenderit. Dolores neque doloremque corporis, soluta, optio assumenda nostrum, maiores porro laudantium eius similique architecto vitae minima. Vero voluptates accusamus tenetur debitis veritatis distinctio modi quibusdam rerum exercitationem, perferendis officia nisi et velit molestiae neque mollitia? Repudiandae assumenda dolore et! Ut vel aperiam qui omnis facilis, dolorem totam consectetur obcaecati inventore nobis veniam, eveniet alias officia, nisi ullam suscipit maxime impedit asperiores laborum distinctio nemo molestias in iure!
         voluptate fugiat magni, optio numquam reprehenderit. Dolores neque doloremque corporis, soluta, optio assumenda nostrum, maiores porro laudantium eius similique architecto vitae minima. Vero voluptates accusamus tenetur debitis veritatis distinctio modi quibusdam rerum exercitationem, perferendis officia nisi et velit molestiae neque mollitia? Repudiandae assumenda dolore et! Ut vel aperiam qui omnis facilis, dolorem totam consectetur obcaecati inventore nobis veniam, eveniet alias officia, nisi ullam suscipit maxime impedit asperiores laborum distinctio nemo molestias in iure!   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis minima totam quam eligendi, facilis voluptas quibusdam, vel nostrum temporibus impedit iure id voluptates cum ad provident sunt 
         
         voluptate fugiat magni, optio numquam reprehenderit. Dolores neque doloremque corporis, soluta, optio assumenda nostrum, maiores porro laudantium eius similique architecto vitae minima. Vero voluptates accusamus tenetur debitis veritatis distinctio modi quibusdam rerum exercitationem, perferendis officia nisi et velit molestiae neque mollitia? Repudiandae assumenda dolore et! Ut vel aperiam qui omnis facilis, dolorem totam consectetur obcaecati inventore nobis veniam, eveniet alias officia, nisi ullam suscipit maxime impedit asperiores laborum distinctio nemo molestias in iure!  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis minima totam quam eligendi, facilis voluptas quibusdam, vel nostrum temporibus impedit iure id voluptates cum ad provident sunt 
         
         voluptate fugiat magni, optio numquam reprehenderit. Dolores neque doloremque corporis, soluta, optio assumenda nostrum, maiores porro laudantium eius similique architecto vitae minima. Vero voluptates accusamus tenetur debitis veritatis distinctio modi quibusdam rerum exercitationem, perferendis officia nisi et velit molestiae neque mollitia? Repudiandae assumenda dolore et! Ut vel aperiam qui omnis facilis, dolorem totam consectetur obcaecati inventore nobis veniam, eveniet alias officia, nisi ullam suscipit maxime impedit asperiores laborum distinctio nemo molestias in iure! -->
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
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

.homepage__container {
    min-height: 62vh;
    margin-left: auto;
    margin-right: auto;
    width: 95vw;
    display: flex;
    justify-content: center;
}

.background__image {
  background-image: url(../assets/img/homepage_road.jpg);
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
}
</style>
