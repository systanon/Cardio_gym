"use strict";

export class Slider {
  constructor(div, arr, settings) {
    div.style.position = "relative";
    div.style.overflow = "hidden";
    // div.style.background = "#f3f3f3";
    //.background = "#f3f3f3 url('img_tree.png') no-repeat right top";
    // background-color: black;
    this.index = 0;
    this.length = arr.length;
    this.settings = Object.assign({
      delay: 5000, //смена слайдов в ms.
      transition: 3, // Время появления картинки s.
      borderColor: "blue",
      transitionTimingFunction: "linear"//linear, ease-out, ease-in
    },
    settings);

    // Add slides.
    this.slides = arr.map((item, index, array) => {
      let img = document.createElement("img");
      img.src = item;
      //Масштаб.
      img.style.maxWidth = "100%";
      img.style.maxHeight = "100%";
      img.style.height = "auto";
      img.style.width = "auto";
      //Выравнивание.
      //Position absolute, top50%,left50% transform:translate(-50%,-50%)
      img.style.position = "absolute";
      img.style.left = 0;
      img.style.right = 0;
      img.style.top = 0;
      img.style.bottom = 0;
      img.style.margin = "auto auto";

      img.style.opacity = Number(!Boolean(index));
      img.style.transition = `opacity ${this.settings.transition}s`;
      img.style.transitionTimingFunction = "linear";// ease-out, ease-in, linear

      div.appendChild(img);
      return img;
    });

    //Add controls.
    this.prevButton = document.createElement("img");
    this.nextButton = document.createElement("img");
    //Size.
    this.prevButton.width = 30;
    this.prevButton.height = 40;
    this.nextButton.width = 30;
    this.nextButton.height = 40;

    //Align.
    this.prevButton.style.position = "absolute";
    this.prevButton.style.left = 0;
    this.prevButton.style.top = 0;
    this.prevButton.style.bottom = 0;
    this.prevButton.style.margin = "auto auto";

    this.nextButton.style.position = "absolute";
    this.nextButton.style.right = 0;
    this.nextButton.style.top = 0;
    this.nextButton.style.bottom = 0;
    this.nextButton.style.margin = "auto auto";

    this.prevButton.style.border = 1;
    this.prevButton.style.borderColor = this.settings.borderColor;
    this.prevButton.style.borderStyle = "none";

    this.nextButton.style.border = 1;
    this.nextButton.style.borderColor = this.settings.borderColor;
    this.nextButton.style.borderStyle = "none";

    this.prevButton.src =
      "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E";
    this.nextButton.src =
      "data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E";

    function highlightOn(event) {
      event.target.style.borderStyle = "solid";
      event.stopPropagation();
    }
    function highlightOff(event) {
      event.target.style.borderStyle = "none";
      event.stopPropagation();
    }

    this.prevButton.addEventListener("mouseover", highlightOn);
    this.prevButton.addEventListener("mouseout", highlightOff);

    this.nextButton.addEventListener("mouseover", highlightOn);
    this.nextButton.addEventListener("mouseout", highlightOff);

    this.prevButton.addEventListener("click", event => {
      this.prev();
      event.stopPropagation();
    });
    this.nextButton.addEventListener("click", event => {
      this.next();
      event.stopPropagation();
    });

    div.appendChild(this.prevButton);
    div.appendChild(this.nextButton);
  }
  // static defaultSettings = {};

  hide() {
    this.slides[this.index].style.opacity = 0;
  }

  show() {
    this.slides[this.index].style.opacity = 1;
  }

  stop() {
    clearInterval(this.timerId);
  }

  play() {
    this.timerId = setInterval(this.next.bind(this), this.settings.delay);
  }

  prev() {
    this.hide(this.index);
    this.index--;
    if (this.index < 0) this.index = this.length-1;
    this.show(this.index);
  }

  next() {
    this.hide(this.index);
    this.index++;
    if (this.index >= this.length) this.index = 0;
    this.show(this.index);
  }
}

