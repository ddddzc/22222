function $(select,ranger=document){

		let selects
		let first=selects.charAt(0);
		if(first=='#'){
			return document.getElementById(selects.substr(1))
		}
		else if(first=='.'){
			return ranger.getElementsByClassName(selects.substr(1))
		}
		else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selects)){
			return ranger.getElementsByTagName(selects)
		}

}
window.onload=function(){
	//购物车
	let head=document.getElementsByClassName('head-right2');
	let menu=document.getElementsByClassName('cart-menu');
	head[0].onmouseover=function(){
		menu[0].style.height='100px'
	}
	head[0].onmouseout=function(){
		menu[0].style.height=0;
	}
	console.log(menu)

	// 侧边框
	let aside=document.getElementsByClassName('aside')[0]
	let asides=aside.getElementsByTagName('li')
	let item=document.getElementsByClassName('item')
	for(let i=0;i<asides.length;i++){
		asides[i].onmouseover=function(){
		item[i].style.width='744px';
	    }
	    asides[i].onmouseout=function(){
		item[i].style.width=0;
	    }
	}

	
	//轮播点
	let yuan=document.getElementsByClassName('yuan');
	let lb=document.getElementsByClassName('lb');
	for(let i=0;i<yuan.length;i++){
		yuan[i].onclick=function(){
			for(let j=0;j<lb.length;j++){
				lb[j].style.display='none'
				yuan[j].style.background='#333333'
			}
			lb[i].style.display='block'
			yuan[i].style.background='white'
			num=i;
		}
	}
	let t;
	t=setInterval(fn,500);
	function fn(){
		num++;
		if(num==yuan.length){
			num=0;
		}
		for(let i=0;i<yuan.length;i++){
			lb[i].style.display='none';
			yuan[i].style.background='#333333';
		}
		lb[num].style.display='block';
		yuan[num].style.background='white';
	}
	let banne=document.getElementsByClassName('banner-right');
	banne[0].onmouseover=function(){
		clearInterval(t);
	}
	banne[0].onmouseout=function(){
		t=setInterval(fn,500);
	}

	//banner左右切换
	let zuola=document.getElementsByClassName('zuola');
	let youla=document.getElementsByClassName('youla');
	let zhezhao=document.getElementsByClassName('zhezhao');
	let num=0;
	zuola[0].onmouseover=function(){
		zhezhao[0].style.opacity=0.5;
	}
	zuola[0].onmouseout=function(){
		zhezhao[0].style.opacity=0;
	}
	youla[0].onmouseover=function(){
		zhezhao[1].style.opacity=0.5;
	}
	youla[0].onmouseout=function(){
		zhezhao[1].style.opacity=0;
	}
	youla[0].onclick=fn;
	zuola[0].onclick=function(){
		num--;
		if(num==-1){
			num=yuan.length-1;
		}
		for(let i=0;i<yuan.length;i++){
			lb[i].style.display='none';
			yuan[i].style.background='#333333';
		}
		lb[num].style.display='block';
		yuan[num].style.background='white';
	}
}