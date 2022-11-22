function tap(a){
        document.getElementById("input").value+=a;
}

function calculate(){
    let b=document.getElementById("input").value;
    document.getElementById("input").value=eval(b);
}

function Cr(){
    document.getElementById("input").value="";
}