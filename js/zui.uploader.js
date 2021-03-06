/*!
 * ZUI: 文件上传 - v1.9.1 - 2019-05-10
 * http://zui.sexy
 * GitHub: https://github.com/easysoft/zui.git 
 * Copyright (c) 2019 cnezsoft.com; Licensed MIT
 */
! function(e, t) {
    var i = function() {
        var e = {};
        return t.apply(e, arguments), e.moxie
    };
    "function" == typeof define && define.amd ? define("moxie", [], i) : "object" == typeof module && module.exports ? module.exports = i() : e.moxie = i()
}(this || window, function() {
    ! function(e, t) {
        "use strict";

        function i(e, t) {
            for (var i, n = [], r = 0; r < e.length; ++r) {
                if (i = s[e[r]] || o(e[r]), !i) throw "module definition dependecy not found: " + e[r];
                n.push(i)
            }
            t.apply(null, n)
        }

        function n(e, n, r) {
            if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
            if (n === t) throw "invalid module definition, dependencies must be specified";
            if (r === t) throw "invalid module definition, definition function must be specified";
            i(n, function() {
                s[e] = r.apply(null, arguments)
            })
        }

        function r(e) {
            return !!s[e]
        }

        function o(t) {
            for (var i = e, n = t.split(/[.\/]/), r = 0; r < n.length; ++r) {
                if (!i[n[r]]) return;
                i = i[n[r]]
            }
            return i
        }

        function a(i) {
            for (var n = 0; n < i.length; n++) {
                for (var r = e, o = i[n], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l) r[a[l]] === t && (r[a[l]] = {}), r = r[a[l]];
                r[a[a.length - 1]] = s[o]
            }
        }
        var s = {};
        n("moxie/core/utils/Basic", [], function() {
            function e(e) {
                var t;
                return e === t ? "undefined" : null === e ? "null" : e.nodeType ? "node" : {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
            }

            function t() {
                return s(!1, !1, arguments)
            }

            function i() {
                return s(!0, !1, arguments)
            }

            function n() {
                return s(!1, !0, arguments)
            }

            function r() {
                return s(!0, !0, arguments)
            }

            function o(t) {
                switch (e(t)) {
                    case "array":
                        return s(!1, !0, [
                            [], t
                        ]);
                    case "object":
                        return s(!1, !0, [{}, t]);
                    default:
                        return t
                }
            }

            function a(i) {
                switch (e(i)) {
                    case "array":
                        return Array.prototype.slice.call(i);
                    case "object":
                        return t({}, i)
                }
                return i
            }

            function s(t, i, n) {
                var r, o = n[0];
                return u(n, function(n, l) {
                    l > 0 && u(n, function(n, l) {
                        var u = -1 !== f(e(n), ["array", "object"]);
                        return !!(n === r || t && o[l] === r) || (u && i && (n = a(n)), void(e(o[l]) === e(n) && u ? s(t, i, [o[l], n]) : o[l] = n))
                    })
                }), o
            }

            function l(e, t) {
                function i() {
                    this.constructor = e
                }
                for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return i.prototype = t.prototype, e.prototype = new i, e.parent = t.prototype, e
            }

            function u(e, t) {
                var i, n, r, o;
                if (e) {
                    try {
                        i = e.length
                    } catch (a) {
                        i = o
                    }
                    if (i === o || "number" != typeof i) {
                        for (n in e)
                            if (e.hasOwnProperty(n) && t(e[n], n) === !1) return
                    } else
                        for (r = 0; i > r; r++)
                            if (t(e[r], r) === !1) return
                }
            }

            function c(t) {
                var i;
                if (!t || "object" !== e(t)) return !0;
                for (i in t) return !1;
                return !0
            }

            function d(t, i) {
                function n(r) {
                    "function" === e(t[r]) && t[r](function(e) {
                        ++r < o && !e ? n(r) : i(e)
                    })
                }
                var r = 0,
                    o = t.length;
                "function" !== e(i) && (i = function() {}), t && t.length || i(), n(r)
            }

            function p(e, t) {
                var i = 0,
                    n = e.length,
                    r = new Array(n);
                u(e, function(e, o) {
                    e(function(e) {
                        if (e) return t(e);
                        var a = [].slice.call(arguments);
                        a.shift(), r[o] = a, i++, i === n && (r.unshift(null), t.apply(this, r))
                    })
                })
            }

            function f(e, t) {
                if (t) {
                    if (Array.prototype.indexOf) return Array.prototype.indexOf.call(t, e);
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i
                }
                return -1
            }

            function m(t, i) {
                var n = [];
                "array" !== e(t) && (t = [t]), "array" !== e(i) && (i = [i]);
                for (var r in t) - 1 === f(t[r], i) && n.push(t[r]);
                return !!n.length && n
            }

            function h(e, t) {
                var i = [];
                return u(e, function(e) {
                    -1 !== f(e, t) && i.push(e)
                }), i.length ? i : null
            }

            function g(e) {
                var t, i = [];
                for (t = 0; t < e.length; t++) i[t] = e[t];
                return i
            }

            function v(e) {
                return e ? String.prototype.trim ? String.prototype.trim.call(e) : e.toString().replace(/^\s*/, "").replace(/\s*$/, "") : e
            }

            function x(e) {
                if ("string" != typeof e) return e;
                var t, i = {
                    t: 1099511627776,
                    g: 1073741824,
                    m: 1048576,
                    k: 1024
                };
                return e = /^([0-9\.]+)([tmgk]?)$/.exec(e.toLowerCase().replace(/[^0-9\.tmkg]/g, "")), t = e[2], e = +e[1], i.hasOwnProperty(t) && (e *= i[t]), Math.floor(e)
            }

            function E(e) {
                var t = [].slice.call(arguments, 1);
                return e.replace(/%([a-z])/g, function(e, i) {
                    var n = t.shift();
                    switch (i) {
                        case "s":
                            return n + "";
                        case "d":
                            return parseInt(n, 10);
                        case "f":
                            return parseFloat(n);
                        case "c":
                            return "";
                        default:
                            return n
                    }
                })
            }

            function y(e, t) {
                var i = this;
                setTimeout(function() {
                    e.call(i)
                }, t || 1)
            }
            var b = function() {
                var e = 0;
                return function(t) {
                    var i, n = (new Date).getTime().toString(32);
                    for (i = 0; 5 > i; i++) n += Math.floor(65535 * Math.random()).toString(32);
                    return (t || "o_") + n + (e++).toString(32)
                }
            }();
            return {
                guid: b,
                typeOf: e,
                extend: t,
                extendIf: i,
                extendImmutable: n,
                extendImmutableIf: r,
                clone: o,
                inherit: l,
                each: u,
                isEmptyObj: c,
                inSeries: d,
                inParallel: p,
                inArray: f,
                arrayDiff: m,
                arrayIntersect: h,
                toArray: g,
                trim: v,
                sprintf: E,
                parseSizeStr: x,
                delay: y
            }
        }), n("moxie/core/utils/Encode", [], function() {
            var e = function(e) {
                    return unescape(encodeURIComponent(e))
                },
                t = function(e) {
                    return decodeURIComponent(escape(e))
                },
                i = function(e, i) {
                    if ("function" == typeof window.atob) return i ? t(window.atob(e)) : window.atob(e);
                    var n, r, o, a, s, l, u, c, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        p = 0,
                        f = 0,
                        m = "",
                        h = [];
                    if (!e) return e;
                    e += "";
                    do a = d.indexOf(e.charAt(p++)), s = d.indexOf(e.charAt(p++)), l = d.indexOf(e.charAt(p++)), u = d.indexOf(e.charAt(p++)), c = a << 18 | s << 12 | l << 6 | u, n = 255 & c >> 16, r = 255 & c >> 8, o = 255 & c, h[f++] = 64 == l ? String.fromCharCode(n) : 64 == u ? String.fromCharCode(n, r) : String.fromCharCode(n, r, o); while (p < e.length);
                    return m = h.join(""), i ? t(m) : m
                },
                n = function(t, i) {
                    if (i && (t = e(t)), "function" == typeof window.btoa) return window.btoa(t);
                    var n, r, o, a, s, l, u, c, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        p = 0,
                        f = 0,
                        m = "",
                        h = [];
                    if (!t) return t;
                    do n = t.charCodeAt(p++), r = t.charCodeAt(p++), o = t.charCodeAt(p++), c = n << 16 | r << 8 | o, a = 63 & c >> 18, s = 63 & c >> 12, l = 63 & c >> 6, u = 63 & c, h[f++] = d.charAt(a) + d.charAt(s) + d.charAt(l) + d.charAt(u); while (p < t.length);
                    m = h.join("");
                    var g = t.length % 3;
                    return (g ? m.slice(0, g - 3) : m) + "===".slice(g || 3)
                };
            return {
                utf8_encode: e,
                utf8_decode: t,
                atob: i,
                btoa: n
            }
        }), n("moxie/core/utils/Env", ["moxie/core/utils/Basic"], function(e) {
            function i(e, t, i) {
                var n = 0,
                    r = 0,
                    o = 0,
                    a = {
                        dev: -6,
                        alpha: -5,
                        a: -5,
                        beta: -4,
                        b: -4,
                        RC: -3,
                        rc: -3,
                        "#": -2,
                        p: 1,
                        pl: 1
                    },
                    s = function(e) {
                        return e = ("" + e).replace(/[_\-+]/g, "."), e = e.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), e.length ? e.split(".") : [-8]
                    },
                    l = function(e) {
                        return e ? isNaN(e) ? a[e] || -7 : parseInt(e, 10) : 0
                    };
                for (e = s(e), t = s(t), r = Math.max(e.length, t.length), n = 0; r > n; n++)
                    if (e[n] != t[n]) {
                        if (e[n] = l(e[n]), t[n] = l(t[n]), e[n] < t[n]) {
                            o = -1;
                            break
                        }
                        if (e[n] > t[n]) {
                            o = 1;
                            break
                        }
                    } if (!i) return o;
                switch (i) {
                    case ">":
                    case "gt":
                        return o > 0;
                    case ">=":
                    case "ge":
                        return o >= 0;
                    case "<=":
                    case "le":
                        return 0 >= o;
                    case "==":
                    case "=":
                    case "eq":
                        return 0 === o;
                    case "<>":
                    case "!=":
                    case "ne":
                        return 0 !== o;
                    case "":
                    case "<":
                    case "lt":
                        return 0 > o;
                    default:
                        return null
                }
            }
            var n = function(e) {
                    var t = "",
                        i = "?",
                        n = "function",
                        r = "undefined",
                        o = "object",
                        a = "name",
                        s = "version",
                        l = {
                            has: function(e, t) {
                                return -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                            },
                            lowerize: function(e) {
                                return e.toLowerCase()
                            }
                        },
                        u = {
                            rgx: function() {
                                for (var t, i, a, s, l, u, c, d = 0, p = arguments; d < p.length; d += 2) {
                                    var f = p[d],
                                        m = p[d + 1];
                                    if (typeof t === r) {
                                        t = {};
                                        for (s in m) l = m[s], typeof l === o ? t[l[0]] = e : t[l] = e
                                    }
                                    for (i = a = 0; i < f.length; i++)
                                        if (u = f[i].exec(this.getUA())) {
                                            for (s = 0; s < m.length; s++) c = u[++a], l = m[s], typeof l === o && l.length > 0 ? 2 == l.length ? t[l[0]] = typeof l[1] == n ? l[1].call(this, c) : l[1] : 3 == l.length ? t[l[0]] = typeof l[1] !== n || l[1].exec && l[1].test ? c ? c.replace(l[1], l[2]) : e : c ? l[1].call(this, c, l[2]) : e : 4 == l.length && (t[l[0]] = c ? l[3].call(this, c.replace(l[1], l[2])) : e) : t[l] = c ? c : e;
                                            break
                                        } if (u) break
                                }
                                return t
                            },
                            str: function(t, n) {
                                for (var r in n)
                                    if (typeof n[r] === o && n[r].length > 0) {
                                        for (var a = 0; a < n[r].length; a++)
                                            if (l.has(n[r][a], t)) return r === i ? e : r
                                    } else if (l.has(n[r], t)) return r === i ? e : r;
                                return t
                            }
                        },
                        c = {
                            browser: {
                                oldsafari: {
                                    major: {
                                        1: ["/8", "/1", "/3"],
                                        2: "/4",
                                        "?": "/"
                                    },
                                    version: {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/"
                                    }
                                }
                            },
                            device: {
                                sprint: {
                                    model: {
                                        "Evo Shift 4G": "7373KT"
                                    },
                                    vendor: {
                                        HTC: "APA",
                                        Sprint: "Sprint"
                                    }
                                }
                            },
                            os: {
                                windows: {
                                    version: {
                                        ME: "4.90",
                                        "NT 3.11": "NT3.51",
                                        "NT 4.0": "NT4.0",
                                        2e3: "NT 5.0",
                                        XP: ["NT 5.1", "NT 5.2"],
                                        Vista: "NT 6.0",
                                        7: "NT 6.1",
                                        8: "NT 6.2",
                                        8.1: "NT 6.3",
                                        RT: "ARM"
                                    }
                                }
                            }
                        },
                        d = {
                            browser: [
                                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                                [a, s],
                                [/\s(opr)\/([\w\.]+)/i],
                                [
                                    [a, "Opera"], s
                                ],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i],
                                [a, s],
                                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                                [
                                    [a, "IE"], s
                                ],
                                [/(edge)\/((\d+)?[\w\.]+)/i],
                                [a, s],
                                [/(yabrowser)\/([\w\.]+)/i],
                                [
                                    [a, "Yandex"], s
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [a, /_/g, " "], s
                                ],
                                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],
                                [a, s],
                                [/(dolfin)\/([\w\.]+)/i],
                                [
                                    [a, "Dolphin"], s
                                ],
                                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                                [
                                    [a, "Chrome"], s
                                ],
                                [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                                [s, [a, "MIUI Browser"]],
                                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                                [s, [a, "Android Browser"]],
                                [/FBAV\/([\w\.]+);/i],
                                [s, [a, "Facebook"]],
                                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                                [s, [a, "Mobile Safari"]],
                                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                                [s, a],
                                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                [a, [s, u.str, c.browser.oldsafari.version]],
                                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                                [a, s],
                                [/(navigator|netscape)\/([\w\.-]+)/i],
                                [
                                    [a, "Netscape"], s
                                ],
                                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                                [a, s]
                            ],
                            engine: [
                                [/windows.+\sedge\/([\w\.]+)/i],
                                [s, [a, "EdgeHTML"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                                [a, s],
                                [/rv\:([\w\.]+).*(gecko)/i],
                                [s, a]
                            ],
                            os: [
                                [/microsoft\s(windows)\s(vista|xp)/i],
                                [a, s],
                                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                                [a, [s, u.str, c.os.windows.version]],
                                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                [
                                    [a, "Windows"],
                                    [s, u.str, c.os.windows.version]
                                ],
                                [/\((bb)(10);/i],
                                [
                                    [a, "BlackBerry"], s
                                ],
                                [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                                [a, s],
                                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                                [
                                    [a, "Symbian"], s
                                ],
                                [/\((series40);/i],
                                [a],
                                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                [
                                    [a, "Firefox OS"], s
                                ],
                                [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                                [a, s],
                                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                [
                                    [a, "Chromium OS"], s
                                ],
                                [/(sunos)\s?([\w\.]+\d)*/i],
                                [
                                    [a, "Solaris"], s
                                ],
                                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                                [a, s],
                                [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                                [
                                    [a, "iOS"],
                                    [s, /_/g, "."]
                                ],
                                [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                                [
                                    [a, "Mac OS"],
                                    [s, /_/g, "."]
                                ],
                                [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                                [a, s]
                            ]
                        },
                        p = function(e) {
                            var i = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : t);
                            this.getBrowser = function() {
                                return u.rgx.apply(this, d.browser)
                            }, this.getEngine = function() {
                                return u.rgx.apply(this, d.engine)
                            }, this.getOS = function() {
                                return u.rgx.apply(this, d.os)
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS()
                                }
                            }, this.getUA = function() {
                                return i
                            }, this.setUA = function(e) {
                                return i = e, this
                            }, this.setUA(i)
                        };
                    return p
                }(),
                r = function() {
                    var i = {
                        access_global_ns: function() {
                            return !!window.moxie
                        },
                        define_property: function() {
                            return !1
                        }(),
                        create_canvas: function() {
                            var e = document.createElement("canvas"),
                                t = !(!e.getContext || !e.getContext("2d"));
                            return i.create_canvas = t, t
                        },
                        return_response_type: function(t) {
                            try {
                                if (-1 !== e.inArray(t, ["", "text", "document"])) return !0;
                                if (window.XMLHttpRequest) {
                                    var i = new XMLHttpRequest;
                                    if (i.open("get", "/"), "responseType" in i) return i.responseType = t, i.responseType === t
                                }
                            } catch (n) {}
                            return !1
                        },
                        use_blob_uri: function() {
                            var e = window.URL;
                            return i.use_blob_uri = e && "createObjectURL" in e && "revokeObjectURL" in e && ("IE" !== a.browser || a.verComp(a.version, "11.0.46", ">=")), i.use_blob_uri
                        },
                        use_data_uri: function() {
                            var e = new Image;
                            return e.onload = function() {
                                i.use_data_uri = 1 === e.width && 1 === e.height
                            }, setTimeout(function() {
                                e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                            }, 1), !1
                        }(),
                        use_data_uri_over32kb: function() {
                            return i.use_data_uri && ("IE" !== a.browser || a.version >= 9)
                        },
                        use_data_uri_of: function(e) {
                            return i.use_data_uri && 33e3 > e || i.use_data_uri_over32kb()
                        },
                        use_fileinput: function() {
                            if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
                            var e = document.createElement("input");
                            return e.setAttribute("type", "file"), i.use_fileinput = !e.disabled
                        },
                        use_webgl: function() {
                            var e, n = document.createElement("canvas"),
                                r = null;
                            try {
                                r = n.getContext("webgl") || n.getContext("experimental-webgl")
                            } catch (o) {}
                            return r || (r = null), e = !!r, i.use_webgl = e, n = t, e
                        }
                    };
                    return function(t) {
                        var n = [].slice.call(arguments);
                        return n.shift(), "function" === e.typeOf(i[t]) ? i[t].apply(this, n) : !!i[t]
                    }
                }(),
                o = (new n).getResult(),
                a = {
                    can: r,
                    uaParser: n,
                    browser: o.browser.name,
                    version: o.browser.version,
                    os: o.os.name,
                    osVersion: o.os.version,
                    verComp: i,
                    swf_url: "../flash/Moxie.swf",
                    xap_url: "../silverlight/Moxie.xap",
                    global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
                };
            return a.OS = a.os, a
        }), n("moxie/core/Exceptions", ["moxie/core/utils/Basic"], function(e) {
            function t(e, t) {
                var i;
                for (i in e)
                    if (e[i] === t) return i;
                return null
            }
            return {
                RuntimeError: function() {
                    function i(e, i) {
                        this.code = e, this.name = t(n, e), this.message = this.name + (i || ": RuntimeError " + this.code)
                    }
                    var n = {
                        NOT_INIT_ERR: 1,
                        EXCEPTION_ERR: 3,
                        NOT_SUPPORTED_ERR: 9,
                        JS_ERR: 4
                    };
                    return e.extend(i, n), i.prototype = Error.prototype, i
                }(),
                OperationNotAllowedException: function() {
                    function t(e) {
                        this.code = e, this.name = "OperationNotAllowedException"
                    }
                    return e.extend(t, {
                        NOT_ALLOWED_ERR: 1
                    }), t.prototype = Error.prototype, t
                }(),
                ImageError: function() {
                    function i(e) {
                        this.code = e, this.name = t(n, e), this.message = this.name + ": ImageError " + this.code
                    }
                    var n = {
                        WRONG_FORMAT: 1,
                        MAX_RESOLUTION_ERR: 2,
                        INVALID_META_ERR: 3
                    };
                    return e.extend(i, n), i.prototype = Error.prototype, i
                }(),
                FileException: function() {
                    function i(e) {
                        this.code = e, this.name = t(n, e), this.message = this.name + ": FileException " + this.code
                    }
                    var n = {
                        NOT_FOUND_ERR: 1,
                        SECURITY_ERR: 2,
                        ABORT_ERR: 3,
                        NOT_READABLE_ERR: 4,
                        ENCODING_ERR: 5,
                        NO_MODIFICATION_ALLOWED_ERR: 6,
                        INVALID_STATE_ERR: 7,
                        SYNTAX_ERR: 8
                    };
                    return e.extend(i, n), i.prototype = Error.prototype, i
                }(),
                DOMException: function() {
                    function i(e) {
                        this.code = e, this.name = t(n, e), this.message = this.name + ": DOMException " + this.code
                    }
                    var n = {
                        INDEX_SIZE_ERR: 1,
                        DOMSTRING_SIZE_ERR: 2,
                        HIERARCHY_REQUEST_ERR: 3,
                        WRONG_DOCUMENT_ERR: 4,
                        INVALID_CHARACTER_ERR: 5,
                        NO_DATA_ALLOWED_ERR: 6,
                        NO_MODIFICATION_ALLOWED_ERR: 7,
                        NOT_FOUND_ERR: 8,
                        NOT_SUPPORTED_ERR: 9,
                        INUSE_ATTRIBUTE_ERR: 10,
                        INVALID_STATE_ERR: 11,
                        SYNTAX_ERR: 12,
                        INVALID_MODIFICATION_ERR: 13,
                        NAMESPACE_ERR: 14,
                        INVALID_ACCESS_ERR: 15,
                        VALIDATION_ERR: 16,
                        TYPE_MISMATCH_ERR: 17,
                        SECURITY_ERR: 18,
                        NETWORK_ERR: 19,
                        ABORT_ERR: 20,
                        URL_MISMATCH_ERR: 21,
                        QUOTA_EXCEEDED_ERR: 22,
                        TIMEOUT_ERR: 23,
                        INVALID_NODE_TYPE_ERR: 24,
                        DATA_CLONE_ERR: 25
                    };
                    return e.extend(i, n), i.prototype = Error.prototype, i
                }(),
                EventException: function() {
                    function t(e) {
                        this.code = e, this.name = "EventException"
                    }
                    return e.extend(t, {
                        UNSPECIFIED_EVENT_TYPE_ERR: 0
                    }), t.prototype = Error.prototype, t
                }()
            }
        }), n("moxie/core/utils/Dom", ["moxie/core/utils/Env"], function(e) {
            var t = function(e) {
                    return "string" != typeof e ? e : document.getElementById(e)
                },
                i = function(e, t) {
                    if (!e.className) return !1;
                    var i = new RegExp("(^|\\s+)" + t + "(\\s+|$)");
                    return i.test(e.className)
                },
                n = function(e, t) {
                    i(e, t) || (e.className = e.className ? e.className.replace(/\s+$/, "") + " " + t : t)
                },
                r = function(e, t) {
                    if (e.className) {
                        var i = new RegExp("(^|\\s+)" + t + "(\\s+|$)");
                        e.className = e.className.replace(i, function(e, t, i) {
                            return " " === t && " " === i ? " " : ""
                        })
                    }
                },
                o = function(e, t) {
                    return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null)[t] : void 0
                },
                a = function(t, i) {
                    function n(e) {
                        var t, i, n = 0,
                            r = 0;
                        return e && (i = e.getBoundingClientRect(), t = "CSS1Compat" === u.compatMode ? u.documentElement : u.body, n = i.left + t.scrollLeft, r = i.top + t.scrollTop), {
                            x: n,
                            y: r
                        }
                    }
                    var r, o, a, s = 0,
                        l = 0,
                        u = document;
                    if (t = t, i = i || u.body, t && t.getBoundingClientRect && "IE" === e.browser && (!u.documentMode || u.documentMode < 8)) return o = n(t), a = n(i), {
                        x: o.x - a.x,
                        y: o.y - a.y
                    };
                    for (r = t; r && r != i && r.nodeType;) s += r.offsetLeft || 0, l += r.offsetTop || 0, r = r.offsetParent;
                    for (r = t.parentNode; r && r != i && r.nodeType;) s -= r.scrollLeft || 0, l -= r.scrollTop || 0, r = r.parentNode;
                    return {
                        x: s,
                        y: l
                    }
                },
                s = function(e) {
                    return {
                        w: e.offsetWidth || e.clientWidth,
                        h: e.offsetHeight || e.clientHeight
                    }
                };
            return {
                get: t,
                hasClass: i,
                addClass: n,
                removeClass: r,
                getStyle: o,
                getPos: a,
                getSize: s
            }
        }), n("moxie/core/EventTarget", ["moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic"], function(e, t, i) {
            function n() {
                this.uid = i.guid()
            }
            var r = {};
            return i.extend(n.prototype, {
                init: function() {
                    this.uid || (this.uid = i.guid("uid_"))
                },
                addEventListener: function(e, t, n, o) {
                    var a, s = this;
                    return this.hasOwnProperty("uid") || (this.uid = i.guid("uid_")), e = i.trim(e), /\s/.test(e) ? void i.each(e.split(/\s+/), function(e) {
                        s.addEventListener(e, t, n, o)
                    }) : (e = e.toLowerCase(), n = parseInt(n, 10) || 0, a = r[this.uid] && r[this.uid][e] || [], a.push({
                        fn: t,
                        priority: n,
                        scope: o || this
                    }), r[this.uid] || (r[this.uid] = {}), void(r[this.uid][e] = a))
                },
                hasEventListener: function(e) {
                    var t;
                    return e ? (e = e.toLowerCase(), t = r[this.uid] && r[this.uid][e]) : t = r[this.uid], !!t && t
                },
                removeEventListener: function(e, t) {
                    var n, o, a = this;
                    if (e = e.toLowerCase(), /\s/.test(e)) return void i.each(e.split(/\s+/), function(e) {
                        a.removeEventListener(e, t)
                    });
                    if (n = r[this.uid] && r[this.uid][e]) {
                        if (t) {
                            for (o = n.length - 1; o >= 0; o--)
                                if (n[o].fn === t) {
                                    n.splice(o, 1);
                                    break
                                }
                        } else n = [];
                        n.length || (delete r[this.uid][e], i.isEmptyObj(r[this.uid]) && delete r[this.uid])
                    }
                },
                removeAllEventListeners: function() {
                    r[this.uid] && delete r[this.uid]
                },
                dispatchEvent: function(e) {
                    var n, o, a, s, l, u = {},
                        c = !0;
                    if ("string" !== i.typeOf(e)) {
                        if (s = e, "string" !== i.typeOf(s.type)) throw new t.EventException(t.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
                        e = s.type, s.total !== l && s.loaded !== l && (u.total = s.total, u.loaded = s.loaded), u.async = s.async || !1
                    }
                    if (-1 !== e.indexOf("::") ? function(t) {
                            n = t[0], e = t[1]
                        }(e.split("::")) : n = this.uid, e = e.toLowerCase(), o = r[n] && r[n][e]) {
                        o.sort(function(e, t) {
                            return t.priority - e.priority
                        }), a = [].slice.call(arguments), a.shift(), u.type = e, a.unshift(u);
                        var d = [];
                        i.each(o, function(e) {
                            a[0].target = e.scope, u.async ? d.push(function(t) {
                                setTimeout(function() {
                                    t(e.fn.apply(e.scope, a) === !1)
                                }, 1)
                            }) : d.push(function(t) {
                                t(e.fn.apply(e.scope, a) === !1)
                            })
                        }), d.length && i.inSeries(d, function(e) {
                            c = !e
                        })
                    }
                    return c
                },
                bindOnce: function(e, t, i, n) {
                    var r = this;
                    r.bind.call(this, e, function o() {
                        return r.unbind(e, o), t.apply(this, arguments)
                    }, i, n)
                },
                bind: function() {
                    this.addEventListener.apply(this, arguments)
                },
                unbind: function() {
                    this.removeEventListener.apply(this, arguments)
                },
                unbindAll: function() {
                    this.removeAllEventListeners.apply(this, arguments)
                },
                trigger: function() {
                    return this.dispatchEvent.apply(this, arguments)
                },
                handleEventProps: function(e) {
                    var t = this;
                    this.bind(e.join(" "), function(e) {
                        var t = "on" + e.type.toLowerCase();
                        "function" === i.typeOf(this[t]) && this[t].apply(this, arguments)
                    }), i.each(e, function(e) {
                        e = "on" + e.toLowerCase(e), "undefined" === i.typeOf(t[e]) && (t[e] = null)
                    })
                }
            }), n.instance = new n, n
        }), n("moxie/runtime/Runtime", ["moxie/core/utils/Env", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/EventTarget"], function(e, t, i, n) {
            function r(e, n, o, s, l) {
                var u, c = this,
                    d = t.guid(n + "_"),
                    p = l || "browser";
                e = e || {}, a[d] = this, o = t.extend({
                    access_binary: !1,
                    access_image_binary: !1,
                    display_media: !1,
                    do_cors: !1,
                    drag_and_drop: !1,
                    filter_by_extension: !0,
                    resize_image: !1,
                    report_upload_progress: !1,
                    return_response_headers: !1,
                    return_response_type: !1,
                    return_status_code: !0,
                    send_custom_headers: !1,
                    select_file: !1,
                    select_folder: !1,
                    select_multiple: !0,
                    send_binary_string: !1,
                    send_browser_cookies: !0,
                    send_multipart: !0,
                    slice_blob: !1,
                    stream_upload: !1,
                    summon_file_dialog: !1,
                    upload_filesize: !0,
                    use_http_method: !0
                }, o), e.preferred_caps && (p = r.getMode(s, e.preferred_caps, p)), u = function() {
                    var e = {};
                    return {
                        exec: function(t, i, n, r) {
                            return u[i] && (e[t] || (e[t] = {
                                context: this,
                                instance: new u[i]
                            }), e[t].instance[n]) ? e[t].instance[n].apply(this, r) : void 0
                        },
                        removeInstance: function(t) {
                            delete e[t]
                        },
                        removeAllInstances: function() {
                            var i = this;
                            t.each(e, function(e, n) {
                                "function" === t.typeOf(e.instance.destroy) && e.instance.destroy.call(e.context), i.removeInstance(n)
                            })
                        }
                    }
                }(), t.extend(this, {
                    initialized: !1,
                    uid: d,
                    type: n,
                    mode: r.getMode(s, e.required_caps, p),
                    shimid: d + "_container",
                    clients: 0,
                    options: e,
                    can: function(e, i) {
                        var n = arguments[2] || o;
                        if ("string" === t.typeOf(e) && "undefined" === t.typeOf(i) && (e = r.parseCaps(e)), "object" === t.typeOf(e)) {
                            for (var a in e)
                                if (!this.can(a, e[a], n)) return !1;
                            return !0
                        }
                        return "function" === t.typeOf(n[e]) ? n[e].call(this, i) : i === n[e]
                    },
                    getShimContainer: function() {
                        var e, n = i.get(this.shimid);
                        return n || (e = i.get(this.options.container) || document.body, n = document.createElement("div"), n.id = this.shimid, n.className = "moxie-shim moxie-shim-" + this.type, t.extend(n.style, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "1px",
                            height: "1px",
                            overflow: "hidden"
                        }), e.appendChild(n), e = null), n
                    },
                    getShim: function() {
                        return u
                    },
                    shimExec: function(e, t) {
                        var i = [].slice.call(arguments, 2);
                        return c.getShim().exec.call(this, this.uid, e, t, i)
                    },
                    exec: function(e, t) {
                        var i = [].slice.call(arguments, 2);
                        return c[e] && c[e][t] ? c[e][t].apply(this, i) : c.shimExec.apply(this, arguments)
                    },
                    destroy: function() {
                        if (c) {
                            var e = i.get(this.shimid);
                            e && e.parentNode.removeChild(e), u && u.removeAllInstances(), this.unbindAll(), delete a[this.uid], this.uid = null, d = c = u = e = null
                        }
                    }
                }), this.mode && e.required_caps && !this.can(e.required_caps) && (this.mode = !1)
            }
            var o = {},
                a = {};
            return r.order = "html5,flash,silverlight,html4", r.getRuntime = function(e) {
                return !!a[e] && a[e]
            }, r.addConstructor = function(e, t) {
                t.prototype = n.instance, o[e] = t
            }, r.getConstructor = function(e) {
                return o[e] || null
            }, r.getInfo = function(e) {
                var t = r.getRuntime(e);
                return t ? {
                    uid: t.uid,
                    type: t.type,
                    mode: t.mode,
                    can: function() {
                        return t.can.apply(t, arguments)
                    }
                } : null
            }, r.parseCaps = function(e) {
                var i = {};
                return "string" !== t.typeOf(e) ? e || {} : (t.each(e.split(","), function(e) {
                    i[e] = !0
                }), i)
            }, r.can = function(e, t) {
                var i, n, o = r.getConstructor(e);
                return !!o && (i = new o({
                    required_caps: t
                }), n = i.mode, i.destroy(), !!n)
            }, r.thatCan = function(e, t) {
                var i = (t || r.order).split(/\s*,\s*/);
                for (var n in i)
                    if (r.can(i[n], e)) return i[n];
                return null
            }, r.getMode = function(e, i, n) {
                var r = null;
                if ("undefined" === t.typeOf(n) && (n = "browser"), i && !t.isEmptyObj(e)) {
                    if (t.each(i, function(i, n) {
                            if (e.hasOwnProperty(n)) {
                                var o = e[n](i);
                                if ("string" == typeof o && (o = [o]), r) {
                                    if (!(r = t.arrayIntersect(r, o))) return r = !1
                                } else r = o
                            }
                        }), r) return -1 !== t.inArray(n, r) ? n : r[0];
                    if (r === !1) return !1
                }
                return n
            }, r.getGlobalEventTarget = function() {
                if (/^moxie\./.test(e.global_event_dispatcher) && !e.can("access_global_ns")) {
                    var i = t.guid("moxie_event_target_");
                    window[i] = function(e, t) {
                        n.instance.dispatchEvent(e, t)
                    }, e.global_event_dispatcher = i
                }
                return e.global_event_dispatcher
            }, r.capTrue = function() {
                return !0
            }, r.capFalse = function() {
                return !1
            }, r.capTest = function(e) {
                return function() {
                    return !!e
                }
            }, r
        }), n("moxie/runtime/RuntimeClient", ["moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/Runtime"], function(e, t, i, n) {
            return function() {
                var e;
                i.extend(this, {
                    connectRuntime: function(r) {
                        function o(i) {
                            var a, l;
                            return i.length ? (a = i.shift().toLowerCase(), (l = n.getConstructor(a)) ? (e = new l(r), e.bind("Init", function() {
                                e.initialized = !0, setTimeout(function() {
                                    e.clients++, s.ruid = e.uid, s.trigger("RuntimeInit", e)
                                }, 1)
                            }), e.bind("Error", function() {
                                e.destroy(), o(i)
                            }), e.bind("Exception", function(e, i) {
                                var n = i.name + "(#" + i.code + ")" + (i.message ? ", from: " + i.message : "");
                                s.trigger("RuntimeError", new t.RuntimeError(t.RuntimeError.EXCEPTION_ERR, n))
                            }), e.mode ? void e.init() : void e.trigger("Error")) : void o(i)) : (s.trigger("RuntimeError", new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)), void(e = null))
                        }
                        var a, s = this;
                        if ("string" === i.typeOf(r) ? a = r : "string" === i.typeOf(r.ruid) && (a = r.ruid), a) {
                            if (e = n.getRuntime(a)) return s.ruid = a, e.clients++, e;
                            throw new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)
                        }
                        o((r.runtime_order || n.order).split(/\s*,\s*/))
                    },
                    disconnectRuntime: function() {
                        e && --e.clients <= 0 && e.destroy(), e = null
                    },
                    getRuntime: function() {
                        return e && e.uid ? e : e = null
                    },
                    exec: function() {
                        return e ? e.exec.apply(this, arguments) : null
                    },
                    can: function(t) {
                        return !!e && e.can(t)
                    }
                })
            }
        }), n("moxie/file/Blob", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient"], function(e, t, i) {
            function n(o, a) {
                function s(t, i, o) {
                    var a, s = r[this.uid];
                    return "string" === e.typeOf(s) && s.length ? (a = new n(null, {
                        type: o,
                        size: i - t
                    }), a.detach(s.substr(t, a.size)), a) : null
                }
                i.call(this), o && this.connectRuntime(o), a ? "string" === e.typeOf(a) && (a = {
                    data: a
                }) : a = {}, e.extend(this, {
                    uid: a.uid || e.guid("uid_"),
                    ruid: o,
                    size: a.size || 0,
                    type: a.type || "",
                    slice: function(e, t, i) {
                        return this.isDetached() ? s.apply(this, arguments) : this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), e, t, i)
                    },
                    getSource: function() {
                        return r[this.uid] ? r[this.uid] : null
                    },
                    detach: function(e) {
                        if (this.ruid && (this.getRuntime().exec.call(this, "Blob", "destroy"), this.disconnectRuntime(), this.ruid = null), e = e || "", "data:" == e.substr(0, 5)) {
                            var i = e.indexOf(";base64,");
                            this.type = e.substring(5, i), e = t.atob(e.substring(i + 8))
                        }
                        this.size = e.length, r[this.uid] = e
                    },
                    isDetached: function() {
                        return !this.ruid && "string" === e.typeOf(r[this.uid])
                    },
                    destroy: function() {
                        this.detach(), delete r[this.uid]
                    }
                }), a.data ? this.detach(a.data) : r[this.uid] = a
            }
            var r = {};
            return n
        }), n("moxie/core/I18n", ["moxie/core/utils/Basic"], function(e) {
            var t = {};
            return {
                addI18n: function(i) {
                    return e.extend(t, i)
                },
                translate: function(e) {
                    return t[e] || e
                },
                _: function(e) {
                    return this.translate(e)
                },
                sprintf: function(t) {
                    var i = [].slice.call(arguments, 1);
                    return t.replace(/%[a-z]/g, function() {
                        var t = i.shift();
                        return "undefined" !== e.typeOf(t) ? t : ""
                    })
                }
            }
        }), n("moxie/core/utils/Mime", ["moxie/core/utils/Basic", "moxie/core/I18n"], function(e, t) {
            var i = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb xlt xla,application/vnd.ms-powerpoint,ppt pps pot ppa,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",
                n = {},
                r = {},
                o = function(e) {
                    var t, i, o, a = e.split(/,/);
                    for (t = 0; t < a.length; t += 2) {
                        for (o = a[t + 1].split(/ /), i = 0; i < o.length; i++) n[o[i]] = a[t];
                        r[a[t]] = o
                    }
                },
                a = function(t, i) {
                    var n, r, o, a, s = [];
                    for (r = 0; r < t.length; r++)
                        for (n = t[r].extensions.toLowerCase().split(/\s*,\s*/), o = 0; o < n.length; o++) {
                            if ("*" === n[o]) return [];
                            if (a = s[n[o]], i && /^\w+$/.test(n[o])) s.push("." + n[o]);
                            else if (a && -1 === e.inArray(a, s)) s.push(a);
                            else if (!a) return []
                        }
                    return s
                },
                s = function(t) {
                    var i = [];
                    return e.each(t, function(t) {
                        if (t = t.toLowerCase(), "*" === t) return i = [], !1;
                        var n = t.match(/^(\w+)\/(\*|\w+)$/);
                        n && ("*" === n[2] ? e.each(r, function(e, t) {
                            new RegExp("^" + n[1] + "/").test(t) && [].push.apply(i, r[t])
                        }) : r[t] && [].push.apply(i, r[t]))
                    }), i
                },
                l = function(i) {
                    var n = [],
                        r = [];
                    return "string" === e.typeOf(i) && (i = e.trim(i).split(/\s*,\s*/)), r = s(i), n.push({
                        title: t.translate("Files"),
                        extensions: r.length ? r.join(",") : "*"
                    }), n
                },
                u = function(e) {
                    var t = e && e.match(/\.([^.]+)$/);
                    return t ? t[1].toLowerCase() : ""
                },
                c = function(e) {
                    return n[u(e)] || ""
                };
            return o(i), {
                mimes: n,
                extensions: r,
                addMimeType: o,
                extList2mimes: a,
                mimes2exts: s,
                mimes2extList: l,
                getFileExtension: u,
                getFileMime: c
            }
        }), n("moxie/file/FileInput", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Mime", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/I18n", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient"], function(e, t, i, n, r, o, a, s, l) {
            function u(t) {
                var o, u, d;
                if (-1 !== e.inArray(e.typeOf(t), ["string", "node"]) && (t = {
                        browse_button: t
                    }), u = n.get(t.browse_button), !u) throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);
                d = {
                    accept: [{
                        title: a.translate("All Files"),
                        extensions: "*"
                    }],
                    multiple: !1,
                    required_caps: !1,
                    container: u.parentNode || document.body
                }, t = e.extend({}, d, t), "string" == typeof t.required_caps && (t.required_caps = s.parseCaps(t.required_caps)), "string" == typeof t.accept && (t.accept = i.mimes2extList(t.accept)), o = n.get(t.container), o || (o = document.body), "static" === n.getStyle(o, "position") && (o.style.position = "relative"), o = u = null, l.call(this), e.extend(this, {
                    uid: e.guid("uid_"),
                    ruid: null,
                    shimid: null,
                    files: null,
                    init: function() {
                        var i = this;
                        i.bind("RuntimeInit", function(r, o) {
                            i.ruid = o.uid, i.shimid = o.shimid, i.bind("Ready", function() {
                                i.trigger("Refresh")
                            }, 999), i.bind("Refresh", function() {
                                var i, r, a, s, l;
                                a = n.get(t.browse_button), s = n.get(o.shimid), a && (i = n.getPos(a, n.get(t.container)), r = n.getSize(a), l = parseInt(n.getStyle(a, "z-index"), 10) || 0, s && e.extend(s.style, {
                                    top: i.y + "px",
                                    left: i.x + "px",
                                    width: r.w + "px",
                                    height: r.h + "px",
                                    zIndex: l + 1
                                })), s = a = null
                            }), o.exec.call(i, "FileInput", "init", t)
                        }), i.connectRuntime(e.extend({}, t, {
                            required_caps: {
                                select_file: !0
                            }
                        }))
                    },
                    getOption: function(e) {
                        return t[e]
                    },
                    setOption: function(e, n) {
                        if (t.hasOwnProperty(e)) {
                            var o = t[e];
                            switch (e) {
                                case "accept":
                                    "string" == typeof n && (n = i.mimes2extList(n));
                                    break;
                                case "container":
                                case "required_caps":
                                    throw new r.FileException(r.FileException.NO_MODIFICATION_ALLOWED_ERR)
                            }
                            t[e] = n, this.exec("FileInput", "setOption", e, n), this.trigger("OptionChanged", e, n, o)
                        }
                    },
                    disable: function(t) {
                        var i = this.getRuntime();
                        i && this.exec("FileInput", "disable", "undefined" === e.typeOf(t) || t)
                    },
                    refresh: function() {
                        this.trigger("Refresh")
                    },
                    destroy: function() {
                        var t = this.getRuntime();
                        t && (t.exec.call(this, "FileInput", "destroy"), this.disconnectRuntime()), "array" === e.typeOf(this.files) && e.each(this.files, function(e) {
                            e.destroy()
                        }), this.files = null, this.unbindAll()
                    }
                }), this.handleEventProps(c)
            }
            var c = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];
            return u.prototype = o.instance, u
        }), n("moxie/file/File", ["moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/file/Blob"], function(e, t, i) {
            function n(n, r) {
                r || (r = {}), i.apply(this, arguments), this.type || (this.type = t.getFileMime(r.name));
                var o;
                if (r.name) o = r.name.replace(/\\/g, "/"), o = o.substr(o.lastIndexOf("/") + 1);
                else if (this.type) {
                    var a = this.type.split("/")[0];
                    o = e.guid(("" !== a ? a : "file") + "_"), t.extensions[this.type] && (o += "." + t.extensions[this.type][0])
                }
                e.extend(this, {
                    name: o || e.guid("file_"),
                    relativePath: "",
                    lastModifiedDate: r.lastModifiedDate || (new Date).toLocaleString()
                })
            }
            return n.prototype = i.prototype, n
        }), n("moxie/file/FileDrop", ["moxie/core/I18n", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/file/File", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget", "moxie/core/utils/Mime"], function(e, t, i, n, r, o, a, s, l) {
            function u(i) {
                var r, o = this;
                "string" == typeof i && (i = {
                        drop_zone: i
                    }), r = {
                        accept: [{
                            title: e.translate("All Files"),
                            extensions: "*"
                        }],
                        required_caps: {
                            drag_and_drop: !0
                        }
                    }, i = "object" == typeof i ? n.extend({}, r, i) : r,
                    i.container = t.get(i.drop_zone) || document.body, "static" === t.getStyle(i.container, "position") && (i.container.style.position = "relative"), "string" == typeof i.accept && (i.accept = l.mimes2extList(i.accept)), a.call(o), n.extend(o, {
                        uid: n.guid("uid_"),
                        ruid: null,
                        files: null,
                        init: function() {
                            o.bind("RuntimeInit", function(e, t) {
                                o.ruid = t.uid, t.exec.call(o, "FileDrop", "init", i), o.dispatchEvent("ready")
                            }), o.connectRuntime(i)
                        },
                        destroy: function() {
                            var e = this.getRuntime();
                            e && (e.exec.call(this, "FileDrop", "destroy"), this.disconnectRuntime()), this.files = null, this.unbindAll()
                        }
                    }), this.handleEventProps(c)
            }
            var c = ["ready", "dragenter", "dragleave", "drop", "error"];
            return u.prototype = s.instance, u
        }), n("moxie/file/FileReader", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/runtime/RuntimeClient"], function(e, t, i, n, r, o) {
            function a() {
                function n(e, n) {
                    if (this.trigger("loadstart"), this.readyState === a.LOADING) return this.trigger("error", new i.DOMException(i.DOMException.INVALID_STATE_ERR)), void this.trigger("loadend");
                    if (!(n instanceof r)) return this.trigger("error", new i.DOMException(i.DOMException.NOT_FOUND_ERR)), void this.trigger("loadend");
                    if (this.result = null, this.readyState = a.LOADING, n.isDetached()) {
                        var o = n.getSource();
                        switch (e) {
                            case "readAsText":
                            case "readAsBinaryString":
                                this.result = o;
                                break;
                            case "readAsDataURL":
                                this.result = "data:" + n.type + ";base64," + t.btoa(o)
                        }
                        this.readyState = a.DONE, this.trigger("load"), this.trigger("loadend")
                    } else this.connectRuntime(n.ruid), this.exec("FileReader", "read", e, n)
                }
                o.call(this), e.extend(this, {
                    uid: e.guid("uid_"),
                    readyState: a.EMPTY,
                    result: null,
                    error: null,
                    readAsBinaryString: function(e) {
                        n.call(this, "readAsBinaryString", e)
                    },
                    readAsDataURL: function(e) {
                        n.call(this, "readAsDataURL", e)
                    },
                    readAsText: function(e) {
                        n.call(this, "readAsText", e)
                    },
                    abort: function() {
                        this.result = null, -1 === e.inArray(this.readyState, [a.EMPTY, a.DONE]) && (this.readyState === a.LOADING && (this.readyState = a.DONE), this.exec("FileReader", "abort"), this.trigger("abort"), this.trigger("loadend"))
                    },
                    destroy: function() {
                        this.abort(), this.exec("FileReader", "destroy"), this.disconnectRuntime(), this.unbindAll()
                    }
                }), this.handleEventProps(s), this.bind("Error", function(e, t) {
                    this.readyState = a.DONE, this.error = t
                }, 999), this.bind("Load", function() {
                    this.readyState = a.DONE
                }, 999)
            }
            var s = ["loadstart", "progress", "load", "abort", "error", "loadend"];
            return a.EMPTY = 0, a.LOADING = 1, a.DONE = 2, a.prototype = n.instance, a
        }), n("moxie/core/utils/Url", ["moxie/core/utils/Basic"], function(e) {
            var t = function(i, n) {
                    var r, o = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
                        a = o.length,
                        s = {
                            http: 80,
                            https: 443
                        },
                        l = {},
                        u = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?(\[[\da-fA-F:]+\]|[^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,
                        c = u.exec(i || ""),
                        d = /^\/\/\w/.test(i);
                    switch (e.typeOf(n)) {
                        case "undefined":
                            n = t(document.location.href, !1);
                            break;
                        case "string":
                            n = t(n, !1)
                    }
                    for (; a--;) c[a] && (l[o[a]] = c[a]);
                    if (r = !d && !l.scheme, (d || r) && (l.scheme = n.scheme), r) {
                        l.host = n.host, l.port = n.port;
                        var p = "";
                        /^[^\/]/.test(l.path) && (p = n.path, p = /\/[^\/]*\.[^\/]*$/.test(p) ? p.replace(/\/[^\/]+$/, "/") : p.replace(/\/?$/, "/")), l.path = p + (l.path || "")
                    }
                    return l.port || (l.port = s[l.scheme] || 80), l.port = parseInt(l.port, 10), l.path || (l.path = "/"), delete l.source, l
                },
                i = function(e) {
                    var i = {
                            http: 80,
                            https: 443
                        },
                        n = "object" == typeof e ? e : t(e);
                    return n.scheme + "://" + n.host + (n.port !== i[n.scheme] ? ":" + n.port : "") + n.path + (n.query ? n.query : "")
                },
                n = function(e) {
                    function i(e) {
                        return [e.scheme, e.host, e.port].join("/")
                    }
                    return "string" == typeof e && (e = t(e)), i(t()) === i(e)
                };
            return {
                parseUrl: t,
                resolveUrl: i,
                hasSameOrigin: n
            }
        }), n("moxie/runtime/RuntimeTarget", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function(e, t, i) {
            function n() {
                this.uid = e.guid("uid_"), t.call(this), this.destroy = function() {
                    this.disconnectRuntime(), this.unbindAll()
                }
            }
            return n.prototype = i.instance, n
        }), n("moxie/file/FileReaderSync", ["moxie/core/utils/Basic", "moxie/runtime/RuntimeClient", "moxie/core/utils/Encode"], function(e, t, i) {
            return function() {
                function n(e, t) {
                    if (!t.isDetached()) {
                        var n = this.connectRuntime(t.ruid).exec.call(this, "FileReaderSync", "read", e, t);
                        return this.disconnectRuntime(), n
                    }
                    var r = t.getSource();
                    switch (e) {
                        case "readAsBinaryString":
                            return r;
                        case "readAsDataURL":
                            return "data:" + t.type + ";base64," + i.btoa(r);
                        case "readAsText":
                            for (var o = "", a = 0, s = r.length; s > a; a++) o += String.fromCharCode(r[a]);
                            return o
                    }
                }
                t.call(this), e.extend(this, {
                    uid: e.guid("uid_"),
                    readAsBinaryString: function(e) {
                        return n.call(this, "readAsBinaryString", e)
                    },
                    readAsDataURL: function(e) {
                        return n.call(this, "readAsDataURL", e)
                    },
                    readAsText: function(e) {
                        return n.call(this, "readAsText", e)
                    }
                })
            }
        }), n("moxie/xhr/FormData", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/file/Blob"], function(e, t, i) {
            function n() {
                var e, n = [];
                t.extend(this, {
                    append: function(r, o) {
                        var a = this,
                            s = t.typeOf(o);
                        o instanceof i ? e = {
                            name: r,
                            value: o
                        } : "array" === s ? (r += "[]", t.each(o, function(e) {
                            a.append(r, e)
                        })) : "object" === s ? t.each(o, function(e, t) {
                            a.append(r + "[" + t + "]", e)
                        }) : "null" === s || "undefined" === s || "number" === s && isNaN(o) ? a.append(r, "false") : n.push({
                            name: r,
                            value: o.toString()
                        })
                    },
                    hasBlob: function() {
                        return !!this.getBlob()
                    },
                    getBlob: function() {
                        return e && e.value || null
                    },
                    getBlobName: function() {
                        return e && e.name || null
                    },
                    each: function(i) {
                        t.each(n, function(e) {
                            i(e.value, e.name)
                        }), e && i(e.value, e.name)
                    },
                    destroy: function() {
                        e = null, n = []
                    }
                })
            }
            return n
        }), n("moxie/xhr/XMLHttpRequest", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/EventTarget", "moxie/core/utils/Encode", "moxie/core/utils/Url", "moxie/runtime/Runtime", "moxie/runtime/RuntimeTarget", "moxie/file/Blob", "moxie/file/FileReaderSync", "moxie/xhr/FormData", "moxie/core/utils/Env", "moxie/core/utils/Mime"], function(e, t, i, n, r, o, a, s, l, u, c, d) {
            function p() {
                this.uid = e.guid("uid_")
            }

            function f() {
                function i(e, t) {
                    return S.hasOwnProperty(e) ? 1 === arguments.length ? c.can("define_property") ? S[e] : I[e] : void(c.can("define_property") ? S[e] = t : I[e] = t) : void 0
                }

                function l(t) {
                    function n() {
                        _ && (_.destroy(), _ = null), s.dispatchEvent("loadend"), s = null
                    }

                    function r(r) {
                        _.bind("LoadStart", function(e) {
                            i("readyState", f.LOADING), s.dispatchEvent("readystatechange"), s.dispatchEvent(e), N && s.upload.dispatchEvent(e)
                        }), _.bind("Progress", function(e) {
                            i("readyState") !== f.LOADING && (i("readyState", f.LOADING), s.dispatchEvent("readystatechange")), s.dispatchEvent(e)
                        }), _.bind("UploadProgress", function(e) {
                            N && s.upload.dispatchEvent({
                                type: "progress",
                                lengthComputable: !1,
                                total: e.total,
                                loaded: e.loaded
                            })
                        }), _.bind("Load", function(t) {
                            i("readyState", f.DONE), i("status", Number(r.exec.call(_, "XMLHttpRequest", "getStatus") || 0)), i("statusText", m[i("status")] || ""), i("response", r.exec.call(_, "XMLHttpRequest", "getResponse", i("responseType"))), ~e.inArray(i("responseType"), ["text", ""]) ? i("responseText", i("response")) : "document" === i("responseType") && i("responseXML", i("response")), k = r.exec.call(_, "XMLHttpRequest", "getAllResponseHeaders"), s.dispatchEvent("readystatechange"), i("status") > 0 ? (N && s.upload.dispatchEvent(t), s.dispatchEvent(t)) : (M = !0, s.dispatchEvent("error")), n()
                        }), _.bind("Abort", function(e) {
                            s.dispatchEvent(e), n()
                        }), _.bind("Error", function(e) {
                            M = !0, i("readyState", f.DONE), s.dispatchEvent("readystatechange"), L = !0, s.dispatchEvent(e), n()
                        }), r.exec.call(_, "XMLHttpRequest", "send", {
                            url: v,
                            method: x,
                            async: T,
                            user: E,
                            password: y,
                            headers: A,
                            mimeType: D,
                            encoding: O,
                            responseType: s.responseType,
                            withCredentials: s.withCredentials,
                            options: B
                        }, t)
                    }
                    var s = this;
                    b = (new Date).getTime(), _ = new a, "string" == typeof B.required_caps && (B.required_caps = o.parseCaps(B.required_caps)), B.required_caps = e.extend({}, B.required_caps, {
                        return_response_type: s.responseType
                    }), t instanceof u && (B.required_caps.send_multipart = !0), e.isEmptyObj(A) || (B.required_caps.send_custom_headers = !0), z || (B.required_caps.do_cors = !0), B.ruid ? r(_.connectRuntime(B)) : (_.bind("RuntimeInit", function(e, t) {
                        r(t)
                    }), _.bind("RuntimeError", function(e, t) {
                        s.dispatchEvent("RuntimeError", t)
                    }), _.connectRuntime(B))
                }

                function g() {
                    i("responseText", ""), i("responseXML", null), i("response", null), i("status", 0), i("statusText", ""), b = w = null
                }
                var v, x, E, y, b, w, _, R, I = this,
                    S = {
                        timeout: 0,
                        readyState: f.UNSENT,
                        withCredentials: !1,
                        status: 0,
                        statusText: "",
                        responseType: "",
                        responseXML: null,
                        responseText: null,
                        response: null
                    },
                    T = !0,
                    A = {},
                    O = null,
                    D = null,
                    F = !1,
                    C = !1,
                    N = !1,
                    L = !1,
                    M = !1,
                    z = !1,
                    U = null,
                    P = null,
                    B = {},
                    k = "";
                e.extend(this, S, {
                    uid: e.guid("uid_"),
                    upload: new p,
                    open: function(o, a, s, l, u) {
                        var c;
                        if (!o || !a) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        if (/[\u0100-\uffff]/.test(o) || n.utf8_encode(o) !== o) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        if (~e.inArray(o.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"]) && (x = o.toUpperCase()), ~e.inArray(x, ["CONNECT", "TRACE", "TRACK"])) throw new t.DOMException(t.DOMException.SECURITY_ERR);
                        if (a = n.utf8_encode(a), c = r.parseUrl(a), z = r.hasSameOrigin(c), v = r.resolveUrl(a), (l || u) && !z) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                        if (E = l || c.user, y = u || c.pass, T = s || !0, T === !1 && (i("timeout") || i("withCredentials") || "" !== i("responseType"))) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                        F = !T, C = !1, A = {}, g.call(this), i("readyState", f.OPENED), this.dispatchEvent("readystatechange")
                    },
                    setRequestHeader: function(r, o) {
                        var a = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
                        if (i("readyState") !== f.OPENED || C) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                        if (/[\u0100-\uffff]/.test(r) || n.utf8_encode(r) !== r) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        return r = e.trim(r).toLowerCase(), !~e.inArray(r, a) && !/^(proxy\-|sec\-)/.test(r) && (A[r] ? A[r] += ", " + o : A[r] = o, !0)
                    },
                    hasRequestHeader: function(e) {
                        return e && A[e.toLowerCase()] || !1
                    },
                    getAllResponseHeaders: function() {
                        return k || ""
                    },
                    getResponseHeader: function(t) {
                        return t = t.toLowerCase(), M || ~e.inArray(t, ["set-cookie", "set-cookie2"]) ? null : k && "" !== k && (R || (R = {}, e.each(k.split(/\r\n/), function(t) {
                            var i = t.split(/:\s+/);
                            2 === i.length && (i[0] = e.trim(i[0]), R[i[0].toLowerCase()] = {
                                header: i[0],
                                value: e.trim(i[1])
                            })
                        })), R.hasOwnProperty(t)) ? R[t].header + ": " + R[t].value : null
                    },
                    overrideMimeType: function(n) {
                        var r, o;
                        if (~e.inArray(i("readyState"), [f.LOADING, f.DONE])) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                        if (n = e.trim(n.toLowerCase()), /;/.test(n) && (r = n.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (n = r[1], r[2] && (o = r[2])), !d.mimes[n]) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        U = n, P = o
                    },
                    send: function(i, r) {
                        if (B = "string" === e.typeOf(r) ? {
                                ruid: r
                            } : r ? r : {}, this.readyState !== f.OPENED || C) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                        if (i instanceof s) B.ruid = i.ruid, D = i.type || "application/octet-stream";
                        else if (i instanceof u) {
                            if (i.hasBlob()) {
                                var o = i.getBlob();
                                B.ruid = o.ruid, D = o.type || "application/octet-stream"
                            }
                        } else "string" == typeof i && (O = "UTF-8", D = "text/plain;charset=UTF-8", i = n.utf8_encode(i));
                        this.withCredentials || (this.withCredentials = B.required_caps && B.required_caps.send_browser_cookies && !z), N = !F && this.upload.hasEventListener(), M = !1, L = !i, F || (C = !0), l.call(this, i)
                    },
                    abort: function() {
                        if (M = !0, F = !1, ~e.inArray(i("readyState"), [f.UNSENT, f.OPENED, f.DONE])) i("readyState", f.UNSENT);
                        else {
                            if (i("readyState", f.DONE), C = !1, !_) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                            _.getRuntime().exec.call(_, "XMLHttpRequest", "abort", L), L = !0
                        }
                    },
                    destroy: function() {
                        _ && ("function" === e.typeOf(_.destroy) && _.destroy(), _ = null), this.unbindAll(), this.upload && (this.upload.unbindAll(), this.upload = null)
                    }
                }), this.handleEventProps(h.concat(["readystatechange"])), this.upload.handleEventProps(h)
            }
            var m = {
                100: "Continue",
                101: "Switching Protocols",
                102: "Processing",
                200: "OK",
                201: "Created",
                202: "Accepted",
                203: "Non-Authoritative Information",
                204: "No Content",
                205: "Reset Content",
                206: "Partial Content",
                207: "Multi-Status",
                226: "IM Used",
                300: "Multiple Choices",
                301: "Moved Permanently",
                302: "Found",
                303: "See Other",
                304: "Not Modified",
                305: "Use Proxy",
                306: "Reserved",
                307: "Temporary Redirect",
                400: "Bad Request",
                401: "Unauthorized",
                402: "Payment Required",
                403: "Forbidden",
                404: "Not Found",
                405: "Method Not Allowed",
                406: "Not Acceptable",
                407: "Proxy Authentication Required",
                408: "Request Timeout",
                409: "Conflict",
                410: "Gone",
                411: "Length Required",
                412: "Precondition Failed",
                413: "Request Entity Too Large",
                414: "Request-URI Too Long",
                415: "Unsupported Media Type",
                416: "Requested Range Not Satisfiable",
                417: "Expectation Failed",
                422: "Unprocessable Entity",
                423: "Locked",
                424: "Failed Dependency",
                426: "Upgrade Required",
                500: "Internal Server Error",
                501: "Not Implemented",
                502: "Bad Gateway",
                503: "Service Unavailable",
                504: "Gateway Timeout",
                505: "HTTP Version Not Supported",
                506: "Variant Also Negotiates",
                507: "Insufficient Storage",
                510: "Not Extended"
            };
            p.prototype = i.instance;
            var h = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"];
            return f.UNSENT = 0, f.OPENED = 1, f.HEADERS_RECEIVED = 2, f.LOADING = 3, f.DONE = 4, f.prototype = i.instance, f
        }), n("moxie/runtime/Transporter", ["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/runtime/RuntimeClient", "moxie/core/EventTarget"], function(e, t, i, n) {
            function r() {
                function n() {
                    c = d = 0, u = this.result = null
                }

                function o(t, i) {
                    var n = this;
                    l = i, n.bind("TransportingProgress", function(t) {
                        d = t.loaded, c > d && -1 === e.inArray(n.state, [r.IDLE, r.DONE]) && a.call(n)
                    }, 999), n.bind("TransportingComplete", function() {
                        d = c, n.state = r.DONE, u = null, n.result = l.exec.call(n, "Transporter", "getAsBlob", t || "")
                    }, 999), n.state = r.BUSY, n.trigger("TransportingStarted"), a.call(n)
                }

                function a() {
                    var e, i = this,
                        n = c - d;
                    p > n && (p = n), e = t.btoa(u.substr(d, p)), l.exec.call(i, "Transporter", "receive", e, c)
                }
                var s, l, u, c, d, p;
                i.call(this), e.extend(this, {
                    uid: e.guid("uid_"),
                    state: r.IDLE,
                    result: null,
                    transport: function(t, i, r) {
                        var a = this;
                        if (r = e.extend({
                                chunk_size: 204798
                            }, r), (s = r.chunk_size % 3) && (r.chunk_size += 3 - s), p = r.chunk_size, n.call(this), u = t, c = t.length, "string" === e.typeOf(r) || r.ruid) o.call(a, i, this.connectRuntime(r));
                        else {
                            var l = function(e, t) {
                                a.unbind("RuntimeInit", l), o.call(a, i, t)
                            };
                            this.bind("RuntimeInit", l), this.connectRuntime(r)
                        }
                    },
                    abort: function() {
                        var e = this;
                        e.state = r.IDLE, l && (l.exec.call(e, "Transporter", "clear"), e.trigger("TransportingAborted")), n.call(e)
                    },
                    destroy: function() {
                        this.unbindAll(), l = null, this.disconnectRuntime(), n.call(this)
                    }
                })
            }
            return r.IDLE = 0, r.BUSY = 1, r.DONE = 2, r.prototype = n.instance, r
        }), n("moxie/image/Image", ["moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/file/FileReaderSync", "moxie/xhr/XMLHttpRequest", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/runtime/Transporter", "moxie/core/utils/Env", "moxie/core/EventTarget", "moxie/file/Blob", "moxie/file/File", "moxie/core/utils/Encode"], function(e, t, i, n, r, o, a, s, l, u, c, d, p) {
            function f() {
                function n(e) {
                    try {
                        return e || (e = this.exec("Image", "getInfo")), this.size = e.size, this.width = e.width, this.height = e.height, this.type = e.type, this.meta = e.meta, "" === this.name && (this.name = e.name), !0
                    } catch (t) {
                        return this.trigger("error", t.code), !1
                    }
                }

                function u(t) {
                    var n = e.typeOf(t);
                    try {
                        if (t instanceof f) {
                            if (!t.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                            h.apply(this, arguments)
                        } else if (t instanceof c) {
                            if (!~e.inArray(t.type, ["image/jpeg", "image/png"])) throw new i.ImageError(i.ImageError.WRONG_FORMAT);
                            g.apply(this, arguments)
                        } else if (-1 !== e.inArray(n, ["blob", "file"])) u.call(this, new d(null, t), arguments[1]);
                        else if ("string" === n) "data:" === t.substr(0, 5) ? u.call(this, new c(null, {
                            data: t
                        }), arguments[1]) : v.apply(this, arguments);
                        else {
                            if ("node" !== n || "img" !== t.nodeName.toLowerCase()) throw new i.DOMException(i.DOMException.TYPE_MISMATCH_ERR);
                            u.call(this, t.src, arguments[1])
                        }
                    } catch (r) {
                        this.trigger("error", r.code)
                    }
                }

                function h(t, i) {
                    var n = this.connectRuntime(t.ruid);
                    this.ruid = n.uid, n.exec.call(this, "Image", "loadFromImage", t, "undefined" === e.typeOf(i) || i)
                }

                function g(t, i) {
                    function n(e) {
                        r.ruid = e.uid, e.exec.call(r, "Image", "loadFromBlob", t)
                    }
                    var r = this;
                    r.name = t.name || "", t.isDetached() ? (this.bind("RuntimeInit", function(e, t) {
                        n(t)
                    }), i && "string" == typeof i.required_caps && (i.required_caps = o.parseCaps(i.required_caps)), this.connectRuntime(e.extend({
                        required_caps: {
                            access_image_binary: !0,
                            resize_image: !0
                        }
                    }, i))) : n(this.connectRuntime(t.ruid))
                }

                function v(e, t) {
                    var i, n = this;
                    i = new r, i.open("get", e), i.responseType = "blob", i.onprogress = function(e) {
                        n.trigger(e)
                    }, i.onload = function() {
                        g.call(n, i.response, !0)
                    }, i.onerror = function(e) {
                        n.trigger(e)
                    }, i.onloadend = function() {
                        i.destroy()
                    }, i.bind("RuntimeError", function(e, t) {
                        n.trigger("RuntimeError", t)
                    }), i.send(null, t)
                }
                a.call(this), e.extend(this, {
                    uid: e.guid("uid_"),
                    ruid: null,
                    name: "",
                    size: 0,
                    width: 0,
                    height: 0,
                    type: "",
                    meta: {},
                    clone: function() {
                        this.load.apply(this, arguments)
                    },
                    load: function() {
                        u.apply(this, arguments)
                    },
                    resize: function(t) {
                        var n, r, o = this,
                            a = {
                                x: 0,
                                y: 0,
                                width: o.width,
                                height: o.height
                            },
                            s = e.extendIf({
                                width: o.width,
                                height: o.height,
                                type: o.type || "image/jpeg",
                                quality: 90,
                                crop: !1,
                                fit: !0,
                                preserveHeaders: !0,
                                resample: "default",
                                multipass: !0
                            }, t);
                        try {
                            if (!o.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                            if (o.width > f.MAX_RESIZE_WIDTH || o.height > f.MAX_RESIZE_HEIGHT) throw new i.ImageError(i.ImageError.MAX_RESOLUTION_ERR);
                            if (n = o.meta && o.meta.tiff && o.meta.tiff.Orientation || 1, -1 !== e.inArray(n, [5, 6, 7, 8])) {
                                var l = s.width;
                                s.width = s.height, s.height = l
                            }
                            if (s.crop) {
                                switch (r = Math.max(s.width / o.width, s.height / o.height), t.fit ? (a.width = Math.min(Math.ceil(s.width / r), o.width), a.height = Math.min(Math.ceil(s.height / r), o.height), r = s.width / a.width) : (a.width = Math.min(s.width, o.width), a.height = Math.min(s.height, o.height), r = 1), "boolean" == typeof s.crop && (s.crop = "cc"), s.crop.toLowerCase().replace(/_/, "-")) {
                                    case "rb":
                                    case "right-bottom":
                                        a.x = o.width - a.width, a.y = o.height - a.height;
                                        break;
                                    case "cb":
                                    case "center-bottom":
                                        a.x = Math.floor((o.width - a.width) / 2), a.y = o.height - a.height;
                                        break;
                                    case "lb":
                                    case "left-bottom":
                                        a.x = 0, a.y = o.height - a.height;
                                        break;
                                    case "lt":
                                    case "left-top":
                                        a.x = 0, a.y = 0;
                                        break;
                                    case "ct":
                                    case "center-top":
                                        a.x = Math.floor((o.width - a.width) / 2), a.y = 0;
                                        break;
                                    case "rt":
                                    case "right-top":
                                        a.x = o.width - a.width, a.y = 0;
                                        break;
                                    case "rc":
                                    case "right-center":
                                    case "right-middle":
                                        a.x = o.width - a.width, a.y = Math.floor((o.height - a.height) / 2);
                                        break;
                                    case "lc":
                                    case "left-center":
                                    case "left-middle":
                                        a.x = 0, a.y = Math.floor((o.height - a.height) / 2);
                                        break;
                                    case "cc":
                                    case "center-center":
                                    case "center-middle":
                                    default:
                                        a.x = Math.floor((o.width - a.width) / 2), a.y = Math.floor((o.height - a.height) / 2)
                                }
                                a.x = Math.max(a.x, 0), a.y = Math.max(a.y, 0)
                            } else r = Math.min(s.width / o.width, s.height / o.height), r > 1 && !s.fit && (r = 1);
                            this.exec("Image", "resize", a, r, s)
                        } catch (u) {
                            o.trigger("error", u.code)
                        }
                    },
                    downsize: function(t) {
                        var i, n = {
                            width: this.width,
                            height: this.height,
                            type: this.type || "image/jpeg",
                            quality: 90,
                            crop: !1,
                            fit: !1,
                            preserveHeaders: !0,
                            resample: "default"
                        };
                        i = "object" == typeof t ? e.extend(n, t) : e.extend(n, {
                            width: arguments[0],
                            height: arguments[1],
                            crop: arguments[2],
                            preserveHeaders: arguments[3]
                        }), this.resize(i)
                    },
                    crop: function(e, t, i) {
                        this.downsize(e, t, !0, i)
                    },
                    getAsCanvas: function() {
                        if (!l.can("create_canvas")) throw new i.RuntimeError(i.RuntimeError.NOT_SUPPORTED_ERR);
                        return this.exec("Image", "getAsCanvas")
                    },
                    getAsBlob: function(e, t) {
                        if (!this.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                        return this.exec("Image", "getAsBlob", e || "image/jpeg", t || 90)
                    },
                    getAsDataURL: function(e, t) {
                        if (!this.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                        return this.exec("Image", "getAsDataURL", e || "image/jpeg", t || 90)
                    },
                    getAsBinaryString: function(e, t) {
                        var i = this.getAsDataURL(e, t);
                        return p.atob(i.substring(i.indexOf("base64,") + 7))
                    },
                    embed: function(n, r) {
                        function o(t, r) {
                            var o = this;
                            if (l.can("create_canvas")) {
                                var c = o.getAsCanvas();
                                if (c) return n.appendChild(c), c = null, o.destroy(), void u.trigger("embedded")
                            }
                            var d = o.getAsDataURL(t, r);
                            if (!d) throw new i.ImageError(i.ImageError.WRONG_FORMAT);
                            if (l.can("use_data_uri_of", d.length)) n.innerHTML = '<img src="' + d + '" width="' + o.width + '" height="' + o.height + '" alt="" />', o.destroy(), u.trigger("embedded");
                            else {
                                var f = new s;
                                f.bind("TransportingComplete", function() {
                                    a = u.connectRuntime(this.result.ruid), u.bind("Embedded", function() {
                                        e.extend(a.getShimContainer().style, {
                                            top: "0px",
                                            left: "0px",
                                            width: o.width + "px",
                                            height: o.height + "px"
                                        }), a = null
                                    }, 999), a.exec.call(u, "ImageView", "display", this.result.uid, width, height), o.destroy()
                                }), f.transport(p.atob(d.substring(d.indexOf("base64,") + 7)), t, {
                                    required_caps: {
                                        display_media: !0
                                    },
                                    runtime_order: "flash,silverlight",
                                    container: n
                                })
                            }
                        }
                        var a, u = this,
                            c = e.extend({
                                width: this.width,
                                height: this.height,
                                type: this.type || "image/jpeg",
                                quality: 90,
                                fit: !0,
                                resample: "nearest"
                            }, r);
                        try {
                            if (!(n = t.get(n))) throw new i.DOMException(i.DOMException.INVALID_NODE_TYPE_ERR);
                            if (!this.size) throw new i.DOMException(i.DOMException.INVALID_STATE_ERR);
                            this.width > f.MAX_RESIZE_WIDTH || this.height > f.MAX_RESIZE_HEIGHT;
                            var d = new f;
                            return d.bind("Resize", function() {
                                o.call(this, c.type, c.quality)
                            }), d.bind("Load", function() {
                                this.downsize(c)
                            }), this.meta.thumb && this.meta.thumb.width >= c.width && this.meta.thumb.height >= c.height ? d.load(this.meta.thumb.data) : d.clone(this, !1), d
                        } catch (m) {
                            this.trigger("error", m.code)
                        }
                    },
                    destroy: function() {
                        this.ruid && (this.getRuntime().exec.call(this, "Image", "destroy"), this.disconnectRuntime()), this.meta && this.meta.thumb && this.meta.thumb.data.destroy(), this.unbindAll()
                    }
                }), this.handleEventProps(m), this.bind("Load Resize", function() {
                    return n.call(this)
                }, 999)
            }
            var m = ["progress", "load", "error", "resize", "embedded"];
            return f.MAX_RESIZE_WIDTH = 8192, f.MAX_RESIZE_HEIGHT = 8192, f.prototype = u.instance, f
        }), n("moxie/runtime/html5/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function(e, t, i, n) {
            function o(t) {
                var o = this,
                    l = i.capTest,
                    u = i.capTrue,
                    c = e.extend({
                        access_binary: l(window.FileReader || window.File && window.File.getAsDataURL),
                        access_image_binary: function() {
                            return o.can("access_binary") && !!s.Image
                        },
                        display_media: l((n.can("create_canvas") || n.can("use_data_uri_over32kb")) && r("moxie/image/Image")),
                        do_cors: l(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                        drag_and_drop: l(function() {
                            var e = document.createElement("div");
                            return ("draggable" in e || "ondragstart" in e && "ondrop" in e) && ("IE" !== n.browser || n.verComp(n.version, 9, ">"))
                        }()),
                        filter_by_extension: l(function() {
                            return !("Chrome" === n.browser && n.verComp(n.version, 28, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<") || "Safari" === n.browser && n.verComp(n.version, 7, "<") || "Firefox" === n.browser && n.verComp(n.version, 37, "<"))
                        }()),
                        return_response_headers: u,
                        return_response_type: function(e) {
                            return !("json" !== e || !window.JSON) || n.can("return_response_type", e)
                        },
                        return_status_code: u,
                        report_upload_progress: l(window.XMLHttpRequest && (new XMLHttpRequest).upload),
                        resize_image: function() {
                            return o.can("access_binary") && n.can("create_canvas")
                        },
                        select_file: function() {
                            return n.can("use_fileinput") && window.File
                        },
                        select_folder: function() {
                            return o.can("select_file") && ("Chrome" === n.browser && n.verComp(n.version, 21, ">=") || "Firefox" === n.browser && n.verComp(n.version, 42, ">="))
                        },
                        select_multiple: function() {
                            return !(!o.can("select_file") || "Safari" === n.browser && "Windows" === n.os || "iOS" === n.os && n.verComp(n.osVersion, "7.0.0", ">") && n.verComp(n.osVersion, "8.0.0", "<"))
                        },
                        send_binary_string: l(window.XMLHttpRequest && ((new XMLHttpRequest).sendAsBinary || window.Uint8Array && window.ArrayBuffer)),
                        send_custom_headers: l(window.XMLHttpRequest),
                        send_multipart: function() {
                            return !!(window.XMLHttpRequest && (new XMLHttpRequest).upload && window.FormData) || o.can("send_binary_string")
                        },
                        slice_blob: l(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
                        stream_upload: function() {
                            return o.can("slice_blob") && o.can("send_multipart")
                        },
                        summon_file_dialog: function() {
                            return o.can("select_file") && !("Firefox" === n.browser && n.verComp(n.version, 4, "<") || "Opera" === n.browser && n.verComp(n.version, 12, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<"))
                        },
                        upload_filesize: u,
                        use_http_method: u
                    }, arguments[2]);
                i.call(this, t, arguments[1] || a, c), e.extend(this, {
                    init: function() {
                        this.trigger("Init")
                    },
                    destroy: function(e) {
                        return function() {
                            e.call(o), e = o = null
                        }
                    }(this.destroy)
                }), e.extend(this.getShim(), s)
            }
            var a = "html5",
                s = {};
            return i.addConstructor(a, o), s
        }), n("moxie/runtime/html5/file/Blob", ["moxie/runtime/html5/Runtime", "moxie/file/Blob"], function(e, t) {
            function i() {
                function e(e, t, i) {
                    var n;
                    if (!window.File.prototype.slice) return (n = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? n.call(e, t, i) : null;
                    try {
                        return e.slice(), e.slice(t, i)
                    } catch (r) {
                        return e.slice(t, i - t)
                    }
                }
                this.slice = function() {
                    return new t(this.getRuntime().uid, e.apply(this, arguments))
                }, this.destroy = function() {
                    this.getRuntime().getShim().removeInstance(this.uid)
                }
            }
            return e.Blob = i
        }), n("moxie/core/utils/Events", ["moxie/core/utils/Basic"], function(e) {
            function t() {
                this.returnValue = !1
            }

            function i() {
                this.cancelBubble = !0
            }
            var n = {},
                r = "moxie_" + e.guid(),
                o = function(o, a, s, l) {
                    var u, c;
                    a = a.toLowerCase(), o.addEventListener ? (u = s, o.addEventListener(a, u, !1)) : o.attachEvent && (u = function() {
                        var e = window.event;
                        e.target || (e.target = e.srcElement), e.preventDefault = t, e.stopPropagation = i, s(e)
                    }, o.attachEvent("on" + a, u)), o[r] || (o[r] = e.guid()), n.hasOwnProperty(o[r]) || (n[o[r]] = {}), c = n[o[r]], c.hasOwnProperty(a) || (c[a] = []), c[a].push({
                        func: u,
                        orig: s,
                        key: l
                    })
                },
                a = function(t, i, o) {
                    var a, s;
                    if (i = i.toLowerCase(), t[r] && n[t[r]] && n[t[r]][i]) {
                        a = n[t[r]][i];
                        for (var l = a.length - 1; l >= 0 && (a[l].orig !== o && a[l].key !== o || (t.removeEventListener ? t.removeEventListener(i, a[l].func, !1) : t.detachEvent && t.detachEvent("on" + i, a[l].func), a[l].orig = null, a[l].func = null, a.splice(l, 1), o === s)); l--);
                        if (a.length || delete n[t[r]][i], e.isEmptyObj(n[t[r]])) {
                            delete n[t[r]];
                            try {
                                delete t[r]
                            } catch (u) {
                                t[r] = s
                            }
                        }
                    }
                },
                s = function(t, i) {
                    t && t[r] && e.each(n[t[r]], function(e, n) {
                        a(t, n, i)
                    })
                };
            return {
                addEvent: o,
                removeEvent: a,
                removeAllEvents: s
            }
        }), n("moxie/runtime/html5/file/FileInput", ["moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function(e, t, i, n, r, o, a) {
            function s() {
                var e, s;
                i.extend(this, {
                    init: function(l) {
                        var u, c, d, p, f, m, h = this,
                            g = h.getRuntime();
                        e = l, d = o.extList2mimes(e.accept, g.can("filter_by_extension")), c = g.getShimContainer(), c.innerHTML = '<input id="' + g.uid + '" type="file" style="font-size:999px;opacity:0;"' + (e.multiple && g.can("select_multiple") ? "multiple" : "") + (e.directory && g.can("select_folder") ? "webkitdirectory directory" : "") + (d ? ' accept="' + d.join(",") + '"' : "") + " />", u = n.get(g.uid), i.extend(u.style, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }), p = n.get(e.browse_button), s = n.getStyle(p, "z-index") || "auto", g.can("summon_file_dialog") && ("static" === n.getStyle(p, "position") && (p.style.position = "relative"), r.addEvent(p, "click", function(e) {
                            var t = n.get(g.uid);
                            t && !t.disabled && t.click(), e.preventDefault()
                        }, h.uid), h.bind("Refresh", function() {
                            f = parseInt(s, 10) || 1, n.get(e.browse_button).style.zIndex = f, this.getRuntime().getShimContainer().style.zIndex = f - 1
                        })), m = g.can("summon_file_dialog") ? p : c, r.addEvent(m, "mouseover", function() {
                            h.trigger("mouseenter")
                        }, h.uid), r.addEvent(m, "mouseout", function() {
                            h.trigger("mouseleave")
                        }, h.uid), r.addEvent(m, "mousedown", function() {
                            h.trigger("mousedown")
                        }, h.uid), r.addEvent(n.get(e.container), "mouseup", function() {
                            h.trigger("mouseup")
                        }, h.uid), (g.can("summon_file_dialog") ? u : p).setAttribute("tabindex", -1), u.onchange = function v() {
                            if (h.files = [], i.each(this.files, function(i) {
                                    var n = "";
                                    return !(!e.directory || "." != i.name) || (i.webkitRelativePath && (n = "/" + i.webkitRelativePath.replace(/^\//, "")), i = new t(g.uid, i), i.relativePath = n, void h.files.push(i))
                                }), "IE" !== a.browser && "IEMobile" !== a.browser) this.value = "";
                            else {
                                var n = this.cloneNode(!0);
                                this.parentNode.replaceChild(n, this), n.onchange = v
                            }
                            h.files.length && h.trigger("change")
                        }, h.trigger({
                            type: "ready",
                            async: !0
                        }), c = null
                    },
                    setOption: function(e, t) {
                        var i = this.getRuntime(),
                            r = n.get(i.uid);
                        switch (e) {
                            case "accept":
                                if (t) {
                                    var a = t.mimes || o.extList2mimes(t, i.can("filter_by_extension"));
                                    r.setAttribute("accept", a.join(","))
                                } else r.removeAttribute("accept");
                                break;
                            case "directory":
                                t && i.can("select_folder") ? (r.setAttribute("directory", ""), r.setAttribute("webkitdirectory", "")) : (r.removeAttribute("directory"), r.removeAttribute("webkitdirectory"));
                                break;
                            case "multiple":
                                t && i.can("select_multiple") ? r.setAttribute("multiple", "") : r.removeAttribute("multiple")
                        }
                    },
                    disable: function(e) {
                        var t, i = this.getRuntime();
                        (t = n.get(i.uid)) && (t.disabled = !!e)
                    },
                    destroy: function() {
                        var t = this.getRuntime(),
                            i = t.getShim(),
                            o = t.getShimContainer(),
                            a = e && n.get(e.container),
                            l = e && n.get(e.browse_button);
                        a && r.removeAllEvents(a, this.uid), l && (r.removeAllEvents(l, this.uid), l.style.zIndex = s), o && (r.removeAllEvents(o, this.uid), o.innerHTML = ""), i.removeInstance(this.uid), e = o = a = l = i = null
                    }
                })
            }
            return e.FileInput = s
        }), n("moxie/runtime/html5/file/FileDrop", ["moxie/runtime/html5/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime"], function(e, t, i, n, r, o) {
            function a() {
                function e(e) {
                    if (!e.dataTransfer || !e.dataTransfer.types) return !1;
                    var t = i.toArray(e.dataTransfer.types || []);
                    return -1 !== i.inArray("Files", t) || -1 !== i.inArray("public.file-url", t) || -1 !== i.inArray("application/x-moz-file", t)
                }

                function a(e, i) {
                    if (l(e)) {
                        var n = new t(m, e);
                        n.relativePath = i || "", h.push(n)
                    }
                }

                function s(e) {
                    for (var t = [], n = 0; n < e.length; n++)[].push.apply(t, e[n].extensions.split(/\s*,\s*/));
                    return -1 === i.inArray("*", t) ? t : []
                }

                function l(e) {
                    if (!g.length) return !0;
                    var t = o.getFileExtension(e.name);
                    return !t || -1 !== i.inArray(t, g)
                }

                function u(e, t) {
                    var n = [];
                    i.each(e, function(e) {
                        var t = e.webkitGetAsEntry();
                        t && (t.isFile ? a(e.getAsFile(), t.fullPath) : n.push(t))
                    }), n.length ? c(n, t) : t()
                }

                function c(e, t) {
                    var n = [];
                    i.each(e, function(e) {
                        n.push(function(t) {
                            d(e, t)
                        })
                    }), i.inSeries(n, function() {
                        t()
                    })
                }

                function d(e, t) {
                    e.isFile ? e.file(function(i) {
                        a(i, e.fullPath), t()
                    }, function() {
                        t()
                    }) : e.isDirectory ? p(e, t) : t()
                }

                function p(e, t) {
                    function i(e) {
                        r.readEntries(function(t) {
                            t.length ? ([].push.apply(n, t), i(e)) : e()
                        }, e)
                    }
                    var n = [],
                        r = e.createReader();
                    i(function() {
                        c(n, t)
                    })
                }
                var f, m, h = [],
                    g = [];
                i.extend(this, {
                    init: function(t) {
                        var n, o = this;
                        f = t, m = o.ruid, g = s(f.accept), n = f.container, r.addEvent(n, "dragover", function(t) {
                            e(t) && (t.preventDefault(), t.dataTransfer.dropEffect = "copy")
                        }, o.uid), r.addEvent(n, "drop", function(t) {
                            e(t) && (t.preventDefault(), h = [], t.dataTransfer.items && t.dataTransfer.items[0].webkitGetAsEntry ? u(t.dataTransfer.items, function() {
                                o.files = h, o.trigger("drop")
                            }) : (i.each(t.dataTransfer.files, function(e) {
                                a(e)
                            }), o.files = h, o.trigger("drop")))
                        }, o.uid), r.addEvent(n, "dragenter", function() {
                            o.trigger("dragenter")
                        }, o.uid), r.addEvent(n, "dragleave", function() {
                            o.trigger("dragleave")
                        }, o.uid)
                    },
                    destroy: function() {
                        r.removeAllEvents(f && n.get(f.container), this.uid), m = h = g = f = null, this.getRuntime().getShim().removeInstance(this.uid)
                    }
                })
            }
            return e.FileDrop = a
        }), n("moxie/runtime/html5/file/FileReader", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Encode", "moxie/core/utils/Basic"], function(e, t, i) {
            function n() {
                function e(e) {
                    return t.atob(e.substring(e.indexOf("base64,") + 7))
                }
                var n, r = !1;
                i.extend(this, {
                    read: function(t, o) {
                        var a = this;
                        a.result = "", n = new window.FileReader, n.addEventListener("progress", function(e) {
                            a.trigger(e)
                        }), n.addEventListener("load", function(t) {
                            a.result = r ? e(n.result) : n.result, a.trigger(t)
                        }), n.addEventListener("error", function(e) {
                            a.trigger(e, n.error)
                        }), n.addEventListener("loadend", function(e) {
                            n = null, a.trigger(e)
                        }), "function" === i.typeOf(n[t]) ? (r = !1, n[t](o.getSource())) : "readAsBinaryString" === t && (r = !0, n.readAsDataURL(o.getSource()))
                    },
                    abort: function() {
                        n && n.abort()
                    },
                    destroy: function() {
                        n = null, this.getRuntime().getShim().removeInstance(this.uid)
                    }
                })
            }
            return e.FileReader = n
        }), n("moxie/runtime/html5/xhr/XMLHttpRequest", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Mime", "moxie/core/utils/Url", "moxie/file/File", "moxie/file/Blob", "moxie/xhr/FormData", "moxie/core/Exceptions", "moxie/core/utils/Env"], function(e, t, i, n, r, o, a, s, l) {
            function u() {
                function e(e, t) {
                    var i, n, r = this;
                    i = t.getBlob().getSource(), n = new window.FileReader, n.onload = function() {
                        t.append(t.getBlobName(), new o(null, {
                            type: i.type,
                            data: n.result
                        })), m.send.call(r, e, t)
                    }, n.readAsBinaryString(i)
                }

                function u() {
                    return !window.XMLHttpRequest || "IE" === l.browser && l.verComp(l.version, 8, "<") ? function() {
                        for (var e = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"], t = 0; t < e.length; t++) try {
                            return new ActiveXObject(e[t])
                        } catch (i) {}
                    }() : new window.XMLHttpRequest
                }

                function c(e) {
                    var t = e.responseXML,
                        i = e.responseText;
                    return "IE" === l.browser && i && t && !t.documentElement && /[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type")) && (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.validateOnParse = !1, t.loadXML(i)), t && ("IE" === l.browser && 0 !== t.parseError || !t.documentElement || "parsererror" === t.documentElement.tagName) ? null : t
                }

                function d(e) {
                    var t = "----moxieboundary" + (new Date).getTime(),
                        i = "--",
                        n = "\r\n",
                        r = "",
                        a = this.getRuntime();
                    if (!a.can("send_binary_string")) throw new s.RuntimeError(s.RuntimeError.NOT_SUPPORTED_ERR);
                    return p.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + t), e.each(function(e, a) {
                        r += e instanceof o ? i + t + n + 'Content-Disposition: form-data; name="' + a + '"; filename="' + unescape(encodeURIComponent(e.name || "blob")) + '"' + n + "Content-Type: " + (e.type || "application/octet-stream") + n + n + e.getSource() + n : i + t + n + 'Content-Disposition: form-data; name="' + a + '"' + n + n + unescape(encodeURIComponent(e)) + n
                    }), r += i + t + i + n
                }
                var p, f, m = this;
                t.extend(this, {
                    send: function(i, r) {
                        var s = this,
                            c = "Mozilla" === l.browser && l.verComp(l.version, 4, ">=") && l.verComp(l.version, 7, "<"),
                            m = "Android Browser" === l.browser,
                            h = !1;
                        if (f = i.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase(), p = u(), p.open(i.method, i.url, i.async, i.user, i.password), r instanceof o) r.isDetached() && (h = !0), r = r.getSource();
                        else if (r instanceof a) {
                            if (r.hasBlob())
                                if (r.getBlob().isDetached()) r = d.call(s, r), h = !0;
                                else if ((c || m) && "blob" === t.typeOf(r.getBlob().getSource()) && window.FileReader) return void e.call(s, i, r);
                            if (r instanceof a) {
                                var g = new window.FormData;
                                r.each(function(e, t) {
                                    e instanceof o ? g.append(t, e.getSource()) : g.append(t, e)
                                }), r = g
                            }
                        }
                        p.upload ? (i.withCredentials && (p.withCredentials = !0), p.addEventListener("load", function(e) {
                            s.trigger(e)
                        }), p.addEventListener("error", function(e) {
                            s.trigger(e)
                        }), p.addEventListener("progress", function(e) {
                            s.trigger(e)
                        }), p.upload.addEventListener("progress", function(e) {
                            s.trigger({
                                type: "UploadProgress",
                                loaded: e.loaded,
                                total: e.total
                            })
                        })) : p.onreadystatechange = function() {
                            switch (p.readyState) {
                                case 1:
                                    break;
                                case 2:
                                    break;
                                case 3:
                                    var e, t;
                                    try {
                                        n.hasSameOrigin(i.url) && (e = p.getResponseHeader("Content-Length") || 0), p.responseText && (t = p.responseText.length)
                                    } catch (r) {
                                        e = t = 0
                                    }
                                    s.trigger({
                                        type: "progress",
                                        lengthComputable: !!e,
                                        total: parseInt(e, 10),
                                        loaded: t
                                    });
                                    break;
                                case 4:
                                    p.onreadystatechange = function() {};
                                    try {
                                        if (p.status >= 200 && p.status < 400) {
                                            s.trigger("load");
                                            break
                                        }
                                    } catch (r) {}
                                    s.trigger("error")
                            }
                        }, t.isEmptyObj(i.headers) || t.each(i.headers, function(e, t) {
                            p.setRequestHeader(t, e)
                        }), "" !== i.responseType && "responseType" in p && (p.responseType = "json" !== i.responseType || l.can("return_response_type", "json") ? i.responseType : "text"), h ? p.sendAsBinary ? p.sendAsBinary(r) : function() {
                            for (var e = new Uint8Array(r.length), t = 0; t < r.length; t++) e[t] = 255 & r.charCodeAt(t);
                            p.send(e.buffer)
                        }() : p.send(r), s.trigger("loadstart")
                    },
                    getStatus: function() {
                        try {
                            if (p) return p.status
                        } catch (e) {}
                        return 0
                    },
                    getResponse: function(e) {
                        var t = this.getRuntime();
                        try {
                            switch (e) {
                                case "blob":
                                    var n = new r(t.uid, p.response),
                                        o = p.getResponseHeader("Content-Disposition");
                                    if (o) {
                                        var a = o.match(/filename=([\'\"'])([^\1]+)\1/);
                                        a && (f = a[2])
                                    }
                                    return n.name = f, n.type || (n.type = i.getFileMime(f)), n;
                                case "json":
                                    return l.can("return_response_type", "json") ? p.response : 200 === p.status && window.JSON ? JSON.parse(p.responseText) : null;
                                case "document":
                                    return c(p);
                                default:
                                    return "" !== p.responseText ? p.responseText : null
                            }
                        } catch (s) {
                            return null
                        }
                    },
                    getAllResponseHeaders: function() {
                        try {
                            return p.getAllResponseHeaders()
                        } catch (e) {}
                        return ""
                    },
                    abort: function() {
                        p && p.abort()
                    },
                    destroy: function() {
                        m = f = null, this.getRuntime().getShim().removeInstance(this.uid)
                    }
                })
            }
            return e.XMLHttpRequest = u
        }), n("moxie/runtime/html5/utils/BinaryReader", ["moxie/core/utils/Basic"], function(e) {
            function t(e) {
                e instanceof ArrayBuffer ? i.apply(this, arguments) : n.apply(this, arguments)
            }

            function i(t) {
                var i = new DataView(t);
                e.extend(this, {
                    readByteAt: function(e) {
                        return i.getUint8(e)
                    },
                    writeByteAt: function(e, t) {
                        i.setUint8(e, t)
                    },
                    SEGMENT: function(e, n, r) {
                        switch (arguments.length) {
                            case 2:
                                return t.slice(e, e + n);
                            case 1:
                                return t.slice(e);
                            case 3:
                                if (null === r && (r = new ArrayBuffer), r instanceof ArrayBuffer) {
                                    var o = new Uint8Array(this.length() - n + r.byteLength);
                                    e > 0 && o.set(new Uint8Array(t.slice(0, e)), 0), o.set(new Uint8Array(r), e), o.set(new Uint8Array(t.slice(e + n)), e + r.byteLength), this.clear(), t = o.buffer, i = new DataView(t);
                                    break
                                }
                            default:
                                return t
                        }
                    },
                    length: function() {
                        return t ? t.byteLength : 0
                    },
                    clear: function() {
                        i = t = null
                    }
                })
            }

            function n(t) {
                function i(e, i, n) {
                    n = 3 === arguments.length ? n : t.length - i - 1, t = t.substr(0, i) + e + t.substr(n + i)
                }
                e.extend(this, {
                    readByteAt: function(e) {
                        return t.charCodeAt(e)
                    },
                    writeByteAt: function(e, t) {
                        i(String.fromCharCode(t), e, 1)
                    },
                    SEGMENT: function(e, n, r) {
                        switch (arguments.length) {
                            case 1:
                                return t.substr(e);
                            case 2:
                                return t.substr(e, n);
                            case 3:
                                i(null !== r ? r : "", e, n);
                                break;
                            default:
                                return t
                        }
                    },
                    length: function() {
                        return t ? t.length : 0
                    },
                    clear: function() {
                        t = null
                    }
                })
            }
            return e.extend(t.prototype, {
                littleEndian: !1,
                read: function(e, t) {
                    var i, n, r;
                    if (e + t > this.length()) throw new Error("You are trying to read outside the source boundaries.");
                    for (n = this.littleEndian ? 0 : -8 * (t - 1), r = 0, i = 0; t > r; r++) i |= this.readByteAt(e + r) << Math.abs(n + 8 * r);
                    return i
                },
                write: function(e, t, i) {
                    var n, r;
                    if (e > this.length()) throw new Error("You are trying to write outside the source boundaries.");
                    for (n = this.littleEndian ? 0 : -8 * (i - 1), r = 0; i > r; r++) this.writeByteAt(e + r, 255 & t >> Math.abs(n + 8 * r))
                },
                BYTE: function(e) {
                    return this.read(e, 1)
                },
                SHORT: function(e) {
                    return this.read(e, 2)
                },
                LONG: function(e) {
                    return this.read(e, 4)
                },
                SLONG: function(e) {
                    var t = this.read(e, 4);
                    return t > 2147483647 ? t - 4294967296 : t
                },
                CHAR: function(e) {
                    return String.fromCharCode(this.read(e, 1))
                },
                STRING: function(e, t) {
                    return this.asArray("CHAR", e, t).join("")
                },
                asArray: function(e, t, i) {
                    for (var n = [], r = 0; i > r; r++) n[r] = this[e](t + r);
                    return n
                }
            }), t
        }), n("moxie/runtime/html5/image/JPEGHeaders", ["moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions"], function(e, t) {
            return function i(n) {
                var r, o, a, s = [],
                    l = 0;
                if (r = new e(n), 65496 !== r.SHORT(0)) throw r.clear(), new t.ImageError(t.ImageError.WRONG_FORMAT);
                for (o = 2; o <= r.length();)
                    if (a = r.SHORT(o), a >= 65488 && 65495 >= a) o += 2;
                    else {
                        if (65498 === a || 65497 === a) break;
                        l = r.SHORT(o + 2) + 2, a >= 65505 && 65519 >= a && s.push({
                            hex: a,
                            name: "APP" + (15 & a),
                            start: o,
                            length: l,
                            segment: r.SEGMENT(o, l)
                        }), o += l
                    } return r.clear(), {
                    headers: s,
                    restore: function(t) {
                        var i, n, r;
                        for (r = new e(t), o = 65504 == r.SHORT(2) ? 4 + r.SHORT(4) : 2, n = 0, i = s.length; i > n; n++) r.SEGMENT(o, 0, s[n].segment), o += s[n].length;
                        return t = r.SEGMENT(), r.clear(), t
                    },
                    strip: function(t) {
                        var n, r, o, a;
                        for (o = new i(t), r = o.headers, o.purge(), n = new e(t), a = r.length; a--;) n.SEGMENT(r[a].start, r[a].length, "");
                        return t = n.SEGMENT(), n.clear(), t
                    },
                    get: function(e) {
                        for (var t = [], i = 0, n = s.length; n > i; i++) s[i].name === e.toUpperCase() && t.push(s[i].segment);
                        return t
                    },
                    set: function(e, t) {
                        var i, n, r, o = [];
                        for ("string" == typeof t ? o.push(t) : o = t, i = n = 0, r = s.length; r > i && (s[i].name === e.toUpperCase() && (s[i].segment = o[n], s[i].length = o[n].length, n++), !(n >= o.length)); i++);
                    },
                    purge: function() {
                        this.headers = s = []
                    }
                }
            }
        }), n("moxie/runtime/html5/image/ExifParser", ["moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader", "moxie/core/Exceptions"], function(e, i, n) {
            function r(o) {
                function a(i, r) {
                    var o, a, s, l, u, p, f, m, h = this,
                        g = [],
                        v = {},
                        x = {
                            1: "BYTE",
                            7: "UNDEFINED",
                            2: "ASCII",
                            3: "SHORT",
                            4: "LONG",
                            5: "RATIONAL",
                            9: "SLONG",
                            10: "SRATIONAL"
                        },
                        E = {
                            BYTE: 1,
                            UNDEFINED: 1,
                            ASCII: 1,
                            SHORT: 2,
                            LONG: 4,
                            RATIONAL: 8,
                            SLONG: 4,
                            SRATIONAL: 8
                        };
                    for (o = h.SHORT(i), a = 0; o > a; a++)
                        if (g = [], f = i + 2 + 12 * a, s = r[h.SHORT(f)], s !== t) {
                            if (l = x[h.SHORT(f += 2)], u = h.LONG(f += 2), p = E[l], !p) throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                            if (f += 4, p * u > 4 && (f = h.LONG(f) + d.tiffHeader), f + p * u >= this.length()) throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                            "ASCII" !== l ? (g = h.asArray(l, f, u), m = 1 == u ? g[0] : g, v[s] = c.hasOwnProperty(s) && "object" != typeof m ? c[s][m] : m) : v[s] = e.trim(h.STRING(f, u).replace(/\0$/, ""))
                        } return v
                }

                function s(e, t, i) {
                    var n, r, o, a = 0;
                    if ("string" == typeof t) {
                        var s = u[e.toLowerCase()];
                        for (var l in s)
                            if (s[l] === t) {
                                t = l;
                                break
                            }
                    }
                    n = d[e.toLowerCase() + "IFD"], r = this.SHORT(n);
                    for (var c = 0; r > c; c++)
                        if (o = n + 12 * c + 2, this.SHORT(o) == t) {
                            a = o + 8;
                            break
                        } if (!a) return !1;
                    try {
                        this.write(a, i, 4)
                    } catch (p) {
                        return !1
                    }
                    return !0
                }
                var l, u, c, d, p, f;
                if (i.call(this, o), u = {
                        tiff: {
                            274: "Orientation",
                            270: "ImageDescription",
                            271: "Make",
                            272: "Model",
                            305: "Software",
                            34665: "ExifIFDPointer",
                            34853: "GPSInfoIFDPointer"
                        },
                        exif: {
                            36864: "ExifVersion",
                            40961: "ColorSpace",
                            40962: "PixelXDimension",
                            40963: "PixelYDimension",
                            36867: "DateTimeOriginal",
                            33434: "ExposureTime",
                            33437: "FNumber",
                            34855: "ISOSpeedRatings",
                            37377: "ShutterSpeedValue",
                            37378: "ApertureValue",
                            37383: "MeteringMode",
                            37384: "LightSource",
                            37385: "Flash",
                            37386: "FocalLength",
                            41986: "ExposureMode",
                            41987: "WhiteBalance",
                            41990: "SceneCaptureType",
                            41988: "DigitalZoomRatio",
                            41992: "Contrast",
                            41993: "Saturation",
                            41994: "Sharpness"
                        },
                        gps: {
                            0: "GPSVersionID",
                            1: "GPSLatitudeRef",
                            2: "GPSLatitude",
                            3: "GPSLongitudeRef",
                            4: "GPSLongitude"
                        },
                        thumb: {
                            513: "JPEGInterchangeFormat",
                            514: "JPEGInterchangeFormatLength"
                        }
                    }, c = {
                        ColorSpace: {
                            1: "sRGB",
                            0: "Uncalibrated"
                        },
                        MeteringMode: {
                            0: "Unknown",
                            1: "Average",
                            2: "CenterWeightedAverage",
                            3: "Spot",
                            4: "MultiSpot",
                            5: "Pattern",
                            6: "Partial",
                            255: "Other"
                        },
                        LightSource: {
                            1: "Daylight",
                            2: "Fliorescent",
                            3: "Tungsten",
                            4: "Flash",
                            9: "Fine weather",
                            10: "Cloudy weather",
                            11: "Shade",
                            12: "Daylight fluorescent (D 5700 - 7100K)",
                            13: "Day white fluorescent (N 4600 -5400K)",
                            14: "Cool white fluorescent (W 3900 - 4500K)",
                            15: "White fluorescent (WW 3200 - 3700K)",
                            17: "Standard light A",
                            18: "Standard light B",
                            19: "Standard light C",
                            20: "D55",
                            21: "D65",
                            22: "D75",
                            23: "D50",
                            24: "ISO studio tungsten",
                            255: "Other"
                        },
                        Flash: {
                            0: "Flash did not fire",
                            1: "Flash fired",
                            5: "Strobe return light not detected",
                            7: "Strobe return light detected",
                            9: "Flash fired, compulsory flash mode",
                            13: "Flash fired, compulsory flash mode, return light not detected",
                            15: "Flash fired, compulsory flash mode, return light detected",
                            16: "Flash did not fire, compulsory flash mode",
                            24: "Flash did not fire, auto mode",
                            25: "Flash fired, auto mode",
                            29: "Flash fired, auto mode, return light not detected",
                            31: "Flash fired, auto mode, return light detected",
                            32: "No flash function",
                            65: "Flash fired, red-eye reduction mode",
                            69: "Flash fired, red-eye reduction mode, return light not detected",
                            71: "Flash fired, red-eye reduction mode, return light detected",
                            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                            89: "Flash fired, auto mode, red-eye reduction mode",
                            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                        },
                        ExposureMode: {
                            0: "Auto exposure",
                            1: "Manual exposure",
                            2: "Auto bracket"
                        },
                        WhiteBalance: {
                            0: "Auto white balance",
                            1: "Manual white balance"
                        },
                        SceneCaptureType: {
                            0: "Standard",
                            1: "Landscape",
                            2: "Portrait",
                            3: "Night scene"
                        },
                        Contrast: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        Saturation: {
                            0: "Normal",
                            1: "Low saturation",
                            2: "High saturation"
                        },
                        Sharpness: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        GPSLatitudeRef: {
                            N: "North latitude",
                            S: "South latitude"
                        },
                        GPSLongitudeRef: {
                            E: "East longitude",
                            W: "West longitude"
                        }
                    }, d = {
                        tiffHeader: 10
                    }, p = d.tiffHeader, l = {
                        clear: this.clear
                    }, e.extend(this, {
                        read: function() {
                            try {
                                return r.prototype.read.apply(this, arguments)
                            } catch (e) {
                                throw new n.ImageError(n.ImageError.INVALID_META_ERR)
                            }
                        },
                        write: function() {
                            try {
                                return r.prototype.write.apply(this, arguments)
                            } catch (e) {
                                throw new n.ImageError(n.ImageError.INVALID_META_ERR)
                            }
                        },
                        UNDEFINED: function() {
                            return this.BYTE.apply(this, arguments)
                        },
                        RATIONAL: function(e) {
                            return this.LONG(e) / this.LONG(e + 4)
                        },
                        SRATIONAL: function(e) {
                            return this.SLONG(e) / this.SLONG(e + 4)
                        },
                        ASCII: function(e) {
                            return this.CHAR(e)
                        },
                        TIFF: function() {
                            return f || null
                        },
                        EXIF: function() {
                            var t = null;
                            if (d.exifIFD) {
                                try {
                                    t = a.call(this, d.exifIFD, u.exif)
                                } catch (i) {
                                    return null
                                }
                                if (t.ExifVersion && "array" === e.typeOf(t.ExifVersion)) {
                                    for (var n = 0, r = ""; n < t.ExifVersion.length; n++) r += String.fromCharCode(t.ExifVersion[n]);
                                    t.ExifVersion = r
                                }
                            }
                            return t
                        },
                        GPS: function() {
                            var t = null;
                            if (d.gpsIFD) {
                                try {
                                    t = a.call(this, d.gpsIFD, u.gps)
                                } catch (i) {
                                    return null
                                }
                                t.GPSVersionID && "array" === e.typeOf(t.GPSVersionID) && (t.GPSVersionID = t.GPSVersionID.join("."))
                            }
                            return t
                        },
                        thumb: function() {
                            if (d.IFD1) try {
                                var e = a.call(this, d.IFD1, u.thumb);
                                if ("JPEGInterchangeFormat" in e) return this.SEGMENT(d.tiffHeader + e.JPEGInterchangeFormat, e.JPEGInterchangeFormatLength)
                            } catch (t) {}
                            return null
                        },
                        setExif: function(e, t) {
                            return ("PixelXDimension" === e || "PixelYDimension" === e) && s.call(this, "exif", e, t)
                        },
                        clear: function() {
                            l.clear(), o = u = c = f = d = l = null
                        }
                    }), 65505 !== this.SHORT(0) || "EXIF\0" !== this.STRING(4, 5).toUpperCase()) throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                if (this.littleEndian = 18761 == this.SHORT(p), 42 !== this.SHORT(p += 2)) throw new n.ImageError(n.ImageError.INVALID_META_ERR);
                d.IFD0 = d.tiffHeader + this.LONG(p += 2), f = a.call(this, d.IFD0, u.tiff), "ExifIFDPointer" in f && (d.exifIFD = d.tiffHeader + f.ExifIFDPointer, delete f.ExifIFDPointer), "GPSInfoIFDPointer" in f && (d.gpsIFD = d.tiffHeader + f.GPSInfoIFDPointer, delete f.GPSInfoIFDPointer), e.isEmptyObj(f) && (f = null);
                var m = this.LONG(d.IFD0 + 12 * this.SHORT(d.IFD0) + 2);
                m && (d.IFD1 = d.tiffHeader + m)
            }
            return r.prototype = i.prototype, r
        }), n("moxie/runtime/html5/image/JPEG", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEGHeaders", "moxie/runtime/html5/utils/BinaryReader", "moxie/runtime/html5/image/ExifParser"], function(e, t, i, n, r) {
            function o(o) {
                function a(e) {
                    var t, i, n = 0;
                    for (e || (e = u); n <= e.length();) {
                        if (t = e.SHORT(n += 2), t >= 65472 && 65475 >= t) return n += 5, {
                            height: e.SHORT(n),
                            width: e.SHORT(n += 2)
                        };
                        i = e.SHORT(n += 2), n += i - 2
                    }
                    return null
                }

                function s() {
                    var e, t, i = d.thumb();
                    return i && (e = new n(i), t = a(e), e.clear(), t) ? (t.data = i, t) : null
                }

                function l() {
                    d && c && u && (d.clear(), c.purge(), u.clear(), p = c = d = u = null)
                }
                var u, c, d, p;
                if (u = new n(o), 65496 !== u.SHORT(0)) throw new t.ImageError(t.ImageError.WRONG_FORMAT);
                c = new i(o);
                try {
                    d = new r(c.get("app1")[0])
                } catch (f) {}
                p = a.call(this), e.extend(this, {
                    type: "image/jpeg",
                    size: u.length(),
                    width: p && p.width || 0,
                    height: p && p.height || 0,
                    setExif: function(t, i) {
                        return !!d && ("object" === e.typeOf(t) ? e.each(t, function(e, t) {
                            d.setExif(t, e)
                        }) : d.setExif(t, i), void c.set("app1", d.SEGMENT()))
                    },
                    writeHeaders: function() {
                        return arguments.length ? c.restore(arguments[0]) : c.restore(o)
                    },
                    stripHeaders: function(e) {
                        return c.strip(e)
                    },
                    purge: function() {
                        l.call(this)
                    }
                }), d && (this.meta = {
                    tiff: d.TIFF(),
                    exif: d.EXIF(),
                    gps: d.GPS(),
                    thumb: s()
                })
            }
            return o
        }), n("moxie/runtime/html5/image/PNG", ["moxie/core/Exceptions", "moxie/core/utils/Basic", "moxie/runtime/html5/utils/BinaryReader"], function(e, t, i) {
            function n(n) {
                function r() {
                    var e, t;
                    return e = a.call(this, 8), "IHDR" == e.type ? (t = e.start, {
                        width: s.LONG(t),
                        height: s.LONG(t += 4)
                    }) : null
                }

                function o() {
                    s && (s.clear(), n = c = l = u = s = null)
                }

                function a(e) {
                    var t, i, n, r;
                    return t = s.LONG(e), i = s.STRING(e += 4, 4), n = e += 4, r = s.LONG(e + t), {
                        length: t,
                        type: i,
                        start: n,
                        CRC: r
                    }
                }
                var s, l, u, c;
                s = new i(n),
                    function() {
                        var t = 0,
                            i = 0,
                            n = [35152, 20039, 3338, 6666];
                        for (i = 0; i < n.length; i++, t += 2)
                            if (n[i] != s.SHORT(t)) throw new e.ImageError(e.ImageError.WRONG_FORMAT)
                    }(), c = r.call(this), t.extend(this, {
                        type: "image/png",
                        size: s.length(),
                        width: c.width,
                        height: c.height,
                        purge: function() {
                            o.call(this)
                        }
                    }), o.call(this)
            }
            return n
        }), n("moxie/runtime/html5/image/ImageInfo", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/html5/image/JPEG", "moxie/runtime/html5/image/PNG"], function(e, t, i, n) {
            return function(r) {
                var o, a = [i, n];
                o = function() {
                    for (var e = 0; e < a.length; e++) try {
                        return new a[e](r)
                    } catch (i) {}
                    throw new t.ImageError(t.ImageError.WRONG_FORMAT)
                }(), e.extend(this, {
                    type: "",
                    size: 0,
                    width: 0,
                    height: 0,
                    setExif: function() {},
                    writeHeaders: function(e) {
                        return e
                    },
                    stripHeaders: function(e) {
                        return e
                    },
                    purge: function() {
                        r = null
                    }
                }), e.extend(this, o), this.purge = function() {
                    o.purge(), o = null
                }
            }
        }), n("moxie/runtime/html5/image/ResizerCanvas", [], function() {
            function e(i, n, r) {
                var o = i.width > i.height ? "width" : "height",
                    a = Math.round(i[o] * n),
                    s = !1;
                "nearest" !== r && (.5 > n || n > 2) && (n = .5 > n ? .5 : 2, s = !0);
                var l = t(i, n);
                return s ? e(l, a / l[o], r) : l
            }

            function t(e, t) {
                var i = e.width,
                    n = e.height,
                    r = Math.round(i * t),
                    o = Math.round(n * t),
                    a = document.createElement("canvas");
                return a.width = r, a.height = o, a.getContext("2d").drawImage(e, 0, 0, i, n, 0, 0, r, o), e = null, a
            }
            return {
                scale: e
            }
        }), n("moxie/runtime/html5/image/Image", ["moxie/runtime/html5/Runtime", "moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/core/utils/Encode", "moxie/file/Blob", "moxie/file/File", "moxie/runtime/html5/image/ImageInfo", "moxie/runtime/html5/image/ResizerCanvas", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function(e, t, i, n, r, o, a, s, l) {
            function u() {
                function e() {
                    if (!x && !g) throw new i.ImageError(i.DOMException.INVALID_STATE_ERR);
                    return x || g
                }

                function u() {
                    var t = e();
                    return "canvas" == t.nodeName.toLowerCase() ? t : (x = document.createElement("canvas"), x.width = t.width, x.height = t.height, x.getContext("2d").drawImage(t, 0, 0), x)
                }

                function c(e) {
                    return n.atob(e.substring(e.indexOf("base64,") + 7))
                }

                function d(e, t) {
                    return "data:" + (t || "") + ";base64," + n.btoa(e)
                }

                function p(e) {
                    var t = this;
                    g = new Image, g.onerror = function() {
                        h.call(this), t.trigger("error", i.ImageError.WRONG_FORMAT)
                    }, g.onload = function() {
                        t.trigger("load")
                    }, g.src = "data:" == e.substr(0, 5) ? e : d(e, y.type)
                }

                function f(e, t) {
                    var n, r = this;
                    return window.FileReader ? (n = new FileReader, n.onload = function() {
                        t.call(r, this.result)
                    }, n.onerror = function() {
                        r.trigger("error", i.ImageError.WRONG_FORMAT)
                    }, void n.readAsDataURL(e)) : t.call(this, e.getAsDataURL())
                }

                function m(e, i) {
                    var n = Math.PI / 180,
                        r = document.createElement("canvas"),
                        o = r.getContext("2d"),
                        a = e.width,
                        s = e.height;
                    switch (t.inArray(i, [5, 6, 7, 8]) > -1 ? (r.width = s, r.height = a) : (r.width = a, r.height = s), i) {
                        case 2:
                            o.translate(a, 0), o.scale(-1, 1);
                            break;
                        case 3:
                            o.translate(a, s), o.rotate(180 * n);
                            break;
                        case 4:
                            o.translate(0, s), o.scale(1, -1);
                            break;
                        case 5:
                            o.rotate(90 * n), o.scale(1, -1);
                            break;
                        case 6:
                            o.rotate(90 * n), o.translate(0, -s);
                            break;
                        case 7:
                            o.rotate(90 * n), o.translate(a, -s), o.scale(-1, 1);
                            break;
                        case 8:
                            o.rotate(-90 * n), o.translate(-a, 0)
                    }
                    return o.drawImage(e, 0, 0, a, s), r
                }

                function h() {
                    v && (v.purge(), v = null), E = g = x = y = null, w = !1
                }
                var g, v, x, E, y, b = this,
                    w = !1,
                    _ = !0;
                t.extend(this, {
                    loadFromBlob: function(e) {
                        var t = this.getRuntime(),
                            n = !(arguments.length > 1) || arguments[1];
                        if (!t.can("access_binary")) throw new i.RuntimeError(i.RuntimeError.NOT_SUPPORTED_ERR);
                        return y = e, e.isDetached() ? (E = e.getSource(), void p.call(this, E)) : void f.call(this, e.getSource(), function(e) {
                            n && (E = c(e)), p.call(this, e)
                        })
                    },
                    loadFromImage: function(e, t) {
                        this.meta = e.meta, y = new o(null, {
                            name: e.name,
                            size: e.size,
                            type: e.type
                        }), p.call(this, t ? E = e.getAsBinaryString() : e.getAsDataURL())
                    },
                    getInfo: function() {
                        var t, i = this.getRuntime();
                        return !v && E && i.can("access_image_binary") && (v = new a(E)), t = {
                            width: e().width || 0,
                            height: e().height || 0,
                            type: y.type || l.getFileMime(y.name),
                            size: E && E.length || y.size || 0,
                            name: y.name || "",
                            meta: null
                        }, _ && (t.meta = v && v.meta || this.meta || {}, !t.meta || !t.meta.thumb || t.meta.thumb.data instanceof r || (t.meta.thumb.data = new r(null, {
                            type: "image/jpeg",
                            data: t.meta.thumb.data
                        }))), t
                    },
                    resize: function(t, i, n) {
                        var r = document.createElement("canvas");
                        if (r.width = t.width, r.height = t.height, r.getContext("2d").drawImage(e(), t.x, t.y, t.width, t.height, 0, 0, r.width, r.height), x = s.scale(r, i), _ = n.preserveHeaders, !_) {
                            var o = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1;
                            x = m(x, o)
                        }
                        this.width = x.width, this.height = x.height, w = !0, this.trigger("Resize")
                    },
                    getAsCanvas: function() {
                        return x || (x = u()), x.id = this.uid + "_canvas", x
                    },
                    getAsBlob: function(e, t) {
                        return e !== this.type ? (w = !0, new o(null, {
                            name: y.name || "",
                            type: e,
                            data: b.getAsDataURL(e, t)
                        })) : new o(null, {
                            name: y.name || "",
                            type: e,
                            data: b.getAsBinaryString(e, t)
                        })
                    },
                    getAsDataURL: function(e) {
                        var t = arguments[1] || 90;
                        if (!w) return g.src;
                        if (u(), "image/jpeg" !== e) return x.toDataURL("image/png");
                        try {
                            return x.toDataURL("image/jpeg", t / 100)
                        } catch (i) {
                            return x.toDataURL("image/jpeg")
                        }
                    },
                    getAsBinaryString: function(e, t) {
                        if (!w) return E || (E = c(b.getAsDataURL(e, t))), E;
                        if ("image/jpeg" !== e) E = c(b.getAsDataURL(e, t));
                        else {
                            var i;
                            t || (t = 90), u();
                            try {
                                i = x.toDataURL("image/jpeg", t / 100)
                            } catch (n) {
                                i = x.toDataURL("image/jpeg")
                            }
                            E = c(i), v && (E = v.stripHeaders(E), _ && (v.meta && v.meta.exif && v.setExif({
                                PixelXDimension: this.width,
                                PixelYDimension: this.height
                            }), E = v.writeHeaders(E)), v.purge(), v = null)
                        }
                        return w = !1, E
                    },
                    destroy: function() {
                        b = null, h.call(this), this.getRuntime().getShim().removeInstance(this.uid)
                    }
                })
            }
            return e.Image = u
        }), n("moxie/runtime/flash/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function(e, t, i, n, o) {
            function a() {
                var e;
                try {
                    e = navigator.plugins["Shockwave Flash"], e = e.description
                } catch (t) {
                    try {
                        e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
                    } catch (i) {
                        e = "0.0"
                    }
                }
                return e = e.match(/\d+/g), parseFloat(e[0] + "." + e[1])
            }

            function s(e) {
                var n = i.get(e);
                n && "OBJECT" == n.nodeName && ("IE" === t.browser ? (n.style.display = "none", function r() {
                    4 == n.readyState ? l(e) : setTimeout(r, 10)
                }()) : n.parentNode.removeChild(n))
            }

            function l(e) {
                var t = i.get(e);
                if (t) {
                    for (var n in t) "function" == typeof t[n] && (t[n] = null);
                    t.parentNode.removeChild(t)
                }
            }

            function u(l) {
                var u, p = this;
                l = e.extend({
                    swf_url: t.swf_url
                }, l), o.call(this, l, c, {
                    access_binary: function(e) {
                        return e && "browser" === p.mode
                    },
                    access_image_binary: function(e) {
                        return e && "browser" === p.mode
                    },
                    display_media: o.capTest(r("moxie/image/Image")),
                    do_cors: o.capTrue,
                    drag_and_drop: !1,
                    report_upload_progress: function() {
                        return "client" === p.mode
                    },
                    resize_image: o.capTrue,
                    return_response_headers: !1,
                    return_response_type: function(t) {
                        return !("json" !== t || !window.JSON) || (!e.arrayDiff(t, ["", "text", "document"]) || "browser" === p.mode)
                    },
                    return_status_code: function(t) {
                        return "browser" === p.mode || !e.arrayDiff(t, [200, 404])
                    },
                    select_file: o.capTrue,
                    select_multiple: o.capTrue,
                    send_binary_string: function(e) {
                        return e && "browser" === p.mode
                    },
                    send_browser_cookies: function(e) {
                        return e && "browser" === p.mode
                    },
                    send_custom_headers: function(e) {
                        return e && "browser" === p.mode
                    },
                    send_multipart: o.capTrue,
                    slice_blob: function(e) {
                        return e && "browser" === p.mode
                    },
                    stream_upload: function(e) {
                        return e && "browser" === p.mode
                    },
                    summon_file_dialog: !1,
                    upload_filesize: function(t) {
                        return e.parseSizeStr(t) <= 2097152 || "client" === p.mode
                    },
                    use_http_method: function(t) {
                        return !e.arrayDiff(t, ["GET", "POST"])
                    }
                }, {
                    access_binary: function(e) {
                        return e ? "browser" : "client"
                    },
                    access_image_binary: function(e) {
                        return e ? "browser" : "client"
                    },
                    report_upload_progress: function(e) {
                        return e ? "browser" : "client"
                    },
                    return_response_type: function(t) {
                        return e.arrayDiff(t, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"]
                    },
                    return_status_code: function(t) {
                        return e.arrayDiff(t, [200, 404]) ? "browser" : ["client", "browser"]
                    },
                    send_binary_string: function(e) {
                        return e ? "browser" : "client"
                    },
                    send_browser_cookies: function(e) {
                        return e ? "browser" : "client"
                    },
                    send_custom_headers: function(e) {
                        return e ? "browser" : "client"
                    },
                    slice_blob: function(e) {
                        return e ? "browser" : "client"
                    },
                    stream_upload: function(e) {
                        return e ? "client" : "browser"
                    },
                    upload_filesize: function(t) {
                        return e.parseSizeStr(t) >= 2097152 ? "client" : "browser"
                    }
                }, "client"), a() < 11.3 && (this.mode = !1), e.extend(this, {
                    getShim: function() {
                        return i.get(this.uid)
                    },
                    shimExec: function(e, t) {
                        var i = [].slice.call(arguments, 2);
                        return p.getShim().exec(this.uid, e, t, i)
                    },
                    init: function() {
                        var i, r, a;
                        a = this.getShimContainer(), e.extend(a.style, {
                            position: "absolute",
                            top: "-8px",
                            left: "-8px",
                            width: "9px",
                            height: "9px",
                            overflow: "hidden"
                        }), i = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + l.swf_url + '" ', "IE" === t.browser && (i += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), i += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + l.swf_url + '" /><param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + o.getGlobalEventTarget() + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>', "IE" === t.browser ? (r = document.createElement("div"), a.appendChild(r), r.outerHTML = i, r = a = null) : a.innerHTML = i, u = setTimeout(function() {
                            p && !p.initialized && p.trigger("Error", new n.RuntimeError(n.RuntimeError.NOT_INIT_ERR))
                        }, 5e3)
                    },
                    destroy: function(e) {
                        return function() {
                            s(p.uid), e.call(p), clearTimeout(u), l = u = e = p = null
                        }
                    }(this.destroy)
                }, d)
            }
            var c = "flash",
                d = {};
            return o.addConstructor(c, u), d
        }), n("moxie/runtime/flash/file/Blob", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function(e, t) {
            var i = {
                slice: function(e, i, n, r) {
                    var o = this.getRuntime();
                    return 0 > i ? i = Math.max(e.size + i, 0) : i > 0 && (i = Math.min(i, e.size)), 0 > n ? n = Math.max(e.size + n, 0) : n > 0 && (n = Math.min(n, e.size)), e = o.shimExec.call(this, "Blob", "slice", i, n, r || ""), e && (e = new t(o.uid, e)), e
                }
            };
            return e.Blob = i
        }), n("moxie/runtime/flash/file/FileInput", ["moxie/runtime/flash/Runtime", "moxie/file/File", "moxie/core/utils/Dom", "moxie/core/utils/Basic"], function(e, t, i, n) {
            var r = {
                init: function(e) {
                    var r = this,
                        o = this.getRuntime(),
                        a = i.get(e.browse_button);
                    a && (a.setAttribute("tabindex", -1), a = null), this.bind("Change", function() {
                        var e = o.shimExec.call(r, "FileInput", "getFiles");
                        r.files = [], n.each(e, function(e) {
                            r.files.push(new t(o.uid, e))
                        })
                    }, 999), this.getRuntime().shimExec.call(this, "FileInput", "init", {
                        accept: e.accept,
                        multiple: e.multiple
                    }), this.trigger("ready")
                }
            };
            return e.FileInput = r
        }), n("moxie/runtime/flash/file/FileReader", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function(e, t) {
            function i(e, i) {
                switch (i) {
                    case "readAsText":
                        return t.atob(e, "utf8");
                    case "readAsBinaryString":
                        return t.atob(e);
                    case "readAsDataURL":
                        return e
                }
                return null
            }
            var n = {
                read: function(e, t) {
                    var n = this;
                    return n.result = "", "readAsDataURL" === e && (n.result = "data:" + (t.type || "") + ";base64,"), n.bind("Progress", function(t, r) {
                        r && (n.result += i(r, e))
                    }, 999), n.getRuntime().shimExec.call(this, "FileReader", "readAsBase64", t.uid)
                }
            };
            return e.FileReader = n
        }), n("moxie/runtime/flash/file/FileReaderSync", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Encode"], function(e, t) {
            function i(e, i) {
                switch (i) {
                    case "readAsText":
                        return t.atob(e, "utf8");
                    case "readAsBinaryString":
                        return t.atob(e);
                    case "readAsDataURL":
                        return e
                }
                return null
            }
            var n = {
                read: function(e, t) {
                    var n, r = this.getRuntime();
                    return (n = r.shimExec.call(this, "FileReaderSync", "readAsBase64", t.uid)) ? ("readAsDataURL" === e && (n = "data:" + (t.type || "") + ";base64," + n), i(n, e, t.type)) : null
                }
            };
            return e.FileReaderSync = n
        }), n("moxie/runtime/flash/runtime/Transporter", ["moxie/runtime/flash/Runtime", "moxie/file/Blob"], function(e, t) {
            var i = {
                getAsBlob: function(e) {
                    var i = this.getRuntime(),
                        n = i.shimExec.call(this, "Transporter", "getAsBlob", e);
                    return n ? new t(i.uid, n) : null
                }
            };
            return e.Transporter = i
        }), n("moxie/runtime/flash/xhr/XMLHttpRequest", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/file/File", "moxie/file/FileReaderSync", "moxie/runtime/flash/file/FileReaderSync", "moxie/xhr/FormData", "moxie/runtime/Transporter", "moxie/runtime/flash/runtime/Transporter"], function(e, t, i, n, r, o, a, s) {
            var l = {
                send: function(e, n) {
                    function r() {
                        e.transport = c.mode, c.shimExec.call(u, "XMLHttpRequest", "send", e, n)
                    }

                    function o(e, t) {
                        c.shimExec.call(u, "XMLHttpRequest", "appendBlob", e, t.uid), n = null, r()
                    }

                    function l(e, t) {
                        var i = new s;
                        i.bind("TransportingComplete", function() {
                            t(this.result)
                        }), i.transport(e.getSource(), e.type, {
                            ruid: c.uid
                        })
                    }
                    var u = this,
                        c = u.getRuntime();
                    if (t.isEmptyObj(e.headers) || t.each(e.headers, function(e, t) {
                            c.shimExec.call(u, "XMLHttpRequest", "setRequestHeader", t, e.toString())
                        }), n instanceof a) {
                        var d;
                        if (n.each(function(e, t) {
                                e instanceof i ? d = t : c.shimExec.call(u, "XMLHttpRequest", "append", t, e)
                            }), n.hasBlob()) {
                            var p = n.getBlob();
                            p.isDetached() ? l(p, function(e) {
                                p.destroy(), o(d, e)
                            }) : o(d, p)
                        } else n = null, r()
                    } else n instanceof i ? n.isDetached() ? l(n, function(e) {
                        n.destroy(), n = e.uid, r()
                    }) : (n = n.uid, r()) : r()
                },
                getResponse: function(e) {
                    var i, o, a = this.getRuntime();
                    if (o = a.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob")) {
                        if (o = new n(a.uid, o), "blob" === e) return o;
                        try {
                            if (i = new r, ~t.inArray(e, ["", "text"])) return i.readAsText(o);
                            if ("json" === e && window.JSON) return JSON.parse(i.readAsText(o))
                        } finally {
                            o.destroy()
                        }
                    }
                    return null
                },
                abort: function() {
                    var e = this.getRuntime();
                    e.shimExec.call(this, "XMLHttpRequest", "abort"), this.dispatchEvent("readystatechange"), this.dispatchEvent("abort")
                }
            };
            return e.XMLHttpRequest = l
        }), n("moxie/runtime/flash/image/Image", ["moxie/runtime/flash/Runtime", "moxie/core/utils/Basic", "moxie/runtime/Transporter", "moxie/file/Blob", "moxie/file/FileReaderSync"], function(e, t, i, n, r) {
            var o = {
                loadFromBlob: function(e) {
                    function t(e) {
                        r.shimExec.call(n, "Image", "loadFromBlob", e.uid), n = r = null
                    }
                    var n = this,
                        r = n.getRuntime();
                    if (e.isDetached()) {
                        var o = new i;
                        o.bind("TransportingComplete", function() {
                            t(o.result.getSource())
                        }), o.transport(e.getSource(), e.type, {
                            ruid: r.uid
                        })
                    } else t(e.getSource())
                },
                loadFromImage: function(e) {
                    var t = this.getRuntime();
                    return t.shimExec.call(this, "Image", "loadFromImage", e.uid)
                },
                getInfo: function() {
                    var e = this.getRuntime(),
                        t = e.shimExec.call(this, "Image", "getInfo");
                    return t.meta && t.meta.thumb && t.meta.thumb.data && !(e.meta.thumb.data instanceof n) && (t.meta.thumb.data = new n(e.uid, t.meta.thumb.data)), t
                },
                getAsBlob: function(e, t) {
                    var i = this.getRuntime(),
                        r = i.shimExec.call(this, "Image", "getAsBlob", e, t);
                    return r ? new n(i.uid, r) : null
                },
                getAsDataURL: function() {
                    var e, t = this.getRuntime(),
                        i = t.Image.getAsBlob.apply(this, arguments);
                    return i ? (e = new r, e.readAsDataURL(i)) : null
                }
            };
            return e.Image = o
        }), n("moxie/runtime/silverlight/Runtime", ["moxie/core/utils/Basic", "moxie/core/utils/Env", "moxie/core/utils/Dom", "moxie/core/Exceptions", "moxie/runtime/Runtime"], function(e, t, i, n, o) {
            function a(e) {
                var t, i, n, r, o, a = !1,
                    s = null,
                    l = 0;
                try {
                    try {
                        s = new ActiveXObject("AgControl.AgControl"), s.IsVersionSupported(e) && (a = !0), s = null
                    } catch (u) {
                        var c = navigator.plugins["Silverlight Plug-In"];
                        if (c) {
                            for (t = c.description, "1.0.30226.2" === t && (t = "2.0.30226.2"), i = t.split("."); i.length > 3;) i.pop();
                            for (; i.length < 4;) i.push(0);
                            for (n = e.split("."); n.length > 4;) n.pop();
                            do r = parseInt(n[l], 10), o = parseInt(i[l], 10), l++; while (l < n.length && r === o);
                            o >= r && !isNaN(r) && (a = !0)
                        }
                    }
                } catch (d) {
                    a = !1
                }
                return a
            }

            function s(s) {
                var c, d = this;
                s = e.extend({
                    xap_url: t.xap_url
                }, s), o.call(this, s, l, {
                    access_binary: o.capTrue,
                    access_image_binary: o.capTrue,
                    display_media: o.capTest(r("moxie/image/Image")),
                    do_cors: o.capTrue,
                    drag_and_drop: !1,
                    report_upload_progress: o.capTrue,
                    resize_image: o.capTrue,
                    return_response_headers: function(e) {
                        return e && "client" === d.mode
                    },
                    return_response_type: function(e) {
                        return "json" !== e || !!window.JSON
                    },
                    return_status_code: function(t) {
                        return "client" === d.mode || !e.arrayDiff(t, [200, 404])
                    },
                    select_file: o.capTrue,
                    select_multiple: o.capTrue,
                    send_binary_string: o.capTrue,
                    send_browser_cookies: function(e) {
                        return e && "browser" === d.mode
                    },
                    send_custom_headers: function(e) {
                        return e && "client" === d.mode
                    },
                    send_multipart: o.capTrue,
                    slice_blob: o.capTrue,
                    stream_upload: !0,
                    summon_file_dialog: !1,
                    upload_filesize: o.capTrue,
                    use_http_method: function(t) {
                        return "client" === d.mode || !e.arrayDiff(t, ["GET", "POST"])
                    }
                }, {
                    return_response_headers: function(e) {
                        return e ? "client" : "browser"
                    },
                    return_status_code: function(t) {
                        return e.arrayDiff(t, [200, 404]) ? "client" : ["client", "browser"]
                    },
                    send_browser_cookies: function(e) {
                        return e ? "browser" : "client"
                    },
                    send_custom_headers: function(e) {
                        return e ? "client" : "browser"
                    },
                    use_http_method: function(t) {
                        return e.arrayDiff(t, ["GET", "POST"]) ? "client" : ["client", "browser"]
                    }
                }), a("2.0.31005.0") && "Opera" !== t.browser || (this.mode = !1), e.extend(this, {
                    getShim: function() {
                        return i.get(this.uid).content.Moxie
                    },
                    shimExec: function(e, t) {
                        var i = [].slice.call(arguments, 2);
                        return d.getShim().exec(this.uid, e, t, i)
                    },
                    init: function() {
                        var e;
                        e = this.getShimContainer(), e.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' + s.xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' + this.uid + ",target=" + o.getGlobalEventTarget() + '"/></object>', c = setTimeout(function() {
                            d && !d.initialized && d.trigger("Error", new n.RuntimeError(n.RuntimeError.NOT_INIT_ERR))
                        }, "Windows" !== t.OS ? 1e4 : 5e3)
                    },
                    destroy: function(e) {
                        return function() {
                            e.call(d), clearTimeout(c), s = c = e = d = null
                        }
                    }(this.destroy)
                }, u)
            }
            var l = "silverlight",
                u = {};
            return o.addConstructor(l, s), u
        }), n("moxie/runtime/silverlight/file/Blob", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/Blob"], function(e, t, i) {
            return e.Blob = t.extend({}, i)
        }), n("moxie/runtime/silverlight/file/FileInput", ["moxie/runtime/silverlight/Runtime", "moxie/file/File", "moxie/core/utils/Dom", "moxie/core/utils/Basic"], function(e, t, i, n) {
            function r(e) {
                for (var t = "", i = 0; i < e.length; i++) t += ("" !== t ? "|" : "") + e[i].title + " | *." + e[i].extensions.replace(/,/g, ";*.");
                return t
            }
            var o = {
                init: function(e) {
                    var o = this,
                        a = this.getRuntime(),
                        s = i.get(e.browse_button);
                    s && (s.setAttribute("tabindex", -1), s = null), this.bind("Change", function() {
                        var e = a.shimExec.call(o, "FileInput", "getFiles");
                        o.files = [], n.each(e, function(e) {
                            o.files.push(new t(a.uid, e))
                        })
                    }, 999), a.shimExec.call(this, "FileInput", "init", r(e.accept), e.multiple), this.trigger("ready")
                },
                setOption: function(e, t) {
                    "accept" == e && (t = r(t)), this.getRuntime().shimExec.call(this, "FileInput", "setOption", e, t)
                }
            };
            return e.FileInput = o
        }), n("moxie/runtime/silverlight/file/FileDrop", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Dom", "moxie/core/utils/Events"], function(e, t, i) {
            var n = {
                init: function() {
                    var e, n = this,
                        r = n.getRuntime();
                    return e = r.getShimContainer(), i.addEvent(e, "dragover", function(e) {
                        e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy"
                    }, n.uid), i.addEvent(e, "dragenter", function(e) {
                        e.preventDefault();
                        var i = t.get(r.uid).dragEnter(e);
                        i && e.stopPropagation()
                    }, n.uid), i.addEvent(e, "drop", function(e) {
                        e.preventDefault();
                        var i = t.get(r.uid).dragDrop(e);
                        i && e.stopPropagation()
                    }, n.uid), r.shimExec.call(this, "FileDrop", "init")
                }
            };
            return e.FileDrop = n
        }), n("moxie/runtime/silverlight/file/FileReader", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReader"], function(e, t, i) {
            return e.FileReader = t.extend({}, i)
        }), n("moxie/runtime/silverlight/file/FileReaderSync", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/file/FileReaderSync"], function(e, t, i) {
            return e.FileReaderSync = t.extend({}, i)
        }), n("moxie/runtime/silverlight/runtime/Transporter", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/runtime/Transporter"], function(e, t, i) {
            return e.Transporter = t.extend({}, i)
        }), n("moxie/runtime/silverlight/xhr/XMLHttpRequest", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/runtime/flash/xhr/XMLHttpRequest", "moxie/runtime/silverlight/file/FileReaderSync", "moxie/runtime/silverlight/runtime/Transporter"], function(e, t, i) {
            return e.XMLHttpRequest = t.extend({}, i)
        }), n("moxie/runtime/silverlight/image/Image", ["moxie/runtime/silverlight/Runtime", "moxie/core/utils/Basic", "moxie/file/Blob", "moxie/runtime/flash/image/Image"], function(e, t, i, n) {
            return e.Image = t.extend({}, n, {
                getInfo: function() {
                    var e = this.getRuntime(),
                        n = ["tiff", "exif", "gps", "thumb"],
                        r = {
                            meta: {}
                        },
                        o = e.shimExec.call(this, "Image", "getInfo");
                    return o.meta && (t.each(n, function(e) {
                        var t, i, n, a, s = o.meta[e];
                        if (s && s.keys)
                            for (r.meta[e] = {}, i = 0, n = s.keys.length; n > i; i++) t = s.keys[i], a = s[t], a && (/^(\d|[1-9]\d+)$/.test(a) ? a = parseInt(a, 10) : /^\d*\.\d+$/.test(a) && (a = parseFloat(a)), r.meta[e][t] = a)
                    }), r.meta && r.meta.thumb && r.meta.thumb.data && !(e.meta.thumb.data instanceof i) && (r.meta.thumb.data = new i(e.uid, r.meta.thumb.data))), r.width = parseInt(o.width, 10), r.height = parseInt(o.height, 10), r.size = parseInt(o.size, 10), r.type = o.type, r.name = o.name, r
                },
                resize: function(e, t, i) {
                    this.getRuntime().shimExec.call(this, "Image", "resize", e.x, e.y, e.width, e.height, t, i.preserveHeaders, i.resample)
                }
            })
        }), n("moxie/runtime/html4/Runtime", ["moxie/core/utils/Basic", "moxie/core/Exceptions", "moxie/runtime/Runtime", "moxie/core/utils/Env"], function(e, t, i, n) {
            function o(t) {
                var o = this,
                    l = i.capTest,
                    u = i.capTrue;
                i.call(this, t, a, {
                    access_binary: l(window.FileReader || window.File && File.getAsDataURL),
                    access_image_binary: !1,
                    display_media: l((n.can("create_canvas") || n.can("use_data_uri_over32kb")) && r("moxie/image/Image")),
                    do_cors: !1,
                    drag_and_drop: !1,
                    filter_by_extension: l(function() {
                        return !("Chrome" === n.browser && n.verComp(n.version, 28, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<") || "Safari" === n.browser && n.verComp(n.version, 7, "<") || "Firefox" === n.browser && n.verComp(n.version, 37, "<"))
                    }()),
                    resize_image: function() {
                        return s.Image && o.can("access_binary") && n.can("create_canvas")
                    },
                    report_upload_progress: !1,
                    return_response_headers: !1,
                    return_response_type: function(t) {
                        return !("json" !== t || !window.JSON) || !!~e.inArray(t, ["text", "document", ""])
                    },
                    return_status_code: function(t) {
                        return !e.arrayDiff(t, [200, 404])
                    },
                    select_file: function() {
                        return n.can("use_fileinput")
                    },
                    select_multiple: !1,
                    send_binary_string: !1,
                    send_custom_headers: !1,
                    send_multipart: !0,
                    slice_blob: !1,
                    stream_upload: function() {
                        return o.can("select_file")
                    },
                    summon_file_dialog: function() {
                        return o.can("select_file") && !("Firefox" === n.browser && n.verComp(n.version, 4, "<") || "Opera" === n.browser && n.verComp(n.version, 12, "<") || "IE" === n.browser && n.verComp(n.version, 10, "<"))
                    },
                    upload_filesize: u,
                    use_http_method: function(t) {
                        return !e.arrayDiff(t, ["GET", "POST"])
                    }
                }), e.extend(this, {
                    init: function() {
                        this.trigger("Init")
                    },
                    destroy: function(e) {
                        return function() {
                            e.call(o), e = o = null
                        }
                    }(this.destroy)
                }), e.extend(this.getShim(), s)
            }
            var a = "html4",
                s = {};
            return i.addConstructor(a, o), s
        }), n("moxie/runtime/html4/file/FileInput", ["moxie/runtime/html4/Runtime", "moxie/file/File", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Events", "moxie/core/utils/Mime", "moxie/core/utils/Env"], function(e, t, i, n, r, o, a) {
            function s() {
                function e() {
                    var o, u, d, p, f, m, h = this,
                        g = h.getRuntime();
                    m = i.guid("uid_"), o = g.getShimContainer(), s && (d = n.get(s + "_form"), d && (i.extend(d.style, {
                        top: "100%"
                    }), d.firstChild.setAttribute("tabindex", -1))), p = document.createElement("form"), p.setAttribute("id", m + "_form"), p.setAttribute("method", "post"), p.setAttribute("enctype", "multipart/form-data"), p.setAttribute("encoding", "multipart/form-data"), i.extend(p.style, {
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), f = document.createElement("input"), f.setAttribute("id", m), f.setAttribute("type", "file"), f.setAttribute("accept", c.join(",")), g.can("summon_file_dialog") && f.setAttribute("tabindex", -1), i.extend(f.style, {
                        fontSize: "999px",
                        opacity: 0
                    }), p.appendChild(f), o.appendChild(p), i.extend(f.style, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), "IE" === a.browser && a.verComp(a.version, 10, "<") && i.extend(f.style, {
                        filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
                    }), f.onchange = function() {
                        var i;
                        this.value && (i = this.files ? this.files[0] : {
                            name: this.value
                        }, i = new t(g.uid, i), this.onchange = function() {}, e.call(h), h.files = [i], f.setAttribute("id", i.uid), p.setAttribute("id", i.uid + "_form"), h.trigger("change"), f = p = null)
                    }, g.can("summon_file_dialog") && (u = n.get(l.browse_button), r.removeEvent(u, "click", h.uid), r.addEvent(u, "click", function(e) {
                        f && !f.disabled && f.click(), e.preventDefault()
                    }, h.uid)), s = m, o = d = u = null
                }
                var s, l, u, c = [];
                i.extend(this, {
                    init: function(t) {
                        var i, a = this,
                            s = a.getRuntime();
                        l = t, c = o.extList2mimes(t.accept, s.can("filter_by_extension")), i = s.getShimContainer(),
                            function() {
                                var e, o, c;
                                e = n.get(t.browse_button), u = n.getStyle(e, "z-index") || "auto", s.can("summon_file_dialog") ? ("static" === n.getStyle(e, "position") && (e.style.position = "relative"), a.bind("Refresh", function() {
                                    o = parseInt(u, 10) || 1, n.get(l.browse_button).style.zIndex = o, this.getRuntime().getShimContainer().style.zIndex = o - 1
                                })) : e.setAttribute("tabindex", -1), c = s.can("summon_file_dialog") ? e : i, r.addEvent(c, "mouseover", function() {
                                    a.trigger("mouseenter")
                                }, a.uid), r.addEvent(c, "mouseout", function() {
                                    a.trigger("mouseleave")
                                }, a.uid), r.addEvent(c, "mousedown", function() {
                                    a.trigger("mousedown")
                                }, a.uid), r.addEvent(n.get(t.container), "mouseup", function() {
                                    a.trigger("mouseup")
                                }, a.uid), e = null
                            }(), e.call(this), i = null, a.trigger({
                                type: "ready",
                                async: !0
                            })
                    },
                    setOption: function(e, t) {
                        var i, r = this.getRuntime();
                        "accept" == e && (c = t.mimes || o.extList2mimes(t, r.can("filter_by_extension"))), i = n.get(s), i && i.setAttribute("accept", c.join(","))
                    },
                    disable: function(e) {
                        var t;
                        (t = n.get(s)) && (t.disabled = !!e)
                    },
                    destroy: function() {
                        var e = this.getRuntime(),
                            t = e.getShim(),
                            i = e.getShimContainer(),
                            o = l && n.get(l.container),
                            a = l && n.get(l.browse_button);
                        o && r.removeAllEvents(o, this.uid), a && (r.removeAllEvents(a, this.uid), a.style.zIndex = u), i && (r.removeAllEvents(i, this.uid), i.innerHTML = ""), t.removeInstance(this.uid), s = c = l = i = o = a = t = null
                    }
                })
            }
            return e.FileInput = s
        }), n("moxie/runtime/html4/file/FileReader", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/file/FileReader"], function(e, t) {
            return e.FileReader = t
        }), n("moxie/runtime/html4/xhr/XMLHttpRequest", ["moxie/runtime/html4/Runtime", "moxie/core/utils/Basic", "moxie/core/utils/Dom", "moxie/core/utils/Url", "moxie/core/Exceptions", "moxie/core/utils/Events", "moxie/file/Blob", "moxie/xhr/FormData"], function(e, t, i, n, r, o, a, s) {
            function l() {
                function e(e) {
                    var t, n, r, a, s = this,
                        l = !1;
                    if (c) {
                        if (t = c.id.replace(/_iframe$/, ""), n = i.get(t + "_form")) {
                            for (r = n.getElementsByTagName("input"), a = r.length; a--;) switch (r[a].getAttribute("type")) {
                                case "hidden":
                                    r[a].parentNode.removeChild(r[a]);
                                    break;
                                case "file":
                                    l = !0
                            }
                            r = [], l || n.parentNode.removeChild(n), n = null
                        }
                        setTimeout(function() {
                            o.removeEvent(c, "load", s.uid), c.parentNode && c.parentNode.removeChild(c);
                            var t = s.getRuntime().getShimContainer();
                            t.children.length || t.parentNode.removeChild(t), t = c = null, e()
                        }, 1)
                    }
                }
                var l, u, c;
                t.extend(this, {
                    send: function(d, p) {
                        function f() {
                            var i = E.getShimContainer() || document.body,
                                r = document.createElement("div");
                            r.innerHTML = '<iframe id="' + m + '_iframe" name="' + m + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>', c = r.firstChild, i.appendChild(c), o.addEvent(c, "load", function() {
                                var i;
                                try {
                                    i = c.contentWindow.document || c.contentDocument || window.frames[c.id].document, /^4(0[0-9]|1[0-7]|2[2346])\s/.test(i.title) ? l = i.title.replace(/^(\d+).*$/, "$1") : (l = 200, u = t.trim(i.body.innerHTML), x.trigger({
                                        type: "progress",
                                        loaded: u.length,
                                        total: u.length
                                    }), v && x.trigger({
                                        type: "uploadprogress",
                                        loaded: v.size || 1025,
                                        total: v.size || 1025
                                    }))
                                } catch (r) {
                                    if (!n.hasSameOrigin(d.url)) return void e.call(x, function() {
                                        x.trigger("error")
                                    });
                                    l = 404
                                }
                                e.call(x, function() {
                                    x.trigger("load")
                                })
                            }, x.uid)
                        }
                        var m, h, g, v, x = this,
                            E = x.getRuntime();
                        if (l = u = null, p instanceof s && p.hasBlob()) {
                            if (v = p.getBlob(), m = v.uid, g = i.get(m), h = i.get(m + "_form"), !h) throw new r.DOMException(r.DOMException.NOT_FOUND_ERR)
                        } else m = t.guid("uid_"), h = document.createElement("form"), h.setAttribute("id", m + "_form"), h.setAttribute("method", d.method), h.setAttribute("enctype", "multipart/form-data"), h.setAttribute("encoding", "multipart/form-data"), E.getShimContainer().appendChild(h);
                        h.setAttribute("target", m + "_iframe"), p instanceof s && p.each(function(e, i) {
                            if (e instanceof a) g && g.setAttribute("name", i);
                            else {
                                var n = document.createElement("input");
                                t.extend(n, {
                                    type: "hidden",
                                    name: i,
                                    value: e
                                }), g ? h.insertBefore(n, g) : h.appendChild(n)
                            }
                        }), h.setAttribute("action", d.url), f(), h.submit(), x.trigger("loadstart")
                    },
                    getStatus: function() {
                        return l
                    },
                    getResponse: function(e) {
                        if ("json" === e && "string" === t.typeOf(u) && window.JSON) try {
                            return JSON.parse(u.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""))
                        } catch (i) {
                            return null
                        }
                        return u
                    },
                    abort: function() {
                        var t = this;
                        c && c.contentWindow && (c.contentWindow.stop ? c.contentWindow.stop() : c.contentWindow.document.execCommand ? c.contentWindow.document.execCommand("Stop") : c.src = "about:blank"), e.call(this, function() {
                            t.dispatchEvent("abort")
                        })
                    },
                    destroy: function() {
                        this.getRuntime().getShim().removeInstance(this.uid)
                    }
                })
            }
            return e.XMLHttpRequest = l
        }), n("moxie/runtime/html4/image/Image", ["moxie/runtime/html4/Runtime", "moxie/runtime/html5/image/Image"], function(e, t) {
            return e.Image = t
        }), a(["moxie/core/utils/Basic", "moxie/core/utils/Encode", "moxie/core/utils/Env", "moxie/core/Exceptions", "moxie/core/utils/Dom", "moxie/core/EventTarget", "moxie/runtime/Runtime", "moxie/runtime/RuntimeClient", "moxie/file/Blob", "moxie/core/I18n", "moxie/core/utils/Mime", "moxie/file/FileInput", "moxie/file/File", "moxie/file/FileDrop", "moxie/file/FileReader", "moxie/core/utils/Url", "moxie/runtime/RuntimeTarget", "moxie/xhr/FormData", "moxie/xhr/XMLHttpRequest", "moxie/image/Image", "moxie/core/utils/Events", "moxie/runtime/html5/image/ResizerCanvas"])
    }(this)
}), ! function(e, t) {
    var i = function() {
        var e = {};
        return t.apply(e, arguments), e.plupload
    };
    "function" == typeof define && define.amd ? define("plupload", ["./moxie"], i) : "object" == typeof module && module.exports ? module.exports = i(require("./moxie")) : e.plupload = i(e.moxie)
}(this || window, function(e) {
    ! function(e, t, i) {
        function n(e) {
            function t(e, t, i) {
                var r = {
                    chunks: "slice_blob",
                    jpgresize: "send_binary_string",
                    pngresize: "send_binary_string",
                    progress: "report_upload_progress",
                    multi_selection: "select_multiple",
                    dragdrop: "drag_and_drop",
                    drop_element: "drag_and_drop",
                    headers: "send_custom_headers",
                    urlstream_upload: "send_binary_string",
                    canSendBinary: "send_binary",
                    triggerDialog: "summon_file_dialog"
                };
                r[e] ? n[r[e]] = t : i || (n[e] = t)
            }
            var i = e.required_features,
                n = {};
            return "string" == typeof i ? l.each(i.split(/\s*,\s*/), function(e) {
                t(e, !0)
            }) : "object" == typeof i ? l.each(i, function(e, i) {
                t(i, e)
            }) : i === !0 && (e.chunk_size && e.chunk_size > 0 && (n.slice_blob = !0), l.isEmptyObj(e.resize) && e.multipart !== !1 || (n.send_binary_string = !0), e.http_method && (n.use_http_method = e.http_method), l.each(e, function(e, i) {
                t(i, !!e, !0)
            })), n
        }
        var r = window.setTimeout,
            o = {},
            a = t.core.utils,
            s = t.runtime.Runtime,
            l = {
                VERSION: "2.3.6",
                STOPPED: 1,
                STARTED: 2,
                QUEUED: 1,
                UPLOADING: 2,
                FAILED: 4,
                DONE: 5,
                GENERIC_ERROR: -100,
                HTTP_ERROR: -200,
                IO_ERROR: -300,
                SECURITY_ERROR: -400,
                INIT_ERROR: -500,
                FILE_SIZE_ERROR: -600,
                FILE_EXTENSION_ERROR: -601,
                FILE_DUPLICATE_ERROR: -602,
                IMAGE_FORMAT_ERROR: -700,
                MEMORY_ERROR: -701,
                IMAGE_DIMENSIONS_ERROR: -702,
                moxie: t,
                mimeTypes: a.Mime.mimes,
                ua: a.Env,
                typeOf: a.Basic.typeOf,
                extend: a.Basic.extend,
                guid: a.Basic.guid,
                getAll: function(e) {
                    var t, i = [];
                    "array" !== l.typeOf(e) && (e = [e]);
                    for (var n = e.length; n--;) t = l.get(e[n]), t && i.push(t);
                    return i.length ? i : null
                },
                get: a.Dom.get,
                each: a.Basic.each,
                getPos: a.Dom.getPos,
                getSize: a.Dom.getSize,
                xmlEncode: function(e) {
                    var t = {
                            "<": "lt",
                            ">": "gt",
                            "&": "amp",
                            '"': "quot",
                            "'": "#39"
                        },
                        i = /[<>&\"\']/g;
                    return e ? ("" + e).replace(i, function(e) {
                        return t[e] ? "&" + t[e] + ";" : e
                    }) : e
                },
                toArray: a.Basic.toArray,
                inArray: a.Basic.inArray,
                inSeries: a.Basic.inSeries,
                addI18n: t.core.I18n.addI18n,
                translate: t.core.I18n.translate,
                sprintf: a.Basic.sprintf,
                isEmptyObj: a.Basic.isEmptyObj,
                hasClass: a.Dom.hasClass,
                addClass: a.Dom.addClass,
                removeClass: a.Dom.removeClass,
                getStyle: a.Dom.getStyle,
                addEvent: a.Events.addEvent,
                removeEvent: a.Events.removeEvent,
                removeAllEvents: a.Events.removeAllEvents,
                cleanName: function(e) {
                    var t, i;
                    for (i = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"], t = 0; t < i.length; t += 2) e = e.replace(i[t], i[t + 1]);
                    return e = e.replace(/\s+/g, "_"), e = e.replace(/[^a-z0-9_\-\.]+/gi, "")
                },
                buildUrl: function(e, t) {
                    var i = "";
                    return l.each(t, function(e, t) {
                        i += (i ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    }), i && (e += (e.indexOf("?") > 0 ? "&" : "?") + i), e
                },
                formatSize: function(e) {
                    function t(e, t) {
                        return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
                    }
                    if (e === i || /\D/.test(e)) return l.translate("N/A");
                    var n = Math.pow(1024, 4);
                    return e > n ? t(e / n, 1) + " " + l.translate("tb") : e > (n /= 1024) ? t(e / n, 1) + " " + l.translate("gb") : e > (n /= 1024) ? t(e / n, 1) + " " + l.translate("mb") : e > 1024 ? Math.round(e / 1024) + " " + l.translate("kb") : e + " " + l.translate("b")
                },
                parseSize: a.Basic.parseSizeStr,
                predictRuntime: function(e, t) {
                    var i, n;
                    return i = new l.Uploader(e), n = s.thatCan(i.getOption().required_features, t || e.runtimes), i.destroy(), n
                },
                addFileFilter: function(e, t) {
                    o[e] = t
                }
            };
        l.addFileFilter("mime_types", function(e, t, i) {
            e.length && !e.regexp.test(t.name) ? (this.trigger("Error", {
                code: l.FILE_EXTENSION_ERROR,
                message: l.translate("File extension error."),
                file: t
            }), i(!1)) : i(!0)
        }), l.addFileFilter("max_file_size", function(e, t, i) {
            var n;
            e = l.parseSize(e), t.size !== n && e && t.size > e ? (this.trigger("Error", {
                code: l.FILE_SIZE_ERROR,
                message: l.translate("File size error."),
                file: t
            }), i(!1)) : i(!0)
        }), l.addFileFilter("prevent_duplicates", function(e, t, i) {
            if (e)
                for (var n = this.files.length; n--;)
                    if (t.name === this.files[n].name && t.size === this.files[n].size) return this.trigger("Error", {
                        code: l.FILE_DUPLICATE_ERROR,
                        message: l.translate("Duplicate file error."),
                        file: t
                    }), void i(!1);
            i(!0)
        }), l.addFileFilter("prevent_empty", function(e, t, n) {
            e && !t.size && t.size !== i ? (this.trigger("Error", {
                code: l.FILE_SIZE_ERROR,
                message: l.translate("File size error."),
                file: t
            }), n(!1)) : n(!0)
        }), l.Uploader = function(e) {
            function a() {
                var e, t, i = 0;
                if (this.state == l.STARTED) {
                    for (t = 0; t < O.length; t++) e || O[t].status != l.QUEUED ? i++ : (e = O[t], this.trigger("BeforeUpload", e) && (e.status = l.UPLOADING, this.trigger("UploadFile", e)));
                    i == O.length && (this.state !== l.STOPPED && (this.state = l.STOPPED, this.trigger("StateChanged")), this.trigger("UploadComplete", O))
                }
            }

            function u(e) {
                e.percent = e.size > 0 ? Math.ceil(100 * (e.loaded / e.size)) : 100, c()
            }

            function c() {
                var e, t, n, r = 0;
                for (S.reset(), e = 0; e < O.length; e++) t = O[e], t.size !== i ? (S.size += t.origSize, n = t.loaded * t.origSize / t.size, (!t.completeTimestamp || t.completeTimestamp > I) && (r += n), S.loaded += n) : S.size = i, t.status == l.DONE ? S.uploaded++ : t.status == l.FAILED ? S.failed++ : S.queued++;
                S.size === i ? S.percent = O.length > 0 ? Math.ceil(100 * (S.uploaded / O.length)) : 0 : (S.bytesPerSec = Math.ceil(r / ((+new Date - I || 1) / 1e3)), S.percent = S.size > 0 ? Math.ceil(100 * (S.loaded / S.size)) : 0)
            }

            function d() {
                var e = F[0] || C[0];
                return !!e && e.getRuntime().uid
            }

            function p() {
                this.bind("FilesAdded FilesRemoved", function(e) {
                    e.trigger("QueueChanged"), e.refresh()
                }), this.bind("CancelUpload", y), this.bind("BeforeUpload", g), this.bind("UploadFile", v), this.bind("UploadProgress", x), this.bind("StateChanged", E), this.bind("QueueChanged", c), this.bind("Error", w), this.bind("FileUploaded", b), this.bind("Destroy", _)
            }

            function f(e, i) {
                var n = this,
                    r = 0,
                    o = [],
                    a = {
                        runtime_order: e.runtimes,
                        required_caps: e.required_features,
                        preferred_caps: D,
                        swf_url: e.flash_swf_url,
                        xap_url: e.silverlight_xap_url
                    };
                l.each(e.runtimes.split(/\s*,\s*/), function(t) {
                    e[t] && (a[t] = e[t])
                }), e.browse_button && l.each(e.browse_button, function(i) {
                    o.push(function(o) {
                        var u = new t.file.FileInput(l.extend({}, a, {
                            accept: e.filters.mime_types,
                            name: e.file_data_name,
                            multiple: e.multi_selection,
                            container: e.container,
                            browse_button: i
                        }));
                        u.onready = function() {
                            var e = s.getInfo(this.ruid);
                            l.extend(n.features, {
                                chunks: e.can("slice_blob"),
                                multipart: e.can("send_multipart"),
                                multi_selection: e.can("select_multiple")
                            }), r++, F.push(this), o()
                        }, u.onchange = function() {
                            n.addFile(this.files)
                        }, u.bind("mouseenter mouseleave mousedown mouseup", function(t) {
                            N || (e.browse_button_hover && ("mouseenter" === t.type ? l.addClass(i, e.browse_button_hover) : "mouseleave" === t.type && l.removeClass(i, e.browse_button_hover)), e.browse_button_active && ("mousedown" === t.type ? l.addClass(i, e.browse_button_active) : "mouseup" === t.type && l.removeClass(i, e.browse_button_active)))
                        }), u.bind("mousedown", function() {
                            n.trigger("Browse")
                        }), u.bind("error runtimeerror", function() {
                            u = null, o()
                        }), u.init()
                    })
                }), e.drop_element && l.each(e.drop_element, function(e) {
                    o.push(function(i) {
                        var o = new t.file.FileDrop(l.extend({}, a, {
                            drop_zone: e
                        }));
                        o.onready = function() {
                            var e = s.getInfo(this.ruid);
                            l.extend(n.features, {
                                chunks: e.can("slice_blob"),
                                multipart: e.can("send_multipart"),
                                dragdrop: e.can("drag_and_drop")
                            }), r++, C.push(this), i()
                        }, o.ondrop = function() {
                            n.addFile(this.files)
                        }, o.bind("error runtimeerror", function() {
                            o = null, i()
                        }), o.init()
                    })
                }), l.inSeries(o, function() {
                    "function" == typeof i && i(r)
                })
            }

            function m(e, n, r, o) {
                var a = new t.image.Image;
                try {
                    a.onload = function() {
                        n.width > this.width && n.height > this.height && n.quality === i && n.preserve_headers && !n.crop ? (this.destroy(), o(e)) : a.downsize(n.width, n.height, n.crop, n.preserve_headers)
                    }, a.onresize = function() {
                        var t = this.getAsBlob(e.type, n.quality);
                        this.destroy(), o(t)
                    }, a.bind("error runtimeerror", function() {
                        this.destroy(), o(e)
                    }), a.load(e, r)
                } catch (s) {
                    o(e)
                }
            }

            function h(e, i, r) {
                function o(e, i, n) {
                    var r = R[e];
                    switch (e) {
                        case "max_file_size":
                            "max_file_size" === e && (R.max_file_size = R.filters.max_file_size = i);
                            break;
                        case "chunk_size":
                            (i = l.parseSize(i)) && (R[e] = i, R.send_file_name = !0);
                            break;
                        case "multipart":
                            R[e] = i, i || (R.send_file_name = !0);
                            break;
                        case "http_method":
                            R[e] = "PUT" === i.toUpperCase() ? "PUT" : "POST";
                            break;
                        case "unique_names":
                            R[e] = i, i && (R.send_file_name = !0);
                            break;
                        case "filters":
                            "array" === l.typeOf(i) && (i = {
                                mime_types: i
                            }), n ? l.extend(R.filters, i) : R.filters = i, i.mime_types && ("string" === l.typeOf(i.mime_types) && (i.mime_types = t.core.utils.Mime.mimes2extList(i.mime_types)), i.mime_types.regexp = function(e) {
                                var t = [];
                                return l.each(e, function(e) {
                                    l.each(e.extensions.split(/,/), function(e) {
                                        /^\s*\*\s*$/.test(e) ? t.push("\\.*") : t.push("\\." + e.replace(new RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"))
                                    })
                                }), new RegExp("(" + t.join("|") + ")$", "i")
                            }(i.mime_types), R.filters.mime_types = i.mime_types);
                            break;
                        case "resize":
                            R.resize = !!i && l.extend({
                                preserve_headers: !0,
                                crop: !1
                            }, i);
                            break;
                        case "prevent_duplicates":
                            R.prevent_duplicates = R.filters.prevent_duplicates = !!i;
                            break;
                        case "container":
                        case "browse_button":
                        case "drop_element":
                            i = "container" === e ? l.get(i) : l.getAll(i);
                        case "runtimes":
                        case "multi_selection":
                        case "flash_swf_url":
                        case "silverlight_xap_url":
                            R[e] = i, n || (u = !0);
                            break;
                        default:
                            R[e] = i
                    }
                    n || a.trigger("OptionChanged", e, i, r)
                }
                var a = this,
                    u = !1;
                "object" == typeof e ? l.each(e, function(e, t) {
                    o(t, e, r)
                }) : o(e, i, r), r ? (R.required_features = n(l.extend({}, R)), D = n(l.extend({}, R, {
                    required_features: !0
                }))) : u && (a.trigger("Destroy"), f.call(a, R, function(e) {
                    e ? (a.runtime = s.getInfo(d()).type, a.trigger("Init", {
                        runtime: a.runtime
                    }), a.trigger("PostInit")) : a.trigger("Error", {
                        code: l.INIT_ERROR,
                        message: l.translate("Init error.")
                    })
                }))
            }

            function g(e, t) {
                if (e.settings.unique_names) {
                    var i = t.name.match(/\.([^.]+)$/),
                        n = "part";
                    i && (n = i[1]), t.target_name = t.id + "." + n
                }
            }

            function v(e, i) {
                function n() {
                    d-- > 0 ? r(o, 1e3) : (i.loaded = f, e.trigger("Error", {
                        code: l.HTTP_ERROR,
                        message: l.translate("HTTP Error."),
                        file: i,
                        response: T.responseText,
                        status: T.status,
                        responseHeaders: T.getAllResponseHeaders()
                    }))
                }

                function o() {
                    var t, n, r = {};
                    i.status === l.UPLOADING && e.state !== l.STOPPED && (e.settings.send_file_name && (r.name = i.target_name || i.name), c && p.chunks && s.size > c ? (n = Math.min(c, s.size - f), t = s.slice(f, f + n)) : (n = s.size, t = s), c && p.chunks && (e.settings.send_chunk_number ? (r.chunk = Math.ceil(f / c), r.chunks = Math.ceil(s.size / c)) : (r.offset = f, r.total = s.size)), e.trigger("BeforeChunkUpload", i, r, t, f) && a(r, t, n))
                }

                function a(a, c, m) {
                    var g;
                    T = new t.xhr.XMLHttpRequest, T.upload && (T.upload.onprogress = function(t) {
                        i.loaded = Math.min(i.size, f + t.loaded), e.trigger("UploadProgress", i)
                    }), T.onload = function() {
                        return T.status < 200 || T.status >= 400 ? void n() : (d = e.settings.max_retries, m < s.size ? (c.destroy(), f += m, i.loaded = Math.min(f, s.size), e.trigger("ChunkUploaded", i, {
                            offset: i.loaded,
                            total: s.size,
                            response: T.responseText,
                            status: T.status,
                            responseHeaders: T.getAllResponseHeaders()
                        }), "Android Browser" === l.ua.browser && e.trigger("UploadProgress", i)) : i.loaded = i.size, c = g = null, void(!f || f >= s.size ? (i.size != i.origSize && (s.destroy(), s = null), e.trigger("UploadProgress", i), i.status = l.DONE, i.completeTimestamp = +new Date, e.trigger("FileUploaded", i, {
                            response: T.responseText,
                            status: T.status,
                            responseHeaders: T.getAllResponseHeaders()
                        })) : r(o, 1)))
                    }, T.onerror = function() {
                        n()
                    }, T.onloadend = function() {
                        this.destroy()
                    }, e.settings.multipart && p.multipart ? (T.open(e.settings.http_method, u, !0), l.each(e.settings.headers, function(e, t) {
                        T.setRequestHeader(t, e)
                    }), g = new t.xhr.FormData, l.each(l.extend(a, e.settings.multipart_params), function(e, t) {
                        g.append(t, e)
                    }), g.append(e.settings.file_data_name, c), T.send(g, h)) : (u = l.buildUrl(e.settings.url, l.extend(a, e.settings.multipart_params)), T.open(e.settings.http_method, u, !0), l.each(e.settings.headers, function(e, t) {
                        T.setRequestHeader(t, e)
                    }), T.hasRequestHeader("Content-Type") || T.setRequestHeader("Content-Type", "application/octet-stream"), T.send(c, h))
                }
                var s, u = e.settings.url,
                    c = e.settings.chunk_size,
                    d = e.settings.max_retries,
                    p = e.features,
                    f = 0,
                    h = {
                        runtime_order: e.settings.runtimes,
                        required_caps: e.settings.required_features,
                        preferred_caps: D,
                        swf_url: e.settings.flash_swf_url,
                        xap_url: e.settings.silverlight_xap_url
                    };
                i.loaded && (f = i.loaded = c ? c * Math.floor(i.loaded / c) : 0), s = i.getSource(), l.isEmptyObj(e.settings.resize) || -1 === l.inArray(s.type, ["image/jpeg", "image/png"]) ? o() : m(s, e.settings.resize, h, function(e) {
                    s = e, i.size = e.size, o()
                })
            }

            function x(e, t) {
                u(t)
            }

            function E(e) {
                if (e.state == l.STARTED) I = +new Date;
                else if (e.state == l.STOPPED)
                    for (var t = e.files.length - 1; t >= 0; t--) e.files[t].status == l.UPLOADING && (e.files[t].status = l.QUEUED, c())
            }

            function y() {
                T && T.abort()
            }

            function b(e) {
                c(), r(function() {
                    a.call(e)
                }, 1)
            }

            function w(e, t) {
                t.code === l.INIT_ERROR ? e.destroy() : t.code === l.HTTP_ERROR && (t.file.status = l.FAILED, t.file.completeTimestamp = +new Date, u(t.file), e.state == l.STARTED && (e.trigger("CancelUpload"), r(function() {
                    a.call(e)
                }, 1)))
            }

            function _(e) {
                e.stop(), l.each(O, function(e) {
                    e.destroy()
                }), O = [], F.length && (l.each(F, function(e) {
                    e.destroy()
                }), F = []), C.length && (l.each(C, function(e) {
                    e.destroy()
                }), C = []), D = {}, N = !1, I = T = null, S.reset()
            }
            var R, I, S, T, A = l.guid(),
                O = [],
                D = {},
                F = [],
                C = [],
                N = !1;
            R = {
                chunk_size: 0,
                file_data_name: "file",
                filters: {
                    mime_types: [],
                    max_file_size: 0,
                    prevent_duplicates: !1,
                    prevent_empty: !0
                },
                flash_swf_url: "js/Moxie.swf",
                http_method: "POST",
                max_retries: 0,
                multipart: !0,
                multi_selection: !0,
                resize: !1,
                runtimes: s.order,
                send_file_name: !0,
                send_chunk_number: !0,
                silverlight_xap_url: "js/Moxie.xap"
            }, h.call(this, e, null, !0), S = new l.QueueProgress, l.extend(this, {
                id: A,
                uid: A,
                state: l.STOPPED,
                features: {},
                runtime: null,
                files: O,
                settings: R,
                total: S,
                init: function() {
                    var e, t, i = this;
                    return e = i.getOption("preinit"), "function" == typeof e ? e(i) : l.each(e, function(e, t) {
                        i.bind(t, e)
                    }), p.call(i), l.each(["container", "browse_button", "drop_element"], function(e) {
                        return null === i.getOption(e) ? (t = {
                            code: l.INIT_ERROR,
                            message: l.sprintf(l.translate("%s specified, but cannot be found."), e)
                        }, !1) : void 0
                    }), t ? i.trigger("Error", t) : R.browse_button || R.drop_element ? void f.call(i, R, function(e) {
                        var t = i.getOption("init");
                        "function" == typeof t ? t(i) : l.each(t, function(e, t) {
                            i.bind(t, e)
                        }), e ? (i.runtime = s.getInfo(d()).type, i.trigger("Init", {
                            runtime: i.runtime
                        }), i.trigger("PostInit")) : i.trigger("Error", {
                            code: l.INIT_ERROR,
                            message: l.translate("Init error.")
                        })
                    }) : i.trigger("Error", {
                        code: l.INIT_ERROR,
                        message: l.translate("You must specify either browse_button or drop_element.")
                    })
                },
                setOption: function(e, t) {
                    h.call(this, e, t, !this.runtime)
                },
                getOption: function(e) {
                    return e ? R[e] : R
                },
                refresh: function() {
                    F.length && l.each(F, function(e) {
                        e.trigger("Refresh")
                    }), this.trigger("Refresh")
                },
                start: function() {
                    this.state != l.STARTED && (this.state = l.STARTED, this.trigger("StateChanged"), a.call(this))
                },
                stop: function() {
                    this.state != l.STOPPED && (this.state = l.STOPPED, this.trigger("StateChanged"), this.trigger("CancelUpload"))
                },
                disableBrowse: function() {
                    N = arguments[0] === i || arguments[0], F.length && l.each(F, function(e) {
                        e.disable(N)
                    }), this.trigger("DisableBrowse", N)
                },
                getFile: function(e) {
                    var t;
                    for (t = O.length - 1; t >= 0; t--)
                        if (O[t].id === e) return O[t]
                },
                addFile: function(e, i) {
                    function n(e, t) {
                        var i = [];
                        l.each(u.settings.filters, function(t, n) {
                            o[n] && i.push(function(i) {
                                o[n].call(u, t, e, function(e) {
                                    i(!e)
                                })
                            })
                        }), l.inSeries(i, t)
                    }

                    function a(e) {
                        var o = l.typeOf(e);
                        if (e instanceof t.file.File) {
                            if (!e.ruid && !e.isDetached()) {
                                if (!s) return !1;
                                e.ruid = s, e.connectRuntime(s)
                            }
                            a(new l.File(e))
                        } else e instanceof t.file.Blob ? (a(e.getSource()), e.destroy()) : e instanceof l.File ? (i && (e.name = i), c.push(function(t) {
                            n(e, function(i) {
                                i || (O.push(e), p.push(e), u.trigger("FileFiltered", e)), r(t, 1)
                            })
                        })) : -1 !== l.inArray(o, ["file", "blob"]) ? a(new t.file.File(null, e)) : "node" === o && "filelist" === l.typeOf(e.files) ? l.each(e.files, a) : "array" === o && (i = null, l.each(e, a))
                    }
                    var s, u = this,
                        c = [],
                        p = [];
                    s = d(), a(e), c.length && l.inSeries(c, function() {
                        p.length && u.trigger("FilesAdded", p)
                    })
                },
                removeFile: function(e) {
                    for (var t = "string" == typeof e ? e : e.id, i = O.length - 1; i >= 0; i--)
                        if (O[i].id === t) return this.splice(i, 1)[0]
                },
                splice: function(e, t) {
                    var n = O.splice(e === i ? 0 : e, t === i ? O.length : t),
                        r = !1;
                    return this.state == l.STARTED && (l.each(n, function(e) {
                        return e.status === l.UPLOADING ? (r = !0, !1) : void 0
                    }), r && this.stop()), this.trigger("FilesRemoved", n), l.each(n, function(e) {
                        e.destroy()
                    }), r && this.start(), n
                },
                dispatchEvent: function(e) {
                    var t, i;
                    if (e = e.toLowerCase(), t = this.hasEventListener(e)) {
                        t.sort(function(e, t) {
                            return t.priority - e.priority
                        }), i = [].slice.call(arguments), i.shift(), i.unshift(this);
                        for (var n = 0; n < t.length; n++)
                            if (t[n].fn.apply(t[n].scope, i) === !1) return !1
                    }
                    return !0
                },
                bind: function(e, t, i, n) {
                    l.Uploader.prototype.bind.call(this, e, t, n, i)
                },
                destroy: function() {
                    this.trigger("Destroy"), R = S = null, this.unbindAll()
                }
            })
        }, l.Uploader.prototype = t.core.EventTarget.instance, l.File = function() {
            function e(e) {
                l.extend(this, {
                    id: l.guid(),
                    name: e.name || e.fileName,
                    type: e.type || "",
                    relativePath: e.relativePath || "",
                    size: e.fileSize || e.size,
                    origSize: e.fileSize || e.size,
                    loaded: 0,
                    percent: 0,
                    status: l.QUEUED,
                    lastModifiedDate: e.lastModifiedDate || (new Date).toLocaleString(),
                    completeTimestamp: 0,
                    getNative: function() {
                        var e = this.getSource().getSource();
                        return -1 !== l.inArray(l.typeOf(e), ["blob", "file"]) ? e : null
                    },
                    getSource: function() {
                        return t[this.id] ? t[this.id] : null
                    },
                    destroy: function() {
                        var e = this.getSource();
                        e && (e.destroy(), delete t[this.id])
                    }
                }), t[this.id] = e
            }
            var t = {};
            return e
        }(), l.QueueProgress = function() {
            var e = this;
            e.size = 0, e.loaded = 0, e.uploaded = 0, e.failed = 0, e.queued = 0, e.percent = 0, e.bytesPerSec = 0, e.reset = function() {
                e.size = e.loaded = e.uploaded = e.failed = e.queued = e.percent = e.bytesPerSec = 0
            }
        }, e.plupload = l
    }(this, e)
}),
function(e, t, i, n, r) {
    "use strict";
    e.zui.strCode || (e.zui.strCode = function(e) {
        var t = 0;
        if (e && e.length)
            for (var i = 0; i < e.length; ++i) t += i * e.charCodeAt(i);
        return t
    });
    var o = e.zui.browser && e.zui.browser.ie && e.zui.browser.ie < 11,
        a = "zui.uploader",
        s = '<div class="file"><div class="file-progress-bar"></div><div class="file-wrapper"><div class="file-icon"><i class="icon icon-file-o"></i></div><div class="content"><div class="file-name"></div><div class="file-size small text-muted">0KB</div></div><div class="actions"><div class="file-status" data-toggle="tooltip"><i class="icon"></i> <span class="text"></span></div><a data-toggle="tooltip" class="btn btn-link btn-download-file" target="_blank"><i class="icon icon-download-alt"></i></a><button type="button" data-toggle="tooltip" class="btn btn-link btn-reset-file" title="Repeat"><i class="icon icon-repeat"></i></button><button type="button" data-toggle="tooltip" class="btn btn-link btn-rename-file" title="Rename"><i class="icon icon-pencil"></i></button><button type="button" data-toggle="tooltip" title="Remove" class="btn btn-link btn-delete-file"><i class="icon icon-trash text-danger"></i></button></div></div></div>',
        l = {
            rename: !0,
            renameByClick: !0,
            dropPlaceholder: !0,
            previewImageIcon: !0,
            sendFileName: !0,
            sendFileId: !0,
            responseHandler: !0,
            uploadedMessage: !0,
            drop_element: "self",
            browse_button: "hidden",
            filters: {
                prevent_duplicates: !0
            },
            chunk_size: "1mb",
            max_retries: 3,
            flash_swf_url: "lib/uploader/Moxie.swf",
            silverlight_xap_url: "lib/uploader/Moxie.xap"
        },
        u = {
            QUEUED: i.QUEUED,
            UPLOADING: i.UPLOADING,
            FAILED: i.FAILED,
            DONE: i.DONE,
            STOPPED: i.STOPPED,
            STARTED: i.STARTED
        };
    u[i.QUEUED] = "queue", u[i.UPLOADING] = "uploading", u[i.FAILED] = "failed", u[i.DONE] = "done";
    var c = {
            GENERIC_ERROR: i.GENERIC_ERROR,
            HTTP_ERROR: i.HTTP_ERROR,
            IO_ERROR: i.IO_ERROR,
            SECURITY_ERROR: i.SECURITY_ERROR,
            INIT_ERROR: i.INIT_ERROR,
            FILE_SIZE_ERROR: i.FILE_SIZE_ERROR,
            FILE_EXTENSION_ERROR: i.FILE_EXTENSION_ERROR,
            FILE_DUPLICATE_ERROR: i.FILE_DUPLICATE_ERROR,
            IMAGE_FORMAT_ERROR: i.IMAGE_FORMAT_ERROR,
            IMAGE_MEMORY_ERROR: i.IMAGE_MEMORY_ERROR,
            IMAGE_DIMENSIONS_ERROR: i.IMAGE_DIMENSIONS_ERROR
        },
        d = function(n, l) {
            var u = this;
            u.name = a, u.$ = e(n).addClass("uploader"), l = u.getOptions(l);
            var c = e.isPlainObject(l.lang) ? e.extend(!0, {}, d.LANG[c.lang || e.zui.clientLang()], l.lang) : d.LANG[l.lang];
            u.lang = c;
            var p, f = u.$,
                m = l.fileList;
            p = m && "large" != m && "grid" != m ? 0 === m.indexOf(">") ? f.find(m.substr(1)) : e(m) : f.find(".file-list,.uploader-files"), p && p.length || (p = e('<div class="uploader-files file-list"></div>')), p.parent().length || f.append(p), "large" == m ? p.addClass("file-list-lg") : "grid" == m && p.addClass("file-list-grid"), p.children(".file").addClass("file-static"), u.$list = p, (l.browseByClickList || p.hasClass("uploader-btn-browse")) && p.addClass("uploader-btn-browse").on("click", ".file-wrapper > .actions,.file-renaming .file-name", function(e) {
                e.stopPropagation()
            });
            var h = l.fileTemplate;
            if (!h) {
                var g = p.find(".template");
                g.length && (h = g.first().clone().removeClass("template"), g.remove()), h || (h = s)
            }
            "string" == typeof h && (h = e(h), h.parent() && (h = h.clone().removeClass("template"))), u.template = h;
            var v = l.browse_button,
                x = null;
            v && (0 === v.indexOf(">") ? x = f.find(v.substr(1)) : "hidden" !== v && (x = e(v))), x && x.length || (x = e('<div class="uploader-btn-browse uploader-btn-hidden"></div>').appendTo(f)), u.$button = x.first();
            var E = l.drop_element,
                y = ("fileList" == E ? u.$list : "self" == E ? u.$ : e(E)).first().addClass("file-drag-area");
            if (o) y.attr("data-drop-placeholder", "");
            else {
                var b = l.dropPlaceholder;
                b === !0 && (b = c.dropPlaceholder), b && y.attr("data-drop-placeholder", b)
            }
            u.$dropElement = y, u.$message = f.find(".uploader-message").on("click", ".close", function() {
                u.hideMessage()
            }), u.$status = f.find(".uploader-status"), f.toggleClass("uploader-rename", !!l.rename), u.initPlupload(), f.on("click." + a, ".uploader-btn-start", function(e) {
                u.start()
            }).on("click." + a, ".uploader-btn-browse", function(t) {
                e(this).is(u.$button) || u.$button.trigger("click")
            }).on("click." + a, ".uploader-btn-stop", function(e) {
                u.stop()
            }), e("body").on("dragleave." + a + " drop." + a, function(e) {
                f.removeClass("file-dragable"), e.preventDefault(), e.stopPropagation()
            }).on("dragover." + a + " dragenter." + a, function(e) {
                f.addClass("file-dragable")
            }), y.on("dragleave." + a + " drop." + a, function(e) {
                f.removeClass("file-drag-enter")
            }).on("dragover." + a + " dragenter." + a, function(e) {
                f.addClass("file-drag-enter")
            }), p.on("click." + a, ".btn-delete-file", function() {
                var n = e(this).closest(".file"),
                    r = n.data("file"),
                    o = l.deleteActionOnDone,
                    a = r.status === i.DONE && e.isFunction(o);
                if (r.status === i.QUEUED || r.status === i.FAILED || a) {
                    var s = function() {
                            u.removeFile(r)
                        },
                        d = function() {
                            if (a) {
                                var e = o.call(u, r, s);
                                e === !0 && s()
                            } else s()
                        },
                        p = l.deleteConfirm;
                    if (p) {
                        var f = e.isFunction(p) ? p(r) : p === !0 ? c.deleteConfirm : p;
                        f = f.format(r), t.bootbox ? t.bootbox.confirm(f, function(e) {
                            e && d()
                        }) : t.confirm(f) && d()
                    } else d()
                }
            }).on("click." + a, ".btn-reset-file", function() {
                var t = e(this).closest(".file"),
                    n = u.plupload.getFile(t.data("id")) || t.data("file");
                n.status === i.FAILED && (n.status = i.QUEUED, u.showFile(n), l.autoUpload && u.start())
            }), l.rename && (p.toggleClass("file-rename-by-click", !!l.renameByClick).toggleClass("file-show-rename-action-on-done", !!l.renameActionOnDone), p.on("click." + a, ".btn-rename-file" + (l.renameByClick ? ",.file-name" : ""), function() {
                var t = e(this).closest(".file");
                if (!t.hasClass("file-renaming")) {
                    var n = u.plupload.getFile(t.data("id")) || t.data("file"),
                        o = l.renameActionOnDone,
                        s = n.status === i.DONE && e.isFunction(o);
                    if (s || n.status === i.QUEUED) {
                        var c = t.find(".file-name").first();
                        t.addClass("file-renaming"), u.showFile(n), !l.renameExtension && n.ext && c.text(n.name.substr(0, n.name.length - n.ext.length - 1)), c.attr("contenteditable", "true").one("blur", function() {
                            var i = e.trim(c.text()),
                                d = function() {
                                    if (i !== r && null !== i && "" !== i) {
                                        var e = n.ext;
                                        e.length && !l.renameExtension && i.lastIndexOf("." + e) !== i.length - e.length - 1 && (i += "." + e), n.name = i
                                    }
                                    u.showFile(n)
                                };
                            if (s) {
                                var p = o.call(u, n, i, d);
                                p === !0 ? d() : p === !1 && u.showFile(n)
                            } else d();
                            t.removeClass("file-renaming"), c.off("keydown." + a).attr("contenteditable", null)
                        }).on("keydown." + a, function(e) {
                            13 === e.keyCode && (c.blur(), e.preventDefault())
                        }).focus()
                    }
                }
            })), p.toggleClass("file-show-delete-action-on-done", !!l.deleteActionOnDone), u.staticFilesSize = 0, u.staticFilesCount = 0, l.staticFiles && e.each(l.staticFiles, function(t, n) {
                n = e.extend({
                    status: i.DONE
                }, n), n["static"] = !0, n.id || (n.id = e.zui.uuid()), u.showFile(n), n.size && (u.staticFilesSize += n.size, u.staticFilesCount++)
            }), u.callEvent("onInit")
        };
    d.DEFAULTS = l, d.prototype.showMessage = function(e, t, i) {
        var n = this,
            o = n.$message;
        e ? clearTimeout(n.lastDismissMessage) : n.hideMessage(), t = t || "danger", i === r && (i = "danger" === t ? 10 : 6), i < 20 && (i *= 1e3);
        var a = o.find(".content");
        a.length ? a.empty().append(e) : o.empty().append(e), o.attr("data-type", t).slideDown("fast"), i && (n.lastDismissMessage = setTimeout(function() {
            n.hideMessage()
        }, i))
    }, d.prototype.hideMessage = function() {
        clearTimeout(this.lastDismissMessage), this.$message.slideUp("fast")
    }, d.prototype.start = function() {
        return this.options.autoResetFails && e.each(this.getFiles(), function(e, t) {
            t.status === i.FAILED && (t.status = i.QUEUED)
        }), this.plupload.start()
    }, d.prototype.stop = function() {
        return this.plupload.stop()
    }, d.prototype.getState = function() {
        return this.plupload.state
    }, d.prototype.isStarted = function() {
        return this.getState() === i.STARTED
    }, d.prototype.isStopped = function() {
        return this.getState() === i.STOPPED
    }, d.prototype.getFiles = function() {
        return this.plupload.files
    }, d.prototype.getTotal = function() {
        return this.plupload.total
    }, d.prototype.disableBrowse = function(e) {
        return this.$.find(".uploader-btn-browse").attr("disable", e ? "disable" : null).toggle("disable", !!e), this.plupload.disableBrowse()
    }, d.prototype.getFile = function(e) {
        return this.plupload.getFile(e)
    }, d.prototype.destroy = function() {
        var t = this,
            i = "." + a;
        t.$.off(i).data(a, null), t.$list.off(i), t.$dropElement.off(i), e("body").off(i), t.plupload.destroy()
    }, d.prototype.previewImageSrc = function(t, i) {
        if (t && t.getSource && /image\//.test(t.type)) {
            var r = e.extend({
                width: 200,
                height: 200
            }, this.options.previewImageSize);
            if ("image/gif" == t.type) {
                var o = new n.file.FileReader;
                o.onload = function() {
                    i(o.result), o.destroy(), o = null
                }, o.readAsDataURL(t.getSource())
            } else {
                var a = new n.image.Image;
                a.onload = function() {
                    a.downsize(r.width, r.height);
                    var e = "image/jpeg" == a.type ? a.getAsDataURL("image/jpeg", 80) : "image/png" == a.type ? a.getAsDataURL("image/png") : a.getAsDataURL();
                    i(e), a.destroy(), a = null
                }, a.load(t.getSource())
            }
        }
    }, d.prototype.createFileIcon = function(e) {
        var t = e.type,
            i = e.ext,
            n = "file-o",
            r = t ? t.split("/") : null,
            o = r && r.length ? r[0] : "",
            a = (r && r.length) > 1 ? r[1] : "";
        return "image" == o ? n = "file-image" : "doc" == i || "docx" == i || "pages" == i ? n = "file-word" : "ppt" == i || "pptx" == i || "key" == i ? n = "file-powerpoint" : "xls" == i || "xlsx" == i || "numbers" == i ? n = "file-excel" : "html" == i || "htm" == i ? n = "globe" : "js" == i || "php" == i || "cs" == i || "jsx" == i || "css" == i || "less" == i || "json" == i || "java" == i || "lua" == i || "py" == i || "c" == i || "cpp" == i || "swift" == i || "h" == i || "sh" == i || "rb" == i || "yml" == i || "ini" == i || "sql" == i || "xml" == i ? n = "file-code" : "apk" == i ? n = "android" : "exe" == i ? n = "windows" : "pkg" == i || "msi" == i || "dmg" == i ? n = "cube" : "epub" == i ? n = "book" : "sketch" == i ? n = "diamond" : "zip" == a || "x-rar" == a || "x-7z-compressed" == a ? n = "file-archive" : "pdf" == a ? n = "file-pdf" : "video" == o ? n = "file-movie" : "audio" == o ? n = "file-audio" : "text" == o && (n = "file-text-o"), '<i class="icon icon-' + n + " file-icon-" + i + '" data-type="' + t + '"' + (i ? ' data-ext="' + i + '"' : "") + "></i>"
    }, d.prototype.getFileItem = function(t) {
        var i = this;
        if ("string" == typeof t && (t = i.plupload.getFile(t)), !t) return null;
        var n = t.name;
        if (n && t.ext === r) {
            var o = n.lastIndexOf(".");
            o = o > -1 ? n.substr(o + 1) : "", t.ext = o, t.type && /image\//.test(t.type) && (t.isImage = t.ext)
        }
        var a = e("#file-" + t.id);
        return a.length || (e.isFunction(i.template) ? a = e(i.template(t, i)) : (a = e(i.template).clone(), a.find(".btn-rename-file").attr("title", i.lang.rename), a.find(".btn-delete-file").attr("title", i.lang.remove), a.find(".btn-reset-file").attr("title", i.lang.repeat), a.find(".btn-download-file").attr("title", i.lang.download).attr("download", t.name)), a.data("id", t.id).toggleClass("file-static", !!t["static"]).attr("id", "file-" + t.id).appendTo(i.$list), e.fn.tooltip && a.find('[data-toggle="tooltip"]').tooltip()), a
    }, d.prototype.showFile = function(t, n) {
        var r = this;
        if (e.isArray(t)) return void e.each(t, function(e, t) {
            r.showFile(t, n)
        });
        if ("string" == typeof t && (t = r.plupload.getFile(t)), t) {
            var o = r.getFileItem(t);
            if (o && o.length) {
                var a = r.options,
                    s = u[t.status];
                if (a.fileFormater) a.fileFormater.call(r, o, t, s);
                else {
                    var l = "done" == s && t.url ? t.url : null;
                    o.find(".file-name").text(t.name), o.find(".file-size").text(("uploading" == s ? i.formatSize(Math.floor(t.size * t.percent / 100)).toUpperCase() + "/" : "") + i.formatSize(t.size).toUpperCase()), o.find(".file-icon").html(a.fileIconCreator ? a.fileIconCreator(t.type, t, r) : r.createFileIcon(t)).css("color", "hsl(" + e.zui.strCode(t.type || t.ext) + ", 70%, 40%)"), o.find(".file-progress-bar").css("width", t.percent + "%");
                    var c = o.find(".file-status").attr("title", r.lang[s]);
                    c.find(".text").text("uploading" == s ? t.percent + "%" : "failed" == s ? r.lang[s] : ""), e.fn.tooltip && o.find('[data-toggle="tooltip"]').tooltip("fixTitle"), o.find("a.btn-download-file, a.file-name").attr("href", l)
                }
                if (a.previewImageIcon && t.isImage) {
                    var d = function() {
                        o.find(".file-icon").html('<div class="file-icon-image" style="background-image: url(' + t.previewImage + ')"></div>')
                    };
                    t.previewImage ? d() : r.previewImageSrc(t, function(e) {
                        t.previewImage = e, d()
                    })
                }
                o.attr("data-status", s).data("file", t)
            }
        }
    }, d.prototype.showStatus = function() {
        var t = this,
            n = t.plupload,
            r = t.$status,
            o = n.state,
            a = n.total,
            s = "",
            l = n.files.length;
        if (t.options.statusCreator) s = t.options.statusCreator(a, o, t);
        else {
            var u = {
                uploading: Math.max(0, Math.min(l, a.uploaded + 1)),
                total: t.staticFilesCount + l,
                size: i.formatSize(a.size + t.staticFilesSize).toUpperCase(),
                queue: a.queued,
                failed: a.failed,
                uploaded: a.uploaded,
                uploadedSize: i.formatSize(a.loaded).toUpperCase(),
                percent: a.percent,
                speed: i.formatSize(a.bytesPerSec).toUpperCase() + "/S"
            };
            s = o == i.STARTED ? t.lang.startedStatusText.format(u) : l < 1 ? t.lang.initStatusText : t.lang.stoppedStatusText.format(u)
        }
        r.html(s), a.uploaded < 1 && r.find(".uploader-status-uploaded").remove(), a.failed < 1 && r.find(".uploader-status-failed").remove(), a.queued < 1 && r.find(".uploader-status-queue").remove(), e.fn.tooltip && r.find('[data-toggle="tooltip"]').tooltip()
    }, d.prototype.delayShowStatus = function(e) {
        var t = this;
        t.delayStatusTask || (t.delayStatusTask = !0, e === r && (e = 500), t.delayStatusTask = setTimeout(function() {
            t.showStatus(), t.delayStatusTask = !1
        }, e))
    }, d.prototype.removeFile = function(t, i) {
        var n = this;
        if ("string" == typeof t && (t = n.plupload.getFile(t)), i || t["static"]) {
            var r = e("#file-" + t.id);
            e.fn.tooltip && (r.find('[data-toggle="tooltip"]').tooltip("destroy"), e(".tooltip").remove()), r.fadeOut(function() {
                e(this).remove()
            })
        } else n.plupload.removeFile(t)
    }, d.prototype.initPlupload = function() {
        var n = this,
            o = n.options,
            a = e.extend({}, o, {
                browse_button: n.$button[0],
                container: n.$[0],
                drop_element: n.$dropElement[0],
                multipart_params: null
            }),
            s = {
                FilesAdded: function(e, t) {
                    var i = o.limitFilesCount;
                    if (i) {
                        i === !0 && (i = 1);
                        var r = n.$list.children(".file").length;
                        if (r + t.length > i) {
                            n.showMessage(n.lang.limitFilesCountMessage.format({
                                count: i
                            }), "warning");
                            for (var a = [], s = 0; s < t.length; ++s) r + s + 1 <= i ? a.push(t[s]) : e.removeFile(t[s]);
                            if (!a.length) return;
                            t = a
                        }
                    }
                    n.showFile(t), o.autoUpload && n.start(), n.showStatus(), n.callEvent("onFilesAdded", [t])
                },
                UploadProgress: function(e, t) {
                    n.showFile(t), n.delayShowStatus(), n.callEvent("onUploadProgress", t)
                },
                FileUploaded: function(t, a, s) {
                    if (s) {
                        var l = "object" == typeof s ? s.response : s;
                        try {
                            a.remoteData = e.parseJSON(l)
                        } catch (u) {}
                    }
                    n.qiniuEnable && a.remoteData && (a.url = t.settings.domain + a.remoteData.key);
                    var c = o.responseHandler;
                    if (c) {
                        var d = null;
                        if (e.isFunction(c)) d = c.call(n, s, a);
                        else if (s.response) {
                            var p = a.remoteData;
                            if (e.isPlainObject(p)) {
                                var f = p.status || p.result;
                                f = "ok" === f || "success" === f || 200 === f, f ? (p.id !== r && (a.remoteId = p.id), p.url !== r && (a.url = p.url), p.name !== r && (a.name = p.name)) : d = {
                                    message: p.message,
                                    data: p
                                }
                            }
                        }
                        if (d) return d = e.isPlainObject(d) ? d : {
                            message: d
                        }, a.status = i.FAILED, d.code === r && (d.code = i.GENERIC_ERROR), d.file = a, d.responseObject = s, void(a.errorMessage = d.message)
                    }
                    if (a.status === i.DONE && n.lastUploadedCount++, n.showFile(a, s), n.showStatus(), n.callEvent("onFileUploaded", [a, s]), a.status === i.DONE) {
                        var m = o.removeUploaded;
                        m && setTimeout(function() {
                            e("#file-" + a.id).fadeOut(function() {
                                e(this).remove()
                            })
                        }, "number" == typeof m ? m : 2e3)
                    }
                },
                UploadComplete: function(t, r) {
                    n.showFile(r), n.showStatus();
                    var a = o.uploadedMessage;
                    if (a) {
                        var s = n.lastUploadedCount,
                            l = 0,
                            u = [];
                        e.each(r, function(e, t) {
                            t.status === i.FAILED && (l++, t.errorMessage && (u.push(t.errorMessage), delete t.errorMessage))
                        });
                        var c = u && u.length ? "<p>" + u.join(",") + "</p>" : "",
                            d = {
                                uploaded: s,
                                failed: l
                            };
                        c += "string" == typeof a ? a.format(d) : e.isFunction(a) ? a(d) : n.lang[l > 0 ? "uploadHasFailedMessage" : s > 0 ? "uploadSuccessMessage" : "uploadEmptyMessage"].format(d), n.showMessage(c, l > 0 ? "danger" : s > 0 ? "success" : "warning", 3)
                    }
                    n.callEvent("onUploadComplete", [r])
                },
                FilesRemoved: function(t, i) {
                    e.each(i, function(e, t) {
                        n.removeFile(t, !0)
                    }), n.showStatus(), n.callEvent("onFilesRemoved", i)
                },
                ChunkUploaded: function(e, t, i) {
                    n.callEvent("onChunkUploaded", [t, i])
                },
                UploadFile: function(e, t) {
                    n.showStatus(), n.callEvent("onUploadFile", t)
                },
                BeforeUpload: function(t, i) {
                    var r = t.getOption("multipart_params"),
                        a = o.multipart_params,
                        s = {};
                    r && r.key && (s.key = r.key), r && r.token && (s.token = r.token), o.sendFileName && (s[o.sendFileName === !0 ? "name" : o.sendFileName] = i.name), o.sendFileId && (s[o.sendFileId === !0 ? "uuid" : o.sendFileId] = i.id), s = e.extend(s, e.isFunction(a) ? a(i, s) : a), t.setOption("multipart_params", s), n.callEvent("onBeforeUpload", i)
                },
                Refresh: function(e) {
                    n.showStatus(), n.callEvent("onRefresh")
                },
                StateChanged: function(e) {
                    e.state === i.STARTED && (n.lastUploadedCount = 0), n.$.toggleClass("uploader-started", i.STARTED === e.state), n.hideMessage(), n.showStatus(), n.callEvent("onStateChanged", e.state)
                },
                QueueChanged: function(e) {
                    n.showStatus(), n.callEvent("onQueueChanged")
                },
                Error: function(e, t) {
                    var r = "danger";
                    t.code !== i.FILE_SIZE_ERROR && t.code !== i.FILE_SIZE_ERROR && t.code !== i.FILE_EXTENSION_ERROR && t.code !== i.FILE_DUPLICATE_ERROR && t.code !== i.MAGE_FORMAT_ERROR || (r = "warning"), n.showMessage(t.message, r), n.callEvent("onError", t)
                }
            };
        if (i.addI18n(n.lang.i18n), n.qiniuEnable = e.isPlainObject(o.qiniu) && t.Qiniu, n.qiniuEnable) {
            var l = o.qiniu,
                u = l.key;
            delete a.qiniu, u ? (delete l.key, e.isFunction(u) && (s.Key = u)) : s.Key = function(e, t) {
                return t.name
            }, l.init = s, a = e.extend(a, l);
            var c = new QiniuJsSDK,
                d = c.uploader(a);
            n.plupload = d
        } else {
            var d = new i.Uploader(a);
            d.init(), n.plOptions = a, n.plupload = d, e.each(s, function(e, t) {
                d.bind(e, t)
            })
        }
    }, d.prototype.getOptions = function(t) {
        return this.options = e.extend({
            lang: e.zui.clientLang()
        }, l, this.$.data(), t), this.options
    }, d.prototype.callEvent = function(t, i) {
        var n = this;
        if (e.isArray(i) || (i = [i]), n.$.trigger(t, i), e.isFunction(n.options[t])) return n.options[t].apply(n, i)
    }, e.fn.uploader = function(t, i) {
        return this.each(function() {
            var n = e(this),
                r = n.data(a),
                o = "object" == typeof t && t;
            r || n.data(a, r = new d(this, o)), "string" == typeof t && r[t](i)
        })
    }, d.NAME = a, d.STATUS = u, d.ERRORS = c, d.NAME = a, d.LANG = {
        zh_cn: {
            limitFilesCountMessage: "所有文件数目不能超过 {count} 个，如果要上传此文件请先从列表移除文件。",
            uploadEmptyMessage: "没有文件等待上传。",
            uploadSuccessMessage: "已上传 <strong>{uploaded}</strong> 个文件。",
            uploadHasFailedMessage: "已上传 <strong>{uploaded}</strong> 个文件，<strong>{failed}</strong> 个文件上传失败。",
            startedStatusText: '正在上传第 <strong>{uploading}</strong> 个文件，共 <strong title="总大小：{size}" data-toggle="tooltip" class="text-primary">{total}</strong> 个文件，<span class="uploader-status-uploaded">已上传 <strong title="总大小：{uploadedSize}" data-toggle="tooltip" class="text-primary">{uploaded}</strong> 个文件，</span><span class="uploader-status-failed"><strong>{failed}</strong> 个上传失败，</span>进度 <strong>{percent}%</strong>，平均速度 <strong>{speed}</strong>。',
            initStatusText: "添加文件或拖放文件来上传。",
            stoppedStatusText: '共 <strong title="总大小：{size}" data-toggle="tooltip" class="text-primary">{total}</strong> 个文件<span class="uploader-status-queue">，<strong>{queue}</strong> 个文件等待上传</span><span class="uploader-status-uploaded">，已上传 <strong title="总大小：{uploadedSize}" data-toggle="tooltip" class="text-primary">{uploaded}</strong> 个文件</span><span class="uploader-status-failed">，<strong>{failed}</strong> 个上传失败</span><span class="uploader-status-uploaded">，平均速度 <strong>{speed}</strong></span>。',
            deleteConfirm: "确定移除文件【{name}】？",
            download: "下载",
            rename: "重命名",
            repeat: "重新上传",
            remove: "移除",
            dropPlaceholder: "将文件拖放至在此处。",
            queue: "待上传",
            uploading: "正在上传",
            failed: "失败",
            done: "已上传",
            i18n: {
                "Stop Upload": "停止上传",
                "Upload URL might be wrong or doesn't exist.": "上传的URL可能是错误的或不存在。",
                tb: "tb",
                Size: "大小",
                Close: "关闭",
                "You must specify either browse_button or drop_element.": "您必须指定 browse_button 或者 drop_element。",
                "Init error.": "初始化错误。",
                "Add files to the upload queue and click the start button.": "将文件添加到上传队列，然后点击”开始上传“按钮。",
                List: "列表",
                Filename: "文件名",
                "%s specified, but cannot be found.": "%s 已指定，但是没有找到。",
                "Image format either wrong or not supported.": "图片格式错误或者不支持。",
                Status: "状态",
                "HTTP Error.": "HTTP 错误。",
                "Start Upload": "开始上传",
                "Error: File too large:": "错误: 文件太大:",
                kb: "kb",
                "Duplicate file error.": "无法添加重复文件。",
                "File size error.": "文件大小错误。",
                "N/A": "N/A",
                gb: "gb",
                "Error: Invalid file extension:": "错误：无效的文件扩展名:",
                "Select files": "选择文件",
                "%s already present in the queue.": "%s 已经在当前队列里。",
                "Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.": "超限。<b>%s</b> 支持最大 %wx%hpx 的图片。",
                "File: %s": "文件: %s",
                b: "b",
                "Uploaded %d/%d files": "已上传 %d/%d 个文件",
                "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "每次只接受同时上传 %d 个文件，多余的文件将会被删除。",
                "%d files queued": "%d 个文件加入到队列",
                "File: %s, size: %d, max file size: %d": "文件: %s, 大小: %d, 最大文件大小: %d",
                Thumbnails: "缩略图",
                "Drag files here.": "把文件拖到这里。",
                "Runtime ran out of available memory.": "运行时已消耗所有可用内存。",
                "File count error.": "文件数量错误。",
                "File extension error.": "文件扩展名错误。",
                mb: "mb",
                "Add Files": "增加文件"
            }
        },
        zh_tw: {
            limitFilesCountMessage: "所有文件數目不能超過 {count} 個。",
            uploadEmptyMessage: "没有文件等待上傳。",
            uploadSuccessMessage: "已上傳 <strong>{uploaded}</strong> 个文件。",
            uploadHasFailedMessage: "文件上傳完成，已上傳 <strong>{uploaded}</strong> 個文件，<strong>{failed}</strong> 個文件上傳失败。",
            startedStatusText: '正在上傳第<strong>{uploading}</strong> 個文件，共<strong title="總大小：{size}" data-toggle="tooltip" class="text -primary">{total}</strong> 個文件，<span class="uploader-status-uploaded">已上傳<strong title="總大小：{uploadedSize}" data-toggle="tooltip" class="text-primary">{uploaded}</strong> 個文件，</span><span class="uploader-status-failed"><strong>{failed}</ strong> 個上傳失敗，</span>進度<strong>{percent}%</strong>，平均速度<strong>{speed}</strong>。',
            initStatusText: "添加文件或拖放文件來上傳。",
            stoppedStatusText: '共<strong title="總大小：{size}" data-toggle="tooltip" class="text-primary">{total}</strong> 個文件<span class="uploader-status-queue">，<strong>{queue}</strong> 個文件等待上傳</span><span class="uploader-status-uploaded">，已上傳<strong title="總大小：{uploadedSize}" data-toggle="tooltip" class="text-primary">{uploaded}</strong> 個文件</span><span class=" uploader-status-failed">，<strong>{failed}</strong> 個上傳失敗</span><span class="uploader-status-uploaded">，平均速度<strong>{speed}< /strong></span>。',
            deleteConfirm: "確定移除文件【{name}】？",
            download: "下载",
            rename: "重命名",
            repeat: "重新上傳",
            remove: "移除",
            dropPlaceholder: "將文件拖放至在此處。",
            queue: "待上傳",
            uploading: "正在上傳",
            failed: "失敗",
            done: "已上傳",
            i18n: {
                "Stop Upload": "停止上傳",
                "Upload URL might be wrong or doesn't exist.": "檔案URL可能有誤或者不存在。",
                tb: "tb",
                Size: "大小",
                Close: "關閉",
                "You must specify either browse_button or drop_element.": "您必須指定 browse_button 或 drop_element。",
                "Init error.": "初始化錯誤。",
                "Add files to the upload queue and click the start button.": "將檔案加入上傳序列，然後點選”開始上傳“按鈕。",
                List: "清單",
                Filename: "檔案名稱",
                "%s specified, but cannot be found.": "找不到已選擇的 %s。",
                "Image format either wrong or not supported.": "圖片格式錯誤或者不支援。",
                Status: "狀態",
                "HTTP Error.": "HTTP 錯誤。",
                "Start Upload": "開始上傳",
                "Error: File too large:": "錯誤: 檔案大小太大:",
                kb: "kb",
                "Duplicate file error.": "錯誤：檔案重複。",
                "File size error.": "錯誤：檔案大小超過限制。",
                "N/A": "N/A",
                gb: "gb",
                "Error: Invalid file extension:": "錯誤：不接受的檔案格式:",
                "Select files": "選擇檔案",
                "%s already present in the queue.": "%s 已經存在目前的檔案序列。",
                "Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.": "圖片解析度超出範圍！ <b>%s</b> 最高只支援到 %wx%hpx。",
                "File: %s": "檔案: %s",
                b: "b",
                "Uploaded %d/%d files": "已上傳 %d/%d 個文件",
                "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "每次只能上傳 %d 個檔案，超過限制數量的檔案將被忽略。",
                "%d files queued": "%d 個檔案加入到序列",
                "File: %s, size: %d, max file size: %d": "檔案: %s, 大小: %d, 檔案大小上限: %d",
                Thumbnails: "縮圖",
                "Drag files here.": "把檔案拖曳到這裡。",
                "Runtime ran out of available memory.": "執行時耗盡了所有可用的記憶體。",
                "File count error.": "檔案數量錯誤。",
                "File extension error.": "檔案副檔名錯誤。",
                mb: "mb",
                "Add Files": "增加檔案"
            }
        },
        en: {
            limitFilesCountMessage: "All files count can not over {count}.",
            uploadEmptyMessage: "No file in queue to upload",
            uploadSuccessMessage: "Uploaded <strong>{uploaded}</strong> files。",
            uploadHasFailedMessage: "Uploaded complete, <strong>{uploaded}</strong> success, <strong>{failed}</strong> failed.",
            startedStatusText: 'Uploading NO.<strong>{uploading}</strong> file, total <strong title="Total size: {size}" data-toggle="tooltip" class="text-primary">{total}</strong> files, <span class="uploader-status-uploaded">Uploaded <strong title="Total size: {uploadedSize}" data-toggle="tooltip" class="text-primary">{uploaded}</strong> files, </span><span class="uploader-status-failed"><strong>{failed}</strong> failed, </span>progress <strong>{percent}%</strong>, average spped <strong>{speed}</strong>。',
            initStatusText: "Append or drag file here.",
            stoppedStatusText: 'Total <strong title="Total size: {size}" data-toggle="tooltip" class="text-primary">{total}</strong> files<span class="uploader-status-queue">, <strong>{queue}</strong> files in queue</span><span class="uploader-status-uploaded">, uploaded <strong title="Total size: {uploadedSize}" data-toggle="tooltip" class="text-primary">{uploaded}</strong> files</span><span class="uploader-status-failed">, <strong>{failed}</strong> failed</span><span class="uploader-status-uploaded">, average spped <strong>{speed}</strong></span>。',
            deleteConfirm: 'Remove file "{name}" form upload queue?',
            rename: "Rename",
            download: "Download",
            repeat: "Repeat",
            remove: "Remove",
            dropPlaceholder: "Drop file here.",
            queue: "Wait",
            uploading: "Uploading",
            failed: "Failed",
            done: "Done",
            i18n: {
                "Stop Upload": "Stop Upload",
                "Upload URL might be wrong or doesn't exist.": "Upload URL might be wrong or doesn't exist.",
                tb: "tb",
                Size: "Size",
                Close: "Close",
                "You must specify either browse_button or drop_element.": "You must specify either browse_button or drop_element.",
                "Init error.": "Init error.",
                "Add files to the upload queue and click the start button.": "Add files to the upload queue and click the start button.",
                List: "List",
                Filename: "Filename",
                "%s specified, but cannot be found.": "%s specified, but cannot be found.",
                "Image format either wrong or not supported.": "Image format either wrong or not supported.",
                Status: "Status",
                "HTTP Error.": "HTTP Error.",
                "Start Upload": "Start Upload",
                "Error: File too large:": "Error: File too large:",
                kb: "kb",
                "Duplicate file error.": "Duplicate file error.",
                "File size error.": "File size error.",
                "N/A": "N/A",
                gb: "gb",
                "Error: Invalid file extension:": "Error: Invalid file extension:",
                "Select files": "Select files",
                "%s already present in the queue.": "%s already present in the queue.",
                "Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.": "Resoultion out of boundaries! <b>%s</b> runtime supports images only up to %wx%hpx.",
                "File: %s": "File: %s",
                b: "b",
                "Uploaded %d/%d files": "Uploaded %d/%d files",
                "Upload element accepts only %d file(s) at a time. Extra files were stripped.": "Upload element accepts only %d file(s) at a time. Extra files were stripped.",
                "%d files queued": "%d files queued",
                "File: %s, size: %d, max file size: %d": "File: %s, size: %d, max file size: %d",
                Thumbnails: "Thumbnails",
                "Drag files here.": "Drag files here.",
                "Runtime ran out of available memory.": "Runtime ran out of available memory.",
                "File count error.": "File count error.",
                "File extension error.": "File extension error.",
                mb: "mb",
                "Add Files": "Add Files"
            }
        }
    }, e.zui.plupload = i, e.zui.moxie = n, e.zui.Uploader = d, e.fn.uploader.Constructor = d, t.mOxie || (t.mOxie = {
        Env: n.core.utils.Env,
        XMLHttpRequest: n.xhr.XMLHttpRequest
    }), e(function() {
        e('[data-ride="uploader"]').uploader()
    })
}(jQuery, window, plupload, moxie, void 0);