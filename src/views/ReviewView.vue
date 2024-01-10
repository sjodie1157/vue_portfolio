<template>
    <div class="review">
        <transition name="fade">
        <div v-if="!loading && review.length">
            <transition name="fade">
            <h1 class="my-5">Re<span>-vue</span></h1>
            </transition>
            <div class="container">
            <transition name="fade">
                <CarouselComp />
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
  transition: font-size 0.5s, font-weight 0.5s;
}

span {
  color: #009DF5;
}
</style>
