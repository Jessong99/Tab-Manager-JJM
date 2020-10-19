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
 function A(e, t, n) {
        return !n.isSameNode(t) && !e.classList.contains("pinned-tab") && (!n.classList.contains("incognito-window") && !t.classList.contains("incognito-window") || n.classList.contains("incognito-window") && t.classList.contains("incognito-window"))
    }
    let N = {
            DOWN: e => e.nextElementSibling,
            UP: e => e.previousElementSibling
        },
        k = {
            DOWN: e => 0,
            UP: e => e - 1
        };

    function x(e, t) {
        let n = N[t],
            a = k[t],
            s = null;
        if (null !== n(e)) {
            let t = null;
            for (; null !== (t = n(e));) {
                if (!t.classList.contains("non-matching")) {
                    s = t;
                    break
                }
                e = t
            }
        }
        if (null === s) {
            let t = null;
            for (; null !== (t = n(C(e)));) {
                let e = (i = t, Array.from(i.getElementsByClassName("tab-entry"))).filter(e => !e.classList.contains("non-matching"));
                if (e.length > 0) {
                    s = e[a(e.length)];
                    break
                }
            }
        }
        var i;
        return s
    }

    function T(e, t) {
        let n = document.querySelector("#tabs").getBoundingClientRect(),
            a = e.getBoundingClientRect();
        (n.y > a.y || n.y > a.y + a.height || a.y >= n.y + n.height || a.y + a.height >= n.y + n.height) && e.scrollIntoView(t)
    }

    function _(e) {
        let t = y(e),
            n = document.getElementsByClassName("selected-entry");
        var a;
        n.length > 0 && n[0].classList.remove("selected-entry"), e.classList.add("selected-entry"), (a = t, s ? browser.tabs.captureTab(a) : new Promise((e, t) => e(null))).then(e => {
            null !== e && (document.getElementById("details-img").src = e), browser.tabs.get(t).then(e => {
                document.getElementById("details-title").textContent = e.title, 
                document.getElementById("details-url").textContent = e.url, 
                document.getElementById("details-placeholder").style.display = "none", 
                document.getElementById("tab-details").style.display = "inline-block", 
                document.getElementById("tab-details").setAttribute("data-tab_id", t), 
                e.pinned ? document.getElementById("details-pinned").style.display = "inline" : document.getElementById("details-pinned").style.display = "none", e.hidden ? document.getElementById("details-hidden").style.display = "inline" : document.getElementById("details-hidden").style.display = "none", e.pinned && e.hidden ? document.getElementById("details-comma").style.display = "inline" : document.getElementById("details-comma").style.display = "none"
            })
        })
    }

    function O(e) {
        _(e.target), e.preventDefault()
    }

    function D(e) {
        0 === e.button && g(e.target)
    }

    function S(e) {
        e.stopPropagation(), p(e.target.parentElement.parentElement)
    }

    function P(e) {
        e.stopPropagation(), m(y(e.target.parentElement.parentElement))
    }

    function U(e) {
        e.stopPropagation(), b(y(e.target.parentElement.parentElement))
    }

    function R(e) {
        e.preventDefault()
    }

    function W(e) {
        for (let e of document.getElementsByClassName("context-menu")) e.removeAttribute("data-state");
        0 === e.button && "details-close" === e.target.id && (document.getElementById("details-placeholder").style.display = "inline-block", document.getElementById("tab-details").style.display = "none", browser.tabs.remove(y(document.getElementById("tab-details"))))
    }

    function j(e) {
        switch (e.preventDefault(), e.code) {
            case "KeyS":
                document.getElementById("search").focus();
                break;
            case "KeyM": {
                let e = document.getElementsByClassName("selected-entry");
                e.length > 0 && b(y(e[0]));
                break
            }
            case "KeyP": {
                let e = document.getElementsByClassName("selected-entry");
                e.length > 0 && m(y(e[0]));
                break
            }
            case "ArrowDown":
            case "ArrowUp": {
                let t = document.getElementsByClassName("selected-entry");
                if (t.length > 0) {
                    let n = x(t[0], {
                        ArrowDown: "DOWN",
                        ArrowUp: "UP"
                    } [e.code]);
                    null !== n && (_(n), T(n, "ArrowUp" === e.code))
                }
                break
            }
            case "Enter": {
                let e = document.getElementsByClassName("selected-entry");
                e.length > 0 && (e[0].classList.add("going-to-this-entry"), g(e[0]), setTimeout(() => {
                    e[0].classList.remove("going-to-this-entry")
                }, 50));
                break
            }
            case "Delete": {
                let e = Array.from(document.getElementsByClassName("selected-entry"));
                if (e.length > 0) {
                    e[0].classList.add("going-to-this-entry");
                    let t = x(e[0], "DOWN");
                    null !== t ? (_(t), t = null) : t = x(e[0], "UP"), null !== t && _(t), p(e[0])
                }
                break
            }
        }
    }

    function M(e, t = !1) {
        return new Promise((n, a) => {
            try {
                if (e.startsWith("chrome://")) n();
                else {
                    let s = new XMLHttpRequest;
                    s.onreadystatechange = function() {
                        if (4 == this.readyState && 200 == this.status) {
                            let e = s.getResponseHeader("Content-Type").trim();
                            if (e.startsWith("image/")) {
                                let t = "data:" + e + ";charset=utf-8;base64,",
                                    a = function(e) {
                                        let t = "";
                                        return [].slice.call(new Uint8Array(e)).forEach(e => t += String.fromCharCode(e)), window.btoa(t)
                                    }(s.response);
                                n(t + a)
                            } else a('Image Request Failed: Content-Type is not an image! (Content-Type: "' + e + '")')
                        }
                    }, s.responseType = "arraybuffer", s.open("GET", e, !0), t && s.setRequestHeader("Cache-Control", "no-store"), s.send()
                }
            } catch (e) {
                a(e.message)
            }
        })
    }

    function F(e, t) {
        switch (e.type) {
            case "INIT__PUT_FOCUS_ON_CURRENT": {
                let e = document.getElementsByClassName("current-window")[0].getElementsByClassName("current-tab")[0];
                e.classList.add("selected-entry"), e.scrollIntoView({
                    behavior: "smooth"
                }), e.focus();
                break;
            }
            case "ACTIVE_TAB_CHANGED":
                E(e.details.windowId, e.details.tabId);
                break;

            case "TAB_FAV_ICON_CHANGED":
                browser.tabs.get(e.details.tabId).then(t => {
                    let n;
                    n = t.favIconUrl.startsWith("chrome://") ? Promise.resolve(t.favIconUrl) : t.incognito ? M(e.details.favIconUrl, !0) : M(e.details.favIconUrl), n.then((function(t) {
                        let n = w(e.details.tabId);
                        n.classList.remove("noicon");
                        let a = n.getElementByClassName("tab-entry-favicon");
                        a.src = t, a.style.display = ""
                    }))
                });
                break;
            case "TAB_PINNED_STATUS_CHANGED": {
                let t, n = w(e.details.tabId),
                    a = n.getElementByClassName("tab-entry-pin-btn"),
                    s = n.parentElement;
                e.details.pinned ? (t = Array.from(s.getElementsByClassName("pinned-tab")), n.classList.add("pinned-tab"), a.style.backgroundImage = "url(../icons/pinremove.svg)") : (t = Array.from(s.getElementsByClassName("pinned-tab")), n.classList.remove("pinned-tab"), a.style.backgroundImage = "url(../icons/pin.svg)");
                let i = t[t.length - 1];
                void 0 !== i ? s.insertBefore(n, i.nextSibling) : s.insertBefore(n, s.childNodes[0]);
                break
            }
            case "TAB_TITLE_CHANGED":
                w(e.details.tabId).getElementByClassName("tab-title").textContent = e.details.title;
                break;
            case "TAB_AUDIBLE_CHANGED":
                browser.tabs.get(e.details.tabId).then(e => {
                    w(e.id).getElementByClassName("tab-entry-speaker-btn").setAttribute("data-state", e.mutedInfo.muted ? "off" : "on"), resolve()
                });
                break;
            case "TAB_MUTE_CHANGED":
                w(e.details.tabId).getElementByClassName("tab-entry-speaker-btn").setAttribute("data-state", e.details.mutedInfo.muted ? "off" : "on");
                break;
            case "TAB_REMOVED":
                e.details.windowClosing || v(e.details.tabId, e.details.windowId);
                break;
            case "WINDOW_REMOVED":
                ! function(e) {
                    let t = h(e);
                    t.parentElement.removeChild(t), browser.windows.getCurrent({}).then(e => {
                        h(e.id).classList.add("current-window")
                    })
                }(e.details.windowId)
        }
    }
    async function H(e) {
        await Object(d.a)("RESTORE_WINDOW", {
            windowRecord: e
        })
    }
    let q, G, z, V, K, Y = document.getElementById("save-for-later"),
        X = () => {
            Y.removeAttribute("done")
        };

    function Z() {
        Y.setAttribute("disabled", ""), async function(e, t, n) {
            await Object(d.a)("RECORD", {
                ids: e,
                name: t,
                channelName: n
            })
        }().then(() => {
            Y.removeAttribute("disabled"), Y.setAttribute("done", ""), clearTimeout(X), setTimeout(X, 2e3)
        })
    }

    function $(e, t) {
        return e.toUpperCase().includes(t.toUpperCase()) || function(e, t) {
            let n = t.trim().split(" "),
                a = 0;
            for (let t = 0; t < n.length; t++) {
                let s = n[t];
                "" !== s.trim() && s.match(/^[a-zA-Z0-9]+$/) && e.toUpperCase().includes(s.toUpperCase()) && a++
            }
            return a >= 2
        }(e, t)
    }
    async function J(e) {
        let t, n, a;
        if (t = document.getElementById("search"), n = t.value, a = document.getElementsByClassName("tab-entry"), "" !== n)
            for (let e = 0; e < a.length; e++) {
                let t = a[e];
                $(t.getElementByClassName("tab-title").innerText, n) || r.searchInURLs && $((await browser.tabs.get(y(t))).url, n) ? t.classList.remove("non-matching") : t.classList.add("non-matching")
            } else
                for (let e = 0; e < a.length; e++) {
                    a[e].classList.remove("non-matching")
                }
    }

    function Q(e) {
        if (e.stopPropagation(), "Enter" === e.code) {
            let t = document.querySelector(".tab-entry:not(.non-matching)");
            null !== t && (e.target.blur(), _(t), T(t, !0))
        }
    }

    function ee(e) {
        e.target.classList.contains("tab-entry") && (q = e.target, V = C(q), K = f(V), e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", null))
    }

    function te(e) {
        e.preventDefault();
        let t = Array.from(r.tabsList.getElementsByClassName("insert-cursor"));
        for (let e = 0; e < t.length; e++) {
            let n = t[e];
            n.parentElement.removeChild(n)
        }
        let n, a = r.tabsList.getElementByClassName("insert-cursor-window");
        if (null !== a && a.classList.remove("insert-cursor-window"), e.target.classList.contains("tab-entry")) {
            let t = e.target.getBoundingClientRect();
            if (G = e.target, z = !1, e.clientY - t.top >= t.height / 2 && (G = G.nextSibling, null === G && (z = !0, G = e.target)), B(q, G, z, V)) {
                let e = document.createElement("div");
                e.classList.add("insert-cursor"), z ? G.parentElement.appendChild(e) : G.parentElement.insertBefore(e, G)
            }
        } else null !== (n = e.target.parentElement) && n.classList.contains("window-entry") && A(q, n, V) && e.target.classList.add("insert-cursor-window")
    }