// // 1
// // moon.jpg قم بالوصول إلى الصورة وتغيرها إلى
let image = document.getElementById('image')
image.src = "./images/moon.jpg"
// // 2
// // "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر
let title = document.getElementById('caption')
title.innerHTML = "القمر"

// // 3
// // بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// // دون الحاجة إلى الخطوتين 2و1

function swithcher () {
    let img = document.getElementById('image');
    let titl = document.getElementById('caption');
    let body = document.body;
    if (titl.innerHTML == "القمر") {
        img.src = "./images/sun.jpg"
        titl.innerHTML ="الشمس"
        body.style.background = "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)";
    } else {
        img.src = "./images/moon.jpg"
        titl.innerHTML ="القمر"
        body.style.background = "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)";
    }
}

// // 4
// // Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

// /*  الوضع الليلي
//     يتغير لون خلفية الصفحة للرمادي
//     تتغير الصورة لصورة القمر
//     "يتغير الاسم أسفل الصورة ويصبح "القمر
// */

// /*  الوضع النهاري
//     يتغير لون خلفية الصفحة للأبيض
//     تتغير الصورة لصورة الشمس
//     "يتغير الاسم أسفل الصورة ويصبح "الشمس
// */
