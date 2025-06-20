/*


console.log("Jack Ma advice");
const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlab koproq hato qiling", //20-30
  "uzingiz ishlashni boshlang", //30-40
  "kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi esa dam oling chunki foydasi yoq", //60
];

function giveAdvice(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("passed here 0");
giveAdvice(70, (err, data) => {
  // buyerda sonlarni kiritsak funsiya togri ishlaydi agarda string va boshqa shunga oxshash qiymatlarni kiritsak javob error va null deb chiqadi
  if (err) console.log("error:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1");
// biz tepada settimout funksiyasidan foydalandik va u har 5 sekundda ishlashni boshladi va shuning uchun console.log("passed here 1"); va console.log("passed here 0"); ni birinchi chiqarib javobni esa 5 sekunddan keyin chiqardi sababi biz javob chiqishini 5 sekund keyinga surib qoydik
*/

//Asynchronous functions
/*
console.log("Jack Ma advice");
const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlab koproq hato qiling", //20-30
  "uzingiz ishlashni boshlang", //30-40
  "kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi esa dam oling chunki foydasi yoq", //60
];

// asynchronous function ichida settimout setinterval yani core modullar ishlamaydi
async function giveAdvice(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];
  }
}
*/

//then //catch
// console.log("passed here 0");
// giveAdvice(20)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

// console.log("passed here 1");
/*bu yerda biz buni asnync functionga aylantirdik va 1chi console.log("passed here 0") ishga tushdi va biz hech qanday settimeout qilmadik shuningdek javob ham log qilmadi bizni funksiyamiz chunki u keyingisiga otib ketdi yani console.log("passed here 0") console.log("passed here 1") boldi vanihoyat ohirida asnchronous funksiyamiz javobni chiqardi sababi async function synch functionlar toliq ishga tushib bolgandan keyin async function natijalari bn nodejs ishga tushishni boshlaydi. shuning uchun ham async functionlar single threadni band qilmaydi yani operatsiyalarni event loop orqali thread poolga tashlaydi */

// tepada biz 20 yoshni soradik lekin bizga agarda 30 40 va 50 yoshlarini malumotlari kerak bolsa quyidagicha qilamiz va quyidagi holat callback hell yoki promise hell deyiladi va bunday usul biz uchun noqulay boladi

/*
giveAdvice(20)
  .then((data) => {
    giveAdvice(30)
      .then((data) => {
        giveAdvice(40)
          .then((data) => {
            console.log("javob:", data);
          })
          .catch((err) => {
            console.log("error:", err);
          });

        console.log("javob:", data);
      })
      .catch((err) => {
        console.log("error:", err);
      });

    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("error:", err);
  });
*/

// async/await
// async function run() {
//   let javob = await giveAdvice(20);
//   console.log(javob);

//   javob = await giveAdvice(30);
//   console.log(javob);

//   javob = await giveAdvice(40);
//   console.log(javob);
// }
// run();

/*
// (ASYNC AWAIT PROMISE)  bir mustasno holat bor va bunda esa async function ichida settimout kabi core modullar ishlaydi

console.log("Jack Ma advice");
const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlab koproq hato qiling", //20-30
  "uzingiz ishlashni boshlang", //30-40
  "kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi esa dam oling chunki foydasi yoq", //60
];

async function giveAdvice(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}

async function run() {
  let javob = await giveAdvice(65);
  console.log(javob);

  javob = await giveAdvice(30);
  console.log(javob);

  javob = await giveAdvice(40);
  console.log(javob);
}
run();

// bu holatda biz korib turibmizki 1 chi qiymat 65 2chi 30 va 3chi esa 40 dan iborat va natija shundayki 5 sekund kutadi va 65>>>>30>>>>40 ketmaketlikda natijalarni chiqarib beradi
// agarda berilgan qiymatlar ketmaketligi 20 70 va 40 bolsa bu holatda srazi 20ni qiymatini chiqarib 70ni esa 5 sekund kutadi va 70 bn 40 qiymatni birdaniga chiqarib beradi
*/

