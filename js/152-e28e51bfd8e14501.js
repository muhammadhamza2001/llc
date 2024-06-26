(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [152],
  {
    13611: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = i(51010),
        r = i(78411);
      t.default = function (e) {
        let {
          html: t,
          height: i = null,
          width: s = null,
          children: a,
          dataNtpc: o = "",
        } = e;
        return (
          (0, r.useEffect)(() => {
            o &&
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-".concat(o) },
              });
          }, [o]),
          (0, n.jsxs)(n.Fragment, {
            children: [
              a,
              t
                ? (0, n.jsx)("div", {
                    style: {
                      height: null != i ? "".concat(i, "px") : "auto",
                      width: null != s ? "".concat(s, "px") : "auto",
                    },
                    "data-ntpc": o,
                    dangerouslySetInnerHTML: { __html: t },
                  })
                : null,
            ],
          })
        );
      };
    },
    19240: function (e, t, i) {
      "use strict";
      var n;
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent = t.GoogleAnalytics = void 0);
      let s = i(51010),
        a = i(78411),
        o = (n = i(21474)) && n.__esModule ? n : { default: n };
      (t.GoogleAnalytics = function (e) {
        let { gaId: t, dataLayerName: i = "dataLayer" } = e;
        return (
          void 0 === r && (r = i),
          (0, a.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-ga" },
            });
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(o.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                  __html: "\n          window['"
                    .concat(i, "'] = window['")
                    .concat(i, "'] || [];\n          function gtag(){window['")
                    .concat(
                      i,
                      "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                    )
                    .concat(t, "');"),
                },
              }),
              (0, s.jsx)(o.default, {
                id: "_next-ga",
                src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
              }),
            ],
          })
        );
      }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          if (void 0 === r) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[r]
            ? window[r].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  r,
                  " does not exist"
                )
              );
        });
    },
    39502: function (e, t, i) {
      "use strict";
      var n;
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = t.GoogleTagManager = void 0);
      let s = i(51010),
        a = i(78411),
        o = (n = i(21474)) && n.__esModule ? n : { default: n };
      (t.GoogleTagManager = function (e) {
        let {
          gtmId: t,
          dataLayerName: i = "dataLayer",
          auth: n,
          preview: l,
          dataLayer: u,
        } = e;
        void 0 === r && (r = i);
        let h = "dataLayer" !== i ? "&l=".concat(i) : "";
        return (
          (0, a.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-gtm" },
            });
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(o.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                  __html:
                    "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                      .concat(
                        u ? "w[l].push(".concat(JSON.stringify(u), ")") : "",
                        "\n      })(window,'"
                      )
                      .concat(i, "');"),
                },
              }),
              (0, s.jsx)(o.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: "https://www.googletagmanager.com/gtm.js?id="
                  .concat(t)
                  .concat(h)
                  .concat(n ? "&gtm_auth=".concat(n) : "")
                  .concat(
                    l ? "&gtm_preview=".concat(l, "&gtm_cookies_win=x") : ""
                  ),
              }),
            ],
          })
        );
      }),
        (t.sendGTMEvent = (e) => {
          if (void 0 === r) {
            console.warn("@next/third-parties: GTM has not been initialized");
            return;
          }
          window[r]
            ? window[r].push(e)
            : console.warn(
                "@next/third-parties: GTM dataLayer ".concat(
                  r,
                  " does not exist"
                )
              );
        });
    },
    32941: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Manrope_cbcdd2', '__Manrope_Fallback_cbcdd2'",
          fontStyle: "normal",
        },
        className: "__className_cbcdd2",
        variable: "__variable_cbcdd2",
      };
    },
    25125: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__radwaveOutline_47515d', '__radwaveOutline_Fallback_47515d'",
        },
        className: "__className_47515d",
        variable: "__variable_47515d",
      };
    },
    9316: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__radwaveRegular_49fdb2', '__radwaveRegular_Fallback_49fdb2'",
        },
        className: "__className_49fdb2",
        variable: "__variable_49fdb2",
      };
    },
    92756: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          SpeedInsights: function () {
            return p;
          },
        });
      var n = i(78411),
        r = i(83262),
        s = () => {
          window.si ||
            (window.si = function () {
              for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
              (window.siq = window.siq || []).push(t);
            });
        };
      function a() {
        return false;
      }
      var o = "https://va.vercel-scripts.com/v1/speed-insights",
        l = "".concat(o, "/script.js"),
        u = "".concat(o, "/script.debug.js");
      function h(e) {
        let t = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            if (t.current) e.route && t.current(e.route);
            else {
              let i = (function () {
                var e;
                let t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if (!("undefined" != typeof window) || null === t.route)
                  return null;
                s();
                let i = !!t.dsn,
                  n =
                    t.scriptSrc ||
                    (i ? l : "/_vercel/speed-insights/script.js");
                if (
                  document.head.querySelector('script[src*="'.concat(n, '"]'))
                )
                  return null;
                t.beforeSend &&
                  (null == (e = window.si) ||
                    e.call(window, "beforeSend", t.beforeSend));
                let r = document.createElement("script");
                return (
                  (r.src = n),
                  (r.defer = !0),
                  (r.dataset.sdkn =
                    "@vercel/speed-insights" +
                    (t.framework ? "/".concat(t.framework) : "")),
                  (r.dataset.sdkv = "1.0.10"),
                  t.sampleRate &&
                    (r.dataset.sampleRate = t.sampleRate.toString()),
                  t.route && (r.dataset.route = t.route),
                  t.endpoint && (r.dataset.endpoint = t.endpoint),
                  t.dsn && (r.dataset.dsn = t.dsn),
                  (r.onerror = () => {
                    console.log(
                      "[Vercel Speed Insights] Failed to load script from ".concat(
                        n,
                        ". Please check if any content blockers are enabled and try again."
                      )
                    );
                  }),
                  document.head.appendChild(r),
                  {
                    setRoute: (e) => {
                      r.dataset.route = null != e ? e : void 0;
                    },
                  }
                );
              })({ framework: e.framework || "react", ...e });
              i && (t.current = i.setRoute);
            }
          }, [e.route]),
          null
        );
      }
      var d = () => {
        let e = (0, r.useParams)(),
          t = (0, r.useSearchParams)(),
          i = (0, r.usePathname)(),
          n = { ...Object.fromEntries(t.entries()), ...(e || {}) };
        return e
          ? (function (e, t) {
              if (!e || !t) return e;
              let i = e;
              try {
                for (let [e, n] of Object.entries(t)) {
                  let t = Array.isArray(n),
                    r = t ? n.join("/") : n,
                    s = t ? "...".concat(e) : e,
                    a = new RegExp(
                      "/".concat(
                        r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                        "(?=[/?#]|$)"
                      )
                    );
                  a.test(i) && (i = i.replace(a, "/[".concat(s, "]")));
                }
                return i;
              } catch (t) {
                return e;
              }
            })(i, n)
          : null;
      };
      function c(e) {
        let t = d();
        return n.createElement(h, { route: t, ...e, framework: "next" });
      }
      function p(e) {
        return n.createElement(
          n.Suspense,
          { fallback: null },
          n.createElement(c, { ...e })
        );
      }
    },
    5820: function (e, t, i) {
      "use strict";
      i.d(t, {
        X: function () {
          return o;
        },
      });
      var n = i(51010),
        r = i(78411),
        s = i(10895),
        a = i(65210);
      function o({ children: e, features: t, strict: i = !1 }) {
        let [, o] = (0, r.useState)(!l(t)),
          u = (0, r.useRef)(void 0);
        if (!l(t)) {
          let { renderer: e, ...i } = t;
          (u.current = e), (0, a.K)(i);
        }
        return (
          (0, r.useEffect)(() => {
            l(t) &&
              t().then(({ renderer: e, ...t }) => {
                (0, a.K)(t), (u.current = e), o(!0);
              });
          }, []),
          (0, n.jsx)(s.u.Provider, {
            value: { renderer: u.current, strict: i },
            children: e,
          })
        );
      }
      function l(e) {
        return "function" == typeof e;
      }
    },
    93235: function (e, t, i) {
      "use strict";
      let n;
      i.d(t, {
        H: function () {
          return t2;
        },
      });
      var r,
        s = i(34518),
        a = i(23870);
      function o(e, t) {
        if (!Array.isArray(t)) return !1;
        let i = t.length;
        if (i !== e.length) return !1;
        for (let n = 0; n < i; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      var l = i(26048),
        u = i(13542);
      function h(e, t, i) {
        let n = e.getProps();
        return (0, u.o)(n, t, void 0 !== i ? i : n.custom, e);
      }
      var d = i(38665),
        c = i(3501),
        p = i(46207);
      let m = (e) => 1e3 * e,
        f = (e) => e / 1e3,
        v = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        g = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        y = { type: "keyframes", duration: 0.8 },
        w = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        b = (e, { keyframes: t }) =>
          t.length > 2
            ? y
            : c.G.has(e)
            ? e.startsWith("scale")
              ? g(t[1])
              : v
            : w;
      function P(e, t) {
        return e[t] || e.default || e;
      }
      var S = i(8892);
      let x = { current: !1 },
        V = (e) => null !== e;
      function T(e, { repeat: t, repeatType: i = "loop" }, n) {
        let r = e.filter(V),
          s = t && "loop" !== i && t % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      var A = i(2337),
        M = i(96279);
      let C = (e) => /^0[^.\s]+$/u.test(e);
      var k = i(96814);
      let _ = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
      var F = i(52364);
      let E = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var R = i(86412),
        j = i(85081);
      let I = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        O = (e) => e === R.Rx || e === j.px,
        $ = (e, t) => parseFloat(e.split(", ")[t]),
        K =
          (e, t) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return $(r[1], t);
            {
              let t = n.match(/^matrix\((.+)\)$/u);
              return t ? $(t[1], e) : 0;
            }
          },
        L = new Set(["x", "y", "z"]),
        N = c._.filter((e) => !L.has(e)),
        B = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: i = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(i),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: i = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(i),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: K(4, 13),
          y: K(5, 14),
        };
      (B.translateX = B.x), (B.translateY = B.y);
      let D = (e) => (t) => t.test(e),
        G = [
          R.Rx,
          j.px,
          j.aQ,
          j.RW,
          j.vw,
          j.vh,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        W = (e) => G.find(D(e)),
        z = new Set(),
        H = !1,
        U = !1;
      function q() {
        if (U) {
          let e = Array.from(z).filter((e) => e.needsMeasurement),
            t = new Set(e.map((e) => e.element)),
            i = new Map();
          t.forEach((e) => {
            let t = (function (e) {
              let t = [];
              return (
                N.forEach((i) => {
                  let n = e.getValue(i);
                  void 0 !== n &&
                    (t.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                t
              );
            })(e);
            t.length && (i.set(e, t), e.render());
          }),
            e.forEach((e) => e.measureInitialState()),
            t.forEach((e) => {
              e.render();
              let t = i.get(e);
              t &&
                t.forEach(([t, i]) => {
                  var n;
                  null === (n = e.getValue(t)) || void 0 === n || n.set(i);
                });
            }),
            e.forEach((e) => e.measureEndState()),
            e.forEach((e) => {
              void 0 !== e.suspendedScrollY &&
                window.scrollTo(0, e.suspendedScrollY);
            });
        }
        (U = !1), (H = !1), z.forEach((e) => e.complete()), z.clear();
      }
      function X() {
        z.forEach((e) => {
          e.readKeyframes(), e.needsMeasurement && (U = !0);
        });
      }
      class Y {
        constructor(e, t, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...e]),
            (this.onComplete = t),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (z.add(this),
                H || ((H = !0), A.Wi.read(X), A.Wi.resolveKeyframes(q)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: e,
            name: t,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < e.length; r++)
            if (null === e[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = e[e.length - 1];
                if (void 0 !== r) e[0] = r;
                else if (i && t) {
                  let n = i.readValue(t, s);
                  null != n && (e[0] = n);
                }
                void 0 === e[0] && (e[0] = s), n && void 0 === r && n.set(e[0]);
              } else e[r] = e[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            z.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), z.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      var Z = i(20520),
        J = i(78505);
      let Q = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function ee(e) {
        let [t, i] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = i.match(J.KP) || [];
        if (!n) return e;
        let r = i.replace(n, ""),
          s = Q.has(t) ? 1 : 0;
        return n !== i && (s *= 100), t + "(" + s + r + ")";
      }
      let et = /\b([a-z-]*)\(.*?\)/gu,
        ei = {
          ...Z.P,
          getAnimatableNone: (e) => {
            let t = e.match(et);
            return t ? t.map(ee).join(" ") : e;
          },
        };
      var en = i(68068);
      let er = {
          ...i(9502).j,
          color: en.$,
          backgroundColor: en.$,
          outlineColor: en.$,
          fill: en.$,
          stroke: en.$,
          borderColor: en.$,
          borderTopColor: en.$,
          borderRightColor: en.$,
          borderBottomColor: en.$,
          borderLeftColor: en.$,
          filter: ei,
          WebkitFilter: ei,
        },
        es = (e) => er[e];
      function ea(e, t) {
        let i = es(e);
        return (
          i !== ei && (i = Z.P),
          i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
        );
      }
      let eo = new Set(["auto", "none", "0"]);
      class el extends Y {
        constructor(e, t, i, n) {
          super(e, t, i, n, null == n ? void 0 : n.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: e, element: t, name: i } = this;
          if (!t.current) return;
          super.readKeyframes();
          for (let i = 0; i < e.length; i++) {
            let n = e[i];
            if ("string" == typeof n && (0, F.t)(n)) {
              let r = (function e(t, i, n = 1) {
                (0, k.k)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (e) {
                  let t = E.exec(e);
                  if (!t) return [,];
                  let [, i, n, r] = t;
                  return [`--${null != i ? i : n}`, r];
                })(t);
                if (!r) return;
                let a = window.getComputedStyle(i).getPropertyValue(r);
                if (a) {
                  let e = a.trim();
                  return _(e) ? parseFloat(e) : e;
                }
                return (0, F.t)(s) ? e(s, i, n + 1) : s;
              })(n, t.current);
              void 0 !== r && (e[i] = r),
                i === e.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !I.has(i) || 2 !== e.length))
            return;
          let [n, r] = e,
            s = W(n),
            a = W(r);
          if (s !== a) {
            if (O(s) && O(a))
              for (let t = 0; t < e.length; t++) {
                let i = e[t];
                "string" == typeof i && (e[t] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: e, name: t } = this,
            i = [];
          for (let t = 0; t < e.length; t++) {
            var n;
            ("number" == typeof (n = e[t])
              ? 0 === n
              : null === n || "none" === n || "0" === n || C(n)) && i.push(t);
          }
          i.length &&
            (function (e, t, i) {
              let n,
                r = 0;
              for (; r < e.length && !n; ) {
                let t = e[r];
                "string" == typeof t &&
                  !eo.has(t) &&
                  (0, Z.V)(t).values.length &&
                  (n = e[r]),
                  r++;
              }
              if (n && i) for (let r of t) e[r] = ea(i, n);
            })(e, i, t);
        }
        measureInitialState() {
          let { element: e, unresolvedKeyframes: t, name: i } = this;
          if (!e.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = B[i](
              e.measureViewportBox(),
              window.getComputedStyle(e.current)
            )),
            (t[0] = this.measuredOrigin);
          let n = t[t.length - 1];
          void 0 !== n && e.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var e;
          let { element: t, name: i, unresolvedKeyframes: n } = this;
          if (!t.current) return;
          let r = t.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            a = n[s];
          (n[s] = B[i](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (e = this.removedTransforms) || void 0 === e
              ? void 0
              : e.length) &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      var eu = i(72764);
      let eh = (e, t) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (Z.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      class ed {
        constructor({
          autoplay: e = !0,
          delay: t = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.options = {
              autoplay: e,
              delay: t,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (X(), q()),
            this._resolved
          );
        }
        onKeyframesResolved(e, t) {
          this.hasAttemptedResolve = !0;
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: a,
            onUpdate: o,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (e, t, i, n) {
              let r = e[0];
              if (null === r) return !1;
              if ("display" === t || "visibility" === t) return !0;
              let s = e[e.length - 1],
                a = eh(r, t),
                o = eh(s, t);
              return (
                (0, k.K)(
                  a === o,
                  `You are trying to animate ${t} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!a &&
                  !!o &&
                  ((function (e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let i = 0; i < e.length; i++)
                      if (e[i] !== t) return !0;
                  })(e) ||
                    ("spring" === i && n))
              );
            })(e, i, n, r)
          ) {
            if (x.current || !s) {
              null == o || o(T(e, this.options, t)),
                null == a || a(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(e, t);
          !1 !== u &&
            ((this._resolved = { keyframes: e, finalKeyframe: t, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(e, t) {
          return this.currentFinishedPromise.then(e, t);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((e) => {
            this.resolveFinishedPromise = e;
          });
        }
      }
      var ec = i(21306);
      function ep(e, t, i) {
        let n = Math.max(t - 5, 0);
        return (0, ec.R)(i - e(n), t - n);
      }
      var em = i(36015);
      function ef(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let ev = ["duration", "bounce"],
        eg = ["stiffness", "damping", "mass"];
      function ey(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function ew({ keyframes: e, restDelta: t, restSpeed: i, ...n }) {
        let r;
        let s = e[0],
          a = e[e.length - 1],
          o = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: h,
            duration: d,
            velocity: c,
            isResolvedFromDuration: p,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!ey(e, eg) && ey(e, ev)) {
              let i = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let r, s;
                (0, k.K)(
                  e <= m(10),
                  "Spring duration must be 10 seconds or less"
                );
                let a = 1 - t;
                (a = (0, em.u)(0.05, 1, a)),
                  (e = (0, em.u)(0.01, 10, f(e))),
                  a < 1
                    ? ((r = (t) => {
                        let n = t * a,
                          r = n * e;
                        return 0.001 - ((n - i) / ef(t, a)) * Math.exp(-r);
                      }),
                      (s = (t) => {
                        let n = t * a * e,
                          s = Math.pow(a, 2) * Math.pow(t, 2) * e,
                          o = ef(Math.pow(t, 2), a);
                        return (
                          ((n * i + i - s) *
                            Math.exp(-n) *
                            (-r(t) + 0.001 > 0 ? -1 : 1)) /
                          o
                        );
                      }))
                    : ((r = (t) =>
                        -0.001 + Math.exp(-t * e) * ((t - i) * e + 1)),
                      (s = (t) => e * e * (i - t) * Math.exp(-t * e)));
                let o = (function (e, t, i) {
                  let n = i;
                  for (let i = 1; i < 12; i++) n -= e(n) / t(n);
                  return n;
                })(r, s, 5 / e);
                if (((e = m(e)), isNaN(o)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(o, 2) * n;
                  return {
                    stiffness: t,
                    damping: 2 * a * Math.sqrt(n * t),
                    duration: e,
                  };
                }
              })(e);
              (t = { ...t, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return t;
          })({ ...n, velocity: -f(n.velocity || 0) }),
          v = c || 0,
          g = u / (2 * Math.sqrt(l * h)),
          y = a - s,
          w = f(Math.sqrt(l / h)),
          b = 5 > Math.abs(y);
        if ((i || (i = b ? 0.01 : 2), t || (t = b ? 0.005 : 0.5), g < 1)) {
          let e = ef(w, g);
          r = (t) =>
            a -
            Math.exp(-g * w * t) *
              (((v + g * w * y) / e) * Math.sin(e * t) + y * Math.cos(e * t));
        } else if (1 === g)
          r = (e) => a - Math.exp(-w * e) * (y + (v + w * y) * e);
        else {
          let e = w * Math.sqrt(g * g - 1);
          r = (t) => {
            let i = Math.exp(-g * w * t),
              n = Math.min(e * t, 300);
            return (
              a -
              (i * ((v + g * w * y) * Math.sinh(n) + e * y * Math.cosh(n))) / e
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (e) => {
            let n = r(e);
            if (p) o.done = e >= d;
            else {
              let s = v;
              0 !== e && (s = g < 1 ? ep(r, e, n) : 0);
              let l = Math.abs(s) <= i,
                u = Math.abs(a - n) <= t;
              o.done = l && u;
            }
            return (o.value = o.done ? a : n), o;
          },
        };
      }
      function eb({
        keyframes: e,
        velocity: t = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = e[0],
          m = { done: !1, value: p },
          f = (e) => (void 0 !== o && e < o) || (void 0 !== l && e > l),
          v = (e) =>
            void 0 === o
              ? l
              : void 0 === l
              ? o
              : Math.abs(o - e) < Math.abs(l - e)
              ? o
              : l,
          g = i * t,
          y = p + g,
          w = void 0 === a ? y : a(y);
        w !== y && (g = w - p);
        let b = (e) => -g * Math.exp(-e / n),
          P = (e) => w + b(e),
          S = (e) => {
            let t = b(e),
              i = P(e);
            (m.done = Math.abs(t) <= u), (m.value = m.done ? w : i);
          },
          x = (e) => {
            f(m.value) &&
              ((d = e),
              (c = ew({
                keyframes: [m.value, v(m.value)],
                velocity: ep(P, e, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          x(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (c || void 0 !== d || ((t = !0), S(e), x(e)),
              void 0 !== d && e >= d)
                ? c.next(e - d)
                : (t || S(e), m);
            },
          }
        );
      }
      let eP = (e, t, i) =>
        (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;
      function eS(e, t, i, n) {
        if (e === t && i === n) return eu.Z;
        let r = (t) =>
          (function (e, t, i, n, r) {
            let s, a;
            let o = 0;
            do
              (s = eP((a = t + (i - t) / 2), n, r) - e) > 0 ? (i = a) : (t = a);
            while (Math.abs(s) > 1e-7 && ++o < 12);
            return a;
          })(t, 0, 1, e, i);
        return (e) => (0 === e || 1 === e ? e : eP(r(e), t, n));
      }
      let ex = eS(0.42, 0, 1, 1),
        eV = eS(0, 0, 0.58, 1),
        eT = eS(0.42, 0, 0.58, 1),
        eA = (e) => Array.isArray(e) && "number" != typeof e[0],
        eM = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        eC = (e) => (t) => 1 - e(1 - t),
        ek = (e) => 1 - Math.sin(Math.acos(e)),
        e_ = eC(ek),
        eF = eM(ek),
        eE = eS(0.33, 1.53, 0.69, 0.99),
        eR = eC(eE),
        ej = eM(eR),
        eI = {
          linear: eu.Z,
          easeIn: ex,
          easeInOut: eT,
          easeOut: eV,
          circIn: ek,
          circInOut: eF,
          circOut: e_,
          backIn: eR,
          backInOut: ej,
          backOut: eE,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * eR(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        eO = (e) => {
          if (Array.isArray(e)) {
            (0, k.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, i, n, r] = e;
            return eS(t, i, n, r);
          }
          return "string" == typeof e
            ? ((0, k.k)(void 0 !== eI[e], `Invalid easing type '${e}'`), eI[e])
            : e;
        };
      var e$ = i(4563),
        eK = i(47515);
      function eL({
        duration: e = 300,
        keyframes: t,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = eA(n) ? n.map(eO) : eO(n),
          s = { done: !1, value: t[0] },
          a = (i && i.length === t.length ? i : (0, eK.Y)(t)).map((t) => t * e),
          o = (0, e$.s)(a, t, {
            ease: Array.isArray(r)
              ? r
              : t.map(() => r || eT).splice(0, t.length - 1),
          });
        return {
          calculatedDuration: e,
          next: (t) => ((s.value = o(t)), (s.done = t >= e), s),
        };
      }
      var eN = i(56780),
        eB = i(5502);
      let eD = (e) => {
          let t = ({ timestamp: t }) => e(t);
          return {
            start: () => A.Wi.update(t, !0),
            stop: () => (0, A.Pn)(t),
            now: () => (A.w0.isProcessing ? A.w0.timestamp : M.X.now()),
          };
        },
        eG = { decay: eb, inertia: eb, tween: eL, keyframes: eL, spring: ew },
        eW = (e) => e / 100;
      class ez extends ed {
        constructor({ KeyframeResolver: e = Y, ...t }) {
          super(t),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: e } = this.options;
              e && e();
            });
          let { name: i, motionValue: n, keyframes: r } = this.options,
            s = (e, t) => this.onKeyframesResolved(e, t);
          i && n && n.owner
            ? (this.resolver = n.owner.resolveKeyframes(r, s, i, n))
            : (this.resolver = new e(r, s, i, n)),
            this.resolver.scheduleResolve();
        }
        initPlayback(e) {
          let t, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: a,
              velocity: o = 0,
            } = this.options,
            l = eG[n] || eL;
          l !== eL &&
            "number" != typeof e[0] &&
            ((t = (0, eN.z)(eW, (0, eB.C)(e[0], e[1]))), (e = [0, 100]));
          let u = l({ ...this.options, keyframes: e });
          "mirror" === a &&
            (i = l({
              ...this.options,
              keyframes: [...e].reverse(),
              velocity: -o,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (e) {
                let t = 0,
                  i = e.next(t);
                for (; !i.done && t < 2e4; ) (t += 50), (i = e.next(t));
                return t >= 2e4 ? 1 / 0 : t;
              })(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: t,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: e = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && e
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(e, t = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: e } = this.options;
            return { done: !0, value: e[e.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: o,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, e))
            : this.speed < 0 &&
              (this.startTime = Math.min(e - u / this.speed, this.startTime)),
            t
              ? (this.currentTime = e)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(e - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            w = r;
          if (c) {
            let e = Math.min(this.currentTime, u) / h,
              t = Math.floor(e),
              i = e % 1;
            !i && e >= 1 && (i = 1),
              1 === i && t--,
              (t = Math.min(t, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (w = s)),
              (y = (0, em.u)(0, 1, i) * h);
          }
          let b = g ? { done: !1, value: o[0] } : w.next(y);
          a && (b.value = a(b.value));
          let { done: P } = b;
          g ||
            null === l ||
            (P =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let S =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && P));
          return (
            S && void 0 !== n && (b.value = T(o, this.options, n)),
            f && f(b.value),
            S && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: e } = this;
          return e ? f(e.calculatedDuration) : 0;
        }
        get time() {
          return f(this.currentTime);
        }
        set time(e) {
          (e = m(e)),
            (this.currentTime = e),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = e)
              : this.driver &&
                (this.startTime = this.driver.now() - e / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(e) {
          let t = this.playbackSpeed !== e;
          (this.playbackSpeed = e), t && (this.time = f(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: e = eD, onPlay: t } = this.options;
          this.driver || (this.driver = e((e) => this.tick(e))), t && t();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var e;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (e = this.currentTime) && void 0 !== e ? e : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: e } = this.options;
          e && e();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(e) {
          return (this.startTime = 0), this.tick(e, !0);
        }
      }
      let eH = (e) => Array.isArray(e) && "number" == typeof e[0],
        eU = ([e, t, i, n]) => `cubic-bezier(${e}, ${t}, ${i}, ${n})`,
        eq = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: eU([0, 0.65, 0.55, 1]),
          circOut: eU([0.55, 0, 1, 0.45]),
          backIn: eU([0.31, 0.01, 0.66, -0.59]),
          backOut: eU([0.33, 1.53, 0.69, 0.99]),
        };
      function eX(e) {
        return eY(e) || eq.easeOut;
      }
      function eY(e) {
        if (e) return eH(e) ? eU(e) : Array.isArray(e) ? e.map(eX) : eq[e];
      }
      let eZ =
          ((r = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = r()), n)),
        eJ = new Set(["opacity", "clipPath", "filter", "transform"]);
      class eQ extends ed {
        constructor(e) {
          super(e);
          let { name: t, motionValue: i, keyframes: n } = this.options;
          (this.resolver = new el(
            n,
            (e, t) => this.onKeyframesResolved(e, t),
            t,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(e, t) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: a,
            type: o,
            motionValue: l,
            name: u,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (n = this.options).type ||
            "backgroundColor" === n.name ||
            !(function e(t) {
              return !!(
                !t ||
                ("string" == typeof t && t in eq) ||
                eH(t) ||
                (Array.isArray(t) && t.every(e))
              );
            })(n.ease)
          ) {
            let {
                onComplete: t,
                onUpdate: i,
                motionValue: n,
                ...l
              } = this.options,
              u = (function (e, t) {
                let i = new ez({
                    ...t,
                    keyframes: e,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: e[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(e, l);
            1 === (e = u.keyframes).length && (e[1] = e[0]),
              (r = u.duration),
              (s = u.times),
              (a = u.ease),
              (o = "keyframes");
          }
          let h = (function (
            e,
            t,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: a = "loop",
              ease: o,
              times: l,
            } = {}
          ) {
            let u = { [t]: i };
            l && (u.offset = l);
            let h = eY(o);
            return (
              Array.isArray(h) && (u.easing = h),
              e.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === a ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, e, {
            ...this.options,
            duration: r,
            times: s,
            ease: a,
          });
          return (
            (h.startTime = M.X.now()),
            this.pendingTimeline
              ? ((h.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(T(e, this.options, t)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: r,
              times: s,
              type: o,
              ease: a,
              keyframes: e,
            }
          );
        }
        get duration() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { duration: t } = e;
          return f(t);
        }
        get time() {
          let { resolved: e } = this;
          if (!e) return 0;
          let { animation: t } = e;
          return f(t.currentTime || 0);
        }
        set time(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: i } = t;
          i.currentTime = m(e);
        }
        get speed() {
          let { resolved: e } = this;
          if (!e) return 1;
          let { animation: t } = e;
          return t.playbackRate;
        }
        set speed(e) {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: i } = t;
          i.playbackRate = e;
        }
        get state() {
          let { resolved: e } = this;
          if (!e) return "idle";
          let { animation: t } = e;
          return t.playState;
        }
        attachTimeline(e) {
          if (this._resolved) {
            let { resolved: t } = this;
            if (!t) return eu.Z;
            let { animation: i } = t;
            (i.timeline = e), (i.onfinish = null);
          } else this.pendingTimeline = e;
          return eu.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          "finished" === t.playState && this.updateFinishedPromise(), t.play();
        }
        pause() {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: t } = e;
          t.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: e } = this;
          if (!e) return;
          let {
            animation: t,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: a,
          } = e;
          if ("idle" !== t.playState && "finished" !== t.playState) {
            if (this.time) {
              let {
                  motionValue: e,
                  onUpdate: t,
                  onComplete: o,
                  ...l
                } = this.options,
                u = new ez({
                  ...l,
                  keyframes: i,
                  duration: n,
                  type: r,
                  ease: s,
                  times: a,
                  isGenerator: !0,
                }),
                h = m(this.time);
              e.setWithVelocity(u.sample(h - 10).value, u.sample(h).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: e } = this;
          e && e.animation.finish();
        }
        cancel() {
          let { resolved: e } = this;
          e && e.animation.cancel();
        }
        static supports(e) {
          let {
            motionValue: t,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: a,
          } = e;
          return (
            eZ() &&
            i &&
            eJ.has(i) &&
            t &&
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== a
          );
        }
      }
      let e0 =
        (e, t, i, n = {}, r, s) =>
        (a) => {
          let o = P(n, e) || {},
            l = o.delay || n.delay || 0,
            { elapsed: u = 0 } = n;
          u -= m(l);
          let h = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: t.getVelocity(),
            ...o,
            delay: -u,
            onUpdate: (e) => {
              t.set(e), o.onUpdate && o.onUpdate(e);
            },
            onComplete: () => {
              a(), o.onComplete && o.onComplete();
            },
            name: e,
            motionValue: t,
            element: s ? void 0 : r,
          };
          !(function ({
            when: e,
            delay: t,
            delayChildren: i,
            staggerChildren: n,
            staggerDirection: r,
            repeat: s,
            repeatType: a,
            repeatDelay: o,
            from: l,
            elapsed: u,
            ...h
          }) {
            return !!Object.keys(h).length;
          })(o) && (h = { ...h, ...b(e, h) }),
            h.duration && (h.duration = m(h.duration)),
            h.repeatDelay && (h.repeatDelay = m(h.repeatDelay)),
            void 0 !== h.from && (h.keyframes[0] = h.from);
          let d = !1;
          if (
            ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
              ((h.duration = 0), 0 !== h.delay || (d = !0)),
            (x.current || S.c.skipAnimations) &&
              ((d = !0), (h.duration = 0), (h.delay = 0)),
            d && !s && void 0 !== t.get())
          ) {
            let e = T(h.keyframes, o);
            if (void 0 !== e) {
              A.Wi.update(() => {
                h.onUpdate(e), h.onComplete();
              });
              return;
            }
          }
          return !s && eQ.supports(h) ? new eQ(h) : new ez(h);
        };
      var e1 = i(81507);
      function e2(e) {
        return !!((0, e1.i)(e) && e.add);
      }
      var e5 = i(8121),
        e3 = i(62889);
      function e4(e, t, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
            transition: a = e.getDefaultTransition(),
            transitionEnd: o,
            ...l
          } = t,
          u = e.getValue("willChange");
        n && (a = n);
        let d = [],
          m = r && e.animationState && e.animationState.getState()[r];
        for (let t in l) {
          let n = e.getValue(
              t,
              null !== (s = e.latestValues[t]) && void 0 !== s ? s : null
            ),
            r = l[t];
          if (
            void 0 === r ||
            (m &&
              (function ({ protectedKeys: e, needsAnimating: t }, i) {
                let n = e.hasOwnProperty(i) && !0 !== t[i];
                return (t[i] = !1), n;
              })(m, t))
          )
            continue;
          let o = { delay: i, elapsed: 0, ...P(a || {}, t) },
            h = !1;
          if (window.HandoffAppearAnimations) {
            let i = e.getProps()[p.M];
            if (i) {
              let e = window.HandoffAppearAnimations(i, t, n, A.Wi);
              null !== e && ((o.elapsed = e), (h = !0));
            }
          }
          n.start(
            e0(
              t,
              n,
              r,
              e.shouldReduceMotion && c.G.has(t) ? { type: !1 } : o,
              e,
              h
            )
          );
          let f = n.animation;
          f && (e2(u) && (u.add(t), f.then(() => u.remove(t))), d.push(f));
        }
        return (
          o &&
            Promise.all(d).then(() => {
              A.Wi.update(() => {
                o &&
                  (function (e, t) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = h(e, t) || {};
                    for (let t in (r = { ...r, ...i })) {
                      let i = (0, e5.Y)(r[t]);
                      e.hasValue(t)
                        ? e.getValue(t).set(i)
                        : e.addValue(t, (0, e3.BX)(i));
                    }
                  })(e, o);
              });
            }),
          d
        );
      }
      function e8(e, t, i = {}) {
        var n;
        let r = h(
            e,
            t,
            "exit" === i.type
              ? null === (n = e.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = e.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let a = r ? () => Promise.all(e4(e, r, i)) : () => Promise.resolve(),
          o =
            e.variantChildren && e.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = s;
                  return (function (e, t, i = 0, n = 0, r = 1, s) {
                    let a = [],
                      o = (e.variantChildren.size - 1) * n,
                      l = 1 === r ? (e = 0) => e * n : (e = 0) => o - e * n;
                    return (
                      Array.from(e.variantChildren)
                        .sort(e6)
                        .forEach((e, n) => {
                          e.notify("AnimationStart", t),
                            a.push(
                              e8(e, t, { ...s, delay: i + l(n) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(e, t, r + n, a, o, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([a(), o(i.delay)]);
        {
          let [e, t] = "beforeChildren" === l ? [a, o] : [o, a];
          return e().then(() => t());
        }
      }
      function e6(e, t) {
        return e.sortNodePosition(t);
      }
      let e9 = [...d.e].reverse(),
        e7 = d.e.length;
      function te(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class tt {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      }
      class ti extends tt {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let t = (t) =>
                    Promise.all(
                      t.map(({ animation: t, options: i }) =>
                        (function (e, t, i = {}) {
                          let n;
                          if ((e.notify("AnimationStart", t), Array.isArray(t)))
                            n = Promise.all(t.map((t) => e8(e, t, i)));
                          else if ("string" == typeof t) n = e8(e, t, i);
                          else {
                            let r =
                              "function" == typeof t ? h(e, t, i.custom) : t;
                            n = Promise.all(e4(e, r, i));
                          }
                          return n.then(() => {
                            A.Wi.postRender(() => {
                              e.notify("AnimationComplete", t);
                            });
                          });
                        })(e, t, i)
                      )
                    ),
                  i = {
                    animate: te(!0),
                    whileInView: te(),
                    whileHover: te(),
                    whileTap: te(),
                    whileDrag: te(),
                    whileFocus: te(),
                    exit: te(),
                  },
                  n = !0,
                  r = (t) => (i, n) => {
                    var r;
                    let s = h(
                      e,
                      n,
                      "exit" === t
                        ? null === (r = e.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: e, transitionEnd: t, ...n } = s;
                      i = { ...i, ...n, ...t };
                    }
                    return i;
                  };
                function u(u) {
                  let h = e.getProps(),
                    d = e.getVariantContext(!0) || {},
                    c = [],
                    p = new Set(),
                    m = {},
                    f = 1 / 0;
                  for (let t = 0; t < e7; t++) {
                    var v;
                    let g = e9[t],
                      y = i[g],
                      w = void 0 !== h[g] ? h[g] : d[g],
                      b = (0, l.$)(w),
                      P = g === u ? y.isActive : null;
                    !1 === P && (f = t);
                    let S = w === d[g] && w !== h[g] && b;
                    if (
                      (S && n && e.manuallyAnimateOnMount && (S = !1),
                      (y.protectedKeys = { ...m }),
                      (!y.isActive && null === P) ||
                        (!w && !y.prevProp) ||
                        (0, s.H)(w) ||
                        "boolean" == typeof w)
                    )
                      continue;
                    let x =
                        ((v = y.prevProp),
                        ("string" == typeof w
                          ? w !== v
                          : !!Array.isArray(w) && !o(w, v)) ||
                          (g === u && y.isActive && !S && b) ||
                          (t > f && b)),
                      V = !1,
                      T = Array.isArray(w) ? w : [w],
                      A = T.reduce(r(g), {});
                    !1 === P && (A = {});
                    let { prevResolvedValues: M = {} } = y,
                      C = { ...M, ...A },
                      k = (t) => {
                        (x = !0),
                          p.has(t) && ((V = !0), p.delete(t)),
                          (y.needsAnimating[t] = !0);
                        let i = e.getValue(t);
                        i && (i.liveStyle = !1);
                      };
                    for (let e in C) {
                      let t = A[e],
                        i = M[e];
                      if (!m.hasOwnProperty(e))
                        ((0, a.C)(t) && (0, a.C)(i) ? o(t, i) : t === i)
                          ? void 0 !== t && p.has(e)
                            ? k(e)
                            : (y.protectedKeys[e] = !0)
                          : null != t
                          ? k(e)
                          : p.add(e);
                    }
                    (y.prevProp = w),
                      (y.prevResolvedValues = A),
                      y.isActive && (m = { ...m, ...A }),
                      n && e.blockInitialAnimation && (x = !1),
                      x &&
                        (!S || V) &&
                        c.push(
                          ...T.map((e) => ({
                            animation: e,
                            options: { type: g },
                          }))
                        );
                  }
                  if (p.size) {
                    let t = {};
                    p.forEach((i) => {
                      let n = e.getBaseTarget(i),
                        r = e.getValue(i);
                      r && (r.liveStyle = !0), (t[i] = null != n ? n : null);
                    }),
                      c.push({ animation: t });
                  }
                  let g = !!c.length;
                  return (
                    n &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (g = !1),
                    (n = !1),
                    g ? t(c) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: u,
                  setActive: function (t, n) {
                    var r;
                    if (i[t].isActive === n) return Promise.resolve();
                    null === (r = e.variantChildren) ||
                      void 0 === r ||
                      r.forEach((e) => {
                        var i;
                        return null === (i = e.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(t, n);
                      }),
                      (i[t].isActive = n);
                    let s = u(t);
                    for (let e in i) i[e].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    t = i(e);
                  },
                  getState: () => i,
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          this.unmount(),
            (0, s.H)(e) && (this.unmount = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let tn = 0;
      class tr extends tt {
        constructor() {
          super(...arguments), (this.id = tn++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === i) return;
          let n = this.node.animationState.setActive("exit", !e);
          t && !e && n.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      }
      function ts(e, t, i, n = { passive: !0 }) {
        return e.addEventListener(t, i, n), () => e.removeEventListener(t, i);
      }
      let ta = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function to(e, t = "page") {
        return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
      }
      let tl = (e) => (t) => ta(t) && e(t, to(t));
      function tu(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let th = tu("dragHorizontal"),
        td = tu("dragVertical");
      function tc() {
        let e = (function (e) {
          let t = !1;
          if ("y" === e) t = td();
          else if ("x" === e) t = th();
          else {
            let e = th(),
              i = td();
            e && i
              ? (t = () => {
                  e(), i();
                })
              : (e && e(), i && i());
          }
          return t;
        })(!0);
        return !e || (e(), !1);
      }
      function tp(e, t) {
        var i, n;
        let r = t ? "onHoverStart" : "onHoverEnd";
        return (
          (i = e.current),
          (n = { passive: !e.getProps()[r] }),
          ts(
            i,
            t ? "pointerenter" : "pointerleave",
            tl((i, n) => {
              if ("touch" === i.pointerType || tc()) return;
              let s = e.getProps();
              e.animationState &&
                s.whileHover &&
                e.animationState.setActive("whileHover", t);
              let a = s[r];
              a && A.Wi.postRender(() => a(i, n));
            }),
            n
          )
        );
      }
      class tm extends tt {
        mount() {
          this.unmount = (0, eN.z)(tp(this.node, !0), tp(this.node, !1));
        }
        unmount() {}
      }
      class tf extends tt {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (t) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, eN.z)(
            ts(this.node.current, "focus", () => this.onFocus()),
            ts(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tv = (e, t) => !!t && (e === t || tv(e, t.parentElement));
      function tg(e, t) {
        if (!t) return;
        let i = new PointerEvent("pointer" + e);
        t(i, to(i));
      }
      class ty extends tt {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = eu.Z),
            (this.removeEndListeners = eu.Z),
            (this.removeAccessibleListeners = eu.Z),
            (this.startPointerPress = (e, t) => {
              var i, n, r, s;
              if (this.isPressing) return;
              this.removeEndListeners();
              let a = this.node.getProps(),
                o =
                  ((i = window),
                  (n = { passive: !(a.onTap || a.onPointerUp) }),
                  ts(
                    i,
                    "pointerup",
                    tl((e, t) => {
                      if (!this.checkPressEnd()) return;
                      let {
                          onTap: i,
                          onTapCancel: n,
                          globalTapTarget: r,
                        } = this.node.getProps(),
                        s = r || tv(this.node.current, e.target) ? i : n;
                      s && A.Wi.update(() => s(e, t));
                    }),
                    n
                  )),
                l =
                  ((r = window),
                  (s = { passive: !(a.onTapCancel || a.onPointerCancel) }),
                  ts(
                    r,
                    "pointercancel",
                    tl((e, t) => this.cancelPress(e, t)),
                    s
                  ));
              (this.removeEndListeners = (0, eN.z)(o, l)),
                this.startPress(e, t);
            }),
            (this.startAccessiblePress = () => {
              let e = ts(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = ts(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          tg("up", (e, t) => {
                            let { onTap: i } = this.node.getProps();
                            i && A.Wi.postRender(() => i(e, t));
                          });
                      }
                    )),
                    tg("down", (e, t) => {
                      this.startPress(e, t);
                    }));
                }),
                t = ts(this.node.current, "blur", () => {
                  this.isPressing &&
                    tg("cancel", (e, t) => this.cancelPress(e, t));
                });
              this.removeAccessibleListeners = (0, eN.z)(e, t);
            });
        }
        startPress(e, t) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: n } = this.node.getProps();
          n &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && A.Wi.postRender(() => i(e, t));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tc()
          );
        }
        cancelPress(e, t) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && A.Wi.postRender(() => i(e, t));
        }
        mount() {
          var e, t, i;
          let n = this.node.getProps(),
            r =
              ((e = n.globalTapTarget ? window : this.node.current),
              (t = this.startPointerPress),
              (i = { passive: !(n.onTapStart || n.onPointerStart) }),
              ts(e, "pointerdown", tl(t), i)),
            s = ts(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, eN.z)(r, s);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let tw = new WeakMap(),
        tb = new WeakMap(),
        tP = (e) => {
          let t = tw.get(e.target);
          t && t(e);
        },
        tS = (e) => {
          e.forEach(tP);
        },
        tx = { some: 0, all: 1 };
      class tV extends tt {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: i, amount: n = "some", once: r } = e,
            s = {
              root: t ? t.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : tx[n],
            };
          return (function (e, t, i) {
            let n = (function ({ root: e, ...t }) {
              let i = e || document;
              tb.has(i) || tb.set(i, {});
              let n = tb.get(i),
                r = JSON.stringify(t);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(tS, { root: e, ...t })),
                n[r]
              );
            })(t);
            return (
              tw.set(e, i),
              n.observe(e),
              () => {
                tw.delete(e), n.unobserve(e);
              }
            );
          })(this.node.current, s, (e) => {
            let { isIntersecting: t } = e;
            if (
              this.isInView === t ||
              ((this.isInView = t), r && !t && this.hasEnteredView)
            )
              return;
            t && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", t);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = t ? i : n;
            s && s(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: t } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: e = {} }, { viewport: t = {} } = {}) {
              return (i) => e[i] !== t[i];
            })(e, t)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var tT = i(78411),
        tA = i(8953),
        tM = i(65219),
        tC = i(99455);
      let tk = () => ({ min: 0, max: 0 }),
        t_ = () => ({ x: tk(), y: tk() });
      var tF = i(26439),
        tE = i(26908);
      let tR = { current: null },
        tj = { current: !1 };
      var tI = i(10646),
        tO = i(81392),
        t$ = i(83837);
      let tK = new WeakMap(),
        tL = [...G, en.$, Z.P],
        tN = (e) => tL.find(D(e)),
        tB = Object.keys(t$.A),
        tD = tB.length,
        tG = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        tW = d.V.length;
      class tz {
        scrapeMotionValuesFromProps(e, t, i) {
          return {};
        }
        constructor(
          {
            parent: e,
            props: t,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          a = {}
        ) {
          (this.resolveKeyframes = (e, t, i, n) =>
            new this.KeyframeResolver(e, t, i, n, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = Y),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => A.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: l } = s;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = t.initial ? { ...o } : {}),
            (this.renderState = l),
            (this.parent = e),
            (this.props = t),
            (this.presenceContext = i),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = a),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, tO.G)(t)),
            (this.isVariantNode = (0, tO.M)(t)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            t,
            {},
            this
          );
          for (let e in h) {
            let t = h[e];
            void 0 !== o[e] &&
              (0, e1.i)(t) &&
              (t.set(o[e], !1), e2(u) && u.add(e));
          }
        }
        mount(e) {
          (this.current = e),
            tK.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
            tj.current ||
              (function () {
                if (((tj.current = !0), tE.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      t = () => (tR.current = e.matches);
                    e.addListener(t), t();
                  } else tR.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || tR.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          var e;
          for (let e in (tK.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, A.Pn)(this.notifyUpdate),
          (0, A.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let t in this.features)
            null === (e = this.features[t]) || void 0 === e || e.unmount();
          this.current = null;
        }
        bindToMotionValue(e, t) {
          let i = c.G.has(e),
            n = t.on("change", (t) => {
              (this.latestValues[e] = t),
                this.props.onUpdate && A.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            r = t.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            n(), r(), t.owner && t.stop();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...t }, i, n, r) {
          let s, a;
          for (let e = 0; e < tD; e++) {
            let i = tB[e],
              {
                isEnabled: n,
                Feature: r,
                ProjectionNode: o,
                MeasureLayout: l,
              } = t$.A[i];
            o && (s = o),
              n(t) &&
                (!this.features[i] && r && (this.features[i] = new r(this)),
                l && (a = l));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            s
          ) {
            this.projection = new s(
              this.latestValues,
              (function e(t) {
                if (t)
                  return !1 !== t.options.allowProjection
                    ? t.projection
                    : e(t.parent);
              })(this.parent)
            );
            let {
              layoutId: e,
              layout: i,
              drag: n,
              dragConstraints: a,
              layoutScroll: o,
              layoutRoot: l,
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: i,
              alwaysMeasureLayout: !!n || (a && (0, tF.I)(a)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: r,
              layoutScroll: o,
              layoutRoot: l,
            });
          }
          return a;
        }
        updateFeatures() {
          for (let e in this.features) {
            let t = this.features[e];
            t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : t_();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, t) {
          this.latestValues[e] = t;
        }
        update(e, t) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = t);
          for (let t = 0; t < tG.length; t++) {
            let i = tG[t];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = e["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (e, t, i) {
            let { willChange: n } = t;
            for (let r in t) {
              let s = t[r],
                a = i[r];
              if ((0, e1.i)(s)) e.addValue(r, s), e2(n) && n.add(r);
              else if ((0, e1.i)(a))
                e.addValue(r, (0, e3.BX)(s, { owner: e })),
                  e2(n) && n.remove(r);
              else if (a !== s) {
                if (e.hasValue(r)) {
                  let t = e.getValue(r);
                  !0 === t.liveStyle ? t.jump(s) : t.hasAnimated || t.set(s);
                } else {
                  let t = e.getStaticValue(r);
                  e.addValue(r, (0, e3.BX)(void 0 !== t ? t : s, { owner: e }));
                }
              }
            }
            for (let n in i) void 0 === t[n] && e.removeValue(n);
            return t;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let t = {};
          for (let e = 0; e < tW; e++) {
            let i = d.V[e],
              n = this.props[i];
            ((0, l.$)(n) || !1 === n) && (t[i] = n);
          }
          return t;
        }
        addVariantChild(e) {
          let t = this.getClosestVariantNode();
          if (t)
            return (
              t.variantChildren && t.variantChildren.add(e),
              () => t.variantChildren.delete(e)
            );
        }
        addValue(e, t) {
          let i = this.values.get(e);
          t !== i &&
            (i && this.removeValue(e),
            this.bindToMotionValue(e, t),
            this.values.set(e, t),
            (this.latestValues[e] = t.get()));
        }
        removeValue(e) {
          this.values.delete(e);
          let t = this.valueSubscriptions.get(e);
          t && (t(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, t) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let i = this.values.get(e);
          return (
            void 0 === i &&
              void 0 !== t &&
              ((i = (0, e3.BX)(null === t ? void 0 : t, { owner: this })),
              this.addValue(e, i)),
            i
          );
        }
        readValue(e, t) {
          var i;
          let n =
            void 0 === this.latestValues[e] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          return (
            null != n &&
              ("string" == typeof n && (_(n) || C(n))
                ? (n = parseFloat(n))
                : !tN(n) && Z.P.test(t) && (n = ea(e, t)),
              this.setBaseTarget(e, (0, e1.i)(n) ? n.get() : n)),
            (0, e1.i)(n) ? n.get() : n
          );
        }
        setBaseTarget(e, t) {
          this.baseTarget[e] = t;
        }
        getBaseTarget(e) {
          var t;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = (0, u.o)(
              this.props,
              n,
              null === (t = this.presenceContext) || void 0 === t
                ? void 0
                : t.custom
            );
            r && (i = r[e]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, e);
          return void 0 === r || (0, e1.i)(r)
            ? void 0 !== this.initialValues[e] && void 0 === i
              ? void 0
              : this.baseTarget[e]
            : r;
        }
        on(e, t) {
          return (
            this.events[e] || (this.events[e] = new tI.L()),
            this.events[e].add(t)
          );
        }
        notify(e, ...t) {
          this.events[e] && this.events[e].notify(...t);
        }
      }
      class tH extends tz {
        constructor() {
          super(...arguments), (this.KeyframeResolver = el);
        }
        sortInstanceNodePosition(e, t) {
          return 2 & e.compareDocumentPosition(t) ? 1 : -1;
        }
        getBaseTargetFromProps(e, t) {
          return e.style ? e.style[t] : void 0;
        }
        removeValueFromRenderState(e, { vars: t, style: i }) {
          delete t[e], delete i[e];
        }
      }
      class tU extends tH {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(e, t) {
          if (c.G.has(t)) {
            let e = es(t);
            return (e && e.default) || 0;
          }
          {
            let i = window.getComputedStyle(e),
              n = ((0, F.f)(t) ? i.getPropertyValue(t) : i[t]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: t }) {
          return (function ({ top: e, left: t, right: i, bottom: n }) {
            return { x: { min: t, max: i }, y: { min: e, max: n } };
          })(
            (function (e, t) {
              if (!t) return e;
              let i = t({ x: e.left, y: e.top }),
                n = t({ x: e.right, y: e.bottom });
              return { top: i.y, left: i.x, bottom: n.y, right: n.x };
            })(e.getBoundingClientRect(), t)
          );
        }
        build(e, t, i, n) {
          (0, tA.r)(e, t, i, n.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, t, i) {
          return (0, tM.U)(e, t, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          (0, e1.i)(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, t, i, n) {
          (0, tC.N)(e, t, i, n);
        }
      }
      var tq = i(21319),
        tX = i(42018),
        tY = i(26654),
        tZ = i(6614),
        tJ = i(18435),
        tQ = i(77305);
      class t0 extends tH {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, t) {
          return e[t];
        }
        readValueFromInstance(e, t) {
          if (c.G.has(t)) {
            let e = es(t);
            return (e && e.default) || 0;
          }
          return (t = tZ.s.has(t) ? t : (0, tY.D)(t)), e.getAttribute(t);
        }
        measureInstanceViewportBox() {
          return t_();
        }
        scrapeMotionValuesFromProps(e, t, i) {
          return (0, tq.U)(e, t, i);
        }
        build(e, t, i, n) {
          (0, tX.i)(e, t, i, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(e, t, i, n) {
          (0, tJ.K)(e, t, i, n);
        }
        mount(e) {
          (this.isSVGTag = (0, tQ.a)(e.tagName)), super.mount(e);
        }
      }
      var t1 = i(83207);
      let t2 = {
        renderer: (e, t) =>
          (0, t1.q)(e)
            ? new t0(t, { enableHardwareAcceleration: !1 })
            : new tU(t, {
                allowProjection: e !== tT.Fragment,
                enableHardwareAcceleration: !0,
              }),
        animation: { Feature: ti },
        exit: { Feature: tr },
        inView: { Feature: tV },
        tap: { Feature: ty },
        focus: { Feature: tf },
        hover: { Feature: tm },
      };
    },
  },
]);
