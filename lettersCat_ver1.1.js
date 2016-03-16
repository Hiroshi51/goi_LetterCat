/***************************************************************************
| Auther :LETTERS51;
| Version :1.1
| Discription : after a certain time the box divisiton appear up from 
|              the bottom when you scroll the window it dissapear down to 
|              the bottom and show again
****************************************************************************/

/***************************************************************************
| 変数の宣言
****************************************************************************/
var appearFlag = 0;                        /*ボックス出現フラグ*/
var inAppearFlag = 0;                        /*ボックス出現中フラグ*/
var DocElm = document.documentElement;     /*省略保存*/
var Dbody  = document.body;　　　　　　　　　　　　　 /*省略保存*/
var currentPosition = DocElm.scrollTop || Dbody.scrollTop; /*現在地取得*/
var animUpSpeed =　　 5;                    /*出現スピード*/　　
var animDownSpeed =   5;　　　　　　　　　　　　　　　 　　/*降下スピード*/　　
var StopPosition = 　10;                     /*止まる位置*/　　
var WaitingTime = 　20000;                   /*出現までの時間（例 20000 → 20秒）*/　　
var timer = false;



/***************************************************************************
| ボックス出現関数
****************************************************************************/
function appearUp()
{
var fin = 0;
var boxPosition = -100;  　　　　　/*出現前初期位置*/
 function moveUpFrame()
 {
  document.getElementById("box").style.bottom = boxPosition + 'px';　　　/*アニメーション*/
  boxPosition++;　　　　　　　　　　　/*position更新*/　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
	if (boxPosition == StopPosition)
	{
	fin = 1;
	clearInterval(idUp); 
	}  
 }
var idUp = setInterval(moveUpFrame,animUpSpeed);　　/*アニメーションスピード*/　　　　　　　　　　　
appearFlag = 1;
window.onscroll = function ()　{　/*スクロール感知*/　
	if(fin == 1) {	
	
		if(timer !== false)
		{
			clearTimeout(timer);
		}
		
		if(appearFlag == 1){
		timer = setTimeout(function(){disappearDown();},200);
		}
		
	 
}}}




/***************************************************************************
| ボックス降りる関数
****************************************************************************/
function disappearDown(){
 var scrollPosition = 0;
 position = DocElm.scrollTop || Dbody.scrollTop;
 diff = currentPosition - position;
 var boxPosition = StopPosition;    
	function moveDownFrame()
	{
	 document.getElementById("box").style.bottom = boxPosition + 'px';
	 boxPosition--;
	   if(boxPosition == -100)
	   {
	   clearInterval(iddown);
	   }
	}
	   if(diff != 0)
	   {
	 　if(appearFlag ==1){
	  var iddown = setInterval(moveDownFrame, animDownSpeed);
	　　　}
　　　　
 appearFlag = 0;
 setTimeout("appearUp()",WaitingTime);
　　}　
}




/***************************************************************************
| 最初に呼ばれる処理
****************************************************************************/
window.onload = function()
{
  setTimeout("appearUp()", WaitingTime);   /*出現関数呼び出し*/　　　　

}



