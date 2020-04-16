/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
  var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
  $('.msg').html(msg + input + '</span>');
}); 



hour.innerHTML = ' ' + h + ' ';
min.innerHTML = ' ' + m + ' ';
sec.innerHTML = ' ' + s + ' ';

hour1.forEach((elt)=>{
    elt.innerHTML = ' ' + h + ' ';
});

min1.forEach((elt)=>{
    elt.innerHTML = ' ' + m + ' ';
});

sec1.forEach((elt)=>{
    elt.innerHTML = ' ' + s + ' ';
});

setInterval(()=>{
    s--;
    if(s == 0){
        s = 60;
        m--;
        min.innerHTML = ' ' + m + ' ';
        min1.forEach((elt)=>{
    elt.innerHTML = ' ' + m + ' ';
});
    }
    sec.innerHTML = ' ' + s + ' ';

    sec1.forEach((elt)=>{
        elt.innerHTML = ' ' + s + ' ';
    });
},1000);







box_info_btn.forEach((elt)=>{
    elt.addEventListener('click',()=>{
        elt.style.background = '#770aad';
        elt.style.color = 'white';
    });
});
