let likecount=0;
let dislikecount=0;

let likebtn=document.getElementById("like-btn");
likebtn.addEventListener("click",function(){
    likecount++;
    document.getElementById("like-count").innerHTML=likecount;
});

let dislikebtn=document.getElementById("dislike-btn")
dislikebtn.addEventListener("click",function(){
    dislikecount++;
    document.getElementById("dislike-count").innerHTML=dislikecount;
})