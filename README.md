## Scroll-Lock-a
*Features:*
solve the rolling penetration of modal boxes on mobile and PC.
Enables target element scroll locking (for iOS Mobile, Android, desktop Safari/Chrome/Firefox).
*note:* If use safari, you need to close the tab page, reopen the page after refreshing, srcoll-lock will take effect.
## Install
    
    $ yarn add scroll-lock-a
    
    or
    
    $ npm install scroll-lock-a

## Usage examples
##### Vue/ES6

```javascript
// 1. Import the lib
import ScrollLock from 'scroll-lock-a';
  
export default {
  mounted() {
    // 2. Get a target element that you want to lock scrolling (such as a body/container).
    // Specifically, the locked element is the one we would like to no allow scroll.
    this.lockElement = document.querySelector('#lockElementId');
  }

  methods:{
    modalShow() {
      // ... some logic to show element
      this.visible = true;
      // Elements whose outer layer prohibits scrolling
      ScrollLock.afterOpen(this.lockElement); 
    },
    modalClose() {
      this.visible = false;
      // Re-enable scroll 
      ScrollLock.beforeClose(this.lockElement);
    }
  }
}
```

## Functions

| Function | Arguments | Description |
| :--- | :--- | :--- |
| `afterOpen` | `targetElement: HTMLElement` | Disables target element scroll when modal box showed  after |
| `beforeClose` | `targetElement: HTMLElement` | Re-enable target element scroll when modal box closed  before |
