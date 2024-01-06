<template>
  <NavbarComp/>
  <router-view/>
  <SpinnerComp/>
  <FooterComp/>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
import NavbarComp from './components/NavbarComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';



export default {
  components: {
    NavbarComp,
    SpinnerComp,
    FooterComp
    }
}
</script>

<style src="../src/assets/CSS/Styles.css">
</style>
