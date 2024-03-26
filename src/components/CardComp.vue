<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-center m-lg-5" v-for="project in projects" :key="project.id">
                    <div class="card" style="width: 15rem;">
                        <img :src="project.projImage" class="card-img-top" alt="projects" loading="eager">
                        <div class="card-body d-flex justify-content-center flex-column">
                            <h5 class="card-title d-flex justify-content-center">{{ project.projName }}</h5>
                            <button type="button" :data-bs-toggle="'modal'" :data-bs-target="'#modal' + project.id">
                                click for details
                            </button>
                        </div>
                    </div>
                    <div class="modal fade" :id="'modal' + project.id" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-body d-flex justify-content-center flex-column">
                                    <h5 class="modal-title" id="exampleModalLabel">{{ project.projName }}</h5>
                                    <img :src="project.projImage" alt="modalImg" loading="eager">
                                    <p>{{ project.projDisc }}</p>
                                    <div class="row">
                                        <div class="col d-flex justify-content-center my-1">
                                            <a :href="project.netlifyLink" target="_blank" id="netbtn"><button
                                                    type="button" class="btn-3">Live Link</button>
                                            </a>
                                        </div>
                                        <div class="col d-flex justify-content-center">
                                            <a :href="project.githubLink" target="_blank" id="gitbtn"><button
                                                    type="button" class="btn-3">Github Repo</button></a>
                                        </div>
                                    </div>
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

<style scoped>
h5 {
    font-weight: 600;
    font-size: 25px;
    color: white;
}

img[alt="modalImg"] {
    width: 100%;
    border-radius: .5pc;
}

button {
    border: 2px solid #009DF5;
    background-color: #009DF5;
    color: whitesmoke;
    font-size: 20px;
    border-radius: .3pc;
    transition: all .3s;
}

button:hover {
    background-color: transparent;
    color: #009DF5;
    font-size: 20px;
}

img[alt="projects"] {
    aspect-ratio: 1.3/1;
}

.card {
    border: 3px solid #0076bb93;
    box-shadow: rgba(0, 0, 0, 0.315) 0px 10px 20px, rgba(0, 0, 0, 0.315) 0px 6px 6px;
    border-radius: .5pc;
    transition: all 0.3s;
    margin: .5em;
    background-color: rgba(0, 0, 0, 0.575);
}

.card:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    background-color: rgba(253, 253, 253, 0.256);
}

.modal-body {
    background-image: linear-gradient(#009bf5, transparent);
    border-bottom-left-radius: .5pc;
    border-top-left-radius: .5pc;
    border-top-right-radius: .5pc;
    border-bottom-right-radius: .5pc;
    transition: all .3s;
}

.modal-body:hover {
    background-color: rgb(95, 95, 95);
}

p {
    color: white;
}


.card:hover {
    border: 3px solid #0076bb93;
    box-shadow: rgba(0, 0, 0, 0.547) 0px 5px 5px 5px;
    border-radius: .5pc;
}

.modal-content {
    background-color: #009bf500;
}


.btn-3 {
    background: rgb(0, 172, 238);
    background: linear-gradient(0deg, #009DF5 0%, black 100%);
    width: 130px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;
    border-radius: .3pc;
    transition: background 0.5s;
}

.btn-3 span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    color: white;
    transition: color 0.5s;
}

.btn-3:before,
.btn-3:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
}

.btn-3:before {
    height: 0%;
    width: 2px;
}

.btn-3:after {
    width: 0%;
    height: 2px;
}

.btn-3:hover {
    background: transparent;
    box-shadow: none;
}

.btn-3:hover:before {
    height: 100%;
}

.btn-3:hover:after {
    width: 100%;
}

.btn-3 span:hover {
    color: #009DF5;
}

.btn-3 span:before,
.btn-3 span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: #009DF5;
    transition: all 0.3s ease;
}

.btn-3 span:before {
    width: 2px;
    height: 0%;
}

.btn-3 span:after {
    width: 0%;
    height: 2px;
}

.btn-3 span:hover:before {
    height: 100%;
}

.btn-3 span:hover:after {
    width: 100%;
}
</style>
