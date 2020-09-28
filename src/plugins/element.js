import Vue from 'vue'
// 导入弹框提示组件Message

import { Button, Form, FormItem, Input, Message } from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
    //把弹框组件挂在到Vue实例对象上
Vue.prototype.$message = Message