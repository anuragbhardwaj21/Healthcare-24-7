var getarr = JSON.parse(localStorage.getItem("cart_item")) || [];
if(getarr.length==0)
{
  window.location.href = "emptycart.html"
}
console.log(getarr)
display()
function display() {
  getarr.map(function (ele, b) {
    console.log(ele.quantity)
    let name = document.createElement("h3");
    name.setAttribute("class", "name");
    name.textContent = ele.name;

    let image = document.createElement('img')
    image.setAttribute('src',ele.img)
    image.setAttribute('class','picture');

    var tquantity = document.createElement("p");
     tquantity.setAttribute("class", "quant");
     tquantity.textContent = "Units "+ele.quantity;
    
    var price = document.createElement("p");
    price.setAttribute("class", "price");
    price.textContent ="Price/Units "+ "₹" + ele.mrp;

    var tprice = document.createElement("p");
    tprice.setAttribute("class", "tprice");
    tprice.textContent ="Total MRP "+ "₹" + (ele.mrp)*(ele.quantity);

    let btn = document.createElement("button")
   
    btn.setAttribute("class","btn btn-delete")
    let s1 = document.createElement("span")
    s1.setAttribute("class","mdi mdi-delete mdi-24px")
    let s2 = document.createElement("span")
    s1.setAttribute("class","mdi mdi-delete-empty mdi-24px")
    let s3 = document.createElement("span")
    s3.textContent = "Delete"
    btn.append(s1,s2,s3)

    

    btn.addEventListener("click",function(){
      delete_item(ele)
    })
    let describe = document.createElement("div")
    describe.setAttribute("class","describe")
    describe.append(name,price,tquantity,tprice,btn)


    let div1 = document.createElement('div')
    div1.setAttribute("class","box")
    div1.append(describe,image)

    document.getElementById("medicine").append(div1)
  });
}
function  delete_item(i)
{
  var rem = getarr.splice(i,1)
  localStorage.setItem("cart_item",JSON.stringify(getarr))
   location.reload()
}
setdata()
function setdata()
{
  let getar = JSON.parse(localStorage.getItem("cart_item")) || [];
  var totalmrp = 0;
  getar.map(function (ele, b) {
   totalmrp += (ele.mrp)*(ele.quantity);
  });
  document.getElementById("itm_total").textContent = totalmrp
  document.getElementById("ttl_dsc1").textContent = 15;
  if(totalmrp>200)
  {
    document.getElementById("shipping-fee").textContent = 0;
  }
  else{
    document.getElementById("shipping-fee").textContent = 50;
  }
  let topaid = totalmrp-15;
  document.getElementById("ttl").textContent = topaid
  document.getElementById("ttl_dsc").textContent = 15

}


document.getElementById("checkout-btn").addEventListener("click",function(){
  checkout()
})
function checkout(){
  let getar = JSON.parse(localStorage.getItem("cart_item")) || [];
  var totalmrp = 0;
  getar.map(function (ele, b) {
   totalmrp += (ele.mrp)*(ele.quantity);
  });
  localStorage.setItem("bill_amout",totalmrp-15)
  window.location.href = "paymentpage.html"
}
