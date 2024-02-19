$(document).ready(function () {
    $("#inscriptionForm").submit(function (event) {
        event.preventDefault();

        // Validation du formulaire côté client (ajoutez des règles de validation si nécessaire)
        var form = $(this);
        if (!form[0].checkValidity()) {
            form.addClass('was-validated');
            return;
        }

        // Envoyer le formulaire via AJAX
        $.ajax({
            type: "POST",
            url: "MailHandler-sub.php",
            data: form.serialize(),
            dataType: "json",
            success: function (response) {
                if (response.success) {
                    alert("Formulaire soumis avec succès!");
                    form.trigger('reset');
                } else {
                    alert("Erreur lors de la soumission du formulaire:\n" + response.message);
                }
            },
            error: function (xhr, status, error) {
                alert("Erreur AJAX: " + xhr.responseText);
            }
        });
    });

    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // REGEX
        const regex = /^[a-zA-Z-\s]+$/;
        const regexmail = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;
        const regexCP = /^\d{5}$/;

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            });
    })();
});