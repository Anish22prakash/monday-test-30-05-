// On clicking remove button the item should be removed from DOM as well as localstorage.

var arr=JSON.parse(localStorage.getItem("coffee"))||[]
var amount=0

append(arr)

function append(data){
  document.querySelector("#bucket").innerHTML=null
 
data.forEach(function(el,index){
  document.querySelector("#total_amount").innerHTML=null
  let box = document.createElement("div")
  box.setAttribute("id","chota")

  let img= document.createElement("img")
  img.src=el.image
  img.setAttribute("id","pic")

  let name=document.createElement("h3")
  name.innerText=el.title
  name.style.textAlign="center"

  let price=document.createElement("p")
  price.innerText=el.price
 amount=amount+(+el.price)
  price.style.textAlign="center"

  let cart=document.createElement("button")
  cart.innerText="Remove coffee"
  cart.setAttribute("id","remove_coffee")
  cart.addEventListener("click",function(){
    delrow(el,index)
  })

  box.append(img, name,price,cart)
  document.querySelector("#bucket").append(box)
  document.querySelector("#total_amount").append(amount)

})
}
function delrow(el,index){
arr.splice(index,1)
localStorage.setItem("coffee",JSON.stringify(arr))
window.location.reload()
}
