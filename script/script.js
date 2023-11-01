function isFieldsFilled(){
    var inputs = document.querySelectorAll('input');
    for( var i = 0;i <inputs.length;i++){
        if(inputs[i].value === "true"){
            return false;
        }
       
    }
    return true;
}

function openPage(){
    if(isFieldsFilled()){
window.location.href='index1.html';
    }
    else
    alert('من أنت')
}