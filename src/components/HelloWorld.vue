<template>
    <div>
        <b-button>I am a Button</b-button>
        <b-button href="#">I am a Link</b-button>
        <ul>
            <li>223123</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                apiUrl: process.env.VUE_APP_API_URL
            };
        },
        name: "HelloWorld",
        mounted() {
            this.$axios.get(`${this.apiUrl}articles`);
            this.test();
        },
        props: {
            msg: String
        },
        methods: {
            test() {
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"/>
