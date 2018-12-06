$(document).ready(function()
{
    var i = 0;

    // create images array, and include each slide
    var images = [
        $("#slideshowImg1"),
        $("#slideshowImg2"),
        $("#slideshowImg3")
    ];
    var timer = 5000;

    function nextSlide()
    {
        // set all dividers to 'display: none' to prevent all overlapping
        for (var n = 0; n < images.length; n++)
        {
            images[n].css("display", "none");
        }

        // set slide with index 'i' to 'display: block'
        images[i].css("display", "block");

        // if index is greated than images array length -1, set index to 0
        if (i < images.length - 1)
        {
            i++;
        }
        else 
        {
            i = 0;
        }

        // call function every 5 seconds
        setTimeout(nextSlide, timer);
    }

    nextSlide();
});