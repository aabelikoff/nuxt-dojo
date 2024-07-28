<script setup>
definePageMeta({
  layout: "products",
});

const { data: products, error } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "Nouxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
