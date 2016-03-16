/***************************************************************************
| Auther :LETTERS51;
| Version :1.0
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
var animUpSpeed =　　　10;                    /*出現スピード*/　　
var animDownSpeed =  5;　　　　　　　　　　　　　　　 　　/*降下スピード*/　　
var StopPosition = 　10;                     /*止まる位置*/　　
var WaitingTime = 　10000;                   /*出現までの時間（例 20000 → 20秒）*/　　


/***************************************************************************
| ボックス出現関数
****************************************************************************/
function appearUp()
{
inAppearFlag　= 1;
var boxPosition = -100;  　　　　　/*出現前初期位置*/
   function moveUpFrame()
   {
   	document.getElementById("box").style.bottom = boxPosition + 'px';　　　/*アニメーション*/
   	boxPosition++;　　　　　　　　　　　/*position更新*/　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
      if (boxPosition == StopPosition)
      {
      clearInterval(idUp); 
      }	 
   }
var idUp = setInterval(moveUpFrame,animUpSpeed);　　/*アニメーションスピード*/　　　　　　　　　　　
appearFlag = 1;
inAppearFlag　= 0;
}


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
         if(diff !=0)
         {
       　
    		var iddown = setInterval(moveDownFrame, animDownSpeed);
    	　　　}
　　　　　　　
   appearFlag = 0;
   setTimeout("appearUp()",WaitingTime);
  
 }




/***************************************************************************
| 最初に呼ばれる処理
****************************************************************************/
window.onload = function()
{
	setTimeout("appearUp()", WaitingTime);   /*出現関数呼び出し*/　　　　
	var timer = false;
    	document.getElementById("container").onscroll = function ()　　/*スクロール感知*/　　　
        {
    if(appearFlag == 1 && inAppearFlag　== 0){
        	if(timer !== false)
        	{
        		clearTimeout(timer)
        	}
        	timer = setTimeout(function(){disappearDown();},200);
        	}
        }
}
