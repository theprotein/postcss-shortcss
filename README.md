# PostCSS ShortCSS [![Build Status][ci-img]][ci]

[PostCSS] plugin for disassemble and assemble CSS properties.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/theprotein/postcss-shortcss.svg
[ci]:      https://travis-ci.org/theprotein/postcss-shortcss

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-shortcss') ])
```

See [PostCSS] docs for examples for your environment.
