<template>
  <div id="carouselExampleDark" class="carousel slide">
    <div class="carousel-inner">
      <div v-for="(person, index) in review" :key="person.id" class="carousel-item" :class="{ active: index === 0 }"
        :data-bs-interval="10000">
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-3">
            <img :src="person.persImage" class="d-block w-100" :alt="`Slide`" loading="eager">
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="col-12 col-md-5">
            <h1>{{ person.persName }}</h1>
            <p>{{ person.persComment }}</p>
          </div>
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
      console.error('Error fetching review data', error);
      this.loading = false;
    }
  },
};
</script>

<style scoped>
img[alt="Slide"] {
  width: 100%;
  height: auto;
  border-radius: 2pc;
  border: 5px solid #009DF5;
}

h1 {
  color: #009DF5;
  font-size: 3rem;
}

p {
  font-size: 18px;
  color: white;
}

.carousel-indicators {
  position: fixed;
  bottom: 5em;
}

@media screen and (max-width: 300px) {
  h1 {
    font-size: 2rem;
  }
}

@media screen and (min-width: 301px) and (max-width: 720px) {
  h1 {
    font-size: 2.5rem;
  }
}

@media screen and (min-width: 721px) and (max-width: 1080px) {
  h1 {
    font-size: 3rem;
  }
}
</style>
