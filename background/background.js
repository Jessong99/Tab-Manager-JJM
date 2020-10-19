! function(e) {
    var t = {};

    function r(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };

        return e[n].call(o.exports, o, o.exports, r),
            o.l = !0,
            o.exports
    }
    r.m = e,
        r.c = t,
        r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        },
        r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        },
        r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var o in e) r.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 7)
}([function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return n
    }));
    const n = "webext";
    Array.from || (Array.from = function() {
        let e = Object.prototype.toString,
            t = function(t) {
                return "function" == typeof t || "[object Function]" === e.call(t)
            },
            r = Math.pow(2, 53) - 1,
            n = function(e) {
                let t = function(e) {
                    let t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                }(e);
                return Math.min(Math.max(t, 0), r)
            };
        return function(e) {
            let r = this,
                o = Object(e);
            if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            let a, d = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== d) {
                if (!t(d)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (a = arguments[2])
            }
            let i, s = n(o.length),
                u = t(r) ? Object(new r(s)) : new Array(s),
                c = 0;
            for (; c < s;) i = o[c], u[c] = d ? void 0 === a ? d(i, c) : d.call(a, i, c) : i, c += 1;
            return u.length = s, u
        }
    }())
}, function(e, t, r) {
    "use strict";
    r.d(t, "e", (function() {
        return o
    })), r.d(t, "c", (function() {
        return a
    })), r.d(t, "d", (function() {
        return d
    })), r.d(t, "b", (function() {
        return i
    })), r.d(t, "a", (function() {
        return s
    }));
    var n = r(0);
    const o = 1,
        a = 2,
        d = 0,
        i = -1,
        s = {
            popup: {
                size: {
                    width: 760,
                    height: 465
                },
                scale: .9,
                showDetails: o,
                showPreview: o,
                hideAfterTabSelection: o,
                searchInURLs: o
            }
        };
    "chrome" === n.a && (s.popup.showPreview = i, s.popup.hideAfterTabSelection = a)
}, function(e, t, r) {
    "use strict";
    r.d(t, "a", (function() {
        return n
    }));
    r(0);

    function n(e, t) {
        return browser.runtime.sendMessage({
            type: e,
            data: t
        })
    }
}, , , , , function(e, t, r) {
    "use strict";
    r.r(t);
    r(0);
    var n = {
        wrongToRight: void 0,
        lastTabId: void 0,
        currentTabId: void 0,
        lastWindowId: void 0,
        currentWindowId: void 0,
        dropCurrentTabId: !1,
        dropCurrentWindowId: !1,
        windowProperties: {},
        events: {
            onpopuploaded: void 0,
            onpopupunloaded: void 0
        }
    };
    async function o() {
        await browser.contextMenus.removeAll(), await browser.contextMenus.create({
            id: "tabby-send-tab-to",
            title: "Send Tab to...",
            contexts: ["all"]
        });
        let e = await browser.windows.getAll({
            populate: !1,
            windowTypes: ["normal"]
        });
        for (let t = 0; t < e.length; t++) {
            let r = e[t].id;
            await browser.contextMenus.create({
                parentId: "tabby-send-tab-to",
                title: n.windowProperties.hasOwnProperty(r.toString()) ? n.windowProperties[r.toString()].name : "Window " + (t + 1),
                onclick: (e, t) => {
                    browser.tabs.move(t.id, {
                        windowId: parseInt(r),
                        index: -1
                    })
                }
            })
        }
        await browser.contextMenus.create({
            parentId: "tabby-send-tab-to",
            type: "separator"
        }), await browser.contextMenus.create({
            parentId: "tabby-send-tab-to",
            title: "A New Window",
            onclick: (e, t) => {
                browser.windows.create({
                    tabId: t.id,
                    incognito: t.incognito
                })
            }
        })
    }

    function a(e, t) {
        return t ? (n.windowProperties.hasOwnProperty(e) || (n.windowProperties[e] = {}), n.windowProperties[e].name = t) : delete n.windowProperties[e], o()
    }

    function d() {
        return n.windowProperties
    }
    async function i(e) {
        return {
            url: e.url,
            title: e.title,
            active: e.active,
            muted: e.mutedInfo.muted,
            pinned: e.pinned,
            container: e.hasOwnProperty("cookieStoreId") && !["firefox-default", "firefox-private"].includes(e.cookieStoreId) ? {
                id: e.cookieStoreId,
                name: (await browser.contextualIdentities.get(e.cookieStoreId)).name
            } : null
        }
    }
    async function s(e, t = null, r = "Default") {
        void 0 === e && (e = (await browser.windows.getAll()).map(e => e.id));
        let n = await async function(e, t = null) {
            let r = Date.now(),
                n = d(),
                o = [];
            for (let t of e) {
                let e = [],
                    {
                        tabs: r,
                        incognito: a
                    } = await browser.windows.get(t, {
                        populate: !0
                    });
                for (let t of r) await browser.tabs.sendMessage(t.id, {
                    target: "packd",
                    data: {
                        action: "pack"
                    }
                }).then(async r => {
                    e.push(Object.assign({
                        pack: r
                    }, await i(t)))
                }).catch(async r => {
                    e.push(Object.assign({
                        pack: void 0
                    }, await i(t)))
                });
                o.push({
                    name: n.hasOwnProperty(t) ? n[t].name : null,
                    incognito: a,
                    tabs: e
                })
            }
            return {
                name: t,
                timestamp: r,
                windows: o
            }
        }(e, t), o = await browser.storage.sync.get(["save-for-later"]);
        return void 0 !== o["save-for-later"].channels[r] && (o["save-for-later"].channels[r].records.length >= o["save-for-later"].channels[r]["maximum-number-of-records"] && o["save-for-later"].channels[r].records.shift(), o["save-for-later"]["last-modified-channel"] = r, o["save-for-later"].channels[r].records.push(n)), browser.storage.sync.set(o)
    }

