<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
    <div class="carousel-inner">
        <div class="carousel-indicators">
          <button v-for="(person, index) in review" :key="person.id" type="button" data-bs-target="carouselExampleDark"
            :data-bs-slide-to="index" :class="{ active: index === 0 }" aria-label="Slide {{ index + 1 }}"></button>
        </div>
      <div v-for="(person, index) in review" :key="person.id" class="carousel-item" :class="{ active: index === 0 }"
        :data-bs-interval="10000">
        <div class="row d-flex justify-content-center">
          <div class="col-3">            
            <img :src="person.persImage" class="d-block" :alt="`Slide`">
            <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="col-5">
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
  width: 290px;
  display: flex;
  justify-content: end;
  height: 350px;
  border-radius: 2pc;
  border: 5px solid #009DF5;
}

p {
  font-size: 18px;
}

.carousel-indicators {
  position: fixed;
  bottom: 5em;
}

</style>
