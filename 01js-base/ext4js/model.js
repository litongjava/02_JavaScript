//User类，创立一个模型类
Ext.define("user", {
  extend: "Ext.data.Model",
  fields: [
    { name: 'name', type: 'string', sortable: true },
    { name: 'age', type: 'int', sortable: true },
    { name: 'email', type: 'string', sortable: true }
  ]
});
//User对象
var user = Ext.create("user", {});
Ext.create("Ext.data.Store", {
  model: 'user', //这个地方user不是一个对象，而是一个类
  storeId: 's_user', //写了以后就可以把store用StroeManager进行管理
  proxy: { //代理
    type: 'ajax',
    url: 'users.json',
    reader: { //读取器
      type: 'json', //类型
      root: 'topics' //根节点
    },
    writer: {
      type: 'json'
    }
  },
  autoLoad: true
});