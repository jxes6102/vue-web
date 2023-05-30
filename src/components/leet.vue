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
    console.log('====leet now====')
    // let nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15],rowsCount = 5,colsCount = 4
    // if(rowsCount*colsCount !== nums.length) console.log([])
    // let ans = []
    // for(let i = 0;i<rowsCount;i++){
    //   ans.push(new Array(colsCount))
    // }
    // let temp = 0
    // for(let i = 0;i<colsCount;i++){
    //   for(let j = 0;j<rowsCount;j++){
    //     if(i%2 === 0) {
    //       ans[j][i] = nums[temp]
    //     }else {
    //       ans[rowsCount -j - 1][i] = nums[temp]
    //     }
    //     temp++
    //   }
    // }
    // console.log(ans)

    

    // // find flower num
    // let ans = []
    // const check = (val,powNum = 3) => {
    //   if(powNum < 0) return null
    //   let target = val.toString().split('').map((item)=>parseInt(item))
    //   const count = target.reduce(
    //     (accumulator, currentValue) => {
    //       currentValue = Math.pow(currentValue, powNum)
    //       return accumulator + currentValue
    //     },0);
    //   if(val === count) return count
    //   else return null
    // }
    // for(let i = -10000;i<=10000;i++){
    //   let num = check(i,5)
    //   if(num !== null){
    //     ans.push(num)
    //   }
    // }
    // console.log('ans',ans)
    
    // 2428. Maximum Sum of an Hourglass
    // let grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
    // let sum = 0
    // for(let i = 0;i<grid.length;i++) {
    //   for(let j = 0;j<grid[i].length;j++) {
    //     if((i - 1>=0)&&(i + 1<grid.length)&&(j - 1>=0)&&(j + 1<grid[i].length)){
    //       let temp = (grid[i-1][j-1] + grid[i-1][j] + grid[i-1][j+1] + grid[i][j] + grid[i+1][j-1] + grid[i+1][j] + grid[i+1][j+1])
    //       if(sum < temp) sum = temp
    //     }
    //   }
    // }
    // console.log(sum)
    


    // 811. Subdomain Visit Count
    // let cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
    // let map = {}
    // let ans = []

    // const check = (num,str) => {
    //   let strArr = str.split('.')
    //   for(let i = 0;i<strArr.length;i++){
    //     let key = strArr.slice(strArr.length - (i+1),strArr.length).join('.')
    //     if(!map[key])map[key] = num
    //     else map[key] += num
    //   }
    // }
    // for(let i = 0;i<cpdomains.length;i++) {
    //   let arr = cpdomains[i].split(' ')
    //   arr[0] = parseInt(arr[0])
    //   check(arr[0],arr[1])
    // }
    // for(let key in map){
    //   ans.push(map[key] + ' '+ key) 
    // }
    // console.log('ans',ans)
    

    // 1436. Destination City
    // let paths = [["A","Z"]]
    // let arr = paths.flat()
    // let map = {}
    // let mainArr = []
    // for(let i = 0;i<arr.length;i++) {
    //   if(!map[arr[i]]) map[arr[i]] = 0
    //   map[arr[i]]++
    // }

    // for(let key in map){
    //   if(map[key]%2 === 1) {
    //     mainArr.push(key)
    //   }
    // }

    // for(let i = 0;i<mainArr.length;i++) {
    //   if((arr.indexOf(mainArr[i]) % 2) === 1) console.log(mainArr[i])
    // }
    


    // 2341. Maximum Number of Pairs in Array
    // let nums = [1,2,3,4,5]
    // let map = {}
    // let arr = []
    // let ans = [0,0]
    // for(let i = 0;i<nums.length;i++) {
    //   if(!map[nums[i]]) map[nums[i]] = 0
    //   map[nums[i]]++
    // }
    // arr = Object.values(map)
    // for(let i = 0;i<arr.length;i++){
    //   while(arr[i] > 0) {

    //     if(arr[i] >= 2) {
    //       arr[i]-=2
    //       ans[0]++
    //     }else {
    //       arr[i]-=1
    //       ans[1]++
    //     }
        
    //   }
    // }

    // console.log(ans)



    // 1061. Lexicographically Smallest Equivalent String
    // let s1 = "cgokcgerolkgksgbhgmaaealacnsshofjinidiigbjerdnkolc", s2 = "rjjlkbmnprkslilqmbnlasardrossiogrcboomrbcmgmglsrsj", baseStr = "bxbwjlbdazfejdsaacsjgrlxqhiddwaeguxhqoupicyzfeupcn"
    // let eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    // let arr1 = s1.split('')
    // let arr2 = s2.split('')
    // let allArr = []
    // let deleteKey = []
    // let baseArr = baseStr.split('')
    // let ans = ''

    // const findAndPush = (data1,data2) => {
    //   for(let i = 0;i<allArr.length;i++){
    //     if(allArr[i].includes(data1) || allArr[i].includes(data2)){
    //       allArr[i].push(data1,data2)
    //       return false
    //     }
    //   }
    //   if(!allArr[allArr.length]) allArr[allArr.length] = []
    //   allArr[allArr.length - 1].push(data1,data2)
    // }

    // const sortArr = () => {
    //   if(deleteKey.length) allArr = allArr.filter((item,index)=> !deleteKey.includes(index))
    //   for(let i = 0;i<allArr.length;i++){
    //     allArr[i] = allArr[i].filter((item,index)=> allArr[i].indexOf(item) === index).sort((a,b)=> eng.indexOf(a) - eng.indexOf(b))
    //   }
    // }

    // const checkArr = (arr,index) => {
    //   for(let i = 0;i<allArr.length;i++){
    //     for(let j = 0;j<arr.length;j++){
    //       if(allArr[i].includes(arr[j])) {
    //         if(index !== i) deleteKey.push(index)
    //         allArr[i] = allArr[i].concat(arr)
    //         return false
    //       }
    //     }
    //   }
    // }

    // const findStr = (data) => {
    //   for(let i = 0;i<allArr.length;i++) {
    //     if(allArr[i].indexOf(data) !== -1) {
    //       return allArr[i][0]
    //     } 
    //   }
    //   return data
    // }
    // for(let i = 0;i<arr1.length;i++){
    //   findAndPush(arr1[i],arr2[i])
    // }
    // sortArr()
    // for(let i = 0;i<allArr.length;i++){
    //   checkArr(allArr[i],i)
    // }
    // sortArr()
    // for(let  i = 0;i<baseArr.length;i++){
    //   ans += findStr(baseArr[i])
    // }
    // console.log('ans',ans)



    // 1295. Find Numbers with Even Number of Digits
    // let nums = [12,345,2,6,7896]
    // let arr = nums.map((item)=> item.toString().length).filter((item)=>item%2 === 0).length
    // console.log(arr)
    
    // 1704. Determine if String Halves Are Alike
    // let s = "gfLpdQfBhLSNWKBvRWpNlRWTSMQYTSyPFTwWHptvnJHFWQDQLdYyHzKJjYrpHbNQyPFWpKhChZXsvYfPBVMpRSfLZwHMBqsbPhZBhwfmjDqgXVkZrtyXbpXWVLRnpGPWjvKNHmxqxPSlvxxsxsnbQvKJDwKtWgFDrjsgvTScXYPsMBgkWktkdthwsQdCpddrgksxlZMYDcPyvMLqztnYGQbrKcKPWqtjdklXZBvNbZfNdNRmbDGpxybGdzghpSmGvmZGpJlfwTbLhQXZSfgSJTNvrQGdWyQgJjngKLXNpkMtFWgpcrYHZHJdgDfmkfplDYjWRmBNyFNzgGbRcGBQXWcskPpXPlBkdsVwRMNZCLvkdXwDrlcTTNPPMvjPChWHQPJMPSLSzQLlkQWrmLLnknVdWKrYZRymTQTRDbsgtFjZQjMNdrZVqQdBdywVqSWkkHHmbrwnlzXwYCpbfJSxBPdwDjKQFgYPChQWdJTHRVYRDrLtswMnTNQCjZNsqZBpXjZxWKblqZFxtZgHCjYsbqJZFjQJZlFptgMXVDykQpHlmPzxpKnQNtYDJNhHZkMLVCXJjgRGYwCbNGmkqgRkYjzpBMJHRLkbsgXpMkMWCDncmGXBxzZsSrGshcYKClqTyZPcGBJthqXjVlJWNYtPgXkFQSxXxGwsvbgPQQZQfllFfQbXMCkqXtTxDlSkgBGfVSSfWCwbzgFnLlMKLQgccrQSyxRyqyXvCzCBGdzPhxLnvJMyDhpWXWNFXwcwHCCMsccvrxbtsjcThqsLMrgkxlLLGKCbtdHqvBKjxlmntDrvCKxwpMrWZycsvDjCRjPXQPZxmvHnxGWpBqkJCkcqfmyRHPSgGxxkHgSLXNsfVxQRwbftyCxvzHrCzXKXfghSwTMpDzBhmjXLdxFCfpSggVkTVFPQTJCrCwfyVLNQGSLJKVRKtHCwHMNyclLNHHZTzbLJdtkQRzrPVgXSLhJKVZlqYVzPsmwZYPmqKhQC"
    // s = s.toLowerCase()
    // let arr = [s.substring(0,s.length/2).match(/[aeiou]/g),s.substring(s.length/2,s.length).match(/[aeiou]/g)]
    // if(arr[0] && arr[1]) console.log( arr[1].length === arr[0].length)
    // else if((!arr[0] && arr[1])||(arr[0] && !arr[1])) console.log(false)
    // else console.log(true)
    

    // 1812. Determine Color of a Chessboard Square
    // let coordinates = "c7"
    // let eng = ['a','b','c','d','e','f','g','h']
    // let num = ['1','2','3','4','5','6','7','8']
    // let obj = {}
    
    // for(let i = 0;i<eng.length;i++) {
    //   let color = (i%2 === 0) ? false :true
    //   for(let j = 0;j<num.length;j++) {
    //     obj[eng[i]+num[j]] = color
    //     color = !color
    //   }
    // }
    // console.log(obj[coordinates])
    

    // 1827. Minimum Operations to Make the Array Increasing
    // let nums = [1,5,2,4,1]
    // let ans = 0
    // for(let i = 1;i<nums.length;i++) {
    //   if(nums[i-1]>=nums[i]) {
    //     ans+=(nums[i-1]+1) - nums[i]
    //     nums[i] = (nums[i-1]+1)
    //   }
    // }
    // console.log(ans)


    // 2442. Count Number of Distinct Integers After Reverse Operations
    // let arr = []
    // let map = {}
    // for(let i = 0;i<nums.length;i++) {
    //   arr.push(parseInt(nums[i].toString().split('').reverse().join('')))
    // }
    // arr = arr.concat(nums)
    // for(let i = 0;i<arr.length;i++) {
    //   if(!map[arr[i]]) map[arr[i]] = 0
    //   map[arr[i]] ++
    // }
    // console.log('ans',Object.keys(map).length)



    // 2079. Watering Plants
    // let plants = [2,2,3,3], capacity = 5
    // let ans = 0
    // let temp = capacity
    // for(let i = 0;i<plants.length;){
    //   if(temp - plants[i] >= 0){
    //     temp -= plants[i]
    //     ans++
    //   } else {
    //     temp = capacity
    //     ans += i + i
    //     continue
    //   }
    //   i++
    // }
    // console.log('ans',ans)



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

