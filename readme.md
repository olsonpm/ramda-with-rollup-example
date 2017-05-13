An example repo showing ramda with es modules and pure annotations used with rollup and uglifyjs.

```
$ git clone https://github.com/olsonpm/ramda-with-rollup-example.git
...
$ cd ramda-with-rollup-example
$ npm install
$ ./run
$ less bundle.js
```

The above bundles this
```js
import { add } from 'ramda';

console.log(add(1, 2));
```

into this
```js
function _isPlaceholder(r) {
    return null != r && "object" == typeof r && !0 === r["@@functional/placeholder"];
}

function _curry1(r) {
    return function e(n) {
        return 0 === arguments.length || _isPlaceholder(n) ? e : r.apply(this, arguments);
    };
}

var add = function(r) {
    return function e(n, u) {
        switch (arguments.length) {
          case 0:
            return e;

          case 1:
            return _isPlaceholder(n) ? e : _curry1(function(e) {
                return r(n, e);
            });

          default:
            return _isPlaceholder(n) && _isPlaceholder(u) ? e : _isPlaceholder(n) ? _curry1(function(e) {
                return r(e, u);
            }) : _isPlaceholder(u) ? _curry1(function(e) {
                return r(n, e);
            }) : r(n, u);
        }
    };
}(function(r, e) {
    return Number(r) + Number(e);
});

Array, console.log(add(1, 2))
```

*I still can't figure out how to get rid of global identifiers (see the dangling
`Array` above), but that's either something supported by uglifyjs that I
couldn't figure out, or it's something I expect will be implemented in
the future.*
