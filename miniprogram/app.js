//app.js
// App({
//   onLaunch: function () {
    
//     if (!wx.cloud) {
//       console.error('请使用 2.2.3 或以上的基础库以使用云能力')
//     } else {
//       wx.cloud.init({
//         traceUser: true,
//       })
//     }

//     this.globalData = {}
//   }
// })

App({
  onLaunch: function () {
    wx.login({
      success: function (res) {
        if(res.code){
          wx.request({
            url: 'https://test.lhxq.top/api/customers/login_miniprogram/',
            data: { code: res.code },
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              if (res.statusCode == 200) {
                console.log("获取到的openid为：" + res.data)
                // that.globalData.openid = res.data
                wx.setStorageSync('openid', res.data)
              } else {
                console.log(res.errMsg)
              }
            },
          })
        }
      
      }
    });
  }
})
