var ScrollLock = (function() {
	var scrollTop; // 在闭包中定义一个用来保存滚动位置的变量
  var beforeEleStyle;
	return {
		afterOpen: function(lockElement) {
      beforeEleStyle = lockElement.style.cssText;
			//弹出之后记录保存滚动位置，并且给element添加锁定样式
			scrollTop = document.scrollingElement.scrollTop;
      lockElement.style = beforeEleStyle + 'position:fixed;width:100%;overflow:hidden;'
			lockElement.style.top = -scrollTop + "px";
		},
		beforeClose: function(lockElement) {
			//关闭时将还原样式之前保存滚动位置
			document.scrollingElement.scrollTop = scrollTop;
			lockElement.style = beforeEleStyle + '-webkit-overflow-scrolling: touch;';
		}
	};
})();

export default ScrollLock;
