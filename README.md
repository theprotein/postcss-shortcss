# postcss-shortcss

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
