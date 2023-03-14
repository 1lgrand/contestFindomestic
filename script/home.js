window.onscroll(changeColor());


function changeColor(){

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "#00803E";
      } else {
        document.getElementById("navbar").style.padding = "#00803E";
      }


}