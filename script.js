$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{

        }
    })
})

const firstName = "Abu shaid";
const lastName = "Sabbir";

const result =firstName + lastName;

console.log(result);