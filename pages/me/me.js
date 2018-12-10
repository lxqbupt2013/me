// pages/heart/heart.js
// const me = [
//   {
//     "date": '2018-12-09',
//     "week": 'Monday',
//     "mood": '3',
//     "weight": 52
//   }, {
//     "date": '2018-12-09',
//     "week": 'Monday',
//     "mood": '4',
//     "weight": 52
//   }, {
//     "date": '2018-12-06',
//     "week": 'Monday',
//     "mood": '5',
//     "weight": 52
//   }, {
//     "date": '2018-12-07',
//     "week": 'Monday',
//     "mood": '1',
//     "weight": 52
//   }, {
//     "date": '2018-12-08',
//     "week": 'Monday',
//     "mood": '1',
//     "weight": 52
//   }, {
//     "date": '2018-12-09',
//     "week": 'Monday',
//     "mood": '2',
//     "weight": 52
//   }, {
//     "date": '2018-12-10',
//     "week": 'Monday',
//     "mood": '2',
//     "weight": 52
//   }
// ];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    me: [],
    hidden: false
  },
  cancel: function () {
    this.setData({
      hidden: true
    });
  },
  confirm: function () {
  
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
  }
})