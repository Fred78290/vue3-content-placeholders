# vue3-content-placeholders

![npm](https://img.shields.io/npm/v/@fred78290%2fvue3-content-placeholders.svg)
[![vue3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)

This is a port of vue-content-placeholders for vue2 to vue3 from [Michał Sajnóg](http://github.com/michalsnik/vue-content-placeholders.git) repository

> Vue addon for rendering fake content while data is fetching to provide better UX and lower bounce rate.

![example](https://i.imgur.com/JQlFjsS.gif)

---

## :cd: Installation

* via npm: `npm install @fred78290/vue3-content-placeholders --save`
* via yarn: `yarn add @fred78290/vue3-content-placeholders`

## :rocket: Usage

Include plugin in your `main.js` file.

```javascript
import {createApp} from 'vue'
import VueContentPlaceholders from '@fred78290/vue3-content-placeholders'
import '@fred78290/vue3-content-placeholders/style.css'

const app = createApp(...)

...

app.use(VueContentPlaceholders)

```

### Examples:

```html
<content-placeholders>
  <content-placeholders-heading :img="true" />
  <content-placeholders-text :lines="3" />
</content-placeholders>
```

![rendered example](https://i.imgur.com/LWfqxUe.png)

```html
<content-placeholders :rounded="true">
  <content-placeholders-img />
  <content-placeholders-heading />
</content-placeholders>
```

![rendered example](https://i.imgur.com/NBb6ZB7.png)

### Available components and properties

* root `<content-placeholders>`
  * Boolean `animated` (default: true)
  * Boolean `rounded` (default: false) - border radius
  * Boolean `centered` (default: false)
  > these properties define how all children components will act

* `<content-placeholders-heading />`
  * Boolean `img` (default: false)

* `<content-placeholders-text />`
  * Number `lines` (default: 4)

* `<content-placeholders-img />`

---

## 🔓 License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
