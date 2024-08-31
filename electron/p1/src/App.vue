<template>
  <div id="app">
    <h1>To-Do List</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MouseTracker />
    <TestField />
    <ToDoForm/>
  </div>

</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import ToDoForm from "./components/ToDoForm.vue";
import MouseTracker from "./components/MouseTracker.vue";
import TestField from "./components/TestField.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    ToDoForm,
    MouseTracker,
    TestField,
  },
  data() {
    return {
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
