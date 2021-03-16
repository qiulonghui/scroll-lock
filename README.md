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
// Import the lib
import  { disableBodyScroll, enableBodyScroll } from 'scroll-lock-a';
  
export default {
  mounted() {
    // the target element is the one we would like to allow scroll Element
    this.targetElement = document.querySelector('#targetElementId');
  }

  methods:{
    modalShow() {
      // ... some logic to show element
      this.visible = true;
      // Body Elements disabled scrolling
      disableBodyScroll(this.targetElement); 
    },
    modalClose() {
      this.visible = false;
      // Re-enable scroll 
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
