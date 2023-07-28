$ (function(){
  $("#imagenInicio").hover(function(){
    $(this).fadeOut(200,function(){
    $(this).attr("src","img/foto2.jpg").fadeIn(200);
  });
  },
  function(){
    $(this).fadeOut(200,function(){
    $(this).attr("src", "img/foto1inicio.jpg").fadeIn(200);
    });
  });
});


