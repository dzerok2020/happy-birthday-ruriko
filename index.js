const contentLetterSrart_actived = "瑠璃子，生日快乐！ 在你发现这张纸背后隐藏的文字之前，让我向你致以最温暖、最有意义的祝福。希望你有一个充满欢乐和幸福的一天！" //Lời mở đầu cho bức thư
const mainContentLetter = "当你好 瑠璃子, 1\n" +
    "\n" +
    "生日快乐，我亲爱的朋友！🎉🎂\n" +
    "\n" +
    "祝愿你在新的一年里充满健康，活力和快乐。希望你的每一步都带来美好的经历和难忘的时刻。\n" +
    "\n" +
    "今年，我希望你始终保持乐观的心态，并随时准备迎接挑战。请记住，每一次困境都是你成长和进步的机会。\n" +
    "\n" +
    "至于学业目标，我相信你将取得巨大的成功。努力拼搏，保持学习的热情，不断探索新知识。每天都以积极的能量投入学校，我相信你会如愿以偿的。\n" +
    "\n" +
    "祝愿你度过一个有意义且充满快乐的生日！🥳🌟1\n" +
    "\n" +
    "充满爱的祝福，1\n" +
    "Khanh" //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

let n = 0;
document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    if (n === 0) {
        const sticker = document.querySelector(".sticker")
        const recieve = document.querySelector(".recieve")
        sticker.style.cursor = "default"
        document.querySelector(".contentLetter").innerHTML = "";
        document.querySelector(".startLetter").classList.add("active")
        setTimeout(() => {
            splitContentLetterSrart_actived.forEach((val, index) => {
                setTimeout(() => {
                    document.querySelector(".contentLetter").innerHTML += val;
                    if (index === contentLetterSrart_actived.length - 1) {
                        setTimeout(() => {
                            recieve.setAttribute("style", "opacity: 1; transition: .5s")
                            recieve.style.animation = "blink 3s infinite";
                        }, 1000)
                    }
                }, 50 * index)
            })
        }, 1000)
        n++;
    }
})

let i = 0

document.querySelector(".content").addEventListener("click", function () {
    if (i === 0) {
        const content = document.querySelector(".content")
        content.classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            const effectType = setTimeout(() => {
                if (val !== "1") {
                    document.querySelector(".mainContent").innerHTML += val;
                } else {
                    document.querySelector(".mainContent").innerHTML += "<br>";
                }
                const mainContent = document.querySelector(".mainContent");
                mainContent.scrollTop = mainContent.scrollHeight;
                if (index === mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                    clearTimeout(effectType);
                }
            }, 50 * index)
        })
        i++;
    }
})

// document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
//     if (this.checked === true) {
//         document.querySelector(".content").classList.add("actived")
//         document.querySelector(".letterForm-1").classList.remove("blink")
//         document.querySelector(".designBox").classList.remove("blink")
//
//         const splitMainContentLetter = mainContentLetter.split("");
//
//         splitMainContentLetter.forEach((val, index) => {
//             const effectType = setTimeout(() => {
//                 document.querySelector(".mainContent").innerHTML += val;
//                 const mainContent = document.querySelector(".mainContent");
//                 mainContent.scrollTop = mainContent.scrollHeight;
//                 if (index === mainContentLetter.length - 1) {
//                     document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
//                     clearTimeout(effectType);
//                 }
//             }, 50 * index)
//         })
//
//     } else {
//         document.querySelector(".content").classList.remove("actived")
//         document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
//         document.querySelector(".mainContent").innerHTML = "";
//     }
// })

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}