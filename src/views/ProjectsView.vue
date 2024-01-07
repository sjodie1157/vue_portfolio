<template>
    <div v-if="loading = false || projects.length">
        <CardComp/>
        <ModalComp/>
    </div>
    <div v-else>
        <SpinnerComp/>
    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
import ModalComp from '@/components/ModalComp.vue';

export default {
    components: {
        CardComp,
        SpinnerComp,
        ModalComp
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
            console.error('Error fetching projects data:', error);
            this.loading = false;
        }
    }
};
</script>

<style scoped>

</style>