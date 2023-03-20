

$(document).ready(function () {

    if(window.location.href.indexOf('index') > -1){

    $('#slider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager: false
    });
}


    if(window.location.href.indexOf('index') > -1){

    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: 'publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis atque perferendis nemo commodi numquam, esse, natus doloremque reprehenderit ipsa odio maxime sit totam! Suscipit nesciunt autem delectus dolor quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quo culpa reiciendis quis commodi similique voluptatem qui ipsum, voluptatibus consectetur dolore veniam deleniti quisquam nisi! Modi corporis officiis incidunt distinctio? '
        },
        {
            title: 'Prueba de titulo 2',
            date: 'publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis atque perferendis nemo commodi numquam, esse, natus doloremque reprehenderit ipsa odio maxime sit totam! Suscipit nesciunt autem delectus dolor quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quo culpa reiciendis quis commodi similique voluptatem qui ipsum, voluptatibus consectetur dolore veniam deleniti quisquam nisi! Modi corporis officiis incidunt distinctio? '
        },
        {
            title: 'Prueba de titulo 3',
            date: 'publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis atque perferendis nemo commodi numquam, esse, natus doloremque reprehenderit ipsa odio maxime sit totam! Suscipit nesciunt autem delectus dolor quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quo culpa reiciendis quis commodi similique voluptatem qui ipsum, voluptatibus consectetur dolore veniam deleniti quisquam nisi! Modi corporis officiis incidunt distinctio? '
        },
        {
            title: 'Prueba de titulo 4',
            date: 'publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis atque perferendis nemo commodi numquam, esse, natus doloremque reprehenderit ipsa odio maxime sit totam! Suscipit nesciunt autem delectus dolor quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quo culpa reiciendis quis commodi similique voluptatem qui ipsum, voluptatibus consectetur dolore veniam deleniti quisquam nisi! Modi corporis officiis incidunt distinctio? '
        },
        {
            title: 'Prueba de titulo 5',
            date: 'publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis atque perferendis nemo commodi numquam, esse, natus doloremque reprehenderit ipsa odio maxime sit totam! Suscipit nesciunt autem delectus dolor quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quo culpa reiciendis quis commodi similique voluptatem qui ipsum, voluptatibus consectetur dolore veniam deleniti quisquam nisi! Modi corporis officiis incidunt distinctio? '
        },
        {
            title: 'Prueba de titulo 6',
            date: 'publicado el dia ' + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos corporis atque perferendis nemo commodi numquam, esse, natus doloremque reprehenderit ipsa odio maxime sit totam! Suscipit nesciunt autem delectus dolor quo? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita quo culpa reiciendis quis commodi similique voluptatem qui ipsum, voluptatibus consectetur dolore veniam deleniti quisquam nisi! Modi corporis officiis incidunt distinctio? '
        },

    ];

    posts.forEach((item, index) => {
        var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="" class="button-more">Leer más</a>
                </article>
        `;
        $("#posts").append(post);

    })

    }

    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href","css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href","css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
    });


    $('.subir').click(function(){


        $('html, body').animate({
            scrollTop: 0
        }, 500);
        
        return false
    });


    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

            localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null  && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.removeItem("form_name");
            location.reload();

        });
    
    }
    

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    if(window.location.href.indexOf('clock') > -1){

        setInterval(function(){
            var clock = moment().format("h:mm:ss");

            $('#clock').html(clock);
        },1000);
    }

    if(window.location.href.indexOf('contact') > -1){

        $("form unput[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        
    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
    });
}

});
