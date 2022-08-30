var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;
  
//creation of increment function

function on_load() {
    document.getElementById("counting").innerText = data;
}
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    if(data>=0){
        document.getElementById("counting").innerText = data;
    }
    else {
        data = data + 1;
        
        
    }
    
}