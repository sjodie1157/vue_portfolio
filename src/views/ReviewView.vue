<template>
    <div class="review">
        <div v-if="!loading || review.length">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-theme="dark">
                <div class="carousel-inner">
                    <div v-for="reviewItem in review" :key="id">
                        <img :src="reviewItem.persImage" class="d-block w-100" alt="testimonial">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{{ reviewItem.persName }}</h5>
                            <p>{{ reviewItem.persComment }}</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div v-else>
            <SpinnerComp />
        </div>
    </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';
import { mapState } from 'vuex';

export default {
    components: {
        SpinnerComp
    },
    computed: {
        ...mapState(['reviews', 'loading'])
    },
    mounted() {
        this.$store.dispatch('fetchReview');
    },
};
</script>

<style scoped>
</style>
