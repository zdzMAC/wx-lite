Page({
  data:{
    bottleShow:false
  },
  onReady: function () {
    
    this.animation = wx.createAnimation()
    this.animation_boom = wx.createAnimation()
  },
  scale: function () {
    this.animation.scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },

  reset: function () {
    this.animation
      .scale(1)
      .translate(0, 0)
      .step({ duration: 0 })
    this.setData({ animation: this.animation.export() })
  },

  translate:function(){
    this.setData({bottleShow :true});
    this.animation
    .scale(0,0.15).translate(-200,-1500).step({ duration:1000});
    this.setData({ animation: this.animation.export() })
  }
})