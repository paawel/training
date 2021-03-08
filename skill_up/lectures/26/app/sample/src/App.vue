<template>
  <div id="app">
    <h1>Hello</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="FOO BOO" foo="Sample1"/>
    <List/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List'

export default {
  name: 'App',
  components: {
    HelloWorld,
    List
  }
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
