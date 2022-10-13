const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// -------------------------------------------------------------------------------------------

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2300,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// --------------------------------------------------------------------------------------------------------------------------




// ---------------------------------------------------------------------------------------------

// Page 1 multiples cards
function page1cards(){
    var page1=[
        {image:"./images/p1img2.jpg"},
        {image:"./images/p1img3.jpg"},
        {image:"./images/p1img4.jpg"},
        {image:"./images/p1img5.jpg"},
    ]
    var clutter="";
    page1.forEach(function(data){
    clutter+=`<div class="box">
                <img src="${data.image}" alt="">
            </div>`
})
document.querySelector("#page1 #bottom").innerHTML=clutter;
}
page1cards();


// Page 3 multiples cards
function page3cards(){
    var page3=[
        {num:01,name:"fresh food",para:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
        {num:02,name:"dinner meals",para:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
        {num:03,name:"classic menu",para:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
        {num:04,name:"chef's special",para:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
        {num:05,name:"pasta & pizza",para:"Sample text. Click to select the text box. Click again or double click to start editing the text."},
        {num:06,name:"vegan dishes",para:"Sample text. Click to select the text box. Click again or double click to start editing the text."}
    ]
    var clutter="";
    page3.forEach(function(data){
        clutter +=`<div class="part">
                        <div class="heading">
                        <div class="circle">0${data.num}</div>
                        <h2>${data.name}</h2>
                        </div>
                        <p>${data.para}</p>
                        <button>learn more</button>
                    </div>`
    })
    document.querySelector("#page3 #box2").innerHTML=clutter;
}
page3cards();


// Page 6 multiples cards
function page6cards(){
    var page6=[
        {name:"double burger",price:"Rs 199", image:"./images/p6img1.jpg"},
        {name:"Veg burger",price:"Rs 119", image:"./images/p6img2.jpg"},
        {name:"Bacon Burger",price:"Rs 299", image:"./images/p6img3.jpg"},
        {name:"Special burger",price:"Rs 169", image:"./images/p6img4.jpg"},
        {name:"black burger",price:"Rs 149", image:"./images/p6img5.jpg"},
        {name:"king burger",price:"Rs 201", image:"./images/p6img6.jpg"}
    ]
    var clutter="";
page6.forEach(function(data){
    clutter +=`<div class="box">
                    <img src="${data.image}" alt="">
                    <div class="text">
                        <h2>${data.name}</h2>
                        <h3>${data.price}</h3>
                        <button>Add to cart</button>
                    </div>
                </div>`
})
document.querySelector("#page5 #bottom").innerHTML=clutter;
}
page6cards();