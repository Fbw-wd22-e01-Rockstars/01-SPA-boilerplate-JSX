# `01` Hallo JSX

Mit JSX kannst du auch ganz einfach Variablen in dein HTML einfügen. Nehmen wir zum Beispiel an, dass du die folgende Variable zur Verfügung hast:

```js
let age = 12;
```

Wenn du den Wert dieser Variable dynamisch in deinen HTML-Code einfügen willst, kannst du das so machen:
```jsx
let output = <span> James is { age } years old </span>
```
Beachte die Position der geschweiften Klammern `{` and `}`, die die Variable umschließen.

Dann können wir alles im Inhalt der Website mit `ReactDOM.render` wie folgt darstellen:

```jsx
// use react-dom to render it into the DOM
import ReactDOM from 'react-dom';
               //render output      //inside the innerHTML of #myDiv
ReactDOM.render(output,             document.querySelector('#myDiv'));
```

Das resultierende HTML-Dokument der Website sieht dann wie folgt aus:
```html
<div id="myDiv">
    <span>James is 12 years old</span>
</div>
```

Im Grunde genommen können wir jetzt HTML und JS in derselben Datei mischen, ohne dass wir Strings verketten und verwenden müssen :smiley: Erstaunlich! :angry: oder?

## :speech_balloon: Anleitung

Die Datei index.js hat eine Variable namens `name`, die einen Namen enthalten kann.

Bitte füge diese Variable in die React-Ausgabe ein und ersetze sie durch das fest codierte `"James"`.
