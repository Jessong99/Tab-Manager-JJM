! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 8)
}({
    0: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        const r = "webext";
        Array.from || (Array.from = function() {
            let e = Object.prototype.toString,
                t = function(t) {
                    return "function" == typeof t || "[object Function]" === e.call(t)
                },
                n = Math.pow(2, 53) - 1,
                r = function(e) {
                    let t = function(e) {
                        let t = Number(e);
                        return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                    }(e);
                    return Math.min(Math.max(t, 0), n)
                };
            return function(e) {
                let n = this,
                    o = Object(e);
                if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                let l, c = arguments.length > 1 ? arguments[1] : void 0;
                if (void 0 !== c) {
                    if (!t(c)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    arguments.length > 2 && (l = arguments[2])
                }
                let u, i = r(o.length),
                    a = t(n) ? Object(new n(i)) : new Array(i),
                    d = 0;
                for (; d < i;) u = o[d], a[d] = c ? void 0 === l ? c(u, d) : c.call(l, u, d) : u, d += 1;
                return a.length = i, a
            }
        }())
    },
    8: function(e, t, n) {
        "use strict";
        n.r(t);
        n(0);
        let r = {};
        browser.runtime.onMessage.addListener((e, t) => {
                let n = r[e.target];
                if (void 0 !== n) return n(e.data)
            }),
            function(e, t) {
                if (void 0 !== r[e]) throw new Error("Module already exists");
                r[e] = t
            }("packd", e => {
                switch (e.action) {
                    case "pack":
                        return Promise.resolve(Object.assign({
                            packContents: {
                                scroll: !0,
                                videoStats: !0
                            }
                        }, {
                            scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
                            scrollLeft: document.documentElement.scrollLeft || document.body.scrollLeft
                        }, {
                            videos: Array.from(document.querySelectorAll("video")).map(e => ({
                                currentTime: e.currentTime
                            }))
                        }));
                    case "unpack":
                        return new Promise((t, n) => {
                            let r = () => {
                                console.log("Unpacking"), console.log(e), e.packContents.scroll && function(e) {
                                    document.documentElement.scrollTo(e.scrollLeft, e.scrollTop)
                                }(e), e.packContents.videoStats && function(e) {
                                    let t = document.querySelectorAll("video");
                                    if (e.videos.length === t.length)
                                        for (let n = 0; n < t.length; n++) t[n].currentTime = e.videos[n].currentTime
                                }(e), t()
                            };
                            "loading" === document.readyState ? document.addEventListener("load", r) : r()
                        })
                }
            })
    }
});