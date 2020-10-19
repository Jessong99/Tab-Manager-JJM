! function(e) {
    var t = {};

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }

    o.m = e, o.c = t,
        o.d = function(e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        },
        o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        o.t = function(e, t) {
            if (1 & t && (e = o(e)), 8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var r in e) o.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return n
        },
        o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        o.p = "", o(o.s = 4)
}([function(e, t, o) {
        "use strict";
        o.d(t, "a",
            (function() {
                return n
            }));
        const n = "webext";
        Array.from || (Array.from = function() {
            let e = Object.prototype.toString,
                t = function(t) {
                    return "function" == typeof t || "[object Function]" === e.call(t)
                },
                o = Math.pow(2, 53) - 1,
                n = function(e) {
                    let t = function(e) {
                        let t = Number(e);
                        return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                    }(e);
                    return Math.min(Math.max(t, 0), o)
                };
            return function(e) {
                let o = this,
                    r = Object(e);
                if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                let i,
                    u = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== u) {
                    if (!t(u)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (i = arguments[2])
                }
                let a, s = n(r.length),
                    p = t(o) ? Object(new o(s)) : new Array(s),
                    l = 0;
                for (; l < s;) a = r[l], p[l] = u ? void 0 === i ? u(a, l) : u.call(i, a, l) : a, l += 1;
                return p.length = s, p
            }
        }())
    },
    function(e, t, o) {
        "use strict";
        o.d(t, "e",
                (function() {
                    return r
                })), o.d(t, "c", (function() {
                return i
            })),
            o.d(t, "d", (function() {
                return u
            })), o.d(t, "b",
                (function() {
                    return a
                })), o.d(t, "a",
                (function() {
                    return s
                }));
        var n = o(0);
        const r = 1,
            i = 2,
            u = 0,
            a = -1,
            s = {
                popup: {
                    size: {
                        width: 760,
                        height: 465
                    },
                    scale: .9,
                    showDetails: r,
                    showPreview: r,
                    hideAfterTabSelection: r,
                    searchInURLs: r
                }
            };
        "chrome" === n.a && (s.popup.showPreview = a, s.popup.hideAfterTabSelection = i)
    }, ,
    function(e, t, o) {
        "use strict";
        o.d(t, "a",
            (function() {
                return r
            })), o.d(t, "b",
            (function() {
                return i
            }));
        o(0);
        var n = o(1);
        async function r() {
            return browser.storage.local.get(["options"]).then(e => e.options)
        }

        function i(e) {
            switch (e) {
                case n.e:
                case n.c:
                    return !0;
                case n.d:
                case n.b:
                    return !1
            }
        }
    },
    function(e, t, o) {
        "use strict";
        o.r(t);
        o(0);
        var n = o(1);
        o(3);

        function r(e, t) {
            switch (t) {
                case n.e:
                    e.setAttribute("value", "on");
                    break;
                case n.c:
                    e.setAttribute("value", "on"), e.setAttribute("disabled", "");
                    break;
                case n.d:
                    e.setAttribute("value", "off");
                    break;
                case n.b:
                    e.setAttribute("value", "off"), e.setAttribute("disabled", "")
            }
        }

        function i(e) {
            return "on" === e.getAttribute("value") ? e.hasAttribute("disabled") ? n.c : n.e : "off" === e.getAttribute("value") ? e.hasAttribute("disabled") ? n.b : n.d : void 0
        }

        function u(e, t) {
            e === n.e ? t.hasAttribute("disabled") && t.removeAttribute("disabled") : e === n.d && t.setAttribute("disabled", "")
        }

        function a() {
            document.getElementById("version").innerText = "Tab Manager", browser.storage.local.get(["options"]).then(e => {
                    let t = e.options;
                    document.getElementById("option-popup-width").value = t.popup.size.width,
                        document.getElementById("option-popup-height").value = t.popup.size.height,
                        document.getElementById("option-popup-scale").value = t.popup.scale,
                        r(document.getElementById("option-details"), t.popup.showDetails),
                        r(document.getElementById("option-preview"), t.popup.showPreview),
                        u(t.popup.showDetails,
                            document.getElementById("option-preview").parentElement),
                        r(document.getElementById("option-hide-after-tab-switch"),
                            t.popup.hideAfterTabSelection),
                        r(document.getElementById("option-search-urls"),
                            t.popup.searchInURLs)
                }),
                document.getElementById("option-popup-width").addEventListener("input", e => {
                    browser.storage.local.get(["options"]).then(t => {
                        t.options.popup.size.width = parseFloat(e.target.value),
                            browser.storage.local.set(t)
                    })
                }),
                document.getElementById("option-popup-height").addEventListener("input", e => {
                    browser.storage.local.get(["options"]).then(t => {
                        t.options.popup.size.height = parseFloat(e.target.value),
                            browser.storage.local.set(t)
                    })
                }),
                document.getElementById("option-popup-scale").addEventListener("input", e => {
                    browser.storage.local.get(["options"]).then(t => {
                        t.options.popup.scale = parseFloat(e.target.value),
                            browser.storage.local.set(t)
                    })
                }),
                document.getElementById("option-details").addEventListener("input", e => {
                    browser.storage.local.get(["options"]).then(t => {
                        t.options.popup.showDetails = i(e.target),
                            u(t.options.popup.showDetails,
                                document.getElementById("option-preview").parentElement),
                            browser.storage.local.set(t)
                    })
                }),
                document.getElementById("option-preview").addEventListener("input", e => {
                    browser.storage.local.get(["options"]).then(t => {
                        t.options.popup.showPreview = i(e.target),
                            browser.storage.local.set(t)
                    })
                }),
                document.getElementById("option-hide-after-tab-switch").addEventListener("input", e => {
                    browser.storage.local.get(["options"]).then(t => {
                        t.options.popup.hideAfterTabSelection = i(e.target),
                            browser.storage.local.set(t)
                    })
                }),
                document.getElementById("option-search-urls").addEventListener("input", e => {
                    browser.storage.local.get(["options"]).then(t => {
                        t.options.popup.searchInURLs = i(e.target),
                            browser.storage.local.set(t)
                    })
                })
        }
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", a) : a()
    },
    function(e, t) {
        e.exports = {
            EXT_VERSION: "2.1"
        }
    }
]);