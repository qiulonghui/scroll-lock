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

## Functions

| Function | Arguments | Description |
| :--- | :--- | :--- |
| `disableBodyScroll` | `targetElement: HTMLElement` | Disables body element scroll when modal box showed  after |
| `enableBodyScroll` | `targetElement: HTMLElement` | Re-enable body element scroll when modal box closed  before |
