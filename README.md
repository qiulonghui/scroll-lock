## Scroll-Lock-a
*Features:*
解决移动端和PC端滚动穿透的问题。兼容Safari、QQ浏览器、微信浏览器及大多数安卓原生浏览器

## 安装
    
    $ yarn add scroll-lock-a
    
    or
    
    $ npm install scroll-lock-a

## 使用
##### Vue/ES6

```javascript
// 引入
import  { disableBodyScroll, enableBodyScroll } from 'scroll-lock-a';
  
export default {
  mounted() {
    // 允许滚动的元素dom
    this.targetElement = document.querySelector('#targetElementId');
  }

  methods:{
    modalShow() {
      // ... 
      this.visible = true;
      // 目标元素以外的元素禁止滚动
      disableBodyScroll(this.targetElement); 
    },
    modalClose() {
      this.visible = false;
      // 恢复body元素的滚动
      enableBodyScroll(this.targetElement);
    }
  }
}
```

## API

| Function | Arguments | Description |
| :--- | :--- | :--- |
| `disableBodyScroll` | `targetElement: HTMLElement` | Disables body element scroll when modal box showed  after |
| `enableBodyScroll` | `targetElement: HTMLElement` | Re-enable body element scroll when modal box closed  before |
