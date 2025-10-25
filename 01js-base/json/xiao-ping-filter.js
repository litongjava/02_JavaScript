var data = [
  {
    "num": "177",
    "type": "发起方",
    "province": "0",
    "percent": "0.26%"
  },
  {
    "num": "68254",
    "type": "响应方",
    "province": "0",
    "percent": "99.74%"
  },
  {
    "num": "0",
    "type": "代理方",
    "province": "0",
    "percent": "0.00%"
  },
  {
    "num": "75",
    "type": "发起方",
    "province": "1",
    "percent": "0.57%"
  },
  {
    "num": "13154",
    "type": "响应方",
    "province": "1",
    "percent": "99.43%"
  },
  {
    "num": "0",
    "type": "代理方",
    "province": "1",
    "percent": "0.00%"
  }
]
//console.log(typeof (inputData))
var outputData=[]
for (var i = 0; i < data.length; i++) {
  //console.log(inputData[i])
  var item = data[i];
  if(item.type=="发起方"){
    outputData.push({
      "title": item.type,
      "text": item.num + "家｜" + item.percent,
      "company": "",
      "id": item.province
    });
  }
}

//return outputData
console.log(outputData);
