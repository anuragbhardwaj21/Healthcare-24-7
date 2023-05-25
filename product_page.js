// import  {navbar,footer}  from "./components/components.js";
// document.getElementById('navbar').innerHTML = navbar()

var API = "https://chiragajmeraapi.onrender.com/api/products";
const fetch_api = async (api)=>{
  try {
    let resp = await fetch(api);
    let res = await resp.json()
    document.getElementById("loading").style.display = "none"
   console.log(res)
   display(res)
  } catch (error) {
    console.log(error)
  }
}
fetch_api(API)
function display(e)
{
  let arr = e.mydata;
  
  arr.forEach(ele => {
    let div1 = document.createElement('div')
    div1.setAttribute('class','box')

    let wishdiv = document.createElement("div")
    wishdiv.setAttribute("class","wishdiv")
    let wish = document.createElement('h1')
    wish.setAttribute('class',"wish")
    wish.textContent = "♡"
    wishdiv.append(wish)

    let image = document.createElement('img')
    image.setAttribute('src',ele.img)

    let name = document.createElement('p')
    
    name.textContent = ele.name;

    let brand = document.createElement('p')
    brand.setAttribute("class","brand")
    brand.textContent = ele.brand;
    
    let mrp = document.createElement('p')
    mrp.innerHTML =   ` <span id="fakeprice">₹${ele.mrp+5.7}</span> ₹${ele.mrp} `;
    
    

    let addbtn = document.createElement('button')
    addbtn.textContent = "ADD TO CART"
    addbtn.addEventListener("click",function(){
      addtocart(ele)
    })

    div1.append(wishdiv,image,name,brand,mrp,addbtn)
    document.getElementById("data_box").appendChild(div1)

    div1.addEventListener('click',function(){
      singlepro(ele)
    })
  });
}
var single_product = [];
function singlepro(i) {
  single_product.push(i);
  localStorage.setItem("single_prod", JSON.stringify(single_product));
  window.location.href = "singleProduct.html";
}

function sortbypric() {
  let by = document.getElementById("standard-select2").value
  let sortapi = `https://chiragajmeraapi.onrender.com/api/products?brand=${by}`
  let datas  = document.getElementById("data_box")
  
  datas.textContent = ""
  document.getElementById("loading").textContent = "Loading"
  fetch_api(sortapi)
}

function sortname(){
  let by = document.getElementById("standard-select3").value
  let sortapi = `https://chiragajmeraapi.onrender.com/api/products?sort=${by}`
  let datas  = document.getElementById("data_box")
  
  datas.textContent = ""
  document.getElementById("loading").textContent = "Loading"
  fetch_api(sortapi)
}


function sortprice(){
  let by = document.getElementById("standard-select").value
  let sortapi = `https://chiragajmeraapi.onrender.com/api/products?sort=${by}`
  let datas  = document.getElementById("data_box")
  
  datas.textContent = ""
  document.getElementById("loading").textContent = "Loading"
  fetch_api(sortapi)
}

function sortbydis(){
  let by = document.getElementById("standard-select4").value
  let sortapi = `https://chiragajmeraapi.onrender.com/api/products?usesof=${by}`
  let datas  = document.getElementById("data_box")
  
  datas.textContent = ""
  document.getElementById("loading").textContent = "Loading"
  fetch_api(sortapi)
}


var cart_arr = JSON.parse(localStorage.getItem("cart_item"))||[]

function addtocart(e)
{
  
  e.quantity = 1;
    cart_arr.push(e)
     localStorage.setItem("cart_item",JSON.stringify(cart_arr))
     window.location.reload();
    
}
