(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3638],
  {
    68655: function (e, a, n) {
      "use strict";
      n.r(a);
      var t,
        r = n(91071);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var n = arguments[a];
                for (var t in n)
                  Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              }
              return e;
            }).apply(this, arguments);
      }
      a.default = function (e) {
        return r.createElement(
          "svg",
          l(
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: 937,
              height: 225,
              fill: "none",
            },
            e
          ),
          t ||
            (t = r.createElement("path", {
              stroke: "#E5E5E5",
              d: "M1 0v63.5c0 17.673 14.327 32 32 32h844.03a24 24 0 0 1 22.839 16.624L936 224",
            }))
        );
      };
    },
    20029: function (e, a, n) {
      Promise.resolve().then(n.bind(n, 38110));
    },
    38110: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          default: function () {
            return m;
          },
          maxDuration: function () {
            return u;
          },
        });
      var t = n(51010),
        r = n(68655),
        l = n(12251),
        o = n(56336),
        i = n(40576),
        s = n(65356),
        c = n(29102),
        b = n(78411);
      let u = 300;
      function m(e) {
        let { error: a, reset: n } = e;
        return (
          (0, b.useEffect)(() => {
            console.error(a);
          }, [a]),
          (0, t.jsx)("main", {
            id: l.km,
            children: (0, t.jsx)(c.Z, {
              variant: "section",
              className: "desktop:mb-0 mb-12",
              children: (0, t.jsxs)(s.Z, {
                variant: "sectionBig",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "rounded-10 tablet:pb-[128px] tablet:pt-[88px] flex justify-center rounded-br-none border-solid border-gray-300 bg-black px-6 pb-[64px] pt-[40px]",
                    children: (0, t.jsxs)("div", {
                      className:
                        "tablet:[&>*]:mb-12 flex w-full max-w-[800px] flex-col items-center text-center [&>*]:mb-6",
                      children: [
                        (0, t.jsx)("h1", {
                          className: "hidden",
                          children: "Error 500!",
                        }),
                        (0, t.jsx)(o.Z, {
                          resource: {
                            id: "6582c059d8382e329b6038de",
                            alt: "Something went wrong! Error 500!",
                            filename: "500.webp",
                            mimeType: "image/webp",
                            filesize: 52138,
                            width: 1600,
                            height: 600,
                            createdAt: "2023-12-20T10:22:17.069Z",
                            updatedAt: "2023-12-20T10:22:34.245Z",
                            url: "https://s3.us-east-2.amazonaws.com/bizee-website-assets/500.webp",
                          },
                        }),
                        (0, t.jsx)("h2", {
                          className: "text-display-xl text-white",
                          children: "Whoops, That Page Is Gone!",
                        }),
                        (0, t.jsx)("p", {
                          className: "text-text-xl max-w-[378px] text-gray-300",
                          children:
                            "We’re so sorry, this link is broken or the page may have been removed.",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "tablet:flex-row !mb-0 flex flex-col items-center justify-center",
                          children: [
                            (0, t.jsx)("button", {
                              className:
                                "biz__btn biz__btn--secondary biz__btn--xl tablet:mb-0 tablet:mr-4 mb-6",
                              "aria-label": "Something went wrong - try again.",
                              onClick: () => n(),
                              children: "Try again",
                            }),
                            (0, t.jsx)(i.Z, {
                              href: "/",
                              className:
                                "biz__btn biz__btn--primary biz__btn--xl",
                              "aria-label":
                                "Something went wrong - go to homepage.",
                              children: "GO TO HOMEPAGE",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)(r.default, {
                    className:
                      "desktop:block ml-auto hidden scale-x-[-1] scale-y-[1]",
                  }),
                ],
              }),
            }),
          })
        );
      }
    },
    12251: function (e, a, n) {
      "use strict";
      n.d(a, {
        km: function () {
          return c;
        },
        PO: function () {
          return b;
        },
        ob: function () {
          return u;
        },
        xU: function () {
          return i;
        },
        w8: function () {
          return s;
        },
      });
      var t = n(48093),
        r = n(93621),
        l = n(25261),
        o = n(11154);
      r.default, t.default, o.default, l.default;
      let i = [
          { label: "Alabama", value: "AL" },
          { label: "Alaska", value: "AK" },
          { label: "Arizona", value: "AZ" },
          { label: "Arkansas", value: "AR" },
          { label: "California", value: "CA" },
          { label: "Colorado", value: "CO" },
          { label: "Connecticut", value: "CT" },
          { label: "Delaware", value: "DE" },
          { label: "Florida", value: "FL" },
          { label: "Georgia", value: "GA" },
          { label: "Hawaii", value: "HI" },
          { label: "Idaho", value: "ID" },
          { label: "Illinois", value: "IL" },
          { label: "Indiana", value: "IN" },
          { label: "Iowa", value: "IA" },
          { label: "Kansas", value: "KS" },
          { label: "Kentucky", value: "KY" },
          { label: "Louisiana", value: "LA" },
          { label: "Maine", value: "ME" },
          { label: "Maryland", value: "MD" },
          { label: "Massachusetts", value: "MA" },
          { label: "Michigan", value: "MI" },
          { label: "Minnesota", value: "MN" },
          { label: "Mississippi", value: "MS" },
          { label: "Missouri", value: "MO" },
          { label: "Montana", value: "MT" },
          { label: "Nebraska", value: "NE" },
          { label: "Nevada", value: "NV" },
          { label: "New Hampshire", value: "NH" },
          { label: "New Jersey", value: "NJ" },
          { label: "New Mexico", value: "NM" },
          { label: "New York", value: "NY" },
          { label: "North Carolina", value: "NC" },
          { label: "North Dakota", value: "ND" },
          { label: "Ohio", value: "OH" },
          { label: "Oklahoma", value: "OK" },
          { label: "Oregon", value: "OR" },
          { label: "Pennsylvania", value: "PA" },
          { label: "Rhode Island", value: "RI" },
          { label: "South Carolina", value: "SC" },
          { label: "South Dakota", value: "SD" },
          { label: "Tennessee", value: "TN" },
          { label: "Texas", value: "TX" },
          { label: "Utah", value: "UT" },
          { label: "Vermont", value: "VT" },
          { label: "Virginia", value: "VA" },
          { label: "Washington", value: "WA" },
          { label: "Washington DC", value: "DC" },
          { label: "West Virginia", value: "WV" },
          { label: "Wisconsin", value: "WI" },
          { label: "Wyoming", value: "WY" },
        ],
        s = [
          { value: "LLC", label: "LLC" },
          { value: "SCorporation", label: "S-Corporation" },
          { value: "CCorporation", label: "C-Corporation" },
          { value: "Nonprofit", label: "Nonprofit" },
        ],
        c = "main-webpage-content",
        b = [
          { name: "Alabama", abbr: "AL" },
          { name: "Alaska", abbr: "AK" },
          { name: "Arizona", abbr: "AZ" },
          { name: "Arkansas", abbr: "AR" },
          { name: "California", abbr: "CA" },
          { name: "Colorado", abbr: "CO" },
          { name: "Connecticut", abbr: "CT" },
          { name: "Delaware", abbr: "DE" },
          { name: "Florida", abbr: "FL" },
          { name: "Georgia", abbr: "GA" },
          { name: "Hawaii", abbr: "HI" },
          { name: "Idaho", abbr: "ID" },
          { name: "Illinois", abbr: "IL" },
          { name: "Indiana", abbr: "IN" },
          { name: "Iowa", abbr: "IA" },
          { name: "Kansas", abbr: "KS" },
          { name: "Kentucky", abbr: "KY" },
          { name: "Louisiana", abbr: "LA" },
          { name: "Maine", abbr: "ME" },
          { name: "Maryland", abbr: "MD" },
          { name: "Massachusetts", abbr: "MA" },
          { name: "Michigan", abbr: "MI" },
          { name: "Minnesota", abbr: "MN" },
          { name: "Mississippi", abbr: "MS" },
          { name: "Missouri", abbr: "MO" },
          { name: "Montana", abbr: "MT" },
          { name: "Nebraska", abbr: "NE" },
          { name: "Nevada", abbr: "NV" },
          { name: "New Hampshire", abbr: "NH" },
          { name: "New Jersey", abbr: "NJ" },
          { name: "New Mexico", abbr: "NM" },
          { name: "New York", abbr: "NY" },
          { name: "North Carolina", abbr: "NC" },
          { name: "North Dakota", abbr: "ND" },
          { name: "Ohio", abbr: "OH" },
          { name: "Oklahoma", abbr: "OK" },
          { name: "Oregon", abbr: "OR" },
          { name: "Pennsylvania", abbr: "PA" },
          { name: "Rhode Island", abbr: "RI" },
          { name: "South Carolina", abbr: "SC" },
          { name: "South Dakota", abbr: "SD" },
          { name: "Tennessee", abbr: "TN" },
          { name: "Texas", abbr: "TX" },
          { name: "Utah", abbr: "UT" },
          { name: "Vermont", abbr: "VT" },
          { name: "Virginia", abbr: "VA" },
          { name: "Washington", abbr: "WA" },
          { name: "Washington DC", abbr: "DC" },
          { name: "West Virginia", abbr: "WV" },
          { name: "Wisconsin", abbr: "WI" },
          { name: "Wyoming", abbr: "WY" },
        ],
        u = "https://www.trustpilot.com/review/bizee.com";
    },
    53088: function (e, a, n) {
      "use strict";
      n.r(a),
        n.d(a, {
          Media: function () {
            return y;
          },
        });
      var t = n(51010),
        r = n(78411),
        l = n(29102),
        o = n(45436),
        i = n(68102),
        s = n.n(i);
      function c(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var n = 0, t = Array(a); n < a; n++) t[n] = e[n];
        return t;
      }
      var b = function (e) {
          var a = e.imgClassName,
            n = e.onClick,
            l = e.onLoad,
            i = (e.size, e.resource),
            b = e.priority,
            u = e.fill,
            m = e.src,
            f = e.alt,
            v =
              (function (e) {
                if (Array.isArray(e)) return e;
              })((g = r.useState(!0))) ||
              (function (e, a) {
                var n,
                  t,
                  r =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                if (null != r) {
                  var l = [],
                    o = !0,
                    i = !1;
                  try {
                    for (
                      r = r.call(e);
                      !(o = (n = r.next()).done) &&
                      (l.push(n.value), !a || l.length !== a);
                      o = !0
                    );
                  } catch (e) {
                    (i = !0), (t = e);
                  } finally {
                    try {
                      o || null == r.return || r.return();
                    } finally {
                      if (i) throw t;
                    }
                  }
                  return l;
                }
              })(g, 2) ||
              (function (e, a) {
                if (e) {
                  if ("string" == typeof e) return c(e, a);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  if (
                    ("Object" === n &&
                      e.constructor &&
                      (n = e.constructor.name),
                    "Map" === n || "Set" === n)
                  )
                    return Array.from(n);
                  if (
                    "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  )
                    return c(e, a);
                }
              })(g, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })(),
            d = v[0],
            p = v[1],
            h = f,
            y = m || "";
          if (!y && i) {
            var g,
              O,
              w,
              j,
              N = i.width,
              x = i.height,
              A = i.filename,
              C = i.alt;
            (O = null != N ? N : void 0),
              (w = null != x ? x : void 0),
              (h = C),
              (y =
                null !== (j = i.url) && void 0 !== j
                  ? j
                  : ""
                      .concat("https://s3.us-east-2.amazonaws.com", "/")
                      .concat("bizee-website-assets", "/")
                      .concat(A));
          }
          return (0, t.jsx)(o.default, {
            className: [d && s().placeholder, s().image, a]
              .filter(Boolean)
              .join(" "),
            src: y,
            alt: h || "",
            loading: "eager",
            onClick: n,
            onLoad: function () {
              p(!1), "function" == typeof l && l();
            },
            fill: u,
            width: u ? void 0 : O,
            height: u ? void 0 : w,
            priority: b,
          });
        },
        u = n(37381),
        m = n.n(u),
        f = n(32608);
      function v(e, a) {
        (null == a || a > e.length) && (a = e.length);
        for (var n = 0, t = Array(a); n < a; n++) t[n] = e[n];
        return t;
      }
      var d = function (e) {
        var a,
          n = e.videoClassName,
          l = e.resource,
          o = e.onClick,
          i = (0, r.useRef)(null);
        if (
          (((function (e) {
            if (Array.isArray(e)) return e;
          })((a = (0, r.useState)())) ||
            (function (e, a) {
              var n,
                t,
                r =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
              if (null != r) {
                var l = [],
                  o = !0,
                  i = !1;
                try {
                  for (
                    r = r.call(e);
                    !(o = (n = r.next()).done) &&
                    (l.push(n.value), !a || l.length !== a);
                    o = !0
                  );
                } catch (e) {
                  (i = !0), (t = e);
                } finally {
                  try {
                    o || null == r.return || r.return();
                  } finally {
                    if (i) throw t;
                  }
                }
                return l;
              }
            })(a, 1) ||
            (function (e, a) {
              if (e) {
                if ("string" == typeof e) return v(e, a);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if (
                  ("Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n)
                )
                  return Array.from(n);
                if (
                  "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                )
                  return v(e, a);
              }
            })(a, 1) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })())[0],
          (0, r.useEffect)(function () {
            var e = i.current;
            e && e.addEventListener("suspend", function () {});
          }, []),
          l && "string" != typeof l)
        ) {
          var s = l.filename;
          return (0, t.jsx)("video", {
            playsInline: !0,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            controls: !1,
            className: [m().video, n].filter(Boolean).join(" "),
            onClick: o,
            ref: i,
            children: (0, t.jsx)("source", {
              src: "".concat(f.env.NEXT_PUBLIC_API_URL, "/media/").concat(s),
            }),
          });
        }
        return null;
      };
      function p(e) {
        for (var a = 1; a < arguments.length; a++) {
          var n = null != arguments[a] ? arguments[a] : {},
            t = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            t.forEach(function (a) {
              var t;
              (t = n[a]),
                a in e
                  ? Object.defineProperty(e, a, {
                      value: t,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[a] = t);
            });
        }
        return e;
      }
      function h(e, a) {
        return (
          (a = null != a ? a : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : (function (e, a) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var t = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, t);
                }
                return n;
              })(Object(a)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(a, n)
                );
              }),
          e
        );
      }
      var y = function (e) {
        var a,
          n = e.className,
          o = e.resource,
          i = e.htmlElement,
          s = void 0 === i ? "div" : i,
          c =
            null == o
              ? void 0
              : null === (a = o.mimeType) || void 0 === a
              ? void 0
              : a.includes("video"),
          u = s || r.Fragment;
        return e.isPicture
          ? (0, t.jsx)(
              l.Z,
              h(p({ as: b, variant: "none" }, e), {
                alt: e.alt,
                advancedBlockSettings: e.advancedBlockSettings,
              })
            )
          : (0, t.jsx)(
              l.Z,
              h(
                p(
                  { as: u, variant: "none" },
                  null !== s ? { className: n } : {}
                ),
                {
                  advancedBlockSettings: e.advancedBlockSettings,
                  children: c
                    ? (0, t.jsx)(d, p({}, e))
                    : (0, t.jsx)(b, h(p({}, e), { alt: e.alt })),
                }
              )
            );
      };
    },
    56336: function (e, a, n) {
      "use strict";
      var t = n(53088);
      a.Z = t.Media;
    },
    40576: function (e, a, n) {
      "use strict";
      var t = n(33129);
      a.Z = t.default;
    },
    65356: function (e, a, n) {
      "use strict";
      n.d(a, {
        Z: function () {
          return c;
        },
      });
      var t = n(51010),
        r = n(54838);
      n(78411);
      var l = n(24928),
        o = n.n(l),
        i = (0, r.j)(null, {
          variants: {
            variant: {
              section: o().section,
              sectionBig: o().sectionBig,
              content: o().content,
            },
          },
        }),
        s = (0, r.j)(null, {
          variants: {
            variant: {
              left: "left-line line-decorator__section",
              right: "right-line line-decorator__section",
              undefined: "",
            },
          },
          defaultVariants: { variant: "undefined" },
        }),
        c = function (e) {
          var a,
            n,
            l = e.line,
            o = e.className,
            c = e.variant,
            b = e.children,
            u = (function (e, a) {
              if (null == e) return {};
              var n,
                t,
                r = (function (e, a) {
                  if (null == e) return {};
                  var n,
                    t,
                    r = {},
                    l = Object.keys(e);
                  for (t = 0; t < l.length; t++)
                    (n = l[t]), a.indexOf(n) >= 0 || (r[n] = e[n]);
                  return r;
                })(e, a);
              if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (t = 0; t < l.length; t++)
                  (n = l[t]),
                    !(a.indexOf(n) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                      (r[n] = e[n]);
              }
              return r;
            })(e, ["line", "className", "variant", "children"]),
            m = s({ variant: l });
          return (0, t.jsx)(
            "div",
            ((a = (function (e) {
              for (var a = 1; a < arguments.length; a++) {
                var n = null != arguments[a] ? arguments[a] : {},
                  t = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (t = t.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                  )),
                  t.forEach(function (a) {
                    var t;
                    (t = n[a]),
                      a in e
                        ? Object.defineProperty(e, a, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (e[a] = t);
                  });
              }
              return e;
            })({ className: (0, r.cx)(i({ variant: c }), o, m) }, u)),
            (n = n = { children: b }),
            Object.getOwnPropertyDescriptors
              ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n))
              : (function (e, a) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, t);
                  }
                  return n;
                })(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    a,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                }),
            a)
          );
        };
    },
    68102: function (e) {
      e.exports = {
        "placeholder-color-light": "component_placeholder-color-light__mRVe9",
        placeholder: "component_placeholder__NBHYY",
      };
    },
    37381: function (e) {
      e.exports = {
        video: "component_video__Rr12u",
        cover: "component_cover__P_qok",
      };
    },
    24928: function (e) {
      e.exports = {
        section: "Container_section__2D1h5",
        sectionBig: "Container_sectionBig__J2R9L",
        content: "Container_content__jTa21",
      };
    },
  },
  function (e) {
    e.O(0, [1877, 7640, 4779, 5187, 1744], function () {
      return e((e.s = 20029));
    }),
      (_N_E = e.O());
  },
]);
