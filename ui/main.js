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
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(var i=0;names.lingh;i++) {
                list+='<li>'+names[i]+'</li>';
        }
        var ul=document.getElementById('namelist');
        ul.innerHTML=list;
        }
    }
    };
    request.open('GET','http:ataltiwari96.imad.hasura-app.io/submit-name?name='+name ,true);
    request.send(null);
};