(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // http-url:https://unpkg.com/geolib@3.3.3
  var require_geolib_3_3 = __commonJS({
    "http-url:https://unpkg.com/geolib@3.3.3"(exports, module) {
      !function(t, n) {
        "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.geolib = n() : t.geolib = n();
      }("undefined" != typeof self ? self : exports, function() {
        return function(t) {
          var n = {};
          function r(e) {
            if (n[e])
              return n[e].exports;
            var i = n[e] = { i: e, l: false, exports: {} };
            return t[e].call(i.exports, i, i.exports, r), i.l = true, i.exports;
          }
          return r.m = t, r.c = n, r.d = function(t2, n2, e) {
            r.o(t2, n2) || Object.defineProperty(t2, n2, { enumerable: true, get: e });
          }, r.r = function(t2) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
          }, r.t = function(t2, n2) {
            if (1 & n2 && (t2 = r(t2)), 8 & n2)
              return t2;
            if (4 & n2 && "object" == typeof t2 && t2 && t2.__esModule)
              return t2;
            var e = /* @__PURE__ */ Object.create(null);
            if (r.r(e), Object.defineProperty(e, "default", { enumerable: true, value: t2 }), 2 & n2 && "string" != typeof t2)
              for (var i in t2)
                r.d(e, i, function(n3) {
                  return t2[n3];
                }.bind(null, i));
            return e;
          }, r.n = function(t2) {
            var n2 = t2 && t2.__esModule ? function() {
              return t2.default;
            } : function() {
              return t2;
            };
            return r.d(n2, "a", n2), n2;
          }, r.o = function(t2, n2) {
            return Object.prototype.hasOwnProperty.call(t2, n2);
          }, r.p = "", r(r.s = 0);
        }([function(t, n, r) {
          "use strict";
          r.r(n), r.d(n, "computeDestinationPoint", function() {
            return C;
          }), r.d(n, "convertArea", function() {
            return F;
          }), r.d(n, "convertDistance", function() {
            return k;
          }), r.d(n, "convertSpeed", function() {
            return T;
          }), r.d(n, "decimalToSexagesimal", function() {
            return B;
          }), r.d(n, "findNearest", function() {
            return K;
          }), r.d(n, "getAreaOfPolygon", function() {
            return Y;
          }), r.d(n, "getBounds", function() {
            return Z;
          }), r.d(n, "getBoundsOfDistance", function() {
            return G;
          }), r.d(n, "getCenter", function() {
            return V;
          }), r.d(n, "getCenterOfBounds", function() {
            return U;
          }), r.d(n, "getCompassDirection", function() {
            return H;
          }), r.d(n, "getCoordinateKey", function() {
            return v;
          }), r.d(n, "getCoordinateKeys", function() {
            return S;
          }), r.d(n, "getDistance", function() {
            return X;
          }), r.d(n, "getDistanceFromLine", function() {
            return J;
          }), r.d(n, "getGreatCircleBearing", function() {
            return Q;
          }), r.d(n, "getLatitude", function() {
            return A;
          }), r.d(n, "getLongitude", function() {
            return I;
          }), r.d(n, "getPathLength", function() {
            return nt;
          }), r.d(n, "getPreciseDistance", function() {
            return rt;
          }), r.d(n, "getRhumbLineBearing", function() {
            return z;
          }), r.d(n, "getRoughCompassDirection", function() {
            return et;
          }), r.d(n, "getSpeed", function() {
            return it;
          }), r.d(n, "isDecimal", function() {
            return m;
          }), r.d(n, "isPointInLine", function() {
            return ot;
          }), r.d(n, "isPointInPolygon", function() {
            return at;
          }), r.d(n, "isPointNearLine", function() {
            return ut;
          }), r.d(n, "isPointWithinRadius", function() {
            return ct;
          }), r.d(n, "isSexagesimal", function() {
            return p;
          }), r.d(n, "isValidCoordinate", function() {
            return w;
          }), r.d(n, "isValidLatitude", function() {
            return P;
          }), r.d(n, "isValidLongitude", function() {
            return N;
          }), r.d(n, "orderByDistance", function() {
            return _;
          }), r.d(n, "sexagesimalToDecimal", function() {
            return y;
          }), r.d(n, "toDecimal", function() {
            return L;
          }), r.d(n, "toRad", function() {
            return W;
          }), r.d(n, "toDeg", function() {
            return D;
          }), r.d(n, "wktToPolygon", function() {
            return lt;
          }), r.d(n, "sexagesimalPattern", function() {
            return e;
          }), r.d(n, "earthRadius", function() {
            return i;
          }), r.d(n, "MINLAT", function() {
            return o;
          }), r.d(n, "MAXLAT", function() {
            return a;
          }), r.d(n, "MINLON", function() {
            return u;
          }), r.d(n, "MAXLON", function() {
            return c;
          }), r.d(n, "longitudeKeys", function() {
            return f;
          }), r.d(n, "latitudeKeys", function() {
            return s;
          }), r.d(n, "altitudeKeys", function() {
            return l;
          }), r.d(n, "distanceConversion", function() {
            return d;
          }), r.d(n, "timeConversion", function() {
            return h;
          }), r.d(n, "areaConversion", function() {
            return g;
          });
          var e = /^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/, i = 6378137, o = -90, a = 90, u = -180, c = 180, f = ["lng", "lon", "longitude", 0], s = ["lat", "latitude", 1], l = ["alt", "altitude", "elevation", "elev", 2], d = { m: 1, km: 1e-3, cm: 100, mm: 1e3, mi: 1 / 1609.344, sm: 1 / 1852.216, ft: 100 / 30.48, in: 100 / 2.54, yd: 1 / 0.9144 }, h = { m: 60, h: 3600, d: 86400 }, g = { m2: 1, km2: 1e-6, ha: 1e-4, a: 0.01, ft2: 10.763911, yd2: 1.19599, in2: 1550.0031 };
          g.sqm = g.m2, g.sqkm = g.km2, g.sqft = g.ft2, g.sqyd = g.yd2, g.sqin = g.in2;
          var v = function(t2, n2) {
            return n2.reduce(function(n3, r2) {
              if (null == t2)
                throw new Error("'".concat(t2, "' is no valid coordinate."));
              return Object.prototype.hasOwnProperty.call(t2, r2) && void 0 !== r2 && void 0 === n3 ? (n3 = r2, r2) : n3;
            }, void 0);
          }, m = function(t2) {
            var n2 = t2.toString().trim();
            return !isNaN(parseFloat(n2)) && parseFloat(n2) === Number(n2);
          }, p = function(t2) {
            return e.test(t2.toString().trim());
          }, y = function(t2) {
            var n2 = new RegExp(e).exec(t2.toString().trim());
            if (null == n2)
              throw new Error("Given value is not in sexagesimal format");
            var r2 = Number(n2[2]) / 60 || 0, i2 = Number(n2[4]) / 3600 || 0, o2 = parseFloat(n2[1]) + r2 + i2;
            return ["S", "W"].includes(n2[7]) ? -o2 : o2;
          };
          function b(t2, n2) {
            var r2 = Object.keys(t2);
            if (Object.getOwnPropertySymbols) {
              var e2 = Object.getOwnPropertySymbols(t2);
              n2 && (e2 = e2.filter(function(n3) {
                return Object.getOwnPropertyDescriptor(t2, n3).enumerable;
              })), r2.push.apply(r2, e2);
            }
            return r2;
          }
          function M(t2) {
            for (var n2 = 1; n2 < arguments.length; n2++) {
              var r2 = null != arguments[n2] ? arguments[n2] : {};
              n2 % 2 ? b(Object(r2), true).forEach(function(n3) {
                O(t2, n3, r2[n3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : b(Object(r2)).forEach(function(n3) {
                Object.defineProperty(t2, n3, Object.getOwnPropertyDescriptor(r2, n3));
              });
            }
            return t2;
          }
          function O(t2, n2, r2) {
            return n2 in t2 ? Object.defineProperty(t2, n2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[n2] = r2, t2;
          }
          var S = function(t2) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { longitude: f, latitude: s, altitude: l }, r2 = v(t2, n2.longitude), e2 = v(t2, n2.latitude), i2 = v(t2, n2.altitude);
            return M({ latitude: e2, longitude: r2 }, i2 ? { altitude: i2 } : {});
          }, P = function t2(n2) {
            return m(n2) ? !(parseFloat(n2) > a || n2 < o) : !!p(n2) && t2(y(n2));
          }, N = function t2(n2) {
            return m(n2) ? !(parseFloat(n2) > c || n2 < u) : !!p(n2) && t2(y(n2));
          }, w = function(t2) {
            var n2 = S(t2), r2 = n2.latitude, e2 = n2.longitude;
            if (Array.isArray(t2) && t2.length >= 2)
              return N(t2[0]) && P(t2[1]);
            if (void 0 === r2 || void 0 === e2)
              return false;
            var i2 = t2[e2], o2 = t2[r2];
            return void 0 !== o2 && void 0 !== i2 && (false !== P(o2) && false !== N(i2));
          };
          function j(t2, n2) {
            var r2 = Object.keys(t2);
            if (Object.getOwnPropertySymbols) {
              var e2 = Object.getOwnPropertySymbols(t2);
              n2 && (e2 = e2.filter(function(n3) {
                return Object.getOwnPropertyDescriptor(t2, n3).enumerable;
              })), r2.push.apply(r2, e2);
            }
            return r2;
          }
          function E(t2) {
            for (var n2 = 1; n2 < arguments.length; n2++) {
              var r2 = null != arguments[n2] ? arguments[n2] : {};
              n2 % 2 ? j(Object(r2), true).forEach(function(n3) {
                x(t2, n3, r2[n3]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : j(Object(r2)).forEach(function(n3) {
                Object.defineProperty(t2, n3, Object.getOwnPropertyDescriptor(r2, n3));
              });
            }
            return t2;
          }
          function x(t2, n2, r2) {
            return n2 in t2 ? Object.defineProperty(t2, n2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[n2] = r2, t2;
          }
          var L = function t2(n2) {
            if (m(n2))
              return Number(n2);
            if (p(n2))
              return y(n2);
            if (w(n2)) {
              var r2 = S(n2);
              return Array.isArray(n2) ? n2.map(function(n3, r3) {
                return [0, 1].includes(r3) ? t2(n3) : n3;
              }) : E(E(E({}, n2), r2.latitude && x({}, r2.latitude, t2(n2[r2.latitude]))), r2.longitude && x({}, r2.longitude, t2(n2[r2.longitude])));
            }
            return Array.isArray(n2) ? n2.map(function(n3) {
              return w(n3) ? t2(n3) : n3;
            }) : n2;
          }, A = function(t2, n2) {
            var r2 = v(t2, s);
            if (null != r2) {
              var e2 = t2[r2];
              return true === n2 ? e2 : L(e2);
            }
          }, I = function(t2, n2) {
            var r2 = v(t2, f);
            if (null != r2) {
              var e2 = t2[r2];
              return true === n2 ? e2 : L(e2);
            }
          }, W = function(t2) {
            return t2 * Math.PI / 180;
          }, D = function(t2) {
            return 180 * t2 / Math.PI;
          }, C = function(t2, n2, r2) {
            var e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 6371e3, i2 = A(t2), o2 = I(t2), a2 = n2 / e2, f2 = W(r2), s2 = W(i2), l2 = W(o2), d2 = Math.asin(Math.sin(s2) * Math.cos(a2) + Math.cos(s2) * Math.sin(a2) * Math.cos(f2)), h2 = l2 + Math.atan2(Math.sin(f2) * Math.sin(a2) * Math.cos(s2), Math.cos(a2) - Math.sin(s2) * Math.sin(d2)), g2 = D(h2);
            return (g2 < u || g2 > c) && (h2 = (h2 + 3 * Math.PI) % (2 * Math.PI) - Math.PI, g2 = D(h2)), { latitude: D(d2), longitude: g2 };
          }, F = function(t2) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "m", r2 = g[n2];
            if (r2)
              return t2 * r2;
            throw new Error("Invalid unit used for area conversion.");
          }, k = function(t2) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "m", r2 = d[n2];
            if (r2)
              return t2 * r2;
            throw new Error("Invalid unit used for distance conversion.");
          }, T = function(t2) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "kmh";
            switch (n2) {
              case "kmh":
                return t2 * h.h * d.km;
              case "mph":
                return t2 * h.h * d.mi;
              default:
                return t2;
            }
          };
          function q(t2, n2) {
            return function(t3) {
              if (Array.isArray(t3))
                return t3;
            }(t2) || function(t3, n3) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t3)))
                return;
              var r2 = [], e2 = true, i2 = false, o2 = void 0;
              try {
                for (var a2, u2 = t3[Symbol.iterator](); !(e2 = (a2 = u2.next()).done) && (r2.push(a2.value), !n3 || r2.length !== n3); e2 = true)
                  ;
              } catch (t4) {
                i2 = true, o2 = t4;
              } finally {
                try {
                  e2 || null == u2.return || u2.return();
                } finally {
                  if (i2)
                    throw o2;
                }
              }
              return r2;
            }(t2, n2) || function(t3, n3) {
              if (!t3)
                return;
              if ("string" == typeof t3)
                return $(t3, n3);
              var r2 = Object.prototype.toString.call(t3).slice(8, -1);
              "Object" === r2 && t3.constructor && (r2 = t3.constructor.name);
              if ("Map" === r2 || "Set" === r2)
                return Array.from(t3);
              if ("Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
                return $(t3, n3);
            }(t2, n2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function $(t2, n2) {
            (null == n2 || n2 > t2.length) && (n2 = t2.length);
            for (var r2 = 0, e2 = new Array(n2); r2 < n2; r2++)
              e2[r2] = t2[r2];
            return e2;
          }
          var B = function(t2) {
            var n2 = q(t2.toString().split("."), 2), r2 = n2[0], e2 = n2[1], i2 = Math.abs(Number(r2)), o2 = 60 * Number("0." + (e2 || 0)), a2 = o2.toString().split("."), u2 = Math.floor(o2), c2 = q(function(t3) {
              var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4, r3 = Math.pow(10, n3);
              return Math.round(t3 * r3) / r3;
            }(60 * Number("0." + (a2[1] || 0))).toString().split("."), 2), f2 = c2[0], s2 = c2[1], l2 = void 0 === s2 ? "0" : s2;
            return i2 + "\xB0 " + u2.toString().padStart(2, "0") + "' " + f2.padStart(2, "0") + "." + l2.padEnd(1, "0") + '"';
          }, R = function(t2) {
            return t2 > 1 ? 1 : t2 < -1 ? -1 : t2;
          }, X = function(t2, n2) {
            var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            r2 = void 0 === r2 || isNaN(r2) ? 1 : r2;
            var e2 = A(t2), o2 = I(t2), a2 = A(n2), u2 = I(n2), c2 = Math.acos(R(Math.sin(W(a2)) * Math.sin(W(e2)) + Math.cos(W(a2)) * Math.cos(W(e2)) * Math.cos(W(o2) - W(u2)))) * i;
            return Math.round(c2 / r2) * r2;
          }, _ = function(t2, n2) {
            var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : X;
            return r2 = "function" == typeof r2 ? r2 : X, n2.slice().sort(function(n3, e2) {
              return r2(t2, n3) - r2(t2, e2);
            });
          }, K = function(t2, n2) {
            return _(t2, n2)[0];
          }, Y = function(t2) {
            var n2 = 0;
            if (t2.length > 2) {
              for (var r2, e2, o2, a2 = 0; a2 < t2.length; a2++) {
                a2 === t2.length - 2 ? (r2 = t2.length - 2, e2 = t2.length - 1, o2 = 0) : a2 === t2.length - 1 ? (r2 = t2.length - 1, e2 = 0, o2 = 1) : (r2 = a2, e2 = a2 + 1, o2 = a2 + 2);
                var u2 = I(t2[r2]), c2 = A(t2[e2]), f2 = I(t2[o2]);
                n2 += (W(f2) - W(u2)) * Math.sin(W(c2));
              }
              n2 = n2 * i * i / 2;
            }
            return Math.abs(n2);
          }, Z = function(t2) {
            if (false === Array.isArray(t2) || 0 === t2.length)
              throw new Error("No points were given.");
            return t2.reduce(function(t3, n2) {
              var r2 = A(n2), e2 = I(n2);
              return { maxLat: Math.max(r2, t3.maxLat), minLat: Math.min(r2, t3.minLat), maxLng: Math.max(e2, t3.maxLng), minLng: Math.min(e2, t3.minLng) };
            }, { maxLat: -1 / 0, minLat: 1 / 0, maxLng: -1 / 0, minLng: 1 / 0 });
          }, G = function(t2, n2) {
            var r2, e2, f2 = A(t2), s2 = I(t2), l2 = W(f2), d2 = W(s2), h2 = n2 / i, g2 = l2 - h2, v2 = l2 + h2, m2 = W(a), p2 = W(o), y2 = W(c), b2 = W(u);
            if (g2 > p2 && v2 < m2) {
              var M2 = Math.asin(Math.sin(h2) / Math.cos(l2));
              (r2 = d2 - M2) < b2 && (r2 += 2 * Math.PI), (e2 = d2 + M2) > y2 && (e2 -= 2 * Math.PI);
            } else
              g2 = Math.max(g2, p2), v2 = Math.min(v2, m2), r2 = b2, e2 = y2;
            return [{ latitude: D(g2), longitude: D(r2) }, { latitude: D(v2), longitude: D(e2) }];
          }, V = function(t2) {
            if (false === Array.isArray(t2) || 0 === t2.length)
              return false;
            var n2 = t2.length, r2 = t2.reduce(function(t3, n3) {
              var r3 = W(A(n3)), e3 = W(I(n3));
              return { X: t3.X + Math.cos(r3) * Math.cos(e3), Y: t3.Y + Math.cos(r3) * Math.sin(e3), Z: t3.Z + Math.sin(r3) };
            }, { X: 0, Y: 0, Z: 0 }), e2 = r2.X / n2, i2 = r2.Y / n2, o2 = r2.Z / n2;
            return { longitude: D(Math.atan2(i2, e2)), latitude: D(Math.atan2(o2, Math.sqrt(e2 * e2 + i2 * i2))) };
          }, U = function(t2) {
            var n2 = Z(t2), r2 = n2.minLat + (n2.maxLat - n2.minLat) / 2, e2 = n2.minLng + (n2.maxLng - n2.minLng) / 2;
            return { latitude: parseFloat(r2.toFixed(6)), longitude: parseFloat(e2.toFixed(6)) };
          }, z = function(t2, n2) {
            var r2 = W(I(n2)) - W(I(t2)), e2 = Math.log(Math.tan(W(A(n2)) / 2 + Math.PI / 4) / Math.tan(W(A(t2)) / 2 + Math.PI / 4));
            return Math.abs(r2) > Math.PI && (r2 = r2 > 0 ? -1 * (2 * Math.PI - r2) : 2 * Math.PI + r2), (D(Math.atan2(r2, e2)) + 360) % 360;
          }, H = function(t2, n2) {
            var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : z, e2 = "function" == typeof r2 ? r2(t2, n2) : z(t2, n2);
            if (isNaN(e2))
              throw new Error("Could not calculate bearing for given points. Check your bearing function");
            switch (Math.round(e2 / 22.5)) {
              case 1:
                return "NNE";
              case 2:
                return "NE";
              case 3:
                return "ENE";
              case 4:
                return "E";
              case 5:
                return "ESE";
              case 6:
                return "SE";
              case 7:
                return "SSE";
              case 8:
                return "S";
              case 9:
                return "SSW";
              case 10:
                return "SW";
              case 11:
                return "WSW";
              case 12:
                return "W";
              case 13:
                return "WNW";
              case 14:
                return "NW";
              case 15:
                return "NNW";
              default:
                return "N";
            }
          }, J = function(t2, n2, r2) {
            var e2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, i2 = X(n2, t2, e2), o2 = X(t2, r2, e2), a2 = X(n2, r2, e2), u2 = Math.acos(R((i2 * i2 + a2 * a2 - o2 * o2) / (2 * i2 * a2))), c2 = Math.acos(R((o2 * o2 + a2 * a2 - i2 * i2) / (2 * o2 * a2)));
            return u2 > Math.PI / 2 ? i2 : c2 > Math.PI / 2 ? o2 : Math.sin(u2) * i2;
          }, Q = function(t2, n2) {
            var r2 = A(n2), e2 = I(n2), i2 = A(t2), o2 = I(t2);
            return (D(Math.atan2(Math.sin(W(e2) - W(o2)) * Math.cos(W(r2)), Math.cos(W(i2)) * Math.sin(W(r2)) - Math.sin(W(i2)) * Math.cos(W(r2)) * Math.cos(W(e2) - W(o2)))) + 360) % 360;
          };
          function tt(t2) {
            return (tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
              return typeof t3;
            } : function(t3) {
              return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
            })(t2);
          }
          var nt = function(t2) {
            var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : X;
            return t2.reduce(function(t3, r2) {
              return "object" === tt(t3) && null !== t3.last && (t3.distance += n2(r2, t3.last)), t3.last = r2, t3;
            }, { last: null, distance: 0 }).distance;
          }, rt = function(t2, n2) {
            var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
            r2 = void 0 === r2 || isNaN(r2) ? 1 : r2;
            var e2, o2, a2, u2, c2, f2, s2, l2 = A(t2), d2 = I(t2), h2 = A(n2), g2 = I(n2), v2 = 6356752314245e-6, m2 = 1 / 298.257223563, p2 = W(g2 - d2), y2 = Math.atan((1 - m2) * Math.tan(W(parseFloat(l2)))), b2 = Math.atan((1 - m2) * Math.tan(W(parseFloat(h2)))), M2 = Math.sin(y2), O2 = Math.cos(y2), S2 = Math.sin(b2), P2 = Math.cos(b2), N2 = p2, w2 = 100;
            do {
              var j2 = Math.sin(N2), E2 = Math.cos(N2);
              if (0 === (f2 = Math.sqrt(P2 * j2 * (P2 * j2) + (O2 * S2 - M2 * P2 * E2) * (O2 * S2 - M2 * P2 * E2))))
                return 0;
              e2 = M2 * S2 + O2 * P2 * E2, o2 = Math.atan2(f2, e2), c2 = e2 - 2 * M2 * S2 / (u2 = 1 - (a2 = O2 * P2 * j2 / f2) * a2), isNaN(c2) && (c2 = 0);
              var x2 = m2 / 16 * u2 * (4 + m2 * (4 - 3 * u2));
              s2 = N2, N2 = p2 + (1 - x2) * m2 * a2 * (o2 + x2 * f2 * (c2 + x2 * e2 * (2 * c2 * c2 - 1)));
            } while (Math.abs(N2 - s2) > 1e-12 && --w2 > 0);
            if (0 === w2)
              return NaN;
            var L2 = u2 * (i * i - v2 * v2) / (v2 * v2), D2 = 1 + L2 / 16384 * (4096 + L2 * (L2 * (320 - 175 * L2) - 768)), C2 = L2 / 1024 * (256 + L2 * (L2 * (74 - 47 * L2) - 128)), F2 = C2 * f2 * (c2 + C2 / 4 * (e2 * (2 * c2 * c2 - 1) - C2 / 6 * c2 * (4 * f2 * f2 - 3) * (4 * c2 * c2 - 3))), k2 = v2 * D2 * (o2 - F2);
            return Math.round(k2 / r2) * r2;
          }, et = function(t2) {
            return /^NNE|NE|NNW|N$/.test(t2) ? "N" : /^ENE|E|ESE|SE$/.test(t2) ? "E" : /^SSE|S|SSW|SW$/.test(t2) ? "S" : /^WSW|W|WNW|NW$/.test(t2) ? "W" : void 0;
          }, it = function(t2, n2) {
            var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : X, e2 = r2(t2, n2), i2 = Number(n2.time) - Number(t2.time), o2 = e2 / i2 * 1e3;
            return o2;
          }, ot = function(t2, n2, r2) {
            return X(n2, t2) + X(t2, r2) === X(n2, r2);
          }, at = function(t2, n2) {
            for (var r2 = false, e2 = n2.length, i2 = -1, o2 = e2 - 1; ++i2 < e2; o2 = i2)
              (I(n2[i2]) <= I(t2) && I(t2) < I(n2[o2]) || I(n2[o2]) <= I(t2) && I(t2) < I(n2[i2])) && A(t2) < (A(n2[o2]) - A(n2[i2])) * (I(t2) - I(n2[i2])) / (I(n2[o2]) - I(n2[i2])) + A(n2[i2]) && (r2 = !r2);
            return r2;
          }, ut = function(t2, n2, r2, e2) {
            return J(t2, n2, r2) < e2;
          }, ct = function(t2, n2, r2) {
            return X(t2, n2) < r2;
          };
          function ft(t2, n2) {
            return function(t3) {
              if (Array.isArray(t3))
                return t3;
            }(t2) || function(t3, n3) {
              if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t3)))
                return;
              var r2 = [], e2 = true, i2 = false, o2 = void 0;
              try {
                for (var a2, u2 = t3[Symbol.iterator](); !(e2 = (a2 = u2.next()).done) && (r2.push(a2.value), !n3 || r2.length !== n3); e2 = true)
                  ;
              } catch (t4) {
                i2 = true, o2 = t4;
              } finally {
                try {
                  e2 || null == u2.return || u2.return();
                } finally {
                  if (i2)
                    throw o2;
                }
              }
              return r2;
            }(t2, n2) || function(t3, n3) {
              if (!t3)
                return;
              if ("string" == typeof t3)
                return st(t3, n3);
              var r2 = Object.prototype.toString.call(t3).slice(8, -1);
              "Object" === r2 && t3.constructor && (r2 = t3.constructor.name);
              if ("Map" === r2 || "Set" === r2)
                return Array.from(t3);
              if ("Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2))
                return st(t3, n3);
            }(t2, n2) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }();
          }
          function st(t2, n2) {
            (null == n2 || n2 > t2.length) && (n2 = t2.length);
            for (var r2 = 0, e2 = new Array(n2); r2 < n2; r2++)
              e2[r2] = t2[r2];
            return e2;
          }
          var lt = function(t2) {
            if (!t2.startsWith("POLYGON"))
              throw new Error("Invalid wkt.");
            return t2.slice(t2.indexOf("(") + 2, t2.indexOf(")")).split(", ").map(function(t3) {
              var n2 = ft(t3.split(" "), 2), r2 = n2[0], e2 = n2[1];
              return { longitude: parseFloat(r2), latitude: parseFloat(e2) };
            });
          };
        }]);
      });
    }
  });

  // http-url:https://unpkg.com/ua-parser-js@1.0.2
  var require_ua_parser_js_1_0 = __commonJS({
    "http-url:https://unpkg.com/ua-parser-js@1.0.2"(exports, module) {
      (function(window2, undefined2) {
        "use strict";
        var LIBVERSION = "1.0.2", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 255;
        var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook";
        var extend = function(regexes2, extensions) {
          var mergedRegexes = {};
          for (var i in regexes2) {
            if (extensions[i] && extensions[i].length % 2 === 0) {
              mergedRegexes[i] = extensions[i].concat(regexes2[i]);
            } else {
              mergedRegexes[i] = regexes2[i];
            }
          }
          return mergedRegexes;
        }, enumerize = function(arr) {
          var enums = {};
          for (var i = 0; i < arr.length; i++) {
            enums[arr[i].toUpperCase()] = arr[i];
          }
          return enums;
        }, has = function(str1, str2) {
          return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        }, lowerize = function(str) {
          return str.toLowerCase();
        }, majorize = function(version) {
          return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined2;
        }, trim = function(str, len) {
          if (typeof str === STR_TYPE) {
            str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
            return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
          }
        };
        var rgxMapper = function(ua, arrays) {
          var i = 0, j, k, p, q, matches, match;
          while (i < arrays.length && !matches) {
            var regex = arrays[i], props = arrays[i + 1];
            j = k = 0;
            while (j < regex.length && !matches) {
              matches = regex[j++].exec(ua);
              if (!!matches) {
                for (p = 0; p < props.length; p++) {
                  match = matches[++k];
                  q = props[p];
                  if (typeof q === OBJ_TYPE && q.length > 0) {
                    if (q.length === 2) {
                      if (typeof q[1] == FUNC_TYPE) {
                        this[q[0]] = q[1].call(this, match);
                      } else {
                        this[q[0]] = q[1];
                      }
                    } else if (q.length === 3) {
                      if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined2;
                      } else {
                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined2;
                      }
                    } else if (q.length === 4) {
                      this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined2;
                    }
                  } else {
                    this[q] = match ? match : undefined2;
                  }
                }
              }
            }
            i += 2;
          }
        }, strMapper = function(str, map) {
          for (var i in map) {
            if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
              for (var j = 0; j < map[i].length; j++) {
                if (has(map[i][j], str)) {
                  return i === UNKNOWN ? undefined2 : i;
                }
              }
            } else if (has(map[i], str)) {
              return i === UNKNOWN ? undefined2 : i;
            }
          }
          return str;
        };
        var oldSafariMap = {
          "1.0": "/8",
          "1.2": "/1",
          "1.3": "/3",
          "2.0": "/412",
          "2.0.2": "/416",
          "2.0.3": "/417",
          "2.0.4": "/419",
          "?": "/"
        }, windowsVersionMap = {
          "ME": "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          "2000": "NT 5.0",
          "XP": ["NT 5.1", "NT 5.2"],
          "Vista": "NT 6.0",
          "7": "NT 6.1",
          "8": "NT 6.2",
          "8.1": "NT 6.3",
          "10": ["NT 6.4", "NT 10.0"],
          "RT": "ARM"
        };
        var regexes = {
          browser: [
            [
              /\b(?:crmo|crios)\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "Chrome"]],
            [
              /edg(?:e|ios|a)?\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            ],
            [NAME, VERSION],
            [
              /opios[\/ ]+([\w\.]+)/i
            ],
            [VERSION, [NAME, OPERA + " Mini"]],
            [
              /\bopr\/([\w\.]+)/i
            ],
            [VERSION, [NAME, OPERA]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
              /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
              /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
              /(weibo)__([\d\.]+)/i
            ],
            [NAME, VERSION],
            [
              /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            ],
            [VERSION, [NAME, "UC" + BROWSER]],
            [
              /\bqbcore\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "WeChat(Win) Desktop"]],
            [
              /micromessenger\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "WeChat"]],
            [
              /konqueror\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "Konqueror"]],
            [
              /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            ],
            [VERSION, [NAME, "IE"]],
            [
              /yabrowser\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "Yandex"]],
            [
              /(avast|avg)\/([\w\.]+)/i
            ],
            [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
            [
              /\bfocus\/([\w\.]+)/i
            ],
            [VERSION, [NAME, FIREFOX + " Focus"]],
            [
              /\bopt\/([\w\.]+)/i
            ],
            [VERSION, [NAME, OPERA + " Touch"]],
            [
              /coc_coc\w+\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "Coc Coc"]],
            [
              /dolfin\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "Dolphin"]],
            [
              /coast\/([\w\.]+)/i
            ],
            [VERSION, [NAME, OPERA + " Coast"]],
            [
              /miuibrowser\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "MIUI " + BROWSER]],
            [
              /fxios\/([-\w\.]+)/i
            ],
            [VERSION, [NAME, FIREFOX]],
            [
              /\bqihu|(qi?ho?o?|360)browser/i
            ],
            [[NAME, "360 " + BROWSER]],
            [
              /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
            ],
            [[NAME, /(.+)/, "$1 " + BROWSER], VERSION],
            [
              /(comodo_dragon)\/([\w\.]+)/i
            ],
            [[NAME, /_/g, " "], VERSION],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
            ],
            [NAME, VERSION],
            [
              /(metasr)[\/ ]?([\w\.]+)/i,
              /(lbbrowser)/i
            ],
            [NAME],
            [
              /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            ],
            [[NAME, FACEBOOK], VERSION],
            [
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(chromium|instagram)[\/ ]([-\w\.]+)/i
            ],
            [NAME, VERSION],
            [
              /\bgsa\/([\w\.]+) .*safari\//i
            ],
            [VERSION, [NAME, "GSA"]],
            [
              /headlesschrome(?:\/([\w\.]+)| )/i
            ],
            [VERSION, [NAME, CHROME + " Headless"]],
            [
              / wv\).+(chrome)\/([\w\.]+)/i
            ],
            [[NAME, CHROME + " WebView"], VERSION],
            [
              /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            ],
            [VERSION, [NAME, "Android " + BROWSER]],
            [
              /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            ],
            [NAME, VERSION],
            [
              /version\/([\w\.]+) .*mobile\/\w+ (safari)/i
            ],
            [VERSION, [NAME, "Mobile Safari"]],
            [
              /version\/([\w\.]+) .*(mobile ?safari|safari)/i
            ],
            [VERSION, NAME],
            [
              /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            ],
            [NAME, [VERSION, strMapper, oldSafariMap]],
            [
              /(webkit|khtml)\/([\w\.]+)/i
            ],
            [NAME, VERSION],
            [
              /(navigator|netscape\d?)\/([-\w\.]+)/i
            ],
            [[NAME, "Netscape"], VERSION],
            [
              /mobile vr; rv:([\w\.]+)\).+firefox/i
            ],
            [VERSION, [NAME, FIREFOX + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i
            ],
            [NAME, VERSION]
          ],
          cpu: [
            [
              /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
            ],
            [[ARCHITECTURE, "amd64"]],
            [
              /(ia32(?=;))/i
            ],
            [[ARCHITECTURE, lowerize]],
            [
              /((?:i[346]|x)86)[;\)]/i
            ],
            [[ARCHITECTURE, "ia32"]],
            [
              /\b(aarch64|arm(v?8e?l?|_?64))\b/i
            ],
            [[ARCHITECTURE, "arm64"]],
            [
              /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
            ],
            [[ARCHITECTURE, "armhf"]],
            [
              /windows (ce|mobile); ppc;/i
            ],
            [[ARCHITECTURE, "arm"]],
            [
              /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
            ],
            [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
            [
              /(sun4\w)[;\)]/i
            ],
            [[ARCHITECTURE, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            ],
            [[ARCHITECTURE, lowerize]]
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ],
            [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i
            ],
            [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
            [
              /\((ip(?:hone|od)[\w ]*);/i
            ],
            [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ],
            [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
            [
              /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ],
            [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
            ],
            [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
            [
              /\b(poco[\w ]+)(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
            ],
            [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
            [
              /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
            ],
            [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ],
            [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
            [
              /vivo (\w+)(?: bui|\))/i,
              /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ],
            [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
            [
              /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ],
            [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ],
            [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
            [
              /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ],
            [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
            [
              /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ],
            [MODEL, [VENDOR, LG], [TYPE, TABLET]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i
            ],
            [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ],
            [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
            [
              /(?:maemo|nokia).*(n900|lumia \d+)/i,
              /nokia[-_ ]?([-\w\.]*)/i
            ],
            [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
            [
              /(pixel c)\b/i
            ],
            [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
            [
              /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            ],
            [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
            [
              /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ],
            [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
            [
              /sony tablet [ps]/i,
              /\b(?:sony)?sgp\w+(?: bui|\))/i
            ],
            [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ],
            [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i
            ],
            [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
            [
              /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            ],
            [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
            [
              /(playbook);[-\w\),; ]+(rim)/i
            ],
            [MODEL, VENDOR, [TYPE, TABLET]],
            [
              /\b((?:bb[a-f]|st[hv])100-\d)/i,
              /\(bb10; (\w+)/i
            ],
            [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ],
            [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
            [
              / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ],
            [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
            [
              /(nexus 9)/i
            ],
            [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i
            ],
            [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
            [
              /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ],
            [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
            [
              /droid.+; (m[1-5] note) bui/i,
              /\bmz-([-\w]{2,})/i
            ],
            [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
            [
              /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ],
            [MODEL, [VENDOR, "Sharp"], [TYPE, MOBILE]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i
            ],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i
            ],
            [VENDOR, MODEL, [TYPE, TABLET]],
            [
              /(surface duo)/i
            ],
            [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
            [
              /droid [\d\.]+; (fp\du?)(?: b|\))/i
            ],
            [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
            [
              /(u304aa)/i
            ],
            [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
            [
              /\bsie-(\w*)/i
            ],
            [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
            [
              /\b(rct\w+) b/i
            ],
            [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
            [
              /\b(venue[\d ]{2,7}) b/i
            ],
            [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
            [
              /\b(q(?:mv|ta)\w+) b/i
            ],
            [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
            [
              /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            ],
            [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
            [
              /\b(tm\d{3}\w+) b/i
            ],
            [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
            [
              /\b(k88) b/i
            ],
            [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
            [
              /\b(nx\d{3}j) b/i
            ],
            [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
            [
              /\b(gen\d{3}) b.+49h/i
            ],
            [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
            [
              /\b(zur\d{3}) b/i
            ],
            [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
            [
              /\b((zeki)?tb.*\b) b/i
            ],
            [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
            [
              /\b([yr]\d{2}) b/i,
              /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            ],
            [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
            [
              /\b(ns-?\w{0,9}) b/i
            ],
            [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
            [
              /\b((nxa|next)-?\w{0,9}) b/i
            ],
            [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
            [
              /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            ],
            [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
            [
              /\b(lvtel\-)?(v1[12]) b/i
            ],
            [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
            [
              /\b(ph-1) /i
            ],
            [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
            [
              /\b(v(100md|700na|7011|917g).*\b) b/i
            ],
            [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
            [
              /\b(trio[-\w\. ]+) b/i
            ],
            [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
            [
              /\btu_(1491) b/i
            ],
            [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
            [
              /(shield[\w ]+) b/i
            ],
            [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
            [
              /(sprint) (\w+)/i
            ],
            [VENDOR, MODEL, [TYPE, MOBILE]],
            [
              /(kin\.[onetw]{3})/i
            ],
            [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
            [
              /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            ],
            [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
            [
              /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ],
            [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
            [
              /(ouya)/i,
              /(nintendo) ([wids3utch]+)/i
            ],
            [VENDOR, MODEL, [TYPE, CONSOLE]],
            [
              /droid.+; (shield) bui/i
            ],
            [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
            [
              /(playstation [345portablevi]+)/i
            ],
            [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
            [
              /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            ],
            [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
            [
              /smart-tv.+(samsung)/i
            ],
            [VENDOR, [TYPE, SMARTTV]],
            [
              /hbbtv.+maple;(\d+)/i
            ],
            [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
            [
              /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            ],
            [[VENDOR, LG], [TYPE, SMARTTV]],
            [
              /(apple) ?tv/i
            ],
            [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
            [
              /crkey/i
            ],
            [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
            [
              /droid.+aft(\w)( bui|\))/i
            ],
            [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
            [
              /\(dtv[\);].+(aquos)/i
            ],
            [MODEL, [VENDOR, "Sharp"], [TYPE, SMARTTV]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i
            ],
            [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
            [
              /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
            ],
            [[TYPE, SMARTTV]],
            [
              /((pebble))app/i
            ],
            [VENDOR, MODEL, [TYPE, WEARABLE]],
            [
              /droid.+; (glass) \d/i
            ],
            [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
            [
              /droid.+; (wt63?0{2,3})\)/i
            ],
            [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
            [
              /(quest( 2)?)/i
            ],
            [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
            [
              /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            ],
            [VENDOR, [TYPE, EMBEDDED]],
            [
              /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
            ],
            [MODEL, [TYPE, MOBILE]],
            [
              /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            ],
            [MODEL, [TYPE, TABLET]],
            [
              /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            ],
            [[TYPE, TABLET]],
            [
              /(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i
            ],
            [[TYPE, MOBILE]],
            [
              /(android[-\w\. ]{0,9});.+buil/i
            ],
            [MODEL, [VENDOR, "Generic"]]
          ],
          engine: [
            [
              /windows.+ edge\/([\w\.]+)/i
            ],
            [VERSION, [NAME, EDGE + "HTML"]],
            [
              /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            ],
            [VERSION, [NAME, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i
            ],
            [NAME, VERSION],
            [
              /rv\:([\w\.]{1,9})\b.+(gecko)/i
            ],
            [VERSION, NAME]
          ],
          os: [
            [
              /microsoft (windows) (vista|xp)/i
            ],
            [NAME, VERSION],
            [
              /(windows) nt 6\.2; (arm)/i,
              /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
              /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ],
            [NAME, [VERSION, strMapper, windowsVersionMap]],
            [
              /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ],
            [[NAME, "Windows"], [VERSION, strMapper, windowsVersionMap]],
            [
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /cfnetwork\/.+darwin/i
            ],
            [[VERSION, /_/g, "."], [NAME, "iOS"]],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            ],
            [[NAME, "Mac OS"], [VERSION, /_/g, "."]],
            [
              /droid ([\w\.]+)\b.+(android[- ]x86)/i
            ],
            [VERSION, NAME],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i
            ],
            [NAME, VERSION],
            [
              /\(bb(10);/i
            ],
            [VERSION, [NAME, BLACKBERRY]],
            [
              /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
            ],
            [VERSION, [NAME, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            ],
            [VERSION, [NAME, FIREFOX + " OS"]],
            [
              /web0s;.+rt(tv)/i,
              /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            ],
            [VERSION, [NAME, "webOS"]],
            [
              /crkey\/([\d\.]+)/i
            ],
            [VERSION, [NAME, CHROME + "cast"]],
            [
              /(cros) [\w]+ ([\w\.]+\w)/i
            ],
            [[NAME, "Chromium OS"], VERSION],
            [
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i
            ],
            [NAME, VERSION],
            [
              /(sunos) ?([\w\.\d]*)/i
            ],
            [[NAME, "Solaris"], VERSION],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
              /(unix) ?([\w\.]*)/i
            ],
            [NAME, VERSION]
          ]
        };
        var UAParser2 = function(ua, extensions) {
          if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined2;
          }
          if (!(this instanceof UAParser2)) {
            return new UAParser2(ua, extensions).getResult();
          }
          var _ua = ua || (typeof window2 !== UNDEF_TYPE && window2.navigator && window2.navigator.userAgent ? window2.navigator.userAgent : EMPTY);
          var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
          this.getBrowser = function() {
            var _browser = {};
            _browser[NAME] = undefined2;
            _browser[VERSION] = undefined2;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
          };
          this.getCPU = function() {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined2;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
          };
          this.getDevice = function() {
            var _device = {};
            _device[VENDOR] = undefined2;
            _device[MODEL] = undefined2;
            _device[TYPE] = undefined2;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
          };
          this.getEngine = function() {
            var _engine = {};
            _engine[NAME] = undefined2;
            _engine[VERSION] = undefined2;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
          };
          this.getOS = function() {
            var _os = {};
            _os[NAME] = undefined2;
            _os[VERSION] = undefined2;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
          };
          this.getResult = function() {
            return {
              ua: this.getUA(),
              browser: this.getBrowser(),
              engine: this.getEngine(),
              os: this.getOS(),
              device: this.getDevice(),
              cpu: this.getCPU()
            };
          };
          this.getUA = function() {
            return _ua;
          };
          this.setUA = function(ua2) {
            _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
            return this;
          };
          this.setUA(_ua);
          return this;
        };
        UAParser2.VERSION = LIBVERSION;
        UAParser2.BROWSER = enumerize([NAME, VERSION, MAJOR]);
        UAParser2.CPU = enumerize([ARCHITECTURE]);
        UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
        UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION]);
        if (typeof exports !== UNDEF_TYPE) {
          if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser2;
          }
          exports.UAParser = UAParser2;
        } else {
          if (typeof define === FUNC_TYPE && define.amd) {
            define(function() {
              return UAParser2;
            });
          } else if (typeof window2 !== UNDEF_TYPE) {
            window2.UAParser = UAParser2;
          }
        }
        var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
        if ($ && !$.ua) {
          var parser = new UAParser2();
          $.ua = parser.getResult();
          $.ua.get = function() {
            return parser.getUA();
          };
          $.ua.set = function(ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
              $.ua[prop] = result[prop];
            }
          };
        }
      })(typeof window === "object" ? window : exports);
    }
  });

  // http-url:https://esb.deno.dev/https://deno.land/x/jose@v4.10.0/index.ts
  var __defProp2 = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var webcrypto_default = crypto;
  var isCryptoKey = (key) => key instanceof CryptoKey;
  var encoder = new TextEncoder();
  var decoder = new TextDecoder();
  var MAX_INT32 = 2 ** 32;
  function concat(...buffers) {
    const size = buffers.reduce((acc, { length }) => acc + length, 0);
    const buf = new Uint8Array(size);
    let i = 0;
    buffers.forEach((buffer) => {
      buf.set(buffer, i);
      i += buffer.length;
    });
    return buf;
  }
  var encodeBase64 = (input) => {
    let unencoded = input;
    if (typeof unencoded === "string") {
      unencoded = encoder.encode(unencoded);
    }
    const CHUNK_SIZE = 32768;
    const arr = [];
    for (let i = 0; i < unencoded.length; i += CHUNK_SIZE) {
      arr.push(String.fromCharCode.apply(null, unencoded.subarray(i, i + CHUNK_SIZE)));
    }
    return btoa(arr.join(""));
  };
  var encode = (input) => {
    return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  };
  var decodeBase64 = (encoded) => {
    const binary = atob(encoded);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  };
  var decode = (input) => {
    let encoded = input;
    if (encoded instanceof Uint8Array) {
      encoded = decoder.decode(encoded);
    }
    encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
    try {
      return decodeBase64(encoded);
    } catch {
      throw new TypeError("The input to be decoded is not correctly encoded.");
    }
  };
  var errors_exports = {};
  __export(errors_exports, {
    JOSEAlgNotAllowed: () => JOSEAlgNotAllowed,
    JOSEError: () => JOSEError,
    JOSENotSupported: () => JOSENotSupported,
    JWEDecryptionFailed: () => JWEDecryptionFailed,
    JWEInvalid: () => JWEInvalid,
    JWKInvalid: () => JWKInvalid,
    JWKSInvalid: () => JWKSInvalid,
    JWKSMultipleMatchingKeys: () => JWKSMultipleMatchingKeys,
    JWKSNoMatchingKey: () => JWKSNoMatchingKey,
    JWKSTimeout: () => JWKSTimeout,
    JWSInvalid: () => JWSInvalid,
    JWSSignatureVerificationFailed: () => JWSSignatureVerificationFailed,
    JWTClaimValidationFailed: () => JWTClaimValidationFailed,
    JWTExpired: () => JWTExpired,
    JWTInvalid: () => JWTInvalid
  });
  var JOSEError = class extends Error {
    static get code() {
      return "ERR_JOSE_GENERIC";
    }
    code = "ERR_JOSE_GENERIC";
    constructor(message2) {
      super(message2);
      this.name = this.constructor.name;
      Error.captureStackTrace?.(this, this.constructor);
    }
  };
  var JWTClaimValidationFailed = class extends JOSEError {
    static get code() {
      return "ERR_JWT_CLAIM_VALIDATION_FAILED";
    }
    code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    claim;
    reason;
    constructor(message2, claim = "unspecified", reason = "unspecified") {
      super(message2);
      this.claim = claim;
      this.reason = reason;
    }
  };
  var JWTExpired = class extends JOSEError {
    static get code() {
      return "ERR_JWT_EXPIRED";
    }
    code = "ERR_JWT_EXPIRED";
    claim;
    reason;
    constructor(message2, claim = "unspecified", reason = "unspecified") {
      super(message2);
      this.claim = claim;
      this.reason = reason;
    }
  };
  var JOSEAlgNotAllowed = class extends JOSEError {
    static get code() {
      return "ERR_JOSE_ALG_NOT_ALLOWED";
    }
    code = "ERR_JOSE_ALG_NOT_ALLOWED";
  };
  var JOSENotSupported = class extends JOSEError {
    static get code() {
      return "ERR_JOSE_NOT_SUPPORTED";
    }
    code = "ERR_JOSE_NOT_SUPPORTED";
  };
  var JWEDecryptionFailed = class extends JOSEError {
    static get code() {
      return "ERR_JWE_DECRYPTION_FAILED";
    }
    code = "ERR_JWE_DECRYPTION_FAILED";
    message = "decryption operation failed";
  };
  var JWEInvalid = class extends JOSEError {
    static get code() {
      return "ERR_JWE_INVALID";
    }
    code = "ERR_JWE_INVALID";
  };
  var JWSInvalid = class extends JOSEError {
    static get code() {
      return "ERR_JWS_INVALID";
    }
    code = "ERR_JWS_INVALID";
  };
  var JWTInvalid = class extends JOSEError {
    static get code() {
      return "ERR_JWT_INVALID";
    }
    code = "ERR_JWT_INVALID";
  };
  var JWKInvalid = class extends JOSEError {
    static get code() {
      return "ERR_JWK_INVALID";
    }
    code = "ERR_JWK_INVALID";
  };
  var JWKSInvalid = class extends JOSEError {
    static get code() {
      return "ERR_JWKS_INVALID";
    }
    code = "ERR_JWKS_INVALID";
  };
  var JWKSNoMatchingKey = class extends JOSEError {
    static get code() {
      return "ERR_JWKS_NO_MATCHING_KEY";
    }
    code = "ERR_JWKS_NO_MATCHING_KEY";
    message = "no applicable key found in the JSON Web Key Set";
  };
  var JWKSMultipleMatchingKeys = class extends JOSEError {
    static get code() {
      return "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    }
    code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    message = "multiple matching keys found in the JSON Web Key Set";
  };
  var JWKSTimeout = class extends JOSEError {
    static get code() {
      return "ERR_JWKS_TIMEOUT";
    }
    code = "ERR_JWKS_TIMEOUT";
    message = "request timed out";
  };
  var JWSSignatureVerificationFailed = class extends JOSEError {
    static get code() {
      return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    }
    code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
    message = "signature verification failed";
  };
  var random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);
  function isCloudflareWorkers() {
    return typeof WebSocketPair !== "undefined" || typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers" || typeof EdgeRuntime !== "undefined" && EdgeRuntime === "vercel";
  }
  function unusable(name, prop = "algorithm.name") {
    return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
  }
  function isAlgorithm(algorithm, name) {
    return algorithm.name === name;
  }
  function getHashLength(hash) {
    return parseInt(hash.name.slice(4), 10);
  }
  function getNamedCurve(alg) {
    switch (alg) {
      case "ES256":
        return "P-256";
      case "ES384":
        return "P-384";
      case "ES512":
        return "P-521";
      default:
        throw new Error("unreachable");
    }
  }
  function checkUsage(key, usages) {
    if (usages.length && !usages.some((expected) => key.usages.includes(expected))) {
      let msg = "CryptoKey does not support this operation, its usages must include ";
      if (usages.length > 2) {
        const last = usages.pop();
        msg += `one of ${usages.join(", ")}, or ${last}.`;
      } else if (usages.length === 2) {
        msg += `one of ${usages[0]} or ${usages[1]}.`;
      } else {
        msg += `${usages[0]}.`;
      }
      throw new TypeError(msg);
    }
  }
  function checkSigCryptoKey(key, alg, ...usages) {
    switch (alg) {
      case "HS256":
      case "HS384":
      case "HS512": {
        if (!isAlgorithm(key.algorithm, "HMAC"))
          throw unusable("HMAC");
        const expected = parseInt(alg.slice(2), 10);
        const actual = getHashLength(key.algorithm.hash);
        if (actual !== expected)
          throw unusable(`SHA-${expected}`, "algorithm.hash");
        break;
      }
      case "RS256":
      case "RS384":
      case "RS512": {
        if (!isAlgorithm(key.algorithm, "RSASSA-PKCS1-v1_5"))
          throw unusable("RSASSA-PKCS1-v1_5");
        const expected = parseInt(alg.slice(2), 10);
        const actual = getHashLength(key.algorithm.hash);
        if (actual !== expected)
          throw unusable(`SHA-${expected}`, "algorithm.hash");
        break;
      }
      case "PS256":
      case "PS384":
      case "PS512": {
        if (!isAlgorithm(key.algorithm, "RSA-PSS"))
          throw unusable("RSA-PSS");
        const expected = parseInt(alg.slice(2), 10);
        const actual = getHashLength(key.algorithm.hash);
        if (actual !== expected)
          throw unusable(`SHA-${expected}`, "algorithm.hash");
        break;
      }
      case (isCloudflareWorkers() && "EdDSA"): {
        if (!isAlgorithm(key.algorithm, "NODE-ED25519"))
          throw unusable("NODE-ED25519");
        break;
      }
      case "EdDSA": {
        if (key.algorithm.name !== "Ed25519" && key.algorithm.name !== "Ed448") {
          throw unusable("Ed25519 or Ed448");
        }
        break;
      }
      case "ES256":
      case "ES384":
      case "ES512": {
        if (!isAlgorithm(key.algorithm, "ECDSA"))
          throw unusable("ECDSA");
        const expected = getNamedCurve(alg);
        const actual = key.algorithm.namedCurve;
        if (actual !== expected)
          throw unusable(expected, "algorithm.namedCurve");
        break;
      }
      default:
        throw new TypeError("CryptoKey does not support this operation");
    }
    checkUsage(key, usages);
  }
  function message(msg, actual, ...types2) {
    if (types2.length > 2) {
      const last = types2.pop();
      msg += `one of type ${types2.join(", ")}, or ${last}.`;
    } else if (types2.length === 2) {
      msg += `one of type ${types2[0]} or ${types2[1]}.`;
    } else {
      msg += `of type ${types2[0]}.`;
    }
    if (actual == null) {
      msg += ` Received ${actual}`;
    } else if (typeof actual === "function" && actual.name) {
      msg += ` Received function ${actual.name}`;
    } else if (typeof actual === "object" && actual != null) {
      if (actual.constructor && actual.constructor.name) {
        msg += ` Received an instance of ${actual.constructor.name}`;
      }
    }
    return msg;
  }
  var invalid_key_input_default = (actual, ...types2) => {
    return message("Key must be ", actual, ...types2);
  };
  function withAlg(alg, actual, ...types2) {
    return message(`Key for the ${alg} algorithm must be `, actual, ...types2);
  }
  var is_key_like_default = (key) => {
    return isCryptoKey(key);
  };
  var types = ["CryptoKey"];
  var isDisjoint = (...headers) => {
    const sources = headers.filter(Boolean);
    if (sources.length === 0 || sources.length === 1) {
      return true;
    }
    let acc;
    for (const header of sources) {
      const parameters = Object.keys(header);
      if (!acc || acc.size === 0) {
        acc = new Set(parameters);
        continue;
      }
      for (const parameter of parameters) {
        if (acc.has(parameter)) {
          return false;
        }
        acc.add(parameter);
      }
    }
    return true;
  };
  var is_disjoint_default = isDisjoint;
  function isObjectLike(value) {
    return typeof value === "object" && value !== null;
  }
  function isObject(input) {
    if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
      return false;
    }
    if (Object.getPrototypeOf(input) === null) {
      return true;
    }
    let proto = input;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(input) === proto;
  }
  var check_key_length_default = (alg, key) => {
    if (alg.startsWith("RS") || alg.startsWith("PS")) {
      const { modulusLength } = key.algorithm;
      if (typeof modulusLength !== "number" || modulusLength < 2048) {
        throw new TypeError(`${alg} requires key modulusLength to be 2048 bits or larger`);
      }
    }
  };
  var symmetricTypeCheck = (alg, key) => {
    if (key instanceof Uint8Array)
      return;
    if (!is_key_like_default(key)) {
      throw new TypeError(withAlg(alg, key, ...types, "Uint8Array"));
    }
    if (key.type !== "secret") {
      throw new TypeError(`${types.join(" or ")} instances for symmetric algorithms must be of type "secret"`);
    }
  };
  var asymmetricTypeCheck = (alg, key, usage) => {
    if (!is_key_like_default(key)) {
      throw new TypeError(withAlg(alg, key, ...types));
    }
    if (key.type === "secret") {
      throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
    }
    if (usage === "sign" && key.type === "public") {
      throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
    }
    if (usage === "decrypt" && key.type === "public") {
      throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
    }
    if (key.algorithm && usage === "verify" && key.type === "private") {
      throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
    }
    if (key.algorithm && usage === "encrypt" && key.type === "private") {
      throw new TypeError(`${types.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`);
    }
  };
  var checkKeyType = (alg, key, usage) => {
    const symmetric = alg.startsWith("HS") || alg === "dir" || alg.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg);
    if (symmetric) {
      symmetricTypeCheck(alg, key);
    } else {
      asymmetricTypeCheck(alg, key, usage);
    }
  };
  var check_key_type_default = checkKeyType;
  function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
    if (joseHeader.crit !== void 0 && protectedHeader.crit === void 0) {
      throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
    }
    if (!protectedHeader || protectedHeader.crit === void 0) {
      return /* @__PURE__ */ new Set();
    }
    if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
      throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
    }
    let recognized;
    if (recognizedOption !== void 0) {
      recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
    } else {
      recognized = recognizedDefault;
    }
    for (const parameter of protectedHeader.crit) {
      if (!recognized.has(parameter)) {
        throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
      }
      if (joseHeader[parameter] === void 0) {
        throw new Err(`Extension Header Parameter "${parameter}" is missing`);
      } else if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
        throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
      }
    }
    return new Set(protectedHeader.crit);
  }
  var validate_crit_default = validateCrit;
  var validateAlgorithms = (option, algorithms) => {
    if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s) => typeof s !== "string"))) {
      throw new TypeError(`"${option}" option must be an array of strings`);
    }
    if (!algorithms) {
      return void 0;
    }
    return new Set(algorithms);
  };
  var validate_algorithms_default = validateAlgorithms;
  var unprotected = Symbol();
  function subtleDsa(alg, algorithm) {
    const hash = `SHA-${alg.slice(-3)}`;
    switch (alg) {
      case "HS256":
      case "HS384":
      case "HS512":
        return { hash, name: "HMAC" };
      case "PS256":
      case "PS384":
      case "PS512":
        return { hash, name: "RSA-PSS", saltLength: alg.slice(-3) >> 3 };
      case "RS256":
      case "RS384":
      case "RS512":
        return { hash, name: "RSASSA-PKCS1-v1_5" };
      case "ES256":
      case "ES384":
      case "ES512":
        return { hash, name: "ECDSA", namedCurve: algorithm.namedCurve };
      case (isCloudflareWorkers() && "EdDSA"):
        const { namedCurve } = algorithm;
        return { name: namedCurve, namedCurve };
      case "EdDSA":
        return { name: algorithm.name };
      default:
        throw new JOSENotSupported(`alg ${alg} is not supported either by JOSE or your javascript runtime`);
    }
  }
  function getCryptoKey3(alg, key, usage) {
    if (isCryptoKey(key)) {
      checkSigCryptoKey(key, alg, usage);
      return key;
    }
    if (key instanceof Uint8Array) {
      if (!alg.startsWith("HS")) {
        throw new TypeError(invalid_key_input_default(key, ...types));
      }
      return webcrypto_default.subtle.importKey("raw", key, { hash: `SHA-${alg.slice(-3)}`, name: "HMAC" }, false, [usage]);
    }
    throw new TypeError(invalid_key_input_default(key, ...types, "Uint8Array"));
  }
  var verify = async (alg, key, signature, data) => {
    const cryptoKey = await getCryptoKey3(alg, key, "verify");
    check_key_length_default(alg, cryptoKey);
    const algorithm = subtleDsa(alg, cryptoKey.algorithm);
    try {
      return await webcrypto_default.subtle.verify(algorithm, cryptoKey, signature, data);
    } catch {
      return false;
    }
  };
  var verify_default = verify;
  async function flattenedVerify(jws, key, options) {
    if (!isObject(jws)) {
      throw new JWSInvalid("Flattened JWS must be an object");
    }
    if (jws.protected === void 0 && jws.header === void 0) {
      throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members');
    }
    if (jws.protected !== void 0 && typeof jws.protected !== "string") {
      throw new JWSInvalid("JWS Protected Header incorrect type");
    }
    if (jws.payload === void 0) {
      throw new JWSInvalid("JWS Payload missing");
    }
    if (typeof jws.signature !== "string") {
      throw new JWSInvalid("JWS Signature missing or incorrect type");
    }
    if (jws.header !== void 0 && !isObject(jws.header)) {
      throw new JWSInvalid("JWS Unprotected Header incorrect type");
    }
    let parsedProt = {};
    if (jws.protected) {
      try {
        const protectedHeader = decode(jws.protected);
        parsedProt = JSON.parse(decoder.decode(protectedHeader));
      } catch {
        throw new JWSInvalid("JWS Protected Header is invalid");
      }
    }
    if (!is_disjoint_default(parsedProt, jws.header)) {
      throw new JWSInvalid("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
    }
    const joseHeader = {
      ...parsedProt,
      ...jws.header
    };
    const extensions = validate_crit_default(JWSInvalid, /* @__PURE__ */ new Map([["b64", true]]), options?.crit, parsedProt, joseHeader);
    let b64 = true;
    if (extensions.has("b64")) {
      b64 = parsedProt.b64;
      if (typeof b64 !== "boolean") {
        throw new JWSInvalid('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
      }
    }
    const { alg } = joseHeader;
    if (typeof alg !== "string" || !alg) {
      throw new JWSInvalid('JWS "alg" (Algorithm) Header Parameter missing or invalid');
    }
    const algorithms = options && validate_algorithms_default("algorithms", options.algorithms);
    if (algorithms && !algorithms.has(alg)) {
      throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed');
    }
    if (b64) {
      if (typeof jws.payload !== "string") {
        throw new JWSInvalid("JWS Payload must be a string");
      }
    } else if (typeof jws.payload !== "string" && !(jws.payload instanceof Uint8Array)) {
      throw new JWSInvalid("JWS Payload must be a string or an Uint8Array instance");
    }
    let resolvedKey = false;
    if (typeof key === "function") {
      key = await key(parsedProt, jws);
      resolvedKey = true;
    }
    check_key_type_default(alg, key, "verify");
    const data = concat(encoder.encode(jws.protected ?? ""), encoder.encode("."), typeof jws.payload === "string" ? encoder.encode(jws.payload) : jws.payload);
    const signature = decode(jws.signature);
    const verified = await verify_default(alg, key, signature, data);
    if (!verified) {
      throw new JWSSignatureVerificationFailed();
    }
    let payload;
    if (b64) {
      payload = decode(jws.payload);
    } else if (typeof jws.payload === "string") {
      payload = encoder.encode(jws.payload);
    } else {
      payload = jws.payload;
    }
    const result = { payload };
    if (jws.protected !== void 0) {
      result.protectedHeader = parsedProt;
    }
    if (jws.header !== void 0) {
      result.unprotectedHeader = jws.header;
    }
    if (resolvedKey) {
      return { ...result, key };
    }
    return result;
  }
  async function compactVerify(jws, key, options) {
    if (jws instanceof Uint8Array) {
      jws = decoder.decode(jws);
    }
    if (typeof jws !== "string") {
      throw new JWSInvalid("Compact JWS must be a string or Uint8Array");
    }
    const { 0: protectedHeader, 1: payload, 2: signature, length } = jws.split(".");
    if (length !== 3) {
      throw new JWSInvalid("Invalid Compact JWS");
    }
    const verified = await flattenedVerify({ payload, protected: protectedHeader, signature }, key, options);
    const result = { payload: verified.payload, protectedHeader: verified.protectedHeader };
    if (typeof key === "function") {
      return { ...result, key: verified.key };
    }
    return result;
  }
  var epoch_default = (date) => Math.floor(date.getTime() / 1e3);
  var minute = 60;
  var hour = minute * 60;
  var day = hour * 24;
  var week = day * 7;
  var year = day * 365.25;
  var REGEX = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i;
  var secs_default = (str) => {
    const matched = REGEX.exec(str);
    if (!matched) {
      throw new TypeError("Invalid time period format");
    }
    const value = parseFloat(matched[1]);
    const unit = matched[2].toLowerCase();
    switch (unit) {
      case "sec":
      case "secs":
      case "second":
      case "seconds":
      case "s":
        return Math.round(value);
      case "minute":
      case "minutes":
      case "min":
      case "mins":
      case "m":
        return Math.round(value * minute);
      case "hour":
      case "hours":
      case "hr":
      case "hrs":
      case "h":
        return Math.round(value * hour);
      case "day":
      case "days":
      case "d":
        return Math.round(value * day);
      case "week":
      case "weeks":
      case "w":
        return Math.round(value * week);
      default:
        return Math.round(value * year);
    }
  };
  var normalizeTyp = (value) => value.toLowerCase().replace(/^application\//, "");
  var checkAudiencePresence = (audPayload, audOption) => {
    if (typeof audPayload === "string") {
      return audOption.includes(audPayload);
    }
    if (Array.isArray(audPayload)) {
      return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
    }
    return false;
  };
  var jwt_claims_set_default = (protectedHeader, encodedPayload, options = {}) => {
    const { typ } = options;
    if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
      throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', "typ", "check_failed");
    }
    let payload;
    try {
      payload = JSON.parse(decoder.decode(encodedPayload));
    } catch {
    }
    if (!isObject(payload)) {
      throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
    }
    const { issuer } = options;
    if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
      throw new JWTClaimValidationFailed('unexpected "iss" claim value', "iss", "check_failed");
    }
    const { subject } = options;
    if (subject && payload.sub !== subject) {
      throw new JWTClaimValidationFailed('unexpected "sub" claim value', "sub", "check_failed");
    }
    const { audience } = options;
    if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
      throw new JWTClaimValidationFailed('unexpected "aud" claim value', "aud", "check_failed");
    }
    let tolerance;
    switch (typeof options.clockTolerance) {
      case "string":
        tolerance = secs_default(options.clockTolerance);
        break;
      case "number":
        tolerance = options.clockTolerance;
        break;
      case "undefined":
        tolerance = 0;
        break;
      default:
        throw new TypeError("Invalid clockTolerance option type");
    }
    const { currentDate } = options;
    const now = epoch_default(currentDate || new Date());
    if ((payload.iat !== void 0 || options.maxTokenAge) && typeof payload.iat !== "number") {
      throw new JWTClaimValidationFailed('"iat" claim must be a number', "iat", "invalid");
    }
    if (payload.nbf !== void 0) {
      if (typeof payload.nbf !== "number") {
        throw new JWTClaimValidationFailed('"nbf" claim must be a number', "nbf", "invalid");
      }
      if (payload.nbf > now + tolerance) {
        throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', "nbf", "check_failed");
      }
    }
    if (payload.exp !== void 0) {
      if (typeof payload.exp !== "number") {
        throw new JWTClaimValidationFailed('"exp" claim must be a number', "exp", "invalid");
      }
      if (payload.exp <= now - tolerance) {
        throw new JWTExpired('"exp" claim timestamp check failed', "exp", "check_failed");
      }
    }
    if (options.maxTokenAge) {
      const age = now - payload.iat;
      const max = typeof options.maxTokenAge === "number" ? options.maxTokenAge : secs_default(options.maxTokenAge);
      if (age - tolerance > max) {
        throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
      }
      if (age < 0 - tolerance) {
        throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed");
      }
    }
    return payload;
  };
  async function jwtVerify(jwt, key, options) {
    const verified = await compactVerify(jwt, key, options);
    if (verified.protectedHeader.crit?.includes("b64") && verified.protectedHeader.b64 === false) {
      throw new JWTInvalid("JWTs MUST NOT use unencoded payload");
    }
    const payload = jwt_claims_set_default(verified.protectedHeader, verified.payload, options);
    const result = { payload, protectedHeader: verified.protectedHeader };
    if (typeof key === "function") {
      return { ...result, key: verified.key };
    }
    return result;
  }
  var base64url_exports2 = {};
  __export(base64url_exports2, {
    decode: () => decode2,
    encode: () => encode2
  });
  var encode2 = encode;
  var decode2 = decode;

  // worker.js
  var import_geolib_3_3 = __toESM(require_geolib_3_3());
  var import_ua_parser_js_1_0 = __toESM(require_ua_parser_js_1_0());
  var interactionCounter = {};
  var hashes = {};
  var instanceStart = void 0;
  var instancePrefix = void 0;
  var instanceCreatedBy = void 0;
  var instanceCreated = void 0;
  var instanceId = void 0;
  var instanceRequests = 0;
  var worker_default = {
    fetch: async (req, env) => {
      const ip = req.headers.get("CF-Connecting-IP");
      const { url, cf, method } = req;
      const { timezone, latitude, longitude } = cf;
      const { hostname, pathname, search, searchParams, hash, origin } = new URL(
        url
      );
      const pathSegments = decodeURI(pathname).slice(1).split("/");
      const pathOptions = pathSegments[0] && pathSegments[0].includes("=") ? Object.fromEntries(new URLSearchParams(pathSegments[0])) : void 0;
      const pathDefaults = pathSegments.map(
        (segment) => segment.slice(0, 1) == ":" ? segment.slice(1) : void 0
      ).filter((n) => n);
      const rootPath = pathname == "/" || pathname == "/api";
      const hostSegments = hostname.split(".");
      const [tld, sld, ...subdomains] = hostSegments.reverse();
      const [subdomain, subsubdomain] = subdomains;
      const headers = Object.fromEntries(req.headers);
      const authCookie = "__Session-worker.auth.providers-token=";
      let body = "";
      try {
        body = req.body ? await req.json() : void 0;
      } catch {
        body = void 0;
      }
      interactionCounter[ip] = interactionCounter[ip] ? interactionCounter[ip] + 1 : 1;
      const ts = Date.now();
      const time = new Date(ts).toISOString();
      const localTime = new Date(ts).toLocaleString("en-US", {
        timeZone: cf.timezone
      });
      let profile = null;
      const token = req.headers.get("cookie")?.split(";")?.find((c) => c.trim().startsWith(authCookie))?.trim()?.slice(authCookie.length);
      let jwt = null;
      if (req.headers.get("x-api-key") || searchParams.get("apikey")) {
        const userData = await env.APIKEYS.fetch(req).then(
          (res) => res.ok && res.json()
        );
        profile = userData?.profile || null;
      }
      if (!profile && token) {
        try {
          const domain = new URL(req.url).hostname.replace(
            /.*\.([^.]+.[^.]+)$/,
            "$1"
          );
          jwt = hashes[token] || (hashes[token] = await jwtVerify(
            token,
            new Uint8Array(
              await crypto.subtle.digest(
                "SHA-512",
                new TextEncoder().encode(env.JWT_SECRET + domain)
              )
            ),
            { issuer: domain }
          ));
          profile = jwt?.payload?.profile;
        } catch (error) {
          console.error({ error });
        }
      }
      const colo = locations[req.cf.colo];
      const edgeDistance = Math.round(
        (0, import_geolib_3_3.getDistance)(
          { latitude, longitude },
          { latitude: colo?.lat, longitude: colo?.lon }
        ) / (req.cf.country === "US" ? 1609.344 : 1e3)
      );
      const requestId = req.headers.get("cf-ray") + "-" + req.cf.colo;
      const newInstance = instanceCreatedBy ? false : true;
      if (!instanceCreatedBy)
        instanceCreatedBy = requestId;
      if (!instanceId)
        instanceId = instanceCreatedBy.slice(12, 16);
      if (!instancePrefix)
        instancePrefix = instanceCreatedBy.slice(0, 12);
      if (!instanceStart)
        instanceStart = parseInt(instancePrefix, 16);
      instanceRequests = instanceRequests + 1;
      if (!instanceCreated)
        instanceCreated = ts;
      const instanceDiff = parseInt(requestId.slice(0, 12), 16) - instanceStart;
      const instanceDurationMilliseconds = ts - instanceCreated;
      const instanceDurationSeconds = Math.floor(
        instanceDurationMilliseconds / 1e3
      );
      const userAgent = headers["user-agent"];
      const ua = new import_ua_parser_js_1_0.UAParser(userAgent).getResult();
      const city = req.cf.city, region = req.cf.region, country = countries[req.cf.country]?.name, continent = continents[req.cf.continent];
      const location = `${city}, ${region}, ${country}, ${continent}`;
      const retval = JSON.stringify(
        {
          api: {
            icon: "\u{1F30E}",
            name: "ctx.do",
            description: "Context Enrichment",
            url: "https://ctx.do",
            endpoints: {
              context: "https://ctx.do/api"
            },
            memberOf: "https://apis.do/core",
            login: origin + "/login",
            logout: origin + "/logout",
            repo: "https://github.com/drivly/ctx.do"
          },
          colo,
          hostname,
          pathname,
          search,
          hash,
          origin,
          query: Object.fromEntries(searchParams),
          pathSegments,
          pathOptions,
          pathDefaults,
          rootPath,
          hostSegments,
          tld,
          sld,
          subdomains,
          subdomain,
          subsubdomain,
          ts,
          time,
          body,
          url,
          method,
          userAgent,
          ua,
          jwt: jwt || void 0,
          cf,
          requestId,
          newInstance,
          instanceId,
          instanceCreatedBy,
          instancePrefix,
          instanceStart,
          instanceCreated,
          instanceDiff,
          instanceDurationMilliseconds,
          instanceDurationSeconds,
          instanceRequests,
          instanceInteractions: profile ? interactionCounter : void 0,
          headers,
          user: {
            authenticated: profile !== null,
            profile: profile || void 0,
            plan: "\u{1F6E0} Build",
            browser: ua?.browser?.name,
            os: ua?.os?.name,
            ip,
            isp: req.cf.asOrganization,
            flag: flags[req.cf.country],
            zipcode: req.cf.postalCode,
            city,
            metro: metros[req.cf.metroCode],
            region,
            country,
            continent,
            requestId,
            localTime,
            timezone,
            edgeLocation: colo?.city,
            edgeDistanceMiles: req.cf.country === "US" ? edgeDistance : void 0,
            edgeDistanceKilometers: req.cf.country === "US" ? void 0 : edgeDistance,
            latencyMilliseconds: req.cf.clientTcpRtt,
            recentInteractions: interactionCounter[ip],
            trustScore: profile ? 99 : req.cf?.botManagement?.score
          }
        },
        null,
        2
      );
      return new Response(method === "HEAD" ? null : retval, {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "x-content-length": retval.length.toString()
        }
      });
    }
  };
  var locations = {
    TIA: {
      iata: "TIA",
      lat: 41.4146995544,
      lon: 19.7206001282,
      cca2: "AL",
      region: "Europe",
      city: "Tirana"
    },
    ALG: {
      iata: "ALG",
      lat: 36.6910018921,
      lon: 3.2154099941,
      cca2: "DZ",
      region: "Africa",
      city: "Algiers"
    },
    LAD: {
      iata: "LAD",
      lat: -8.8583698273,
      lon: 13.2312002182,
      cca2: "AO",
      region: "Africa",
      city: "Luanda"
    },
    EZE: {
      iata: "EZE",
      lat: -34.8222,
      lon: -58.5358,
      cca2: "AR",
      region: "South America",
      city: "Buenos Aires"
    },
    COR: {
      iata: "COR",
      lat: -31.31,
      lon: -64.208333,
      cca2: "AR",
      region: "South America",
      city: "C\xF3rdoba"
    },
    NQN: {
      iata: "NQN",
      lat: -38.9490013123,
      lon: -68.1557006836,
      cca2: "AR",
      region: "South America",
      city: "Neuquen"
    },
    EVN: {
      iata: "EVN",
      lat: 40.1473007202,
      lon: 44.3959007263,
      cca2: "AM",
      region: "Middle East",
      city: "Yerevan"
    },
    ADL: {
      iata: "ADL",
      lat: -34.9431729,
      lon: 138.5335637,
      cca2: "AU",
      region: "Oceania",
      city: "Adelaide"
    },
    BNE: {
      iata: "BNE",
      lat: -27.3841991425,
      lon: 153.117004394,
      cca2: "AU",
      region: "Oceania",
      city: "Brisbane"
    },
    CBR: {
      iata: "CBR",
      lat: -35.3069000244,
      lon: 149.1950073242,
      cca2: "AU",
      region: "Oceania",
      city: "Canberra"
    },
    HBA: {
      iata: "HBA",
      lat: -42.883209,
      lon: 147.331665,
      cca2: "AU",
      region: "Oceania",
      city: "Hobart"
    },
    MEL: {
      iata: "MEL",
      lat: -37.6733016968,
      lon: 144.843002319,
      cca2: "AU",
      region: "Oceania",
      city: "Melbourne"
    },
    PER: {
      iata: "PER",
      lat: -31.9402999878,
      lon: 115.967002869,
      cca2: "AU",
      region: "Oceania",
      city: "Perth"
    },
    SYD: {
      iata: "SYD",
      lat: -33.9460983276,
      lon: 151.177001953,
      cca2: "AU",
      region: "Oceania",
      city: "Sydney"
    },
    VIE: {
      iata: "VIE",
      lat: 48.1102981567,
      lon: 16.5697002411,
      cca2: "AT",
      region: "Europe",
      city: "Vienna"
    },
    LLK: {
      iata: "LLK",
      lat: 38.7463989258,
      lon: 48.8180007935,
      cca2: "AZ",
      region: "Middle East",
      city: "Astara"
    },
    GYD: {
      iata: "GYD",
      lat: 40.4674987793,
      lon: 50.0466995239,
      cca2: "AZ",
      region: "Middle East",
      city: "Baku"
    },
    BAH: {
      iata: "BAH",
      lat: 26.2707996368,
      lon: 50.6335983276,
      cca2: "BH",
      region: "Middle East",
      city: "Manama"
    },
    CGP: {
      iata: "CGP",
      lat: 22.2495995,
      lon: 91.8133011,
      cca2: "BD",
      region: "Asia Pacific",
      city: "Chittagong"
    },
    DAC: {
      iata: "DAC",
      lat: 23.843347,
      lon: 90.397783,
      cca2: "BD",
      region: "Asia Pacific",
      city: "Dhaka"
    },
    JSR: {
      iata: "JSR",
      lat: 23.1837997437,
      lon: 89.1607971191,
      cca2: "BD",
      region: "Asia Pacific",
      city: "Jashore"
    },
    MSQ: {
      iata: "MSQ",
      lat: 53.9006,
      lon: 27.599,
      cca2: "BY",
      region: "Europe",
      city: "Minsk"
    },
    BRU: {
      iata: "BRU",
      lat: 50.9014015198,
      lon: 4.4844398499,
      cca2: "BE",
      region: "Europe",
      city: "Brussels"
    },
    PBH: {
      iata: "PBH",
      lat: 27.4712,
      lon: 89.6339,
      cca2: "BT",
      region: "Asia Pacific",
      city: "Thimphu"
    },
    GBE: {
      iata: "GBE",
      lat: -24.6282,
      lon: 25.9231,
      cca2: "BW",
      region: "Africa",
      city: "Gaborone"
    },
    QWJ: {
      iata: "QWJ",
      lat: -22.738,
      lon: -47.334,
      cca2: "BR",
      region: "South America",
      city: "Americana"
    },
    BEL: {
      iata: "BEL",
      lat: -1.4563,
      lon: -48.5013,
      cca2: "BR",
      region: "South America",
      city: "Bel\xE9m"
    },
    CNF: {
      iata: "CNF",
      lat: -19.624444,
      lon: -43.971944,
      cca2: "BR",
      region: "South America",
      city: "Belo Horizonte"
    },
    BNU: {
      iata: "BNU",
      lat: -26.89245,
      lon: -49.07696,
      cca2: "BR",
      region: "South America",
      city: "Blumenau"
    },
    BSB: {
      iata: "BSB",
      lat: -15.79824,
      lon: -47.90859,
      cca2: "BR",
      region: "South America",
      city: "Brasilia"
    },
    CFC: {
      iata: "CFC",
      lat: -26.7762,
      lon: -51.0125,
      cca2: "BR",
      region: "South America",
      city: "Cacador"
    },
    VCP: {
      iata: "VCP",
      lat: -22.90662,
      lon: -47.08576,
      cca2: "BR",
      region: "South America",
      city: "Campinas"
    },
    CGB: {
      iata: "CGB",
      lat: -15.59611,
      lon: -56.09667,
      cca2: "BR",
      region: "South America",
      city: "Cuiaba"
    },
    CWB: {
      iata: "CWB",
      lat: -25.5284996033,
      lon: -49.1758003235,
      cca2: "BR",
      region: "South America",
      city: "Curitiba"
    },
    FLN: {
      iata: "FLN",
      lat: -27.6702785492,
      lon: -48.5525016785,
      cca2: "BR",
      region: "South America",
      city: "Florianopolis"
    },
    FOR: {
      iata: "FOR",
      lat: -3.7762799263,
      lon: -38.5326004028,
      cca2: "BR",
      region: "South America",
      city: "Fortaleza"
    },
    GYN: {
      iata: "GYN",
      lat: -16.69727,
      lon: -49.26851,
      cca2: "BR",
      region: "South America",
      city: "Goiania"
    },
    ITJ: {
      iata: "ITJ",
      lat: -27.6116676331,
      lon: -48.6727790833,
      cca2: "BR",
      region: "South America",
      city: "Itajai"
    },
    JOI: {
      iata: "JOI",
      lat: -26.304408,
      lon: -48.846383,
      cca2: "BR",
      region: "South America",
      city: "Joinville"
    },
    JDO: {
      iata: "JDO",
      lat: -7.2242,
      lon: -39.313,
      cca2: "BR",
      region: "South America",
      city: "Juazeiro do Norte"
    },
    MAO: {
      iata: "MAO",
      lat: -3.11286,
      lon: -60.01949,
      cca2: "BR",
      region: "South America",
      city: "Manaus"
    },
    POA: {
      iata: "POA",
      lat: -29.9944000244,
      lon: -51.1713981628,
      cca2: "BR",
      region: "South America",
      city: "Porto Alegre"
    },
    RAO: {
      iata: "RAO",
      lat: -21.1363887787,
      lon: -47.7766685486,
      cca2: "BR",
      region: "South America",
      city: "Ribeirao Preto"
    },
    GIG: {
      iata: "GIG",
      lat: -22.8099994659,
      lon: -43.2505569458,
      cca2: "BR",
      region: "South America",
      city: "Rio de Janeiro"
    },
    SSA: {
      iata: "SSA",
      lat: -12.9086112976,
      lon: -38.3224983215,
      cca2: "BR",
      region: "South America",
      city: "Salvador"
    },
    SJP: {
      iata: "SJP",
      lat: -20.807157,
      lon: -49.378994,
      cca2: "BR",
      region: "South America",
      city: "S\xE3o Jos\xE9 do Rio Preto"
    },
    GRU: {
      iata: "GRU",
      lat: -23.4355564117,
      lon: -46.4730567932,
      cca2: "BR",
      region: "South America",
      city: "S\xE3o Paulo"
    },
    SOD: {
      iata: "SOD",
      lat: -23.54389,
      lon: -46.63445,
      cca2: "BR",
      region: "South America",
      city: "Sorocaba"
    },
    UDI: {
      iata: "UDI",
      lat: -18.8836116791,
      lon: -48.225276947,
      cca2: "BR",
      region: "South America",
      city: "Uberlandia"
    },
    BWN: {
      iata: "BWN",
      lat: 4.903052,
      lon: 114.939819,
      cca2: "BN",
      region: "Asia Pacific",
      city: "Bandar Seri Begawan"
    },
    SOF: {
      iata: "SOF",
      lat: 42.6966934204,
      lon: 23.4114360809,
      cca2: "BG",
      region: "Europe",
      city: "Sofia"
    },
    OUA: {
      iata: "OUA",
      lat: 12.3531999588,
      lon: -1.5124200583,
      cca2: "BF",
      region: "Africa",
      city: "Ouagadougou"
    },
    PNH: {
      iata: "PNH",
      lat: 11.5466003418,
      lon: 104.84400177,
      cca2: "KH",
      region: "Asia Pacific",
      city: "Phnom Penh"
    },
    YYC: {
      iata: "YYC",
      lat: 51.113899231,
      lon: -114.019996643,
      cca2: "CA",
      region: "North America",
      city: "Calgary"
    },
    YVR: {
      iata: "YVR",
      lat: 49.193901062,
      lon: -123.183998108,
      cca2: "CA",
      region: "North America",
      city: "Vancouver"
    },
    YWG: {
      iata: "YWG",
      lat: 49.9099998474,
      lon: -97.2398986816,
      cca2: "CA",
      region: "North America",
      city: "Winnipeg"
    },
    YOW: {
      iata: "YOW",
      lat: 45.3224983215,
      lon: -75.6691970825,
      cca2: "CA",
      region: "North America",
      city: "Ottawa"
    },
    YYZ: {
      iata: "YYZ",
      lat: 43.6772003174,
      lon: -79.6305999756,
      cca2: "CA",
      region: "North America",
      city: "Toronto"
    },
    YUL: {
      iata: "YUL",
      lat: 45.4706001282,
      lon: -73.7407989502,
      cca2: "CA",
      region: "North America",
      city: "Montr\xE9al"
    },
    YXE: {
      iata: "YXE",
      lat: 52.1707992554,
      lon: -106.699996948,
      cca2: "CA",
      region: "North America",
      city: "Saskatoon"
    },
    ARI: {
      iata: "ARI",
      lat: -18.348611,
      lon: -70.338889,
      cca2: "CL",
      region: "South America",
      city: "Arica"
    },
    CCP: {
      iata: "CCP",
      lat: -36.8201,
      lon: -73.0444,
      cca2: "CL",
      region: "South America",
      city: "Concepci\xF3n"
    },
    SCL: {
      iata: "SCL",
      lat: -33.3930015564,
      lon: -70.7857971191,
      cca2: "CL",
      region: "South America",
      city: "Santiago"
    },
    BOG: {
      iata: "BOG",
      lat: 4.70159,
      lon: -74.1469,
      cca2: "CO",
      region: "South America",
      city: "Bogot\xE1"
    },
    MDE: {
      iata: "MDE",
      lat: 6.16454,
      lon: -75.4231,
      cca2: "CO",
      region: "South America",
      city: "Medell\xEDn"
    },
    SJO: {
      iata: "SJO",
      lat: 9.9938602448,
      lon: -84.2088012695,
      cca2: "CR",
      region: "South America",
      city: "San Jos\xE9"
    },
    ZAG: {
      iata: "ZAG",
      lat: 45.7429008484,
      lon: 16.0687999725,
      cca2: "HR",
      region: "Europe",
      city: "Zagreb"
    },
    CUR: {
      iata: "CUR",
      lat: 12.1888999939,
      lon: -68.9598007202,
      cca2: "CW",
      region: "South America",
      city: "Willemstad"
    },
    LCA: {
      iata: "LCA",
      lat: 34.8750991821,
      lon: 33.6249008179,
      cca2: "CY",
      region: "Europe",
      city: "Nicosia"
    },
    PRG: {
      iata: "PRG",
      lat: 50.1007995605,
      lon: 14.2600002289,
      cca2: "CZ",
      region: "Europe",
      city: "Prague"
    },
    CPH: {
      iata: "CPH",
      lat: 55.6179008484,
      lon: 12.6560001373,
      cca2: "DK",
      region: "Europe",
      city: "Copenhagen"
    },
    JIB: {
      iata: "JIB",
      lat: 11.5473003387,
      lon: 43.1595001221,
      cca2: "DJ",
      region: "Africa",
      city: "Djibouti"
    },
    SDQ: {
      iata: "SDQ",
      lat: 18.4297008514,
      lon: -69.6688995361,
      cca2: "DO",
      region: "North America",
      city: "Santo Domingo"
    },
    GYE: {
      iata: "GYE",
      lat: -2.1894,
      lon: -79.8891,
      cca2: "EC",
      region: "South America",
      city: "Guayaquil"
    },
    UIO: {
      iata: "UIO",
      lat: -0.1291666667,
      lon: -78.3575,
      cca2: "EC",
      region: "South America",
      city: "Quito"
    },
    TLL: {
      iata: "TLL",
      lat: 59.4132995605,
      lon: 24.8327999115,
      cca2: "EE",
      region: "Europe",
      city: "Tallinn"
    },
    HEL: {
      iata: "HEL",
      lat: 60.317199707,
      lon: 24.963300705,
      cca2: "FI",
      region: "Europe",
      city: "Helsinki"
    },
    MRS: {
      iata: "MRS",
      lat: 43.439271922,
      lon: 5.2214241028,
      cca2: "FR",
      region: "Europe",
      city: "Marseille"
    },
    CDG: {
      iata: "CDG",
      lat: 49.0127983093,
      lon: 2.5499999523,
      cca2: "FR",
      region: "Europe",
      city: "Paris"
    },
    TBS: {
      iata: "TBS",
      lat: 41.6692008972,
      lon: 44.95470047,
      cca2: "GE",
      region: "Europe",
      city: "Tbilisi"
    },
    TXL: {
      iata: "TXL",
      lat: 52.5597000122,
      lon: 13.2876996994,
      cca2: "DE",
      region: "Europe",
      city: "Berlin"
    },
    DUS: {
      iata: "DUS",
      lat: 51.2895011902,
      lon: 6.7667798996,
      cca2: "DE",
      region: "Europe",
      city: "D\xFCsseldorf"
    },
    FRA: {
      iata: "FRA",
      lat: 50.0264015198,
      lon: 8.543129921,
      cca2: "DE",
      region: "Europe",
      city: "Frankfurt"
    },
    HAM: {
      iata: "HAM",
      lat: 53.6304016113,
      lon: 9.9882297516,
      cca2: "DE",
      region: "Europe",
      city: "Hamburg"
    },
    MUC: {
      iata: "MUC",
      lat: 48.3538017273,
      lon: 11.7861003876,
      cca2: "DE",
      region: "Europe",
      city: "Munich"
    },
    ACC: {
      iata: "ACC",
      lat: 5.614818,
      lon: -0.205874,
      cca2: "GH",
      region: "Africa",
      city: "Accra"
    },
    ATH: {
      iata: "ATH",
      lat: 37.9364013672,
      lon: 23.9444999695,
      cca2: "GR",
      region: "Europe",
      city: "Athens"
    },
    SKG: {
      iata: "SKG",
      lat: 40.5196990967,
      lon: 22.9708995819,
      cca2: "GR",
      region: "Europe",
      city: "Thessaloniki"
    },
    GND: {
      iata: "GND",
      lat: 12.007116,
      lon: -61.7882288,
      cca2: "GD",
      region: "South America",
      city: "St. George's"
    },
    GUM: {
      iata: "GUM",
      lat: 13.4834003448,
      lon: 144.796005249,
      cca2: "GU",
      region: "Asia Pacific",
      city: "Hagatna"
    },
    GUA: {
      iata: "GUA",
      lat: 14.5832996368,
      lon: -90.5274963379,
      cca2: "GT",
      region: "North America",
      city: "Guatemala City"
    },
    GEO: {
      iata: "GEO",
      lat: 6.825648,
      lon: -58.163756,
      cca2: "GY",
      region: "South America",
      city: "Georgetown"
    },
    PAP: {
      iata: "PAP",
      lat: 18.5799999237,
      lon: -72.2925033569,
      cca2: "HT",
      region: "North America",
      city: "Port-au-Prince"
    },
    TGU: {
      iata: "TGU",
      lat: 14.0608,
      lon: -87.2172,
      cca2: "HN",
      region: "South America",
      city: "Tegucigalpa"
    },
    HKG: {
      iata: "HKG",
      lat: 22.3089008331,
      lon: 113.915000916,
      cca2: "HK",
      region: "Asia Pacific",
      city: "Hong Kong"
    },
    BUD: {
      iata: "BUD",
      lat: 47.4369010925,
      lon: 19.2555999756,
      cca2: "HU",
      region: "Europe",
      city: "Budapest"
    },
    KEF: {
      iata: "KEF",
      lat: 63.9850006104,
      lon: -22.6056003571,
      cca2: "IS",
      region: "Europe",
      city: "Reykjav\xEDk"
    },
    AMD: {
      iata: "AMD",
      lat: 23.0225,
      lon: 72.5714,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Ahmedabad"
    },
    BLR: {
      iata: "BLR",
      lat: 13.7835719,
      lon: 76.6165937,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Bangalore"
    },
    BBI: {
      iata: "BBI",
      lat: 20.2961,
      lon: 85.8245,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Bhubaneswar"
    },
    IXC: {
      iata: "IXC",
      lat: 30.673500061,
      lon: 76.7884979248,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Chandigarh"
    },
    MAA: {
      iata: "MAA",
      lat: 12.9900054932,
      lon: 80.1692962646,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Chennai"
    },
    HYD: {
      iata: "HYD",
      lat: 17.2313175201,
      lon: 78.4298553467,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Hyderabad"
    },
    KNU: {
      iata: "KNU",
      lat: 26.4499,
      lon: 80.3319,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Kanpur"
    },
    CCU: {
      iata: "CCU",
      lat: 22.6476933,
      lon: 88.4349249,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Kolkata"
    },
    BOM: {
      iata: "BOM",
      lat: 19.0886993408,
      lon: 72.8678970337,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Mumbai"
    },
    NAG: {
      iata: "NAG",
      lat: 21.1610714,
      lon: 79.0024702,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Nagpur"
    },
    DEL: {
      iata: "DEL",
      lat: 28.5664997101,
      lon: 77.1031036377,
      cca2: "IN",
      region: "Asia Pacific",
      city: "New Delhi"
    },
    PAT: {
      iata: "PAT",
      lat: 25.591299057,
      lon: 85.0879974365,
      cca2: "IN",
      region: "Asia Pacific",
      city: "Patna"
    },
    CGK: {
      iata: "CGK",
      lat: -6.1275229,
      lon: 106.6515118,
      cca2: "ID",
      region: "Asia Pacific",
      city: "Jakarta"
    },
    JOG: {
      iata: "JOG",
      lat: -7.7881798744,
      lon: 110.4319992065,
      cca2: "ID",
      region: "Asia Pacific",
      city: "Yogyakarta"
    },
    BGW: {
      iata: "BGW",
      lat: 33.2625007629,
      lon: 44.2346000671,
      cca2: "IQ",
      region: "Middle East",
      city: "Baghdad"
    },
    BSR: {
      iata: "BSR",
      lat: 30.5491008759,
      lon: 47.6621017456,
      cca2: "IQ",
      region: "Middle East",
      city: "Basra"
    },
    EBL: {
      iata: "EBL",
      lat: 36.1901,
      lon: 43.993,
      cca2: "IQ",
      region: "Middle East",
      city: "Erbil"
    },
    NJF: {
      iata: "NJF",
      lat: 31.989722,
      lon: 44.404167,
      cca2: "IQ",
      region: "Middle East",
      city: "Najaf"
    },
    XNH: {
      iata: "XNH",
      lat: 30.9358005524,
      lon: 46.0900993347,
      cca2: "IQ",
      region: "Middle East",
      city: "Nasiriyah"
    },
    ORK: {
      iata: "ORK",
      lat: 51.8413009644,
      lon: -8.491109848,
      cca2: "IE",
      region: "Europe",
      city: "Cork"
    },
    DUB: {
      iata: "DUB",
      lat: 53.4212989807,
      lon: -6.270070076,
      cca2: "IE",
      region: "Europe",
      city: "Dublin"
    },
    HFA: {
      iata: "HFA",
      lat: 32.78492,
      lon: 34.96069,
      cca2: "IL",
      region: "Middle East",
      city: "Haifa"
    },
    TLV: {
      iata: "TLV",
      lat: 32.0113983154,
      lon: 34.8866996765,
      cca2: "IL",
      region: "Middle East",
      city: "Tel Aviv"
    },
    MXP: {
      iata: "MXP",
      lat: 45.6305999756,
      lon: 8.7281103134,
      cca2: "IT",
      region: "Europe",
      city: "Milan"
    },
    PMO: {
      iata: "PMO",
      lat: 38.16114,
      lon: 13.31546,
      cca2: "IT",
      region: "Europe",
      city: "Palermo"
    },
    FCO: {
      iata: "FCO",
      lat: 41.8045005798,
      lon: 12.2508001328,
      cca2: "IT",
      region: "Europe",
      city: "Rome"
    },
    OKA: {
      iata: "OKA",
      lat: 26.1958,
      lon: 127.646,
      cca2: "JP",
      region: "Asia Pacific",
      city: "Naha"
    },
    KIX: {
      iata: "KIX",
      lat: 34.4272994995,
      lon: 135.244003296,
      cca2: "JP",
      region: "Asia Pacific",
      city: "Osaka"
    },
    NRT: {
      iata: "NRT",
      lat: 35.7647018433,
      lon: 140.386001587,
      cca2: "JP",
      region: "Asia Pacific",
      city: "Tokyo"
    },
    AMM: {
      iata: "AMM",
      lat: 31.7226009369,
      lon: 35.9931983948,
      cca2: "JO",
      region: "Middle East",
      city: "Amman"
    },
    ALA: {
      iata: "ALA",
      lat: 43.3521003723,
      lon: 77.0404968262,
      cca2: "KZ",
      region: "Asia Pacific",
      city: "Almaty"
    },
    MBA: {
      iata: "MBA",
      lat: -4.0348300934,
      lon: 39.5942001343,
      cca2: "KE",
      region: "Africa",
      city: "Mombasa"
    },
    NBO: {
      iata: "NBO",
      lat: -1.319239974,
      lon: 36.9277992249,
      cca2: "KE",
      region: "Africa",
      city: "Nairobi"
    },
    ICN: {
      iata: "ICN",
      lat: 37.4691009521,
      lon: 126.450996399,
      cca2: "KR",
      region: "Asia Pacific",
      city: "Seoul"
    },
    KWI: {
      iata: "KWI",
      lat: 29.226600647,
      lon: 47.9688987732,
      cca2: "KW",
      region: "Middle East",
      city: "Kuwait City"
    },
    VTE: {
      iata: "VTE",
      lat: 17.9757,
      lon: 102.5683,
      cca2: "LA",
      region: "Asia Pacific",
      city: "Vientiane"
    },
    RIX: {
      iata: "RIX",
      lat: 56.9235992432,
      lon: 23.9710998535,
      cca2: "LV",
      region: "Europe",
      city: "Riga"
    },
    BEY: {
      iata: "BEY",
      lat: 33.8208999634,
      lon: 35.4883995056,
      cca2: "LB",
      region: "Middle East",
      city: "Beirut"
    },
    ROB: {
      iata: "ROB",
      lat: 6.239127,
      lon: -10.35462,
      cca2: "LR",
      region: "Africa",
      city: "Monrovia"
    },
    VNO: {
      iata: "VNO",
      lat: 54.6341018677,
      lon: 25.2858009338,
      cca2: "LT",
      region: "Europe",
      city: "Vilnius"
    },
    LUX: {
      iata: "LUX",
      lat: 49.6265983582,
      lon: 6.211520195,
      cca2: "LU",
      region: "Europe",
      city: "Luxembourg City"
    },
    MFM: {
      iata: "MFM",
      lat: 22.1495990753,
      lon: 113.592002869,
      cca2: "MO",
      region: "Asia Pacific",
      city: "Macau"
    },
    TNR: {
      iata: "TNR",
      lat: -18.91368,
      lon: 47.53613,
      cca2: "MG",
      region: "Africa",
      city: "Antananarivo"
    },
    JHB: {
      iata: "JHB",
      lat: 1.635848,
      lon: 103.665943,
      cca2: "MY",
      region: "Asia Pacific",
      city: "Johor Bahru"
    },
    KUL: {
      iata: "KUL",
      lat: 2.745579958,
      lon: 101.709999084,
      cca2: "MY",
      region: "Asia Pacific",
      city: "Kuala Lumpur"
    },
    MLE: {
      iata: "MLE",
      lat: 4.1748,
      lon: 73.50888,
      cca2: "MV",
      region: "Asia Pacific",
      city: "Male"
    },
    MRU: {
      iata: "MRU",
      lat: -20.4302005768,
      lon: 57.6836013794,
      cca2: "MU",
      region: "Africa",
      city: "Port Louis"
    },
    MEX: {
      iata: "MEX",
      lat: 19.4363002777,
      lon: -99.0720977783,
      cca2: "MX",
      region: "North America",
      city: "Mexico City"
    },
    QRO: {
      iata: "QRO",
      lat: 20.6173000336,
      lon: -100.185997009,
      cca2: "MX",
      region: "North America",
      city: "Queretaro"
    },
    KIV: {
      iata: "KIV",
      lat: 46.9277000427,
      lon: 28.9309997559,
      cca2: "MD",
      region: "Europe",
      city: "Chi\u0219in\u0103u"
    },
    ULN: {
      iata: "ULN",
      lat: 47.8431015015,
      lon: 106.766998291,
      cca2: "MN",
      region: "Asia Pacific",
      city: "Ulaanbaatar"
    },
    CMN: {
      iata: "CMN",
      lat: 33.3675003052,
      lon: -7.5899701118,
      cca2: "MA",
      region: "Africa",
      city: "Casablanca"
    },
    MPM: {
      iata: "MPM",
      lat: -25.9207992554,
      lon: 32.5726013184,
      cca2: "MZ",
      region: "Africa",
      city: "Maputo"
    },
    MDL: {
      iata: "MDL",
      lat: 39.2276,
      lon: -74.63704,
      cca2: "MM",
      region: "Asia Pacific",
      city: "Mandalay"
    },
    RGN: {
      iata: "RGN",
      lat: 16.9073009491,
      lon: 96.1332015991,
      cca2: "MM",
      region: "Asia Pacific",
      city: "Yangon"
    },
    KTM: {
      iata: "KTM",
      lat: 27.6965999603,
      lon: 85.3591003418,
      cca2: "NP",
      region: "Asia Pacific",
      city: "Kathmandu"
    },
    AMS: {
      iata: "AMS",
      lat: 52.3086013794,
      lon: 4.7638897896,
      cca2: "NL",
      region: "Europe",
      city: "Amsterdam"
    },
    NOU: {
      iata: "NOU",
      lat: -22.0146007538,
      lon: 166.212997436,
      cca2: "NC",
      region: "Oceania",
      city: "Noumea"
    },
    AKL: {
      iata: "AKL",
      lat: -37.0080986023,
      lon: 174.792007446,
      cca2: "NZ",
      region: "Oceania",
      city: "Auckland"
    },
    CHC: {
      iata: "CHC",
      lat: -43.4893989563,
      lon: 172.5319976807,
      cca2: "NZ",
      region: "Oceania",
      city: "Christchurch"
    },
    LOS: {
      iata: "LOS",
      lat: 6.5773701668,
      lon: 3.321160078,
      cca2: "NG",
      region: "Africa",
      city: "Lagos"
    },
    OSL: {
      iata: "OSL",
      lat: 60.193901062,
      lon: 11.100399971,
      cca2: "NO",
      region: "Europe",
      city: "Oslo"
    },
    MCT: {
      iata: "MCT",
      lat: 23.5932998657,
      lon: 58.2844009399,
      cca2: "OM",
      region: "Middle East",
      city: "Muscat"
    },
    ISB: {
      iata: "ISB",
      lat: 33.6166992188,
      lon: 73.0991973877,
      cca2: "PK",
      region: "Asia Pacific",
      city: "Islamabad"
    },
    KHI: {
      iata: "KHI",
      lat: 24.9064998627,
      lon: 67.1607971191,
      cca2: "PK",
      region: "Asia Pacific",
      city: "Karachi"
    },
    LHE: {
      iata: "LHE",
      lat: 31.5216007233,
      lon: 74.4036026001,
      cca2: "PK",
      region: "Asia Pacific",
      city: "Lahore"
    },
    ZDM: {
      iata: "ZDM",
      lat: 32.2719,
      lon: 35.0194,
      cca2: "PS",
      region: "Middle East",
      city: "Ramallah"
    },
    PTY: {
      iata: "PTY",
      lat: 9.0713596344,
      lon: -79.3834991455,
      cca2: "PA",
      region: "South America",
      city: "Panama City"
    },
    ASU: {
      iata: "ASU",
      lat: -25.2399997711,
      lon: -57.5200004578,
      cca2: "PY",
      region: "South America",
      city: "Asunci\xF3n"
    },
    LIM: {
      iata: "LIM",
      lat: -12.021900177,
      lon: -77.1143035889,
      cca2: "PE",
      region: "South America",
      city: "Lima"
    },
    CGY: {
      iata: "CGY",
      lat: 8.4156198502,
      lon: 124.611000061,
      cca2: "PH",
      region: "Asia Pacific",
      city: "Cagayan de Oro"
    },
    CEB: {
      iata: "CEB",
      lat: 10.3074998856,
      lon: 123.978996277,
      cca2: "PH",
      region: "Asia Pacific",
      city: "Cebu"
    },
    MNL: {
      iata: "MNL",
      lat: 14.508600235,
      lon: 121.019996643,
      cca2: "PH",
      region: "Asia Pacific",
      city: "Manila"
    },
    WAW: {
      iata: "WAW",
      lat: 52.1656990051,
      lon: 20.9671001434,
      cca2: "PL",
      region: "Europe",
      city: "Warsaw"
    },
    LIS: {
      iata: "LIS",
      lat: 38.7812995911,
      lon: -9.1359195709,
      cca2: "PT",
      region: "Europe",
      city: "Lisbon"
    },
    DOH: {
      iata: "DOH",
      lat: 25.2605946,
      lon: 51.6137665,
      cca2: "QA",
      region: "Middle East",
      city: "Doha"
    },
    RUN: {
      iata: "RUN",
      lat: -20.8871002197,
      lon: 55.5102996826,
      cca2: "RE",
      region: "Africa",
      city: "Saint-Denis"
    },
    OTP: {
      iata: "OTP",
      lat: 44.5722007751,
      lon: 26.1021995544,
      cca2: "RO",
      region: "Europe",
      city: "Bucharest"
    },
    KHV: {
      iata: "KHV",
      lat: 48.5279998779,
      lon: 135.18800354,
      cca2: "RU",
      region: "Asia Pacific",
      city: "Khabarovsk"
    },
    KJA: {
      iata: "KJA",
      lat: 56.0153,
      lon: 92.8932,
      cca2: "RU",
      region: "Asia Pacific",
      city: "Krasnoyarsk"
    },
    DME: {
      iata: "DME",
      lat: 55.4087982178,
      lon: 37.9062995911,
      cca2: "RU",
      region: "Europe",
      city: "Moscow"
    },
    LED: {
      iata: "LED",
      lat: 59.8003005981,
      lon: 30.2625007629,
      cca2: "RU",
      region: "Europe",
      city: "Saint Petersburg"
    },
    KLD: {
      iata: "KLD",
      lat: 56.8587,
      lon: 35.9176,
      cca2: "RU",
      region: "Europe",
      city: "Tver"
    },
    SVX: {
      iata: "SVX",
      lat: 56.8431,
      lon: 60.6454,
      cca2: "RU",
      region: "Asia Pacific",
      city: "Yekaterinburg"
    },
    KGL: {
      iata: "KGL",
      lat: -1.9686299563,
      lon: 30.1394996643,
      cca2: "RW",
      region: "Africa",
      city: "Kigali"
    },
    DMM: {
      iata: "DMM",
      lat: 26.471200943,
      lon: 49.7979011536,
      cca2: "SA",
      region: "Middle East",
      city: "Dammam"
    },
    JED: {
      iata: "JED",
      lat: 21.679599762,
      lon: 39.15650177,
      cca2: "SA",
      region: "Middle East",
      city: "Jeddah"
    },
    RUH: {
      iata: "RUH",
      lat: 24.9575996399,
      lon: 46.6987991333,
      cca2: "SA",
      region: "Middle East",
      city: "Riyadh"
    },
    DKR: {
      iata: "DKR",
      lat: 14.7412099,
      lon: -17.4889771,
      cca2: "SN",
      region: "Africa",
      city: "Dakar"
    },
    BEG: {
      iata: "BEG",
      lat: 44.8184013367,
      lon: 20.3090991974,
      cca2: "RS",
      region: "Europe",
      city: "Belgrade"
    },
    SIN: {
      iata: "SIN",
      lat: 1.3501900434,
      lon: 103.994003296,
      cca2: "SG",
      region: "Asia Pacific",
      city: "Singapore"
    },
    BTS: {
      iata: "BTS",
      lat: 48.1486,
      lon: 17.1077,
      cca2: "SK",
      region: "Europe",
      city: "Bratislava"
    },
    CPT: {
      iata: "CPT",
      lat: -33.9648017883,
      lon: 18.6016998291,
      cca2: "ZA",
      region: "Africa",
      city: "Cape Town"
    },
    DUR: {
      iata: "DUR",
      lat: -29.6144444444,
      lon: 31.1197222222,
      cca2: "ZA",
      region: "Africa",
      city: "Durban"
    },
    JNB: {
      iata: "JNB",
      lat: -26.133333,
      lon: 28.25,
      cca2: "ZA",
      region: "Africa",
      city: "Johannesburg"
    },
    BCN: {
      iata: "BCN",
      lat: 41.2971000671,
      lon: 2.0784599781,
      cca2: "ES",
      region: "Europe",
      city: "Barcelona"
    },
    MAD: {
      iata: "MAD",
      lat: 40.4936,
      lon: -3.56676,
      cca2: "ES",
      region: "Europe",
      city: "Madrid"
    },
    CMB: {
      iata: "CMB",
      lat: 7.1807599068,
      lon: 79.8841018677,
      cca2: "LK",
      region: "Asia Pacific",
      city: "Colombo"
    },
    PBM: {
      iata: "PBM",
      lat: 5.452831,
      lon: -55.187783,
      cca2: "SR",
      region: "South America",
      city: "Paramaribo"
    },
    GOT: {
      iata: "GOT",
      lat: 57.6627998352,
      lon: 12.279800415,
      cca2: "SE",
      region: "Europe",
      city: "Gothenburg"
    },
    ARN: {
      iata: "ARN",
      lat: 59.6519012451,
      lon: 17.9186000824,
      cca2: "SE",
      region: "Europe",
      city: "Stockholm"
    },
    GVA: {
      iata: "GVA",
      lat: 46.2380981445,
      lon: 6.1089501381,
      cca2: "CH",
      region: "Europe",
      city: "Geneva"
    },
    ZRH: {
      iata: "ZRH",
      lat: 47.4646987915,
      lon: 8.5491695404,
      cca2: "CH",
      region: "Europe",
      city: "Zurich"
    },
    TPE: {
      iata: "TPE",
      lat: 25.0776996613,
      lon: 121.233001709,
      cca2: "TW",
      region: "Asia Pacific",
      city: "Taipei"
    },
    DAR: {
      iata: "DAR",
      lat: -6.8781099319,
      lon: 39.2025985718,
      cca2: "TZ",
      region: "Africa",
      city: "Dar es Salaam"
    },
    BKK: {
      iata: "BKK",
      lat: 13.6810998917,
      lon: 100.747001648,
      cca2: "TH",
      region: "Asia Pacific",
      city: "Bangkok"
    },
    CNX: {
      iata: "CNX",
      lat: 18.7667999268,
      lon: 98.962600708,
      cca2: "TH",
      region: "Asia Pacific",
      city: "Chiang Mai"
    },
    URT: {
      iata: "URT",
      lat: 9.1325998306,
      lon: 99.135597229,
      cca2: "TH",
      region: "Asia Pacific",
      city: "Surat Thani"
    },
    TUN: {
      iata: "TUN",
      lat: 36.8510017395,
      lon: 10.2271995544,
      cca2: "TN",
      region: "Africa",
      city: "Tunis"
    },
    IST: {
      iata: "IST",
      lat: 40.9768981934,
      lon: 28.8145999908,
      cca2: "TR",
      region: "Europe",
      city: "Istanbul"
    },
    KBP: {
      iata: "KBP",
      lat: 50.3450012207,
      lon: 30.8946990967,
      cca2: "UA",
      region: "Europe",
      city: "Kyiv"
    },
    DXB: {
      iata: "DXB",
      lat: 25.2527999878,
      lon: 55.3643989563,
      cca2: "AE",
      region: "Middle East",
      city: "Dubai"
    },
    EDI: {
      iata: "EDI",
      lat: 55.9500007629,
      lon: -3.3724999428,
      cca2: "GB",
      region: "Europe",
      city: "Edinburgh"
    },
    LHR: {
      iata: "LHR",
      lat: 51.4706001282,
      lon: -0.4619410038,
      cca2: "GB",
      region: "Europe",
      city: "London"
    },
    MAN: {
      iata: "MAN",
      lat: 53.3536987305,
      lon: -2.2749500275,
      cca2: "GB",
      region: "Europe",
      city: "Manchester"
    },
    MGM: {
      iata: "MGM",
      lat: 32.30059814,
      lon: -86.39399719,
      cca2: "US",
      region: "North America",
      city: "Montgomery"
    },
    PHX: {
      iata: "PHX",
      lat: 33.434299469,
      lon: -112.012001038,
      cca2: "US",
      region: "North America",
      city: "Phoenix"
    },
    LAX: {
      iata: "LAX",
      lat: 33.94250107,
      lon: -118.4079971,
      cca2: "US",
      region: "North America",
      city: "Los Angeles"
    },
    SMF: {
      iata: "SMF",
      lat: 38.695400238,
      lon: -121.591003418,
      cca2: "US",
      region: "North America",
      city: "Sacramento"
    },
    SAN: {
      iata: "SAN",
      lat: 32.7336006165,
      lon: -117.190002441,
      cca2: "US",
      region: "North America",
      city: "San Diego"
    },
    SFO: {
      iata: "SFO",
      lat: 37.6189994812,
      lon: -122.375,
      cca2: "US",
      region: "North America",
      city: "San Francisco"
    },
    SJC: {
      iata: "SJC",
      lat: 37.3625984192,
      lon: -121.929000855,
      cca2: "US",
      region: "North America",
      city: "San Jose"
    },
    DEN: {
      iata: "DEN",
      lat: 39.8616981506,
      lon: -104.672996521,
      cca2: "US",
      region: "North America",
      city: "Denver"
    },
    JAX: {
      iata: "JAX",
      lat: 30.4941005707,
      lon: -81.6878967285,
      cca2: "US",
      region: "North America",
      city: "Jacksonville"
    },
    MIA: {
      iata: "MIA",
      lat: 25.7931995392,
      lon: -80.2906036377,
      cca2: "US",
      region: "North America",
      city: "Miami"
    },
    TLH: {
      iata: "TLH",
      lat: 30.3964996338,
      lon: -84.3503036499,
      cca2: "US",
      region: "North America",
      city: "Tallahassee"
    },
    TPA: {
      iata: "TPA",
      lat: 27.9755001068,
      lon: -82.533203125,
      cca2: "US",
      region: "North America",
      city: "Tampa"
    },
    ATL: {
      iata: "ATL",
      lat: 33.6366996765,
      lon: -84.4281005859,
      cca2: "US",
      region: "North America",
      city: "Atlanta"
    },
    HNL: {
      iata: "HNL",
      lat: 21.3187007904,
      lon: -157.9219970703,
      cca2: "US",
      region: "North America",
      city: "Honolulu"
    },
    ORD: {
      iata: "ORD",
      lat: 41.97859955,
      lon: -87.90480042,
      cca2: "US",
      region: "North America",
      city: "Chicago"
    },
    IND: {
      iata: "IND",
      lat: 39.717300415,
      lon: -86.2944030762,
      cca2: "US",
      region: "North America",
      city: "Indianapolis"
    },
    BOS: {
      iata: "BOS",
      lat: 42.36429977,
      lon: -71.00520325,
      cca2: "US",
      region: "North America",
      city: "Boston"
    },
    DTW: {
      iata: "DTW",
      lat: 42.2123985291,
      lon: -83.3534011841,
      cca2: "US",
      region: "North America",
      city: "Detroit"
    },
    MSP: {
      iata: "MSP",
      lat: 44.8819999695,
      lon: -93.2218017578,
      cca2: "US",
      region: "North America",
      city: "Minneapolis"
    },
    MCI: {
      iata: "MCI",
      lat: 39.2975997925,
      lon: -94.7138977051,
      cca2: "US",
      region: "North America",
      city: "Kansas City"
    },
    STL: {
      iata: "STL",
      lat: 38.7486991882,
      lon: -90.3700027466,
      cca2: "US",
      region: "North America",
      city: "St. Louis"
    },
    OMA: {
      iata: "OMA",
      lat: 41.3031997681,
      lon: -95.8940963745,
      cca2: "US",
      region: "North America",
      city: "Omaha"
    },
    LAS: {
      iata: "LAS",
      lat: 36.08010101,
      lon: -115.1520004,
      cca2: "US",
      region: "North America",
      city: "Las Vegas"
    },
    EWR: {
      iata: "EWR",
      lat: 40.6925010681,
      lon: -74.1687011719,
      cca2: "US",
      region: "North America",
      city: "Newark"
    },
    BUF: {
      iata: "BUF",
      lat: 42.94049835,
      lon: -78.73220062,
      cca2: "US",
      region: "North America",
      city: "Buffalo"
    },
    CLT: {
      iata: "CLT",
      lat: 35.2140007019,
      lon: -80.9430999756,
      cca2: "US",
      region: "North America",
      city: "Charlotte"
    },
    CMH: {
      iata: "CMH",
      lat: 39.9980010986,
      lon: -82.8918991089,
      cca2: "US",
      region: "North America",
      city: "Columbus"
    },
    PDX: {
      iata: "PDX",
      lat: 45.58869934,
      lon: -122.5979996,
      cca2: "US",
      region: "North America",
      city: "Portland"
    },
    PHL: {
      iata: "PHL",
      lat: 39.8718986511,
      lon: -75.2410964966,
      cca2: "US",
      region: "North America",
      city: "Philadelphia"
    },
    PIT: {
      iata: "PIT",
      lat: 40.49150085,
      lon: -80.23290253,
      cca2: "US",
      region: "North America",
      city: "Pittsburgh"
    },
    MEM: {
      iata: "MEM",
      lat: 35.0424003601,
      lon: -89.9766998291,
      cca2: "US",
      region: "North America",
      city: "Memphis"
    },
    DFW: {
      iata: "DFW",
      lat: 32.8968009949,
      lon: -97.0380020142,
      cca2: "US",
      region: "North America",
      city: "Dallas"
    },
    IAH: {
      iata: "IAH",
      lat: 29.9843997955,
      lon: -95.3414001465,
      cca2: "US",
      region: "North America",
      city: "Houston"
    },
    MFE: {
      iata: "MFE",
      lat: 26.17580032,
      lon: -98.23860168,
      cca2: "US",
      region: "North America",
      city: "McAllen"
    },
    SLC: {
      iata: "SLC",
      lat: 40.7883987427,
      lon: -111.977996826,
      cca2: "US",
      region: "North America",
      city: "Salt Lake City"
    },
    IAD: {
      iata: "IAD",
      lat: 38.94449997,
      lon: -77.45580292,
      cca2: "US",
      region: "North America",
      city: "Ashburn"
    },
    ORF: {
      iata: "ORF",
      lat: 36.8945999146,
      lon: -76.2012023926,
      cca2: "US",
      region: "North America",
      city: "Norfolk"
    },
    RIC: {
      iata: "RIC",
      lat: 37.5051994324,
      lon: -77.3197021484,
      cca2: "US",
      region: "North America",
      city: "Richmond"
    },
    SEA: {
      iata: "SEA",
      lat: 47.4490013123,
      lon: -122.308998108,
      cca2: "US",
      region: "North America",
      city: "Seattle"
    },
    TAS: {
      iata: "TAS",
      lat: 41.257900238,
      lon: 69.2811965942,
      cca2: "UZ",
      region: "Asia Pacific",
      city: "Tashkent"
    },
    HAN: {
      iata: "HAN",
      lat: 21.221200943,
      lon: 105.806999206,
      cca2: "VN",
      region: "Asia Pacific",
      city: "Hanoi"
    },
    SGN: {
      iata: "SGN",
      lat: 10.8187999725,
      lon: 106.652000427,
      cca2: "VN",
      region: "Asia Pacific",
      city: "Ho Chi Minh City"
    },
    HRE: {
      iata: "HRE",
      lat: -17.9318008423,
      lon: 31.0928001404,
      cca2: "ZW",
      region: "Africa",
      city: "Harare"
    }
  };
  var flags = {
    AF: "\u{1F1E6}\u{1F1EB}",
    AO: "\u{1F1E6}\u{1F1F4}",
    AL: "\u{1F1E6}\u{1F1F1}",
    AD: "\u{1F1E6}\u{1F1E9}",
    AE: "\u{1F1E6}\u{1F1EA}",
    AR: "\u{1F1E6}\u{1F1F7}",
    AM: "\u{1F1E6}\u{1F1F2}",
    AG: "\u{1F1E6}\u{1F1EC}",
    AU: "\u{1F1E6}\u{1F1FA}",
    AT: "\u{1F1E6}\u{1F1F9}",
    AZ: "\u{1F1E6}\u{1F1FF}",
    BI: "\u{1F1E7}\u{1F1EE}",
    BE: "\u{1F1E7}\u{1F1EA}",
    BJ: "\u{1F1E7}\u{1F1EF}",
    BF: "\u{1F1E7}\u{1F1EB}",
    BD: "\u{1F1E7}\u{1F1E9}",
    BG: "\u{1F1E7}\u{1F1EC}",
    BH: "\u{1F1E7}\u{1F1ED}",
    BS: "\u{1F1E7}\u{1F1F8}",
    BA: "\u{1F1E7}\u{1F1E6}",
    BY: "\u{1F1E7}\u{1F1FE}",
    BZ: "\u{1F1E7}\u{1F1FF}",
    BO: "\u{1F1E7}\u{1F1F4}",
    BR: "\u{1F1E7}\u{1F1F7}",
    BB: "\u{1F1E7}\u{1F1E7}",
    BN: "\u{1F1E7}\u{1F1F3}",
    BT: "\u{1F1E7}\u{1F1F9}",
    BW: "\u{1F1E7}\u{1F1FC}",
    CF: "\u{1F1E8}\u{1F1EB}",
    CA: "\u{1F1E8}\u{1F1E6}",
    CH: "\u{1F1E8}\u{1F1ED}",
    CL: "\u{1F1E8}\u{1F1F1}",
    CN: "\u{1F1E8}\u{1F1F3}",
    CI: "\u{1F1E8}\u{1F1EE}",
    CM: "\u{1F1E8}\u{1F1F2}",
    CD: "\u{1F1E8}\u{1F1E9}",
    CG: "\u{1F1E8}\u{1F1EC}",
    CO: "\u{1F1E8}\u{1F1F4}",
    KM: "\u{1F1F0}\u{1F1F2}",
    CV: "\u{1F1E8}\u{1F1FB}",
    CR: "\u{1F1E8}\u{1F1F7}",
    CU: "\u{1F1E8}\u{1F1FA}",
    CY: "\u{1F1E8}\u{1F1FE}",
    CZ: "\u{1F1E8}\u{1F1FF}",
    DE: "\u{1F1E9}\u{1F1EA}",
    DJ: "\u{1F1E9}\u{1F1EF}",
    DM: "\u{1F1E9}\u{1F1F2}",
    DK: "\u{1F1E9}\u{1F1F0}",
    DO: "\u{1F1E9}\u{1F1F4}",
    DZ: "\u{1F1E9}\u{1F1FF}",
    EC: "\u{1F1EA}\u{1F1E8}",
    EG: "\u{1F1EA}\u{1F1EC}",
    ER: "\u{1F1EA}\u{1F1F7}",
    ES: "\u{1F1EA}\u{1F1F8}",
    EE: "\u{1F1EA}\u{1F1EA}",
    ET: "\u{1F1EA}\u{1F1F9}",
    FI: "\u{1F1EB}\u{1F1EE}",
    FJ: "\u{1F1EB}\u{1F1EF}",
    FR: "\u{1F1EB}\u{1F1F7}",
    FM: "\u{1F1EB}\u{1F1F2}",
    GA: "\u{1F1EC}\u{1F1E6}",
    GB: "\u{1F1EC}\u{1F1E7}",
    GE: "\u{1F1EC}\u{1F1EA}",
    GH: "\u{1F1EC}\u{1F1ED}",
    GN: "\u{1F1EC}\u{1F1F3}",
    GM: "\u{1F1EC}\u{1F1F2}",
    GW: "\u{1F1EC}\u{1F1FC}",
    GQ: "\u{1F1EC}\u{1F1F6}",
    GR: "\u{1F1EC}\u{1F1F7}",
    GD: "\u{1F1EC}\u{1F1E9}",
    GT: "\u{1F1EC}\u{1F1F9}",
    GY: "\u{1F1EC}\u{1F1FE}",
    HN: "\u{1F1ED}\u{1F1F3}",
    HR: "\u{1F1ED}\u{1F1F7}",
    HT: "\u{1F1ED}\u{1F1F9}",
    HU: "\u{1F1ED}\u{1F1FA}",
    ID: "\u{1F1EE}\u{1F1E9}",
    IN: "\u{1F1EE}\u{1F1F3}",
    IE: "\u{1F1EE}\u{1F1EA}",
    IR: "\u{1F1EE}\u{1F1F7}",
    IQ: "\u{1F1EE}\u{1F1F6}",
    IS: "\u{1F1EE}\u{1F1F8}",
    IL: "\u{1F1EE}\u{1F1F1}",
    IT: "\u{1F1EE}\u{1F1F9}",
    JM: "\u{1F1EF}\u{1F1F2}",
    JO: "\u{1F1EF}\u{1F1F4}",
    JP: "\u{1F1EF}\u{1F1F5}",
    KZ: "\u{1F1F0}\u{1F1FF}",
    KE: "\u{1F1F0}\u{1F1EA}",
    KG: "\u{1F1F0}\u{1F1EC}",
    KH: "\u{1F1F0}\u{1F1ED}",
    KI: "\u{1F1F0}\u{1F1EE}",
    KN: "\u{1F1F0}\u{1F1F3}",
    KR: "\u{1F1F0}\u{1F1F7}",
    KW: "\u{1F1F0}\u{1F1FC}",
    LA: "\u{1F1F1}\u{1F1E6}",
    LB: "\u{1F1F1}\u{1F1E7}",
    LR: "\u{1F1F1}\u{1F1F7}",
    LY: "\u{1F1F1}\u{1F1FE}",
    LC: "\u{1F1F1}\u{1F1E8}",
    LI: "\u{1F1F1}\u{1F1EE}",
    LK: "\u{1F1F1}\u{1F1F0}",
    LS: "\u{1F1F1}\u{1F1F8}",
    LT: "\u{1F1F1}\u{1F1F9}",
    LU: "\u{1F1F1}\u{1F1FA}",
    LV: "\u{1F1F1}\u{1F1FB}",
    MA: "\u{1F1F2}\u{1F1E6}",
    MC: "\u{1F1F2}\u{1F1E8}",
    MD: "\u{1F1F2}\u{1F1E9}",
    MG: "\u{1F1F2}\u{1F1EC}",
    MV: "\u{1F1F2}\u{1F1FB}",
    MX: "\u{1F1F2}\u{1F1FD}",
    MH: "\u{1F1F2}\u{1F1ED}",
    MK: "\u{1F1F2}\u{1F1F0}",
    ML: "\u{1F1F2}\u{1F1F1}",
    MT: "\u{1F1F2}\u{1F1F9}",
    MM: "\u{1F1F2}\u{1F1F2}",
    ME: "\u{1F1F2}\u{1F1EA}",
    MN: "\u{1F1F2}\u{1F1F3}",
    MZ: "\u{1F1F2}\u{1F1FF}",
    MR: "\u{1F1F2}\u{1F1F7}",
    MU: "\u{1F1F2}\u{1F1FA}",
    MW: "\u{1F1F2}\u{1F1FC}",
    MY: "\u{1F1F2}\u{1F1FE}",
    NA: "\u{1F1F3}\u{1F1E6}",
    NE: "\u{1F1F3}\u{1F1EA}",
    NG: "\u{1F1F3}\u{1F1EC}",
    NI: "\u{1F1F3}\u{1F1EE}",
    NL: "\u{1F1F3}\u{1F1F1}",
    NO: "\u{1F1F3}\u{1F1F4}",
    NP: "\u{1F1F3}\u{1F1F5}",
    NR: "\u{1F1F3}\u{1F1F7}",
    NZ: "\u{1F1F3}\u{1F1FF}",
    OM: "\u{1F1F4}\u{1F1F2}",
    PK: "\u{1F1F5}\u{1F1F0}",
    PA: "\u{1F1F5}\u{1F1E6}",
    PE: "\u{1F1F5}\u{1F1EA}",
    PH: "\u{1F1F5}\u{1F1ED}",
    PW: "\u{1F1F5}\u{1F1FC}",
    PG: "\u{1F1F5}\u{1F1EC}",
    PL: "\u{1F1F5}\u{1F1F1}",
    KP: "\u{1F1F0}\u{1F1F5}",
    PT: "\u{1F1F5}\u{1F1F9}",
    PY: "\u{1F1F5}\u{1F1FE}",
    QA: "\u{1F1F6}\u{1F1E6}",
    RO: "\u{1F1F7}\u{1F1F4}",
    RU: "\u{1F1F7}\u{1F1FA}",
    RW: "\u{1F1F7}\u{1F1FC}",
    SA: "\u{1F1F8}\u{1F1E6}",
    SD: "\u{1F1F8}\u{1F1E9}",
    SN: "\u{1F1F8}\u{1F1F3}",
    SG: "\u{1F1F8}\u{1F1EC}",
    SB: "\u{1F1F8}\u{1F1E7}",
    SL: "\u{1F1F8}\u{1F1F1}",
    SV: "\u{1F1F8}\u{1F1FB}",
    SM: "\u{1F1F8}\u{1F1F2}",
    SO: "\u{1F1F8}\u{1F1F4}",
    RS: "\u{1F1F7}\u{1F1F8}",
    SS: "\u{1F1F8}\u{1F1F8}",
    ST: "\u{1F1F8}\u{1F1F9}",
    SR: "\u{1F1F8}\u{1F1F7}",
    SK: "\u{1F1F8}\u{1F1F0}",
    SI: "\u{1F1F8}\u{1F1EE}",
    SE: "\u{1F1F8}\u{1F1EA}",
    SZ: "\u{1F1F8}\u{1F1FF}",
    SC: "\u{1F1F8}\u{1F1E8}",
    SY: "\u{1F1F8}\u{1F1FE}",
    TD: "\u{1F1F9}\u{1F1E9}",
    TG: "\u{1F1F9}\u{1F1EC}",
    TH: "\u{1F1F9}\u{1F1ED}",
    TJ: "\u{1F1F9}\u{1F1EF}",
    TM: "\u{1F1F9}\u{1F1F2}",
    TL: "\u{1F1F9}\u{1F1F1}",
    TO: "\u{1F1F9}\u{1F1F4}",
    TT: "\u{1F1F9}\u{1F1F9}",
    TN: "\u{1F1F9}\u{1F1F3}",
    TR: "\u{1F1F9}\u{1F1F7}",
    TV: "\u{1F1F9}\u{1F1FB}",
    TZ: "\u{1F1F9}\u{1F1FF}",
    UG: "\u{1F1FA}\u{1F1EC}",
    UA: "\u{1F1FA}\u{1F1E6}",
    UY: "\u{1F1FA}\u{1F1FE}",
    US: "\u{1F1FA}\u{1F1F8}",
    UZ: "\u{1F1FA}\u{1F1FF}",
    VA: "\u{1F1FB}\u{1F1E6}",
    VC: "\u{1F1FB}\u{1F1E8}",
    VE: "\u{1F1FB}\u{1F1EA}",
    VN: "\u{1F1FB}\u{1F1F3}",
    VU: "\u{1F1FB}\u{1F1FA}",
    WS: "\u{1F1FC}\u{1F1F8}",
    YE: "\u{1F1FE}\u{1F1EA}",
    ZA: "\u{1F1FF}\u{1F1E6}",
    ZM: "\u{1F1FF}\u{1F1F2}",
    ZW: "\u{1F1FF}\u{1F1FC}"
  };
  var countries = {
    AF: { name: "Afghanistan", cca2: "AF", flag: "\u{1F1E6}\u{1F1EB}", code: "93" },
    AO: { name: "Angola", cca2: "AO", flag: "\u{1F1E6}\u{1F1F4}", code: "244" },
    AL: { name: "Albania", cca2: "AL", flag: "\u{1F1E6}\u{1F1F1}", code: "355" },
    AD: { name: "Andorra", cca2: "AD", flag: "\u{1F1E6}\u{1F1E9}", code: "376" },
    AE: { name: "United Arab Emirates", cca2: "AE", flag: "\u{1F1E6}\u{1F1EA}", code: "971" },
    AR: { name: "Argentina", cca2: "AR", flag: "\u{1F1E6}\u{1F1F7}", code: "54" },
    AM: { name: "Armenia", cca2: "AM", flag: "\u{1F1E6}\u{1F1F2}", code: "374" },
    AG: { name: "Antigua and Barbuda", cca2: "AG", flag: "\u{1F1E6}\u{1F1EC}", code: "1268" },
    AU: { name: "Australia", cca2: "AU", flag: "\u{1F1E6}\u{1F1FA}", code: "61" },
    AT: { name: "Austria", cca2: "AT", flag: "\u{1F1E6}\u{1F1F9}", code: "43" },
    AZ: { name: "Azerbaijan", cca2: "AZ", flag: "\u{1F1E6}\u{1F1FF}", code: "994" },
    BI: { name: "Burundi", cca2: "BI", flag: "\u{1F1E7}\u{1F1EE}", code: "257" },
    BE: { name: "Belgium", cca2: "BE", flag: "\u{1F1E7}\u{1F1EA}", code: "32" },
    BJ: { name: "Benin", cca2: "BJ", flag: "\u{1F1E7}\u{1F1EF}", code: "229" },
    BF: { name: "Burkina Faso", cca2: "BF", flag: "\u{1F1E7}\u{1F1EB}", code: "226" },
    BD: { name: "Bangladesh", cca2: "BD", flag: "\u{1F1E7}\u{1F1E9}", code: "880" },
    BG: { name: "Bulgaria", cca2: "BG", flag: "\u{1F1E7}\u{1F1EC}", code: "359" },
    BH: { name: "Bahrain", cca2: "BH", flag: "\u{1F1E7}\u{1F1ED}", code: "973" },
    BS: { name: "Bahamas", cca2: "BS", flag: "\u{1F1E7}\u{1F1F8}", code: "1242" },
    BA: { name: "Bosnia and Herzegovina", cca2: "BA", flag: "\u{1F1E7}\u{1F1E6}", code: "387" },
    BY: { name: "Belarus", cca2: "BY", flag: "\u{1F1E7}\u{1F1FE}", code: "375" },
    BZ: { name: "Belize", cca2: "BZ", flag: "\u{1F1E7}\u{1F1FF}", code: "501" },
    BO: { name: "Bolivia", cca2: "BO", flag: "\u{1F1E7}\u{1F1F4}", code: "591" },
    BR: { name: "Brazil", cca2: "BR", flag: "\u{1F1E7}\u{1F1F7}", code: "55" },
    BB: { name: "Barbados", cca2: "BB", flag: "\u{1F1E7}\u{1F1E7}", code: "1246" },
    BN: { name: "Brunei", cca2: "BN", flag: "\u{1F1E7}\u{1F1F3}", code: "673" },
    BT: { name: "Bhutan", cca2: "BT", flag: "\u{1F1E7}\u{1F1F9}", code: "975" },
    BW: { name: "Botswana", cca2: "BW", flag: "\u{1F1E7}\u{1F1FC}", code: "267" },
    CF: { name: "Central African Republic", cca2: "CF", flag: "\u{1F1E8}\u{1F1EB}", code: "236" },
    CA: { name: "Canada", cca2: "CA", flag: "\u{1F1E8}\u{1F1E6}", code: "1" },
    CH: { name: "Switzerland", cca2: "CH", flag: "\u{1F1E8}\u{1F1ED}", code: "41" },
    CL: { name: "Chile", cca2: "CL", flag: "\u{1F1E8}\u{1F1F1}", code: "56" },
    CN: { name: "China", cca2: "CN", flag: "\u{1F1E8}\u{1F1F3}", code: "86" },
    CI: { name: "Ivory Coast", cca2: "CI", flag: "\u{1F1E8}\u{1F1EE}", code: "225" },
    CM: { name: "Cameroon", cca2: "CM", flag: "\u{1F1E8}\u{1F1F2}", code: "237" },
    CD: { name: "DR Congo", cca2: "CD", flag: "\u{1F1E8}\u{1F1E9}", code: "243" },
    CG: { name: "Republic of the Congo", cca2: "CG", flag: "\u{1F1E8}\u{1F1EC}", code: "242" },
    CO: { name: "Colombia", cca2: "CO", flag: "\u{1F1E8}\u{1F1F4}", code: "57" },
    KM: { name: "Comoros", cca2: "KM", flag: "\u{1F1F0}\u{1F1F2}", code: "269" },
    CV: { name: "Cape Verde", cca2: "CV", flag: "\u{1F1E8}\u{1F1FB}", code: "238" },
    CR: { name: "Costa Rica", cca2: "CR", flag: "\u{1F1E8}\u{1F1F7}", code: "506" },
    CU: { name: "Cuba", cca2: "CU", flag: "\u{1F1E8}\u{1F1FA}", code: "53" },
    CY: { name: "Cyprus", cca2: "CY", flag: "\u{1F1E8}\u{1F1FE}", code: "357" },
    CZ: { name: "Czechia", cca2: "CZ", flag: "\u{1F1E8}\u{1F1FF}", code: "420" },
    DE: { name: "Germany", cca2: "DE", flag: "\u{1F1E9}\u{1F1EA}", code: "49" },
    DJ: { name: "Djibouti", cca2: "DJ", flag: "\u{1F1E9}\u{1F1EF}", code: "253" },
    DM: { name: "Dominica", cca2: "DM", flag: "\u{1F1E9}\u{1F1F2}", code: "1767" },
    DK: { name: "Denmark", cca2: "DK", flag: "\u{1F1E9}\u{1F1F0}", code: "45" },
    DO: { name: "Dominican Republic", cca2: "DO", flag: "\u{1F1E9}\u{1F1F4}", code: "1809" },
    DZ: { name: "Algeria", cca2: "DZ", flag: "\u{1F1E9}\u{1F1FF}", code: "213" },
    EC: { name: "Ecuador", cca2: "EC", flag: "\u{1F1EA}\u{1F1E8}", code: "593" },
    EG: { name: "Egypt", cca2: "EG", flag: "\u{1F1EA}\u{1F1EC}", code: "20" },
    ER: { name: "Eritrea", cca2: "ER", flag: "\u{1F1EA}\u{1F1F7}", code: "291" },
    ES: { name: "Spain", cca2: "ES", flag: "\u{1F1EA}\u{1F1F8}", code: "34" },
    EE: { name: "Estonia", cca2: "EE", flag: "\u{1F1EA}\u{1F1EA}", code: "372" },
    ET: { name: "Ethiopia", cca2: "ET", flag: "\u{1F1EA}\u{1F1F9}", code: "251" },
    FI: { name: "Finland", cca2: "FI", flag: "\u{1F1EB}\u{1F1EE}", code: "358" },
    FJ: { name: "Fiji", cca2: "FJ", flag: "\u{1F1EB}\u{1F1EF}", code: "679" },
    FR: { name: "France", cca2: "FR", flag: "\u{1F1EB}\u{1F1F7}", code: "33" },
    FM: { name: "Micronesia", cca2: "FM", flag: "\u{1F1EB}\u{1F1F2}", code: "691" },
    GA: { name: "Gabon", cca2: "GA", flag: "\u{1F1EC}\u{1F1E6}", code: "241" },
    GB: { name: "United Kingdom", cca2: "GB", flag: "\u{1F1EC}\u{1F1E7}", code: "44" },
    GE: { name: "Georgia", cca2: "GE", flag: "\u{1F1EC}\u{1F1EA}", code: "995" },
    GH: { name: "Ghana", cca2: "GH", flag: "\u{1F1EC}\u{1F1ED}", code: "233" },
    GN: { name: "Guinea", cca2: "GN", flag: "\u{1F1EC}\u{1F1F3}", code: "224" },
    GM: { name: "Gambia", cca2: "GM", flag: "\u{1F1EC}\u{1F1F2}", code: "220" },
    GW: { name: "Guinea-Bissau", cca2: "GW", flag: "\u{1F1EC}\u{1F1FC}", code: "245" },
    GQ: { name: "Equatorial Guinea", cca2: "GQ", flag: "\u{1F1EC}\u{1F1F6}", code: "240" },
    GR: { name: "Greece", cca2: "GR", flag: "\u{1F1EC}\u{1F1F7}", code: "30" },
    GD: { name: "Grenada", cca2: "GD", flag: "\u{1F1EC}\u{1F1E9}", code: "1473" },
    GT: { name: "Guatemala", cca2: "GT", flag: "\u{1F1EC}\u{1F1F9}", code: "502" },
    GY: { name: "Guyana", cca2: "GY", flag: "\u{1F1EC}\u{1F1FE}", code: "592" },
    HN: { name: "Honduras", cca2: "HN", flag: "\u{1F1ED}\u{1F1F3}", code: "504" },
    HR: { name: "Croatia", cca2: "HR", flag: "\u{1F1ED}\u{1F1F7}", code: "385" },
    HT: { name: "Haiti", cca2: "HT", flag: "\u{1F1ED}\u{1F1F9}", code: "509" },
    HU: { name: "Hungary", cca2: "HU", flag: "\u{1F1ED}\u{1F1FA}", code: "36" },
    ID: { name: "Indonesia", cca2: "ID", flag: "\u{1F1EE}\u{1F1E9}", code: "62" },
    IN: { name: "India", cca2: "IN", flag: "\u{1F1EE}\u{1F1F3}", code: "91" },
    IE: { name: "Ireland", cca2: "IE", flag: "\u{1F1EE}\u{1F1EA}", code: "353" },
    IR: { name: "Iran", cca2: "IR", flag: "\u{1F1EE}\u{1F1F7}", code: "98" },
    IQ: { name: "Iraq", cca2: "IQ", flag: "\u{1F1EE}\u{1F1F6}", code: "964" },
    IS: { name: "Iceland", cca2: "IS", flag: "\u{1F1EE}\u{1F1F8}", code: "354" },
    IL: { name: "Israel", cca2: "IL", flag: "\u{1F1EE}\u{1F1F1}", code: "972" },
    IT: { name: "Italy", cca2: "IT", flag: "\u{1F1EE}\u{1F1F9}", code: "39" },
    JM: { name: "Jamaica", cca2: "JM", flag: "\u{1F1EF}\u{1F1F2}", code: "1876" },
    JO: { name: "Jordan", cca2: "JO", flag: "\u{1F1EF}\u{1F1F4}", code: "962" },
    JP: { name: "Japan", cca2: "JP", flag: "\u{1F1EF}\u{1F1F5}", code: "81" },
    KZ: { name: "Kazakhstan", cca2: "KZ", flag: "\u{1F1F0}\u{1F1FF}", code: "76" },
    KE: { name: "Kenya", cca2: "KE", flag: "\u{1F1F0}\u{1F1EA}", code: "254" },
    KG: { name: "Kyrgyzstan", cca2: "KG", flag: "\u{1F1F0}\u{1F1EC}", code: "996" },
    KH: { name: "Cambodia", cca2: "KH", flag: "\u{1F1F0}\u{1F1ED}", code: "855" },
    KI: { name: "Kiribati", cca2: "KI", flag: "\u{1F1F0}\u{1F1EE}", code: "686" },
    KN: { name: "Saint Kitts and Nevis", cca2: "KN", flag: "\u{1F1F0}\u{1F1F3}", code: "1869" },
    KR: { name: "South Korea", cca2: "KR", flag: "\u{1F1F0}\u{1F1F7}", code: "82" },
    KW: { name: "Kuwait", cca2: "KW", flag: "\u{1F1F0}\u{1F1FC}", code: "965" },
    LA: { name: "Laos", cca2: "LA", flag: "\u{1F1F1}\u{1F1E6}", code: "856" },
    LB: { name: "Lebanon", cca2: "LB", flag: "\u{1F1F1}\u{1F1E7}", code: "961" },
    LR: { name: "Liberia", cca2: "LR", flag: "\u{1F1F1}\u{1F1F7}", code: "231" },
    LY: { name: "Libya", cca2: "LY", flag: "\u{1F1F1}\u{1F1FE}", code: "218" },
    LC: { name: "Saint Lucia", cca2: "LC", flag: "\u{1F1F1}\u{1F1E8}", code: "1758" },
    LI: { name: "Liechtenstein", cca2: "LI", flag: "\u{1F1F1}\u{1F1EE}", code: "423" },
    LK: { name: "Sri Lanka", cca2: "LK", flag: "\u{1F1F1}\u{1F1F0}", code: "94" },
    LS: { name: "Lesotho", cca2: "LS", flag: "\u{1F1F1}\u{1F1F8}", code: "266" },
    LT: { name: "Lithuania", cca2: "LT", flag: "\u{1F1F1}\u{1F1F9}", code: "370" },
    LU: { name: "Luxembourg", cca2: "LU", flag: "\u{1F1F1}\u{1F1FA}", code: "352" },
    LV: { name: "Latvia", cca2: "LV", flag: "\u{1F1F1}\u{1F1FB}", code: "371" },
    MA: { name: "Morocco", cca2: "MA", flag: "\u{1F1F2}\u{1F1E6}", code: "212" },
    MC: { name: "Monaco", cca2: "MC", flag: "\u{1F1F2}\u{1F1E8}", code: "377" },
    MD: { name: "Moldova", cca2: "MD", flag: "\u{1F1F2}\u{1F1E9}", code: "373" },
    MG: { name: "Madagascar", cca2: "MG", flag: "\u{1F1F2}\u{1F1EC}", code: "261" },
    MV: { name: "Maldives", cca2: "MV", flag: "\u{1F1F2}\u{1F1FB}", code: "960" },
    MX: { name: "Mexico", cca2: "MX", flag: "\u{1F1F2}\u{1F1FD}", code: "52" },
    MH: { name: "Marshall Islands", cca2: "MH", flag: "\u{1F1F2}\u{1F1ED}", code: "692" },
    MK: { name: "Macedonia", cca2: "MK", flag: "\u{1F1F2}\u{1F1F0}", code: "389" },
    ML: { name: "Mali", cca2: "ML", flag: "\u{1F1F2}\u{1F1F1}", code: "223" },
    MT: { name: "Malta", cca2: "MT", flag: "\u{1F1F2}\u{1F1F9}", code: "356" },
    MM: { name: "Myanmar", cca2: "MM", flag: "\u{1F1F2}\u{1F1F2}", code: "95" },
    ME: { name: "Montenegro", cca2: "ME", flag: "\u{1F1F2}\u{1F1EA}", code: "382" },
    MN: { name: "Mongolia", cca2: "MN", flag: "\u{1F1F2}\u{1F1F3}", code: "976" },
    MZ: { name: "Mozambique", cca2: "MZ", flag: "\u{1F1F2}\u{1F1FF}", code: "258" },
    MR: { name: "Mauritania", cca2: "MR", flag: "\u{1F1F2}\u{1F1F7}", code: "222" },
    MU: { name: "Mauritius", cca2: "MU", flag: "\u{1F1F2}\u{1F1FA}", code: "230" },
    MW: { name: "Malawi", cca2: "MW", flag: "\u{1F1F2}\u{1F1FC}", code: "265" },
    MY: { name: "Malaysia", cca2: "MY", flag: "\u{1F1F2}\u{1F1FE}", code: "60" },
    NA: { name: "Namibia", cca2: "NA", flag: "\u{1F1F3}\u{1F1E6}", code: "264" },
    NE: { name: "Niger", cca2: "NE", flag: "\u{1F1F3}\u{1F1EA}", code: "227" },
    NG: { name: "Nigeria", cca2: "NG", flag: "\u{1F1F3}\u{1F1EC}", code: "234" },
    NI: { name: "Nicaragua", cca2: "NI", flag: "\u{1F1F3}\u{1F1EE}", code: "505" },
    NL: { name: "Netherlands", cca2: "NL", flag: "\u{1F1F3}\u{1F1F1}", code: "31" },
    NO: { name: "Norway", cca2: "NO", flag: "\u{1F1F3}\u{1F1F4}", code: "47" },
    NP: { name: "Nepal", cca2: "NP", flag: "\u{1F1F3}\u{1F1F5}", code: "977" },
    NR: { name: "Nauru", cca2: "NR", flag: "\u{1F1F3}\u{1F1F7}", code: "674" },
    NZ: { name: "New Zealand", cca2: "NZ", flag: "\u{1F1F3}\u{1F1FF}", code: "64" },
    OM: { name: "Oman", cca2: "OM", flag: "\u{1F1F4}\u{1F1F2}", code: "968" },
    PK: { name: "Pakistan", cca2: "PK", flag: "\u{1F1F5}\u{1F1F0}", code: "92" },
    PA: { name: "Panama", cca2: "PA", flag: "\u{1F1F5}\u{1F1E6}", code: "507" },
    PE: { name: "Peru", cca2: "PE", flag: "\u{1F1F5}\u{1F1EA}", code: "51" },
    PH: { name: "Philippines", cca2: "PH", flag: "\u{1F1F5}\u{1F1ED}", code: "63" },
    PW: { name: "Palau", cca2: "PW", flag: "\u{1F1F5}\u{1F1FC}", code: "680" },
    PG: { name: "Papua New Guinea", cca2: "PG", flag: "\u{1F1F5}\u{1F1EC}", code: "675" },
    PL: { name: "Poland", cca2: "PL", flag: "\u{1F1F5}\u{1F1F1}", code: "48" },
    KP: { name: "North Korea", cca2: "KP", flag: "\u{1F1F0}\u{1F1F5}", code: "850" },
    PT: { name: "Portugal", cca2: "PT", flag: "\u{1F1F5}\u{1F1F9}", code: "351" },
    PY: { name: "Paraguay", cca2: "PY", flag: "\u{1F1F5}\u{1F1FE}", code: "595" },
    QA: { name: "Qatar", cca2: "QA", flag: "\u{1F1F6}\u{1F1E6}", code: "974" },
    RO: { name: "Romania", cca2: "RO", flag: "\u{1F1F7}\u{1F1F4}", code: "40" },
    RU: { name: "Russia", cca2: "RU", flag: "\u{1F1F7}\u{1F1FA}", code: "7" },
    RW: { name: "Rwanda", cca2: "RW", flag: "\u{1F1F7}\u{1F1FC}", code: "250" },
    SA: { name: "Saudi Arabia", cca2: "SA", flag: "\u{1F1F8}\u{1F1E6}", code: "966" },
    SD: { name: "Sudan", cca2: "SD", flag: "\u{1F1F8}\u{1F1E9}", code: "249" },
    SN: { name: "Senegal", cca2: "SN", flag: "\u{1F1F8}\u{1F1F3}", code: "221" },
    SG: { name: "Singapore", cca2: "SG", flag: "\u{1F1F8}\u{1F1EC}", code: "65" },
    SB: { name: "Solomon Islands", cca2: "SB", flag: "\u{1F1F8}\u{1F1E7}", code: "677" },
    SL: { name: "Sierra Leone", cca2: "SL", flag: "\u{1F1F8}\u{1F1F1}", code: "232" },
    SV: { name: "El Salvador", cca2: "SV", flag: "\u{1F1F8}\u{1F1FB}", code: "503" },
    SM: { name: "San Marino", cca2: "SM", flag: "\u{1F1F8}\u{1F1F2}", code: "378" },
    SO: { name: "Somalia", cca2: "SO", flag: "\u{1F1F8}\u{1F1F4}", code: "252" },
    RS: { name: "Serbia", cca2: "RS", flag: "\u{1F1F7}\u{1F1F8}", code: "381" },
    SS: { name: "South Sudan", cca2: "SS", flag: "\u{1F1F8}\u{1F1F8}", code: "211" },
    ST: { name: "S\xE3o Tom\xE9 and Pr\xEDncipe", cca2: "ST", flag: "\u{1F1F8}\u{1F1F9}", code: "239" },
    SR: { name: "Suriname", cca2: "SR", flag: "\u{1F1F8}\u{1F1F7}", code: "597" },
    SK: { name: "Slovakia", cca2: "SK", flag: "\u{1F1F8}\u{1F1F0}", code: "421" },
    SI: { name: "Slovenia", cca2: "SI", flag: "\u{1F1F8}\u{1F1EE}", code: "386" },
    SE: { name: "Sweden", cca2: "SE", flag: "\u{1F1F8}\u{1F1EA}", code: "46" },
    SZ: { name: "Swaziland", cca2: "SZ", flag: "\u{1F1F8}\u{1F1FF}", code: "268" },
    SC: { name: "Seychelles", cca2: "SC", flag: "\u{1F1F8}\u{1F1E8}", code: "248" },
    SY: { name: "Syria", cca2: "SY", flag: "\u{1F1F8}\u{1F1FE}", code: "963" },
    TD: { name: "Chad", cca2: "TD", flag: "\u{1F1F9}\u{1F1E9}", code: "235" },
    TG: { name: "Togo", cca2: "TG", flag: "\u{1F1F9}\u{1F1EC}", code: "228" },
    TH: { name: "Thailand", cca2: "TH", flag: "\u{1F1F9}\u{1F1ED}", code: "66" },
    TJ: { name: "Tajikistan", cca2: "TJ", flag: "\u{1F1F9}\u{1F1EF}", code: "992" },
    TM: { name: "Turkmenistan", cca2: "TM", flag: "\u{1F1F9}\u{1F1F2}", code: "993" },
    TL: { name: "Timor-Leste", cca2: "TL", flag: "\u{1F1F9}\u{1F1F1}", code: "670" },
    TO: { name: "Tonga", cca2: "TO", flag: "\u{1F1F9}\u{1F1F4}", code: "676" },
    TT: { name: "Trinidad and Tobago", cca2: "TT", flag: "\u{1F1F9}\u{1F1F9}", code: "1868" },
    TN: { name: "Tunisia", cca2: "TN", flag: "\u{1F1F9}\u{1F1F3}", code: "216" },
    TR: { name: "Turkey", cca2: "TR", flag: "\u{1F1F9}\u{1F1F7}", code: "90" },
    TV: { name: "Tuvalu", cca2: "TV", flag: "\u{1F1F9}\u{1F1FB}", code: "688" },
    TZ: { name: "Tanzania", cca2: "TZ", flag: "\u{1F1F9}\u{1F1FF}", code: "255" },
    UG: { name: "Uganda", cca2: "UG", flag: "\u{1F1FA}\u{1F1EC}", code: "256" },
    UA: { name: "Ukraine", cca2: "UA", flag: "\u{1F1FA}\u{1F1E6}", code: "380" },
    UY: { name: "Uruguay", cca2: "UY", flag: "\u{1F1FA}\u{1F1FE}", code: "598" },
    US: { name: "United States", cca2: "US", flag: "\u{1F1FA}\u{1F1F8}", code: "1" },
    UZ: { name: "Uzbekistan", cca2: "UZ", flag: "\u{1F1FA}\u{1F1FF}", code: "998" },
    VA: { name: "Vatican City", cca2: "VA", flag: "\u{1F1FB}\u{1F1E6}", code: "3906698" },
    VC: {
      name: "Saint Vincent and the Grenadines",
      cca2: "VC",
      flag: "\u{1F1FB}\u{1F1E8}",
      code: "1784"
    },
    VE: { name: "Venezuela", cca2: "VE", flag: "\u{1F1FB}\u{1F1EA}", code: "58" },
    VN: { name: "Vietnam", cca2: "VN", flag: "\u{1F1FB}\u{1F1F3}", code: "84" },
    VU: { name: "Vanuatu", cca2: "VU", flag: "\u{1F1FB}\u{1F1FA}", code: "678" },
    WS: { name: "Samoa", cca2: "WS", flag: "\u{1F1FC}\u{1F1F8}", code: "685" },
    YE: { name: "Yemen", cca2: "YE", flag: "\u{1F1FE}\u{1F1EA}", code: "967" },
    ZA: { name: "South Africa", cca2: "ZA", flag: "\u{1F1FF}\u{1F1E6}", code: "27" },
    ZM: { name: "Zambia", cca2: "ZM", flag: "\u{1F1FF}\u{1F1F2}", code: "260" },
    ZW: { name: "Zimbabwe", cca2: "ZW", flag: "\u{1F1FF}\u{1F1FC}", code: "263" }
  };
  var metros = {
    500: "Portland-Auburn",
    501: "New York",
    502: "Binghamton",
    503: "Macon",
    504: "Philadelphia",
    505: "Detroit",
    506: "Boston (Manchester)",
    507: "Savannah",
    508: "Pittsburgh",
    509: "Ft. Wayne",
    510: "Cleveland-Akron (Canton)",
    511: "Washington, DC (Hagrstwn)",
    512: "Baltimore",
    513: "Flint-Saginaw-Bay City",
    514: "Buffalo",
    515: "Cincinnati",
    516: "Erie",
    517: "Charlotte",
    518: "Greensboro-H.Point-W.Salem",
    519: "Charleston, SC",
    520: "Augusta-Aiken",
    521: "Providence-New Bedford",
    522: "Columbus, GA (Opelika, AL)",
    523: "Burlington-Plattsburgh",
    524: "Atlanta",
    525: "Albany, GA",
    526: "Utica",
    527: "Indianapolis",
    528: "Miami-Ft. Lauderdale",
    529: "Louisville",
    530: "Tallahassee-Thomasville",
    531: "Tri-Cities, TN-VA",
    532: "Albany-Schenectady-Troy",
    533: "Hartford & New Haven",
    534: "Orlando-Daytona Bch-Melbrn",
    535: "Columbus, OH",
    536: "Youngstown",
    537: "Bangor",
    538: "Rochester, NY",
    539: "Tampa-St. Pete (Sarasota)",
    540: "Traverse City-Cadillac",
    541: "Lexington",
    542: "Dayton",
    543: "Springfield-Holyoke",
    544: "Norfolk-Portsmth-Newpt Nws",
    545: "Greenville-N.Bern-Washngtn",
    546: "Columbia, SC",
    547: "Toledo",
    548: "West Palm Beach-Ft. Pierce",
    549: "Watertown",
    550: "Wilmington",
    551: "Lansing",
    552: "Presque Isle",
    553: "Marquette",
    554: "Wheeling-Steubenville",
    555: "Syracuse",
    556: "Richmond-Petersburg",
    557: "Knoxville",
    558: "Lima",
    559: "Bluefield-Beckley-Oak Hill",
    560: "Raleigh-Durham (Fayetvlle)",
    561: "Jacksonville",
    563: "Grand Rapids-Kalmzoo-B.Crk",
    564: "Charleston-Huntington",
    565: "Elmira (Corning)",
    566: "Harrisburg-Lncstr-Leb-York",
    567: "Greenvll-Spart-Ashevll-And",
    569: "Harrisonburg",
    570: "Myrtle Beach-Florence",
    571: "Ft. Myers-Naples",
    573: "Roanoke-Lynchburg",
    574: "Johnstown-Altoona-St Colge",
    575: "Chattanooga",
    576: "Salisbury",
    577: "Wilkes Barre-Scranton-Hztn",
    581: "Terre Haute",
    582: "Lafayette, IN",
    583: "Alpena",
    584: "Charlottesville",
    588: "South Bend-Elkhart",
    592: "Gainesville",
    596: "Zanesville",
    597: "Parkersburg",
    598: "Clarksburg-Weston",
    600: "Corpus Christi",
    602: "Chicago",
    603: "Joplin-Pittsburg",
    604: "Columbia-Jefferson City",
    605: "Topeka",
    606: "Dothan",
    609: "St. Louis",
    610: "Rockford",
    611: "Rochestr-Mason City-Austin",
    612: "Shreveport",
    613: "Minneapolis-St. Paul",
    616: "Kansas City",
    617: "Milwaukee",
    618: "Houston",
    619: "Springfield, MO",
    622: "New Orleans",
    623: "Dallas-Ft. Worth",
    624: "Sioux City",
    625: "Waco-Temple-Bryan",
    626: "Victoria",
    627: "Wichita Falls & Lawton",
    628: "Monroe-El Dorado",
    630: "Birmingham (Ann and Tusc)",
    631: "Ottumwa-Kirksville",
    632: "Paducah-Cape Girard-Harsbg",
    633: "Odessa-Midland",
    634: "Amarillo",
    635: "Austin",
    636: "Harlingen-Wslco-Brnsvl-McA",
    637: "Cedar Rapids-Wtrlo-IWC&Dub",
    638: "St. Joseph",
    639: "Jackson, TN",
    640: "Memphis",
    641: "San Antonio",
    642: "Lafayette, LA",
    643: "Lake Charles",
    644: "Alexandria, LA",
    647: "Greenwood-Greenville",
    648: "Champaign&Sprngfld-Decatur",
    649: "Evansville",
    650: "Oklahoma City",
    651: "Lubbock",
    652: "Omaha",
    656: "Panama City",
    657: "Sherman-Ada",
    658: "Green Bay-Appleton",
    659: "Nashville",
    661: "San Angelo",
    662: "Abilene-Sweetwater",
    669: "Madison",
    670: "Ft. Smith-Fay-Sprngdl-Rgrs",
    671: "Tulsa",
    673: "Columbus-Tupelo-W Pnt-Hstn",
    675: "Peoria-Bloomington",
    676: "Duluth-Superior",
    678: "Wichita-Hutchinson Plus",
    679: "Des Moines-Ames",
    682: "Davenport-R.Island-Moline",
    686: "Mobile-Pensacola (Ft Walt)",
    687: "Minot-Bsmrck-Dcknsn(Wlstn)",
    691: "Huntsville-Decatur (Flor)",
    692: "Beaumont-Port Arthur",
    693: "Little Rock-Pine Bluff",
    698: "Montgomery-Selma",
    702: "La Crosse-Eau Claire",
    705: "Wausau-Rhinelander",
    709: "Tyler-Longview(Lfkn&Ncgd)",
    710: "Hattiesburg-Laurel",
    711: "Meridian",
    716: "Baton Rouge",
    717: "Quincy-Hannibal-Keokuk",
    718: "Jackson, MS",
    722: "Lincoln & Hastings-Krny",
    724: "Fargo-Valley City",
    725: "Sioux Falls(Mitchell)",
    734: "Jonesboro",
    736: "Bowling Green",
    737: "Mankato",
    740: "North Platte",
    743: "Anchorage",
    744: "Honolulu",
    745: "Fairbanks",
    746: "Biloxi-Gulfport",
    747: "Juneau",
    749: "Laredo",
    751: "Denver",
    752: "Colorado Springs-Pueblo",
    753: "Phoenix (Prescott)",
    754: "Butte-Bozeman",
    755: "Great Falls",
    756: "Billings",
    757: "Boise",
    758: "Idaho Fals-Pocatllo(Jcksn)",
    759: "Cheyenne-Scottsbluff",
    760: "Twin Falls",
    762: "Missoula",
    764: "Rapid City",
    765: "El Paso (Las Cruces)",
    766: "Helena",
    767: "Casper-Riverton",
    770: "Salt Lake City",
    771: "Yuma-El Centro",
    773: "Grand Junction-Montrose",
    789: "Tucson (Sierra Vista)",
    790: "Albuquerque-Santa Fe",
    798: "Glendive",
    800: "Bakersfield",
    801: "Eugene",
    802: "Eureka",
    803: "Los Angeles",
    804: "Palm Springs",
    807: "San Francisco-Oak-San Jose",
    810: "Yakima-Pasco-Rchlnd-Knnwck",
    811: "Reno",
    813: "Medford-Klamath Falls",
    819: "Seattle-Tacoma",
    820: "Portland, OR",
    821: "Bend, OR",
    825: "San Diego",
    828: "Monterey-Salinas",
    839: "Las Vegas",
    855: "SantaBarbra-SanMar-SanLuOb",
    862: "Sacramnto-Stkton-Modesto",
    866: "Fresno-Visalia",
    868: "Chico-Redding",
    881: "Spokane"
  };
  var continents = {
    AF: "Africa",
    AN: "Antarctica",
    AS: "Asia",
    EU: "Europe",
    NA: "North America",
    OC: "Oceania",
    SA: "South America"
  };
})();
