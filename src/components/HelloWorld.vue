<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const n = 34, k = 6
    let temp = n
    let arr = []
    let str = ''
    let ans = 0
    for(let i = 0;i<8;i++) arr.push(Math.pow(k, i))
    arr.reverse()
    for(let i = 0;i<8;i++) {
      for(let j = k-1;j > 0;j--) {
        if(temp >= arr[i]*(j)){
          temp -= arr[i]*(j)
          str += (j).toString()
          break
        }else if(j === 1) str += '0'
      }
    }
    for(let i = 0;i<str.split('').length;i++) ans += parseInt(str.split('')[i])
    console.log(ans)


    // 1837. Sum of Digits in Base K
    // const n = 34, k = 6
    // let temp = n
    // let arr = []
    // let str = ''
    // let ans = 0
    // for(let i = 0;i<8;i++) arr.push(Math.pow(k, i))
    // arr.reverse()
    // for(let i = 0;i<8;i++) {
    //   for(let j = k-1;j > 0;j--) {
    //     if(temp >= arr[i]*(j)){
    //       temp -= arr[i]*(j)
    //       str += (j).toString()
    //       break
    //     }else if(j === 1) str += '0'
    //   }
    // }
    // for(let i = 0;i<str.split('').length;i++) ans += parseInt(str.split('')[i])
    // console.log(ans)


    // 1725. Number Of Rectangles That Can Form The Largest Square
    // let arr = []
    // let map = {}
    // for(let i = 0;i<rectangles.length;i++) {
    //   arr[i] = Math.min(...rectangles[i])
    //   if (Object.keys(map).map(item => parseInt(item)).includes(arr[i])) map[arr[i]]++
    //   else map[arr[i]] = 1
    // }
    // console.log(Math.max(...Object.values(map)))
    // console.log(map[Math.max(...arr)])
    // 1266. Minimum Time Visiting All Points
    // let ans = 0
    // for(let i = 0;i<points.length - 1;i++) ans += Math.max(...[Math.abs(points[i][0] - points[i + 1][0]), Math.abs(points[i][1] - points[i + 1][1])])
    // console.log(ans)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
