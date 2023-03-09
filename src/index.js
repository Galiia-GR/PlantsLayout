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

    function removeBlur() {
      arrGarden.forEach((el) => el.classList.remove("active_garden"));
      arrPlant.forEach((el) => el.classList.remove("active_planting"));
      lawnServ.classList.remove("active_lawn");
      buttonServPlanting.classList.remove("active_button");
      buttonServLawn.classList.remove("active_button");
      buttonServGarden.classList.remove("active_button");
    }

    function checkButtons() {
      if (
        buttonServGarden.classList.contains("active_button") &&
        buttonServLawn.classList.contains("active_button")
      ) {
        arrGarden.forEach((el) => el.classList.remove("active_planting"));
        lawnServ.classList.remove("active_planting");
        arrPlant.forEach((el) => el.classList.add("active_planting"));
      }

      if (
        buttonServLawn.classList.contains("active_button") &&
        buttonServPlanting.classList.contains("active_button")
      ) {
        arrGarden.forEach((el) => el.classList.add("active_planting"));
        arrPlant.forEach((el) => el.classList.remove("active_planting"));
        lawnServ.classList.remove("active_planting");
      }

      if (
        buttonServGarden.classList.contains("active_button") &&
        buttonServPlanting.classList.contains("active_button")
      ) {
        arrGarden.forEach((el) => el.classList.remove("active_planting"));
        arrPlant.forEach((el) => el.classList.remove("active_planting"));
        lawnServ.classList.add("active_planting");
      }
      if (
        buttonServGarden.classList.contains("active_button") &&
        buttonServPlanting.classList.contains("active_button") &&
        buttonServLawn.classList.contains("active_button")
      ) {
        removeBlur();
      }
    }

    removeBlur();

    buttonServGarden.addEventListener("click", () => {
      arrGarden.forEach((el) => el.classList.remove("active_garden"));

      if (buttonServGarden.classList.contains("active_button")) {
        arrPlant.forEach((el) => el.classList.remove("active_planting"));
        lawnServ.classList.remove("active_planting");
        buttonServGarden.classList.remove("active_button");
      } else {
        buttonServGarden.classList.add("active_button");
        arrPlant.forEach((el) => el.classList.add("active_planting"));
        lawnServ.classList.add("active_planting");
      }
      checkButtons();
    });

    buttonServLawn.addEventListener("click", () => {
      lawnServ.classList.remove("active_lawn");

      if (buttonServLawn.classList.contains("active_button")) {
        arrPlant.forEach((el) => el.classList.remove("active_planting"));
        arrGarden.forEach((el) => el.classList.remove("active_planting"));
        buttonServLawn.classList.remove("active_button");
      } else {
        buttonServLawn.classList.add("active_button");
        arrPlant.forEach((el) => el.classList.add("active_planting"));
        arrGarden.forEach((el) => el.classList.add("active_planting"));
      }
      checkButtons();
    });

    buttonServPlanting.addEventListener("click", () => {
      arrPlant.forEach((el) => el.classList.remove("active_planting"));

      if (buttonServPlanting.classList.contains("active_button")) {
        arrGarden.forEach((el) => el.classList.remove("active_planting"));
        lawnServ.classList.remove("active_planting");
        buttonServPlanting.classList.remove("active_button");
      } else {
        buttonServPlanting.classList.add("active_button");
        arrGarden.forEach((el) => el.classList.add("active_planting"));
        lawnServ.classList.add("active_planting");
      }
      checkButtons();
    });
  }

  funcBlur();

  function selectCity() {
    const buttonCity = document.querySelector(".select-city");
    const cityDropDown = document.querySelector(".city-dropdown");
    const buttonsCityDropDown = document.querySelectorAll(
      ".city-dropdown__item"
    );

    const inputCityName = document.querySelector(".city__text");

    const cityCanandaigua = document.querySelector("#canandaigua");
    const cityNewyork = document.querySelector("#newyork");
    const cityYonkers = document.querySelector("#yonkers");
    const citySherill = document.querySelector("#sherill");

    const arrCities = [cityCanandaigua, cityNewyork, cityYonkers, citySherill];

    buttonCity.addEventListener("click", () => {
      if (cityDropDown.classList.contains("dropdown-active")) {
        cityDropDown.classList.remove("dropdown-active");
      } else {
        cityDropDown.classList.add("dropdown-active");
      }
    });

    buttonsCityDropDown.forEach((el) => {
      el.addEventListener("click", function () {
        inputCityName.innerText = this.innerText;
        buttonCity.style.backgroundColor = "#c1e698";
        cityDropDown.classList.remove("dropdown-active");

        for (let i = 0; i < arrCities.length; i++) {
          if (arrCities[i].id === this.dataset.value) {
            arrCities[i].classList.add("card-active");
          } else {
            arrCities[i].classList.remove("card-active");
          }
        }
      });
    });
  }
  selectCity();
})();
