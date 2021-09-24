var cards = ["8","8","V","V","4","4","S","S","1","1","T","T","5","5","M","M"]

function randomCard(max, min){
    
    var step1 = max - min + 1;
    var step2 = Math.random()*step1;
    var result = Math.floor(step2)+min;
    return result;
}
    
    var j = 1;
    for(var i = 1; i < 5; i++){
        
        var randidx = randomCard(0, cards.length-1);
        
        
        var col = String(i);
        var row = String(j);
        var idt = "r"+row+"_"+"c"+col;
        
        if( i == 4 & j == 4){
            
            document.getElementById(idt).value = cards[randidx];
            cards.splice(randidx,1)
            break;
            
        }
        if( i == 4 & j != 4){
            idt = "r"+row+"_"+"c"+col;
            i = 0;
            j++
            
        }
        
        document.getElementById(idt).value = cards[randidx];
        cards.splice(randidx,1)
        
}
var tries = 0;
var clicks = 0;
var ids = new Array();
var matches = new Array();
var ifmatch = false;

function CheckCard(id) {
    
    
    
    var card = document.getElementById(id).value;
    matches.push(id)
    
    if(matches.length == 2){
        
        if(matches[0] == matches[1]){
            return;
        }
    }
    
    ids.push(card);
    
    
    if (ids.length == 1){
        tries++;
        clicks++;
        
    }
    if (ids.length == 2){
        
        if(ids[0] == ids[1]){
            
            ifmatch = true;
            ChangeClass(ifmatch,matches);
        } 
      /*console.log(ids);*/
      ids = [];
      matches = [];
      
    }
    
}

function ChangeClass(m,id) {
    
    if(m == true){
        
        document.getElementById(id[0]).classList.add("matched");
        document.getElementById(id[1]).classList.add("matched");
        document.getElementById(id[0]).classList.remove("card");
        document.getElementById(id[1]).classList.remove("card");
     }
    
}


/*var princess = (window.event)
                    ? window.event.srcElement
                    : card.target,
        identify = document.getElementsByClassName(princess.className)
    for (var i = 0; i < identify.length; i++){
        
        if (identify[i] == princess){
             ids.push(princess.id)
            console.log(ids);
        }
    }*/