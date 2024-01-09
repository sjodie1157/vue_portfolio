<template>
    <div class="review">
        <div v-if="!loading && review.length">
            <h2>Re<span>-vue</span></h2>
            <CarouselComp />
        </div>
        <div v-else>
            <SpinnerComp />
        </div>
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

<style scoped></style>
