(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7640],
  {
    33129: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r(51010),
        i = r(60389),
        o = r(2997),
        c = r(78411),
        a = new (r(51597).Z)();
      function s(e) {
        if (!window.localStorage) return null;
        var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
        if (t) {
          var r,
            n = decodeURIComponent(t[1].replace(/\\+/g, " "));
          return (
            localStorage.setItem(e, JSON.stringify(l(n))),
            (r = l(n)),
            ("gclid" === e || "sscid" === e || "ssaid" === e) &&
              a.set(
                { sscid: "sas_sscid", ssaid: "sas_ssaid", gclid: "bclid" }[e],
                r.value,
                {
                  domain: ".bizee.com",
                  expires: new Date(r.expiryDate),
                  path: "/",
                }
              ),
            n
          );
        }
        var i = localStorage.getItem(e),
          o = i ? JSON.parse(i) : null;
        return o ? o.value : null;
      }
      function l(e) {
        return { value: e, expiryDate: new Date().getTime() + 7776e6 };
      }
      function u(e, t, r) {
        s(t) && !e.includes(t) && r.push("".concat(t, "=").concat(s(t)));
      }
      function A(e) {
        var t = [];
        return (u(e, "gclid", t),
        u(e, "sscid", t),
        u(e, "ssaid", t),
        u(e, "utm_campaign", t),
        u(e, "utm_source", t),
        u(e, "utm_medium", t),
        e.includes("?"))
          ? "".concat(e, "&").concat(t.join("&"))
          : "".concat(e, "?").concat(t.join("&"));
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              })
            )),
            n.forEach(function (t) {
              var n;
              (n = r[t]),
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = n);
            });
        }
        return e;
      }
      function p(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  r.push.apply(r, n);
                }
                return r;
              })(Object(t)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              }),
          e
        );
      }
      var f = function (e) {
        var t,
          r = e.href,
          a = e.rel,
          l = e.target,
          u = e.children,
          f = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var o = Object.getOwnPropertySymbols(e);
              for (n = 0; n < o.length; n++)
                (r = o[n]),
                  !(t.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, ["href", "rel", "target", "children"]),
          h = c.useRef(null);
        (t = "string" == typeof r ? r : (null == r ? void 0 : r.href) || "#"),
          (0, c.useEffect)(
            function () {
              var e = h.current;
              if (
                e &&
                (e.href.startsWith("https://orders.incfile.com") ||
                  e.href.startsWith("https://orders.bizee.com"))
              ) {
                var t = function () {
                    h.current.setAttribute(
                      "href",
                      A(h.current.getAttribute("href"))
                    );
                  },
                  r = function (e) {
                    e.stopImmediatePropagation(),
                      h.current.setAttribute(
                        "href",
                        A(h.current.getAttribute("href"))
                      );
                  },
                  n = s("gclid"),
                  i = s("sscid"),
                  o = s("ssaid"),
                  c = s("utm_campaign"),
                  a = s("utm_source"),
                  l = s("utm_medium");
                return (
                  (n || i || o || c || a || l) &&
                    (h.current.addEventListener("mousedown", t),
                    h.current.addEventListener("click", r)),
                  function () {
                    null == e || e.removeEventListener("mousedown", t),
                      null == e || e.removeEventListener("click", r);
                  }
                );
              }
            },
            [t, h]
          );
        var g = (0, i.tj)(r),
          b = d(
            {
              href:
                "string" == typeof r
                  ? (0, i.Jw)(r)
                  : p(d({}, r), {
                      href: (0, i.Jw)((null == r ? void 0 : r.href) || "#"),
                    }),
              rel: a || ("external" === g ? "noopener noreferrer" : void 0),
              target: l || ("external" === g ? "_blank" : void 0),
            },
            f
          );
        return "internal" === g
          ? (0, n.jsx)(
              o.default,
              p(d({ "data-testid": "autolink-next-link" }, b), {
                ref: h,
                children: u,
              })
            )
          : (0, n.jsx)(
              "a",
              p(d({ "data-testid": "autolink-a-tag" }, b), {
                ref: h,
                children: u,
              })
            );
      };
    },
    29102: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return A;
        },
      });
      var n = r(51010),
        i = r(54838);
      r(78411);
      var o = r(84826),
        c = r.n(o),
        a = r(12192),
        s = r.n(a),
        l = function (e) {
          var t = e;
          "string" == typeof e && (t = [e]);
          var r = function (e) {
            return Array.isArray(e)
              ? e.some(function (e) {
                  return t.includes(e);
                })
              : t.includes(e);
          };
          if (r("mobile") && !r(["tablet", "desktop"]))
            return (0, i.cx)(s().hideFromMobile, s().showFromTablet);
          if (r("mobile")) {
            var n = s().hidden;
            return (
              r("tablet") && !r("desktop")
                ? (n = (0, i.cx)(n, s().showFromDesktop))
                : (r("tablet") && r("desktop")) ||
                  (r("desktop") &&
                    (n = (0, i.cx)(
                      n,
                      s().showFromTablet,
                      s().hideFromDesktop
                    ))),
              n
            );
          }
          return r("tablet")
            ? r("desktop")
              ? s().hideFromTablet
              : (0, i.cx)(s().hideFromTablet, s().showFromDesktop)
            : r("desktop")
            ? s().hideFromDesktop
            : void 0;
        },
        u = (0, i.j)("", {
          variants: {
            variant: {
              section: c().section,
              content: c().content,
              none: "",
              hero: c().hero,
            },
          },
        }),
        A = function (e) {
          var t,
            r,
            o = e.as,
            c = e.children,
            a = e.className,
            s = e.variant,
            A = e.advancedBlockSettings,
            d = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    i = {},
                    o = Object.keys(e);
                  for (n = 0; n < o.length; n++)
                    (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                  return i;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r]);
              }
              return i;
            })(e, [
              "as",
              "children",
              "className",
              "variant",
              "advancedBlockSettings",
            ]),
            p = "div";
          return (
            o || "section" !== s ? o && (p = o) : (p = "section"),
            (0, n.jsx)(
              p,
              ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                      Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                      })
                    )),
                    n.forEach(function (t) {
                      var n;
                      (n = r[t]),
                        t in e
                          ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (e[t] = n);
                    });
                }
                return e;
              })(
                {
                  className: (0, i.cx)(
                    u({ variant: e.variant }),
                    (null == A ? void 0 : A.hideFor) && l(A.hideFor),
                    a
                  ),
                  id: null == A ? void 0 : A.navigationID,
                  style: {
                    paddingTop: null == A ? void 0 : A.spacingTop,
                    paddingBottom: null == A ? void 0 : A.spacingBottom,
                  },
                },
                d
              )),
              (r = r = { children: c }),
              Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(r)
                  )
                : (function (e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                    }
                    return r;
                  })(Object(r)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(r, e)
                    );
                  }),
              t)
            )
          );
        };
    },
    60389: function (e, t, r) {
      "use strict";
      r.d(t, {
        Jw: function () {
          return c;
        },
        kC: function () {
          return a;
        },
        au: function () {
          return g;
        },
        Rg: function () {
          return s;
        },
        R4: function () {
          return u;
        },
        Bz: function () {
          return A;
        },
        N: function () {
          return f;
        },
        Fq: function () {
          return h;
        },
        tj: function () {
          return b;
        },
        W3: function () {
          return l;
        },
        bB: function () {
          return d;
        },
        mA: function () {
          return p;
        },
      });
      let n = (e) =>
          (e.startsWith("/") && !e.startsWith("//")) ||
          "" === e.replace(/\s/g, ""),
        i = (e) => e.includes("www.bizee.com"),
        o = "orders.incfile.com",
        c = (e) => {
          let t = "https://bizee.com";
          return e
            ? i(e)
              ? e.replace("www.bizee.com", "bizee.com")
              : n(e)
              ? "".concat(t).concat(e)
              : e.includes(o)
              ? e.replace(o, "orders.bizee.com")
              : e
            : t;
        },
        a = (e) =>
          (null == e ? void 0 : e.charAt(0).toUpperCase()) + e.slice(1);
      r(32608);
      let s = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "#";
          return {
            linkProps: e.toLowerCase().startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer", href: e }
              : { href: e },
          };
        },
        l = (e) => {
          let { entityType: t, entityState: r, selectedPackage: n } = e,
            i = "https://orders.bizee.com/form-order-now.php";
          return (
            t && (i += "?entityType=".concat(t)),
            t && r && (i += "&entityState=".concat(r)),
            t && r && n && (i += "&package=".concat(n)),
            i
          );
        },
        u = function () {
          var e, t;
          let {
              entity: r,
              state: n,
              pkg: i,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            o =
              null !==
                (e = null != r ? r : localStorage.getItem("entity_type")) &&
              void 0 !== e
                ? e
                : "",
            c =
              null !==
                (t = null != n ? n : localStorage.getItem("entity_state")) &&
              void 0 !== t
                ? t
                : "";
          window.location.href = l({
            entityType: o,
            entityState: c,
            selectedPackage: null != i ? i : "",
          });
        },
        A = (e) =>
          void 0 === e ||
          (1 === e.length &&
            e[0].children &&
            1 === e[0].children.length &&
            "" === e[0].children[0].text),
        d = (e, t) =>
          Array.isArray(t) ? t.some((t) => e.startsWith(t)) : e.startsWith(t);
      r(32608);
      let p = (e) =>
        null == e
          ? void 0
          : e
              .replace(/([a-z])([A-Z])/g, "$1-$2")
              .replace(/\s+/g, "-")
              .toLowerCase();
      function f(e) {
        return e
          .split("-")
          .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
          .join(" ");
      }
      let h = (e) =>
        e && 0 !== e.length
          ? e
              .split("-")
              .map((e) => a(e))
              .join("")
          : e;
      function g(e, t) {
        let r = {};
        for (let n in e) t.includes(n) || (r[n] = e[n]);
        return r;
      }
      let b = (e) =>
        "string" != typeof e ||
        e.startsWith("https://bizee.com") ||
        e.startsWith("https://orders.bizee.com")
          ? "internal"
          : e.startsWith("http") ||
            e.startsWith("https") ||
            e.startsWith("tel") ||
            e.startsWith("mailto") ||
            e.startsWith("fax")
          ? "external"
          : "internal";
    },
    84826: function (e) {
      e.exports = {
        section: "Wrapper_section__bRWG5",
        content: "Wrapper_content__D9XFa",
        hero: "Wrapper_hero__V_c6B",
      };
    },
    12192: function (e) {
      e.exports = {
        hidden: "styles_hidden__iwybK",
        hideFromMobile: "styles_hideFromMobile__MaBLU",
        hideFromTablet: "styles_hideFromTablet__AS10K",
        showFromTablet: "styles_showFromTablet__sxnoS",
        hideFromDesktop: "styles_hideFromDesktop__w7Imu",
        showFromDesktop: "styles_showFromDesktop__AD_dD",
      };
    },
    48093: function (e, t, r) {
      "use strict";
      r.r(t),
        (t.default = {
          src: "/_next/static/media/LetterC.3b9af97b.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX4yj7/zTj/0ET/yCn/xBX/yRH/wAb+wAD/1UL0tQL/xR3/xRj867r92nH75J/91F399uL73YTnrtahAAAACnRSTlNz////dfT/+PF6rRJgxgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJwdy0sWgDAIA8AENK1Af/e/rE93sxlc4aQZcGeGu3VIq+rQoNhjTftxxiQhWdVwoklSsuNp+hpeP2IByw08JPAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    93621: function (e, t, r) {
      "use strict";
      r.r(t),
        (t.default = {
          src: "/_next/static/media/LetterL.e200f093.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEX/XBj/UQr/QwD/OwD/bDL0RwL/TAL+dDv5TQf/SwD/YiL9mnD/aSr9wq37gU/9vaL8280bZFPiAAAACnRSTlP9////dX3/+3j1fCiIfQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxJREFUeJwVykkSgDAMA8GRDUpwFvj/a6nc+tB0C2pePA7DbDj2EDVxjpWiDr7dVDjau4Y5OTMEty3Z/Qc2ugF836fP+QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    25261: function (e, t, r) {
      "use strict";
      r.r(t),
        (t.default = {
          src: "/_next/static/media/LetterN.852514a7.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUso8xgvt9eudgZksAjoMw+qtA3pMkam8hZt9hRtNc1ps5GrtJNsNTp9fmu2elrvdmTzuLX6/OAxt6v2efS6vLUoQs5AAAACnRSTlP98XF6/P51/v78d6ad3QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJwFwYEBgDAIA7CqMKCAm87/bzXBoGaFnwDBTD8g3DO3O4zd6/GA8Xu7o2BYnHcVxAxABi4Toer4AVPzAjwya0AgAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
    11154: function (e, t, r) {
      "use strict";
      r.r(t),
        (t.default = {
          src: "/_next/static/media/LetterS.1ee1c6ac.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEV3d3dwcHB2dnZycnJvb290dHRzc3NxcXFsbGzExMStra3h4eGkpKR2dnbS0tJ3d3ck99/FAAAABXRSTlP0dv54fDCEn18AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA7SURBVHicJcpJEoAgEAPAgCaZBeT/v7Usz924RHJqAIxwEKArc5mQu7MsyJVPH4NeP305YgO39pxb4wU8NgHAxRvBKQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        });
    },
  },
]);
