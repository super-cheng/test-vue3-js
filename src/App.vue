<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/about2">About2</router-link> |
    <router-link to="/about3">About3</router-link> |
    <router-link to="/about4">About4</router-link> |
    <router-link to="/about5">About5</router-link> |
    <router-link to="/about6">About6</router-link> |
    <router-link to="/about6copy">About6 copy</router-link> |
    <router-link to="/about7">About7</router-link> |
    <router-link to="/about8">About8</router-link> |
    <router-link to="/about9">About9</router-link> |
    <router-link to="/about10">About10</router-link> |
    <router-link to="/about11">About11</router-link> |
  </nav>
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
