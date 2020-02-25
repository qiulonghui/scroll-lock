var bodyScrollLock = (function() {
	var scrollTop; // 在闭包中定义一个用来保存滚动位置的变量
  var beforeEleStyle;
	return {
		afterOpen: function() {
      beforeEleStyle = document.body.style.cssText;
			//弹出之后记录保存滚动位置，并且给element添加锁定样式
			scrollTop = document.scrollingElement.scrollTop;
      document.body.style = beforeEleStyle + 'position:fixed;width:100%;'
			document.body.style.top = -scrollTop + "px";
		},
		beforeClose: function() {
			//关闭时将还原样式之前保存滚动位置
      document.body.style = beforeEleStyle + '-webkit-overflow-scrolling: touch;';
			document.scrollingElement.scrollTop = scrollTop;
		}
	};
})();

export default bodyScrollLock;
