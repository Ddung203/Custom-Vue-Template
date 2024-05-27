<script setup></script>
<template>
  <div class="container">
    <img
      src="@assets/imgs/404_page.jpg"
      alt="Page not found!"
    />
  </div>
</template>
<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    min-width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    background-color: #fff !important;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
</style>
