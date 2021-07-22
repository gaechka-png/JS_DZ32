//Задача №1
// let timer;
// let timer2;
// let second = 9;
//
// function showBlock(a) {
//     document.querySelector("#banner").style.display = "none";
//     document.querySelector(".time").style.display = "none";
//     document.querySelector(".close").style.display = "none";
//     document.querySelector(".time").innerHTML = "10";
//     second = 9;
//     clearInterval(timer2);
//     for (let b of document.querySelectorAll(".container > div")) {
//         b.style.display = "none";
//     }
//     document.querySelector(`#box${a}`).style.display = "block";
// }
//
// const modalWindow = document.querySelector(".click > button");
//
// function showBanner() {
//     document.querySelector("#banner").style.display = "block";
//     document.querySelector(".time").style.display = "block";
//     clearInterval(timer2);
//     timer2 = setInterval(showTime, 1000);
// }
//
// function showTime() {
//     if (second > 0) document.querySelector(".time").innerHTML = `${second--}`;
//     else {
//         document.querySelector(".time").style.display = "none";
//         document.querySelector(".close").style.display = "block";
//     }
// }
//
// modalWindow.addEventListener('click', function () {
//     clearTimeout(timer);
//     timer = setTimeout(showBanner, 3000)
// });

// function closure() {
//     document.querySelector("#box5").style.display = "none";
// }





//Задача №2
// const lightController = document.querySelector(".lights");
// const lights = document.querySelectorAll(".change-light");
//
// function clearLights() {
//     lightController.className = "lights off";
// }
//
// function handleClick() {
//
//     clearLights();
//
//     if (this.classList.contains("stop")) {
//         lightController.classList.add("stop");
//     } else if (this.classList.contains("slow")) {
//         lightController.classList.add("slow");
//     } else if (this.classList.contains("go")) {
//         lightController.classList.add("go");
//     }
// }
//
// lights.forEach(light => {
//     light.addEventListener("click", handleClick);
// });


//Задача №3

// function ZeroCheck(a) {
//     if (+a < 10) return '0' + a;
//     else return a;
// }
//
// function fast() {
//     if (!isNaN(document.querySelector(".username__text").value)) alert("заполните поле с именем");
//     else if (document.querySelector("#info").value.length < 3) {
//         alert("комментарий слишком мал для поста");
//     }
//     else if (document.querySelector("#info").value.length > 100) {
//         alert("комментарий привышает колличество символов");
//     }
//     else {
//         let name = document.querySelector(".username__text").value;
//         let date = new Date();
//         let text = document.querySelector("#info").value;
//
//         let a = document.createElement('span');
//         a.classList.add("comment__name");
//         a.innerHTML = name;
//
//         let b = document.createElement('span');
//         b.classList.add("comment__date");
//         b.innerHTML = (`${ZeroCheck(date.getDate())}.${ZeroCheck(date.getMonth() + 1)}.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`);
//
//         let c = document.createElement('p');
//         c.classList.add("comment__text");
//         c.innerHTML = text;
//
//         document.querySelector(".comment").appendChild(a);
//         document.querySelector(".comment").appendChild(b);
//         document.querySelector(".comment").appendChild(c);
//     }
// }



