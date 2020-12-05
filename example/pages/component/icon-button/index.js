// base/component/icon_view/icon_view.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: String,
      value: ''
    },
    text: {
      type: String,
      value: ''
    },
    openType: {
      type: String,
      value: ''
    },
    height: {
      type: Number,
      value: 0,
    },
    dataDetail: {
      type: String,
      value: ''
    }
  },

  externalClasses: [
    'btn-class', 'text-class', 'img-class'
  ],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick: function (e) {
      this.triggerEvent('onClick', {
        e
      });
    },

    getInfo: function (e) {
      this.triggerEvent('getInfo', {
        e
      });
    }
  }
})