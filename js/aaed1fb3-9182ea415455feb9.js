"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [421],
  {
    39403: function (u, e, t) {
      t.d(e, {
        xv: function () {
          return uF;
        },
      });
      var r,
        n,
        D = t(63817),
        a = t(65155);
      function i(u, e, t) {
        return (
          e in u
            ? Object.defineProperty(u, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (u[e] = t),
          u
        );
      }
      var o = new WeakMap(),
        s = new WeakMap();
      new WeakMap();
      var C = new WeakMap(),
        B = new WeakMap(),
        l = new WeakMap(),
        c = new WeakMap();
      function f(u, e) {
        if (null == u) return {};
        var t,
          r,
          n = (function (u, e) {
            if (null == u) return {};
            var t,
              r,
              n = {},
              D = Object.keys(u);
            for (r = 0; r < D.length; r++)
              (t = D[r]), e.indexOf(t) >= 0 || (n[t] = u[t]);
            return n;
          })(u, e);
        if (Object.getOwnPropertySymbols) {
          var D = Object.getOwnPropertySymbols(u);
          for (r = 0; r < D.length; r++)
            (t = D[r]),
              !(e.indexOf(t) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(u, t) &&
                (n[t] = u[t]);
        }
        return n;
      }
      var A = function (u) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            t = !e,
            r = e ? g(u) : u,
            D = n.None,
            a = n.None,
            i = 0,
            o = null;
          for (var s of r) {
            var C = s.codePointAt(0);
            if (!C) break;
            var B = R(s, C);
            if (
              (([D, a] = t ? [a, B] : [B, D]),
              ((D & n.ZWJ) != 0 &&
                (a & n.ExtPict) != 0 &&
                !(t
                  ? q(u.substring(0, i))
                  : q(u.substring(0, u.length - i)))) ||
                ((D & n.RI) != 0 &&
                  (a & n.RI) != 0 &&
                  !(o =
                    null !== o
                      ? !o
                      : !!t || V(u.substring(0, u.length - i)))) ||
                (D !== n.None &&
                  a !== n.None &&
                  (function (u, e) {
                    return (
                      -1 ===
                      T.findIndex((t) => (u & t[0]) != 0 && (e & t[1]) != 0)
                    );
                  })(D, a)))
            )
              break;
            i += s.length;
          }
          return i || 1;
        },
        F = /\s/,
        h =
          /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        E = /['\u2018\u2019]/,
        p = function (u) {
          for (
            var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t = 0,
              r = !1;
            u.length > 0;

          ) {
            var n = A(u, e),
              [D, a] = d(u, n, e);
            if (v(D, a, e)) (r = !0), (t += n);
            else if (r) break;
            else t += n;
            u = a;
          }
          return t;
        },
        d = (u, e, t) => {
          if (t) {
            var r = u.length - e;
            return [u.slice(r, u.length), u.slice(0, r)];
          }
          return [u.slice(0, e), u.slice(e)];
        },
        v = function u(e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (F.test(e)) return !1;
          if (E.test(e)) {
            var n = A(t, r),
              [D, a] = d(t, n, r);
            if (u(D, a, r)) return !0;
          }
          return !h.test(e);
        },
        g = function* (u) {
          for (var e = u.length - 1, t = 0; t < u.length; t++) {
            var r = u.charAt(e - t);
            if (y(r.charCodeAt(0))) {
              var n = u.charAt(e - t - 1);
              if (m(n.charCodeAt(0))) {
                yield n + r, t++;
                continue;
              }
            }
            yield r;
          }
        },
        m = (u) => u >= 55296 && u <= 56319,
        y = (u) => u >= 56320 && u <= 57343;
      ((r = n || (n = {}))[(r.None = 0)] = "None"),
        (r[(r.Extend = 1)] = "Extend"),
        (r[(r.ZWJ = 2)] = "ZWJ"),
        (r[(r.RI = 4)] = "RI"),
        (r[(r.Prepend = 8)] = "Prepend"),
        (r[(r.SpacingMark = 16)] = "SpacingMark"),
        (r[(r.L = 32)] = "L"),
        (r[(r.V = 64)] = "V"),
        (r[(r.T = 128)] = "T"),
        (r[(r.LV = 256)] = "LV"),
        (r[(r.LVT = 512)] = "LVT"),
        (r[(r.ExtPict = 1024)] = "ExtPict"),
        (r[(r.Any = 2048)] = "Any");
      var b =
          /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
        w =
          /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
        O =
          /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
        x = /^[\u1100-\u115F\uA960-\uA97C]$/,
        P = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
        k = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
        j =
          /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
        N =
          /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
        _ =
          /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
        R = (u, e) => {
          var t = n.Any;
          return (
            -1 !== u.search(b) && (t |= n.Extend),
            8205 === e && (t |= n.ZWJ),
            e >= 127462 && e <= 127487 && (t |= n.RI),
            -1 !== u.search(w) && (t |= n.Prepend),
            -1 !== u.search(O) && (t |= n.SpacingMark),
            -1 !== u.search(x) && (t |= n.L),
            -1 !== u.search(P) && (t |= n.V),
            -1 !== u.search(k) && (t |= n.T),
            -1 !== u.search(j) && (t |= n.LV),
            -1 !== u.search(N) && (t |= n.LVT),
            -1 !== u.search(_) && (t |= n.ExtPict),
            t
          );
        },
        T = [
          [n.L, n.L | n.V | n.LV | n.LVT],
          [n.LV | n.V, n.V | n.T],
          [n.LVT | n.T, n.T],
          [n.Any, n.Extend | n.ZWJ],
          [n.Any, n.SpacingMark],
          [n.Prepend, n.Any],
          [n.ZWJ, n.ExtPict],
          [n.RI, n.RI],
        ],
        S =
          /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
        q = (u) => -1 !== u.search(S),
        I = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
        V = (u) => {
          var e = u.match(I);
          return null !== e && (e[0].length / 2) % 2 == 1;
        },
        z = (u) => (0, D.P)(u) && X.isNodeList(u.children) && !U.isEditor(u),
        L = {
          isAncestor: (u) => (0, D.P)(u) && X.isNodeList(u.children),
          isElement: z,
          isElementList: (u) =>
            Array.isArray(u) && u.every((u) => L.isElement(u)),
          isElementProps: (u) => void 0 !== u.children,
          isElementType: function (u, e) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "type";
            return z(u) && u[t] === e;
          },
          matches(u, e) {
            for (var t in e) if ("children" !== t && u[t] !== e[t]) return !1;
            return !0;
          },
        },
        M = ["text"],
        W = ["text"];
      function $(u, e) {
        var t = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(u, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function J(u) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? $(Object(t), !0).forEach(function (e) {
                i(u, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
            : $(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  u,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return u;
      }
      var Z = new WeakMap(),
        U = {
          above(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                voids: t = !1,
                mode: r = "lowest",
                at: n = u.selection,
                match: D,
              } = e;
            if (n) {
              var a = U.path(u, n);
              for (var [i, o] of U.levels(u, {
                at: a,
                voids: t,
                match: D,
                reverse: "lowest" === r,
              }))
                if (!uF.isText(i)) {
                  if (uo.isRange(n)) {
                    if (
                      ut.isAncestor(o, n.anchor.path) &&
                      ut.isAncestor(o, n.focus.path)
                    )
                      return [i, o];
                  } else if (!ut.equals(a, o)) return [i, o];
                }
            }
          },
          addMark(u, e, t) {
            u.addMark(e, t);
          },
          after(u, e) {
            var t,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = U.point(u, e, { edge: "end" }),
              D = U.end(u, []),
              { distance: a = 1 } = r,
              i = 0;
            for (var o of U.positions(
              u,
              J(J({}, r), {}, { at: { anchor: n, focus: D } })
            )) {
              if (i > a) break;
              0 !== i && (t = o), i++;
            }
            return t;
          },
          before(u, e) {
            var t,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = U.start(u, []),
              D = U.point(u, e, { edge: "start" }),
              { distance: a = 1 } = r,
              i = 0;
            for (var o of U.positions(
              u,
              J(J({}, r), {}, { at: { anchor: n, focus: D }, reverse: !0 })
            )) {
              if (i > a) break;
              0 !== i && (t = o), i++;
            }
            return t;
          },
          deleteBackward(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: t = "character" } = e;
            u.deleteBackward(t);
          },
          deleteForward(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: t = "character" } = e;
            u.deleteForward(t);
          },
          deleteFragment(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { direction: t = "forward" } = e;
            u.deleteFragment(t);
          },
          edges: (u, e) => [U.start(u, e), U.end(u, e)],
          end: (u, e) => U.point(u, e, { edge: "end" }),
          first(u, e) {
            var t = U.path(u, e, { edge: "start" });
            return U.node(u, t);
          },
          fragment(u, e) {
            var t = U.range(u, e);
            return X.fragment(u, t);
          },
          hasBlocks: (u, e) =>
            e.children.some((e) => L.isElement(e) && U.isBlock(u, e)),
          hasInlines: (u, e) =>
            e.children.some((e) => uF.isText(e) || U.isInline(u, e)),
          hasTexts: (u, e) => e.children.every((u) => uF.isText(u)),
          insertBreak(u) {
            u.insertBreak();
          },
          insertSoftBreak(u) {
            u.insertSoftBreak();
          },
          insertFragment(u, e) {
            u.insertFragment(e);
          },
          insertNode(u, e) {
            u.insertNode(e);
          },
          insertText(u, e) {
            u.insertText(e);
          },
          isBlock: (u, e) => !u.isInline(e),
          isEditor(u) {
            var e = Z.get(u);
            if (void 0 !== e) return e;
            if (!(0, D.P)(u)) return !1;
            var t =
              "function" == typeof u.addMark &&
              "function" == typeof u.apply &&
              "function" == typeof u.deleteBackward &&
              "function" == typeof u.deleteForward &&
              "function" == typeof u.deleteFragment &&
              "function" == typeof u.insertBreak &&
              "function" == typeof u.insertSoftBreak &&
              "function" == typeof u.insertFragment &&
              "function" == typeof u.insertNode &&
              "function" == typeof u.insertText &&
              "function" == typeof u.isInline &&
              "function" == typeof u.isVoid &&
              "function" == typeof u.normalizeNode &&
              "function" == typeof u.onChange &&
              "function" == typeof u.removeMark &&
              "function" == typeof u.getDirtyPaths &&
              (null === u.marks || (0, D.P)(u.marks)) &&
              (null === u.selection || uo.isRange(u.selection)) &&
              X.isNodeList(u.children) &&
              ue.isOperationList(u.operations);
            return Z.set(u, t), t;
          },
          isEnd(u, e, t) {
            var r = U.end(u, t);
            return uD.equals(e, r);
          },
          isEdge: (u, e, t) => U.isStart(u, e, t) || U.isEnd(u, e, t),
          isEmpty(u, e) {
            var { children: t } = e,
              [r] = t;
            return (
              0 === t.length ||
              (1 === t.length && uF.isText(r) && "" === r.text && !u.isVoid(e))
            );
          },
          isInline: (u, e) => u.isInline(e),
          isNormalizing(u) {
            var e = C.get(u);
            return void 0 === e || e;
          },
          isStart(u, e, t) {
            if (0 !== e.offset) return !1;
            var r = U.start(u, t);
            return uD.equals(e, r);
          },
          isVoid: (u, e) => u.isVoid(e),
          last(u, e) {
            var t = U.path(u, e, { edge: "end" });
            return U.node(u, t);
          },
          leaf(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = U.path(u, e, t);
            return [X.leaf(u, r), r];
          },
          *levels(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { at: t = u.selection, reverse: r = !1, voids: n = !1 } = e,
              { match: D } = e;
            if ((null == D && (D = () => !0), t)) {
              var a = [],
                i = U.path(u, t);
              for (var [o, s] of X.levels(u, i))
                if (
                  D(o, s) &&
                  (a.push([o, s]), !n && L.isElement(o) && U.isVoid(u, o))
                )
                  break;
              r && a.reverse(), yield* a;
            }
          },
          marks(u) {
            var { marks: e, selection: t } = u;
            if (!t) return null;
            if (e) return e;
            if (uo.isExpanded(t)) {
              var [r] = U.nodes(u, { match: uF.isText });
              if (!r) return {};
              var [n] = r;
              return f(n, M);
            }
            var { anchor: D } = t,
              { path: a } = D,
              [i] = U.leaf(u, a);
            if (0 === D.offset) {
              var o = U.previous(u, { at: a, match: uF.isText });
              if (
                !U.above(u, {
                  match: (e) =>
                    L.isElement(e) && U.isVoid(u, e) && u.markableVoid(e),
                })
              ) {
                var s = U.above(u, {
                  match: (e) => L.isElement(e) && U.isBlock(u, e),
                });
                if (o && s) {
                  var [C, B] = o,
                    [, l] = s;
                  ut.isAncestor(l, B) && (i = C);
                }
              }
            }
            return f(i, W);
          },
          next(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: t = "lowest", voids: r = !1 } = e,
              { match: n, at: D = u.selection } = e;
            if (D) {
              var a = U.after(u, D, { voids: r });
              if (a) {
                var [, i] = U.last(u, []),
                  o = [a.path, i];
                if (ut.isPath(D) && 0 === D.length)
                  throw Error("Cannot get the next node from the root node!");
                if (null == n) {
                  if (ut.isPath(D)) {
                    var [s] = U.parent(u, D);
                    n = (u) => s.children.includes(u);
                  } else n = () => !0;
                }
                var [C] = U.nodes(u, { at: o, match: n, mode: t, voids: r });
                return C;
              }
            }
          },
          node(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = U.path(u, e, t);
            return [X.get(u, r), r];
          },
          *nodes(u) {
            var e,
              t,
              r,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: D = u.selection,
                mode: a = "all",
                universal: i = !1,
                reverse: o = !1,
                voids: s = !1,
              } = n,
              { match: C } = n;
            if ((C || (C = () => !0), D)) {
              if (G.isSpan(D)) (e = D[0]), (t = D[1]);
              else {
                var B = U.path(u, D, { edge: "start" }),
                  l = U.path(u, D, { edge: "end" });
                (e = o ? l : B), (t = o ? B : l);
              }
              var c = X.nodes(u, {
                  reverse: o,
                  from: e,
                  to: t,
                  pass: (e) => {
                    var [t] = e;
                    return !s && L.isElement(t) && U.isVoid(u, t);
                  },
                }),
                f = [];
              for (var [A, F] of c) {
                var h = r && 0 === ut.compare(F, r[1]);
                if ("highest" !== a || !h) {
                  if (!C(A, F)) {
                    if (i && !h && uF.isText(A)) return;
                    continue;
                  }
                  if ("lowest" === a && h) {
                    r = [A, F];
                    continue;
                  }
                  var E = "lowest" === a ? r : [A, F];
                  E && (i ? f.push(E) : yield E), (r = [A, F]);
                }
              }
              "lowest" === a && r && (i ? f.push(r) : yield r), i && (yield* f);
            }
          },
          normalize(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { force: t = !1, operation: r } = e,
              n = (u) => o.get(u) || [],
              D = (u) => s.get(u) || new Set(),
              a = (u) => {
                var e = n(u).pop(),
                  t = e.join(",");
                return D(u).delete(t), e;
              };
            if (U.isNormalizing(u)) {
              if (t) {
                var i = Array.from(X.nodes(u), (u) => {
                    var [, e] = u;
                    return e;
                  }),
                  C = new Set(i.map((u) => u.join(",")));
                o.set(u, i), s.set(u, C);
              }
              0 !== n(u).length &&
                U.withoutNormalizing(u, () => {
                  for (var e of n(u))
                    if (X.has(u, e)) {
                      var t = U.node(u, e),
                        [D, i] = t;
                      L.isElement(D) &&
                        0 === D.children.length &&
                        u.normalizeNode(t, { operation: r });
                    }
                  for (var o = n(u), s = o.length, C = 0; 0 !== o.length; ) {
                    if (
                      !u.shouldNormalize({
                        dirtyPaths: o,
                        iteration: C,
                        initialDirtyPathsLength: s,
                        operation: r,
                      })
                    )
                      return;
                    var B = a(u);
                    if (X.has(u, B)) {
                      var l = U.node(u, B);
                      u.normalizeNode(l, { operation: r });
                    }
                    C++, (o = n(u));
                  }
                });
            }
          },
          parent(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = U.path(u, e, t),
              n = ut.parent(r);
            return U.node(u, n);
          },
          path(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { depth: r, edge: n } = t;
            if (ut.isPath(e)) {
              if ("start" === n) {
                var [, D] = X.first(u, e);
                e = D;
              } else if ("end" === n) {
                var [, a] = X.last(u, e);
                e = a;
              }
            }
            return (
              uo.isRange(e) &&
                (e =
                  "start" === n
                    ? uo.start(e)
                    : "end" === n
                    ? uo.end(e)
                    : ut.common(e.anchor.path, e.focus.path)),
              uD.isPoint(e) && (e = e.path),
              null != r && (e = e.slice(0, r)),
              e
            );
          },
          hasPath: (u, e) => X.has(u, e),
          pathRef(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: r = "forward" } = t,
              n = {
                current: e,
                affinity: r,
                unref() {
                  var { current: e } = n;
                  return U.pathRefs(u).delete(n), (n.current = null), e;
                },
              };
            return U.pathRefs(u).add(n), n;
          },
          pathRefs(u) {
            var e = B.get(u);
            return e || ((e = new Set()), B.set(u, e)), e;
          },
          point(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { edge: r = "start" } = t;
            if (ut.isPath(e)) {
              if ("end" === r) {
                var n,
                  [, D] = X.last(u, e);
                n = D;
              } else {
                var [, a] = X.first(u, e);
                n = a;
              }
              var i = X.get(u, n);
              if (!uF.isText(i))
                throw Error(
                  "Cannot get the "
                    .concat(r, " point in the node at path [")
                    .concat(e, "] because it has no ")
                    .concat(r, " text node.")
                );
              return { path: n, offset: "end" === r ? i.text.length : 0 };
            }
            if (uo.isRange(e)) {
              var [o, s] = uo.edges(e);
              return "start" === r ? o : s;
            }
            return e;
          },
          pointRef(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: r = "forward" } = t,
              n = {
                current: e,
                affinity: r,
                unref() {
                  var { current: e } = n;
                  return U.pointRefs(u).delete(n), (n.current = null), e;
                },
              };
            return U.pointRefs(u).add(n), n;
          },
          pointRefs(u) {
            var e = l.get(u);
            return e || ((e = new Set()), l.set(u, e)), e;
          },
          *positions(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: t = u.selection,
                unit: r = "offset",
                reverse: n = !1,
                voids: D = !1,
              } = e;
            if (t) {
              var a = U.range(u, t),
                [i, o] = uo.edges(a),
                s = n ? o : i,
                C = !1,
                B = "",
                l = 0,
                c = 0,
                f = 0;
              for (var [F, h] of U.nodes(u, { at: t, reverse: n, voids: D })) {
                if (L.isElement(F)) {
                  if (!D && u.isVoid(F)) {
                    yield U.start(u, h);
                    continue;
                  }
                  if (u.isInline(F)) continue;
                  if (U.hasInlines(u, F)) {
                    var E = ut.isAncestor(h, o.path) ? o : U.end(u, h),
                      v = ut.isAncestor(h, i.path) ? i : U.start(u, h);
                    (B = U.string(u, { anchor: v, focus: E }, { voids: D })),
                      (C = !0);
                  }
                }
                if (uF.isText(F)) {
                  var g,
                    m = ut.equals(h, s.path);
                  for (
                    m
                      ? ((c = n ? s.offset : F.text.length - s.offset),
                        (f = s.offset))
                      : ((c = F.text.length), (f = n ? c : 0)),
                      (m || C || "offset" === r) &&
                        (yield { path: h, offset: f }, (C = !1));
                    ;

                  ) {
                    if (0 === l) {
                      if ("" === B) break;
                      (g = B),
                        (B = d(
                          B,
                          (l =
                            "character" === r
                              ? A(g, n)
                              : "word" === r
                              ? p(g, n)
                              : "line" === r || "block" === r
                              ? g.length
                              : 1),
                          n
                        )[1]);
                    }
                    if (((f = n ? f - l : f + l), (c -= l) < 0)) {
                      l = -c;
                      break;
                    }
                    (l = 0), yield { path: h, offset: f };
                  }
                }
              }
            }
          },
          previous(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: t = "lowest", voids: r = !1 } = e,
              { match: n, at: D = u.selection } = e;
            if (D) {
              var a = U.before(u, D, { voids: r });
              if (a) {
                var [, i] = U.first(u, []),
                  o = [a.path, i];
                if (ut.isPath(D) && 0 === D.length)
                  throw Error(
                    "Cannot get the previous node from the root node!"
                  );
                if (null == n) {
                  if (ut.isPath(D)) {
                    var [s] = U.parent(u, D);
                    n = (u) => s.children.includes(u);
                  } else n = () => !0;
                }
                var [C] = U.nodes(u, {
                  reverse: !0,
                  at: o,
                  match: n,
                  mode: t,
                  voids: r,
                });
                return C;
              }
            }
          },
          range: (u, e, t) =>
            uo.isRange(e) && !t
              ? e
              : { anchor: U.start(u, e), focus: U.end(u, t || e) },
          rangeRef(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: r = "forward" } = t,
              n = {
                current: e,
                affinity: r,
                unref() {
                  var { current: e } = n;
                  return U.rangeRefs(u).delete(n), (n.current = null), e;
                },
              };
            return U.rangeRefs(u).add(n), n;
          },
          rangeRefs(u) {
            var e = c.get(u);
            return e || ((e = new Set()), c.set(u, e)), e;
          },
          removeMark(u, e) {
            u.removeMark(e);
          },
          setNormalizing(u, e) {
            C.set(u, e);
          },
          start: (u, e) => U.point(u, e, { edge: "start" }),
          string(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: r = !1 } = t,
              n = U.range(u, e),
              [D, a] = uo.edges(n),
              i = "";
            for (var [o, s] of U.nodes(u, {
              at: n,
              match: uF.isText,
              voids: r,
            })) {
              var C = o.text;
              ut.equals(s, a.path) && (C = C.slice(0, a.offset)),
                ut.equals(s, D.path) && (C = C.slice(D.offset)),
                (i += C);
            }
            return i;
          },
          unhangRange(u, e) {
            var t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: r = !1 } = t,
              [n, D] = uo.edges(e);
            if (
              0 !== n.offset ||
              0 !== D.offset ||
              uo.isCollapsed(e) ||
              ut.hasPrevious(D.path)
            )
              return e;
            var a = U.above(u, {
                at: D,
                match: (e) => L.isElement(e) && U.isBlock(u, e),
                voids: r,
              }),
              i = a ? a[1] : [],
              o = { anchor: U.start(u, n), focus: D },
              s = !0;
            for (var [C, B] of U.nodes(u, {
              at: o,
              match: uF.isText,
              reverse: !0,
              voids: r,
            })) {
              if (s) {
                s = !1;
                continue;
              }
              if ("" !== C.text || ut.isBefore(B, i)) {
                D = { path: B, offset: C.text.length };
                break;
              }
            }
            return { anchor: n, focus: D };
          },
          void(u) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return U.above(
              u,
              J(
                J({}, e),
                {},
                { match: (e) => L.isElement(e) && U.isVoid(u, e) }
              )
            );
          },
          withoutNormalizing(u, e) {
            var t = U.isNormalizing(u);
            U.setNormalizing(u, !1);
            try {
              e();
            } finally {
              U.setNormalizing(u, t);
            }
            U.normalize(u);
          },
        },
        G = {
          isSpan: (u) =>
            Array.isArray(u) && 2 === u.length && u.every(ut.isPath),
        },
        H = ["children"],
        K = ["text"],
        Q = new WeakMap(),
        X = {
          ancestor(u, e) {
            var t = X.get(u, e);
            if (uF.isText(t))
              throw Error(
                "Cannot get the ancestor node at path ["
                  .concat(e, "] because it refers to a text node instead: ")
                  .concat(uC.stringify(t))
              );
            return t;
          },
          *ancestors(u, e) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var r of ut.ancestors(e, t)) {
              var n = [X.ancestor(u, r), r];
              yield n;
            }
          },
          child(u, e) {
            if (uF.isText(u))
              throw Error(
                "Cannot get the child of a text node: ".concat(uC.stringify(u))
              );
            var t = u.children[e];
            if (null == t)
              throw Error(
                "Cannot get child at index `"
                  .concat(e, "` in node: ")
                  .concat(uC.stringify(u))
              );
            return t;
          },
          *children(u, e) {
            for (
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { reverse: r = !1 } = t,
                n = X.ancestor(u, e),
                { children: D } = n,
                a = r ? D.length - 1 : 0;
              r ? a >= 0 : a < D.length;

            ) {
              var i = X.child(n, a),
                o = e.concat(a);
              yield [i, o], (a = r ? a - 1 : a + 1);
            }
          },
          common(u, e, t) {
            var r = ut.common(e, t);
            return [X.get(u, r), r];
          },
          descendant(u, e) {
            var t = X.get(u, e);
            if (U.isEditor(t))
              throw Error(
                "Cannot get the descendant node at path ["
                  .concat(
                    e,
                    "] because it refers to the root editor node instead: "
                  )
                  .concat(uC.stringify(t))
              );
            return t;
          },
          *descendants(u) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [t, r] of X.nodes(u, e)) 0 !== r.length && (yield [t, r]);
          },
          *elements(u) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [t, r] of X.nodes(u, e)) L.isElement(t) && (yield [t, r]);
          },
          extractProps(u) {
            if (L.isAncestor(u)) {
              var e = f(u, H);
              return e;
            }
            var e = f(u, K);
            return e;
          },
          first(u, e) {
            for (
              var t = e.slice(), r = X.get(u, t);
              r && !uF.isText(r) && 0 !== r.children.length;

            )
              (r = r.children[0]), t.push(0);
            return [r, t];
          },
          fragment(u, e) {
            if (uF.isText(u))
              throw Error(
                "Cannot get a fragment starting from a root text node: ".concat(
                  uC.stringify(u)
                )
              );
            return (0, a.Uy)({ children: u.children }, (u) => {
              var [t, r] = uo.edges(e);
              for (var [, n] of X.nodes(u, {
                reverse: !0,
                pass: (u) => {
                  var [, t] = u;
                  return !uo.includes(e, t);
                },
              })) {
                if (!uo.includes(e, n)) {
                  var D = X.parent(u, n),
                    a = n[n.length - 1];
                  D.children.splice(a, 1);
                }
                if (ut.equals(n, r.path)) {
                  var i = X.leaf(u, n);
                  i.text = i.text.slice(0, r.offset);
                }
                if (ut.equals(n, t.path)) {
                  var o = X.leaf(u, n);
                  o.text = o.text.slice(t.offset);
                }
              }
              U.isEditor(u) && (u.selection = null);
            }).children;
          },
          get(u, e) {
            for (var t = u, r = 0; r < e.length; r++) {
              var n = e[r];
              if (uF.isText(t) || !t.children[n])
                throw Error(
                  "Cannot find a descendant at path ["
                    .concat(e, "] in node: ")
                    .concat(uC.stringify(u))
                );
              t = t.children[n];
            }
            return t;
          },
          has(u, e) {
            for (var t = u, r = 0; r < e.length; r++) {
              var n = e[r];
              if (uF.isText(t) || !t.children[n]) return !1;
              t = t.children[n];
            }
            return !0;
          },
          isNode: (u) => uF.isText(u) || L.isElement(u) || U.isEditor(u),
          isNodeList(u) {
            if (!Array.isArray(u)) return !1;
            var e = Q.get(u);
            if (void 0 !== e) return e;
            var t = u.every((u) => X.isNode(u));
            return Q.set(u, t), t;
          },
          last(u, e) {
            for (
              var t = e.slice(), r = X.get(u, t);
              r && !uF.isText(r) && 0 !== r.children.length;

            ) {
              var n = r.children.length - 1;
              (r = r.children[n]), t.push(n);
            }
            return [r, t];
          },
          leaf(u, e) {
            var t = X.get(u, e);
            if (!uF.isText(t))
              throw Error(
                "Cannot get the leaf node at path ["
                  .concat(e, "] because it refers to a non-leaf node: ")
                  .concat(uC.stringify(t))
              );
            return t;
          },
          *levels(u, e) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var r of ut.levels(e, t)) {
              var n = X.get(u, r);
              yield [n, r];
            }
          },
          matches: (u, e) =>
            (L.isElement(u) && L.isElementProps(e) && L.matches(u, e)) ||
            (uF.isText(u) && uF.isTextProps(e) && uF.matches(u, e)),
          *nodes(u) {
            for (
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { pass: t, reverse: r = !1 } = e,
                { from: n = [], to: D } = e,
                a = new Set(),
                i = [],
                o = u;
              !(D && (r ? ut.isBefore(i, D) : ut.isAfter(i, D)));

            ) {
              if (
                (a.has(o) || (yield [o, i]),
                !a.has(o) &&
                  !uF.isText(o) &&
                  0 !== o.children.length &&
                  (null == t || !1 === t([o, i])))
              ) {
                a.add(o);
                var s = r ? o.children.length - 1 : 0;
                ut.isAncestor(i, n) && (s = n[i.length]),
                  (i = i.concat(s)),
                  (o = X.get(u, i));
                continue;
              }
              if (0 === i.length) break;
              if (!r) {
                var C = ut.next(i);
                if (X.has(u, C)) {
                  (i = C), (o = X.get(u, i));
                  continue;
                }
              }
              if (r && 0 !== i[i.length - 1]) {
                (i = ut.previous(i)), (o = X.get(u, i));
                continue;
              }
              (i = ut.parent(i)), (o = X.get(u, i)), a.add(o);
            }
          },
          parent(u, e) {
            var t = ut.parent(e),
              r = X.get(u, t);
            if (uF.isText(r))
              throw Error(
                "Cannot get the parent of path [".concat(
                  e,
                  "] because it does not exist in the root."
                )
              );
            return r;
          },
          string: (u) =>
            uF.isText(u) ? u.text : u.children.map(X.string).join(""),
          *texts(u) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [t, r] of X.nodes(u, e)) uF.isText(t) && (yield [t, r]);
          },
        };
      function Y(u, e) {
        var t = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(u, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function uu(u) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Y(Object(t), !0).forEach(function (e) {
                i(u, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  u,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return u;
      }
      var ue = {
          isNodeOperation: (u) => ue.isOperation(u) && u.type.endsWith("_node"),
          isOperation(u) {
            if (!(0, D.P)(u)) return !1;
            switch (u.type) {
              case "insert_node":
              case "remove_node":
                return ut.isPath(u.path) && X.isNode(u.node);
              case "insert_text":
              case "remove_text":
                return (
                  "number" == typeof u.offset &&
                  "string" == typeof u.text &&
                  ut.isPath(u.path)
                );
              case "merge_node":
                return (
                  "number" == typeof u.position &&
                  ut.isPath(u.path) &&
                  (0, D.P)(u.properties)
                );
              case "move_node":
                return ut.isPath(u.path) && ut.isPath(u.newPath);
              case "set_node":
                return (
                  ut.isPath(u.path) &&
                  (0, D.P)(u.properties) &&
                  (0, D.P)(u.newProperties)
                );
              case "set_selection":
                return (
                  (null === u.properties && uo.isRange(u.newProperties)) ||
                  (null === u.newProperties && uo.isRange(u.properties)) ||
                  ((0, D.P)(u.properties) && (0, D.P)(u.newProperties))
                );
              case "split_node":
                return (
                  ut.isPath(u.path) &&
                  "number" == typeof u.position &&
                  (0, D.P)(u.properties)
                );
              default:
                return !1;
            }
          },
          isOperationList: (u) =>
            Array.isArray(u) && u.every((u) => ue.isOperation(u)),
          isSelectionOperation: (u) =>
            ue.isOperation(u) && u.type.endsWith("_selection"),
          isTextOperation: (u) => ue.isOperation(u) && u.type.endsWith("_text"),
          inverse(u) {
            switch (u.type) {
              case "insert_node":
                return uu(uu({}, u), {}, { type: "remove_node" });
              case "insert_text":
                return uu(uu({}, u), {}, { type: "remove_text" });
              case "merge_node":
                return uu(
                  uu({}, u),
                  {},
                  { type: "split_node", path: ut.previous(u.path) }
                );
              case "move_node":
                var { newPath: e, path: t } = u;
                if (ut.equals(e, t)) return u;
                if (ut.isSibling(t, e))
                  return uu(uu({}, u), {}, { path: e, newPath: t });
                var r = ut.transform(t, u),
                  n = ut.transform(ut.next(t), u);
                return uu(uu({}, u), {}, { path: r, newPath: n });
              case "remove_node":
                return uu(uu({}, u), {}, { type: "insert_node" });
              case "remove_text":
                return uu(uu({}, u), {}, { type: "insert_text" });
              case "set_node":
                var { properties: D, newProperties: a } = u;
                return uu(uu({}, u), {}, { properties: a, newProperties: D });
              case "set_selection":
                var { properties: i, newProperties: o } = u;
                if (null == i)
                  return uu(
                    uu({}, u),
                    {},
                    { properties: o, newProperties: null }
                  );
                if (null == o)
                  return uu(
                    uu({}, u),
                    {},
                    { properties: null, newProperties: i }
                  );
                return uu(uu({}, u), {}, { properties: o, newProperties: i });
              case "split_node":
                return uu(
                  uu({}, u),
                  {},
                  { type: "merge_node", path: ut.next(u.path) }
                );
            }
          },
        },
        ut = {
          ancestors(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: t = !1 } = e,
              r = ut.levels(u, e);
            return t ? r.slice(1) : r.slice(0, -1);
          },
          common(u, e) {
            for (var t = [], r = 0; r < u.length && r < e.length; r++) {
              var n = u[r];
              if (n !== e[r]) break;
              t.push(n);
            }
            return t;
          },
          compare(u, e) {
            for (var t = Math.min(u.length, e.length), r = 0; r < t; r++) {
              if (u[r] < e[r]) return -1;
              if (u[r] > e[r]) return 1;
            }
            return 0;
          },
          endsAfter(u, e) {
            var t = u.length - 1,
              r = u.slice(0, t),
              n = e.slice(0, t),
              D = u[t],
              a = e[t];
            return ut.equals(r, n) && D > a;
          },
          endsAt(u, e) {
            var t = u.length,
              r = u.slice(0, t),
              n = e.slice(0, t);
            return ut.equals(r, n);
          },
          endsBefore(u, e) {
            var t = u.length - 1,
              r = u.slice(0, t),
              n = e.slice(0, t),
              D = u[t],
              a = e[t];
            return ut.equals(r, n) && D < a;
          },
          equals: (u, e) =>
            u.length === e.length && u.every((u, t) => u === e[t]),
          hasPrevious: (u) => u[u.length - 1] > 0,
          isAfter: (u, e) => 1 === ut.compare(u, e),
          isAncestor: (u, e) => u.length < e.length && 0 === ut.compare(u, e),
          isBefore: (u, e) => -1 === ut.compare(u, e),
          isChild: (u, e) =>
            u.length === e.length + 1 && 0 === ut.compare(u, e),
          isCommon: (u, e) => u.length <= e.length && 0 === ut.compare(u, e),
          isDescendant: (u, e) => u.length > e.length && 0 === ut.compare(u, e),
          isParent: (u, e) =>
            u.length + 1 === e.length && 0 === ut.compare(u, e),
          isPath: (u) =>
            Array.isArray(u) && (0 === u.length || "number" == typeof u[0]),
          isSibling(u, e) {
            if (u.length !== e.length) return !1;
            var t = u.slice(0, -1),
              r = e.slice(0, -1);
            return u[u.length - 1] !== e[e.length - 1] && ut.equals(t, r);
          },
          levels(u) {
            for (
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { reverse: t = !1 } = e,
                r = [],
                n = 0;
              n <= u.length;
              n++
            )
              r.push(u.slice(0, n));
            return t && r.reverse(), r;
          },
          next(u) {
            if (0 === u.length)
              throw Error(
                "Cannot get the next path of a root path [".concat(
                  u,
                  "], because it has no next index."
                )
              );
            var e = u[u.length - 1];
            return u.slice(0, -1).concat(e + 1);
          },
          operationCanTransformPath(u) {
            switch (u.type) {
              case "insert_node":
              case "remove_node":
              case "merge_node":
              case "split_node":
              case "move_node":
                return !0;
              default:
                return !1;
            }
          },
          parent(u) {
            if (0 === u.length)
              throw Error(
                "Cannot get the parent path of the root path [".concat(u, "].")
              );
            return u.slice(0, -1);
          },
          previous(u) {
            if (0 === u.length)
              throw Error(
                "Cannot get the previous path of a root path [".concat(
                  u,
                  "], because it has no previous index."
                )
              );
            var e = u[u.length - 1];
            if (e <= 0)
              throw Error(
                "Cannot get the previous path of a first child path [".concat(
                  u,
                  "] because it would result in a negative index."
                )
              );
            return u.slice(0, -1).concat(e - 1);
          },
          relative(u, e) {
            if (!ut.isAncestor(e, u) && !ut.equals(u, e))
              throw Error(
                "Cannot get the relative path of ["
                  .concat(u, "] inside ancestor [")
                  .concat(e, "], because it is not above or equal to the path.")
              );
            return u.slice(e.length);
          },
          transform(u, e) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (!u) return null;
            var r = [...u],
              { affinity: n = "forward" } = t;
            if (0 === u.length) return r;
            switch (e.type) {
              case "insert_node":
                var { path: D } = e;
                (ut.equals(D, r) ||
                  ut.endsBefore(D, r) ||
                  ut.isAncestor(D, r)) &&
                  (r[D.length - 1] += 1);
                break;
              case "remove_node":
                var { path: a } = e;
                if (ut.equals(a, r) || ut.isAncestor(a, r)) return null;
                ut.endsBefore(a, r) && (r[a.length - 1] -= 1);
                break;
              case "merge_node":
                var { path: i, position: o } = e;
                ut.equals(i, r) || ut.endsBefore(i, r)
                  ? (r[i.length - 1] -= 1)
                  : ut.isAncestor(i, r) &&
                    ((r[i.length - 1] -= 1), (r[i.length] += o));
                break;
              case "split_node":
                var { path: s, position: C } = e;
                if (ut.equals(s, r)) {
                  if ("forward" === n) r[r.length - 1] += 1;
                  else if ("backward" !== n) return null;
                } else
                  ut.endsBefore(s, r)
                    ? (r[s.length - 1] += 1)
                    : ut.isAncestor(s, r) &&
                      u[s.length] >= C &&
                      ((r[s.length - 1] += 1), (r[s.length] -= C));
                break;
              case "move_node":
                var { path: B, newPath: l } = e;
                if (ut.equals(B, l)) break;
                if (ut.isAncestor(B, r) || ut.equals(B, r)) {
                  var c = l.slice();
                  return (
                    ut.endsBefore(B, l) &&
                      B.length < l.length &&
                      (c[B.length - 1] -= 1),
                    c.concat(r.slice(B.length))
                  );
                }
                ut.isSibling(B, l) && (ut.isAncestor(l, r) || ut.equals(l, r))
                  ? ut.endsBefore(B, r)
                    ? (r[B.length - 1] -= 1)
                    : (r[B.length - 1] += 1)
                  : ut.endsBefore(l, r) ||
                    ut.equals(l, r) ||
                    ut.isAncestor(l, r)
                  ? (ut.endsBefore(B, r) && (r[B.length - 1] -= 1),
                    (r[l.length - 1] += 1))
                  : ut.endsBefore(B, r) &&
                    (ut.equals(l, r) && (r[l.length - 1] += 1),
                    (r[B.length - 1] -= 1));
            }
            return r;
          },
        };
      function ur(u, e) {
        var t = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(u, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function un(u) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ur(Object(t), !0).forEach(function (e) {
                i(u, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
            : ur(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  u,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return u;
      }
      var uD = {
          compare(u, e) {
            var t = ut.compare(u.path, e.path);
            return 0 === t
              ? u.offset < e.offset
                ? -1
                : u.offset > e.offset
                ? 1
                : 0
              : t;
          },
          isAfter: (u, e) => 1 === uD.compare(u, e),
          isBefore: (u, e) => -1 === uD.compare(u, e),
          equals: (u, e) => u.offset === e.offset && ut.equals(u.path, e.path),
          isPoint: (u) =>
            (0, D.P)(u) && "number" == typeof u.offset && ut.isPath(u.path),
          transform(u, e) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return (0, a.Uy)(u, (u) => {
              if (null === u) return null;
              var { affinity: r = "forward" } = t,
                { path: n, offset: D } = u;
              switch (e.type) {
                case "insert_node":
                case "move_node":
                  u.path = ut.transform(n, e, t);
                  break;
                case "insert_text":
                  ut.equals(e.path, n) &&
                    (e.offset < D || (e.offset === D && "forward" === r)) &&
                    (u.offset += e.text.length);
                  break;
                case "merge_node":
                  ut.equals(e.path, n) && (u.offset += e.position),
                    (u.path = ut.transform(n, e, t));
                  break;
                case "remove_text":
                  ut.equals(e.path, n) &&
                    e.offset <= D &&
                    (u.offset -= Math.min(D - e.offset, e.text.length));
                  break;
                case "remove_node":
                  if (ut.equals(e.path, n) || ut.isAncestor(e.path, n))
                    return null;
                  u.path = ut.transform(n, e, t);
                  break;
                case "split_node":
                  if (ut.equals(e.path, n)) {
                    if (e.position === D && null == r) return null;
                    (e.position < D || (e.position === D && "forward" === r)) &&
                      ((u.offset -= e.position),
                      (u.path = ut.transform(
                        n,
                        e,
                        un(un({}, t), {}, { affinity: "forward" })
                      )));
                  } else u.path = ut.transform(n, e, t);
              }
            });
          },
        },
        ua = ["anchor", "focus"];
      function ui(u, e) {
        var t = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(u, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var uo = {
          edges(u) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: t = !1 } = e,
              { anchor: r, focus: n } = u;
            return uo.isBackward(u) === t ? [r, n] : [n, r];
          },
          end(u) {
            var [, e] = uo.edges(u);
            return e;
          },
          equals: (u, e) =>
            uD.equals(u.anchor, e.anchor) && uD.equals(u.focus, e.focus),
          includes(u, e) {
            if (uo.isRange(e)) {
              if (uo.includes(u, e.anchor) || uo.includes(u, e.focus))
                return !0;
              var [t, r] = uo.edges(u),
                [n, D] = uo.edges(e);
              return uD.isBefore(t, n) && uD.isAfter(r, D);
            }
            var [a, i] = uo.edges(u),
              o = !1,
              s = !1;
            return (
              uD.isPoint(e)
                ? ((o = uD.compare(e, a) >= 0), (s = 0 >= uD.compare(e, i)))
                : ((o = ut.compare(e, a.path) >= 0),
                  (s = 0 >= ut.compare(e, i.path))),
              o && s
            );
          },
          intersection(u, e) {
            var t = f(u, ua),
              [r, n] = uo.edges(u),
              [D, a] = uo.edges(e),
              o = uD.isBefore(r, D) ? D : r,
              s = uD.isBefore(n, a) ? n : a;
            return uD.isBefore(s, o)
              ? null
              : (function (u) {
                  for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? ui(Object(t), !0).forEach(function (e) {
                          i(u, e, t[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          u,
                          Object.getOwnPropertyDescriptors(t)
                        )
                      : ui(Object(t)).forEach(function (e) {
                          Object.defineProperty(
                            u,
                            e,
                            Object.getOwnPropertyDescriptor(t, e)
                          );
                        });
                  }
                  return u;
                })({ anchor: o, focus: s }, t);
          },
          isBackward(u) {
            var { anchor: e, focus: t } = u;
            return uD.isAfter(e, t);
          },
          isCollapsed(u) {
            var { anchor: e, focus: t } = u;
            return uD.equals(e, t);
          },
          isExpanded: (u) => !uo.isCollapsed(u),
          isForward: (u) => !uo.isBackward(u),
          isRange: (u) =>
            (0, D.P)(u) && uD.isPoint(u.anchor) && uD.isPoint(u.focus),
          *points(u) {
            yield [u.anchor, "anchor"], yield [u.focus, "focus"];
          },
          start(u) {
            var [e] = uo.edges(u);
            return e;
          },
          transform(u, e) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return (0, a.Uy)(u, (u) => {
              if (null === u) return null;
              var r,
                n,
                { affinity: D = "inward" } = t;
              if ("inward" === D) {
                var a = uo.isCollapsed(u);
                uo.isForward(u)
                  ? ((r = "forward"), (n = a ? r : "backward"))
                  : ((r = "backward"), (n = a ? r : "forward"));
              } else
                "outward" === D
                  ? uo.isForward(u)
                    ? ((r = "backward"), (n = "forward"))
                    : ((r = "forward"), (n = "backward"))
                  : ((r = D), (n = D));
              var i = uD.transform(u.anchor, e, { affinity: r }),
                o = uD.transform(u.focus, e, { affinity: n });
              if (!i || !o) return null;
              (u.anchor = i), (u.focus = o);
            });
          },
        },
        us = void 0,
        uC = {
          setScrubber(u) {
            us = u;
          },
          stringify: (u) => JSON.stringify(u, us),
        },
        uB = (u, e) => {
          for (var t in u) {
            var r = u[t],
              n = e[t];
            if ((0, D.P)(r) && (0, D.P)(n)) {
              if (!uB(r, n)) return !1;
            } else if (Array.isArray(r) && Array.isArray(n)) {
              if (r.length !== n.length) return !1;
              for (var a = 0; a < r.length; a++) if (r[a] !== n[a]) return !1;
            } else if (r !== n) return !1;
          }
          for (var i in e) if (void 0 === u[i] && void 0 !== e[i]) return !1;
          return !0;
        },
        ul = ["text"],
        uc = ["anchor", "focus"];
      function uf(u, e) {
        var t = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(u, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function uA(u) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? uf(Object(t), !0).forEach(function (e) {
                i(u, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
            : uf(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  u,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return u;
      }
      var uF = {
        equals(u, e) {
          var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { loose: r = !1 } = t;
          return uB(r ? f(u, ul) : u, r ? f(e, ul) : e);
        },
        isText: (u) => (0, D.P)(u) && "string" == typeof u.text,
        isTextList: (u) => Array.isArray(u) && u.every((u) => uF.isText(u)),
        isTextProps: (u) => void 0 !== u.text,
        matches(u, e) {
          for (var t in e)
            if ("text" !== t && (!u.hasOwnProperty(t) || u[t] !== e[t]))
              return !1;
          return !0;
        },
        decorations(u, e) {
          var t = [uA({}, u)];
          for (var r of e) {
            var n = f(r, uc),
              [D, a] = uo.edges(r),
              i = [],
              o = 0,
              s = D.offset,
              C = a.offset;
            for (var B of t) {
              var { length: l } = B.text,
                c = o;
              if (((o += l), s <= c && o <= C)) {
                Object.assign(B, n), i.push(B);
                continue;
              }
              if (
                (s !== C && (s === o || C === c)) ||
                s > o ||
                C < c ||
                (C === c && 0 !== c)
              ) {
                i.push(B);
                continue;
              }
              var A = B,
                F = void 0,
                h = void 0;
              if (C < o) {
                var E = C - c;
                (h = uA(uA({}, A), {}, { text: A.text.slice(E) })),
                  (A = uA(uA({}, A), {}, { text: A.text.slice(0, E) }));
              }
              if (s > c) {
                var p = s - c;
                (F = uA(uA({}, A), {}, { text: A.text.slice(0, p) })),
                  (A = uA(uA({}, A), {}, { text: A.text.slice(p) }));
              }
              Object.assign(A, n), F && i.push(F), i.push(A), h && i.push(h);
            }
            t = i;
          }
          return t;
        },
      };
      function uh(u, e) {
        var t = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(u, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function uE(u) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? uh(Object(t), !0).forEach(function (e) {
                i(u, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
            : uh(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  u,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return u;
      }
      var up = (u, e, t) => {
          switch (t.type) {
            case "insert_node":
              var { path: r, node: n } = t,
                D = X.parent(u, r),
                a = r[r.length - 1];
              if (a > D.children.length)
                throw Error(
                  'Cannot apply an "insert_node" operation at path ['.concat(
                    r,
                    "] because the destination is past the end of the node."
                  )
                );
              if ((D.children.splice(a, 0, n), e))
                for (var [i, o] of uo.points(e)) e[o] = uD.transform(i, t);
              break;
            case "insert_text":
              var { path: s, offset: C, text: B } = t;
              if (0 === B.length) break;
              var l = X.leaf(u, s),
                c = l.text.slice(0, C),
                f = l.text.slice(C);
              if (((l.text = c + B + f), e))
                for (var [A, F] of uo.points(e)) e[F] = uD.transform(A, t);
              break;
            case "merge_node":
              var { path: h } = t,
                E = X.get(u, h),
                p = ut.previous(h),
                d = X.get(u, p),
                v = X.parent(u, h),
                g = h[h.length - 1];
              if (uF.isText(E) && uF.isText(d)) d.text += E.text;
              else if (uF.isText(E) || uF.isText(d))
                throw Error(
                  'Cannot apply a "merge_node" operation at path ['
                    .concat(h, "] to nodes of different interfaces: ")
                    .concat(uC.stringify(E), " ")
                    .concat(uC.stringify(d))
                );
              else d.children.push(...E.children);
              if ((v.children.splice(g, 1), e))
                for (var [m, y] of uo.points(e)) e[y] = uD.transform(m, t);
              break;
            case "move_node":
              var { path: b, newPath: w } = t;
              if (ut.isAncestor(b, w))
                throw Error(
                  "Cannot move a path ["
                    .concat(b, "] to new path [")
                    .concat(w, "] because the destination is inside itself.")
                );
              var O = X.get(u, b),
                x = X.parent(u, b),
                P = b[b.length - 1];
              x.children.splice(P, 1);
              var k = ut.transform(b, t),
                j = X.get(u, ut.parent(k)),
                N = k[k.length - 1];
              if ((j.children.splice(N, 0, O), e))
                for (var [_, R] of uo.points(e)) e[R] = uD.transform(_, t);
              break;
            case "remove_node":
              var { path: T } = t,
                S = T[T.length - 1];
              if ((X.parent(u, T).children.splice(S, 1), e))
                for (var [q, I] of uo.points(e)) {
                  var V = uD.transform(q, t);
                  if (null != e && null != V) e[I] = V;
                  else {
                    var z = void 0,
                      L = void 0;
                    for (var [M, W] of X.texts(u))
                      if (-1 === ut.compare(W, T)) z = [M, W];
                      else {
                        L = [M, W];
                        break;
                      }
                    var $ = !1;
                    z &&
                      L &&
                      ($ = ut.equals(L[1], T)
                        ? !ut.hasPrevious(L[1])
                        : ut.common(z[1], T).length <
                          ut.common(L[1], T).length),
                      z && !$
                        ? ((q.path = z[1]), (q.offset = z[0].text.length))
                        : L
                        ? ((q.path = L[1]), (q.offset = 0))
                        : (e = null);
                  }
                }
              break;
            case "remove_text":
              var { path: J, offset: Z, text: U } = t;
              if (0 === U.length) break;
              var G = X.leaf(u, J),
                H = G.text.slice(0, Z),
                K = G.text.slice(Z + U.length);
              if (((G.text = H + K), e))
                for (var [Q, Y] of uo.points(e)) e[Y] = uD.transform(Q, t);
              break;
            case "set_node":
              var { path: uu, properties: ue, newProperties: ur } = t;
              if (0 === uu.length)
                throw Error("Cannot set properties on the root node!");
              var un = X.get(u, uu);
              for (var ua in ur) {
                if ("children" === ua || "text" === ua)
                  throw Error(
                    'Cannot set the "'.concat(ua, '" property of nodes!')
                  );
                var ui = ur[ua];
                null == ui ? delete un[ua] : (un[ua] = ui);
              }
              for (var us in ue) ur.hasOwnProperty(us) || delete un[us];
              break;
            case "set_selection":
              var { newProperties: uB } = t;
              if (null == uB) e = uB;
              else {
                if (null == e) {
                  if (!uo.isRange(uB))
                    throw Error(
                      'Cannot apply an incomplete "set_selection" operation properties '.concat(
                        uC.stringify(uB),
                        " when there is no current selection."
                      )
                    );
                  e = uE({}, uB);
                }
                for (var ul in uB) {
                  var uc = uB[ul];
                  if (null == uc) {
                    if ("anchor" === ul || "focus" === ul)
                      throw Error(
                        'Cannot remove the "'.concat(ul, '" selection property')
                      );
                    delete e[ul];
                  } else e[ul] = uc;
                }
              }
              break;
            case "split_node":
              var uf,
                { path: uA, position: uh, properties: up } = t;
              if (0 === uA.length)
                throw Error(
                  'Cannot apply a "split_node" operation at path ['.concat(
                    uA,
                    "] because the root node cannot be split."
                  )
                );
              var ud = X.get(u, uA),
                uv = X.parent(u, uA),
                ug = uA[uA.length - 1];
              if (uF.isText(ud)) {
                var um = ud.text.slice(0, uh),
                  uy = ud.text.slice(uh);
                (ud.text = um), (uf = uE(uE({}, up), {}, { text: uy }));
              } else {
                var ub = ud.children.slice(0, uh),
                  uw = ud.children.slice(uh);
                (ud.children = ub), (uf = uE(uE({}, up), {}, { children: uw }));
              }
              if ((uv.children.splice(ug + 1, 0, uf), e))
                for (var [uO, ux] of uo.points(e)) e[ux] = uD.transform(uO, t);
          }
          return e;
        },
        ud = ["text"],
        uv = ["children"];
      function ug(u, e) {
        var t = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(u, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function um(u) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ug(Object(t), !0).forEach(function (e) {
                i(u, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
            : ug(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  u,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return u;
      }
      var uy = (u, e) =>
          L.isElement(e)
            ? !!U.isVoid(u, e) ||
              (1 === e.children.length && uy(u, e.children[0]))
            : !U.isEditor(e),
        ub = (u, e) => {
          if (uo.isCollapsed(e)) return e.anchor;
          var [, t] = uo.edges(e),
            r = U.pointRef(u, t);
          return uj.delete(u, { at: e }), r.unref();
        },
        uw = (u, e) => {
          var [t] = U.node(u, e);
          return (u) => u === t;
        };
      function uO(u, e) {
        var t = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(u, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function ux(u) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? uO(Object(t), !0).forEach(function (e) {
                i(u, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
            : uO(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  u,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return u;
      }
      function uP(u, e) {
        var t = Object.keys(u);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(u);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(u, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function uk(u) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? uP(Object(t), !0).forEach(function (e) {
                i(u, e, t[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t))
            : uP(Object(t)).forEach(function (e) {
                Object.defineProperty(
                  u,
                  e,
                  Object.getOwnPropertyDescriptor(t, e)
                );
              });
        }
        return u;
      }
      var uj = uk(
        uk(
          uk(
            uk(
              {},
              {
                transform(u, e) {
                  u.children = (0, a.P2)(u.children);
                  var t = u.selection && (0, a.P2)(u.selection);
                  try {
                    t = up(u, t, e);
                  } finally {
                    (u.children = (0, a._x)(u.children)),
                      t
                        ? (u.selection = (0, a.mv)(t) ? (0, a._x)(t) : t)
                        : (u.selection = null);
                  }
                },
              }
            ),
            {
              insertNodes(u, e) {
                var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                U.withoutNormalizing(u, () => {
                  var {
                      hanging: r = !1,
                      voids: n = !1,
                      mode: D = "lowest",
                    } = t,
                    { at: a, match: i, select: o } = t;
                  if ((X.isNode(e) && (e = [e]), 0 !== e.length)) {
                    var [s] = e;
                    if (
                      (a ||
                        ((a = u.selection
                          ? u.selection
                          : u.children.length > 0
                          ? U.end(u, [])
                          : [0]),
                        (o = !0)),
                      null == o && (o = !1),
                      uo.isRange(a))
                    ) {
                      if (
                        (r || (a = U.unhangRange(u, a, { voids: n })),
                        uo.isCollapsed(a))
                      )
                        a = a.anchor;
                      else {
                        var [, C] = uo.edges(a),
                          B = U.pointRef(u, C);
                        uj.delete(u, { at: a }), (a = B.unref());
                      }
                    }
                    if (uD.isPoint(a)) {
                      null == i &&
                        (i = uF.isText(s)
                          ? (u) => uF.isText(u)
                          : u.isInline(s)
                          ? (e) => uF.isText(e) || U.isInline(u, e)
                          : (e) => L.isElement(e) && U.isBlock(u, e));
                      var [l] = U.nodes(u, {
                        at: a.path,
                        match: i,
                        mode: D,
                        voids: n,
                      });
                      if (!l) return;
                      var [, c] = l,
                        f = U.pathRef(u, c),
                        A = U.isEnd(u, a, c);
                      uj.splitNodes(u, { at: a, match: i, mode: D, voids: n });
                      var F = f.unref();
                      a = A ? ut.next(F) : F;
                    }
                    var h = ut.parent(a),
                      E = a[a.length - 1];
                    if (!(!n && U.void(u, { at: h }))) {
                      for (var p of e) {
                        var d = h.concat(E);
                        E++,
                          u.apply({ type: "insert_node", path: d, node: p }),
                          (a = ut.next(a));
                      }
                      if (((a = ut.previous(a)), o)) {
                        var v = U.end(u, a);
                        v && uj.select(u, v);
                      }
                    }
                  }
                });
              },
              liftNodes(u) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                U.withoutNormalizing(u, () => {
                  var {
                      at: t = u.selection,
                      mode: r = "lowest",
                      voids: n = !1,
                    } = e,
                    { match: D } = e;
                  if (
                    (null == D &&
                      (D = ut.isPath(t)
                        ? uw(u, t)
                        : (e) => L.isElement(e) && U.isBlock(u, e)),
                    t)
                  )
                    for (var a of Array.from(
                      U.nodes(u, { at: t, match: D, mode: r, voids: n }),
                      (e) => {
                        var [, t] = e;
                        return U.pathRef(u, t);
                      }
                    )) {
                      var i = a.unref();
                      if (i.length < 2)
                        throw Error(
                          "Cannot lift node at a path [".concat(
                            i,
                            "] because it has a depth of less than `2`."
                          )
                        );
                      var [o, s] = U.node(u, ut.parent(i)),
                        C = i[i.length - 1],
                        { length: B } = o.children;
                      if (1 === B) {
                        var l = ut.next(s);
                        uj.moveNodes(u, { at: i, to: l, voids: n }),
                          uj.removeNodes(u, { at: s, voids: n });
                      } else if (0 === C)
                        uj.moveNodes(u, { at: i, to: s, voids: n });
                      else if (C === B - 1) {
                        var c = ut.next(s);
                        uj.moveNodes(u, { at: i, to: c, voids: n });
                      } else {
                        var f = ut.next(i),
                          A = ut.next(s);
                        uj.splitNodes(u, { at: f, voids: n }),
                          uj.moveNodes(u, { at: i, to: A, voids: n });
                      }
                    }
                });
              },
              mergeNodes(u) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                U.withoutNormalizing(u, () => {
                  var t,
                    r,
                    { match: n, at: D = u.selection } = e,
                    { hanging: a = !1, voids: i = !1, mode: o = "lowest" } = e;
                  if (D) {
                    if (null == n) {
                      if (ut.isPath(D)) {
                        var [s] = U.parent(u, D);
                        n = (u) => s.children.includes(u);
                      } else n = (e) => L.isElement(e) && U.isBlock(u, e);
                    }
                    if (
                      (!a &&
                        uo.isRange(D) &&
                        (D = U.unhangRange(u, D, { voids: i })),
                      uo.isRange(D))
                    ) {
                      if (uo.isCollapsed(D)) D = D.anchor;
                      else {
                        var [, C] = uo.edges(D),
                          B = U.pointRef(u, C);
                        uj.delete(u, { at: D }),
                          (D = B.unref()),
                          null == e.at && uj.select(u, D);
                      }
                    }
                    var [l] = U.nodes(u, {
                        at: D,
                        match: n,
                        voids: i,
                        mode: o,
                      }),
                      c = U.previous(u, { at: D, match: n, voids: i, mode: o });
                    if (l && c) {
                      var [A, F] = l,
                        [h, E] = c;
                      if (0 !== F.length && 0 !== E.length) {
                        var p = ut.next(E),
                          d = ut.common(F, E),
                          v = ut.isSibling(F, E),
                          g = Array.from(U.levels(u, { at: F }), (u) => {
                            var [e] = u;
                            return e;
                          })
                            .slice(d.length)
                            .slice(0, -1),
                          m = U.above(u, {
                            at: F,
                            mode: "highest",
                            match: (e) => g.includes(e) && uy(u, e),
                          }),
                          y = m && U.pathRef(u, m[1]);
                        if (uF.isText(A) && uF.isText(h)) {
                          var b = f(A, ud);
                          (r = h.text.length), (t = b);
                        } else if (L.isElement(A) && L.isElement(h)) {
                          var b = f(A, uv);
                          (r = h.children.length), (t = b);
                        } else
                          throw Error(
                            "Cannot merge the node at path ["
                              .concat(
                                F,
                                "] with the previous sibling because it is not the same kind: "
                              )
                              .concat(uC.stringify(A), " ")
                              .concat(uC.stringify(h))
                          );
                        v || uj.moveNodes(u, { at: F, to: p, voids: i }),
                          y && uj.removeNodes(u, { at: y.current, voids: i }),
                          (L.isElement(h) && U.isEmpty(u, h)) ||
                          (uF.isText(h) &&
                            "" === h.text &&
                            0 !== E[E.length - 1])
                            ? uj.removeNodes(u, { at: E, voids: i })
                            : u.apply({
                                type: "merge_node",
                                path: p,
                                position: r,
                                properties: t,
                              }),
                          y && y.unref();
                      }
                    }
                  }
                });
              },
              moveNodes(u, e) {
                U.withoutNormalizing(u, () => {
                  var {
                      to: t,
                      at: r = u.selection,
                      mode: n = "lowest",
                      voids: D = !1,
                    } = e,
                    { match: a } = e;
                  if (r) {
                    null == a &&
                      (a = ut.isPath(r)
                        ? uw(u, r)
                        : (e) => L.isElement(e) && U.isBlock(u, e));
                    var i = U.pathRef(u, t);
                    for (var o of Array.from(
                      U.nodes(u, { at: r, match: a, mode: n, voids: D }),
                      (e) => {
                        var [, t] = e;
                        return U.pathRef(u, t);
                      }
                    )) {
                      var s = o.unref(),
                        C = i.current;
                      0 !== s.length &&
                        u.apply({ type: "move_node", path: s, newPath: C }),
                        i.current &&
                          ut.isSibling(C, s) &&
                          ut.isAfter(C, s) &&
                          (i.current = ut.next(i.current));
                    }
                    i.unref();
                  }
                });
              },
              removeNodes(u) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                U.withoutNormalizing(u, () => {
                  var {
                      hanging: t = !1,
                      voids: r = !1,
                      mode: n = "lowest",
                    } = e,
                    { at: D = u.selection, match: a } = e;
                  if (D)
                    for (var i of (null == a &&
                      (a = ut.isPath(D)
                        ? uw(u, D)
                        : (e) => L.isElement(e) && U.isBlock(u, e)),
                    !t &&
                      uo.isRange(D) &&
                      (D = U.unhangRange(u, D, { voids: r })),
                    Array.from(
                      U.nodes(u, { at: D, match: a, mode: n, voids: r }),
                      (e) => {
                        var [, t] = e;
                        return U.pathRef(u, t);
                      }
                    ))) {
                      var o = i.unref();
                      if (o) {
                        var [s] = U.node(u, o);
                        u.apply({ type: "remove_node", path: o, node: s });
                      }
                    }
                });
              },
              setNodes(u, e) {
                var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                U.withoutNormalizing(u, () => {
                  var {
                      match: r,
                      at: n = u.selection,
                      compare: D,
                      merge: a,
                    } = t,
                    {
                      hanging: i = !1,
                      mode: o = "lowest",
                      split: s = !1,
                      voids: C = !1,
                    } = t;
                  if (n) {
                    if (
                      (null == r &&
                        (r = ut.isPath(n)
                          ? uw(u, n)
                          : (e) => L.isElement(e) && U.isBlock(u, e)),
                      !i &&
                        uo.isRange(n) &&
                        (n = U.unhangRange(u, n, { voids: C })),
                      s && uo.isRange(n))
                    ) {
                      if (
                        uo.isCollapsed(n) &&
                        U.leaf(u, n.anchor)[0].text.length > 0
                      )
                        return;
                      var B = U.rangeRef(u, n, { affinity: "inward" }),
                        [l, c] = uo.edges(n),
                        f = "lowest" === o ? "lowest" : "highest",
                        A = U.isEnd(u, c, c.path);
                      uj.splitNodes(u, {
                        at: c,
                        match: r,
                        mode: f,
                        voids: C,
                        always: !A,
                      });
                      var F = U.isStart(u, l, l.path);
                      uj.splitNodes(u, {
                        at: l,
                        match: r,
                        mode: f,
                        voids: C,
                        always: !F,
                      }),
                        (n = B.unref()),
                        null == t.at && uj.select(u, n);
                    }
                    for (var [h, E] of (D || (D = (u, e) => u !== e),
                    U.nodes(u, { at: n, match: r, mode: o, voids: C }))) {
                      var p = {},
                        d = {};
                      if (0 !== E.length) {
                        var v = !1;
                        for (var g in e)
                          "children" !== g &&
                            "text" !== g &&
                            D(e[g], h[g]) &&
                            ((v = !0),
                            h.hasOwnProperty(g) && (p[g] = h[g]),
                            a
                              ? null != e[g] && (d[g] = a(h[g], e[g]))
                              : null != e[g] && (d[g] = e[g]));
                        v &&
                          u.apply({
                            type: "set_node",
                            path: E,
                            properties: p,
                            newProperties: d,
                          });
                      }
                    }
                  }
                });
              },
              splitNodes(u) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                U.withoutNormalizing(u, () => {
                  var t,
                    r,
                    { mode: n = "lowest", voids: D = !1 } = e,
                    {
                      match: a,
                      at: i = u.selection,
                      height: o = 0,
                      always: s = !1,
                    } = e;
                  if (
                    (null == a &&
                      (a = (e) => L.isElement(e) && U.isBlock(u, e)),
                    uo.isRange(i) && (i = ub(u, i)),
                    ut.isPath(i))
                  ) {
                    var C = i,
                      B = U.point(u, C),
                      [l] = U.parent(u, C);
                    (a = (u) => u === l),
                      (o = B.path.length - C.length + 1),
                      (i = B),
                      (s = !0);
                  }
                  if (i) {
                    var c = U.pointRef(u, i, { affinity: "backward" });
                    try {
                      var [f] = U.nodes(u, {
                        at: i,
                        match: a,
                        mode: n,
                        voids: D,
                      });
                      if (!f) return;
                      var A = U.void(u, { at: i, mode: "highest" });
                      if (!D && A) {
                        var [F, h] = A;
                        if (L.isElement(F) && u.isInline(F)) {
                          var E = U.after(u, h);
                          if (!E) {
                            var p = ut.next(h);
                            uj.insertNodes(
                              u,
                              { text: "" },
                              { at: p, voids: D }
                            ),
                              (E = U.point(u, p));
                          }
                          (i = E), (s = !0);
                        }
                        (o = i.path.length - h.length + 1), (s = !0);
                      }
                      t = U.pointRef(u, i);
                      var d = i.path.length - o,
                        [, v] = f,
                        g = i.path.slice(0, d),
                        m = 0 === o ? i.offset : i.path[d] + 0;
                      for (var [y, b] of U.levels(u, {
                        at: g,
                        reverse: !0,
                        voids: D,
                      })) {
                        var w = !1;
                        if (
                          b.length < v.length ||
                          0 === b.length ||
                          (!D && L.isElement(y) && U.isVoid(u, y))
                        )
                          break;
                        var O = c.current,
                          x = U.isEnd(u, O, b);
                        if (s || !c || !U.isEdge(u, O, b)) {
                          w = !0;
                          var P = X.extractProps(y);
                          u.apply({
                            type: "split_node",
                            path: b,
                            position: m,
                            properties: P,
                          });
                        }
                        m = b[b.length - 1] + (w || x ? 1 : 0);
                      }
                      if (null == e.at) {
                        var k = t.current || U.end(u, []);
                        uj.select(u, k);
                      }
                    } finally {
                      c.unref(), null === (r = t) || void 0 === r || r.unref();
                    }
                  }
                });
              },
              unsetNodes(u, e) {
                var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                Array.isArray(e) || (e = [e]);
                var r = {};
                for (var n of e) r[n] = null;
                uj.setNodes(u, r, t);
              },
              unwrapNodes(u) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                U.withoutNormalizing(u, () => {
                  var { mode: t = "lowest", split: r = !1, voids: n = !1 } = e,
                    { at: D = u.selection, match: a } = e;
                  if (D) {
                    null == a &&
                      (a = ut.isPath(D)
                        ? uw(u, D)
                        : (e) => L.isElement(e) && U.isBlock(u, e)),
                      ut.isPath(D) && (D = U.range(u, D));
                    var i = uo.isRange(D) ? U.rangeRef(u, D) : null;
                    for (var o of Array.from(
                      U.nodes(u, { at: D, match: a, mode: t, voids: n }),
                      (e) => {
                        var [, t] = e;
                        return U.pathRef(u, t);
                      }
                    ).reverse())
                      !(function (e) {
                        var t = e.unref(),
                          [D] = U.node(u, t),
                          a = U.range(u, t);
                        r && i && (a = uo.intersection(i.current, a)),
                          uj.liftNodes(u, {
                            at: a,
                            match: (u) =>
                              L.isAncestor(D) && D.children.includes(u),
                            voids: n,
                          });
                      })(o);
                    i && i.unref();
                  }
                });
              },
              wrapNodes(u, e) {
                var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                U.withoutNormalizing(u, () => {
                  var { mode: r = "lowest", split: n = !1, voids: D = !1 } = t,
                    { match: a, at: i = u.selection } = t;
                  if (i) {
                    if (
                      (null == a &&
                        (a = ut.isPath(i)
                          ? uw(u, i)
                          : u.isInline(e)
                          ? (e) =>
                              (L.isElement(e) && U.isInline(u, e)) ||
                              uF.isText(e)
                          : (e) => L.isElement(e) && U.isBlock(u, e)),
                      n && uo.isRange(i))
                    ) {
                      var [o, s] = uo.edges(i),
                        C = U.rangeRef(u, i, { affinity: "inward" });
                      uj.splitNodes(u, { at: s, match: a, voids: D }),
                        uj.splitNodes(u, { at: o, match: a, voids: D }),
                        (i = C.unref()),
                        null == t.at && uj.select(u, i);
                    }
                    for (var [, B] of Array.from(
                      U.nodes(u, {
                        at: i,
                        match: u.isInline(e)
                          ? (e) => L.isElement(e) && U.isBlock(u, e)
                          : (u) => U.isEditor(u),
                        mode: "lowest",
                        voids: D,
                      })
                    )) {
                      var l = uo.isRange(i)
                        ? uo.intersection(i, U.range(u, B))
                        : i;
                      if (l) {
                        var c = Array.from(
                          U.nodes(u, { at: l, match: a, mode: r, voids: D })
                        );
                        if (
                          c.length > 0 &&
                          "continue" ===
                            (function () {
                              var [t] = c,
                                r = c[c.length - 1],
                                [, n] = t,
                                [, a] = r;
                              if (0 === n.length && 0 === a.length)
                                return "continue";
                              var i = ut.equals(n, a)
                                  ? ut.parent(n)
                                  : ut.common(n, a),
                                o = U.range(u, n, a),
                                [s] = U.node(u, i),
                                C = i.length + 1,
                                B = ut.next(a.slice(0, C)),
                                l = um(um({}, e), {}, { children: [] });
                              uj.insertNodes(u, l, { at: B, voids: D }),
                                uj.moveNodes(u, {
                                  at: o,
                                  match: (u) =>
                                    L.isAncestor(s) && s.children.includes(u),
                                  to: B.concat(0),
                                  voids: D,
                                });
                            })()
                        )
                          continue;
                      }
                    }
                  }
                });
              },
            }
          ),
          {
            collapse(u) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { edge: t = "anchor" } = e,
                { selection: r } = u;
              if (r) {
                if ("anchor" === t) uj.select(u, r.anchor);
                else if ("focus" === t) uj.select(u, r.focus);
                else if ("start" === t) {
                  var [n] = uo.edges(r);
                  uj.select(u, n);
                } else if ("end" === t) {
                  var [, D] = uo.edges(r);
                  uj.select(u, D);
                }
              }
            },
            deselect(u) {
              var { selection: e } = u;
              e &&
                u.apply({
                  type: "set_selection",
                  properties: e,
                  newProperties: null,
                });
            },
            move(u) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { selection: t } = u,
                { distance: r = 1, unit: n = "character", reverse: D = !1 } = e,
                { edge: a = null } = e;
              if (t) {
                "start" === a && (a = uo.isBackward(t) ? "focus" : "anchor"),
                  "end" === a && (a = uo.isBackward(t) ? "anchor" : "focus");
                var { anchor: i, focus: o } = t,
                  s = { distance: r, unit: n },
                  C = {};
                if (null == a || "anchor" === a) {
                  var B = D ? U.before(u, i, s) : U.after(u, i, s);
                  B && (C.anchor = B);
                }
                if (null == a || "focus" === a) {
                  var l = D ? U.before(u, o, s) : U.after(u, o, s);
                  l && (C.focus = l);
                }
                uj.setSelection(u, C);
              }
            },
            select(u, e) {
              var { selection: t } = u;
              if (((e = U.range(u, e)), t)) {
                uj.setSelection(u, e);
                return;
              }
              if (!uo.isRange(e))
                throw Error(
                  "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                    uC.stringify(e)
                  )
                );
              u.apply({
                type: "set_selection",
                properties: t,
                newProperties: e,
              });
            },
            setPoint(u, e) {
              var t =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { selection: r } = u,
                { edge: n = "both" } = t;
              if (r) {
                "start" === n && (n = uo.isBackward(r) ? "focus" : "anchor"),
                  "end" === n && (n = uo.isBackward(r) ? "anchor" : "focus");
                var { anchor: D, focus: a } = r,
                  i = "anchor" === n ? D : a;
                uj.setSelection(u, {
                  ["anchor" === n ? "anchor" : "focus"]: ux(ux({}, i), e),
                });
              }
            },
            setSelection(u, e) {
              var { selection: t } = u,
                r = {},
                n = {};
              if (t) {
                for (var D in e)
                  (("anchor" !== D ||
                    null == e.anchor ||
                    uD.equals(e.anchor, t.anchor)) &&
                    ("focus" !== D ||
                      null == e.focus ||
                      uD.equals(e.focus, t.focus)) &&
                    ("anchor" === D || "focus" === D || e[D] === t[D])) ||
                    ((r[D] = t[D]), (n[D] = e[D]));
                Object.keys(r).length > 0 &&
                  u.apply({
                    type: "set_selection",
                    properties: r,
                    newProperties: n,
                  });
              }
            },
          }
        ),
        {
          delete(u) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            U.withoutNormalizing(u, () => {
              var t,
                {
                  reverse: r = !1,
                  unit: n = "character",
                  distance: D = 1,
                  voids: a = !1,
                } = e,
                { at: i = u.selection, hanging: o = !1 } = e;
              if (i) {
                var s = !1;
                if (
                  (uo.isRange(i) &&
                    uo.isCollapsed(i) &&
                    ((s = !0), (i = i.anchor)),
                  uD.isPoint(i))
                ) {
                  var C = U.void(u, { at: i, mode: "highest" });
                  if (!a && C) {
                    var [, B] = C;
                    i = B;
                  } else {
                    var l = { unit: n, distance: D },
                      c = r
                        ? U.before(u, i, l) || U.start(u, [])
                        : U.after(u, i, l) || U.end(u, []);
                    (i = { anchor: i, focus: c }), (o = !0);
                  }
                }
                if (ut.isPath(i)) {
                  uj.removeNodes(u, { at: i, voids: a });
                  return;
                }
                if (!uo.isCollapsed(i)) {
                  if (!o) {
                    var [, f] = uo.edges(i),
                      A = U.end(u, []);
                    uD.equals(f, A) || (i = U.unhangRange(u, i, { voids: a }));
                  }
                  var [F, h] = uo.edges(i),
                    E = U.above(u, {
                      match: (e) => L.isElement(e) && U.isBlock(u, e),
                      at: F,
                      voids: a,
                    }),
                    p = U.above(u, {
                      match: (e) => L.isElement(e) && U.isBlock(u, e),
                      at: h,
                      voids: a,
                    }),
                    d = E && p && !ut.equals(E[1], p[1]),
                    v = ut.equals(F.path, h.path),
                    g = a ? null : U.void(u, { at: F, mode: "highest" }),
                    m = a ? null : U.void(u, { at: h, mode: "highest" });
                  if (g) {
                    var y = U.before(u, F);
                    y && E && ut.isAncestor(E[1], y.path) && (F = y);
                  }
                  if (m) {
                    var b = U.after(u, h);
                    b && p && ut.isAncestor(p[1], b.path) && (h = b);
                  }
                  var w = [];
                  for (var O of U.nodes(u, { at: i, voids: a })) {
                    var [x, P] = O;
                    (!t || 0 !== ut.compare(P, t)) &&
                      ((!a && L.isElement(x) && U.isVoid(u, x)) ||
                        (!ut.isCommon(P, F.path) && !ut.isCommon(P, h.path))) &&
                      (w.push(O), (t = P));
                  }
                  var k = Array.from(w, (e) => {
                      var [, t] = e;
                      return U.pathRef(u, t);
                    }),
                    j = U.pointRef(u, F),
                    N = U.pointRef(u, h),
                    _ = "";
                  if (!v && !g) {
                    var R = j.current,
                      [T] = U.leaf(u, R),
                      { path: S } = R,
                      { offset: q } = F,
                      I = T.text.slice(q);
                    I.length > 0 &&
                      (u.apply({
                        type: "remove_text",
                        path: S,
                        offset: q,
                        text: I,
                      }),
                      (_ = I));
                  }
                  if (
                    (k
                      .reverse()
                      .map((u) => u.unref())
                      .filter((u) => null !== u)
                      .forEach((e) => uj.removeNodes(u, { at: e, voids: a })),
                    !m)
                  ) {
                    var V = N.current,
                      [z] = U.leaf(u, V),
                      { path: M } = V,
                      W = v ? F.offset : 0,
                      $ = z.text.slice(W, h.offset);
                    $.length > 0 &&
                      (u.apply({
                        type: "remove_text",
                        path: M,
                        offset: W,
                        text: $,
                      }),
                      (_ = $));
                  }
                  !v &&
                    d &&
                    N.current &&
                    j.current &&
                    uj.mergeNodes(u, { at: N.current, hanging: !0, voids: a }),
                    s &&
                      r &&
                      "character" === n &&
                      _.length > 1 &&
                      _.match(/[\u0E00-\u0E7F]+/) &&
                      uj.insertText(u, _.slice(0, _.length - D));
                  var J = j.unref(),
                    Z = N.unref(),
                    G = r ? J || Z : Z || J;
                  null == e.at && G && uj.select(u, G);
                }
              }
            });
          },
          insertFragment(u, e) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            U.withoutNormalizing(u, () => {
              var r,
                { hanging: n = !1, voids: D = !1 } = t,
                { at: a = u.selection } = t;
              if (e.length && a) {
                if (uo.isRange(a)) {
                  if (
                    (n || (a = U.unhangRange(u, a, { voids: D })),
                    uo.isCollapsed(a))
                  )
                    a = a.anchor;
                  else {
                    var [, i] = uo.edges(a);
                    if (!D && U.void(u, { at: i })) return;
                    var o = U.pointRef(u, i);
                    uj.delete(u, { at: a }), (a = o.unref());
                  }
                } else ut.isPath(a) && (a = U.start(u, a));
                if (!(!D && U.void(u, { at: a }))) {
                  var s = U.above(u, {
                    at: a,
                    match: (e) => L.isElement(e) && U.isInline(u, e),
                    mode: "highest",
                    voids: D,
                  });
                  if (s) {
                    var [, C] = s;
                    U.isEnd(u, a, C)
                      ? (a = U.after(u, C))
                      : U.isStart(u, a, C) && (a = U.before(u, C));
                  }
                  var [, B] = U.above(u, {
                      match: (e) => L.isElement(e) && U.isBlock(u, e),
                      at: a,
                      voids: D,
                    }),
                    l = U.isStart(u, a, B),
                    c = U.isEnd(u, a, B),
                    f = l && c,
                    A = !l || (l && c),
                    F = !c,
                    [, h] = X.first({ children: e }, []),
                    [, E] = X.last({ children: e }, []),
                    p = [],
                    d = (e) => {
                      var [t, r] = e;
                      return (
                        0 !== r.length &&
                        (!!f ||
                          !(
                            (A &&
                              ut.isAncestor(r, h) &&
                              L.isElement(t) &&
                              !u.isVoid(t) &&
                              !u.isInline(t)) ||
                            (F &&
                              ut.isAncestor(r, E) &&
                              L.isElement(t) &&
                              !u.isVoid(t) &&
                              !u.isInline(t))
                          ))
                      );
                    };
                  for (var v of X.nodes({ children: e }, { pass: d }))
                    d(v) && p.push(v);
                  var g = [],
                    m = [],
                    y = [],
                    b = !0,
                    w = !1;
                  for (var [O] of p)
                    L.isElement(O) && !u.isInline(O)
                      ? ((b = !1), (w = !0), m.push(O))
                      : b
                      ? g.push(O)
                      : y.push(O);
                  var [x] = U.nodes(u, {
                      at: a,
                      match: (e) => uF.isText(e) || U.isInline(u, e),
                      mode: "highest",
                      voids: D,
                    }),
                    [, P] = x,
                    k = U.isStart(u, a, P),
                    j = U.isEnd(u, a, P),
                    N = U.pathRef(u, c && !y.length ? ut.next(B) : B),
                    _ = U.pathRef(u, j ? ut.next(P) : P);
                  uj.splitNodes(u, {
                    at: a,
                    match: (e) =>
                      w
                        ? L.isElement(e) && U.isBlock(u, e)
                        : uF.isText(e) || U.isInline(u, e),
                    mode: w ? "lowest" : "highest",
                    always: w && (!l || g.length > 0) && (!c || y.length > 0),
                    voids: D,
                  });
                  var R = U.pathRef(u, !k || (k && j) ? ut.next(P) : P);
                  if (
                    (uj.insertNodes(u, g, {
                      at: R.current,
                      match: (e) => uF.isText(e) || U.isInline(u, e),
                      mode: "highest",
                      voids: D,
                    }),
                    f &&
                      !g.length &&
                      m.length &&
                      !y.length &&
                      uj.delete(u, { at: B, voids: D }),
                    uj.insertNodes(u, m, {
                      at: N.current,
                      match: (e) => L.isElement(e) && U.isBlock(u, e),
                      mode: "lowest",
                      voids: D,
                    }),
                    uj.insertNodes(u, y, {
                      at: _.current,
                      match: (e) => uF.isText(e) || U.isInline(u, e),
                      mode: "highest",
                      voids: D,
                    }),
                    !t.at &&
                      (y.length > 0 && _.current
                        ? (r = ut.previous(_.current))
                        : m.length > 0 && N.current
                        ? (r = ut.previous(N.current))
                        : R.current && (r = ut.previous(R.current)),
                      r))
                  ) {
                    var T = U.end(u, r);
                    uj.select(u, T);
                  }
                  R.unref(), N.unref(), _.unref();
                }
              }
            });
          },
          insertText(u, e) {
            var t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            U.withoutNormalizing(u, () => {
              var { voids: r = !1 } = t,
                { at: n = u.selection } = t;
              if (n) {
                if ((ut.isPath(n) && (n = U.range(u, n)), uo.isRange(n))) {
                  if (uo.isCollapsed(n)) n = n.anchor;
                  else {
                    var D = uo.end(n);
                    if (!r && U.void(u, { at: D })) return;
                    var a = uo.start(n),
                      i = U.pointRef(u, a),
                      o = U.pointRef(u, D);
                    uj.delete(u, { at: n, voids: r });
                    var s = i.unref(),
                      C = o.unref();
                    (n = s || C), uj.setSelection(u, { anchor: n, focus: n });
                  }
                }
                if (!(!r && U.void(u, { at: n }))) {
                  var { path: B, offset: l } = n;
                  e.length > 0 &&
                    u.apply({
                      type: "insert_text",
                      path: B,
                      offset: l,
                      text: e,
                    });
                }
              }
            });
          },
        }
      );
    },
  },
]);
