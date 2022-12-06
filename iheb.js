var i=0
var rap=["/draek2.jpg",'/migos.jpg',"/smara.jpg","/lilbay.jpg","/ala.jpg"]
function next(){
    i++
    if(i<5){
        $('#0').fadeOut(600)
    document.getElementById('0').src=rap[i]
    $('#0').fadeIn(600)
    }
    else{
        i=0
    }
}

function back(){
    i--
    if(i>0){
        $('#0').fadeOut(600)
    document.getElementById('0').src=rap[i]
    $('#0').fadeIn(600)
    }
    else{
        i=0
    }
}
var i=0
var house=["/dj khaled.jpg","/snake.jpg","/black cof.jpg","/pegy.jpg","/SOL3.jpg"]
function next1(){
    i++
    if(i<5){
        $('#1').fadeOut(600)
    document.getElementById('1').src=house[i]
    $('#1').fadeIn(600)
    }
    else{
        i=0
    }
}
function back1(){
    i--
    if(i>0){
        $('#1').fadeOut(600)
    document.getElementById('1').src=house[i]
    $('#1').fadeIn(600)
    }
    else{
        i=0
    }
}
var i=0
var rb=["/anne.jpg","/bruno mars.jpg","/1629394-250tn.jpg","/wekend.jpg","/billie.jpg"]
function next2(){
    i++
    if(i<5){
        $('#2').fadeOut(600)
    document.getElementById('2').src=rb[i]
    $('#2').fadeIn(600)
    }
    else{
        i=0
    }
}
function back2(){
    i--
    if(i>0){
        $('#2').fadeOut(600)
    document.getElementById('2').src=rb[i]
    $('#2').fadeIn(600)
    }
    else{
        i=0
    }
}
