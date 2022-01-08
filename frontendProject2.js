// create a function that generates random numbers from 0:250 to use its returned value to set the background on events :

function random255(){
    return Math.floor(Math.random() *255) ;
       }
   
   
   //........... mouseover events.......... :
   
   // get all li in the header :
   let liArray = document.querySelectorAll('li') ;
   
   function mouseoverEvents() {
     // below we iterate over the nodeList using forEach:
     liArray.forEach(
       function(li){
       li.addEventListener('mouseover' ,()=>{
                       
         li.style.background = `rgb(${random255()}, ${random255()},${random255()})`})
     })
   }
   mouseoverEvents() ;
   
   
   
   // click events :
   //1- li + main :
   function liClickEvent() {
     // got it globally above
     liArray.forEach((each)=> each.addEventListener('click',()=>{
       //grab main and color it like clicked li:
          document.querySelector('main').style.background = `${each.style.background}`;
       document.querySelector('main').style.borderTopColor = `${each.style.background}`;
       document.querySelector('header').style.background = `${each.style.background}`;
       
     }))
   }
   liClickEvent();
   
   // mouseover events :
   // 3 divs inside main :
   function main3divsMouseover(){
     let mainDivs = document.querySelectorAll('.contentDiv');
     // convert the nodeList ot an array :
     let mainDivsArray = Array.from(mainDivs);
     // iterate over the three divs adding event to each :
     for(let i=0 ; i< mainDivsArray.length ; i++) {
       mainDivsArray[i].addEventListener('mouseover',()=>{
         mainDivsArray[i].style.transform = `scale(1.01)`;
         mainDivsArray[i].style.border = `2px solid black`;
         
       })
     }
   }
   main3divsMouseover(); // call it to work .
   
   // mouseout event :
   //3 divs inside main :
   function main3divsMouseout(){
     let mainDivs = document.querySelectorAll('.contentDiv');
     // convert the nodeList ot an array :
     let mainDivsArray = Array.from(mainDivs);
     // iterate over the three divs adding event to each :
     for(let i=0 ; i< mainDivsArray.length ; i++) {
       mainDivsArray[i].addEventListener('mouseout',()=>{
         mainDivsArray[i].style.transform = `scale(1)`;
         
       })
     }
   }
   main3divsMouseout(); // call it to work .