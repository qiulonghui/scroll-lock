## Scroll-Lock-a
*Features:*
solve the rolling penetration of modal boxes on mobile and PC.
Enables disabled body scroll (for iOS Mobile, Android, desktop Safari/Chrome/Firefox).

## Install
    
    $ yarn add scroll-lock-a
    
    or
    
    $ npm install scroll-lock-a

## Usage examples
##### Vue/ES6

```javascript
// 1. Import the lib
import bodyScrollLock from 'scroll-lock-a';
  
export default {
  mounted() {
  }

  methods:{
    modalShow() {
      // ... some logic to show element
      this.visible = true;
      // Body Elements disabled scrolling
      bodyScrollLock.afterOpen(); 
    },
    modalClose() {
      this.visible = false;
      // Re-enable scroll 
      bodyScrollLock.beforeClose();
    }
  }
}
```

## Functions

| Function | Arguments | Description |
| :--- | :--- | :--- |
| `afterOpen` | `null` | Disables body element scroll when modal box showed  after |
| `beforeClose` | `null` | Re-enable body element scroll when modal box closed  before |
