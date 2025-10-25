var array = [1, 2, 3]
array.forEach(function (item, index) {
  console.log(index, item)
})

array.forEach((item,index)=>{
  console.log(index,item)
})

console.table(array)