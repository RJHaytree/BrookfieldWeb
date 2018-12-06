/**
 * APP.JS
 * ****************************
 * Contains script for nav and help
 * functions.
 **/
$(document).ready(function() 
{
    // on button click, add active class to show links
    // if active class is present, remove active and add
    // static which removes links.
    $("#navbarToggle").click(function() {
        var links = $("#navLinksCollapsed");
    
        if (links.hasClass("static"))
        {
            links.removeClass("static");
            links.addClass("active");
        }
        else 
        {
            links.removeClass("active");
            links.addClass("static");
        }
    });

    $("#footerHelp").click(function(){
        alert("Need assistence? \n 1. Navigate the web page using the navigation bar \n 2. Information is available at all times! Just contact \n us using the form on the footer \n 3. Contact information and location can be found on the Contact Us page \n 4. Information on our animals can be found on the Pets page \n 5. Information on our equipment and other products can be found on \n our Products page");
    })
});