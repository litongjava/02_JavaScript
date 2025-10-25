function foo(str) {
  var n = 5
  var strArr = ['h', 'i', 'j', 'k', 'l', 'm']
  tmpArr = str.split("")
  newTmpArr = []
  for (var i = 0; i < tmpArr.length; i++) {
    item = tmpArr[i]
    if (strArr.indexOf(item) === -1) {
      newTmpArr.push(item)
    } else {
      var index = (strArr.indexOf(item) + n) % strArr.length
      newTmpArr.push(strArr[index])
    }
  }
  return newTmpArr.join("")
}

var str = ".78"
console.log(isNaN(str))
console.log(foo("ehj"))