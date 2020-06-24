<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-container>
                <b-navbar-brand href="#">
                    Blog
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"/>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <router-link to="/" class="p-2 text-light">Home</router-link>

                        <router-link to="/about" class="p-2 text-light">About</router-link>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">

                    </b-navbar-nav>
                </b-collapse>
            </b-container>

        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
</style>
