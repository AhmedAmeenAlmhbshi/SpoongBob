document.getElementById("myButton").addEventListener("click", function() {
    var order = document.getElementById("order");
    if (order.style.display="none") {
        order.style.display = "block";
    } else {
        order.style.display = "none";
    }
  });

  function ListDrink(){
    var menu = document.getElementById("Drink")
    if (menu.style.display ==="none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
  };
  
  document.getElementById("doneButton").addEventListener("click", function() {
    var order2 = document.getElementById("thanks");
    if (order2.style.display="none") {
        order2.style.display = "block";
    } else {
        order2.style.display = "none";
    }
  });