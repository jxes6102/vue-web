<template>
  <div class="hello">
    is leet
  </div>
</template>

<script>
export default {
  name: 'leetCode',
  props: {
    msg: String
  },
  setup() {
    console.log('leet now')






    // 2485. Find the Pivot Integer
    // let n = 8
    // for(let i = 1;i<n;i++){
    //   let sumA = 0
    //   let sumB = 0
    //   for(let j = 1;j<=n-i;j++){
    //     sumA+=j
    //   }
    //   for(let j = n;j>=n-i;j--){
    //     sumB+=j
    //   }
    //   if(sumA === sumB) {
    //     return n - i
    //   }
    // }
    // return n === 1 ? 1 : -1;



    // 1614. Maximum Nesting Depth of the Parentheses
    // let s = "(1)+((2))+(((3)))"
    // let arr = s.split('')
    // let count = 0
    // let ans = 0

    // for(let i = 0;i<arr.length;i++){
    //   if(arr[i] === '(')count++
    //   else if(arr[i] === ')') count--

    //   if(ans<count) ans = count
    // }
    // console.log('ans',ans)



    // 804. Unique Morse Code Words
    // let words = ["gin","zen","gig","msg"]
    // let arr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    // let eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // let convenienceArr = []
    // for(let i = 0;i<words.length;i++){
    //   let strArr = words[i].split('')
    //   let str = ''
    //   for(let j = 0;j<strArr.length;j++) {
    //     str+=arr[eng.indexOf(strArr[j])]
    //   }
    //   convenienceArr.push(str)
    // }
    // let map = {}
    // for(let i = 0;i<convenienceArr.length;i++) {
    //   if(!map[convenienceArr[i]]) map[convenienceArr[i]] = 0
    //   map[convenienceArr[i]] ++
    // }
    // console.log('ans',Object.keys(map).length)



    // 2120. Execution of All Suffix Instructions Staying in a Grid
    // let n = 1, startPos = [0,0], s = "LRUD"
    // let ans = []
    // let postion = [startPos[0],startPos[1]]
    // for(let i = 0;i<s.length;i++) {
    //   let can = 0
    //   let script = s.substring(i,s.length).split('')
    //   for(let j = 0;j<script.length;j++){
    //     if(script[j] === "L" && postion[1] - 1 >= 0) {
    //       can++
    //       postion[1]--
    //     }else if((script[j] === "R" && postion[1] + 1 < n)) {
    //       can++
    //       postion[1]++
    //     }else if((script[j] === "D" && postion[0] + 1 < n)) {
    //       can++
    //       postion[0]++
    //     }else if((script[j] === "U" && postion[0] - 1 >= 0)) {
    //       can++
    //       postion[0]--
    //     }else {
    //       break
    //     }
    //   }
    //   ans.push(can)
    //   postion = [startPos[0],startPos[1]]
    // }

    // console.log('ans',ans)



    // 2373. Largest Local Values in a Matrix
    // let grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
    // let ans = []

    // for(let i = 0;i<grid.length;i++) {
    //   for(let j = 0;j<grid[i].length;j++){
    //     if(i-1>=0 && i+1<grid[i].length && j-1>=0 && j+1<grid[i].length){
    //       if(!ans[i-1]) ans[i-1] = []
    //       ans[i-1][j-1] = Math.max(...[grid[i][j],grid[i+1][j],grid[i-1][j],grid[i][j+1],grid[i][j-1],grid[i+1][j+1],grid[i-1][j-1],grid[i+1][j-1],grid[i-1][j+1]])
    //     }
    //   }
    // }

    // console.log('ans',ans)


    // 2391. Minimum Amount of Time to Collect Garbage
    // let garbage = ["MMM","PGM","GP"], travel = [3,10]
    // let type = ["M","P","G"]
    // let str = garbage.join('')
    // let garbageM = garbage.map((item)=> item.indexOf("M") >=0 ? item : '')
    // let garbageP = garbage.map((item)=> item.indexOf("P") >=0 ? item : '')
    // let garbageG = garbage.map((item)=> item.indexOf("G") >=0 ? item : '')
    // let arr = [garbageM,garbageP,garbageG]
    // let ans = 0

    // while(arr.findIndex((item)=>item.join('') === '') >=0) {
    //   type.splice(arr.findIndex((item)=>item.join('') === ''),1)
    //   arr.splice(arr.findIndex((item)=>item.join('') === ''),1)
    // }

    // for(let i = 0;i<arr.length;i++){
    //   while(arr[i][arr[i].length - 1] === '') arr[i].pop()
    //   ans += travel.slice(0,arr[i].length - 1).reduce((acc, cur) => acc + cur,0)
    // }
    // ans+=str.length

    // console.log('ans',ans)


    // 1551. Minimum Operations to Make Array Equal
    // let n = 6
    // let arr = [1]
    // for(let i = 1;i<n;i++){
    //   arr.push(arr[i-1]+2)
    // }
    // let avg = (arr.length%2 === 1) ? arr[Math.floor(arr.length/2)] : arr[Math.floor(arr.length/2) - 1] + 1
    // let ans = 0
    // for(let i = 0;i<arr.length;i++){
    //   ans += Math.abs(arr[i] - avg)
    // }
    // console.log('ans',ans/2)

  }
}
</script>

