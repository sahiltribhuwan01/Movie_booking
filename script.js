const movies = [
{
id:1,
name:"Animal",
price:250,
image:"https://images.financialexpressdigital.com/2023/09/animal.png?w=1200"
},
{
id:2,
name:"Marco",
price:200,
image:"https://www.filmyfenil.com/wp-content/uploads/2025/01/Marco-wallpaper-752x440.jpg"
},
{
id:3,
name:"Michael",
price:450,
image:"https://cdn.district.in/movies-assets/images/cinema/_Horizontal_michael-95ddfc30-bbc5-11f0-9aba-07fb59446ed8.jpg?im=Resize,width=720"
}
];

let selectedMovie=null;
let selectedSeats=[];

const movieContainer=document.getElementById("movieContainer");
const seatContainer=document.getElementById("seatContainer");
const total=document.getElementById("total");

movies.forEach(movie=>{
const card=document.createElement("div");
card.classList.add("card");

card.innerHTML=` <img src="${movie.image}">

<h3>${movie.name}</h3>
<p>Price: ₹${movie.price}</p>
<button onclick="selectMovie(${movie.id})">
Select Movie
</button>
`;

movieContainer.appendChild(card);
});

function selectMovie(id){

selectedMovie=movies.find(m=>m.id===id);

document.getElementById("selectedMovie")
.innerText=`Movie: ${selectedMovie.name}`;

generateSeats();
updateTotal();
}

function generateSeats(){

seatContainer.innerHTML="";
selectedSeats=[];

for(let i=1;i<=20;i++){

const seat=document.createElement("div");

seat.classList.add("seat");

seat.innerText=i;

seat.addEventListener("click",()=>{

seat.classList.toggle("selected");

const seatNo=i;

if(selectedSeats.includes(seatNo)){
selectedSeats=
selectedSeats.filter(s=>s!==seatNo);
}
else{
selectedSeats.push(seatNo);
}

updateTotal();
});

seatContainer.appendChild(seat);
}
}

function updateTotal(){

if(selectedMovie){
total.innerText=
selectedSeats.length*
selectedMovie.price;
}
}

document.getElementById("bookBtn")
.addEventListener("click",async()=>{

if(!selectedMovie){
alert("Please select a movie");
return;
}

if(selectedSeats.length===0){
alert("Please select seats");
return;
}

document.getElementById("message")
.innerText="Booking Ticket...";

await new Promise(resolve=>
setTimeout(resolve,2000));

const booking={
movie:selectedMovie.name,
seats:selectedSeats,
amount:selectedSeats.length*
selectedMovie.price
};

localStorage.setItem(
"booking",
JSON.stringify(booking)
);

document.getElementById("message")
.innerText=
"✅ Ticket Booked Successfully!";
});
