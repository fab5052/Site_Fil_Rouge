"use strict";

$(document).ready(function () {
  $("#inscriptionForm").submit(function (event) {
    event.preventDefault(); // Validation du formulaire côté client (ajoutez des règles de validation si nécessaire)

    var form = $(this);

    if (!form[0].checkValidity()) {
      form.addClass('was-validated');
      return;
    } // Envoyer le formulaire via AJAX


    $.ajax({
      type: "POST",
      url: "MailHandler-sub.php",
      data: form.serialize(),
      dataType: "json",
      success: function success(response) {
        if (response.success) {
          alert("Formulaire soumis avec succès!");
          form.trigger('reset');
        } else {
          alert("Erreur lors de la soumission du formulaire:\n" + response.message);
        }
      },
      error: function error(xhr, status, _error) {
        alert("Erreur AJAX: " + xhr.responseText);
      }
    });
  });

  (function () {
    'use strict'; // Fetch all the forms we want to apply custom Bootstrap validation styles to

    var forms = document.querySelectorAll('.needs-validation'); // REGEX

    var regex = /^[a-zA-Z-\s]+$/;
    var regexmail = /^[a-z0-9.-]+@[a-z0-9.-]{2,}\.[a-z]{2,4}$/;
    var regexCP = /^\d{5}$/; // Loop over them and prevent submission

    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  })();
});
/*(function($){
	function init(form,o){
		var name=$('.name>input',form)
			,email=$('.email>input',form)
			,submit=$('a[data-type="submit"]',form)
			,msg_success=$('.success',form).hide()
			,bl,vl
			
		o=$.extend({
			ownerEmail:'#'
			,mailHandlerURL:'bat/MailHandler-sub.php'
		},o)
		
		submit.click(function(){
			vl=true
			name.add(email).trigger('keyup')
			if(!$('.invalid',form).length)
				sendRQ()
			return false
		})
				
		form[form.on?'on':'bind']('keyup',function(e){
			if(e.keyCode===13){
				name.add(email).data({wtch:true}).trigger('keyup')
				if(!$('.invalid',form).length){					
					sendRQ()
					return false
				}else{
					$('.invalid',form).focus()
				}
			}
		})
		
		name.add(email)
			.data({wtch:true})
			.each(function(){
				var th=$(this)
					,val=th.val()
				th
					.data({defVal:val})
					.focus(function(){
						if(th.val()==val)
							th.val('')
							,th.parents('label').removeClass('invalid')
							,th.data({wtch:false})
					})
					.blur(function(){
						if(th.val()=='')
							th.val(val)							
							//,th.parents('label').removeClass('invalid')
						//else
							th.data({wtch:true}).trigger('keyup')
					})
			})
			[name.on?'on':'bind']('keyup',function(e){
				var th=$(this)
				if(th.data('wtch'))
					th.parents('label')[validate(th)?'removeClass':'addClass']('invalid')
			})
	
		function validate(el){
			var rx={
					"text":/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/
					,"email":/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
				}
				,val=el.val()
			return rx[el.attr('type')].test(val)&&val!==el.data('defVal')
		}
		
		function sendRQ(){
			if(bl)
				return false
			bl=true
			$.ajax({
				type:"POST"
				,url:o.mailHandlerURL
				,data:{
					name:name.length?name.val():email.val().split('@')[0]
					,email:email.val()
					,owner_email:o.ownerEmail					
					,sitename:o.sitename||o.ownerEmail.split('@')[1]
				}
				,success:function(e){
					bl=false
					msg_success
						.slideDown(400,function(){
							submit.focus()
							form.trigger('reset')							
							name.add(email).data({wtch:true})
							setTimeout(function(){
								msg_success.fadeOut(400)
							},1000)
						})					
				}
			})
		}		
	}	

	$.fn.sForm=function(o){
		return this.each(function(){
			init($(this),o)
		})
	}
	
})(jQuery)
$(window).load(function(){
	$('#form1').sForm({			
		ownerEmail:'#'
		,sitename:'sitename.link'
	})
})*/

/*document.getElementById("email2").addEventListener("input", function() {
    var paragrapheErreur = document.getElementById("erreur");
 
    if (this.value != document.getElementById("email").value) {
        paragrapheErreur.innerHTML = "Les deux adresses email ne correspondent pas";
    } else {
        paragrapheErreur.innerHTML = "";
    }
});​

document.forms["inscription"].addEventListener("submit", function(e) {
 
    var erreur;
 
    var inputs = this;
 
    // Traitement cas par cas (input unique)
    if (inputs["email"].value != "primfx@p.com") {
        erreur = "Adresse email incorrecte";
    }
 
    // Traitement générique
    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
            break;
        }
    }
 
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !');
    }
    
});

document.getElementById("inscription").addEventListener("submit", function(e) {
 
    var erreur;
 
    var inputs = this.getElementsByTagName("input");
 
    for (var i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        if (!inputs[i].value) {
            erreur = "Veuillez renseigner tous les champs";
        }
    }
 
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !');
    }
 
 
    var pseudo = document.getElementById("pseudo");
    var email = document.getElementById("email");
    var email2 = document.getElementById("email2");
    var mdp = document.getElementById("mdp");
 
    if (!mdp.value) {
        erreur = "Veuillez renseigner un mot de passe";
    }
    if (!email.value) {
        erreur = "Veuillez renseigner un email";
    }
    if (!pseudo.value) {
        erreur = "Veuillez renseigner un pseudo";
    }
    
 
    
});

*/