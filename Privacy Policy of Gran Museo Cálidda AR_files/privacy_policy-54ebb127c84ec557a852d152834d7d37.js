/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */
function getParameterByName(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
        i = t.exec(location.search);
    return null == i ? null : decodeURIComponent(i[1].replace(/\+/g, " "))
}

function insertStylesheet(e) {
    var t = document.getElementsByTagName("head")[0],
        i = document.createElement("style");
    i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)), t.appendChild(i)
}

function isMobile() {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())
}(function (e, t) {
    "object" == typeof module && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})("undefined" != typeof window ? window : this, function (e, t) {
    function i(e) {
        var t = e.length,
            i = rt.type(e);
        return "function" === i || rt.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function n(e, t, i) {
        if (rt.isFunction(t)) return rt.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return rt.grep(e, function (e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (ht.test(t)) return rt.filter(t, e, i);
            t = rt.filter(t, e)
        }
        return rt.grep(e, function (e) {
            return rt.inArray(e, t) >= 0 !== i
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function o(e) {
        var t = xt[e] = {};
        return rt.each(e.match(bt) || [], function (e, i) {
            t[i] = !0
        }), t
    }

    function a() {
        ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ft.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
    }

    function s() {
        (ft.addEventListener || event.type === "load" || ft.readyState === "complete") && (a(), rt.ready())
    }

    function l(e, t, i) {
        if (void 0 === i && e.nodeType === 1) {
            var n = "data-" + t.replace(St, "-$1").toLowerCase();
            if (i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ct.test(i) ? rt.parseJSON(i) : i
                } catch (r) {}
                rt.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !rt.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function u(e, t, i, n) {
        if (rt.acceptData(e)) {
            var r, o, a = rt.expando,
                s = e.nodeType,
                l = s ? rt.cache : e,
                c = s ? e[a] : e[a] && a;
            if (c && l[c] && (n || l[c].data) || void 0 !== i || "string" != typeof t) return c || (c = s ? e[a] = X.pop() || rt.guid++ : a), l[c] || (l[c] = s ? {} : {
                toJSON: rt.noop
            }), ("object" == typeof t || "function" == typeof t) && (n ? l[c] = rt.extend(l[c], t) : l[c].data = rt.extend(l[c].data, t)), o = l[c], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[rt.camelCase(t)] = i), "string" == typeof t ? (r = o[t], null == r && (r = o[rt.camelCase(t)])) : r = o, r
        }
    }

    function d(e, t, i) {
        if (rt.acceptData(e)) {
            var n, r, o = e.nodeType,
                a = o ? rt.cache : e,
                s = o ? e[rt.expando] : rt.expando;
            if (a[s]) {
                if (t && (n = i ? a[s] : a[s].data)) {
                    rt.isArray(t) ? t = t.concat(rt.map(t, rt.camelCase)) : t in n ? t = [t] : (t = rt.camelCase(t), t = t in n ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete n[t[r]];
                    if (i ? !c(n) : !rt.isEmptyObject(n)) return
                }(i || (delete a[s].data, c(a[s]))) && (o ? rt.cleanData([e], !0) : it.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    function h() {
        return !0
    }

    function p() {
        return !1
    }

    function f() {
        try {
            return ft.activeElement
        } catch (e) {}
    }

    function m(e) {
        var t = zt.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length;) i.createElement(t.pop());
        return i
    }

    function g(e, t) {
        var i, n, r = 0,
            o = typeof e.getElementsByTagName !== wt ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== wt ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], i = e.childNodes || e;
                (n = i[r]) != null; r++) !t || rt.nodeName(n, t) ? o.push(n) : rt.merge(o, g(n, t));
        return void 0 === t || t && rt.nodeName(e, t) ? rt.merge([e], o) : o
    }

    function v(e) {
        Dt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function y(e, t) {
        return rt.nodeName(e, "table") && rt.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function b(e) {
        return e.type = (rt.find.attr(e, "type") !== null) + "/" + e.type, e
    }

    function x(e) {
        var t = Yt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _(e, t) {
        for (var i, n = 0;
            (i = e[n]) != null; n++) rt._data(i, "globalEval", !t || rt._data(t[n], "globalEval"))
    }

    function k(e, t) {
        if (t.nodeType === 1 && rt.hasData(e)) {
            var i, n, r, o = rt._data(e),
                a = rt._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (i in s)
                    for (n = 0, r = s[i].length; r > n; n++) rt.event.add(t, i, s[i][n])
            }
            a.data && (a.data = rt.extend({}, a.data))
        }
    }

    function w(e, t) {
        var i, n, r;
        if (t.nodeType === 1) {
            if (i = t.nodeName.toLowerCase(), !it.noCloneEvent && t[rt.expando]) {
                r = rt._data(t);
                for (n in r.events) rt.removeEvent(t, n, r.handle);
                t.removeAttribute(rt.expando)
            }
            "script" === i && t.text !== e.text ? (b(t).text = e.text, x(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), it.html5Clone && e.innerHTML && !rt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Dt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
        }
    }

    function C(t, i) {
        var n, r = rt(i.createElement(t)).appendTo(i.body),
            o = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(r[0])) ? n.display : rt.css(r[0], "display");
        return r.detach(), o
    }

    function S(e) {
        var t = ft,
            i = Zt[e];
        return i || (i = C(e, t), "none" !== i && i || (Jt = (Jt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Jt[0].contentWindow || Jt[0].contentDocument).document, t.write(), t.close(), i = C(e, t), Jt.detach()), Zt[e] = i), i
    }

    function T(e, t) {
        return {
            get: function () {
                var i = e();
                if (null != i) return i ? (delete this.get, void 0) : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e, t) {
        if (t in e) return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, r = hi.length; r--;)
            if (t = hi[r] + i, t in e) return t;
        return n
    }

    function P(e, t) {
        for (var i, n, r, o = [], a = 0, s = e.length; s > a; a++) n = e[a], n.style && (o[a] = rt._data(n, "olddisplay"), i = n.style.display, t ? (o[a] || "none" !== i || (n.style.display = ""), n.style.display === "" && Pt(n) && (o[a] = rt._data(n, "olddisplay", S(n.nodeName)))) : (r = Pt(n), (i && "none" !== i || !r) && rt._data(n, "olddisplay", r ? i : rt.css(n, "display"))));
        for (a = 0; s > a; a++) n = e[a], n.style && (t && n.style.display !== "none" && n.style.display !== "" || (n.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function E(e, t, i) {
        var n = li.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function D(e, t, i, n, r) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === i && (a += rt.css(e, i + At[o], !0, r)), n ? ("content" === i && (a -= rt.css(e, "padding" + At[o], !0, r)), "margin" !== i && (a -= rt.css(e, "border" + At[o] + "Width", !0, r))) : (a += rt.css(e, "padding" + At[o], !0, r), "padding" !== i && (a += rt.css(e, "border" + At[o] + "Width", !0, r)));
        return a
    }

    function I(e, t, i) {
        var n = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ei(e),
            a = it.boxSizing && rt.css(e, "boxSizing", !1, o) === "border-box";
        if (0 >= r || null == r) {
            if (r = ti(e, t, o), (0 > r || null == r) && (r = e.style[t]), ni.test(r)) return r;
            n = a && (it.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + D(e, t, i || (a ? "border" : "content"), n, o) + "px"
    }

    function M(e, t, i, n, r) {
        return new M.prototype.init(e, t, i, n, r)
    }

    function N() {
        return setTimeout(function () {
            pi = void 0
        }), pi = rt.now()
    }

    function O(e, t) {
        var i, n = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) i = At[r], n["margin" + i] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function F(e, t, i) {
        for (var n, r = (bi[t] || []).concat(bi["*"]), o = 0, a = r.length; a > o; o++)
            if (n = r[o].call(i, t, e)) return n
    }

    function z(e, t, i) {
        var n, r, o, a, s, l, c, u, d = this,
            h = {},
            p = e.style,
            f = e.nodeType && Pt(e),
            m = rt._data(e, "fxshow");
        i.queue || (s = rt._queueHooks(e, "fx"), s.unqueued == null && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, rt.queue(e, "fx").length || s.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = rt.css(e, "display"), u = "none" === c ? rt._data(e, "olddisplay") || S(e.nodeName) : c, "inline" === u && rt.css(e, "float") === "none" && (it.inlineBlockNeedsLayout && S(e.nodeName) !== "inline" ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", it.shrinkWrapBlocks() || d.always(function () {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (r = t[n], mi.exec(r)) {
                if (delete t[n], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                    if ("show" !== r || !m || m[n] === void 0) continue;
                    f = !0
                }
                h[n] = m && m[n] || rt.style(e, n)
            } else c = void 0;
        if (rt.isEmptyObject(h))("none" === c ? S(e.nodeName) : c) === "inline" && (p.display = c);
        else {
            m ? "hidden" in m && (f = m.hidden) : m = rt._data(e, "fxshow", {}), o && (m.hidden = !f), f ? rt(e).show() : d.done(function () {
                rt(e).hide()
            }), d.done(function () {
                var t;
                rt._removeData(e, "fxshow");
                for (t in h) rt.style(e, t, h[t])
            });
            for (n in h) a = F(f ? m[n] : 0, n, d), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function L(e, t) {
        var i, n, r, o, a;
        for (i in e)
            if (n = rt.camelCase(i), r = t[n], o = e[i], rt.isArray(o) && (r = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), a = rt.cssHooks[n], a && "expand" in a) {
                o = a.expand(o), delete e[n];
                for (i in o) i in e || (e[i] = o[i], t[i] = r)
            } else t[n] = r
    }

    function R(e, t, i) {
        var n, r, o = 0,
            a = yi.length,
            s = rt.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var t = pi || N(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, o = 1 - n, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, i]), 1 > o && l ? i : (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: rt.extend({}, t),
                opts: rt.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: pi || N(),
                duration: i.duration,
                tweens: [],
                createTween: function (t, i) {
                    var n = rt.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function (t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) c.tweens[i].run(1);
                    return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (L(u, c.opts.specialEasing); a > o; o++)
            if (n = yi[o].call(c, e, u, c.opts)) return n;
        return rt.map(u, F, c), rt.isFunction(c.opts.start) && c.opts.start.call(e, c), rt.fx.timer(rt.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function j(e) {
        return function (t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, r = 0,
                o = t.toLowerCase().match(bt) || [];
            if (rt.isFunction(i))
                for (; n = o[r++];) n.charAt(0) === "+" ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function H(e, t, i, n) {
        function r(s) {
            var l;
            return o[s] = !0, rt.each(e[s] || [], function (e, s) {
                var c = s(t, i, n);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        var o = {},
            a = e === $i;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function B(e, t) {
        var i, n, r = rt.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== void 0 && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && rt.extend(!0, e, i), e
    }

    function W(e, t, i) {
        for (var n, r, o, a, s = e.contents, l = e.dataTypes; l[0] === "*";) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (a in s)
                if (s[a] && s[a].test(r)) {
                    l.unshift(a);
                    break
                } if (l[0] in i) o = l[0];
        else {
            for (a in i) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                n || (n = a)
            }
            o = o || n
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }

    function $(e, t, i, n) {
        var r, o, a, s, l, c = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (a = c[l + " " + o] || c["* " + o], !a)
                for (r in c)
                    if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                        a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                        break
                    } if (a !== !0)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: a ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function q(e, t, i, n) {
        var r;
        if (rt.isArray(t)) rt.each(t, function (t, r) {
            i || Yi.test(e) ? n(e, r) : q(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n)
        });
        else if (i || rt.type(t) !== "object") n(e, t);
        else
            for (r in t) q(e + "[" + r + "]", t[r], i, n)
    }

    function U() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function G() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function Y(e) {
        return rt.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var X = [],
        V = X.slice,
        K = X.concat,
        Q = X.push,
        J = X.indexOf,
        Z = {},
        et = Z.toString,
        tt = Z.hasOwnProperty,
        it = {},
        nt = "1.11.1",
        rt = function (e, t) {
            return new rt.fn.init(e, t)
        },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        at = /^-ms-/,
        st = /-([\da-z])/gi,
        lt = function (e, t) {
            return t.toUpperCase()
        };
    rt.fn = rt.prototype = {
        jquery: nt,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function () {
            return V.call(this)
        },
        get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : V.call(this)
        },
        pushStack: function (e) {
            var t = rt.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function (e, t) {
            return rt.each(this, e, t)
        },
        map: function (e) {
            return this.pushStack(rt.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function () {
            return this.pushStack(V.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: X.sort,
        splice: X.splice
    }, rt.extend = rt.fn.extend = function () {
        var e, t, i, n, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || rt.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
            if ((r = arguments[s]) != null)
                for (n in r) e = a[n], i = r[n], a !== i && (c && i && (rt.isPlainObject(i) || (t = rt.isArray(i))) ? (t ? (t = !1, o = e && rt.isArray(e) ? e : []) : o = e && rt.isPlainObject(e) ? e : {}, a[n] = rt.extend(c, o, i)) : void 0 !== i && (a[n] = i));
        return a
    }, rt.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return rt.type(e) === "function"
        },
        isArray: Array.isArray || function (e) {
            return rt.type(e) === "array"
        },
        isWindow: function (e) {
            return null != e && e == e.window
        },
        isNumeric: function (e) {
            return !rt.isArray(e) && e - parseFloat(e) >= 0
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function (e) {
            var t;
            if (!e || rt.type(e) !== "object" || e.nodeType || rt.isWindow(e)) return !1;
            try {
                if (e.constructor && !tt.call(e, "constructor") && !tt.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (i) {
                return !1
            }
            if (it.ownLast)
                for (t in e) return tt.call(e, t);
            for (t in e);
            return void 0 === t || tt.call(e, t)
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[et.call(e)] || "object" : typeof e
        },
        globalEval: function (t) {
            t && rt.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function (e) {
            return e.replace(at, "ms-").replace(st, lt)
        },
        nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (e, t, n) {
            var r, o = 0,
                a = e.length,
                s = i(e);
            if (n) {
                if (s)
                    for (; a > o && (r = t.apply(e[o], n), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.apply(e[o], n), r === !1) break
            } else if (s)
                for (; a > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else
                for (o in e)
                    if (r = t.call(e[o], o, e[o]), r === !1) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ot, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? rt.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)), n
        },
        inArray: function (e, t, i) {
            var n;
            if (t) {
                if (J) return J.call(t, e, i);
                for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                    if (i in t && t[i] === e) return i
            }
            return -1
        },
        merge: function (e, t) {
            for (var i = +t.length, n = 0, r = e.length; i > n;) e[r++] = t[n++];
            if (i !== i)
                for (; t[n] !== void 0;) e[r++] = t[n++];
            return e.length = r, e
        },
        grep: function (e, t, i) {
            for (var n, r = [], o = 0, a = e.length, s = !i; a > o; o++) n = !t(e[o], o), n !== s && r.push(e[o]);
            return r
        },
        map: function (e, t, n) {
            var r, o = 0,
                a = e.length,
                s = i(e),
                l = [];
            if (s)
                for (; a > o; o++) r = t(e[o], o, n), null != r && l.push(r);
            else
                for (o in e) r = t(e[o], o, n), null != r && l.push(r);
            return K.apply([], l)
        },
        guid: 1,
        proxy: function (e, t) {
            var i, n, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), rt.isFunction(e) ? (i = V.call(arguments, 2), n = function () {
                return e.apply(t || this, i.concat(V.call(arguments)))
            }, n.guid = e.guid = e.guid || rt.guid++, n) : void 0
        },
        now: function () {
            return +new Date
        },
        support: it
    }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    });
    var ct =
        /*!
         * Sizzle CSS Selector Engine v1.10.19
         * http://sizzlejs.com/
         *
         * Copyright 2013 jQuery Foundation, Inc. and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2014-04-18
         */
        function (e) {
            function t(e, t, i, n) {
                var r, o, a, s, l, c, d, p, f, m;
                if ((t ? t.ownerDocument || t : H) !== M && I(t), t = t || M, i = i || [], !e || "string" != typeof e) return i;
                if ((s = t.nodeType) !== 1 && 9 !== s) return [];
                if (O && !n) {
                    if (r = yt.exec(e))
                        if (a = r[1]) {
                            if (9 === s) {
                                if (o = t.getElementById(a), !o || !o.parentNode) return i;
                                if (o.id === a) return i.push(o), i
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a) return i.push(o), i
                        } else {
                            if (r[2]) return Z.apply(i, t.getElementsByTagName(e)), i;
                            if ((a = r[3]) && _.getElementsByClassName && t.getElementsByClassName) return Z.apply(i, t.getElementsByClassName(a)), i
                        } if (_.qsa && (!F || !F.test(e))) {
                        if (p = d = j, f = t, m = 9 === s && e, 1 === s && t.nodeName.toLowerCase() !== "object") {
                            for (c = S(e), (d = t.getAttribute("id")) ? p = d.replace(xt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + h(c[l]);
                            f = bt.test(e) && u(t.parentNode) || t, m = c.join(",")
                        }
                        if (m) try {
                            return Z.apply(i, f.querySelectorAll(m)), i
                        } catch (g) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return A(e.replace(lt, "$1"), t, i, n)
            }

            function i() {
                function e(i, n) {
                    return t.push(i + " ") > k.cacheLength && delete e[t.shift()], e[i + " "] = n
                }
                var t = [];
                return e
            }

            function n(e) {
                return e[j] = !0, e
            }

            function r(e) {
                var t = M.createElement("div");
                try {
                    return !!e(t)
                } catch (i) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function o(e, t) {
                for (var i = e.split("|"), n = e.length; n--;) k.attrHandle[i[n]] = t
            }

            function a(e, t) {
                var i = t && e,
                    n = i && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && t.type === e
                }
            }

            function l(e) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === e
                }
            }

            function c(e) {
                return n(function (t) {
                    return t = +t, n(function (i, n) {
                        for (var r, o = e([], i.length, t), a = o.length; a--;) i[r = o[a]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function u(e) {
                return e && typeof e.getElementsByTagName !== Y && e
            }

            function d() {}

            function h(e) {
                for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
                return n
            }

            function p(e, t, i) {
                var n = t.dir,
                    r = i && "parentNode" === n,
                    o = W++;
                return t.first ? function (t, i, o) {
                    for (; t = t[n];)
                        if (t.nodeType === 1 || r) return e(t, i, o)
                } : function (t, i, a) {
                    var s, l, c = [B, o];
                    if (a) {
                        for (; t = t[n];)
                            if ((t.nodeType === 1 || r) && e(t, i, a)) return !0
                    } else
                        for (; t = t[n];)
                            if (t.nodeType === 1 || r) {
                                if (l = t[j] || (t[j] = {}), (s = l[n]) && s[0] === B && s[1] === o) return c[2] = s[2];
                                if (l[n] = c, c[2] = e(t, i, a)) return !0
                            }
                }
            }

            function f(e) {
                return e.length > 1 ? function (t, i, n) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, i, n)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, i, n) {
                for (var r = 0, o = i.length; o > r; r++) t(e, i[r], n);
                return n
            }

            function g(e, t, i, n, r) {
                for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!i || i(o, n, r)) && (a.push(o), c && t.push(s));
                return a
            }

            function v(e, t, i, r, o, a) {
                return r && !r[j] && (r = v(r)), o && !o[j] && (o = v(o, a)), n(function (n, a, s, l) {
                    var c, u, d, h = [],
                        p = [],
                        f = a.length,
                        v = n || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || !n && t ? v : g(v, h, e, s, l),
                        b = i ? o || (n ? e : f || r) ? [] : a : y;
                    if (i && i(y, b, s, l), r)
                        for (c = g(b, p), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (n) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                o(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = o ? tt.call(n, d) : h[u]) > -1 && (n[c] = !(a[c] = d))
                        }
                    } else b = g(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
                })
            }

            function y(e) {
                for (var t, i, n, r = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, l = p(function (e) {
                        return e === t
                    }, a, !0), c = p(function (e) {
                        return tt.call(t, e) > -1
                    }, a, !0), u = [function (e, i, n) {
                        return !o && (n || i !== P) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n))
                    }]; r > s; s++)
                    if (i = k.relative[e[s].type]) u = [p(f(u), i)];
                    else {
                        if (i = k.filter[e[s].type].apply(null, e[s].matches), i[j]) {
                            for (n = ++s; r > n && !k.relative[e[n].type]; n++);
                            return v(s > 1 && f(u), s > 1 && h(e.slice(0, s - 1).concat({
                                value: e[s - 2].type === " " ? "*" : ""
                            })).replace(lt, "$1"), i, n > s && y(e.slice(s, n)), r > n && y(e = e.slice(n)), r > n && h(e))
                        }
                        u.push(i)
                    } return f(u)
            }

            function b(e, i) {
                var r = i.length > 0,
                    o = e.length > 0,
                    a = function (n, a, s, l, c) {
                        var u, d, h, p = 0,
                            f = "0",
                            m = n && [],
                            v = [],
                            y = P,
                            b = n || o && k.find.TAG("*", c),
                            x = B += null == y ? 1 : Math.random() || .1,
                            _ = b.length;
                        for (c && (P = a !== M && a); f !== _ && (u = b[f]) != null; f++) {
                            if (o && u) {
                                for (d = 0; h = e[d++];)
                                    if (h(u, a, s)) {
                                        l.push(u);
                                        break
                                    } c && (B = x)
                            }
                            r && ((u = !h && u) && p--, n && m.push(u))
                        }
                        if (p += f, r && f !== p) {
                            for (d = 0; h = i[d++];) h(m, v, a, s);
                            if (n) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = Q.call(l));
                                v = g(v)
                            }
                            Z.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && t.uniqueSort(l)
                        }
                        return c && (B = x, P = y), m
                    };
                return r ? n(a) : a
            }
            var x, _, k, w, C, S, T, A, P, E, D, I, M, N, O, F, z, L, R, j = "sizzle" + -new Date,
                H = e.document,
                B = 0,
                W = 0,
                $ = i(),
                q = i(),
                U = i(),
                G = function (e, t) {
                    return e === t && (D = !0), 0
                },
                Y = "undefined",
                X = 1 << 31,
                V = {}.hasOwnProperty,
                K = [],
                Q = K.pop,
                J = K.push,
                Z = K.push,
                et = K.slice,
                tt = K.indexOf || function (e) {
                    for (var t = 0, i = this.length; i > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = rt.replace("w", "w#"),
                at = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
                st = ":(" + rt + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|" + ".*" + ")\\)|)",
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                ht = new RegExp(st),
                pt = new RegExp("^" + ot + "$"),
                ft = {
                    ID: new RegExp("^#(" + rt + ")"),
                    CLASS: new RegExp("^\\.(" + rt + ")"),
                    TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + at),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + it + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /[+~]/,
                xt = /'|\\/g,
                _t = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                kt = function (e, t, i) {
                    var n = "0x" + t - 65536;
                    return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
                };
            try {
                Z.apply(K = et.call(H.childNodes), H.childNodes), K[H.childNodes.length].nodeType
            } catch (wt) {
                Z = {
                    apply: K.length ? function (e, t) {
                        J.apply(e, et.call(t))
                    } : function (e, t) {
                        for (var i = e.length, n = 0; e[i++] = t[n++];);
                        e.length = i - 1
                    }
                }
            }
            _ = t.support = {}, C = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, I = t.setDocument = function (e) {
                var t, i = e ? e.ownerDocument || e : H,
                    n = i.defaultView;
                return i !== M && i.nodeType === 9 && i.documentElement ? (M = i, N = i.documentElement, O = !C(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function () {
                    I()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function () {
                    I()
                })), _.attributes = r(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), _.getElementsByTagName = r(function (e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), _.getElementsByClassName = vt.test(i.getElementsByClassName) && r(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
                }), _.getById = r(function (e) {
                    return N.appendChild(e).id = j, !i.getElementsByName || !i.getElementsByName(j).length
                }), _.getById ? (k.find.ID = function (e, t) {
                    if (typeof t.getElementById !== Y && O) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                }, k.filter.ID = function (e) {
                    var t = e.replace(_t, kt);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete k.find.ID, k.filter.ID = function (e) {
                    var t = e.replace(_t, kt);
                    return function (e) {
                        var i = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), k.find.TAG = _.getElementsByTagName ? function (e, t) {
                    return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var i, n = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = o[r++];) i.nodeType === 1 && n.push(i);
                        return n
                    }
                    return o
                }, k.find.CLASS = _.getElementsByClassName && function (e, t) {
                    return typeof t.getElementsByClassName !== Y && O ? t.getElementsByClassName(e) : void 0
                }, z = [], F = [], (_.qsa = vt.test(i.querySelectorAll)) && (r(function (e) {
                    e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + it + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
                }), r(function (e) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (_.matchesSelector = vt.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function (e) {
                    _.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), z.push("!=", st)
                }), F = F.length && new RegExp(F.join("|")), z = z.length && new RegExp(z.join("|")), t = vt.test(N.compareDocumentPosition), R = t || vt.test(N.contains) ? function (e, t) {
                    var i = e.nodeType === 9 ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || n.nodeType !== 1 || !(i.contains ? i.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, G = t ? function (e, t) {
                    if (e === t) return D = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === H && R(H, e) ? -1 : t === i || t.ownerDocument === H && R(H, t) ? 1 : E ? tt.call(E, e) - tt.call(E, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return D = !0, 0;
                    var n, r = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        c = [t];
                    if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : E ? tt.call(E, e) - tt.call(E, t) : 0;
                    if (o === s) return a(e, t);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (n = t; n = n.parentNode;) c.unshift(n);
                    for (; l[r] === c[r];) r++;
                    return r ? a(l[r], c[r]) : l[r] === H ? -1 : c[r] === H ? 1 : 0
                }, i) : M
            }, t.matches = function (e, i) {
                return t(e, null, null, i)
            }, t.matchesSelector = function (e, i) {
                if ((e.ownerDocument || e) !== M && I(e), i = i.replace(dt, "='$1']"), !(!_.matchesSelector || !O || z && z.test(i) || F && F.test(i))) try {
                    var n = L.call(e, i);
                    if (n || _.disconnectedMatch || e.document && e.document.nodeType !== 11) return n
                } catch (r) {}
                return t(i, M, null, [e]).length > 0
            }, t.contains = function (e, t) {
                return (e.ownerDocument || e) !== M && I(e), R(e, t)
            }, t.attr = function (e, t) {
                (e.ownerDocument || e) !== M && I(e);
                var i = k.attrHandle[t.toLowerCase()],
                    n = i && V.call(k.attrHandle, t.toLowerCase()) ? i(e, t, !O) : void 0;
                return void 0 !== n ? n : _.attributes || !O ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function (e) {
                var t, i = [],
                    n = 0,
                    r = 0;
                if (D = !_.detectDuplicates, E = !_.sortStable && e.slice(0), e.sort(G), D) {
                    for (; t = e[r++];) t === e[r] && (n = i.push(r));
                    for (; n--;) e.splice(i[n], 1)
                }
                return E = null, e
            }, w = t.getText = function (e) {
                var t, i = "",
                    n = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += w(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[n++];) i += w(t);
                return i
            }, k = t.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(_t, kt), e[3] = (e[3] || e[4] || e[5] || "").replace(_t, kt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, i = !e[6] && e[2];
                        return ft.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ht.test(i) && (t = S(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(_t, kt).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = $[e + " "];
                        return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && $(e, function (e) {
                            return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, i, n) {
                        return function (r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && o.indexOf(n) === 0 : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, i, n, r) {
                        var o = e.slice(0, 3) !== "nth",
                            a = e.slice(-4) !== "last",
                            s = "of-type" === t;
                        return 1 === n && 0 === r ? function (e) {
                            return !!e.parentNode
                        } : function (t, i, l) {
                            var c, u, d, h, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : d.nodeType === 1) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (u = g[j] || (g[j] = {}), c = u[e] || [], p = c[0] === B && c[1], h = c[0] === B && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)
                                        if (d.nodeType === 1 && ++h && d === t) {
                                            u[e] = [B, p, h];
                                            break
                                        }
                                } else if (y && (c = (t[j] || (t[j] = {}))[e]) && c[0] === B) h = c[1];
                                else
                                    for (;
                                        (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : d.nodeType !== 1) || !++h || (y && ((d[j] || (d[j] = {}))[e] = [B, h]), d !== t)););
                                return h -= r, h === n || 0 === h % n && h / n >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, i) {
                        var r, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[j] ? o(i) : o.length > 1 ? (r = [e, e, "", i], k.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                            for (var n, r = o(e, i), a = r.length; a--;) n = tt.call(e, r[a]), e[n] = !(t[n] = r[a])
                        }) : function (e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function (e) {
                        var t = [],
                            i = [],
                            r = T(e.replace(lt, "$1"));
                        return r[j] ? n(function (e, t, i, n) {
                            for (var o, a = r(e, null, n, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, n, o) {
                            return t[0] = e, r(t, null, o, i), !i.pop()
                        }
                    }),
                    has: n(function (e) {
                        return function (i) {
                            return t(e, i).length > 0
                        }
                    }),
                    contains: n(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                    }),
                    lang: n(function (e) {
                        return pt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(_t, kt).toLowerCase(),
                            function (t) {
                                var i;
                                do
                                    if (i = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || i.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === N
                    },
                    focus: function (e) {
                        return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function (e) {
                        return gt.test(e.nodeName)
                    },
                    input: function (e) {
                        return mt.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && e.type === "button" || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                    },
                    first: c(function () {
                        return [0]
                    }),
                    last: c(function (e, t) {
                        return [t - 1]
                    }),
                    eq: c(function (e, t, i) {
                        return [0 > i ? i + t : i]
                    }),
                    even: c(function (e, t) {
                        for (var i = 0; t > i; i += 2) e.push(i);
                        return e
                    }),
                    odd: c(function (e, t) {
                        for (var i = 1; t > i; i += 2) e.push(i);
                        return e
                    }),
                    lt: c(function (e, t, i) {
                        for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                        return e
                    }),
                    gt: c(function (e, t, i) {
                        for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }, k.pseudos.nth = k.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[x] = s(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[x] = l(x);
            return d.prototype = k.filters = k.pseudos, k.setFilters = new d, S = t.tokenize = function (e, i) {
                var n, r, o, a, s, l, c, u = q[e + " "];
                if (u) return i ? 0 : u.slice(0);
                for (s = e, l = [], c = k.preFilter; s;) {
                    (!n || (r = ct.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = ut.exec(s)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(lt, " ")
                    }), s = s.slice(n.length));
                    for (a in k.filter) !(r = ft[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: a,
                        matches: r
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return i ? s.length : s ? t.error(e) : q(e, l).slice(0)
            }, T = t.compile = function (e, t) {
                var i, n = [],
                    r = [],
                    o = U[e + " "];
                if (!o) {
                    for (t || (t = S(e)), i = t.length; i--;) o = y(t[i]), o[j] ? n.push(o) : r.push(o);
                    o = U(e, b(r, n)), o.selector = e
                }
                return o
            }, A = t.select = function (e, t, i, n) {
                var r, o, a, s, l, c = "function" == typeof e && e,
                    d = !n && S(e = c.selector || e);
                if (i = i || [], d.length === 1) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && (a = o[0]).type === "ID" && _.getById && t.nodeType === 9 && O && k.relative[o[1].type]) {
                        if (t = (k.find.ID(a.matches[0].replace(_t, kt), t) || [])[0], !t) return i;
                        c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = ft.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !k.relative[s = a.type]);)
                        if ((l = k.find[s]) && (n = l(a.matches[0].replace(_t, kt), bt.test(o[0].type) && u(t.parentNode) || t))) {
                            if (o.splice(r, 1), e = n.length && h(o), !e) return Z.apply(i, n), i;
                            break
                        }
                }
                return (c || T(e, d))(n, t, !O, i, bt.test(e) && u(t.parentNode) || t), i
            }, _.sortStable = j.split("").sort(G).join("") === j, _.detectDuplicates = !!D, I(), _.sortDetached = r(function (e) {
                return e.compareDocumentPosition(M.createElement("div")) & 1
            }), r(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
            }) || o("type|href|height|width", function (e, t, i) {
                return i ? void 0 : e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
            }), _.attributes && r(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
            }) || o("value", function (e, t, i) {
                return i || e.nodeName.toLowerCase() !== "input" ? void 0 : e.defaultValue
            }), r(function (e) {
                return e.getAttribute("disabled") == null
            }) || o(it, function (e, t, i) {
                var n;
                return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }), t
        }(e);
    rt.find = ct, rt.expr = ct.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ct.uniqueSort, rt.text = ct.getText, rt.isXMLDoc = ct.isXML, rt.contains = ct.contains;
    var ut = rt.expr.match.needsContext,
        dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ht = /^.[^:#\[\.,]*$/;
    rt.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), t.length === 1 && n.nodeType === 1 ? rt.find.matchesSelector(n, e) ? [n] : [] : rt.find.matches(e, rt.grep(t, function (e) {
            return e.nodeType === 1
        }))
    }, rt.fn.extend({
        find: function (e) {
            var t, i = [],
                n = this,
                r = n.length;
            if ("string" != typeof e) return this.pushStack(rt(e).filter(function () {
                for (t = 0; r > t; t++)
                    if (rt.contains(n[t], this)) return !0
            }));
            for (t = 0; r > t; t++) rt.find(e, n[t], i);
            return i = this.pushStack(r > 1 ? rt.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function (e) {
            return this.pushStack(n(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(n(this, e || [], !0))
        },
        is: function (e) {
            return !!n(this, "string" == typeof e && ut.test(e) ? rt(e) : e || [], !1).length
        }
    });
    var pt, ft = e.document,
        mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = rt.fn.init = function (e, t) {
            var i, n;
            if (!e) return this;
            if ("string" == typeof e) {
                if (i = e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? [null, e, null] : mt.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || pt).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof rt ? t[0] : t, rt.merge(this, rt.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ft, !0)), dt.test(i[1]) && rt.isPlainObject(t))
                        for (i in t) rt.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (n = ft.getElementById(i[2]), n && n.parentNode) {
                    if (n.id !== i[2]) return pt.find(e);
                    this.length = 1, this[0] = n
                }
                return this.context = ft, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : rt.isFunction(e) ? typeof pt.ready != "undefined" ? pt.ready(e) : e(rt) : (e.selector !== void 0 && (this.selector = e.selector, this.context = e.context), rt.makeArray(e, this))
        };
    gt.prototype = rt.fn, pt = rt(ft);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    rt.extend({
        dir: function (e, t, i) {
            for (var n = [], r = e[t]; r && r.nodeType !== 9 && (void 0 === i || r.nodeType !== 1 || !rt(r).is(i));) r.nodeType === 1 && n.push(r), r = r[t];
            return n
        },
        sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && i.push(e);
            return i
        }
    }), rt.fn.extend({
        has: function (e) {
            var t, i = rt(e, this),
                n = i.length;
            return this.filter(function () {
                for (t = 0; n > t; t++)
                    if (rt.contains(this, i[t])) return !0
            })
        },
        closest: function (e, t) {
            for (var i, n = 0, r = this.length, o = [], a = ut.test(e) || "string" != typeof e ? rt(e, t || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (a ? a.index(i) > -1 : i.nodeType === 1 && rt.find.matchesSelector(i, e))) {
                        o.push(i);
                        break
                    } return this.pushStack(o.length > 1 ? rt.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? rt.inArray(this[0], rt(e)) : rt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), rt.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return rt.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return rt.dir(e, "parentNode", i)
        },
        next: function (e) {
            return r(e, "nextSibling")
        },
        prev: function (e) {
            return r(e, "previousSibling")
        },
        nextAll: function (e) {
            return rt.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return rt.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return rt.dir(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return rt.dir(e, "previousSibling", i)
        },
        siblings: function (e) {
            return rt.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return rt.sibling(e.firstChild)
        },
        contents: function (e) {
            return rt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : rt.merge([], e.childNodes)
        }
    }, function (e, t) {
        rt.fn[e] = function (i, n) {
            var r = rt.map(this, t, i);
            return e.slice(-5) !== "Until" && (n = i), n && "string" == typeof n && (r = rt.filter(n, r)), this.length > 1 && (yt[e] || (r = rt.unique(r)), vt.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var bt = /\S+/g,
        xt = {};
    rt.Callbacks = function (e) {
        e = "string" == typeof e ? xt[e] || o(e) : rt.extend({}, e);
        var t, i, n, r, a, s, l = [],
            c = !e.once && [],
            u = function (o) {
                for (i = e.memory && o, n = !0, a = s || 0, s = 0, r = l.length, t = !0; l && r > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    } t = !1, l && (c ? c.length && u(c.shift()) : i ? l = [] : d.disable())
            },
            d = {
                add: function () {
                    if (l) {
                        var n = l.length;
                        (function o(t) {
                            rt.each(t, function (t, i) {
                                var n = rt.type(i);
                                "function" === n ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                            })
                        })(arguments), t ? r = l.length : i && (s = n, u(i))
                    }
                    return this
                },
                remove: function () {
                    return l && rt.each(arguments, function (e, i) {
                        for (var n;
                            (n = rt.inArray(i, l, n)) > -1;) l.splice(n, 1), t && (r >= n && r--, a >= n && a--)
                    }), this
                },
                has: function (e) {
                    return e ? rt.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], r = 0, this
                },
                disable: function () {
                    return l = c = i = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return c = void 0, i || d.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, i) {
                    return !l || n && !c || (i = i || [], i = [e, i.slice ? i.slice() : i], t ? c.push(i) : u(i)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!n
                }
            };
        return d
    }, rt.extend({
        Deferred: function (e) {
            var t = [
                    ["resolve", "done", rt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", rt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", rt.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return rt.Deferred(function (i) {
                            rt.each(t, function (t, o) {
                                var a = rt.isFunction(e[t]) && e[t];
                                r[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && rt.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? rt.extend(e, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, rt.each(t, function (e, o) {
                var a = o[2],
                    s = o[3];
                n[o[1]] = a.add, s && a.add(function () {
                    i = s
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? n : this, arguments), this
                }, r[o[0] + "With"] = a.fireWith
            }), n.promise(r), e && e.call(r, r), r
        },
        when: function (e) {
            var t, i, n, r = 0,
                o = V.call(arguments),
                a = o.length,
                s = 1 !== a || e && rt.isFunction(e.promise) ? a : 0,
                l = 1 === s ? e : rt.Deferred(),
                c = function (e, i, n) {
                    return function (r) {
                        i[e] = this, n[e] = arguments.length > 1 ? V.call(arguments) : r, n === t ? l.notifyWith(i, n) : --s || l.resolveWith(i, n)
                    }
                };
            if (a > 1)
                for (t = new Array(a), i = new Array(a), n = new Array(a); a > r; r++) o[r] && rt.isFunction(o[r].promise) ? o[r].promise().done(c(r, n, o)).fail(l.reject).progress(c(r, i, t)) : --s;
            return s || l.resolveWith(n, o), l.promise()
        }
    });
    var _t;
    rt.fn.ready = function (e) {
        return rt.ready.promise().done(e), this
    }, rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? rt.readyWait++ : rt.ready(!0)
        },
        ready: function (e) {
            if (e === !0 ? !--rt.readyWait : !rt.isReady) {
                if (!ft.body) return setTimeout(rt.ready);
                rt.isReady = !0, e !== !0 && --rt.readyWait > 0 || (_t.resolveWith(ft, [rt]), rt.fn.triggerHandler && (rt(ft).triggerHandler("ready"), rt(ft).off("ready")))
            }
        }
    }), rt.ready.promise = function (t) {
        if (!_t)
            if (_t = rt.Deferred(), ft.readyState === "complete") setTimeout(rt.ready);
            else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
        else {
            ft.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
            var i = !1;
            try {
                i = e.frameElement == null && ft.documentElement
            } catch (n) {}
            i && i.doScroll && function r() {
                if (!rt.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    a(), rt.ready()
                }
            }()
        }
        return _t.promise(t)
    };
    var kt, wt = "undefined";
    for (kt in rt(it)) break;
    it.ownLast = "0" !== kt, it.inlineBlockNeedsLayout = !1, rt(function () {
            var e, t, i, n;
            i = ft.getElementsByTagName("body")[0], i && i.style && (t = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== wt && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", it.inlineBlockNeedsLayout = e = t.offsetWidth === 3, e && (i.style.zoom = 1)), i.removeChild(n))
        }),
        function () {
            var e = ft.createElement("div");
            if (it.deleteExpando == null) {
                it.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    it.deleteExpando = !1
                }
            }
            e = null
        }(), rt.acceptData = function (e) {
            var t = rt.noData[(e.nodeName + " ").toLowerCase()],
                i = +e.nodeType || 1;
            return 1 !== i && 9 !== i ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        St = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? rt.cache[e[rt.expando]] : e[rt.expando], !!e && !c(e)
        },
        data: function (e, t, i) {
            return u(e, t, i)
        },
        removeData: function (e, t) {
            return d(e, t)
        },
        _data: function (e, t, i) {
            return u(e, t, i, !0)
        },
        _removeData: function (e, t) {
            return d(e, t, !0)
        }
    }), rt.fn.extend({
        data: function (e, t) {
            var i, n, r, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = rt.data(o), o.nodeType === 1 && !rt._data(o, "parsedAttrs"))) {
                    for (i = a.length; i--;) a[i] && (n = a[i].name, n.indexOf("data-") === 0 && (n = rt.camelCase(n.slice(5)), l(o, n, r[n])));
                    rt._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function () {
                rt.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                rt.data(this, e, t)
            }) : o ? l(o, e, rt.data(o, e)) : void 0
        },
        removeData: function (e) {
            return this.each(function () {
                rt.removeData(this, e)
            })
        }
    }), rt.extend({
        queue: function (e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = rt._data(e, t), i && (!n || rt.isArray(i) ? n = rt._data(e, t, rt.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = rt.queue(e, t),
                n = i.length,
                r = i.shift(),
                o = rt._queueHooks(e, t),
                a = function () {
                    rt.dequeue(e, t)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return rt._data(e, i) || rt._data(e, i, {
                empty: rt.Callbacks("once memory").add(function () {
                    rt._removeData(e, t + "queue"), rt._removeData(e, i)
                })
            })
        }
    }), rt.fn.extend({
        queue: function (e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? rt.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var i = rt.queue(this, e, t);
                rt._queueHooks(this, e), "fx" === e && i[0] !== "inprogress" && rt.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                rt.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var i, n = 1,
                r = rt.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --n || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) i = rt._data(o[a], e + "queueHooks"), i && i.empty && (n++, i.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        At = ["Top", "Right", "Bottom", "Left"],
        Pt = function (e, t) {
            return e = t || e, rt.css(e, "display") === "none" || !rt.contains(e.ownerDocument, e)
        },
        Et = rt.access = function (e, t, i, n, r, o, a) {
            var s = 0,
                l = e.length,
                c = null == i;
            if (rt.type(i) === "object") {
                r = !0;
                for (s in i) rt.access(e, t, s, i[s], !0, o, a)
            } else if (void 0 !== n && (r = !0, rt.isFunction(n) || (a = !0), c && (a ? (t.call(e, n), t = null) : (c = t, t = function (e, t, i) {
                    return c.call(rt(e), i)
                })), t))
                for (; l > s; s++) t(e[s], i, a ? n : n.call(e[s], s, t(e[s], i)));
            return r ? e : c ? t.call(e) : l ? t(e[0], i) : o
        },
        Dt = /^(?:checkbox|radio)$/i;
    (function () {
        var e = ft.createElement("input"),
            t = ft.createElement("div"),
            i = ft.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", it.leadingWhitespace = t.firstChild.nodeType === 3, it.tbody = !t.getElementsByTagName("tbody").length, it.htmlSerialize = !!t.getElementsByTagName("link").length, it.html5Clone = ft.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", e.type = "checkbox", e.checked = !0, i.appendChild(e), it.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, i.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", it.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                it.noCloneEvent = !1
            }), t.cloneNode(!0).click()), it.deleteExpando == null) {
            it.deleteExpando = !0;
            try {
                delete t.test
            } catch (n) {
                it.deleteExpando = !1
            }
        }
    })(),
    function () {
        var t, i, n = ft.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) i = "on" + t, (it[t + "Bubbles"] = i in e) || (n.setAttribute(i, "t"), it[t + "Bubbles"] = n.attributes[i].expando === !1);
        n = null
    }();
    var It = /^(?:input|select|textarea)$/i,
        Mt = /^key/,
        Nt = /^(?:mouse|pointer|contextmenu)|click/,
        Ot = /^(?:focusinfocus|focusoutblur)$/,
        Ft = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function (e, t, i, n, r) {
            var o, a, s, l, c, u, d, h, p, f, m, g = rt._data(e);
            if (g) {
                for (i.handler && (l = i, i = l.handler, r = l.selector), i.guid || (i.guid = rt.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function (e) {
                        return typeof rt === wt || e && rt.event.triggered === e.type ? void 0 : rt.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = e), t = (t || "").match(bt) || [""], s = t.length; s--;) o = Ft.exec(t[s]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (c = rt.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = rt.event.special[p] || {}, d = rt.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && rt.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, l), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, c.setup && c.setup.call(e, n, f, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), rt.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, i, n, r) {
            var o, a, s, l, c, u, d, h, p, f, m, g = rt.hasData(e) && rt._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(bt) || [""], c = t.length; c--;)
                    if (s = Ft.exec(t[c]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
                        for (d = rt.event.special[p] || {}, p = (n ? d.delegateType : d.bindType) || p, h = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) a = h[o], !r && m !== a.origType || i && i.guid !== a.guid || s && !s.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (h.splice(o, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !h.length && (d.teardown && d.teardown.call(e, f, g.handle) !== !1 || rt.removeEvent(e, p, g.handle), delete u[p])
                    } else
                        for (p in u) rt.event.remove(e, p + t[c], i, n, !0);
                rt.isEmptyObject(u) && (delete g.handle, rt._removeData(e, "events"))
            }
        },
        trigger: function (t, i, n, r) {
            var o, a, s, l, c, u, d, h = [n || ft],
                p = tt.call(t, "type") ? t.type : t,
                f = tt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = n = n || ft, n.nodeType !== 3 && n.nodeType !== 8 && !Ot.test(p + rt.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[rt.expando] ? t : new rt.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : rt.makeArray(i, [t]), c = rt.event.special[p] || {}, r || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!r && !c.noBubble && !rt.isWindow(n)) {
                    for (l = c.delegateType || p, Ot.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), u = s;
                    u === (n.ownerDocument || ft) && h.push(u.defaultView || u.parentWindow || e)
                }
                for (d = 0;
                    (s = h[d++]) && !t.isPropagationStopped();) t.type = d > 1 ? l : c.bindType || p, o = (rt._data(s, "events") || {})[t.type] && rt._data(s, "handle"), o && o.apply(s, i), o = a && s[a], o && o.apply && rt.acceptData(s) && (t.result = o.apply(s, i), t.result === !1 && t.preventDefault());
                if (t.type = p, !r && !t.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), i) === !1) && rt.acceptData(n) && a && n[p] && !rt.isWindow(n)) {
                    u = n[a], u && (n[a] = null), rt.event.triggered = p;
                    try {
                        n[p]()
                    } catch (m) {}
                    rt.event.triggered = void 0, u && (n[a] = u)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = rt.event.fix(e);
            var t, i, n, r, o, a = [],
                s = V.call(arguments),
                l = (rt._data(this, "events") || {})[e.type] || [],
                c = rt.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = rt.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                        (n = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(n.namespace)) && (e.handleObj = n, e.data = n.data, i = ((rt.event.special[n.origType] || {}).handle || n.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var i, n, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && (!e.button || e.type !== "click"))
                for (; l != this; l = l.parentNode || this)
                    if (l.nodeType === 1 && (l.disabled !== !0 || e.type !== "click")) {
                        for (r = [], o = 0; s > o; o++) n = t[o], i = n.selector + " ", r[i] === void 0 && (r[i] = n.needsContext ? rt(i, this).index(l) >= 0 : rt.find(i, this, null, [l]).length), r[i] && r.push(n);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    } return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a
        },
        fix: function (e) {
            if (e[rt.expando]) return e;
            var t, i, n, r = e.type,
                o = e,
                a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = Nt.test(r) ? this.mouseHooks : Mt.test(r) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new rt.Event(o), t = n.length; t--;) i = n[t], e[i] = o[i];
            return e.target || (e.target = o.srcElement || ft), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var i, n, r, o = t.button,
                    a = t.fromElement;
                return e.pageX == null && t.clientX != null && (n = e.target.ownerDocument || ft, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return rt.nodeName(this, "input") && this.type === "checkbox" && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return rt.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, i, n) {
            var r = rt.extend(new rt.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? rt.event.trigger(r, null, t) : rt.event.dispatch.call(t, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, rt.removeEvent = ft.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, t, i) {
        var n = "on" + t;
        e.detachEvent && (typeof e[n] === wt && (e[n] = null), e.detachEvent(n, i))
    }, rt.Event = function (e, t) {
        return this instanceof rt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? h : p) : this.type = e, t && rt.extend(this, t), this.timeStamp = e && e.timeStamp || rt.now(), this[rt.expando] = !0, void 0) : new rt.Event(e, t)
    }, rt.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        rt.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, n = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return (!r || r !== n && !rt.contains(n, r)) && (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), it.submitBubbles || (rt.event.special.submit = {
        setup: function () {
            return rt.nodeName(this, "form") ? !1 : (rt.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target,
                    i = rt.nodeName(t, "input") || rt.nodeName(t, "button") ? t.form : void 0;
                i && !rt._data(i, "submitBubbles") && (rt.event.add(i, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), rt._data(i, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && rt.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return rt.nodeName(this, "form") ? !1 : (rt.event.remove(this, "._submit"), void 0)
        }
    }), it.changeBubbles || (rt.event.special.change = {
        setup: function () {
            return It.test(this.nodeName) ? ((this.type === "checkbox" || this.type === "radio") && (rt.event.add(this, "propertychange._change", function (e) {
                e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), rt.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, e, !0)
            })), !1) : (rt.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                It.test(t.nodeName) && !rt._data(t, "changeBubbles") && (rt.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || rt.event.simulate("change", this.parentNode, e, !0)
                }), rt._data(t, "changeBubbles", !0))
            }), void 0)
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox" ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return rt.event.remove(this, "._change"), !It.test(this.nodeName)
        }
    }), it.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var i = function (e) {
            rt.event.simulate(t, e.target, rt.event.fix(e), !0)
        };
        rt.event.special[t] = {
            setup: function () {
                var n = this.ownerDocument || this,
                    r = rt._data(n, t);
                r || n.addEventListener(e, i, !0), rt._data(n, t, (r || 0) + 1)
            },
            teardown: function () {
                var n = this.ownerDocument || this,
                    r = rt._data(n, t) - 1;
                r ? rt._data(n, t, r) : (n.removeEventListener(e, i, !0), rt._removeData(n, t))
            }
        }
    }), rt.fn.extend({
        on: function (e, t, i, n, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (i = i || t, t = void 0);
                for (o in e) this.on(o, t, i, e[o], r);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), n === !1) n = p;
            else if (!n) return this;
            return 1 === r && (a = n, n = function (e) {
                return rt().off(e), a.apply(this, arguments)
            }, n.guid = a.guid || (a.guid = rt.guid++)), this.each(function () {
                rt.event.add(this, e, n, i, t)
            })
        },
        one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function (e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, rt(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (i = t, t = void 0), i === !1 && (i = p), this.each(function () {
                rt.event.remove(this, e, i, t)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                rt.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var i = this[0];
            return i ? rt.event.trigger(e, t, i, !0) : void 0
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Lt = / jQuery\d+="(?:null|\d+)"/g,
        Rt = new RegExp("<(?:" + zt + ")[\\s/>]", "i"),
        jt = /^\s+/,
        Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Bt = /<([\w:]+)/,
        Wt = /<tbody/i,
        $t = /<|&#?\w+;/,
        qt = /<(?:script|style|link)/i,
        Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Gt = /^$|\/(?:java|ecma)script/i,
        Yt = /^true\/(.*)/,
        Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Vt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: it.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Kt = m(ft),
        Qt = Kt.appendChild(ft.createElement("div"));
    Vt.optgroup = Vt.option, Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead, Vt.th = Vt.td, rt.extend({
        clone: function (e, t, i) {
            var n, r, o, a, s, l = rt.contains(e.ownerDocument, e);
            if (it.html5Clone || rt.isXMLDoc(e) || !Rt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qt.innerHTML = e.outerHTML, Qt.removeChild(o = Qt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || e.nodeType !== 1 && e.nodeType !== 11 || rt.isXMLDoc(e)))
                for (n = g(o), s = g(e), a = 0;
                    (r = s[a]) != null; ++a) n[a] && w(r, n[a]);
            if (t)
                if (i)
                    for (s = s || g(e), n = n || g(o), a = 0;
                        (r = s[a]) != null; a++) k(r, n[a]);
                else k(e, o);
            return n = g(o, "script"), n.length > 0 && _(n, !l && g(e, "script")), n = s = r = null, o
        },
        buildFragment: function (e, t, i, n) {
            for (var r, o, a, s, l, c, u, d = e.length, h = m(t), p = [], f = 0; d > f; f++)
                if (o = e[f], o || 0 === o)
                    if (rt.type(o) === "object") rt.merge(p, o.nodeType ? [o] : o);
                    else if ($t.test(o)) {
                for (s = s || h.appendChild(t.createElement("div")), l = (Bt.exec(o) || ["", ""])[1].toLowerCase(), u = Vt[l] || Vt._default, s.innerHTML = u[1] + o.replace(Ht, "<$1></$2>") + u[2], r = u[0]; r--;) s = s.lastChild;
                if (!it.leadingWhitespace && jt.test(o) && p.push(t.createTextNode(jt.exec(o)[0])), !it.tbody)
                    for (o = "table" !== l || Wt.test(o) ? u[1] !== "<table>" || Wt.test(o) ? 0 : s : s.firstChild, r = o && o.childNodes.length; r--;) rt.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (rt.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = h.lastChild
            } else p.push(t.createTextNode(o));
            for (s && h.removeChild(s), it.appendChecked || rt.grep(g(p, "input"), v), f = 0; o = p[f++];)
                if ((!n || rt.inArray(o, n) === -1) && (a = rt.contains(o.ownerDocument, o), s = g(h.appendChild(o), "script"), a && _(s), i))
                    for (r = 0; o = s[r++];) Gt.test(o.type || "") && i.push(o);
            return s = null, h
        },
        cleanData: function (e, t) {
            for (var i, n, r, o, a = 0, s = rt.expando, l = rt.cache, c = it.deleteExpando, u = rt.event.special;
                (i = e[a]) != null; a++)
                if ((t || rt.acceptData(i)) && (r = i[s], o = r && l[r])) {
                    if (o.events)
                        for (n in o.events) u[n] ? rt.event.remove(i, n) : rt.removeEvent(i, n, o.handle);
                    l[r] && (delete l[r], c ? delete i[s] : typeof i.removeAttribute !== wt ? i.removeAttribute(s) : i[s] = null, X.push(r))
                }
        }
    }), rt.fn.extend({
        text: function (e) {
            return Et(this, function (e) {
                return void 0 === e ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = y(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var i, n = e ? rt.filter(e, this) : this, r = 0;
                (i = n[r]) != null; r++) t || i.nodeType !== 1 || rt.cleanData(g(i)), i.parentNode && (t && rt.contains(i.ownerDocument, i) && _(g(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function () {
            for (var e, t = 0;
                (e = this[t]) != null; t++) {
                for (e.nodeType === 1 && rt.cleanData(g(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && rt.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return rt.clone(this, e, t)
            })
        },
        html: function (e) {
            return Et(this, function (e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e) return t.nodeType === 1 ? t.innerHTML.replace(Lt, "") : void 0;
                if (!("string" != typeof e || qt.test(e) || !it.htmlSerialize && Rt.test(e) || !it.leadingWhitespace && jt.test(e) || Vt[(Bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Ht, "<$1></$2>");
                    try {
                        for (; n > i; i++) t = this[i] || {}, t.nodeType === 1 && (rt.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, rt.cleanData(g(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t) {
            e = K.apply([], e);
            var i, n, r, o, a, s, l = 0,
                c = this.length,
                u = this,
                d = c - 1,
                h = e[0],
                p = rt.isFunction(h);
            if (p || c > 1 && "string" == typeof h && !it.checkClone && Ut.test(h)) return this.each(function (i) {
                var n = u.eq(i);
                p && (e[0] = h.call(this, i, n.html())), n.domManip(e, t)
            });
            if (c && (s = rt.buildFragment(e, this[0].ownerDocument, !1, this), i = s.firstChild, s.childNodes.length === 1 && (s = i), i)) {
                for (o = rt.map(g(s, "script"), b), r = o.length; c > l; l++) n = s, l !== d && (n = rt.clone(n, !0, !0), r && rt.merge(o, g(n, "script"))), t.call(this[l], n, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument, rt.map(o, x), l = 0; r > l; l++) n = o[l], Gt.test(n.type || "") && !rt._data(n, "globalEval") && rt.contains(a, n) && (n.src ? rt._evalUrl && rt._evalUrl(n.src) : rt.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Xt, "")));
                s = i = null
            }
            return this
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        rt.fn[e] = function (e) {
            for (var i, n = 0, r = [], o = rt(e), a = o.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0), rt(o[n])[t](i), Q.apply(r, i.get());
            return this.pushStack(r)
        }
    });
    var Jt, Zt = {};
    (function () {
        var e;
        it.shrinkWrapBlocks = function () {
            if (null != e) return e;
            e = !1;
            var t, i, n;
            return i = ft.getElementsByTagName("body")[0], i && i.style ? (t = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), typeof t.style.zoom !== wt && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ft.createElement("div")).style.width = "5px", e = t.offsetWidth !== 3), i.removeChild(n), e) : void 0
        }
    })();
    var ei, ti, ii = /^margin/,
        ni = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
        ri = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ei = function (e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, ti = function (e, t, i) {
            var n, r, o, a, s = e.style;
            return i = i || ei(e), a = i ? i.getPropertyValue(t) || i[t] : void 0, i && ("" !== a || rt.contains(e.ownerDocument, e) || (a = rt.style(e, t)), ni.test(a) && ii.test(t) && (n = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = i.width, s.width = n, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + ""
        }) : ft.documentElement.currentStyle && (ei = function (e) {
            return e.currentStyle
        }, ti = function (e, t, i) {
            var n, r, o, a, s = e.style;
            return i = i || ei(e), a = i ? i[t] : void 0, null == a && s && s[t] && (a = s[t]), ni.test(a) && !ri.test(t) && (n = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = n, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
        }),
        function () {
            function t() {
                var t, i, n, r;
                i = ft.getElementsByTagName("body")[0], i && i.style && (t = ft.createElement("div"), n = ft.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, e.getComputedStyle && (o = (e.getComputedStyle(t, null) || {}).top !== "1%", a = (e.getComputedStyle(t, null) || {
                    width: "4px"
                }).width === "4px", r = t.appendChild(ft.createElement("div")), r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", t.style.width = "1px", l = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = t.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = r[0].offsetHeight === 0, s && (r[0].style.display = "", r[1].style.display = "none", s = r[0].offsetHeight === 0), i.removeChild(n))
            }
            var i, n, r, o, a, s, l;
            i = ft.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = i.getElementsByTagName("a")[0], n = r && r.style, n && (n.cssText = "float:left;opacity:.5", it.opacity = n.opacity === "0.5", it.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", it.clearCloneStyle = i.style.backgroundClip === "content-box", it.boxSizing = n.boxSizing === "" || n.MozBoxSizing === "" || n.WebkitBoxSizing === "", rt.extend(it, {
                reliableHiddenOffsets: function () {
                    return null == s && t(), s
                },
                boxSizingReliable: function () {
                    return null == a && t(), a
                },
                pixelPosition: function () {
                    return null == o && t(), o
                },
                reliableMarginRight: function () {
                    return null == l && t(), l
                }
            }))
        }(), rt.swap = function (e, t, i, n) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            r = i.apply(e, n || []);
            for (o in t) e.style[o] = a[o];
            return r
        };
    var oi = /alpha\([^)]*\)/i,
        ai = /opacity\s*=\s*([^)]*)/,
        si = /^(none|table(?!-c[ea]).+)/,
        li = new RegExp("^(" + Tt + ")(.*)$", "i"),
        ci = new RegExp("^([+-])=(" + Tt + ")", "i"),
        ui = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        di = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        hi = ["Webkit", "O", "Moz", "ms"];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = ti(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": it.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, t, i, n) {
            if (e && e.nodeType !== 3 && e.nodeType !== 8 && e.style) {
                var r, o, a, s = rt.camelCase(t),
                    l = e.style;
                if (t = rt.cssProps[s] || (rt.cssProps[s] = A(l, s)), a = rt.cssHooks[t] || rt.cssHooks[s], void 0 === i) return a && "get" in a && (r = a.get(e, !1, n)) !== void 0 ? r : l[t];
                if (o = typeof i, "string" === o && (r = ci.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(rt.css(e, t)), o = "number"), null != i && i === i && ("number" !== o || rt.cssNumber[s] || (i += "px"), it.clearCloneStyle || "" !== i || t.indexOf("background") !== 0 || (l[t] = "inherit"), !(a && "set" in a && (i = a.set(e, i, n)) === void 0))) try {
                    l[t] = i
                } catch (c) {}
            }
        },
        css: function (e, t, i, n) {
            var r, o, a, s = rt.camelCase(t);
            return t = rt.cssProps[s] || (rt.cssProps[s] = A(e.style, s)), a = rt.cssHooks[t] || rt.cssHooks[s], a && "get" in a && (o = a.get(e, !0, i)), void 0 === o && (o = ti(e, t, n)), "normal" === o && t in di && (o = di[t]), "" === i || i ? (r = parseFloat(o), i === !0 || rt.isNumeric(r) ? r || 0 : o) : o
        }
    }), rt.each(["height", "width"], function (e, t) {
        rt.cssHooks[t] = {
            get: function (e, i, n) {
                return i ? si.test(rt.css(e, "display")) && e.offsetWidth === 0 ? rt.swap(e, ui, function () {
                    return I(e, t, n)
                }) : I(e, t, n) : void 0
            },
            set: function (e, i, n) {
                var r = n && ei(e);
                return E(e, i, n ? D(e, t, n, it.boxSizing && rt.css(e, "boxSizing", !1, r) === "border-box", r) : 0)
            }
        }
    }), it.opacity || (rt.cssHooks.opacity = {
        get: function (e, t) {
            return ai.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var i = e.style,
                n = e.currentStyle,
                r = rt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, (t >= 1 || "" === t) && rt.trim(o.replace(oi, "")) === "" && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, r) : o + " " + r)
        }
    }), rt.cssHooks.marginRight = T(it.reliableMarginRight, function (e, t) {
        return t ? rt.swap(e, {
            display: "inline-block"
        }, ti, [e, "marginRight"]) : void 0
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        rt.cssHooks[e + t] = {
            expand: function (i) {
                for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[e + At[n] + t] = o[n] || o[n - 2] || o[0];
                return r
            }
        }, ii.test(e) || (rt.cssHooks[e + t].set = E)
    }), rt.fn.extend({
        css: function (e, t) {
            return Et(this, function (e, t, i) {
                var n, r, o = {},
                    a = 0;
                if (rt.isArray(t)) {
                    for (n = ei(e), r = t.length; r > a; a++) o[t[a]] = rt.css(e, t[a], !1, n);
                    return o
                }
                return void 0 !== i ? rt.style(e, t, i) : rt.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function () {
            return P(this, !0)
        },
        hide: function () {
            return P(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Pt(this) ? rt(this).show() : rt(this).hide()
            })
        }
    }), rt.Tween = M, M.prototype = {
        constructor: M,
        init: function (e, t, i, n, r, o) {
            this.elem = e, this.prop = i, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = o || (rt.cssNumber[i] ? "" : "px")
        },
        cur: function () {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function (e) {
            var t, i = M.propHooks[this.prop];
            return this.pos = t = this.options.duration ? rt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || e.elem.style && e.elem.style[e.prop] != null ? (t = rt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                rt.fx.step[e.prop] ? rt.fx.step[e.prop](e) : e.elem.style && (e.elem.style[rt.cssProps[e.prop]] != null || rt.cssHooks[e.prop]) ? rt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, rt.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, rt.fx = M.prototype.init, rt.fx.step = {};
    var pi, fi, mi = /^(?:toggle|show|hide)$/,
        gi = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
        vi = /queueHooks$/,
        yi = [z],
        bi = {
            "*": [function (e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    r = gi.exec(t),
                    o = r && r[3] || (rt.cssNumber[e] ? "" : "px"),
                    a = (rt.cssNumber[e] || "px" !== o && +n) && gi.exec(rt.css(i.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], r = r || [], a = +n || 1;
                    do s = s || ".5", a /= s, rt.style(i.elem, e, a + o); while (s !== (s = i.cur() / n) && 1 !== s && --l)
                }
                return r && (a = i.start = +a || +n || 0, i.unit = o, i.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    rt.Animation = rt.extend(R, {
            tweener: function (e, t) {
                rt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var i, n = 0, r = e.length; r > n; n++) i = e[n], bi[i] = bi[i] || [], bi[i].unshift(t)
            },
            prefilter: function (e, t) {
                t ? yi.unshift(e) : yi.push(e)
            }
        }), rt.speed = function (e, t, i) {
            var n = e && "object" == typeof e ? rt.extend({}, e) : {
                complete: i || !i && t || rt.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !rt.isFunction(t) && t
            };
            return n.duration = rt.fx.off ? 0 : typeof n.duration == "number" ? n.duration : n.duration in rt.fx.speeds ? rt.fx.speeds[n.duration] : rt.fx.speeds._default, (n.queue == null || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                rt.isFunction(n.old) && n.old.call(this), n.queue && rt.dequeue(this, n.queue)
            }, n
        }, rt.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(Pt).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function (e, t, i, n) {
                var r = rt.isEmptyObject(e),
                    o = rt.speed(t, i, n),
                    a = function () {
                        var t = R(this, rt.extend({}, e), o);
                        (r || rt._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, i) {
                var n = function (e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = rt.timers,
                        a = rt._data(this);
                    if (r) a[r] && a[r].stop && n(a[r]);
                    else
                        for (r in a) a[r] && a[r].stop && vi.test(r) && n(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(i), t = !1, o.splice(r, 1));
                    (t || !i) && rt.dequeue(this, e)
                })
            },
            finish: function (e) {
                return e !== !1 && (e = e || "fx"), this.each(function () {
                    var t, i = rt._data(this),
                        n = i[e + "queue"],
                        r = i[e + "queueHooks"],
                        o = rt.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, rt.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; a > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                    delete i.finish
                })
            }
        }), rt.each(["toggle", "show", "hide"], function (e, t) {
            var i = rt.fn[t];
            rt.fn[t] = function (e, n, r) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(O(t, !0), e, n, r)
            }
        }), rt.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            rt.fn[e] = function (e, i, n) {
                return this.animate(t, e, i, n)
            }
        }), rt.timers = [], rt.fx.tick = function () {
            var e, t = rt.timers,
                i = 0;
            for (pi = rt.now(); i < t.length; i++) e = t[i], e() || t[i] !== e || t.splice(i--, 1);
            t.length || rt.fx.stop(), pi = void 0
        }, rt.fx.timer = function (e) {
            rt.timers.push(e), e() ? rt.fx.start() : rt.timers.pop()
        }, rt.fx.interval = 13, rt.fx.start = function () {
            fi || (fi = setInterval(rt.fx.tick, rt.fx.interval))
        }, rt.fx.stop = function () {
            clearInterval(fi), fi = null
        }, rt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, rt.fn.delay = function (e, t) {
            return e = rt.fx ? rt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var n = setTimeout(t, e);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        function () {
            var e, t, i, n, r;
            t = ft.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = t.getElementsByTagName("a")[0], i = ft.createElement("select"), r = i.appendChild(ft.createElement("option")), e = t.getElementsByTagName("input")[0], n.style.cssText = "top:1px", it.getSetAttribute = t.className !== "t", it.style = /top/.test(n.getAttribute("style")), it.hrefNormalized = n.getAttribute("href") === "/a", it.checkOn = !!e.value, it.optSelected = r.selected, it.enctype = !!ft.createElement("form").enctype, i.disabled = !0, it.optDisabled = !r.disabled, e = ft.createElement("input"), e.setAttribute("value", ""), it.input = e.getAttribute("value") === "", e.value = "t", e.setAttribute("type", "radio"), it.radioValue = e.value === "t"
        }();
    var xi = /\r/g;
    rt.fn.extend({
        val: function (e) {
            var t, i, n, r = this[0]; {
                if (arguments.length) return n = rt.isFunction(e), this.each(function (i) {
                    var r;
                    this.nodeType === 1 && (r = n ? e.call(this, i, rt(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : rt.isArray(r) && (r = rt.map(r, function (e) {
                        return null == e ? "" : e + ""
                    })), t = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, r, "value") !== void 0 || (this.value = r))
                });
                if (r) return t = rt.valHooks[r.type] || rt.valHooks[r.nodeName.toLowerCase()], t && "get" in t && (i = t.get(r, "value")) !== void 0 ? i : (i = r.value, "string" == typeof i ? i.replace(xi, "") : null == i ? "" : i)
            }
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = rt.find.attr(e, "value");
                    return null != t ? t : rt.trim(rt.text(e))
                }
            },
            select: {
                get: function (e) {
                    for (var t, i, n = e.options, r = e.selectedIndex, o = e.type === "select-one" || 0 > r, a = o ? null : [], s = o ? r + 1 : n.length, l = 0 > r ? s : o ? r : 0; s > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (it.optDisabled ? i.disabled : i.getAttribute("disabled") !== null) || i.parentNode.disabled && rt.nodeName(i.parentNode, "optgroup"))) {
                            if (t = rt(i).val(), o) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var i, n, r = e.options, o = rt.makeArray(t), a = r.length; a--;)
                        if (n = r[a], rt.inArray(rt.valHooks.option.get(n), o) >= 0) try {
                            n.selected = i = !0
                        } catch (s) {
                            n.scrollHeight
                        } else n.selected = !1;
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), rt.each(["radio", "checkbox"], function () {
        rt.valHooks[this] = {
            set: function (e, t) {
                return rt.isArray(t) ? e.checked = rt.inArray(rt(e).val(), t) >= 0 : void 0
            }
        }, it.checkOn || (rt.valHooks[this].get = function (e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var _i, ki, wi = rt.expr.attrHandle,
        Ci = /^(?:checked|selected)$/i,
        Si = it.getSetAttribute,
        Ti = it.input;
    rt.fn.extend({
        attr: function (e, t) {
            return Et(this, rt.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                rt.removeAttr(this, e)
            })
        }
    }), rt.extend({
        attr: function (e, t, i) {
            var n, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === wt ? rt.prop(e, t, i) : (1 === o && rt.isXMLDoc(e) || (t = t.toLowerCase(), n = rt.attrHooks[t] || (rt.expr.match.bool.test(t) ? ki : _i)), void 0 === i ? n && "get" in n && (r = n.get(e, t)) !== null ? r : (r = rt.find.attr(e, t), null == r ? void 0 : r) : null !== i ? n && "set" in n && (r = n.set(e, i, t)) !== void 0 ? r : (e.setAttribute(t, i + ""), i) : (rt.removeAttr(e, t), void 0))
        },
        removeAttr: function (e, t) {
            var i, n, r = 0,
                o = t && t.match(bt);
            if (o && e.nodeType === 1)
                for (; i = o[r++];) n = rt.propFix[i] || i, rt.expr.match.bool.test(i) ? Ti && Si || !Ci.test(i) ? e[n] = !1 : e[rt.camelCase("default-" + i)] = e[n] = !1 : rt.attr(e, i, ""), e.removeAttribute(Si ? i : n)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!it.radioValue && "radio" === t && rt.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), ki = {
        set: function (e, t, i) {
            return t === !1 ? rt.removeAttr(e, i) : Ti && Si || !Ci.test(i) ? e.setAttribute(!Si && rt.propFix[i] || i, i) : e[rt.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var i = wi[t] || rt.find.attr;
        wi[t] = Ti && Si || !Ci.test(t) ? function (e, t, n) {
            var r, o;
            return n || (o = wi[t], wi[t] = r, r = i(e, t, n) != null ? t.toLowerCase() : null, wi[t] = o), r
        } : function (e, t, i) {
            return i ? void 0 : e[rt.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ti && Si || (rt.attrHooks.value = {
        set: function (e, t, i) {
            return rt.nodeName(e, "input") ? (e.defaultValue = t, void 0) : _i && _i.set(e, t, i)
        }
    }), Si || (_i = {
        set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
        }
    }, wi.id = wi.name = wi.coords = function (e, t, i) {
        var n;
        return i ? void 0 : (n = e.getAttributeNode(t)) && n.value !== "" ? n.value : null
    }, rt.valHooks.button = {
        get: function (e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : void 0
        },
        set: _i.set
    }, rt.attrHooks.contenteditable = {
        set: function (e, t, i) {
            _i.set(e, "" === t ? !1 : t, i)
        }
    }, rt.each(["width", "height"], function (e, t) {
        rt.attrHooks[t] = {
            set: function (e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        }
    })), it.style || (rt.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Ai = /^(?:input|select|textarea|button|object)$/i,
        Pi = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function (e, t) {
            return Et(this, rt.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = rt.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), rt.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, t, i) {
            var n, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !rt.isXMLDoc(e), o && (t = rt.propFix[t] || t, r = rt.propHooks[t]), void 0 !== i ? r && "set" in r && (n = r.set(e, i, t)) !== void 0 ? n : e[t] = i : r && "get" in r && (n = r.get(e, t)) !== null ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = rt.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ai.test(e.nodeName) || Pi.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), it.hrefNormalized || rt.each(["href", "src"], function (e, t) {
        rt.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), it.optSelected || (rt.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), rt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        rt.propFix[this.toLowerCase()] = this
    }), it.enctype || (rt.propFix.enctype = "encoding");
    var Ei = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function (e) {
            var t, i, n, r, o, a, s = 0,
                l = this.length,
                c = "string" == typeof e && e;
            if (rt.isFunction(e)) return this.each(function (t) {
                rt(this).addClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (i = this[s], n = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(Ei, " ") : " ")) {
                        for (o = 0; r = t[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        a = rt.trim(n), i.className !== a && (i.className = a)
                    } return this
        },
        removeClass: function (e) {
            var t, i, n, r, o, a, s = 0,
                l = this.length,
                c = arguments.length === 0 || "string" == typeof e && e;
            if (rt.isFunction(e)) return this.each(function (t) {
                rt(this).removeClass(e.call(this, t, this.className))
            });
            if (c)
                for (t = (e || "").match(bt) || []; l > s; s++)
                    if (i = this[s], n = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(Ei, " ") : "")) {
                        for (o = 0; r = t[o++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        a = e ? rt.trim(n) : "", i.className !== a && (i.className = a)
                    } return this
        },
        toggleClass: function (e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : rt.isFunction(e) ? this.each(function (i) {
                rt(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function () {
                if ("string" === i)
                    for (var t, n = 0, r = rt(this), o = e.match(bt) || []; t = o[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(i === wt || "boolean" === i) && (this.className && rt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : rt._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(Ei, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        rt.fn[t] = function (e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), rt.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function (e, t, i) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var Di = rt.now(),
        Ii = /\?/,
        Mi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var i, n = null,
            r = rt.trim(t + "");
        return r && !rt.trim(r.replace(Mi, function (e, t, r, o) {
            return i && t && (n = 0), 0 === n ? e : (i = r || t, n += !o - !r, "")
        })) ? Function("return " + r)() : rt.error("Invalid JSON: " + t)
    }, rt.parseXML = function (t) {
        var i, n;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (n = new DOMParser, i = n.parseFromString(t, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(t))
        } catch (r) {
            i = void 0
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + t), i
    };
    var Ni, Oi, Fi = /#.*$/,
        zi = /([?&])_=[^&]*/,
        Li = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ri = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ji = /^(?:GET|HEAD)$/,
        Hi = /^\/\//,
        Bi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Wi = {},
        $i = {},
        qi = "*/".concat("*");
    try {
        Oi = location.href
    } catch (Ui) {
        Oi = ft.createElement("a"), Oi.href = "", Oi = Oi.href
    }
    Ni = Bi.exec(Oi.toLowerCase()) || [], rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Oi,
            type: "GET",
            isLocal: Ri.test(Ni[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": qi,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? B(B(e, rt.ajaxSettings), t) : B(rt.ajaxSettings, e)
        },
        ajaxPrefilter: j(Wi),
        ajaxTransport: j($i),
        ajax: function (e, t) {
            function i(e, t, i, n) {
                var r, u, v, y, x, k = t;
                2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = n || "", _.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, i && (y = W(d, _, i)), y = $(d, y, _, r), r ? (d.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (rt.lastModified[o] = x), x = _.getResponseHeader("etag"), x && (rt.etag[o] = x)), 204 === e || d.type === "HEAD" ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = y.state, u = y.data, v = y.error, r = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || k) + "", r ? f.resolveWith(h, [u, k, _]) : f.rejectWith(h, [_, k, v]), _.statusCode(g), g = void 0, l && p.trigger(r ? "ajaxSuccess" : "ajaxError", [_, d, r ? u : v]), m.fireWith(h, [_, k]), l && (p.trigger("ajaxComplete", [_, d]), --rt.active || rt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, o, a, s, l, c, u, d = rt.ajaxSetup({}, t),
                h = d.context || d,
                p = d.context && (h.nodeType || h.jquery) ? rt(h) : rt.event,
                f = rt.Deferred(),
                m = rt.Callbacks("once memory"),
                g = d.statusCode || {},
                v = {},
                y = {},
                b = 0,
                x = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!u)
                                for (u = {}; t = Li.exec(a);) u[t[1].toLowerCase()] = t[2];
                            t = u[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var i = e.toLowerCase();
                        return b || (e = y[i] = y[i] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) g[t] = [g[t], e[t]];
                            else _.always(e[_.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || x;
                        return c && c.abort(t), i(0, t), this
                    }
                };
            if (f.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || Oi) + "").replace(Fi, "").replace(Hi, Ni[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = rt.trim(d.dataType || "*").toLowerCase().match(bt) || [""], d.crossDomain == null && (n = Bi.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === Ni[1] && n[2] === Ni[2] && (n[3] || (n[1] === "http:" ? "80" : "443")) === (Ni[3] || (Ni[1] === "http:" ? "80" : "443")))), d.data && d.processData && typeof d.data != "string" && (d.data = rt.param(d.data, d.traditional)), H(Wi, d, t, _), 2 === b) return _;
            l = d.global, l && rt.active++ === 0 && rt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ji.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (Ii.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = zi.test(o) ? o.replace(zi, "$1_=" + Di++) : o + (Ii.test(o) ? "&" : "?") + "_=" + Di++)), d.ifModified && (rt.lastModified[o] && _.setRequestHeader("If-Modified-Since", rt.lastModified[o]), rt.etag[o] && _.setRequestHeader("If-None-Match", rt.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + qi + "; q=0.01" : "") : d.accepts["*"]);
            for (r in d.headers) _.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (d.beforeSend.call(h, _, d) === !1 || 2 === b)) return _.abort();
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[r](d[r]);
            if (c = H($i, d, t, _)) {
                _.readyState = 1, l && p.trigger("ajaxSend", [_, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(v, i)
                } catch (k) {
                    if (!(2 > b)) throw k;
                    i(-1, k)
                }
            } else i(-1, "No Transport");
            return _
        },
        getJSON: function (e, t, i) {
            return rt.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return rt.get(e, void 0, t, "script")
        }
    }), rt.each(["get", "post"], function (e, t) {
        rt[t] = function (e, i, n, r) {
            return rt.isFunction(i) && (r = r || n, n = i, i = void 0), rt.ajax({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), rt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        rt.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), rt._evalUrl = function (e) {
        return rt.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, rt.fn.extend({
        wrapAll: function (e) {
            if (rt.isFunction(e)) return this.each(function (t) {
                rt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = rt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && e.firstChild.nodeType === 1;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return rt.isFunction(e) ? this.each(function (t) {
                rt(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = rt(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = rt.isFunction(e);
            return this.each(function (i) {
                rt(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes)
            }).end()
        }
    }), rt.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !it.reliableHiddenOffsets() && (e.style && e.style.display || rt.css(e, "display")) === "none"
    }, rt.expr.filters.visible = function (e) {
        return !rt.expr.filters.hidden(e)
    };
    var Gi = /%20/g,
        Yi = /\[\]$/,
        Xi = /\r?\n/g,
        Vi = /^(?:submit|button|image|reset|file)$/i,
        Ki = /^(?:input|select|textarea|keygen)/i;
    rt.param = function (e, t) {
        var i, n = [],
            r = function (e, t) {
                t = rt.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(e) || e.jquery && !rt.isPlainObject(e)) rt.each(e, function () {
            r(this.name, this.value)
        });
        else
            for (i in e) q(i, e[i], t, r);
        return n.join("&").replace(Gi, "+")
    }, rt.fn.extend({
        serialize: function () {
            return rt.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = rt.prop(this, "elements");
                return e ? rt.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !rt(this).is(":disabled") && Ki.test(this.nodeName) && !Vi.test(e) && (this.checked || !Dt.test(e))
            }).map(function (e, t) {
                var i = rt(this).val();
                return null == i ? null : rt.isArray(i) ? rt.map(i, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Xi, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Xi, "\r\n")
                }
            }).get()
        }
    }), rt.ajaxSettings.xhr = e.ActiveXObject !== void 0 ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || G()
    } : U;
    var Qi = 0,
        Ji = {},
        Zi = rt.ajaxSettings.xhr();
    e.ActiveXObject && rt(e).on("unload", function () {
        for (var e in Ji) Ji[e](void 0, !0)
    }), it.cors = !!Zi && "withCredentials" in Zi, Zi = it.ajax = !!Zi, Zi && rt.ajaxTransport(function (e) {
        if (!e.crossDomain || it.cors) {
            var t;
            return {
                send: function (i, n) {
                    var r, o = e.xhr(),
                        a = ++Qi;
                    if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i) i[r] !== void 0 && o.setRequestHeader(r, i[r] + "");
                    o.send(e.hasContent && e.data || null), t = function (i, r) {
                        var s, l, c;
                        if (t && (r || o.readyState === 4))
                            if (delete Ji[a], t = void 0, o.onreadystatechange = rt.noop, r) o.readyState !== 4 && o.abort();
                            else {
                                c = {}, s = o.status, typeof o.responseText == "string" && (c.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (u) {
                                    l = ""
                                }
                                s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            } c && n(s, l, c, o.getAllResponseHeaders())
                    }, e.async ? o.readyState === 4 ? setTimeout(t) : o.onreadystatechange = Ji[a] = t : t()
                },
                abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    }), rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return rt.globalEval(e), e
            }
        }
    }), rt.ajaxPrefilter("script", function (e) {
        e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), rt.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, i = ft.head || rt("head")[0] || ft.documentElement;
            return {
                send: function (n, r) {
                    t = ft.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, i || r(200, "success"))
                    }, i.insertBefore(t, i.firstChild)
                },
                abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = en.pop() || rt.expando + "_" + Di++;
            return this[e] = !0, e
        }
    }), rt.ajaxPrefilter("json jsonp", function (t, i, n) {
        var r, o, a, s = t.jsonp !== !1 && (tn.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || t.dataTypes[0] === "jsonp" ? (r = t.jsonpCallback = rt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Ii.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
            return a || rt.error(r + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function () {
            a = arguments
        }, n.always(function () {
            e[r] = o, t[r] && (t.jsonpCallback = i.jsonpCallback, en.push(r)), a && rt.isFunction(o) && o(a[0]), a = o = void 0
        }), "script") : void 0
    }), rt.parseHTML = function (e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || ft;
        var n = dt.exec(e),
            r = !i && [];
        return n ? [t.createElement(n[1])] : (n = rt.buildFragment([e], t, r), r && r.length && rt(r).remove(), rt.merge([], n.childNodes))
    };
    var nn = rt.fn.load;
    rt.fn.load = function (e, t, i) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var n, r, o, a = this,
            s = e.indexOf(" ");
        return s >= 0 && (n = rt.trim(e.slice(s, e.length)), e = e.slice(0, s)), rt.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && rt.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, a.html(n ? rt("<div>").append(rt.parseHTML(e)).find(n) : e)
        }).complete(i && function (e, t) {
            a.each(i, r || [e.responseText, t, e])
        }), this
    }, rt.expr.filters.animated = function (e) {
        return rt.grep(rt.timers, function (t) {
            return e === t.elem
        }).length
    };
    var rn = e.document.documentElement;
    rt.offset = {
        setOffset: function (e, t, i) {
            var n, r, o, a, s, l, c, u = rt.css(e, "position"),
                d = rt(e),
                h = {};
            "static" === u && (e.style.position = "relative"), s = d.offset(), o = rt.css(e, "top"), l = rt.css(e, "left"), c = ("absolute" === u || "fixed" === u) && rt.inArray("auto", [o, l]) > -1, c ? (n = d.position(), a = n.top, r = n.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), rt.isFunction(t) && (t = t.call(e, i, s)), t.top != null && (h.top = t.top - s.top + a), t.left != null && (h.left = t.left - s.left + r), "using" in t ? t.using.call(e, h) : d.css(h)
        }
    }, rt.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                rt.offset.setOffset(this, e, t)
            });
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, rt.contains(t, r) ? (typeof r.getBoundingClientRect !== wt && (n = r.getBoundingClientRect()), i = Y(o), {
                top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : n
        },
        position: function () {
            if (this[0]) {
                var e, t, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return rt.css(n, "position") === "fixed" ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), rt.nodeName(e[0], "html") || (i = e.offset()), i.top += rt.css(e[0], "borderTopWidth", !0), i.left += rt.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - rt.css(n, "marginTop", !0),
                    left: t.left - i.left - rt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || rn; e && !rt.nodeName(e, "html") && rt.css(e, "position") === "static";) e = e.offsetParent;
                return e || rn
            })
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var i = /Y/.test(t);
        rt.fn[e] = function (n) {
            return Et(this, function (e, n, r) {
                var o = Y(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[n] : e[n] : (o ? o.scrollTo(i ? rt(o).scrollLeft() : r, i ? r : rt(o).scrollTop()) : e[n] = r, void 0)
            }, e, n, arguments.length, null)
        }
    }), rt.each(["top", "left"], function (e, t) {
        rt.cssHooks[t] = T(it.pixelPosition, function (e, i) {
            return i ? (i = ti(e, t), ni.test(i) ? rt(e).position()[t] + "px" : i) : void 0
        })
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        rt.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (i, n) {
            rt.fn[n] = function (n, r) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    a = i || (n === !0 || r === !0 ? "margin" : "border");
                return Et(this, function (t, i, n) {
                    var r;
                    return rt.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? rt.css(t, i, a) : rt.style(t, i, n, a)
                }, t, o ? n : void 0, o, null)
            }
        })
    }), rt.fn.size = function () {
        return this.length
    }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return rt
    });
    var on = e.jQuery,
        an = e.$;
    return rt.noConflict = function (t) {
        return e.$ === rt && (e.$ = an), t && e.jQuery === rt && (e.jQuery = on), rt
    }, typeof t === wt && (e.jQuery = e.$ = rt), rt
}),
function (e, t, i) {
    function n(i, n) {
        this.wrapper = "string" == typeof i ? t.querySelector(i) : i, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            disablePointer: !o.hasPointer,
            disableTouch: o.hasPointer || !o.hasTouch,
            disableMouse: o.hasPointer || o.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: typeof e.onmousedown == "undefined"
        };
        for (var r in n) this.options[r] = n[r];
        this.translateZ = this.options.HWCompositing && o.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = o.hasTransition && this.options.useTransition, this.options.useTransform = o.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = this.options.eventPassthrough == "vertical" ? !1 : this.options.scrollY, this.options.scrollX = this.options.eventPassthrough == "horizontal" ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? o.ease[this.options.bounceEasing] || o.ease.circular : this.options.bounceEasing, this.options.resizePolling = this.options.resizePolling === void 0 ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }
    var r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (t) {
            e.setTimeout(t, 1e3 / 60)
        },
        o = function () {
            function n(e) {
                return a === !1 ? !1 : "" === a ? e : a + e.charAt(0).toUpperCase() + e.substr(1)
            }
            var r = {},
                o = t.createElement("div").style,
                a = function () {
                    for (var e, t = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, n = t.length; n > i; i++)
                        if (e = t[i] + "ransform", e in o) return t[i].substr(0, t[i].length - 1);
                    return !1
                }();
            r.getTime = Date.now || function () {
                return (new Date).getTime()
            }, r.extend = function (e, t) {
                for (var i in t) e[i] = t[i]
            }, r.addEvent = function (e, t, i, n) {
                e.addEventListener(t, i, !!n)
            }, r.removeEvent = function (e, t, i, n) {
                e.removeEventListener(t, i, !!n)
            }, r.prefixPointerEvent = function (t) {
                return e.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
            }, r.momentum = function (e, t, n, r, o, a) {
                var s, l, c = e - t,
                    u = i.abs(c) / n;
                return a = void 0 === a ? 6e-4 : a, s = e + u * u / (2 * a) * (0 > c ? -1 : 1), l = u / a, r > s ? (s = o ? r - o / 2.5 * (u / 8) : r, c = i.abs(s - e), l = c / u) : s > 0 && (s = o ? o / 2.5 * (u / 8) : 0, c = i.abs(e) + s, l = c / u), {
                    destination: i.round(s),
                    duration: l
                }
            };
            var s = n("transform");
            return r.extend(r, {
                hasTransform: s !== !1,
                hasPerspective: n("perspective") in o,
                hasTouch: "ontouchstart" in e,
                hasPointer: !(!e.PointerEvent && !e.MSPointerEvent),
                hasTransition: n("transition") in o
            }), r.isBadAndroid = function () {
                var t = e.navigator.appVersion;
                if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
                    var i = t.match(/Safari\/(\d+.\d)/);
                    return i && "object" == typeof i && i.length >= 2 ? parseFloat(i[1]) < 535.19 : !0
                }
                return !1
            }(), r.extend(r.style = {}, {
                transform: s,
                transitionTimingFunction: n("transitionTimingFunction"),
                transitionDuration: n("transitionDuration"),
                transitionDelay: n("transitionDelay"),
                transformOrigin: n("transformOrigin"),
                touchAction: n("touchAction")
            }), r.hasClass = function (e, t) {
                var i = new RegExp("(^|\\s)" + t + "(\\s|$)");
                return i.test(e.className)
            }, r.addClass = function (e, t) {
                if (!r.hasClass(e, t)) {
                    var i = e.className.split(" ");
                    i.push(t), e.className = i.join(" ")
                }
            }, r.removeClass = function (e, t) {
                if (r.hasClass(e, t)) {
                    var i = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
                    e.className = e.className.replace(i, " ")
                }
            }, r.offset = function (e) {
                for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, i -= e.offsetTop;
                return {
                    left: t,
                    top: i
                }
            }, r.preventDefaultException = function (e, t) {
                for (var i in t)
                    if (t[i].test(e[i])) return !0;
                return !1
            }, r.extend(r.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), r.extend(r.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function (e) {
                        return e * (2 - e)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function (e) {
                        return i.sqrt(1 - --e * e)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function (e) {
                        var t = 4;
                        return (e -= 1) * e * ((t + 1) * e + t) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function (e) {
                        return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function (e) {
                        var t = .22,
                            n = .4;
                        return 0 === e ? 0 : 1 == e ? 1 : n * i.pow(2, -10 * e) * i.sin((e - t / 4) * 2 * i.PI / t) + 1
                    }
                }
            }), r.tap = function (e, i) {
                var n = t.createEvent("Event");
                n.initEvent(i, !0, !0), n.pageX = e.pageX, n.pageY = e.pageY, e.target.dispatchEvent(n)
            }, r.click = function (i) {
                var n, r = i.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(r.tagName) || (n = t.createEvent(e.MouseEvent ? "MouseEvents" : "Event"), n.initEvent("click", !0, !0), n.view = i.view || e, n.detail = 1, n.screenX = r.screenX || 0, n.screenY = r.screenY || 0, n.clientX = r.clientX || 0, n.clientY = r.clientY || 0, n.ctrlKey = !!i.ctrlKey, n.altKey = !!i.altKey, n.shiftKey = !!i.shiftKey, n.metaKey = !!i.metaKey, n.button = 0, n.relatedTarget = null, n._constructed = !0, r.dispatchEvent(n))
            }, r.getTouchAction = function (e, t) {
                var i = "none";
                return "vertical" === e ? i = "pan-y" : "horizontal" === e && (i = "pan-x"), t && "none" != i && (i += " pinch-zoom"), i
            }, r.getRect = function (e) {
                if (e instanceof SVGElement) {
                    var t = e.getBoundingClientRect();
                    return {
                        top: t.top,
                        left: t.left,
                        width: t.width,
                        height: t.height
                    }
                }
                return {
                    top: e.offsetTop,
                    left: e.offsetLeft,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }, r
        }();
    n.prototype = {
        version: "5.2.0-snapshot",
        _init: function () {
            this._initEvents()
        },
        destroy: function () {
            this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
        },
        _transitionEnd: function (e) {
            e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function (e) {
            if (o.eventType[e.type] != 1) {
                var t;
                if (t = e.which ? e.button : e.button < 2 ? 0 : e.button == 4 ? 1 : 2, 0 !== t) return
            }
            if (this.enabled && (!this.initiated || o.eventType[e.type] === this.initiated)) {
                !this.options.preventDefault || o.isBadAndroid || o.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                var n, r = e.touches ? e.touches[0] : e;
                this.initiated = o.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = o.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, n = this.getComputedPosition(), this._translate(i.round(n.x), i.round(n.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = r.pageX, this.pointY = r.pageY, this._execEvent("beforeScrollStart")
            }
        },
        _move: function (e) {
            if (this.enabled && o.eventType[e.type] === this.initiated) {
                this.options.preventDefault && e.preventDefault();
                var t, n, r, a, s = e.touches ? e.touches[0] : e,
                    l = s.pageX - this.pointX,
                    c = s.pageY - this.pointY,
                    u = o.getTime();
                if (this.pointX = s.pageX, this.pointY = s.pageY, this.distX += l, this.distY += c, r = i.abs(this.distX), a = i.abs(this.distY), !(u - this.endTime > 300 && 10 > r && 10 > a)) {
                    if (this.directionLocked || this.options.freeScroll || (this.directionLocked = r > a + this.options.directionLockThreshold ? "h" : a >= r + this.options.directionLockThreshold ? "v" : "n"), this.directionLocked == "h") {
                        if (this.options.eventPassthrough == "vertical") e.preventDefault();
                        else if (this.options.eventPassthrough == "horizontal") return this.initiated = !1, void 0;
                        c = 0
                    } else if (this.directionLocked == "v") {
                        if (this.options.eventPassthrough == "horizontal") e.preventDefault();
                        else if (this.options.eventPassthrough == "vertical") return this.initiated = !1, void 0;
                        l = 0
                    }
                    l = this.hasHorizontalScroll ? l : 0, c = this.hasVerticalScroll ? c : 0, t = this.x + l, n = this.y + c, (t > 0 || t < this.maxScrollX) && (t = this.options.bounce ? this.x + l / 3 : t > 0 ? 0 : this.maxScrollX), (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + c / 3 : n > 0 ? 0 : this.maxScrollY), this.directionX = l > 0 ? -1 : 0 > l ? 1 : 0, this.directionY = c > 0 ? -1 : 0 > c ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(t, n), u - this.startTime > 300 && (this.startTime = u, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function (e) {
            if (this.enabled && o.eventType[e.type] === this.initiated) {
                this.options.preventDefault && !o.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
                var t, n, r = (e.changedTouches ? e.changedTouches[0] : e, o.getTime() - this.startTime),
                    a = i.round(this.x),
                    s = i.round(this.y),
                    l = i.abs(a - this.startX),
                    c = i.abs(s - this.startY),
                    u = 0,
                    d = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = o.getTime(), !this.resetPosition(this.options.bounceTime)) return this.scrollTo(a, s), this.moved ? this._events.flick && 200 > r && 100 > l && 100 > c ? (this._execEvent("flick"), void 0) : (this.options.momentum && 300 > r && (t = this.hasHorizontalScroll ? o.momentum(this.x, this.startX, r, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                    destination: a,
                    duration: 0
                }, n = this.hasVerticalScroll ? o.momentum(this.y, this.startY, r, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                    destination: s,
                    duration: 0
                }, a = t.destination, s = n.destination, u = i.max(t.duration, n.duration), this.isInTransition = 1), a != this.x || s != this.y ? ((a > 0 || a < this.maxScrollX || s > 0 || s < this.maxScrollY) && (d = o.ease.quadratic), this.scrollTo(a, s, u, d), void 0) : (this._execEvent("scrollEnd"), void 0)) : (this.options.tap && o.tap(e, this.options.tap), this.options.click && o.click(e), this._execEvent("scrollCancel"), void 0)
            }
        },
        _resize: function () {
            var e = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
                e.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function (e) {
            var t = this.x,
                i = this.y;
            return e = e || 0, !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), t == this.x && i == this.y ? !1 : (this.scrollTo(t, i, e, this.options.bounceEasing), !0)
        },
        disable: function () {
            this.enabled = !1
        },
        enable: function () {
            this.enabled = !0
        },
        refresh: function () {
            o.getRect(this.wrapper), this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight;
            var e = o.getRect(this.scroller);
            this.scrollerWidth = e.width, this.scrollerHeight = e.height, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, o.hasPointer && !this.options.disablePointer && (this.wrapper.style[o.style.touchAction] = o.getTouchAction(this.options.eventPassthrough, !0), this.wrapper.style[o.style.touchAction] || (this.wrapper.style[o.style.touchAction] = o.getTouchAction(this.options.eventPassthrough, !1))), this.wrapperOffset = o.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function (e, t) {
            this._events[e] || (this._events[e] = []), this._events[e].push(t)
        },
        off: function (e, t) {
            if (this._events[e]) {
                var i = this._events[e].indexOf(t);
                i > -1 && this._events[e].splice(i, 1)
            }
        },
        _execEvent: function (e) {
            if (this._events[e]) {
                var t = 0,
                    i = this._events[e].length;
                if (i)
                    for (; i > t; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function (e, t, i, n) {
            e = this.x + e, t = this.y + t, i = i || 0, this.scrollTo(e, t, i, n)
        },
        scrollTo: function (e, t, i, n) {
            n = n || o.ease.circular, this.isInTransition = this.options.useTransition && i > 0;
            var r = this.options.useTransition && n.style;
            !i || r ? (r && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(e, t)) : this._animate(e, t, i, n.fn)
        },
        scrollToElement: function (e, t, n, r, a) {
            if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                var s = o.offset(e);
                s.left -= this.wrapperOffset.left, s.top -= this.wrapperOffset.top;
                var l = o.getRect(e),
                    c = o.getRect(this.wrapper);
                n === !0 && (n = i.round(l.width / 2 - c.width / 2)), r === !0 && (r = i.round(l.height / 2 - c.height / 2)), s.left -= n || 0, s.top -= r || 0, s.left = s.left > 0 ? 0 : s.left < this.maxScrollX ? this.maxScrollX : s.left, s.top = s.top > 0 ? 0 : s.top < this.maxScrollY ? this.maxScrollY : s.top, t = void 0 === t || null === t || "auto" === t ? i.max(i.abs(this.x - s.left), i.abs(this.y - s.top)) : t, this.scrollTo(s.left, s.top, t, a)
            }
        },
        _transitionTime: function (e) {
            if (this.options.useTransition) {
                e = e || 0;
                var t = o.style.transitionDuration;
                if (t && (this.scrollerStyle[t] = e + "ms", !e && o.isBadAndroid)) {
                    this.scrollerStyle[t] = "0.0001ms";
                    var i = this;
                    r(function () {
                        i.scrollerStyle[t] === "0.0001ms" && (i.scrollerStyle[t] = "0s")
                    })
                }
            }
        },
        _transitionTimingFunction: function (e) {
            this.scrollerStyle[o.style.transitionTimingFunction] = e
        },
        _translate: function (e, t) {
            this.options.useTransform ? this.scrollerStyle[o.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = i.round(e), t = i.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t
        },
        _initEvents: function (t) {
            var i = t ? o.removeEvent : o.addEvent,
                n = this.options.bindToWrapper ? this.wrapper : e;
            i(e, "orientationchange", this), i(e, "resize", this), this.options.click && i(this.wrapper, "click", this, !0), this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(n, "mousemove", this), i(n, "mousecancel", this), i(n, "mouseup", this)), o.hasPointer && !this.options.disablePointer && (i(this.wrapper, o.prefixPointerEvent("pointerdown"), this), i(n, o.prefixPointerEvent("pointermove"), this), i(n, o.prefixPointerEvent("pointercancel"), this), i(n, o.prefixPointerEvent("pointerup"), this)), o.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(n, "touchmove", this), i(n, "touchcancel", this), i(n, "touchend", this)), i(this.scroller, "transitionend", this), i(this.scroller, "webkitTransitionEnd", this), i(this.scroller, "oTransitionEnd", this), i(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function () {
            var t, i, n = e.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (n = n[o.style.transform].split(")")[0].split(", "), t = +(n[12] || n[4]), i = +(n[13] || n[5])) : (t = +n.left.replace(/[^-\d.]/g, ""), i = +n.top.replace(/[^-\d.]/g, "")), {
                x: t,
                y: i
            }
        },
        _animate: function (e, t, i, n) {
            function a() {
                var h, p, f, m = o.getTime();
                return m >= d ? (s.isAnimating = !1, s._translate(e, t), s.resetPosition(s.options.bounceTime) || s._execEvent("scrollEnd"), void 0) : (m = (m - u) / i, f = n(m), h = (e - l) * f + l, p = (t - c) * f + c, s._translate(h, p), s.isAnimating && r(a), void 0)
            }
            var s = this,
                l = this.x,
                c = this.y,
                u = o.getTime(),
                d = u + i;
            this.isAnimating = !0, a()
        },
        handleEvent: function (e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(e);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(e);
                    break;
                case "keydown":
                    this._key(e);
                    break;
                case "click":
                    this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation())
            }
        }
    }, n.utils = o, "undefined" != typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function () {
        return n
    }) : e.IScroll = n
}(window, document, Math), String.prototype.addUrlParameter = function (e, t) {
    return t ? this + (this.indexOf("?") != -1 ? "&" : "?") + e + "=" + t : this + ""
};