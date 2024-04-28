// let a = document.getElementById("other-links");
// a.onclick = function () {
// 	document.getElementById("megamenu").style.transform = "translateY(64px)";
// };

// Start Mega Menu

let s = document.querySelector("#other-links a");
let o = document.querySelector("#megamenu");
console.log(s);
s.onclick = function (e) {
	o.classList.toggle("mega");
	e.preventDefault();
};
// End Mega Menu

// Start Our-Skills
let dad = document.querySelectorAll("#Our-Skills .content .skills .skill");
let langs = document.querySelectorAll(
	"#Our-Skills .container .content .skills .skill div"
);

for (let i = 0; i < langs.length; i++) {
	let p = document.createElement("p");
	p.textContent = langs[i].dataset.num;
	dad[i].appendChild(p);
	dad[i].style = `
		position: relative; 
		display:flex;
		justify-content:space-between;
		align-items:center; 
		margin:20px 0; 
		padding: 20px 0 ;
	`;
	// langs[i].style = `padding: 20px 0`;
	var style = document.createElement("style");

	style.innerHTML = `.skills .skill:nth-child(${i + 1})::before{
		content: "";
		width: ${langs[i].dataset.num};
		position: absolute;
		background-color: var(--main-color);
		height: 50%;
		bottom: -50%;
		left: 0;
		z-index: 2;
	} 
	.skills .skill:nth-child(${i + 1})::after{
		content: "";
		position: absolute;
		width: 100%;
		background-color: var(--second-color);
		height: 50%;
		bottom: -50%;
		left: 0;
		z-index: -1;
	}
	
	`;
	document.body.appendChild(style);
}
// End Our-Skills

// customize scroll
let stats = document.querySelector("#stats").offsetTop;
let nums = document.querySelectorAll("#stats .container .number");

addEventListener("scroll", function () {
	let statue = true;
	if (stats) {
		if (this.scrollY >= stats - 500) {
			nums.forEach((e) => {
				let num = +e.textContent;
				e.textContent = 0;
				let interval = setInterval(() => {
					if (e.textContent < num) {
						e.textContent++;
					} else {
						clearInterval(interval);
					}
				}, 1000 / num);
			});
			stats = false;
		}
	}
});
// customize scroll

// cutmoize date
function customizeDate() {
	let date = new Date().getTime();
	let date2 = new Date("2025-1-30 1:10:10 GMT+0200 ").getTime();
	let diff = date2 - date;
	// let year = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.5));
	let day = Math.floor(
		(diff % (1000 * 60 * 60 * 24 * 365.5)) / (1000 * 60 * 60 * 24)
	);
	let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

	let seconds = Math.floor((diff % (1000 * 60 * 60)) / 1000);

	// set interval

	changeDate(year, day, hours, minutes, seconds);
}
function changeDate(year, day, hours, minutes, seconds) {
	let dateInputs = document.querySelectorAll("#Latest-Event .date div h3");
	dateInputs[0].textContent = day;
	dateInputs[1].textContent = hours;
	dateInputs[2].textContent = minutes;
	dateInputs[3].textContent = seconds;
}
setInterval(() => {
	customizeDate();
}, 1000);

// cutmoize date
