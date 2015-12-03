# postcss-shortcss

[![Join the chat at https://gitter.im/theprotein/postcss-shortcss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/theprotein/postcss-shortcss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[PostCSS](https://github.com/postcss/postcss) plugin for disassemble and assemble CSS properties. It work on [shortcss](https://github.com/theprotein/shortcss) library.

Before:
```css
.foo {
    list-style: none;
}
```

After:
```css
.foo {
	list-style-type: none;
    list-style-position: none;
    list-style-image: none;
}
```

## Usage

```js
postcss([ require('postcss-shortcss') ])
```
