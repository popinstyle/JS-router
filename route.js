(function(){
	var one = document.getElementById("first");
	var two = document.getElementById("second");
	var three = document.getElementById("third");
	var nav_right = document.getElementsByClassName("nav_right")[0];
	history.replaceState({title:''},null,'');
	one.addEventListener("click",function(){
		history.pushState({title:"第一页",color:"#eee",text:"第一页"},null,"#/first");
		nav_right.style.background = "#eee";
		nav_right.innerHTML = "第一页";
	})
	two.addEventListener("click",function(){
		history.pushState({title:"第二页",color:"#FFD700",text:"第二页"},null,"#/second");
		nav_right.style.background = "#FFD700";
		nav_right.innerHTML = "第二页";
	})			
	three.addEventListener("click",function(){
		history.pushState({title:"第三页",color:"#EE2C2C",text:"第三页"},null,"#/third");
		nav_right.style.background = "#EE2C2C";
		nav_right.innerHTML = "第三页";
	})
	window.addEventListener("popstate",function(e){
		nav_right.style.background = e.state.color;
		nav_right.innerHTML = e.state.text;
	})
})()