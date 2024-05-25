(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4363],
  {
    43625: function (e, t, i) {
      "use strict";
      var r =
          (this && this.__assign) ||
          function () {
            return (r =
              Object.assign ||
              function (e) {
                for (var t, i = 1, r = arguments.length; i < r; i++)
                  for (var l in (t = arguments[i]))
                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, i, r) {
                void 0 === r && (r = i),
                  Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: function () {
                      return t[i];
                    },
                  });
              }
            : function (e, t, i, r) {
                void 0 === r && (r = i), (e[r] = t[i]);
              }),
        s =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        n =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var i in e)
                "default" !== i &&
                  Object.prototype.hasOwnProperty.call(e, i) &&
                  l(t, e, i);
            return s(t, e), t;
          },
        a =
          (this && this.__awaiter) ||
          function (e, t, i, r) {
            return new (i || (i = Promise))(function (l, s) {
              function n(e) {
                try {
                  o(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function a(e) {
                try {
                  o(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                var t;
                e.done
                  ? l(e.value)
                  : ((t = e.value) instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })
                    ).then(n, a);
              }
              o((r = r.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (e, t) {
            var i,
              r,
              l,
              s,
              n = {
                label: 0,
                sent: function () {
                  if (1 & l[0]) throw l[1];
                  return l[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (s = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (s[Symbol.iterator] = function () {
                  return this;
                }),
              s
            );
            function a(s) {
              return function (a) {
                return (function (s) {
                  if (i) throw TypeError("Generator is already executing.");
                  for (; n; )
                    try {
                      if (
                        ((i = 1),
                        r &&
                          (l =
                            2 & s[0]
                              ? r.return
                              : s[0]
                              ? r.throw || ((l = r.return) && l.call(r), 0)
                              : r.next) &&
                          !(l = l.call(r, s[1])).done)
                      )
                        return l;
                      switch (((r = 0), l && (s = [2 & s[0], l.value]), s[0])) {
                        case 0:
                        case 1:
                          l = s;
                          break;
                        case 4:
                          return n.label++, { value: s[1], done: !1 };
                        case 5:
                          n.label++, (r = s[1]), (s = [0]);
                          continue;
                        case 7:
                          (s = n.ops.pop()), n.trys.pop();
                          continue;
                        default:
                          if (
                            !(l = (l = n.trys).length > 0 && l[l.length - 1]) &&
                            (6 === s[0] || 2 === s[0])
                          ) {
                            n = 0;
                            continue;
                          }
                          if (
                            3 === s[0] &&
                            (!l || (s[1] > l[0] && s[1] < l[3]))
                          ) {
                            n.label = s[1];
                            break;
                          }
                          if (6 === s[0] && n.label < l[1]) {
                            (n.label = l[1]), (l = s);
                            break;
                          }
                          if (l && n.label < l[2]) {
                            (n.label = l[2]), n.ops.push(s);
                            break;
                          }
                          l[2] && n.ops.pop(), n.trys.pop();
                          continue;
                      }
                      s = t.call(e, n);
                    } catch (e) {
                      (s = [6, e]), (r = 0);
                    } finally {
                      i = l = 0;
                    }
                  if (5 & s[0]) throw s[1];
                  return { value: s[0] ? s[1] : void 0, done: !0 };
                })([s, a]);
              };
            }
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PayloadAdminBar = void 0);
      var d = n(i(78411)),
        c = { email: "dev@email.com", id: "12345" };
      t.PayloadAdminBar = function (e) {
        var t = e.cmsURL,
          i = void 0 === t ? "http://localhost:8000" : t,
          l = e.apiPath,
          s = void 0 === l ? "/api" : l,
          n = e.adminPath,
          u = void 0 === n ? "/admin" : n,
          p = e.collection,
          f = e.collectionLabels,
          h = e.id,
          m = e.logo,
          v = e.className,
          g = e.logoProps,
          w = e.editProps,
          y = e.createProps,
          b = e.userProps,
          S = e.logoutProps,
          E = e.divProps,
          x = e.style,
          T = e.unstyled,
          C = e.onAuthChange,
          _ = e.classNames,
          k = e.devMode,
          M = e.preview,
          L = e.onPreviewExit,
          O = e.previewProps,
          P = (0, d.useState)(),
          A = P[0],
          I = P[1];
        if (
          ((0, d.useEffect)(
            function () {
              a(void 0, void 0, void 0, function () {
                var e;
                return o(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        t.trys.push([0, 3, , 4]),
                        [
                          4,
                          fetch("" + i + s + "/users/me", {
                            method: "get",
                            credentials: "include",
                          }),
                        ]
                      );
                    case 1:
                      return [4, t.sent().json()];
                    case 2:
                      return (
                        (e = t.sent().user) ? I(e) : !0 !== k ? I(null) : I(c),
                        [3, 4]
                      );
                    case 3:
                      return console.warn(t.sent()), !0 === k && I(c), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
            },
            [i, u, s]
          ),
          (0, d.useEffect)(
            function () {
              "function" == typeof C && C(A);
            },
            [A, C]
          ),
          A)
        ) {
          var z = A.email,
            R = A.id;
          return d.default.createElement(
            "div",
            {
              className: v,
              style: r(
                r(
                  {},
                  !0 !== T
                    ? {
                        fontSize: "small",
                        position: "fixed",
                        display: "flex",
                        minWidth: "0",
                        alignItems: "center",
                        top: 0,
                        left: 0,
                        width: "100%",
                        padding: "0.5rem",
                        zIndex: 99999,
                        boxSizing: "border-box",
                        backgroundColor: "#222",
                        color: "#fff",
                        fontFamily:
                          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
                      }
                    : {}
                ),
                x
              ),
            },
            d.default.createElement(
              "a",
              r(
                { href: "" + i + u, className: null == _ ? void 0 : _.logo },
                g,
                {
                  style: r(
                    {},
                    !0 !== T
                      ? r(
                          {
                            marginRight: "10px",
                            flexShrink: 0,
                            display: "flex",
                            height: "20px",
                            textDecoration: "none",
                            color: "inherit",
                            alignItems: "center",
                          },
                          (null == g ? void 0 : g.style) ? r({}, g.style) : {}
                        )
                      : {}
                  ),
                }
              ),
              m || "Payload CMS"
            ),
            d.default.createElement(
              "a",
              r(
                {
                  href: "" + i + u + "/collections/users/" + R,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: null == _ ? void 0 : _.user,
                },
                b,
                {
                  style: r(
                    {},
                    !0 !== T
                      ? r(
                          {
                            marginRight: "10px",
                            display: "block",
                            minWidth: "50px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            textDecoration: "none",
                            whiteSpace: "nowrap",
                            color: "inherit",
                          },
                          (null == b ? void 0 : b.style) ? r({}, b.style) : {}
                        )
                      : {}
                  ),
                }
              ),
              d.default.createElement(
                "span",
                {
                  style: r(
                    {},
                    !0 !== T
                      ? {
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                        }
                      : {}
                  ),
                },
                z || "Profile"
              )
            ),
            d.default.createElement(
              "div",
              r({ className: null == _ ? void 0 : _.controls }, E, {
                style: r(
                  {},
                  !0 !== T
                    ? r(
                        {
                          display: "flex",
                          marginRight: "10px",
                          flexShrink: 1,
                          flexGrow: 1,
                          alignItems: "center",
                          justifyContent: "flex-end",
                        },
                        (null == E ? void 0 : E.style) ? r({}, E.style) : {}
                      )
                    : {}
                ),
              }),
              p &&
                h &&
                d.default.createElement(
                  "a",
                  r(
                    {
                      href: "" + i + u + "/collections/" + p + "/" + h,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: null == _ ? void 0 : _.edit,
                    },
                    w,
                    {
                      style: r(
                        { display: "block" },
                        !0 !== T
                          ? r(
                              {
                                marginRight: "10px",
                                textDecoration: "none",
                                color: "inherit",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                flexShrink: 1,
                              },
                              (null == w ? void 0 : w.style)
                                ? r({}, w.style)
                                : {}
                            )
                          : {}
                      ),
                    }
                  ),
                  d.default.createElement(
                    "span",
                    {
                      style: r(
                        {},
                        !0 !== T
                          ? {
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                            }
                          : {}
                      ),
                    },
                    "Edit " + ((null == f ? void 0 : f.singular) || "page")
                  )
                ),
              p &&
                d.default.createElement(
                  "a",
                  r(
                    {
                      href: "" + i + u + "/collections/" + p + "/create",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: null == _ ? void 0 : _.create,
                    },
                    y,
                    {
                      style: r(
                        {},
                        !0 !== T
                          ? r(
                              {
                                flexShrink: 1,
                                display: "block",
                                textDecoration: "none",
                                color: "inherit",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                              },
                              (null == y ? void 0 : y.style)
                                ? r({}, y.style)
                                : {}
                            )
                          : {}
                      ),
                    }
                  ),
                  d.default.createElement(
                    "span",
                    {
                      style: r(
                        {},
                        !0 !== T
                          ? {
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                            }
                          : {}
                      ),
                    },
                    "New " + ((null == f ? void 0 : f.singular) || "page")
                  )
                ),
              M &&
                d.default.createElement(
                  "button",
                  r(
                    { className: null == _ ? void 0 : _.preview, onClick: L },
                    O,
                    {
                      style: r(
                        {},
                        !0 !== T
                          ? r(
                              {
                                marginLeft: "10px",
                                background: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                                color: "inherit",
                                fontFamily: "inherit",
                                fontSize: "inherit",
                              },
                              (null == O ? void 0 : O.style)
                                ? r({}, O.style)
                                : {}
                            )
                          : {}
                      ),
                    }
                  ),
                  "Exit preview mode"
                )
            ),
            d.default.createElement(
              "a",
              r(
                {
                  href: "" + i + u + "/logout",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: null == _ ? void 0 : _.logout,
                },
                S,
                {
                  style: r(
                    {},
                    !0 !== T
                      ? r(
                          {
                            textDecoration: "none",
                            color: "inherit",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            display: "block",
                            flexShrink: 1,
                          },
                          (null == S ? void 0 : S.style) ? r({}, S.style) : {}
                        )
                      : {}
                  ),
                }
              ),
              d.default.createElement(
                "span",
                {
                  style: r(
                    {},
                    !0 !== T
                      ? {
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                        }
                      : {}
                  ),
                },
                "Logout"
              )
            )
          );
        }
        return null;
      };
    },
    39060: function () {},
    9334: function () {},
    91500: function () {},
    49154: function (e, t) {
      var i;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function l() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var i = arguments[t];
            i &&
              (e = s(
                e,
                (function (e) {
                  if ("string" == typeof e || "number" == typeof e) return e;
                  if ("object" != typeof e) return "";
                  if (Array.isArray(e)) return l.apply(null, e);
                  if (
                    e.toString !== Object.prototype.toString &&
                    !e.toString.toString().includes("[native code]")
                  )
                    return e.toString();
                  var t = "";
                  for (var i in e) r.call(e, i) && e[i] && (t = s(t, i));
                  return t;
                })(i)
              ));
          }
          return e;
        }
        function s(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((l.default = l), (e.exports = l))
          : void 0 !==
              (i = function () {
                return l;
              }.apply(t, [])) && (e.exports = i);
      })();
    },
    10479: function (e, t, i) {
      "use strict";
      i.d(t, {
        u: function () {
          return eC;
        },
      });
      var r = i(78411);
      let l = Math.min,
        s = Math.max,
        n = Math.round,
        a = Math.floor,
        o = (e) => ({ x: e, y: e }),
        d = { left: "right", right: "left", bottom: "top", top: "bottom" },
        c = { start: "end", end: "start" };
      function u(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split("-")[0];
      }
      function f(e) {
        return e.split("-")[1];
      }
      function h(e) {
        return "x" === e ? "y" : "x";
      }
      function m(e) {
        return "y" === e ? "height" : "width";
      }
      function v(e) {
        return ["top", "bottom"].includes(p(e)) ? "y" : "x";
      }
      function g(e) {
        return e.replace(/start|end/g, (e) => c[e]);
      }
      function w(e) {
        return e.replace(/left|right|bottom|top/g, (e) => d[e]);
      }
      function y(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function b(e) {
        let { x: t, y: i, width: r, height: l } = e;
        return {
          width: r,
          height: l,
          top: i,
          left: t,
          right: t + r,
          bottom: i + l,
          x: t,
          y: i,
        };
      }
      function S(e, t, i) {
        let r,
          { reference: l, floating: s } = e,
          n = v(t),
          a = h(v(t)),
          o = m(a),
          d = p(t),
          c = "y" === n,
          u = l.x + l.width / 2 - s.width / 2,
          g = l.y + l.height / 2 - s.height / 2,
          w = l[o] / 2 - s[o] / 2;
        switch (d) {
          case "top":
            r = { x: u, y: l.y - s.height };
            break;
          case "bottom":
            r = { x: u, y: l.y + l.height };
            break;
          case "right":
            r = { x: l.x + l.width, y: g };
            break;
          case "left":
            r = { x: l.x - s.width, y: g };
            break;
          default:
            r = { x: l.x, y: l.y };
        }
        switch (f(t)) {
          case "start":
            r[a] -= w * (i && c ? -1 : 1);
            break;
          case "end":
            r[a] += w * (i && c ? -1 : 1);
        }
        return r;
      }
      let E = async (e, t, i) => {
        let {
            placement: r = "bottom",
            strategy: l = "absolute",
            middleware: s = [],
            platform: n,
          } = i,
          a = s.filter(Boolean),
          o = await (null == n.isRTL ? void 0 : n.isRTL(t)),
          d = await n.getElementRects({
            reference: e,
            floating: t,
            strategy: l,
          }),
          { x: c, y: u } = S(d, r, o),
          p = r,
          f = {},
          h = 0;
        for (let i = 0; i < a.length; i++) {
          let { name: s, fn: m } = a[i],
            {
              x: v,
              y: g,
              data: w,
              reset: y,
            } = await m({
              x: c,
              y: u,
              initialPlacement: r,
              placement: p,
              strategy: l,
              middlewareData: f,
              rects: d,
              platform: n,
              elements: { reference: e, floating: t },
            });
          (c = null != v ? v : c),
            (u = null != g ? g : u),
            (f = { ...f, [s]: { ...f[s], ...w } }),
            y &&
              h <= 50 &&
              (h++,
              "object" == typeof y &&
                (y.placement && (p = y.placement),
                y.rects &&
                  (d =
                    !0 === y.rects
                      ? await n.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: l,
                        })
                      : y.rects),
                ({ x: c, y: u } = S(d, p, o))),
              (i = -1));
        }
        return { x: c, y: u, placement: p, strategy: l, middlewareData: f };
      };
      async function x(e, t) {
        var i;
        void 0 === t && (t = {});
        let { x: r, y: l, platform: s, rects: n, elements: a, strategy: o } = e,
          {
            boundary: d = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: p = "floating",
            altBoundary: f = !1,
            padding: h = 0,
          } = u(t, e),
          m = y(h),
          v = a[f ? ("floating" === p ? "reference" : "floating") : p],
          g = b(
            await s.getClippingRect({
              element:
                null ==
                  (i = await (null == s.isElement ? void 0 : s.isElement(v))) ||
                i
                  ? v
                  : v.contextElement ||
                    (await (null == s.getDocumentElement
                      ? void 0
                      : s.getDocumentElement(a.floating))),
              boundary: d,
              rootBoundary: c,
              strategy: o,
            })
          ),
          w =
            "floating" === p
              ? {
                  x: r,
                  y: l,
                  width: n.floating.width,
                  height: n.floating.height,
                }
              : n.reference,
          S = await (null == s.getOffsetParent
            ? void 0
            : s.getOffsetParent(a.floating)),
          E = ((await (null == s.isElement ? void 0 : s.isElement(S))) &&
            (await (null == s.getScale ? void 0 : s.getScale(S)))) || {
            x: 1,
            y: 1,
          },
          x = b(
            s.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: w,
                  offsetParent: S,
                  strategy: o,
                })
              : w
          );
        return {
          top: (g.top - x.top + m.top) / E.y,
          bottom: (x.bottom - g.bottom + m.bottom) / E.y,
          left: (g.left - x.left + m.left) / E.x,
          right: (x.right - g.right + m.right) / E.x,
        };
      }
      async function T(e, t) {
        let { placement: i, platform: r, elements: l } = e,
          s = await (null == r.isRTL ? void 0 : r.isRTL(l.floating)),
          n = p(i),
          a = f(i),
          o = "y" === v(i),
          d = ["left", "top"].includes(n) ? -1 : 1,
          c = s && o ? -1 : 1,
          h = u(t, e),
          {
            mainAxis: m,
            crossAxis: g,
            alignmentAxis: w,
          } = "number" == typeof h
            ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...h };
        return (
          a && "number" == typeof w && (g = "end" === a ? -1 * w : w),
          o ? { x: g * c, y: m * d } : { x: m * d, y: g * c }
        );
      }
      function C(e) {
        return M(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function _(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function k(e) {
        var t;
        return null ==
          (t = (M(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function M(e) {
        return e instanceof Node || e instanceof _(e).Node;
      }
      function L(e) {
        return e instanceof Element || e instanceof _(e).Element;
      }
      function O(e) {
        return e instanceof HTMLElement || e instanceof _(e).HTMLElement;
      }
      function P(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof _(e).ShadowRoot)
        );
      }
      function A(e) {
        let { overflow: t, overflowX: i, overflowY: r, display: l } = N(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + i) &&
          !["inline", "contents"].includes(l)
        );
      }
      function I(e) {
        let t = z(),
          i = N(e);
        return (
          "none" !== i.transform ||
          "none" !== i.perspective ||
          (!!i.containerType && "normal" !== i.containerType) ||
          (!t && !!i.backdropFilter && "none" !== i.backdropFilter) ||
          (!t && !!i.filter && "none" !== i.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (i.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (i.contain || "").includes(e)
          )
        );
      }
      function z() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function R(e) {
        return ["html", "body", "#document"].includes(C(e));
      }
      function N(e) {
        return _(e).getComputedStyle(e);
      }
      function D(e) {
        return L(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function $(e) {
        if ("html" === C(e)) return e;
        let t = e.assignedSlot || e.parentNode || (P(e) && e.host) || k(e);
        return P(t) ? t.host : t;
      }
      function B(e, t, i) {
        var r;
        void 0 === t && (t = []), void 0 === i && (i = !0);
        let l = (function e(t) {
            let i = $(t);
            return R(i)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : O(i) && A(i)
              ? i
              : e(i);
          })(e),
          s = l === (null == (r = e.ownerDocument) ? void 0 : r.body),
          n = _(l);
        return s
          ? t.concat(
              n,
              n.visualViewport || [],
              A(l) ? l : [],
              n.frameElement && i ? B(n.frameElement) : []
            )
          : t.concat(l, B(l, [], i));
      }
      function j(e) {
        let t = N(e),
          i = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          l = O(e),
          s = l ? e.offsetWidth : i,
          a = l ? e.offsetHeight : r,
          o = n(i) !== s || n(r) !== a;
        return o && ((i = s), (r = a)), { width: i, height: r, $: o };
      }
      function G(e) {
        return L(e) ? e : e.contextElement;
      }
      function F(e) {
        let t = G(e);
        if (!O(t)) return o(1);
        let i = t.getBoundingClientRect(),
          { width: r, height: l, $: s } = j(t),
          a = (s ? n(i.width) : i.width) / r,
          d = (s ? n(i.height) : i.height) / l;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (d && Number.isFinite(d)) || (d = 1),
          { x: a, y: d }
        );
      }
      let V = o(0);
      function H(e) {
        let t = _(e);
        return z() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : V;
      }
      function W(e, t, i, r) {
        var l;
        void 0 === t && (t = !1), void 0 === i && (i = !1);
        let s = e.getBoundingClientRect(),
          n = G(e),
          a = o(1);
        t && (r ? L(r) && (a = F(r)) : (a = F(e)));
        let d = (void 0 === (l = i) && (l = !1), r && (!l || r === _(n)) && l)
            ? H(n)
            : o(0),
          c = (s.left + d.x) / a.x,
          u = (s.top + d.y) / a.y,
          p = s.width / a.x,
          f = s.height / a.y;
        if (n) {
          let e = _(n),
            t = r && L(r) ? _(r) : r,
            i = e,
            l = i.frameElement;
          for (; l && r && t !== i; ) {
            let e = F(l),
              t = l.getBoundingClientRect(),
              r = N(l),
              s = t.left + (l.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              n = t.top + (l.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (u *= e.y),
              (p *= e.x),
              (f *= e.y),
              (c += s),
              (u += n),
              (l = (i = _(l)).frameElement);
          }
        }
        return b({ width: p, height: f, x: c, y: u });
      }
      let q = [":popover-open", ":modal"];
      function X(e) {
        return q.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function Y(e) {
        return W(k(e)).left + D(e).scrollLeft;
      }
      function U(e, t, i) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let i = _(e),
              r = k(e),
              l = i.visualViewport,
              s = r.clientWidth,
              n = r.clientHeight,
              a = 0,
              o = 0;
            if (l) {
              (s = l.width), (n = l.height);
              let e = z();
              (!e || (e && "fixed" === t)) &&
                ((a = l.offsetLeft), (o = l.offsetTop));
            }
            return { width: s, height: n, x: a, y: o };
          })(e, i);
        else if ("document" === t)
          r = (function (e) {
            let t = k(e),
              i = D(e),
              r = e.ownerDocument.body,
              l = s(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              n = s(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              a = -i.scrollLeft + Y(e),
              o = -i.scrollTop;
            return (
              "rtl" === N(r).direction &&
                (a += s(t.clientWidth, r.clientWidth) - l),
              { width: l, height: n, x: a, y: o }
            );
          })(k(e));
        else if (L(t))
          r = (function (e, t) {
            let i = W(e, !0, "fixed" === t),
              r = i.top + e.clientTop,
              l = i.left + e.clientLeft,
              s = O(e) ? F(e) : o(1),
              n = e.clientWidth * s.x;
            return {
              width: n,
              height: e.clientHeight * s.y,
              x: l * s.x,
              y: r * s.y,
            };
          })(t, i);
        else {
          let i = H(e);
          r = { ...t, x: t.x - i.x, y: t.y - i.y };
        }
        return b(r);
      }
      function K(e) {
        return "static" === N(e).position;
      }
      function Z(e, t) {
        return O(e) && "fixed" !== N(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function J(e, t) {
        let i = _(e);
        if (X(e)) return i;
        if (!O(e)) {
          let t = $(e);
          for (; t && !R(t); ) {
            if (L(t) && !K(t)) return t;
            t = $(t);
          }
          return i;
        }
        let r = Z(e, t);
        for (; r && ["table", "td", "th"].includes(C(r)) && K(r); ) r = Z(r, t);
        return r && R(r) && K(r) && !I(r)
          ? i
          : r ||
              (function (e) {
                let t = $(e);
                for (; O(t) && !R(t); ) {
                  if (I(t)) return t;
                  t = $(t);
                }
                return null;
              })(e) ||
              i;
      }
      let Q = async function (e) {
          let t = this.getOffsetParent || J,
            i = this.getDimensions,
            r = await i(e.floating);
          return {
            reference: (function (e, t, i) {
              let r = O(t),
                l = k(t),
                s = "fixed" === i,
                n = W(e, !0, s, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                d = o(0);
              if (r || (!r && !s)) {
                if ((("body" !== C(t) || A(l)) && (a = D(t)), r)) {
                  let e = W(t, !0, s, t);
                  (d.x = e.x + t.clientLeft), (d.y = e.y + t.clientTop);
                } else l && (d.x = Y(l));
              }
              return {
                x: n.left + a.scrollLeft - d.x,
                y: n.top + a.scrollTop - d.y,
                width: n.width,
                height: n.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ee = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: i, offsetParent: r, strategy: l } = e,
              s = "fixed" === l,
              n = k(r),
              a = !!t && X(t.floating);
            if (r === n || (a && s)) return i;
            let d = { scrollLeft: 0, scrollTop: 0 },
              c = o(1),
              u = o(0),
              p = O(r);
            if (
              (p || (!p && !s)) &&
              (("body" !== C(r) || A(n)) && (d = D(r)), O(r))
            ) {
              let e = W(r);
              (c = F(r)), (u.x = e.x + r.clientLeft), (u.y = e.y + r.clientTop);
            }
            return {
              width: i.width * c.x,
              height: i.height * c.y,
              x: i.x * c.x - d.scrollLeft * c.x + u.x,
              y: i.y * c.y - d.scrollTop * c.y + u.y,
            };
          },
          getDocumentElement: k,
          getClippingRect: function (e) {
            let { element: t, boundary: i, rootBoundary: r, strategy: n } = e,
              a = [
                ...("clippingAncestors" === i
                  ? X(t)
                    ? []
                    : (function (e, t) {
                        let i = t.get(e);
                        if (i) return i;
                        let r = B(e, [], !1).filter(
                            (e) => L(e) && "body" !== C(e)
                          ),
                          l = null,
                          s = "fixed" === N(e).position,
                          n = s ? $(e) : e;
                        for (; L(n) && !R(n); ) {
                          let t = N(n),
                            i = I(n);
                          i || "fixed" !== t.position || (l = null),
                            (
                              s
                                ? !i && !l
                                : (!i &&
                                    "static" === t.position &&
                                    !!l &&
                                    ["absolute", "fixed"].includes(
                                      l.position
                                    )) ||
                                  (A(n) &&
                                    !i &&
                                    (function e(t, i) {
                                      let r = $(t);
                                      return (
                                        !(r === i || !L(r) || R(r)) &&
                                        ("fixed" === N(r).position || e(r, i))
                                      );
                                    })(e, n))
                            )
                              ? (r = r.filter((e) => e !== n))
                              : (l = t),
                            (n = $(n));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(i)),
                r,
              ],
              o = a[0],
              d = a.reduce((e, i) => {
                let r = U(t, i, n);
                return (
                  (e.top = s(r.top, e.top)),
                  (e.right = l(r.right, e.right)),
                  (e.bottom = l(r.bottom, e.bottom)),
                  (e.left = s(r.left, e.left)),
                  e
                );
              }, U(t, o, n));
            return {
              width: d.right - d.left,
              height: d.bottom - d.top,
              x: d.left,
              y: d.top,
            };
          },
          getOffsetParent: J,
          getElementRects: Q,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: i } = j(e);
            return { width: t, height: i };
          },
          getScale: F,
          isElement: L,
          isRTL: function (e) {
            return "rtl" === N(e).direction;
          },
        },
        et = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                var i, r;
                let { x: l, y: s, placement: n, middlewareData: a } = t,
                  o = await T(t, e);
                return n === (null == (i = a.offset) ? void 0 : i.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : { x: l + o.x, y: s + o.y, data: { ...o, placement: n } };
              },
            }
          );
        },
        ei = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: i, y: r, placement: n } = t,
                  {
                    mainAxis: a = !0,
                    crossAxis: o = !1,
                    limiter: d = {
                      fn: (e) => {
                        let { x: t, y: i } = e;
                        return { x: t, y: i };
                      },
                    },
                    ...c
                  } = u(e, t),
                  f = { x: i, y: r },
                  m = await x(t, c),
                  g = v(p(n)),
                  w = h(g),
                  y = f[w],
                  b = f[g];
                if (a) {
                  let e = "y" === w ? "top" : "left",
                    t = "y" === w ? "bottom" : "right",
                    i = y + m[e],
                    r = y - m[t];
                  y = s(i, l(y, r));
                }
                if (o) {
                  let e = "y" === g ? "top" : "left",
                    t = "y" === g ? "bottom" : "right",
                    i = b + m[e],
                    r = b - m[t];
                  b = s(i, l(b, r));
                }
                let S = d.fn({ ...t, [w]: y, [g]: b });
                return { ...S, data: { x: S.x - i, y: S.y - r } };
              },
            }
          );
        },
        er = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var i, r, l, s, n;
                let {
                    placement: a,
                    middlewareData: o,
                    rects: d,
                    initialPlacement: c,
                    platform: y,
                    elements: b,
                  } = t,
                  {
                    mainAxis: S = !0,
                    crossAxis: E = !0,
                    fallbackPlacements: T,
                    fallbackStrategy: C = "bestFit",
                    fallbackAxisSideDirection: _ = "none",
                    flipAlignment: k = !0,
                    ...M
                  } = u(e, t);
                if (null != (i = o.arrow) && i.alignmentOffset) return {};
                let L = p(a),
                  O = p(c) === c,
                  P = await (null == y.isRTL ? void 0 : y.isRTL(b.floating)),
                  A =
                    T ||
                    (O || !k
                      ? [w(c)]
                      : (function (e) {
                          let t = w(e);
                          return [g(e), t, g(t)];
                        })(c));
                T ||
                  "none" === _ ||
                  A.push(
                    ...(function (e, t, i, r) {
                      let l = f(e),
                        s = (function (e, t, i) {
                          let r = ["left", "right"],
                            l = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (i) return t ? l : r;
                              return t ? r : l;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(p(e), "start" === i, r);
                      return (
                        l &&
                          ((s = s.map((e) => e + "-" + l)),
                          t && (s = s.concat(s.map(g)))),
                        s
                      );
                    })(c, k, _, P)
                  );
                let I = [c, ...A],
                  z = await x(t, M),
                  R = [],
                  N = (null == (r = o.flip) ? void 0 : r.overflows) || [];
                if ((S && R.push(z[L]), E)) {
                  let e = (function (e, t, i) {
                    void 0 === i && (i = !1);
                    let r = f(e),
                      l = h(v(e)),
                      s = m(l),
                      n =
                        "x" === l
                          ? r === (i ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                          ? "bottom"
                          : "top";
                    return (
                      t.reference[s] > t.floating[s] && (n = w(n)), [n, w(n)]
                    );
                  })(a, d, P);
                  R.push(z[e[0]], z[e[1]]);
                }
                if (
                  ((N = [...N, { placement: a, overflows: R }]),
                  !R.every((e) => e <= 0))
                ) {
                  let e = ((null == (l = o.flip) ? void 0 : l.index) || 0) + 1,
                    t = I[e];
                  if (t)
                    return {
                      data: { index: e, overflows: N },
                      reset: { placement: t },
                    };
                  let i =
                    null ==
                    (s = N.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : s.placement;
                  if (!i)
                    switch (C) {
                      case "bestFit": {
                        let e =
                          null ==
                          (n = N.map((e) => [
                            e.placement,
                            e.overflows
                              .filter((e) => e > 0)
                              .reduce((e, t) => e + t, 0),
                          ]).sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : n[0];
                        e && (i = e);
                        break;
                      }
                      case "initialPlacement":
                        i = c;
                    }
                  if (a !== i) return { reset: { placement: i } };
                }
                return {};
              },
            }
          );
        },
        el = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: i,
                y: r,
                placement: n,
                rects: a,
                platform: o,
                elements: d,
                middlewareData: c,
              } = t,
              { element: p, padding: g = 0 } = u(e, t) || {};
            if (null == p) return {};
            let w = y(g),
              b = { x: i, y: r },
              S = h(v(n)),
              E = m(S),
              x = await o.getDimensions(p),
              T = "y" === S,
              C = T ? "clientHeight" : "clientWidth",
              _ = a.reference[E] + a.reference[S] - b[S] - a.floating[E],
              k = b[S] - a.reference[S],
              M = await (null == o.getOffsetParent
                ? void 0
                : o.getOffsetParent(p)),
              L = M ? M[C] : 0;
            (L && (await (null == o.isElement ? void 0 : o.isElement(M)))) ||
              (L = d.floating[C] || a.floating[E]);
            let O = L / 2 - x[E] / 2 - 1,
              P = l(w[T ? "top" : "left"], O),
              A = l(w[T ? "bottom" : "right"], O),
              I = L - x[E] - A,
              z = L / 2 - x[E] / 2 + (_ / 2 - k / 2),
              R = s(P, l(z, I)),
              N =
                !c.arrow &&
                null != f(n) &&
                z !== R &&
                a.reference[E] / 2 - (z < P ? P : A) - x[E] / 2 < 0,
              D = N ? (z < P ? z - P : z - I) : 0;
            return {
              [S]: b[S] + D,
              data: {
                [S]: R,
                centerOffset: z - R - D,
                ...(N && { alignmentOffset: D }),
              },
              reset: N,
            };
          },
        }),
        es = (e, t, i) => {
          let r = new Map(),
            l = { platform: ee, ...i },
            s = { ...l.platform, _c: r };
          return E(e, t, { ...l, platform: s });
        };
      var en = i(49154),
        ea = i(32608);
      /*
       * React Tooltip
       * {@link https://github.com/ReactTooltip/react-tooltip}
       * @copyright ReactTooltip Team
       * @license MIT
       */ let eo = { core: !1, base: !1 };
      function ed({
        css: e,
        id: t = "react-tooltip-base-styles",
        type: i = "base",
        ref: r,
      }) {
        var l, s;
        if (
          !e ||
          "undefined" == typeof document ||
          eo[i] ||
          ("core" === i &&
            void 0 !== ea &&
            (null === (l = null == ea ? void 0 : ea.env) || void 0 === l
              ? void 0
              : l.REACT_TOOLTIP_DISABLE_CORE_STYLES)) ||
          ("base" !== i &&
            void 0 !== ea &&
            (null === (s = null == ea ? void 0 : ea.env) || void 0 === s
              ? void 0
              : s.REACT_TOOLTIP_DISABLE_BASE_STYLES))
        )
          return;
        "core" === i && (t = "react-tooltip-core-styles"), r || (r = {});
        let { insertAt: n } = r;
        if (document.getElementById(t))
          return void console.warn(
            `[react-tooltip] Element with id '${t}' already exists. Call \`removeStyle()\` first`
          );
        let a = document.head || document.getElementsByTagName("head")[0],
          o = document.createElement("style");
        (o.id = t),
          (o.type = "text/css"),
          "top" === n && a.firstChild
            ? a.insertBefore(o, a.firstChild)
            : a.appendChild(o),
          o.styleSheet
            ? (o.styleSheet.cssText = e)
            : o.appendChild(document.createTextNode(e)),
          (eo[i] = !0);
      }
      let ec = async ({
          elementReference: e = null,
          tooltipReference: t = null,
          tooltipArrowReference: i = null,
          place: r = "top",
          offset: l = 10,
          strategy: s = "absolute",
          middlewares: n = [
            et(Number(l)),
            er({ fallbackAxisSideDirection: "start" }),
            ei({ padding: 5 }),
          ],
          border: a,
        }) =>
          e && null !== t
            ? i
              ? (n.push(el({ element: i, padding: 5 })),
                es(e, t, { placement: r, strategy: s, middleware: n }).then(
                  ({ x: e, y: t, placement: i, middlewareData: r }) => {
                    var l, s;
                    let n = { left: `${e}px`, top: `${t}px`, border: a },
                      { x: o, y: d } =
                        null !== (l = r.arrow) && void 0 !== l
                          ? l
                          : { x: 0, y: 0 },
                      c =
                        null !==
                          (s = {
                            top: "bottom",
                            right: "left",
                            bottom: "top",
                            left: "right",
                          }[i.split("-")[0]]) && void 0 !== s
                          ? s
                          : "bottom",
                      u = 0;
                    if (a) {
                      let e = `${a}`.match(/(\d+)px/);
                      u = (null == e ? void 0 : e[1]) ? Number(e[1]) : 1;
                    }
                    return {
                      tooltipStyles: n,
                      tooltipArrowStyles: {
                        left: null != o ? `${o}px` : "",
                        top: null != d ? `${d}px` : "",
                        right: "",
                        bottom: "",
                        ...(a && { borderBottom: a, borderRight: a }),
                        [c]: `-${4 + u}px`,
                      },
                      place: i,
                    };
                  }
                ))
              : es(e, t, {
                  placement: "bottom",
                  strategy: s,
                  middleware: n,
                }).then(({ x: e, y: t, placement: i }) => ({
                  tooltipStyles: { left: `${e}px`, top: `${t}px` },
                  tooltipArrowStyles: {},
                  place: i,
                }))
            : { tooltipStyles: {}, tooltipArrowStyles: {}, place: r },
        eu = (e, t) =>
          !("CSS" in window && "supports" in window.CSS) ||
          window.CSS.supports(e, t),
        ep = (e, t, i) => {
          let r = null,
            l = function (...l) {
              let s = () => {
                (r = null), i || e.apply(this, l);
              };
              i && !r && (e.apply(this, l), (r = setTimeout(s, t))),
                i || (r && clearTimeout(r), (r = setTimeout(s, t)));
            };
          return (
            (l.cancel = () => {
              r && (clearTimeout(r), (r = null));
            }),
            l
          );
        },
        ef = (e) => null !== e && !Array.isArray(e) && "object" == typeof e,
        eh = (e, t) => {
          if (e === t) return !0;
          if (Array.isArray(e) && Array.isArray(t))
            return e.length === t.length && e.every((e, i) => eh(e, t[i]));
          if (Array.isArray(e) !== Array.isArray(t)) return !1;
          if (!ef(e) || !ef(t)) return e === t;
          let i = Object.keys(e),
            r = Object.keys(t);
          return i.length === r.length && i.every((i) => eh(e[i], t[i]));
        },
        em = (e) => {
          if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1;
          let t = getComputedStyle(e);
          return ["overflow", "overflow-x", "overflow-y"].some((e) => {
            let i = t.getPropertyValue(e);
            return "auto" === i || "scroll" === i;
          });
        },
        ev = (e) => {
          if (!e) return null;
          let t = e.parentElement;
          for (; t; ) {
            if (em(t)) return t;
            t = t.parentElement;
          }
          return document.scrollingElement || document.documentElement;
        },
        eg = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        ew = {
          anchorRefs: new Set(),
          activeAnchor: { current: null },
          attach: () => {},
          detach: () => {},
          setActiveAnchor: () => {},
        },
        ey = (0, r.createContext)({ getTooltipData: () => ew });
      function eb(e = "DEFAULT_TOOLTIP_ID") {
        return (0, r.useContext)(ey).getTooltipData(e);
      }
      var eS = {
          tooltip: "core-styles-module_tooltip__3vRRp",
          fixed: "core-styles-module_fixed__pcSol",
          arrow: "core-styles-module_arrow__cvMwQ",
          noArrow: "core-styles-module_noArrow__xock6",
          clickable: "core-styles-module_clickable__ZuTTB",
          show: "core-styles-module_show__Nt9eE",
          closing: "core-styles-module_closing__sGnxF",
        },
        eE = {
          tooltip: "styles-module_tooltip__mnnfp",
          arrow: "styles-module_arrow__K0L3T",
          dark: "styles-module_dark__xNqje",
          light: "styles-module_light__Z6W-X",
          success: "styles-module_success__A2AKt",
          warning: "styles-module_warning__SCK0X",
          error: "styles-module_error__JvumD",
          info: "styles-module_info__BWdHW",
        };
      let ex = ({
          forwardRef: e,
          id: t,
          className: i,
          classNameArrow: n,
          variant: o = "dark",
          anchorId: d,
          anchorSelect: c,
          place: u = "top",
          offset: p = 10,
          events: f = ["hover"],
          openOnClick: h = !1,
          positionStrategy: m = "absolute",
          middlewares: v,
          wrapper: g,
          delayShow: w = 0,
          delayHide: y = 0,
          float: b = !1,
          hidden: S = !1,
          noArrow: E = !1,
          clickable: x = !1,
          closeOnEsc: T = !1,
          closeOnScroll: C = !1,
          closeOnResize: _ = !1,
          openEvents: M,
          closeEvents: L,
          globalCloseEvents: O,
          imperativeModeOnly: P,
          style: A,
          position: I,
          afterShow: z,
          afterHide: R,
          content: N,
          contentWrapperRef: D,
          isOpen: $,
          defaultIsOpen: j = !1,
          setIsOpen: F,
          activeAnchor: V,
          setActiveAnchor: H,
          border: q,
          opacity: X,
          arrowColor: Y,
          role: U = "tooltip",
        }) => {
          var K;
          let Z = (0, r.useRef)(null),
            J = (0, r.useRef)(null),
            Q = (0, r.useRef)(null),
            ee = (0, r.useRef)(null),
            et = (0, r.useRef)(null),
            [ei, er] = (0, r.useState)({
              tooltipStyles: {},
              tooltipArrowStyles: {},
              place: u,
            }),
            [el, es] = (0, r.useState)(!1),
            [ea, eo] = (0, r.useState)(!1),
            [ed, eu] = (0, r.useState)(null),
            ef = (0, r.useRef)(!1),
            em = (0, r.useRef)(null),
            { anchorRefs: ew, setActiveAnchor: ey } = eb(t),
            ex = (0, r.useRef)(!1),
            [eT, eC] = (0, r.useState)([]),
            e_ = (0, r.useRef)(!1),
            ek = h || f.includes("click"),
            eM =
              ek ||
              (null == M ? void 0 : M.click) ||
              (null == M ? void 0 : M.dblclick) ||
              (null == M ? void 0 : M.mousedown),
            eL = M
              ? { ...M }
              : {
                  mouseenter: !0,
                  focus: !0,
                  click: !1,
                  dblclick: !1,
                  mousedown: !1,
                };
          !M &&
            ek &&
            Object.assign(eL, { mouseenter: !1, focus: !1, click: !0 });
          let eO = L
            ? { ...L }
            : {
                mouseleave: !0,
                blur: !0,
                click: !1,
                dblclick: !1,
                mouseup: !1,
              };
          !L && ek && Object.assign(eO, { mouseleave: !1, blur: !1 });
          let eP = O
            ? { ...O }
            : {
                escape: T || !1,
                scroll: C || !1,
                resize: _ || !1,
                clickOutsideAnchor: eM || !1,
              };
          P &&
            (Object.assign(eL, {
              mouseenter: !1,
              focus: !1,
              click: !1,
              dblclick: !1,
              mousedown: !1,
            }),
            Object.assign(eO, {
              mouseleave: !1,
              blur: !1,
              click: !1,
              dblclick: !1,
              mouseup: !1,
            }),
            Object.assign(eP, {
              escape: !1,
              scroll: !1,
              resize: !1,
              clickOutsideAnchor: !1,
            })),
            eg(
              () => (
                (e_.current = !0),
                () => {
                  e_.current = !1;
                }
              ),
              []
            );
          let eA = (e) => {
            e_.current &&
              (e && eo(!0),
              setTimeout(() => {
                e_.current && (null == F || F(e), void 0 === $ && es(e));
              }, 10));
          };
          (0, r.useEffect)(() => {
            if (void 0 === $) return () => null;
            $ && eo(!0);
            let e = setTimeout(() => {
              es($);
            }, 10);
            return () => {
              clearTimeout(e);
            };
          }, [$]),
            (0, r.useEffect)(() => {
              if (el !== ef.current) {
                if (
                  (et.current && clearTimeout(et.current),
                  (ef.current = el),
                  el)
                )
                  null == z || z();
                else {
                  let e = ((e) => {
                    let t = e.match(/^([\d.]+)(ms|s)$/);
                    if (!t) return 0;
                    let [, i, r] = t;
                    return Number(i) * ("ms" === r ? 1 : 1e3);
                  })(
                    getComputedStyle(document.body).getPropertyValue(
                      "--rt-transition-show-delay"
                    )
                  );
                  et.current = setTimeout(() => {
                    eo(!1), eu(null), null == R || R();
                  }, e + 25);
                }
              }
            }, [el]);
          let eI = (e) => {
              er((t) => (eh(t, e) ? t : e));
            },
            ez = (e = w) => {
              Q.current && clearTimeout(Q.current),
                ea
                  ? eA(!0)
                  : (Q.current = setTimeout(() => {
                      eA(!0);
                    }, e));
            },
            eR = (e = y) => {
              ee.current && clearTimeout(ee.current),
                (ee.current = setTimeout(() => {
                  ex.current || eA(!1);
                }, e));
            },
            eN = (e) => {
              var t;
              if (!e) return;
              let i =
                null !== (t = e.currentTarget) && void 0 !== t ? t : e.target;
              if (!(null == i ? void 0 : i.isConnected))
                return H(null), void ey({ current: null });
              w ? ez() : eA(!0),
                H(i),
                ey({ current: i }),
                ee.current && clearTimeout(ee.current);
            },
            eD = () => {
              x ? eR(y || 100) : y ? eR() : eA(!1),
                Q.current && clearTimeout(Q.current);
            },
            e$ = ({ x: e, y: t }) => {
              var i;
              ec({
                place:
                  null !== (i = null == ed ? void 0 : ed.place) && void 0 !== i
                    ? i
                    : u,
                offset: p,
                elementReference: {
                  getBoundingClientRect: () => ({
                    x: e,
                    y: t,
                    width: 0,
                    height: 0,
                    top: t,
                    left: e,
                    right: e,
                    bottom: t,
                  }),
                },
                tooltipReference: Z.current,
                tooltipArrowReference: J.current,
                strategy: m,
                middlewares: v,
                border: q,
              }).then((e) => {
                eI(e);
              });
            },
            eB = (e) => {
              if (!e) return;
              let t = { x: e.clientX, y: e.clientY };
              e$(t), (em.current = t);
            },
            ej = (e) => {
              var t;
              if (!el) return;
              let i = e.target;
              i.isConnected &&
                (null === (t = Z.current) || void 0 === t || !t.contains(i)) &&
                ([document.querySelector(`[id='${d}']`), ...eT].some((e) =>
                  null == e ? void 0 : e.contains(i)
                ) ||
                  (eA(!1), Q.current && clearTimeout(Q.current)));
            },
            eG = ep(eN, 50, !0),
            eF = ep(eD, 50, !0),
            eV = (e) => {
              eF.cancel(), eG(e);
            },
            eH = () => {
              eG.cancel(), eF();
            },
            eW = (0, r.useCallback)(() => {
              var e, t;
              let i =
                null !== (e = null == ed ? void 0 : ed.position) && void 0 !== e
                  ? e
                  : I;
              i
                ? e$(i)
                : b
                ? em.current && e$(em.current)
                : (null == V ? void 0 : V.isConnected) &&
                  ec({
                    place:
                      null !== (t = null == ed ? void 0 : ed.place) &&
                      void 0 !== t
                        ? t
                        : u,
                    offset: p,
                    elementReference: V,
                    tooltipReference: Z.current,
                    tooltipArrowReference: J.current,
                    strategy: m,
                    middlewares: v,
                    border: q,
                  }).then((e) => {
                    e_.current && eI(e);
                  });
            }, [
              el,
              V,
              N,
              A,
              u,
              null == ed ? void 0 : ed.place,
              p,
              m,
              I,
              null == ed ? void 0 : ed.position,
              b,
            ]);
          (0, r.useEffect)(() => {
            var e, t;
            let i = new Set(ew);
            eT.forEach((e) => {
              i.add({ current: e });
            });
            let r = document.querySelector(`[id='${d}']`);
            r && i.add({ current: r });
            let n = () => {
                eA(!1);
              },
              o = ev(V),
              c = ev(Z.current);
            eP.scroll &&
              (window.addEventListener("scroll", n),
              null == o || o.addEventListener("scroll", n),
              null == c || c.addEventListener("scroll", n));
            let u = null;
            eP.resize
              ? window.addEventListener("resize", n)
              : V &&
                Z.current &&
                (u = (function (e, t, i, r) {
                  let n;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: o = !0,
                      ancestorResize: d = !0,
                      elementResize: c = "function" == typeof ResizeObserver,
                      layoutShift: u = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: p = !1,
                    } = r,
                    f = G(e),
                    h = o || d ? [...(f ? B(f) : []), ...B(t)] : [];
                  h.forEach((e) => {
                    o && e.addEventListener("scroll", i, { passive: !0 }),
                      d && e.addEventListener("resize", i);
                  });
                  let m =
                      f && u
                        ? (function (e, t) {
                            let i,
                              r = null,
                              n = k(e);
                            function o() {
                              var e;
                              clearTimeout(i),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              (function d(c, u) {
                                void 0 === c && (c = !1),
                                  void 0 === u && (u = 1),
                                  o();
                                let {
                                  left: p,
                                  top: f,
                                  width: h,
                                  height: m,
                                } = e.getBoundingClientRect();
                                if ((c || t(), !h || !m)) return;
                                let v = a(f),
                                  g = a(n.clientWidth - (p + h)),
                                  w = {
                                    rootMargin:
                                      -v +
                                      "px " +
                                      -g +
                                      "px " +
                                      -a(n.clientHeight - (f + m)) +
                                      "px " +
                                      -a(p) +
                                      "px",
                                    threshold: s(0, l(1, u)) || 1,
                                  },
                                  y = !0;
                                function b(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== u) {
                                    if (!y) return d();
                                    t
                                      ? d(!1, t)
                                      : (i = setTimeout(() => {
                                          d(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  y = !1;
                                }
                                try {
                                  r = new IntersectionObserver(b, {
                                    ...w,
                                    root: n.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(b, w);
                                }
                                r.observe(e);
                              })(!0),
                              o
                            );
                          })(f, i)
                        : null,
                    v = -1,
                    g = null;
                  c &&
                    ((g = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === f &&
                        g &&
                        (g.unobserve(t),
                        cancelAnimationFrame(v),
                        (v = requestAnimationFrame(() => {
                          var e;
                          null == (e = g) || e.observe(t);
                        }))),
                        i();
                    })),
                    f && !p && g.observe(f),
                    g.observe(t));
                  let w = p ? W(e) : null;
                  return (
                    p &&
                      (function t() {
                        let r = W(e);
                        w &&
                          (r.x !== w.x ||
                            r.y !== w.y ||
                            r.width !== w.width ||
                            r.height !== w.height) &&
                          i(),
                          (w = r),
                          (n = requestAnimationFrame(t));
                      })(),
                    i(),
                    () => {
                      var e;
                      h.forEach((e) => {
                        o && e.removeEventListener("scroll", i),
                          d && e.removeEventListener("resize", i);
                      }),
                        null == m || m(),
                        null == (e = g) || e.disconnect(),
                        (g = null),
                        p && cancelAnimationFrame(n);
                    }
                  );
                })(V, Z.current, eW, {
                  ancestorResize: !0,
                  elementResize: !0,
                  layoutShift: !0,
                }));
            let p = (e) => {
              "Escape" === e.key && eA(!1);
            };
            eP.escape && window.addEventListener("keydown", p),
              eP.clickOutsideAnchor && window.addEventListener("click", ej);
            let f = [],
              h = (e) => {
                (el && (null == e ? void 0 : e.target) === V) || eN(e);
              },
              m = (e) => {
                el && (null == e ? void 0 : e.target) === V && eD();
              },
              v = ["mouseenter", "mouseleave", "focus", "blur"],
              g = ["click", "dblclick", "mousedown", "mouseup"];
            Object.entries(eL).forEach(([e, t]) => {
              t &&
                (v.includes(e)
                  ? f.push({ event: e, listener: eV })
                  : g.includes(e) && f.push({ event: e, listener: h }));
            }),
              Object.entries(eO).forEach(([e, t]) => {
                t &&
                  (v.includes(e)
                    ? f.push({ event: e, listener: eH })
                    : g.includes(e) && f.push({ event: e, listener: m }));
              }),
              b && f.push({ event: "pointermove", listener: eB });
            let w = () => {
                ex.current = !0;
              },
              y = () => {
                (ex.current = !1), eD();
              };
            return (
              x &&
                !eM &&
                (null === (e = Z.current) ||
                  void 0 === e ||
                  e.addEventListener("mouseenter", w),
                null === (t = Z.current) ||
                  void 0 === t ||
                  t.addEventListener("mouseleave", y)),
              f.forEach(({ event: e, listener: t }) => {
                i.forEach((i) => {
                  var r;
                  null === (r = i.current) ||
                    void 0 === r ||
                    r.addEventListener(e, t);
                });
              }),
              () => {
                var e, t;
                eP.scroll &&
                  (window.removeEventListener("scroll", n),
                  null == o || o.removeEventListener("scroll", n),
                  null == c || c.removeEventListener("scroll", n)),
                  eP.resize
                    ? window.removeEventListener("resize", n)
                    : null == u || u(),
                  eP.clickOutsideAnchor &&
                    window.removeEventListener("click", ej),
                  eP.escape && window.removeEventListener("keydown", p),
                  x &&
                    !eM &&
                    (null === (e = Z.current) ||
                      void 0 === e ||
                      e.removeEventListener("mouseenter", w),
                    null === (t = Z.current) ||
                      void 0 === t ||
                      t.removeEventListener("mouseleave", y)),
                  f.forEach(({ event: e, listener: t }) => {
                    i.forEach((i) => {
                      var r;
                      null === (r = i.current) ||
                        void 0 === r ||
                        r.removeEventListener(e, t);
                    });
                  });
              }
            );
          }, [V, eW, ea, ew, eT, M, L, O, ek, w, y]),
            (0, r.useEffect)(() => {
              var e, i;
              let r =
                null !==
                  (i =
                    null !== (e = null == ed ? void 0 : ed.anchorSelect) &&
                    void 0 !== e
                      ? e
                      : c) && void 0 !== i
                  ? i
                  : "";
              !r && t && (r = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`);
              let l = new MutationObserver((e) => {
                let i = [],
                  l = [];
                e.forEach((e) => {
                  if (
                    ("attributes" === e.type &&
                      "data-tooltip-id" === e.attributeName &&
                      (e.target.getAttribute("data-tooltip-id") === t
                        ? i.push(e.target)
                        : e.oldValue === t && l.push(e.target)),
                    "childList" === e.type)
                  ) {
                    if (V) {
                      let t = [...e.removedNodes].filter(
                        (e) => 1 === e.nodeType
                      );
                      if (r)
                        try {
                          l.push(...t.filter((e) => e.matches(r))),
                            l.push(
                              ...t.flatMap((e) => [...e.querySelectorAll(r)])
                            );
                        } catch (e) {}
                      t.some((e) => {
                        var t;
                        return (
                          !!(null === (t = null == e ? void 0 : e.contains) ||
                          void 0 === t
                            ? void 0
                            : t.call(e, V)) &&
                          (eo(!1),
                          eA(!1),
                          H(null),
                          Q.current && clearTimeout(Q.current),
                          ee.current && clearTimeout(ee.current),
                          !0)
                        );
                      });
                    }
                    if (r)
                      try {
                        let t = [...e.addedNodes].filter(
                          (e) => 1 === e.nodeType
                        );
                        i.push(...t.filter((e) => e.matches(r))),
                          i.push(
                            ...t.flatMap((e) => [...e.querySelectorAll(r)])
                          );
                      } catch (e) {}
                  }
                }),
                  (i.length || l.length) &&
                    eC((e) => [...e.filter((e) => !l.includes(e)), ...i]);
              });
              return (
                l.observe(document.body, {
                  childList: !0,
                  subtree: !0,
                  attributes: !0,
                  attributeFilter: ["data-tooltip-id"],
                  attributeOldValue: !0,
                }),
                () => {
                  l.disconnect();
                }
              );
            }, [t, c, null == ed ? void 0 : ed.anchorSelect, V]),
            (0, r.useEffect)(() => {
              eW();
            }, [eW]),
            (0, r.useEffect)(() => {
              if (!(null == D ? void 0 : D.current)) return () => null;
              let e = new ResizeObserver(() => {
                setTimeout(() => eW());
              });
              return (
                e.observe(D.current),
                () => {
                  e.disconnect();
                }
              );
            }, [N, null == D ? void 0 : D.current]),
            (0, r.useEffect)(() => {
              var e;
              let t = document.querySelector(`[id='${d}']`),
                i = [...eT, t];
              (V && i.includes(V)) ||
                H(null !== (e = eT[0]) && void 0 !== e ? e : t);
            }, [d, eT, V]),
            (0, r.useEffect)(
              () => (
                j && eA(!0),
                () => {
                  Q.current && clearTimeout(Q.current),
                    ee.current && clearTimeout(ee.current);
                }
              ),
              []
            ),
            (0, r.useEffect)(() => {
              var e;
              let i =
                null !== (e = null == ed ? void 0 : ed.anchorSelect) &&
                void 0 !== e
                  ? e
                  : c;
              if (
                (!i &&
                  t &&
                  (i = `[data-tooltip-id='${t.replace(/'/g, "\\'")}']`),
                i)
              )
                try {
                  let e = Array.from(document.querySelectorAll(i));
                  eC(e);
                } catch (e) {
                  eC([]);
                }
            }, [t, c, null == ed ? void 0 : ed.anchorSelect]),
            (0, r.useEffect)(() => {
              Q.current && (clearTimeout(Q.current), ez(w));
            }, [w]);
          let eq =
              null !== (K = null == ed ? void 0 : ed.content) && void 0 !== K
                ? K
                : N,
            eX = el && Object.keys(ei.tooltipStyles).length > 0;
          return (
            (0, r.useImperativeHandle)(e, () => ({
              open: (e) => {
                if (null == e ? void 0 : e.anchorSelect)
                  try {
                    document.querySelector(e.anchorSelect);
                  } catch (t) {
                    return void console.warn(
                      `[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`
                    );
                  }
                eu(null != e ? e : null),
                  (null == e ? void 0 : e.delay) ? ez(e.delay) : eA(!0);
              },
              close: (e) => {
                (null == e ? void 0 : e.delay) ? eR(e.delay) : eA(!1);
              },
              activeAnchor: V,
              place: ei.place,
              isOpen: !!(ea && !S && eq && eX),
            })),
            ea && !S && eq
              ? r.createElement(
                  g,
                  {
                    id: t,
                    role: U,
                    className: en(
                      "react-tooltip",
                      eS.tooltip,
                      eE.tooltip,
                      eE[o],
                      i,
                      `react-tooltip__place-${ei.place}`,
                      eS[eX ? "show" : "closing"],
                      eX ? "react-tooltip__show" : "react-tooltip__closing",
                      "fixed" === m && eS.fixed,
                      x && eS.clickable
                    ),
                    onTransitionEnd: (e) => {
                      et.current && clearTimeout(et.current),
                        el ||
                          "opacity" !== e.propertyName ||
                          (eo(!1), eu(null), null == R || R());
                    },
                    style: {
                      ...A,
                      ...ei.tooltipStyles,
                      opacity: void 0 !== X && eX ? X : void 0,
                    },
                    ref: Z,
                  },
                  eq,
                  r.createElement(g, {
                    className: en(
                      "react-tooltip-arrow",
                      eS.arrow,
                      eE.arrow,
                      n,
                      E && eS.noArrow
                    ),
                    style: {
                      ...ei.tooltipArrowStyles,
                      background: Y
                        ? `linear-gradient(to right bottom, transparent 50%, ${Y} 50%)`
                        : void 0,
                    },
                    ref: J,
                  })
                )
              : null
          );
        },
        eT = ({ content: e }) =>
          r.createElement("span", { dangerouslySetInnerHTML: { __html: e } }),
        eC = r.forwardRef(
          (
            {
              id: e,
              anchorId: t,
              anchorSelect: i,
              content: l,
              html: s,
              render: n,
              className: a,
              classNameArrow: o,
              variant: d = "dark",
              place: c = "top",
              offset: u = 10,
              wrapper: p = "div",
              children: f = null,
              events: h = ["hover"],
              openOnClick: m = !1,
              positionStrategy: v = "absolute",
              middlewares: g,
              delayShow: w = 0,
              delayHide: y = 0,
              float: b = !1,
              hidden: S = !1,
              noArrow: E = !1,
              clickable: x = !1,
              closeOnEsc: T = !1,
              closeOnScroll: C = !1,
              closeOnResize: _ = !1,
              openEvents: k,
              closeEvents: M,
              globalCloseEvents: L,
              imperativeModeOnly: O = !1,
              style: P,
              position: A,
              isOpen: I,
              defaultIsOpen: z = !1,
              disableStyleInjection: R = !1,
              border: N,
              opacity: D,
              arrowColor: $,
              setIsOpen: B,
              afterShow: j,
              afterHide: G,
              role: F = "tooltip",
            },
            V
          ) => {
            let [H, W] = (0, r.useState)(l),
              [q, X] = (0, r.useState)(s),
              [Y, U] = (0, r.useState)(c),
              [K, Z] = (0, r.useState)(d),
              [J, Q] = (0, r.useState)(u),
              [ee, et] = (0, r.useState)(w),
              [ei, er] = (0, r.useState)(y),
              [el, es] = (0, r.useState)(b),
              [ea, eo] = (0, r.useState)(S),
              [ed, ec] = (0, r.useState)(p),
              [ep, ef] = (0, r.useState)(h),
              [eh, em] = (0, r.useState)(v),
              [ev, eg] = (0, r.useState)(null),
              [ew, ey] = (0, r.useState)(null),
              eS = (0, r.useRef)(R),
              { anchorRefs: eE, activeAnchor: eC } = eb(e),
              e_ = (e) =>
                null == e
                  ? void 0
                  : e.getAttributeNames().reduce((t, i) => {
                      var r;
                      return (
                        i.startsWith("data-tooltip-") &&
                          (t[i.replace(/^data-tooltip-/, "")] =
                            null !==
                              (r = null == e ? void 0 : e.getAttribute(i)) &&
                            void 0 !== r
                              ? r
                              : null),
                        t
                      );
                    }, {}),
              ek = (e) => {
                let t = {
                  place: (e) => {
                    U(null != e ? e : c);
                  },
                  content: (e) => {
                    W(null != e ? e : l);
                  },
                  html: (e) => {
                    X(null != e ? e : s);
                  },
                  variant: (e) => {
                    Z(null != e ? e : d);
                  },
                  offset: (e) => {
                    Q(null === e ? u : Number(e));
                  },
                  wrapper: (e) => {
                    ec(null != e ? e : p);
                  },
                  events: (e) => {
                    let t = null == e ? void 0 : e.split(" ");
                    ef(null != t ? t : h);
                  },
                  "position-strategy": (e) => {
                    em(null != e ? e : v);
                  },
                  "delay-show": (e) => {
                    et(null === e ? w : Number(e));
                  },
                  "delay-hide": (e) => {
                    er(null === e ? y : Number(e));
                  },
                  float: (e) => {
                    es(null === e ? b : "true" === e);
                  },
                  hidden: (e) => {
                    eo(null === e ? S : "true" === e);
                  },
                  "class-name": (e) => {
                    eg(e);
                  },
                };
                Object.values(t).forEach((e) => e(null)),
                  Object.entries(e).forEach(([e, i]) => {
                    var r;
                    null === (r = t[e]) || void 0 === r || r.call(t, i);
                  });
              };
            (0, r.useEffect)(() => {
              W(l);
            }, [l]),
              (0, r.useEffect)(() => {
                X(s);
              }, [s]),
              (0, r.useEffect)(() => {
                U(c);
              }, [c]),
              (0, r.useEffect)(() => {
                Z(d);
              }, [d]),
              (0, r.useEffect)(() => {
                Q(u);
              }, [u]),
              (0, r.useEffect)(() => {
                et(w);
              }, [w]),
              (0, r.useEffect)(() => {
                er(y);
              }, [y]),
              (0, r.useEffect)(() => {
                es(b);
              }, [b]),
              (0, r.useEffect)(() => {
                eo(S);
              }, [S]),
              (0, r.useEffect)(() => {
                em(v);
              }, [v]),
              (0, r.useEffect)(() => {
                eS.current !== R &&
                  console.warn(
                    "[react-tooltip] Do not change `disableStyleInjection` dynamically."
                  );
              }, [R]),
              (0, r.useEffect)(() => {
                "undefined" != typeof window &&
                  window.dispatchEvent(
                    new CustomEvent("react-tooltip-inject-styles", {
                      detail: { disableCore: "core" === R, disableBase: R },
                    })
                  );
              }, []),
              (0, r.useEffect)(() => {
                var r;
                let l = new Set(eE),
                  s = i;
                if (
                  (!s &&
                    e &&
                    (s = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`),
                  s)
                )
                  try {
                    document.querySelectorAll(s).forEach((e) => {
                      l.add({ current: e });
                    });
                  } catch (e) {
                    console.warn(
                      `[react-tooltip] "${s}" is not a valid CSS selector`
                    );
                  }
                let n = document.querySelector(`[id='${t}']`);
                if ((n && l.add({ current: n }), !l.size)) return () => null;
                let a =
                    null !== (r = null != ew ? ew : n) && void 0 !== r
                      ? r
                      : eC.current,
                  o = new MutationObserver((e) => {
                    e.forEach((e) => {
                      var t;
                      a &&
                        "attributes" === e.type &&
                        (null === (t = e.attributeName) || void 0 === t
                          ? void 0
                          : t.startsWith("data-tooltip-")) &&
                        ek(e_(a));
                    });
                  });
                return (
                  a &&
                    (ek(e_(a)),
                    o.observe(a, {
                      attributes: !0,
                      childList: !1,
                      subtree: !1,
                    })),
                  () => {
                    o.disconnect();
                  }
                );
              }, [eE, eC, ew, t, i]),
              (0, r.useEffect)(() => {
                (null == P ? void 0 : P.border) &&
                  console.warn(
                    "[react-tooltip] Do not set `style.border`. Use `border` prop instead."
                  ),
                  N &&
                    !eu("border", `${N}`) &&
                    console.warn(
                      `[react-tooltip] "${N}" is not a valid \`border\`.`
                    ),
                  (null == P ? void 0 : P.opacity) &&
                    console.warn(
                      "[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."
                    ),
                  D &&
                    !eu("opacity", `${D}`) &&
                    console.warn(
                      `[react-tooltip] "${D}" is not a valid \`opacity\`.`
                    );
              }, []);
            let eM = f,
              eL = (0, r.useRef)(null);
            if (n) {
              let e = n({
                content:
                  (null == ew
                    ? void 0
                    : ew.getAttribute("data-tooltip-content")) ||
                  H ||
                  null,
                activeAnchor: ew,
              });
              eM = e
                ? r.createElement(
                    "div",
                    { ref: eL, className: "react-tooltip-content-wrapper" },
                    e
                  )
                : null;
            } else H && (eM = H);
            q && (eM = r.createElement(eT, { content: q }));
            let eO = {
              forwardRef: V,
              id: e,
              anchorId: t,
              anchorSelect: i,
              className: en(a, ev),
              classNameArrow: o,
              content: eM,
              contentWrapperRef: eL,
              place: Y,
              variant: K,
              offset: J,
              wrapper: ed,
              events: ep,
              openOnClick: m,
              positionStrategy: eh,
              middlewares: g,
              delayShow: ee,
              delayHide: ei,
              float: el,
              hidden: ea,
              noArrow: E,
              clickable: x,
              closeOnEsc: T,
              closeOnScroll: C,
              closeOnResize: _,
              openEvents: k,
              closeEvents: M,
              globalCloseEvents: L,
              imperativeModeOnly: O,
              style: P,
              position: A,
              isOpen: I,
              defaultIsOpen: z,
              border: N,
              opacity: D,
              arrowColor: $,
              setIsOpen: B,
              afterShow: j,
              afterHide: G,
              activeAnchor: ew,
              setActiveAnchor: (e) => ey(e),
              role: F,
            };
            return r.createElement(ex, { ...eO });
          }
        );
      "undefined" != typeof window &&
        window.addEventListener("react-tooltip-inject-styles", (e) => {
          e.detail.disableCore ||
            ed({
              css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",
              type: "core",
            }),
            e.detail.disableBase ||
              ed({
                css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
                type: "base",
              });
        });
    },
    19502: function (e, t, i) {
      "use strict";
      i.d(t, {
        W_: function () {
          return s;
        },
        tl: function () {
          return a;
        },
      }),
        i(20722);
      var r = i(51699);
      function l(e, t, i, l) {
        return (
          e.params.createElements &&
            Object.keys(l).forEach((s) => {
              if (!i[s] && !0 === i.auto) {
                let n = (0, r.e)(e.el, `.${l[s]}`)[0];
                n ||
                  (((n = (0, r.c)("div", l[s])).className = l[s]),
                  e.el.append(n)),
                  (i[s] = n),
                  (t[s] = n);
              }
            }),
          i
        );
      }
      function s(e) {
        let { swiper: t, extendParams: i, on: s, emit: n } = e;
        function a(e) {
          let i;
          return e &&
            "string" == typeof e &&
            t.isElement &&
            (i = t.el.querySelector(e))
            ? i
            : (e &&
                ("string" == typeof e &&
                  (i = [...document.querySelectorAll(e)]),
                t.params.uniqueNavElements &&
                "string" == typeof e &&
                i &&
                i.length > 1 &&
                1 === t.el.querySelectorAll(e).length
                  ? (i = t.el.querySelector(e))
                  : i && 1 === i.length && (i = i[0])),
              e && !i)
            ? e
            : i;
        }
        function o(e, i) {
          let l = t.params.navigation;
          (e = (0, r.m)(e)).forEach((e) => {
            e &&
              (e.classList[i ? "add" : "remove"](...l.disabledClass.split(" ")),
              "BUTTON" === e.tagName && (e.disabled = i),
              t.params.watchOverflow &&
                t.enabled &&
                e.classList[t.isLocked ? "add" : "remove"](l.lockClass));
          });
        }
        function d() {
          let { nextEl: e, prevEl: i } = t.navigation;
          if (t.params.loop) {
            o(i, !1), o(e, !1);
            return;
          }
          o(i, t.isBeginning && !t.params.rewind),
            o(e, t.isEnd && !t.params.rewind);
        }
        function c(e) {
          e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) &&
              (t.slidePrev(), n("navigationPrev"));
        }
        function u(e) {
          e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) &&
              (t.slideNext(), n("navigationNext"));
        }
        function p() {
          let e = t.params.navigation;
          if (
            ((t.params.navigation = l(
              t,
              t.originalParams.navigation,
              t.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !(e.nextEl || e.prevEl))
          )
            return;
          let i = a(e.nextEl),
            s = a(e.prevEl);
          Object.assign(t.navigation, { nextEl: i, prevEl: s }),
            (i = (0, r.m)(i)),
            (s = (0, r.m)(s));
          let n = (i, r) => {
            i && i.addEventListener("click", "next" === r ? u : c),
              !t.enabled && i && i.classList.add(...e.lockClass.split(" "));
          };
          i.forEach((e) => n(e, "next")), s.forEach((e) => n(e, "prev"));
        }
        function f() {
          let { nextEl: e, prevEl: i } = t.navigation;
          (e = (0, r.m)(e)), (i = (0, r.m)(i));
          let l = (e, i) => {
            e.removeEventListener("click", "next" === i ? u : c),
              e.classList.remove(
                ...t.params.navigation.disabledClass.split(" ")
              );
          };
          e.forEach((e) => l(e, "next")), i.forEach((e) => l(e, "prev"));
        }
        i({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled",
          },
        }),
          (t.navigation = { nextEl: null, prevEl: null }),
          s("init", () => {
            !1 === t.params.navigation.enabled ? h() : (p(), d());
          }),
          s("toEdge fromEdge lock unlock", () => {
            d();
          }),
          s("destroy", () => {
            f();
          }),
          s("enable disable", () => {
            let { nextEl: e, prevEl: i } = t.navigation;
            if (((e = (0, r.m)(e)), (i = (0, r.m)(i)), t.enabled)) {
              d();
              return;
            }
            [...e, ...i]
              .filter((e) => !!e)
              .forEach((e) => e.classList.add(t.params.navigation.lockClass));
          }),
          s("click", (e, i) => {
            let { nextEl: l, prevEl: s } = t.navigation;
            (l = (0, r.m)(l)), (s = (0, r.m)(s));
            let a = i.target;
            if (
              t.params.navigation.hideOnClick &&
              !s.includes(a) &&
              !l.includes(a)
            ) {
              let e;
              if (
                t.pagination &&
                t.params.pagination &&
                t.params.pagination.clickable &&
                (t.pagination.el === a || t.pagination.el.contains(a))
              )
                return;
              l.length
                ? (e = l[0].classList.contains(t.params.navigation.hiddenClass))
                : s.length &&
                  (e = s[0].classList.contains(
                    t.params.navigation.hiddenClass
                  )),
                !0 === e ? n("navigationShow") : n("navigationHide"),
                [...l, ...s]
                  .filter((e) => !!e)
                  .forEach((e) =>
                    e.classList.toggle(t.params.navigation.hiddenClass)
                  );
            }
          });
        let h = () => {
          t.el.classList.add(
            ...t.params.navigation.navigationDisabledClass.split(" ")
          ),
            f();
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(
              ...t.params.navigation.navigationDisabledClass.split(" ")
            ),
              p(),
              d();
          },
          disable: h,
          update: d,
          init: p,
          destroy: f,
        });
      }
      function n(e) {
        return (
          void 0 === e && (e = ""),
          `.${e
            .trim()
            .replace(/([\.:!+\/])/g, "\\$1")
            .replace(/ /g, ".")}`
        );
      }
      function a(e) {
        let t,
          { swiper: i, extendParams: s, on: a, emit: o } = e,
          d = "swiper-pagination";
        s({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${d}-bullet`,
            bulletActiveClass: `${d}-bullet-active`,
            modifierClass: `${d}-`,
            currentClass: `${d}-current`,
            totalClass: `${d}-total`,
            hiddenClass: `${d}-hidden`,
            progressbarFillClass: `${d}-progressbar-fill`,
            progressbarOppositeClass: `${d}-progressbar-opposite`,
            clickableClass: `${d}-clickable`,
            lockClass: `${d}-lock`,
            horizontalClass: `${d}-horizontal`,
            verticalClass: `${d}-vertical`,
            paginationDisabledClass: `${d}-disabled`,
          },
        }),
          (i.pagination = { el: null, bullets: [] });
        let c = 0;
        function u() {
          return (
            !i.params.pagination.el ||
            !i.pagination.el ||
            (Array.isArray(i.pagination.el) && 0 === i.pagination.el.length)
          );
        }
        function p(e, t) {
          let { bulletActiveClass: r } = i.params.pagination;
          e &&
            (e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) &&
            (e.classList.add(`${r}-${t}`),
            (e = e[`${"prev" === t ? "previous" : "next"}ElementSibling`]) &&
              e.classList.add(`${r}-${t}-${t}`));
        }
        function f(e) {
          let t = e.target.closest(n(i.params.pagination.bulletClass));
          if (!t) return;
          e.preventDefault();
          let l = (0, r.h)(t) * i.params.slidesPerGroup;
          if (i.params.loop) {
            if (i.realIndex === l) return;
            i.slideToLoop(l);
          } else i.slideTo(l);
        }
        function h() {
          let e, l;
          let s = i.rtl,
            a = i.params.pagination;
          if (u()) return;
          let d = i.pagination.el;
          d = (0, r.m)(d);
          let f =
              i.virtual && i.params.virtual.enabled
                ? i.virtual.slides.length
                : i.slides.length,
            h = i.params.loop
              ? Math.ceil(f / i.params.slidesPerGroup)
              : i.snapGrid.length;
          if (
            (i.params.loop
              ? ((l = i.previousRealIndex || 0),
                (e =
                  i.params.slidesPerGroup > 1
                    ? Math.floor(i.realIndex / i.params.slidesPerGroup)
                    : i.realIndex))
              : void 0 !== i.snapIndex
              ? ((e = i.snapIndex), (l = i.previousSnapIndex))
              : ((l = i.previousIndex || 0), (e = i.activeIndex || 0)),
            "bullets" === a.type &&
              i.pagination.bullets &&
              i.pagination.bullets.length > 0)
          ) {
            let n, o, u;
            let f = i.pagination.bullets;
            if (
              (a.dynamicBullets &&
                ((t = (0, r.f)(
                  f[0],
                  i.isHorizontal() ? "width" : "height",
                  !0
                )),
                d.forEach((e) => {
                  e.style[i.isHorizontal() ? "width" : "height"] = `${
                    t * (a.dynamicMainBullets + 4)
                  }px`;
                }),
                a.dynamicMainBullets > 1 &&
                  void 0 !== l &&
                  ((c += e - (l || 0)) > a.dynamicMainBullets - 1
                    ? (c = a.dynamicMainBullets - 1)
                    : c < 0 && (c = 0)),
                (u =
                  ((o =
                    (n = Math.max(e - c, 0)) +
                    (Math.min(f.length, a.dynamicMainBullets) - 1)) +
                    n) /
                  2)),
              f.forEach((e) => {
                let t = [
                  ...[
                    "",
                    "-next",
                    "-next-next",
                    "-prev",
                    "-prev-prev",
                    "-main",
                  ].map((e) => `${a.bulletActiveClass}${e}`),
                ]
                  .map((e) =>
                    "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                  )
                  .flat();
                e.classList.remove(...t);
              }),
              d.length > 1)
            )
              f.forEach((t) => {
                let l = (0, r.h)(t);
                l === e
                  ? t.classList.add(...a.bulletActiveClass.split(" "))
                  : i.isElement && t.setAttribute("part", "bullet"),
                  a.dynamicBullets &&
                    (l >= n &&
                      l <= o &&
                      t.classList.add(
                        ...`${a.bulletActiveClass}-main`.split(" ")
                      ),
                    l === n && p(t, "prev"),
                    l === o && p(t, "next"));
              });
            else {
              let t = f[e];
              if (
                (t && t.classList.add(...a.bulletActiveClass.split(" ")),
                i.isElement &&
                  f.forEach((t, i) => {
                    t.setAttribute(
                      "part",
                      i === e ? "bullet-active" : "bullet"
                    );
                  }),
                a.dynamicBullets)
              ) {
                let e = f[n],
                  t = f[o];
                for (let e = n; e <= o; e += 1)
                  f[e] &&
                    f[e].classList.add(
                      ...`${a.bulletActiveClass}-main`.split(" ")
                    );
                p(e, "prev"), p(t, "next");
              }
            }
            if (a.dynamicBullets) {
              let e = Math.min(f.length, a.dynamicMainBullets + 4),
                r = (t * e - t) / 2 - u * t,
                l = s ? "right" : "left";
              f.forEach((e) => {
                e.style[i.isHorizontal() ? l : "top"] = `${r}px`;
              });
            }
          }
          d.forEach((t, r) => {
            if (
              ("fraction" === a.type &&
                (t.querySelectorAll(n(a.currentClass)).forEach((t) => {
                  t.textContent = a.formatFractionCurrent(e + 1);
                }),
                t.querySelectorAll(n(a.totalClass)).forEach((e) => {
                  e.textContent = a.formatFractionTotal(h);
                })),
              "progressbar" === a.type)
            ) {
              let r;
              r = a.progressbarOpposite
                ? i.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : i.isHorizontal()
                ? "horizontal"
                : "vertical";
              let l = (e + 1) / h,
                s = 1,
                o = 1;
              "horizontal" === r ? (s = l) : (o = l),
                t.querySelectorAll(n(a.progressbarFillClass)).forEach((e) => {
                  (e.style.transform = `translate3d(0,0,0) scaleX(${s}) scaleY(${o})`),
                    (e.style.transitionDuration = `${i.params.speed}ms`);
                });
            }
            "custom" === a.type && a.renderCustom
              ? ((t.innerHTML = a.renderCustom(i, e + 1, h)),
                0 === r && o("paginationRender", t))
              : (0 === r && o("paginationRender", t), o("paginationUpdate", t)),
              i.params.watchOverflow &&
                i.enabled &&
                t.classList[i.isLocked ? "add" : "remove"](a.lockClass);
          });
        }
        function m() {
          let e = i.params.pagination;
          if (u()) return;
          let t =
              i.virtual && i.params.virtual.enabled
                ? i.virtual.slides.length
                : i.grid && i.params.grid.rows > 1
                ? i.slides.length / Math.ceil(i.params.grid.rows)
                : i.slides.length,
            l = i.pagination.el;
          l = (0, r.m)(l);
          let s = "";
          if ("bullets" === e.type) {
            let r = i.params.loop
              ? Math.ceil(t / i.params.slidesPerGroup)
              : i.snapGrid.length;
            i.params.freeMode && i.params.freeMode.enabled && r > t && (r = t);
            for (let t = 0; t < r; t += 1)
              e.renderBullet
                ? (s += e.renderBullet.call(i, t, e.bulletClass))
                : (s += `<${e.bulletElement} ${
                    i.isElement ? 'part="bullet"' : ""
                  } class="${e.bulletClass}"></${e.bulletElement}>`);
          }
          "fraction" === e.type &&
            (s = e.renderFraction
              ? e.renderFraction.call(i, e.currentClass, e.totalClass)
              : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            "progressbar" === e.type &&
              (s = e.renderProgressbar
                ? e.renderProgressbar.call(i, e.progressbarFillClass)
                : `<span class="${e.progressbarFillClass}"></span>`),
            (i.pagination.bullets = []),
            l.forEach((t) => {
              "custom" !== e.type && (t.innerHTML = s || ""),
                "bullets" === e.type &&
                  i.pagination.bullets.push(
                    ...t.querySelectorAll(n(e.bulletClass))
                  );
            }),
            "custom" !== e.type && o("paginationRender", l[0]);
        }
        function v() {
          let e;
          i.params.pagination = l(
            i,
            i.originalParams.pagination,
            i.params.pagination,
            { el: "swiper-pagination" }
          );
          let t = i.params.pagination;
          t.el &&
            ("string" == typeof t.el &&
              i.isElement &&
              (e = i.el.querySelector(t.el)),
            e ||
              "string" != typeof t.el ||
              (e = [...document.querySelectorAll(t.el)]),
            e || (e = t.el),
            e &&
              0 !== e.length &&
              (i.params.uniqueNavElements &&
                "string" == typeof t.el &&
                Array.isArray(e) &&
                e.length > 1 &&
                (e = [...i.el.querySelectorAll(t.el)]).length > 1 &&
                (e = e.filter((e) => (0, r.a)(e, ".swiper")[0] === i.el)[0]),
              Array.isArray(e) && 1 === e.length && (e = e[0]),
              Object.assign(i.pagination, { el: e }),
              (e = (0, r.m)(e)).forEach((e) => {
                "bullets" === t.type &&
                  t.clickable &&
                  e.classList.add(...(t.clickableClass || "").split(" ")),
                  e.classList.add(t.modifierClass + t.type),
                  e.classList.add(
                    i.isHorizontal() ? t.horizontalClass : t.verticalClass
                  ),
                  "bullets" === t.type &&
                    t.dynamicBullets &&
                    (e.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                    (c = 0),
                    t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                  "progressbar" === t.type &&
                    t.progressbarOpposite &&
                    e.classList.add(t.progressbarOppositeClass),
                  t.clickable && e.addEventListener("click", f),
                  i.enabled || e.classList.add(t.lockClass);
              })));
        }
        function g() {
          let e = i.params.pagination;
          if (u()) return;
          let t = i.pagination.el;
          t &&
            (t = (0, r.m)(t)).forEach((t) => {
              t.classList.remove(e.hiddenClass),
                t.classList.remove(e.modifierClass + e.type),
                t.classList.remove(
                  i.isHorizontal() ? e.horizontalClass : e.verticalClass
                ),
                e.clickable &&
                  (t.classList.remove(...(e.clickableClass || "").split(" ")),
                  t.removeEventListener("click", f));
            }),
            i.pagination.bullets &&
              i.pagination.bullets.forEach((t) =>
                t.classList.remove(...e.bulletActiveClass.split(" "))
              );
        }
        a("changeDirection", () => {
          if (!i.pagination || !i.pagination.el) return;
          let e = i.params.pagination,
            { el: t } = i.pagination;
          (t = (0, r.m)(t)).forEach((t) => {
            t.classList.remove(e.horizontalClass, e.verticalClass),
              t.classList.add(
                i.isHorizontal() ? e.horizontalClass : e.verticalClass
              );
          });
        }),
          a("init", () => {
            !1 === i.params.pagination.enabled ? w() : (v(), m(), h());
          }),
          a("activeIndexChange", () => {
            void 0 === i.snapIndex && h();
          }),
          a("snapIndexChange", () => {
            h();
          }),
          a("snapGridLengthChange", () => {
            m(), h();
          }),
          a("destroy", () => {
            g();
          }),
          a("enable disable", () => {
            let { el: e } = i.pagination;
            e &&
              (e = (0, r.m)(e)).forEach((e) =>
                e.classList[i.enabled ? "remove" : "add"](
                  i.params.pagination.lockClass
                )
              );
          }),
          a("lock unlock", () => {
            h();
          }),
          a("click", (e, t) => {
            let l = t.target,
              s = (0, r.m)(i.pagination.el);
            if (
              i.params.pagination.el &&
              i.params.pagination.hideOnClick &&
              s &&
              s.length > 0 &&
              !l.classList.contains(i.params.pagination.bulletClass)
            ) {
              if (
                i.navigation &&
                ((i.navigation.nextEl && l === i.navigation.nextEl) ||
                  (i.navigation.prevEl && l === i.navigation.prevEl))
              )
                return;
              !0 === s[0].classList.contains(i.params.pagination.hiddenClass)
                ? o("paginationShow")
                : o("paginationHide"),
                s.forEach((e) =>
                  e.classList.toggle(i.params.pagination.hiddenClass)
                );
            }
          });
        let w = () => {
          i.el.classList.add(i.params.pagination.paginationDisabledClass);
          let { el: e } = i.pagination;
          e &&
            (e = (0, r.m)(e)).forEach((e) =>
              e.classList.add(i.params.pagination.paginationDisabledClass)
            ),
            g();
        };
        Object.assign(i.pagination, {
          enable: () => {
            i.el.classList.remove(i.params.pagination.paginationDisabledClass);
            let { el: e } = i.pagination;
            e &&
              (e = (0, r.m)(e)).forEach((e) =>
                e.classList.remove(i.params.pagination.paginationDisabledClass)
              ),
              v(),
              m(),
              h();
          },
          disable: w,
          render: m,
          update: h,
          init: v,
          destroy: g,
        });
      }
    },
    20722: function (e, t, i) {
      "use strict";
      function r(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function l(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : r(t[i]) &&
                r(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                l(e[i], t[i]);
          });
      }
      i.d(t, {
        a: function () {
          return o;
        },
        g: function () {
          return n;
        },
      });
      let s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function n() {
        let e = "undefined" != typeof document ? document : {};
        return l(e, s), e;
      }
      let a = {
        document: s,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function o() {
        let e = "undefined" != typeof window ? window : {};
        return l(e, a), e;
      }
    },
    51699: function (e, t, i) {
      "use strict";
      i.d(t, {
        a: function () {
          return w;
        },
        c: function () {
          return f;
        },
        d: function () {
          return n;
        },
        e: function () {
          return u;
        },
        f: function () {
          return y;
        },
        h: function () {
          return g;
        },
        j: function () {
          return a;
        },
        m: function () {
          return b;
        },
        n: function () {
          return s;
        },
        o: function () {
          return v;
        },
        p: function () {
          return m;
        },
        q: function () {
          return h;
        },
        r: function () {
          return c;
        },
        s: function () {
          return d;
        },
        t: function () {
          return p;
        },
        u: function () {
          return function e() {
            let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              i = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < arguments.length; r += 1) {
              let l = r < 0 || arguments.length <= r ? void 0 : arguments[r];
              if (
                null != l &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(l instanceof HTMLElement)
                  : !l || (1 !== l.nodeType && 11 !== l.nodeType))
              ) {
                let r = Object.keys(Object(l)).filter((e) => 0 > i.indexOf(e));
                for (let i = 0, s = r.length; i < s; i += 1) {
                  let s = r[i],
                    n = Object.getOwnPropertyDescriptor(l, s);
                  void 0 !== n &&
                    n.enumerable &&
                    (o(t[s]) && o(l[s])
                      ? l[s].__swiper__
                        ? (t[s] = l[s])
                        : e(t[s], l[s])
                      : !o(t[s]) && o(l[s])
                      ? ((t[s] = {}),
                        l[s].__swiper__ ? (t[s] = l[s]) : e(t[s], l[s]))
                      : (t[s] = l[s]));
                }
              }
            }
            return t;
          };
        },
        v: function () {
          return l;
        },
      });
      var r = i(20722);
      function l(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function s(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function n() {
        return Date.now();
      }
      function a(e, t) {
        let i, l, s;
        void 0 === t && (t = "x");
        let n = (0, r.a)(),
          a = (function (e) {
            let t;
            let i = (0, r.a)();
            return (
              i.getComputedStyle && (t = i.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          n.WebKitCSSMatrix
            ? ((l = a.transform || a.webkitTransform).split(",").length > 6 &&
                (l = l
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (s = new n.WebKitCSSMatrix("none" === l ? "" : l)))
            : (i = (s =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (l = n.WebKitCSSMatrix
              ? s.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (l = n.WebKitCSSMatrix
              ? s.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          l || 0
        );
      }
      function o(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function d(e, t, i) {
        e.style.setProperty(t, i);
      }
      function c(e) {
        let t,
          { swiper: i, targetPosition: l, side: s } = e,
          n = (0, r.a)(),
          a = -i.translate,
          o = null,
          d = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = "none"),
          n.cancelAnimationFrame(i.cssModeFrameID);
        let c = l > a ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          p = () => {
            (t = new Date().getTime()), null === o && (o = t);
            let e =
              a +
              (0.5 -
                Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) *
                (l - a);
            if (
              (u(e, l) && (e = l), i.wrapperEl.scrollTo({ [s]: e }), u(e, l))
            ) {
              (i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [s]: e });
                }),
                n.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = n.requestAnimationFrame(p);
          };
        p();
      }
      function u(e, t) {
        return (
          void 0 === t && (t = ""), [...e.children].filter((e) => e.matches(t))
        );
      }
      function p(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function f(e, t) {
        var i;
        void 0 === t && (t = []);
        let r = document.createElement(e);
        return (
          r.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (i = t) && (i = ""),
                i
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          r
        );
      }
      function h(e, t) {
        let i = [];
        for (; e.previousElementSibling; ) {
          let r = e.previousElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function m(e, t) {
        let i = [];
        for (; e.nextElementSibling; ) {
          let r = e.nextElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function v(e, t) {
        return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function g(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function w(e, t) {
        let i = [],
          r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && i.push(r) : i.push(r), (r = r.parentElement);
        return i;
      }
      function y(e, t, i) {
        let l = (0, r.a)();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                l
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                l
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
      function b(e) {
        return (Array.isArray(e) ? e : [e]).filter((e) => !!e);
      }
    },
    89850: function (e, t, i) {
      "use strict";
      let r, l, s;
      i.d(t, {
        tq: function () {
          return W;
        },
        o5: function () {
          return q;
        },
      });
      var n = i(78411),
        a = i(20722),
        o = i(51699);
      function d() {
        return (
          r ||
            (r = (function () {
              let e = (0, a.a)(),
                t = (0, a.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          r
        );
      }
      function c(e) {
        return (
          void 0 === e && (e = {}),
          l ||
            (l = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = d(),
                r = (0, a.a)(),
                l = r.navigator.platform,
                s = t || r.navigator.userAgent,
                n = { ios: !1, android: !1 },
                o = r.screen.width,
                c = r.screen.height,
                u = s.match(/(Android);?[\s\/]+([\d.]+)?/),
                p = s.match(/(iPad).*OS\s([\d_]+)/),
                f = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                h = !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "MacIntel" === l;
              return (
                !p &&
                  m &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${c}`) >= 0 &&
                  ((p = s.match(/(Version)\/([\d.]+)/)) ||
                    (p = [0, 1, "13_0_0"]),
                  (m = !1)),
                u && "Win32" !== l && ((n.os = "android"), (n.android = !0)),
                (p || h || f) && ((n.os = "ios"), (n.ios = !0)),
                n
              );
            })(e)),
          l
        );
      }
      let u = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        p = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        f = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      (t = i.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        h = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        m = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let r =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            l = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [l - t];
            i.push(...Array.from({ length: t }).map((e, t) => l + r + t)),
              e.slides.forEach((t, r) => {
                i.includes(t.column) && h(e, r);
              });
            return;
          }
          let s = l + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = l - t; r <= s + t; r += 1) {
              let t = ((r % i) + i) % i;
              (t < l || t > s) && h(e, t);
            }
          else
            for (
              let r = Math.max(l - t, 0);
              r <= Math.min(s + t, i - 1);
              r += 1
            )
              r !== l && (r > s || r < l) && h(e, r);
        };
      function v(e) {
        let { swiper: t, runCallbacks: i, direction: r, step: l } = e,
          { activeIndex: s, previousIndex: n } = t,
          a = r;
        if (
          (a || (a = s > n ? "next" : s < n ? "prev" : "reset"),
          t.emit(`transition${l}`),
          i && s !== n)
        ) {
          if ("reset" === a) {
            t.emit(`slideResetTransition${l}`);
            return;
          }
          t.emit(`slideChangeTransition${l}`),
            "next" === a
              ? t.emit(`slideNextTransition${l}`)
              : t.emit(`slidePrevTransition${l}`);
        }
      }
      function g(e, t, i) {
        let r = (0, a.a)(),
          { params: l } = e,
          s = l.edgeSwipeDetection,
          n = l.edgeSwipeThreshold;
        return (
          !s ||
          (!(i <= n) && !(i >= r.innerWidth - n)) ||
          ("prevent" === s && (t.preventDefault(), !0))
        );
      }
      function w(e) {
        let t = (0, a.g)(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let r = this.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
          r.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (r.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) {
          g(this, i, i.targetTouches[0].pageX);
          return;
        }
        let { params: l, touches: s, enabled: n } = this;
        if (
          !n ||
          (!l.simulateTouch && "mouse" === i.pointerType) ||
          (this.animating && l.preventInteractionOnTransition)
        )
          return;
        !this.animating && l.cssMode && l.loop && this.loopFix();
        let d = i.target;
        if (
          ("wrapper" === l.touchEventsTarget && !this.wrapperEl.contains(d)) ||
          ("which" in i && 3 === i.which) ||
          ("button" in i && i.button > 0) ||
          (r.isTouched && r.isMoved)
        )
          return;
        let c = !!l.noSwipingClass && "" !== l.noSwipingClass,
          u = i.composedPath ? i.composedPath() : i.path;
        c && i.target && i.target.shadowRoot && u && (d = u[0]);
        let p = l.noSwipingSelector
            ? l.noSwipingSelector
            : `.${l.noSwipingClass}`,
          f = !!(i.target && i.target.shadowRoot);
        if (
          l.noSwiping &&
          (f
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === (0, a.g)() || i === (0, a.a)()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let r = i.closest(e);
                    return r || i.getRootNode
                      ? r || t(i.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, d)
            : d.closest(p))
        ) {
          this.allowClick = !0;
          return;
        }
        if (l.swipeHandler && !d.closest(l.swipeHandler)) return;
        (s.currentX = i.pageX), (s.currentY = i.pageY);
        let h = s.currentX,
          m = s.currentY;
        if (!g(this, i, h)) return;
        Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (s.startX = h),
          (s.startY = m),
          (r.touchStartTime = (0, o.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          l.threshold > 0 && (r.allowThresholdMove = !1);
        let v = !0;
        d.matches(r.focusableElements) &&
          ((v = !1), "SELECT" === d.nodeName && (r.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(r.focusableElements) &&
            t.activeElement !== d &&
            t.activeElement.blur();
        let w = v && this.allowTouchMove && l.touchStartPreventDefault;
        (l.touchStartForcePreventDefault || w) &&
          !d.isContentEditable &&
          i.preventDefault(),
          l.freeMode &&
            l.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !l.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", i);
      }
      function y(e) {
        let t, i;
        let r = (0, a.g)(),
          l = this.touchEventsData,
          { params: s, touches: n, rtlTranslate: d, enabled: c } = this;
        if (!c || (!s.simulateTouch && "mouse" === e.pointerType)) return;
        let u = e;
        if (
          (u.originalEvent && (u = u.originalEvent),
          "pointermove" === u.type &&
            (null !== l.touchId || u.pointerId !== l.pointerId))
        )
          return;
        if ("touchmove" === u.type) {
          if (
            !(t = [...u.changedTouches].filter(
              (e) => e.identifier === l.touchId
            )[0]) ||
            t.identifier !== l.touchId
          )
            return;
        } else t = u;
        if (!l.isTouched) {
          l.startMoving && l.isScrolling && this.emit("touchMoveOpposite", u);
          return;
        }
        let p = t.pageX,
          f = t.pageY;
        if (u.preventedByNestedSwiper) {
          (n.startX = p), (n.startY = f);
          return;
        }
        if (!this.allowTouchMove) {
          u.target.matches(l.focusableElements) || (this.allowClick = !1),
            l.isTouched &&
              (Object.assign(n, {
                startX: p,
                startY: f,
                currentX: p,
                currentY: f,
              }),
              (l.touchStartTime = (0, o.d)()));
          return;
        }
        if (s.touchReleaseOnEdges && !s.loop) {
          if (this.isVertical()) {
            if (
              (f < n.startY && this.translate <= this.maxTranslate()) ||
              (f > n.startY && this.translate >= this.minTranslate())
            ) {
              (l.isTouched = !1), (l.isMoved = !1);
              return;
            }
          } else if (
            (p < n.startX && this.translate <= this.maxTranslate()) ||
            (p > n.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          r.activeElement &&
          u.target === r.activeElement &&
          u.target.matches(l.focusableElements)
        ) {
          (l.isMoved = !0), (this.allowClick = !1);
          return;
        }
        l.allowTouchCallbacks && this.emit("touchMove", u),
          (n.previousX = n.currentX),
          (n.previousY = n.currentY),
          (n.currentX = p),
          (n.currentY = f);
        let h = n.currentX - n.startX,
          m = n.currentY - n.startY;
        if (
          this.params.threshold &&
          Math.sqrt(h ** 2 + m ** 2) < this.params.threshold
        )
          return;
        if (void 0 === l.isScrolling) {
          let e;
          (this.isHorizontal() && n.currentY === n.startY) ||
          (this.isVertical() && n.currentX === n.startX)
            ? (l.isScrolling = !1)
            : h * h + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
              (l.isScrolling = this.isHorizontal()
                ? e > s.touchAngle
                : 90 - e > s.touchAngle));
        }
        if (
          (l.isScrolling && this.emit("touchMoveOpposite", u),
          void 0 === l.startMoving &&
            (n.currentX !== n.startX || n.currentY !== n.startY) &&
            (l.startMoving = !0),
          l.isScrolling ||
            ("touchmove" === u.type && l.preventTouchMoveFromPointerMove))
        ) {
          l.isTouched = !1;
          return;
        }
        if (!l.startMoving) return;
        (this.allowClick = !1),
          !s.cssMode && u.cancelable && u.preventDefault(),
          s.touchMoveStopPropagation && !s.nested && u.stopPropagation();
        let v = this.isHorizontal() ? h : m,
          g = this.isHorizontal()
            ? n.currentX - n.previousX
            : n.currentY - n.previousY;
        s.oneWayMovement &&
          ((v = Math.abs(v) * (d ? 1 : -1)), (g = Math.abs(g) * (d ? 1 : -1))),
          (n.diff = v),
          (v *= s.touchRatio),
          d && ((v = -v), (g = -g));
        let w = this.touchesDirection;
        (this.swipeDirection = v > 0 ? "prev" : "next"),
          (this.touchesDirection = g > 0 ? "prev" : "next");
        let y = this.params.loop && !s.cssMode,
          b =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!l.isMoved) {
          if (
            (y && b && this.loopFix({ direction: this.swipeDirection }),
            (l.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (l.allowMomentumBounce = !1),
            s.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", u);
        }
        if (
          (new Date().getTime(),
          l.isMoved &&
            l.allowThresholdMove &&
            w !== this.touchesDirection &&
            y &&
            b &&
            Math.abs(v) >= 1)
        ) {
          Object.assign(n, {
            startX: p,
            startY: f,
            currentX: p,
            currentY: f,
            startTranslate: l.currentTranslate,
          }),
            (l.loopSwapReset = !0),
            (l.startTranslate = l.currentTranslate);
          return;
        }
        this.emit("sliderMove", u),
          (l.isMoved = !0),
          (l.currentTranslate = v + l.startTranslate);
        let S = !0,
          E = s.resistanceRatio;
        if (
          (s.touchReleaseOnEdges && (E = 0),
          v > 0
            ? (y &&
                b &&
                !i &&
                l.allowThresholdMove &&
                l.currentTranslate >
                  (s.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1]
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              l.currentTranslate > this.minTranslate() &&
                ((S = !1),
                s.resistance &&
                  (l.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + l.startTranslate + v) ** E)))
            : v < 0 &&
              (y &&
                b &&
                !i &&
                l.allowThresholdMove &&
                l.currentTranslate <
                  (s.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1]
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === s.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(s.slidesPerView, 10))),
                }),
              l.currentTranslate < this.maxTranslate() &&
                ((S = !1),
                s.resistance &&
                  (l.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - l.startTranslate - v) ** E))),
          S && (u.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            l.currentTranslate < l.startTranslate &&
            (l.currentTranslate = l.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            l.currentTranslate > l.startTranslate &&
            (l.currentTranslate = l.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (l.currentTranslate = l.startTranslate),
          s.threshold > 0)
        ) {
          if (Math.abs(v) > s.threshold || l.allowThresholdMove) {
            if (!l.allowThresholdMove) {
              (l.allowThresholdMove = !0),
                (n.startX = n.currentX),
                (n.startY = n.currentY),
                (l.currentTranslate = l.startTranslate),
                (n.diff = this.isHorizontal()
                  ? n.currentX - n.startX
                  : n.currentY - n.startY);
              return;
            }
          } else {
            l.currentTranslate = l.startTranslate;
            return;
          }
        }
        s.followFinger &&
          !s.cssMode &&
          (((s.freeMode && s.freeMode.enabled && this.freeMode) ||
            s.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          s.freeMode &&
            s.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(l.currentTranslate),
          this.setTranslate(l.currentTranslate));
      }
      function b(e) {
        let t, i;
        let r = this,
          l = r.touchEventsData,
          s = e;
        if (
          (s.originalEvent && (s = s.originalEvent),
          "touchend" === s.type || "touchcancel" === s.type)
        ) {
          if (
            !(t = [...s.changedTouches].filter(
              (e) => e.identifier === l.touchId
            )[0]) ||
            t.identifier !== l.touchId
          )
            return;
        } else {
          if (null !== l.touchId || s.pointerId !== l.pointerId) return;
          t = s;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(s.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(s.type) &&
            (r.browser.isSafari || r.browser.isWebView)
          )
        )
          return;
        (l.pointerId = null), (l.touchId = null);
        let {
          params: n,
          touches: a,
          rtlTranslate: d,
          slidesGrid: c,
          enabled: u,
        } = r;
        if (!u || (!n.simulateTouch && "mouse" === s.pointerType)) return;
        if (
          (l.allowTouchCallbacks && r.emit("touchEnd", s),
          (l.allowTouchCallbacks = !1),
          !l.isTouched)
        ) {
          l.isMoved && n.grabCursor && r.setGrabCursor(!1),
            (l.isMoved = !1),
            (l.startMoving = !1);
          return;
        }
        n.grabCursor &&
          l.isMoved &&
          l.isTouched &&
          (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) &&
          r.setGrabCursor(!1);
        let p = (0, o.d)(),
          f = p - l.touchStartTime;
        if (r.allowClick) {
          let e = s.path || (s.composedPath && s.composedPath());
          r.updateClickedSlide((e && e[0]) || s.target, e),
            r.emit("tap click", s),
            f < 300 &&
              p - l.lastClickTime < 300 &&
              r.emit("doubleTap doubleClick", s);
        }
        if (
          ((l.lastClickTime = (0, o.d)()),
          (0, o.n)(() => {
            r.destroyed || (r.allowClick = !0);
          }),
          !l.isTouched ||
            !l.isMoved ||
            !r.swipeDirection ||
            (0 === a.diff && !l.loopSwapReset) ||
            (l.currentTranslate === l.startTranslate && !l.loopSwapReset))
        ) {
          (l.isTouched = !1), (l.isMoved = !1), (l.startMoving = !1);
          return;
        }
        if (
          ((l.isTouched = !1),
          (l.isMoved = !1),
          (l.startMoving = !1),
          (i = n.followFinger
            ? d
              ? r.translate
              : -r.translate
            : -l.currentTranslate),
          n.cssMode)
        )
          return;
        if (n.freeMode && n.freeMode.enabled) {
          r.freeMode.onTouchEnd({ currentPos: i });
          return;
        }
        let h = i >= -r.maxTranslate() && !r.params.loop,
          m = 0,
          v = r.slidesSizesGrid[0];
        for (
          let e = 0;
          e < c.length;
          e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
        ) {
          let t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
          void 0 !== c[e + t]
            ? (h || (i >= c[e] && i < c[e + t])) &&
              ((m = e), (v = c[e + t] - c[e]))
            : (h || i >= c[e]) &&
              ((m = e), (v = c[c.length - 1] - c[c.length - 2]));
        }
        let g = null,
          w = null;
        n.rewind &&
          (r.isBeginning
            ? (w =
                n.virtual && n.virtual.enabled && r.virtual
                  ? r.virtual.slides.length - 1
                  : r.slides.length - 1)
            : r.isEnd && (g = 0));
        let y = (i - c[m]) / v,
          b = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        if (f > n.longSwipesMs) {
          if (!n.longSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          "next" === r.swipeDirection &&
            (y >= n.longSwipesRatio
              ? r.slideTo(n.rewind && r.isEnd ? g : m + b)
              : r.slideTo(m)),
            "prev" === r.swipeDirection &&
              (y > 1 - n.longSwipesRatio
                ? r.slideTo(m + b)
                : null !== w && y < 0 && Math.abs(y) > n.longSwipesRatio
                ? r.slideTo(w)
                : r.slideTo(m));
        } else {
          if (!n.shortSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          r.navigation &&
          (s.target === r.navigation.nextEl || s.target === r.navigation.prevEl)
            ? s.target === r.navigation.nextEl
              ? r.slideTo(m + b)
              : r.slideTo(m)
            : ("next" === r.swipeDirection && r.slideTo(null !== g ? g : m + b),
              "prev" === r.swipeDirection && r.slideTo(null !== w ? w : m));
        }
      }
      function S() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: r, allowSlidePrev: l, snapGrid: s } = e,
          n = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let a = n && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        a
          ? e.params.loop && !n
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = l),
          (e.allowSlideNext = r),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function E(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function x() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let r = this.maxTranslate() - this.minTranslate();
        (0 === r ? 0 : (this.translate - this.minTranslate()) / r) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function T(e) {
        f(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function C() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let _ = (e, t) => {
          let i = (0, a.g)(),
            { params: r, el: l, wrapperEl: s, device: n } = e,
            o = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener";
          i[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o,
          }),
            l[d]("touchstart", e.onTouchStart, { passive: !1 }),
            l[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("touchend", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (r.preventClicks || r.preventClicksPropagation) &&
              l[d]("click", e.onClick, !0),
            r.cssMode && s[d]("scroll", e.onScroll),
            r.updateOnWindowResize
              ? e[t](
                  n.ios || n.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  S,
                  !0
                )
              : e[t]("observerUpdate", S, !0),
            l[d]("load", e.onLoad, { capture: !0 });
        },
        k = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var M = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let L = {
          eventsEmitter: {
            on(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              let l = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][l](t);
                }),
                r
              );
            },
            once(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              function l() {
                r.off(e, l), l.__emitterProxy && delete l.__emitterProxy;
                for (var i = arguments.length, s = Array(i), n = 0; n < i; n++)
                  s[n] = arguments[n];
                t.apply(r, s);
              }
              return (l.__emitterProxy = t), r.on(e, l, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((r, l) => {
                          (r === t ||
                            (r.__emitterProxy && r.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(l, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e, t, i;
              let r = this;
              if (!r.eventsListeners || r.destroyed || !r.eventsListeners)
                return r;
              for (var l = arguments.length, s = Array(l), n = 0; n < l; n++)
                s[n] = arguments[n];
              return (
                "string" == typeof s[0] || Array.isArray(s[0])
                  ? ((e = s[0]), (t = s.slice(1, s.length)), (i = r))
                  : ((e = s[0].events),
                    (t = s[0].data),
                    (i = s[0].context || r)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  r.eventsAnyListeners &&
                    r.eventsAnyListeners.length &&
                    r.eventsAnyListeners.forEach((r) => {
                      r.apply(i, [e, ...t]);
                    }),
                    r.eventsListeners &&
                      r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                r
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, o.o)(i, "padding-left") || 0, 10) -
                    parseInt((0, o.o)(i, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, o.o)(i, "padding-top") || 0, 10) -
                    parseInt((0, o.o)(i, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function i(e, i) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(i)) || 0
                );
              }
              let r = t.params,
                {
                  wrapperEl: l,
                  slidesEl: s,
                  size: n,
                  rtlTranslate: a,
                  wrongRTL: d,
                } = t,
                c = t.virtual && r.virtual.enabled,
                u = c ? t.virtual.slides.length : t.slides.length,
                p = (0, o.e)(s, `.${t.params.slideClass}, swiper-slide`),
                f = c ? t.virtual.slides.length : p.length,
                h = [],
                m = [],
                v = [],
                g = r.slidesOffsetBefore;
              "function" == typeof g && (g = r.slidesOffsetBefore.call(t));
              let w = r.slidesOffsetAfter;
              "function" == typeof w && (w = r.slidesOffsetAfter.call(t));
              let y = t.snapGrid.length,
                b = t.slidesGrid.length,
                S = r.spaceBetween,
                E = -g,
                x = 0,
                T = 0;
              if (void 0 === n) return;
              "string" == typeof S && S.indexOf("%") >= 0
                ? (S = (parseFloat(S.replace("%", "")) / 100) * n)
                : "string" == typeof S && (S = parseFloat(S)),
                (t.virtualSize = -S),
                p.forEach((e) => {
                  a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                r.centeredSlides &&
                  r.cssMode &&
                  ((0, o.s)(l, "--swiper-centered-offset-before", ""),
                  (0, o.s)(l, "--swiper-centered-offset-after", ""));
              let C = r.grid && r.grid.rows > 1 && t.grid;
              C ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
              let _ =
                "auto" === r.slidesPerView &&
                r.breakpoints &&
                Object.keys(r.breakpoints).filter(
                  (e) => void 0 !== r.breakpoints[e].slidesPerView
                ).length > 0;
              for (let l = 0; l < f; l += 1) {
                let s;
                if (
                  ((e = 0),
                  p[l] && (s = p[l]),
                  C && t.grid.updateSlide(l, s, p),
                  !p[l] || "none" !== (0, o.o)(s, "display"))
                ) {
                  if ("auto" === r.slidesPerView) {
                    _ && (p[l].style[t.getDirectionLabel("width")] = "");
                    let n = getComputedStyle(s),
                      a = s.style.transform,
                      d = s.style.webkitTransform;
                    if (
                      (a && (s.style.transform = "none"),
                      d && (s.style.webkitTransform = "none"),
                      r.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? (0, o.f)(s, "width", !0)
                        : (0, o.f)(s, "height", !0);
                    else {
                      let t = i(n, "width"),
                        r = i(n, "padding-left"),
                        l = i(n, "padding-right"),
                        a = i(n, "margin-left"),
                        o = i(n, "margin-right"),
                        d = n.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + a + o;
                      else {
                        let { clientWidth: i, offsetWidth: n } = s;
                        e = t + r + l + a + o + (n - i);
                      }
                    }
                    a && (s.style.transform = a),
                      d && (s.style.webkitTransform = d),
                      r.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (n - (r.slidesPerView - 1) * S) / r.slidesPerView),
                      r.roundLengths && (e = Math.floor(e)),
                      p[l] &&
                        (p[l].style[t.getDirectionLabel("width")] = `${e}px`);
                  p[l] && (p[l].swiperSlideSize = e),
                    v.push(e),
                    r.centeredSlides
                      ? ((E = E + e / 2 + x / 2 + S),
                        0 === x && 0 !== l && (E = E - n / 2 - S),
                        0 === l && (E = E - n / 2 - S),
                        0.001 > Math.abs(E) && (E = 0),
                        r.roundLengths && (E = Math.floor(E)),
                        T % r.slidesPerGroup == 0 && h.push(E),
                        m.push(E))
                      : (r.roundLengths && (E = Math.floor(E)),
                        (T - Math.min(t.params.slidesPerGroupSkip, T)) %
                          t.params.slidesPerGroup ==
                          0 && h.push(E),
                        m.push(E),
                        (E = E + e + S)),
                    (t.virtualSize += e + S),
                    (x = e),
                    (T += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, n) + w),
                a &&
                  d &&
                  ("slide" === r.effect || "coverflow" === r.effect) &&
                  (l.style.width = `${t.virtualSize + S}px`),
                r.setWrapperSize &&
                  (l.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + S
                  }px`),
                C && t.grid.updateWrapperSize(e, h),
                !r.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < h.length; i += 1) {
                  let l = h[i];
                  r.roundLengths && (l = Math.floor(l)),
                    h[i] <= t.virtualSize - n && e.push(l);
                }
                (h = e),
                  Math.floor(t.virtualSize - n) - Math.floor(h[h.length - 1]) >
                    1 && h.push(t.virtualSize - n);
              }
              if (c && r.loop) {
                let e = v[0] + S;
                if (r.slidesPerGroup > 1) {
                  let i = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        r.slidesPerGroup
                    ),
                    l = e * r.slidesPerGroup;
                  for (let e = 0; e < i; e += 1) h.push(h[h.length - 1] + l);
                }
                for (
                  let i = 0;
                  i < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  i += 1
                )
                  1 === r.slidesPerGroup && h.push(h[h.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === h.length && (h = [0]), 0 !== S)) {
                let e =
                  t.isHorizontal() && a
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                p.filter(
                  (e, t) => !r.cssMode || !!r.loop || t !== p.length - 1
                ).forEach((t) => {
                  t.style[e] = `${S}px`;
                });
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                let e = 0;
                v.forEach((t) => {
                  e += t + (S || 0);
                });
                let t = (e -= S) - n;
                h = h.map((e) => (e <= 0 ? -g : e > t ? t + w : e));
              }
              if (r.centerInsufficientSlides) {
                let e = 0;
                v.forEach((t) => {
                  e += t + (S || 0);
                }),
                  (e -= S);
                let t =
                  (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                if (e + t < n) {
                  let i = (n - e - t) / 2;
                  h.forEach((e, t) => {
                    h[t] = e - i;
                  }),
                    m.forEach((e, t) => {
                      m[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: p,
                  snapGrid: h,
                  slidesGrid: m,
                  slidesSizesGrid: v,
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
              ) {
                (0, o.s)(l, "--swiper-centered-offset-before", `${-h[0]}px`),
                  (0, o.s)(
                    l,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - v[v.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (f !== u && t.emit("slidesLengthChange"),
                h.length !== y &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                m.length !== b && t.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !c &&
                  !r.cssMode &&
                  ("slide" === r.effect || "fade" === r.effect))
              ) {
                let e = `${r.containerModifierClass}backface-hidden`,
                  i = t.el.classList.contains(e);
                f <= r.maxBackfaceHiddenSlides
                  ? i || t.el.classList.add(e)
                  : i && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                r = [],
                l = i.virtual && i.params.virtual.enabled,
                s = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let n = (e) =>
                l ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    r.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !l) break;
                    r.push(n(e));
                  }
              } else r.push(n(i.activeIndex));
              for (t = 0; t < r.length; t += 1)
                if (void 0 !== r[t]) {
                  let e = r[t].offsetHeight;
                  s = e > s ? e : s;
                }
              (s || 0 === s) && (i.wrapperEl.style.height = `${s}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: r, snapGrid: l } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let s = -e;
              r && (s = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let n = t.spaceBetween;
              "string" == typeof n && n.indexOf("%") >= 0
                ? (n = (parseFloat(n.replace("%", "")) / 100) * this.size)
                : "string" == typeof n && (n = parseFloat(n));
              for (let e = 0; e < i.length; e += 1) {
                let a = i[e],
                  o = a.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d =
                    (s + (t.centeredSlides ? this.minTranslate() : 0) - o) /
                    (a.swiperSlideSize + n),
                  c =
                    (s -
                      l[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      o) /
                    (a.swiperSlideSize + n),
                  p = -(s - o),
                  f = p + this.slidesSizesGrid[e],
                  h = p >= 0 && p <= this.size - this.slidesSizesGrid[e],
                  m =
                    (p >= 0 && p < this.size - 1) ||
                    (f > 1 && f <= this.size) ||
                    (p <= 0 && f >= this.size);
                m &&
                  (this.visibleSlides.push(a),
                  this.visibleSlidesIndexes.push(e)),
                  u(a, m, t.slideVisibleClass),
                  u(a, h, t.slideFullyVisibleClass),
                  (a.progress = r ? -d : d),
                  (a.originalProgress = r ? -c : c);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                {
                  progress: r,
                  isBeginning: l,
                  isEnd: s,
                  progressLoop: n,
                } = this,
                a = l,
                o = s;
              if (0 === i) (r = 0), (l = !0), (s = !0);
              else {
                r = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  n = 1 > Math.abs(e - this.maxTranslate());
                (l = t || r <= 0),
                  (s = n || r >= 1),
                  t && (r = 0),
                  n && (r = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  r = this.slidesGrid[t],
                  l = this.slidesGrid[i],
                  s = this.slidesGrid[this.slidesGrid.length - 1],
                  a = Math.abs(e);
                (n = a >= r ? (a - r) / s : (a + s - l) / s) > 1 && (n -= 1);
              }
              Object.assign(this, {
                progress: r,
                progressLoop: n,
                isBeginning: l,
                isEnd: s,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                l && !a && this.emit("reachBeginning toEdge"),
                s && !o && this.emit("reachEnd toEdge"),
                ((a && !l) || (o && !s)) && this.emit("fromEdge"),
                this.emit("progress", r);
            },
            updateSlidesClasses: function () {
              let e, t, i;
              let { slides: r, params: l, slidesEl: s, activeIndex: n } = this,
                a = this.virtual && l.virtual.enabled,
                d = this.grid && l.grid && l.grid.rows > 1,
                c = (e) =>
                  (0, o.e)(s, `.${l.slideClass}${e}, swiper-slide${e}`)[0];
              if (a) {
                if (l.loop) {
                  let t = n - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = c(`[data-swiper-slide-index="${t}"]`));
                } else e = c(`[data-swiper-slide-index="${n}"]`);
              } else
                d
                  ? ((e = r.filter((e) => e.column === n)[0]),
                    (i = r.filter((e) => e.column === n + 1)[0]),
                    (t = r.filter((e) => e.column === n - 1)[0]))
                  : (e = r[n]);
              e &&
                !d &&
                ((i = (0, o.p)(e, `.${l.slideClass}, swiper-slide`)[0]),
                l.loop && !i && (i = r[0]),
                (t = (0, o.q)(e, `.${l.slideClass}, swiper-slide`)[0]),
                l.loop),
                r.forEach((r) => {
                  p(r, r === e, l.slideActiveClass),
                    p(r, r === i, l.slideNextClass),
                    p(r, r === t, l.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, i;
              let r = this,
                l = r.rtlTranslate ? r.translate : -r.translate,
                {
                  snapGrid: s,
                  params: n,
                  activeIndex: a,
                  realIndex: o,
                  snapIndex: d,
                } = r,
                c = e,
                u = (e) => {
                  let t = e - r.virtual.slidesBefore;
                  return (
                    t < 0 && (t = r.virtual.slides.length + t),
                    t >= r.virtual.slides.length &&
                      (t -= r.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    let t;
                    let { slidesGrid: i, params: r } = e,
                      l = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? l >= i[e] && l < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : l >= i[e] && l < i[e + 1] && (t = e + 1)
                        : l >= i[e] && (t = e);
                    return (
                      r.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(r)),
                s.indexOf(l) >= 0)
              )
                t = s.indexOf(l);
              else {
                let e = Math.min(n.slidesPerGroupSkip, c);
                t = e + Math.floor((c - e) / n.slidesPerGroup);
              }
              if (
                (t >= s.length && (t = s.length - 1), c === a && !r.params.loop)
              ) {
                t !== d && ((r.snapIndex = t), r.emit("snapIndexChange"));
                return;
              }
              if (
                c === a &&
                r.params.loop &&
                r.virtual &&
                r.params.virtual.enabled
              ) {
                r.realIndex = u(c);
                return;
              }
              let p = r.grid && n.grid && n.grid.rows > 1;
              if (r.virtual && n.virtual.enabled && n.loop) i = u(c);
              else if (p) {
                let e = r.slides.filter((e) => e.column === c)[0],
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(r.slides.indexOf(e), 0)),
                  (i = Math.floor(t / n.grid.rows));
              } else if (r.slides[c]) {
                let e = r.slides[c].getAttribute("data-swiper-slide-index");
                i = e ? parseInt(e, 10) : c;
              } else i = c;
              Object.assign(r, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: a,
                activeIndex: c,
              }),
                r.initialized && m(r),
                r.emit("activeIndexChange"),
                r.emit("snapIndexChange"),
                (r.initialized || r.params.runCallbacksOnInit) &&
                  (o !== i && r.emit("realIndexChange"), r.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let i;
              let r = this.params,
                l = e.closest(`.${r.slideClass}, swiper-slide`);
              !l &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !l &&
                    e.matches &&
                    e.matches(`.${r.slideClass}, swiper-slide`) &&
                    (l = e);
                });
              let s = !1;
              if (l) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === l) {
                    (s = !0), (i = e);
                    break;
                  }
              }
              if (l && s)
                (this.clickedSlide = l),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        l.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              r.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: i,
                translate: r,
                wrapperEl: l,
              } = this;
              if (t.virtualTranslate) return i ? -r : r;
              if (t.cssMode) return r;
              let s = (0, o.j)(l, e);
              return (s += this.cssOverflowAdjustment()), i && (s = -s), s || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: i,
                  params: r,
                  wrapperEl: l,
                  progress: s,
                } = this,
                n = 0,
                a = 0;
              this.isHorizontal() ? (n = i ? -e : e) : (a = e),
                r.roundLengths && ((n = Math.floor(n)), (a = Math.floor(a))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? n : a),
                r.cssMode
                  ? (l[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -n : -a)
                  : r.virtualTranslate ||
                    (this.isHorizontal()
                      ? (n -= this.cssOverflowAdjustment())
                      : (a -= this.cssOverflowAdjustment()),
                    (l.style.transform = `translate3d(${n}px, ${a}px, 0px)`));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== s &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, r, l) {
              let s;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === r && (r = !0);
              let n = this,
                { params: a, wrapperEl: d } = n;
              if (n.animating && a.preventInteractionOnTransition) return !1;
              let c = n.minTranslate(),
                u = n.maxTranslate();
              if (
                ((s = r && e > c ? c : r && e < u ? u : e),
                n.updateProgress(s),
                a.cssMode)
              ) {
                let e = n.isHorizontal();
                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -s;
                else {
                  if (!n.support.smoothScroll)
                    return (
                      (0, o.r)({
                        swiper: n,
                        targetPosition: -s,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  d.scrollTo({ [e ? "left" : "top"]: -s, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (n.setTransition(0),
                    n.setTranslate(s),
                    i &&
                      (n.emit("beforeTransitionStart", t, l),
                      n.emit("transitionEnd")))
                  : (n.setTransition(t),
                    n.setTranslate(s),
                    i &&
                      (n.emit("beforeTransitionStart", t, l),
                      n.emit("transitionStart")),
                    n.animating ||
                      ((n.animating = !0),
                      n.onTranslateToWrapperTransitionEnd ||
                        (n.onTranslateToWrapperTransitionEnd = function (e) {
                          n &&
                            !n.destroyed &&
                            e.target === this &&
                            (n.wrapperEl.removeEventListener(
                              "transitionend",
                              n.onTranslateToWrapperTransitionEnd
                            ),
                            (n.onTranslateToWrapperTransitionEnd = null),
                            delete n.onTranslateToWrapperTransitionEnd,
                            (n.animating = !1),
                            i && n.emit("transitionEnd"));
                        }),
                      n.wrapperEl.addEventListener(
                        "transitionend",
                        n.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                v({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  v({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, r, l) {
              let s;
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let n = this,
                a = e;
              a < 0 && (a = 0);
              let {
                params: d,
                snapGrid: c,
                slidesGrid: u,
                previousIndex: p,
                activeIndex: f,
                rtlTranslate: h,
                wrapperEl: m,
                enabled: v,
              } = n;
              if (
                (!v && !r && !l) ||
                n.destroyed ||
                (n.animating && d.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = n.params.speed);
              let g = Math.min(n.params.slidesPerGroupSkip, a),
                w = g + Math.floor((a - g) / n.params.slidesPerGroup);
              w >= c.length && (w = c.length - 1);
              let y = -c[w];
              if (d.normalizeSlideIndex)
                for (let e = 0; e < u.length; e += 1) {
                  let t = -Math.floor(100 * y),
                    i = Math.floor(100 * u[e]),
                    r = Math.floor(100 * u[e + 1]);
                  void 0 !== u[e + 1]
                    ? t >= i && t < r - (r - i) / 2
                      ? (a = e)
                      : t >= i && t < r && (a = e + 1)
                    : t >= i && (a = e);
                }
              if (
                n.initialized &&
                a !== f &&
                ((!n.allowSlideNext &&
                  (h
                    ? y > n.translate && y > n.minTranslate()
                    : y < n.translate && y < n.minTranslate())) ||
                  (!n.allowSlidePrev &&
                    y > n.translate &&
                    y > n.maxTranslate() &&
                    (f || 0) !== a))
              )
                return !1;
              if (
                (a !== (p || 0) && i && n.emit("beforeSlideChangeStart"),
                n.updateProgress(y),
                (s = a > f ? "next" : a < f ? "prev" : "reset"),
                (h && -y === n.translate) || (!h && y === n.translate))
              )
                return (
                  n.updateActiveIndex(a),
                  d.autoHeight && n.updateAutoHeight(),
                  n.updateSlidesClasses(),
                  "slide" !== d.effect && n.setTranslate(y),
                  "reset" !== s &&
                    (n.transitionStart(i, s), n.transitionEnd(i, s)),
                  !1
                );
              if (d.cssMode) {
                let e = n.isHorizontal(),
                  i = h ? y : -y;
                if (0 === t) {
                  let t = n.virtual && n.params.virtual.enabled;
                  t &&
                    ((n.wrapperEl.style.scrollSnapType = "none"),
                    (n._immediateVirtual = !0)),
                    t &&
                    !n._cssModeVirtualInitialSet &&
                    n.params.initialSlide > 0
                      ? ((n._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (m[e ? "scrollLeft" : "scrollTop"] = i),
                    t &&
                      requestAnimationFrame(() => {
                        (n.wrapperEl.style.scrollSnapType = ""),
                          (n._immediateVirtual = !1);
                      });
                } else {
                  if (!n.support.smoothScroll)
                    return (
                      (0, o.r)({
                        swiper: n,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              return (
                n.setTransition(t),
                n.setTranslate(y),
                n.updateActiveIndex(a),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", t, r),
                n.transitionStart(i, s),
                0 === t
                  ? n.transitionEnd(i, s)
                  : n.animating ||
                    ((n.animating = !0),
                    n.onSlideToWrapperTransitionEnd ||
                      (n.onSlideToWrapperTransitionEnd = function (e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (n.wrapperEl.removeEventListener(
                            "transitionend",
                            n.onSlideToWrapperTransitionEnd
                          ),
                          (n.onSlideToWrapperTransitionEnd = null),
                          delete n.onSlideToWrapperTransitionEnd,
                          n.transitionEnd(i, s));
                      }),
                    n.wrapperEl.addEventListener(
                      "transitionend",
                      n.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, r) {
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let l = this;
              if (l.destroyed) return;
              void 0 === t && (t = l.params.speed);
              let s = l.grid && l.params.grid && l.params.grid.rows > 1,
                n = e;
              if (l.params.loop) {
                if (l.virtual && l.params.virtual.enabled)
                  n += l.virtual.slidesBefore;
                else {
                  let e;
                  if (s) {
                    let t = n * l.params.grid.rows;
                    e = l.slides.filter(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    )[0].column;
                  } else e = l.getSlideIndexByData(n);
                  let t = s
                      ? Math.ceil(l.slides.length / l.params.grid.rows)
                      : l.slides.length,
                    { centeredSlides: i } = l.params,
                    a = l.params.slidesPerView;
                  "auto" === a
                    ? (a = l.slidesPerViewDynamic())
                    : ((a = Math.ceil(parseFloat(l.params.slidesPerView, 10))),
                      i && a % 2 == 0 && (a += 1));
                  let o = t - e < a;
                  if (
                    (i && (o = o || e < Math.ceil(a / 2)),
                    r &&
                      i &&
                      "auto" !== l.params.slidesPerView &&
                      !s &&
                      (o = !1),
                    o)
                  ) {
                    let r = i
                      ? e < l.activeIndex
                        ? "prev"
                        : "next"
                      : e - l.activeIndex - 1 < l.params.slidesPerView
                      ? "next"
                      : "prev";
                    l.loopFix({
                      direction: r,
                      slideTo: !0,
                      activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === r ? l.realIndex : void 0,
                    });
                  }
                  if (s) {
                    let e = n * l.params.grid.rows;
                    n = l.slides.filter(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    )[0].column;
                  } else n = l.getSlideIndexByData(n);
                }
              }
              return (
                requestAnimationFrame(() => {
                  l.slideTo(n, t, i, r);
                }),
                l
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                { enabled: l, params: s, animating: n } = r;
              if (!l || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let a = s.slidesPerGroup;
              "auto" === s.slidesPerView &&
                1 === s.slidesPerGroup &&
                s.slidesPerGroupAuto &&
                (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
              let o = r.activeIndex < s.slidesPerGroupSkip ? 1 : a,
                d = r.virtual && s.virtual.enabled;
              if (s.loop) {
                if (n && !d && s.loopPreventsSliding) return !1;
                if (
                  (r.loopFix({ direction: "next" }),
                  (r._clientLeft = r.wrapperEl.clientLeft),
                  r.activeIndex === r.slides.length - 1 && s.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      r.slideTo(r.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return s.rewind && r.isEnd
                ? r.slideTo(0, e, t, i)
                : r.slideTo(r.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                {
                  params: l,
                  snapGrid: s,
                  slidesGrid: n,
                  rtlTranslate: a,
                  enabled: o,
                  animating: d,
                } = r;
              if (!o || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let c = r.virtual && l.virtual.enabled;
              if (l.loop) {
                if (d && !c && l.loopPreventsSliding) return !1;
                r.loopFix({ direction: "prev" }),
                  (r._clientLeft = r.wrapperEl.clientLeft);
              }
              function u(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = u(a ? r.translate : -r.translate),
                f = s.map((e) => u(e)),
                h = s[f.indexOf(p) - 1];
              if (void 0 === h && l.cssMode) {
                let e;
                s.forEach((t, i) => {
                  p >= t && (e = i);
                }),
                  void 0 !== e && (h = s[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== h &&
                  ((m = n.indexOf(h)) < 0 && (m = r.activeIndex - 1),
                  "auto" === l.slidesPerView &&
                    1 === l.slidesPerGroup &&
                    l.slidesPerGroupAuto &&
                    (m = Math.max(
                      (m = m - r.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                l.rewind && r.isBeginning)
              ) {
                let l =
                  r.params.virtual && r.params.virtual.enabled && r.virtual
                    ? r.virtual.slides.length - 1
                    : r.slides.length - 1;
                return r.slideTo(l, e, t, i);
              }
              return l.loop && 0 === r.activeIndex && l.cssMode
                ? (requestAnimationFrame(() => {
                    r.slideTo(m, e, t, i);
                  }),
                  !0)
                : r.slideTo(m, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, i)
                );
            },
            slideToClosest: function (e, t, i, r) {
              if (
                (void 0 === t && (t = !0),
                void 0 === r && (r = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let l = this.activeIndex,
                s = Math.min(this.params.slidesPerGroupSkip, l),
                n = s + Math.floor((l - s) / this.params.slidesPerGroup),
                a = this.rtlTranslate ? this.translate : -this.translate;
              if (a >= this.snapGrid[n]) {
                let e = this.snapGrid[n];
                a - e > (this.snapGrid[n + 1] - e) * r &&
                  (l += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[n - 1];
                a - e <= (this.snapGrid[n] - e) * r &&
                  (l -= this.params.slidesPerGroup);
              }
              return (
                (l = Math.min(
                  (l = Math.max(l, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(l, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: r } = t,
                l =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                s = t.clickedIndex,
                n = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? s < t.loopedSlides - l / 2 ||
                      s > t.slides.length - t.loopedSlides + l / 2
                      ? (t.loopFix(),
                        (s = t.getSlideIndex(
                          (0, o.e)(r, `${n}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        (0, o.n)(() => {
                          t.slideTo(s);
                        }))
                      : t.slideTo(s)
                    : s > t.slides.length - l
                    ? (t.loopFix(),
                      (s = t.getSlideIndex(
                        (0, o.e)(r, `${n}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      (0, o.n)(() => {
                        t.slideTo(s);
                      }))
                    : t.slideTo(s);
              } else t.slideTo(s);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: i, slidesEl: r } = t;
              if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
              let l = t.grid && i.grid && i.grid.rows > 1,
                s = i.slidesPerGroup * (l ? i.grid.rows : 1),
                n = t.slides.length % s != 0,
                a = l && t.slides.length % i.grid.rows != 0,
                d = (e) => {
                  for (let r = 0; r < e; r += 1) {
                    let e = t.isElement
                      ? (0, o.c)("swiper-slide", [i.slideBlankClass])
                      : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              n
                ? i.loopAddBlankSlides
                  ? (d(s - (t.slides.length % s)),
                    t.recalcSlides(),
                    t.updateSlides())
                  : (0, o.t)(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : a &&
                  (i.loopAddBlankSlides
                    ? (d(i.grid.rows - (t.slides.length % i.grid.rows)),
                      t.recalcSlides(),
                      t.updateSlides())
                    : (0, o.t)(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                (0, o.e)(r, `.${i.slideClass}, swiper-slide`).forEach(
                  (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  }
                ),
                t.loopFix({
                  slideRealIndex: e,
                  direction: i.centeredSlides ? void 0 : "next",
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: r,
                  setTranslate: l,
                  activeSlideIndex: s,
                  byController: n,
                  byMousewheel: a,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: c,
                  allowSlidePrev: u,
                  allowSlideNext: p,
                  slidesEl: f,
                  params: h,
                } = d,
                { centeredSlides: m } = h;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && h.virtual.enabled)
              ) {
                i &&
                  (h.centeredSlides || 0 !== d.snapIndex
                    ? h.centeredSlides && d.snapIndex < h.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = u),
                  (d.allowSlideNext = p),
                  d.emit("loopFix");
                return;
              }
              let v = h.slidesPerView;
              "auto" === v
                ? (v = d.slidesPerViewDynamic())
                : ((v = Math.ceil(parseFloat(h.slidesPerView, 10))),
                  m && v % 2 == 0 && (v += 1));
              let g = h.slidesPerGroupAuto ? v : h.slidesPerGroup,
                w = g;
              w % g != 0 && (w += g - (w % g)),
                (w += h.loopAdditionalSlides),
                (d.loopedSlides = w);
              let y = d.grid && h.grid && h.grid.rows > 1;
              c.length < v + w
                ? (0, o.t)(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : y &&
                  "row" === h.grid.fill &&
                  (0, o.t)(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let b = [],
                S = [],
                E = d.activeIndex;
              void 0 === s
                ? (s = d.getSlideIndex(
                    c.filter((e) => e.classList.contains(h.slideActiveClass))[0]
                  ))
                : (E = s);
              let x = "next" === r || !r,
                T = "prev" === r || !r,
                C = 0,
                _ = 0,
                k = y ? Math.ceil(c.length / h.grid.rows) : c.length,
                M =
                  (y ? c[s].column : s) +
                  (m && void 0 === l ? -v / 2 + 0.5 : 0);
              if (M < w) {
                C = Math.max(w - M, g);
                for (let e = 0; e < w - M; e += 1) {
                  let t = e - Math.floor(e / k) * k;
                  if (y) {
                    let e = k - t - 1;
                    for (let t = c.length - 1; t >= 0; t -= 1)
                      c[t].column === e && b.push(t);
                  } else b.push(k - t - 1);
                }
              } else if (M + v > k - w) {
                _ = Math.max(M - (k - 2 * w), g);
                for (let e = 0; e < _; e += 1) {
                  let t = e - Math.floor(e / k) * k;
                  y
                    ? c.forEach((e, i) => {
                        e.column === t && S.push(i);
                      })
                    : S.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                T &&
                  b.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      f.prepend(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                x &&
                  S.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      f.append(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === h.slidesPerView
                  ? d.updateSlides()
                  : y &&
                    ((b.length > 0 && T) || (S.length > 0 && x)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                h.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (b.length > 0 && T) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[E],
                      t = d.slidesGrid[E + C] - e;
                    a
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(E + Math.ceil(C), 0, !1, !0),
                        l &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else if (l) {
                    let e = y ? b.length / h.grid.rows : b.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (S.length > 0 && x) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[E],
                      t = d.slidesGrid[E - _] - e;
                    a
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(E - _, 0, !1, !0),
                        l &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = y ? S.length / h.grid.rows : S.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((d.allowSlidePrev = u),
                (d.allowSlideNext = p),
                d.controller && d.controller.control && !n)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: r,
                  setTranslate: l,
                  activeSlideIndex: s,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === h.slidesPerView && i,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          h.slidesPerView && i,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled))
                return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                i[
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = w.bind(this)),
                (this.onTouchMove = y.bind(this)),
                (this.onTouchEnd = b.bind(this)),
                (this.onDocumentTouchStart = C.bind(this)),
                e.cssMode && (this.onScroll = x.bind(this)),
                (this.onClick = E.bind(this)),
                (this.onLoad = T.bind(this)),
                _(this, "on");
            },
            detachEvents: function () {
              _(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: r, el: l } = e,
                s = r.breakpoints;
              if (!s || (s && 0 === Object.keys(s).length)) return;
              let n = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
              if (!n || e.currentBreakpoint === n) return;
              let a = (n in s ? s[n] : void 0) || e.originalParams,
                d = k(e, r),
                c = k(e, a),
                u = e.params.grabCursor,
                p = a.grabCursor,
                f = r.enabled;
              d && !c
                ? (l.classList.remove(
                    `${r.containerModifierClass}grid`,
                    `${r.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (l.classList.add(`${r.containerModifierClass}grid`),
                  ((a.grid.fill && "column" === a.grid.fill) ||
                    (!a.grid.fill && "column" === r.grid.fill)) &&
                    l.classList.add(`${r.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                u && !p ? e.unsetGrabCursor() : !u && p && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === a[t]) return;
                  let i = r[t] && r[t].enabled,
                    l = a[t] && a[t].enabled;
                  i && !l && e[t].disable(), !i && l && e[t].enable();
                });
              let h = a.direction && a.direction !== r.direction,
                m = r.loop && (a.slidesPerView !== r.slidesPerView || h),
                v = r.loop;
              h && i && e.changeDirection(), (0, o.u)(e.params, a);
              let g = e.params.enabled,
                w = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                f && !g ? e.disable() : !f && g && e.enable(),
                (e.currentBreakpoint = n),
                e.emit("_beforeBreakpoint", a),
                i &&
                  (m
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !v && w
                    ? (e.loopCreate(t), e.updateSlides())
                    : v && !w && e.loopDestroy()),
                e.emit("breakpoint", a);
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !i))
              )
                return;
              let r = !1,
                l = (0, a.a)(),
                s = "window" === t ? l.innerHeight : i.clientHeight,
                n = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: s * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < n.length; e += 1) {
                let { point: s, value: a } = n[e];
                "window" === t
                  ? l.matchMedia(`(min-width: ${a}px)`).matches && (r = s)
                  : a <= i.clientWidth && (r = s);
              }
              return r || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: r, device: l } = this,
                s = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((r) => {
                            e[r] && i.push(t + r);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: l.android },
                    { ios: l.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...s), r.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e.classList.remove(...t), this.emitContainerClasses();
            },
          },
        },
        O = {};
      class P {
        constructor() {
          let e, t;
          for (var i = arguments.length, r = Array(i), l = 0; l < i; l++)
            r[l] = arguments[l];
          1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = (0, o.u)({}, t)),
            e && !t.el && (t.el = e);
          let n = (0, a.g)();
          if (
            t.el &&
            "string" == typeof t.el &&
            n.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              n.querySelectorAll(t.el).forEach((i) => {
                let r = (0, o.u)({}, t, { el: i });
                e.push(new P(r));
              }),
              e
            );
          }
          let u = this;
          (u.__swiper__ = !0),
            (u.support = d()),
            (u.device = c({ userAgent: t.userAgent })),
            (u.browser =
              (s ||
                (s = (function () {
                  let e = (0, a.a)(),
                    t = c(),
                    i = !1;
                  function r() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      0 > t.indexOf("chrome") &&
                      0 > t.indexOf("android")
                    );
                  }
                  if (r()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                      let [e, r] = t
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      i = e < 16 || (16 === e && r < 2);
                    }
                  }
                  let l = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                    s = r(),
                    n = s || (l && t.ios);
                  return {
                    isSafari: i || s,
                    needPerspectiveFix: i,
                    need3dFix: n,
                    isWebView: l,
                  };
                })()),
              s)),
            (u.eventsListeners = {}),
            (u.eventsAnyListeners = []),
            (u.modules = [...u.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              u.modules.push(...t.modules);
          let p = {};
          u.modules.forEach((e) => {
            var i;
            e({
              params: t,
              swiper: u,
              extendParams:
                ((i = t),
                function (e) {
                  void 0 === e && (e = {});
                  let t = Object.keys(e)[0],
                    r = e[t];
                  if (
                    "object" != typeof r ||
                    null === r ||
                    (!0 === i[t] && (i[t] = { enabled: !0 }),
                    "navigation" === t &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].prevEl &&
                      !i[t].nextEl &&
                      (i[t].auto = !0),
                    ["pagination", "scrollbar"].indexOf(t) >= 0 &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].el &&
                      (i[t].auto = !0),
                    !(t in i && "enabled" in r))
                  ) {
                    (0, o.u)(p, e);
                    return;
                  }
                  "object" != typeof i[t] ||
                    "enabled" in i[t] ||
                    (i[t].enabled = !0),
                    i[t] || (i[t] = { enabled: !1 }),
                    (0, o.u)(p, e);
                }),
              on: u.on.bind(u),
              once: u.once.bind(u),
              off: u.off.bind(u),
              emit: u.emit.bind(u),
            });
          });
          let f = (0, o.u)({}, M, p);
          return (
            (u.params = (0, o.u)({}, f, O, t)),
            (u.originalParams = (0, o.u)({}, u.params)),
            (u.passedParams = (0, o.u)({}, t)),
            u.params &&
              u.params.on &&
              Object.keys(u.params.on).forEach((e) => {
                u.on(e, u.params.on[e]);
              }),
            u.params && u.params.onAny && u.onAny(u.params.onAny),
            Object.assign(u, {
              enabled: u.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === u.params.direction,
              isVertical: () => "vertical" === u.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: u.params.allowSlideNext,
              allowSlidePrev: u.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: u.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: u.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            u.emit("_swiper"),
            u.params.init && u.init(),
            u
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            r = (0, o.e)(t, `.${i.slideClass}, swiper-slide`),
            l = (0, o.h)(r[0]);
          return (0, o.h)(e) - l;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            r = (this.maxTranslate() - i) * e + i;
          this.translateTo(r, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let r = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: i,
              slides: r,
              slidesGrid: l,
              slidesSizesGrid: s,
              size: n,
              activeIndex: a,
            } = this,
            o = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = r[a] ? Math.ceil(r[a].swiperSlideSize) : 0;
            for (let i = a + 1; i < r.length; i += 1)
              r[i] &&
                !e &&
                ((t += Math.ceil(r[i].swiperSlideSize)),
                (o += 1),
                t > n && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              r[i] &&
                !e &&
                ((t += r[i].swiperSlideSize), (o += 1), t > n && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < r.length; e += 1)
              (t ? l[e] + s[e] - l[a] < n : l[e] - l[a] < n) && (o += 1);
          else for (let e = a - 1; e >= 0; e -= 1) l[a] - l[e] < n && (o += 1);
          return o;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: r } = t;
          function l() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && f(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            r.freeMode && r.freeMode.enabled && !r.cssMode)
          )
            l(), r.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === r.slidesPerView || r.slidesPerView > 1) &&
              t.isEnd &&
              !r.centeredSlides
            ) {
              let i =
                t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || l();
          }
          r.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${i}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let r = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            l =
              i && i.shadowRoot && i.shadowRoot.querySelector
                ? i.shadowRoot.querySelector(r())
                : (0, o.e)(i, r())[0];
          return (
            !l &&
              t.params.createElements &&
              ((l = (0, o.c)("div", t.params.wrapperClass)),
              i.append(l),
              (0, o.e)(i, `.${t.params.slideClass}`).forEach((e) => {
                l.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: l,
              slidesEl:
                t.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : l,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl:
                "rtl" === i.dir.toLowerCase() ||
                "rtl" === (0, o.o)(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() ||
                  "rtl" === (0, o.o)(i, "direction")),
              wrongRTL: "-webkit-box" === (0, o.o)(l, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? f(t, e)
                : e.addEventListener("load", (e) => {
                    f(t, e.target);
                  });
            }),
            m(t),
            (t.initialized = !0),
            m(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: r, el: l, wrapperEl: s, slides: n } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              r.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                l.removeAttribute("style"),
                s.removeAttribute("style"),
                n &&
                  n.length &&
                  n.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e && ((i.el.swiper = null), (0, o.v)(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, o.u)(O, e);
        }
        static get extendedDefaults() {
          return O;
        }
        static get defaults() {
          return M;
        }
        static installModule(e) {
          P.prototype.__modules__ || (P.prototype.__modules__ = []);
          let t = P.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => P.installModule(e))
              : P.installModule(e),
            P
          );
        }
      }
      Object.keys(L).forEach((e) => {
        Object.keys(L[e]).forEach((t) => {
          P.prototype[t] = L[e][t];
        });
      }),
        P.use([
          function (e) {
            let { swiper: t, on: i, emit: r } = e,
              l = (0, a.a)(),
              s = null,
              n = null,
              o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              d = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (s = new ResizeObserver((e) => {
                    n = l.requestAnimationFrame(() => {
                      let { width: i, height: r } = t,
                        l = i,
                        s = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: r,
                          target: n,
                        } = e;
                        (n && n !== t.el) ||
                          ((l = r ? r.width : (i[0] || i).inlineSize),
                          (s = r ? r.height : (i[0] || i).blockSize));
                      }),
                        (l !== i || s !== r) && o();
                    });
                  })).observe(t.el);
              },
              c = () => {
                n && l.cancelAnimationFrame(n),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
              },
              u = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            i("init", () => {
              if (t.params.resizeObserver && void 0 !== l.ResizeObserver) {
                d();
                return;
              }
              l.addEventListener("resize", o),
                l.addEventListener("orientationchange", u);
            }),
              i("destroy", () => {
                c(),
                  l.removeEventListener("resize", o),
                  l.removeEventListener("orientationchange", u);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: r, emit: l } = e,
              s = [],
              n = (0, a.a)(),
              d = function (e, i) {
                void 0 === i && (i = {});
                let r = new (n.MutationObserver || n.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      l("observerUpdate", e[0]);
                      return;
                    }
                    let i = function () {
                      l("observerUpdate", e[0]);
                    };
                    n.requestAnimationFrame
                      ? n.requestAnimationFrame(i)
                      : n.setTimeout(i, 0);
                  }
                );
                r.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList: void 0 === i.childList || i.childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  s.push(r);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, o.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) d(e[t]);
                  }
                  d(t.hostEl, { childList: t.params.observeSlideChildren }),
                    d(t.wrapperEl, { attributes: !1 });
                }
              }),
              r("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      let A = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function I(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function z(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : I(t[i]) && I(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : z(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function R(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function N(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function D(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function $(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      let B = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function j() {
        return (j = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function G(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function F(e, t) {
        return "undefined" == typeof window
          ? (0, n.useEffect)(e, t)
          : (0, n.useLayoutEffect)(e, t);
      }
      let V = (0, n.createContext)(null),
        H = (0, n.createContext)(null),
        W = (0, n.forwardRef)(function (e, t) {
          var i;
          let {
              className: r,
              tag: l = "div",
              wrapperTag: s = "div",
              children: a,
              onSwiper: o,
              ...d
            } = void 0 === e ? {} : e,
            c = !1,
            [u, p] = (0, n.useState)("swiper"),
            [f, h] = (0, n.useState)(null),
            [m, v] = (0, n.useState)(!1),
            g = (0, n.useRef)(!1),
            w = (0, n.useRef)(null),
            y = (0, n.useRef)(null),
            b = (0, n.useRef)(null),
            S = (0, n.useRef)(null),
            E = (0, n.useRef)(null),
            x = (0, n.useRef)(null),
            T = (0, n.useRef)(null),
            C = (0, n.useRef)(null),
            {
              params: _,
              passedParams: k,
              rest: L,
              events: O,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                r = {},
                l = {};
              z(i, M), (i._emitClasses = !0), (i.init = !1);
              let s = {},
                n = A.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((a) => {
                  void 0 !== e[a] &&
                    (n.indexOf(a) >= 0
                      ? I(e[a])
                        ? ((i[a] = {}),
                          (l[a] = {}),
                          z(i[a], e[a]),
                          z(l[a], e[a]))
                        : ((i[a] = e[a]), (l[a] = e[a]))
                      : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a]
                      ? t
                        ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                        : (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                      : (s[a] = e[a]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: l, rest: s, events: r }
              );
            })(d),
            { slides: V, slots: W } = (function (e) {
              let t = [],
                i = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                n.Children.toArray(e).forEach((e) => {
                  if (G(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot])
                    i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let r = (function e(t) {
                      let i = [];
                      return (
                        n.Children.toArray(t).forEach((t) => {
                          G(t)
                            ? i.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => i.push(e));
                        }),
                        i
                      );
                    })(e.props.children);
                    r.length > 0
                      ? r.forEach((e) => t.push(e))
                      : i["container-end"].push(e);
                  } else i["container-end"].push(e);
                }),
                { slides: t, slots: i }
              );
            })(a),
            q = () => {
              v(!m);
            };
          Object.assign(_.on, {
            _containerClasses(e, t) {
              p(t);
            },
          });
          let X = () => {
            Object.assign(_.on, O), (c = !0);
            let e = { ..._ };
            if (
              (delete e.wrapperClass,
              (y.current = new P(e)),
              y.current.virtual && y.current.params.virtual.enabled)
            ) {
              y.current.virtual.slides = V;
              let e = {
                cache: !1,
                slides: V,
                renderExternal: h,
                renderExternalUpdate: !1,
              };
              z(y.current.params.virtual, e),
                z(y.current.originalParams.virtual, e);
            }
          };
          w.current || X(), y.current && y.current.on("_beforeBreakpoint", q);
          let Y = () => {
              !c &&
                O &&
                y.current &&
                Object.keys(O).forEach((e) => {
                  y.current.on(e, O[e]);
                });
            },
            U = () => {
              O &&
                y.current &&
                Object.keys(O).forEach((e) => {
                  y.current.off(e, O[e]);
                });
            };
          return (
            (0, n.useEffect)(() => () => {
              y.current && y.current.off("_beforeBreakpoint", q);
            }),
            (0, n.useEffect)(() => {
              !g.current &&
                y.current &&
                (y.current.emitSlidesClasses(), (g.current = !0));
            }),
            F(() => {
              if ((t && (t.current = w.current), w.current))
                return (
                  y.current.destroyed && X(),
                  (function (e, t) {
                    let {
                      el: i,
                      nextEl: r,
                      prevEl: l,
                      paginationEl: s,
                      scrollbarEl: n,
                      swiper: a,
                    } = e;
                    R(t) &&
                      r &&
                      l &&
                      ((a.params.navigation.nextEl = r),
                      (a.originalParams.navigation.nextEl = r),
                      (a.params.navigation.prevEl = l),
                      (a.originalParams.navigation.prevEl = l)),
                      N(t) &&
                        s &&
                        ((a.params.pagination.el = s),
                        (a.originalParams.pagination.el = s)),
                      D(t) &&
                        n &&
                        ((a.params.scrollbar.el = n),
                        (a.originalParams.scrollbar.el = n)),
                      a.init(i);
                  })(
                    {
                      el: w.current,
                      nextEl: E.current,
                      prevEl: x.current,
                      paginationEl: T.current,
                      scrollbarEl: C.current,
                      swiper: y.current,
                    },
                    _
                  ),
                  o && !y.current.destroyed && o(y.current),
                  () => {
                    y.current &&
                      !y.current.destroyed &&
                      y.current.destroy(!0, !1);
                  }
                );
            }, []),
            F(() => {
              Y();
              let e = (function (e, t, i, r, l) {
                let s = [];
                if (!t) return s;
                let n = (e) => {
                  0 > s.indexOf(e) && s.push(e);
                };
                if (i && r) {
                  let e = r.map(l),
                    t = i.map(l);
                  e.join("") !== t.join("") && n("children"),
                    r.length !== i.length && n("children");
                }
                return (
                  A.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((i) => {
                      if (i in e && i in t) {
                        if (I(e[i]) && I(t[i])) {
                          let r = Object.keys(e[i]),
                            l = Object.keys(t[i]);
                          r.length !== l.length
                            ? n(i)
                            : (r.forEach((r) => {
                                e[i][r] !== t[i][r] && n(i);
                              }),
                              l.forEach((r) => {
                                e[i][r] !== t[i][r] && n(i);
                              }));
                        } else e[i] !== t[i] && n(i);
                      }
                    }),
                  s
                );
              })(k, b.current, V, S.current, (e) => e.key);
              return (
                (b.current = k),
                (S.current = V),
                e.length &&
                  y.current &&
                  !y.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      r,
                      l,
                      s,
                      n,
                      a,
                      o,
                      {
                        swiper: d,
                        slides: c,
                        passedParams: u,
                        changedParams: p,
                        nextEl: f,
                        prevEl: h,
                        scrollbarEl: m,
                        paginationEl: v,
                      } = e,
                      g = p.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: w,
                        pagination: y,
                        navigation: b,
                        scrollbar: S,
                        virtual: E,
                        thumbs: x,
                      } = d;
                    p.includes("thumbs") &&
                      u.thumbs &&
                      u.thumbs.swiper &&
                      w.thumbs &&
                      !w.thumbs.swiper &&
                      (t = !0),
                      p.includes("controller") &&
                        u.controller &&
                        u.controller.control &&
                        w.controller &&
                        !w.controller.control &&
                        (i = !0),
                      p.includes("pagination") &&
                        u.pagination &&
                        (u.pagination.el || v) &&
                        (w.pagination || !1 === w.pagination) &&
                        y &&
                        !y.el &&
                        (r = !0),
                      p.includes("scrollbar") &&
                        u.scrollbar &&
                        (u.scrollbar.el || m) &&
                        (w.scrollbar || !1 === w.scrollbar) &&
                        S &&
                        !S.el &&
                        (l = !0),
                      p.includes("navigation") &&
                        u.navigation &&
                        (u.navigation.prevEl || h) &&
                        (u.navigation.nextEl || f) &&
                        (w.navigation || !1 === w.navigation) &&
                        b &&
                        !b.prevEl &&
                        !b.nextEl &&
                        (s = !0);
                    let T = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (w[e].prevEl = void 0),
                            (w[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (w[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    p.includes("loop") &&
                      d.isElement &&
                      (w.loop && !u.loop
                        ? (n = !0)
                        : !w.loop && u.loop
                        ? (a = !0)
                        : (o = !0)),
                      g.forEach((e) => {
                        if (I(w[e]) && I(u[e]))
                          Object.assign(w[e], u[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in u[e] &&
                              !u[e].enabled &&
                              T(e);
                        else {
                          let t = u[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && T(e)
                            : (w[e] = u[e]);
                        }
                      }),
                      g.includes("controller") &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        w.controller &&
                        w.controller.control &&
                        (d.controller.control = w.controller.control),
                      p.includes("children") && c && E && w.virtual.enabled
                        ? ((E.slides = c), E.update(!0))
                        : p.includes("virtual") &&
                          E &&
                          w.virtual.enabled &&
                          (c && (E.slides = c), E.update(!0)),
                      p.includes("children") && c && w.loop && (o = !0),
                      t && x.init() && x.update(!0),
                      i && (d.controller.control = w.controller.control),
                      r &&
                        (d.isElement &&
                          (!v || "string" == typeof v) &&
                          ((v = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          v.part.add("pagination"),
                          d.el.appendChild(v)),
                        v && (w.pagination.el = v),
                        y.init(),
                        y.render(),
                        y.update()),
                      l &&
                        (d.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          m.part.add("scrollbar"),
                          d.el.appendChild(m)),
                        m && (w.scrollbar.el = m),
                        S.init(),
                        S.updateSize(),
                        S.setTranslate()),
                      s &&
                        (d.isElement &&
                          ((f && "string" != typeof f) ||
                            ((f = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (f.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            f.part.add("button-next"),
                            d.el.appendChild(f)),
                          (h && "string" != typeof h) ||
                            ((h = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (h.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            h.part.add("button-prev"),
                            d.el.appendChild(h))),
                        f && (w.navigation.nextEl = f),
                        h && (w.navigation.prevEl = h),
                        b.init(),
                        b.update()),
                      p.includes("allowSlideNext") &&
                        (d.allowSlideNext = u.allowSlideNext),
                      p.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = u.allowSlidePrev),
                      p.includes("direction") &&
                        d.changeDirection(u.direction, !1),
                      (n || o) && d.loopDestroy(),
                      (a || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: y.current,
                    slides: V,
                    passedParams: k,
                    changedParams: e,
                    nextEl: E.current,
                    prevEl: x.current,
                    scrollbarEl: C.current,
                    paginationEl: T.current,
                  }),
                () => {
                  U();
                }
              );
            }),
            F(() => {
              B(y.current);
            }, [f]),
            n.createElement(
              l,
              j({ ref: w, className: $(`${u}${r ? ` ${r}` : ""}`) }, L),
              n.createElement(
                H.Provider,
                { value: y.current },
                W["container-start"],
                n.createElement(
                  s,
                  {
                    className: (void 0 === (i = _.wrapperClass) && (i = ""), i)
                      ? i.includes("swiper-wrapper")
                        ? i
                        : `swiper-wrapper ${i}`
                      : "swiper-wrapper",
                  },
                  W["wrapper-start"],
                  _.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let r = (e) => {
                            let i = e;
                            return (
                              e < 0
                                ? (i = t.length + e)
                                : i >= t.length && (i -= t.length),
                              i
                            );
                          },
                          l = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${i.offset}px`,
                              }
                            : { top: `${i.offset}px` },
                          { from: s, to: a } = i,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          c = [];
                        for (let e = o; e < d; e += 1)
                          e >= s && e <= a && c.push(t[r(e)]);
                        return c.map((t, i) =>
                          n.cloneElement(t, {
                            swiper: e,
                            style: l,
                            key: t.props.virtualIndex || t.key || `slide-${i}`,
                          })
                        );
                      })(y.current, V, f)
                    : V.map((e, t) =>
                        n.cloneElement(e, {
                          swiper: y.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  W["wrapper-end"]
                ),
                R(_) &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("div", {
                      ref: x,
                      className: "swiper-button-prev",
                    }),
                    n.createElement("div", {
                      ref: E,
                      className: "swiper-button-next",
                    })
                  ),
                D(_) &&
                  n.createElement("div", {
                    ref: C,
                    className: "swiper-scrollbar",
                  }),
                N(_) &&
                  n.createElement("div", {
                    ref: T,
                    className: "swiper-pagination",
                  }),
                W["container-end"]
              )
            )
          );
        });
      W.displayName = "Swiper";
      let q = (0, n.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: r,
            className: l = "",
            swiper: s,
            zoom: a,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: c,
            ...u
          } = void 0 === e ? {} : e,
          p = (0, n.useRef)(null),
          [f, h] = (0, n.useState)("swiper-slide"),
          [m, v] = (0, n.useState)(!1);
        function g(e, t, i) {
          t === p.current && h(i);
        }
        F(() => {
          if (
            (void 0 !== c && (p.current.swiperSlideIndex = c),
            t && (t.current = p.current),
            p.current && s)
          ) {
            if (s.destroyed) {
              "swiper-slide" !== f && h("swiper-slide");
              return;
            }
            return (
              s.on("_slideClass", g),
              () => {
                s && s.off("_slideClass", g);
              }
            );
          }
        }),
          F(() => {
            s && p.current && !s.destroyed && h(s.getSlideClasses(p.current));
          }, [s]);
        let w = {
            isActive: f.indexOf("swiper-slide-active") >= 0,
            isVisible: f.indexOf("swiper-slide-visible") >= 0,
            isPrev: f.indexOf("swiper-slide-prev") >= 0,
            isNext: f.indexOf("swiper-slide-next") >= 0,
          },
          y = () => ("function" == typeof r ? r(w) : r);
        return n.createElement(
          i,
          j(
            {
              ref: p,
              className: $(`${f}${l ? ` ${l}` : ""}`),
              "data-swiper-slide-index": d,
              onLoad: () => {
                v(!0);
              },
            },
            u
          ),
          a &&
            n.createElement(
              V.Provider,
              { value: w },
              n.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof a ? a : void 0,
                },
                y(),
                o &&
                  !m &&
                  n.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !a &&
            n.createElement(
              V.Provider,
              { value: w },
              y(),
              o &&
                !m &&
                n.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      q.displayName = "SwiperSlide";
    },
  },
]);
