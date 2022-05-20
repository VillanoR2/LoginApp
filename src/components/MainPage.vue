<template>
  <div class="main">
<div class="container">
  <h1 class="mt-4">Logo Nav by Start Bootstrap</h1>
  <p>The logo in the navbar is now a default Bootstrap feature in Bootstrap! Make sure to set the height
    of the logo within the HTML or using CSS. For best results, use an SVG image as your logo.</p>
</div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
