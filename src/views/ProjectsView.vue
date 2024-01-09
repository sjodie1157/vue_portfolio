<template>
    <div v-if="!loading && projects.length">
        <CardComp />
    </div>
    <div v-else>
        <SpinnerComp />
    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
    components: {
        CardComp,
        SpinnerComp
    },
    computed: {
        projects() {
            return this.$store.state.projects || [];
        }
    },
    async mounted() {
        try {
            await this.$store.dispatch('fetchProjects');
            this.loading = false;
        } catch (error) {
            console.error('Error fetching projects data', error);
            this.loading = false;
        }
    }
};
</script>

<style scoped></style>