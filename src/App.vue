<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">ProfileList</router-link> | 
      <router-link to="/profile/new">ProfileNew</router-link> | 
      <router-link to="/profile/detail">ProfileDetail</router-link> | 
      <router-link to="/profile/modify">ProfileModify</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  @import './assets/css/normalize.css';
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
