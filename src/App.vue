<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div>
      <h1 class="title">Style-Dictionary</h1>
      <h2 class="subtitle">An extension to rule them all</h2>
    </div>
    <img class="logo" src="@/assets/logo.svg" width="150" height="150" />
  </header>

  <img class="arc" src="@/assets/arc.svg" />

  <RouterView class="view" />
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=League+Spartan');
@import '../src/styles/main.scss';

header {
  padding: 40px 60px 100px 60px;
  display: flex;
  justify-content: space-between;
}

.title {
  @include title();
  color: $colors-dark-text;
}

.subtitle {
  @include subtitle();
  color: $colors-dark-text;
}

.logo {
  filter: grayscale(100%);
}

.arc {
  position: absolute;
  top: 0;
  z-index: -1;
}
</style>
