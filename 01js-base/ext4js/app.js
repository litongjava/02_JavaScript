//application会初始化面板
Ext.onReady(function() {
  //Ext初始化
  Ext.QuickTips.init();
  //Ext规范，HTML只会加载一个类，就是Application这个类
  //启用Loader
  Ext.Loader.setConfig({
    enabled: true
  });
  Ext.application({ //初始化一个应用
    name: 'AM', //应用的名字
    appFolder: "app", //应用的目录
    launch: function() { //当前页面加载完成执行的函数
      Ext.create('Ext.container.Viewport', { //简单创建一个视图
        layout: 'auto', //自动填充布局
        items: {
          xtype: 'userlist', //要初始化哪个面板，将userlist展示出来
          title: 'Users',
          html: 'List of users will go here'
        }
      });
    },
    controllers: [ //控制器
      'Users'
    ]
  });
})