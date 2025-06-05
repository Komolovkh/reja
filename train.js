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
