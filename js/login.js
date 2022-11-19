function show(){
    alert(document.getElementById("email").value+" "+document.getElementById("password").value);
    document.getElementById("password").value="";
}
var mydata = 55;
var myname = "syed ali";
var userdata = {'id':mydata,'name':myname};
    $.ajax({
            type: "POST",
            url: "YOUR PHP URL HERE",
            data:userdata, 
            success: function(data){
                console.log(data);
            }
            });