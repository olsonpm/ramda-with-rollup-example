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

Array.isArray, console.log(add(1, 2))
