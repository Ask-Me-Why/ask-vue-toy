##About Ask-Scroll2

###option
`javascript
	<ask-scroll2 
		direction="x|y" 
		thresholdR="44" 
		thresholdI="44" 
		scrollX 
		scrollY 
		barX 
		barY 
		:onRefresh="onRefresh" 
		:onInfinite="onInfinite" >
		内容
	</ask-scroll2>
	/*详情*/
	|		参数名			|									描述								|
		   direction			上拉加载和下拉刷新的取值方向 x代表从左至右 y代表从上至下
		   thresholdR			下拉刷新触发的偏移值 默认溢出44px触发
		   thresholdI			上拉加载触发的偏移值 默认溢出44px触发
		   scrollX				如果为true，则沿X轴滚动已启用。
		   scrollY				如果为true，则沿Y轴滚动已启用。
		   barX					如果为true，则X轴在scrollX为true的情况下出现滚动条。			
		   barY					如果为true，则Y轴在scrollY为true的情况下出现滚动条。
		   onRefresh			function(done){} 下拉刷新触发的函数,会返回一个done函数触发完成操作
		   onInfinite			function(done){} 上拉加载触发的函数,会返回一个done函数触发完成操作
`

###Sub Components

`javascript
<scroll-before>下拉刷新||上拉加载</scroll-before>    //提示语，上拉和下拉触发之前的提示语
<scroll-loosen>释放刷新</scroll-loosen>   		   //提示语，下拉刷新准备触发的提示语
<scroll-in>正在加载</scroll-in>  				   //提示语，上拉和下拉触发执行中的提示语
<scroll-end>加载完成</scroll-end>    			   //提示语，上拉和下拉在done方法执行完成时的提示语
`