document.addEventListener("DOMContentLoaded", function () {
  const targetEl = document.querySelectorAll(".swiper-slide");
  const title = document.querySelector(".title-standart");
  const bg = document.querySelector("body");
  const price = document.querySelector(".subtitle");
  const cc = document.querySelector(".callp");
  const er = document.querySelector(".er");
  // const btn = document.querySelector("button");

  function callback(mutations, observer) {
    mutations.forEach(function (mutation) {
      if (
        mutation.target.classList.contains("swiper-slide-active") &&
        mutation.target.classList.contains("green")
      ) {
        bg.style.backgroundColor = "#7BC248";
        // price-tolem-change
        title.textContent = "СТАНДАРТ";
        price.textContent =
          "Карта «Стандарт». Проезд по стандартному тарифу 70 тенге. Стоимость карты — 500 тенге. Входит один бесплатный проезд. Приобрести данный вид транспортной карты можно у водителяи в магазинах города, где есть специальная вывеска (фото вывески)";
        cc.style.color = "#7BC248";
        er.style.color = "#7BC248";
        er.href =
          "./pages/application.html";
        // er.document.location.href = "https://tailwindcss.com/docs/width";
      }
      if (
        mutation.target.classList.contains("swiper-slide-active") &&
        mutation.target.classList.contains("blue")
      ) {
        bg.style.backgroundColor = "#2A125D";
        title.textContent = "СТУДЕНТ";
        price.textContent =
          "Карта «Студенческая». Проезд по тарифу 50 тенге. карта будет индивидуальным, с фотографией и данными студента.";
        cc.style.color = "#2A125D";
        er.style.color = "#2A125D";
        er.href =
          "./pages/student.html";
      }
      if (
        mutation.target.classList.contains("swiper-slide-active") &&
        mutation.target.classList.contains("red")
      ) {
        bg.style.backgroundColor = "#DA412F";
        title.textContent = "ШКОЛЬНИК";
        price.textContent =
          "Карта «Ученическая». Проезд по тарифу 35 тенге. карта будет индивидуальным, с фотографией и данными ученика.";
        cc.style.color = "#DA412F";
        er.style.color = "#DA412F";
        er.href =
          "./pages/school.html";
      }
    });
  }
  const observer = new MutationObserver(callback);

  targetEl.forEach((target) => {
    observer.observe(target, {
      childList: true,
      attributes: true,
      characterData: true,
    });
  });
});
