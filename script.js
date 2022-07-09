// var foodAmount = document.getElementById("amount");
// var foodCharges = 20;
// var outputI = document.getElementById("output");
// // var foodTotal = foodAmount.value + foodCharges;
// var totalOf = foodAmount.value + foodCharges;

var back = document.querySelector("#p-con")
back.style.backgroundColor = "transparent";
// total button
var total = () => {
  event.preventDefault();
  var foodAmount = document.querySelector("#amount");
  var foodCharges = Math.floor(Math.random()* 200)
  var output = document.querySelector("#output");
  var output_amount = document.querySelector("#output-amount");
  var output_charges = document.querySelector("#output-charges");

  var totalOf = Number(foodAmount.value) + Number(foodCharges);
  output.innerHTML = "TOTAL =" + " " + "&#8358;" + totalOf;
  output_amount.innerHTML =
    "FOOD AMOUNT =" + " " + "&#8358;" + foodAmount.value;
  output_charges.innerHTML = "SERVICE FEE =" + " " + "&#8358;" + foodCharges;
  foodAmount.value = "";


  // styling
  var bg = "transparent";
  var bore = "9px double pink";
  var newBore = "1px solid black"
  var bore_r = "20px";  
  var cursor_p = "pointer";
  // styling


// new input

  var email = document.createElement("input");
  email.setAttribute("type","email")
  email.setAttribute("placeholder","enter email")
  document.body.appendChild(email);
  email.style.border = newBore;
  email.style.borderRadius = bore_r;
  email.style.margin = "20px";
  email.style.width = "200px"
  email.style.height = "30px"
// end ofnew input



  // payment button
  var button = document.createElement("button");
  button.innerText = "PAY NOW";
  document.body.appendChild(button);
  button.style.width = 100;
  button.style.height = 40;
  button.style.backgroundColor = bg;
  button.style.border = bore;
  button.style.borderRadius = bore_r;
  button.style.cursor = cursor_p;
  //End of payment button



  customer_no.value = "";
    customer_name.value = "";

  button.addEventListener("click", makePayment = ()=>{
 

var customer_no = document.querySelector("#customer_no");
    var customer_name = document.querySelector("#customer_name");
  


    FlutterwaveCheckout({
        
      public_key: "FLWPUBK_TEST-17898902bf70517d33fcf70dad59c72d-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: totalOf,
      currency: "NGN",
      payment_options: "card, mobilemoneyghana, ussd",
      redirect_url: "https://autraal.github.io/",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        
        email: email.value,
        phone_number: customer_no.value,
        name: customer_name.value,
      },
      customizations: {
        title: "zippi foods",
        description: "PAYMENT FOR FOOD SERVICE",
        // logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
      },
    });

  

  }
  )


}

//End of total button
