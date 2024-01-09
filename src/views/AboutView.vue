<template>
  <div>
    <div class="about">

      <div v-if="!loading && about.length">
        <div class="row">
          <h1>
            About me
          </h1>
          <div class="col">
            <h3>
              {{ about[0].aboutParagraph }}
            </h3>
          </div>
          <div class="col">
            <img :src="about[1].profImaArt" alt="profImg" loading="eager">
          </div>
        </div>
      </div>
      <div v-else>
        <SpinnerComp />
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  components: {
    SpinnerComp
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    about() {
      return this.$store.state.about || [];
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchAbout');
      this.loading = false;
    } catch (error) {
      console.error('Error fetching about data', error);
      this.loading = false;
    }
  },
};
</script>

<style scoped></style>