/*
//CALL BACK VS SETINTERVAL
console.log("Jack Ma advice");
const list = [
  "yaxshi talaba boling", //0-20
  "togri boshliq tanlab koproq hato qiling", //20-30
  "uzingiz ishlashni boshlang", //30-40
  "kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi esa dam oling chunki foydasi yoq", //60
];

function giveAdvice(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 1000);
  }
}

console.log("passed here 0");
giveAdvice(70, (err, data) => {
  if (err) console.log("error:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1");

// bu holatda biz callback functionda setintervalni ishlatib kordik va natijada javobni qayta qayta chiqarib beraveradi har 1 sekundda albatta console.log("passed here 1") va console.log("passed here 0") dan keyin 
*/

// MIT Task A

// version 1
// let word = "engineer";
// let letter = "e";
// let count = 0;
// let i = 0;

// while(i < word.length){
//   if(word[i] === letter){
//    count++;
//   }
// i++;
// }

// console.log(count);

// version 2
// let word = "engineer";
// let letter = "e";
// let count = 0;

// for (let i = 0; i < word.length; i++) {
//   if (word[i] === letter) {
//     count++;
//   }
// }

// console.log(count);

//version 3

// function countLetter(letter, word) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countLetter("e", "engineer"));

// MIT Task B

// function countDigits(number) {
//   let digit = 0;

//   for (let i = 0; i < number.length; i++) {
//     if (number[i] >= "0" && number[i] <= "9") {
//       digit++;
//     }
//   }

//   return digit;
// }
// console.log(countDigits("ad2a54y79wet0sfgb9"));

// TASK - C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

// TASK - C
// const moment = require("moment");

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   time() {
//     return moment().format("HH:mm");
//   }

//   qoldiq() {
//     console.log(
//       `Hozir ${this.time()} da ${this.non} ta non, ${
//         this.lagmon
//       } ta lag'mon va ${this.cola} ta cola mavjud`
//     );
//   }

//   sotish(mahsulot, miqdor) {
//     if (this[mahsulot] !== undefined) {
//       this[mahsulot] -= miqdor;
//       if (this[mahsulot] < 0) this[mahsulot] = 0;
//       console.log(`${this.time()} - Sotildi: ${miqdor} ta ${mahsulot}`);
//     } else {
//       console.log(`${this.time()} - Bunday mahsulot yo'q: ${mahsulot}`);
//     }
//   }

//   qabul(mahsulot, miqdor) {
//     if (this[mahsulot] !== undefined) {
//       this[mahsulot] += miqdor;
//       console.log(`${this.time()} - Qabul qilindi: ${miqdor} ta ${mahsulot}`);
//     } else {
//       console.log(`${this.time()} - Bunday mahsulot yo'q: ${mahsulot}`);
//     }
//   }
// }

// const dokon = new Shop(4, 5, 2);

// dokon.qoldiq();
// dokon.sotish("non", 3);
// dokon.qabul("cola", 4);
// dokon.qoldiq();

//azgina chatpgtdan foydalandim classni qolip va tuzilishi uchun lekin 70% kodlarni uzim qildim

//MIT task D

// function checkContent(pr1, pr2) {
//   if (pr1.length !== pr2.length) {
//     return false;
//   }
//   const tr1 = pr1.split("").sort().join("");
//   const tr2 = pr2.split("").sort().join("");

//   if (tr1 === tr2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkContent("hello", "hlloe"));

//MIT task E

// function getReverse(word) {
//   const wordd = word.split("").reverse().join("");
//   return wordd;

//   //or

//   return word.split("").reverse().join("");
// }

// console.log(getReverse("lucas"));

//MIT task F

function findDoublers(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      if (word[i] === word[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(findDoublers("small"));
