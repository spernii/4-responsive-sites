const img_carousel = document.getElementById('img-carousel')
const img_obj = {
    first_image:'img/streetwear/streetwear.jpg',
    second_image:'img/streetwear/streetwear2.jpg',
    last_image:'img/streetwear/wall.jpg'
}
const iterate_array = Object.keys(img_obj);
console.log(Object.keys(img_obj))
let i = 0;
setInterval(()=>{
    img_carousel.src = img_obj[iterate_array[i]];
    i++;
    if(i == 3){
        i = 0;
    }
},5000)