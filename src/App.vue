<template>
  <NavbarComp />
  <router-view />
  <main>
  </main>
  <FooterComp />
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import NavbarComp from "./components/NavbarComp.vue";

export default {
  components: {
    NavbarComp,
    FooterComp,
  },
};
</script>

<style src="../src/assets/CSS/Styles.css"></style>
