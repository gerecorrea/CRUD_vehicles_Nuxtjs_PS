<template>
    <!-- Teste, não sei se deixarei assim mesmo ou mesmo se usarei o coisa como componente-->
    <nuxt-link :to="'/listing/' + id">
        <article>
            <div :style="{backgroundImage: 'url(' + photo +')'}"></div>
            <div>
                <h1> {{name}} </h1>
                <p> {{id}} </p>
                <p> {{description}} </p>
                <p> {{quantity}} </p>
                <p> {{brand}} </p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    name: 'CarsPreview',
    props: { //variáveis tbm, permtindo reuso para filhos etc.
       id: {
           type: String,
           required: true
       },
       name: {
           type: String,
           required: true
       },
       description: {
           type: String,
           required: true
       },
       brand: {
           type: String,
           required: true
       },
       photo: {
           type: String,
           required: true
       },
       quantity: {
           type: String,
           required: true
       }
  }
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

</style>