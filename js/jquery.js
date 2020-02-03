$(document).ready(function () {
  $("#xl").click(function () {
    $(".extraLL").hide();
    $(".large").hide();
    $(".small").hide();
    $(".xsmall").hide();
    $(".ml").hide();
  });
  $("#xl").click(function () {
    $(".extraL").show();
  });
});


$(document).ready(function () {
  $("#xxl").click(function () {
    $(".extraL").hide();
    $(".large").hide();
    $(".xsmall").hide();
    $(".ml").hide();
    $(".small").hide();

  });
  $("#xxl").click(function () {
    $(".extraLL").show();
  });
});


$(document).ready(function () {
  $("#large").click(function () {
    $(".extraLL").hide();
    $(".extraL").hide();
    $(".small").hide();
    $(".xsmall").hide();
    $(".large").hide();

  });
  $("#large").click(function () {
    $(".large").show();
  });
});


$(document).ready(function () {
  $("#ml").click(function () {
    $(".extraLL").hide();
    $(".extraL").hide();
    $(".small").hide();
    $(".xsmall").hide();
    $(".large").hide();

  });
  $("#ml").click(function () {
    $(".ml").show();
  });
});


$(document).ready(function () {
  $("#s").click(function () {
    $(".extraLL").hide();
    $(".extraL").hide();
    $(".large").hide();
    $(".xsmall").hide();
    $(".ml").hide();

  });
  $("#s").click(function () {
    $(".small").show();
  });
});


$(document).ready(function () {
  $("#xs").click(function () {
    $(".extraLL").hide();
    $(".extraL").hide();
    $(".small").hide();
    $(".ml").hide();
    $(".large").hide();

  });
  $("#xs").click(function () {
    $(".xsmall").show();
  });
});

function extraLarge() {

  var abc = $("div[class*='extraL']").length;
  document.getElementById("div").innerHTML = abc + " " + 'Products found';
}


function xxl() {

  var abc = $("div[class*='extraLL']").length;
  document.getElementById("div").innerHTML = abc + " " + 'Products found';
}
function large() {

  var abc = $("div[class*='large']").length;
  document.getElementById("div").innerHTML = abc + " " + 'Products found';
}
function ml() {

  var abc = $("div[class*='ml']").length;
  document.getElementById("div").innerHTML = abc + " " + 'Products found';
}
function s() {

  var abc = $("div[class*='small']").length;
  document.getElementById("div").innerHTML = abc + " " + 'Products found';
}

function xsmall() {

  var abc = $("div[class*='xsmall']").length;
  document.getElementById("div").innerHTML = abc + " " + 'Products found';
}


$(document).on("change", ".price-sorting", function() {

  var sortingMethod = $(this).val();

  if(sortingMethod == 'l2h')
  {
      sortProductsPriceAscending();
  }
  else if(sortingMethod == 'h2l')
  {
      sortProductsPriceDescending();
  }

});
function sortProductsPriceAscending()
{
  var products = $('.product');
  products.sort(function(a, b){ return $(a).data("price")-$(b).data("price")});
  $(".products-grid").html(products);

}

function sortProductsPriceDescending()
{
  var products = $('.product');
  products.sort(function(a, b){ return $(b).data("price") - $(a).data("price")});
  $(".products-grid").html(products);

}



