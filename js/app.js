$(document).ready(function() {
  
  
  
    $( ".explore-button" ).hover(function() {
      $( this ).parent().addClass("hovered-card");
    }, function() {
      $( this ).parent().removeClass("hovered-card");
    }
  );
    
  });