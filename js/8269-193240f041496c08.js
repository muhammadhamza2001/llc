"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8269],
  {
    21474: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return i.a;
          },
        });
      var r = n(34302),
        i = n.n(r),
        o = {};
      for (var a in r)
        "default" !== a &&
          (o[a] = function (e) {
            return r[e];
          }.bind(0, a));
      n.d(t, o);
    },
    26005: function (e, t) {
      let n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DOMAttributeNames: function () {
            return r;
          },
          isEqualNode: function () {
            return o;
          },
          default: function () {
            return a;
          },
        });
      let r = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function i(e) {
        let { type: t, props: n } = e,
          i = document.createElement(t);
        for (let e in n) {
          if (
            !n.hasOwnProperty(e) ||
            "children" === e ||
            "dangerouslySetInnerHTML" === e ||
            void 0 === n[e]
          )
            continue;
          let o = r[e] || e.toLowerCase();
          "script" === t && ("async" === o || "defer" === o || "noModule" === o)
            ? (i[o] = !!n[e])
            : i.setAttribute(o, n[e]);
        }
        let { children: o, dangerouslySetInnerHTML: a } = n;
        return (
          a
            ? (i.innerHTML = a.__html || "")
            : o &&
              (i.textContent =
                "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""),
          i
        );
      }
      function o(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          let n = t.getAttribute("nonce");
          if (n && !e.getAttribute("nonce")) {
            let r = t.cloneNode(!0);
            return (
              r.setAttribute("nonce", ""),
              (r.nonce = n),
              n === e.nonce && e.isEqualNode(r)
            );
          }
        }
        return e.isEqualNode(t);
      }
      function a() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            let t = {};
            e.forEach((e) => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + e.props["data-href"] + '"]'
                  )
                )
                  return;
                (e.props.href = e.props["data-href"]),
                  (e.props["data-href"] = void 0);
              }
              let n = t[e.type] || [];
              n.push(e), (t[e.type] = n);
            });
            let r = t.title ? t.title[0] : null,
              i = "";
            if (r) {
              let { children: e } = r.props;
              i = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : "";
            }
            i !== document.title && (document.title = i),
              ["meta", "base", "link", "style", "script"].forEach((e) => {
                n(e, t[e] || []);
              });
          },
        };
      }
      (n = (e, t) => {
        let n = document.getElementsByTagName("head")[0],
          r = n.querySelector("meta[name=next-head-count]"),
          a = Number(r.content),
          u = [];
        for (
          let t = 0, n = r.previousElementSibling;
          t < a;
          t++, n = (null == n ? void 0 : n.previousElementSibling) || null
        ) {
          var s;
          (null == n
            ? void 0
            : null == (s = n.tagName)
            ? void 0
            : s.toLowerCase()) === e && u.push(n);
        }
        let l = t.map(i).filter((e) => {
          for (let t = 0, n = u.length; t < n; t++)
            if (o(u[t], e)) return u.splice(t, 1), !1;
          return !0;
        });
        u.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          l.forEach((e) => n.insertBefore(e, r)),
          (r.content = (a - u.length + l.length).toString());
      }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    34302: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          handleClientScriptLoad: function () {
            return g;
          },
          initScriptLoader: function () {
            return y;
          },
          default: function () {
            return x;
          },
        });
      let r = n(63140),
        i = n(72954),
        o = n(51010),
        a = r._(n(75990)),
        u = i._(n(78411)),
        s = n(97233),
        l = n(26005),
        c = n(82763),
        f = new Map(),
        d = new Set(),
        p = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        h = (e) => {
          if (a.default.preinit) {
            e.forEach((e) => {
              a.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        m = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: i = null,
              dangerouslySetInnerHTML: o,
              children: a = "",
              strategy: u = "afterInteractive",
              onError: s,
              stylesheets: c,
            } = e,
            m = n || t;
          if (m && d.has(m)) return;
          if (f.has(t)) {
            d.add(m), f.get(t).then(r, s);
            return;
          }
          let g = () => {
              i && i(), d.add(m);
            },
            y = document.createElement("script"),
            v = new Promise((e, t) => {
              y.addEventListener("load", function (t) {
                e(), r && r.call(this, t), g();
              }),
                y.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              s && s(e);
            });
          for (let [n, r] of (o
            ? ((y.innerHTML = o.__html || ""), g())
            : a
            ? ((y.textContent =
                "string" == typeof a ? a : Array.isArray(a) ? a.join("") : ""),
              g())
            : t && ((y.src = t), f.set(t, v)),
          Object.entries(e))) {
            if (void 0 === r || p.includes(n)) continue;
            let e = l.DOMAttributeNames[n] || n.toLowerCase();
            y.setAttribute(e, r);
          }
          "worker" === u && y.setAttribute("type", "text/partytown"),
            y.setAttribute("data-nscript", u),
            c && h(c),
            document.body.appendChild(y);
        };
      function g(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => m(e));
            })
          : m(e);
      }
      function y(e) {
        e.forEach(g),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            d.add(t);
          });
      }
      function v(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: i = null,
            strategy: l = "afterInteractive",
            onError: f,
            stylesheets: p,
            ...h
          } = e,
          {
            updateScripts: g,
            scripts: y,
            getIsSsr: v,
            appDir: x,
            nonce: b,
          } = (0, u.useContext)(s.HeadManagerContext),
          w = (0, u.useRef)(!1);
        (0, u.useEffect)(() => {
          let e = t || n;
          w.current || (i && e && d.has(e) && i(), (w.current = !0));
        }, [i, t, n]);
        let E = (0, u.useRef)(!1);
        if (
          ((0, u.useEffect)(() => {
            !E.current &&
              ("afterInteractive" === l
                ? m(e)
                : "lazyOnload" === l &&
                  ("complete" === document.readyState
                    ? (0, c.requestIdleCallback)(() => m(e))
                    : window.addEventListener("load", () => {
                        (0, c.requestIdleCallback)(() => m(e));
                      })),
              (E.current = !0));
          }, [e, l]),
          ("beforeInteractive" === l || "worker" === l) &&
            (g
              ? ((y[l] = (y[l] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: i, onError: f, ...h },
                ])),
                g(y))
              : v && v()
              ? d.add(t || n)
              : v && !v() && m(e)),
          x)
        ) {
          if (
            (p &&
              p.forEach((e) => {
                a.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === l)
          )
            return n
              ? (a.default.preload(
                  n,
                  h.integrity
                    ? { as: "script", integrity: h.integrity }
                    : { as: "script" }
                ),
                (0, o.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...h, id: t }]) +
                      ")",
                  },
                }))
              : (h.dangerouslySetInnerHTML &&
                  ((h.children = h.dangerouslySetInnerHTML.__html),
                  delete h.dangerouslySetInnerHTML),
                (0, o.jsx)("script", {
                  nonce: b,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...h, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === l &&
            n &&
            a.default.preload(
              n,
              h.integrity
                ? { as: "script", integrity: h.integrity }
                : { as: "script" }
            );
        }
        return null;
      }
      Object.defineProperty(v, "__nextScript", { value: !0 });
      let x = v;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    46207: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      let r = "data-" + (0, n(26654).D)("framerAppearId");
    },
    34518: function (e, t, n) {
      n.d(t, {
        H: function () {
          return r;
        },
      });
      function r(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
    },
    23870: function (e, t, n) {
      n.d(t, {
        C: function () {
          return r;
        },
      });
      let r = (e) => Array.isArray(e);
    },
    28411: function (e, t, n) {
      n.d(t, {
        M: function () {
          return v;
        },
      });
      var r = n(51010),
        i = n(78411),
        o = n(19452);
      function a() {
        let e = (0, i.useRef)(!1);
        return (
          (0, o.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var u = n(2337),
        s = n(99243),
        l = n(82387),
        c = n(3296);
      class f extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d({ children: e, isPresent: t }) {
        let n = (0, i.useId)(),
          o = (0, i.useRef)(null),
          a = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: u } = (0, i.useContext)(c._);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: r, top: i, left: s } = a.current;
            if (t || !o.current || !e || !r) return;
            o.current.dataset.motionPopId = n;
            let l = document.createElement("style");
            return (
              u && (l.nonce = u),
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${i}px !important;
            left: ${s}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [t]),
          (0, r.jsx)(f, {
            isPresent: t,
            childRef: o,
            sizeRef: a,
            children: i.cloneElement(e, { ref: o }),
          })
        );
      }
      let p = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: o,
        custom: a,
        presenceAffectsLayout: u,
        mode: c,
      }) => {
        let f = (0, l.h)(h),
          p = (0, i.useId)(),
          m = (0, i.useMemo)(
            () => ({
              id: p,
              initial: t,
              isPresent: n,
              custom: a,
              onExitComplete: (e) => {
                for (let t of (f.set(e, !0), f.values())) if (!t) return;
                o && o();
              },
              register: (e) => (f.set(e, !1), () => f.delete(e)),
            }),
            u ? [Math.random()] : [n]
          );
        return (
          (0, i.useMemo)(() => {
            f.forEach((e, t) => f.set(t, !1));
          }, [n]),
          i.useEffect(() => {
            n || f.size || !o || o();
          }, [n]),
          "popLayout" === c &&
            (e = (0, r.jsx)(d, { isPresent: n, children: e })),
          (0, r.jsx)(s.O.Provider, { value: m, children: e })
        );
      };
      function h() {
        return new Map();
      }
      var m = n(83579),
        g = n(96814);
      let y = (e) => e.key || "",
        v = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: s,
          exitBeforeEnter: l,
          presenceAffectsLayout: c = !0,
          mode: f = "sync",
        }) => {
          var d;
          (0, g.k)(!l, "Replace exitBeforeEnter with mode='wait'");
          let h =
              (0, i.useContext)(m.p).forceRender ||
              (function () {
                let e = a(),
                  [t, n] = (0, i.useState)(0),
                  r = (0, i.useCallback)(() => {
                    e.current && n(t + 1);
                  }, [t]);
                return [(0, i.useCallback)(() => u.Wi.postRender(r), [r]), t];
              })()[0],
            v = a(),
            x = (function (e) {
              let t = [];
              return (
                i.Children.forEach(e, (e) => {
                  (0, i.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            b = x,
            w = (0, i.useRef)(new Map()).current,
            E = (0, i.useRef)(b),
            C = (0, i.useRef)(new Map()).current,
            A = (0, i.useRef)(!0);
          if (
            ((0, o.L)(() => {
              (A.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let n = y(e);
                    t.set(n, e);
                  });
                })(x, C),
                (E.current = b);
            }),
            (d = () => {
              (A.current = !0), C.clear(), w.clear();
            }),
            (0, i.useEffect)(() => () => d(), []),
            A.current)
          )
            return (0, r.jsx)(r.Fragment, {
              children: b.map((e) =>
                (0, r.jsx)(
                  p,
                  {
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: c,
                    mode: f,
                    children: e,
                  },
                  y(e)
                )
              ),
            });
          b = [...b];
          let S = E.current.map(y),
            M = x.map(y),
            _ = S.length;
          for (let e = 0; e < _; e++) {
            let t = S[e];
            -1 !== M.indexOf(t) || w.has(t) || w.set(t, void 0);
          }
          return (
            "wait" === f && w.size && (b = []),
            w.forEach((e, n) => {
              if (-1 !== M.indexOf(n)) return;
              let i = C.get(n);
              if (!i) return;
              let o = S.indexOf(n),
                a = e;
              a ||
                ((a = (0, r.jsx)(
                  p,
                  {
                    isPresent: !1,
                    onExitComplete: () => {
                      w.delete(n);
                      let e = Array.from(C.keys()).filter(
                        (e) => !M.includes(e)
                      );
                      if (
                        (e.forEach((e) => C.delete(e)),
                        (E.current = x.filter((t) => {
                          let r = y(t);
                          return r === n || e.includes(r);
                        })),
                        !w.size)
                      ) {
                        if (!1 === v.current) return;
                        h(), s && s();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: c,
                    mode: f,
                    children: i,
                  },
                  y(i)
                )),
                w.set(n, a)),
                b.splice(o, 0, a);
            }),
            (b = b.map((e) => {
              let t = e.key;
              return w.has(t)
                ? e
                : (0, r.jsx)(
                    p,
                    {
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: f,
                      children: e,
                    },
                    y(e)
                  );
            })),
            (0, r.jsx)(r.Fragment, {
              children: w.size ? b : b.map((e) => (0, i.cloneElement)(e)),
            })
          );
        };
    },
    83579: function (e, t, n) {
      n.d(t, {
        p: function () {
          return r;
        },
      });
      let r = (0, n(78411).createContext)({});
    },
    10895: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r;
        },
      });
      let r = (0, n(78411).createContext)({ strict: !1 });
    },
    3296: function (e, t, n) {
      n.d(t, {
        _: function () {
          return r;
        },
      });
      let r = (0, n(78411).createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    99243: function (e, t, n) {
      n.d(t, {
        O: function () {
          return r;
        },
      });
      let r = (0, n(78411).createContext)(null);
    },
    24686: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(8892);
      class i {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(e) {
          if (!this.scheduled.has(e))
            return this.scheduled.add(e), this.order.push(e), !0;
        }
        remove(e) {
          let t = this.order.indexOf(e);
          -1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      }
      let o = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function a(e, t) {
        let n = !1,
          a = !0,
          u = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = o.reduce(
            (e, t) => (
              (e[t] = (function (e) {
                let t = new i(),
                  n = new i(),
                  r = 0,
                  o = !1,
                  a = !1,
                  u = new WeakSet(),
                  s = {
                    schedule: (e, i = !1, a = !1) => {
                      let s = a && o,
                        l = s ? t : n;
                      return (
                        i && u.add(e),
                        l.add(e) && s && o && (r = t.order.length),
                        e
                      );
                    },
                    cancel: (e) => {
                      n.remove(e), u.delete(e);
                    },
                    process: (i) => {
                      if (o) {
                        a = !0;
                        return;
                      }
                      if (
                        ((o = !0),
                        ([t, n] = [n, t]),
                        n.clear(),
                        (r = t.order.length))
                      )
                        for (let n = 0; n < r; n++) {
                          let r = t.order[n];
                          u.has(r) && (s.schedule(r), e()), r(i);
                        }
                      (o = !1), a && ((a = !1), s.process(i));
                    },
                  };
                return s;
              })(() => (n = !0))),
              e
            ),
            {}
          ),
          l = (e) => {
            s[e].process(u);
          },
          c = () => {
            let i = r.c.useManualTiming ? u.timestamp : performance.now();
            (n = !1),
              (u.delta = a
                ? 1e3 / 60
                : Math.max(Math.min(i - u.timestamp, 40), 1)),
              (u.timestamp = i),
              (u.isProcessing = !0),
              o.forEach(l),
              (u.isProcessing = !1),
              n && t && ((a = !1), e(c));
          },
          f = () => {
            (n = !0), (a = !0), u.isProcessing || e(c);
          };
        return {
          schedule: o.reduce((e, t) => {
            let r = s[t];
            return (
              (e[t] = (e, t = !1, i = !1) => (n || f(), r.schedule(e, t, i))), e
            );
          }, {}),
          cancel: (e) => o.forEach((t) => s[t].cancel(e)),
          state: u,
          steps: s,
        };
      }
    },
    2337: function (e, t, n) {
      n.d(t, {
        Pn: function () {
          return o;
        },
        Wi: function () {
          return i;
        },
        w0: function () {
          return a;
        },
      });
      var r = n(72764);
      let {
        schedule: i,
        cancel: o,
        state: a,
        steps: u,
      } = (0, n(24686).Z)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.Z,
        !0
      );
    },
    83837: function (e, t, n) {
      n.d(t, {
        A: function () {
          return i;
        },
      });
      let r = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        i = {};
      for (let e in r) i[e] = { isEnabled: (t) => r[e].some((e) => !!t[e]) };
    },
    65210: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      var r = n(83837);
      function i(e) {
        for (let t in e) r.A[t] = { ...r.A[t], ...e[t] };
      }
    },
    42746: function (e, t, n) {
      n.d(t, {
        j: function () {
          return o;
        },
      });
      let r = {};
      var i = n(3501);
      function o(e, { layout: t, layoutId: n }) {
        return (
          i.G.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== n) && (!!r[e] || "opacity" === e))
        );
      }
    },
    9066: function (e, t, n) {
      n.d(t, {
        m: function () {
          return Z;
        },
      });
      var r,
        i = n(51010),
        o = n(78411),
        a = n(3296);
      let u = (0, o.createContext)({});
      var s = n(99243),
        l = n(19452),
        c = n(10895),
        f = n(46207);
      let { schedule: d, cancel: p } = (0, n(24686).Z)(queueMicrotask, !1);
      var h = n(26439),
        m = n(26048),
        g = n(81392);
      function y(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var v = n(65210),
        x = n(26908),
        b = n(83579);
      let w = (0, o.createContext)({}),
        E = Symbol.for("motionComponentSymbol");
      var C = n(83207),
        A = n(42746),
        S = n(81507),
        M = n(8953);
      let _ = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function R(e, t, n) {
        for (let r in t) (0, S.i)(t[r]) || (0, A.j)(r, n) || (e[r] = t[r]);
      }
      let k = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function L(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          k.has(e)
        );
      }
      let j = (e) => !L(e);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (j = (e) => (e.startsWith("on") ? !L(e) : r(e)));
      } catch (e) {}
      var P = n(42018);
      let O = () => ({ ..._(), attrs: {} });
      var T = n(77305),
        I = n(18435),
        W = n(21319),
        H = n(34518),
        $ = n(13542),
        q = n(82387),
        V = n(8121);
      let D = (e) => (t, n) => {
        let r = (0, o.useContext)(u),
          i = (0, o.useContext)(s.O),
          a = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: t,
                onMount: n,
              },
              r,
              i,
              o
            ) {
              let a = {
                latestValues: (function (e, t, n, r) {
                  let i = {},
                    o = r(e, {});
                  for (let e in o)
                    i[e] = (function (e) {
                      let t = (0, S.i)(e) ? e.get() : e;
                      return (0, V.p)(t) ? t.toValue() : t;
                    })(o[e]);
                  let { initial: a, animate: u } = e,
                    s = (0, g.G)(e),
                    l = (0, g.M)(e);
                  t &&
                    l &&
                    !s &&
                    !1 !== e.inherit &&
                    (void 0 === a && (a = t.initial),
                    void 0 === u && (u = t.animate));
                  let c = !!n && !1 === n.initial,
                    f = (c = c || !1 === a) ? u : a;
                  return (
                    f &&
                      "boolean" != typeof f &&
                      !(0, H.H)(f) &&
                      (Array.isArray(f) ? f : [f]).forEach((t) => {
                        let n = (0, $.o)(e, t);
                        if (!n) return;
                        let { transitionEnd: r, transition: o, ...a } = n;
                        for (let e in a) {
                          let t = a[e];
                          if (Array.isArray(t)) {
                            let e = c ? t.length - 1 : 0;
                            t = t[e];
                          }
                          null !== t && (i[e] = t);
                        }
                        for (let e in r) i[e] = r[e];
                      }),
                    i
                  );
                })(r, i, o, e),
                renderState: t(),
              };
              return n && (a.mount = (e) => n(r, e, a)), a;
            })(e, t, r, i);
        return n ? a() : (0, q.h)(a);
      };
      var F = n(2337);
      let B = {
          useVisualState: D({
            scrapeMotionValuesFromProps: W.U,
            createRenderState: O,
            onMount: (e, t, { renderState: n, latestValues: r }) => {
              F.Wi.read(() => {
                try {
                  n.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                F.Wi.render(() => {
                  (0, P.i)(
                    n,
                    r,
                    { enableHardwareAcceleration: !1 },
                    (0, T.a)(t.tagName),
                    e.transformTemplate
                  ),
                    (0, I.K)(t, n);
                });
            },
          }),
        },
        N = {
          useVisualState: D({
            scrapeMotionValuesFromProps: n(65219).U,
            createRenderState: _,
          }),
        },
        Z = (function (e) {
          function t(t, n = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: n,
              useVisualState: r,
              Component: p,
            }) {
              e && (0, v.K)(e);
              let C = (0, o.forwardRef)(function (v, E) {
                var C;
                let A;
                let S = {
                    ...(0, o.useContext)(a._),
                    ...v,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, o.useContext)(b.p).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(v),
                  },
                  { isStatic: M } = S,
                  _ = (function (e) {
                    let { initial: t, animate: n } = (function (e, t) {
                      if ((0, g.G)(e)) {
                        let { initial: t, animate: n } = e;
                        return {
                          initial: !1 === t || (0, m.$)(t) ? t : void 0,
                          animate: (0, m.$)(n) ? n : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, o.useContext)(u));
                    return (0, o.useMemo)(
                      () => ({ initial: t, animate: n }),
                      [y(t), y(n)]
                    );
                  })(v),
                  R = r(v, M);
                if (!M && x.j) {
                  _.visualElement = (function (e, t, n, r) {
                    let { visualElement: i } = (0, o.useContext)(u),
                      p = (0, o.useContext)(c.u),
                      h = (0, o.useContext)(s.O),
                      m = (0, o.useContext)(a._).reducedMotion,
                      g = (0, o.useRef)();
                    (r = r || p.renderer),
                      !g.current &&
                        r &&
                        (g.current = r(e, {
                          visualState: t,
                          parent: i,
                          props: n,
                          presenceContext: h,
                          blockInitialAnimation: !!h && !1 === h.initial,
                          reducedMotionConfig: m,
                        }));
                    let y = g.current;
                    (0, o.useInsertionEffect)(() => {
                      y && y.update(n, h);
                    });
                    let v = (0, o.useRef)(
                      !!(n[f.M] && !window.HandoffComplete)
                    );
                    return (
                      (0, l.L)(() => {
                        y &&
                          (d.postRender(y.render),
                          v.current &&
                            y.animationState &&
                            y.animationState.animateChanges());
                      }),
                      (0, o.useEffect)(() => {
                        y &&
                          (y.updateFeatures(),
                          !v.current &&
                            y.animationState &&
                            y.animationState.animateChanges(),
                          v.current &&
                            ((v.current = !1), (window.HandoffComplete = !0)));
                      }),
                      y
                    );
                  })(p, R, S, t);
                  let n = (0, o.useContext)(w),
                    r = (0, o.useContext)(c.u).strict;
                  _.visualElement &&
                    (A = _.visualElement.loadFeatures(S, r, e, n));
                }
                return (0, i.jsxs)(u.Provider, {
                  value: _,
                  children: [
                    A && _.visualElement
                      ? (0, i.jsx)(A, { visualElement: _.visualElement, ...S })
                      : null,
                    n(
                      p,
                      v,
                      ((C = _.visualElement),
                      (0, o.useCallback)(
                        (e) => {
                          e && R.mount && R.mount(e),
                            C && (e ? C.mount(e) : C.unmount()),
                            E &&
                              ("function" == typeof E
                                ? E(e)
                                : (0, h.I)(E) && (E.current = e));
                        },
                        [C]
                      )),
                      R,
                      M,
                      _.visualElement
                    ),
                  ],
                });
              });
              return (C[E] = p), C;
            })(e(t, n));
          }
          if ("undefined" == typeof Proxy) return t;
          let n = new Map();
          return new Proxy(t, {
            get: (e, r) => (n.has(r) || n.set(r, t(r)), n.get(r)),
          });
        })(function (e, { forwardMotionProps: t = !1 }, n, r) {
          return {
            ...((0, C.q)(e) ? B : N),
            preloadedFeatures: n,
            useRender: (function (e = !1) {
              return (t, n, r, { latestValues: i }, a) => {
                let u = (
                    (0, C.q)(t)
                      ? function (e, t, n, r) {
                          let i = (0, o.useMemo)(() => {
                            let n = O();
                            return (
                              (0, P.i)(
                                n,
                                t,
                                { enableHardwareAcceleration: !1 },
                                (0, T.a)(r),
                                e.transformTemplate
                              ),
                              { ...n.attrs, style: { ...n.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            R(t, e.style, e), (i.style = { ...t, ...i.style });
                          }
                          return i;
                        }
                      : function (e, t, n) {
                          let r = {},
                            i = (function (e, t, n) {
                              let r = e.style || {},
                                i = {};
                              return (
                                R(i, r, e),
                                Object.assign(
                                  i,
                                  (function ({ transformTemplate: e }, t, n) {
                                    return (0, o.useMemo)(() => {
                                      let r = _();
                                      return (
                                        (0, M.r)(
                                          r,
                                          t,
                                          { enableHardwareAcceleration: !n },
                                          e
                                        ),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [t]);
                                  })(e, t, n)
                                ),
                                i
                              );
                            })(e, t, n);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((r.draggable = !1),
                              (i.userSelect =
                                i.WebkitUserSelect =
                                i.WebkitTouchCallout =
                                  "none"),
                              (i.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = i),
                            r
                          );
                        }
                  )(n, i, a, t),
                  s = (function (e, t, n) {
                    let r = {};
                    for (let i in e)
                      ("values" !== i || "object" != typeof e.values) &&
                        (j(i) ||
                          (!0 === n && L(i)) ||
                          (!t && !L(i)) ||
                          (e.draggable && i.startsWith("onDrag"))) &&
                        (r[i] = e[i]);
                    return r;
                  })(n, "string" == typeof t, e),
                  l = t !== o.Fragment ? { ...s, ...u, ref: r } : {},
                  { children: c } = n,
                  f = (0, o.useMemo)(() => ((0, S.i)(c) ? c.get() : c), [c]);
                return (0, o.createElement)(t, { ...l, children: f });
              };
            })(t),
            createVisualElement: r,
            Component: e,
          };
        });
    },
    26654: function (e, t, n) {
      n.d(t, {
        D: function () {
          return r;
        },
      });
      let r = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    52364: function (e, t, n) {
      n.d(t, {
        f: function () {
          return i;
        },
        t: function () {
          return a;
        },
      });
      let r = (e) => (t) => "string" == typeof t && t.startsWith(e),
        i = r("--"),
        o = r("var(--"),
        a = (e) => !!o(e) && u.test(e.split("/*")[0].trim()),
        u =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    83207: function (e, t, n) {
      n.d(t, {
        q: function () {
          return i;
        },
      });
      let r = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function i(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (r.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
    },
    9502: function (e, t, n) {
      n.d(t, {
        j: function () {
          return a;
        },
      });
      var r = n(86412),
        i = n(85081);
      let o = { ...r.Rx, transform: Math.round },
        a = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          size: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          rotate: i.RW,
          rotateX: i.RW,
          rotateY: i.RW,
          rotateZ: i.RW,
          scale: r.bA,
          scaleX: r.bA,
          scaleY: r.bA,
          scaleZ: r.bA,
          skew: i.RW,
          skewX: i.RW,
          skewY: i.RW,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: r.Fq,
          originX: i.$C,
          originY: i.$C,
          originZ: i.px,
          zIndex: o,
          backgroundPositionX: i.px,
          backgroundPositionY: i.px,
          fillOpacity: r.Fq,
          strokeOpacity: r.Fq,
          numOctaves: o,
        };
    },
    8953: function (e, t, n) {
      n.d(t, {
        r: function () {
          return l;
        },
      });
      var r = n(3501);
      let i = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        o = r._.length;
      var a = n(52364);
      let u = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var s = n(9502);
      function l(e, t, n, l) {
        let { style: c, vars: f, transform: d, transformOrigin: p } = e,
          h = !1,
          m = !1,
          g = !0;
        for (let e in t) {
          let n = t[e];
          if ((0, a.f)(e)) {
            f[e] = n;
            continue;
          }
          let i = s.j[e],
            o = u(n, i);
          if (r.G.has(e)) {
            if (((h = !0), (d[e] = o), !g)) continue;
            n !== (i.default || 0) && (g = !1);
          } else e.startsWith("origin") ? ((m = !0), (p[e] = o)) : (c[e] = o);
        }
        if (
          (!t.transform &&
            (h || l
              ? (c.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: t = !0,
                    allowTransformNone: n = !0,
                  },
                  a,
                  u
                ) {
                  let s = "";
                  for (let t = 0; t < o; t++) {
                    let n = r._[t];
                    if (void 0 !== e[n]) {
                      let t = i[n] || n;
                      s += `${t}(${e[n]}) `;
                    }
                  }
                  return (
                    t && !e.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    u ? (s = u(e, a ? "" : s)) : n && a && (s = "none"),
                    s
                  );
                })(e.transform, n, g, l))
              : c.transform && (c.transform = "none")),
          m)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = p;
          c.transformOrigin = `${e} ${t} ${n}`;
        }
      }
    },
    99455: function (e, t, n) {
      n.d(t, {
        N: function () {
          return r;
        },
      });
      function r(e, { style: t, vars: n }, r, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(r)),
        n))
          e.style.setProperty(o, n[o]);
      }
    },
    65219: function (e, t, n) {
      n.d(t, {
        U: function () {
          return o;
        },
      });
      var r = n(42746),
        i = n(81507);
      function o(e, t, n) {
        var o;
        let { style: a } = e,
          u = {};
        for (let s in a)
          ((0, i.i)(a[s]) ||
            (t.style && (0, i.i)(t.style[s])) ||
            (0, r.j)(s, e) ||
            (null === (o = null == n ? void 0 : n.getValue(s)) || void 0 === o
              ? void 0
              : o.liveStyle) !== void 0) &&
            (u[s] = a[s]);
        return u;
      }
    },
    3501: function (e, t, n) {
      n.d(t, {
        G: function () {
          return i;
        },
        _: function () {
          return r;
        },
      });
      let r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        i = new Set(r);
    },
    42018: function (e, t, n) {
      n.d(t, {
        i: function () {
          return s;
        },
      });
      var r = n(8953),
        i = n(85081);
      function o(e, t, n) {
        return "string" == typeof e ? e : i.px.transform(t + n * e);
      }
      let a = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        u = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function s(
        e,
        {
          attrX: t,
          attrY: n,
          attrScale: s,
          originX: l,
          originY: c,
          pathLength: f,
          pathSpacing: d = 1,
          pathOffset: p = 0,
          ...h
        },
        m,
        g,
        y
      ) {
        if (((0, r.r)(e, h, m, y), g)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: v, style: x, dimensions: b } = e;
        v.transform && (b && (x.transform = v.transform), delete v.transform),
          b &&
            (void 0 !== l || void 0 !== c || x.transform) &&
            (x.transformOrigin = (function (e, t, n) {
              let r = o(t, e.x, e.width),
                i = o(n, e.y, e.height);
              return `${r} ${i}`;
            })(b, void 0 !== l ? l : 0.5, void 0 !== c ? c : 0.5)),
          void 0 !== t && (v.x = t),
          void 0 !== n && (v.y = n),
          void 0 !== s && (v.scale = s),
          void 0 !== f &&
            (function (e, t, n = 1, r = 0, o = !0) {
              e.pathLength = 1;
              let s = o ? a : u;
              e[s.offset] = i.px.transform(-r);
              let l = i.px.transform(t),
                c = i.px.transform(n);
              e[s.array] = `${l} ${c}`;
            })(v, f, d, p, !1);
      }
    },
    6614: function (e, t, n) {
      n.d(t, {
        s: function () {
          return r;
        },
      });
      let r = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    77305: function (e, t, n) {
      n.d(t, {
        a: function () {
          return r;
        },
      });
      let r = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    },
    18435: function (e, t, n) {
      n.d(t, {
        K: function () {
          return a;
        },
      });
      var r = n(26654),
        i = n(99455),
        o = n(6614);
      function a(e, t, n, a) {
        for (let n in ((0, i.N)(e, t, void 0, a), t.attrs))
          e.setAttribute(o.s.has(n) ? n : (0, r.D)(n), t.attrs[n]);
      }
    },
    21319: function (e, t, n) {
      n.d(t, {
        U: function () {
          return a;
        },
      });
      var r = n(81507),
        i = n(65219),
        o = n(3501);
      function a(e, t, n) {
        let a = (0, i.U)(e, t, n);
        for (let n in e)
          ((0, r.i)(e[n]) || (0, r.i)(t[n])) &&
            (a[
              -1 !== o._.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = e[n]);
        return a;
      }
    },
    81392: function (e, t, n) {
      n.d(t, {
        G: function () {
          return a;
        },
        M: function () {
          return u;
        },
      });
      var r = n(34518),
        i = n(26048),
        o = n(38665);
      function a(e) {
        return (0, r.H)(e.animate) || o.V.some((t) => (0, i.$)(e[t]));
      }
      function u(e) {
        return !!(a(e) || e.variants);
      }
    },
    26048: function (e, t, n) {
      n.d(t, {
        $: function () {
          return r;
        },
      });
      function r(e) {
        return "string" == typeof e || Array.isArray(e);
      }
    },
    13542: function (e, t, n) {
      function r(e) {
        let t = [{}, {}];
        return (
          null == e ||
            e.values.forEach((e, n) => {
              (t[0][n] = e.get()), (t[1][n] = e.getVelocity());
            }),
          t
        );
      }
      function i(e, t, n, i) {
        if ("function" == typeof t) {
          let [o, a] = r(i);
          t = t(void 0 !== n ? n : e.custom, o, a);
        }
        if (
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [o, a] = r(i);
          t = t(void 0 !== n ? n : e.custom, o, a);
        }
        return t;
      }
      n.d(t, {
        o: function () {
          return i;
        },
      });
    },
    38665: function (e, t, n) {
      n.d(t, {
        V: function () {
          return i;
        },
        e: function () {
          return r;
        },
      });
      let r = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        i = ["initial", ...r];
    },
    8892: function (e, t, n) {
      n.d(t, {
        c: function () {
          return r;
        },
      });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    36015: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r;
        },
      });
      let r = (e, t, n) => (n > t ? t : n < e ? e : n);
    },
    96814: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var r = n(72764);
      let i = r.Z,
        o = r.Z;
    },
    26908: function (e, t, n) {
      n.d(t, {
        j: function () {
          return r;
        },
      });
      let r = "undefined" != typeof document;
    },
    26439: function (e, t, n) {
      n.d(t, {
        I: function () {
          return r;
        },
      });
      function r(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
    },
    72764: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (e) => e;
    },
    8121: function (e, t, n) {
      n.d(t, {
        Y: function () {
          return o;
        },
        p: function () {
          return i;
        },
      });
      var r = n(23870);
      let i = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        o = (e) => ((0, r.C)(e) ? e[e.length - 1] || 0 : e);
    },
    82387: function (e, t, n) {
      n.d(t, {
        h: function () {
          return i;
        },
      });
      var r = n(78411);
      function i(e) {
        let t = (0, r.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    19452: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(78411);
      let i = n(26908).j ? r.useLayoutEffect : r.useEffect;
    },
    86412: function (e, t, n) {
      n.d(t, {
        Fq: function () {
          return o;
        },
        Rx: function () {
          return i;
        },
        bA: function () {
          return a;
        },
      });
      var r = n(36015);
      let i = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        o = { ...i, transform: (e) => (0, r.u)(0, 1, e) },
        a = { ...i, default: 1 };
    },
    85081: function (e, t, n) {
      n.d(t, {
        $C: function () {
          return c;
        },
        RW: function () {
          return o;
        },
        aQ: function () {
          return a;
        },
        px: function () {
          return u;
        },
        vh: function () {
          return s;
        },
        vw: function () {
          return l;
        },
      });
      var r = n(78505);
      let i = (e) => ({
          test: (t) =>
            (0, r.HD)(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        o = i("deg"),
        a = i("%"),
        u = i("px"),
        s = i("vh"),
        l = i("vw"),
        c = {
          ...a,
          parse: (e) => a.parse(e) / 100,
          transform: (e) => a.transform(100 * e),
        };
    },
    78505: function (e, t, n) {
      n.d(t, {
        HD: function () {
          return u;
        },
        KP: function () {
          return i;
        },
        Nw: function () {
          return r;
        },
        dA: function () {
          return o;
        },
        mj: function () {
          return a;
        },
      });
      let r = (e) => Math.round(1e5 * e) / 1e5,
        i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        o =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        a =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function u(e) {
        return "string" == typeof e;
      }
    },
    81507: function (e, t, n) {
      n.d(t, {
        i: function () {
          return r;
        },
      });
      let r = (e) => !!(e && e.getVelocity);
    },
  },
]);
