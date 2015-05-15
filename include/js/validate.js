$(document).ready(function(){
  //input on focus
	$( "input" ).focus(function() {
  		if(this.value.length==0 && this.required==true)
  			{
  				$(this).siblings("p").hide();
  				$(this).parent().append("<p>Enter "+this.name+"</p>");
  				if(this.name=="confirm")  {$(this).siblings("p").hide();$(this).parent().append("<p>"+this.name+" "+this.type+"</p>");}
          $( this ).addClass("foc1");

  			}
        else if(this.type=='radio') {$(this).siblings("p").hide();$(this).siblings().removeClass("foc1");}
          else if(this.value.length>=0){$(this).addClass("foc1");}

	});
  //inputs on blur
	$( "input" ).blur(function() {
  		$( this ).removeClass('foc');
      $( this ).removeClass("foc1");
      if(this,type=="radio"){}
  		else if(this.value.length==0)
  			{
  				$(this).siblings("p").hide();
  				$(this).parent().append("<p>Enter "+this.name+"</p>");
  				if(this.name=="confirm")  {$(this).siblings("p").hide();$(this).parent().append("<p>"+this.name+" "+this.type+"</p>");}

  			}
	});
//textboxes validation on enter
	$("input:text").keyup(function(){
		var l= (this).value.length;
    var fn = /^[A-Za-z0-9 ]{1,8}$/ ;
    var num=/^[0-9]{1,30}$/;
    var re=this.required;
    var mil=$(this).attr("min");
    var mal=$(this).attr("max");
    var tmp= $(this).attr("class");
    var pos=(tmp.indexOf('number'));
    if($(this).attr("required") && pos>=0)
    {
      if(mil==null) mil=10;
      if(mal==null) mal=30;
      var p =$(this).val();
      var l =p.length;
      if(l==0){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; Cannot be blank!</p>");}
      else if(num.test(p)==false){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; invalid characters</p>");}
      else if(l<mil){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; should be minimum "+mil+" chars</p>");}
      else if(l>mal){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; cannot be more than "+mal+" chars</p>");}
      else if(l<=mal && l>=mil && num.test(p)==true){$(this).siblings("p").hide();$(this).parent().append("<p class='valid'>&#10004;</p>");}
      else if(l<=mal && l>=mil && num.test(p)==false){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; invalid characters</p>");}

   }else if($(this).attr("required") && pos>=-1)
	  {
      if(mil==null) mil=6;
      if(mal==null) mal=10;
		  var p =$(this).val();
      var l =p.length;
      if(l==0){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; Cannot be blank!</p>");}
      else if(l<mil){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; should be minimum "+mil+" chars</p>");}
      else if(l>mal){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; cannot be more than "+mal+" chars</p>");}
      else if(l<=mal && l>=mil && fn.test(p)==true){$(this).siblings("p").hide();$(this).parent().append("<p class='valid'>&#10004;</p>");}
      else if(l<=mal && l>=mil && fn.test(p)==false){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; invalid characters</p>");}

     }
	});
  //email validation on enter
	$('input[type="email"]').on('keyup',function(){ // When blur
		var l=(this).value.length;
	 	var ckem=  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i    ;
    var re=this.required;
    if(re==true){
	 	if(l==0){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; Email Cannot be blank!</p>");} 
			else if(l>0 && ckem.test(this.value)==false){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; Doesnt look like a email!</p>");} 
				else if(ckem.test(this.value)==true){$(this).siblings("p").hide();$(this).parent().append("<p class='valid'>&#10004;</p>");}
    }
    });
   //password validation on enter
		$("input:password:first").keyup(function(){
			var l= (this).value.length;
        	var ckpd =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/
			if(l==0){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; Password Cannot be blank!</p>");} 
			else if(l>0 && ckpd.test(this.value)!=true){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; Password must be 6 characters minimum</p>");} 
			else if(l>0 && ckpd.test(this.value)==true){$(this).siblings("p").hide();$(this).parent().append("<p class='valid'>&#10004;</p>");}
		});	
    //password confirmation  validation on enter
		$("input:password:last").keyup(function(){
			var p= (this).value.length;
        	var result= $(this).parent().parent().find('input:password:first').val();
   	       	var ckpd =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
        	var n=result.indexOf(this.value);
        	if(p==0){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; Password should be confirmed!</p>");}
        	else if(n==-1){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; Password Didnt match</p>");}
        		else if(n!=0 && p==result.length || ckpd.test(this.value)!=true){$(this).siblings("p").hide();$(this).parent().append("<p class='invalid'>&#10008; Invalid passwords!</p>");}
        			else if(n==0 && p==result.length && ckpd.test(this.value)==true){$(this).siblings("p").hide();$(this).parent().append("<p class='valid'>&#10004;</p>");}
		});		
    
    $("button:submit").click(function(){ 
      return validate(); 
    });//end of submit button
     $("input:submit").click(function(){ 
      return validate(); 
    });//end of submit button
   
function validate(){
        var flag=1;var respd;
        var rb=0,rn=0,rc=0,cb=0,cc=0,cn=0;
        $(this).removeClass("animate");
        var cknum= /^[0-9]{1,30}$/
        var ckfn = /^[A-Za-z0-9]{1,30}$/
        var ckem=  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i    
        var ckpd =  /^[A-Za-z0-9!@#$%^&*()_]{1,20}$/
        var ckun= /^[A-Za-z0-9]{6,20}/;
        $("input,select,textarea").each(function(){
            
            if(this.type=="text" && this.required==true){
               if($(this).attr("class")=="number"){
                var p=this.value;
                var l=p.length;
                var mal= this.max;
                var mil=this.min;
                if(mal=="") mal=30;
                if(mil=="") mil=10;
                if(l<mil){this.focus(),flag=0;return false;}
                else if(l>mal){this.focus();flag=0;return false;}
                else if(l>=mil && l<=mal && cknum.test(p)==false ){this.focus();flag=0;return false;}
               }else{
               var mal=this.max;
               var mil=this.min;
               if(mal=="") mal=10;
               if(mil=="") mil=3;
               var p=this.value;
               var l=p.length;
               if(l<mil){this.focus();flag=0;return false;}
               else if(l>mal){this.focus();flag=0;return false;}
               else if(l>=mil && l<=mal && ckfn.test(p)==false){alert("invalid");flag=0;return false;}
              }
          }
          else if(this.type=="email" && this.required==true){
                  var p=this.value;
                  var l=p.length;
                  if(l==0){this.focus();flag=0;return false;}
                  else if(l>0 && ckem.test(p)==false){this.focus();flag=0;return false;}
                }
          else if(this.type=="password" && $(this).attr("class")=="confirm" ){
                        if(this.value.length<respd.length){this.focus();flag=0;return false;}
                        if(this.value.length==respd.length && this.value!=respd){this.focus();flag=0;return false;}
                }
          else if(this.type=="password"){
                  p=this.value;
                  l=p.length;
                  var mal=this.max;
                  var mil=this.min;
                  if(mal=="") mal=10;
                  if(mil=="") mil=6;
                  if(l<mil){this.focus();flag=0;return false;}
                  else if(l>mal){this.focus();flag=0;return false;}
                  else if(l>=mil && l<=mal && ckpd.test(p)==false){this.focus();flag=0;return false;}
                  respd=p;
                }   
          else if(this.type=="radio"){
                  var par = $(this).parent();
                  var cl=$(par).children("input").length;
                  var n =$(this).parent().children("input:radio:checked").length;
                  if(cl==(cl-n)){this.focus();$(this).addClass("foc1");flag=0;return false;}
               } 
          else if(this.type=="checkbox"){
                  var par = $(this).parent();
                  var cl=$(par).children("input").length;
                  var n =$(this).parent().children("input:checkbox:checked").length;
                  if(cl==(cl-n)){this.focus();$(this).addClass("foc1");flag=0;return false;}
               }
          else  if(this.type=="select-one"){
                  this.focus();
                  var ind=$(this).parent().find("select option:selected").attr("value");
                  if(ind==""){flag=0;this.focus();$(this).addClass("foc1");return false;}
                }            
        });
        if(flag==0)return false;
        else if(flag==1){alert("signup successful");return true;}
    }
//end of validate function



});
