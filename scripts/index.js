// Add the coffee to local storage with key "coffee"

getdata()

  
async function getdata(){
 try{
   var url=`https://masai-mock-api.herokuapp.com/coffee/menu`
  let res= await fetch(url)
  let user= await res.json()
  

  append(user.menu.data)
 }
 catch(error){
   console.log(error)
 }
}

function append(data){
 data.forEach(function(el){
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
   price.style.textAlign="center"

   let cart=document.createElement("button")
   cart.innerText="add to bucket"
   cart.setAttribute("id","add_to_bucket")
   cart.addEventListener("click",function(){
     addcart(el)
   })

   box.append(img,name,price,cart)
   document.querySelector("#menu").append(box)

 })
}

var count=JSON.parse(localStorage.getItem("count"))|| 0


var arr=JSON.parse(localStorage.getItem("coffee"))||[] 
function  addcart(el){
   
 document.getElementById("coffee_count").innerHTML=null
 
 arr.push(el)
 localStorage.setItem("coffee",JSON.stringify(arr))
   var count=arr.length

   localStorage.setItem("count",count)

   document.getElementById("coffee_count").append(count)
}

