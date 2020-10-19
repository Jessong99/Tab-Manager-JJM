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
            function u(e, t) {
                browser.runtime.sendMessage({
                    type: t,
                    details: e
                })
            }
            n.wrongToRight = {};
            let c = {};

            function w(e) {
                return n.wrongToRight[e] || e
            }
            browser.tabs.onAttached.addListener((function (e, t) {
                browser.tabs.get(e).then((function (t) {
                    if (e !== t.id) {
                        let r = c[e];
                        r && delete n.wrongToRight[r], n.wrongToRight[t.id] = e, c[e] = t.id
                    }
                }))
            })), browser.tabs.onRemoved.addListener((function (e, t) {
                let r = c[e];
                r && delete n.wrongToRight[r];
                delete c[e]
            }));
            var l = r(2);
            var b = r(1);

            function p(e) {
                "update" === e.reason && browser.windows.create({
                    //url: "https://github.com/Jessong99/Tab-Manager"
                }), "install" !== e.reason && "update" !== e.reason || (browser.storage.local.get(["options"]).then(e => {
                    void 0 === e.options && (e.options = b.a, browser.storage.local.set(e))
                }), browser.storage.sync.get(["save-for-later", "record"]).then(e => {
                    void 0 === e["save-for-later"] && (e["save-for-later"] = {
                        version: 2.1,
                        "last-modified-channel": "Default",
                        channels: {
                            Default: {
                                "maximum-number-of-records": 1,
                                records: []
                            }
                        }
                    }, browser.storage.sync.set(e).then(() => {
                        void 0 !== e.record && (e["save-for-later"].channels.Default.records.push({
                            name: null,
                            timestamp: e.record.timestamp,
                            windows: e.record.record.map(e => ({
                                name: null,
                                incognito: !1,
                                tabs: e.map(e => Object.assign({
                                    container: null,
                                    title: e.url,
                                    active: !1,
                                    muted: !1
                                }, e))
                            }))
                        }), delete e.record, browser.storage.sync.set(e))
                    }))
                }))
            }
            browser.runtime.onInstalled.hasListener(p) || browser.runtime.onInstalled.addListener(p), browser.tabs.query({
                active: !0,
                currentWindow: !0
            }).then(e => {
                n.currentTabId = e[0].id, n.dropCurrentTabId = !0
            }), browser.windows.getLastFocused({}).then(e => {
                n.currentWindowId = e.id, n.dropCurrentWindowId = !0
            }), browser.tabs.onUpdated.addListener((function (e, t, r) {
                void 0 !== t.favIconUrl && u({
                    tabId: w(e),
                    favIconUrl: t.favIconUrl
                }, "TAB_FAV_ICON_CHANGED"), void 0 !== t.pinned && u({
                    tabId: w(e),
                    pinned: t.pinned
                }, "TAB_PINNED_STATUS_CHANGED"), void 0 !== t.title && u({
                    tabId: w(e),
                    title: t.title
                }, "TAB_TITLE_CHANGED"), void 0 !== t.audible && u({
                    tabId: w(e),
                    audible: t.audible
                }, "TAB_AUDIBLE_CHANGED"), void 0 !== t.mutedInfo && u({
                    tabId: w(e),
                    mutedInfo: t.mutedInfo
                }, "TAB_MUTE_CHANGED")
            })), browser.tabs.onActivated.addListener((function (e) {
                u({
                    windowId: e.windowId,
                    tabId: e.tabId
                }, "ACTIVE_TAB_CHANGED"), n.dropCurrentTabId ? n.lastTabId = n.currentTabId : n.dropCurrentTabId = !0, n.currentTabId = e.tabId
            })), browser.tabs.onRemoved.addListener((function (e, t) {
                u({
                    tabId: e,
                    windowId: t.windowId,
                    windowClosing: t.isWindowClosing
                }, "TAB_REMOVED"), n.lastTabId === e && (n.lastTabId = void 0), n.currentTabId === e && (n.currentTabId = void 0, n.dropCurrentTabId = !1)
            })), browser.windows.onRemoved.addListener((function (e) {
                u({
                    windowId: e
                }, "WINDOW_REMOVED"), n.lastWindowId === e && (n.lastWindowId = void 0), n.currentWindowId === e && (n.currentWindowId = void 0, n.dropCurrentWindowId = !1), o()
            })), browser.windows.onFocusChanged.addListener((function (e) {
                e !== browser.windows.WINDOW_ID_NONE && (n.dropCurrentWindowId ? n.lastWindowId = n.currentWindowId : n.dropCurrentWindowId = !0, n.currentWindowId = e, browser.tabs.query({
                    active: !0,
                    windowId: e
                }).then(e => {
                    e[0].id !== n.currentTabId && (n.dropCurrentTabId ? n.lastTabId = n.currentTabId : n.dropCurrentTabId = !0, n.currentTabId = e[0].id)
                }))
            })), browser.windows.onCreated.addListener((function (e) {
                o()
            })), browser.commands.onCommand.addListener((function (e) {
                switch (e) {
                    case "last-used-tab":
                        void 0 !== n.lastTabId && (browser.tabs.update(n.lastTabId, {
                            active: !0
                        }), browser.windows.getLastFocused({}).then(e => {
                            browser.tabs.get(n.lastTabId).then(t => {
                                e.id !== t.windowId && (browser.windows.update(t.windowId, {
                                    focused: !0
                                }), n.lastTabId = n.currentTabId)
                            })
                        }));
                        break;
                    case "last-used-window":
                        void 0 !== n.lastWindowId && browser.windows.update(n.lastWindowId, {
                            focused: !0
                        });
                        break;
                    case "open-tabby-focus-current":
                        browser.browserAction.openPopup().then(() => {
                            n.events.onpopuploaded = () => {
                                Object(l.a)("INIT__PUT_FOCUS_ON_CURRENT", {})
                            }, n.events.onpopupunloaded = () => {
                                n.events.onpopuploaded = void 0, n.events.onpopupunloaded = void 0
                            }
                        })
                }
            })), browser.runtime.onMessage.addListener((function (e, t) {
                switch (e.type) {
                    case "INIT__POPUP_LOADED":
                        n.events.onpopuploaded && n.events.onpopuploaded();
                        break;
                    case "POPUP_UNLOADED":
                        n.events.onpopupunloaded && n.events.onpopupunloaded();
                        break;
                    case "WRONG_TO_RIGHT_GET":
                        return Promise.resolve({
                            wrongToRight: n.wrongToRight
                        });
                    case "SET_WINDOW_PROPS":
                        return a(e.data.windowId, e.data.name);
                    case "GET_WINDOW_PROPS":
                        return Promise.resolve({
                            windowProperties: d()
                        });
                    case "RESTORE_WINDOW":
                        return r = e.data.windowRecord, browser.runtime.getBrowserInfo && (r.tabs = r.tabs.filter(e => (!e.url.startsWith("about:") || ["about:blank", "about:newtab"].includes(e.url)) && !e.url.startsWith("chrome:") && !e.url.startsWith("javascript:") && !e.url.startsWith("data:") && !e.url.startsWith("file:"))), browser.windows.create({
                            incognito: r.incognito
                        }).then(async e => {
                            let t = e.tabs[0].id,
                                n = !1;
                            await a(e.id, r.name);
                            for (let o = 0; o < r.tabs.length; o++) {
                                let a = r.tabs[o];
                                browser.tabs.create(Object.assign(a.container ? {
                                    cookieStoreId: a.container.id
                                } : {}, {
                                        url: a.url,
                                        active: a.active,
                                        pinned: a.pinned,
                                        windowId: e.id
                                    })).then(async e => {
                                        var r, o;
                                        browser.tabs.update(e.id, {
                                            muted: a.muted
                                        }), a.pack && await (r = e.id, o = () => {
                                            browser.tabs.sendMessage(e.id, {
                                                target: "packd",
                                                data: Object.assign({
                                                    action: "unpack"
                                                }, a.pack)
                                            })
                                        }, new Promise((e, t) => {
                                            let n = (t, a) => {
                                                t === r && "complete" === a.status && (browser.tabs.onUpdated.removeListener(n), e(o()))
                                            };
                                            browser.tabs.onUpdated.addListener(n)
                                        })), n || (n = !0, browser.tabs.remove(t))
                                    }).catch(e => {
                                        console.log(e)
                                    })
                            }
                        });
                    case "RECORD":
                        return s(e.data.id, e.data.name, e.data.channelName)
                }
                var r
            })), o()
        }]);