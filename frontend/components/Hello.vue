<template>
    <h1>Hello</h1>
    <input v-model="value">
    <button v-on:click="logThis(value)">Submit</button>
    <br>
    <span>{{ responseAPI }}</span>
</template>

<script lang="js">
import axios from 'axios';
export default {
    data() {
        return {
            value: 1,
            responseAPI: ''
        }
    },
    methods: {
        async logThis(value) {
            console.log(value);
            try {
                const response = await axios.get(`http://localhost:3001/ganjilgenap?value=${value}`);
                console.log(response.data);
                this.responseAPI = response.data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
}

</script>