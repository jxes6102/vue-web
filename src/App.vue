<template lang='pug'>
nav
  router-link(to="/") Home
  ||
  router-link(to="/about") About
router-view
</template>
<script>
  // @ is an alias to /src
  export default {
    name: 'HomeView',
    setup() {
      let num = 9669
      let arr = num.toString().split('')
      let base = []
      for(let i = 0;i<arr.length;i++) {
        let temp = num.toString().split('')
        if (arr[i] === '6') temp[i] = '9'
        if (!base.includes(parseInt(temp.join('')))) base.push(parseInt(temp.join('')))
      }
      console.log(Math.max(...base))
      console.log(base)

      // for(let i = 0;i<points.length - 1;i++) ans += Math.max(...[Math.abs(points[i][0] - points[i + 1][0]), Math.abs(points[i][1] - points[i + 1][1])])

    }
  }
  </script>

<style lang="scss">
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
