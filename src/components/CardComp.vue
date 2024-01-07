<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-center" v-for="project in projects" :key="project.id">
                    <div class="card" style="width: 15rem;">
                        <img :src="project.projImage" class="card-img-top" alt="projects" />
                        <div class="card-body">
                            <h5 class="card-title">{{ project.projName }}</h5>
                            <p class="card-text">{{ project.projDisc }}</p>
                            <button type="button" class="btn btn-primary" :data-bs-toggle="'modal'"
                                :data-bs-target="'#modal' + project.id">
                                Modal
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" :id="'modal' + project.id" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{{ project.projName }}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close">
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img :src="project.projImage" alt="modalImg">
                                    <p>{{ project.projDisc }}</p>
                                    <a :href="project.githubLink">Github</a>
                                    <a :href="project.netlifyLink">Netlify</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects || [];
        },
    },
    async mounted() {
        await this.$store.dispatch('fetchProjects');
    },
};
</script>

<style scoped>
img[alt="modalImg"] {
    width: 100%;
}
</style>
