<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});

const { data: product, error } = await useFetch(`https://fakestoreapi.com/products/${id}`, { key: id });

if (!product.value) {
  throw createError({ status: 404, statusMessage: "Product not found", fatal: true });
}
</script>

<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<style lang="css" scoped></style>
