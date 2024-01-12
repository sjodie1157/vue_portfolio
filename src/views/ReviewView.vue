<template>
  <div class="review">
    <transition name="fade">
      <div v-if="!loading && review.length">
        <transition name="fade">
          <h1 class="my-5">Re<span>-vue</span></h1>
        </transition>
        <div class="container">
          <transition name="fade">
            <div class="animate">
              <CarouselComp />
            </div>
          </transition>
        </div>
      </div>
      <div v-else>
        <SpinnerComp />
      </div>
    </transition>
  </div>
</template>

<script>
import CarouselComp from '@/components/CarouselComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  components: {
    SpinnerComp,
    CarouselComp
  },
  data() {
    return {
      loading: true
    };
  },
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
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

:is(h1) {
  font-size: 75px;
  font-weight: 1000;
  color: white;
  animation: resumeLine-one 1.5s;
}

@keyframes resumeLine-one {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.animate {
  animation: carousel 1.5s;
}

.review {
  overflow-x: hidden;
}

@keyframes carousel {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

span {
  color: #009DF5;
}

@media screen and (width<=300px) {
  :is(h1) {
    font-size: 40px;
  }
}

@media screen and (301px<=width<=720px) {
  :is(h1) {
    font-size: 60px;
  }
}

@media screen and (721px<=width<=1080px) {
  :is(h1) {
    font-size: 80px;
  }
}
</style>
