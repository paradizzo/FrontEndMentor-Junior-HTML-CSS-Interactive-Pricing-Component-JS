var slider = document.getElementById("myRange");
 

function sliderbar(){
    var ele = document.getElementById("myRange");
    var selectedValue = ele.value;

    var y = document.getElementById("numerical-to-calc");
    var z = document.getElementById('numerical-to-calc-bot')
    var x = document.getElementById('views');
    if(selectedValue=="1"){
       y.innerHTML = "8";
       x.innerHTML = '10K';
       z.innerHTML = '8';
       z.value = 8
       y.value = 8
    }
    else if(selectedValue=="2"){
       y.innerHTML = "12";
       x.innerHTML = '50K';
       z.innerHTML = '12';
       z.value = 12
       y.value = 12
    }
    else if(selectedValue=="3"){
       y.innerHTML = "16";
       x.innerHTML = '100K';
       z.innerHTML = '16';
       z.value = 16
       y.value = 16
    }
    else if(selectedValue=="4"){
       y.innerHTML = "24";
       x.innerHTML = '500K';
       z.innerHTML = '24';
       z.value = 24
       y.value = 24
    }
    else if(selectedValue=='5'){
        y.innerHTML='36'
        x.innerHTML = '1M';
        z.innerHTML = '36';
        z.value = 36
       y.value = 36
    }
}

$('.slider.round').click(function(){
   var y = document.getElementById("numerical-to-calc");
   var z = document.getElementById('numerical-to-calc-bot');
   var ele = document.getElementById("myRange");
   var selectedValue = ele.value;
   full =  parseFloat(document.getElementById('numerical-to-calc-bot').value);
   if (document.querySelector('.checkbox').checked == false){
      if(selectedValue=="1"){
         z.value = 8
         y.value = 8
         discount = (z.value) - ((z.value) * 25/100)
         z.innerHTML = discount;
         y.innerHTML = discount;
      }
      else if(selectedValue=="2"){
         z.value = 12
         y.value = 12
         discount = (z.value) - ((z.value) * 25/100)
         z.innerHTML = discount;
         y.innerHTML = discount;
      }
      else if(selectedValue=="3"){
         z.value = 16
         y.value = 16
         discount = (z.value) - ((z.value) * 25/100)
         z.innerHTML = discount;
         y.innerHTML = discount;
      }
      else if(selectedValue=="4"){
         z.value = 24
         y.value = 24
         discount = (z.value) - ((z.value) * 25/100)
         z.innerHTML = discount;
         y.innerHTML = discount;
      }
      else if(selectedValue=='5'){
          z.value = 36
         y.value = 36
         discount = (z.value) - ((z.value) * 25/100)
         z.innerHTML = discount;
         y.innerHTML = discount;
      }
     
   } if (document.querySelector('.checkbox').checked == true){
      if(selectedValue=="1"){
         z.value = 8
         y.value = 8
         discount = (z.value)
         z.innerHTML = discount;
         y.innerHTML = discount;
         
      }
      else if(selectedValue=="2"){
         z.value = 12
         y.value = 12
         discount = (z.value)
         z.innerHTML = discount;
         y.innerHTML = discount;
      }
      else if(selectedValue=="3"){
         z.value = 16
         y.value = 16
         discount = (z.value)
         z.innerHTML = discount;
         y.innerHTML = discount;
      }
      else if(selectedValue=="4"){
         z.value = 24
         y.value = 24
         discount = (z.value)
         z.innerHTML = discount;
         y.innerHTML = discount;
      }
      else if(selectedValue=='5'){
          z.value = 36
         y.value = 36
         discount = (z.value)
         z.innerHTML = discount;
         y.innerHTML = discount;

      }
   }
   })