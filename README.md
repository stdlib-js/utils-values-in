<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Object Values

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an array of an object's own and inherited enumerable property values.



<section class="usage">

## Usage

```javascript
import objectValuesIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-values-in@esm/index.mjs';
```

#### objectValuesIn( obj )

Returns an `array` of an object's own and inherited enumerable property values.

```javascript
function Foo() {
    this.a = 1;
    return this;
}

Foo.prototype.b = 2;

var obj = new Foo();

var values = objectValuesIn( obj );
// e.g., returns [ 1, 2 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][spec-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic extraction.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectValuesIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-values-in@esm/index.mjs';

function Foo() {
    this.beep = 'boop';
    this.a = {
        'b': 'c'
    };
    return this;
}

Foo.prototype.foo = [ 'bar' ];

var obj = new Foo();
var values = objectValuesIn( obj );

console.log( values );
// e.g., => [ 'boop', {'b':'c'}, [ 'bar' ] ]

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/entries-in`][@stdlib/utils/entries-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property key-value pairs.</span>
-   <span class="package-name">[`@stdlib/utils/keys-in`][@stdlib/utils/keys-in]</span><span class="delimiter">: </span><span class="description">return an array of an object's own and inherited enumerable property names.</span>
-   <span class="package-name">[`@stdlib/utils/values`][@stdlib/utils/values]</span><span class="delimiter">: </span><span class="description">return an array of an object's own enumerable property values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-values-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-values-in

[test-image]: https://github.com/stdlib-js/utils-values-in/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-values-in/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-values-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-values-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-values-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-values-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-values-in/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-values-in/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-values-in/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-values-in/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-values-in/main/LICENSE

[spec-for-in]: http://www.ecma-international.org/ecma-262/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/entries-in]: https://github.com/stdlib-js/utils-entries-in/tree/esm

[@stdlib/utils/keys-in]: https://github.com/stdlib-js/utils-keys-in/tree/esm

[@stdlib/utils/values]: https://github.com/stdlib-js/utils-values/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
