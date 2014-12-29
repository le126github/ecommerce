var com = new Object();

function setFocus(obj){
    if(obj.setSelectionRange){
        setTimeout(function(){
         obj.setSelectionRange(0,0);
         obj.focus();
     },100);
    }else{
       if(obj.createTextRange){
         var range=obj.createTextRange();
         range.collapse(true);
         range.moveEnd("character",0);
         range.moveStart("character",0);
         range.select();
       }
       try{obj.focus();}catch(e){}
     }  
 }