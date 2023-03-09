// humburger handler
(function () {
  function funcHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".header__navigation");
    const navMenuLinks = document.querySelectorAll(".navigation__link");

    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("header__navigation_active");
    });

    if (window.innerWidth <= 767) {
      for (let i = 0; i < navMenuLinks.length; i++) {
        navMenuLinks[i].addEventListener("click", () => {
          navMenu.classList.toggle("header__navigation_active");
        });
      }
    }
  }

  funcHamburger();
  // accordion handler section price

  function funcAccordion() {
    const priceItems = document.querySelectorAll(".price-item");
    const priceButtons = document.querySelectorAll(".price__button");

    priceButtons.forEach((el, i) =>
      el.addEventListener("click", (e) => {
        if (priceItems[i].classList.contains("price_open")) {
          priceItems[i].classList.remove("price_open");
        } else {
          priceItems.forEach((element) =>
            element.classList.remove("price_open")
          );
          priceItems[i].classList.add("price_open");
        }
      })
    );
  }

  funcAccordion();
  // service section blur

  function funcBlur() {
    const buttonServGarden = document.querySelector("#garden");
    const buttonServPlanting = document.querySelector("#planting");
    const buttonServLawn = document.querySelector("#lawn");

    const lawnServ = document.querySelector("#lawn__1");

    const gardenServ1 = document.querySelector("#garden__1");
    const gardenServ2 = document.querySelector("#garden__2");

    const plantServ1 = document.querySelector("#planting__1");
    const plantServ2 = document.querySelector("#planting__2");
    const plantServ3 = document.querySelector("#planting__3");

    const arrGarden = [gardenServ1, gardenServ2];
    const arrPlant = [plantServ1, plantServ2, plantServ3];

    const buttonsActive = [];

    function removeBlur() {
      arrGarden.forEach((el) => el.classList.remove("active_garden"));
      arrPlant.forEach((el) => el.classList.remove("active_planting"));
      lawnServ.classList.remove("active_lawn");
    }

    buttonServPlanting.classList.remove("active_button");
    buttonServLawn.classList.remove("active_button");
    buttonServGarden.classList.remove("active_button");

    removeBlur();

    buttonServGarden.addEventListener("click", () => {
      arrGarden.forEach((el) => el.classList.remove("active_garden"));
      buttonServGarden.classList.toggle("active_button");

      arrPlant.forEach((el) => el.classList.toggle("active_planting"));
      lawnServ.classList.toggle("active_planting");

      buttonsActive.push(buttonServGarden);

      console.log(buttonsActive);
    });

    buttonServLawn.addEventListener("click", () => {
      lawnServ.classList.remove("active_lawn");
      buttonServLawn.classList.toggle("active_button");

      arrGarden.forEach((el) => el.classList.toggle("active_garden"));
      arrPlant.forEach((el) => el.classList.toggle("active_planting"));

      buttonsActive.push(buttonServLawn);

      console.log(buttonsActive);
    });

    buttonServPlanting.addEventListener("click", () => {
      arrPlant.forEach((el) => el.classList.remove("active_planting"));
      buttonServPlanting.classList.toggle("active_button");

      arrGarden.forEach((el) => el.classList.toggle("active_garden"));
      lawnServ.classList.toggle("active_lawn");

      buttonsActive.push(buttonServGarden);

      console.log(buttonsActive);
    });
  }
  // function checkButtons() {
  //   if (
  //     buttonServGarden.classList.contains("active_button") &&
  //     buttonServLawn.classList.contains("active_button")
  //   ) {
  //     removeBlur();
  //     arrPlant.forEach((el) => el.classList.add("active_planting"));
  //   }
  //   if (
  //     buttonServLawn.classList.contains("active_button") &&
  //     buttonServPlanting.classList.contains("active_button")
  //   ) {
  //     arrGarden.forEach((el) => el.classList.add("active_garden"));
  //   }
  // }

  // checkButtons();

  funcBlur();
})();
