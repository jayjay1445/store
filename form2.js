function validateform(){
    var text=document.getElementById('text').value;
    var password=document.getElementById('password').value;

    if(text==null ||  text==""){
        alert('Fill username')
        return false;
    }

    if(password.length<=6){
        alert('Password must be more than 6 characters')
        return false;
    }
}