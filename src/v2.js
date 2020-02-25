let list = []
let documentListenerAdded = false

const throwError = (message) => console.error(`[body-scroll-lock] ${message}`);

const preventDefault = function (e) {
  e = e || window.event
  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};
class AllowScrollTarget {
  constructor(targetEl) {
    this.targetEl = targetEl;
    this.initialClientY = -1;
    this.handleEvent = this.handleEvent.bind(this)
    this.init()
  }
  handleEvent(event) {
    if (event.type == 'touchstart') {
      this.start(event);
    } else if (event.type == 'touchmove') {
      this.move(event);
    }
  }

  start(event) {
    if (event.targetTouches.length === 1) {
      this.initialClientY = event.targetTouches[0].clientY;
    }
    this.targetEl.addEventListener('touchmove', this.handleEvent, false);
  }
  move(event) {
    const isTargetElementTotallyScrolled = function (targetElement) {
      return targetElement ? targetElement.scrollHeight - targetElement.scrollTop - 50 <= targetElement.clientHeight : false;
    }
    const clientY = event.targetTouches[0].clientY - this.initialClientY;

    if (event.targetTouches.length === 1) {
      if (this.targetEl && this.targetEl.scrollTop === 0 && clientY > 0) {
        // element is at the top of its scroll.
        return preventDefault(event);
      }

      if (isTargetElementTotallyScrolled(this.targetEl) && clientY < 0) {
        // element is at the bottom of its scroll.
        return preventDefault(event);
      }

      event.stopPropagation();
      return true;
    }
  }
  init() {
    // 添加事件绑定
    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, { passive: false })
      documentListenerAdded = true;
    }
    this.targetEl.addEventListener('touchstart', this.handleEvent, false)
  }
  removeEventListen() {
    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault,{ passive: false });
    }
    this.targetEl.removeEventListener('touchstart', this.handleEvent, false)
    this.targetEl.removeEventListener('touchmove', this.handleEvent, false)
    documentListenerAdded = false;
  }
}

export const disableBodyScroll = function (targetEl) {
  if(!targetEl) {throwError('targetElement must be provided when calling disableBodyScroll.'); return}
  let targetObj = new AllowScrollTarget(targetEl)
  list.push(targetObj)
}

export const enableBodyScroll = function (targetEl) {
  list.forEach(targetObj => {
    if (targetObj.targetEl === targetEl) {
      targetObj.removeEventListen()
    }
  })
  list= [];
}

// 不在使用的方法
const deprecatedMethods = {
  afterOpen(targetEl) {
    const warn = '"afterOpen" is deprecated! Use "disableBodyScroll" instead. \n https://github.com/qiulonghui/scroll-lock'
    throwError(warn)
    disableBodyScroll(targetEl)
  },

  beforeClose(targetEl) {
    const warn = '"beforeClose" is deprecated! Use "enableBodyScroll" instead. \n https://github.com/qiulonghui/scroll-lock'
    throwError(warn)
    enableBodyScroll(targetEl)
  },
}

const bodyScrollLock = {
  disableBodyScroll,
  enableBodyScroll,

  ...deprecatedMethods
}

export default bodyScrollLock