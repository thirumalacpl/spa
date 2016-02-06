$(document).on('pageshow', '#Volunteer', function(){  
  //alert('volunteer page js');
$(document).off('click', '#volunteer_btn').on('click', '#volunteer_btn', function() { 

var fullname=document.getElementById('fullname').value;
var email=document.getElementById('email').value;
var cnumber=document.getElementById('cnumber').value;
//alert(fullname+'fullname');
//alert(email+'email');
//alert(cnumber+'cnumber');

if(fullname == '' && email == '' && cnumber =='' ){
  alert('Fill up all the field');
    //$.mobile.changePage($('#Volunteer'), { transition: "none", changeHash: true, reverse: false });
}else{

$.ajax({url: "http://staging.eimpressive.com/slim-agni/volunteer.php?fullname="+fullname+"&email="+email+"&cnumber="+cnumber,
    data:$('#volunteer').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        document.getElementById('fullname').value = "";
document.getElementById('cnumber').value = "";
document.getElementById('email').value = "";
        alert('Thank you for joining our group ');
        $("#popupsearchmade").popup("open");
        sessionStorage.setItem("sh_new_veri_list_countq",JSON.stringify(result[0]));

        $.mobile.loading().hide();
       $.mobile.changePage($('#Volunteer'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });
}
});
});