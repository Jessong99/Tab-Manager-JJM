! function(e) {
    
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var s = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
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
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) n.d(a, s, function(t) {
                return e[t]
            }.bind(null, s));
        return a
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 6)
}([function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    const a = "webext";
    Array.from || (Array.from = function() {
        let e = Object.prototype.toString,
            t = function(t) {
                return "function" == typeof t || "[object Function]" === e.call(t)
            },
            n = Math.pow(2, 53) - 1,
            a = function(e) {
                let t = function(e) {
                    let t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                }(e);
                return Math.min(Math.max(t, 0), n)
            };
        return function(e) {
            let n = this,
                s = Object(e);
            if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            let i, o = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== o) {
                if (!t(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (i = arguments[2])
            }
            let r, d = a(s.length),
                l = t(n) ? Object(new n(d)) : new Array(d),
                c = 0;
            for (; c < d;) r = s[c], l[c] = o ? void 0 === i ? o(r, c) : o.call(i, r, c) : r, c += 1;
            return l.length = d, l
        }
    }())
}, function(e, t, n) {
    "use strict";
    n.d(t, "e", (function() {
        return s
    })), n.d(t, "c", (function() {
        return i
    })), n.d(t, "d", (function() {
        return o
    })), n.d(t, "b", (function() {
        return r
    })), n.d(t, "a", (function() {
        return d
    }));
    var a = n(0);
    const s = 1,
        i = 2,
        o = 0,
        r = -1,
        d = {
            popup: {
                size: {
                    width: 760,
                    height: 465
                },
                scale: .9,
                showDetails: s,
                showPreview: s,
                hideAfterTabSelection: s,
                searchInURLs: s
            }
        };
    "chrome" === a.a && (d.popup.showPreview = r, d.popup.hideAfterTabSelection = i)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    n(0);

    function a(e, t) {
        return browser.runtime.sendMessage({
            type: e,
            data: t
        })
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s
    })), n.d(t, "b", (function() {
        return i
    }));
    n(0);
    var a = n(1);
    async function s() {
        return browser.storage.local.get(["options"]).then(e => e.options)
    }

    function i(e) {
        switch (e) {
            case a.e:
            case a.c:
                return !0;
            case a.d:
            case a.b:
                return !1
        }
    }
}, , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var a = n(3);
    let s = !1;

    function i(e) {
        e.stopPropagation()
    }

    function o(e, t, n) {
        n.setAttribute("data-state", "on"), n.style.top = t + "px", n.style.left = e + "px"
    }
    Element.prototype.getElementByClassName = function(e) {
        return this.getElementsByClassName(e)[0] || null
    };
    var r = {
            tabsList: void 0,
            isSelecting: !1,
            hideAfterTabSelection: void 0,
            searchInURLs: void 0
        },
        d = n(2);
    let l;

    function c(e) {
        return l[e] || e
    }

    function u() {
        return browser.tabs.query({
            lastFocusedWindow: !0
        }).then((function(e) {
            return e.length > 0 ? e[0].windowId : -1
        }))
    }

    function m(e) {
        browser.tabs.get(e).then(e => {
            e.pinned ? browser.tabs.update(e.id, {
                pinned: !1
            }) : browser.tabs.update(e.id, {
                pinned: !0
            })
        })
    }

    function b(e) {
        browser.tabs.get(e).then(e => {
            e.mutedInfo.muted ? browser.tabs.update(e.id, {
                muted: !1
            }) : browser.tabs.update(e.id, {
                muted: !0
            })
        })
    }

    function g(e) {
        let t = y(e),
            n = f(C(e));
        browser.tabs.update(t, {
            active: !0
        }), browser.windows.get(n).then(e => {
            u().then(e => browser.windows.get(e)).then(t => {
                e.id !== t.id ? browser.windows.update(e.id, {
                    focused: !0
                }) : r.hideAfterTabSelection && window.close()
            })
        })
    }

    function p(e) {
        let t = e.getAttribute("data-tab_id"),
            n = document.getElementById("tab-details");
        n.getAttribute("data-tab_id") === t && (n.style.display = "none", document.getElementById("details-placeholder").style.display = "inline-block"), browser.tabs.remove(parseInt(t))
    }

    function y(e) {
        return parseInt(e.getAttribute("data-tab_id"))
    }

    function f(e) {
        return parseInt(e.getAttribute("data-window_id"))
    }

    function w(e) {
        return document.querySelector('.tab-entry[data-tab_id="' + e + '"]')
    }

    function h(e) {
        return r.tabsList.querySelector('li[data-window_id="' + e + '"]')
    }

    function E(e, t) {
        let n, a = h(e);
        null !== (n = function(e) {
                return h(e).getElementByClassName("current-tab")
            }(e)) && n.classList.remove("current-tab"),
            function(e, t) {
                return e.querySelector('li[data-tab_id="' + t + '"]')
            }(a, t).classList.add("current-tab")
    }

    function v(e, t) {
        let n = w(e);
        n.parentElement.removeChild(n), browser.tabs.query({
            active: !0,
            windowId: t
        }).then(e => {
            (function(e) {
                return w(c(e))
            })(e[0].id).classList.add("current-tab")
        })
    }

    function L(e, t) {
        C(t).getElementByClassName("window-entry-tabs").insertBefore(e, t)
    }

    function I(e, t) {
        t.getElementByClassName("window-entry-tabs").appendChild(e)
    }

    function C(e) {
        return e.parentElement.parentElement
    }

    function B(e, t, n, a) {
        return !e.isSameNode(t) && (!e.classList.contains("pinned-tab") && !t.classList.contains("pinned-tab") || e.classList.contains("pinned-tab") && t.classList.contains("pinned-tab") || n && !e.classList.contains("pinned-tab")) && (!a.classList.contains("incognito-window") && !C(t).classList.contains("incognito-window") || a.classList.contains("incognito-window") && C(t).classList.contains("incognito-window"))
    }
