<script lang="ts" setup>
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text07xl font-bold">{{ error?.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error?.message || "something went wrong" }}</p>
    <button class="btn my-7" @click="handleError">Clear Errors</button>
  </div>
</template>

<style lang="css" scoped></style>
