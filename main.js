var images=[ "adoptmedog.jpeg","Adopt-MeStar.jpeg",
"AdoptMeAussie.jpeg","AdoptMeKits.jpeg","AdoptMeMeg.jpeg",
"AdoptMeMyth.png","AdoptMeSpr.jpeg"
];



var index=0;

function nextSlide(){
 
 document.getElementById("dogPic").src=images[index];

 index=index+1;
 if(index>6){
     index=0;
 }
    
}

function backSlide(){
    document.getElementById("dogPic").src=images[index];

    index=index-1;
    if(index<0){
        index=6;
    }
    
}