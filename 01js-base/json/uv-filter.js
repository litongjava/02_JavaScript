//后台返回的数据
var data = [
  {
    "title": "2022年",
    "totalPv": null,
    "totalUv": "6501",
    "totalAmount": null,
    "totalProject": null,
    "totalNotice": null,
    "projectType": null,
    "tradingAmount": null,
    "tradingNum": null,
    "percent": null,
    "unit": "万次",
    "text": null
  }
]

function filter(data) {
  var outputData = []
  for (var i = 0; i < data.length; i++) {
    var item = data[i]
    item.title += "点击量UV"
    outputData.push(item)
  }
  return outputData;
}

console.log(filter(data))
