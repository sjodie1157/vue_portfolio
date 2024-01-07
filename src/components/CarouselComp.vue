<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-indicators">
      <button v-for="(person, index) in review" :key="person.id" type="button" data-bs-target="carouselExampleDark"
        :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-label="Slide {{ index + 1 }}"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(person, index) in review" :key="person.id" class="carousel-item" :class="{ active: index === 0 }"
        :data-bs-interval="10000">
        <img :src="person.persImage" class="d-block" :alt="`Slide ${index + 1}`">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ person.persName }}</h5>
          <p>{{ person.persComment }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    review() {
      return this.$store.state.review || [];
    }
  },
  async mounted() {
    try {
      await this.$store.dispatch('fetchReview');
      this.loading = false;
    } catch (error) {
      console.error('Error fetching review data:', error);
      this.loading = false;
    }
  },
};
</script>

<style scoped>
img[alt^="Slide"] {
  width: 250px;
}
</style>
