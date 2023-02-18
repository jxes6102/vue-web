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

    let garbage = ["G","P","GP","GG"], travel = [2,4,3]
    let type = ["M","P","G"]
    let str = garbage.join('')
    let garbageM = garbage.map((item)=> item.indexOf("M") >=0 ? item : '')
    let garbageP = garbage.map((item)=> item.indexOf("P") >=0 ? item : '')
    let garbageG = garbage.map((item)=> item.indexOf("G") >=0 ? item : '')
    let arr = [garbageM,garbageP,garbageG]
    let ans = 0
    // console.log(garbageM)
    // console.log(garbageP)
    // console.log(garbageG)
    // console.log(arr)
    // console.log(arr.findIndex((item)=>item.join('') === ''))
    while(arr.findIndex((item)=>item.join('') === '') >=0) {
      type.splice(arr.findIndex((item)=>item.join('') === ''),1)
      arr.splice(arr.findIndex((item)=>item.join('') === ''),1)
    }

    for(let i = 0;i<arr.length;i++){

      console.log(arr[i])

    }
    console.log(type)
    console.log(arr)









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

