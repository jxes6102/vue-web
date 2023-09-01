<template>
  <div class="hello">
    <input v-test="directiveData" type="text" value="QQQ">
    <leet></leet>
    <table style="border-collapse:separate; border-spacing:50px 100px;">
      <tr>
       <td>那片笑聲躺我想起我的那些花兒</td>
      </tr>
      <tr>
       <td>在我生命每個角落靜靜為我開著</td>
      </tr>
   </table>
  </div>
</template>

<script>
import { getData } from '@/api/api'
import store from '@/store'
import leet from "./leet.vue"
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  components:{leet},
  props: {
    msg: String
  },
  setup() {
    const directiveData = ref('directiveData')

    // test Proxy
    // let data = {
    //   firstName:'nice ',
    //   lastName:'dog ',
    // }
    // let testProxy = new Proxy(data,{
    //   get:function(target,property){
    //     if(property==="allName") {
    //       return target.firstName + target.lastName
    //     }else {
    //       return target[property]
    //     }
    //   },
    //   set: function(target,property,value) {
    //     if (property === "lastName") {
    //       console.log('不能修改私有變數！',value)
    //       return false;
    //     }else {
    //       return target[property] = value;
    //     }
    //   },
    // })
    // console.log(testProxy.allName)
    // console.log(testProxy.lastName)
    // testProxy.firstName = 'is firstName'
    // testProxy.lastName = 'is lastName'
    // console.log('testProxy',testProxy)


    // api test
    const inputData = {
      Authorization: 'CWB-391D3550-2FAB-43F0-AA4D-06929689EB22',
    }

    const getWeather = async() => {
      // console.log('a')
      // store.commit('setLoad', true)
      const data = await getData(inputData)
      // store.commit('setLoad', false)
      // console.log(data.data.records)
      // console.log('c')
    }
    // getWeather()

    // reduce
    // const array1 = [1, 2, 3, 4];
    // const initialValue = 0;
    // const sumWithInitial = array1.reduce(
    //   (previousValue, currentValue) => {
    //     return previousValue + currentValue
    //   },
    //   initialValue
    // );
    // console.log(sumWithInitial);

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

    // 961. N-Repeated Element in Size 2N Array
    // let nums = [1,5,5,2,5,3,5,4]
    // let ans = ''
    // let map = {}
    // for(let i = 0;i<nums.length;i++) {
    //   if(!map[nums[i]]) map[nums[i]] = 0
    //   map[nums[i]] ++
    // }
    // for(let key in map) {
    //   if(map[key] === (nums.length / 2)) console.log(key)
    // }
    // console.log(ans)

    // 1266. Minimum Time Visiting All Points
    // let ans = 0
    // for(let i = 0;i<points.length - 1;i++) ans += Math.max(...[Math.abs(points[i][0] - points[i + 1][0]), Math.abs(points[i][1] - points[i + 1][1])])
    // console.log(ans)

    // 2363. Merge Similar Items
    // let items1 = [[5,1],[4,2],[3,3],[2,4],[1,5]], items2 = [[7,1],[6,2],[5,3],[4,4]]
    // let ans = []
    // let all = items1.concat(items2)
    // let arr = []
    // for(let i = 0;i<all.length;i++) {
    //   if(!arr[all[i][0]]) arr[all[i][0]] = all[i]
    //   else arr[all[i][0]][1] += all[i][1]
    // }
    // for (let item of arr) if(item) ans.push(item)
    // console.log(ans)

    // 1710. Maximum Units on a Truck
    // let boxTypes = [[2,1],[4,4],[3,1],[4,1],[2,4],[3,4],[1,3],[4,3],[5,3],[5,3]], truckSize = 13
    // let ans = 0
    // boxTypes.sort((x, y) => y[1] - x[1])
    // for(let i = 0;i<boxTypes.length;i++) {
    //   if(truckSize - boxTypes[i][0] >= 0){
    //     ans+= boxTypes[i][0]*boxTypes[i][1]
    //     truckSize-=boxTypes[i][0]
    //   } else if(truckSize - boxTypes[i][0] < 0) {
    //     ans+= truckSize*boxTypes[i][1]
    //     break
    //   }
    // }
    // console.log(ans)

    // 1356. Sort Integers by The Number of 1 Bits
    // let arr = [0,1,2,3,4,5,6,7,8]
    // const count = (str) => {
    //   let target = 0
    //   for(let i = 0;i<str.length;i++) if(str.charAt(i) === '1') target++
    //   return target
    // }
    // let ans = arr.sort((a,b) => count(a.toString(2)) - count(b.toString(2)) || (a - b))
    // console.log(ans)

    // 2545. Sort the Students by Their Kth Score
    // let score =
    // [[26063,77277,24329,97449,83641,98499,99037,73504,35216,21060],
    // [79689,20580,86773,52964,84323,78255,42425,20990,74117,1685],
    // [78047,83048,30042,95812,56302,77661,95589,51556,83830,2765],
    // [70023,9694,63807,23997,967,71957,55944,46460,4003,61615],
    // [90149,53227,97853,73362,27354,60268,57710,99030,5226,46597],
    // [80916,99369,90239,55759,95899,64117,50449,43677,63001,14245],
    // [84407,92198,61438,66791,16945,16469,35322,46244,78847,6529],
    // [97658,46783,86167,18462,29233,89548,1402,4549,23593,60733],
    // [89982,41773,52974,46354,3821,16637,1718,96385,5214,63120],
    // [14928,38392,35017,62313,91433,34791,29599,69491,35111,8683]], k = 2
    // for(let i = 0;i<score.length - 1;) {
    //   let temp
    //   if(score[i][k] < score[i+1][k]) {
    //     temp = score[i]
    //     score[i] = score[i+1]
    //     score[i+1] = temp
    //     i = i - 2
    //     if(i<0) i = 0
    //   } else i++
    // }
    // console.log('score',score)

    // 807. Max Increase to Keep City Skyline
    // let grid = [[0,0,0],[0,0,0],[0,0,0]]
    // let ans = 0

    // for(let i = 0;i<grid.length;i++) {
    //   for(let j = 0;j<grid[i].length;j++) {
    //     let tempArr = []
    //     for(let k = 0;k<grid.length;k++) tempArr.push(grid[k][j])

    //     ans+= Math.min(Math.max(...tempArr),Math.max(...grid[i])) - grid[i][j]
    //   }
    // }
    // console.log('ans',ans)

    // 1769. Minimum Number of Operations to Move All Balls to Each Box
    // let boxes = "001011"
    // let boxArr = boxes.split('')
    // let ans = []
    // for(let i = 0;i<boxArr.length;i++) {
    //   let temp = 0
    //   for(let j = 0;j<boxArr.length;j++) {
    //     if((i != j) && (boxArr[j] === '1')) temp+= Math.abs(j - i)
    //   }
    //   ans.push(temp)
    // }
    // console.log('ans',ans)



    // job
    // let arr = []
    // let ans
    // let last1 = 1,last2 = 1,now = 1
    // const test = (n) => {
    //   ans = []
    //   for(let i = 0;i<n; i++) {
    //     if(i === 0 || i === 1) ans[i] = 1
    //     else ans[i] = ans[i- 2]+ans[i - 1]
    //   }

    //   // if (n < 2) {
    //   //   return n;
    //   // }
    //   // return test(n - 1) + test(n - 2);


    //   for(let i = 0;i<n; i++) {
    //     if(i >= 2) {
    //       last2 = last1
    //       last1 = now
    //       now = last1 + last2
    //     }
    //   }

    //   // ans = 0
    //   // for(let i = 0;i<n; i++) {
    //   //   if((i + 1)% 2 === 1) {
    //   //     arr.push((i + 1))
    //   //     ans+=(i + 1)
    //   //   }else {
    //   //     arr.push(-(i + 1))
    //   //     ans+= -(i + 1)
    //   //   }
    //   // }

    //   // if((n%2) === 1) console.log((n + 1)/2)
    //   // else console.log(-(n/2))
    // }
    // test(6)
    // console.log(ans)
    // console.log(now)

    // class
    // class User {
    //     constructor(name) {
    //       this.name = name;
    //     }

    //     sayHi() {
    //       console.log('Hi~~ '+this.name);
    //     }

    //     sayOK() {
    //       console.log('It,s OK!?!?');
    //     }

    //     static sayHello(name) {
    //       console.log('Hello!! ' + name)
    //       // return 'Hello!!' + name;
    //     }
    //   }
    //   class Users extends User {}

    //   class UserData extends User {
    //     constructor(name,old) {
    //       super(name)
    //       this.name = 'local: ' + name
    //       this.year = old
    //     }

    //     sayHi() {
    //       console.log('Hi~~ '+this.name,' age:' +this.year);
    //     }
    //   }

    //   class UserLike extends UserData {
    //     constructor(name,old,thing) {
    //       super(name,old)
    //       this.thing = thing
    //     }

    //     sayHi() {
    //       super.sayOK()
    //       console.log('Hi~~ ' + this.name + ' age:' +this.year + ' like ' + this.thing);
    //     }
    //   }

    //   let obj1 = new User('deeper')
    //   let obj2 = new Users('darker')
    //   let obj3 = new UserData('fantisiser',16)
    //   let obj4 = new UserLike('boier',18,'doge')
    //   obj1.sayHi()
    //   obj2.sayHi()
    //   obj3.sayHi()
    //   obj4.sayHi()
    //   obj4.sayOK()
    //   // obj4.sayHello('coke')
    //   UserLike.sayHello('coke')
    //   console.log(obj1,obj2,obj3,obj4)


    // all Sort test
    let count = 0
    let arr = [1,4,23,9,57,8,6,56,44,5,6,534,834,9,82,5,3]
    // console.log(arr)

    // const myBubblesort = (arr) => {
    //   let temp
    //   for(let index = 0;index < arr.length; index++) {
    //     if(index <= 0) continue
    //     if(arr[index-1]>arr[index]) {
    //       temp = arr[index - 1]
    //       arr[index - 1] = arr[index]
    //       arr[index] = temp
    //       index = index - 2
    //     }
    //     count++
    //   }
    //   console.log('myBubblesort',arr)
    //   console.log('count',count)
    // }
    // myBubblesort(arr)

    // function bubbleSort(array) {
    //     const length = array.length;
    //     for (let i = 0; i < length; i++) {
    //         for (let j = 0; j < length; j++) {
    //             if(array[j] > array[j+1]) {
    //                 let temp = array[j]
    //                 array[j] = array[j+1];
    //                 array[j+1] = temp;
    //             }
    //             count++
    //         }
    //     }
    //     return array
    // }
    // console.log('bubbleSort',bubbleSort(arr))
    // console.log('count',count)

    // const SelectionSort = (arr) => {
    //   let target = arr
    //   let result = []
    //   while (target.length > 0) {
    //     let big = arr[0]
    //     for(let i = 0;i<target.length;i++) {
    //       if(big<arr[i]) big = arr[i]
    //       count++
    //     }
    //     result.unshift(big)
    //     target.splice(target.indexOf(big),1)
    //   }
    //   console.log('SelectionSort',result)
    //   console.log('count',count)
    // }
    // SelectionSort(arr)

    // const InsertionSort = (arr) => {
    //   let target = arr
    //   let result = []
    //   let temp = 0
    //   for(let i = 0;i<target.length;i++) {
    //     temp = target[i]
    //     result.splice(findPlace(temp,result),0,temp)
    //     count++
    //   }
    //   target.splice(target.indexOf(temp),1)

    //   console.log('InsertionSort',result)
    //   console.log('count',count)
    // }
    // const findPlace = (temp,result) => {
    //   for(let i = 0;i<result.length;i++) if(temp>result[i]) return i
    // }
    // InsertionSort(arr)
    return {
      directiveData
    }
  }
}
</script>

