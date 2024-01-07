<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="project in projects" :key="project.id">
                    <div class="card" style="width: 15rem;">
                        <img :src="project.projImage" class="card-img-top" alt="projects">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.projName }}</h5>
                            <p class="card-text">{{ project.projDisc }}</p>
                            <a href="#" class="btn btn-primary">Click For Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true,
        };
    },
    computed: {
        projects() {
            return this.$store.state.projects || [];
        },
    },
    async mounted() {
        try {
            await this.$store.dispatch('fetchProjects');
            this.loading = false;
        } catch (error) {
            console.error('Error fetching projects data:', error);
            this.loading = false;
        }
    },
};
</script>

<style scoped></style>
