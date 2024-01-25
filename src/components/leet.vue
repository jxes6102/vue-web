<template>
  <div class="hello">
    is leet
  </div>
</template>

<script>
import { includes } from 'lodash'


export default {
  name: 'leetCode',
  props: {
    msg: String
  },
  setup() {
    console.log('leet now')












    // 442. Find All Duplicates in an Array
    // let nums = [1]
    // let obj = {}
    // let ans = []
    // for(let i = 0;i<nums.length;i++){
    //   if(!obj[nums[i]]){
    //     obj[nums[i]] = 1
    //   }else{
    //     obj[nums[i]]++
    //     if(obj[nums[i]] == 2){
    //       ans.push(nums[i])
    //     }
    //   }
    // }
    // console.log('ans',ans)


    // 2023. Number of Pairs of Strings With Concatenation Equal to Target
    // let nums = ["1","1","1"], target = "11"
    // let ans = 0
    // for(let i = 0;i<nums.length;i++){
    //   for(let j = 0;j<nums.length;j++){
    //     if(j==i){
    //       continue
    //     }
    //     if(nums[i]+nums[j]==target){
    //       ans++
    //     }
    //   }
    // }
    // console.log('ans',ans)


    // 2225. Find Players With Zero or One Losses
    // let matches = [[2,3],[1,3],[5,4],[6,4]]
    // let ans = [[],[]]
    // let userMap = {}
    // for(let i = 0;i<matches.length;i++) {
    //   if(!userMap[matches[i][0]]) {
    //     userMap[matches[i][0]] = 0
    //   }
    //   if(!userMap[matches[i][1]]){
    //     userMap[matches[i][1]] = 0
    //   }

    //   userMap[matches[i][1]]++
    // }

    // for(let key in userMap){
    //   if(userMap[key] == 0){
    //     ans[0].push(parseInt(key))
    //   }else if(userMap[key] == 1){
    //     ans[1].push(parseInt(key))
    //   }
    // }
    // console.log('ans',ans)


    // 2570. Merge Two 2D Arrays by Summing Values
    // let nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
    // let arr = nums1.concat(nums2).sort((a,b)=> {
    //   return a[0] - b[0]
    // })

    // for(let i = 1;i<arr.length;i++){
    //   if(arr[i][0] == arr[i-1][0]){
    //     arr[i-1][1] = arr[i-1][1] +arr[i][1]
    //     arr.splice(i,1)
    //     i--
    //   }
    // }
    // console.log('arr',arr)


    // 2928. Distribute Candies Among Children I
    // let n = 5, limit = 2
    // let ans = 0
    // for(let i = 0;i<=limit;i++){
    //   for(let j = 0;j<=limit;j++){
    //     for(let k = 0;k<=limit;k++){
    //       if((i+j+k) == n){
    //         ans++
    //       }
    //     }
    //   }
    // }
    // console.log('ans',ans)


    // 118. Pascal's Triangle
    // let numRows = 5
    // let ans = []
    // for(let i = 0;i<numRows;i++){
    //   if(i==0){
    //     ans.push([1])
    //   }else if(i==1){
    //     ans.push([1,1])
    //   }else{
    //     let arr = new Array(i+1)
    //     for(let j = 0;j<arr.length;j++){
    //       if((j==0) || (j==arr.length-1)){
    //         arr[j] = 1
    //       }else {
    //         arr[j] = ans[i-1][j-1] + ans[i-1][j]
    //       }
    //     }
    //     ans.push(arr)
    //   }
    // }
    // console.log('ans',ans)


    // 1329. Sort the Matrix Diagonally
    // //let mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
    // let mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
    // let limit = [mat.length-1,mat[0].length - 1]
    // let arr = []
    // let allArr = []
    // let ans = []

    // for(let i = 0;i<mat.length;i++){
    //   for(let j = 0;j<mat[0].length;j++){
    //     if(j==0 || i==0){
    //       arr.push([{
    //         row:i,
    //         col:j,
    //         value:mat[i][j]
    //       }])
    //     }
    //   }
    // }

    // for(let i = 0;i<arr.length;i++){
    //   let row = arr[i][0].row
    //   let col = arr[i][0].col
    //   allArr[i] = []

    //   while((row <= limit[0]) && (col <= limit[1])){
    //     allArr[i].push({
    //       row:row,
    //       col:col,
    //       value:mat[row][col]
    //     })
    //     row++
    //     col++
    //   }
    // }

    // for(let i = 0;i<allArr.length;i++){
    //   let sortArr = allArr[i].map((item)=> item.value).sort((a,b)=> {
    //     return (a - b)
    //   })

    //   for(let j = 0;j<allArr[i].length;j++){
    //     allArr[i][j].value = sortArr[j]
    //   }
    // }

    // for(let i = 0;i<allArr.length;i++){
    //   for(let j = 0;j<allArr[i].length;j++){
    //     if(!Array.isArray(ans[allArr[i][j].row])){
    //       ans[allArr[i][j].row] = []
    //     }
    //     ans[allArr[i][j].row][allArr[i][j].col] = allArr[i][j].value
    //   }
    // }

    // console.log('ans',ans)


    // 1817. Finding the Users Active Minutes
    // let logs = [[0,5],[1,2],[0,2],[0,5],[1,3]],k = 5
    // let temp = {}
    // let ans = []
    // for(let i = 0;i<k;i++){
    //   ans[i] = 0
    // }
    // for(let i = 0;i<logs.length;i++){
    //   if(!temp[logs[i][0]]){
    //     temp[logs[i][0]] = []
    //   }
    //   if(!temp[logs[i][0]].includes(logs[i][1])){
    //     temp[logs[i][0]].push(logs[i][1])
    //   }
    // }
    // let arr = Object.values(temp)
    // for(let i = 0;i<arr.length;i++){
    //   ans[arr[i].length - 1]++
    // }
    // console.log('ans',ans)


    // 2722. Join Two Arrays by ID
    // let arr1 = [
    //     {"id": 1, "x": 2, "y": 3},
    //     {"id": 2, "x": 3, "y": 6}
    // ],
    // arr2 = [
    //     {"id": 2, "x": 10, "y": 20},
    //     {"id": 3, "x": 0, "y": 0}
    // ]
    // let target = arr1.concat(arr2)
    // target.sort((a,b)=>{
    //   return a.id-b.id
    // })
    // let index = 0
    // while(index<target.length-1){
    //   if(target[index].id==target[index+1].id){
    //     let objKeyArr = Object.keys(target[index+1])
    //     for(let j = 0;j<objKeyArr.length;j++) {
    //       target[index][objKeyArr[j]] = target[index+1][objKeyArr[j]]
    //     }
    //     target.splice(index+1,1)
    //     continue
    //   }else{
    //     index++
    //   }
    // }
    // console.log('target',target)


    // 2677. Chunk Array
    // let arr = [], size = 1
    // let target = []
    // for(let i = 0;i<arr.length;i+=size) {
    //   if((i+size)>arr.length-1){
    //     target.push(arr.slice(i,(arr.length)))
    //   }else{
    //     target.push(arr.slice(i,(i+size)))
    //   }
    // }
    // console.log(target)


    // 1561. Maximum Number of Coins You Can Get
    // let piles = [2,4,5]
    // piles.sort((a,b)=> a-b)
    // let times = piles.length/3
    // let ans = 0
    // for(let i = piles.length - 2;i > 0;i-=2){
    //   if(times==0){
    //     break
    //   }
    //   ans+=piles[i]
    //   times--
    // }
    // console.log('ans',ans)


    // 890. Find and Replace Pattern
    // let words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
    // let rule = []
    // let ans = []

    // const checkDiff = (data) => {
    //   let map = {}
    //   for(let i = 0;i<data.length;i++) {
    //     if(!map[data[i]]) map[data[i]] = 0
    //     map[data[i]]++
    //   }
    //   return Object.keys(map).length
    // }
    // let patterndiff = checkDiff(pattern)

    // const createdRule = (pattern) => {
    //   let arr = pattern.split('')
    //   for(let i = 0;i<arr.length;i++){
    //     rule[i] = []
    //     for(let j = 0;j<arr.length;j++){
    //       if((i!==j) && (arr[i] === arr[j])){
    //         rule[i].push(j)
    //       }
    //     }
    //   }
    // }
    // createdRule(pattern)

    // const checkData = (data) => {
    //   if(patterndiff !== checkDiff(data)){
    //     return false
    //   }

    //   const target = data.split('')
    //   for(let i = 0;i<target.length;i++){
    //     if(rule[i].length){
    //       let compareArr = rule[i].map((item)=>data.charAt(item))
    //       if(!compareArr.includes(target[i])){
    //         return false
    //       }
    //     }
    //   }

    //   return true
    // }

    // for(let i = 0;i<words.length;i++){
    //   if(checkData(words[i])){
    //     ans.push(words[i])
    //   }
    // }
    // console.log(ans)


    // 1630. Arithmetic Subarrays
    // let nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]
    // let ans = []
    // const isArithmetic = (arr) => {
    //   arr.sort((a,b)=> a-b)
    //   let diff = arr[1]-arr[0]
    //   for(let i = 2;i<arr.length;i++){
    //     if(!((arr[i]-arr[i-1]) === diff)) {
    //       return false
    //     }
    //   }
    //   return true
    // }
    // for(let i = 0;i<l.length;i++){
    //   ans.push(isArithmetic(nums.slice(l[i],r[i]+1)))
    // }
    // console.log('ans',ans)


    // 2103. Rings and Rods
    // let rings = "G4"
    // let arr = new Array(rings.length/2)
    // let ans = 0
    // for(let i = 0;i<rings.length;i++){
    //   if(i%2===1){
    //     if(!arr[parseInt(rings.charAt(i))]) {
    //       arr[parseInt(rings.charAt(i))] = []
    //     }
    //     arr[parseInt(rings.charAt(i))].push(rings.charAt(i-1))
    //   }
    // }
    // for(let i = 0;i<arr.length;i++){
    //   if(arr[i] && arr[i].length >=3){
    //     if(arr[i].includes('R')&&arr[i].includes('G')&&arr[i].includes('B')) ans++
    //   }
    // }
    // console.log('ans',ans)

    // 1409. Queries on a Permutation With Key
    // let queries = [7,5,5,8,3], m = 8
    // let arr = []
    // let ans = []
    // for(let i = 1;i<=m;i++){
    //   arr.push(i)
    // }
    // for(let i = 0;i<queries.length;i++){
    //   let key = queries[i]
    //   let index = arr.findIndex((item)=>item===key)
    //   arr.splice(index,1)
    //   ans.push(index)
    //   arr.unshift(key)
    // }
    // console.log('ans',ans)


    // 2610. Convert an Array Into a 2D Array With Conditions
    // let nums = [1,2,3,4]
    // let map = {}
    // for(let i = 0;i<nums.length;i++) {
    //   if(!map[nums[i]]) map[nums[i]] = 0
    //   map[nums[i]]++
    // }
    // let max = Math.max(...Object.values(map))
    // let ans = new Array(max)
    // for(let i = 0;i<max;i++) {
    //   ans[i] = []
    // }
    // for(let i = 0;i<nums.length;i++) {
    //   for(let j = 0;j<max;) {
    //     if(!ans[j].includes(nums[i])){
    //       ans[j].push(nums[i])
    //       break
    //     }else{
    //       j++
    //     }
    //   }
    // }
    // console.log(ans)


    // count page nice
    // /**
    //  * count 資料筆數
    //  * nowPage 現在頁數
    //  * maxCount 每頁最大筆數
    //  * ans 頁數陣列
    //  * num 最大頁數
    //  */
    // let count = 588
    // let nowPage = 7
    // let maxCount = 10
    // let test = (count,nowPage) => {
    //   let ans = []
    //   let num = Math.ceil(count / maxCount)
    //   if(num>10){
    //     console.log('many')
    //     for(let i = nowPage;i<=nowPage+2;i++){
    //       ans.push(i)
    //     }
    //     for(let i = nowPage-1;i>=nowPage-2;i--){
    //       if(i<=0) break
    //       ans.unshift(i)
    //     }
    //     if(!ans.includes(num)){
    //       ans.push('next',num)
    //     }
    //     if(!ans.includes(1)){
    //       ans.unshift(1,'last')
    //     }
    //   }else{
    //     console.log('few')
    //     for(let i=1 ; i<=num ; i++){
    //       ans.push(i)
    //     }
    //   }
    //   return ans;
    // }
    // console.log('ans',test(count,nowPage))



    // 2221. Find Triangular Sum of an Array
    // let nums = [5]
    // let arr = nums
    // for(let i = 0;i<nums.length;i++){
    //   let temp = []
    //   if(arr.length === 1) break
    //   for(let j = 0;j<arr.length - 1;j++){
    //     temp[j] = (arr[j] + arr[j+1])%10
    //   }
    //   arr = temp
    // }
    // console.log(arr[0])


    // 2482. Difference Between Ones and Zeros in Row and Column
    // let grid = [[1,1,1],[1,1,1]]
    // let ans = []

    // let counts = (arr) => {
    //   let num = 0
    //   for(let i = 0;i<arr.length;i++){
    //     if(arr[i]===1) num++
    //     else num--
    //   }
    //   return num
    // }

    // let colSpace = []
    // for(let row = 0;row<grid.length;row++) {
    //   let rowEle = counts(grid[row])
    //   for(let col = 0;col<grid[row].length;col++) {
    //     if(!colSpace[col]) {
    //       let colArr = []
    //       for(let num = 0;num<grid.length;num++) {
    //         colArr.push(grid[num][col])
    //       }
    //       colSpace[col] = counts(colArr)
    //     }

    //     let allEle = rowEle+colSpace[col]

    //     if(!ans[row]) ans[row] = []
    //     ans[row].push(allEle)
    //   }
    // }
    // console.log('ans',ans)


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

