var button=document.getElementById('counter');
button.onclick=function() {
    var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readystate===XMLHttpRequest.DONE) {
            if(request.status===200) {
                
            }
        }
    };
    request.open('GET','http:ataltiwari96.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit-btn');
submit.onclick=function() {
     var request=new XMLHttpRequest();
    request.onreadystatechange=function() {
        if(request.readystate===XMLHttpRequest.DONE) {
            if(request.status===200) {
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http:ataltiwari96.imad.hasura-app.io/submit-name?name='+name ,true);
    request.send(null);
};