


let getLogo = document.querySelector('h1');
let getMenuItems = document.querySelector('.menu__items');
let getMenu = document.querySelector('.menu');

//change a background img
getMenuItems.addEventListener('mouseover', function(event){
   let target = event.target;
   let getHeadBack = document.querySelector('.menu__back');
   if (event.target.tagName !== 'A') return false;
   getHeadBack.classList.toggle('whiteHover');
   getHeadBack.remove()
   setImg(target.getAttribute('val'),getHeadBack)
   ;

   })



   //create img for a header's background
function setImg(value) {
let img = document.createElement('img');
img.src = `img/topBack${value}.png`;
//img.src = `../../img/topBack${value}.png`;
img.classList = 'menu__back';
getMenu.append(img);
}

//change content for second section
let getButtons = document.querySelector('.tits__buttons');
let titsBox = document.querySelector('.titsbox');
let currentTits = 0;

titsBox.children[0].classList.toggle('nope')

getButtons.addEventListener('click', function(event) {
   let target = event.target;
   if (target.hasAttribute('val')) {
   let attr = target.getAttribute('val');
   titsBox.children[currentTits].classList.toggle('nope');
   currentTits = attr;
   titsBox.children[attr].classList.toggle('nope')
   }
})

//treatment for people
let getPeople = document.querySelector('.people');
let getDividedImg = document.querySelector('.divided');
let getCoubs = document.querySelector('.people__coubs');
let checkGreatImg = 1;


getPeople.addEventListener('click', function(event){
   let target = event.target;

   if(target.tagName !== "IMG"){return false};
   if(!target.hasAttribute('long') && !target.hasAttribute('tall')) {
      if(checkGreatImg){greatImgFunc(target.getAttribute('val'), 'greatImg'); checkGreatImg = 0; return false};
      let greatImg = document.querySelector('.greatImg');
      checkGreatImg = 1;
      greatImg.remove();
      return false;
   }

   if(target.hasAttribute('long') && !target.hasAttribute('tall')){
      
      if(checkGreatImg){
         greatImgFunc(target.getAttribute('val'), 'greatLongImg', 1); 
         checkGreatImg = 0;
         getCoubs.classList.toggle('nope')
         return false};
      let greatLongImg = document.querySelector('.greatLongImg');
      checkGreatImg = 1;
      getCoubs.classList.toggle('nope')
      greatLongImg.remove();
      return false;
   }
   if(target.hasAttribute('tall')){ 
      
      if(checkGreatImg){
         greatImgFunc(target.getAttribute('val'), 'greatTallImg', 2); 
         checkGreatImg = 0;
         getCoubs.classList.toggle('nope')
         return false};
      let greatTallImg = document.querySelector('.greatTallImg');
      checkGreatImg = 1;
      getCoubs.classList.toggle('nope')
      greatTallImg.remove();
      return false;
   }
})



function greatImgFunc(value, className, long) {
   let img = document.createElement('img');
   img.src = `img/gallery${value}.png`;
   //img.src = `../../img/gallery${value}.png`;
   img.classList = className;
   if(long == 1) img.setAttribute('long', 1);
   if(long == 2) img.setAttribute('tall', 1);
   getPeople.append(img);
   
   }




































//console.log(sum(2, 10));

//const button = document.querySelector('.menu__button');
//const menuList = document.querySelector('.menu__list');
//const menuLink = document.querySelectorAll('.menu__link');
//const moveMenu = document.querySelector('.firm__body');




//burger icon
//button.addEventListener('click', function() {
//   button.classList.toggle('menu__button-active');
//   menuList.classList.toggle('menu__list-active');
//   moveMenu.classList.toggle('plus-menu');
//})


//toggle navigation
//for (let links of menuLink) {
//   links.addEventListener('click', function() {
//      for (let link of menuLink) {
//         link.classList.remove('menu__link-active')
//      };
//      links.classList.toggle('menu__link-active')
//   })
//}

