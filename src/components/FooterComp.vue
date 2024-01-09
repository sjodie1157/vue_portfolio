<template>
    <div class="container-fluid">
        <div class="footer">
            Jodie Smith &copy;<span id="currYear"> </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        this.updateYear()
    },
    methods: {
        updateYear() {
            document.getElementById("currYear").textContent = new Date().getFullYear()
        },
    },
}
</script>

<style scoped>
.footer {
    position: fixed;
    right: 0;
    bottom: 0;
    padding: 0 2em;
    background-color: #009DF5;
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 600;
    transition: all 0.3s;
}
.footer:hover {
    background-color: black;
    color: #009DF5;
}
</style>
