<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">J Smith</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex-lg justify-content-end" id="navbarText">
        <span class="navbar-text">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/resume">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/review">Review</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-link {
  color: #009DF5;
  font-size: 20px;
  font-weight: 800;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: white;
}

.navbar-brand {
  color: #009DF5;
  font-size: 25px;
  font-weight: 800;
  transition: color 0.3s ease;
}

.navbar-brand:hover {
  color: white;
}

.router-link-active {
  color: white !important;
}
</style>
