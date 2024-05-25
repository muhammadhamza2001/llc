(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8410],
  {
    65133: function (e) {
      "use strict";
      /*!
       * escape-html
       * Copyright(c) 2012-2013 TJ Holowaychuk
       * Copyright(c) 2015 Andreas Lubbe
       * Copyright(c) 2015 Tiancheng "Timothy" Gu
       * MIT Licensed
       */ var r = /["'&<>]/;
      e.exports = function (e) {
        var t,
          n = "" + e,
          i = r.exec(n);
        if (!i) return n;
        var o = "",
          a = 0,
          s = 0;
        for (a = i.index; a < n.length; a++) {
          switch (n.charCodeAt(a)) {
            case 34:
              t = "&quot;";
              break;
            case 38:
              t = "&amp;";
              break;
            case 39:
              t = "&#39;";
              break;
            case 60:
              t = "&lt;";
              break;
            case 62:
              t = "&gt;";
              break;
            default:
              continue;
          }
          s !== a && (o += n.substring(s, a)), (s = a + 1), (o += t);
        }
        return s !== a ? o + n.substring(s, a) : o;
      };
    },
    48336: function (e, r, t) {
      "use strict";
      var n =
        (this && this.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var r, t = 1, n = arguments.length; t < n; t++)
                for (var i in (r = arguments[t]))
                  Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var i = t(80391),
        o = t(63173),
        a = t(76558),
        s = n(n({}, i.namedReferences), { all: i.namedReferences.html5 });
      function l(e, r, t) {
        r.lastIndex = 0;
        var n,
          i = r.exec(e);
        if (i) {
          n = "";
          var o = 0;
          do {
            o !== i.index && (n += e.substring(o, i.index));
            var a = i[0];
            (n += t(a)), (o = i.index + a.length);
          } while ((i = r.exec(e)));
          o !== e.length && (n += e.substring(o));
        } else n = e;
        return n;
      }
      var c = {
          specialChars: /[<>'"&]/g,
          nonAscii:
            /[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
          nonAsciiPrintable:
            /[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
          nonAsciiPrintableOnly:
            /[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
          extensive:
            /[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,
        },
        u = { mode: "specialChars", level: "all", numeric: "decimal" };
      r.encode = function (e, r) {
        var t = void 0 === r ? u : r,
          n = t.mode,
          i = t.numeric,
          o = t.level;
        if (!e) return "";
        var p = c[void 0 === n ? "specialChars" : n],
          f = s[void 0 === o ? "all" : o].characters,
          d = "hexadecimal" === (void 0 === i ? "decimal" : i);
        return l(e, p, function (e) {
          var r = f[e];
          if (!r) {
            var t = e.length > 1 ? a.getCodePoint(e, 0) : e.charCodeAt(0);
            r = (d ? "&#x" + t.toString(16) : "&#" + t) + ";";
          }
          return r;
        });
      };
      var p = { scope: "body", level: "all" },
        f = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g,
        d = /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,
        m = {
          xml: { strict: f, attribute: d, body: i.bodyRegExps.xml },
          html4: { strict: f, attribute: d, body: i.bodyRegExps.html4 },
          html5: { strict: f, attribute: d, body: i.bodyRegExps.html5 },
        },
        g = n(n({}, m), { all: m.html5 }),
        h = String.fromCharCode,
        v = h(65533),
        b = { level: "all" };
      function y(e, r, t, n) {
        var i = e,
          s = e[e.length - 1];
        if (t && "=" === s) i = e;
        else if (n && ";" !== s) i = e;
        else {
          var l = r[e];
          if (l) i = l;
          else if ("&" === e[0] && "#" === e[1]) {
            var c = e[2],
              u =
                "x" == c || "X" == c
                  ? parseInt(e.substr(3), 16)
                  : parseInt(e.substr(2));
            i =
              u >= 1114111
                ? v
                : u > 65535
                ? a.fromCodePoint(u)
                : h(o.numericUnicodeMap[u] || u);
          }
        }
        return i;
      }
      (r.decodeEntity = function (e, r) {
        var t = (void 0 === r ? b : r).level;
        return e ? y(e, s[void 0 === t ? "all" : t].entities, !1, !1) : "";
      }),
        (r.decode = function (e, r) {
          var t = void 0 === r ? p : r,
            n = t.level,
            i = void 0 === n ? "all" : n,
            o = t.scope,
            a = void 0 === o ? ("xml" === i ? "strict" : "body") : o;
          if (!e) return "";
          var c = g[i][a],
            u = s[i].entities,
            f = "attribute" === a,
            d = "strict" === a;
          return l(e, c, function (e) {
            return y(e, u, f, d);
          });
        });
    },
    80391: function (e, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.bodyRegExps = {
          xml: /&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
          html4:
            /&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
          html5:
            /&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,
        }),
        (r.namedReferences = {
          xml: {
            entities: {
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&apos;": "'",
              "&amp;": "&",
            },
            characters: {
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&apos;",
              "&": "&amp;",
            },
          },
          html4: {
            entities: {
              "&apos;": "'",
              "&nbsp": "\xa0",
              "&nbsp;": "\xa0",
              "&iexcl": "\xa1",
              "&iexcl;": "\xa1",
              "&cent": "\xa2",
              "&cent;": "\xa2",
              "&pound": "\xa3",
              "&pound;": "\xa3",
              "&curren": "\xa4",
              "&curren;": "\xa4",
              "&yen": "\xa5",
              "&yen;": "\xa5",
              "&brvbar": "\xa6",
              "&brvbar;": "\xa6",
              "&sect": "\xa7",
              "&sect;": "\xa7",
              "&uml": "\xa8",
              "&uml;": "\xa8",
              "&copy": "\xa9",
              "&copy;": "\xa9",
              "&ordf": "\xaa",
              "&ordf;": "\xaa",
              "&laquo": "\xab",
              "&laquo;": "\xab",
              "&not": "\xac",
              "&not;": "\xac",
              "&shy": "\xad",
              "&shy;": "\xad",
              "&reg": "\xae",
              "&reg;": "\xae",
              "&macr": "\xaf",
              "&macr;": "\xaf",
              "&deg": "\xb0",
              "&deg;": "\xb0",
              "&plusmn": "\xb1",
              "&plusmn;": "\xb1",
              "&sup2": "\xb2",
              "&sup2;": "\xb2",
              "&sup3": "\xb3",
              "&sup3;": "\xb3",
              "&acute": "\xb4",
              "&acute;": "\xb4",
              "&micro": "\xb5",
              "&micro;": "\xb5",
              "&para": "\xb6",
              "&para;": "\xb6",
              "&middot": "\xb7",
              "&middot;": "\xb7",
              "&cedil": "\xb8",
              "&cedil;": "\xb8",
              "&sup1": "\xb9",
              "&sup1;": "\xb9",
              "&ordm": "\xba",
              "&ordm;": "\xba",
              "&raquo": "\xbb",
              "&raquo;": "\xbb",
              "&frac14": "\xbc",
              "&frac14;": "\xbc",
              "&frac12": "\xbd",
              "&frac12;": "\xbd",
              "&frac34": "\xbe",
              "&frac34;": "\xbe",
              "&iquest": "\xbf",
              "&iquest;": "\xbf",
              "&Agrave": "\xc0",
              "&Agrave;": "\xc0",
              "&Aacute": "\xc1",
              "&Aacute;": "\xc1",
              "&Acirc": "\xc2",
              "&Acirc;": "\xc2",
              "&Atilde": "\xc3",
              "&Atilde;": "\xc3",
              "&Auml": "\xc4",
              "&Auml;": "\xc4",
              "&Aring": "\xc5",
              "&Aring;": "\xc5",
              "&AElig": "\xc6",
              "&AElig;": "\xc6",
              "&Ccedil": "\xc7",
              "&Ccedil;": "\xc7",
              "&Egrave": "\xc8",
              "&Egrave;": "\xc8",
              "&Eacute": "\xc9",
              "&Eacute;": "\xc9",
              "&Ecirc": "\xca",
              "&Ecirc;": "\xca",
              "&Euml": "\xcb",
              "&Euml;": "\xcb",
              "&Igrave": "\xcc",
              "&Igrave;": "\xcc",
              "&Iacute": "\xcd",
              "&Iacute;": "\xcd",
              "&Icirc": "\xce",
              "&Icirc;": "\xce",
              "&Iuml": "\xcf",
              "&Iuml;": "\xcf",
              "&ETH": "\xd0",
              "&ETH;": "\xd0",
              "&Ntilde": "\xd1",
              "&Ntilde;": "\xd1",
              "&Ograve": "\xd2",
              "&Ograve;": "\xd2",
              "&Oacute": "\xd3",
              "&Oacute;": "\xd3",
              "&Ocirc": "\xd4",
              "&Ocirc;": "\xd4",
              "&Otilde": "\xd5",
              "&Otilde;": "\xd5",
              "&Ouml": "\xd6",
              "&Ouml;": "\xd6",
              "&times": "\xd7",
              "&times;": "\xd7",
              "&Oslash": "\xd8",
              "&Oslash;": "\xd8",
              "&Ugrave": "\xd9",
              "&Ugrave;": "\xd9",
              "&Uacute": "\xda",
              "&Uacute;": "\xda",
              "&Ucirc": "\xdb",
              "&Ucirc;": "\xdb",
              "&Uuml": "\xdc",
              "&Uuml;": "\xdc",
              "&Yacute": "\xdd",
              "&Yacute;": "\xdd",
              "&THORN": "\xde",
              "&THORN;": "\xde",
              "&szlig": "\xdf",
              "&szlig;": "\xdf",
              "&agrave": "\xe0",
              "&agrave;": "\xe0",
              "&aacute": "\xe1",
              "&aacute;": "\xe1",
              "&acirc": "\xe2",
              "&acirc;": "\xe2",
              "&atilde": "\xe3",
              "&atilde;": "\xe3",
              "&auml": "\xe4",
              "&auml;": "\xe4",
              "&aring": "\xe5",
              "&aring;": "\xe5",
              "&aelig": "\xe6",
              "&aelig;": "\xe6",
              "&ccedil": "\xe7",
              "&ccedil;": "\xe7",
              "&egrave": "\xe8",
              "&egrave;": "\xe8",
              "&eacute": "\xe9",
              "&eacute;": "\xe9",
              "&ecirc": "\xea",
              "&ecirc;": "\xea",
              "&euml": "\xeb",
              "&euml;": "\xeb",
              "&igrave": "\xec",
              "&igrave;": "\xec",
              "&iacute": "\xed",
              "&iacute;": "\xed",
              "&icirc": "\xee",
              "&icirc;": "\xee",
              "&iuml": "\xef",
              "&iuml;": "\xef",
              "&eth": "\xf0",
              "&eth;": "\xf0",
              "&ntilde": "\xf1",
              "&ntilde;": "\xf1",
              "&ograve": "\xf2",
              "&ograve;": "\xf2",
              "&oacute": "\xf3",
              "&oacute;": "\xf3",
              "&ocirc": "\xf4",
              "&ocirc;": "\xf4",
              "&otilde": "\xf5",
              "&otilde;": "\xf5",
              "&ouml": "\xf6",
              "&ouml;": "\xf6",
              "&divide": "\xf7",
              "&divide;": "\xf7",
              "&oslash": "\xf8",
              "&oslash;": "\xf8",
              "&ugrave": "\xf9",
              "&ugrave;": "\xf9",
              "&uacute": "\xfa",
              "&uacute;": "\xfa",
              "&ucirc": "\xfb",
              "&ucirc;": "\xfb",
              "&uuml": "\xfc",
              "&uuml;": "\xfc",
              "&yacute": "\xfd",
              "&yacute;": "\xfd",
              "&thorn": "\xfe",
              "&thorn;": "\xfe",
              "&yuml": "\xff",
              "&yuml;": "\xff",
              "&quot": '"',
              "&quot;": '"',
              "&amp": "&",
              "&amp;": "&",
              "&lt": "<",
              "&lt;": "<",
              "&gt": ">",
              "&gt;": ">",
              "&OElig;": "Œ",
              "&oelig;": "œ",
              "&Scaron;": "Š",
              "&scaron;": "š",
              "&Yuml;": "Ÿ",
              "&circ;": "ˆ",
              "&tilde;": "˜",
              "&ensp;": " ",
              "&emsp;": " ",
              "&thinsp;": " ",
              "&zwnj;": "‌",
              "&zwj;": "‍",
              "&lrm;": "‎",
              "&rlm;": "‏",
              "&ndash;": "–",
              "&mdash;": "—",
              "&lsquo;": "‘",
              "&rsquo;": "’",
              "&sbquo;": "‚",
              "&ldquo;": "“",
              "&rdquo;": "”",
              "&bdquo;": "„",
              "&dagger;": "†",
              "&Dagger;": "‡",
              "&permil;": "‰",
              "&lsaquo;": "‹",
              "&rsaquo;": "›",
              "&euro;": "€",
              "&fnof;": "ƒ",
              "&Alpha;": "Α",
              "&Beta;": "Β",
              "&Gamma;": "Γ",
              "&Delta;": "Δ",
              "&Epsilon;": "Ε",
              "&Zeta;": "Ζ",
              "&Eta;": "Η",
              "&Theta;": "Θ",
              "&Iota;": "Ι",
              "&Kappa;": "Κ",
              "&Lambda;": "Λ",
              "&Mu;": "Μ",
              "&Nu;": "Ν",
              "&Xi;": "Ξ",
              "&Omicron;": "Ο",
              "&Pi;": "Π",
              "&Rho;": "Ρ",
              "&Sigma;": "Σ",
              "&Tau;": "Τ",
              "&Upsilon;": "Υ",
              "&Phi;": "Φ",
              "&Chi;": "Χ",
              "&Psi;": "Ψ",
              "&Omega;": "Ω",
              "&alpha;": "α",
              "&beta;": "β",
              "&gamma;": "γ",
              "&delta;": "δ",
              "&epsilon;": "ε",
              "&zeta;": "ζ",
              "&eta;": "η",
              "&theta;": "θ",
              "&iota;": "ι",
              "&kappa;": "κ",
              "&lambda;": "λ",
              "&mu;": "μ",
              "&nu;": "ν",
              "&xi;": "ξ",
              "&omicron;": "ο",
              "&pi;": "π",
              "&rho;": "ρ",
              "&sigmaf;": "ς",
              "&sigma;": "σ",
              "&tau;": "τ",
              "&upsilon;": "υ",
              "&phi;": "φ",
              "&chi;": "χ",
              "&psi;": "ψ",
              "&omega;": "ω",
              "&thetasym;": "ϑ",
              "&upsih;": "ϒ",
              "&piv;": "ϖ",
              "&bull;": "•",
              "&hellip;": "…",
              "&prime;": "′",
              "&Prime;": "″",
              "&oline;": "‾",
              "&frasl;": "⁄",
              "&weierp;": "℘",
              "&image;": "ℑ",
              "&real;": "ℜ",
              "&trade;": "™",
              "&alefsym;": "ℵ",
              "&larr;": "←",
              "&uarr;": "↑",
              "&rarr;": "→",
              "&darr;": "↓",
              "&harr;": "↔",
              "&crarr;": "↵",
              "&lArr;": "⇐",
              "&uArr;": "⇑",
              "&rArr;": "⇒",
              "&dArr;": "⇓",
              "&hArr;": "⇔",
              "&forall;": "∀",
              "&part;": "∂",
              "&exist;": "∃",
              "&empty;": "∅",
              "&nabla;": "∇",
              "&isin;": "∈",
              "&notin;": "∉",
              "&ni;": "∋",
              "&prod;": "∏",
              "&sum;": "∑",
              "&minus;": "−",
              "&lowast;": "∗",
              "&radic;": "√",
              "&prop;": "∝",
              "&infin;": "∞",
              "&ang;": "∠",
              "&and;": "∧",
              "&or;": "∨",
              "&cap;": "∩",
              "&cup;": "∪",
              "&int;": "∫",
              "&there4;": "∴",
              "&sim;": "∼",
              "&cong;": "≅",
              "&asymp;": "≈",
              "&ne;": "≠",
              "&equiv;": "≡",
              "&le;": "≤",
              "&ge;": "≥",
              "&sub;": "⊂",
              "&sup;": "⊃",
              "&nsub;": "⊄",
              "&sube;": "⊆",
              "&supe;": "⊇",
              "&oplus;": "⊕",
              "&otimes;": "⊗",
              "&perp;": "⊥",
              "&sdot;": "⋅",
              "&lceil;": "⌈",
              "&rceil;": "⌉",
              "&lfloor;": "⌊",
              "&rfloor;": "⌋",
              "&lang;": "〈",
              "&rang;": "〉",
              "&loz;": "◊",
              "&spades;": "♠",
              "&clubs;": "♣",
              "&hearts;": "♥",
              "&diams;": "♦",
            },
            characters: {
              "'": "&apos;",
              "\xa0": "&nbsp;",
              "\xa1": "&iexcl;",
              "\xa2": "&cent;",
              "\xa3": "&pound;",
              "\xa4": "&curren;",
              "\xa5": "&yen;",
              "\xa6": "&brvbar;",
              "\xa7": "&sect;",
              "\xa8": "&uml;",
              "\xa9": "&copy;",
              ª: "&ordf;",
              "\xab": "&laquo;",
              "\xac": "&not;",
              "\xad": "&shy;",
              "\xae": "&reg;",
              "\xaf": "&macr;",
              "\xb0": "&deg;",
              "\xb1": "&plusmn;",
              "\xb2": "&sup2;",
              "\xb3": "&sup3;",
              "\xb4": "&acute;",
              µ: "&micro;",
              "\xb6": "&para;",
              "\xb7": "&middot;",
              "\xb8": "&cedil;",
              "\xb9": "&sup1;",
              º: "&ordm;",
              "\xbb": "&raquo;",
              "\xbc": "&frac14;",
              "\xbd": "&frac12;",
              "\xbe": "&frac34;",
              "\xbf": "&iquest;",
              À: "&Agrave;",
              Á: "&Aacute;",
              Â: "&Acirc;",
              Ã: "&Atilde;",
              Ä: "&Auml;",
              Å: "&Aring;",
              Æ: "&AElig;",
              Ç: "&Ccedil;",
              È: "&Egrave;",
              É: "&Eacute;",
              Ê: "&Ecirc;",
              Ë: "&Euml;",
              Ì: "&Igrave;",
              Í: "&Iacute;",
              Î: "&Icirc;",
              Ï: "&Iuml;",
              Ð: "&ETH;",
              Ñ: "&Ntilde;",
              Ò: "&Ograve;",
              Ó: "&Oacute;",
              Ô: "&Ocirc;",
              Õ: "&Otilde;",
              Ö: "&Ouml;",
              "\xd7": "&times;",
              Ø: "&Oslash;",
              Ù: "&Ugrave;",
              Ú: "&Uacute;",
              Û: "&Ucirc;",
              Ü: "&Uuml;",
              Ý: "&Yacute;",
              Þ: "&THORN;",
              ß: "&szlig;",
              à: "&agrave;",
              á: "&aacute;",
              â: "&acirc;",
              ã: "&atilde;",
              ä: "&auml;",
              å: "&aring;",
              æ: "&aelig;",
              ç: "&ccedil;",
              è: "&egrave;",
              é: "&eacute;",
              ê: "&ecirc;",
              ë: "&euml;",
              ì: "&igrave;",
              í: "&iacute;",
              î: "&icirc;",
              ï: "&iuml;",
              ð: "&eth;",
              ñ: "&ntilde;",
              ò: "&ograve;",
              ó: "&oacute;",
              ô: "&ocirc;",
              õ: "&otilde;",
              ö: "&ouml;",
              "\xf7": "&divide;",
              ø: "&oslash;",
              ù: "&ugrave;",
              ú: "&uacute;",
              û: "&ucirc;",
              ü: "&uuml;",
              ý: "&yacute;",
              þ: "&thorn;",
              ÿ: "&yuml;",
              '"': "&quot;",
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              Œ: "&OElig;",
              œ: "&oelig;",
              Š: "&Scaron;",
              š: "&scaron;",
              Ÿ: "&Yuml;",
              ˆ: "&circ;",
              "˜": "&tilde;",
              " ": "&ensp;",
              " ": "&emsp;",
              " ": "&thinsp;",
              "‌": "&zwnj;",
              "‍": "&zwj;",
              "‎": "&lrm;",
              "‏": "&rlm;",
              "–": "&ndash;",
              "—": "&mdash;",
              "‘": "&lsquo;",
              "’": "&rsquo;",
              "‚": "&sbquo;",
              "“": "&ldquo;",
              "”": "&rdquo;",
              "„": "&bdquo;",
              "†": "&dagger;",
              "‡": "&Dagger;",
              "‰": "&permil;",
              "‹": "&lsaquo;",
              "›": "&rsaquo;",
              "€": "&euro;",
              ƒ: "&fnof;",
              Α: "&Alpha;",
              Β: "&Beta;",
              Γ: "&Gamma;",
              Δ: "&Delta;",
              Ε: "&Epsilon;",
              Ζ: "&Zeta;",
              Η: "&Eta;",
              Θ: "&Theta;",
              Ι: "&Iota;",
              Κ: "&Kappa;",
              Λ: "&Lambda;",
              Μ: "&Mu;",
              Ν: "&Nu;",
              Ξ: "&Xi;",
              Ο: "&Omicron;",
              Π: "&Pi;",
              Ρ: "&Rho;",
              Σ: "&Sigma;",
              Τ: "&Tau;",
              Υ: "&Upsilon;",
              Φ: "&Phi;",
              Χ: "&Chi;",
              Ψ: "&Psi;",
              Ω: "&Omega;",
              α: "&alpha;",
              β: "&beta;",
              γ: "&gamma;",
              δ: "&delta;",
              ε: "&epsilon;",
              ζ: "&zeta;",
              η: "&eta;",
              θ: "&theta;",
              ι: "&iota;",
              κ: "&kappa;",
              λ: "&lambda;",
              μ: "&mu;",
              ν: "&nu;",
              ξ: "&xi;",
              ο: "&omicron;",
              π: "&pi;",
              ρ: "&rho;",
              ς: "&sigmaf;",
              σ: "&sigma;",
              τ: "&tau;",
              υ: "&upsilon;",
              φ: "&phi;",
              χ: "&chi;",
              ψ: "&psi;",
              ω: "&omega;",
              ϑ: "&thetasym;",
              ϒ: "&upsih;",
              ϖ: "&piv;",
              "•": "&bull;",
              "…": "&hellip;",
              "′": "&prime;",
              "″": "&Prime;",
              "‾": "&oline;",
              "⁄": "&frasl;",
              ℘: "&weierp;",
              ℑ: "&image;",
              ℜ: "&real;",
              "™": "&trade;",
              ℵ: "&alefsym;",
              "←": "&larr;",
              "↑": "&uarr;",
              "→": "&rarr;",
              "↓": "&darr;",
              "↔": "&harr;",
              "↵": "&crarr;",
              "⇐": "&lArr;",
              "⇑": "&uArr;",
              "⇒": "&rArr;",
              "⇓": "&dArr;",
              "⇔": "&hArr;",
              "∀": "&forall;",
              "∂": "&part;",
              "∃": "&exist;",
              "∅": "&empty;",
              "∇": "&nabla;",
              "∈": "&isin;",
              "∉": "&notin;",
              "∋": "&ni;",
              "∏": "&prod;",
              "∑": "&sum;",
              "−": "&minus;",
              "∗": "&lowast;",
              "√": "&radic;",
              "∝": "&prop;",
              "∞": "&infin;",
              "∠": "&ang;",
              "∧": "&and;",
              "∨": "&or;",
              "∩": "&cap;",
              "∪": "&cup;",
              "∫": "&int;",
              "∴": "&there4;",
              "∼": "&sim;",
              "≅": "&cong;",
              "≈": "&asymp;",
              "≠": "&ne;",
              "≡": "&equiv;",
              "≤": "&le;",
              "≥": "&ge;",
              "⊂": "&sub;",
              "⊃": "&sup;",
              "⊄": "&nsub;",
              "⊆": "&sube;",
              "⊇": "&supe;",
              "⊕": "&oplus;",
              "⊗": "&otimes;",
              "⊥": "&perp;",
              "⋅": "&sdot;",
              "⌈": "&lceil;",
              "⌉": "&rceil;",
              "⌊": "&lfloor;",
              "⌋": "&rfloor;",
              "〈": "&lang;",
              "〉": "&rang;",
              "◊": "&loz;",
              "♠": "&spades;",
              "♣": "&clubs;",
              "♥": "&hearts;",
              "♦": "&diams;",
            },
          },
          html5: {
            entities: {
              "&AElig": "\xc6",
              "&AElig;": "\xc6",
              "&AMP": "&",
              "&AMP;": "&",
              "&Aacute": "\xc1",
              "&Aacute;": "\xc1",
              "&Abreve;": "Ă",
              "&Acirc": "\xc2",
              "&Acirc;": "\xc2",
              "&Acy;": "А",
              "&Afr;": "\uD835\uDD04",
              "&Agrave": "\xc0",
              "&Agrave;": "\xc0",
              "&Alpha;": "Α",
              "&Amacr;": "Ā",
              "&And;": "⩓",
              "&Aogon;": "Ą",
              "&Aopf;": "\uD835\uDD38",
              "&ApplyFunction;": "⁡",
              "&Aring": "\xc5",
              "&Aring;": "\xc5",
              "&Ascr;": "\uD835\uDC9C",
              "&Assign;": "≔",
              "&Atilde": "\xc3",
              "&Atilde;": "\xc3",
              "&Auml": "\xc4",
              "&Auml;": "\xc4",
              "&Backslash;": "∖",
              "&Barv;": "⫧",
              "&Barwed;": "⌆",
              "&Bcy;": "Б",
              "&Because;": "∵",
              "&Bernoullis;": "ℬ",
              "&Beta;": "Β",
              "&Bfr;": "\uD835\uDD05",
              "&Bopf;": "\uD835\uDD39",
              "&Breve;": "˘",
              "&Bscr;": "ℬ",
              "&Bumpeq;": "≎",
              "&CHcy;": "Ч",
              "&COPY": "\xa9",
              "&COPY;": "\xa9",
              "&Cacute;": "Ć",
              "&Cap;": "⋒",
              "&CapitalDifferentialD;": "ⅅ",
              "&Cayleys;": "ℭ",
              "&Ccaron;": "Č",
              "&Ccedil": "\xc7",
              "&Ccedil;": "\xc7",
              "&Ccirc;": "Ĉ",
              "&Cconint;": "∰",
              "&Cdot;": "Ċ",
              "&Cedilla;": "\xb8",
              "&CenterDot;": "\xb7",
              "&Cfr;": "ℭ",
              "&Chi;": "Χ",
              "&CircleDot;": "⊙",
              "&CircleMinus;": "⊖",
              "&CirclePlus;": "⊕",
              "&CircleTimes;": "⊗",
              "&ClockwiseContourIntegral;": "∲",
              "&CloseCurlyDoubleQuote;": "”",
              "&CloseCurlyQuote;": "’",
              "&Colon;": "∷",
              "&Colone;": "⩴",
              "&Congruent;": "≡",
              "&Conint;": "∯",
              "&ContourIntegral;": "∮",
              "&Copf;": "ℂ",
              "&Coproduct;": "∐",
              "&CounterClockwiseContourIntegral;": "∳",
              "&Cross;": "⨯",
              "&Cscr;": "\uD835\uDC9E",
              "&Cup;": "⋓",
              "&CupCap;": "≍",
              "&DD;": "ⅅ",
              "&DDotrahd;": "⤑",
              "&DJcy;": "Ђ",
              "&DScy;": "Ѕ",
              "&DZcy;": "Џ",
              "&Dagger;": "‡",
              "&Darr;": "↡",
              "&Dashv;": "⫤",
              "&Dcaron;": "Ď",
              "&Dcy;": "Д",
              "&Del;": "∇",
              "&Delta;": "Δ",
              "&Dfr;": "\uD835\uDD07",
              "&DiacriticalAcute;": "\xb4",
              "&DiacriticalDot;": "˙",
              "&DiacriticalDoubleAcute;": "˝",
              "&DiacriticalGrave;": "`",
              "&DiacriticalTilde;": "˜",
              "&Diamond;": "⋄",
              "&DifferentialD;": "ⅆ",
              "&Dopf;": "\uD835\uDD3B",
              "&Dot;": "\xa8",
              "&DotDot;": "⃜",
              "&DotEqual;": "≐",
              "&DoubleContourIntegral;": "∯",
              "&DoubleDot;": "\xa8",
              "&DoubleDownArrow;": "⇓",
              "&DoubleLeftArrow;": "⇐",
              "&DoubleLeftRightArrow;": "⇔",
              "&DoubleLeftTee;": "⫤",
              "&DoubleLongLeftArrow;": "⟸",
              "&DoubleLongLeftRightArrow;": "⟺",
              "&DoubleLongRightArrow;": "⟹",
              "&DoubleRightArrow;": "⇒",
              "&DoubleRightTee;": "⊨",
              "&DoubleUpArrow;": "⇑",
              "&DoubleUpDownArrow;": "⇕",
              "&DoubleVerticalBar;": "∥",
              "&DownArrow;": "↓",
              "&DownArrowBar;": "⤓",
              "&DownArrowUpArrow;": "⇵",
              "&DownBreve;": "̑",
              "&DownLeftRightVector;": "⥐",
              "&DownLeftTeeVector;": "⥞",
              "&DownLeftVector;": "↽",
              "&DownLeftVectorBar;": "⥖",
              "&DownRightTeeVector;": "⥟",
              "&DownRightVector;": "⇁",
              "&DownRightVectorBar;": "⥗",
              "&DownTee;": "⊤",
              "&DownTeeArrow;": "↧",
              "&Downarrow;": "⇓",
              "&Dscr;": "\uD835\uDC9F",
              "&Dstrok;": "Đ",
              "&ENG;": "Ŋ",
              "&ETH": "\xd0",
              "&ETH;": "\xd0",
              "&Eacute": "\xc9",
              "&Eacute;": "\xc9",
              "&Ecaron;": "Ě",
              "&Ecirc": "\xca",
              "&Ecirc;": "\xca",
              "&Ecy;": "Э",
              "&Edot;": "Ė",
              "&Efr;": "\uD835\uDD08",
              "&Egrave": "\xc8",
              "&Egrave;": "\xc8",
              "&Element;": "∈",
              "&Emacr;": "Ē",
              "&EmptySmallSquare;": "◻",
              "&EmptyVerySmallSquare;": "▫",
              "&Eogon;": "Ę",
              "&Eopf;": "\uD835\uDD3C",
              "&Epsilon;": "Ε",
              "&Equal;": "⩵",
              "&EqualTilde;": "≂",
              "&Equilibrium;": "⇌",
              "&Escr;": "ℰ",
              "&Esim;": "⩳",
              "&Eta;": "Η",
              "&Euml": "\xcb",
              "&Euml;": "\xcb",
              "&Exists;": "∃",
              "&ExponentialE;": "ⅇ",
              "&Fcy;": "Ф",
              "&Ffr;": "\uD835\uDD09",
              "&FilledSmallSquare;": "◼",
              "&FilledVerySmallSquare;": "▪",
              "&Fopf;": "\uD835\uDD3D",
              "&ForAll;": "∀",
              "&Fouriertrf;": "ℱ",
              "&Fscr;": "ℱ",
              "&GJcy;": "Ѓ",
              "&GT": ">",
              "&GT;": ">",
              "&Gamma;": "Γ",
              "&Gammad;": "Ϝ",
              "&Gbreve;": "Ğ",
              "&Gcedil;": "Ģ",
              "&Gcirc;": "Ĝ",
              "&Gcy;": "Г",
              "&Gdot;": "Ġ",
              "&Gfr;": "\uD835\uDD0A",
              "&Gg;": "⋙",
              "&Gopf;": "\uD835\uDD3E",
              "&GreaterEqual;": "≥",
              "&GreaterEqualLess;": "⋛",
              "&GreaterFullEqual;": "≧",
              "&GreaterGreater;": "⪢",
              "&GreaterLess;": "≷",
              "&GreaterSlantEqual;": "⩾",
              "&GreaterTilde;": "≳",
              "&Gscr;": "\uD835\uDCA2",
              "&Gt;": "≫",
              "&HARDcy;": "Ъ",
              "&Hacek;": "ˇ",
              "&Hat;": "^",
              "&Hcirc;": "Ĥ",
              "&Hfr;": "ℌ",
              "&HilbertSpace;": "ℋ",
              "&Hopf;": "ℍ",
              "&HorizontalLine;": "─",
              "&Hscr;": "ℋ",
              "&Hstrok;": "Ħ",
              "&HumpDownHump;": "≎",
              "&HumpEqual;": "≏",
              "&IEcy;": "Е",
              "&IJlig;": "Ĳ",
              "&IOcy;": "Ё",
              "&Iacute": "\xcd",
              "&Iacute;": "\xcd",
              "&Icirc": "\xce",
              "&Icirc;": "\xce",
              "&Icy;": "И",
              "&Idot;": "İ",
              "&Ifr;": "ℑ",
              "&Igrave": "\xcc",
              "&Igrave;": "\xcc",
              "&Im;": "ℑ",
              "&Imacr;": "Ī",
              "&ImaginaryI;": "ⅈ",
              "&Implies;": "⇒",
              "&Int;": "∬",
              "&Integral;": "∫",
              "&Intersection;": "⋂",
              "&InvisibleComma;": "⁣",
              "&InvisibleTimes;": "⁢",
              "&Iogon;": "Į",
              "&Iopf;": "\uD835\uDD40",
              "&Iota;": "Ι",
              "&Iscr;": "ℐ",
              "&Itilde;": "Ĩ",
              "&Iukcy;": "І",
              "&Iuml": "\xcf",
              "&Iuml;": "\xcf",
              "&Jcirc;": "Ĵ",
              "&Jcy;": "Й",
              "&Jfr;": "\uD835\uDD0D",
              "&Jopf;": "\uD835\uDD41",
              "&Jscr;": "\uD835\uDCA5",
              "&Jsercy;": "Ј",
              "&Jukcy;": "Є",
              "&KHcy;": "Х",
              "&KJcy;": "Ќ",
              "&Kappa;": "Κ",
              "&Kcedil;": "Ķ",
              "&Kcy;": "К",
              "&Kfr;": "\uD835\uDD0E",
              "&Kopf;": "\uD835\uDD42",
              "&Kscr;": "\uD835\uDCA6",
              "&LJcy;": "Љ",
              "&LT": "<",
              "&LT;": "<",
              "&Lacute;": "Ĺ",
              "&Lambda;": "Λ",
              "&Lang;": "⟪",
              "&Laplacetrf;": "ℒ",
              "&Larr;": "↞",
              "&Lcaron;": "Ľ",
              "&Lcedil;": "Ļ",
              "&Lcy;": "Л",
              "&LeftAngleBracket;": "⟨",
              "&LeftArrow;": "←",
              "&LeftArrowBar;": "⇤",
              "&LeftArrowRightArrow;": "⇆",
              "&LeftCeiling;": "⌈",
              "&LeftDoubleBracket;": "⟦",
              "&LeftDownTeeVector;": "⥡",
              "&LeftDownVector;": "⇃",
              "&LeftDownVectorBar;": "⥙",
              "&LeftFloor;": "⌊",
              "&LeftRightArrow;": "↔",
              "&LeftRightVector;": "⥎",
              "&LeftTee;": "⊣",
              "&LeftTeeArrow;": "↤",
              "&LeftTeeVector;": "⥚",
              "&LeftTriangle;": "⊲",
              "&LeftTriangleBar;": "⧏",
              "&LeftTriangleEqual;": "⊴",
              "&LeftUpDownVector;": "⥑",
              "&LeftUpTeeVector;": "⥠",
              "&LeftUpVector;": "↿",
              "&LeftUpVectorBar;": "⥘",
              "&LeftVector;": "↼",
              "&LeftVectorBar;": "⥒",
              "&Leftarrow;": "⇐",
              "&Leftrightarrow;": "⇔",
              "&LessEqualGreater;": "⋚",
              "&LessFullEqual;": "≦",
              "&LessGreater;": "≶",
              "&LessLess;": "⪡",
              "&LessSlantEqual;": "⩽",
              "&LessTilde;": "≲",
              "&Lfr;": "\uD835\uDD0F",
              "&Ll;": "⋘",
              "&Lleftarrow;": "⇚",
              "&Lmidot;": "Ŀ",
              "&LongLeftArrow;": "⟵",
              "&LongLeftRightArrow;": "⟷",
              "&LongRightArrow;": "⟶",
              "&Longleftarrow;": "⟸",
              "&Longleftrightarrow;": "⟺",
              "&Longrightarrow;": "⟹",
              "&Lopf;": "\uD835\uDD43",
              "&LowerLeftArrow;": "↙",
              "&LowerRightArrow;": "↘",
              "&Lscr;": "ℒ",
              "&Lsh;": "↰",
              "&Lstrok;": "Ł",
              "&Lt;": "≪",
              "&Map;": "⤅",
              "&Mcy;": "М",
              "&MediumSpace;": " ",
              "&Mellintrf;": "ℳ",
              "&Mfr;": "\uD835\uDD10",
              "&MinusPlus;": "∓",
              "&Mopf;": "\uD835\uDD44",
              "&Mscr;": "ℳ",
              "&Mu;": "Μ",
              "&NJcy;": "Њ",
              "&Nacute;": "Ń",
              "&Ncaron;": "Ň",
              "&Ncedil;": "Ņ",
              "&Ncy;": "Н",
              "&NegativeMediumSpace;": "​",
              "&NegativeThickSpace;": "​",
              "&NegativeThinSpace;": "​",
              "&NegativeVeryThinSpace;": "​",
              "&NestedGreaterGreater;": "≫",
              "&NestedLessLess;": "≪",
              "&NewLine;": "\n",
              "&Nfr;": "\uD835\uDD11",
              "&NoBreak;": "⁠",
              "&NonBreakingSpace;": "\xa0",
              "&Nopf;": "ℕ",
              "&Not;": "⫬",
              "&NotCongruent;": "≢",
              "&NotCupCap;": "≭",
              "&NotDoubleVerticalBar;": "∦",
              "&NotElement;": "∉",
              "&NotEqual;": "≠",
              "&NotEqualTilde;": "≂̸",
              "&NotExists;": "∄",
              "&NotGreater;": "≯",
              "&NotGreaterEqual;": "≱",
              "&NotGreaterFullEqual;": "≧̸",
              "&NotGreaterGreater;": "≫̸",
              "&NotGreaterLess;": "≹",
              "&NotGreaterSlantEqual;": "⩾̸",
              "&NotGreaterTilde;": "≵",
              "&NotHumpDownHump;": "≎̸",
              "&NotHumpEqual;": "≏̸",
              "&NotLeftTriangle;": "⋪",
              "&NotLeftTriangleBar;": "⧏̸",
              "&NotLeftTriangleEqual;": "⋬",
              "&NotLess;": "≮",
              "&NotLessEqual;": "≰",
              "&NotLessGreater;": "≸",
              "&NotLessLess;": "≪̸",
              "&NotLessSlantEqual;": "⩽̸",
              "&NotLessTilde;": "≴",
              "&NotNestedGreaterGreater;": "⪢̸",
              "&NotNestedLessLess;": "⪡̸",
              "&NotPrecedes;": "⊀",
              "&NotPrecedesEqual;": "⪯̸",
              "&NotPrecedesSlantEqual;": "⋠",
              "&NotReverseElement;": "∌",
              "&NotRightTriangle;": "⋫",
              "&NotRightTriangleBar;": "⧐̸",
              "&NotRightTriangleEqual;": "⋭",
              "&NotSquareSubset;": "⊏̸",
              "&NotSquareSubsetEqual;": "⋢",
              "&NotSquareSuperset;": "⊐̸",
              "&NotSquareSupersetEqual;": "⋣",
              "&NotSubset;": "⊂⃒",
              "&NotSubsetEqual;": "⊈",
              "&NotSucceeds;": "⊁",
              "&NotSucceedsEqual;": "⪰̸",
              "&NotSucceedsSlantEqual;": "⋡",
              "&NotSucceedsTilde;": "≿̸",
              "&NotSuperset;": "⊃⃒",
              "&NotSupersetEqual;": "⊉",
              "&NotTilde;": "≁",
              "&NotTildeEqual;": "≄",
              "&NotTildeFullEqual;": "≇",
              "&NotTildeTilde;": "≉",
              "&NotVerticalBar;": "∤",
              "&Nscr;": "\uD835\uDCA9",
              "&Ntilde": "\xd1",
              "&Ntilde;": "\xd1",
              "&Nu;": "Ν",
              "&OElig;": "Œ",
              "&Oacute": "\xd3",
              "&Oacute;": "\xd3",
              "&Ocirc": "\xd4",
              "&Ocirc;": "\xd4",
              "&Ocy;": "О",
              "&Odblac;": "Ő",
              "&Ofr;": "\uD835\uDD12",
              "&Ograve": "\xd2",
              "&Ograve;": "\xd2",
              "&Omacr;": "Ō",
              "&Omega;": "Ω",
              "&Omicron;": "Ο",
              "&Oopf;": "\uD835\uDD46",
              "&OpenCurlyDoubleQuote;": "“",
              "&OpenCurlyQuote;": "‘",
              "&Or;": "⩔",
              "&Oscr;": "\uD835\uDCAA",
              "&Oslash": "\xd8",
              "&Oslash;": "\xd8",
              "&Otilde": "\xd5",
              "&Otilde;": "\xd5",
              "&Otimes;": "⨷",
              "&Ouml": "\xd6",
              "&Ouml;": "\xd6",
              "&OverBar;": "‾",
              "&OverBrace;": "⏞",
              "&OverBracket;": "⎴",
              "&OverParenthesis;": "⏜",
              "&PartialD;": "∂",
              "&Pcy;": "П",
              "&Pfr;": "\uD835\uDD13",
              "&Phi;": "Φ",
              "&Pi;": "Π",
              "&PlusMinus;": "\xb1",
              "&Poincareplane;": "ℌ",
              "&Popf;": "ℙ",
              "&Pr;": "⪻",
              "&Precedes;": "≺",
              "&PrecedesEqual;": "⪯",
              "&PrecedesSlantEqual;": "≼",
              "&PrecedesTilde;": "≾",
              "&Prime;": "″",
              "&Product;": "∏",
              "&Proportion;": "∷",
              "&Proportional;": "∝",
              "&Pscr;": "\uD835\uDCAB",
              "&Psi;": "Ψ",
              "&QUOT": '"',
              "&QUOT;": '"',
              "&Qfr;": "\uD835\uDD14",
              "&Qopf;": "ℚ",
              "&Qscr;": "\uD835\uDCAC",
              "&RBarr;": "⤐",
              "&REG": "\xae",
              "&REG;": "\xae",
              "&Racute;": "Ŕ",
              "&Rang;": "⟫",
              "&Rarr;": "↠",
              "&Rarrtl;": "⤖",
              "&Rcaron;": "Ř",
              "&Rcedil;": "Ŗ",
              "&Rcy;": "Р",
              "&Re;": "ℜ",
              "&ReverseElement;": "∋",
              "&ReverseEquilibrium;": "⇋",
              "&ReverseUpEquilibrium;": "⥯",
              "&Rfr;": "ℜ",
              "&Rho;": "Ρ",
              "&RightAngleBracket;": "⟩",
              "&RightArrow;": "→",
              "&RightArrowBar;": "⇥",
              "&RightArrowLeftArrow;": "⇄",
              "&RightCeiling;": "⌉",
              "&RightDoubleBracket;": "⟧",
              "&RightDownTeeVector;": "⥝",
              "&RightDownVector;": "⇂",
              "&RightDownVectorBar;": "⥕",
              "&RightFloor;": "⌋",
              "&RightTee;": "⊢",
              "&RightTeeArrow;": "↦",
              "&RightTeeVector;": "⥛",
              "&RightTriangle;": "⊳",
              "&RightTriangleBar;": "⧐",
              "&RightTriangleEqual;": "⊵",
              "&RightUpDownVector;": "⥏",
              "&RightUpTeeVector;": "⥜",
              "&RightUpVector;": "↾",
              "&RightUpVectorBar;": "⥔",
              "&RightVector;": "⇀",
              "&RightVectorBar;": "⥓",
              "&Rightarrow;": "⇒",
              "&Ropf;": "ℝ",
              "&RoundImplies;": "⥰",
              "&Rrightarrow;": "⇛",
              "&Rscr;": "ℛ",
              "&Rsh;": "↱",
              "&RuleDelayed;": "⧴",
              "&SHCHcy;": "Щ",
              "&SHcy;": "Ш",
              "&SOFTcy;": "Ь",
              "&Sacute;": "Ś",
              "&Sc;": "⪼",
              "&Scaron;": "Š",
              "&Scedil;": "Ş",
              "&Scirc;": "Ŝ",
              "&Scy;": "С",
              "&Sfr;": "\uD835\uDD16",
              "&ShortDownArrow;": "↓",
              "&ShortLeftArrow;": "←",
              "&ShortRightArrow;": "→",
              "&ShortUpArrow;": "↑",
              "&Sigma;": "Σ",
              "&SmallCircle;": "∘",
              "&Sopf;": "\uD835\uDD4A",
              "&Sqrt;": "√",
              "&Square;": "□",
              "&SquareIntersection;": "⊓",
              "&SquareSubset;": "⊏",
              "&SquareSubsetEqual;": "⊑",
              "&SquareSuperset;": "⊐",
              "&SquareSupersetEqual;": "⊒",
              "&SquareUnion;": "⊔",
              "&Sscr;": "\uD835\uDCAE",
              "&Star;": "⋆",
              "&Sub;": "⋐",
              "&Subset;": "⋐",
              "&SubsetEqual;": "⊆",
              "&Succeeds;": "≻",
              "&SucceedsEqual;": "⪰",
              "&SucceedsSlantEqual;": "≽",
              "&SucceedsTilde;": "≿",
              "&SuchThat;": "∋",
              "&Sum;": "∑",
              "&Sup;": "⋑",
              "&Superset;": "⊃",
              "&SupersetEqual;": "⊇",
              "&Supset;": "⋑",
              "&THORN": "\xde",
              "&THORN;": "\xde",
              "&TRADE;": "™",
              "&TSHcy;": "Ћ",
              "&TScy;": "Ц",
              "&Tab;": "	",
              "&Tau;": "Τ",
              "&Tcaron;": "Ť",
              "&Tcedil;": "Ţ",
              "&Tcy;": "Т",
              "&Tfr;": "\uD835\uDD17",
              "&Therefore;": "∴",
              "&Theta;": "Θ",
              "&ThickSpace;": "  ",
              "&ThinSpace;": " ",
              "&Tilde;": "∼",
              "&TildeEqual;": "≃",
              "&TildeFullEqual;": "≅",
              "&TildeTilde;": "≈",
              "&Topf;": "\uD835\uDD4B",
              "&TripleDot;": "⃛",
              "&Tscr;": "\uD835\uDCAF",
              "&Tstrok;": "Ŧ",
              "&Uacute": "\xda",
              "&Uacute;": "\xda",
              "&Uarr;": "↟",
              "&Uarrocir;": "⥉",
              "&Ubrcy;": "Ў",
              "&Ubreve;": "Ŭ",
              "&Ucirc": "\xdb",
              "&Ucirc;": "\xdb",
              "&Ucy;": "У",
              "&Udblac;": "Ű",
              "&Ufr;": "\uD835\uDD18",
              "&Ugrave": "\xd9",
              "&Ugrave;": "\xd9",
              "&Umacr;": "Ū",
              "&UnderBar;": "_",
              "&UnderBrace;": "⏟",
              "&UnderBracket;": "⎵",
              "&UnderParenthesis;": "⏝",
              "&Union;": "⋃",
              "&UnionPlus;": "⊎",
              "&Uogon;": "Ų",
              "&Uopf;": "\uD835\uDD4C",
              "&UpArrow;": "↑",
              "&UpArrowBar;": "⤒",
              "&UpArrowDownArrow;": "⇅",
              "&UpDownArrow;": "↕",
              "&UpEquilibrium;": "⥮",
              "&UpTee;": "⊥",
              "&UpTeeArrow;": "↥",
              "&Uparrow;": "⇑",
              "&Updownarrow;": "⇕",
              "&UpperLeftArrow;": "↖",
              "&UpperRightArrow;": "↗",
              "&Upsi;": "ϒ",
              "&Upsilon;": "Υ",
              "&Uring;": "Ů",
              "&Uscr;": "\uD835\uDCB0",
              "&Utilde;": "Ũ",
              "&Uuml": "\xdc",
              "&Uuml;": "\xdc",
              "&VDash;": "⊫",
              "&Vbar;": "⫫",
              "&Vcy;": "В",
              "&Vdash;": "⊩",
              "&Vdashl;": "⫦",
              "&Vee;": "⋁",
              "&Verbar;": "‖",
              "&Vert;": "‖",
              "&VerticalBar;": "∣",
              "&VerticalLine;": "|",
              "&VerticalSeparator;": "❘",
              "&VerticalTilde;": "≀",
              "&VeryThinSpace;": " ",
              "&Vfr;": "\uD835\uDD19",
              "&Vopf;": "\uD835\uDD4D",
              "&Vscr;": "\uD835\uDCB1",
              "&Vvdash;": "⊪",
              "&Wcirc;": "Ŵ",
              "&Wedge;": "⋀",
              "&Wfr;": "\uD835\uDD1A",
              "&Wopf;": "\uD835\uDD4E",
              "&Wscr;": "\uD835\uDCB2",
              "&Xfr;": "\uD835\uDD1B",
              "&Xi;": "Ξ",
              "&Xopf;": "\uD835\uDD4F",
              "&Xscr;": "\uD835\uDCB3",
              "&YAcy;": "Я",
              "&YIcy;": "Ї",
              "&YUcy;": "Ю",
              "&Yacute": "\xdd",
              "&Yacute;": "\xdd",
              "&Ycirc;": "Ŷ",
              "&Ycy;": "Ы",
              "&Yfr;": "\uD835\uDD1C",
              "&Yopf;": "\uD835\uDD50",
              "&Yscr;": "\uD835\uDCB4",
              "&Yuml;": "Ÿ",
              "&ZHcy;": "Ж",
              "&Zacute;": "Ź",
              "&Zcaron;": "Ž",
              "&Zcy;": "З",
              "&Zdot;": "Ż",
              "&ZeroWidthSpace;": "​",
              "&Zeta;": "Ζ",
              "&Zfr;": "ℨ",
              "&Zopf;": "ℤ",
              "&Zscr;": "\uD835\uDCB5",
              "&aacute": "\xe1",
              "&aacute;": "\xe1",
              "&abreve;": "ă",
              "&ac;": "∾",
              "&acE;": "∾̳",
              "&acd;": "∿",
              "&acirc": "\xe2",
              "&acirc;": "\xe2",
              "&acute": "\xb4",
              "&acute;": "\xb4",
              "&acy;": "а",
              "&aelig": "\xe6",
              "&aelig;": "\xe6",
              "&af;": "⁡",
              "&afr;": "\uD835\uDD1E",
              "&agrave": "\xe0",
              "&agrave;": "\xe0",
              "&alefsym;": "ℵ",
              "&aleph;": "ℵ",
              "&alpha;": "α",
              "&amacr;": "ā",
              "&amalg;": "⨿",
              "&amp": "&",
              "&amp;": "&",
              "&and;": "∧",
              "&andand;": "⩕",
              "&andd;": "⩜",
              "&andslope;": "⩘",
              "&andv;": "⩚",
              "&ang;": "∠",
              "&ange;": "⦤",
              "&angle;": "∠",
              "&angmsd;": "∡",
              "&angmsdaa;": "⦨",
              "&angmsdab;": "⦩",
              "&angmsdac;": "⦪",
              "&angmsdad;": "⦫",
              "&angmsdae;": "⦬",
              "&angmsdaf;": "⦭",
              "&angmsdag;": "⦮",
              "&angmsdah;": "⦯",
              "&angrt;": "∟",
              "&angrtvb;": "⊾",
              "&angrtvbd;": "⦝",
              "&angsph;": "∢",
              "&angst;": "\xc5",
              "&angzarr;": "⍼",
              "&aogon;": "ą",
              "&aopf;": "\uD835\uDD52",
              "&ap;": "≈",
              "&apE;": "⩰",
              "&apacir;": "⩯",
              "&ape;": "≊",
              "&apid;": "≋",
              "&apos;": "'",
              "&approx;": "≈",
              "&approxeq;": "≊",
              "&aring": "\xe5",
              "&aring;": "\xe5",
              "&ascr;": "\uD835\uDCB6",
              "&ast;": "*",
              "&asymp;": "≈",
              "&asympeq;": "≍",
              "&atilde": "\xe3",
              "&atilde;": "\xe3",
              "&auml": "\xe4",
              "&auml;": "\xe4",
              "&awconint;": "∳",
              "&awint;": "⨑",
              "&bNot;": "⫭",
              "&backcong;": "≌",
              "&backepsilon;": "϶",
              "&backprime;": "‵",
              "&backsim;": "∽",
              "&backsimeq;": "⋍",
              "&barvee;": "⊽",
              "&barwed;": "⌅",
              "&barwedge;": "⌅",
              "&bbrk;": "⎵",
              "&bbrktbrk;": "⎶",
              "&bcong;": "≌",
              "&bcy;": "б",
              "&bdquo;": "„",
              "&becaus;": "∵",
              "&because;": "∵",
              "&bemptyv;": "⦰",
              "&bepsi;": "϶",
              "&bernou;": "ℬ",
              "&beta;": "β",
              "&beth;": "ℶ",
              "&between;": "≬",
              "&bfr;": "\uD835\uDD1F",
              "&bigcap;": "⋂",
              "&bigcirc;": "◯",
              "&bigcup;": "⋃",
              "&bigodot;": "⨀",
              "&bigoplus;": "⨁",
              "&bigotimes;": "⨂",
              "&bigsqcup;": "⨆",
              "&bigstar;": "★",
              "&bigtriangledown;": "▽",
              "&bigtriangleup;": "△",
              "&biguplus;": "⨄",
              "&bigvee;": "⋁",
              "&bigwedge;": "⋀",
              "&bkarow;": "⤍",
              "&blacklozenge;": "⧫",
              "&blacksquare;": "▪",
              "&blacktriangle;": "▴",
              "&blacktriangledown;": "▾",
              "&blacktriangleleft;": "◂",
              "&blacktriangleright;": "▸",
              "&blank;": "␣",
              "&blk12;": "▒",
              "&blk14;": "░",
              "&blk34;": "▓",
              "&block;": "█",
              "&bne;": "=⃥",
              "&bnequiv;": "≡⃥",
              "&bnot;": "⌐",
              "&bopf;": "\uD835\uDD53",
              "&bot;": "⊥",
              "&bottom;": "⊥",
              "&bowtie;": "⋈",
              "&boxDL;": "╗",
              "&boxDR;": "╔",
              "&boxDl;": "╖",
              "&boxDr;": "╓",
              "&boxH;": "═",
              "&boxHD;": "╦",
              "&boxHU;": "╩",
              "&boxHd;": "╤",
              "&boxHu;": "╧",
              "&boxUL;": "╝",
              "&boxUR;": "╚",
              "&boxUl;": "╜",
              "&boxUr;": "╙",
              "&boxV;": "║",
              "&boxVH;": "╬",
              "&boxVL;": "╣",
              "&boxVR;": "╠",
              "&boxVh;": "╫",
              "&boxVl;": "╢",
              "&boxVr;": "╟",
              "&boxbox;": "⧉",
              "&boxdL;": "╕",
              "&boxdR;": "╒",
              "&boxdl;": "┐",
              "&boxdr;": "┌",
              "&boxh;": "─",
              "&boxhD;": "╥",
              "&boxhU;": "╨",
              "&boxhd;": "┬",
              "&boxhu;": "┴",
              "&boxminus;": "⊟",
              "&boxplus;": "⊞",
              "&boxtimes;": "⊠",
              "&boxuL;": "╛",
              "&boxuR;": "╘",
              "&boxul;": "┘",
              "&boxur;": "└",
              "&boxv;": "│",
              "&boxvH;": "╪",
              "&boxvL;": "╡",
              "&boxvR;": "╞",
              "&boxvh;": "┼",
              "&boxvl;": "┤",
              "&boxvr;": "├",
              "&bprime;": "‵",
              "&breve;": "˘",
              "&brvbar": "\xa6",
              "&brvbar;": "\xa6",
              "&bscr;": "\uD835\uDCB7",
              "&bsemi;": "⁏",
              "&bsim;": "∽",
              "&bsime;": "⋍",
              "&bsol;": "\\",
              "&bsolb;": "⧅",
              "&bsolhsub;": "⟈",
              "&bull;": "•",
              "&bullet;": "•",
              "&bump;": "≎",
              "&bumpE;": "⪮",
              "&bumpe;": "≏",
              "&bumpeq;": "≏",
              "&cacute;": "ć",
              "&cap;": "∩",
              "&capand;": "⩄",
              "&capbrcup;": "⩉",
              "&capcap;": "⩋",
              "&capcup;": "⩇",
              "&capdot;": "⩀",
              "&caps;": "∩︀",
              "&caret;": "⁁",
              "&caron;": "ˇ",
              "&ccaps;": "⩍",
              "&ccaron;": "č",
              "&ccedil": "\xe7",
              "&ccedil;": "\xe7",
              "&ccirc;": "ĉ",
              "&ccups;": "⩌",
              "&ccupssm;": "⩐",
              "&cdot;": "ċ",
              "&cedil": "\xb8",
              "&cedil;": "\xb8",
              "&cemptyv;": "⦲",
              "&cent": "\xa2",
              "&cent;": "\xa2",
              "&centerdot;": "\xb7",
              "&cfr;": "\uD835\uDD20",
              "&chcy;": "ч",
              "&check;": "✓",
              "&checkmark;": "✓",
              "&chi;": "χ",
              "&cir;": "○",
              "&cirE;": "⧃",
              "&circ;": "ˆ",
              "&circeq;": "≗",
              "&circlearrowleft;": "↺",
              "&circlearrowright;": "↻",
              "&circledR;": "\xae",
              "&circledS;": "Ⓢ",
              "&circledast;": "⊛",
              "&circledcirc;": "⊚",
              "&circleddash;": "⊝",
              "&cire;": "≗",
              "&cirfnint;": "⨐",
              "&cirmid;": "⫯",
              "&cirscir;": "⧂",
              "&clubs;": "♣",
              "&clubsuit;": "♣",
              "&colon;": ":",
              "&colone;": "≔",
              "&coloneq;": "≔",
              "&comma;": ",",
              "&commat;": "@",
              "&comp;": "∁",
              "&compfn;": "∘",
              "&complement;": "∁",
              "&complexes;": "ℂ",
              "&cong;": "≅",
              "&congdot;": "⩭",
              "&conint;": "∮",
              "&copf;": "\uD835\uDD54",
              "&coprod;": "∐",
              "&copy": "\xa9",
              "&copy;": "\xa9",
              "&copysr;": "℗",
              "&crarr;": "↵",
              "&cross;": "✗",
              "&cscr;": "\uD835\uDCB8",
              "&csub;": "⫏",
              "&csube;": "⫑",
              "&csup;": "⫐",
              "&csupe;": "⫒",
              "&ctdot;": "⋯",
              "&cudarrl;": "⤸",
              "&cudarrr;": "⤵",
              "&cuepr;": "⋞",
              "&cuesc;": "⋟",
              "&cularr;": "↶",
              "&cularrp;": "⤽",
              "&cup;": "∪",
              "&cupbrcap;": "⩈",
              "&cupcap;": "⩆",
              "&cupcup;": "⩊",
              "&cupdot;": "⊍",
              "&cupor;": "⩅",
              "&cups;": "∪︀",
              "&curarr;": "↷",
              "&curarrm;": "⤼",
              "&curlyeqprec;": "⋞",
              "&curlyeqsucc;": "⋟",
              "&curlyvee;": "⋎",
              "&curlywedge;": "⋏",
              "&curren": "\xa4",
              "&curren;": "\xa4",
              "&curvearrowleft;": "↶",
              "&curvearrowright;": "↷",
              "&cuvee;": "⋎",
              "&cuwed;": "⋏",
              "&cwconint;": "∲",
              "&cwint;": "∱",
              "&cylcty;": "⌭",
              "&dArr;": "⇓",
              "&dHar;": "⥥",
              "&dagger;": "†",
              "&daleth;": "ℸ",
              "&darr;": "↓",
              "&dash;": "‐",
              "&dashv;": "⊣",
              "&dbkarow;": "⤏",
              "&dblac;": "˝",
              "&dcaron;": "ď",
              "&dcy;": "д",
              "&dd;": "ⅆ",
              "&ddagger;": "‡",
              "&ddarr;": "⇊",
              "&ddotseq;": "⩷",
              "&deg": "\xb0",
              "&deg;": "\xb0",
              "&delta;": "δ",
              "&demptyv;": "⦱",
              "&dfisht;": "⥿",
              "&dfr;": "\uD835\uDD21",
              "&dharl;": "⇃",
              "&dharr;": "⇂",
              "&diam;": "⋄",
              "&diamond;": "⋄",
              "&diamondsuit;": "♦",
              "&diams;": "♦",
              "&die;": "\xa8",
              "&digamma;": "ϝ",
              "&disin;": "⋲",
              "&div;": "\xf7",
              "&divide": "\xf7",
              "&divide;": "\xf7",
              "&divideontimes;": "⋇",
              "&divonx;": "⋇",
              "&djcy;": "ђ",
              "&dlcorn;": "⌞",
              "&dlcrop;": "⌍",
              "&dollar;": "$",
              "&dopf;": "\uD835\uDD55",
              "&dot;": "˙",
              "&doteq;": "≐",
              "&doteqdot;": "≑",
              "&dotminus;": "∸",
              "&dotplus;": "∔",
              "&dotsquare;": "⊡",
              "&doublebarwedge;": "⌆",
              "&downarrow;": "↓",
              "&downdownarrows;": "⇊",
              "&downharpoonleft;": "⇃",
              "&downharpoonright;": "⇂",
              "&drbkarow;": "⤐",
              "&drcorn;": "⌟",
              "&drcrop;": "⌌",
              "&dscr;": "\uD835\uDCB9",
              "&dscy;": "ѕ",
              "&dsol;": "⧶",
              "&dstrok;": "đ",
              "&dtdot;": "⋱",
              "&dtri;": "▿",
              "&dtrif;": "▾",
              "&duarr;": "⇵",
              "&duhar;": "⥯",
              "&dwangle;": "⦦",
              "&dzcy;": "џ",
              "&dzigrarr;": "⟿",
              "&eDDot;": "⩷",
              "&eDot;": "≑",
              "&eacute": "\xe9",
              "&eacute;": "\xe9",
              "&easter;": "⩮",
              "&ecaron;": "ě",
              "&ecir;": "≖",
              "&ecirc": "\xea",
              "&ecirc;": "\xea",
              "&ecolon;": "≕",
              "&ecy;": "э",
              "&edot;": "ė",
              "&ee;": "ⅇ",
              "&efDot;": "≒",
              "&efr;": "\uD835\uDD22",
              "&eg;": "⪚",
              "&egrave": "\xe8",
              "&egrave;": "\xe8",
              "&egs;": "⪖",
              "&egsdot;": "⪘",
              "&el;": "⪙",
              "&elinters;": "⏧",
              "&ell;": "ℓ",
              "&els;": "⪕",
              "&elsdot;": "⪗",
              "&emacr;": "ē",
              "&empty;": "∅",
              "&emptyset;": "∅",
              "&emptyv;": "∅",
              "&emsp13;": " ",
              "&emsp14;": " ",
              "&emsp;": " ",
              "&eng;": "ŋ",
              "&ensp;": " ",
              "&eogon;": "ę",
              "&eopf;": "\uD835\uDD56",
              "&epar;": "⋕",
              "&eparsl;": "⧣",
              "&eplus;": "⩱",
              "&epsi;": "ε",
              "&epsilon;": "ε",
              "&epsiv;": "ϵ",
              "&eqcirc;": "≖",
              "&eqcolon;": "≕",
              "&eqsim;": "≂",
              "&eqslantgtr;": "⪖",
              "&eqslantless;": "⪕",
              "&equals;": "=",
              "&equest;": "≟",
              "&equiv;": "≡",
              "&equivDD;": "⩸",
              "&eqvparsl;": "⧥",
              "&erDot;": "≓",
              "&erarr;": "⥱",
              "&escr;": "ℯ",
              "&esdot;": "≐",
              "&esim;": "≂",
              "&eta;": "η",
              "&eth": "\xf0",
              "&eth;": "\xf0",
              "&euml": "\xeb",
              "&euml;": "\xeb",
              "&euro;": "€",
              "&excl;": "!",
              "&exist;": "∃",
              "&expectation;": "ℰ",
              "&exponentiale;": "ⅇ",
              "&fallingdotseq;": "≒",
              "&fcy;": "ф",
              "&female;": "♀",
              "&ffilig;": "ﬃ",
              "&fflig;": "ﬀ",
              "&ffllig;": "ﬄ",
              "&ffr;": "\uD835\uDD23",
              "&filig;": "ﬁ",
              "&fjlig;": "fj",
              "&flat;": "♭",
              "&fllig;": "ﬂ",
              "&fltns;": "▱",
              "&fnof;": "ƒ",
              "&fopf;": "\uD835\uDD57",
              "&forall;": "∀",
              "&fork;": "⋔",
              "&forkv;": "⫙",
              "&fpartint;": "⨍",
              "&frac12": "\xbd",
              "&frac12;": "\xbd",
              "&frac13;": "⅓",
              "&frac14": "\xbc",
              "&frac14;": "\xbc",
              "&frac15;": "⅕",
              "&frac16;": "⅙",
              "&frac18;": "⅛",
              "&frac23;": "⅔",
              "&frac25;": "⅖",
              "&frac34": "\xbe",
              "&frac34;": "\xbe",
              "&frac35;": "⅗",
              "&frac38;": "⅜",
              "&frac45;": "⅘",
              "&frac56;": "⅚",
              "&frac58;": "⅝",
              "&frac78;": "⅞",
              "&frasl;": "⁄",
              "&frown;": "⌢",
              "&fscr;": "\uD835\uDCBB",
              "&gE;": "≧",
              "&gEl;": "⪌",
              "&gacute;": "ǵ",
              "&gamma;": "γ",
              "&gammad;": "ϝ",
              "&gap;": "⪆",
              "&gbreve;": "ğ",
              "&gcirc;": "ĝ",
              "&gcy;": "г",
              "&gdot;": "ġ",
              "&ge;": "≥",
              "&gel;": "⋛",
              "&geq;": "≥",
              "&geqq;": "≧",
              "&geqslant;": "⩾",
              "&ges;": "⩾",
              "&gescc;": "⪩",
              "&gesdot;": "⪀",
              "&gesdoto;": "⪂",
              "&gesdotol;": "⪄",
              "&gesl;": "⋛︀",
              "&gesles;": "⪔",
              "&gfr;": "\uD835\uDD24",
              "&gg;": "≫",
              "&ggg;": "⋙",
              "&gimel;": "ℷ",
              "&gjcy;": "ѓ",
              "&gl;": "≷",
              "&glE;": "⪒",
              "&gla;": "⪥",
              "&glj;": "⪤",
              "&gnE;": "≩",
              "&gnap;": "⪊",
              "&gnapprox;": "⪊",
              "&gne;": "⪈",
              "&gneq;": "⪈",
              "&gneqq;": "≩",
              "&gnsim;": "⋧",
              "&gopf;": "\uD835\uDD58",
              "&grave;": "`",
              "&gscr;": "ℊ",
              "&gsim;": "≳",
              "&gsime;": "⪎",
              "&gsiml;": "⪐",
              "&gt": ">",
              "&gt;": ">",
              "&gtcc;": "⪧",
              "&gtcir;": "⩺",
              "&gtdot;": "⋗",
              "&gtlPar;": "⦕",
              "&gtquest;": "⩼",
              "&gtrapprox;": "⪆",
              "&gtrarr;": "⥸",
              "&gtrdot;": "⋗",
              "&gtreqless;": "⋛",
              "&gtreqqless;": "⪌",
              "&gtrless;": "≷",
              "&gtrsim;": "≳",
              "&gvertneqq;": "≩︀",
              "&gvnE;": "≩︀",
              "&hArr;": "⇔",
              "&hairsp;": " ",
              "&half;": "\xbd",
              "&hamilt;": "ℋ",
              "&hardcy;": "ъ",
              "&harr;": "↔",
              "&harrcir;": "⥈",
              "&harrw;": "↭",
              "&hbar;": "ℏ",
              "&hcirc;": "ĥ",
              "&hearts;": "♥",
              "&heartsuit;": "♥",
              "&hellip;": "…",
              "&hercon;": "⊹",
              "&hfr;": "\uD835\uDD25",
              "&hksearow;": "⤥",
              "&hkswarow;": "⤦",
              "&hoarr;": "⇿",
              "&homtht;": "∻",
              "&hookleftarrow;": "↩",
              "&hookrightarrow;": "↪",
              "&hopf;": "\uD835\uDD59",
              "&horbar;": "―",
              "&hscr;": "\uD835\uDCBD",
              "&hslash;": "ℏ",
              "&hstrok;": "ħ",
              "&hybull;": "⁃",
              "&hyphen;": "‐",
              "&iacute": "\xed",
              "&iacute;": "\xed",
              "&ic;": "⁣",
              "&icirc": "\xee",
              "&icirc;": "\xee",
              "&icy;": "и",
              "&iecy;": "е",
              "&iexcl": "\xa1",
              "&iexcl;": "\xa1",
              "&iff;": "⇔",
              "&ifr;": "\uD835\uDD26",
              "&igrave": "\xec",
              "&igrave;": "\xec",
              "&ii;": "ⅈ",
              "&iiiint;": "⨌",
              "&iiint;": "∭",
              "&iinfin;": "⧜",
              "&iiota;": "℩",
              "&ijlig;": "ĳ",
              "&imacr;": "ī",
              "&image;": "ℑ",
              "&imagline;": "ℐ",
              "&imagpart;": "ℑ",
              "&imath;": "ı",
              "&imof;": "⊷",
              "&imped;": "Ƶ",
              "&in;": "∈",
              "&incare;": "℅",
              "&infin;": "∞",
              "&infintie;": "⧝",
              "&inodot;": "ı",
              "&int;": "∫",
              "&intcal;": "⊺",
              "&integers;": "ℤ",
              "&intercal;": "⊺",
              "&intlarhk;": "⨗",
              "&intprod;": "⨼",
              "&iocy;": "ё",
              "&iogon;": "į",
              "&iopf;": "\uD835\uDD5A",
              "&iota;": "ι",
              "&iprod;": "⨼",
              "&iquest": "\xbf",
              "&iquest;": "\xbf",
              "&iscr;": "\uD835\uDCBE",
              "&isin;": "∈",
              "&isinE;": "⋹",
              "&isindot;": "⋵",
              "&isins;": "⋴",
              "&isinsv;": "⋳",
              "&isinv;": "∈",
              "&it;": "⁢",
              "&itilde;": "ĩ",
              "&iukcy;": "і",
              "&iuml": "\xef",
              "&iuml;": "\xef",
              "&jcirc;": "ĵ",
              "&jcy;": "й",
              "&jfr;": "\uD835\uDD27",
              "&jmath;": "ȷ",
              "&jopf;": "\uD835\uDD5B",
              "&jscr;": "\uD835\uDCBF",
              "&jsercy;": "ј",
              "&jukcy;": "є",
              "&kappa;": "κ",
              "&kappav;": "ϰ",
              "&kcedil;": "ķ",
              "&kcy;": "к",
              "&kfr;": "\uD835\uDD28",
              "&kgreen;": "ĸ",
              "&khcy;": "х",
              "&kjcy;": "ќ",
              "&kopf;": "\uD835\uDD5C",
              "&kscr;": "\uD835\uDCC0",
              "&lAarr;": "⇚",
              "&lArr;": "⇐",
              "&lAtail;": "⤛",
              "&lBarr;": "⤎",
              "&lE;": "≦",
              "&lEg;": "⪋",
              "&lHar;": "⥢",
              "&lacute;": "ĺ",
              "&laemptyv;": "⦴",
              "&lagran;": "ℒ",
              "&lambda;": "λ",
              "&lang;": "⟨",
              "&langd;": "⦑",
              "&langle;": "⟨",
              "&lap;": "⪅",
              "&laquo": "\xab",
              "&laquo;": "\xab",
              "&larr;": "←",
              "&larrb;": "⇤",
              "&larrbfs;": "⤟",
              "&larrfs;": "⤝",
              "&larrhk;": "↩",
              "&larrlp;": "↫",
              "&larrpl;": "⤹",
              "&larrsim;": "⥳",
              "&larrtl;": "↢",
              "&lat;": "⪫",
              "&latail;": "⤙",
              "&late;": "⪭",
              "&lates;": "⪭︀",
              "&lbarr;": "⤌",
              "&lbbrk;": "❲",
              "&lbrace;": "{",
              "&lbrack;": "[",
              "&lbrke;": "⦋",
              "&lbrksld;": "⦏",
              "&lbrkslu;": "⦍",
              "&lcaron;": "ľ",
              "&lcedil;": "ļ",
              "&lceil;": "⌈",
              "&lcub;": "{",
              "&lcy;": "л",
              "&ldca;": "⤶",
              "&ldquo;": "“",
              "&ldquor;": "„",
              "&ldrdhar;": "⥧",
              "&ldrushar;": "⥋",
              "&ldsh;": "↲",
              "&le;": "≤",
              "&leftarrow;": "←",
              "&leftarrowtail;": "↢",
              "&leftharpoondown;": "↽",
              "&leftharpoonup;": "↼",
              "&leftleftarrows;": "⇇",
              "&leftrightarrow;": "↔",
              "&leftrightarrows;": "⇆",
              "&leftrightharpoons;": "⇋",
              "&leftrightsquigarrow;": "↭",
              "&leftthreetimes;": "⋋",
              "&leg;": "⋚",
              "&leq;": "≤",
              "&leqq;": "≦",
              "&leqslant;": "⩽",
              "&les;": "⩽",
              "&lescc;": "⪨",
              "&lesdot;": "⩿",
              "&lesdoto;": "⪁",
              "&lesdotor;": "⪃",
              "&lesg;": "⋚︀",
              "&lesges;": "⪓",
              "&lessapprox;": "⪅",
              "&lessdot;": "⋖",
              "&lesseqgtr;": "⋚",
              "&lesseqqgtr;": "⪋",
              "&lessgtr;": "≶",
              "&lesssim;": "≲",
              "&lfisht;": "⥼",
              "&lfloor;": "⌊",
              "&lfr;": "\uD835\uDD29",
              "&lg;": "≶",
              "&lgE;": "⪑",
              "&lhard;": "↽",
              "&lharu;": "↼",
              "&lharul;": "⥪",
              "&lhblk;": "▄",
              "&ljcy;": "љ",
              "&ll;": "≪",
              "&llarr;": "⇇",
              "&llcorner;": "⌞",
              "&llhard;": "⥫",
              "&lltri;": "◺",
              "&lmidot;": "ŀ",
              "&lmoust;": "⎰",
              "&lmoustache;": "⎰",
              "&lnE;": "≨",
              "&lnap;": "⪉",
              "&lnapprox;": "⪉",
              "&lne;": "⪇",
              "&lneq;": "⪇",
              "&lneqq;": "≨",
              "&lnsim;": "⋦",
              "&loang;": "⟬",
              "&loarr;": "⇽",
              "&lobrk;": "⟦",
              "&longleftarrow;": "⟵",
              "&longleftrightarrow;": "⟷",
              "&longmapsto;": "⟼",
              "&longrightarrow;": "⟶",
              "&looparrowleft;": "↫",
              "&looparrowright;": "↬",
              "&lopar;": "⦅",
              "&lopf;": "\uD835\uDD5D",
              "&loplus;": "⨭",
              "&lotimes;": "⨴",
              "&lowast;": "∗",
              "&lowbar;": "_",
              "&loz;": "◊",
              "&lozenge;": "◊",
              "&lozf;": "⧫",
              "&lpar;": "(",
              "&lparlt;": "⦓",
              "&lrarr;": "⇆",
              "&lrcorner;": "⌟",
              "&lrhar;": "⇋",
              "&lrhard;": "⥭",
              "&lrm;": "‎",
              "&lrtri;": "⊿",
              "&lsaquo;": "‹",
              "&lscr;": "\uD835\uDCC1",
              "&lsh;": "↰",
              "&lsim;": "≲",
              "&lsime;": "⪍",
              "&lsimg;": "⪏",
              "&lsqb;": "[",
              "&lsquo;": "‘",
              "&lsquor;": "‚",
              "&lstrok;": "ł",
              "&lt": "<",
              "&lt;": "<",
              "&ltcc;": "⪦",
              "&ltcir;": "⩹",
              "&ltdot;": "⋖",
              "&lthree;": "⋋",
              "&ltimes;": "⋉",
              "&ltlarr;": "⥶",
              "&ltquest;": "⩻",
              "&ltrPar;": "⦖",
              "&ltri;": "◃",
              "&ltrie;": "⊴",
              "&ltrif;": "◂",
              "&lurdshar;": "⥊",
              "&luruhar;": "⥦",
              "&lvertneqq;": "≨︀",
              "&lvnE;": "≨︀",
              "&mDDot;": "∺",
              "&macr": "\xaf",
              "&macr;": "\xaf",
              "&male;": "♂",
              "&malt;": "✠",
              "&maltese;": "✠",
              "&map;": "↦",
              "&mapsto;": "↦",
              "&mapstodown;": "↧",
              "&mapstoleft;": "↤",
              "&mapstoup;": "↥",
              "&marker;": "▮",
              "&mcomma;": "⨩",
              "&mcy;": "м",
              "&mdash;": "—",
              "&measuredangle;": "∡",
              "&mfr;": "\uD835\uDD2A",
              "&mho;": "℧",
              "&micro": "\xb5",
              "&micro;": "\xb5",
              "&mid;": "∣",
              "&midast;": "*",
              "&midcir;": "⫰",
              "&middot": "\xb7",
              "&middot;": "\xb7",
              "&minus;": "−",
              "&minusb;": "⊟",
              "&minusd;": "∸",
              "&minusdu;": "⨪",
              "&mlcp;": "⫛",
              "&mldr;": "…",
              "&mnplus;": "∓",
              "&models;": "⊧",
              "&mopf;": "\uD835\uDD5E",
              "&mp;": "∓",
              "&mscr;": "\uD835\uDCC2",
              "&mstpos;": "∾",
              "&mu;": "μ",
              "&multimap;": "⊸",
              "&mumap;": "⊸",
              "&nGg;": "⋙̸",
              "&nGt;": "≫⃒",
              "&nGtv;": "≫̸",
              "&nLeftarrow;": "⇍",
              "&nLeftrightarrow;": "⇎",
              "&nLl;": "⋘̸",
              "&nLt;": "≪⃒",
              "&nLtv;": "≪̸",
              "&nRightarrow;": "⇏",
              "&nVDash;": "⊯",
              "&nVdash;": "⊮",
              "&nabla;": "∇",
              "&nacute;": "ń",
              "&nang;": "∠⃒",
              "&nap;": "≉",
              "&napE;": "⩰̸",
              "&napid;": "≋̸",
              "&napos;": "ŉ",
              "&napprox;": "≉",
              "&natur;": "♮",
              "&natural;": "♮",
              "&naturals;": "ℕ",
              "&nbsp": "\xa0",
              "&nbsp;": "\xa0",
              "&nbump;": "≎̸",
              "&nbumpe;": "≏̸",
              "&ncap;": "⩃",
              "&ncaron;": "ň",
              "&ncedil;": "ņ",
              "&ncong;": "≇",
              "&ncongdot;": "⩭̸",
              "&ncup;": "⩂",
              "&ncy;": "н",
              "&ndash;": "–",
              "&ne;": "≠",
              "&neArr;": "⇗",
              "&nearhk;": "⤤",
              "&nearr;": "↗",
              "&nearrow;": "↗",
              "&nedot;": "≐̸",
              "&nequiv;": "≢",
              "&nesear;": "⤨",
              "&nesim;": "≂̸",
              "&nexist;": "∄",
              "&nexists;": "∄",
              "&nfr;": "\uD835\uDD2B",
              "&ngE;": "≧̸",
              "&nge;": "≱",
              "&ngeq;": "≱",
              "&ngeqq;": "≧̸",
              "&ngeqslant;": "⩾̸",
              "&nges;": "⩾̸",
              "&ngsim;": "≵",
              "&ngt;": "≯",
              "&ngtr;": "≯",
              "&nhArr;": "⇎",
              "&nharr;": "↮",
              "&nhpar;": "⫲",
              "&ni;": "∋",
              "&nis;": "⋼",
              "&nisd;": "⋺",
              "&niv;": "∋",
              "&njcy;": "њ",
              "&nlArr;": "⇍",
              "&nlE;": "≦̸",
              "&nlarr;": "↚",
              "&nldr;": "‥",
              "&nle;": "≰",
              "&nleftarrow;": "↚",
              "&nleftrightarrow;": "↮",
              "&nleq;": "≰",
              "&nleqq;": "≦̸",
              "&nleqslant;": "⩽̸",
              "&nles;": "⩽̸",
              "&nless;": "≮",
              "&nlsim;": "≴",
              "&nlt;": "≮",
              "&nltri;": "⋪",
              "&nltrie;": "⋬",
              "&nmid;": "∤",
              "&nopf;": "\uD835\uDD5F",
              "&not": "\xac",
              "&not;": "\xac",
              "&notin;": "∉",
              "&notinE;": "⋹̸",
              "&notindot;": "⋵̸",
              "&notinva;": "∉",
              "&notinvb;": "⋷",
              "&notinvc;": "⋶",
              "&notni;": "∌",
              "&notniva;": "∌",
              "&notnivb;": "⋾",
              "&notnivc;": "⋽",
              "&npar;": "∦",
              "&nparallel;": "∦",
              "&nparsl;": "⫽⃥",
              "&npart;": "∂̸",
              "&npolint;": "⨔",
              "&npr;": "⊀",
              "&nprcue;": "⋠",
              "&npre;": "⪯̸",
              "&nprec;": "⊀",
              "&npreceq;": "⪯̸",
              "&nrArr;": "⇏",
              "&nrarr;": "↛",
              "&nrarrc;": "⤳̸",
              "&nrarrw;": "↝̸",
              "&nrightarrow;": "↛",
              "&nrtri;": "⋫",
              "&nrtrie;": "⋭",
              "&nsc;": "⊁",
              "&nsccue;": "⋡",
              "&nsce;": "⪰̸",
              "&nscr;": "\uD835\uDCC3",
              "&nshortmid;": "∤",
              "&nshortparallel;": "∦",
              "&nsim;": "≁",
              "&nsime;": "≄",
              "&nsimeq;": "≄",
              "&nsmid;": "∤",
              "&nspar;": "∦",
              "&nsqsube;": "⋢",
              "&nsqsupe;": "⋣",
              "&nsub;": "⊄",
              "&nsubE;": "⫅̸",
              "&nsube;": "⊈",
              "&nsubset;": "⊂⃒",
              "&nsubseteq;": "⊈",
              "&nsubseteqq;": "⫅̸",
              "&nsucc;": "⊁",
              "&nsucceq;": "⪰̸",
              "&nsup;": "⊅",
              "&nsupE;": "⫆̸",
              "&nsupe;": "⊉",
              "&nsupset;": "⊃⃒",
              "&nsupseteq;": "⊉",
              "&nsupseteqq;": "⫆̸",
              "&ntgl;": "≹",
              "&ntilde": "\xf1",
              "&ntilde;": "\xf1",
              "&ntlg;": "≸",
              "&ntriangleleft;": "⋪",
              "&ntrianglelefteq;": "⋬",
              "&ntriangleright;": "⋫",
              "&ntrianglerighteq;": "⋭",
              "&nu;": "ν",
              "&num;": "#",
              "&numero;": "№",
              "&numsp;": " ",
              "&nvDash;": "⊭",
              "&nvHarr;": "⤄",
              "&nvap;": "≍⃒",
              "&nvdash;": "⊬",
              "&nvge;": "≥⃒",
              "&nvgt;": ">⃒",
              "&nvinfin;": "⧞",
              "&nvlArr;": "⤂",
              "&nvle;": "≤⃒",
              "&nvlt;": "<⃒",
              "&nvltrie;": "⊴⃒",
              "&nvrArr;": "⤃",
              "&nvrtrie;": "⊵⃒",
              "&nvsim;": "∼⃒",
              "&nwArr;": "⇖",
              "&nwarhk;": "⤣",
              "&nwarr;": "↖",
              "&nwarrow;": "↖",
              "&nwnear;": "⤧",
              "&oS;": "Ⓢ",
              "&oacute": "\xf3",
              "&oacute;": "\xf3",
              "&oast;": "⊛",
              "&ocir;": "⊚",
              "&ocirc": "\xf4",
              "&ocirc;": "\xf4",
              "&ocy;": "о",
              "&odash;": "⊝",
              "&odblac;": "ő",
              "&odiv;": "⨸",
              "&odot;": "⊙",
              "&odsold;": "⦼",
              "&oelig;": "œ",
              "&ofcir;": "⦿",
              "&ofr;": "\uD835\uDD2C",
              "&ogon;": "˛",
              "&ograve": "\xf2",
              "&ograve;": "\xf2",
              "&ogt;": "⧁",
              "&ohbar;": "⦵",
              "&ohm;": "Ω",
              "&oint;": "∮",
              "&olarr;": "↺",
              "&olcir;": "⦾",
              "&olcross;": "⦻",
              "&oline;": "‾",
              "&olt;": "⧀",
              "&omacr;": "ō",
              "&omega;": "ω",
              "&omicron;": "ο",
              "&omid;": "⦶",
              "&ominus;": "⊖",
              "&oopf;": "\uD835\uDD60",
              "&opar;": "⦷",
              "&operp;": "⦹",
              "&oplus;": "⊕",
              "&or;": "∨",
              "&orarr;": "↻",
              "&ord;": "⩝",
              "&order;": "ℴ",
              "&orderof;": "ℴ",
              "&ordf": "\xaa",
              "&ordf;": "\xaa",
              "&ordm": "\xba",
              "&ordm;": "\xba",
              "&origof;": "⊶",
              "&oror;": "⩖",
              "&orslope;": "⩗",
              "&orv;": "⩛",
              "&oscr;": "ℴ",
              "&oslash": "\xf8",
              "&oslash;": "\xf8",
              "&osol;": "⊘",
              "&otilde": "\xf5",
              "&otilde;": "\xf5",
              "&otimes;": "⊗",
              "&otimesas;": "⨶",
              "&ouml": "\xf6",
              "&ouml;": "\xf6",
              "&ovbar;": "⌽",
              "&par;": "∥",
              "&para": "\xb6",
              "&para;": "\xb6",
              "&parallel;": "∥",
              "&parsim;": "⫳",
              "&parsl;": "⫽",
              "&part;": "∂",
              "&pcy;": "п",
              "&percnt;": "%",
              "&period;": ".",
              "&permil;": "‰",
              "&perp;": "⊥",
              "&pertenk;": "‱",
              "&pfr;": "\uD835\uDD2D",
              "&phi;": "φ",
              "&phiv;": "ϕ",
              "&phmmat;": "ℳ",
              "&phone;": "☎",
              "&pi;": "π",
              "&pitchfork;": "⋔",
              "&piv;": "ϖ",
              "&planck;": "ℏ",
              "&planckh;": "ℎ",
              "&plankv;": "ℏ",
              "&plus;": "+",
              "&plusacir;": "⨣",
              "&plusb;": "⊞",
              "&pluscir;": "⨢",
              "&plusdo;": "∔",
              "&plusdu;": "⨥",
              "&pluse;": "⩲",
              "&plusmn": "\xb1",
              "&plusmn;": "\xb1",
              "&plussim;": "⨦",
              "&plustwo;": "⨧",
              "&pm;": "\xb1",
              "&pointint;": "⨕",
              "&popf;": "\uD835\uDD61",
              "&pound": "\xa3",
              "&pound;": "\xa3",
              "&pr;": "≺",
              "&prE;": "⪳",
              "&prap;": "⪷",
              "&prcue;": "≼",
              "&pre;": "⪯",
              "&prec;": "≺",
              "&precapprox;": "⪷",
              "&preccurlyeq;": "≼",
              "&preceq;": "⪯",
              "&precnapprox;": "⪹",
              "&precneqq;": "⪵",
              "&precnsim;": "⋨",
              "&precsim;": "≾",
              "&prime;": "′",
              "&primes;": "ℙ",
              "&prnE;": "⪵",
              "&prnap;": "⪹",
              "&prnsim;": "⋨",
              "&prod;": "∏",
              "&profalar;": "⌮",
              "&profline;": "⌒",
              "&profsurf;": "⌓",
              "&prop;": "∝",
              "&propto;": "∝",
              "&prsim;": "≾",
              "&prurel;": "⊰",
              "&pscr;": "\uD835\uDCC5",
              "&psi;": "ψ",
              "&puncsp;": " ",
              "&qfr;": "\uD835\uDD2E",
              "&qint;": "⨌",
              "&qopf;": "\uD835\uDD62",
              "&qprime;": "⁗",
              "&qscr;": "\uD835\uDCC6",
              "&quaternions;": "ℍ",
              "&quatint;": "⨖",
              "&quest;": "?",
              "&questeq;": "≟",
              "&quot": '"',
              "&quot;": '"',
              "&rAarr;": "⇛",
              "&rArr;": "⇒",
              "&rAtail;": "⤜",
              "&rBarr;": "⤏",
              "&rHar;": "⥤",
              "&race;": "∽̱",
              "&racute;": "ŕ",
              "&radic;": "√",
              "&raemptyv;": "⦳",
              "&rang;": "⟩",
              "&rangd;": "⦒",
              "&range;": "⦥",
              "&rangle;": "⟩",
              "&raquo": "\xbb",
              "&raquo;": "\xbb",
              "&rarr;": "→",
              "&rarrap;": "⥵",
              "&rarrb;": "⇥",
              "&rarrbfs;": "⤠",
              "&rarrc;": "⤳",
              "&rarrfs;": "⤞",
              "&rarrhk;": "↪",
              "&rarrlp;": "↬",
              "&rarrpl;": "⥅",
              "&rarrsim;": "⥴",
              "&rarrtl;": "↣",
              "&rarrw;": "↝",
              "&ratail;": "⤚",
              "&ratio;": "∶",
              "&rationals;": "ℚ",
              "&rbarr;": "⤍",
              "&rbbrk;": "❳",
              "&rbrace;": "}",
              "&rbrack;": "]",
              "&rbrke;": "⦌",
              "&rbrksld;": "⦎",
              "&rbrkslu;": "⦐",
              "&rcaron;": "ř",
              "&rcedil;": "ŗ",
              "&rceil;": "⌉",
              "&rcub;": "}",
              "&rcy;": "р",
              "&rdca;": "⤷",
              "&rdldhar;": "⥩",
              "&rdquo;": "”",
              "&rdquor;": "”",
              "&rdsh;": "↳",
              "&real;": "ℜ",
              "&realine;": "ℛ",
              "&realpart;": "ℜ",
              "&reals;": "ℝ",
              "&rect;": "▭",
              "&reg": "\xae",
              "&reg;": "\xae",
              "&rfisht;": "⥽",
              "&rfloor;": "⌋",
              "&rfr;": "\uD835\uDD2F",
              "&rhard;": "⇁",
              "&rharu;": "⇀",
              "&rharul;": "⥬",
              "&rho;": "ρ",
              "&rhov;": "ϱ",
              "&rightarrow;": "→",
              "&rightarrowtail;": "↣",
              "&rightharpoondown;": "⇁",
              "&rightharpoonup;": "⇀",
              "&rightleftarrows;": "⇄",
              "&rightleftharpoons;": "⇌",
              "&rightrightarrows;": "⇉",
              "&rightsquigarrow;": "↝",
              "&rightthreetimes;": "⋌",
              "&ring;": "˚",
              "&risingdotseq;": "≓",
              "&rlarr;": "⇄",
              "&rlhar;": "⇌",
              "&rlm;": "‏",
              "&rmoust;": "⎱",
              "&rmoustache;": "⎱",
              "&rnmid;": "⫮",
              "&roang;": "⟭",
              "&roarr;": "⇾",
              "&robrk;": "⟧",
              "&ropar;": "⦆",
              "&ropf;": "\uD835\uDD63",
              "&roplus;": "⨮",
              "&rotimes;": "⨵",
              "&rpar;": ")",
              "&rpargt;": "⦔",
              "&rppolint;": "⨒",
              "&rrarr;": "⇉",
              "&rsaquo;": "›",
              "&rscr;": "\uD835\uDCC7",
              "&rsh;": "↱",
              "&rsqb;": "]",
              "&rsquo;": "’",
              "&rsquor;": "’",
              "&rthree;": "⋌",
              "&rtimes;": "⋊",
              "&rtri;": "▹",
              "&rtrie;": "⊵",
              "&rtrif;": "▸",
              "&rtriltri;": "⧎",
              "&ruluhar;": "⥨",
              "&rx;": "℞",
              "&sacute;": "ś",
              "&sbquo;": "‚",
              "&sc;": "≻",
              "&scE;": "⪴",
              "&scap;": "⪸",
              "&scaron;": "š",
              "&sccue;": "≽",
              "&sce;": "⪰",
              "&scedil;": "ş",
              "&scirc;": "ŝ",
              "&scnE;": "⪶",
              "&scnap;": "⪺",
              "&scnsim;": "⋩",
              "&scpolint;": "⨓",
              "&scsim;": "≿",
              "&scy;": "с",
              "&sdot;": "⋅",
              "&sdotb;": "⊡",
              "&sdote;": "⩦",
              "&seArr;": "⇘",
              "&searhk;": "⤥",
              "&searr;": "↘",
              "&searrow;": "↘",
              "&sect": "\xa7",
              "&sect;": "\xa7",
              "&semi;": ";",
              "&seswar;": "⤩",
              "&setminus;": "∖",
              "&setmn;": "∖",
              "&sext;": "✶",
              "&sfr;": "\uD835\uDD30",
              "&sfrown;": "⌢",
              "&sharp;": "♯",
              "&shchcy;": "щ",
              "&shcy;": "ш",
              "&shortmid;": "∣",
              "&shortparallel;": "∥",
              "&shy": "\xad",
              "&shy;": "\xad",
              "&sigma;": "σ",
              "&sigmaf;": "ς",
              "&sigmav;": "ς",
              "&sim;": "∼",
              "&simdot;": "⩪",
              "&sime;": "≃",
              "&simeq;": "≃",
              "&simg;": "⪞",
              "&simgE;": "⪠",
              "&siml;": "⪝",
              "&simlE;": "⪟",
              "&simne;": "≆",
              "&simplus;": "⨤",
              "&simrarr;": "⥲",
              "&slarr;": "←",
              "&smallsetminus;": "∖",
              "&smashp;": "⨳",
              "&smeparsl;": "⧤",
              "&smid;": "∣",
              "&smile;": "⌣",
              "&smt;": "⪪",
              "&smte;": "⪬",
              "&smtes;": "⪬︀",
              "&softcy;": "ь",
              "&sol;": "/",
              "&solb;": "⧄",
              "&solbar;": "⌿",
              "&sopf;": "\uD835\uDD64",
              "&spades;": "♠",
              "&spadesuit;": "♠",
              "&spar;": "∥",
              "&sqcap;": "⊓",
              "&sqcaps;": "⊓︀",
              "&sqcup;": "⊔",
              "&sqcups;": "⊔︀",
              "&sqsub;": "⊏",
              "&sqsube;": "⊑",
              "&sqsubset;": "⊏",
              "&sqsubseteq;": "⊑",
              "&sqsup;": "⊐",
              "&sqsupe;": "⊒",
              "&sqsupset;": "⊐",
              "&sqsupseteq;": "⊒",
              "&squ;": "□",
              "&square;": "□",
              "&squarf;": "▪",
              "&squf;": "▪",
              "&srarr;": "→",
              "&sscr;": "\uD835\uDCC8",
              "&ssetmn;": "∖",
              "&ssmile;": "⌣",
              "&sstarf;": "⋆",
              "&star;": "☆",
              "&starf;": "★",
              "&straightepsilon;": "ϵ",
              "&straightphi;": "ϕ",
              "&strns;": "\xaf",
              "&sub;": "⊂",
              "&subE;": "⫅",
              "&subdot;": "⪽",
              "&sube;": "⊆",
              "&subedot;": "⫃",
              "&submult;": "⫁",
              "&subnE;": "⫋",
              "&subne;": "⊊",
              "&subplus;": "⪿",
              "&subrarr;": "⥹",
              "&subset;": "⊂",
              "&subseteq;": "⊆",
              "&subseteqq;": "⫅",
              "&subsetneq;": "⊊",
              "&subsetneqq;": "⫋",
              "&subsim;": "⫇",
              "&subsub;": "⫕",
              "&subsup;": "⫓",
              "&succ;": "≻",
              "&succapprox;": "⪸",
              "&succcurlyeq;": "≽",
              "&succeq;": "⪰",
              "&succnapprox;": "⪺",
              "&succneqq;": "⪶",
              "&succnsim;": "⋩",
              "&succsim;": "≿",
              "&sum;": "∑",
              "&sung;": "♪",
              "&sup1": "\xb9",
              "&sup1;": "\xb9",
              "&sup2": "\xb2",
              "&sup2;": "\xb2",
              "&sup3": "\xb3",
              "&sup3;": "\xb3",
              "&sup;": "⊃",
              "&supE;": "⫆",
              "&supdot;": "⪾",
              "&supdsub;": "⫘",
              "&supe;": "⊇",
              "&supedot;": "⫄",
              "&suphsol;": "⟉",
              "&suphsub;": "⫗",
              "&suplarr;": "⥻",
              "&supmult;": "⫂",
              "&supnE;": "⫌",
              "&supne;": "⊋",
              "&supplus;": "⫀",
              "&supset;": "⊃",
              "&supseteq;": "⊇",
              "&supseteqq;": "⫆",
              "&supsetneq;": "⊋",
              "&supsetneqq;": "⫌",
              "&supsim;": "⫈",
              "&supsub;": "⫔",
              "&supsup;": "⫖",
              "&swArr;": "⇙",
              "&swarhk;": "⤦",
              "&swarr;": "↙",
              "&swarrow;": "↙",
              "&swnwar;": "⤪",
              "&szlig": "\xdf",
              "&szlig;": "\xdf",
              "&target;": "⌖",
              "&tau;": "τ",
              "&tbrk;": "⎴",
              "&tcaron;": "ť",
              "&tcedil;": "ţ",
              "&tcy;": "т",
              "&tdot;": "⃛",
              "&telrec;": "⌕",
              "&tfr;": "\uD835\uDD31",
              "&there4;": "∴",
              "&therefore;": "∴",
              "&theta;": "θ",
              "&thetasym;": "ϑ",
              "&thetav;": "ϑ",
              "&thickapprox;": "≈",
              "&thicksim;": "∼",
              "&thinsp;": " ",
              "&thkap;": "≈",
              "&thksim;": "∼",
              "&thorn": "\xfe",
              "&thorn;": "\xfe",
              "&tilde;": "˜",
              "&times": "\xd7",
              "&times;": "\xd7",
              "&timesb;": "⊠",
              "&timesbar;": "⨱",
              "&timesd;": "⨰",
              "&tint;": "∭",
              "&toea;": "⤨",
              "&top;": "⊤",
              "&topbot;": "⌶",
              "&topcir;": "⫱",
              "&topf;": "\uD835\uDD65",
              "&topfork;": "⫚",
              "&tosa;": "⤩",
              "&tprime;": "‴",
              "&trade;": "™",
              "&triangle;": "▵",
              "&triangledown;": "▿",
              "&triangleleft;": "◃",
              "&trianglelefteq;": "⊴",
              "&triangleq;": "≜",
              "&triangleright;": "▹",
              "&trianglerighteq;": "⊵",
              "&tridot;": "◬",
              "&trie;": "≜",
              "&triminus;": "⨺",
              "&triplus;": "⨹",
              "&trisb;": "⧍",
              "&tritime;": "⨻",
              "&trpezium;": "⏢",
              "&tscr;": "\uD835\uDCC9",
              "&tscy;": "ц",
              "&tshcy;": "ћ",
              "&tstrok;": "ŧ",
              "&twixt;": "≬",
              "&twoheadleftarrow;": "↞",
              "&twoheadrightarrow;": "↠",
              "&uArr;": "⇑",
              "&uHar;": "⥣",
              "&uacute": "\xfa",
              "&uacute;": "\xfa",
              "&uarr;": "↑",
              "&ubrcy;": "ў",
              "&ubreve;": "ŭ",
              "&ucirc": "\xfb",
              "&ucirc;": "\xfb",
              "&ucy;": "у",
              "&udarr;": "⇅",
              "&udblac;": "ű",
              "&udhar;": "⥮",
              "&ufisht;": "⥾",
              "&ufr;": "\uD835\uDD32",
              "&ugrave": "\xf9",
              "&ugrave;": "\xf9",
              "&uharl;": "↿",
              "&uharr;": "↾",
              "&uhblk;": "▀",
              "&ulcorn;": "⌜",
              "&ulcorner;": "⌜",
              "&ulcrop;": "⌏",
              "&ultri;": "◸",
              "&umacr;": "ū",
              "&uml": "\xa8",
              "&uml;": "\xa8",
              "&uogon;": "ų",
              "&uopf;": "\uD835\uDD66",
              "&uparrow;": "↑",
              "&updownarrow;": "↕",
              "&upharpoonleft;": "↿",
              "&upharpoonright;": "↾",
              "&uplus;": "⊎",
              "&upsi;": "υ",
              "&upsih;": "ϒ",
              "&upsilon;": "υ",
              "&upuparrows;": "⇈",
              "&urcorn;": "⌝",
              "&urcorner;": "⌝",
              "&urcrop;": "⌎",
              "&uring;": "ů",
              "&urtri;": "◹",
              "&uscr;": "\uD835\uDCCA",
              "&utdot;": "⋰",
              "&utilde;": "ũ",
              "&utri;": "▵",
              "&utrif;": "▴",
              "&uuarr;": "⇈",
              "&uuml": "\xfc",
              "&uuml;": "\xfc",
              "&uwangle;": "⦧",
              "&vArr;": "⇕",
              "&vBar;": "⫨",
              "&vBarv;": "⫩",
              "&vDash;": "⊨",
              "&vangrt;": "⦜",
              "&varepsilon;": "ϵ",
              "&varkappa;": "ϰ",
              "&varnothing;": "∅",
              "&varphi;": "ϕ",
              "&varpi;": "ϖ",
              "&varpropto;": "∝",
              "&varr;": "↕",
              "&varrho;": "ϱ",
              "&varsigma;": "ς",
              "&varsubsetneq;": "⊊︀",
              "&varsubsetneqq;": "⫋︀",
              "&varsupsetneq;": "⊋︀",
              "&varsupsetneqq;": "⫌︀",
              "&vartheta;": "ϑ",
              "&vartriangleleft;": "⊲",
              "&vartriangleright;": "⊳",
              "&vcy;": "в",
              "&vdash;": "⊢",
              "&vee;": "∨",
              "&veebar;": "⊻",
              "&veeeq;": "≚",
              "&vellip;": "⋮",
              "&verbar;": "|",
              "&vert;": "|",
              "&vfr;": "\uD835\uDD33",
              "&vltri;": "⊲",
              "&vnsub;": "⊂⃒",
              "&vnsup;": "⊃⃒",
              "&vopf;": "\uD835\uDD67",
              "&vprop;": "∝",
              "&vrtri;": "⊳",
              "&vscr;": "\uD835\uDCCB",
              "&vsubnE;": "⫋︀",
              "&vsubne;": "⊊︀",
              "&vsupnE;": "⫌︀",
              "&vsupne;": "⊋︀",
              "&vzigzag;": "⦚",
              "&wcirc;": "ŵ",
              "&wedbar;": "⩟",
              "&wedge;": "∧",
              "&wedgeq;": "≙",
              "&weierp;": "℘",
              "&wfr;": "\uD835\uDD34",
              "&wopf;": "\uD835\uDD68",
              "&wp;": "℘",
              "&wr;": "≀",
              "&wreath;": "≀",
              "&wscr;": "\uD835\uDCCC",
              "&xcap;": "⋂",
              "&xcirc;": "◯",
              "&xcup;": "⋃",
              "&xdtri;": "▽",
              "&xfr;": "\uD835\uDD35",
              "&xhArr;": "⟺",
              "&xharr;": "⟷",
              "&xi;": "ξ",
              "&xlArr;": "⟸",
              "&xlarr;": "⟵",
              "&xmap;": "⟼",
              "&xnis;": "⋻",
              "&xodot;": "⨀",
              "&xopf;": "\uD835\uDD69",
              "&xoplus;": "⨁",
              "&xotime;": "⨂",
              "&xrArr;": "⟹",
              "&xrarr;": "⟶",
              "&xscr;": "\uD835\uDCCD",
              "&xsqcup;": "⨆",
              "&xuplus;": "⨄",
              "&xutri;": "△",
              "&xvee;": "⋁",
              "&xwedge;": "⋀",
              "&yacute": "\xfd",
              "&yacute;": "\xfd",
              "&yacy;": "я",
              "&ycirc;": "ŷ",
              "&ycy;": "ы",
              "&yen": "\xa5",
              "&yen;": "\xa5",
              "&yfr;": "\uD835\uDD36",
              "&yicy;": "ї",
              "&yopf;": "\uD835\uDD6A",
              "&yscr;": "\uD835\uDCCE",
              "&yucy;": "ю",
              "&yuml": "\xff",
              "&yuml;": "\xff",
              "&zacute;": "ź",
              "&zcaron;": "ž",
              "&zcy;": "з",
              "&zdot;": "ż",
              "&zeetrf;": "ℨ",
              "&zeta;": "ζ",
              "&zfr;": "\uD835\uDD37",
              "&zhcy;": "ж",
              "&zigrarr;": "⇝",
              "&zopf;": "\uD835\uDD6B",
              "&zscr;": "\uD835\uDCCF",
              "&zwj;": "‍",
              "&zwnj;": "‌",
            },
            characters: {
              Æ: "&AElig;",
              "&": "&amp;",
              Á: "&Aacute;",
              Ă: "&Abreve;",
              Â: "&Acirc;",
              А: "&Acy;",
              𝔄: "&Afr;",
              À: "&Agrave;",
              Α: "&Alpha;",
              Ā: "&Amacr;",
              "⩓": "&And;",
              Ą: "&Aogon;",
              𝔸: "&Aopf;",
              "⁡": "&af;",
              Å: "&angst;",
              𝒜: "&Ascr;",
              "≔": "&coloneq;",
              Ã: "&Atilde;",
              Ä: "&Auml;",
              "∖": "&ssetmn;",
              "⫧": "&Barv;",
              "⌆": "&doublebarwedge;",
              Б: "&Bcy;",
              "∵": "&because;",
              ℬ: "&bernou;",
              Β: "&Beta;",
              𝔅: "&Bfr;",
              𝔹: "&Bopf;",
              "˘": "&breve;",
              "≎": "&bump;",
              Ч: "&CHcy;",
              "\xa9": "&copy;",
              Ć: "&Cacute;",
              "⋒": "&Cap;",
              ⅅ: "&DD;",
              ℭ: "&Cfr;",
              Č: "&Ccaron;",
              Ç: "&Ccedil;",
              Ĉ: "&Ccirc;",
              "∰": "&Cconint;",
              Ċ: "&Cdot;",
              "\xb8": "&cedil;",
              "\xb7": "&middot;",
              Χ: "&Chi;",
              "⊙": "&odot;",
              "⊖": "&ominus;",
              "⊕": "&oplus;",
              "⊗": "&otimes;",
              "∲": "&cwconint;",
              "”": "&rdquor;",
              "’": "&rsquor;",
              "∷": "&Proportion;",
              "⩴": "&Colone;",
              "≡": "&equiv;",
              "∯": "&DoubleContourIntegral;",
              "∮": "&oint;",
              ℂ: "&complexes;",
              "∐": "&coprod;",
              "∳": "&awconint;",
              "⨯": "&Cross;",
              𝒞: "&Cscr;",
              "⋓": "&Cup;",
              "≍": "&asympeq;",
              "⤑": "&DDotrahd;",
              Ђ: "&DJcy;",
              Ѕ: "&DScy;",
              Џ: "&DZcy;",
              "‡": "&ddagger;",
              "↡": "&Darr;",
              "⫤": "&DoubleLeftTee;",
              Ď: "&Dcaron;",
              Д: "&Dcy;",
              "∇": "&nabla;",
              Δ: "&Delta;",
              𝔇: "&Dfr;",
              "\xb4": "&acute;",
              "˙": "&dot;",
              "˝": "&dblac;",
              "`": "&grave;",
              "˜": "&tilde;",
              "⋄": "&diamond;",
              ⅆ: "&dd;",
              𝔻: "&Dopf;",
              "\xa8": "&uml;",
              "⃜": "&DotDot;",
              "≐": "&esdot;",
              "⇓": "&dArr;",
              "⇐": "&lArr;",
              "⇔": "&iff;",
              "⟸": "&xlArr;",
              "⟺": "&xhArr;",
              "⟹": "&xrArr;",
              "⇒": "&rArr;",
              "⊨": "&vDash;",
              "⇑": "&uArr;",
              "⇕": "&vArr;",
              "∥": "&spar;",
              "↓": "&downarrow;",
              "⤓": "&DownArrowBar;",
              "⇵": "&duarr;",
              "̑": "&DownBreve;",
              "⥐": "&DownLeftRightVector;",
              "⥞": "&DownLeftTeeVector;",
              "↽": "&lhard;",
              "⥖": "&DownLeftVectorBar;",
              "⥟": "&DownRightTeeVector;",
              "⇁": "&rightharpoondown;",
              "⥗": "&DownRightVectorBar;",
              "⊤": "&top;",
              "↧": "&mapstodown;",
              𝒟: "&Dscr;",
              Đ: "&Dstrok;",
              Ŋ: "&ENG;",
              Ð: "&ETH;",
              É: "&Eacute;",
              Ě: "&Ecaron;",
              Ê: "&Ecirc;",
              Э: "&Ecy;",
              Ė: "&Edot;",
              𝔈: "&Efr;",
              È: "&Egrave;",
              "∈": "&isinv;",
              Ē: "&Emacr;",
              "◻": "&EmptySmallSquare;",
              "▫": "&EmptyVerySmallSquare;",
              Ę: "&Eogon;",
              𝔼: "&Eopf;",
              Ε: "&Epsilon;",
              "⩵": "&Equal;",
              "≂": "&esim;",
              "⇌": "&rlhar;",
              ℰ: "&expectation;",
              "⩳": "&Esim;",
              Η: "&Eta;",
              Ë: "&Euml;",
              "∃": "&exist;",
              ⅇ: "&exponentiale;",
              Ф: "&Fcy;",
              𝔉: "&Ffr;",
              "◼": "&FilledSmallSquare;",
              "▪": "&squf;",
              𝔽: "&Fopf;",
              "∀": "&forall;",
              ℱ: "&Fscr;",
              Ѓ: "&GJcy;",
              ">": "&gt;",
              Γ: "&Gamma;",
              Ϝ: "&Gammad;",
              Ğ: "&Gbreve;",
              Ģ: "&Gcedil;",
              Ĝ: "&Gcirc;",
              Г: "&Gcy;",
              Ġ: "&Gdot;",
              𝔊: "&Gfr;",
              "⋙": "&ggg;",
              𝔾: "&Gopf;",
              "≥": "&geq;",
              "⋛": "&gtreqless;",
              "≧": "&geqq;",
              "⪢": "&GreaterGreater;",
              "≷": "&gtrless;",
              "⩾": "&ges;",
              "≳": "&gtrsim;",
              𝒢: "&Gscr;",
              "≫": "&gg;",
              Ъ: "&HARDcy;",
              ˇ: "&caron;",
              "^": "&Hat;",
              Ĥ: "&Hcirc;",
              ℌ: "&Poincareplane;",
              ℋ: "&hamilt;",
              ℍ: "&quaternions;",
              "─": "&boxh;",
              Ħ: "&Hstrok;",
              "≏": "&bumpeq;",
              Е: "&IEcy;",
              Ĳ: "&IJlig;",
              Ё: "&IOcy;",
              Í: "&Iacute;",
              Î: "&Icirc;",
              И: "&Icy;",
              İ: "&Idot;",
              ℑ: "&imagpart;",
              Ì: "&Igrave;",
              Ī: "&Imacr;",
              ⅈ: "&ii;",
              "∬": "&Int;",
              "∫": "&int;",
              "⋂": "&xcap;",
              "⁣": "&ic;",
              "⁢": "&it;",
              Į: "&Iogon;",
              𝕀: "&Iopf;",
              Ι: "&Iota;",
              ℐ: "&imagline;",
              Ĩ: "&Itilde;",
              І: "&Iukcy;",
              Ï: "&Iuml;",
              Ĵ: "&Jcirc;",
              Й: "&Jcy;",
              𝔍: "&Jfr;",
              𝕁: "&Jopf;",
              𝒥: "&Jscr;",
              Ј: "&Jsercy;",
              Є: "&Jukcy;",
              Х: "&KHcy;",
              Ќ: "&KJcy;",
              Κ: "&Kappa;",
              Ķ: "&Kcedil;",
              К: "&Kcy;",
              𝔎: "&Kfr;",
              𝕂: "&Kopf;",
              𝒦: "&Kscr;",
              Љ: "&LJcy;",
              "<": "&lt;",
              Ĺ: "&Lacute;",
              Λ: "&Lambda;",
              "⟪": "&Lang;",
              ℒ: "&lagran;",
              "↞": "&twoheadleftarrow;",
              Ľ: "&Lcaron;",
              Ļ: "&Lcedil;",
              Л: "&Lcy;",
              "⟨": "&langle;",
              "←": "&slarr;",
              "⇤": "&larrb;",
              "⇆": "&lrarr;",
              "⌈": "&lceil;",
              "⟦": "&lobrk;",
              "⥡": "&LeftDownTeeVector;",
              "⇃": "&downharpoonleft;",
              "⥙": "&LeftDownVectorBar;",
              "⌊": "&lfloor;",
              "↔": "&leftrightarrow;",
              "⥎": "&LeftRightVector;",
              "⊣": "&dashv;",
              "↤": "&mapstoleft;",
              "⥚": "&LeftTeeVector;",
              "⊲": "&vltri;",
              "⧏": "&LeftTriangleBar;",
              "⊴": "&trianglelefteq;",
              "⥑": "&LeftUpDownVector;",
              "⥠": "&LeftUpTeeVector;",
              "↿": "&upharpoonleft;",
              "⥘": "&LeftUpVectorBar;",
              "↼": "&lharu;",
              "⥒": "&LeftVectorBar;",
              "⋚": "&lesseqgtr;",
              "≦": "&leqq;",
              "≶": "&lg;",
              "⪡": "&LessLess;",
              "⩽": "&les;",
              "≲": "&lsim;",
              𝔏: "&Lfr;",
              "⋘": "&Ll;",
              "⇚": "&lAarr;",
              Ŀ: "&Lmidot;",
              "⟵": "&xlarr;",
              "⟷": "&xharr;",
              "⟶": "&xrarr;",
              𝕃: "&Lopf;",
              "↙": "&swarrow;",
              "↘": "&searrow;",
              "↰": "&lsh;",
              Ł: "&Lstrok;",
              "≪": "&ll;",
              "⤅": "&Map;",
              М: "&Mcy;",
              " ": "&MediumSpace;",
              ℳ: "&phmmat;",
              𝔐: "&Mfr;",
              "∓": "&mp;",
              𝕄: "&Mopf;",
              Μ: "&Mu;",
              Њ: "&NJcy;",
              Ń: "&Nacute;",
              Ň: "&Ncaron;",
              Ņ: "&Ncedil;",
              Н: "&Ncy;",
              "​": "&ZeroWidthSpace;",
              "\n": "&NewLine;",
              𝔑: "&Nfr;",
              "⁠": "&NoBreak;",
              "\xa0": "&nbsp;",
              ℕ: "&naturals;",
              "⫬": "&Not;",
              "≢": "&nequiv;",
              "≭": "&NotCupCap;",
              "∦": "&nspar;",
              "∉": "&notinva;",
              "≠": "&ne;",
              "≂̸": "&nesim;",
              "∄": "&nexists;",
              "≯": "&ngtr;",
              "≱": "&ngeq;",
              "≧̸": "&ngeqq;",
              "≫̸": "&nGtv;",
              "≹": "&ntgl;",
              "⩾̸": "&nges;",
              "≵": "&ngsim;",
              "≎̸": "&nbump;",
              "≏̸": "&nbumpe;",
              "⋪": "&ntriangleleft;",
              "⧏̸": "&NotLeftTriangleBar;",
              "⋬": "&ntrianglelefteq;",
              "≮": "&nlt;",
              "≰": "&nleq;",
              "≸": "&ntlg;",
              "≪̸": "&nLtv;",
              "⩽̸": "&nles;",
              "≴": "&nlsim;",
              "⪢̸": "&NotNestedGreaterGreater;",
              "⪡̸": "&NotNestedLessLess;",
              "⊀": "&nprec;",
              "⪯̸": "&npreceq;",
              "⋠": "&nprcue;",
              "∌": "&notniva;",
              "⋫": "&ntriangleright;",
              "⧐̸": "&NotRightTriangleBar;",
              "⋭": "&ntrianglerighteq;",
              "⊏̸": "&NotSquareSubset;",
              "⋢": "&nsqsube;",
              "⊐̸": "&NotSquareSuperset;",
              "⋣": "&nsqsupe;",
              "⊂⃒": "&vnsub;",
              "⊈": "&nsubseteq;",
              "⊁": "&nsucc;",
              "⪰̸": "&nsucceq;",
              "⋡": "&nsccue;",
              "≿̸": "&NotSucceedsTilde;",
              "⊃⃒": "&vnsup;",
              "⊉": "&nsupseteq;",
              "≁": "&nsim;",
              "≄": "&nsimeq;",
              "≇": "&ncong;",
              "≉": "&napprox;",
              "∤": "&nsmid;",
              𝒩: "&Nscr;",
              Ñ: "&Ntilde;",
              Ν: "&Nu;",
              Œ: "&OElig;",
              Ó: "&Oacute;",
              Ô: "&Ocirc;",
              О: "&Ocy;",
              Ő: "&Odblac;",
              𝔒: "&Ofr;",
              Ò: "&Ograve;",
              Ō: "&Omacr;",
              Ω: "&ohm;",
              Ο: "&Omicron;",
              𝕆: "&Oopf;",
              "“": "&ldquo;",
              "‘": "&lsquo;",
              "⩔": "&Or;",
              𝒪: "&Oscr;",
              Ø: "&Oslash;",
              Õ: "&Otilde;",
              "⨷": "&Otimes;",
              Ö: "&Ouml;",
              "‾": "&oline;",
              "⏞": "&OverBrace;",
              "⎴": "&tbrk;",
              "⏜": "&OverParenthesis;",
              "∂": "&part;",
              П: "&Pcy;",
              𝔓: "&Pfr;",
              Φ: "&Phi;",
              Π: "&Pi;",
              "\xb1": "&pm;",
              ℙ: "&primes;",
              "⪻": "&Pr;",
              "≺": "&prec;",
              "⪯": "&preceq;",
              "≼": "&preccurlyeq;",
              "≾": "&prsim;",
              "″": "&Prime;",
              "∏": "&prod;",
              "∝": "&vprop;",
              𝒫: "&Pscr;",
              Ψ: "&Psi;",
              '"': "&quot;",
              𝔔: "&Qfr;",
              ℚ: "&rationals;",
              𝒬: "&Qscr;",
              "⤐": "&drbkarow;",
              "\xae": "&reg;",
              Ŕ: "&Racute;",
              "⟫": "&Rang;",
              "↠": "&twoheadrightarrow;",
              "⤖": "&Rarrtl;",
              Ř: "&Rcaron;",
              Ŗ: "&Rcedil;",
              Р: "&Rcy;",
              ℜ: "&realpart;",
              "∋": "&niv;",
              "⇋": "&lrhar;",
              "⥯": "&duhar;",
              Ρ: "&Rho;",
              "⟩": "&rangle;",
              "→": "&srarr;",
              "⇥": "&rarrb;",
              "⇄": "&rlarr;",
              "⌉": "&rceil;",
              "⟧": "&robrk;",
              "⥝": "&RightDownTeeVector;",
              "⇂": "&downharpoonright;",
              "⥕": "&RightDownVectorBar;",
              "⌋": "&rfloor;",
              "⊢": "&vdash;",
              "↦": "&mapsto;",
              "⥛": "&RightTeeVector;",
              "⊳": "&vrtri;",
              "⧐": "&RightTriangleBar;",
              "⊵": "&trianglerighteq;",
              "⥏": "&RightUpDownVector;",
              "⥜": "&RightUpTeeVector;",
              "↾": "&upharpoonright;",
              "⥔": "&RightUpVectorBar;",
              "⇀": "&rightharpoonup;",
              "⥓": "&RightVectorBar;",
              ℝ: "&reals;",
              "⥰": "&RoundImplies;",
              "⇛": "&rAarr;",
              ℛ: "&realine;",
              "↱": "&rsh;",
              "⧴": "&RuleDelayed;",
              Щ: "&SHCHcy;",
              Ш: "&SHcy;",
              Ь: "&SOFTcy;",
              Ś: "&Sacute;",
              "⪼": "&Sc;",
              Š: "&Scaron;",
              Ş: "&Scedil;",
              Ŝ: "&Scirc;",
              С: "&Scy;",
              𝔖: "&Sfr;",
              "↑": "&uparrow;",
              Σ: "&Sigma;",
              "∘": "&compfn;",
              𝕊: "&Sopf;",
              "√": "&radic;",
              "□": "&square;",
              "⊓": "&sqcap;",
              "⊏": "&sqsubset;",
              "⊑": "&sqsubseteq;",
              "⊐": "&sqsupset;",
              "⊒": "&sqsupseteq;",
              "⊔": "&sqcup;",
              𝒮: "&Sscr;",
              "⋆": "&sstarf;",
              "⋐": "&Subset;",
              "⊆": "&subseteq;",
              "≻": "&succ;",
              "⪰": "&succeq;",
              "≽": "&succcurlyeq;",
              "≿": "&succsim;",
              "∑": "&sum;",
              "⋑": "&Supset;",
              "⊃": "&supset;",
              "⊇": "&supseteq;",
              Þ: "&THORN;",
              "™": "&trade;",
              Ћ: "&TSHcy;",
              Ц: "&TScy;",
              "	": "&Tab;",
              Τ: "&Tau;",
              Ť: "&Tcaron;",
              Ţ: "&Tcedil;",
              Т: "&Tcy;",
              𝔗: "&Tfr;",
              "∴": "&therefore;",
              Θ: "&Theta;",
              "  ": "&ThickSpace;",
              " ": "&thinsp;",
              "∼": "&thksim;",
              "≃": "&simeq;",
              "≅": "&cong;",
              "≈": "&thkap;",
              𝕋: "&Topf;",
              "⃛": "&tdot;",
              𝒯: "&Tscr;",
              Ŧ: "&Tstrok;",
              Ú: "&Uacute;",
              "↟": "&Uarr;",
              "⥉": "&Uarrocir;",
              Ў: "&Ubrcy;",
              Ŭ: "&Ubreve;",
              Û: "&Ucirc;",
              У: "&Ucy;",
              Ű: "&Udblac;",
              𝔘: "&Ufr;",
              Ù: "&Ugrave;",
              Ū: "&Umacr;",
              _: "&lowbar;",
              "⏟": "&UnderBrace;",
              "⎵": "&bbrk;",
              "⏝": "&UnderParenthesis;",
              "⋃": "&xcup;",
              "⊎": "&uplus;",
              Ų: "&Uogon;",
              𝕌: "&Uopf;",
              "⤒": "&UpArrowBar;",
              "⇅": "&udarr;",
              "↕": "&varr;",
              "⥮": "&udhar;",
              "⊥": "&perp;",
              "↥": "&mapstoup;",
              "↖": "&nwarrow;",
              "↗": "&nearrow;",
              ϒ: "&upsih;",
              Υ: "&Upsilon;",
              Ů: "&Uring;",
              𝒰: "&Uscr;",
              Ũ: "&Utilde;",
              Ü: "&Uuml;",
              "⊫": "&VDash;",
              "⫫": "&Vbar;",
              В: "&Vcy;",
              "⊩": "&Vdash;",
              "⫦": "&Vdashl;",
              "⋁": "&xvee;",
              "‖": "&Vert;",
              "∣": "&smid;",
              "|": "&vert;",
              "❘": "&VerticalSeparator;",
              "≀": "&wreath;",
              " ": "&hairsp;",
              𝔙: "&Vfr;",
              𝕍: "&Vopf;",
              𝒱: "&Vscr;",
              "⊪": "&Vvdash;",
              Ŵ: "&Wcirc;",
              "⋀": "&xwedge;",
              𝔚: "&Wfr;",
              𝕎: "&Wopf;",
              𝒲: "&Wscr;",
              𝔛: "&Xfr;",
              Ξ: "&Xi;",
              𝕏: "&Xopf;",
              𝒳: "&Xscr;",
              Я: "&YAcy;",
              Ї: "&YIcy;",
              Ю: "&YUcy;",
              Ý: "&Yacute;",
              Ŷ: "&Ycirc;",
              Ы: "&Ycy;",
              𝔜: "&Yfr;",
              𝕐: "&Yopf;",
              𝒴: "&Yscr;",
              Ÿ: "&Yuml;",
              Ж: "&ZHcy;",
              Ź: "&Zacute;",
              Ž: "&Zcaron;",
              З: "&Zcy;",
              Ż: "&Zdot;",
              Ζ: "&Zeta;",
              ℨ: "&zeetrf;",
              ℤ: "&integers;",
              𝒵: "&Zscr;",
              á: "&aacute;",
              ă: "&abreve;",
              "∾": "&mstpos;",
              "∾̳": "&acE;",
              "∿": "&acd;",
              â: "&acirc;",
              а: "&acy;",
              æ: "&aelig;",
              𝔞: "&afr;",
              à: "&agrave;",
              ℵ: "&aleph;",
              α: "&alpha;",
              ā: "&amacr;",
              "⨿": "&amalg;",
              "∧": "&wedge;",
              "⩕": "&andand;",
              "⩜": "&andd;",
              "⩘": "&andslope;",
              "⩚": "&andv;",
              "∠": "&angle;",
              "⦤": "&ange;",
              "∡": "&measuredangle;",
              "⦨": "&angmsdaa;",
              "⦩": "&angmsdab;",
              "⦪": "&angmsdac;",
              "⦫": "&angmsdad;",
              "⦬": "&angmsdae;",
              "⦭": "&angmsdaf;",
              "⦮": "&angmsdag;",
              "⦯": "&angmsdah;",
              "∟": "&angrt;",
              "⊾": "&angrtvb;",
              "⦝": "&angrtvbd;",
              "∢": "&angsph;",
              "⍼": "&angzarr;",
              ą: "&aogon;",
              𝕒: "&aopf;",
              "⩰": "&apE;",
              "⩯": "&apacir;",
              "≊": "&approxeq;",
              "≋": "&apid;",
              "'": "&apos;",
              å: "&aring;",
              "\uD835\uDCB6": "&ascr;",
              "*": "&midast;",
              ã: "&atilde;",
              ä: "&auml;",
              "⨑": "&awint;",
              "⫭": "&bNot;",
              "≌": "&bcong;",
              "϶": "&bepsi;",
              "‵": "&bprime;",
              "∽": "&bsim;",
              "⋍": "&bsime;",
              "⊽": "&barvee;",
              "⌅": "&barwedge;",
              "⎶": "&bbrktbrk;",
              б: "&bcy;",
              "„": "&ldquor;",
              "⦰": "&bemptyv;",
              β: "&beta;",
              ℶ: "&beth;",
              "≬": "&twixt;",
              𝔟: "&bfr;",
              "◯": "&xcirc;",
              "⨀": "&xodot;",
              "⨁": "&xoplus;",
              "⨂": "&xotime;",
              "⨆": "&xsqcup;",
              "★": "&starf;",
              "▽": "&xdtri;",
              "△": "&xutri;",
              "⨄": "&xuplus;",
              "⤍": "&rbarr;",
              "⧫": "&lozf;",
              "▴": "&utrif;",
              "▾": "&dtrif;",
              "◂": "&ltrif;",
              "▸": "&rtrif;",
              "␣": "&blank;",
              "▒": "&blk12;",
              "░": "&blk14;",
              "▓": "&blk34;",
              "█": "&block;",
              "=⃥": "&bne;",
              "≡⃥": "&bnequiv;",
              "⌐": "&bnot;",
              𝕓: "&bopf;",
              "⋈": "&bowtie;",
              "╗": "&boxDL;",
              "╔": "&boxDR;",
              "╖": "&boxDl;",
              "╓": "&boxDr;",
              "═": "&boxH;",
              "╦": "&boxHD;",
              "╩": "&boxHU;",
              "╤": "&boxHd;",
              "╧": "&boxHu;",
              "╝": "&boxUL;",
              "╚": "&boxUR;",
              "╜": "&boxUl;",
              "╙": "&boxUr;",
              "║": "&boxV;",
              "╬": "&boxVH;",
              "╣": "&boxVL;",
              "╠": "&boxVR;",
              "╫": "&boxVh;",
              "╢": "&boxVl;",
              "╟": "&boxVr;",
              "⧉": "&boxbox;",
              "╕": "&boxdL;",
              "╒": "&boxdR;",
              "┐": "&boxdl;",
              "┌": "&boxdr;",
              "╥": "&boxhD;",
              "╨": "&boxhU;",
              "┬": "&boxhd;",
              "┴": "&boxhu;",
              "⊟": "&minusb;",
              "⊞": "&plusb;",
              "⊠": "&timesb;",
              "╛": "&boxuL;",
              "╘": "&boxuR;",
              "┘": "&boxul;",
              "└": "&boxur;",
              "│": "&boxv;",
              "╪": "&boxvH;",
              "╡": "&boxvL;",
              "╞": "&boxvR;",
              "┼": "&boxvh;",
              "┤": "&boxvl;",
              "├": "&boxvr;",
              "\xa6": "&brvbar;",
              𝒷: "&bscr;",
              "⁏": "&bsemi;",
              "\\": "&bsol;",
              "⧅": "&bsolb;",
              "⟈": "&bsolhsub;",
              "•": "&bullet;",
              "⪮": "&bumpE;",
              ć: "&cacute;",
              "∩": "&cap;",
              "⩄": "&capand;",
              "⩉": "&capbrcup;",
              "⩋": "&capcap;",
              "⩇": "&capcup;",
              "⩀": "&capdot;",
              "∩︀": "&caps;",
              "⁁": "&caret;",
              "⩍": "&ccaps;",
              č: "&ccaron;",
              ç: "&ccedil;",
              ĉ: "&ccirc;",
              "⩌": "&ccups;",
              "⩐": "&ccupssm;",
              ċ: "&cdot;",
              "⦲": "&cemptyv;",
              "\xa2": "&cent;",
              𝔠: "&cfr;",
              ч: "&chcy;",
              "✓": "&checkmark;",
              χ: "&chi;",
              "○": "&cir;",
              "⧃": "&cirE;",
              ˆ: "&circ;",
              "≗": "&cire;",
              "↺": "&olarr;",
              "↻": "&orarr;",
              "Ⓢ": "&oS;",
              "⊛": "&oast;",
              "⊚": "&ocir;",
              "⊝": "&odash;",
              "⨐": "&cirfnint;",
              "⫯": "&cirmid;",
              "⧂": "&cirscir;",
              "♣": "&clubsuit;",
              ":": "&colon;",
              ",": "&comma;",
              "@": "&commat;",
              "∁": "&complement;",
              "⩭": "&congdot;",
              𝕔: "&copf;",
              "℗": "&copysr;",
              "↵": "&crarr;",
              "✗": "&cross;",
              𝒸: "&cscr;",
              "⫏": "&csub;",
              "⫑": "&csube;",
              "⫐": "&csup;",
              "⫒": "&csupe;",
              "⋯": "&ctdot;",
              "⤸": "&cudarrl;",
              "⤵": "&cudarrr;",
              "⋞": "&curlyeqprec;",
              "⋟": "&curlyeqsucc;",
              "↶": "&curvearrowleft;",
              "⤽": "&cularrp;",
              "∪": "&cup;",
              "⩈": "&cupbrcap;",
              "⩆": "&cupcap;",
              "⩊": "&cupcup;",
              "⊍": "&cupdot;",
              "⩅": "&cupor;",
              "∪︀": "&cups;",
              "↷": "&curvearrowright;",
              "⤼": "&curarrm;",
              "⋎": "&cuvee;",
              "⋏": "&cuwed;",
              "\xa4": "&curren;",
              "∱": "&cwint;",
              "⌭": "&cylcty;",
              "⥥": "&dHar;",
              "†": "&dagger;",
              ℸ: "&daleth;",
              "‐": "&hyphen;",
              "⤏": "&rBarr;",
              ď: "&dcaron;",
              д: "&dcy;",
              "⇊": "&downdownarrows;",
              "⩷": "&eDDot;",
              "\xb0": "&deg;",
              δ: "&delta;",
              "⦱": "&demptyv;",
              "⥿": "&dfisht;",
              𝔡: "&dfr;",
              "♦": "&diams;",
              ϝ: "&gammad;",
              "⋲": "&disin;",
              "\xf7": "&divide;",
              "⋇": "&divonx;",
              ђ: "&djcy;",
              "⌞": "&llcorner;",
              "⌍": "&dlcrop;",
              $: "&dollar;",
              𝕕: "&dopf;",
              "≑": "&eDot;",
              "∸": "&minusd;",
              "∔": "&plusdo;",
              "⊡": "&sdotb;",
              "⌟": "&lrcorner;",
              "⌌": "&drcrop;",
              𝒹: "&dscr;",
              ѕ: "&dscy;",
              "⧶": "&dsol;",
              đ: "&dstrok;",
              "⋱": "&dtdot;",
              "▿": "&triangledown;",
              "⦦": "&dwangle;",
              џ: "&dzcy;",
              "⟿": "&dzigrarr;",
              é: "&eacute;",
              "⩮": "&easter;",
              ě: "&ecaron;",
              "≖": "&eqcirc;",
              ê: "&ecirc;",
              "≕": "&eqcolon;",
              э: "&ecy;",
              ė: "&edot;",
              "≒": "&fallingdotseq;",
              𝔢: "&efr;",
              "⪚": "&eg;",
              è: "&egrave;",
              "⪖": "&eqslantgtr;",
              "⪘": "&egsdot;",
              "⪙": "&el;",
              "⏧": "&elinters;",
              ℓ: "&ell;",
              "⪕": "&eqslantless;",
              "⪗": "&elsdot;",
              ē: "&emacr;",
              "∅": "&varnothing;",
              " ": "&emsp13;",
              " ": "&emsp14;",
              " ": "&emsp;",
              ŋ: "&eng;",
              " ": "&ensp;",
              ę: "&eogon;",
              𝕖: "&eopf;",
              "⋕": "&epar;",
              "⧣": "&eparsl;",
              "⩱": "&eplus;",
              ε: "&epsilon;",
              ϵ: "&varepsilon;",
              "=": "&equals;",
              "≟": "&questeq;",
              "⩸": "&equivDD;",
              "⧥": "&eqvparsl;",
              "≓": "&risingdotseq;",
              "⥱": "&erarr;",
              ℯ: "&escr;",
              η: "&eta;",
              ð: "&eth;",
              ë: "&euml;",
              "€": "&euro;",
              "!": "&excl;",
              ф: "&fcy;",
              "♀": "&female;",
              ﬃ: "&ffilig;",
              ﬀ: "&fflig;",
              ﬄ: "&ffllig;",
              𝔣: "&ffr;",
              ﬁ: "&filig;",
              fj: "&fjlig;",
              "♭": "&flat;",
              ﬂ: "&fllig;",
              "▱": "&fltns;",
              ƒ: "&fnof;",
              𝕗: "&fopf;",
              "⋔": "&pitchfork;",
              "⫙": "&forkv;",
              "⨍": "&fpartint;",
              "\xbd": "&half;",
              "⅓": "&frac13;",
              "\xbc": "&frac14;",
              "⅕": "&frac15;",
              "⅙": "&frac16;",
              "⅛": "&frac18;",
              "⅔": "&frac23;",
              "⅖": "&frac25;",
              "\xbe": "&frac34;",
              "⅗": "&frac35;",
              "⅜": "&frac38;",
              "⅘": "&frac45;",
              "⅚": "&frac56;",
              "⅝": "&frac58;",
              "⅞": "&frac78;",
              "⁄": "&frasl;",
              "⌢": "&sfrown;",
              𝒻: "&fscr;",
              "⪌": "&gtreqqless;",
              ǵ: "&gacute;",
              γ: "&gamma;",
              "⪆": "&gtrapprox;",
              ğ: "&gbreve;",
              ĝ: "&gcirc;",
              г: "&gcy;",
              ġ: "&gdot;",
              "⪩": "&gescc;",
              "⪀": "&gesdot;",
              "⪂": "&gesdoto;",
              "⪄": "&gesdotol;",
              "⋛︀": "&gesl;",
              "⪔": "&gesles;",
              𝔤: "&gfr;",
              ℷ: "&gimel;",
              ѓ: "&gjcy;",
              "⪒": "&glE;",
              "⪥": "&gla;",
              "⪤": "&glj;",
              "≩": "&gneqq;",
              "⪊": "&gnapprox;",
              "⪈": "&gneq;",
              "⋧": "&gnsim;",
              𝕘: "&gopf;",
              ℊ: "&gscr;",
              "⪎": "&gsime;",
              "⪐": "&gsiml;",
              "⪧": "&gtcc;",
              "⩺": "&gtcir;",
              "⋗": "&gtrdot;",
              "⦕": "&gtlPar;",
              "⩼": "&gtquest;",
              "⥸": "&gtrarr;",
              "≩︀": "&gvnE;",
              ъ: "&hardcy;",
              "⥈": "&harrcir;",
              "↭": "&leftrightsquigarrow;",
              ℏ: "&plankv;",
              ĥ: "&hcirc;",
              "♥": "&heartsuit;",
              "…": "&mldr;",
              "⊹": "&hercon;",
              𝔥: "&hfr;",
              "⤥": "&searhk;",
              "⤦": "&swarhk;",
              "⇿": "&hoarr;",
              "∻": "&homtht;",
              "↩": "&larrhk;",
              "↪": "&rarrhk;",
              𝕙: "&hopf;",
              "―": "&horbar;",
              𝒽: "&hscr;",
              ħ: "&hstrok;",
              "⁃": "&hybull;",
              í: "&iacute;",
              î: "&icirc;",
              и: "&icy;",
              е: "&iecy;",
              "\xa1": "&iexcl;",
              𝔦: "&ifr;",
              ì: "&igrave;",
              "⨌": "&qint;",
              "∭": "&tint;",
              "⧜": "&iinfin;",
              "℩": "&iiota;",
              ĳ: "&ijlig;",
              ī: "&imacr;",
              ı: "&inodot;",
              "⊷": "&imof;",
              Ƶ: "&imped;",
              "℅": "&incare;",
              "∞": "&infin;",
              "⧝": "&infintie;",
              "⊺": "&intercal;",
              "⨗": "&intlarhk;",
              "⨼": "&iprod;",
              ё: "&iocy;",
              į: "&iogon;",
              𝕚: "&iopf;",
              ι: "&iota;",
              "\xbf": "&iquest;",
              𝒾: "&iscr;",
              "⋹": "&isinE;",
              "⋵": "&isindot;",
              "⋴": "&isins;",
              "⋳": "&isinsv;",
              ĩ: "&itilde;",
              і: "&iukcy;",
              ï: "&iuml;",
              ĵ: "&jcirc;",
              й: "&jcy;",
              𝔧: "&jfr;",
              ȷ: "&jmath;",
              𝕛: "&jopf;",
              𝒿: "&jscr;",
              ј: "&jsercy;",
              є: "&jukcy;",
              κ: "&kappa;",
              ϰ: "&varkappa;",
              ķ: "&kcedil;",
              к: "&kcy;",
              𝔨: "&kfr;",
              ĸ: "&kgreen;",
              х: "&khcy;",
              ќ: "&kjcy;",
              𝕜: "&kopf;",
              𝓀: "&kscr;",
              "⤛": "&lAtail;",
              "⤎": "&lBarr;",
              "⪋": "&lesseqqgtr;",
              "⥢": "&lHar;",
              ĺ: "&lacute;",
              "⦴": "&laemptyv;",
              λ: "&lambda;",
              "⦑": "&langd;",
              "⪅": "&lessapprox;",
              "\xab": "&laquo;",
              "⤟": "&larrbfs;",
              "⤝": "&larrfs;",
              "↫": "&looparrowleft;",
              "⤹": "&larrpl;",
              "⥳": "&larrsim;",
              "↢": "&leftarrowtail;",
              "⪫": "&lat;",
              "⤙": "&latail;",
              "⪭": "&late;",
              "⪭︀": "&lates;",
              "⤌": "&lbarr;",
              "❲": "&lbbrk;",
              "{": "&lcub;",
              "[": "&lsqb;",
              "⦋": "&lbrke;",
              "⦏": "&lbrksld;",
              "⦍": "&lbrkslu;",
              ľ: "&lcaron;",
              ļ: "&lcedil;",
              л: "&lcy;",
              "⤶": "&ldca;",
              "⥧": "&ldrdhar;",
              "⥋": "&ldrushar;",
              "↲": "&ldsh;",
              "≤": "&leq;",
              "⇇": "&llarr;",
              "⋋": "&lthree;",
              "⪨": "&lescc;",
              "⩿": "&lesdot;",
              "⪁": "&lesdoto;",
              "⪃": "&lesdotor;",
              "⋚︀": "&lesg;",
              "⪓": "&lesges;",
              "⋖": "&ltdot;",
              "⥼": "&lfisht;",
              𝔩: "&lfr;",
              "⪑": "&lgE;",
              "⥪": "&lharul;",
              "▄": "&lhblk;",
              љ: "&ljcy;",
              "⥫": "&llhard;",
              "◺": "&lltri;",
              ŀ: "&lmidot;",
              "⎰": "&lmoustache;",
              "≨": "&lneqq;",
              "⪉": "&lnapprox;",
              "⪇": "&lneq;",
              "⋦": "&lnsim;",
              "⟬": "&loang;",
              "⇽": "&loarr;",
              "⟼": "&xmap;",
              "↬": "&rarrlp;",
              "⦅": "&lopar;",
              𝕝: "&lopf;",
              "⨭": "&loplus;",
              "⨴": "&lotimes;",
              "∗": "&lowast;",
              "◊": "&lozenge;",
              "(": "&lpar;",
              "⦓": "&lparlt;",
              "⥭": "&lrhard;",
              "‎": "&lrm;",
              "⊿": "&lrtri;",
              "‹": "&lsaquo;",
              𝓁: "&lscr;",
              "⪍": "&lsime;",
              "⪏": "&lsimg;",
              "‚": "&sbquo;",
              ł: "&lstrok;",
              "⪦": "&ltcc;",
              "⩹": "&ltcir;",
              "⋉": "&ltimes;",
              "⥶": "&ltlarr;",
              "⩻": "&ltquest;",
              "⦖": "&ltrPar;",
              "◃": "&triangleleft;",
              "⥊": "&lurdshar;",
              "⥦": "&luruhar;",
              "≨︀": "&lvnE;",
              "∺": "&mDDot;",
              "\xaf": "&strns;",
              "♂": "&male;",
              "✠": "&maltese;",
              "▮": "&marker;",
              "⨩": "&mcomma;",
              м: "&mcy;",
              "—": "&mdash;",
              𝔪: "&mfr;",
              "℧": "&mho;",
              µ: "&micro;",
              "⫰": "&midcir;",
              "−": "&minus;",
              "⨪": "&minusdu;",
              "⫛": "&mlcp;",
              "⊧": "&models;",
              𝕞: "&mopf;",
              𝓂: "&mscr;",
              μ: "&mu;",
              "⊸": "&mumap;",
              "⋙̸": "&nGg;",
              "≫⃒": "&nGt;",
              "⇍": "&nlArr;",
              "⇎": "&nhArr;",
              "⋘̸": "&nLl;",
              "≪⃒": "&nLt;",
              "⇏": "&nrArr;",
              "⊯": "&nVDash;",
              "⊮": "&nVdash;",
              ń: "&nacute;",
              "∠⃒": "&nang;",
              "⩰̸": "&napE;",
              "≋̸": "&napid;",
              ŉ: "&napos;",
              "♮": "&natural;",
              "⩃": "&ncap;",
              ň: "&ncaron;",
              ņ: "&ncedil;",
              "⩭̸": "&ncongdot;",
              "⩂": "&ncup;",
              н: "&ncy;",
              "–": "&ndash;",
              "⇗": "&neArr;",
              "⤤": "&nearhk;",
              "≐̸": "&nedot;",
              "⤨": "&toea;",
              𝔫: "&nfr;",
              "↮": "&nleftrightarrow;",
              "⫲": "&nhpar;",
              "⋼": "&nis;",
              "⋺": "&nisd;",
              њ: "&njcy;",
              "≦̸": "&nleqq;",
              "↚": "&nleftarrow;",
              "‥": "&nldr;",
              𝕟: "&nopf;",
              "\xac": "&not;",
              "⋹̸": "&notinE;",
              "⋵̸": "&notindot;",
              "⋷": "&notinvb;",
              "⋶": "&notinvc;",
              "⋾": "&notnivb;",
              "⋽": "&notnivc;",
              "⫽⃥": "&nparsl;",
              "∂̸": "&npart;",
              "⨔": "&npolint;",
              "↛": "&nrightarrow;",
              "⤳̸": "&nrarrc;",
              "↝̸": "&nrarrw;",
              𝓃: "&nscr;",
              "⊄": "&nsub;",
              "⫅̸": "&nsubseteqq;",
              "⊅": "&nsup;",
              "⫆̸": "&nsupseteqq;",
              ñ: "&ntilde;",
              ν: "&nu;",
              "#": "&num;",
              "№": "&numero;",
              " ": "&numsp;",
              "⊭": "&nvDash;",
              "⤄": "&nvHarr;",
              "≍⃒": "&nvap;",
              "⊬": "&nvdash;",
              "≥⃒": "&nvge;",
              ">⃒": "&nvgt;",
              "⧞": "&nvinfin;",
              "⤂": "&nvlArr;",
              "≤⃒": "&nvle;",
              "<⃒": "&nvlt;",
              "⊴⃒": "&nvltrie;",
              "⤃": "&nvrArr;",
              "⊵⃒": "&nvrtrie;",
              "∼⃒": "&nvsim;",
              "⇖": "&nwArr;",
              "⤣": "&nwarhk;",
              "⤧": "&nwnear;",
              ó: "&oacute;",
              ô: "&ocirc;",
              о: "&ocy;",
              ő: "&odblac;",
              "⨸": "&odiv;",
              "⦼": "&odsold;",
              œ: "&oelig;",
              "⦿": "&ofcir;",
              𝔬: "&ofr;",
              "˛": "&ogon;",
              ò: "&ograve;",
              "⧁": "&ogt;",
              "⦵": "&ohbar;",
              "⦾": "&olcir;",
              "⦻": "&olcross;",
              "⧀": "&olt;",
              ō: "&omacr;",
              ω: "&omega;",
              ο: "&omicron;",
              "⦶": "&omid;",
              𝕠: "&oopf;",
              "⦷": "&opar;",
              "⦹": "&operp;",
              "∨": "&vee;",
              "⩝": "&ord;",
              ℴ: "&oscr;",
              ª: "&ordf;",
              º: "&ordm;",
              "⊶": "&origof;",
              "⩖": "&oror;",
              "⩗": "&orslope;",
              "⩛": "&orv;",
              ø: "&oslash;",
              "⊘": "&osol;",
              õ: "&otilde;",
              "⨶": "&otimesas;",
              ö: "&ouml;",
              "⌽": "&ovbar;",
              "\xb6": "&para;",
              "⫳": "&parsim;",
              "⫽": "&parsl;",
              п: "&pcy;",
              "%": "&percnt;",
              ".": "&period;",
              "‰": "&permil;",
              "‱": "&pertenk;",
              𝔭: "&pfr;",
              φ: "&phi;",
              ϕ: "&varphi;",
              "☎": "&phone;",
              π: "&pi;",
              ϖ: "&varpi;",
              ℎ: "&planckh;",
              "+": "&plus;",
              "⨣": "&plusacir;",
              "⨢": "&pluscir;",
              "⨥": "&plusdu;",
              "⩲": "&pluse;",
              "⨦": "&plussim;",
              "⨧": "&plustwo;",
              "⨕": "&pointint;",
              𝕡: "&popf;",
              "\xa3": "&pound;",
              "⪳": "&prE;",
              "⪷": "&precapprox;",
              "⪹": "&prnap;",
              "⪵": "&prnE;",
              "⋨": "&prnsim;",
              "′": "&prime;",
              "⌮": "&profalar;",
              "⌒": "&profline;",
              "⌓": "&profsurf;",
              "⊰": "&prurel;",
              𝓅: "&pscr;",
              ψ: "&psi;",
              " ": "&puncsp;",
              𝔮: "&qfr;",
              𝕢: "&qopf;",
              "⁗": "&qprime;",
              𝓆: "&qscr;",
              "⨖": "&quatint;",
              "?": "&quest;",
              "⤜": "&rAtail;",
              "⥤": "&rHar;",
              "∽̱": "&race;",
              ŕ: "&racute;",
              "⦳": "&raemptyv;",
              "⦒": "&rangd;",
              "⦥": "&range;",
              "\xbb": "&raquo;",
              "⥵": "&rarrap;",
              "⤠": "&rarrbfs;",
              "⤳": "&rarrc;",
              "⤞": "&rarrfs;",
              "⥅": "&rarrpl;",
              "⥴": "&rarrsim;",
              "↣": "&rightarrowtail;",
              "↝": "&rightsquigarrow;",
              "⤚": "&ratail;",
              "∶": "&ratio;",
              "❳": "&rbbrk;",
              "}": "&rcub;",
              "]": "&rsqb;",
              "⦌": "&rbrke;",
              "⦎": "&rbrksld;",
              "⦐": "&rbrkslu;",
              ř: "&rcaron;",
              ŗ: "&rcedil;",
              р: "&rcy;",
              "⤷": "&rdca;",
              "⥩": "&rdldhar;",
              "↳": "&rdsh;",
              "▭": "&rect;",
              "⥽": "&rfisht;",
              𝔯: "&rfr;",
              "⥬": "&rharul;",
              ρ: "&rho;",
              ϱ: "&varrho;",
              "⇉": "&rrarr;",
              "⋌": "&rthree;",
              "˚": "&ring;",
              "‏": "&rlm;",
              "⎱": "&rmoustache;",
              "⫮": "&rnmid;",
              "⟭": "&roang;",
              "⇾": "&roarr;",
              "⦆": "&ropar;",
              𝕣: "&ropf;",
              "⨮": "&roplus;",
              "⨵": "&rotimes;",
              ")": "&rpar;",
              "⦔": "&rpargt;",
              "⨒": "&rppolint;",
              "›": "&rsaquo;",
              𝓇: "&rscr;",
              "⋊": "&rtimes;",
              "▹": "&triangleright;",
              "⧎": "&rtriltri;",
              "⥨": "&ruluhar;",
              "℞": "&rx;",
              ś: "&sacute;",
              "⪴": "&scE;",
              "⪸": "&succapprox;",
              š: "&scaron;",
              ş: "&scedil;",
              ŝ: "&scirc;",
              "⪶": "&succneqq;",
              "⪺": "&succnapprox;",
              "⋩": "&succnsim;",
              "⨓": "&scpolint;",
              с: "&scy;",
              "⋅": "&sdot;",
              "⩦": "&sdote;",
              "⇘": "&seArr;",
              "\xa7": "&sect;",
              ";": "&semi;",
              "⤩": "&tosa;",
              "✶": "&sext;",
              𝔰: "&sfr;",
              "♯": "&sharp;",
              щ: "&shchcy;",
              ш: "&shcy;",
              "\xad": "&shy;",
              σ: "&sigma;",
              ς: "&varsigma;",
              "⩪": "&simdot;",
              "⪞": "&simg;",
              "⪠": "&simgE;",
              "⪝": "&siml;",
              "⪟": "&simlE;",
              "≆": "&simne;",
              "⨤": "&simplus;",
              "⥲": "&simrarr;",
              "⨳": "&smashp;",
              "⧤": "&smeparsl;",
              "⌣": "&ssmile;",
              "⪪": "&smt;",
              "⪬": "&smte;",
              "⪬︀": "&smtes;",
              ь: "&softcy;",
              "/": "&sol;",
              "⧄": "&solb;",
              "⌿": "&solbar;",
              𝕤: "&sopf;",
              "♠": "&spadesuit;",
              "⊓︀": "&sqcaps;",
              "⊔︀": "&sqcups;",
              𝓈: "&sscr;",
              "☆": "&star;",
              "⊂": "&subset;",
              "⫅": "&subseteqq;",
              "⪽": "&subdot;",
              "⫃": "&subedot;",
              "⫁": "&submult;",
              "⫋": "&subsetneqq;",
              "⊊": "&subsetneq;",
              "⪿": "&subplus;",
              "⥹": "&subrarr;",
              "⫇": "&subsim;",
              "⫕": "&subsub;",
              "⫓": "&subsup;",
              "♪": "&sung;",
              "\xb9": "&sup1;",
              "\xb2": "&sup2;",
              "\xb3": "&sup3;",
              "⫆": "&supseteqq;",
              "⪾": "&supdot;",
              "⫘": "&supdsub;",
              "⫄": "&supedot;",
              "⟉": "&suphsol;",
              "⫗": "&suphsub;",
              "⥻": "&suplarr;",
              "⫂": "&supmult;",
              "⫌": "&supsetneqq;",
              "⊋": "&supsetneq;",
              "⫀": "&supplus;",
              "⫈": "&supsim;",
              "⫔": "&supsub;",
              "⫖": "&supsup;",
              "⇙": "&swArr;",
              "⤪": "&swnwar;",
              ß: "&szlig;",
              "⌖": "&target;",
              τ: "&tau;",
              ť: "&tcaron;",
              ţ: "&tcedil;",
              т: "&tcy;",
              "⌕": "&telrec;",
              𝔱: "&tfr;",
              θ: "&theta;",
              ϑ: "&vartheta;",
              þ: "&thorn;",
              "\xd7": "&times;",
              "⨱": "&timesbar;",
              "⨰": "&timesd;",
              "⌶": "&topbot;",
              "⫱": "&topcir;",
              𝕥: "&topf;",
              "⫚": "&topfork;",
              "‴": "&tprime;",
              "▵": "&utri;",
              "≜": "&trie;",
              "◬": "&tridot;",
              "⨺": "&triminus;",
              "⨹": "&triplus;",
              "⧍": "&trisb;",
              "⨻": "&tritime;",
              "⏢": "&trpezium;",
              𝓉: "&tscr;",
              ц: "&tscy;",
              ћ: "&tshcy;",
              ŧ: "&tstrok;",
              "⥣": "&uHar;",
              ú: "&uacute;",
              ў: "&ubrcy;",
              ŭ: "&ubreve;",
              û: "&ucirc;",
              у: "&ucy;",
              ű: "&udblac;",
              "⥾": "&ufisht;",
              𝔲: "&ufr;",
              ù: "&ugrave;",
              "▀": "&uhblk;",
              "⌜": "&ulcorner;",
              "⌏": "&ulcrop;",
              "◸": "&ultri;",
              ū: "&umacr;",
              ų: "&uogon;",
              𝕦: "&uopf;",
              υ: "&upsilon;",
              "⇈": "&uuarr;",
              "⌝": "&urcorner;",
              "⌎": "&urcrop;",
              ů: "&uring;",
              "◹": "&urtri;",
              𝓊: "&uscr;",
              "⋰": "&utdot;",
              ũ: "&utilde;",
              ü: "&uuml;",
              "⦧": "&uwangle;",
              "⫨": "&vBar;",
              "⫩": "&vBarv;",
              "⦜": "&vangrt;",
              "⊊︀": "&vsubne;",
              "⫋︀": "&vsubnE;",
              "⊋︀": "&vsupne;",
              "⫌︀": "&vsupnE;",
              в: "&vcy;",
              "⊻": "&veebar;",
              "≚": "&veeeq;",
              "⋮": "&vellip;",
              𝔳: "&vfr;",
              𝕧: "&vopf;",
              𝓋: "&vscr;",
              "⦚": "&vzigzag;",
              ŵ: "&wcirc;",
              "⩟": "&wedbar;",
              "≙": "&wedgeq;",
              ℘: "&wp;",
              𝔴: "&wfr;",
              𝕨: "&wopf;",
              𝓌: "&wscr;",
              𝔵: "&xfr;",
              ξ: "&xi;",
              "⋻": "&xnis;",
              𝕩: "&xopf;",
              𝓍: "&xscr;",
              ý: "&yacute;",
              я: "&yacy;",
              ŷ: "&ycirc;",
              ы: "&ycy;",
              "\xa5": "&yen;",
              𝔶: "&yfr;",
              ї: "&yicy;",
              𝕪: "&yopf;",
              𝓎: "&yscr;",
              ю: "&yucy;",
              ÿ: "&yuml;",
              ź: "&zacute;",
              ž: "&zcaron;",
              з: "&zcy;",
              ż: "&zdot;",
              ζ: "&zeta;",
              𝔷: "&zfr;",
              ж: "&zhcy;",
              "⇝": "&zigrarr;",
              𝕫: "&zopf;",
              𝓏: "&zscr;",
              "‍": "&zwj;",
              "‌": "&zwnj;",
            },
          },
        });
    },
    63173: function (e, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.numericUnicodeMap = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        });
    },
    76558: function (e, r) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.fromCodePoint =
          String.fromCodePoint ||
          function (e) {
            return String.fromCharCode(
              Math.floor((e - 65536) / 1024) + 55296,
              ((e - 65536) % 1024) + 56320
            );
          }),
        (r.getCodePoint = String.prototype.codePointAt
          ? function (e, r) {
              return e.codePointAt(r);
            }
          : function (e, r) {
              return (
                (e.charCodeAt(r) - 55296) * 1024 +
                e.charCodeAt(r + 1) -
                56320 +
                65536
              );
            }),
        (r.highSurrogateFrom = 55296),
        (r.highSurrogateTo = 56319);
    },
    86789: function (e, r, t) {
      "use strict";
      function n(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var r = e.ownerDocument;
          return (r && r.defaultView) || window;
        }
        return e;
      }
      function i(e) {
        var r = n(e).Element;
        return e instanceof r || e instanceof Element;
      }
      function o(e) {
        var r = n(e).HTMLElement;
        return e instanceof r || e instanceof HTMLElement;
      }
      function a(e) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var r = n(e).ShadowRoot;
        return e instanceof r || e instanceof ShadowRoot;
      }
      t.d(r, {
        ZP: function () {
          return e1;
        },
        Cv: function () {
          return e0;
        },
      });
      var s,
        l,
        c,
        u,
        p,
        f = Math.max,
        d = Math.min,
        m = Math.round;
      function g() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + "/" + e.version;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function h() {
        return !/^((?!chrome|android).)*safari/i.test(g());
      }
      function v(e, r, t) {
        void 0 === r && (r = !1), void 0 === t && (t = !1);
        var a = e.getBoundingClientRect(),
          s = 1,
          l = 1;
        r &&
          o(e) &&
          ((s = (e.offsetWidth > 0 && m(a.width) / e.offsetWidth) || 1),
          (l = (e.offsetHeight > 0 && m(a.height) / e.offsetHeight) || 1));
        var c = (i(e) ? n(e) : window).visualViewport,
          u = !h() && t,
          p = (a.left + (u && c ? c.offsetLeft : 0)) / s,
          f = (a.top + (u && c ? c.offsetTop : 0)) / l,
          d = a.width / s,
          g = a.height / l;
        return {
          width: d,
          height: g,
          top: f,
          right: p + d,
          bottom: f + g,
          left: p,
          x: p,
          y: f,
        };
      }
      function b(e) {
        var r = n(e);
        return { scrollLeft: r.pageXOffset, scrollTop: r.pageYOffset };
      }
      function y(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function w(e) {
        return ((i(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function x(e) {
        return v(w(e)).left + b(e).scrollLeft;
      }
      function q(e) {
        return n(e).getComputedStyle(e);
      }
      function A(e) {
        var r = q(e),
          t = r.overflow,
          n = r.overflowX,
          i = r.overflowY;
        return /auto|scroll|overlay|hidden/.test(t + i + n);
      }
      function E(e) {
        var r = v(e),
          t = e.offsetWidth,
          n = e.offsetHeight;
        return (
          1 >= Math.abs(r.width - t) && (t = r.width),
          1 >= Math.abs(r.height - n) && (n = r.height),
          { x: e.offsetLeft, y: e.offsetTop, width: t, height: n }
        );
      }
      function D(e) {
        return "html" === y(e)
          ? e
          : e.assignedSlot || e.parentNode || (a(e) ? e.host : null) || w(e);
      }
      function O(e, r) {
        void 0 === r && (r = []);
        var t,
          i = (function e(r) {
            return ["html", "body", "#document"].indexOf(y(r)) >= 0
              ? r.ownerDocument.body
              : o(r) && A(r)
              ? r
              : e(D(r));
          })(e),
          a = i === (null == (t = e.ownerDocument) ? void 0 : t.body),
          s = n(i),
          l = a ? [s].concat(s.visualViewport || [], A(i) ? i : []) : i,
          c = r.concat(l);
        return a ? c : c.concat(O(D(l)));
      }
      function k(e) {
        return o(e) && "fixed" !== q(e).position ? e.offsetParent : null;
      }
      function S(e) {
        for (
          var r = n(e), t = k(e);
          t &&
          ["table", "td", "th"].indexOf(y(t)) >= 0 &&
          "static" === q(t).position;

        )
          t = k(t);
        return t &&
          ("html" === y(t) || ("body" === y(t) && "static" === q(t).position))
          ? r
          : t ||
              (function (e) {
                var r = /firefox/i.test(g());
                if (/Trident/i.test(g()) && o(e) && "fixed" === q(e).position)
                  return null;
                var t = D(e);
                for (
                  a(t) && (t = t.host);
                  o(t) && 0 > ["html", "body"].indexOf(y(t));

                ) {
                  var n = q(t);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (r && "filter" === n.willChange) ||
                    (r && n.filter && "none" !== n.filter)
                  )
                    return t;
                  t = t.parentNode;
                }
                return null;
              })(e) ||
              r;
      }
      var L = "bottom",
        T = "right",
        V = "left",
        F = "auto",
        C = ["top", L, T, V],
        R = "start",
        P = "viewport",
        N = "popper",
        U = C.reduce(function (e, r) {
          return e.concat([r + "-" + R, r + "-end"]);
        }, []),
        B = [].concat(C, [F]).reduce(function (e, r) {
          return e.concat([r, r + "-" + R, r + "-end"]);
        }, []),
        j = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ],
        _ = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function I() {
        for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
          r[t] = arguments[t];
        return !r.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      var H = { passive: !0 };
      function z(e) {
        return e.split("-")[0];
      }
      function M(e) {
        return e.split("-")[1];
      }
      function G(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function W(e) {
        var r,
          t = e.reference,
          n = e.element,
          i = e.placement,
          o = i ? z(i) : null,
          a = i ? M(i) : null,
          s = t.x + t.width / 2 - n.width / 2,
          l = t.y + t.height / 2 - n.height / 2;
        switch (o) {
          case "top":
            r = { x: s, y: t.y - n.height };
            break;
          case L:
            r = { x: s, y: t.y + t.height };
            break;
          case T:
            r = { x: t.x + t.width, y: l };
            break;
          case V:
            r = { x: t.x - n.width, y: l };
            break;
          default:
            r = { x: t.x, y: t.y };
        }
        var c = o ? G(o) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (a) {
            case R:
              r[c] = r[c] - (t[u] / 2 - n[u] / 2);
              break;
            case "end":
              r[c] = r[c] + (t[u] / 2 - n[u] / 2);
          }
        }
        return r;
      }
      var Y = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function X(e) {
        var r,
          t,
          i,
          o,
          a,
          s,
          l,
          c = e.popper,
          u = e.popperRect,
          p = e.placement,
          f = e.variation,
          d = e.offsets,
          g = e.position,
          h = e.gpuAcceleration,
          v = e.adaptive,
          b = e.roundOffsets,
          y = e.isFixed,
          x = d.x,
          A = void 0 === x ? 0 : x,
          E = d.y,
          D = void 0 === E ? 0 : E,
          O = "function" == typeof b ? b({ x: A, y: D }) : { x: A, y: D };
        (A = O.x), (D = O.y);
        var k = d.hasOwnProperty("x"),
          F = d.hasOwnProperty("y"),
          C = V,
          R = "top",
          P = window;
        if (v) {
          var N = S(c),
            U = "clientHeight",
            B = "clientWidth";
          N === n(c) &&
            "static" !== q((N = w(c))).position &&
            "absolute" === g &&
            ((U = "scrollHeight"), (B = "scrollWidth")),
            ("top" === p || ((p === V || p === T) && "end" === f)) &&
              ((R = L),
              (D -=
                (y && N === P && P.visualViewport
                  ? P.visualViewport.height
                  : N[U]) - u.height),
              (D *= h ? 1 : -1)),
            (p === V || (("top" === p || p === L) && "end" === f)) &&
              ((C = T),
              (A -=
                (y && N === P && P.visualViewport
                  ? P.visualViewport.width
                  : N[B]) - u.width),
              (A *= h ? 1 : -1));
        }
        var j = Object.assign({ position: g }, v && Y),
          _ =
            !0 === b
              ? ((r = { x: A, y: D }),
                (t = n(c)),
                (i = r.x),
                (o = r.y),
                {
                  x: m(i * (a = t.devicePixelRatio || 1)) / a || 0,
                  y: m(o * a) / a || 0,
                })
              : { x: A, y: D };
        return ((A = _.x), (D = _.y), h)
          ? Object.assign(
              {},
              j,
              (((l = {})[R] = F ? "0" : ""),
              (l[C] = k ? "0" : ""),
              (l.transform =
                1 >= (P.devicePixelRatio || 1)
                  ? "translate(" + A + "px, " + D + "px)"
                  : "translate3d(" + A + "px, " + D + "px, 0)"),
              l)
            )
          : Object.assign(
              {},
              j,
              (((s = {})[R] = F ? D + "px" : ""),
              (s[C] = k ? A + "px" : ""),
              (s.transform = ""),
              s)
            );
      }
      var J = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (e) {
            var r = e.state;
            Object.keys(r.elements).forEach(function (e) {
              var t = r.styles[e] || {},
                n = r.attributes[e] || {},
                i = r.elements[e];
              o(i) &&
                y(i) &&
                (Object.assign(i.style, t),
                Object.keys(n).forEach(function (e) {
                  var r = n[e];
                  !1 === r
                    ? i.removeAttribute(e)
                    : i.setAttribute(e, !0 === r ? "" : r);
                }));
            });
          },
          effect: function (e) {
            var r = e.state,
              t = {
                popper: {
                  position: r.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            return (
              Object.assign(r.elements.popper.style, t.popper),
              (r.styles = t),
              r.elements.arrow &&
                Object.assign(r.elements.arrow.style, t.arrow),
              function () {
                Object.keys(r.elements).forEach(function (e) {
                  var n = r.elements[e],
                    i = r.attributes[e] || {},
                    a = Object.keys(
                      r.styles.hasOwnProperty(e) ? r.styles[e] : t[e]
                    ).reduce(function (e, r) {
                      return (e[r] = ""), e;
                    }, {});
                  o(n) &&
                    y(n) &&
                    (Object.assign(n.style, a),
                    Object.keys(i).forEach(function (e) {
                      n.removeAttribute(e);
                    }));
                });
              }
            );
          },
          requires: ["computeStyles"],
        },
        Z = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function K(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Z[e];
        });
      }
      var $ = { start: "end", end: "start" };
      function Q(e) {
        return e.replace(/start|end/g, function (e) {
          return $[e];
        });
      }
      function ee(e, r) {
        var t = r.getRootNode && r.getRootNode();
        if (e.contains(r)) return !0;
        if (t && a(t)) {
          var n = r;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function er(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function et(e, r, t) {
        var o, a, s, l, c, u, p, d, m, g;
        return r === P
          ? er(
              (function (e, r) {
                var t = n(e),
                  i = w(e),
                  o = t.visualViewport,
                  a = i.clientWidth,
                  s = i.clientHeight,
                  l = 0,
                  c = 0;
                if (o) {
                  (a = o.width), (s = o.height);
                  var u = h();
                  (u || (!u && "fixed" === r)) &&
                    ((l = o.offsetLeft), (c = o.offsetTop));
                }
                return { width: a, height: s, x: l + x(e), y: c };
              })(e, t)
            )
          : i(r)
          ? (((o = v(r, !1, "fixed" === t)).top = o.top + r.clientTop),
            (o.left = o.left + r.clientLeft),
            (o.bottom = o.top + r.clientHeight),
            (o.right = o.left + r.clientWidth),
            (o.width = r.clientWidth),
            (o.height = r.clientHeight),
            (o.x = o.left),
            (o.y = o.top),
            o)
          : er(
              ((a = w(e)),
              (l = w(a)),
              (c = b(a)),
              (u = null == (s = a.ownerDocument) ? void 0 : s.body),
              (p = f(
                l.scrollWidth,
                l.clientWidth,
                u ? u.scrollWidth : 0,
                u ? u.clientWidth : 0
              )),
              (d = f(
                l.scrollHeight,
                l.clientHeight,
                u ? u.scrollHeight : 0,
                u ? u.clientHeight : 0
              )),
              (m = -c.scrollLeft + x(a)),
              (g = -c.scrollTop),
              "rtl" === q(u || l).direction &&
                (m += f(l.clientWidth, u ? u.clientWidth : 0) - p),
              { width: p, height: d, x: m, y: g })
            );
      }
      function en() {
        return { top: 0, right: 0, bottom: 0, left: 0 };
      }
      function ei(e) {
        return Object.assign({}, en(), e);
      }
      function eo(e, r) {
        return r.reduce(function (r, t) {
          return (r[t] = e), r;
        }, {});
      }
      function ea(e, r) {
        void 0 === r && (r = {});
        var t,
          n,
          a,
          s,
          l,
          c,
          u,
          p = r,
          m = p.placement,
          g = void 0 === m ? e.placement : m,
          h = p.strategy,
          b = void 0 === h ? e.strategy : h,
          x = p.boundary,
          A = p.rootBoundary,
          E = p.elementContext,
          k = void 0 === E ? N : E,
          V = p.altBoundary,
          F = p.padding,
          R = void 0 === F ? 0 : F,
          U = ei("number" != typeof R ? R : eo(R, C)),
          B = e.rects.popper,
          j = e.elements[void 0 !== V && V ? (k === N ? "reference" : N) : k],
          _ =
            ((t = i(j) ? j : j.contextElement || w(e.elements.popper)),
            (c = (l = [].concat(
              "clippingParents" === (n = void 0 === x ? "clippingParents" : x)
                ? ((a = O(D(t))),
                  i(
                    (s =
                      ["absolute", "fixed"].indexOf(q(t).position) >= 0 && o(t)
                        ? S(t)
                        : t)
                  )
                    ? a.filter(function (e) {
                        return i(e) && ee(e, s) && "body" !== y(e);
                      })
                    : [])
                : [].concat(n),
              [void 0 === A ? P : A]
            ))[0]),
            ((u = l.reduce(function (e, r) {
              var n = et(t, r, b);
              return (
                (e.top = f(n.top, e.top)),
                (e.right = d(n.right, e.right)),
                (e.bottom = d(n.bottom, e.bottom)),
                (e.left = f(n.left, e.left)),
                e
              );
            }, et(t, c, b))).width = u.right - u.left),
            (u.height = u.bottom - u.top),
            (u.x = u.left),
            (u.y = u.top),
            u),
          I = v(e.elements.reference),
          H = W({
            reference: I,
            element: B,
            strategy: "absolute",
            placement: g,
          }),
          z = er(Object.assign({}, B, H)),
          M = k === N ? z : I,
          G = {
            top: _.top - M.top + U.top,
            bottom: M.bottom - _.bottom + U.bottom,
            left: _.left - M.left + U.left,
            right: M.right - _.right + U.right,
          },
          Y = e.modifiersData.offset;
        if (k === N && Y) {
          var X = Y[g];
          Object.keys(G).forEach(function (e) {
            var r = [T, L].indexOf(e) >= 0 ? 1 : -1,
              t = ["top", L].indexOf(e) >= 0 ? "y" : "x";
            G[e] += X[t] * r;
          });
        }
        return G;
      }
      function es(e, r, t) {
        return f(e, d(r, t));
      }
      function el(e, r, t) {
        return (
          void 0 === t && (t = { x: 0, y: 0 }),
          {
            top: e.top - r.height - t.y,
            right: e.right - r.width + t.x,
            bottom: e.bottom - r.height + t.y,
            left: e.left - r.width - t.x,
          }
        );
      }
      function ec(e) {
        return ["top", T, L, V].some(function (r) {
          return e[r] >= 0;
        });
      }
      var eu =
          ((c =
            void 0 ===
            (l = (s = {
              defaultModifiers: [
                {
                  name: "eventListeners",
                  enabled: !0,
                  phase: "write",
                  fn: function () {},
                  effect: function (e) {
                    var r = e.state,
                      t = e.instance,
                      i = e.options,
                      o = i.scroll,
                      a = void 0 === o || o,
                      s = i.resize,
                      l = void 0 === s || s,
                      c = n(r.elements.popper),
                      u = [].concat(
                        r.scrollParents.reference,
                        r.scrollParents.popper
                      );
                    return (
                      a &&
                        u.forEach(function (e) {
                          e.addEventListener("scroll", t.update, H);
                        }),
                      l && c.addEventListener("resize", t.update, H),
                      function () {
                        a &&
                          u.forEach(function (e) {
                            e.removeEventListener("scroll", t.update, H);
                          }),
                          l && c.removeEventListener("resize", t.update, H);
                      }
                    );
                  },
                  data: {},
                },
                {
                  name: "popperOffsets",
                  enabled: !0,
                  phase: "read",
                  fn: function (e) {
                    var r = e.state,
                      t = e.name;
                    r.modifiersData[t] = W({
                      reference: r.rects.reference,
                      element: r.rects.popper,
                      strategy: "absolute",
                      placement: r.placement,
                    });
                  },
                  data: {},
                },
                {
                  name: "computeStyles",
                  enabled: !0,
                  phase: "beforeWrite",
                  fn: function (e) {
                    var r = e.state,
                      t = e.options,
                      n = t.gpuAcceleration,
                      i = t.adaptive,
                      o = t.roundOffsets,
                      a = void 0 === o || o,
                      s = {
                        placement: z(r.placement),
                        variation: M(r.placement),
                        popper: r.elements.popper,
                        popperRect: r.rects.popper,
                        gpuAcceleration: void 0 === n || n,
                        isFixed: "fixed" === r.options.strategy,
                      };
                    null != r.modifiersData.popperOffsets &&
                      (r.styles.popper = Object.assign(
                        {},
                        r.styles.popper,
                        X(
                          Object.assign({}, s, {
                            offsets: r.modifiersData.popperOffsets,
                            position: r.options.strategy,
                            adaptive: void 0 === i || i,
                            roundOffsets: a,
                          })
                        )
                      )),
                      null != r.modifiersData.arrow &&
                        (r.styles.arrow = Object.assign(
                          {},
                          r.styles.arrow,
                          X(
                            Object.assign({}, s, {
                              offsets: r.modifiersData.arrow,
                              position: "absolute",
                              adaptive: !1,
                              roundOffsets: a,
                            })
                          )
                        )),
                      (r.attributes.popper = Object.assign(
                        {},
                        r.attributes.popper,
                        { "data-popper-placement": r.placement }
                      ));
                  },
                  data: {},
                },
                J,
                {
                  name: "offset",
                  enabled: !0,
                  phase: "main",
                  requires: ["popperOffsets"],
                  fn: function (e) {
                    var r = e.state,
                      t = e.options,
                      n = e.name,
                      i = t.offset,
                      o = void 0 === i ? [0, 0] : i,
                      a = B.reduce(function (e, t) {
                        var n, i, a, s, l, c;
                        return (
                          (e[t] =
                            ((n = r.rects),
                            (a = [V, "top"].indexOf((i = z(t))) >= 0 ? -1 : 1),
                            (l = (s =
                              "function" == typeof o
                                ? o(Object.assign({}, n, { placement: t }))
                                : o)[0]),
                            (c = s[1]),
                            (l = l || 0),
                            (c = (c || 0) * a),
                            [V, T].indexOf(i) >= 0
                              ? { x: c, y: l }
                              : { x: l, y: c })),
                          e
                        );
                      }, {}),
                      s = a[r.placement],
                      l = s.x,
                      c = s.y;
                    null != r.modifiersData.popperOffsets &&
                      ((r.modifiersData.popperOffsets.x += l),
                      (r.modifiersData.popperOffsets.y += c)),
                      (r.modifiersData[n] = a);
                  },
                },
                {
                  name: "flip",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var r = e.state,
                      t = e.options,
                      n = e.name;
                    if (!r.modifiersData[n]._skip) {
                      for (
                        var i = t.mainAxis,
                          o = void 0 === i || i,
                          a = t.altAxis,
                          s = void 0 === a || a,
                          l = t.fallbackPlacements,
                          c = t.padding,
                          u = t.boundary,
                          p = t.rootBoundary,
                          f = t.altBoundary,
                          d = t.flipVariations,
                          m = void 0 === d || d,
                          g = t.allowedAutoPlacements,
                          h = r.options.placement,
                          v = z(h) === h,
                          b =
                            l ||
                            (v || !m
                              ? [K(h)]
                              : (function (e) {
                                  if (z(e) === F) return [];
                                  var r = K(e);
                                  return [Q(e), r, Q(r)];
                                })(h)),
                          y = [h].concat(b).reduce(function (e, t) {
                            var n, i, o, a, s, l, f, d, h, v, b, y;
                            return e.concat(
                              z(t) === F
                                ? ((i = (n = {
                                    placement: t,
                                    boundary: u,
                                    rootBoundary: p,
                                    padding: c,
                                    flipVariations: m,
                                    allowedAutoPlacements: g,
                                  }).placement),
                                  (o = n.boundary),
                                  (a = n.rootBoundary),
                                  (s = n.padding),
                                  (l = n.flipVariations),
                                  (d =
                                    void 0 === (f = n.allowedAutoPlacements)
                                      ? B
                                      : f),
                                  0 ===
                                    (b = (v = (h = M(i))
                                      ? l
                                        ? U
                                        : U.filter(function (e) {
                                            return M(e) === h;
                                          })
                                      : C).filter(function (e) {
                                      return d.indexOf(e) >= 0;
                                    })).length && (b = v),
                                  Object.keys(
                                    (y = b.reduce(function (e, t) {
                                      return (
                                        (e[t] = ea(r, {
                                          placement: t,
                                          boundary: o,
                                          rootBoundary: a,
                                          padding: s,
                                        })[z(t)]),
                                        e
                                      );
                                    }, {}))
                                  ).sort(function (e, r) {
                                    return y[e] - y[r];
                                  }))
                                : t
                            );
                          }, []),
                          w = r.rects.reference,
                          x = r.rects.popper,
                          q = new Map(),
                          A = !0,
                          E = y[0],
                          D = 0;
                        D < y.length;
                        D++
                      ) {
                        var O = y[D],
                          k = z(O),
                          S = M(O) === R,
                          P = ["top", L].indexOf(k) >= 0,
                          N = P ? "width" : "height",
                          j = ea(r, {
                            placement: O,
                            boundary: u,
                            rootBoundary: p,
                            altBoundary: f,
                            padding: c,
                          }),
                          _ = P ? (S ? T : V) : S ? L : "top";
                        w[N] > x[N] && (_ = K(_));
                        var I = K(_),
                          H = [];
                        if (
                          (o && H.push(j[k] <= 0),
                          s && H.push(j[_] <= 0, j[I] <= 0),
                          H.every(function (e) {
                            return e;
                          }))
                        ) {
                          (E = O), (A = !1);
                          break;
                        }
                        q.set(O, H);
                      }
                      if (A)
                        for (
                          var G = m ? 3 : 1,
                            W = function (e) {
                              var r = y.find(function (r) {
                                var t = q.get(r);
                                if (t)
                                  return t.slice(0, e).every(function (e) {
                                    return e;
                                  });
                              });
                              if (r) return (E = r), "break";
                            },
                            Y = G;
                          Y > 0 && "break" !== W(Y);
                          Y--
                        );
                      r.placement !== E &&
                        ((r.modifiersData[n]._skip = !0),
                        (r.placement = E),
                        (r.reset = !0));
                    }
                  },
                  requiresIfExists: ["offset"],
                  data: { _skip: !1 },
                },
                {
                  name: "preventOverflow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var r = e.state,
                      t = e.options,
                      n = e.name,
                      i = t.mainAxis,
                      o = t.altAxis,
                      a = t.boundary,
                      s = t.rootBoundary,
                      l = t.altBoundary,
                      c = t.padding,
                      u = t.tether,
                      p = void 0 === u || u,
                      m = t.tetherOffset,
                      g = void 0 === m ? 0 : m,
                      h = ea(r, {
                        boundary: a,
                        rootBoundary: s,
                        padding: c,
                        altBoundary: l,
                      }),
                      v = z(r.placement),
                      b = M(r.placement),
                      y = !b,
                      w = G(v),
                      x = "x" === w ? "y" : "x",
                      q = r.modifiersData.popperOffsets,
                      A = r.rects.reference,
                      D = r.rects.popper,
                      O =
                        "function" == typeof g
                          ? g(
                              Object.assign({}, r.rects, {
                                placement: r.placement,
                              })
                            )
                          : g,
                      k =
                        "number" == typeof O
                          ? { mainAxis: O, altAxis: O }
                          : Object.assign({ mainAxis: 0, altAxis: 0 }, O),
                      F = r.modifiersData.offset
                        ? r.modifiersData.offset[r.placement]
                        : null,
                      C = { x: 0, y: 0 };
                    if (q) {
                      if (void 0 === i || i) {
                        var P,
                          N = "y" === w ? "top" : V,
                          U = "y" === w ? L : T,
                          B = "y" === w ? "height" : "width",
                          j = q[w],
                          _ = j + h[N],
                          I = j - h[U],
                          H = p ? -D[B] / 2 : 0,
                          W = b === R ? A[B] : D[B],
                          Y = b === R ? -D[B] : -A[B],
                          X = r.elements.arrow,
                          J = p && X ? E(X) : { width: 0, height: 0 },
                          Z = r.modifiersData["arrow#persistent"]
                            ? r.modifiersData["arrow#persistent"].padding
                            : en(),
                          K = Z[N],
                          $ = Z[U],
                          Q = es(0, A[B], J[B]),
                          ee = y
                            ? A[B] / 2 - H - Q - K - k.mainAxis
                            : W - Q - K - k.mainAxis,
                          er = y
                            ? -A[B] / 2 + H + Q + $ + k.mainAxis
                            : Y + Q + $ + k.mainAxis,
                          et = r.elements.arrow && S(r.elements.arrow),
                          ei = et
                            ? "y" === w
                              ? et.clientTop || 0
                              : et.clientLeft || 0
                            : 0,
                          eo = null != (P = null == F ? void 0 : F[w]) ? P : 0,
                          el = es(
                            p ? d(_, j + ee - eo - ei) : _,
                            j,
                            p ? f(I, j + er - eo) : I
                          );
                        (q[w] = el), (C[w] = el - j);
                      }
                      if (void 0 !== o && o) {
                        var ec,
                          eu,
                          ep = "x" === w ? "top" : V,
                          ef = "x" === w ? L : T,
                          ed = q[x],
                          em = "y" === x ? "height" : "width",
                          eg = ed + h[ep],
                          eh = ed - h[ef],
                          ev = -1 !== ["top", V].indexOf(v),
                          eb =
                            null != (eu = null == F ? void 0 : F[x]) ? eu : 0,
                          ey = ev ? eg : ed - A[em] - D[em] - eb + k.altAxis,
                          ew = ev ? ed + A[em] + D[em] - eb - k.altAxis : eh,
                          ex =
                            p && ev
                              ? (ec = es(ey, ed, ew)) > ew
                                ? ew
                                : ec
                              : es(p ? ey : eg, ed, p ? ew : eh);
                        (q[x] = ex), (C[x] = ex - ed);
                      }
                      r.modifiersData[n] = C;
                    }
                  },
                  requiresIfExists: ["offset"],
                },
                {
                  name: "arrow",
                  enabled: !0,
                  phase: "main",
                  fn: function (e) {
                    var r,
                      t,
                      n = e.state,
                      i = e.name,
                      o = e.options,
                      a = n.elements.arrow,
                      s = n.modifiersData.popperOffsets,
                      l = z(n.placement),
                      c = G(l),
                      u = [V, T].indexOf(l) >= 0 ? "height" : "width";
                    if (a && s) {
                      var p = ei(
                          "number" !=
                            typeof (r =
                              "function" == typeof (r = o.padding)
                                ? r(
                                    Object.assign({}, n.rects, {
                                      placement: n.placement,
                                    })
                                  )
                                : r)
                            ? r
                            : eo(r, C)
                        ),
                        f = E(a),
                        d = "y" === c ? "top" : V,
                        m = "y" === c ? L : T,
                        g =
                          n.rects.reference[u] +
                          n.rects.reference[c] -
                          s[c] -
                          n.rects.popper[u],
                        h = s[c] - n.rects.reference[c],
                        v = S(a),
                        b = v
                          ? "y" === c
                            ? v.clientHeight || 0
                            : v.clientWidth || 0
                          : 0,
                        y = p[d],
                        w = b - f[u] - p[m],
                        x = b / 2 - f[u] / 2 + (g / 2 - h / 2),
                        q = es(y, x, w);
                      n.modifiersData[i] =
                        (((t = {})[c] = q), (t.centerOffset = q - x), t);
                    }
                  },
                  effect: function (e) {
                    var r = e.state,
                      t = e.options.element,
                      n = void 0 === t ? "[data-popper-arrow]" : t;
                    null != n &&
                      ("string" != typeof n ||
                        (n = r.elements.popper.querySelector(n))) &&
                      ee(r.elements.popper, n) &&
                      (r.elements.arrow = n);
                  },
                  requires: ["popperOffsets"],
                  requiresIfExists: ["preventOverflow"],
                },
                {
                  name: "hide",
                  enabled: !0,
                  phase: "main",
                  requiresIfExists: ["preventOverflow"],
                  fn: function (e) {
                    var r = e.state,
                      t = e.name,
                      n = r.rects.reference,
                      i = r.rects.popper,
                      o = r.modifiersData.preventOverflow,
                      a = ea(r, { elementContext: "reference" }),
                      s = ea(r, { altBoundary: !0 }),
                      l = el(a, n),
                      c = el(s, i, o),
                      u = ec(l),
                      p = ec(c);
                    (r.modifiersData[t] = {
                      referenceClippingOffsets: l,
                      popperEscapeOffsets: c,
                      isReferenceHidden: u,
                      hasPopperEscaped: p,
                    }),
                      (r.attributes.popper = Object.assign(
                        {},
                        r.attributes.popper,
                        {
                          "data-popper-reference-hidden": u,
                          "data-popper-escaped": p,
                        }
                      ));
                  },
                },
              ],
            }).defaultModifiers)
              ? []
              : l),
          (p = void 0 === (u = s.defaultOptions) ? _ : u),
          function (e, r, t) {
            void 0 === t && (t = p);
            var a,
              s = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, _, p),
                modifiersData: {},
                elements: { reference: e, popper: r },
                attributes: {},
                styles: {},
              },
              l = [],
              u = !1,
              f = {
                state: s,
                setOptions: function (t) {
                  var n,
                    o,
                    a,
                    u,
                    m,
                    g = "function" == typeof t ? t(s.options) : t;
                  d(),
                    (s.options = Object.assign({}, p, s.options, g)),
                    (s.scrollParents = {
                      reference: i(e)
                        ? O(e)
                        : e.contextElement
                        ? O(e.contextElement)
                        : [],
                      popper: O(r),
                    });
                  var h =
                    ((o = Object.keys(
                      (n = []
                        .concat(c, s.options.modifiers)
                        .reduce(function (e, r) {
                          var t = e[r.name];
                          return (
                            (e[r.name] = t
                              ? Object.assign({}, t, r, {
                                  options: Object.assign(
                                    {},
                                    t.options,
                                    r.options
                                  ),
                                  data: Object.assign({}, t.data, r.data),
                                })
                              : r),
                            e
                          );
                        }, {}))
                    ).map(function (e) {
                      return n[e];
                    })),
                    (a = new Map()),
                    (u = new Set()),
                    (m = []),
                    o.forEach(function (e) {
                      a.set(e.name, e);
                    }),
                    o.forEach(function (e) {
                      u.has(e.name) ||
                        (function e(r) {
                          u.add(r.name),
                            []
                              .concat(
                                r.requires || [],
                                r.requiresIfExists || []
                              )
                              .forEach(function (r) {
                                if (!u.has(r)) {
                                  var t = a.get(r);
                                  t && e(t);
                                }
                              }),
                            m.push(r);
                        })(e);
                    }),
                    j.reduce(function (e, r) {
                      return e.concat(
                        m.filter(function (e) {
                          return e.phase === r;
                        })
                      );
                    }, []));
                  return (
                    (s.orderedModifiers = h.filter(function (e) {
                      return e.enabled;
                    })),
                    s.orderedModifiers.forEach(function (e) {
                      var r = e.name,
                        t = e.options,
                        n = e.effect;
                      if ("function" == typeof n) {
                        var i = n({
                          state: s,
                          name: r,
                          instance: f,
                          options: void 0 === t ? {} : t,
                        });
                        l.push(i || function () {});
                      }
                    }),
                    f.update()
                  );
                },
                forceUpdate: function () {
                  if (!u) {
                    var e,
                      r,
                      t,
                      i,
                      a,
                      l,
                      c,
                      p,
                      d,
                      g,
                      h,
                      q,
                      D = s.elements,
                      O = D.reference,
                      k = D.popper;
                    if (I(O, k)) {
                      (s.rects = {
                        reference:
                          ((r = S(k)),
                          (t = "fixed" === s.options.strategy),
                          (i = o(r)),
                          (p =
                            o(r) &&
                            ((l =
                              m((a = r.getBoundingClientRect()).width) /
                                r.offsetWidth || 1),
                            (c = m(a.height) / r.offsetHeight || 1),
                            1 !== l || 1 !== c)),
                          (d = w(r)),
                          (g = v(O, p, t)),
                          (h = { scrollLeft: 0, scrollTop: 0 }),
                          (q = { x: 0, y: 0 }),
                          (i || (!i && !t)) &&
                            (("body" !== y(r) || A(d)) &&
                              (h =
                                (e = r) !== n(e) && o(e)
                                  ? {
                                      scrollLeft: e.scrollLeft,
                                      scrollTop: e.scrollTop,
                                    }
                                  : b(e)),
                            o(r)
                              ? ((q = v(r, !0)),
                                (q.x += r.clientLeft),
                                (q.y += r.clientTop))
                              : d && (q.x = x(d))),
                          {
                            x: g.left + h.scrollLeft - q.x,
                            y: g.top + h.scrollTop - q.y,
                            width: g.width,
                            height: g.height,
                          }),
                        popper: E(k),
                      }),
                        (s.reset = !1),
                        (s.placement = s.options.placement),
                        s.orderedModifiers.forEach(function (e) {
                          return (s.modifiersData[e.name] = Object.assign(
                            {},
                            e.data
                          ));
                        });
                      for (var L = 0; L < s.orderedModifiers.length; L++) {
                        if (!0 === s.reset) {
                          (s.reset = !1), (L = -1);
                          continue;
                        }
                        var T = s.orderedModifiers[L],
                          V = T.fn,
                          F = T.options,
                          C = void 0 === F ? {} : F,
                          R = T.name;
                        "function" == typeof V &&
                          (s =
                            V({ state: s, options: C, name: R, instance: f }) ||
                            s);
                      }
                    }
                  }
                },
                update: function () {
                  return (
                    a ||
                      (a = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (a = void 0),
                            e(
                              new Promise(function (e) {
                                f.forceUpdate(), e(s);
                              })
                            );
                        });
                      })),
                    a
                  );
                },
                destroy: function () {
                  d(), (u = !0);
                },
              };
            if (!I(e, r)) return f;
            function d() {
              l.forEach(function (e) {
                return e();
              }),
                (l = []);
            }
            return (
              f.setOptions(t).then(function (e) {
                !u && t.onFirstUpdate && t.onFirstUpdate(e);
              }),
              f
            );
          }),
        ep = "tippy-content",
        ef = "tippy-arrow",
        ed = "tippy-svg-arrow",
        em = { passive: !0, capture: !0 },
        eg = function () {
          return document.body;
        };
      function eh(e, r, t) {
        if (Array.isArray(e)) {
          var n = e[r];
          return null == n ? (Array.isArray(t) ? t[r] : t) : n;
        }
        return e;
      }
      function ev(e, r) {
        var t = {}.toString.call(e);
        return 0 === t.indexOf("[object") && t.indexOf(r + "]") > -1;
      }
      function eb(e, r) {
        return "function" == typeof e ? e.apply(void 0, r) : e;
      }
      function ey(e, r) {
        var t;
        return 0 === r
          ? e
          : function (n) {
              clearTimeout(t),
                (t = setTimeout(function () {
                  e(n);
                }, r));
            };
      }
      function ew(e) {
        return [].concat(e);
      }
      function ex(e, r) {
        -1 === e.indexOf(r) && e.push(r);
      }
      function eq(e) {
        return [].slice.call(e);
      }
      function eA(e) {
        return Object.keys(e).reduce(function (r, t) {
          return void 0 !== e[t] && (r[t] = e[t]), r;
        }, {});
      }
      function eE() {
        return document.createElement("div");
      }
      function eD(e) {
        return ["Element", "Fragment"].some(function (r) {
          return ev(e, r);
        });
      }
      function eO(e) {
        return ev(e, "MouseEvent");
      }
      function ek(e, r) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = r + "ms");
        });
      }
      function eS(e, r) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", r);
        });
      }
      function eL(e) {
        var r,
          t = ew(e)[0];
        return null != t && null != (r = t.ownerDocument) && r.body
          ? t.ownerDocument
          : document;
      }
      function eT(e, r, t) {
        var n = r + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (r) {
          e[n](r, t);
        });
      }
      function eV(e, r) {
        for (var t, n = r; n; ) {
          if (e.contains(n)) return !0;
          n =
            null == n.getRootNode
              ? void 0
              : null == (t = n.getRootNode())
              ? void 0
              : t.host;
        }
        return !1;
      }
      var eF = { isTouch: !1 },
        eC = 0;
      function eR() {
        !eF.isTouch &&
          ((eF.isTouch = !0),
          window.performance && document.addEventListener("mousemove", eP));
      }
      function eP() {
        var e = performance.now();
        e - eC < 20 &&
          ((eF.isTouch = !1), document.removeEventListener("mousemove", eP)),
          (eC = e);
      }
      function eN() {
        var e = document.activeElement;
        if (e && e._tippy && e._tippy.reference === e) {
          var r = e._tippy;
          e.blur && !r.state.isVisible && e.blur();
        }
      }
      var eU =
          !!("undefined" != typeof window && "undefined" != typeof document) &&
          !!window.msCrypto,
        eB = Object.assign(
          {
            appendTo: eg,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1,
          },
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        ej = Object.keys(eB);
      function e_(e) {
        var r = (e.plugins || []).reduce(function (r, t) {
          var n,
            i = t.name,
            o = t.defaultValue;
          return (
            i && (r[i] = void 0 !== e[i] ? e[i] : null != (n = eB[i]) ? n : o),
            r
          );
        }, {});
        return Object.assign({}, e, r);
      }
      function eI(e, r) {
        var t,
          n = Object.assign(
            {},
            r,
            { content: eb(r.content, [e]) },
            r.ignoreAttributes
              ? {}
              : ((t = r.plugins)
                  ? Object.keys(e_(Object.assign({}, eB, { plugins: t })))
                  : ej
                ).reduce(function (r, t) {
                  var n = (e.getAttribute("data-tippy-" + t) || "").trim();
                  if (!n) return r;
                  if ("content" === t) r[t] = n;
                  else
                    try {
                      r[t] = JSON.parse(n);
                    } catch (e) {
                      r[t] = n;
                    }
                  return r;
                }, {})
          );
        return (
          (n.aria = Object.assign({}, eB.aria, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? r.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? r.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      function eH(e, r) {
        e.innerHTML = r;
      }
      function ez(e) {
        var r = eE();
        return (
          !0 === e
            ? (r.className = ef)
            : ((r.className = ed), eD(e) ? r.appendChild(e) : eH(r, e)),
          r
        );
      }
      function eM(e, r) {
        eD(r.content)
          ? (eH(e, ""), e.appendChild(r.content))
          : "function" != typeof r.content &&
            (r.allowHTML ? eH(e, r.content) : (e.textContent = r.content));
      }
      function eG(e) {
        var r = e.firstElementChild,
          t = eq(r.children);
        return {
          box: r,
          content: t.find(function (e) {
            return e.classList.contains(ep);
          }),
          arrow: t.find(function (e) {
            return e.classList.contains(ef) || e.classList.contains(ed);
          }),
          backdrop: t.find(function (e) {
            return e.classList.contains("tippy-backdrop");
          }),
        };
      }
      function eW(e) {
        var r = eE(),
          t = eE();
        (t.className = "tippy-box"),
          t.setAttribute("data-state", "hidden"),
          t.setAttribute("tabindex", "-1");
        var n = eE();
        function i(t, n) {
          var i = eG(r),
            o = i.box,
            a = i.content,
            s = i.arrow;
          n.theme
            ? o.setAttribute("data-theme", n.theme)
            : o.removeAttribute("data-theme"),
            "string" == typeof n.animation
              ? o.setAttribute("data-animation", n.animation)
              : o.removeAttribute("data-animation"),
            n.inertia
              ? o.setAttribute("data-inertia", "")
              : o.removeAttribute("data-inertia"),
            (o.style.maxWidth =
              "number" == typeof n.maxWidth ? n.maxWidth + "px" : n.maxWidth),
            n.role ? o.setAttribute("role", n.role) : o.removeAttribute("role"),
            (t.content !== n.content || t.allowHTML !== n.allowHTML) &&
              eM(a, e.props),
            n.arrow
              ? s
                ? t.arrow !== n.arrow &&
                  (o.removeChild(s), o.appendChild(ez(n.arrow)))
                : o.appendChild(ez(n.arrow))
              : s && o.removeChild(s);
        }
        return (
          (n.className = ep),
          n.setAttribute("data-state", "hidden"),
          eM(n, e.props),
          r.appendChild(t),
          t.appendChild(n),
          i(e.props, e.props),
          { popper: r, onUpdate: i }
        );
      }
      eW.$$tippy = !0;
      var eY = 1,
        eX = [],
        eJ = [];
      function eZ(e, r) {
        void 0 === r && (r = {});
        var t = eB.plugins.concat(r.plugins || []);
        document.addEventListener("touchstart", eR, em),
          window.addEventListener("blur", eN);
        var n = Object.assign({}, r, { plugins: t }),
          i = (
            eD(e)
              ? [e]
              : ev(e, "NodeList")
              ? eq(e)
              : Array.isArray(e)
              ? e
              : eq(document.querySelectorAll(e))
          ).reduce(function (e, r) {
            var t =
              r &&
              (function (e, r) {
                var t,
                  n,
                  i,
                  o,
                  a,
                  s,
                  l,
                  c,
                  u = eI(e, Object.assign({}, eB, e_(eA(r)))),
                  p = !1,
                  f = !1,
                  d = !1,
                  m = !1,
                  g = [],
                  h = ey(G, u.interactiveDebounce),
                  v = eY++,
                  b = (t = u.plugins).filter(function (e, r) {
                    return t.indexOf(e) === r;
                  }),
                  y = {
                    id: v,
                    reference: e,
                    popper: eE(),
                    popperInstance: null,
                    props: u,
                    state: {
                      isEnabled: !0,
                      isVisible: !1,
                      isDestroyed: !1,
                      isMounted: !1,
                      isShown: !1,
                    },
                    plugins: b,
                    clearDelayTimeouts: function () {
                      clearTimeout(n), clearTimeout(i), cancelAnimationFrame(o);
                    },
                    setProps: function (r) {
                      if (!y.state.isDestroyed) {
                        V("onBeforeUpdate", [y, r]), z();
                        var t = y.props,
                          n = eI(
                            e,
                            Object.assign({}, t, eA(r), {
                              ignoreAttributes: !0,
                            })
                          );
                        (y.props = n),
                          H(),
                          t.interactiveDebounce !== n.interactiveDebounce &&
                            (R(), (h = ey(G, n.interactiveDebounce))),
                          t.triggerTarget && !n.triggerTarget
                            ? ew(t.triggerTarget).forEach(function (e) {
                                e.removeAttribute("aria-expanded");
                              })
                            : n.triggerTarget &&
                              e.removeAttribute("aria-expanded"),
                          C(),
                          T(),
                          q && q(t, n),
                          y.popperInstance &&
                            (J(),
                            K().forEach(function (e) {
                              requestAnimationFrame(
                                e._tippy.popperInstance.forceUpdate
                              );
                            })),
                          V("onAfterUpdate", [y, r]);
                      }
                    },
                    setContent: function (e) {
                      y.setProps({ content: e });
                    },
                    show: function () {
                      var r,
                        t,
                        n,
                        i = y.state.isVisible,
                        o = y.state.isDestroyed,
                        a = !y.state.isEnabled,
                        s = eF.isTouch && !y.props.touch,
                        u = eh(y.props.duration, 0, eB.duration);
                      if (
                        !(
                          i ||
                          o ||
                          a ||
                          s ||
                          (c || e).hasAttribute("disabled")
                        ) &&
                        (V("onShow", [y], !1), !1 !== y.props.onShow(y))
                      ) {
                        if (
                          ((y.state.isVisible = !0),
                          k() && (x.style.visibility = "visible"),
                          T(),
                          B(),
                          y.state.isMounted || (x.style.transition = "none"),
                          k())
                        ) {
                          var p = eG(x);
                          ek([p.box, p.content], 0);
                        }
                        (l = function () {
                          var e;
                          if (y.state.isVisible && !m) {
                            if (
                              ((m = !0),
                              x.offsetHeight,
                              (x.style.transition = y.props.moveTransition),
                              k() && y.props.animation)
                            ) {
                              var r = eG(x),
                                t = r.box,
                                n = r.content;
                              ek([t, n], u), eS([t, n], "visible");
                            }
                            F(),
                              C(),
                              ex(eJ, y),
                              null == (e = y.popperInstance) || e.forceUpdate(),
                              V("onMount", [y]),
                              y.props.animation &&
                                k() &&
                                _(u, function () {
                                  (y.state.isShown = !0), V("onShown", [y]);
                                });
                          }
                        }),
                          (t = y.props.appendTo),
                          (n = c || e),
                          (r =
                            (y.props.interactive && t === eg) || "parent" === t
                              ? n.parentNode
                              : eb(t, [n])).contains(x) || r.appendChild(x),
                          (y.state.isMounted = !0),
                          J();
                      }
                    },
                    hide: function () {
                      var e,
                        r = !y.state.isVisible,
                        t = y.state.isDestroyed,
                        n = !y.state.isEnabled,
                        i = eh(y.props.duration, 1, eB.duration);
                      if (
                        !r &&
                        !t &&
                        !n &&
                        (V("onHide", [y], !1), !1 !== y.props.onHide(y))
                      ) {
                        if (
                          ((y.state.isVisible = !1),
                          (y.state.isShown = !1),
                          (m = !1),
                          (p = !1),
                          k() && (x.style.visibility = "hidden"),
                          R(),
                          j(),
                          T(!0),
                          k())
                        ) {
                          var o = eG(x),
                            a = o.box,
                            s = o.content;
                          y.props.animation &&
                            (ek([a, s], i), eS([a, s], "hidden"));
                        }
                        (F(), C(), y.props.animation)
                          ? k() &&
                            ((e = y.unmount),
                            _(i, function () {
                              !y.state.isVisible &&
                                x.parentNode &&
                                x.parentNode.contains(x) &&
                                e();
                            }))
                          : y.unmount();
                      }
                    },
                    hideWithInteractivity: function (e) {
                      S().addEventListener("mousemove", h), ex(eX, h), h(e);
                    },
                    enable: function () {
                      y.state.isEnabled = !0;
                    },
                    disable: function () {
                      y.hide(), (y.state.isEnabled = !1);
                    },
                    unmount: function () {
                      y.state.isVisible && y.hide(),
                        y.state.isMounted &&
                          (Z(),
                          K().forEach(function (e) {
                            e._tippy.unmount();
                          }),
                          x.parentNode && x.parentNode.removeChild(x),
                          (eJ = eJ.filter(function (e) {
                            return e !== y;
                          })),
                          (y.state.isMounted = !1),
                          V("onHidden", [y]));
                    },
                    destroy: function () {
                      y.state.isDestroyed ||
                        (y.clearDelayTimeouts(),
                        y.unmount(),
                        z(),
                        delete e._tippy,
                        (y.state.isDestroyed = !0),
                        V("onDestroy", [y]));
                    },
                  };
                if (!u.render) return y;
                var w = u.render(y),
                  x = w.popper,
                  q = w.onUpdate;
                x.setAttribute("data-tippy-root", ""),
                  (x.id = "tippy-" + y.id),
                  (y.popper = x),
                  (e._tippy = y),
                  (x._tippy = y);
                var A = b.map(function (e) {
                    return e.fn(y);
                  }),
                  E = e.hasAttribute("aria-expanded");
                return (
                  H(),
                  C(),
                  T(),
                  V("onCreate", [y]),
                  u.showOnCreate && $(),
                  x.addEventListener("mouseenter", function () {
                    y.props.interactive &&
                      y.state.isVisible &&
                      y.clearDelayTimeouts();
                  }),
                  x.addEventListener("mouseleave", function () {
                    y.props.interactive &&
                      y.props.trigger.indexOf("mouseenter") >= 0 &&
                      S().addEventListener("mousemove", h);
                  }),
                  y
                );
                function D() {
                  var e = y.props.touch;
                  return Array.isArray(e) ? e : [e, 0];
                }
                function O() {
                  return "hold" === D()[0];
                }
                function k() {
                  var e;
                  return !!(null != (e = y.props.render) && e.$$tippy);
                }
                function S() {
                  var r = (c || e).parentNode;
                  return r ? eL(r) : document;
                }
                function L(e) {
                  return (y.state.isMounted && !y.state.isVisible) ||
                    eF.isTouch ||
                    (a && "focus" === a.type)
                    ? 0
                    : eh(y.props.delay, e ? 0 : 1, eB.delay);
                }
                function T(e) {
                  void 0 === e && (e = !1),
                    (x.style.pointerEvents =
                      y.props.interactive && !e ? "" : "none"),
                    (x.style.zIndex = "" + y.props.zIndex);
                }
                function V(e, r, t) {
                  if (
                    (void 0 === t && (t = !0),
                    A.forEach(function (t) {
                      t[e] && t[e].apply(t, r);
                    }),
                    t)
                  ) {
                    var n;
                    (n = y.props)[e].apply(n, r);
                  }
                }
                function F() {
                  var r = y.props.aria;
                  if (r.content) {
                    var t = "aria-" + r.content,
                      n = x.id;
                    ew(y.props.triggerTarget || e).forEach(function (e) {
                      var r = e.getAttribute(t);
                      if (y.state.isVisible)
                        e.setAttribute(t, r ? r + " " + n : n);
                      else {
                        var i = r && r.replace(n, "").trim();
                        i ? e.setAttribute(t, i) : e.removeAttribute(t);
                      }
                    });
                  }
                }
                function C() {
                  !E &&
                    y.props.aria.expanded &&
                    ew(y.props.triggerTarget || e).forEach(function (r) {
                      y.props.interactive
                        ? r.setAttribute(
                            "aria-expanded",
                            y.state.isVisible && r === (c || e)
                              ? "true"
                              : "false"
                          )
                        : r.removeAttribute("aria-expanded");
                    });
                }
                function R() {
                  S().removeEventListener("mousemove", h),
                    (eX = eX.filter(function (e) {
                      return e !== h;
                    }));
                }
                function P(r) {
                  if (!eF.isTouch || (!d && "mousedown" !== r.type)) {
                    var t = (r.composedPath && r.composedPath()[0]) || r.target;
                    if (!(y.props.interactive && eV(x, t))) {
                      if (
                        ew(y.props.triggerTarget || e).some(function (e) {
                          return eV(e, t);
                        })
                      ) {
                        if (
                          eF.isTouch ||
                          (y.state.isVisible &&
                            y.props.trigger.indexOf("click") >= 0)
                        )
                          return;
                      } else V("onClickOutside", [y, r]);
                      !0 !== y.props.hideOnClick ||
                        (y.clearDelayTimeouts(),
                        y.hide(),
                        (f = !0),
                        setTimeout(function () {
                          f = !1;
                        }),
                        y.state.isMounted || j());
                    }
                  }
                }
                function N() {
                  d = !0;
                }
                function U() {
                  d = !1;
                }
                function B() {
                  var e = S();
                  e.addEventListener("mousedown", P, !0),
                    e.addEventListener("touchend", P, em),
                    e.addEventListener("touchstart", U, em),
                    e.addEventListener("touchmove", N, em);
                }
                function j() {
                  var e = S();
                  e.removeEventListener("mousedown", P, !0),
                    e.removeEventListener("touchend", P, em),
                    e.removeEventListener("touchstart", U, em),
                    e.removeEventListener("touchmove", N, em);
                }
                function _(e, r) {
                  var t = eG(x).box;
                  function n(e) {
                    e.target === t && (eT(t, "remove", n), r());
                  }
                  if (0 === e) return r();
                  eT(t, "remove", s), eT(t, "add", n), (s = n);
                }
                function I(r, t, n) {
                  void 0 === n && (n = !1),
                    ew(y.props.triggerTarget || e).forEach(function (e) {
                      e.addEventListener(r, t, n),
                        g.push({
                          node: e,
                          eventType: r,
                          handler: t,
                          options: n,
                        });
                    });
                }
                function H() {
                  O() &&
                    (I("touchstart", M, { passive: !0 }),
                    I("touchend", W, { passive: !0 })),
                    y.props.trigger
                      .split(/\s+/)
                      .filter(Boolean)
                      .forEach(function (e) {
                        if ("manual" !== e)
                          switch ((I(e, M), e)) {
                            case "mouseenter":
                              I("mouseleave", W);
                              break;
                            case "focus":
                              I(eU ? "focusout" : "blur", Y);
                              break;
                            case "focusin":
                              I("focusout", Y);
                          }
                      });
                }
                function z() {
                  g.forEach(function (e) {
                    var r = e.node,
                      t = e.eventType,
                      n = e.handler,
                      i = e.options;
                    r.removeEventListener(t, n, i);
                  }),
                    (g = []);
                }
                function M(e) {
                  var r,
                    t = !1;
                  if (!(!y.state.isEnabled || X(e)) && !f) {
                    var n = (null == (r = a) ? void 0 : r.type) === "focus";
                    (a = e),
                      (c = e.currentTarget),
                      C(),
                      !y.state.isVisible &&
                        eO(e) &&
                        eX.forEach(function (r) {
                          return r(e);
                        }),
                      "click" === e.type &&
                      (0 > y.props.trigger.indexOf("mouseenter") || p) &&
                      !1 !== y.props.hideOnClick &&
                      y.state.isVisible
                        ? (t = !0)
                        : $(e),
                      "click" === e.type && (p = !t),
                      t && !n && Q(e);
                  }
                }
                function G(r) {
                  var t,
                    n,
                    i,
                    o = r.target,
                    a = (c || e).contains(o) || x.contains(o);
                  ("mousemove" !== r.type || !a) &&
                    ((t = K()
                      .concat(x)
                      .map(function (e) {
                        var r,
                          t =
                            null == (r = e._tippy.popperInstance)
                              ? void 0
                              : r.state;
                        return t
                          ? {
                              popperRect: e.getBoundingClientRect(),
                              popperState: t,
                              props: u,
                            }
                          : null;
                      })
                      .filter(Boolean)),
                    (n = r.clientX),
                    (i = r.clientY),
                    t.every(function (e) {
                      var r = e.popperRect,
                        t = e.popperState,
                        o = e.props.interactiveBorder,
                        a = t.placement.split("-")[0],
                        s = t.modifiersData.offset;
                      if (!s) return !0;
                      var l = "bottom" === a ? s.top.y : 0,
                        c = "top" === a ? s.bottom.y : 0,
                        u = "right" === a ? s.left.x : 0,
                        p = "left" === a ? s.right.x : 0,
                        f = r.top - i + l > o,
                        d = i - r.bottom - c > o,
                        m = r.left - n + u > o,
                        g = n - r.right - p > o;
                      return f || d || m || g;
                    }) && (R(), Q(r)));
                }
                function W(e) {
                  if (!(X(e) || (y.props.trigger.indexOf("click") >= 0 && p))) {
                    if (y.props.interactive) {
                      y.hideWithInteractivity(e);
                      return;
                    }
                    Q(e);
                  }
                }
                function Y(r) {
                  (0 > y.props.trigger.indexOf("focusin") &&
                    r.target !== (c || e)) ||
                    (y.props.interactive &&
                      r.relatedTarget &&
                      x.contains(r.relatedTarget)) ||
                    Q(r);
                }
                function X(e) {
                  return !!eF.isTouch && O() !== e.type.indexOf("touch") >= 0;
                }
                function J() {
                  Z();
                  var r = y.props,
                    t = r.popperOptions,
                    n = r.placement,
                    i = r.offset,
                    o = r.getReferenceClientRect,
                    a = r.moveTransition,
                    s = k() ? eG(x).arrow : null,
                    u = o
                      ? {
                          getBoundingClientRect: o,
                          contextElement: o.contextElement || c || e,
                        }
                      : e,
                    p = [
                      { name: "offset", options: { offset: i } },
                      {
                        name: "preventOverflow",
                        options: {
                          padding: { top: 2, bottom: 2, left: 5, right: 5 },
                        },
                      },
                      { name: "flip", options: { padding: 5 } },
                      { name: "computeStyles", options: { adaptive: !a } },
                      {
                        name: "$$tippy",
                        enabled: !0,
                        phase: "beforeWrite",
                        requires: ["computeStyles"],
                        fn: function (e) {
                          var r = e.state;
                          if (k()) {
                            var t = eG(x).box;
                            [
                              "placement",
                              "reference-hidden",
                              "escaped",
                            ].forEach(function (e) {
                              "placement" === e
                                ? t.setAttribute("data-placement", r.placement)
                                : r.attributes.popper["data-popper-" + e]
                                ? t.setAttribute("data-" + e, "")
                                : t.removeAttribute("data-" + e);
                            }),
                              (r.attributes.popper = {});
                          }
                        },
                      },
                    ];
                  k() &&
                    s &&
                    p.push({
                      name: "arrow",
                      options: { element: s, padding: 3 },
                    }),
                    p.push.apply(p, (null == t ? void 0 : t.modifiers) || []),
                    (y.popperInstance = eu(
                      u,
                      x,
                      Object.assign({}, t, {
                        placement: n,
                        onFirstUpdate: l,
                        modifiers: p,
                      })
                    ));
                }
                function Z() {
                  y.popperInstance &&
                    (y.popperInstance.destroy(), (y.popperInstance = null));
                }
                function K() {
                  return eq(x.querySelectorAll("[data-tippy-root]"));
                }
                function $(e) {
                  y.clearDelayTimeouts(), e && V("onTrigger", [y, e]), B();
                  var r = L(!0),
                    t = D(),
                    i = t[0],
                    o = t[1];
                  eF.isTouch && "hold" === i && o && (r = o),
                    r
                      ? (n = setTimeout(function () {
                          y.show();
                        }, r))
                      : y.show();
                }
                function Q(e) {
                  if (
                    (y.clearDelayTimeouts(),
                    V("onUntrigger", [y, e]),
                    !y.state.isVisible)
                  ) {
                    j();
                    return;
                  }
                  if (
                    !(
                      y.props.trigger.indexOf("mouseenter") >= 0 &&
                      y.props.trigger.indexOf("click") >= 0 &&
                      ["mouseleave", "mousemove"].indexOf(e.type) >= 0
                    ) ||
                    !p
                  ) {
                    var r = L(!1);
                    r
                      ? (i = setTimeout(function () {
                          y.state.isVisible && y.hide();
                        }, r))
                      : (o = requestAnimationFrame(function () {
                          y.hide();
                        }));
                  }
                }
              })(r, n);
            return t && e.push(t), e;
          }, []);
        return eD(e) ? i[0] : i;
      }
      (eZ.defaultProps = eB),
        (eZ.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (r) {
            eB[r] = e[r];
          });
        }),
        (eZ.currentInput = eF),
        Object.assign({}, J, {
          effect: function (e) {
            var r = e.state,
              t = {
                popper: {
                  position: r.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            Object.assign(r.elements.popper.style, t.popper),
              (r.styles = t),
              r.elements.arrow &&
                Object.assign(r.elements.arrow.style, t.arrow);
          },
        });
      var eK = { clientX: 0, clientY: 0 },
        e$ = [];
      function eQ(e) {
        eK = { clientX: e.clientX, clientY: e.clientY };
      }
      var e0 = {
        name: "followCursor",
        defaultValue: !1,
        fn: function (e) {
          var r = e.reference,
            t = eL(e.props.triggerTarget || r),
            n = !1,
            i = !1,
            o = !0,
            a = e.props;
          function s() {
            return "initial" === e.props.followCursor && e.state.isVisible;
          }
          function l() {
            t.addEventListener("mousemove", p);
          }
          function c() {
            t.removeEventListener("mousemove", p);
          }
          function u() {
            (n = !0), e.setProps({ getReferenceClientRect: null }), (n = !1);
          }
          function p(t) {
            var n = !t.target || r.contains(t.target),
              i = e.props.followCursor,
              o = t.clientX,
              a = t.clientY,
              s = r.getBoundingClientRect(),
              l = o - s.left,
              c = a - s.top;
            (n || !e.props.interactive) &&
              e.setProps({
                getReferenceClientRect: function () {
                  var e = r.getBoundingClientRect(),
                    t = o,
                    n = a;
                  "initial" === i && ((t = e.left + l), (n = e.top + c));
                  var s = "horizontal" === i ? e.top : n,
                    u = "vertical" === i ? e.right : t,
                    p = "horizontal" === i ? e.bottom : n,
                    f = "vertical" === i ? e.left : t;
                  return {
                    width: u - f,
                    height: p - s,
                    top: s,
                    right: u,
                    bottom: p,
                    left: f,
                  };
                },
              });
          }
          function f() {
            e.props.followCursor &&
              (e$.push({ instance: e, doc: t }),
              (function (e) {
                e.addEventListener("mousemove", eQ);
              })(t));
          }
          function d() {
            0 ===
              (e$ = e$.filter(function (r) {
                return r.instance !== e;
              })).filter(function (e) {
                return e.doc === t;
              }).length &&
              (function (e) {
                e.removeEventListener("mousemove", eQ);
              })(t);
          }
          return {
            onCreate: f,
            onDestroy: d,
            onBeforeUpdate: function () {
              a = e.props;
            },
            onAfterUpdate: function (r, t) {
              var o = t.followCursor;
              !n &&
                (void 0 === o ||
                  a.followCursor === o ||
                  (d(),
                  o
                    ? (f(), !e.state.isMounted || i || s() || l())
                    : (c(), u())));
            },
            onMount: function () {
              !e.props.followCursor ||
                i ||
                (o && (p(eK), (o = !1)), s() || l());
            },
            onTrigger: function (e, r) {
              eO(r) && (eK = { clientX: r.clientX, clientY: r.clientY }),
                (i = "focus" === r.type);
            },
            onHidden: function () {
              e.props.followCursor && (u(), c(), (o = !0));
            },
          };
        },
      };
      eZ.setDefaultProps({ render: eW });
      var e1 = eZ;
    },
    23936: function () {},
    98915: function (e, r, t) {
      "use strict";
      t.d(r, {
        I: function () {
          return i;
        },
      });
      var n = t(96814);
      function i(e, r, t) {
        var i;
        if ("string" == typeof e) {
          let o = document;
          r &&
            ((0, n.k)(!!r.current, "Scope provided, but no element detected."),
            (o = r.current)),
            t
              ? ((null !== (i = t[e]) && void 0 !== i) ||
                  (t[e] = o.querySelectorAll(e)),
                (e = t[e]))
              : (e = o.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    84502: function (e, r, t) {
      "use strict";
      t.d(r, {
        p: function () {
          return a;
        },
      });
      var n = t(78411),
        i = t(3296),
        o = t(2337);
      function a(e) {
        let r = (0, n.useRef)(0),
          { isStatic: t } = (0, n.useContext)(i._);
        (0, n.useEffect)(() => {
          if (t) return;
          let n = ({ timestamp: t, delta: n }) => {
            r.current || (r.current = t), e(t - r.current, n);
          };
          return o.Wi.update(n, !0), () => (0, o.Pn)(n);
        }, [e]);
      }
    },
    70556: function (e, r, t) {
      "use strict";
      t.d(r, {
        Y: function () {
          return a;
        },
      });
      var n = t(78411),
        i = t(98915);
      let o = { some: 0, all: 1 };
      function a(e, { root: r, margin: t, amount: a, once: s = !1 } = {}) {
        let [l, c] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            if (!e.current || (s && l)) return;
            let n = { root: (r && r.current) || void 0, margin: t, amount: a };
            return (function (
              e,
              r,
              { root: t, margin: n, amount: a = "some" } = {}
            ) {
              let s = (0, i.I)(e),
                l = new WeakMap(),
                c = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let t = l.get(e.target);
                      if (!!t !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let t = r(e);
                          "function" == typeof t
                            ? l.set(e.target, t)
                            : c.unobserve(e.target);
                        } else t && (t(e), l.delete(e.target));
                      }
                    });
                  },
                  {
                    root: t,
                    rootMargin: n,
                    threshold: "number" == typeof a ? a : o[a],
                  }
                );
              return s.forEach((e) => c.observe(e)), () => c.disconnect();
            })(e.current, () => (c(!0), s ? void 0 : () => c(!1)), n);
          }, [r, e, t, s, a]),
          l
        );
      }
    },
    36142: function (e, r, t) {
      "use strict";
      t.d(r, {
        r: function () {
          return n;
        },
      });
      let n = (e, r, t) => {
        let n = r - e;
        return ((((t - e) % n) + n) % n) + e;
      };
    },
    68163: function (e, r, t) {
      "use strict";
      t.d(r, {
        c: function () {
          return s;
        },
      });
      var n = t(78411),
        i = t(62889),
        o = t(3296),
        a = t(82387);
      function s(e) {
        let r = (0, a.h)(() => (0, i.BX)(e)),
          { isStatic: t } = (0, n.useContext)(o._);
        if (t) {
          let [, t] = (0, n.useState)(e);
          (0, n.useEffect)(() => r.on("change", t), []);
        }
        return r;
      }
    },
    76996: function (e, r, t) {
      "use strict";
      let n, i;
      t.d(r, {
        v: function () {
          return P;
        },
      });
      var o = t(62889),
        a = t(82387),
        s = t(78411),
        l = t(96814),
        c = t(98915);
      let u = new WeakMap();
      function p({ target: e, contentRect: r, borderBoxSize: t }) {
        var n;
        null === (n = u.get(e)) ||
          void 0 === n ||
          n.forEach((n) => {
            n({
              target: e,
              contentSize: r,
              get size() {
                return (function (e, r) {
                  if (r) {
                    let { inlineSize: e, blockSize: t } = r[0];
                    return { width: e, height: t };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, t);
              },
            });
          });
      }
      function f(e) {
        e.forEach(p);
      }
      let d = new Set();
      var m = t(70543),
        g = t(21306);
      let h = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        v = () => ({ time: 0, x: h(), y: h() }),
        b = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function y(e, r, t, n) {
        let i = t[r],
          { length: o, position: a } = b[r],
          s = i.current,
          l = t.time;
        (i.current = e[`scroll${a}`]),
          (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
          (i.offset.length = 0),
          (i.offset[0] = 0),
          (i.offset[1] = i.scrollLength),
          (i.progress = (0, m.Y)(0, i.scrollLength, i.current));
        let c = n - l;
        i.velocity = c > 50 ? 0 : (0, g.R)(i.current - s, c);
      }
      let w = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        x = { start: 0, center: 0.5, end: 1 };
      function q(e, r, t = 0) {
        let n = 0;
        if ((e in x && (e = x[e]), "string" == typeof e)) {
          let r = parseFloat(e);
          e.endsWith("px")
            ? (n = r)
            : e.endsWith("%")
            ? (e = r / 100)
            : e.endsWith("vw")
            ? (n = (r / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (n = (r / 100) * document.documentElement.clientHeight)
            : (e = r);
        }
        return "number" == typeof e && (n = r * e), t + n;
      }
      let A = [0, 0];
      var E = t(4563),
        D = t(47515);
      let O = { x: 0, y: 0 };
      var k = t(2337);
      let S = new WeakMap(),
        L = new WeakMap(),
        T = new WeakMap(),
        V = (e) => (e === document.documentElement ? window : e);
      var F = t(19452);
      function C(e, r) {
        (0, l.K)(
          !!(!r || r.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let R = () => ({
        scrollX: (0, o.BX)(0),
        scrollY: (0, o.BX)(0),
        scrollXProgress: (0, o.BX)(0),
        scrollYProgress: (0, o.BX)(0),
      });
      function P({ container: e, target: r, layoutEffect: t = !0, ...o } = {}) {
        let l = (0, a.h)(R);
        return (
          (t ? F.L : s.useEffect)(
            () => (
              C("target", r),
              C("container", e),
              (function (
                e,
                { container: r = document.documentElement, ...t } = {}
              ) {
                let o = T.get(r);
                o || ((o = new Set()), T.set(r, o));
                let a = (function (e, r, t, n = {}) {
                  return {
                    measure: () =>
                      (function (e, r = e, t) {
                        if (
                          ((t.x.targetOffset = 0),
                          (t.y.targetOffset = 0),
                          r !== e)
                        ) {
                          let n = r;
                          for (; n && n !== e; )
                            (t.x.targetOffset += n.offsetLeft),
                              (t.y.targetOffset += n.offsetTop),
                              (n = n.offsetParent);
                        }
                        (t.x.targetLength =
                          r === e ? r.scrollWidth : r.clientWidth),
                          (t.y.targetLength =
                            r === e ? r.scrollHeight : r.clientHeight),
                          (t.x.containerLength = e.clientWidth),
                          (t.y.containerLength = e.clientHeight);
                      })(e, n.target, t),
                    update: (r) => {
                      y(e, "x", t, r),
                        y(e, "y", t, r),
                        (t.time = r),
                        (n.offset || n.target) &&
                          (function (e, r, t) {
                            let { offset: n = w.All } = t,
                              { target: i = e, axis: o = "y" } = t,
                              a = "y" === o ? "height" : "width",
                              s =
                                i !== e
                                  ? (function (e, r) {
                                      let t = { x: 0, y: 0 },
                                        n = e;
                                      for (; n && n !== r; )
                                        if (n instanceof HTMLElement)
                                          (t.x += n.offsetLeft),
                                            (t.y += n.offsetTop),
                                            (n = n.offsetParent);
                                        else if ("svg" === n.tagName) {
                                          let e = n.getBoundingClientRect(),
                                            r = (n =
                                              n.parentElement).getBoundingClientRect();
                                          (t.x += e.left - r.left),
                                            (t.y += e.top - r.top);
                                        } else if (
                                          n instanceof SVGGraphicsElement
                                        ) {
                                          let { x: e, y: r } = n.getBBox();
                                          (t.x += e), (t.y += r);
                                          let i = null,
                                            o = n.parentNode;
                                          for (; !i; )
                                            "svg" === o.tagName && (i = o),
                                              (o = n.parentNode);
                                          n = i;
                                        } else break;
                                      return t;
                                    })(i, e)
                                  : O,
                              l =
                                i === e
                                  ? {
                                      width: e.scrollWidth,
                                      height: e.scrollHeight,
                                    }
                                  : "getBBox" in i && "svg" !== i.tagName
                                  ? i.getBBox()
                                  : {
                                      width: i.clientWidth,
                                      height: i.clientHeight,
                                    },
                              c = {
                                width: e.clientWidth,
                                height: e.clientHeight,
                              };
                            r[o].offset.length = 0;
                            let u = !r[o].interpolate,
                              p = n.length;
                            for (let e = 0; e < p; e++) {
                              let t = (function (e, r, t, n) {
                                let i = Array.isArray(e) ? e : A,
                                  o = 0;
                                return (
                                  "number" == typeof e
                                    ? (i = [e, e])
                                    : "string" == typeof e &&
                                      (i = (e = e.trim()).includes(" ")
                                        ? e.split(" ")
                                        : [e, x[e] ? e : "0"]),
                                  q(i[0], t, n) - q(i[1], r)
                                );
                              })(n[e], c[a], l[a], s[o]);
                              u ||
                                t === r[o].interpolatorOffsets[e] ||
                                (u = !0),
                                (r[o].offset[e] = t);
                            }
                            u &&
                              ((r[o].interpolate = (0, E.s)(
                                r[o].offset,
                                (0, D.Y)(n)
                              )),
                              (r[o].interpolatorOffsets = [...r[o].offset])),
                              (r[o].progress = r[o].interpolate(r[o].current));
                          })(e, t, n);
                    },
                    notify: () => r(t),
                  };
                })(r, e, v(), t);
                if ((o.add(a), !S.has(r))) {
                  let e = () => {
                      for (let e of o) e.measure();
                    },
                    t = () => {
                      for (let e of o) e.update(k.w0.timestamp);
                    },
                    a = () => {
                      for (let e of o) e.notify();
                    },
                    s = () => {
                      k.Wi.read(e, !1, !0),
                        k.Wi.read(t, !1, !0),
                        k.Wi.update(a, !1, !0);
                    };
                  S.set(r, s);
                  let l = V(r);
                  window.addEventListener("resize", s, { passive: !0 }),
                    r !== document.documentElement &&
                      L.set(
                        r,
                        "function" == typeof r
                          ? (d.add(r),
                            i ||
                              ((i = () => {
                                let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  r = {
                                    target: window,
                                    size: e,
                                    contentSize: e,
                                  };
                                d.forEach((e) => e(r));
                              }),
                              window.addEventListener("resize", i)),
                            () => {
                              d.delete(r), !d.size && i && (i = void 0);
                            })
                          : (function (e, r) {
                              n ||
                                "undefined" == typeof ResizeObserver ||
                                (n = new ResizeObserver(f));
                              let t = (0, c.I)(e);
                              return (
                                t.forEach((e) => {
                                  let t = u.get(e);
                                  t || ((t = new Set()), u.set(e, t)),
                                    t.add(r),
                                    null == n || n.observe(e);
                                }),
                                () => {
                                  t.forEach((e) => {
                                    let t = u.get(e);
                                    null == t || t.delete(r),
                                      (null == t ? void 0 : t.size) ||
                                        null == n ||
                                        n.unobserve(e);
                                  });
                                }
                              );
                            })(r, s)
                      ),
                    l.addEventListener("scroll", s, { passive: !0 });
                }
                let s = S.get(r);
                return (
                  k.Wi.read(s, !1, !0),
                  () => {
                    var e;
                    (0, k.Pn)(s);
                    let t = T.get(r);
                    if (!t || (t.delete(a), t.size)) return;
                    let n = S.get(r);
                    S.delete(r),
                      n &&
                        (V(r).removeEventListener("scroll", n),
                        null === (e = L.get(r)) || void 0 === e || e(),
                        window.removeEventListener("resize", n));
                  }
                );
              })(
                ({ x: e, y: r }) => {
                  l.scrollX.set(e.current),
                    l.scrollXProgress.set(e.progress),
                    l.scrollY.set(r.current),
                    l.scrollYProgress.set(r.progress);
                },
                {
                  ...o,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == r ? void 0 : r.current) || void 0,
                }
              )
            ),
            [e, r, JSON.stringify(o.offset)]
          ),
          l
        );
      }
    },
    89023: function (e, r, t) {
      "use strict";
      t.d(r, {
        H: function () {
          return f;
        },
      });
      var n = t(4563);
      let i = (e) => e && "object" == typeof e && e.mix,
        o = (e) => (i(e) ? e.mix : void 0);
      var a = t(68163),
        s = t(19452),
        l = t(2337);
      function c(e, r) {
        let t = (0, a.c)(r()),
          n = () => t.set(r());
        return (
          n(),
          (0, s.L)(() => {
            let r = () => l.Wi.preRender(n, !1, !0),
              t = e.map((e) => e.on("change", r));
            return () => {
              t.forEach((e) => e()), (0, l.Pn)(n);
            };
          }),
          t
        );
      }
      var u = t(82387),
        p = t(62889);
      function f(e, r, t, i) {
        if ("function" == typeof e)
          return (function (e) {
            (p.S1.current = []), e();
            let r = c(p.S1.current, e);
            return (p.S1.current = void 0), r;
          })(e);
        let a =
          "function" == typeof r
            ? r
            : (function (...e) {
                let r = !Array.isArray(e[0]),
                  t = r ? 0 : -1,
                  i = e[0 + t],
                  a = e[1 + t],
                  s = e[2 + t],
                  l = e[3 + t],
                  c = (0, n.s)(a, s, { mixer: o(s[0]), ...l });
                return r ? c(i) : c;
              })(r, t, i);
        return Array.isArray(e) ? d(e, a) : d([e], ([e]) => a(e));
      }
      function d(e, r) {
        let t = (0, u.h)(() => []);
        return c(e, () => {
          t.length = 0;
          let n = e.length;
          for (let r = 0; r < n; r++) t[r] = e[r].get();
          return r(t);
        });
      }
    },
    65155: function (e, r, t) {
      "use strict";
      function n(e) {
        for (
          var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), n = 1;
          n < r;
          n++
        )
          t[n - 1] = arguments[n];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (t.length
              ? " " +
                t
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf"
        );
      }
      function i(e) {
        return !!e && !!e[I];
      }
      function o(e) {
        var r;
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var r = Object.getPrototypeOf(e);
            if (null === r) return !0;
            var t =
              Object.hasOwnProperty.call(r, "constructor") && r.constructor;
            return (
              t === Object ||
              ("function" == typeof t && Function.toString.call(t) === H)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[_] ||
            !!(null === (r = e.constructor) || void 0 === r ? void 0 : r[_]) ||
            u(e) ||
            p(e))
        );
      }
      function a(e, r, t) {
        void 0 === t && (t = !1),
          0 === s(e)
            ? (t ? Object.keys : z)(e).forEach(function (n) {
                (t && "symbol" == typeof n) || r(n, e[n], e);
              })
            : e.forEach(function (t, n) {
                return r(n, t, e);
              });
      }
      function s(e) {
        var r = e[I];
        return r
          ? r.i > 3
            ? r.i - 4
            : r.i
          : Array.isArray(e)
          ? 1
          : u(e)
          ? 2
          : p(e)
          ? 3
          : 0;
      }
      function l(e, r) {
        return 2 === s(e)
          ? e.has(r)
          : Object.prototype.hasOwnProperty.call(e, r);
      }
      function c(e, r, t) {
        var n = s(e);
        2 === n ? e.set(r, t) : 3 === n ? e.add(t) : (e[r] = t);
      }
      function u(e) {
        return N && e instanceof Map;
      }
      function p(e) {
        return U && e instanceof Set;
      }
      function f(e) {
        return e.o || e.t;
      }
      function d(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var r = M(e);
        delete r[I];
        for (var t = z(r), n = 0; n < t.length; n++) {
          var i = t[n],
            o = r[i];
          !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
              (r[i] = {
                configurable: !0,
                writable: !0,
                enumerable: o.enumerable,
                value: e[i],
              });
        }
        return Object.create(Object.getPrototypeOf(e), r);
      }
      function m(e, r) {
        return (
          void 0 === r && (r = !1),
          h(e) ||
            i(e) ||
            !o(e) ||
            (s(e) > 1 && (e.set = e.add = e.clear = e.delete = g),
            Object.freeze(e),
            r &&
              a(
                e,
                function (e, r) {
                  return m(r, !0);
                },
                !0
              )),
          e
        );
      }
      function g() {
        n(2);
      }
      function h(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function v(e) {
        var r = G[e];
        return r || n(18, e), r;
      }
      function b(e, r) {
        r && (v("Patches"), (e.u = []), (e.s = []), (e.v = r));
      }
      function y(e) {
        w(e), e.p.forEach(q), (e.p = null);
      }
      function w(e) {
        e === R && (R = e.l);
      }
      function x(e) {
        return (R = { p: [], l: R, h: e, m: !0, _: 0 });
      }
      function q(e) {
        var r = e[I];
        0 === r.i || 1 === r.i ? r.j() : (r.g = !0);
      }
      function A(e, r) {
        r._ = r.p.length;
        var t = r.p[0],
          i = void 0 !== e && e !== t;
        return (
          r.h.O || v("ES5").S(r, e, i),
          i
            ? (t[I].P && (y(r), n(4)),
              o(e) && ((e = E(r, e)), r.l || O(r, e)),
              r.u && v("Patches").M(t[I].t, e, r.u, r.s))
            : (e = E(r, t, [])),
          y(r),
          r.u && r.v(r.u, r.s),
          e !== j ? e : void 0
        );
      }
      function E(e, r, t) {
        if (h(r)) return r;
        var n = r[I];
        if (!n)
          return (
            a(
              r,
              function (i, o) {
                return D(e, n, r, i, o, t);
              },
              !0
            ),
            r
          );
        if (n.A !== e) return r;
        if (!n.P) return O(e, n.t, !0), n.t;
        if (!n.I) {
          (n.I = !0), n.A._--;
          var i = 4 === n.i || 5 === n.i ? (n.o = d(n.k)) : n.o,
            o = i,
            s = !1;
          3 === n.i && ((o = new Set(i)), i.clear(), (s = !0)),
            a(o, function (r, o) {
              return D(e, n, i, r, o, t, s);
            }),
            O(e, i, !1),
            t && e.u && v("Patches").N(n, t, e.u, e.s);
        }
        return n.o;
      }
      function D(e, r, t, n, a, s, u) {
        if (i(a)) {
          var p = E(
            e,
            a,
            s && r && 3 !== r.i && !l(r.R, n) ? s.concat(n) : void 0
          );
          if ((c(t, n, p), !i(p))) return;
          e.m = !1;
        } else u && t.add(a);
        if (o(a) && !h(a)) {
          if (!e.h.D && e._ < 1) return;
          E(e, a), (r && r.A.l) || O(e, a);
        }
      }
      function O(e, r, t) {
        void 0 === t && (t = !1), !e.l && e.h.D && e.m && m(r, t);
      }
      function k(e, r) {
        var t = e[I];
        return (t ? f(t) : e)[r];
      }
      function S(e, r) {
        if (r in e)
          for (var t = Object.getPrototypeOf(e); t; ) {
            var n = Object.getOwnPropertyDescriptor(t, r);
            if (n) return n;
            t = Object.getPrototypeOf(t);
          }
      }
      function L(e) {
        e.P || ((e.P = !0), e.l && L(e.l));
      }
      function T(e) {
        e.o || (e.o = d(e.t));
      }
      function V(e, r, t) {
        var n,
          i,
          o,
          a,
          s,
          l,
          c,
          f = u(r)
            ? v("MapSet").F(r, t)
            : p(r)
            ? v("MapSet").T(r, t)
            : e.O
            ? ((o = i =
                {
                  i: (n = Array.isArray(r)) ? 1 : 0,
                  A: t ? t.A : R,
                  P: !1,
                  I: !1,
                  R: {},
                  l: t,
                  t: r,
                  k: null,
                  o: null,
                  j: null,
                  C: !1,
                }),
              (a = W),
              n && ((o = [i]), (a = Y)),
              (l = (s = Proxy.revocable(o, a)).revoke),
              (c = s.proxy),
              (i.k = c),
              (i.j = l),
              c)
            : v("ES5").J(r, t);
        return (t ? t.A : R).p.push(f), f;
      }
      function F(e, r) {
        switch (r) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return d(e);
      }
      t.d(r, {
        P2: function () {
          return Z;
        },
        Uy: function () {
          return J;
        },
        _x: function () {
          return K;
        },
        mv: function () {
          return i;
        },
      });
      var C,
        R,
        P = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
        N = "undefined" != typeof Map,
        U = "undefined" != typeof Set,
        B =
          "undefined" != typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "undefined" != typeof Reflect,
        j = P
          ? Symbol.for("immer-nothing")
          : (((C = {})["immer-nothing"] = !0), C),
        _ = P ? Symbol.for("immer-draftable") : "__$immer_draftable",
        I = P ? Symbol.for("immer-state") : "__$immer_state",
        H = "" + Object.prototype.constructor,
        z =
          "undefined" != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e)
                );
              }
            : Object.getOwnPropertyNames,
        M =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var r = {};
            return (
              z(e).forEach(function (t) {
                r[t] = Object.getOwnPropertyDescriptor(e, t);
              }),
              r
            );
          },
        G = {},
        W = {
          get: function (e, r) {
            if (r === I) return e;
            var t,
              n,
              i = f(e);
            if (!l(i, r))
              return (n = S(i, r))
                ? "value" in n
                  ? n.value
                  : null === (t = n.get) || void 0 === t
                  ? void 0
                  : t.call(e.k)
                : void 0;
            var a = i[r];
            return e.I || !o(a)
              ? a
              : a === k(e.t, r)
              ? (T(e), (e.o[r] = V(e.A.h, a, e)))
              : a;
          },
          has: function (e, r) {
            return r in f(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(f(e));
          },
          set: function (e, r, t) {
            var n = S(f(e), r);
            if (null == n ? void 0 : n.set) return n.set.call(e.k, t), !0;
            if (!e.P) {
              var i = k(f(e), r),
                o = null == i ? void 0 : i[I];
              if (o && o.t === t) return (e.o[r] = t), (e.R[r] = !1), !0;
              if (
                (t === i ? 0 !== t || 1 / t == 1 / i : t != t && i != i) &&
                (void 0 !== t || l(e.t, r))
              )
                return !0;
              T(e), L(e);
            }
            return (
              (e.o[r] === t && (void 0 !== t || r in e.o)) ||
                (Number.isNaN(t) && Number.isNaN(e.o[r])) ||
                ((e.o[r] = t), (e.R[r] = !0)),
              !0
            );
          },
          deleteProperty: function (e, r) {
            return (
              void 0 !== k(e.t, r) || r in e.t
                ? ((e.R[r] = !1), T(e), L(e))
                : delete e.R[r],
              e.o && delete e.o[r],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, r) {
            var t = f(e),
              n = Reflect.getOwnPropertyDescriptor(t, r);
            return n
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== r,
                  enumerable: n.enumerable,
                  value: t[r],
                }
              : n;
          },
          defineProperty: function () {
            n(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            n(12);
          },
        },
        Y = {};
      a(W, function (e, r) {
        Y[e] = function () {
          return (arguments[0] = arguments[0][0]), r.apply(this, arguments);
        };
      }),
        (Y.deleteProperty = function (e, r) {
          return Y.set.call(this, e, r, void 0);
        }),
        (Y.set = function (e, r, t) {
          return W.set.call(this, e[0], r, t, e[0]);
        });
      var X = new ((function () {
          function e(e) {
            var r = this;
            (this.O = B),
              (this.D = !0),
              (this.produce = function (e, t, i) {
                if ("function" == typeof e && "function" != typeof t) {
                  var a,
                    s = t;
                  return (
                    (t = e),
                    function (e) {
                      var n = this;
                      void 0 === e && (e = s);
                      for (
                        var i = arguments.length,
                          o = Array(i > 1 ? i - 1 : 0),
                          a = 1;
                        a < i;
                        a++
                      )
                        o[a - 1] = arguments[a];
                      return r.produce(e, function (e) {
                        var r;
                        return (r = t).call.apply(r, [n, e].concat(o));
                      });
                    }
                  );
                }
                if (
                  ("function" != typeof t && n(6),
                  void 0 !== i && "function" != typeof i && n(7),
                  o(e))
                ) {
                  var l = x(r),
                    c = V(r, e, void 0),
                    u = !0;
                  try {
                    (a = t(c)), (u = !1);
                  } finally {
                    u ? y(l) : w(l);
                  }
                  return "undefined" != typeof Promise && a instanceof Promise
                    ? a.then(
                        function (e) {
                          return b(l, i), A(e, l);
                        },
                        function (e) {
                          throw (y(l), e);
                        }
                      )
                    : (b(l, i), A(a, l));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (a = t(e)) && (a = e),
                    a === j && (a = void 0),
                    r.D && m(a, !0),
                    i)
                  ) {
                    var p = [],
                      f = [];
                    v("Patches").M(e, a, p, f), i(p, f);
                  }
                  return a;
                }
                n(21, e);
              }),
              (this.produceWithPatches = function (e, t) {
                if ("function" == typeof e)
                  return function (t) {
                    for (
                      var n = arguments.length,
                        i = Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      i[o - 1] = arguments[o];
                    return r.produceWithPatches(t, function (r) {
                      return e.apply(void 0, [r].concat(i));
                    });
                  };
                var n,
                  i,
                  o = r.produce(e, t, function (e, r) {
                    (n = e), (i = r);
                  });
                return "undefined" != typeof Promise && o instanceof Promise
                  ? o.then(function (e) {
                      return [e, n, i];
                    })
                  : [o, n, i];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var r = e.prototype;
          return (
            (r.createDraft = function (e) {
              o(e) || n(8),
                i(e) &&
                  (i((r = e)) || n(22, r),
                  (e = (function e(r) {
                    if (!o(r)) return r;
                    var t,
                      n = r[I],
                      i = s(r);
                    if (n) {
                      if (!n.P && (n.i < 4 || !v("ES5").K(n))) return n.t;
                      (n.I = !0), (t = F(r, i)), (n.I = !1);
                    } else t = F(r, i);
                    return (
                      a(t, function (r, i) {
                        var o;
                        (n && (2 === s((o = n.t)) ? o.get(r) : o[r]) === i) ||
                          c(t, r, e(i));
                      }),
                      3 === i ? new Set(t) : t
                    );
                  })(r)));
              var r,
                t = x(this),
                l = V(this, e, void 0);
              return (l[I].C = !0), w(t), l;
            }),
            (r.finishDraft = function (e, r) {
              var t = (e && e[I]).A;
              return b(t, r), A(void 0, t);
            }),
            (r.setAutoFreeze = function (e) {
              this.D = e;
            }),
            (r.setUseProxies = function (e) {
              e && !B && n(20), (this.O = e);
            }),
            (r.applyPatches = function (e, r) {
              for (t = r.length - 1; t >= 0; t--) {
                var t,
                  n = r[t];
                if (0 === n.path.length && "replace" === n.op) {
                  e = n.value;
                  break;
                }
              }
              t > -1 && (r = r.slice(t + 1));
              var o = v("Patches").$;
              return i(e)
                ? o(e, r)
                : this.produce(e, function (e) {
                    return o(e, r);
                  });
            }),
            e
          );
        })())(),
        J = X.produce,
        Z =
          (X.produceWithPatches.bind(X),
          X.setAutoFreeze.bind(X),
          X.setUseProxies.bind(X),
          X.applyPatches.bind(X),
          X.createDraft.bind(X)),
        K = X.finishDraft.bind(X);
    },
    63817: function (e, r, t) {
      "use strict";
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ function n(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function i(e) {
        var r, t;
        return (
          !1 !== n(e) &&
          (void 0 === (r = e.constructor) ||
            (!1 !== n((t = r.prototype)) &&
              !1 !== t.hasOwnProperty("isPrototypeOf")))
        );
      }
      t.d(r, {
        P: function () {
          return i;
        },
      });
    },
    42567: function (e, r, t) {
      "use strict";
      t.d(r, {
        cI: function () {
          return eg;
        },
      });
      var n = t(78411),
        i = (e) => "checkbox" === e.type,
        o = (e) => e instanceof Date,
        a = (e) => null == e;
      let s = (e) => "object" == typeof e;
      var l = (e) => !a(e) && !Array.isArray(e) && s(e) && !o(e),
        c = (e) =>
          l(e) && e.target
            ? i(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        u = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
        p = (e, r) => e.has(u(r)),
        f = (e) => {
          let r = e.constructor && e.constructor.prototype;
          return l(r) && r.hasOwnProperty("isPrototypeOf");
        },
        d =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function m(e) {
        let r;
        let t = Array.isArray(e);
        if (e instanceof Date) r = new Date(e);
        else if (e instanceof Set) r = new Set(e);
        else if (
          !(!(d && (e instanceof Blob || e instanceof FileList)) && (t || l(e)))
        )
          return e;
        else if (((r = t ? [] : {}), t || f(e)))
          for (let t in e) e.hasOwnProperty(t) && (r[t] = m(e[t]));
        else r = e;
        return r;
      }
      var g = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        h = (e) => void 0 === e,
        v = (e, r, t) => {
          if (!r || !l(e)) return t;
          let n = g(r.split(/[,[\].]+?/)).reduce(
            (e, r) => (a(e) ? e : e[r]),
            e
          );
          return h(n) || n === e ? (h(e[r]) ? t : e[r]) : n;
        },
        b = (e) => "boolean" == typeof e;
      let y = { BLUR: "blur", FOCUS_OUT: "focusout" },
        w = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        x = {
          max: "max",
          min: "min",
          maxLength: "maxLength",
          minLength: "minLength",
          pattern: "pattern",
          required: "required",
          validate: "validate",
        };
      n.createContext(null);
      var q = (e, r, t, n = !0) => {
          let i = { defaultValues: r._defaultValues };
          for (let o in e)
            Object.defineProperty(i, o, {
              get: () => (
                r._proxyFormState[o] !== w.all &&
                  (r._proxyFormState[o] = !n || w.all),
                t && (t[o] = !0),
                e[o]
              ),
            });
          return i;
        },
        A = (e) => l(e) && !Object.keys(e).length,
        E = (e, r, t, n) => {
          t(e);
          let { name: i, ...o } = e;
          return (
            A(o) ||
            Object.keys(o).length >= Object.keys(r).length ||
            Object.keys(o).find((e) => r[e] === (!n || w.all))
          );
        },
        D = (e) => (Array.isArray(e) ? e : [e]),
        O = (e) => "string" == typeof e,
        k = (e, r, t, n, i) =>
          O(e)
            ? (n && r.watch.add(e), v(t, e, i))
            : Array.isArray(e)
            ? e.map((e) => (n && r.watch.add(e), v(t, e)))
            : (n && (r.watchAll = !0), t),
        S = (e) => /^\w*$/.test(e),
        L = (e) => g(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
        T = (e, r, t) => {
          let n = -1,
            i = S(r) ? [r] : L(r),
            o = i.length,
            a = o - 1;
          for (; ++n < o; ) {
            let r = i[n],
              o = t;
            if (n !== a) {
              let t = e[r];
              o = l(t) || Array.isArray(t) ? t : isNaN(+i[n + 1]) ? {} : [];
            }
            (e[r] = o), (e = e[r]);
          }
          return e;
        },
        V = (e, r, t, n, i) =>
          r
            ? {
                ...t[e],
                types: {
                  ...(t[e] && t[e].types ? t[e].types : {}),
                  [n]: i || !0,
                },
              }
            : {},
        F = (e) => ({
          isOnSubmit: !e || e === w.onSubmit,
          isOnBlur: e === w.onBlur,
          isOnChange: e === w.onChange,
          isOnAll: e === w.all,
          isOnTouch: e === w.onTouched,
        }),
        C = (e, r, t) =>
          !t &&
          (r.watchAll ||
            r.watch.has(e) ||
            [...r.watch].some(
              (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
            ));
      let R = (e, r, t, n) => {
        for (let i of t || Object.keys(e)) {
          let t = v(e, i);
          if (t) {
            let { _f: e, ...o } = t;
            if (e) {
              if (
                (e.refs && e.refs[0] && r(e.refs[0], i) && !n) ||
                (e.ref && r(e.ref, e.name) && !n)
              )
                break;
              R(o, r);
            } else l(o) && R(o, r);
          }
        }
      };
      var P = (e, r, t) => {
          let n = g(v(e, t));
          return T(n, "root", r[t]), T(e, t, n), e;
        },
        N = (e) => "file" === e.type,
        U = (e) => "function" == typeof e,
        B = (e) => {
          if (!d) return !1;
          let r = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement)
          );
        },
        j = (e) => O(e),
        _ = (e) => "radio" === e.type,
        I = (e) => e instanceof RegExp;
      let H = { value: !1, isValid: !1 },
        z = { value: !0, isValid: !0 };
      var M = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            let r = e
              .filter((e) => e && e.checked && !e.disabled)
              .map((e) => e.value);
            return { value: r, isValid: !!r.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !h(e[0].attributes.value)
              ? h(e[0].value) || "" === e[0].value
                ? z
                : { value: e[0].value, isValid: !0 }
              : z
            : H;
        }
        return H;
      };
      let G = { isValid: !1, value: null };
      var W = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, r) =>
                r && r.checked && !r.disabled
                  ? { isValid: !0, value: r.value }
                  : e,
              G
            )
          : G;
      function Y(e, r, t = "validate") {
        if (j(e) || (Array.isArray(e) && e.every(j)) || (b(e) && !e))
          return { type: t, message: j(e) ? e : "", ref: r };
      }
      var X = (e) => (l(e) && !I(e) ? e : { value: e, message: "" }),
        J = async (e, r, t, n, o) => {
          let {
              ref: s,
              refs: c,
              required: u,
              maxLength: p,
              minLength: f,
              min: d,
              max: m,
              pattern: g,
              validate: y,
              name: w,
              valueAsNumber: q,
              mount: E,
              disabled: D,
            } = e._f,
            k = v(r, w);
          if (!E || D) return {};
          let S = c ? c[0] : s,
            L = (e) => {
              n &&
                S.reportValidity &&
                (S.setCustomValidity(b(e) ? "" : e || ""), S.reportValidity());
            },
            T = {},
            F = _(s),
            C = i(s),
            R =
              ((q || N(s)) && h(s.value) && h(k)) ||
              (B(s) && "" === s.value) ||
              "" === k ||
              (Array.isArray(k) && !k.length),
            P = V.bind(null, w, t, T),
            H = (e, r, t, n = x.maxLength, i = x.minLength) => {
              let o = e ? r : t;
              T[w] = {
                type: e ? n : i,
                message: o,
                ref: s,
                ...P(e ? n : i, o),
              };
            };
          if (
            o
              ? !Array.isArray(k) || !k.length
              : u &&
                ((!(F || C) && (R || a(k))) ||
                  (b(k) && !k) ||
                  (C && !M(c).isValid) ||
                  (F && !W(c).isValid))
          ) {
            let { value: e, message: r } = j(u)
              ? { value: !!u, message: u }
              : X(u);
            if (
              e &&
              ((T[w] = {
                type: x.required,
                message: r,
                ref: S,
                ...P(x.required, r),
              }),
              !t)
            )
              return L(r), T;
          }
          if (!R && (!a(d) || !a(m))) {
            let e, r;
            let n = X(m),
              i = X(d);
            if (a(k) || isNaN(k)) {
              let t = s.valueAsDate || new Date(k),
                o = (e) => new Date(new Date().toDateString() + " " + e),
                a = "time" == s.type,
                l = "week" == s.type;
              O(n.value) &&
                k &&
                (e = a
                  ? o(k) > o(n.value)
                  : l
                  ? k > n.value
                  : t > new Date(n.value)),
                O(i.value) &&
                  k &&
                  (r = a
                    ? o(k) < o(i.value)
                    : l
                    ? k < i.value
                    : t < new Date(i.value));
            } else {
              let t = s.valueAsNumber || (k ? +k : k);
              a(n.value) || (e = t > n.value), a(i.value) || (r = t < i.value);
            }
            if ((e || r) && (H(!!e, n.message, i.message, x.max, x.min), !t))
              return L(T[w].message), T;
          }
          if ((p || f) && !R && (O(k) || (o && Array.isArray(k)))) {
            let e = X(p),
              r = X(f),
              n = !a(e.value) && k.length > +e.value,
              i = !a(r.value) && k.length < +r.value;
            if ((n || i) && (H(n, e.message, r.message), !t))
              return L(T[w].message), T;
          }
          if (g && !R && O(k)) {
            let { value: e, message: r } = X(g);
            if (
              I(e) &&
              !k.match(e) &&
              ((T[w] = {
                type: x.pattern,
                message: r,
                ref: s,
                ...P(x.pattern, r),
              }),
              !t)
            )
              return L(r), T;
          }
          if (y) {
            if (U(y)) {
              let e = Y(await y(k, r), S);
              if (e && ((T[w] = { ...e, ...P(x.validate, e.message) }), !t))
                return L(e.message), T;
            } else if (l(y)) {
              let e = {};
              for (let n in y) {
                if (!A(e) && !t) break;
                let i = Y(await y[n](k, r), S, n);
                i &&
                  ((e = { ...i, ...P(n, i.message) }),
                  L(i.message),
                  t && (T[w] = e));
              }
              if (!A(e) && ((T[w] = { ref: S, ...e }), !t)) return T;
            }
          }
          return L(!0), T;
        };
      function Z(e, r) {
        let t = Array.isArray(r) ? r : S(r) ? [r] : L(r),
          n =
            1 === t.length
              ? e
              : (function (e, r) {
                  let t = r.slice(0, -1).length,
                    n = 0;
                  for (; n < t; ) e = h(e) ? n++ : e[r[n++]];
                  return e;
                })(e, t),
          i = t.length - 1,
          o = t[i];
        return (
          n && delete n[o],
          0 !== i &&
            ((l(n) && A(n)) ||
              (Array.isArray(n) &&
                (function (e) {
                  for (let r in e)
                    if (e.hasOwnProperty(r) && !h(e[r])) return !1;
                  return !0;
                })(n))) &&
            Z(e, t.slice(0, -1)),
          e
        );
      }
      var K = () => {
          let e = [];
          return {
            get observers() {
              return e;
            },
            next: (r) => {
              for (let t of e) t.next && t.next(r);
            },
            subscribe: (r) => (
              e.push(r),
              {
                unsubscribe: () => {
                  e = e.filter((e) => e !== r);
                },
              }
            ),
            unsubscribe: () => {
              e = [];
            },
          };
        },
        $ = (e) => a(e) || !s(e);
      function Q(e, r) {
        if ($(e) || $(r)) return e === r;
        if (o(e) && o(r)) return e.getTime() === r.getTime();
        let t = Object.keys(e),
          n = Object.keys(r);
        if (t.length !== n.length) return !1;
        for (let i of t) {
          let t = e[i];
          if (!n.includes(i)) return !1;
          if ("ref" !== i) {
            let e = r[i];
            if (
              (o(t) && o(e)) ||
              (l(t) && l(e)) ||
              (Array.isArray(t) && Array.isArray(e))
                ? !Q(t, e)
                : t !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var ee = (e) => "select-multiple" === e.type,
        er = (e) => _(e) || i(e),
        et = (e) => B(e) && e.isConnected,
        en = (e) => {
          for (let r in e) if (U(e[r])) return !0;
          return !1;
        };
      function ei(e, r = {}) {
        let t = Array.isArray(e);
        if (l(e) || t)
          for (let t in e)
            Array.isArray(e[t]) || (l(e[t]) && !en(e[t]))
              ? ((r[t] = Array.isArray(e[t]) ? [] : {}), ei(e[t], r[t]))
              : a(e[t]) || (r[t] = !0);
        return r;
      }
      var eo = (e, r) =>
          (function e(r, t, n) {
            let i = Array.isArray(r);
            if (l(r) || i)
              for (let i in r)
                Array.isArray(r[i]) || (l(r[i]) && !en(r[i]))
                  ? h(t) || $(n[i])
                    ? (n[i] = Array.isArray(r[i])
                        ? ei(r[i], [])
                        : { ...ei(r[i]) })
                    : e(r[i], a(t) ? {} : t[i], n[i])
                  : (n[i] = !Q(r[i], t[i]));
            return n;
          })(e, r, ei(r)),
        ea = (e, { valueAsNumber: r, valueAsDate: t, setValueAs: n }) =>
          h(e)
            ? e
            : r
            ? "" === e
              ? NaN
              : e
              ? +e
              : e
            : t && O(e)
            ? new Date(e)
            : n
            ? n(e)
            : e;
      function es(e) {
        let r = e.ref;
        return (e.refs ? e.refs.every((e) => e.disabled) : r.disabled)
          ? void 0
          : N(r)
          ? r.files
          : _(r)
          ? W(e.refs).value
          : ee(r)
          ? [...r.selectedOptions].map(({ value: e }) => e)
          : i(r)
          ? M(e.refs).value
          : ea(h(r.value) ? e.ref.value : r.value, e);
      }
      var el = (e, r, t, n) => {
          let i = {};
          for (let t of e) {
            let e = v(r, t);
            e && T(i, t, e._f);
          }
          return {
            criteriaMode: t,
            names: [...e],
            fields: i,
            shouldUseNativeValidation: n,
          };
        },
        ec = (e) =>
          h(e)
            ? e
            : I(e)
            ? e.source
            : l(e)
            ? I(e.value)
              ? e.value.source
              : e.value
            : e,
        eu = (e) =>
          e.mount &&
          (e.required ||
            e.min ||
            e.max ||
            e.maxLength ||
            e.minLength ||
            e.pattern ||
            e.validate);
      function ep(e, r, t) {
        let n = v(e, t);
        if (n || S(t)) return { error: n, name: t };
        let i = t.split(".");
        for (; i.length; ) {
          let n = i.join("."),
            o = v(r, n),
            a = v(e, n);
          if (o && !Array.isArray(o) && t !== n) break;
          if (a && a.type) return { name: n, error: a };
          i.pop();
        }
        return { name: t };
      }
      var ef = (e, r, t, n, i) =>
          !i.isOnAll &&
          (!t && i.isOnTouch
            ? !(r || e)
            : (t ? n.isOnBlur : i.isOnBlur)
            ? !e
            : (t ? !n.isOnChange : !i.isOnChange) || e),
        ed = (e, r) => !g(v(e, r)).length && Z(e, r);
      let em = {
        mode: w.onSubmit,
        reValidateMode: w.onChange,
        shouldFocusError: !0,
      };
      function eg(e = {}) {
        let r = n.useRef(),
          t = n.useRef(),
          [s, u] = n.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: U(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            defaultValues: U(e.defaultValues) ? void 0 : e.defaultValues,
          });
        r.current ||
          (r.current = {
            ...(function (e = {}) {
              let r,
                t = { ...em, ...e },
                n = {
                  submitCount: 0,
                  isDirty: !1,
                  isLoading: U(t.defaultValues),
                  isValidating: !1,
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  touchedFields: {},
                  dirtyFields: {},
                  validatingFields: {},
                  errors: t.errors || {},
                  disabled: t.disabled || !1,
                },
                s = {},
                u =
                  ((l(t.defaultValues) || l(t.values)) &&
                    m(t.defaultValues || t.values)) ||
                  {},
                f = t.shouldUnregister ? {} : m(u),
                x = { action: !1, mount: !1, watch: !1 },
                q = {
                  mount: new Set(),
                  unMount: new Set(),
                  array: new Set(),
                  watch: new Set(),
                },
                E = 0,
                S = {
                  isDirty: !1,
                  dirtyFields: !1,
                  validatingFields: !1,
                  touchedFields: !1,
                  isValidating: !1,
                  isValid: !1,
                  errors: !1,
                },
                L = { values: K(), array: K(), state: K() },
                V = F(t.mode),
                j = F(t.reValidateMode),
                _ = t.criteriaMode === w.all,
                I = (e) => (r) => {
                  clearTimeout(E), (E = setTimeout(e, r));
                },
                H = async (e) => {
                  if (S.isValid || e) {
                    let e = t.resolver
                      ? A((await X()).errors)
                      : await ei(s, !0);
                    e !== n.isValid && L.state.next({ isValid: e });
                  }
                },
                z = (e, r) => {
                  (S.isValidating || S.validatingFields) &&
                    ((e || Array.from(q.mount)).forEach((e) => {
                      e &&
                        (r
                          ? T(n.validatingFields, e, r)
                          : Z(n.validatingFields, e));
                    }),
                    L.state.next({
                      validatingFields: n.validatingFields,
                      isValidating: !A(n.validatingFields),
                    }));
                },
                M = (e, r) => {
                  T(n.errors, e, r), L.state.next({ errors: n.errors });
                },
                G = (e, r, t, n) => {
                  let i = v(s, e);
                  if (i) {
                    let o = v(f, e, h(t) ? v(u, e) : t);
                    h(o) || (n && n.defaultChecked) || r
                      ? T(f, e, r ? o : es(i._f))
                      : ev(e, o),
                      x.mount && H();
                  }
                },
                W = (e, r, t, i, o) => {
                  let a = !1,
                    l = !1,
                    c = { name: e },
                    p = !!(v(s, e) && v(s, e)._f.disabled);
                  if (!t || i) {
                    S.isDirty &&
                      ((l = n.isDirty),
                      (n.isDirty = c.isDirty = eg()),
                      (a = l !== c.isDirty));
                    let t = p || Q(v(u, e), r);
                    (l = !!(!p && v(n.dirtyFields, e))),
                      t || p ? Z(n.dirtyFields, e) : T(n.dirtyFields, e, !0),
                      (c.dirtyFields = n.dirtyFields),
                      (a = a || (S.dirtyFields && !t !== l));
                  }
                  if (t) {
                    let r = v(n.touchedFields, e);
                    r ||
                      (T(n.touchedFields, e, t),
                      (c.touchedFields = n.touchedFields),
                      (a = a || (S.touchedFields && r !== t)));
                  }
                  return a && o && L.state.next(c), a ? c : {};
                },
                Y = (t, i, o, a) => {
                  let s = v(n.errors, t),
                    l = S.isValid && b(i) && n.isValid !== i;
                  if (
                    (e.delayError && o
                      ? (r = I(() => M(t, o)))(e.delayError)
                      : (clearTimeout(E),
                        (r = null),
                        o ? T(n.errors, t, o) : Z(n.errors, t)),
                    (o ? !Q(s, o) : s) || !A(a) || l)
                  ) {
                    let e = {
                      ...a,
                      ...(l && b(i) ? { isValid: i } : {}),
                      errors: n.errors,
                      name: t,
                    };
                    (n = { ...n, ...e }), L.state.next(e);
                  }
                },
                X = async (e) => {
                  z(e, !0);
                  let r = await t.resolver(
                    f,
                    t.context,
                    el(
                      e || q.mount,
                      s,
                      t.criteriaMode,
                      t.shouldUseNativeValidation
                    )
                  );
                  return z(e), r;
                },
                en = async (e) => {
                  let { errors: r } = await X(e);
                  if (e)
                    for (let t of e) {
                      let e = v(r, t);
                      e ? T(n.errors, t, e) : Z(n.errors, t);
                    }
                  else n.errors = r;
                  return r;
                },
                ei = async (e, r, i = { valid: !0 }) => {
                  for (let o in e) {
                    let a = e[o];
                    if (a) {
                      let { _f: e, ...s } = a;
                      if (e) {
                        let s = q.array.has(e.name);
                        z([o], !0);
                        let l = await J(
                          a,
                          f,
                          _,
                          t.shouldUseNativeValidation && !r,
                          s
                        );
                        if ((z([o]), l[e.name] && ((i.valid = !1), r))) break;
                        r ||
                          (v(l, e.name)
                            ? s
                              ? P(n.errors, l, e.name)
                              : T(n.errors, e.name, l[e.name])
                            : Z(n.errors, e.name));
                      }
                      s && (await ei(s, r, i));
                    }
                  }
                  return i.valid;
                },
                eg = (e, r) => (e && r && T(f, e, r), !Q(eA(), u)),
                eh = (e, r, t) =>
                  k(
                    e,
                    q,
                    { ...(x.mount ? f : h(r) ? u : O(e) ? { [e]: r } : r) },
                    t,
                    r
                  ),
                ev = (e, r, t = {}) => {
                  let n = v(s, e),
                    o = r;
                  if (n) {
                    let t = n._f;
                    t &&
                      (t.disabled || T(f, e, ea(r, t)),
                      (o = B(t.ref) && a(r) ? "" : r),
                      ee(t.ref)
                        ? [...t.ref.options].forEach(
                            (e) => (e.selected = o.includes(e.value))
                          )
                        : t.refs
                        ? i(t.ref)
                          ? t.refs.length > 1
                            ? t.refs.forEach(
                                (e) =>
                                  (!e.defaultChecked || !e.disabled) &&
                                  (e.checked = Array.isArray(o)
                                    ? !!o.find((r) => r === e.value)
                                    : o === e.value)
                              )
                            : t.refs[0] && (t.refs[0].checked = !!o)
                          : t.refs.forEach((e) => (e.checked = e.value === o))
                        : N(t.ref)
                        ? (t.ref.value = "")
                        : ((t.ref.value = o),
                          t.ref.type ||
                            L.values.next({ name: e, values: { ...f } })));
                  }
                  (t.shouldDirty || t.shouldTouch) &&
                    W(e, o, t.shouldTouch, t.shouldDirty, !0),
                    t.shouldValidate && eq(e);
                },
                eb = (e, r, t) => {
                  for (let n in r) {
                    let i = r[n],
                      a = `${e}.${n}`,
                      l = v(s, a);
                    (!q.array.has(e) && $(i) && (!l || l._f)) || o(i)
                      ? ev(a, i, t)
                      : eb(a, i, t);
                  }
                },
                ey = (e, r, t = {}) => {
                  let i = v(s, e),
                    o = q.array.has(e),
                    l = m(r);
                  T(f, e, l),
                    o
                      ? (L.array.next({ name: e, values: { ...f } }),
                        (S.isDirty || S.dirtyFields) &&
                          t.shouldDirty &&
                          L.state.next({
                            name: e,
                            dirtyFields: eo(u, f),
                            isDirty: eg(e, l),
                          }))
                      : !i || i._f || a(l)
                      ? ev(e, l, t)
                      : eb(e, l, t),
                    C(e, q) && L.state.next({ ...n }),
                    L.values.next({
                      name: x.mount ? e : void 0,
                      values: { ...f },
                    });
                },
                ew = async (e) => {
                  x.mount = !0;
                  let i = e.target,
                    o = i.name,
                    a = !0,
                    l = v(s, o),
                    u = (e) => {
                      a = Number.isNaN(e) || e === v(f, o, e);
                    };
                  if (l) {
                    let p, d;
                    let m = i.type ? es(l._f) : c(e),
                      g = e.type === y.BLUR || e.type === y.FOCUS_OUT,
                      h =
                        (!eu(l._f) &&
                          !t.resolver &&
                          !v(n.errors, o) &&
                          !l._f.deps) ||
                        ef(g, v(n.touchedFields, o), n.isSubmitted, j, V),
                      b = C(o, q, g);
                    T(f, o, m),
                      g
                        ? (l._f.onBlur && l._f.onBlur(e), r && r(0))
                        : l._f.onChange && l._f.onChange(e);
                    let w = W(o, m, g, !1),
                      x = !A(w) || b;
                    if (
                      (g ||
                        L.values.next({
                          name: o,
                          type: e.type,
                          values: { ...f },
                        }),
                      h)
                    )
                      return (
                        S.isValid && H(),
                        x && L.state.next({ name: o, ...(b ? {} : w) })
                      );
                    if ((!g && b && L.state.next({ ...n }), t.resolver)) {
                      let { errors: e } = await X([o]);
                      if ((u(m), a)) {
                        let r = ep(n.errors, s, o),
                          t = ep(e, s, r.name || o);
                        (p = t.error), (o = t.name), (d = A(e));
                      }
                    } else
                      z([o], !0),
                        (p = (await J(l, f, _, t.shouldUseNativeValidation))[
                          o
                        ]),
                        z([o]),
                        u(m),
                        a &&
                          (p ? (d = !1) : S.isValid && (d = await ei(s, !0)));
                    a && (l._f.deps && eq(l._f.deps), Y(o, d, p, w));
                  }
                },
                ex = (e, r) => {
                  if (v(n.errors, r) && e.focus) return e.focus(), 1;
                },
                eq = async (e, r = {}) => {
                  let i, o;
                  let a = D(e);
                  if (t.resolver) {
                    let r = await en(h(e) ? e : a);
                    (i = A(r)), (o = e ? !a.some((e) => v(r, e)) : i);
                  } else
                    e
                      ? ((o = (
                          await Promise.all(
                            a.map(async (e) => {
                              let r = v(s, e);
                              return await ei(r && r._f ? { [e]: r } : r);
                            })
                          )
                        ).every(Boolean)) ||
                          n.isValid) &&
                        H()
                      : (o = i = await ei(s));
                  return (
                    L.state.next({
                      ...(!O(e) || (S.isValid && i !== n.isValid)
                        ? {}
                        : { name: e }),
                      ...(t.resolver || !e ? { isValid: i } : {}),
                      errors: n.errors,
                    }),
                    r.shouldFocus && !o && R(s, ex, e ? a : q.mount),
                    o
                  );
                },
                eA = (e) => {
                  let r = { ...(x.mount ? f : u) };
                  return h(e) ? r : O(e) ? v(r, e) : e.map((e) => v(r, e));
                },
                eE = (e, r) => ({
                  invalid: !!v((r || n).errors, e),
                  isDirty: !!v((r || n).dirtyFields, e),
                  isTouched: !!v((r || n).touchedFields, e),
                  isValidating: !!v((r || n).validatingFields, e),
                  error: v((r || n).errors, e),
                }),
                eD = (e, r, t) => {
                  let i = (v(s, e, { _f: {} })._f || {}).ref;
                  T(n.errors, e, { ...r, ref: i }),
                    L.state.next({ name: e, errors: n.errors, isValid: !1 }),
                    t && t.shouldFocus && i && i.focus && i.focus();
                },
                eO = (e, r = {}) => {
                  for (let i of e ? D(e) : q.mount)
                    q.mount.delete(i),
                      q.array.delete(i),
                      r.keepValue || (Z(s, i), Z(f, i)),
                      r.keepError || Z(n.errors, i),
                      r.keepDirty || Z(n.dirtyFields, i),
                      r.keepTouched || Z(n.touchedFields, i),
                      r.keepIsValidating || Z(n.validatingFields, i),
                      t.shouldUnregister || r.keepDefaultValue || Z(u, i);
                  L.values.next({ values: { ...f } }),
                    L.state.next({
                      ...n,
                      ...(r.keepDirty ? { isDirty: eg() } : {}),
                    }),
                    r.keepIsValid || H();
                },
                ek = ({
                  disabled: e,
                  name: r,
                  field: t,
                  fields: n,
                  value: i,
                }) => {
                  if (b(e)) {
                    let o = e ? void 0 : h(i) ? es(t ? t._f : v(n, r)._f) : i;
                    T(f, r, o), W(r, o, !1, !1, !0);
                  }
                },
                eS = (e, r = {}) => {
                  let n = v(s, e),
                    i = b(r.disabled);
                  return (
                    T(s, e, {
                      ...(n || {}),
                      _f: {
                        ...(n && n._f ? n._f : { ref: { name: e } }),
                        name: e,
                        mount: !0,
                        ...r,
                      },
                    }),
                    q.mount.add(e),
                    n
                      ? ek({
                          field: n,
                          disabled: r.disabled,
                          name: e,
                          value: r.value,
                        })
                      : G(e, !0, r.value),
                    {
                      ...(i ? { disabled: r.disabled } : {}),
                      ...(t.progressive
                        ? {
                            required: !!r.required,
                            min: ec(r.min),
                            max: ec(r.max),
                            minLength: ec(r.minLength),
                            maxLength: ec(r.maxLength),
                            pattern: ec(r.pattern),
                          }
                        : {}),
                      name: e,
                      onChange: ew,
                      onBlur: ew,
                      ref: (i) => {
                        if (i) {
                          eS(e, r), (n = v(s, e));
                          let t =
                              (h(i.value) &&
                                i.querySelectorAll &&
                                i.querySelectorAll(
                                  "input,select,textarea"
                                )[0]) ||
                              i,
                            o = er(t),
                            a = n._f.refs || [];
                          (o ? a.find((e) => e === t) : t === n._f.ref) ||
                            (T(s, e, {
                              _f: {
                                ...n._f,
                                ...(o
                                  ? {
                                      refs: [
                                        ...a.filter(et),
                                        t,
                                        ...(Array.isArray(v(u, e)) ? [{}] : []),
                                      ],
                                      ref: { type: t.type, name: e },
                                    }
                                  : { ref: t }),
                              },
                            }),
                            G(e, !1, void 0, t));
                        } else
                          (n = v(s, e, {}))._f && (n._f.mount = !1),
                            (t.shouldUnregister || r.shouldUnregister) &&
                              !(p(q.array, e) && x.action) &&
                              q.unMount.add(e);
                      },
                    }
                  );
                },
                eL = () => t.shouldFocusError && R(s, ex, q.mount),
                eT = (e, r) => async (i) => {
                  let o;
                  i &&
                    (i.preventDefault && i.preventDefault(),
                    i.persist && i.persist());
                  let a = m(f);
                  if ((L.state.next({ isSubmitting: !0 }), t.resolver)) {
                    let { errors: e, values: r } = await X();
                    (n.errors = e), (a = r);
                  } else await ei(s);
                  if ((Z(n.errors, "root"), A(n.errors))) {
                    L.state.next({ errors: {} });
                    try {
                      await e(a, i);
                    } catch (e) {
                      o = e;
                    }
                  } else
                    r && (await r({ ...n.errors }, i)), eL(), setTimeout(eL);
                  if (
                    (L.state.next({
                      isSubmitted: !0,
                      isSubmitting: !1,
                      isSubmitSuccessful: A(n.errors) && !o,
                      submitCount: n.submitCount + 1,
                      errors: n.errors,
                    }),
                    o)
                  )
                    throw o;
                },
                eV = (r, t = {}) => {
                  let i = r ? m(r) : u,
                    o = m(i),
                    a = A(r),
                    l = a ? u : o;
                  if ((t.keepDefaultValues || (u = i), !t.keepValues)) {
                    if (t.keepDirtyValues)
                      for (let e of q.mount)
                        v(n.dirtyFields, e) ? T(l, e, v(f, e)) : ey(e, v(l, e));
                    else {
                      if (d && h(r))
                        for (let e of q.mount) {
                          let r = v(s, e);
                          if (r && r._f) {
                            let e = Array.isArray(r._f.refs)
                              ? r._f.refs[0]
                              : r._f.ref;
                            if (B(e)) {
                              let r = e.closest("form");
                              if (r) {
                                r.reset();
                                break;
                              }
                            }
                          }
                        }
                      s = {};
                    }
                    (f = e.shouldUnregister
                      ? t.keepDefaultValues
                        ? m(u)
                        : {}
                      : m(l)),
                      L.array.next({ values: { ...l } }),
                      L.values.next({ values: { ...l } });
                  }
                  (q = {
                    mount: t.keepDirtyValues ? q.mount : new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    watch: new Set(),
                    watchAll: !1,
                    focus: "",
                  }),
                    (x.mount =
                      !S.isValid || !!t.keepIsValid || !!t.keepDirtyValues),
                    (x.watch = !!e.shouldUnregister),
                    L.state.next({
                      submitCount: t.keepSubmitCount ? n.submitCount : 0,
                      isDirty:
                        !a &&
                        (t.keepDirty
                          ? n.isDirty
                          : !!(t.keepDefaultValues && !Q(r, u))),
                      isSubmitted: !!t.keepIsSubmitted && n.isSubmitted,
                      dirtyFields: a
                        ? []
                        : t.keepDirtyValues
                        ? t.keepDefaultValues && f
                          ? eo(u, f)
                          : n.dirtyFields
                        : t.keepDefaultValues && r
                        ? eo(u, r)
                        : {},
                      touchedFields: t.keepTouched ? n.touchedFields : {},
                      errors: t.keepErrors ? n.errors : {},
                      isSubmitSuccessful:
                        !!t.keepIsSubmitSuccessful && n.isSubmitSuccessful,
                      isSubmitting: !1,
                    });
                },
                eF = (e, r) => eV(U(e) ? e(f) : e, r);
              return {
                control: {
                  register: eS,
                  unregister: eO,
                  getFieldState: eE,
                  handleSubmit: eT,
                  setError: eD,
                  _executeSchema: X,
                  _getWatch: eh,
                  _getDirty: eg,
                  _updateValid: H,
                  _removeUnmounted: () => {
                    for (let e of q.unMount) {
                      let r = v(s, e);
                      r &&
                        (r._f.refs
                          ? r._f.refs.every((e) => !et(e))
                          : !et(r._f.ref)) &&
                        eO(e);
                    }
                    q.unMount = new Set();
                  },
                  _updateFieldArray: (e, r = [], t, i, o = !0, a = !0) => {
                    if (i && t) {
                      if (((x.action = !0), a && Array.isArray(v(s, e)))) {
                        let r = t(v(s, e), i.argA, i.argB);
                        o && T(s, e, r);
                      }
                      if (a && Array.isArray(v(n.errors, e))) {
                        let r = t(v(n.errors, e), i.argA, i.argB);
                        o && T(n.errors, e, r), ed(n.errors, e);
                      }
                      if (
                        S.touchedFields &&
                        a &&
                        Array.isArray(v(n.touchedFields, e))
                      ) {
                        let r = t(v(n.touchedFields, e), i.argA, i.argB);
                        o && T(n.touchedFields, e, r);
                      }
                      S.dirtyFields && (n.dirtyFields = eo(u, f)),
                        L.state.next({
                          name: e,
                          isDirty: eg(e, r),
                          dirtyFields: n.dirtyFields,
                          errors: n.errors,
                          isValid: n.isValid,
                        });
                    } else T(f, e, r);
                  },
                  _updateDisabledField: ek,
                  _getFieldArray: (r) =>
                    g(
                      v(
                        x.mount ? f : u,
                        r,
                        e.shouldUnregister ? v(u, r, []) : []
                      )
                    ),
                  _reset: eV,
                  _resetDefaultValues: () =>
                    U(t.defaultValues) &&
                    t.defaultValues().then((e) => {
                      eF(e, t.resetOptions), L.state.next({ isLoading: !1 });
                    }),
                  _updateFormState: (e) => {
                    n = { ...n, ...e };
                  },
                  _disableForm: (e) => {
                    b(e) &&
                      (L.state.next({ disabled: e }),
                      R(
                        s,
                        (r, t) => {
                          let n = e,
                            i = v(s, t);
                          i && b(i._f.disabled) && (n || (n = i._f.disabled)),
                            (r.disabled = n);
                        },
                        0,
                        !1
                      ));
                  },
                  _subjects: L,
                  _proxyFormState: S,
                  _setErrors: (e) => {
                    (n.errors = e),
                      L.state.next({ errors: n.errors, isValid: !1 });
                  },
                  get _fields() {
                    return s;
                  },
                  get _formValues() {
                    return f;
                  },
                  get _state() {
                    return x;
                  },
                  set _state(value) {
                    x = value;
                  },
                  get _defaultValues() {
                    return u;
                  },
                  get _names() {
                    return q;
                  },
                  set _names(value) {
                    q = value;
                  },
                  get _formState() {
                    return n;
                  },
                  set _formState(value) {
                    n = value;
                  },
                  get _options() {
                    return t;
                  },
                  set _options(value) {
                    t = { ...t, ...value };
                  },
                },
                trigger: eq,
                register: eS,
                handleSubmit: eT,
                watch: (e, r) =>
                  U(e)
                    ? L.values.subscribe({ next: (t) => e(eh(void 0, r), t) })
                    : eh(e, r, !0),
                setValue: ey,
                getValues: eA,
                reset: eF,
                resetField: (e, r = {}) => {
                  v(s, e) &&
                    (h(r.defaultValue)
                      ? ey(e, m(v(u, e)))
                      : (ey(e, r.defaultValue), T(u, e, m(r.defaultValue))),
                    r.keepTouched || Z(n.touchedFields, e),
                    r.keepDirty ||
                      (Z(n.dirtyFields, e),
                      (n.isDirty = r.defaultValue ? eg(e, m(v(u, e))) : eg())),
                    !r.keepError && (Z(n.errors, e), S.isValid && H()),
                    L.state.next({ ...n }));
                },
                clearErrors: (e) => {
                  e && D(e).forEach((e) => Z(n.errors, e)),
                    L.state.next({ errors: e ? n.errors : {} });
                },
                unregister: eO,
                setError: eD,
                setFocus: (e, r = {}) => {
                  let t = v(s, e),
                    n = t && t._f;
                  if (n) {
                    let e = n.refs ? n.refs[0] : n.ref;
                    e.focus && (e.focus(), r.shouldSelect && e.select());
                  }
                },
                getFieldState: eE,
              };
            })(e),
            formState: s,
          });
        let f = r.current.control;
        return (
          (f._options = e),
          !(function (e) {
            let r = n.useRef(e);
            (r.current = e),
              n.useEffect(() => {
                let t =
                  !e.disabled &&
                  r.current.subject &&
                  r.current.subject.subscribe({ next: r.current.next });
                return () => {
                  t && t.unsubscribe();
                };
              }, [e.disabled]);
          })({
            subject: f._subjects.state,
            next: (e) => {
              E(e, f._proxyFormState, f._updateFormState, !0) &&
                u({ ...f._formState });
            },
          }),
          n.useEffect(() => f._disableForm(e.disabled), [f, e.disabled]),
          n.useEffect(() => {
            if (f._proxyFormState.isDirty) {
              let e = f._getDirty();
              e !== s.isDirty && f._subjects.state.next({ isDirty: e });
            }
          }, [f, s.isDirty]),
          n.useEffect(() => {
            e.values && !Q(e.values, t.current)
              ? (f._reset(e.values, f._options.resetOptions),
                (t.current = e.values),
                u((e) => ({ ...e })))
              : f._resetDefaultValues();
          }, [e.values, f]),
          n.useEffect(() => {
            e.errors && f._setErrors(e.errors);
          }, [e.errors, f]),
          n.useEffect(() => {
            f._state.mount || (f._updateValid(), (f._state.mount = !0)),
              f._state.watch &&
                ((f._state.watch = !1),
                f._subjects.state.next({ ...f._formState })),
              f._removeUnmounted();
          }),
          n.useEffect(() => {
            e.shouldUnregister &&
              f._subjects.values.next({ values: f._getWatch() });
          }, [e.shouldUnregister, f]),
          (r.current.formState = q(s, f)),
          r.current
        );
      }
    },
  },
]);
