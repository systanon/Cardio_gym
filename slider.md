# Использование модуля Slider

## Внимание!!!

Даный пример был протестирован с использованием VSCode + Live Server.

Без использования сервера возможны ошибки:

```
index.html:1
Access to script at 'file:///H:/GitHub/thomasbrickerbk/FirstRepository/js/slider.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
slider.js:1
Failed to load resource: net::ERR_FAILED
index.html:1
Access to script at 'file:///H:/GitHub/thomasbrickerbk/FirstRepository/js/script.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
script.js:1
Failed to load resource: net::ERR_FAILED
```

Даный слайдер не сорит названиями класов и id, и не затрёт случайно лишнее.
Примеры использования представлены ниже:

## index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="css/style.css" rel="stylesheet" />
    <script src="js/slider.js" type="module" defer></script>
    <script src="js/script.js" type="module" defer></script>
    <title>Using slider document</title>
  </head>
  <body>
    <div id="mainSlider"></div>
  </body>
</html>
```

## style.css

```css
#mainSlider {
  border: 1px;
  border-color: black;
  border-style: solid;
  width: 400px;
  height: 300px;
  background-color: black;
}
```

---

## script.js

```js
"use strict";

import {Slider} from './slider.js';

let slides = [
  `https://s.sakh.com/i/m/market/2014/03/16/1d344e57806dd56703b37fe20bf0670e.jpeg`,
  `https://ua.all.biz/img/ua/service_catalog/67269.jpeg`,
  `https://images.ua.prom.st/404338698_tokarnye-raboty-na.jpg`,
];

let div = document.getElementById('mainSlider');

let settings = {
  delay: 5000, //смена слайдов в ms.
  transition: 3, // Время появления картинки s.
  borderColor: "blue",
  transitionTimingFunction: "linear"//linear, ease-out, ease-in
};

let slider = new Slider(div, slides, settings);
slider.play();
```

Или с двумя параметрами:

```js
"use strict";

import {Slider} from './slider.js';

let slides = [
  `https://s.sakh.com/i/m/market/2014/03/16/1d344e57806dd56703b37fe20bf0670e.jpeg`,
  `https://ua.all.biz/img/ua/service_catalog/67269.jpeg`,
  `https://images.ua.prom.st/404338698_tokarnye-raboty-na.jpg`,
];

let div = document.getElementById('mainSlider');

let slider = new Slider(div, slides);
slider.play();
```

---

При необходимости остановить слайдер можно методом ```slider.stop()```.

---

&copy; 2020 Thomas Bricker.
