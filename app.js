$(document).ready(function(){
    $("#game-wrap").hide();
    $("#inside-wrap").hide()
     let ranNum;
     let prevRanNum;
     let target;
    $("#btn-play ,.btn-playAg ,.btn-rty ,.btn-reset ").on("click",function (){
         $("#start-wrap").hide();
         $("#game-wrap").show();
        $("#inside-wrap").hide();
         let  arr = ["img/no0.png","img/no1.png","img/no2.png","img/no3.png","img/no4.png","img/no5.png","img/no6.png","img/no7.png","img/no8.png","img/no9.png","img/no10.png","img/no11.png","img/no12.png"]
         let ranArr=arr[Math.floor(Math.random()*arr.length)]

         ranNum = arr.indexOf(ranArr);
         $(".random-card").html("<img src="+ranArr+">")
         findPrevNum.unshift(ranNum);
         
         if(findPrevNum[1]==""){
         findPrevNum.push(findPrevNum[0]) 
         }

         target=Math.floor((Math.random()*9)+6)
      
         $(".target").html(target)

         scorecount=0;
      $(".score").html(scorecount)
         $("li span").addClass("redheart")
         rH = $(".redheart").toArray();
         $("li span").removeClass("blackheart")
      })

    //Variable For Higher & Lower 
    function all(){
     let arr = ["img/no0.png","img/no1.png","img/no2.png","img/no3.png","img/no4.png","img/no5.png","img/no6.png","img/no7.png","img/no8.png","img/no9.png","img/no10.png","img/no11.png","img/no12.png"]
     let ranArr=arr[Math.floor(Math.random()*arr.length)]
      ranNum = arr.indexOf(ranArr);
      $(".random-card").html("<img src="+ranArr+">")
      findPrevNum.unshift(ranNum)
      
      let c = findPrevNum.length
      if(c>2){
      findPrevNum.pop();
      };
      
      prevRanNum=findPrevNum[1] 
      }
 
  // else if Condition for Higher & Lower
  function condition1(){
      scorecount++      
      $(".score").html(scorecount)
      if( scorecount>=target ){
    $("#inside-wrap").show();
    $(".content-defeat").hide();
    
    $(".content-win").show();

      }
   }
    // else Condition For Higher & Lower
     function condition2(){
     let bH="<span class='blackheart'><i class='fas fa-heart'></i></span>";
     rH.shift();
     rH.push(bH);
     $("li").html(rH);

     if(rH[0]==bH){
    $("#inside-wrap").show();
    $(".content-win").hide();
    
    $(".content-defeat").show();
     }
  }

       // Higher Card 
       $("#high").on("click",function (){
        all()
       if(ranNum >= prevRanNum){
          condition1()
       }else{
       condition2()
   
       }
       
       })
       // Lower Card
       $("#low").on("click",function (){
       all()
       if(ranNum <= prevRanNum){
        condition1()
       
       }else{
       condition2()
       }
       })

   $(".btn-exit").click(function(){
      $("#start-wrap").show();
      $("#game-wrap").hide();
   })
      let rH = $(".redheart").toArray();
      let scorecount =0;
      let findPrevNum = [];
    })