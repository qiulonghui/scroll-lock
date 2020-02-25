! function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(r, o, function (t) {
        return e[t]
      }.bind(null, o));
    return r
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "", n(n.s = 0)
}([function (e, t, n) {
  "use strict";

  function r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter((function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      }))), n.push.apply(n, r)
    }
    return n
  }

  function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }
  n.r(t), n.d(t, "disableBodyScroll", (function () {
    return f
  })), n.d(t, "enableBodyScroll", (function () {
    return h
  }));
  var l = [],
    c = !1,
    u = function (e) {
      return console.error("[body-scroll-lock] ".concat(e))
    },
    a = function (e) {
      return (e = e || window.event).touches.length > 1 || (e.preventDefault && e.preventDefault(), !1)
    },
    s = function () {
      function e(t) {
        ! function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.targetEl = t, this.initialClientY = -1, this.handleEvent = this.handleEvent.bind(this), this.init()
      }
      var t, n, r;
      return t = e, (n = [{
        key: "handleEvent",
        value: function (e) {
          "touchstart" == e.type ? this.start(e) : "touchmove" == e.type && this.move(e)
        }
      }, {
        key: "start",
        value: function (e) {
          1 === e.targetTouches.length && (this.initialClientY = e.targetTouches[0].clientY), this.targetEl.addEventListener("touchmove", this.handleEvent, !1)
        }
      }, {
        key: "move",
        value: function (e) {
          var t, n = e.targetTouches[0].clientY - this.initialClientY;
          if (1 === e.targetTouches.length) return this.targetEl && 0 === this.targetEl.scrollTop && n > 0 || (t = this.targetEl) && t.scrollHeight - t.scrollTop - 50 <= t.clientHeight && n < 0 ? a(e) : (e.stopPropagation(), !0)
        }
      }, {
        key: "init",
        value: function () {
          c || (document.addEventListener("touchmove", a, {
            passive: !1
          }), c = !0), this.targetEl.addEventListener("touchstart", this.handleEvent, !1)
        }
      }, {
        key: "removeEventListen",
        value: function () {
          c && document.removeEventListener("touchmove", a, {
            passive: !1
          }), this.targetEl.removeEventListener("touchstart", this.handleEvent, !1), this.targetEl.removeEventListener("touchmove", this.handleEvent, !1), c = !1
        }
      }]) && i(t.prototype, n), r && i(t, r), e
    }(),
    f = function (e) {
      if (e) {
        var t = new s(e);
        l.push(t)
      } else u("targetElement must be provided when calling disableBodyScroll.")
    },
    h = function (e) {
      l.forEach((function (t) {
        t.targetEl === e && t.removeEventListen()
      })), l = []
    },
    d = {
      afterOpen: function (e) {
        u('"afterOpen" is deprecated! Use "disableBodyScroll" instead. \n https://github.com/qiulonghui/scroll-lock'), f(e)
      },
      beforeClose: function (e) {
        u('"beforeClose" is deprecated! Use "enableBodyScroll" instead. \n https://github.com/qiulonghui/scroll-lock'), h(e)
      }
    },
    v = function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? r(Object(n), !0).forEach((function (t) {
          o(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }({
      disableBodyScroll: f,
      enableBodyScroll: h
    }, d);
  t.default = v
}]);