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
  sortMe: function (me) {

    let newMeArr = [];
    let length = me.length;

    for(let j = 0; j < length; j++) {
      let maxIndex = 0;
      for (let i = 0; i < me.length; i++) {
        let date1 = new Date(me[i].date)
        let date2 = new Date(me[maxIndex].date)
     
        if (date1.getTime() > date2.getTime()) {
          maxIndex = i;
        }
      }
      newMeArr.push(me[maxIndex]);
      me.splice(maxIndex, 1);
    }

    return newMeArr;
  },
  mergeMe: function (newMe, me) {

    let newDate = newMe.date;

    for (let i = 0; i < me.length; i ++) {
      if (me[i].date == newDate) {
        me.splice(i, 1);
      }
    }
    me.push(newMe);
    let newMeArr = this.sortMe(me)
    return newMeArr;
  },
  getWeek: function (date) {
    switch (date) {
      case 1: return 'MONDAY';
      case 2: return 'TUESDAY';
      case 3: return 'WEDNESDAY';
      case 4: return 'THURSDAY';
      case 5: return 'FRIDAY';
      case 6: return 'SATURDAY';
      case 0: return 'SUNDAY';
    }
  },
  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let dataValue = new Date(e.detail.value.date);
    let newDate = dataValue.toLocaleDateString()
    let newWeek = this.getWeek(dataValue.getDay());

    let newMe = {};
    newMe.mood = e.detail.value.mood;
    newMe.weight = e.detail.value.weight;
    newMe.date = newDate;
    newMe.week = newWeek;
    let that = this;

    wx.getStorage({
      key: 'me',
      complete(res) {
        let me = res.data || [];

        let meArr = that.mergeMe(newMe, me);

        wx.setStorageSync('me', meArr)
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