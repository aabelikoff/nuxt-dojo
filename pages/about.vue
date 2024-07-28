<script setup>
// const { data } = await useFetch("/api/ninja?name=mario", {
//   method: "post",
//   body: {
//     age: 44,
//   },
// });

// const { data } = await useFetch("/api/ninja");
const { data } = await useFetch("/api/currency/UAH");
</script>

<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nostrum modi, possimus ea architecto adipisci magnam minima voluptatibus ad libero.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam nostrum modi, possimus ea architecto adipisci magnam minima voluptatibus ad libero.</p>
    <div>{{ data }}</div>
  </div>
</template>

<style lang="css" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
