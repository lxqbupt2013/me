// pages/heart/heart.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    me: [],
    hidden: false
  },
  addMood: function () {
    wx.navigateTo({
      url: '../addMood/addMood'
    })
  },
  modifyMe: function (e) {
    let value = e.currentTarget.dataset.value;
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../addMood/addMood?value=' + JSON.stringify(value) + '&index=' + index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'me',
      success(res) {
        that.setData({
          me: res.data
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})