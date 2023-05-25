
let product = JSON.parse(localStorage.getItem("single_prod"))||[];
console.log(product[0])
let list = document.getElementById("list")

let li1 = document.createElement("li")
li1.setAttribute("class","li")
li1.textContent = "Overview";
li1.addEventListener('click',function(){
 
  window.scrollBy(0, 100);

})

let li2 = document.createElement("li")
li2.setAttribute("class","li")
li2.textContent = "Uses";
li2.addEventListener('click',function(){
 
    window.scrollBy(0, 300);
  
})

let li3 = document.createElement("li")
li3.setAttribute("class","li")
li3.textContent = "Benifits";
li3.addEventListener('click',function(){
 
  window.scrollBy(0, 450);

})

let li4 = document.createElement("li")
li4.setAttribute("class","li")
li4.textContent = "Side effects";
li4.addEventListener('click',function(){
 
  window.scrollBy(0, 500);

})

list.append(li1,li2,li3,li4)


let details = document.getElementById('detail')
let names = document.createElement("h2")
names.textContent = product[0].name;

let presc = document.createElement("p")
if(product[0].presp)
{
    presc.textContent ="Prescription Required"
}
else{
    presc.textContent ="Prescription Not Required"
}

let brand = document.createElement("p")
brand.textContent = "MANUFACTURER/ MARKETER"
brand.setAttribute("class","heading")
let manu = document.createElement("p")
manu.textContent = product[0].brand

let salt = document.createElement("p")
salt.textContent = "SALT COMPOSITION"
salt.setAttribute("class","heading")
let saltc = document.createElement("p")
saltc.textContent = product[0].saltcomp

let store = document.createElement("p")
store.textContent = "STORAGE"
store.setAttribute("class","heading")
let storage = document.createElement("p")
storage.textContent = product[0].storage

details.append(names,presc,brand,manu,salt,saltc,store,storage)

let img = document.createElement('img')
img.setAttribute('src',product[0].img)
document.getElementById("imgdiv").append(img)

let down = document.getElementById('down')

let prodinfo = document.createElement("p")
prodinfo.textContent = "PRODUCT INTRODUCTION"
prodinfo.setAttribute("class","heading2")
let info = document.createElement("p")
info.textContent = product[0].prodinfo

let use = document.createElement("p")
use.textContent = `USE OF ${product[0].name}`
use.setAttribute("class","heading2")
let useof = document.createElement("p")
useof.textContent = product[0].usesof

let Benifits = document.createElement("p")
Benifits.textContent = `BENEFITS OF ${product[0].name}`
Benifits.setAttribute("class","heading2")
let Benifit = document.createElement("p")
Benifit.style.color = "red"
Benifit.textContent = `In Treatment of ${product[0].usesof}`


let Benifit2 = document.createElement('p')
Benifit2.textContent = product[0].benifitof


let effect = document.createElement("p")
down.append(prodinfo,info,use,useof,Benifits,Benifit,Benifit2,effect)
effect.textContent = `SIDE EFFECTS OF ${product[0].name}`
effect.setAttribute("class","heading2")
for(let i=0;i<product[0].sideeffect.length;i++)
{
    var effects = document.createElement('li')
    effects.textContent = product[0].sideeffect[i]
    down.append(effects)
}



let nameh = document.createElement('h2')
nameh.textContent = product[0].name

var mrps = document.createElement("h3")
let amt  = document.getElementById("number").value
mrps.textContent = `₹${product[0].mrp*amt}`

let tc = document.createElement("p")
tc.textContent = "*Inclusive of all taxes"

let tnc = document.createElement('p')
tnc.textContent = "*This offer price is valid on orders above ₹1999. Apply coupon HEALTHALL on the cart. Max. coupon discount is ₹300. T&C apply."

let word = document.createElement("p")
word.setAttribute("id","word")
word .textContent = "Quantity"



document.getElementById("pricedata").append(nameh,mrps,tc,tnc,word)

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    let amt  = document.getElementById("number").value
    mrps.textContent = `₹${product[0].mrp*amt}`
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
    let amt  = document.getElementById("number").value
    mrps.textContent = `₹${product[0].mrp*amt}`
  }



  let addto = document.createElement('button')
  addto.textContent = 'ADD TO CART'
  //ADD TO CART FUNCTION HERE
  var cart_arr = JSON.parse(localStorage.getItem("cart_item"))||[]
addto.addEventListener("click",addtocart)
function addtocart()
{
  let amt  = document.getElementById('number').value;
  product[0].quantity = amt;
    cart_arr.push(product[0])
     localStorage.setItem("cart_item",JSON.stringify(cart_arr))
     window.location.reload();
}
document.getElementById("addtocart").append(addto)

