// pages/addMood/addMood.js
let myDate = new Date();
let currentDate = myDate.toLocaleDateString();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    date: currentDate,
    mood: 5,
    weight: 50,
    checked: [false, false, false, false, false]
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  getWeek: function (date) {
    switch (date) {
      case 1: return 'MONDAY';
      case 2: return 'TUESDAY';
      case 3: return 'WEDNESDAY';
      case 4: return 'THURSDAY';
      case 5: return 'FRIDAY';
      case 6: return 'SATURDAY';
      case 7: return 'SUNDAY';
    }
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let dataValue = new Date(e.detail.value.date);
    let newDate = dataValue.toLocaleDateString()
    let newWeek = this.getWeek(dataValue.getDay());

    let newMe = {};
    newMe.mood = e.detail.value.mood;
    newMe.weight = e.detail.value.weight;
    newMe.date = newDate;
    newMe.week = newWeek;

    wx.getStorage({
      key: 'me',
      complete(res) {
          let me= res.data || [];
          me.push(newMe)
          wx.setStorageSync('me', me)
          wx.navigateBack();
      }
    })    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.value && options.index) {
      let value = JSON.parse(options.value)
      let index = options.index;
      this.data.checked[index] = true;

      this.setData({
        date: value.date,
        weight: value.weight,
        mood: value.mood,
        checked: this.data.checked
      })
    }
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