Ext.onReady(function() {
  //初始化
  Ext.QuickTips.init(); //类似于title，用于显示ext:qtip设定的值
  //创建表格时候要 用表格的面板
  var grid = Ext.create("Ext.grid.Panel", {
    title: 'Grid Demo', //标题
    frame: true, //面板渲染，使表格更加饱满
    //forceFit : true,//自动填充panel空白处
    width: 600,
    height: 280,
    columns: [ //列模式
      { text: "姓名", dataIndex: 'name', width: 100 }, //text列名，表头信息
      { text: "年龄", dataIndex: 'age', width: 100 }, //dataIndex从store/model中找到相应的记录
      {
        text: "邮箱",
        dataIndex: 'email',
        width: 350, //重构列模式
        field: {
          xtype: 'textfield', //编辑方式
          allowBlank: false //
        }
      }
    ],
    tbar: [
      { xtype: 'button', text: '添加', iconCls: 'table_add' }, //这个地方iconCls是一些图标组件，大家可以自行添加
      {
        xtype: 'button',
        text: '删除',
        iconCls: 'table_remove',
        handler: function(o) {
          //var gird = o.findParentByType("gridpanel");
          var gird = o.ownerCt.ownerCt; //ownerCt是拥有这个组件的组件
          var data = gird.getSelectionModel().getSelection();
          //getSelectionModel得到Ext.selection.Model对象，得到选择模式
          //Ext.selection.Model中有getSelection方法得到选中对象的数组
          if(data.length == 0) {
            Ext.Msg.alert("提示", "您最少要选择一条数据");
          } else {
            //1.先得到ID的数据(name)
            var st = gird.getStore(); //得到store
            var ids = [];
            Ext.Array.each(data, function(record) {
              ids.push(record.get('name'));
            })
            //2.后台操作(delete)
            Ext.Ajax.request({
              url: '/extjs/extjs!deleteData.action',
              params: { ids: ids.join(",") },
              method: 'POST',
              timeout: 2000, //延迟显示
              success: function(response, opts) {
                Ext.Array.each(data, function(record) {
                  st.remove(record);
                })
              }
            })
            //3.前端操作DOM进行删除(ExtJs)
          }
        }
      },
      { xtype: 'button', text: '修改', iconCls: 'table_edit' },
      { xtype: 'button', text: '查看', iconCls: 'table_comm' }
    ],
    dockedItems: [{ //控制组件在什么位置，随便定位
      xtype: 'pagingtoolbar', //分页组件
      store: Ext.data.StoreManager.lookup('s_user'), //分页也跟数据、挂钩
      dock: 'bottom', //位置
      displayInfo: true
      }],
    plugins: [ //Ext 4.0用的是 插件的形式来和form表单配合使用的
        Ext.create("Ext.grid.plugin.CellEditing", {
        clicksToEdit: 1
      })
      ],
    selType: 'checkboxmodel', //设定选择模式，前边会加选择框
    multiSelect: true, //运行多选
    renderTo: 'gridDemo', //把这个组件渲染到一个div上
    store: Ext.data.StoreManager.lookup('s_user') //通过StoreManager读取数据
  });
});