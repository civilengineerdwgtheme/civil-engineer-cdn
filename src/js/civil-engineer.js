// CivilEngineerDWG combined JavaScript source bundle
// Generated from validated batch-v2 modules.

// --- module-02.js ---
var civilEngineerSetting;

  function optionCivilEngineer(i) {
    if (null != civilEngineerSetting)
      for (var t in civilEngineerSetting) civilEngineerSetting.hasOwnProperty(t) && void 0 !== civilEngineerSetting[t] && (i[t] = civilEngineerSetting[t])
  }

  function getValidParagraphs(r) {
    if (!r) return [];
    var t = "table, ul, ol, blockquote, pre, .code-box, .notification-box, .accordion-container, .accordion-content, .grid-images, .slider-container, .lazy-youtube, .civilengineer-toc, #inline-related-posts, .bj-cards, figure";
    return Array.from(r.querySelectorAll("p, br")).filter(function(e) {
      return !e.closest(t)
    })
  }


// --- module-03.js ---
window.civilEngineerSetting = window.civilEngineerSetting || {};
  window.civilEngineerSetting.newsletter = {
    action: "",
    field: "email",
    mode: "ajax",
    botField: "",
    extraFields: null,
    feedUrl: "/feeds/posts/default"

  };


// --- module-04.js ---
window.civilEngineerSetting = window.civilEngineerSetting || {};
  /* Objek window.civilEngineerSetting.adsense (client/lazy/timeout) sengaja TIDAK
     dideklarasikan di sini lagi -- satu-satunya sumber ada di blok pengaturan
     utama (lihat "5) ADSENSE"). init()/load() di bawah membaca objek itu
     secara dinamis saat benar-benar dipanggil (DOMContentLoaded), yaitu
     setelah blok pengaturan utama tereksekusi, jadi tidak perlu nilai
     sementara di sini. */
  (function() {
    var loaded = false;

    function load() {
      if (loaded) {
        return;
      }
      loaded = true;
      var c = (window.civilEngineerSetting && window.civilEngineerSetting.adsense) || {};
      if (!c.client) {
        return;
      }
      var s = document.createElement("script");
      s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(c.client);
      s.async = true;
      s.crossOrigin = "anonymous";
      (document.head || document.documentElement).appendChild(s);
    }

    function init() {
      var c = (window.civilEngineerSetting && window.civilEngineerSetting.adsense) || {};
      if (!c.client) {
        return;
      }
      if (c.lazy === false) {
        load();
        return;
      }
      var evs = ["pointerdown", "pointermove", "touchstart", "scroll", "keydown", "wheel"];
      for (var i = 0; evs.length > i; i++) {
        window.addEventListener(evs[i], load, {
          passive: true,
          once: true
        });
      }
      if (c.timeout > 0) {
        setTimeout(load, c.timeout);
      }
    }
    if (document.readyState !== "loading") {
      setTimeout(init, 0);
    } else {
      document.addEventListener("DOMContentLoaded", init);
    }
    window.__civilengineerLoadAds = load;
  })();


// --- module-05.js ---
! function() {
    var e = !0,
      t = !1;
    if ("undefined" != typeof civilEngineerSetting && (void 0 !== civilEngineerSetting.darkMode && (e = civilEngineerSetting.darkMode), void 0 !== civilEngineerSetting.defaultDark && (t = civilEngineerSetting.defaultDark)), e) {
      var K = "darkmode",
        r = document.documentElement,
        m = window.matchMedia("(prefers-color-scheme: dark)"),
        VALID = ["light", "dark", "system"],
        M = function() {
          var v = null;
          try {
            v = localStorage.getItem(K)
          } catch (x) {}
          return VALID.indexOf(v) > -1 ? v : (t ? "dark" : "system")
        }(),
        D = function(n) {
          return "dark" === n || ("system" === n && m.matches)
        },
        NF = function() {
          r.classList.add("civilengineer-theme-switching");
          if (window.requestAnimationFrame) {
            requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                r.classList.remove("civilengineer-theme-switching")
              })
            })
          } else {
            setTimeout(function() {
              r.classList.remove("civilengineer-theme-switching")
            }, 60)
          }
        },
        A = function() {
          NF();
          D(M) ? r.setAttribute("data-theme", "dark") : r.removeAttribute("data-theme");
          r.setAttribute("data-theme-mode", M);
          var opts = document.querySelectorAll("#civilengineer-dm-menu .civilengineer-dm-opt");
          for (var i = 0; i < opts.length; i++) {
            opts[i].setAttribute("aria-checked", opts[i].getAttribute("data-dm") === M ? "true" : "false")
          }
        },
        Q = function() {
          "system" === M && A()
        };
      m.addEventListener ? m.addEventListener("change", Q) : m.addListener && m.addListener(Q);

      document.addEventListener("click", function(e) {
        var t = e.target;
        if (!t || !t.closest) return;

        var opt = t.closest(".civilengineer-dm-opt");
        if (opt) {
          e.preventDefault();
          M = opt.getAttribute("data-dm");
          try {
            localStorage.setItem(K, M)
          } catch (x) {}
          A();
          var w = document.getElementById("civilengineer-dm"),
            b = document.getElementById("darkmode-btn");
          if (w && b) {
            w.classList.remove("open");
            b.setAttribute("aria-expanded", "false")
          }
          return
        }

        var btn = t.closest("#darkmode-btn");
        if (btn) {
          e.preventDefault();
          e.stopPropagation();
          var wrap = document.getElementById("civilengineer-dm"),
            open = wrap.classList.toggle("open");
          btn.setAttribute("aria-expanded", open ? "true" : "false");
          return
        }

        var wrap2 = document.getElementById("civilengineer-dm");
        if (wrap2 && !wrap2.contains(t)) {
          wrap2.classList.remove("open");
          var b2 = document.getElementById("darkmode-btn");
          b2 && b2.setAttribute("aria-expanded", "false")
        }
      }, !1);

      document.addEventListener("keydown", function(e) {
        if ("Escape" === e.key) {
          var wrap = document.getElementById("civilengineer-dm"),
            btn = document.getElementById("darkmode-btn");
          if (wrap) {
            wrap.classList.remove("open");
            btn && btn.setAttribute("aria-expanded", "false")
          }
        }
      });

      A();
      document.addEventListener("DOMContentLoaded", A)
    }
  }();

  ! function() {
    "use strict";
    var K2 = "civilengineer_widthmode",
      VALID2 = ["normal", "wide"],
      r2 = document.documentElement,
      M2 = function() {
        var v = null;
        try {
          v = localStorage.getItem(K2)
        } catch (x) {}
        return VALID2.indexOf(v) > -1 ? v : "normal"
      }(),
      A2 = function() {
        r2.setAttribute("data-width-mode", M2);
        var opts = document.querySelectorAll("#civilengineer-ww-menu .civilengineer-ww-opt");
        for (var i = 0; i < opts.length; i++) {
          opts[i].setAttribute("aria-checked", opts[i].getAttribute("data-ww") === M2 ? "true" : "false")
        }
      };
    document.addEventListener("click", function(e) {
      var t = e.target;
      if (!t || !t.closest) return;
      var opt = t.closest(".civilengineer-ww-opt");
      if (opt) {
        e.preventDefault();
        M2 = opt.getAttribute("data-ww");
        try {
          localStorage.setItem(K2, M2)
        } catch (x) {}
        A2();
        var w = document.getElementById("civilengineer-ww"),
          b = document.getElementById("civilengineer-ww-btn");
        if (w && b) {
          w.classList.remove("open");
          b.setAttribute("aria-expanded", "false")
        }
        return
      }
      var btn = t.closest("#civilengineer-ww-btn");
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        var wrap = document.getElementById("civilengineer-ww"),
          open = wrap.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        return
      }
      var wrap2 = document.getElementById("civilengineer-ww");
      if (wrap2 && !wrap2.contains(t)) {
        wrap2.classList.remove("open");
        var b2 = document.getElementById("civilengineer-ww-btn");
        b2 && b2.setAttribute("aria-expanded", "false")
      }
    }, !1);
    document.addEventListener("keydown", function(e) {
      if ("Escape" === e.key) {
        var wrap = document.getElementById("civilengineer-ww"),
          btn = document.getElementById("civilengineer-ww-btn");
        if (wrap) {
          wrap.classList.remove("open");
          btn && btn.setAttribute("aria-expanded", "false")
        }
      }
    });
    A2();
    document.addEventListener("DOMContentLoaded", A2)
  }();

  ! function() {
    "use strict";
    var GROUPS = [
      { wrap: "lang-switch", btn: "lang-btn" },
      { wrap: "civilengineer-fs", btn: "civilengineer-fs-btn" },
      { wrap: "civilengineer-ww", btn: "civilengineer-ww-btn" },
      { wrap: "civilengineer-dm", btn: "darkmode-btn" }
    ];

    function closeAllExcept(exceptWrapId) {
      for (var i = 0; i < GROUPS.length; i++) {
        if (GROUPS[i].wrap === exceptWrapId) continue;
        var w = document.getElementById(GROUPS[i].wrap);
        if (!w || !w.classList.contains("open")) continue;
        w.classList.remove("open");
        var b = document.getElementById(GROUPS[i].btn);
        if (b) b.setAttribute("aria-expanded", "false");
      }
    }
    document.addEventListener("click", function(e) {
      var t = e.target;
      if (!t || !t.closest) return;
      for (var i = 0; i < GROUPS.length; i++) {
        var w = document.getElementById(GROUPS[i].wrap);
        if (w && w.contains(t)) {
          closeAllExcept(GROUPS[i].wrap);
          return;
        }
      }
    }, true);
  }();

  window.speechSynthesis && window.SpeechSynthesisUtterance || document.documentElement.classList.add("civilengineer-no-tts");

  ! function() {
    ! function(n, t, e) {
      function c(n, t, o) {
        k ? S(n, t) : ((o = o === e ? c.lazy : o) ? N : C).push(n, Math.max(o ? 350 : 0, t))
      }

      function o(n) {
        j.head.appendChild(n)
      }

      function i(n, t) {
        n.forEach(function(n) {
          t(n)
        })
      }

      function u(t, e, c, o) {
        i(e.split(" "), function(e) {
          (o || n)[t + "EventListener"](e, c || d)
        })
      }

      function r(n, t, c, o) {
        return (o = t ? j.getElementById(t) : e) || (o = j.createElement(n), t && (o.id = t)), c && u(y, p, c, o), o
      }

      function f(n, t) {
        i(q.call(n.attributes), function(n) {
          t(n.name, n.value)
        })
      }

      function s(n, t) {
        return q.call((t || j).querySelectorAll(n))
      }

      function a(n, t) {
        i(s("source,img", n), a), f(n, function(t, e, c) {
          (c = /^data-(.+)/.exec(t)) && n[x](c[1], e)
        }), t && (n.className += " " + t), n[p] && n[p]()
      }

      function l(n, t, e) {
        c(function(t) {
          i(t = s(n || "script[type=deferjs]"), function(n, t) {
              n.src && (t = r(h), f(n, function(n, e) {
                n != A && t[x]("src" == n ? "href" : n, e)
              }), t.rel = "preload", t.as = m, o(t))
            }),
            function n(e, c) {
              (e = t[E]()) && (c = r(m), f(e, function(n, t) {
                n != A && c[x](n, t)
              }), c.text = e.text, e.parentNode.replaceChild(c, e), c.src && !c.getAttribute("async") ? u(y, p + " error", n, c) : n())
            }()
        }, t, e)
      }

      function d(n, t) {
        for (t = k ? (u(b, g), N) : (u(b, w), k = c, N[0] && u(y, g), C); t[0];) S(t[E](), t[E]())
      }
      var h = "link",
        m = "script",
        p = "load",
        v = "pageshow",
        y = "add",
        b = "remove",
        g = "touchstart mousemove mousedown keydown wheel",
        w = "on" + v in n ? v : p,
        x = "setAttribute",
        E = "shift",
        A = "type",
        I = n.IntersectionObserver,
        j = n.document || n,
        k = /p/.test(j.readyState),
        C = [],
        N = [],
        S = n.setTimeout,
        q = C.slice;
      c.all = l, c.dom = function(n, o, u, r, f) {
        c(function(o) {
          function l(n) {
            r && !1 === r(n) || a(n, u)
          }
          o = I ? new I(function(n) {
            i(n, function(n, t) {
              n.isIntersecting && (o.unobserve(t = n.target), l(t))
            })
          }, f) : e, i(s(n || "[data-src]"), function(n) {
            n[t] || (n[t] = c, o ? o.observe(n) : l(n))
          })
        }, o, !1)
      }, c.css = function(n, t, e, i, u) {
        c(function(e) {
          (e = r(h, t, i)).rel = "stylesheet", e.href = n, o(e)
        }, e, u)
      }, c.js = function(n, t, e, i, u) {
        c(function(e) {
          (e = r(m, t, i)).src = n, o(e)
        }, e, u)
      }, c.reveal = a, n[t] = c, k || u(y, w), l()
    }(this, "Defer")
  }();


// --- module-13.js ---
Defer.dom("img.lazyload", 100, "loaded", null, {
        rootMargin: "1px"
      });


// --- module-15.js ---
(function() {
        var s = document.currentScript;
        if (!s) { return; }
        var i = s.previousElementSibling;
        if (!i) { return; }
        if (window.__civilengineerFeatYFb) {
          i.addEventListener('error', function fb() {
            i.removeEventListener('error', fb);
            if (window.__civilengineerFeatYFb) { i.src = window.__civilengineerFeatYFb;
              window.__civilengineerFeatYFb = ''; }
          });
        }
        if (window.__civilengineerFeatY) { i.src = window.__civilengineerFeatY; }
      })();


// --- module-16.js ---
(function() {
            /* Catatan: console.log penanda versi dihapus -- pesan itu ikut tampil
               di konsol pengunjung pada setiap pemuatan halaman. */

            function host(t) {
              try {
                return new URL(t, location.href).hostname;
              } catch (e) {
                return "";
              }
            }

            function up(t) {
              var h = host(t);
              if (/(^|\.)googleusercontent\.com$/.test(h) || /(^|\.)bp\.blogspot\.com$/.test(h) || /(^|\.)ggpht\.com$/.test(h)) {
                return t.replace(/\/(s|w|h)\d+(-[a-z0-9-]+)?\//i, "/w400-h225-p-k-no-nu-rw-e365/").replace(/=(s|w)\d+(-[a-z0-9-]+)?$/i, "=w400-h225-p-k-no-nu-rw-e365");
              }
              if (h === "img.youtube.com" || h === "i.ytimg.com") {
                return t.replace(/\/default\.jpg$/i, "/hqdefault.jpg");
              }
              return t;
            }

            function firstImg(html) {
              var m = /<img[^>]+src=["']([^"']+)["']/i.exec(html || "");
              return m ? m[1] : null;
            }

            function candidatesOf(e) {
              var list = [],
                raw = null,
                ci = null,
                ru, cu;
              if (e.media$thumbnail && e.media$thumbnail.url) {
                raw = e.media$thumbnail.url;
              }
              ci = firstImg((e.content && e.content.$t) || (e.summary && e.summary.$t));
              if (raw) {
                ru = up(raw);
                if (ru !== raw) {
                  list.push(ru);
                }
                list.push(raw);
              }
              if (ci) {
                cu = up(ci);
                if (cu !== ci && list.indexOf(cu) === -1) {
                  list.push(cu);
                }
                if (list.indexOf(ci) === -1) {
                  list.push(ci);
                }
              }
              return list;
            }

            function mount(a, cands, altText) {
              var box = a.parentNode,
                idx = 0;
              var im = document.createElement("img");
              im.className = "thumb-img";
              im.alt = altText || "";
              im.width = 288;
              im.height = 162;
              im.loading = "lazy";
              im.decoding = "async";
              im.onerror = function() {
                idx++;
                if (idx < cands.length) {
                  im.src = cands[idx];
                } else {
                  im.onerror = null;
                  im.style.display = "none";
                  if (box && box.classList) {
                    box.classList.add("thumb-noimg");
                  }
                }
              };
              if (box && box.classList) {
                box.classList.remove("thumb-noimg");
                if (/img\.youtube\.com|i\.ytimg\.com/.test(cands[0])) {
                  box.classList.add("is-video");
                }
              }
              im.src = cands[0];
              a.appendChild(im);
            }
            var busy = false,
              again = false;

            function run() {
              if (busy) {
                again = true;
                return;
              }
              var P = document.querySelectorAll("a.thumb-fill:not([data-tf])");
              if (!P.length) {
                return;
              }
              var pend = {},
                i, u;
              for (i = 0; i < P.length; i++) {
                P[i].setAttribute("data-tf", "1");
                u = P[i].getAttribute("data-purl");
                if (u) {
                  try {
                    pend[new URL(u, location.href).pathname] = P[i];
                  } catch (e) {}
                }
              }
              var left = Object.keys(pend).length;
              if (!left) {
                return;
              }
              busy = true;

              function apply(e) {
                var alt = null,
                  j, l = e.link || [];
                for (j = 0; j < l.length; j++) {
                  if (l[j].rel === "alternate") {
                    alt = l[j].href;
                    break;
                  }
                }
                if (!alt) {
                  return;
                }
                var key;
                try {
                  key = new URL(alt, location.href).pathname;
                } catch (x) {
                  return;
                }
                var a = pend[key];
                if (!a) {
                  return;
                }
                var cands = candidatesOf(e);
                if (cands.length) {
                  mount(a, cands, a.getAttribute("data-alt"));
                }
                delete pend[key];
                left--;
              }
              var wins = [
                  [1, 150],
                  [151, 150],
                  [301, 200]
                ],
                step = 0;
              window.__civilengineerThumbFill = function(d) {
                var en = (d && d.feed && d.feed.entry) || [],
                  j;
                for (j = 0; j < en.length; j++) {
                  apply(en[j]);
                }
                step++;
                if (left > 0 && step < wins.length) {
                  go(wins[step][0], wins[step][1]);
                } else {
                  busy = false;
                  if (again) {
                    again = false;
                    run();
                  }
                }
              };

              function go(start, max) {
                var s = document.createElement("script");
                s.src = "/feeds/posts/summary?alt=json-in-script&start-index=" + start + "&max-results=" + max + "&callback=__civilengineerThumbFill";
                (document.head || document.documentElement).appendChild(s);
              }
              go(wins[0][0], wins[0][1]);
            }
            window.civilengineerThumbRescan = run;
            if (document.readyState !== "loading") run();
            else document.addEventListener("DOMContentLoaded", run);
          })();


// --- module-25.js ---
! function() {
                    "use strict";
                    /* v1.1.7 - LABEL & ICON dihapus bersama fungsi penyuntik side menu.
                       Daftar pilihan Kecil/Standar/Besar cukup ditulis sekali di markup
                       Header (#civilengineer-fs-menu), tidak perlu digandakan lewat JavaScript. */
                    var KEY = "civilengineer_fontsize",
                      VALID = ["small", "normal", "large"];

                    function read() {
                      var v;
                      try {
                        v = localStorage.getItem(KEY);
                      } catch (e) {}
                      return VALID.indexOf(v) > -1 ? v : "normal";
                    }

                    function save(v) {
                      try {
                        localStorage.setItem(KEY, v);
                      } catch (e) {}
                    }

                    function apply(v, silent) {
                      document.documentElement.setAttribute("data-fs", v);
                      if (!silent) {
                        save(v);
                      }
                      Array.prototype.forEach.call(document.querySelectorAll(".civilengineer-fs-opt"), function(b) {
                        b.setAttribute("aria-checked", b.getAttribute("data-fs") === v ? "true" : "false");
                      });
                      /* FIX: beri tahu skrip navigasi (#cssmenu) bahwa lebar teks menu mungkin
                         berubah, supaya deteksi drawer tablet ikut diperbarui tanpa perlu
                         ResizeObserver yang memicu loop bergoyang/bergetar. */
                      try {
                        document.dispatchEvent(new Event("civilengineerFontSizeChange"));
                      } catch (e) {}
                    }

                    /* v1.1.7 - buildOptions() & injectMobile() DIHAPUS.
                       Pada Mode Mobile tombol Ukuran Teks kini tampil di Header (satu
                       kelompok dengan Mode Tampilan & Search), sehingga tidak ada lagi
                       salinan kontrol yang disuntikkan ke daftar Sidebar/drawer navigasi.
                       Membersihkan sisa suntikan versi lama (bila ada di cache/DOM). */
                    function removeLegacyMobile() {
                      var li = document.querySelector("#cssmenu > ul > li.civilengineer-fs-li");
                      if (li && li.parentNode) {
                        li.parentNode.removeChild(li);
                      }
                    }

                    function init() {
                      var current = read();
                      removeLegacyMobile();
                      apply(current, true);

                      var wrap = document.getElementById("civilengineer-fs"),
                        btn = document.getElementById("civilengineer-fs-btn");

                      if (wrap && btn) {
                        btn.addEventListener("click", function(e) {
                          e.stopPropagation();
                          var open = wrap.classList.toggle("open");
                          btn.setAttribute("aria-expanded", open ? "true" : "false");
                        });
                        document.addEventListener("click", function(e) {
                          if (!wrap.contains(e.target)) {
                            wrap.classList.remove("open");
                            btn.setAttribute("aria-expanded", "false");
                          }
                        });
                        document.addEventListener("keydown", function(e) {
                          if (e.key === "Escape") {
                            wrap.classList.remove("open");
                            btn.setAttribute("aria-expanded", "false");
                          }
                        });
                      }

                      document.addEventListener("click", function(e) {
                        var opt = e.target.closest ? e.target.closest(".civilengineer-fs-opt") : null;
                        if (!opt) {
                          return;
                        }
                        e.preventDefault();
                        apply(opt.getAttribute("data-fs"));
                        if (wrap && btn) {
                          wrap.classList.remove("open");
                          btn.setAttribute("aria-expanded", "false");
                        }
                      });
                    }

                    try {
                      document.documentElement.setAttribute("data-fs", read());
                    } catch (e) {}

                    if (document.readyState === "loading") {
                      document.addEventListener("DOMContentLoaded", init);
                    } else {
                      init();
                    }
                  }();


// --- module-26.js ---
/* Pasang drawer sebagai keadaan awal pada tablet. Karena skrip
                 ini berjalan saat parser baru selesai membuat <nav>, menu
                 desktop tidak pernah sempat terlihat lalu bertransisi menjadi
                 hamburger/drawer. */
              (function() {
                var nav = document.getElementById('cssmenu');
                if (!nav || !window.matchMedia) return;
                if (window.matchMedia('(min-width: 801px) and (max-width: 1199px)').matches) {
                  nav.classList.add('civilengineer-nav-drawer', 'civilengineer-nav-drawer-pending');
                  var topbar = document.querySelector('.civilengineer-topbar'),
                      button = document.getElementById('menu-button');
                  if (topbar && button && button.parentNode !== topbar) {
                    topbar.insertBefore(button, topbar.firstChild);
                    button.classList.add('civilengineer-tablet-menu-button');
                  }
                }
              }());


// --- module-27.js ---
(function() {
    "use strict";

    function conf() {
      var s = window.civilEngineerSetting || {};
      var L = s.logo || {};
      return {
        light: L.light || L.lightUrl || s.logoLight || "",
        dark: L.dark || L.darkUrl || s.logoDark || s.darkLogo || "",
        fdark: L.footerDark || L.footer || s.footerLogoDark || "",
        alt: L.alt || "",
        height: L.height || 0
      };
    }

    var pre = {};

    function preload(u) {
      if (u && !pre[u]) {
        pre[u] = 1;
        var i = new Image();
        i.src = u;
      }
    }

    function isDark() {
      return document.documentElement.getAttribute("data-theme") === "dark";
    }

    function headerImg(c) {
      var img = document.querySelector("#header-inner .header-logo img, .header #header-inner img");
      if (img) {
        return img;
      }
      if (!c.light) {
        return null;
      }
      var inner = document.getElementById("header-inner");
      if (!inner) {
        return null;
      }

      var a = document.createElement("a");
      a.className = "header-logo";
      a.href = "/";
      img = document.createElement("img");
      img.src = c.light;
      img.alt = c.alt || document.title || "";
      img.setAttribute("fetchpriority", "high");
      if (c.height) {
        img.style.maxHeight = c.height + "px";
      }
      a.appendChild(img);
      inner.insertBefore(a, inner.firstChild);
      inner.classList.add("has-logo");
      inner.classList.remove("ip-behind");
      return img;
    }

    function footerImg() {
      return document.querySelector(".footer-logo-img, .footer-logo-custom img, .footer-logo img");
    }

    function swap(img, darkUrl, lightOverride) {
      if (!img) {
        return;
      }
      if (!img.getAttribute("data-light-src")) {
        img.setAttribute("data-light-src", lightOverride || img.getAttribute("src") || "");
      }
      if (lightOverride) {
        img.setAttribute("data-light-src", lightOverride);
      }

      var mode = (isDark() && darkUrl) ? "dark" : "light";
      var want = (mode === "dark") ? darkUrl : img.getAttribute("data-light-src");
      if (!want) {
        return;
      }
      if (img.getAttribute("data-civilengineer-logo") === mode) {
        return;
      }

      if (img.hasAttribute("srcset")) {
        img.removeAttribute("srcset");
      }
      img.setAttribute("src", want);
      img.setAttribute("data-civilengineer-logo", mode);
    }

    function navBrand(c) {
      var brand = document.getElementById("civilengineer-navbrand");
      if (!brand) {
        return;
      }
      var img = document.getElementById("civilengineer-navbrand-img");
      if (!img) {
        return;
      }

      var src = "";
      var h = document.querySelector("#header-inner .header-logo img, .header #header-inner img");
      if (h) {
        src = h.getAttribute("src") || "";
      }
      if (!src) {
        src = (isDark() && c.dark) ? c.dark : (c.light || "");
      }

      if (src) {
        if (img.getAttribute("src") !== src) {
          img.setAttribute("src", src);
        }
        brand.classList.add("has-img");
      } else {
        brand.classList.remove("has-img");
      }
    }

    function apply() {
      var c = conf();
      if (!c.light && !c.dark && !c.fdark) {
        navBrand(c);
        return;
      }
      preload(c.dark);
      preload(c.light);
      preload(c.fdark);

      var h = headerImg(c);
      if (h) {
        swap(h, c.dark, c.light);
      }
      if (c.fdark) {
        swap(footerImg(), c.fdark, "");
      }
      navBrand(c);
    }

    apply();
    new MutationObserver(apply).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", apply);
    }
    window.addEventListener("load", apply);
    setTimeout(apply, 300);
    setTimeout(apply, 1200);

    window.civilengineerLogoRefresh = apply;
  })();


// --- module-28.js ---
(function(){
                function initHeroScroll(){
                  var btns = document.querySelectorAll('[data-civilengineer-hero-scroll]');
                  Array.prototype.forEach.call(btns, function(btn){
                    btn.addEventListener('click', function(e){
                      var href = btn.getAttribute('href') || '';
                      var hashPos = href.indexOf('#');
                      if (hashPos === -1) { return; }
                      var hash = href.slice(hashPos + 1);
                      if (!hash) { return; }
                      var target = document.getElementById(hash);
                      if (!target) { return; }
                      e.preventDefault();
                      var root = document.documentElement;
                      var hdrVar = getComputedStyle(root).getPropertyValue('--civilengineer-hdr-total');
                      var hdrPx = parseInt(hdrVar, 10);
                      if (isNaN(hdrPx)) { hdrPx = 90; }
                      var y = target.getBoundingClientRect().top + window.pageYOffset - hdrPx - 20;
                      if (y < 0) { y = 0; }
                      try {
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      } catch (err) {
                        window.scrollTo(0, y);
                      }
                      if (history.pushState) {
                        history.pushState(null, '', '#' + hash);
                      }
                    });
                  });
                }

                function applyAboutHref(btn, url){
                  if (!url) { return; }
                  btn.setAttribute('href', url);
                }

                function initHeroAutoPage(){
                  var btn = document.querySelector('[data-civilengineer-hero-autopage]');
                  if (!btn) { return; }
                  var wantedRaw = btn.getAttribute('data-civilengineer-hero-autopage') || '';
                  var wanted = wantedRaw.split('|').map(function(s){ return s.trim().toLowerCase(); }).filter(Boolean);
                  if (!wanted.length) { return; }

                  var cacheKey = 'civilengineerHeroAutoPageUrl:' + wantedRaw;
                  try {
                    var cached = sessionStorage.getItem(cacheKey);
                    if (cached) { applyAboutHref(btn, cached); return; }
                  } catch (e) {}

                  var feedUrl = window.location.protocol + '//' + window.location.host +
                    '/feeds/pages/default?alt=json&max-results=150';

                  fetch(feedUrl).then(function(res){ return res.json(); }).then(function(data){
                    var entries = (data.feed && data.feed.entry) || [];
                    var found = null;
                    for (var i = 0; i < entries.length; i++) {
                      var titleRaw = (entries[i].title && entries[i].title.$t) || '';
                      var title = titleRaw.trim().toLowerCase();
                      if (wanted.indexOf(title) === -1) { continue; }
                      var links = entries[i].link || [];
                      for (var j = 0; j < links.length; j++) {
                        if (links[j].rel === 'alternate' && links[j].href) {
                          found = links[j].href;
                          break;
                        }
                      }
                      if (found) { break; }
                    }
                    if (found) {
                      applyAboutHref(btn, found);
                      try { sessionStorage.setItem(cacheKey, found); } catch (e) {}
                    }
                  }).catch(function(){
                    /* Biarkan href bawaan (fallback) jika Halaman belum ditemukan / feed gagal diambil. */
                  });
                }

                function initHeroEmptyGuard(){
                  var root = document.documentElement;
                  var box = document.getElementById('badan-halaman');
                  if (!box || (document.body && document.body.id === 'layout')) { return; }
                  var nodes = box.querySelectorAll('.civilengineer-hero-sub, .civilengineer-hero-title, .civilengineer-hero-desc, .civilengineer-hero-btn, .civilengineer-hero-img');
                  var filled = false;
                  for (var i = 0; i < nodes.length; i++) {
                    var n = nodes[i];
                    var rendered = n.getClientRects().length > 0;
                    var hasBody = n.tagName === 'IMG' || (n.textContent || '').replace(/\s+/g, '') !== '';
                    if (rendered && hasBody) { filled = true; break; }
                  }
                  if (filled) {
                    root.classList.remove('civilengineer-hero-empty');
                    root.setAttribute('data-hero-guard', 'ok');
                  } else {
                    root.classList.add('civilengineer-hero-empty');
                    root.setAttribute('data-hero-guard', 'empty');
                  }
                }

                function initCivilengineerHero(){
                  initHeroEmptyGuard();
                  initHeroScroll();
                  initHeroAutoPage();
                }

                initHeroEmptyGuard();
                if (document.readyState !== 'loading') { initCivilengineerHero(); }
                else { document.addEventListener('DOMContentLoaded', initCivilengineerHero); }
              })();


// --- module-29.js ---
! function(e) {
            var n = e.querySelector(".post-body-artikel");
            if (!n) return;
            var t = getValidParagraphs(n),
              l = Math.ceil(.2 * t.length),
              r = Math.ceil(.7 * t.length),
              i = e.querySelector("#iklan-tengah1 .widget-content"),
              a = e.querySelector("#iklan-tengah2 .widget-content"),
              o = e.querySelector("#iklan-atas .widget-content"),
              c = e.querySelector("#iklan-bawah .widget-content"),
              d = n.querySelector("#iklan1"),
              u = n.querySelector("#iklan2");
            null != o && "\n" != o.innerHTML && n.insertBefore(o, n.childNodes[0]), null != c && "\n" != c.innerHTML && n.appendChild(c);
            var g = function(n, l, r) {
              var i, a;
              t.length > 1 ? (null != n && "\n" != n.innerHTML && (i = n, void 0 !== (a = null !== l ? l : t[r]) && a.parentNode.insertBefore(i, a.nextSibling)), function() {
                for (var n, t = e.querySelectorAll(".post-body-artikel .iklan-tengah-artikel"), l = 0; l < t.length; l++) null !== (n = t[l].previousElementSibling) && "BR" === n.tagName && (n.style.display = "none")
              }()) : n && n.parentNode && n.parentNode.removeChild(n)
            };
            g(i, d, l), g(a, u, r)
          }(document);


// --- module-30.js ---
(function() {
                          var s = document.currentScript;
                          if (!s) return;
                          var w = s.parentNode;
                          var label = w.querySelector('.civilengineer-vf-btn-label');
                          if (!label) return;
                          var text = label.textContent || '';
                          try { text = decodeURIComponent(text); } catch (e) {}
                          text = text.replace(/^\s*https?:\/\//, '').replace(/\+/g, ' ').replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
                          label.textContent = text || 'Follow';
                        })();


// --- module-31.js ---
(function() {
      "use strict";

      function cfg(key, defs) {
        var u = {};
        try {
          if (typeof civilEngineerSetting !== "undefined" && civilEngineerSetting && civilEngineerSetting[key]) {
            u = civilEngineerSetting[key];
          }
        } catch (e) {}
        var o = {};
        for (var k in defs) {
          o[k] = defs[k];
        }
        for (var j in u) {
          if (u.hasOwnProperty(j)) {
            o[j] = u[j];
          }
        }
        return o;
      }

      function ready(fn) {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", fn, {
            once: true
          });
        } else {
          fn();
        }
      }

      /* ============================================================
         MODE STICKY HEADER MOBILE
         Membaca window.civilEngineerSetting.header.mobileStickyHeader
           "smart"  -> Auto Hide Header (bawaan)
           "normal" -> Sticky biasa, header tidak pernah sembunyi
         Alias lama yang tetap didukung: mobileStickyMode, mobileMode
         ============================================================ */
      function mobileStickyMode(c) {
        // Alias diperiksa lebih dahulu karena tidak ada di nilai bawaan.
        var v = c.mobileStickyMode;
        if (typeof v !== "string") {
          v = c.mobileMode;
        }
        if (typeof v !== "string") {
          v = c.mobileStickyHeader;
        }
        v = (typeof v === "string" ? v : "smart").toLowerCase().replace(/^\s+|\s+$/g, "");
        if (v === "normal" || v === "fixed" || v === "always") {
          return "normal";
        }
        return "smart";
      }

      function smartHeader() {
        var c = cfg("header", {
          enabled: true,
          mobileStickyHeader: "smart", // "smart" (auto hide) | "normal" (selalu tampil)
          hideOffset: 200, // px scroll sebelum header boleh menghilang
          speed: 350, // ms durasi animasi
          shadow: true, // bayangan saat mode sticky
          height: null, // override tinggi header (px) bila perlu
          delta: 6 // ambang perpindahan agar tidak flicker
        });
        if (!c.enabled) {
          return;
        }
        var hdr = document.getElementById("header-container");
        if (!hdr) {
          return;
        }
        if (window.getComputedStyle(hdr).position !== "fixed") {
          return;
        } // hormati mode non-fixed

        // --- baca konfigurasi mode SEBELUM logika scroll dijalankan ---
        var MODE = mobileStickyMode(c);
        var root = document.documentElement;
        root.classList.remove("civilengineer-msticky-smart", "civilengineer-msticky-normal");
        root.classList.add(MODE === "normal" ? "civilengineer-msticky-normal" : "civilengineer-msticky-smart");
        root.setAttribute("data-mobile-sticky", MODE);

        if (typeof c.height === "number") {
          root.style.setProperty("--header-height", c.height + "px");
        }
        hdr.style.transition = "transform " + c.speed + "ms ease, box-shadow .3s ease";

        var lastY = window.pageYOffset || 0,
          ticking = false;

        var TWO_TIER = window.matchMedia("(min-width: 801px)");

        function menuOpen() {
          return !!document.querySelector(".menu-opened, .search-bar-wrap.open, .lang-switch.open") ||
            !!(document.body && document.body.classList.contains("mm-lock"));
        }

        function show() {
          hdr.classList.remove("civilengineer-hdr-hidden");
        }

        function hide() {
          hdr.classList.add("civilengineer-hdr-hidden");
        }

        function update() {
          ticking = false;
          var y = window.pageYOffset;
          if (y < 0) {
            y = 0;
          }
          if (c.shadow) {
            hdr.classList.toggle("civilengineer-hdr-shadow", y > 4);
          }

          // Desktop: tidak pernah auto hide (perilaku lama dipertahankan).
          // Mobile mode "normal": header selalu menempel, tanpa auto hide.
          if (TWO_TIER.matches || MODE === "normal") {
            show();
            lastY = y;
            return;
          }

          var diff = y - lastY;
          if (y <= c.hideOffset || menuOpen()) {
            show();
          } else if (diff > c.delta) {
            hide();
          } else if (diff < -c.delta) {
            show();
          }
          lastY = y;
        }

        function onScroll() {
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
          }
        }

        function onResize() {
          /* Perubahan tinggi address bar/viewport bukan gesture scroll pengguna.
             Netralisasi baseline agar header tidak membalik state saat browser
             menyelesaikan resize setelah pengguna berhenti menggulir. */
          lastY = Math.max(0, window.pageYOffset || 0);
          onScroll();
        }

        window.addEventListener("scroll", onScroll, {
          passive: true
        });
        window.addEventListener("resize", onResize, {
          passive: true
        });

        // Menu / overlay pencarian dibuka tanpa scroll: pastikan header tampil.
        // Memakai event delegation (ringan) - bukan MutationObserver global.
        if (MODE !== "normal") {
          document.addEventListener("click", function(e) {
            var t = e.target;
            if (t && t.closest && t.closest("#menu-button, #search-bar-btn, .mm-tgl")) {
              show();
              lastY = window.pageYOffset || 0;
            }
          }, true);
        }

        update();
      }

      function getArticle() {
        return document.querySelector(".post-body-artikel") ||
          document.querySelector("#body-post-it") ||
          document.querySelector(".post-body") ||
          document.querySelector(".entry-content");
      }

      function countWords(t) {
        t = (t || "").trim();
        if (!t) {
          return 0;
        }
        var m = t.match(/[^\s]+/g);
        return m ? m.length : 0;
      }

      /* ==========================================================
         WAKTU BACA  (kartu Featured Post / Artikel Populer / Postingan Terbaru)

         Kenapa di halaman artikel benar tapi di homepage selalu 1 menit?
         Di halaman artikel seluruh isi tulisan memang ada di DOM, jadi
         kata-katanya bisa dihitung langsung. Di homepage tidak: Blogger
         hanya mengirim potongan isi sebelum Jump Break lewat
         data:post.body (di widget Featured/Popular malah sering kosong),
         sehingga jumlah kata selalu kecil dan pembulatan selalu jadi 1.

         Jadi angka yang benar HARUS diambil dari luar halaman. Urutannya:

           1. Feed Blogger  -> /feeds/posts/default?alt=json
              Murah (satu permintaan untuk banyak artikel), tetapi isinya
              ikut dipotong bila Setelan > Feed Situs bukan "Penuh".
           2. Halaman artikel -> fetch URL artikel lalu hitung .post-body
              Selalu akurat, apa pun setelan feed, tetapi lebih berat.

         Karena itu ada kalibrasi: satu artikel diuji dengan kedua cara.
         Bila hasil feed jauh lebih kecil dari hasil halaman, berarti feed
         dipotong -> mesin pindah ke mode "page" untuk semua kartu.

         Supaya tidak boros: kartu baru dihitung ketika mendekati layar
         (IntersectionObserver), hasilnya disimpan di localStorage selama
         beberapa hari, dan permintaan dibatasi 2 yang berjalan bersamaan.

         Diagnosa: jalankan civilengineerReadingTimeReport() di Console browser.
         ========================================================== */

      var RT_STORE = "civilengineerRT:v2";
      var RT_PARALEL = 2;

      var rtCfgCache = null;
      var rtCache = {};
      var rtMode = "";        /* "" belum diputuskan | "feed" | "page" */
      var rtFeed = null;      /* peta path -> kata dari feed */
      var rtBooting = false;
      var rtBooted = false;
      var rtQueue = [];
      var rtAsked = {};
      var rtActive = 0;
      var rtSaveTimer = null;
      var rtLog = [];
      var rtObserver = null;

      function rtConfig() {
        if (!rtCfgCache) {
          rtCfgCache = cfg("readingTime", {
            enabled: true,
            wpm: 225,
            label: "{min} Menit Membaca",
            source: "auto",
            cacheDays: 7,
            debug: false
          });
        }
        return rtCfgCache;
      }

      function rtSay() {
        var a = Array.prototype.slice.call(arguments);
        rtLog.push(a.join(" "));
        if (rtConfig().debug && window.console) {
          console.log("[waktu-baca]", a.join(" "));
        }
      }

      /* ---------- penyimpanan ---------- */

      function rtLoadCache() {
        var umur = (Number(rtConfig().cacheDays) || 7) * 864e5;
        var now = Date.now();
        var raw = {};
        try {
          raw = JSON.parse(localStorage.getItem(RT_STORE) || "{}") || {};
        } catch (e) {
          raw = {};
        }
        for (var k in raw) {
          if (raw.hasOwnProperty(k) && raw[k] && now - raw[k].t < umur) {
            rtCache[k] = raw[k];
          }
        }
      }

      function rtSave() {
        if (rtSaveTimer) {
          return;
        }
        rtSaveTimer = setTimeout(function() {
          rtSaveTimer = null;
          try {
            localStorage.setItem(RT_STORE, JSON.stringify(rtCache));
          } catch (e) {}
        }, 600);
      }

      /* ---------- utilitas ---------- */

      function rtPath(u) {
        if (!u) {
          return "";
        }
        try {
          return new URL(u, location.href).pathname.replace(/\/+$/, "").toLowerCase();
        } catch (e) {
          return String(u).split("#")[0].split("?")[0].replace(/\/+$/, "").toLowerCase();
        }
      }

      function rtWordsOfHtml(html) {
        return countWords(String(html || "")
          .replace(/<(script|style|noscript|iframe|svg)[\s\S]*?<\/\1>/gi, " ")
          .replace(/<[^>]*>/g, " ")
          .replace(/&(?:nbsp|amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);/g, " "));
      }

      /* Hitung isi artikel dari sebuah dokumen (halaman ini atau hasil fetch). */
      function rtWordsOfDoc(doc) {
        var art = doc.querySelector(".post-body-artikel") ||
          doc.querySelector("#body-post-it") ||
          doc.querySelector(".post-body") ||
          doc.querySelector(".entry-content");
        if (!art) {
          return -1;
        }
        var n = countWords(art.textContent);
        var sisip = art.querySelectorAll("#civilengineer-toc, .civilengineer-toc, #inline-related-posts, .inline-related-posts-wrap, script, style, noscript");
        for (var i = 0; i < sisip.length; i++) {
          n -= countWords(sisip[i].textContent);
        }
        return n > 0 ? n : 0;
      }

      function rtCardHref(ph) {
        if (ph.getAttribute("data-purl")) {
          return ph.getAttribute("data-purl");
        }
        var card = ph.closest ?
          ph.closest(".post-outer, .popular-card, .FeaturedPost, .post, article") : null;
        if (!card) {
          return "";
        }
        var a = card.querySelector(".post-title a[href], .popular-post-title[href], .entry-title a[href], h2 a[href], h3 a[href], a.popular-post-thumb[href]");
        return a ? a.getAttribute("href") : "";
      }

      /* ---------- tampilan ---------- */

      function fillReadingTime(ph, words, c, plus) {
        var wpm = Number(c.wpm) > 0 ? Number(c.wpm) : 225;
        var min = Math.max(1, Math.round(words / wpm));
        var slot = ph.querySelector(".reading-time-text") || ph;
        slot.textContent = String(c.label || "{min} Menit Membaca").replace("{min}", plus ? min + "+" : min);
        ph.setAttribute("data-minutes", min);
        ph.hidden = false;
      }

      function rtResolve(path, words, src) {
        if (!path || !(words > 0)) {
          return;
        }
        rtCache[path] = { w: words, t: Date.now(), s: src };
        rtSave();
        var c = rtConfig();
        var list = document.querySelectorAll(".reading-time-info[data-purl]");
        for (var i = 0; i < list.length; i++) {
          if (rtPath(list[i].getAttribute("data-purl")) === path) {
            fillReadingTime(list[i], words, c);
            list[i].setAttribute("data-rt-src", src);
          }
        }
      }

      /* ---------- sumber data ---------- */

      function rtJson(url) {
        return fetch(url, { credentials: "same-origin" }).then(function(r) {
          if (!r.ok) {
            throw new Error("HTTP " + r.status);
          }
          return r.json();
        });
      }

      function rtEntryHref(e) {
        var l = (e && e.link) || [];
        for (var i = 0; i < l.length; i++) {
          if (l[i].rel === "alternate" && l[i].href) {
            return l[i].href;
          }
        }
        return "";
      }

      /* Satu permintaan feed untuk 25 artikel terbaru. Tanpa parameter
         "fields" -- sebagian blog menolaknya dan seluruh proses ikut gagal. */
      function rtFeedBulk() {
        return rtJson("/feeds/posts/default?alt=json&orderby=published&max-results=25")
          .then(function(dd) {
            var en = (dd && dd.feed && dd.feed.entry) || [];
            var map = {};
            for (var i = 0; i < en.length; i++) {
              var p = rtPath(rtEntryHref(en[i]));
              if (p) {
                map[p] = rtWordsOfHtml(en[i].content && en[i].content.$t);
              }
            }
            rtSay("feed borongan:", en.length, "artikel");
            return map;
          }).catch(function(err) {
            rtSay("feed borongan gagal:", err.message || err);
            return null;
          });
      }

      function rtFeedOne(path) {
        return rtJson("/feeds/posts/default?alt=json&max-results=1&path=" + encodeURIComponent(path))
          .then(function(dd) {
            var e = dd && dd.feed && dd.feed.entry && dd.feed.entry[0];
            return e ? rtWordsOfHtml(e.content && e.content.$t) : 0;
          }).catch(function() {
            return 0;
          });
      }

      /* Sumber paling andal: halaman artikelnya sendiri. DOMParser bersifat
         inert -- gambar dan skrip di dalamnya tidak ikut dijalankan. */
      function rtPageOne(path) {
        return fetch(path, { credentials: "same-origin" }).then(function(r) {
          if (!r.ok) {
            throw new Error("HTTP " + r.status);
          }
          return r.text();
        }).then(function(html) {
          var doc = new DOMParser().parseFromString(html, "text/html");
          var n = rtWordsOfDoc(doc);
          return n > 0 ? n : 0;
        }).catch(function(err) {
          rtSay("gagal baca halaman", path, err.message || err);
          return 0;
        });
      }

      /* ---------- kalibrasi: feed dipotong atau tidak? ---------- */

      function rtBoot() {
        if (rtBooted || rtBooting) {
          return rtBooted ? Promise.resolve() : null;
        }
        rtBooting = true;
        var c = rtConfig();

        if (c.source === "page") {
          rtMode = "page";
          rtBooted = true;
          rtBooting = false;
          rtSay("mode: page (dipaksa lewat pengaturan)");
          rtDrain();
          return null;
        }

        rtFeedBulk().then(function(map) {
          rtFeed = map;
          if (!map || !rtQueue.length) {
            rtMode = map ? "feed" : "page";
            return null;
          }
          if (c.source === "feed") {
            rtMode = "feed";
            return null;
          }
          /* Uji satu artikel yang ada di feed sekaligus ada di antrean. */
          var uji = "";
          for (var i = 0; i < rtQueue.length; i++) {
            if (map[rtQueue[i]] > 0) {
              uji = rtQueue[i];
              break;
            }
          }
          if (!uji) {
            rtMode = "page";
            rtSay("mode: page (feed tidak memuat artikel di halaman ini)");
            return null;
          }
          return rtPageOne(uji).then(function(asli) {
            var feedKata = map[uji];
            if (asli > 0 && asli > feedKata * 1.25 + 25) {
              rtMode = "page";
              rtSay("mode: page -- feed dipotong (" + feedKata + " kata) padahal artikel " + asli + " kata.",
                "Setel Blogger > Setelan > Feed Situs > Penuh agar lebih hemat.");
            } else {
              rtMode = "feed";
              rtSay("mode: feed (feed utuh; uji " + feedKata + " vs " + asli + " kata)");
            }
            if (asli > 0) {
              rtResolve(uji, asli, "page");
            }
          });
        }).catch(function() {
          rtMode = rtMode || "page";
        }).then(function() {
          if (!rtMode) {
            rtMode = "page";
          }
          rtSay("mode aktif:", rtMode);
          rtBooted = true;
          rtBooting = false;
          /* Terapkan dulu yang sudah didapat dari feed borongan. */
          if (rtMode === "feed" && rtFeed) {
            for (var p in rtFeed) {
              if (rtFeed.hasOwnProperty(p) && rtFeed[p] > 0) {
                rtResolve(p, rtFeed[p], "feed");
              }
            }
          }
          rtDrain();
        });
        return null;
      }

      /* ---------- antrean ---------- */

      function rtDrain() {
        if (!rtBooted) {
          rtBoot();
          return;
        }
        while (rtActive < RT_PARALEL && rtQueue.length) {
          var path = rtQueue.shift();
          if (!path || (rtCache[path] && rtCache[path].w > 0)) {
            continue;
          }
          rtActive++;
          rtOne(path);
        }
      }

      function rtOne(path) {
        var selesai = function(words, src) {
          if (words > 0) {
            rtResolve(path, words, src);
          }
          rtActive--;
          rtDrain();
        };
        if (rtMode === "feed") {
          var siap = rtFeed && rtFeed[path] > 0 ? Promise.resolve(rtFeed[path]) : rtFeedOne(path);
          siap.then(function(n) {
            if (n > 0) {
              selesai(n, "feed");
            } else {
              rtPageOne(path).then(function(m) {
                selesai(m, "page");
              });
            }
          });
        } else {
          rtPageOne(path).then(function(n) {
            selesai(n, "page");
          });
        }
      }

      function rtEnqueue(path) {
        if (!path || rtAsked[path]) {
          return;
        }
        rtAsked[path] = 1;
        rtQueue.push(path);
        if (rtBooted) {
          rtDrain();
        } else {
          rtBoot();
        }
      }

      /* Kartu baru dihitung saat mendekati layar, bukan sekaligus. */
      function rtWatch(ph, path) {
        if (!window.IntersectionObserver) {
          rtEnqueue(path);
          return;
        }
        if (!rtObserver) {
          rtObserver = new IntersectionObserver(function(entries) {
            for (var i = 0; i < entries.length; i++) {
              if (entries[i].isIntersecting) {
                rtObserver.unobserve(entries[i].target);
                rtEnqueue(entries[i].target.getAttribute("data-rt-path"));
              }
            }
          }, { rootMargin: "400px 0px" });
        }
        ph.setAttribute("data-rt-path", path);
        rtObserver.observe(ph);
      }

      /* ---------- pintu masuk ---------- */

      function readingTime(scope) {
        var c = rtConfig();
        if (c.enabled === false) {
          return;
        }
        if (!rtCache.__loaded) {
          rtLoadCache();
          rtCache.__loaded = true;
        }
        var list = (scope || document).querySelectorAll(".reading-time-info");
        for (var i = 0; i < list.length; i++) {
          var ph = list[i];
          if (ph.getAttribute("data-rt-done") === "1") {
            continue;
          }

          var info3 = ph.closest ? ph.closest(".info-3") : null;
          if (info3) { /* halaman artikel / statis: isi lengkap ada di DOM */
            var n = rtWordsOfDoc(document);
            if (n < 0) {
              continue;
            }
            ph.setAttribute("data-rt-done", "1");
            ph.setAttribute("data-rt-src", "dom");
            fillReadingTime(ph, n, c);
            /* Simpan supaya kartu artikel ini di halaman lain langsung tepat. */
            var here = rtPath(location.href);
            if (here && n > 0) {
              rtCache[here] = { w: n, t: Date.now(), s: "dom" };
              rtSave();
            }
            continue;
          }

          ph.setAttribute("data-rt-done", "1");
          var path = rtPath(rtCardHref(ph));
          if (!path) {
            rtSay("kartu tanpa URL artikel -- dilewati");
            continue;
          }
          if (!ph.getAttribute("data-purl")) {
            ph.setAttribute("data-purl", path);
          }
          if (rtCache[path] && rtCache[path].w > 0) {
            fillReadingTime(ph, rtCache[path].w, c);
            ph.setAttribute("data-rt-src", "cache");
            continue;
          }
          /* Belum ada angka: biarkan tersembunyi dulu, jangan tampilkan
             "1 Menit" yang keliru. Diisi begitu hasilnya datang. */
          rtWatch(ph, path);
        }
      }

      window.civilengineerApplyReadingTime = readingTime;

      /* Diagnosa cepat: ketik civilengineerReadingTimeReport() di Console. */
      window.civilengineerReadingTimeReport = function() {
        var out = {
          mode: rtMode || "(belum ditentukan)",
          antre: rtQueue.length,
          berjalan: rtActive,
          catatan: rtLog.slice(),
          kartu: []
        };
        var list = document.querySelectorAll(".reading-time-info");
        for (var i = 0; i < list.length; i++) {
          out.kartu.push({
            url: list[i].getAttribute("data-purl") || "(artikel ini)",
            menit: list[i].getAttribute("data-minutes") || "-",
            sumber: list[i].getAttribute("data-rt-src") || "-"
          });
        }
        if (window.console) {
          console.log(out.mode, "| antre:", out.antre);
          out.catatan.forEach(function(x) { console.log("  ", x); });
          if (console.table) { console.table(out.kartu); }
        }
        return out;
      };

      function gridConfig() {
        var g = document.querySelector(".blog-posts.is-grid");
        if (!g && !document.querySelector(".FeaturedPost, .civilengineer-trend-showcase")) {
          return;
        }
        var c = cfg("grid", {
          colsDesktop: 2,
          colsTablet: 2,
          colsMobile: 1,
          showAuthor: true,
          showAuthorFeatured: null,
          showAuthorPopular: null,
          showExcerpt: true,
          showMeta: true,
          showLabel: true,
          showReadingTime: true,
          showReadingTimeFeatured: null,
          showReadingTimePopular: null,
          showReadMore: true
        });
        var r = document.documentElement.style;
        r.setProperty("--grid-cols-d", c.colsDesktop);
        r.setProperty("--grid-cols-t", c.colsTablet);
        r.setProperty("--grid-cols-m", c.colsMobile);
        /* null / tidak diisi = ikut nilai showAuthor, sehingga setelan lama
           tetap berlaku untuk ketiga area. */
        function hideAuthor(v) {
          return (v === null || v === undefined ? c.showAuthor : v) === false;
        }
        /* null / tidak diisi = ikut nilai showReadingTime, sama seperti
           hideAuthor() di atas untuk Featured Post & Artikel Populer. */
        function hideRT(v) {
          return (v === null || v === undefined ? c.showReadingTime : v) === false;
        }
        if (g) {
          g.classList.toggle("hide-author", hideAuthor(c.showAuthor));
        }
        Array.prototype.forEach.call(document.querySelectorAll(".FeaturedPost"), function(fp) {
          fp.classList.toggle("hide-author", hideAuthor(c.showAuthorFeatured));
          fp.classList.toggle("hide-rt", hideRT(c.showReadingTimeFeatured));
        });
        Array.prototype.forEach.call(document.querySelectorAll(".civilengineer-trend-showcase"), function(tp) {
          tp.classList.toggle("hide-author", hideAuthor(c.showAuthorPopular));
          tp.classList.toggle("hide-rt", hideRT(c.showReadingTimePopular));
        });
        if (g) {
          g.classList.toggle("hide-excerpt", c.showExcerpt === false);
          g.classList.toggle("hide-meta", c.showMeta === false);
          g.classList.toggle("hide-label", c.showLabel === false);
          g.classList.toggle("hide-rt", c.showReadingTime === false);
          g.classList.toggle("hide-readmore", c.showReadMore === false);
        }
      }

      function postNav() {
        var nav = document.querySelector(".post-nav");
        if (!nav) {
          return;
        }
        var home = (nav.getAttribute("data-home") || "/").replace(/\/$/, "");
        var iso = nav.getAttribute("data-iso");
        if (!iso) {
          return;
        }

        function offset(v, sec) {
          var d = new Date(v);
          if (isNaN(d)) {
            return null;
          }
          d.setSeconds(d.getSeconds() + sec);
          return d.toISOString();
        }

        function jsonp(url, cb) {
          var name = "__civilengineerNav" + Date.now() + Math.floor(Math.random() * 1000);
          var s = document.createElement("script");
          window[name] = function(d) {
            try {
              cb(d);
            } finally {
              try {
                delete window[name];
              } catch (e) {
                window[name] = null;
              }
              if (s.parentNode) {
                s.parentNode.removeChild(s);
              }
            }
          };
          s.src = url + "&callback=" + name;
          (document.head || document.documentElement).appendChild(s);
        }

        function apply(card, e) {
          if (!card || !e) {
            return;
          }
          var t = (e.title && e.title.$t) ? e.title.$t : null;
          if (t) {
            var el = card.querySelector(".post-nav-title");
            if (el) {
              el.textContent = t;
            }
          }
        }
        var older = nav.querySelector(".post-nav-older");
        var newer = nav.querySelector(".post-nav-newer");
        var base = home + "/feeds/posts/summary?alt=json-in-script&orderby=published&max-results=1";
        if (older) {
          var pmax = offset(iso, -1);
          if (pmax) {
            jsonp(base + "&published-max=" + encodeURIComponent(pmax), function(d) {
              var e = d && d.feed && d.feed.entry && d.feed.entry[0];
              apply(older, e);
            });
          }
        }
        if (newer) {
          var pmin = offset(iso, 1);
          if (pmin) {
            jsonp(base + "&published-min=" + encodeURIComponent(pmin), function(d) {
              var K = (d && d.feed && d.feed.openSearch$totalResults) ? parseInt(d.feed.openSearch$totalResults.$t, 10) : 0;
              if (K < 1) {
                return;
              }
              jsonp(base + "&start-index=" + K, function(d2) {
                var e = d2 && d2.feed && d2.feed.entry && d2.feed.entry[0];
                apply(newer, e);
              });
            });
          }
        }
      }

      var SHARE_NETS = {
        facebook: function(u, t) {
          return "https://www.facebook.com/sharer.php?u=" + u;
        },
        x: function(u, t) {
          return "https://twitter.com/intent/tweet?text=" + t + "&url=" + u;
        },
        whatsapp: function(u, t) {
          return "https://api.whatsapp.com/send?text=" + t + "%20-%20" + u;
        },
        telegram: function(u, t) {
          return "https://t.me/share/url?url=" + u + "&text=" + t;
        },
        linkedin: function(u, t) {
          return "https://www.linkedin.com/sharing/share-offsite/?url=" + u;
        },
        pinterest: function(u, t) {
          return "https://pinterest.com/pin/create/button/?url=" + u + "&description=" + t;
        },
        reddit: function(u, t) {
          return "https://www.reddit.com/submit?url=" + u + "&title=" + t;
        },
        email: function(u, t) {
          return "mailto:?subject=" + t + "&body=" + u;
        }
      };

      function toastMsg(box, text) {
        if (!box) {
          return;
        }
        var t = box.querySelector(".share-toast");
        if (!t) {
          return;
        }
        var txt = t.querySelector(".share-toast-text");
        if (txt) {
          txt.textContent = text;
        } else {
          t.textContent = text;
        }
        t.classList.add("show");
        clearTimeout(t._timer);
        t._timer = setTimeout(function() {
          t.classList.remove("show");
        }, 2400);
      }

      function fallbackCopy(text) {
        try {
          var ta = document.createElement("textarea");
          ta.value = text;
          ta.setAttribute("readonly", "");
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          ta.style.top = "0";
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          ta.setSelectionRange(0, ta.value.length);
          var ok = document.execCommand("copy");
          document.body.removeChild(ta);
          return ok;
        } catch (e) {
          return false;
        }
      }

      function shareDefaults() {
        return cfg("share", {
          enabled: true,
          platforms: ["facebook", "x", "whatsapp", "telegram", "linkedin", "reddit", "copy"],
          copyLink: true,
          nativeShare: true,
          position: "bottom",
          title: "",
          toastText: "Tautan berhasil disalin",
          shape: "circle",
          colorMode: "brand"
        });
      }

      function shareConfig() {
        var boxes = document.querySelectorAll(".share-box");
        if (!boxes.length) {
          return;
        }
        var c = shareDefaults();
        var canNative = !!(navigator.share);
        for (var b = 0; b < boxes.length; b++) {
          var box = boxes[b];
          if (c.enabled === false) {
            box.style.display = "none";
            continue;
          }

          box.classList.remove("share-shape-rounded", "share-shape-square", "share-color-theme");
          if (c.shape === "rounded") {
            box.classList.add("share-shape-rounded");
          }
          if (c.shape === "square") {
            box.classList.add("share-shape-square");
          }
          if (c.colorMode === "theme") {
            box.classList.add("share-color-theme");
          }

          if (c.title) {
            var head = box.querySelector(".share-head-text");
            if (head) {
              head.textContent = c.title;
            }
          }

          var rawUrl = box.getAttribute("data-url") || (location.origin + location.pathname);
          var rawTitle = box.getAttribute("data-title") || document.title || "";
          var u = encodeURIComponent(rawUrl);
          var t = encodeURIComponent(rawTitle);

          var order = (c.platforms || []).slice();
          if (c.copyLink === false) {
            order = order.filter(function(p) {
              return p !== "copy";
            });
          } else if (order.indexOf("copy") === -1) {
            order.push("copy");
          }
          var all = box.querySelectorAll(".share-btn");
          for (var i = 0; i < all.length; i++) {
            all[i].style.display = "none";
          }
          var wrap = box.querySelector(".share-btns");
          for (var k = 0; k < order.length; k++) {
            var el = box.querySelector('.share-btn[data-net="' + order[k] + '"]');
            if (!el) {
              continue;
            }
            if (SHARE_NETS[order[k]]) {
              el.setAttribute("href", SHARE_NETS[order[k]](u, t));
            }
            el.style.display = "inline-flex";
            wrap.appendChild(el);
          }

          var nat = box.querySelector('.share-btn[data-net="native"]');
          if (nat) {
            if (canNative && c.nativeShare !== false) {
              nat.style.display = "inline-flex";
              wrap.appendChild(nat);
            } else {
              nat.style.display = "none";
            }
          }

          if (c.position === "top") {
            var art = document.querySelector(".post-body-artikel, #body-post-it");
            if (art && art.parentNode) {
              art.parentNode.insertBefore(box, art);
            }
          }
        }
        if (!window.__civilengineerShareBound) {
          window.__civilengineerShareBound = true;
          document.addEventListener("click", function(e) {
            var btn = e.target.closest ? e.target.closest(".share-btn[data-net]") : null;
            if (!btn) {
              return;
            }
            var net = btn.getAttribute("data-net");
            var box = btn.closest(".share-box");
            var url = (box && box.getAttribute("data-url")) || (location.origin + location.pathname);
            var title = (box && box.getAttribute("data-title")) || document.title || "";
            if (net === "copy") {
              e.preventDefault();
              var msg = shareDefaults().toastText || "Tautan berhasil disalin";
              if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(url).then(function() {
                    toastMsg(box, msg);
                  },
                  function() {
                    if (fallbackCopy(url)) {
                      toastMsg(box, msg);
                    }
                  });
              } else if (fallbackCopy(url)) {
                toastMsg(box, msg);
              }
            } else if (net === "native") {
              e.preventDefault();
              if (navigator.share) {
                navigator.share({
                  title: title,
                  url: url
                })["catch"](function() {});
              }
            }
          });
        }
      }

      function staticPageConfig() {
        var w = document.querySelector(".is-static-page");
        if (!w) {
          return;
        }
        var c = cfg("staticPage", {
          sidebar: false,
          maxWidth: 860,
          showMeta: true,
          showToc: true,
          tocSticky: true // Daftar Isi menempel (sticky) di bawah Header saat digulir
        });
        if (c.sidebar === true) {
          w.classList.remove("is-static-page");
          return;
        }
        if (typeof c.maxWidth === "number") {
          document.documentElement.style.setProperty("--static-max", c.maxWidth + "px");
        }
        if (c.showMeta === false) {
          var m = w.querySelector(".info-3");
          if (m) {
            m.style.display = "none";
          }
        }
        if (c.showToc === false) {
          var t = document.getElementById("civilengineer-toc");
          if (t) {
            t.style.display = "none";
          }
        }
      }

      ready(function() {
        smartHeader();
        gridConfig();
        readingTime();
        postNav();
        shareConfig();
        staticPageConfig();
      });
    })();


// --- module-32.js ---
(function() {
      "use strict";

      var DEFAULTS = {
        /* ---- PANEL: DAFTAR ISI (TOC SETTINGS) ---- */
        enabled: true, // Aktifkan Daftar Isi
        mode: "open", // Mode Awal: "open" (Terbuka Otomatis) | "collapsed" (Tertutup)
        iconStyle: "chevron", // Ikon: "chevron" | "plusminus"
        animation: true, // Aktifkan Animasi
        sticky: true, // Sticky TOC (desktop: pindah ke sidebar & menempel)
        mobileSticky: true, // Mode Mobile: TOC menempel di bawah Header, seragam dengan Halaman Statis
        desktop: true, // Aktif di Desktop
        mobile: true, // Aktif di Mobile
        /* ---- opsi lanjutan ---- */
        title: "Daftar Isi",
        position: "beforeFirstHeading", // TOC selalu tampil sebelum gadget/widget dan isi artikel
        levels: [2, 3, 4, 5, 6], // heading yang didukung
        minHeadings: 2, // minimal jumlah heading agar TOC tampil
        numbered: true,
        collapsible: true,
        collapsedByDefault: false, // dipetakan otomatis dari "mode"
        sidebar: true, // dipetakan otomatis dari "sticky"
        scrollSpy: true,
        smoothScroll: true,
        offset: null, // null = ukur tinggi header otomatis
        showText: "Tampilkan",
        hideText: "Sembunyikan",
        /* Terjemahan label tombol. Kunci = kode bahasa pada menu "Pilih Bahasa".
           Bahasa asli halaman (Indonesia) memakai showText/hideText di atas.
           Jika menu bahasa ditambah (mis. "ar", "zh-CN"), tambahkan barisnya di sini. */
        i18n: {
          en: { show: "Show", hide: "Hide" }
        }
      };

      function readConfig() {
        var user = {};
        try {
          if (typeof civilEngineerSetting !== "undefined" && civilEngineerSetting && civilEngineerSetting.toc) {
            user = civilEngineerSetting.toc;
          }
        } catch (e) {}
        var cfg = {};
        for (var k in DEFAULTS) {
          cfg[k] = DEFAULTS[k];
        }
        for (var j in user) {
          if (user.hasOwnProperty(j)) {
            cfg[j] = user[j];
          }
        }

        /* Pemetaan opsi panel -> perilaku internal.
           Opsi lama (collapsedByDefault / sidebar) tetap dihormati bila diisi manual. */
        if (!user.hasOwnProperty("collapsedByDefault")) {
          cfg.collapsedByDefault = (String(cfg.mode).toLowerCase() === "collapsed");
        }
        if (!user.hasOwnProperty("sidebar")) {
          cfg.sidebar = (cfg.sticky !== false);
        }
        cfg.iconStyle = (String(cfg.iconStyle).toLowerCase() === "plusminus") ? "plusminus" : "chevron";
        return cfg;
      }

      function ready(fn) {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", fn, {
            once: true
          });
        } else {
          fn();
        }
      }

      /* Bahasa aktif dibaca dari cookie googtrans (format /id/en) yang sama dengan
         yang ditulis oleh tombol "Pilih Bahasa". Tanpa cookie = bahasa asli (id). */
      function activeLang() {
        var m = /(?:^|;\s*)googtrans=\/[^\/]*\/([^;]+)/.exec(document.cookie);
        return m ? decodeURIComponent(m[1]) : "id";
      }

      /* Label tombol Tampilkan/Sembunyikan sesuai bahasa aktif. */
      function toggleLabel(cfg, collapsed) {
        var lang = activeLang(),
          dict = cfg.i18n && (cfg.i18n[lang] || cfg.i18n[lang.split("-")[0]]);
        if (dict) {
          return collapsed ? dict.show : dict.hide;
        }
        return collapsed ? cfg.showText : cfg.hideText;
      }

      function getPostBody() {
        return document.querySelector(".post-body-artikel") ||
          document.querySelector("#body-post-it") ||
          document.querySelector(".post-body") ||
          document.querySelector(".entry-content") ||
          document.querySelector(".post");
      }

      /* Tinggi tambahan saat TOC Halaman Statis sedang Sticky/Floating: judul yang
         dituju harus mendarat DI BAWAH kotak TOC yang menempel, bukan tertutup olehnya.
         Nilainya diisi oleh blok "STICKY / FLOATING TOC" di bawah; 0 bila tidak aktif. */
      function floatExtra(cfg) {
        return (typeof cfg.floatExtra === "function") ? (cfg.floatExtra() || 0) : 0;
      }

      function headerOffset(cfg) {
        var extra = floatExtra(cfg);
        if (typeof cfg.offset === "number") {
          return cfg.offset + extra;
        }
        var h = document.querySelector("#header-container");
        if (h) {
          var pos = window.getComputedStyle(h).position;
          if (pos === "fixed" || pos === "sticky") {
            return h.offsetHeight + 16 + extra;
          }
        }
        return 16 + extra;
      }

      function slugify(text) {
        return String(text).toLowerCase().trim()
          .replace(/[\s\W-]+/g, "-")
          .replace(/^-+|-+$/g, "") || "bagian";
      }

      function uniqueId(base) {
        var id = base,
          n = 2;
        while (document.getElementById(id)) {
          id = base + "-" + n;
          n++;
        }
        return id;
      }

      /* Buang penomoran manual di awal judul (mis. "1. ", "1.1. ", "2.3.4) ")
         khusus untuk label yang ditampilkan di Daftar Isi, supaya tidak
         dobel dengan angka counter otomatis (.civilengineer-toc--numbered). Judul
         asli pada heading artikel/halaman tidak disentuh sama sekali. */
      function stripManualNumbering(text) {
        var stripped = String(text).replace(/^\s*\d+(?:[.\-]\d+)*[.\)]?\s+/, "");
        return stripped || text;
      }

      function collectHeadings(container, levels, stripNumbering) {
        var sel = levels.map(function(l) {
          return "h" + l;
        }).join(",");
        var nodes = container.querySelectorAll(sel);
        var out = [];
        for (var i = 0; i < nodes.length; i++) {
          var el = nodes[i];
          var txt = (el.textContent || "").trim();
          if (!txt) {
            continue;
          } // lewati heading kosong
          if (el.getAttribute("data-toc-skip") !== null) {
            continue;
          }
          if (!el.id) {
            el.id = uniqueId(slugify(txt));
          } // tidak mengubah teks/urutan heading
          out.push({
            el: el,
            level: parseInt(el.tagName.substring(1), 10),
            text: txt,
            label: stripNumbering ? stripManualNumbering(txt) : txt,
            id: el.id
          });
        }
        return out;
      }

      function buildTree(headings) {
        var root = document.createElement("ol");
        var stack = [{
          level: 0,
          ol: root
        }];
        var idToLi = {};

        headings.forEach(function(h) {
          while (stack.length > 1 && h.level <= stack[stack.length - 1].level) {
            stack.pop();
          }
          var parentOl = stack[stack.length - 1].ol;

          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = "#" + h.id;
          a.textContent = h.label;
          li.appendChild(a);
          parentOl.appendChild(li);
          idToLi[h.id] = li;

          var childOl = document.createElement("ol");
          li.appendChild(childOl);
          stack.push({
            level: h.level,
            ol: childOl
          });
        });

        root.querySelectorAll("ol").forEach(function(ol) {
          if (!ol.children.length) {
            ol.parentNode.removeChild(ol);
          }
        });
        return {
          ol: root,
          map: idToLi
        };
      }

      function iconMarkup(cfg) {
        if (cfg.icon) {
          return cfg.icon;
        } // izinkan SVG/emoji kustom dari pengaturan
        return '<svg class="civilengineer-toc__icon" viewBox="0 0 24 24" aria-hidden="true">' +
          '<path d="M4 6h2v2H4V6zm4 0h12v2H8V6zM4 11h2v2H4v-2zm4 0h12v2H8v-2zM4 16h2v2H4v-2zm4 0h12v2H8v-2z"/></svg>';
      }

      function chevron(cfg) {
        if (cfg && cfg.iconStyle === "plusminus") {
          return '<svg class="civilengineer-toc__chevron civilengineer-toc__chevron--pm" viewBox="0 0 24 24" aria-hidden="true">' +
            '<path class="civilengineer-toc__pm-v" d="M11 5h2v14h-2z"/>' +
            '<path d="M5 11h14v2H5z"/></svg>';
        }
        return '<svg class="civilengineer-toc__chevron" viewBox="0 0 24 24" aria-hidden="true">' +
          '<path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>';
      }

      function buildTOC(cfg, tree) {
        var nav = document.createElement("nav");
        nav.className = "civilengineer-toc" + (cfg.numbered ? " civilengineer-toc--numbered" : "") +
          (cfg.animation === false ? " civilengineer-toc--noanim" : "") +
          (cfg.iconStyle === "plusminus" ? " civilengineer-toc--pm" : "") +
          (cfg.sticky === false ? " civilengineer-toc--nosticky" : "");
        nav.id = "civilengineer-toc";
        nav.setAttribute("aria-label", cfg.title);

        var bodyId = "civilengineer-toc-body";
        var toggleH = cfg.collapsible ?
          '<button type="button" class="civilengineer-toc__toggle" aria-controls="' + bodyId + '" aria-expanded="true">' +
          '<span class="civilengineer-toc__toggle-text notranslate" translate="no">' + toggleLabel(cfg, false) + "</span>" + chevron(cfg) +
          "</button>" :
          "";

        nav.innerHTML =
          '<div class="civilengineer-toc__head">' +
          '<span class="civilengineer-toc__title">' + iconMarkup(cfg) + "<span>" + cfg.title + "</span></span>" +
          toggleH +
          "</div>" +
          '<div class="civilengineer-toc__body" id="' + bodyId + '"><div class="civilengineer-toc__nav"></div></div>';

        nav.querySelector(".civilengineer-toc__nav").appendChild(tree.ol);
        return nav;
      }

      function insertTOC(container, toc, cfg) {
        if (cfg.position === "beforeFirstHeading") {
          container.insertBefore(toc, container.firstChild);
          return;
        }
        var kids = container.children,
          p = null;
        for (var i = 0; i < kids.length; i++) {
          if (kids[i].tagName === "P" && (kids[i].textContent || "").trim().length > 0) {
            p = kids[i];
            break;
          }
          if (/^H[2-6]$/.test(kids[i].tagName)) {
            break;
          } // heading muncul sebelum paragraf
        }
        if (p) {
          p.parentNode.insertBefore(toc, p.nextSibling);
          return;
        }
        container.insertBefore(toc, container.firstChild); // fallback
      }

      function wireCollapse(toc, cfg, mqDesktop) {
        if (!cfg.collapsible) {
          return null;
        }
        var head = toc.querySelector(".civilengineer-toc__head");
        var btn = toc.querySelector(".civilengineer-toc__toggle");
        var body = toc.querySelector(".civilengineer-toc__body");
        var txt = toc.querySelector(".civilengineer-toc__toggle-text");

        function isDesktop() {
          return mqDesktop.matches;
        }

        function storageKey() {
          return isDesktop() ? "civilengineer_toc_collapsed_d" : "civilengineer_toc_collapsed_m";
        }

        function defaultCollapsed() {
          return !!cfg.collapsedByDefault;
        }

        function apply(collapsed, animate) {
          toc.classList.toggle("is-collapsed", collapsed);
          if (btn) {
            btn.setAttribute("aria-expanded", String(!collapsed));
          }
          if (txt) {
            txt.textContent = toggleLabel(cfg, collapsed);
          }

          if (isDesktop()) {
            body.style.maxHeight = "";
            return;
          } // desktop/sidebar: dikontrol CSS

          if (!animate || cfg.animation === false) {
            body.style.maxHeight = collapsed ? "0px" : "";
            return;
          }
          if (collapsed) {
            body.style.maxHeight = body.scrollHeight + "px";
            requestAnimationFrame(function() {
              body.style.maxHeight = "0px";
            });
          } else {
            body.style.maxHeight = body.scrollHeight + "px";
            body.addEventListener("transitionend", function te() {
              body.style.maxHeight = "";
              body.removeEventListener("transitionend", te);
            });
          }
        }

        function readState() {
          var v = defaultCollapsed();
          try {
            var s = localStorage.getItem(storageKey());
            if (s !== null) {
              v = (s === "1");
            }
          } catch (e) {}
          return v;
        }

        apply(readState(), false);

        /* Pergantian bahasa tanpa reload (Google Translate): perbarui label saja. */
        document.addEventListener("civilengineer:langchange", function() {
          if (txt) {
            txt.textContent = toggleLabel(cfg, toc.classList.contains("is-collapsed"));
          }
        });

        function toggle() {
          var next = !toc.classList.contains("is-collapsed");
          apply(next, true);
          try {
            localStorage.setItem(storageKey(), next ? "1" : "0");
          } catch (e) {}
        }
        if (btn) {
          btn.addEventListener("click", function(e) {
            e.stopPropagation();
            toggle();
          });
        }
        head.addEventListener("click", function(e) {
          if (e.target.closest(".civilengineer-toc__toggle")) {
            return;
          }
          toggle();
        });

        return {
          refresh: function() {
            apply(readState(), false);
          }
        };
      }

      function wireSmoothScroll(toc, cfg) {
        toc.addEventListener("click", function(e) {
          var a = e.target.closest('a[href^="#"]');
          if (!a) {
            return;
          }
          var id = decodeURIComponent(a.getAttribute("href").slice(1));
          var target = document.getElementById(id);
          if (!target) {
            return;
          }
          e.preventDefault();
          var y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset(cfg);
          window.scrollTo({
            top: y,
            behavior: cfg.smoothScroll ? "smooth" : "auto"
          });
          if (history.replaceState) {
            history.replaceState(null, "", "#" + id);
          }
          target.setAttribute("tabindex", "-1");
        });
      }

      function wireScrollSpy(headings, map, cfg, onActive) {
        if (!cfg.scrollSpy || !headings.length) {
          return;
        }
        var activeLi = null;

        function setActive(li) {
          if (li === activeLi) {
            return;
          }
          if (activeLi) {
            activeLi.classList.remove("is-active");
          }
          if (li) {
            li.classList.add("is-active");
          }
          activeLi = li;
          if (li && typeof onActive === "function") {
            onActive(li);
          }
        }
        var ticking = false;

        function update() {
          ticking = false;
          var off = headerOffset(cfg) + 10,
            current = null;
          for (var i = 0; i < headings.length; i++) {
            if (headings[i].el.getBoundingClientRect().top - off <= 0) {
              current = headings[i];
            } else {
              break;
            }
          }
          if (!current && window.pageYOffset < 50) {
            current = headings[0];
          }
          setActive(current ? map[current.id] : null);
        }

        function onScroll() {
          if (!ticking) {
            ticking = true;
            requestAnimationFrame(update);
          }
        }
        window.addEventListener("scroll", onScroll, {
          passive: true
        });
        window.addEventListener("resize", onScroll, {
          passive: true
        });
        update();
      }

      ready(function() {
        var cfg = readConfig();
        if (!cfg.enabled) {
          return;
        }
        if (cfg.desktop === false && cfg.mobile === false) {
          return;
        }
        var container = getPostBody();
        if (!container) {
          return;
        }
        if (document.getElementById("civilengineer-toc")) {
          return;
        } // hindari dobel

        var headings = collectHeadings(container, cfg.levels, cfg.numbered);
        if (headings.length < cfg.minHeadings) {
          return;
        }

        var tree = buildTree(headings);
        var toc = buildTOC(cfg, tree);

        var marker = document.createElement("div");
        marker.id = "civilengineer-toc-marker";
        insertTOC(container, marker, cfg);

        var mqDesktop = window.matchMedia("(min-width: 801px)");

        /* ---- STICKY / FLOATING TOC (Halaman Statis + Halaman Artikel di Mobile) ----
           Saat TOC berada di dalam konten (bukan di sidebar), kotaknya ikut tergulir
           habis. Blok ini membuat TOC menempel tepat di bawah Header/Menu Navigasi
           saat halaman digulir ke bawah.
           - Halaman Statis: berlaku di semua ukuran layar, karena sidebar memang
             disembunyikan di sana. Dimatikan lewat
             civilEngineerSetting.staticPage.tocSticky = false.
           - Halaman Artikel/Postingan: berlaku HANYA di Mode Mobile, supaya tampilan
             dan perilakunya seragam dengan Halaman Statis. Di Desktop TOC tetap
             pindah ke sidebar seperti sebelumnya. Dimatikan lewat
             civilEngineerSetting.toc.mobileSticky = false.
           - Keduanya ikut mati bila civilEngineerSetting.toc.sticky = false.
           - Status ini berubah saat layar diputar/diubah ukurannya, jadi floatAllowed
             sengaja dibuat FUNGSI (bukan nilai tetap) dan dinilai ulang setiap kali
             applyFloat() dipanggil, termasuk pada pergantian breakpoint.
           - Nilai "top" dihitung dari batas bawah header yang sebenarnya, karena header
             bisa mengecil (desktop) atau bersembunyi (mobile mode smart) saat digulir.
             TOC mengikuti gerakan header itu frame demi frame. */
        var staticCfg = {};
        try {
          if (typeof civilEngineerSetting !== "undefined" && civilEngineerSetting && civilEngineerSetting.staticPage) {
            staticCfg = civilEngineerSetting.staticPage;
          }
        } catch (e) {}
        var isStaticPage = !!document.querySelector(".page-static");

        function floatAllowed() {
          if (cfg.sticky === false) {
            return false;
          }
          if (isStaticPage) {
            return staticCfg.tocSticky !== false;
          }
          /* Halaman Artikel/Postingan: hanya Mode Mobile (<= 800px). */
          return !mqDesktop.matches && cfg.mobileSticky !== false;
        }
        var floatGap = 10,
          floatTop = -1,
          floatRaf = 0,
          floatUntil = 0;
        try {
          var gapVal = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue("--civilengineer-toc-float-gap"));
          if (gapVal >= 0) {
            floatGap = gapVal;
          }
        } catch (e) {}

        function floatActive() {
          return floatAllowed() && toc.classList.contains("civilengineer-toc--float");
        }

        /* Batas bawah header yang tampak di layar. Header yang sedang bersembunyi
           (translateY(-100%)) menghasilkan 0, header non-fixed dianggap 0. */
        function headerBottom() {
          var h = document.getElementById("header-container");
          if (!h) {
            return 0;
          }
          var pos = window.getComputedStyle(h).position;
          if (pos !== "fixed" && pos !== "sticky") {
            return 0;
          }
          return Math.max(0, Math.round(h.getBoundingClientRect().bottom));
        }

        function measureFloat() {
          if (!floatActive()) {
            return;
          }
          var top = headerBottom() + floatGap;
          if (top !== floatTop) {
            toc.style.top = top + "px";
            floatTop = top;
          }
          toc.classList.toggle("is-stuck", (window.pageYOffset || 0) > 0 && toc.getBoundingClientRect().top <= top + 1);
        }

        function tickFloat() {
          floatRaf = 0;
          measureFloat();
          if (floatActive() && performance.now() < floatUntil) {
            floatRaf = requestAnimationFrame(tickFloat);
          }
        }

        /* Ukur terus selama animasi header berlangsung (ms = lama pemantauan). */
        function trackFloat(ms) {
          if (!floatActive()) {
            return;
          }
          var until = performance.now() + ms;
          if (until > floatUntil) {
            floatUntil = until;
          }
          if (!floatRaf) {
            floatRaf = requestAnimationFrame(tickFloat);
          }
        }

        function applyFloat() {
          var on = floatAllowed() && !toc.classList.contains("civilengineer-toc--sidebar") && toc.style.display !== "none";
          if (on === toc.classList.contains("civilengineer-toc--float")) {
            return;
          }
          toc.classList.toggle("civilengineer-toc--float", on);
          marker.classList.toggle("civilengineer-toc-marker--float", on);
          floatTop = -1;
          if (on) {
            measureFloat();
            trackFloat(700);
          } else {
            toc.style.removeProperty("top");
            toc.classList.remove("is-stuck");
          }
        }

        /* Isi TOC dibatasi tingginya (bisa digulir sendiri) saat Floating, jadi
           butir judul yang sedang aktif dijaga tetap terlihat di dalam kotaknya. */
        function keepActiveVisible(li) {
          if (!li || !floatActive() || toc.classList.contains("is-collapsed")) {
            return;
          }
          var body = toc.querySelector(".civilengineer-toc__body"),
            a = li.firstElementChild;
          if (!body || !a || body.scrollHeight <= body.clientHeight + 1) {
            return;
          }
          var b = body.getBoundingClientRect(),
            r = a.getBoundingClientRect(),
            pad = 8;
          if (r.top < b.top + pad) {
            body.scrollTop -= (b.top + pad - r.top);
          } else if (r.bottom > b.bottom - pad) {
            body.scrollTop += (r.bottom - b.bottom + pad);
          }
        }

        /* Dipakai headerOffset(): tinggi TOC yang menempel + jarak ke header. */
        cfg.floatExtra = function() {
          return floatActive() ? Math.round(toc.offsetHeight) + floatGap : 0;
        };

        window.addEventListener("scroll", function() {
          trackFloat(650);
        }, {
          passive: true
        });
        window.addEventListener("resize", function() {
          trackFloat(400);
        }, {
          passive: true
        });
        document.addEventListener("civilengineerDrawerToggle", function() {
          trackFloat(700);
        });
        if (window.MutationObserver) {
          var hdrEl = document.getElementById("header-container");
          if (hdrEl) {
            new MutationObserver(function() {
              trackFloat(700);
            }).observe(hdrEl, {
              attributes: true,
              attributeFilter: ["class"]
            });
          }
          /* Saat TOC dibuka kembali, gulirkan isinya ke butir yang sedang aktif. */
          new MutationObserver(function() {
            if (floatActive() && !toc.classList.contains("is-collapsed")) {
              setTimeout(function() {
                keepActiveVisible(toc.querySelector("li.is-active"));
              }, 320);
            }
          }).observe(toc, {
            attributes: true,
            attributeFilter: ["class"]
          });
        }

        function sidebarHost() {
          var w = document.querySelector("#sidebar-wrapper");
          if (!w) {
            return null;
          }
          try {
            if (window.getComputedStyle(w).display === "none") {
              return null;
            }
          } catch (e) {}
          return w;
        }

        function updateStickyWidgetOffset() {
          var sidebar = document.querySelector("#sidebar-wrapper"),
            sticky = sidebar ? sidebar.querySelector(".sidebar-sticky") : null;
          if (!sticky || !mqDesktop.matches || !toc.classList.contains("civilengineer-toc--sidebar") || toc.style.display === "none") {
            if (sticky) {
              sticky.style.removeProperty("--civilengineer-toc-height");
              sticky.style.removeProperty("top");
            }
            return;
          }
          var tocStyle = window.getComputedStyle(toc),
            tocTop = parseFloat(tocStyle.top) || 100,
            tocMargin = parseFloat(tocStyle.marginBottom) || 0,
            stickyTop = Math.ceil(tocTop + toc.offsetHeight + tocMargin);
          sticky.style.setProperty("--civilengineer-toc-height", toc.offsetHeight + "px");
          sticky.style.setProperty("top", stickyTop + "px", "important");
        }

        function place() {
          var host = cfg.sidebar !== false && mqDesktop.matches ? sidebarHost() : null;
          if (host) {
            toc.classList.add("civilengineer-toc--sidebar");
            if (host.firstChild) {
              host.insertBefore(toc, host.firstChild);
            } else {
              host.appendChild(toc);
            }
          } else {
            toc.classList.remove("civilengineer-toc--sidebar");
            marker.appendChild(toc);
          }
          applyFloat();
          updateStickyWidgetOffset();
        }
        place();

        function applyDeviceVisibility() {
          var on = mqDesktop.matches ? (cfg.desktop !== false) : (cfg.mobile !== false);
          toc.style.display = on ? "" : "none";
          if (marker) {
            marker.style.display = on ? "" : "none";
          }
          applyFloat();
          updateStickyWidgetOffset();
        }
        applyDeviceVisibility();

        if (window.ResizeObserver) {
          new ResizeObserver(updateStickyWidgetOffset).observe(toc);
        } else {
          window.addEventListener("resize", updateStickyWidgetOffset);
        }

        var state = wireCollapse(toc, cfg, mqDesktop);
        wireSmoothScroll(toc, cfg);
        wireScrollSpy(headings, tree.map, cfg, keepActiveVisible);

        function onBreakpoint() {
          place();
          applyDeviceVisibility();
          if (state) {
            state.refresh();
          }
        }
        if (mqDesktop.addEventListener) {
          mqDesktop.addEventListener("change", onBreakpoint);
        } else if (mqDesktop.addListener) {
          mqDesktop.addListener(onBreakpoint);
        }
      });
    })();


// --- module-34.js ---
(function() {
    var PAGE_LANG = "id";
    var INCLUDED = "id,en";

    function cookieDomain() {
      var h = location.hostname;
      var parts = h.split(".");
      if (parts.length > 2) {
        return "." + parts.slice(-2).join(".");
      }
      return h;
    }

    function setGoogTrans(lang) {
      var val = "/" + PAGE_LANG + "/" + lang;
      var exp = "; expires=" + new Date(Date.now() + 31536000000).toUTCString();
      document.cookie = "googtrans=" + val + "; path=/" + exp;
      document.cookie = "googtrans=" + val + "; path=/; domain=" + cookieDomain() + exp;
    }

    function clearGoogTrans() {
      var past = "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = "googtrans=; path=/" + past;
      document.cookie = "googtrans=; path=/; domain=" + cookieDomain() + past;
    }

    function currentLang() {
      var m = /googtrans=\/[^\/]+\/([^;]+)/.exec(document.cookie);
      return m ? decodeURIComponent(m[1]) : PAGE_LANG;
    }

    /* Beri tahu skrip lain (mis. Daftar Isi) bahwa bahasa berganti tanpa reload. */
    function announceLang(lang) {
      try {
        document.dispatchEvent(new CustomEvent("civilengineer:langchange", { detail: { lang: lang } }));
      } catch (e) {}
    }

    function combo() {
      return document.querySelector(".goog-te-combo");
    }

    function applyViaCombo(lang) {
      var c = combo();
      if (!c) return false;
      c.value = (lang === PAGE_LANG) ? "" : lang;
      c.dispatchEvent(new Event("change"));
      return true;
    }

    window.googleTranslateElementInit = function() {
      try {
        new google.translate.TranslateElement({
            pageLanguage: PAGE_LANG,
            includedLanguages: INCLUDED,
            autoDisplay: false
          },
          "google_translate_element"
        );
      } catch (e) {}
    };

    function loadGT() {
      if (document.getElementById("gt-element-js")) return;
      var s = document.createElement("script");
      s.id = "gt-element-js";
      s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      (document.head || document.documentElement).appendChild(s);
    }

    function keepTop() {
      if (document.body && document.body.style.top !== "0px") document.body.style.top = "0px";
    }

    function markActive(lang) {
      var opts = document.querySelectorAll(".lang-opt");
      for (var i = 0; i < opts.length; i++) {
        var on = opts[i].getAttribute("data-lang") === lang;
        opts[i].setAttribute("aria-checked", on ? "true" : "false");
        opts[i].classList.toggle("is-active", on);
        if (on) {
          var code = document.getElementById("lang-btn-code");
          var LABEL = {
            "zh-CN": "ZH"
          };
          if (code) code.textContent = LABEL[lang] || lang.toUpperCase();
        }
      }
    }

    function ready(fn) {
      if (document.readyState !== "loading") fn();
      else document.addEventListener("DOMContentLoaded", fn);
    }

    ready(function() {
      var wrap = document.getElementById("lang-switch");
      var btn = document.getElementById("lang-btn");
      var menu = document.getElementById("lang-menu");
      if (!wrap || !btn || !menu) return;

      var gtArmed = false;

      function armGT() {
        if (gtArmed) return;
        gtArmed = true;
        loadGT();
        setInterval(keepTop, 500);
      }
      if (currentLang() !== PAGE_LANG) {
        armGT();
      }
      btn.addEventListener("pointerenter", armGT, {
        once: true
      });
      btn.addEventListener("touchstart", armGT, {
        once: true,
        passive: true
      });
      btn.addEventListener("focus", armGT, {
        once: true
      });
      markActive(currentLang());

      function openMenu() {
        armGT();
        wrap.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }

      function closeMenu() {
        wrap.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }

      function toggle(e) {
        e.preventDefault();
        e.stopPropagation();
        wrap.classList.contains("open") ? closeMenu() : openMenu();
      }

      btn.addEventListener("click", toggle);
      document.addEventListener("click", function(e) {
        if (!wrap.contains(e.target)) closeMenu();
      });
      document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") closeMenu();
      });

      var opts = menu.querySelectorAll(".lang-opt");
      for (var i = 0; i < opts.length; i++) {
        opts[i].addEventListener("click", function() {
          var lang = this.getAttribute("data-lang");
          markActive(lang);
          closeMenu();
          if (lang === PAGE_LANG) {
            clearGoogTrans();
            location.reload();
            return;
          }
          setGoogTrans(lang); // simpan agar bertahan antar-halaman
          announceLang(lang);
          if (!applyViaCombo(lang)) { // bila combo belum siap, muat ulang -> element.js menerapkan dari cookie
            location.reload();
          }
        });
      }
    });
  })();


// --- module-35.js ---
/* ===========================================================================
     FIX v1.1.5 - Penempatan fitur "Pilih Bahasa / Translate / Terjemahan".

     Mode Mobile (<=800px): elemen #lang-switch DIPINDAHKAN (bukan disalin) dari
     Header ke Sidebar/drawer navigasi, dibungkus <li class="civilengineer-lang-li">, dan
     ditempatkan SEBELUM "Contact Form" (Hubungi Kami), sehingga urutan
     Sidebar menjadi:
         Pilih Bahasa -> Contact Form
     (v1.1.8: Contact Form sengaja diletakkan PALING AKHIR di Sidebar.)
     (v1.1.7: item "Ukuran Teks" tidak lagi berada di Sidebar karena sudah
     dipindahkan ke Header bersama Mode Tampilan & Search.)
     Karena node aslinya yang dipindahkan, seluruh mekanisme kerja lama tetap
     utuh: id/kelas, event listener, kelas .open, daftar .lang-opt, penanda
     bahasa aktif, cookie googtrans, sampai #google_translate_element.

     Mode Desktop/Tablet (>=801px): node dikembalikan persis ke posisi semula di
     dalam .civilengineer-hdr-actions memakai penanda (comment node), jadi tidak ada
     perubahan apa pun pada tampilan maupun urutan tombol header.
     =========================================================================== */
  (function() {
    "use strict";

    var doc = document;
    if (!doc.querySelector || !window.matchMedia) return;

    var MOBILE = window.matchMedia("(max-width: 800px)");
    var anchor = null; /* penanda posisi asli di header */
    var box = null;    /* <li> pembungkus di dalam drawer */

    function node() {
      return doc.getElementById("lang-switch");
    }

    function rootUl() {
      return doc.querySelector("#cssmenu > ul");
    }

    /* Urutan wajib (v1.1.8): Pilih Bahasa -> Contact Form (Contact Form di
       posisi PALING AKHIR). Item "Contact Form" disuntikkan skrip lain, jadi
       posisinya dihitung ulang setiap sinkronisasi, bukan sekali saja.
       Selektor li.civilengineer-fs-li tetap dipertahankan sebagai cadangan dan aman
       walau elemennya tidak ada. */
    function placeBox(ul, li) {
      if (!ul || !li) return;
      var before = ul.querySelector("li.civilengineer-fs-li") || ul.querySelector("li.civilengineer-cf-li");
      if (before && before !== li) {
        if (li.nextSibling !== before) ul.insertBefore(li, before);
        return;
      }
      if (li.parentNode !== ul || li.nextSibling) ul.appendChild(li);
    }

    function ensureBox() {
      var ul = rootUl();
      if (!ul) return null;
      if (!box || !box.parentNode) {
        box = ul.querySelector("li.civilengineer-lang-li");
        if (!box) {
          box = doc.createElement("li");
          box.className = "civilengineer-lang-li";
        }
      }
      placeBox(ul, box);
      return box;
    }

    function closeMenu() {
      var el = node();
      if (!el || !el.classList.contains("open")) return;
      el.classList.remove("open");
      var btn = doc.getElementById("lang-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    }

    function toSidebar() {
      var el = node();
      if (!el) return;
      var li = ensureBox();
      if (!li) return;
      if (!anchor || !anchor.parentNode) {
        anchor = doc.createComment("civilengineer-lang-switch-home");
        if (el.parentNode) el.parentNode.insertBefore(anchor, el);
      }
      if (el.parentNode !== li) {
        closeMenu();
        li.appendChild(el);
      }
    }

    function toHeader() {
      var el = node();
      if (!el) return;
      if (anchor && anchor.parentNode && el.previousSibling !== anchor) {
        closeMenu();
        anchor.parentNode.insertBefore(el, anchor.nextSibling);
      }
      if (box && box.parentNode) box.parentNode.removeChild(box);
    }

    function sync() {
      if (MOBILE.matches) toSidebar();
      else toHeader();
    }

    function boot() {
      sync();
      if (MOBILE.addEventListener) MOBILE.addEventListener("change", sync);
      else if (MOBILE.addListener) MOBILE.addListener(sync);
      /* "Hubungi Kami" & "Ukuran Teks" bisa menyusul disuntikkan; ulangi
         penempatan beberapa kali agar urutannya tetap benar. */
      window.addEventListener("load", sync);
      setTimeout(sync, 400);
      setTimeout(sync, 1200);
    }

    if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", boot);
    else boot();
  })();


// --- module-37.js ---
(function() {
    var SCOPE = ".post-body-artikel";

    function qbody() {
      return document.querySelector(SCOPE) || document.querySelector("#body-post-it");
    }

    function isImageUrl(u) {
      return /\.(jpe?g|png|webp|gif|avif|bmp)(\?|$)/i.test(u || "") || /(googleusercontent|bp\.blogspot)\.com/i.test(u || "");
    }

    function upsize(u) {
      if (!u) return u;
      if (/(googleusercontent|bp\.blogspot)\.com/i.test(u)) {
        return u.replace(/\/(s|w|h)\d+(-[a-z0-9-]+)?\//i, "/s1600-rw-e365/").replace(/=(s|w|h)\d+(-[a-z0-9-]+)?$/i, "=s1600-rw-e365");
      }
      return u;
    }

    function fullSrc(img) {
      var a = img.closest ? img.closest("a") : null;
      if (a) {
        var h = a.getAttribute("href") || "";
        if (isImageUrl(h)) return h;
      }
      return upsize(img.currentSrc || img.src);
    }

    function eligible(img) {
      if (!img || img.tagName !== "IMG") return false;
      if (img.classList.contains("no-lightbox")) return false;
      if (img.closest("#inline-related-posts, .related-grid, .related-post, .adsbygoogle, .no-lightbox, .lang-menu")) return false;
      var w = img.naturalWidth || img.width || 0;
      if (w && w < 90) return false; // lewati ikon kecil
      return true;
    }

    function gallery() {
      var body = qbody();
      if (!body) return [];
      return Array.prototype.filter.call(body.querySelectorAll("img"), eligible);
    }

    var PHOTO_CREDIT = (function() {
      try {
        if (typeof civilEngineerSetting !== "undefined" && civilEngineerSetting && typeof civilEngineerSetting.imageCredit === "string") {
          return civilEngineerSetting.imageCredit;
        }
      } catch (e) {}
      return ""; // fallback: tidak tampil jika setting belum ada
    })();

    function capText(img) {
      var t = (img.getAttribute("title") || img.getAttribute("alt") || "").replace(/\s+/g, " ").trim();
      return t;
    }

    function fillCaption(container, img, num, total) {
      container.innerHTML = "";
      var text = capText(img);
      if (!text) return false;
      if (total > 1) {
        var label = document.createElement("span");
        label.className = "civilengineer-cap-label";
        label.textContent = "Gambar " + num + ":";
        container.appendChild(label);
        container.appendChild(document.createTextNode(" "));
      }
      container.appendChild(document.createTextNode(text));
      if (PHOTO_CREDIT) {
        container.appendChild(document.createTextNode(" "));
        var credit = document.createElement("span");
        credit.className = "civilengineer-cap-credit";
        credit.textContent = "Foto: " + PHOTO_CREDIT;
        container.appendChild(credit);
      }
      return true;
    }

    function injectCaptions() {
      var list2 = gallery();
      for (var i = 0; i < list2.length; i++) {
        var img = list2[i];
        if (img.closest(".tr-caption-container")) continue; // sudah ada caption bawaan Blogger, jangan dobel
        var anchor = img.closest("a") || img;
        if (anchor.nextElementSibling && anchor.nextElementSibling.classList && anchor.nextElementSibling.classList.contains("civilengineer-img-caption")) continue;
        var box = document.createElement("div");
        box.className = "civilengineer-img-caption";
        if (!fillCaption(box, img, i + 1, list2.length)) continue;
        anchor.parentNode.insertBefore(box, anchor.nextSibling);
      }
    }

    function injectZoomBadges() {
      var list3 = gallery();
      for (var i = 0; i < list3.length; i++) {
        var img = list3[i];
        var anchor = img.closest("a");
        if (!anchor) continue; // hanya pasang badge saat ada wrapper <a> agar posisi badge presisi menempel gambar
        if (anchor.querySelector(":scope > .civilengineer-zoom-badge")) continue;
        anchor.classList.add("civilengineer-zoom-anchor");
        var badge = document.createElement("span");
        badge.className = "civilengineer-zoom-badge";
        badge.setAttribute("aria-hidden", "true");
        badge.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/><path d="m21 21-4.34-4.34"/></svg><span>Perbesar</span>';
        anchor.appendChild(badge);
      }
    }

    var lb, imgEl, capEl, countEl, actEl, thumbsEl, list = [],
      idx = 0,
      zoomed = false,
      scale = 1;

    function build() {
      lb = document.createElement("div");
      lb.className = "civilengineer-lb";
      lb.setAttribute("role", "dialog");
      lb.setAttribute("aria-modal", "true");
      lb.innerHTML =
        '<div class="civilengineer-lb-count" id="civilengineerLbCount"></div>' +
        '<div class="civilengineer-lb-actions">' +
        '<button class="civilengineer-lb-btn civilengineer-lb-zoomout" type="button" aria-label="Perkecil"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/></svg></button>' +
        '<button class="civilengineer-lb-btn civilengineer-lb-zoomin" type="button" aria-label="Perbesar"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg></button>' +
        '<button class="civilengineer-lb-btn civilengineer-lb-close" type="button" aria-label="Tutup"><svg viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>' +
        '</div>' +
        '<button class="civilengineer-lb-btn civilengineer-lb-prev" type="button" aria-label="Sebelumnya"><svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg></button>' +
        '<button class="civilengineer-lb-btn civilengineer-lb-next" type="button" aria-label="Berikutnya"><svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></button>' +
        '<div class="civilengineer-lb-stage" id="civilengineerLbStage"><img class="civilengineer-lb-img" id="civilengineerLbImg" alt="" loading="lazy"/></div>' +
        '<div class="civilengineer-lb-bottom">' +
        '<div class="civilengineer-lb-cap" id="civilengineerLbCap"></div>' +
        '<div class="civilengineer-lb-thumbs" id="civilengineerLbThumbs"></div>' +
        '</div>';
      document.body.appendChild(lb);
      imgEl = lb.querySelector("#civilengineerLbImg");
      capEl = lb.querySelector("#civilengineerLbCap");
      countEl = lb.querySelector("#civilengineerLbCount");
      actEl = lb.querySelector(".civilengineer-lb-actions");
      thumbsEl = lb.querySelector("#civilengineerLbThumbs");
      lb.querySelector(".civilengineer-lb-close").addEventListener("click", close);
      lb.querySelector(".civilengineer-lb-zoomin").addEventListener("click", function(e) {
        e.stopPropagation();
        setScale(scale + 0.5, 50, 50);
      });
      lb.querySelector(".civilengineer-lb-zoomout").addEventListener("click", function(e) {
        e.stopPropagation();
        setScale(scale - 0.5, 50, 50);
      });
      lb.querySelector(".civilengineer-lb-prev").addEventListener("click", function(e) {
        e.stopPropagation();
        go(-1);
      });
      lb.querySelector(".civilengineer-lb-next").addEventListener("click", function(e) {
        e.stopPropagation();
        go(1);
      });
      lb.querySelector("#civilengineerLbStage").addEventListener("click", function(e) {
        if (e.target === imgEl) {
          toggleZoom(e);
        } else {
          close();
        }
      });
      lb.addEventListener("click", function(e) {
        if (e.target === lb) close();
      });
    }

    var MIN_SCALE = 1,
      MAX_SCALE = 3;

    function setScale(s, ox, oy) {
      scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, Math.round(s * 100) / 100));
      zoomed = scale > 1;
      lb.classList.toggle("zoomed", zoomed);
      if (zoomed) {
        imgEl.style.transformOrigin = (ox != null ? ox : 50) + "% " + (oy != null ? oy : 50) + "%";
        imgEl.style.transform = "scale(" + scale + ")";
      } else {
        imgEl.style.transform = "";
        imgEl.style.transformOrigin = "";
      }
      if (actEl) {
        actEl.querySelector(".civilengineer-lb-zoomout").toggleAttribute("disabled", scale <= MIN_SCALE);
        actEl.querySelector(".civilengineer-lb-zoomin").toggleAttribute("disabled", scale >= MAX_SCALE);
      }
    }

    function toggleZoom(e) {
      if (zoomed) {
        setScale(1);
        return;
      }
      var r = imgEl.getBoundingClientRect();
      var ox = ((e.clientX - r.left) / r.width) * 100,
        oy = ((e.clientY - r.top) / r.height) * 100;
      setScale(2, ox, oy);
    }

    function thumbSrc(img) {
      var u = img.currentSrc || img.src || "";
      if (/googleusercontent\.com|bp\.blogspot\.com/i.test(u)) {
        if (/=(s|w|h)\d+(-[a-z0-9-]+)?$/i.test(u)) {
          return u.replace(/=(s|w|h)\d+(-[a-z0-9-]+)?$/i, "=s150-c");
        }
        if (/\/(s|w|h)\d+(-[a-z0-9-]+)?\//i.test(u)) {
          return u.replace(/\/(s|w|h)\d+(-[a-z0-9-]+)?\//i, "/s150-c/");
        }
      }
      return u;
    }

    function buildThumbs() {
      if (!thumbsEl) return;
      thumbsEl.innerHTML = "";
      if (list.length < 2) return;
      for (var i = 0; i < list.length; i++) {
        (function(i) {
          var b = document.createElement("button");
          b.type = "button";
          b.className = "civilengineer-lb-thumb";
          b.setAttribute("aria-label", "Lihat gambar " + (i + 1));
          var im = document.createElement("img");
          im.src = thumbSrc(list[i]);
          im.alt = "";
          im.loading = "lazy";
          b.appendChild(im);
          b.addEventListener("click", function(e) {
            e.stopPropagation();
            idx = i;
            render();
          });
          thumbsEl.appendChild(b);
        })(i);
      }
    }

    function updateThumbActive() {
      if (!thumbsEl) return;
      var btns = thumbsEl.children;
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle("active", i === idx);
      }
    }

    function render() {
      var src = fullSrc(list[idx]);
      setScale(1);
      lb.classList.remove("shown");
      var pre = new Image();
      pre.onload = function() {
        imgEl.src = src;
        imgEl.alt = list[idx].alt || "";
        requestAnimationFrame(function() {
          lb.classList.add("shown");
        });
      };
      pre.onerror = function() {
        imgEl.src = list[idx].currentSrc || list[idx].src;
        lb.classList.add("shown");
      };
      pre.src = src;
      fillCaption(capEl, list[idx], idx + 1, list.length);
      countEl.textContent = (idx + 1) + " / " + list.length;
      lb.classList.toggle("single", list.length < 2);
      updateThumbActive();
    }

    function go(d) {
      idx = (idx + d + list.length) % list.length;
      render();
    }

    function open(startImg) {
      if (!lb) build();
      list = gallery();
      if (!list.length) return;
      idx = list.indexOf(startImg);
      if (idx < 0) idx = 0;
      document.body.classList.add("civilengineer-lb-lock");
      lb.classList.add("open");
      buildThumbs();
      render();
    }

    function close() {
      if (!lb) return;
      lb.classList.remove("open", "shown", "zoomed");
      document.body.classList.remove("civilengineer-lb-lock");
      imgEl.src = "";
    }

    function onClick(e) {
      var body = qbody();
      if (!body) return;
      var img = e.target.closest ? e.target.closest("img") : null;
      if (!img || !body.contains(img) || !eligible(img)) return;
      e.preventDefault();
      e.stopPropagation();
      if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      open(img);
    }

    function onKey(e) {
      if (!lb || !lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    }

    function init() {
      if (!qbody()) return;
      try {
        injectCaptions();
      } catch (e) {}
      try {
        injectZoomBadges();
      } catch (e) {}
      document.addEventListener("click", onClick, true);
      document.addEventListener("keydown", onKey);
    }
    if (document.readyState !== "loading") init();
    else document.addEventListener("DOMContentLoaded", init);
  })();


// --- module-38.js ---
/* ============================================================================
     CIVILENGINEER TABLE SCROLL -- HARDENED (v25)
     Setiap <table> di dalam badan artikel / halaman statis dipastikan berada di
     dalam satu kotak ber-overflow-x:auto (.civilengineer-table-wrap), sehingga tabel yang
     lebih lebar dari kolom artikel digeser di dalam kotaknya sendiri dan TIDAK
     pernah mendorong lebar halaman.

     Ciri khas versi ini dibanding versi lama:
     - <div style="overflow-x:auto"> buatan penulis artikel dipakai ulang
       (bukan dibungkus lagi), termasuk bila ditulis "overflow:auto",
       "overflow-x:scroll", huruf besar/kecil bebas, dengan/ tanpa spasi.
     - Tabel yang dimuat belakangan (iklan, lazy-load, komentar, konten yang
       disuntik skrip lain) tetap ikut terbungkus lewat MutationObserver.
     - Kotak diberi tabindex + role region supaya bisa digeser dengan keyboard.
     - Petunjuk kecil "Geser tabel ke samping" hanya muncul bila memang ada
       sisa lebar yang bisa digeser, dan hilang setelah digeser.
     ========================================================================= */
  (function() {
    "use strict";

    var WRAP = "civilengineer-table-wrap";
    var SEL_BODY = ".post-body-artikel, #body-post-it, .post-body";
    var SEL_TABLE = ".post-body-artikel table, #body-post-it table, .post-body table";
    var RE_SCROLL = /overflow(-x)?\s*:\s*(auto|scroll)/i;

    /* Apakah elemen ini memang kotak scroll milik penulis artikel? */
    function isManualScrollWrapper(el) {
      if (!el || el.nodeType !== 1 || el.tagName !== "DIV") return false;
      if (el.classList && el.classList.contains(WRAP)) return true;
      var st = el.getAttribute ? (el.getAttribute("style") || "") : "";
      if (RE_SCROLL.test(st)) return true;
      /* Cadangan: style sudah dinormalkan browser. */
      if (el.style) {
        var x = el.style.overflowX || el.style.overflow || "";
        if (x === "auto" || x === "scroll") return true;
      }
      return false;
    }

    function skip(t) {
      if (!t || t.nodeType !== 1) return true;
      if (t.classList && t.classList.contains("tr-caption-container")) return true;
      if (t.closest && t.closest(".tr-caption-container")) return true;
      /* Tabel tata letak milik widget/gadget Blogger dibiarkan apa adanya. */
      if (t.closest && t.closest(".widget-content .Profile, #layout")) return true;
      return false;
    }

    /* Pasang / pakai ulang kotak scroll untuk satu tabel. */
    function boxFor(t) {
      var p = t.parentElement;
      if (p && p.classList && p.classList.contains(WRAP)) return p;
      if (isManualScrollWrapper(p)) {
        p.classList.add(WRAP);
        return p;
      }
      var w = document.createElement("div");
      w.className = WRAP;
      t.parentNode.insertBefore(w, t);
      w.appendChild(t);
      return w;
    }

    /* Petunjuk geser + aksesibilitas, dipasang sekali per kotak. */
    function decorate(w) {
      if (w.getAttribute("data-civilengineer-tbl") === "1") return;
      w.setAttribute("data-civilengineer-tbl", "1");
      w.setAttribute("tabindex", "0");
      w.setAttribute("role", "region");
      w.setAttribute("aria-label", "Tabel bergeser ke samping");

      var hint = document.createElement("div");
      hint.className = "civilengineer-table-hint";
      hint.innerHTML = "<i>\u21C4</i>Geser tabel ke samping untuk melihat kolom lainnya";
      if (w.parentNode) w.parentNode.insertBefore(hint, w.nextSibling);

      /* Jaring pengaman: bila kotak ternyata LEBIH LEBAR dari layar, berarti
         ada elemen induk (grid/flex item ber-min-width:auto) yang ikut melar
         mengikuti lebar tabel. Lepaskan kuncinya sampai #post-wrapper. */
      function unlock() {
        if (w.getAttribute("data-civilengineer-unlock") === "1") return;
        w.setAttribute("data-civilengineer-unlock", "1");
        var el = w.parentElement,
          guard = 0;
        while (el && el !== document.body && guard++ < 30) {
          try {
            el.style.minWidth = "0px";
          } catch (e) {}
          if (el.id === "post-wrapper" || el.id === "wrapper") break;
          el = el.parentElement;
        }
      }

      function sync() {
        var vw = document.documentElement.clientWidth || 0;
        var can = (w.scrollWidth - w.clientWidth) > 2;
        if (!can && vw && w.clientWidth > vw + 1) {
          unlock();
          can = (w.scrollWidth - w.clientWidth) > 2;
        }
        if (can) hint.classList.add("is-on");
        else hint.classList.remove("is-on");
        if (can && w.scrollLeft > 6) hint.classList.add("is-done");
      }

      w.addEventListener("scroll", sync, {
        passive: true
      });
      if (window.ResizeObserver) {
        try {
          new ResizeObserver(sync).observe(w);
        } catch (e) {}
      }
      window.addEventListener("resize", sync, {
        passive: true
      });
      if (document.fonts && document.fonts.ready && document.fonts.ready.then) {
        document.fonts.ready.then(sync)["catch"](function() {});
      }
      sync();
      setTimeout(sync, 400);
      setTimeout(sync, 1500);
    }

    function wrapTables(root) {
      var scope = root && root.nodeType === 1 ? root : document;
      var list;
      try {
        list = (scope !== document && scope.matches && scope.matches(SEL_BODY)) ?
          scope.querySelectorAll("table") :
          scope.querySelectorAll(SEL_TABLE);
      } catch (e) {
        return;
      }
      for (var i = 0; i < list.length; i++) {
        var t = list[i];
        if (skip(t)) continue;
        try {
          decorate(boxFor(t));
        } catch (e) {}
      }
    }

    window.civilengineerWrapTables = wrapTables;

    function run() {
      wrapTables();
    }

    if (document.readyState !== "loading") run();
    else document.addEventListener("DOMContentLoaded", run);
    window.addEventListener("load", run);

    /* Konten artikel bisa berubah setelah halaman siap (iklan di tengah
       paragraf, lazy-load, "baca juga", dsb). Pantau badan artikel supaya
       tabel baru ikut terbungkus. */
    if (window.MutationObserver) {
      var pending = 0;

      function schedule() {
        if (pending) return;
        pending = setTimeout(function() {
          pending = 0;
          run();
        }, 120);
      }
      var mo = new MutationObserver(function(recs) {
        for (var i = 0; i < recs.length; i++) {
          if (recs[i].addedNodes && recs[i].addedNodes.length) {
            schedule();
            return;
          }
        }
      });

      function observe() {
        var hosts = document.querySelectorAll(SEL_BODY);
        for (var i = 0; i < hosts.length; i++) {
          try {
            mo.observe(hosts[i], {
              childList: true,
              subtree: true
            });
          } catch (e) {}
        }
      }
      if (document.readyState !== "loading") observe();
      else document.addEventListener("DOMContentLoaded", observe);
    }
  })();


// --- module-39.js ---
(function() {
    "use strict";

    /* ===== Util: label "Bulan Tahun" dari URL arsip ===== */
    var fmt = null;

    function monthLabel(y, m) {
      try {
        if (!fmt) {
          fmt = new Intl.DateTimeFormat(document.documentElement.lang || "id", {
            month: "long",
            year: "numeric"
          });
        }
        return fmt.format(new Date(y, m - 1, 1));
      } catch (e) {
        return ("0" + m).slice(-2) + "/" + y;
      }
    }

    function parseArchiveUrl(href) {
      if (!href) {
        return null;
      }
      var m = /\/(\d{4})\/(\d{2})\/?(?:[?#].*)?$/.exec(href) ||
        /\/(\d{4})_(\d{2})_\d{2}_archive\.html/.exec(href);
      if (m) {
        return { y: parseInt(m[1], 10), m: parseInt(m[2], 10) };
      }
      m = /\/(\d{4})\/?(?:[?#].*)?$/.exec(href);
      return m ? { y: parseInt(m[1], 10), m: 0 } : null;
    }

    function pad(n) {
      return ("0" + n).slice(-2);
    }

    /* ===== FLAT: pastikan label menampilkan "Bulan Tahun" ===== */
    function fixFlatLabels() {
      var links = document.querySelectorAll(".BlogArchive .archive-flat li.archivedate > a");
      Array.prototype.forEach.call(links, function(a) {
        var nameEl = a.querySelector(".af-name");
        var p = parseArchiveUrl(a.getAttribute("href"));
        if (!nameEl || !p || !p.m) {
          return;
        }
        if (nameEl.textContent.indexOf(String(p.y)) === -1) {
          nameEl.textContent = monthLabel(p.y, p.m);
        }
      });
    }

    /* ===== HIERARKI: toggle + lazy-load daftar artikel via feed ===== */
    function feedUrl(y, m, count) {
      var ny = m === 12 ? y + 1 : y;
      var nm = m === 12 ? 1 : m + 1;
      return "/feeds/posts/summary?alt=json&orderby=published&max-results=" + count +
        "&published-min=" + y + "-" + pad(m) + "-01T00:00:00" +
        "&published-max=" + ny + "-" + pad(nm) + "-01T00:00:00";
    }

    function buildPostList(entries) {
      var ul = document.createElement("ul");
      ul.className = "posts hierarchy";
      entries.forEach(function(en) {
        var href = "";
        (en.link || []).forEach(function(l) {
          if (l.rel === "alternate") {
            href = l.href;
          }
        });
        var li = document.createElement("li");
        li.className = "ah-post";
        var a = document.createElement("a");
        a.href = href;
        a.textContent = (en.title && en.title.$t) || href;
        li.appendChild(a);
        ul.appendChild(li);
      });
      return ul;
    }

    function ensurePosts(item) {
      var inner = item.querySelector(":scope > .ah-content > .ah-content-inner");
      if (!inner || inner.querySelector("ul")) {
        return; /* sudah ada daftar artikel / sub-interval */
      }
      if (item.getAttribute("data-ah-loaded") === "1") {
        return;
      }
      var link = item.querySelector(":scope > .ah-row a.post-count-link");
      var p = link ? parseArchiveUrl(link.getAttribute("href")) : null;
      if (!p || !p.m) {
        return; /* hanya level bulan yang dimuat via feed */
      }
      item.setAttribute("data-ah-loaded", "1");
      var badge = item.querySelector(":scope > .ah-row .post-count");
      var count = parseInt(badge && badge.textContent, 10) || 25;
      count = Math.min(Math.max(count, 1), 150);
      var ld = document.createElement("div");
      ld.className = "ah-loading";
      ld.textContent = "Memuat\u2026";
      inner.appendChild(ld);
      fetch(feedUrl(p.y, p.m, count))
        .then(function(r) {
          if (!r.ok) {
            throw new Error(r.status);
          }
          return r.json();
        })
        .then(function(json) {
          ld.remove();
          var entries = (json.feed && json.feed.entry) || [];
          if (!entries.length) {
            var em = document.createElement("div");
            em.className = "ah-empty";
            em.textContent = "Tidak ada artikel.";
            inner.appendChild(em);
            return;
          }
          inner.appendChild(buildPostList(entries));
        })
        .catch(function() {
          item.removeAttribute("data-ah-loaded");
          ld.className = "ah-loading ah-error";
          ld.setAttribute("role", "button");
          ld.setAttribute("tabindex", "0");
          ld.textContent = "Gagal memuat \u2014 klik untuk coba lagi";
          ld.addEventListener("click", function() {
            ld.remove();
            ensurePosts(item);
          }, { once: true });
        });
    }

    function setExpanded(item, expanded) {
      item.classList.toggle("is-collapsed", !expanded);
      var btn = item.querySelector(":scope > .ah-row .ah-toggle");
      if (btn) {
        btn.setAttribute("aria-expanded", expanded ? "true" : "false");
      }
    }

    function bindHierarchy(root) {
      if (root.getAttribute("data-ah-bound") === "1") {
        return;
      }
      root.setAttribute("data-ah-bound", "1");

      /* Kondisi awal: tutup item tanpa daftar artikel (bulan aktif tetap terbuka) */
      var items = root.querySelectorAll(".ah-item");
      Array.prototype.forEach.call(items, function(item) {
        if (!item.querySelector(":scope > .ah-content ul.posts") &&
          !item.querySelector(":scope .ah-content ul.posts")) {
          setExpanded(item, false);
        }
      });

      root.addEventListener("click", function(e) {
        var btn = e.target.closest ? e.target.closest(".ah-toggle") : null;
        if (!btn || !root.contains(btn)) {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        var item = btn.closest(".ah-item");
        if (!item) {
          return;
        }
        var willExpand = item.classList.contains("is-collapsed");
        setExpanded(item, willExpand);
        if (willExpand) {
          ensurePosts(item);
        }
      });

      root.addEventListener("click", function(e) {
        if (e.target.closest && (e.target.closest("a") || e.target.closest(".ah-toggle"))) {
          return;
        }
        var row = e.target.closest ? e.target.closest(".ah-row") : null;
        if (!row || !root.contains(row)) {
          return;
        }
        var btn = row.querySelector(".ah-toggle");
        if (btn) {
          btn.click();
        }
      });
    }

    /* ===== DROPDOWN: label "Bulan Tahun" + panel kustom profesional ===== */
    function enhanceDropdown(wrap) {
      if (wrap.getAttribute("data-ad-bound") === "1") {
        return;
      }
      wrap.setAttribute("data-ad-bound", "1");
      var selectWrap = wrap.querySelector(".ad-select-wrap");
      var select = wrap.querySelector("select");
      if (!selectWrap || !select) {
        return;
      }

      var opts = [];
      Array.prototype.forEach.call(select.options, function(o) {
        if (!o.value) {
          return;
        }
        var p = parseArchiveUrl(o.value);
        var cm = /\((\d+)\)\s*$/.exec(o.textContent);
        var count = cm ? cm[1] : "";
        var label = (p && p.m) ? monthLabel(p.y, p.m) :
          o.textContent.replace(/\s*\(\d+\)\s*$/, "");
        o.textContent = label + (count ? " (" + count + ")" : "");
        opts.push({ url: o.value, label: label, count: count });
      });

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ad-btn";
      btn.setAttribute("aria-haspopup", "listbox");
      btn.setAttribute("aria-expanded", "false");
      var btnText = document.createElement("span");
      btnText.className = "ad-btn-text";
      btnText.textContent = (select.options[0] && select.options[0].textContent) || "Pilih Arsip\u2026";
      btn.appendChild(btnText);
      var caret = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      caret.setAttribute("viewBox", "0 0 24 24");
      caret.setAttribute("class", "ad-caret");
      caret.setAttribute("aria-hidden", "true");
      caret.innerHTML = "<path d='M7.4 8.6 12 13.2l4.6-4.6L18 10l-6 6-6-6 1.4-1.4Z'/>";
      btn.appendChild(caret);

      var panel = document.createElement("ul");
      panel.className = "ad-panel";
      panel.setAttribute("role", "listbox");
      panel.hidden = true;
      opts.forEach(function(op) {
        var li = document.createElement("li");
        li.className = "ad-opt";
        li.setAttribute("role", "option");
        li.tabIndex = -1;
        li.setAttribute("data-url", op.url);
        var nm = document.createElement("span");
        nm.className = "ad-opt-name";
        nm.textContent = op.label;
        li.appendChild(nm);
        if (op.count) {
          var bd = document.createElement("span");
          bd.className = "ad-badge";
          bd.textContent = op.count;
          li.appendChild(bd);
        }
        panel.appendChild(li);
      });

      function close() {
        if (panel.hidden) {
          return;
        }
        panel.hidden = true;
        wrap.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      }

      function open() {
        panel.hidden = false;
        wrap.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        var first = panel.querySelector(".ad-opt");
        if (first) {
          first.focus();
        }
      }

      btn.addEventListener("click", function() {
        if (panel.hidden) {
          open();
        } else {
          close();
        }
      });

      panel.addEventListener("click", function(e) {
        var li = e.target.closest ? e.target.closest(".ad-opt") : null;
        if (li) {
          window.location.href = li.getAttribute("data-url");
        }
      });

      panel.addEventListener("keydown", function(e) {
        var items = Array.prototype.slice.call(panel.querySelectorAll(".ad-opt"));
        var idx = items.indexOf(document.activeElement);
        if (e.key === "ArrowDown") {
          e.preventDefault();
          (items[idx + 1] || items[0]).focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          (items[idx - 1] || items[items.length - 1]).focus();
        } else if (e.key === "Home") {
          e.preventDefault();
          items[0].focus();
        } else if (e.key === "End") {
          e.preventDefault();
          items[items.length - 1].focus();
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (idx > -1) {
            window.location.href = items[idx].getAttribute("data-url");
          }
        } else if (e.key === "Escape") {
          close();
          btn.focus();
        }
      });

      document.addEventListener("click", function(e) {
        if (!wrap.contains(e.target)) {
          close();
        }
      });
      document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
          close();
        }
      });

      selectWrap.appendChild(btn);
      selectWrap.appendChild(panel);
      wrap.classList.add("is-enhanced");
    }

    function init() {
      fixFlatLabels();
      Array.prototype.forEach.call(
        document.querySelectorAll(".BlogArchive .archive-hierarchy"), bindHierarchy);
      Array.prototype.forEach.call(
        document.querySelectorAll(".BlogArchive .archive-dropdown"), enhanceDropdown);
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  })();


// --- module-40.js ---
(function() {
    var w = (window.civilEngineerSetting && window.civilEngineerSetting.protectionWidget) || {};
    var legacy = (window.civilEngineerSetting && window.civilEngineerSetting.protection) || {};

    function on(key, legacyKey) {
      var v = w[key];
      if (typeof v === "string") return v.replace(/^https?:\/\//, "").trim().toLowerCase() === "on";
      if (legacyKey && legacy[legacyKey]) return true;
      return false;
    }
    var F = {
      rightClick: on("rightClick", "rightClick"),
      copy: on("copy", "copyPaste"),
      cut: on("cut", "copyPaste"),
      paste: on("paste"),
      dragImage: on("dragImage", "copyPaste"),
      textSelection: on("textSelection", "copyPaste"),
      ctrlC: on("ctrlC", "copyPaste"),
      ctrlU: on("ctrlU"),
      ctrlS: on("ctrlS"),
      ctrlShiftI: on("ctrlShiftI"),
      f12: on("f12")
    };
    var any = false;
    for (var k in F) {
      if (F[k]) {
        any = true;
        break;
      }
    }
    if (!any) return;
    var MSG = (typeof w.message === "string" && w.message !== "" && w.message !== "-" ? w.message : legacy.message) || "";

    function allowed(t) {
      try {
        return t && t.closest && t.closest("input,textarea,select,[contenteditable=true],.allow-copy");
      } catch (e) {
        return false;
      }
    }
    var toastT = null;

    function toast() {
      if (!MSG) return;
      var el = document.getElementById("civilengineerProtToast");
      if (!el) {
        el = document.createElement("div");
        el.id = "civilengineerProtToast";
        el.className = "civilengineer-prot-toast";
        el.textContent = MSG;
        document.body.appendChild(el);
      }
      el.classList.add("show");
      if (toastT) clearTimeout(toastT);
      toastT = setTimeout(function() {
        el.classList.remove("show");
      }, 1800);
    }

    function block(e) {
      if (allowed(e.target)) return;
      e.preventDefault();
      toast();
    }

    function init() {
      if (F.rightClick) document.addEventListener("contextmenu", block);
      if (F.copy) document.addEventListener("copy", block);
      if (F.cut) document.addEventListener("cut", block);
      if (F.paste) document.addEventListener("paste", block);
      if (F.dragImage) document.addEventListener("dragstart", function(e) {
        var t = e.target;
        if (t && t.tagName === "IMG" && !allowed(t)) {
          e.preventDefault();
        }
      });
      if (F.textSelection) document.documentElement.classList.add("civilengineer-noselect");
      document.addEventListener("keydown", function(e) {
        var k = (e.key || "").toLowerCase();

        if (F.f12 && (k === "f12" || e.keyCode === 123)) {
          e.preventDefault();
          toast();
          return;
        }

        if (F.ctrlShiftI && (e.ctrlKey || e.metaKey) && e.shiftKey && (k === "i" || k === "j" || k === "c")) {
          e.preventDefault();
          toast();
          return;
        }
        if (!(e.ctrlKey || e.metaKey) || e.shiftKey) return;
        if (F.ctrlC && k === "c") {
          if (allowed(e.target)) return;
          e.preventDefault();
          toast();
          return;
        }
        if (F.ctrlC && k === "x") {
          if (allowed(e.target)) return;
          e.preventDefault();
          toast();
          return;
        }
        if (F.ctrlU && k === "u") {
          e.preventDefault();
          toast();
          return;
        }
        if (F.ctrlS && k === "s") {
          e.preventDefault();
          toast();
          return;
        }
      });
    }
    if (document.readyState !== "loading") init();
    else document.addEventListener("DOMContentLoaded", init);
  })();


// --- module-41.js ---
(function() {
    var KEY = "civilengineer_consent";
    var cfg = (window.civilEngineerSetting && window.civilEngineerSetting.consent) || {};
    var TXT = {
      title: cfg.title || "Kami menghargai privasi Anda",
      body: cfg.body || "Situs ini menggunakan cookie untuk meningkatkan pengalaman, menganalisis lalu lintas, dan menayangkan iklan yang relevan. Anda dapat memilih preferensi Anda.",
      privacyUrl: cfg.privacyUrl || "/p/privacy-policy.html",
      accept: cfg.accept || "Terima Semua",
      reject: cfg.reject || "Tolak",
      settings: cfg.settings || "Pengaturan",
      save: cfg.save || "Simpan Pilihan",
      prefTitle: cfg.prefTitle || "Preferensi Cookie",
      prefBody: cfg.prefBody || "Kelola izin untuk setiap kategori cookie di bawah ini."
    };

    function gtag() {
      (window.dataLayer = window.dataLayer || []).push(arguments);
    }

    function load() {
      try {
        return JSON.parse(localStorage.getItem(KEY) || "null");
      } catch (e) {
        return null;
      }
    }

    function save(o) {
      o.ts = Date.now();
      try {
        localStorage.setItem(KEY, JSON.stringify(o));
      } catch (e) {}
      try {
        document.cookie = "civilengineer_consent=" + (o.ad ? "1" : "0") + (o.analytics ? "1" : "0") + "; path=/; max-age=31536000; SameSite=Lax";
      } catch (e) {}
    }

    function applyConsent(o) {
      var ad = o.ad ? "granted" : "denied",
        an = o.analytics ? "granted" : "denied";
      gtag("consent", "update", {
        ad_storage: ad,
        ad_user_data: ad,
        ad_personalization: ad,
        analytics_storage: an
      });
    }

    function el(tag, cls, html) {
      var e = document.createElement(tag);
      if (cls) e.className = cls;
      if (html != null) e.innerHTML = html;
      return e;
    }
    var COOKIE_SVG = '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10 3.5 3.5 0 0 1-4-4 3 3 0 0 1-3-3 4 4 0 0 1-3-3zm-3 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-6 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>';

    var banner, modal, fab, cbAd, cbAn;

    function buildFab() {
      fab = el("button", "civilengineer-cc-fab", COOKIE_SVG);
      fab.type = "button";
      fab.setAttribute("aria-label", TXT.prefTitle);
      fab.addEventListener("click", openModal);
      document.body.appendChild(fab);
    }

    function showFab() {
      if (fab) fab.classList.add("show");
    }

    function buildBanner() {
      banner = el("div", "civilengineer-cc");
      banner.setAttribute("role", "dialog");
      banner.setAttribute("aria-label", TXT.title);
      banner.appendChild(el("div", "civilengineer-cc-title", COOKIE_SVG + "<span>" + TXT.title + "</span>"));
      banner.appendChild(el("p", null, TXT.body + ' <a href="' + TXT.privacyUrl + '">' + "Kebijakan Privasi" + '</a>.'));
      var act = el("div", "civilengineer-cc-actions");
      var bSet = el("button", "civilengineer-cc-btn", TXT.settings);
      bSet.type = "button";
      var bRej = el("button", "civilengineer-cc-btn", TXT.reject);
      bRej.type = "button";
      var bAcc = el("button", "civilengineer-cc-btn primary", TXT.accept);
      bAcc.type = "button";
      act.appendChild(bSet);
      act.appendChild(bRej);
      act.appendChild(bAcc);
      banner.appendChild(act);
      document.body.appendChild(banner);
      requestAnimationFrame(function() {
        banner.classList.add("show");
      });
      bAcc.addEventListener("click", function() {
        choose({
          ad: true,
          analytics: true
        });
      });
      bRej.addEventListener("click", function() {
        choose({
          ad: false,
          analytics: false
        });
      });
      bSet.addEventListener("click", openModal);
    }

    function hideBanner() {
      if (banner) {
        banner.classList.remove("show");
        setTimeout(function() {
          if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
          banner = null;
        }, 320);
      }
    }

    function buildModal() {
      modal = el("div", "civilengineer-cc-modal");
      var back = el("div", "civilengineer-cc-back");
      var panel = el("div", "civilengineer-cc-panel");
      panel.appendChild(el("h3", null, TXT.prefTitle));
      panel.appendChild(el("p", null, TXT.prefBody));
      panel.appendChild(cat("Diperlukan", "Selalu aktif. Cookie penting agar situs berfungsi dengan baik (keamanan, preferensi dasar).", true, true, "nec").node);
      var catAn = cat("Analitik", "Membantu kami memahami cara pengunjung menggunakan situs agar dapat ditingkatkan.", false, false, "an");
      var catAd = cat("Iklan", "Digunakan untuk menampilkan iklan yang lebih relevan (Google AdSense).", false, false, "ad");
      panel.appendChild(catAn.node);
      panel.appendChild(catAd.node);
      cbAn = catAn.input;
      cbAd = catAd.input;
      var acts = el("div", "civilengineer-cc-modal-actions");
      var bRej = el("button", "civilengineer-cc-btn", TXT.reject);
      bRej.type = "button";
      var bSave = el("button", "civilengineer-cc-btn primary", TXT.save);
      bSave.type = "button";
      acts.appendChild(bRej);
      acts.appendChild(bSave);
      panel.appendChild(acts);
      modal.appendChild(back);
      modal.appendChild(panel);
      document.body.appendChild(modal);
      back.addEventListener("click", closeModal);
      bRej.addEventListener("click", function() {
        choose({
          ad: false,
          analytics: false
        });
      });
      bSave.addEventListener("click", function() {
        choose({
          ad: !!cbAd.checked,
          analytics: !!cbAn.checked
        });
      });
    }

    function cat(name, desc, checked, locked, id) {
      var wrap = el("div", "civilengineer-cc-cat");
      var info = el("div", "civilengineer-cc-cat-info", "<strong>" + name + "</strong><span>" + desc + "</span>");
      var sw = el("label", "civilengineer-cc-sw");
      var input = el("input");
      input.type = "checkbox";
      input.checked = checked;
      if (locked) input.disabled = true;
      var knob = el("i");
      sw.appendChild(input);
      sw.appendChild(knob);
      wrap.appendChild(info);
      wrap.appendChild(sw);
      return {
        node: wrap,
        input: input
      };
    }

    function openModal() {
      if (!modal) buildModal();
      var cur = load();
      if (cbAn) cbAn.checked = cur ? !!cur.analytics : false;
      if (cbAd) cbAd.checked = cur ? !!cur.ad : false;
      modal.classList.add("open");
    }

    function closeModal() {
      if (modal) modal.classList.remove("open");
    }

    function choose(o) {
      save(o);
      applyConsent(o);
      hideBanner();
      closeModal();
      showFab();
    }

    window.civilengineerOpenConsent = openModal;

    function init() {
      var wired = document.querySelectorAll(".open-cookie-settings");
      for (var i = 0; i < wired.length; i++) {
        wired[i].addEventListener("click", function(e) {
          e.preventDefault();
          openModal();
        });
      }
      buildFab();
      var cur = load();
      if (!cur) {
        buildBanner();
      } else {
        applyConsent(cur);
        showFab();
      }
    }
    if (document.readyState !== "loading") init();
    else document.addEventListener("DOMContentLoaded", init);
  })();


// --- module-43.js ---
(function() {
    var grid = document.querySelector(".blog-posts.is-grid");
    if (!grid) return;
    var path = location.pathname,
      qs = location.search;
    if (/[?&]q=/.test(qs)) return; // hasil pencarian: lewati
    if (/\.html$/.test(path)) return; // postingan/halaman: lewati
    var isHome = path === "/" || path === "/index.html";
    var initial = grid.querySelectorAll(".post-outer");
    if (!initial.length) return;
    var perPage = initial.length;

    var cfg = (window.civilEngineerSetting && window.civilEngineerSetting.loadMore) || {};
    var AUTO = cfg.auto !== false; // default: infinite auto
    var TXT_MORE = cfg.text || "Muat Lainnya";
    var TXT_END = cfg.endText || "Semua postingan telah dimuat";

    function labelFromPath() {
      var m = /\/search\/label\/([^/?#]+)/.exec(path + qs);
      return m ? decodeURIComponent(m[1]) : null;
    }

    function postHref(card) {
      var a = card.querySelector("h2.post-title a, .post-title a, .entry-title a, a");
      return a ? a.getAttribute("href") : null;
    }

    /* Gunakan identitas artikel yang sama dengan Grid Fill. Dengan begitu,
       kartu hasil pengisian ringkasan atau kartu dari URL Blogspot/kustom
       tetap dianggap satu artikel oleh "Muat Lainnya". */
    function postKey(value) {
      if (!value) return "";
      try {
        var u = new URL(value, location.href);
        return (u.pathname || "/").replace(/\/+$/, "") || "/";
      } catch (e) {
        return String(value).split("#")[0].split("?")[0]
          .replace(/^https?:\/\/[^/]+/i, "").replace(/\/+$/, "") || "/";
      }
    }

    var seen = {};
    function syncSeen() {
      Array.prototype.forEach.call(grid.querySelectorAll(".post-outer"), function(c) {
        var key = postKey(postHref(c));
        if (key) seen[key] = 1;
      });
    }
    syncSeen();

    /* Jangan merakit URL halaman berikutnya dari tanggal card. Markup card
       menampilkan tanggal publikasi, sedangkan updated-max bekerja pada
       urutan pembaruan; keduanya bisa berbeda setelah artikel diedit atau
       diberi Jump Break dan satu artikel dapat terlewati di batas halaman.
       Gunakan URL olderPageUrl yang dihitung Blogger untuk setiap halaman. */
    function pageKey(value) {
      if (!value) return "";
      try {
        var u = new URL(value, location.href);
        return u.pathname + u.search;
      } catch (e) {
        return String(value).split("#")[0];
      }
    }

    function olderPageHref(scope) {
      var pager = scope.querySelector("#blog-pager");
      var value = pager && pager.getAttribute("data-civilengineer-older-page");
      if (!value) {
        var link = scope.querySelector("#blog-pager-older-link a[href], .blog-pager-older-link[href]");
        value = link && link.getAttribute("href");
      }
      if (!value) return null;
      try {
        return new URL(value, location.href).href;
      } catch (e) {
        return value;
      }
    }

    var nextPageHref = olderPageHref(document);

    function nextURL() {
      return nextPageHref;
    }

    /* Waktu baca kartu hasil "Muat Lainnya" memakai mesin utama
       (window.civilengineerApplyReadingTime) supaya angkanya ikut dikoreksi dari
       isi lengkap artikel, bukan sekadar estimasi sampel. */
    function fillReadingTime(scope) {
      var root = scope || document;
      if (typeof window.civilengineerApplyReadingTime === "function") {
        window.civilengineerApplyReadingTime(root);
        return;
      }
      var wpm = 225;
      Array.prototype.forEach.call(root.querySelectorAll(".reading-time-info[data-sample]"), function(ph) {
        var sample = ph.getAttribute("data-sample") || "";
        var words = (sample.trim().match(/\S+/g) || []).length;
        var min = Math.max(1, Math.round(words / wpm));
        var plus = sample.length >= 7900 ? "+" : "";
        var txt = ph.querySelector(".reading-time-text");
        if (txt) txt.textContent = min + plus + " Menit Membaca";
        ph.hidden = false;
        ph.removeAttribute("data-sample");
      });
    }

    var loading = false,
      done = false,
      finalizing = false,
      retryCount = 0,
      wrap, btn, io;

    function entryHref(entry) {
      var links = (entry && entry.link) || [];
      for (var i = 0; i < links.length; i++) {
        if (links[i].rel === "alternate" && links[i].href) return links[i].href;
      }
      return "";
    }

    function reorderCardsByFeed(feedOrder) {
      var cards = grid.querySelectorAll(".post-outer");
      if (cards.length < 2) return;
      var list = [];
      Array.prototype.forEach.call(cards, function(card, index) {
        var key = postKey(postHref(card));
        list.push({
          card: card,
          index: index,
          order: Object.prototype.hasOwnProperty.call(feedOrder, key) ? feedOrder[key] : Infinity
        });
      });
      list.sort(function(a, b) {
        return a.order === b.order ? a.index - b.index : a.order - b.order;
      });
      var marker = document.createComment("civilengineer-card-order");
      grid.insertBefore(marker, cards[0]);
      var fragment = document.createDocumentFragment();
      Array.prototype.forEach.call(list, function(item) {
        fragment.appendChild(item.card);
      });
      grid.insertBefore(fragment, marker);
      marker.parentNode.removeChild(marker);
    }

    function appendRecoveredCards(entries) {
      var added = 0;
      Array.prototype.forEach.call(entries || [], function(entry) {
        var key = postKey(entryHref(entry));
        if (!key || seen[key] || typeof window.civilengineerCreatePostCard !== "function") return;
        var box = document.createElement("div");
        box.innerHTML = window.civilengineerCreatePostCard(entry);
        var node = box.firstElementChild;
        if (!node) return;
        seen[key] = 1;
        node.classList.add("civilengineer-lm-new");
        grid.appendChild(node);
        added++;
      });
      if (!added) return 0;
      fillReadingTime(grid);
      if (window.civilengineerThumbRescan) {
        try { window.civilengineerThumbRescan(); } catch (e) {}
      }
      if (window.civilengineerGuardSnippets) {
        try { window.civilengineerGuardSnippets(grid); } catch (e) {}
      }
      requestAnimationFrame(function() {
        Array.prototype.forEach.call(grid.querySelectorAll(".post-outer.civilengineer-lm-new"), function(node) {
          node.classList.add("in");
          node.classList.remove("civilengineer-lm-new");
        });
      });
      return added;
    }

    /* Audit terakhir hanya di beranda, karena jumlah feed tersebut mewakili
       seluruh artikel publik. Jika pagination server berhenti sebelum semua
       artikel tampil, feed dipindai per-batch dan hanya entri yang belum ada
       yang ditambahkan. start-index Blogger bersifat 1-based; karena itu
       proses ini tidak dibatasi 500 artikel. */
    function recoverMissingCards() {
      if (!isHome || typeof window.civilengineerCreatePostCard !== "function") {
        return Promise.resolve();
      }
      return fetch("/feeds/posts/summary?alt=json&orderby=published&max-results=1", {
        credentials: "same-origin"
      }).then(function(response) {
        if (!response.ok) throw 0;
        return response.json();
      }).then(function(data) {
        var feed = data && data.feed;
        var total = parseInt(feed && feed.openSearch$totalResults && feed.openSearch$totalResults.$t, 10) || 0;
        if (!total || Object.keys(seen).length >= total) return;
        var start = 1,
          batchSize = 100,
          recovered = 0,
          feedOrder = {};
        function fetchBatch() {
          if (start > total || Object.keys(seen).length >= total) return Promise.resolve();
          return fetch("/feeds/posts/summary?alt=json&orderby=published&start-index=" + start + "&max-results=" + batchSize, {
            credentials: "same-origin"
          }).then(function(response) {
            if (!response.ok) throw 0;
            return response.json();
          }).then(function(page) {
            var entries = (page && page.feed && page.feed.entry) || [];
            if (!entries.length) return;
            Array.prototype.forEach.call(entries, function(entry, index) {
              var key = postKey(entryHref(entry));
              if (key) feedOrder[key] = start + index;
            });
            recovered += appendRecoveredCards(entries);
            start += entries.length;
            return fetchBatch();
          });
        }
        return fetchBatch().then(function() {
          if (recovered) reorderCardsByFeed(feedOrder);
        });
      }).catch(function() {
        /* Kegagalan audit tidak mengubah kartu yang sudah berhasil dimuat. */
      });
    }

    function completePagination() {
      if (done || finalizing) return;
      finalizing = true;
      setState("loading");
      recoverMissingCards().then(function() {
        finalizing = false;
        finish();
      }, function() {
        finalizing = false;
        finish();
      });
    }

    function build() {
      wrap = document.createElement("div");
      wrap.className = "civilengineer-lm-wrap";
      btn = document.createElement("button");
      btn.type = "button";
      btn.className = "civilengineer-lm-btn";
      btn.innerHTML = '<span class="civilengineer-lm-spin"></span><span class="civilengineer-lm-ico" aria-hidden="true">&#8595;</span><span class="civilengineer-lm-label"></span>';
      btn.querySelector(".civilengineer-lm-label").textContent = TXT_MORE;
      wrap.appendChild(btn);
      var pager = document.getElementById("blog-pager");
      if (pager) {
        pager.classList.add("civilengineer-lm-hide");
        pager.parentNode.insertBefore(wrap, pager);
      } else {
        grid.parentNode.insertBefore(wrap, grid.nextSibling);
      }
      btn.addEventListener("click", function() { load(); });
      if (!nextPageHref) {
        completePagination();
        return;
      }
      if (AUTO && "IntersectionObserver" in window) {
        io = new IntersectionObserver(function(en) {
          en.forEach(function(e) {
            if (e.isIntersecting) load();
          });
        }, {
          rootMargin: "600px 0px"
        });
        io.observe(btn);
      }
    }

    function setState(s) {
      if (!btn) return;
      btn.classList.toggle("loading", s === "loading");
      btn.disabled = (s === "loading");
    }

    function finish() {
      done = true;
      if (io) io.disconnect();
      if (wrap) {
        wrap.innerHTML = '<div class="civilengineer-lm-end">' + TXT_END + '</div>';
      }
    }

    function load(forcedUrl) {
      if (loading || done || finalizing) return;
      /* Grid Fill berjalan asinkron. Kartu yang mungkin telah disisipkan sejak
         inisialisasi harus masuk ke daftar seen sebelum halaman berikutnya
         diproses, supaya tidak muncul kartu kedua untuk artikel yang sama. */
      syncSeen();
      var url = forcedUrl || nextURL();
      if (!url) {
        completePagination();
        return;
      }
      loading = true;
      setState("loading");
      fetch(url, {
          credentials: "same-origin"
        })
        .then(function(r) {
          if (!r.ok) throw 0;
          return r.text();
        })
        .then(function(html) {
          var doc = new DOMParser().parseFromString(html, "text/html");
          var ng = doc.querySelector(".blog-posts.is-grid");
          var cards = ng ? ng.querySelectorAll(".post-outer") : [];
          var followingHref = olderPageHref(doc);
          var frag = document.createDocumentFragment(),
            added = 0;
          Array.prototype.forEach.call(cards, function(c) {
            var key = postKey(postHref(c));
            if (!key || seen[key]) return;
            seen[key] = 1;
            var node = document.importNode(c, true);
            node.classList.add("civilengineer-lm-new");
            frag.appendChild(node);
            added++;
          });
          if (!added) {
            /* Sebelum menyimpulkan "sudah habis", coba dulu tautan
               "older link" dari halaman yang baru diambil. Ini mencegah
               infinite scroll berhenti prematur akibat satu halaman yang
               gagal menyumbang kartu baru (misalnya karena artikel dengan
               blok CSS/JS yang belum diberi Jump Break). */
            nextPageHref = followingHref;
            loading = false;
            if (followingHref && pageKey(followingHref) !== pageKey(url) && retryCount < 3) {
              retryCount++;
              load(followingHref);
              return;
            }
            completePagination();
            return;
          }
          retryCount = 0;
          nextPageHref = followingHref;
          grid.appendChild(frag);
          fillReadingTime(grid);
          if (window.civilengineerThumbRescan) {
            try {
              window.civilengineerThumbRescan();
            } catch (e) {}
          }
          if (window.civilengineerGuardSnippets) {
            try {
              window.civilengineerGuardSnippets(grid);
            } catch (e) {}
          }
          requestAnimationFrame(function() {
            Array.prototype.forEach.call(grid.querySelectorAll(".post-outer.civilengineer-lm-new"), function(n) {
              n.classList.add("in");
              n.classList.remove("civilengineer-lm-new");
            });
          });
          loading = false;
          if (!nextPageHref) completePagination();
          else setState("idle");
        })
        .catch(function() {
          loading = false;
          setState("idle");
        });
    }

    if (document.readyState !== "loading") build();
    else document.addEventListener("DOMContentLoaded", build);
  })();


// --- module-44.js ---
(function() {
    var cfg = (window.civilEngineerSetting && window.civilEngineerSetting.progress) || {};
    if (cfg.enabled === false) return;

    function init() {
      var art = document.querySelector(".post-body-artikel, #body-post-it");
      if (!art) return; // aktif di Postingan (.post-body-artikel) & Halaman Statis (#body-post-it)
      var bar = document.createElement("div");
      bar.className = "civilengineer-progress";
      bar.setAttribute("aria-hidden", "true");
      if (cfg.height) {
        bar.style.height = (parseInt(cfg.height, 10) || 3) + "px";
      }
      document.body.appendChild(bar);
      var ticking = false;

      function update() {
        ticking = false;
        var rect = art.getBoundingClientRect();
        var vh = window.innerHeight || document.documentElement.clientHeight;
        var total = rect.height - vh; // jarak gulir di dalam artikel
        var scrolled = -rect.top;
        var p = total > 0 ? (scrolled / total) : (rect.top <= 0 ? 1 : 0);
        if (p < 0) p = 0;
        if (p > 1) p = 1;
        bar.style.width = (p * 100).toFixed(2) + "%";
      }

      function onScroll() {
        if (!ticking) {
          ticking = true;
          (window.requestAnimationFrame || function(f) {
            setTimeout(f, 16);
          })(update);
        }
      }
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      document.addEventListener("scroll", onScroll, true); // capture: tangkap scroll dari body/kontainer
      window.addEventListener("resize", onScroll);
      window.addEventListener("load", onScroll);
      update();
    }
    if (document.readyState !== "loading") init();
    else document.addEventListener("DOMContentLoaded", init);
  })();


// --- module-45.js ---
(function() {
    var cfg = (window.civilEngineerSetting && window.civilEngineerSetting.print) || {};

    function init() {
      var art = document.querySelector(".post-body-artikel, #body-post-it");
      if (!art) return; // aktif di Postingan (.post-body-artikel) & Halaman Statis (#body-post-it)
      var canon = document.querySelector("link[rel='canonical']");
      var url = (canon && canon.href) || location.href;
      var siteMeta = document.querySelector("meta[property='og:site_name']");
      var titleEl = document.querySelector(".header .title, .header-logo");
      var site = (siteMeta && siteMeta.content) || (titleEl && titleEl.textContent) || document.title || "";
      site = String(site).replace(/\s+/g, " ").trim();
      if (!art.querySelector(".civilengineer-print-src")) {
        var s = document.createElement("div");
        s.className = "civilengineer-print-src";
        s.textContent = (cfg.sourceLabel || "Sumber") + ": " + site + " — " + url;
        art.appendChild(s);
      }
      if (cfg.button !== false) {
        var share = document.querySelector(".share-box .share-btns") || document.querySelector(".share-box");
        if (share && !document.querySelector(".civilengineer-print-btn")) {
          var b = document.createElement("button");
          b.type = "button";
          b.className = "share-btn civilengineer-print-btn no-print";
          b.setAttribute("aria-label", "Cetak artikel");
          b.title = cfg.buttonTitle || "Cetak / Simpan PDF";
          b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 8H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3zm-3 11H8v-5h8v5zm5-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM18 3H6v4h12V3z"/></svg>';
          b.addEventListener("click", function() {
            try {
              window.print();
            } catch (e) {}
          });
          share.appendChild(b);
        }
      }
    }
    if (document.readyState !== "loading") init();
    else document.addEventListener("DOMContentLoaded", init);
  })();


// --- module-46.js ---
(function() {
    function init() {
      var box = document.querySelector(".footer-newsletter");
      if (!box) return;
      var form = box.querySelector(".fnl-form");
      if (!form) return;
      var join = form.querySelector(".fnl-join");
      var input = form.querySelector(".fnl-input");
      var btn = form.querySelector(".fnl-btn");
      if (!input) return;

      var cfg = (window.civilEngineerSetting && window.civilEngineerSetting.newsletter) || {};

      var action = (cfg.action || "").trim();
      var isGoogleForm = /docs\.google\.com\/forms/i.test(action);
      var isMailchimp = /list-manage\.com/i.test(action);

      var field = cfg.field || (isMailchimp ? "EMAIL" : "email");

      var mode = cfg.mode || (isGoogleForm ? "ajax" : "redirect");
      var configured = !!action;
      var isFollowIt = false;

      function bloggerCf() {
        var root = document.querySelector(".civilengineer-cf") || document;
        var em = root.querySelector("input.contact-form-email");
        var ms = root.querySelector("textarea.contact-form-email-message");
        var bt = root.querySelector("input.contact-form-button-submit");
        if (!em || !ms || !bt) {
          return null;
        }
        return {
          email: em,
          msg: ms,
          btn: bt,
          name: root.querySelector("input.contact-form-name"),
          ok: root.querySelector("p.contact-form-success-message"),
          err: root.querySelector("p.contact-form-error-message")
        };
      }

      function cfReset(cf) {
        try {
          if (cf.name) {
            cf.name.value = "";
          }
          cf.email.value = "";
          cf.msg.value = "";
          if (cf.ok) {
            cf.ok.textContent = "";
            cf.ok.className = "contact-form-success-message";
            cf.ok.removeAttribute("style");
          }
          if (cf.err) {
            cf.err.textContent = "";
            cf.err.className = "contact-form-error-message";
            cf.err.removeAttribute("style");
          }
        } catch (e) {}
      }

      var useBlogger = !configured && cfg.adminInbox === true && !!bloggerCf();
      if (!configured && !useBlogger) {
        isFollowIt = true;

        var fiParams = [];
        try {
          if (window.location && window.location.origin) {
            fiParams.push("coming_from_url=" + encodeURIComponent(window.location.origin + "/"));
          }
        } catch (eLoc) {}
        if (cfg.followItPub) {
          fiParams.push("pub=" + encodeURIComponent(String(cfg.followItPub).trim()));
        }
        action = "https://api.follow.it/subscribe" + (fiParams.length ? "?" + fiParams.join("&") : "");
        field = "email";
        mode = "redirect";
        configured = true;
      }
      input.name = field;

      if (configured) {
        form.setAttribute("action", action);
      } else {
        form.removeAttribute("action");
        if (!useBlogger) {
          try {
            console.warn("[CIVILENGINEER] Newsletter: newsletter.action is not configured and the Contact Form widget was not found. The form offers an RSS subscription.");
          } catch (e) {}
        }
      }

      if (cfg.botField) {
        var hp = document.createElement("div");
        hp.style.cssText = "position:absolute;left:-5000px";
        hp.setAttribute("aria-hidden", "true");
        var hpi = document.createElement("input");
        hpi.type = "text";
        hpi.name = cfg.botField;
        hpi.tabIndex = -1;
        hpi.value = "";
        hp.appendChild(hpi);
        form.appendChild(hp);
      }
      if (cfg.extraFields) {
        for (var k in cfg.extraFields) {
          if (!cfg.extraFields.hasOwnProperty(k)) continue;
          var h = document.createElement("input");
          h.type = "hidden";
          h.name = k;
          h.value = cfg.extraFields[k];
          form.appendChild(h);
        }
      }

      form.noValidate = true; // use the custom validation messages below
      if (mode === "ajax") form.removeAttribute("target");

      var msg = document.createElement("p");
      msg.className = "fnl-msg";
      msg.setAttribute("role", "status");
      form.appendChild(msg);

      // reCAPTCHA newsletter: berbagi site key & mekanisme muat script dengan
      // popup Contact Form Header (window.__civilengineerRcSiteKey / __civilengineerLoadRecaptcha
      // -- lihat skrip buka/tutup popup), supaya recaptcha/api.js tidak dimuat
      // dobel dan hanya perlu ganti site key di SATU tempat. Dimuat lazy saat
      // pengguna fokus ke kolom email Newsletter (.fnl-input), bukan sekadar
      // mendekat lewat scroll, supaya tidak membebani load awal halaman untuk
      // pengunjung yang tidak berniat mengisi form ini.
      var fnlRcBox = form.querySelector("#fnl-recaptcha");

      function fnlRenderRecaptcha() {
        if (!fnlRcBox || fnlRcBox.dataset.rendered) return;
        // Tampilkan wadah (.fnl-recaptcha-wrap) tepat saat proses render mulai,
        // supaya tidak ada kotak kosong yang sempat terlihat sebelum ini.
        var fnlWrap = fnlRcBox.closest(".fnl-recaptcha-wrap");
        if (fnlWrap) fnlWrap.classList.add("is-active");

        function doRender() {
          if (fnlRcBox.dataset.rendered) return;
          try {
            window.__civilengineerFnlWidgetId = grecaptcha.render(fnlRcBox, {
              sitekey: window.__civilengineerRcSiteKey || "",
              callback: function () {
                if (msg.dataset.civilengineerCaptchaErr) {
                  msg.textContent = "";
                  msg.className = "fnl-msg";
                  delete msg.dataset.civilengineerCaptchaErr;
                }
              },
              "expired-callback": function () {
                say(cfg.errCaptchaExpired || "Verifikasi reCAPTCHA kedaluwarsa, mohon centang ulang.", "err");
                msg.dataset.civilengineerCaptchaErr = "1";
              }
            });
            fnlRcBox.dataset.rendered = "1";
          } catch (eRender) {
            delete fnlRcBox.dataset.rendered;
            console.warn("[CIVILENGINEER] reCAPTCHA Newsletter gagal dirender.", eRender);
          }
        }
        if (window.__civilengineerLoadRecaptcha) {
          window.__civilengineerLoadRecaptcha(doRender);
        } else if (window.grecaptcha && window.grecaptcha.render) {
          doRender();
        }
      }

      function fnlCaptchaOk() {
        return typeof window.grecaptcha !== "undefined" &&
          window.__civilengineerFnlWidgetId !== undefined &&
          grecaptcha.getResponse(window.__civilengineerFnlWidgetId).length > 0;
      }

      if (fnlRcBox) {
        // Lazy-load: script + widget reCAPTCHA baru dimuat saat pengguna
        // fokus ke kolom email Newsletter (bukan sekadar mendekat lewat
        // scroll), supaya recaptcha/api.js hanya dipanggil kalau pengunjung
        // memang berniat mengisi form ini. Berbagi loader & site key dengan
        // popup Contact Form Header lewat window.__civilengineerLoadRecaptcha /
        // window.__civilengineerRcSiteKey, jadi script tidak dimuat dobel.
        input.addEventListener("focus", fnlRenderRecaptcha, { once: true });
      }

      function valid(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
      }

      function markInvalid(on) {
        if (join) {
          join.classList[on ? "add" : "remove"]("invalid");
        }
        input.classList[on ? "add" : "remove"]("invalid");
      }

      function say(text, cls) {
        msg.textContent = text;
        msg.className = "fnl-msg " + cls;
      }

      function sending(on) {
        if (join) {
          join.classList[on ? "add" : "remove"]("sending");
        }
      }
      input.addEventListener("input", function() {
        markInvalid(false);
      });

      function showRssFallback() {
        var feed = cfg.feedUrl || "/feeds/posts/default";
        msg.textContent = "";
        msg.appendChild(document.createTextNode(cfg.rssNote || "Email subscriptions are not active yet. You can subscribe through "));
        var a = document.createElement("a");
        a.href = feed;
        a.target = "_blank";
        a.rel = "nofollow noopener noreferrer";
        a.textContent = cfg.rssLabel || "Feed RSS";
        msg.appendChild(a);
        msg.appendChild(document.createTextNode("."));
        msg.className = "fnl-msg info";
      }

      var OK_MSG = cfg.success || (isFollowIt ?
        "Thank you! Complete the subscription confirmation in the newly opened tab." :
        "Thank you! Please check your email to confirm your subscription.");

      function success() {
        say(OK_MSG, "ok");

        if (window.__civilengineerFnlWidgetId !== undefined && window.grecaptcha) {
          try {
            grecaptcha.reset(window.__civilengineerFnlWidgetId);
          } catch (eReset) {}
        }

        if (cfg.hideAfterSuccess === true) {
          box.classList.add("done");
        }
        setTimeout(function() {
          try {
            input.value = "";
            markInvalid(false);
          } catch (eClr) {}
        }, 400);
      }

      form.addEventListener("submit", function(e) {
        var v = (input.value || "").trim();
        msg.className = "fnl-msg";
        msg.textContent = "";

        if (!v) {
          e.preventDefault();
          markInvalid(true);
          say(cfg.errEmpty || "Please enter your email address.", "err");
          input.focus();
          return;
        }
        if (!valid(v)) {
          e.preventDefault();
          markInvalid(true);
          say(cfg.errInvalid || "Please enter a valid email address, for example: name@email.com", "err");
          input.focus();
          return;
        }
        markInvalid(false);

        // reCAPTCHA newsletter wajib dicentang dulu, berlaku untuk SEMUA
        // mode backend (Blogger relay, ajax fetch, maupun redirect submit
        // biasa) -- gerbang ini paling awal, sebelum salah satu cabang
        // di bawah sempat berjalan.
        if (!fnlCaptchaOk()) {
          e.preventDefault();
          fnlRenderRecaptcha(); // jaga-jaga kalau lazy-load belum sempat jalan
          say(cfg.errCaptcha || "Please check the reCAPTCHA to confirm that you are not a robot.", "err");
          return;
        }

        if (!configured) {
          e.preventDefault();
          var cf = useBlogger ? bloggerCf() : null;
          if (!cf) {
            showRssFallback();
            return;
          }

          sending(true);
          cfReset(cf);
          if (cf.name) {
            cf.name.value = cfg.cfName || "Newsletter";
          }
          cf.email.value = v;
          cf.msg.value = (cfg.cfMessage || "New article subscription request (Newsletter) from this address:") + " " + v;
          try {
            cf.btn.click();
          } catch (eClick) {
            sending(false);
            showRssFallback();
            return;
          }

          var t0 = Date.now();
          (function watch() {
            var okTxt = cf.ok ? (cf.ok.textContent || "").replace(/\s+/g, " ").trim() : "";
            var errTxt = cf.err ? (cf.err.textContent || "").replace(/\s+/g, " ").trim() : "";
            if (okTxt) {
              cfReset(cf);
              sending(false);
              success();
              return;
            }
            if (errTxt) {
              cfReset(cf);
              sending(false);
              say(cfg.errNetwork || "Unable to submit. Please check your connection and try again.", "err");
              return;
            }
            if (Date.now() - t0 > 15000) {
              cfReset(cf);
              sending(false);
              say(cfg.errNetwork || "Unable to submit. Please check your connection and try again.", "err");
              return;
            }
            setTimeout(watch, 350);
          })();
          return;
        }

        if (mode !== "ajax") {
          success();
          return;
        }

        e.preventDefault();
        sending(true);

        var data = new FormData();
        data.append(field, v);
        if (cfg.extraFields) {
          for (var k2 in cfg.extraFields) {
            if (cfg.extraFields.hasOwnProperty(k2)) data.append(k2, cfg.extraFields[k2]);
          }
        }

        function done() {
          sending(false);
          success();
        }

        function fail() {
          sending(false);
          say(cfg.errNetwork || "Unable to submit. Please check your connection and try again.", "err");
        }

        if (window.fetch) {
          fetch(action, {
              method: "POST",
              mode: "no-cors",
              body: data
            })
            .then(done)["catch"](fail);
        } else {
          try {
            var name = "fnl_frame_" + Date.now();
            var ifr = document.createElement("iframe");
            ifr.name = name;
            ifr.style.display = "none";
            document.body.appendChild(ifr);
            form.setAttribute("target", name);
            form.submit();
            setTimeout(function() {
              done();
              try {
                ifr.parentNode.removeChild(ifr);
              } catch (e2) {}
            }, 1200);
          } catch (e3) {
            fail();
          }
        }
      });
    }
    if (document.readyState !== "loading") init();
    else document.addEventListener("DOMContentLoaded", init);
  })();


// --- module-47.js ---
// Validasi kustom hanya untuk Contact Form Header.
  // Sidebar bukan lokasi Contact Form yang didukung theme.
  // Border merah per field (Email & Pesan) menggantikan banner error tunggal bawaan Blogger.
  // reCAPTCHA popup: hanya diwajibkan saat tombol Kirim ini diklik LANGSUNG
  // oleh pengunjung (event.isTrusted === true). Saat tombol yang sama dipicu
  // terprogram -- cf.btn.click() oleh skrip newsletter footer, atau
  // bw.submit.click() oleh formulir kustom di halaman Contact -- isTrusted
  // bernilai false, sehingga pengecekan reCAPTCHA milik popup ini dilewati;
  // jalur-jalur tersebut sudah tervalidasi lewat mekanismenya sendiri.
  (function () {
    function isValidEmail(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    }

    function setup(form) {
      if (!form || form.dataset.civilengineerCfValidated) return;
      form.dataset.civilengineerCfValidated = "1";

      var email = form.querySelector(".contact-form-email");
      var pesan = form.querySelector(".contact-form-email-message");
      var btn = form.querySelector(".contact-form-button-submit");
      if (!email || !pesan || !btn) return;

      var errMsg = form.querySelector(".contact-form-error-message");
      var okMsg = form.querySelector(".contact-form-success-message");

      // Reset otomatis widget reCAPTCHA setiap kali pesan berhasil terkirim
      // -- lewat jalur mana pun (klik langsung popup, Newsletter footer, atau
      // Contact Page kustom) -- supaya token lama tidak "menempel" dan
      // pengunjung wajib centang ulang kalau ingin mengirim pesan berikutnya
      // lewat popup ini.
      if (okMsg && "MutationObserver" in window) {
        var rcResetObserver = new MutationObserver(function () {
          var okTxt = (okMsg.textContent || "").trim();
          if (okTxt && window.__civilengineerCfWidgetId !== undefined && window.grecaptcha) {
            try {
              grecaptcha.reset(window.__civilengineerCfWidgetId);
            } catch (eReset) {}
          }
        });
        rcResetObserver.observe(okMsg, {
          childList: true,
          characterData: true,
          subtree: true
        });
      }

      function mark(field, on) {
        field.classList[on ? "add" : "remove"]("invalid");
      }

      [email, pesan].forEach(function (f) {
        f.addEventListener("input", function () {
          mark(f, false);
        });
      });

      // Dipanggil otomatis oleh widget reCAPTCHA (lihat callback/expired-callback
      // yang didaftarkan saat grecaptcha.render() di skrip buka/tutup popup).
      window.civilengineerCfCaptchaOk = function () {
        if (errMsg && errMsg.dataset.civilengineerCaptchaErr) {
          errMsg.textContent = "";
          delete errMsg.dataset.civilengineerCaptchaErr;
        }
      };
      window.civilengineerCfCaptchaExpired = function () {
        if (errMsg) {
          errMsg.textContent = "Verifikasi reCAPTCHA kedaluwarsa, mohon centang ulang.";
          errMsg.dataset.civilengineerCaptchaErr = "1";
        }
      };

      // Catatan: tombol kirim widget ContactForm bawaan Blogger memakai
      // type="button", BUKAN type="submit" (lihat markup .contact-form-button-submit),
      // sehingga event "submit" bawaan <form> tidak pernah terpicu — proses
      // kirim asli Blogger dijalankan lewat event "click" pada tombol
      // tersebut (skrip AJAX-nya dimuat otomatis oleh Blogger, tidak ada di
      // kode tema). Karena itu validasi ini juga memakai event "click", dan
      // dipasang pada elemen <form> (bukan langsung di tombol) dengan
      // capture:true, supaya berjalan lebih dulu pada fase capture — SEBELUM
      // event mencapai tombol dan memicu handler klik bawaan Blogger — apa
      // pun urutan pendaftaran skrip. stopPropagation hanya dipanggil saat
      // ada error, agar saat input valid, klik diteruskan apa adanya ke
      // handler asli Blogger (submit tetap berjalan normal, termasuk saat
      // dipicu terprogram lewat cf.btn.click() oleh skrip newsletter footer).
      form.addEventListener("click", function (e) {
        if (e.target !== btn) return;

        var emailVal = (email.value || "").trim();
        var pesanVal = (pesan.value || "").trim();
        var hasError = false;
        var errText = "";

        mark(email, false);
        mark(pesan, false);

        if (!emailVal || !isValidEmail(emailVal)) {
          mark(email, true);
          hasError = true;
          errText = "Alamat email tidak valid. Contoh format: nama@email.com";
        } else if (!pesanVal) {
          mark(pesan, true);
          hasError = true;
          errText = "Mohon isi pesan Anda.";
        }

        if (!hasError && e.isTrusted) {
          var wid = window.__civilengineerCfWidgetId;
          var captchaOk = typeof window.grecaptcha !== "undefined" &&
            wid !== undefined && grecaptcha.getResponse(wid).length > 0;
          if (!captchaOk) {
            hasError = true;
            errText = "Mohon centang reCAPTCHA untuk membuktikan Anda bukan robot.";
            if (errMsg) errMsg.dataset.civilengineerCaptchaErr = "1";
          }
        }

        if (hasError) {
          e.preventDefault();
          e.stopPropagation();
          if (errMsg) errMsg.textContent = errText;
          if (email.classList.contains("invalid")) email.focus();
          else if (pesan.classList.contains("invalid")) pesan.focus();
        }
      }, true);
    }

    function init() {
      var headerForm = document.querySelector(
        "#header-contact form[name='contact-form']"
      );
      if (headerForm) setup(headerForm);
    }

    document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", init)
      : init();
  })();


// --- module-48.js ---
(function() {
    "use strict";

    var VF_PATH = "M22.5 12l-2.28-2.61.32-3.44-3.38-.77-1.77-2.98L12 3.51 8.61 2.2 6.84 5.18l-3.38.76.32 3.44L1.5 12l2.28 2.61-.32 3.45 3.38.76 1.77 2.98L12 20.49l3.39 1.31 1.77-2.98 3.38-.76-.32-3.45L22.5 12zm-12.02 4.44l-3.6-3.6 1.41-1.42 2.19 2.19 5.46-5.46 1.41 1.42-6.87 6.87z";
    var LABEL = "Terverifikasi";
    var NS = "http://www.w3.org/2000/svg";

    function makeBadge() {
      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "civilengineer-author-vf");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("role", "img");
      svg.setAttribute("aria-label", LABEL);
      var t = document.createElementNS(NS, "title");
      t.textContent = LABEL;
      var path = document.createElementNS(NS, "path");
      path.setAttribute("d", VF_PATH);
      svg.appendChild(t);
      svg.appendChild(path);
      return svg;
    }

    function norm(v) {
      return (v || "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "").toLowerCase();
    }

    function enhanceThreaded(root) {
      var icons = root.querySelectorAll(".comments-threaded .icon.blog-author:not([data-vf])");
      for (var i = 0; i < icons.length; i++) {
        var el = icons[i];
        el.setAttribute("data-vf", "1");
        el.setAttribute("title", LABEL);
        el.setAttribute("aria-label", LABEL);
        el.setAttribute("role", "img");
      }
    }

    function enhanceNonThreaded(root) {
      var box = root.querySelector ? root.querySelector(".comments-non-threaded") : null;
      if (!box && root.classList && root.classList.contains("comments-non-threaded")) box = root;
      if (!box) return;

      var author = norm(box.getAttribute("data-post-author"));
      if (!author) return;

      var names = box.querySelectorAll(".comment-author-name:not([data-vf])");
      for (var i = 0; i < names.length; i++) {
        var el = names[i];
        el.setAttribute("data-vf", "1");
        if (norm(el.textContent) === author) {
          el.appendChild(makeBadge());
        }
      }
    }

    function run() {
      var wrap = document.getElementById("comments");
      if (!wrap) return;
      enhanceThreaded(document);
      enhanceNonThreaded(document);
    }

    function init() {
      run();

      var holder = document.getElementById("comment-holder") || document.getElementById("comments");
      if (holder && "MutationObserver" in window) {
        var t = null;
        new MutationObserver(function() {
          if (t) clearTimeout(t);
          t = setTimeout(run, 120);
        }).observe(holder, {
          childList: true,
          subtree: true
        });
      }
    }

    if (document.readyState !== "loading") init();
    else document.addEventListener("DOMContentLoaded", init);
  })();


// --- module-49.js ---
/* ============================================================
     CIVILENGINEER COMMENTS — Tombol Balas di SEMUA level komentar
     Memakai sistem threaded comments bawaan Blogger (parentID),
     tanpa plugin eksternal & tanpa reload halaman.
     ============================================================ */
  (function() {
    "use strict";

    var SEO = function() {
      var s = {};
      try {
        if (window.civilEngineerSetting && window.civilEngineerSetting.seo) {
          s = window.civilEngineerSetting.seo;
        }
      } catch (e) {}
      return s;
    };

    var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>';
    var LABEL = "Balas";

    function q(el, sel) {
      return el ? el.querySelector(sel) : null;
    }

    function commentIdOf(li) {
      var id = li.getAttribute("id") || "";
      var m = id.match(/(\d{4,})/);
      return m ? m[1] : "";
    }

    function nameOf(li) {
      var c = q(li, ".comment-header cite.user") || q(li, "cite.user") ||
        q(li, ".comment-author-name");
      return c ? (c.textContent || "").replace(/\s+/g, " ").trim() : "";
    }

    function editorBase() {
      var a = document.getElementById("comment-editor-src");
      if (a && a.href) {
        return a.href;
      }
      var f = document.getElementById("comment-editor");
      if (f) {
        var b = f.getAttribute("data-civilengineer-base");
        if (b) {
          return b;
        }
        if (f.src) {
          f.setAttribute("data-civilengineer-base", f.src);
          return f.src;
        }
      }
      return "";
    }

    function stripParent(url) {
      return url.replace(/([?&])parentID=[^&]*/g, "$1").replace(/[?&]+$/, "").replace(/&&+/g, "&");
    }

    function bar() {
      var form = document.querySelector(".comment-form") || document.getElementById("comments");
      if (!form) {
        return null;
      }
      var b = document.getElementById("civilengineer-replybar");
      if (b) {
        return b;
      }
      b = document.createElement("div");
      b.id = "civilengineer-replybar";
      b.className = "civilengineer-replybar";
      b.setAttribute("hidden", "hidden");
      b.innerHTML = '<span class="civilengineer-replybar-txt"></span>' +
        '<button type="button" class="civilengineer-replybar-cancel">Batal</button>';
      form.insertBefore(b, form.firstChild);
      b.querySelector(".civilengineer-replybar-cancel").addEventListener("click", function() {
        resetReply();
      });
      return b;
    }

    function resetReply() {
      var frame = document.getElementById("comment-editor");
      var base = editorBase();
      if (frame && base) {
        frame.src = stripParent(base);
      }
      var b = document.getElementById("civilengineer-replybar");
      if (b) {
        b.setAttribute("hidden", "hidden");
      }
      var act = document.querySelector(".civilengineer-reply.is-active");
      if (act) {
        act.classList.remove("is-active");
      }
    }

    function replyTo(cid, name, btn) {
      var frame = document.getElementById("comment-editor");
      var base = editorBase();
      if (!frame || !base) {
        return false;
      }

      var url = stripParent(base);
      url += (url.indexOf("?") > -1 ? "&" : "?") + "parentID=" + encodeURIComponent(cid);
      frame.src = url;

      var b = bar();
      if (b) {
        b.removeAttribute("hidden");
        b.querySelector(".civilengineer-replybar-txt").textContent =
          "Membalas " + (name ? "@" + name : "komentar ini");
      }
      var act = document.querySelector(".civilengineer-reply.is-active");
      if (act) {
        act.classList.remove("is-active");
      }
      if (btn) {
        btn.classList.add("is-active");
      }

      var target = document.querySelector(".comment-form") || frame;
      try {
        var y = target.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      } catch (e) {
        target.scrollIntoView();
      }
      return true;
    }

    function makeBtn(cid, name) {
      var a = document.createElement("a");
      a.className = "civilengineer-reply";
      a.href = "#comment-editor";
      a.setAttribute("role", "button");
      a.setAttribute("data-cid", cid);
      a.setAttribute("data-name", name);
      a.setAttribute("aria-label", "Balas komentar" + (name ? " dari " + name : ""));
      a.innerHTML = ICON + '<span>' + LABEL + '</span>';
      return a;
    }

    function relForComment() {
      var c = SEO();
      var parts = [];
      if (c.commentUgc !== false) {
        parts.push("ugc");
      }
      if (c.commentNofollow !== false) {
        parts.push("nofollow");
      }
      parts.push("noopener", "noreferrer");
      return parts.join(" ");
    }

    function markProfileLinks(root) {
      var rel = relForComment();
      var sels = [
        "#comments cite.user a", "#comments .comment-header a[href]",
        "#comments .comment-author-name a[href]", "#comments .comment-content a[href]",
        "#comments .avatar-image-container a[href]"
      ];
      for (var i = 0; i < sels.length; i++) {
        var list = root.querySelectorAll(sels[i]);
        for (var j = 0; j < list.length; j++) {
          var a = list[j];
          if (a.getAttribute("data-civilengineer-rel")) {
            continue;
          }
          var href = a.getAttribute("href") || "";
          if (!href || href.charAt(0) === "#" || /^javascript:/i.test(href)) {
            continue;
          }
          if (/(^|\.)blogger\.com\/delete-comment/i.test(href)) {
            continue;
          }
          a.setAttribute("rel", rel);
          a.setAttribute("data-civilengineer-rel", "1");
        }
      }
    }

    function inject(root) {
      var box = document.getElementById("comments");
      if (!box || box.className.indexOf("comments-threaded") < 0) {
        return;
      }

      var items = box.querySelectorAll("li.comment, .comment[id^='c']");
      for (var i = 0; i < items.length; i++) {
        var li = items[i];
        if (li.getAttribute("data-civilengineer-reply")) {
          continue;
        }
        li.setAttribute("data-civilengineer-reply", "1");

        var cid = commentIdOf(li);
        if (!cid) {
          continue;
        }

        var host = q(li, ":scope > .comment-block > .comment-actions") ||
          q(li, ".comment-block > .comment-actions") ||
          q(li, ":scope > .comment-block") ||
          q(li, ".comment-block");
        if (!host) {
          continue;
        }

        if (q(host, ".civilengineer-reply")) {
          continue;
        }
        var btn = makeBtn(cid, nameOf(li));
        if (host.firstChild) {
          host.insertBefore(btn, host.firstChild);
        } else {
          host.appendChild(btn);
        }
      }
      markProfileLinks(box);
    }

    function init() {
      var box = document.getElementById("comments");
      if (!box) {
        return;
      }

      inject(document);

      box.addEventListener("click", function(e) {
        var t = e.target.closest ? e.target.closest(".civilengineer-reply") : null;
        if (!t) {
          return;
        }
        e.preventDefault();
        replyTo(t.getAttribute("data-cid"), t.getAttribute("data-name"), t);
      });

      if ("MutationObserver" in window) {
        var timer = null;
        new MutationObserver(function() {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(function() {
            inject(document);
          }, 150);
        }).observe(box, {
          childList: true,
          subtree: true
        });
      }
    }

    if (document.readyState !== "loading") {
      init();
    } else {
      document.addEventListener("DOMContentLoaded", init);
    }
  })();


// --- module-50.js ---
/* ============================================================
     CIVILENGINEER SEO & LINK SETTINGS
     Kontrol rel/target untuk link eksternal, komentar, share,
     widget Follow, widget About, dan widget HTML/JavaScript.
     ============================================================ */
  (function() {
    "use strict";

    var DEF = {
      enabled: true,
      externalNofollow: true,
      externalNoopener: true,
      externalNoreferrer: true,
      externalNewTab: true,
      commentUgc: true,
      commentNofollow: true,
      shareRel: true,
      followWidget: "nofollow",
      aboutSocial: "nofollow",
      htmlWidgetAuto: true,
      sponsorAuto: true,
      sponsorSelector: ".sponsored, .affiliate, [data-sponsored], [data-aff]",
      whitelist: []
    };

    function conf() {
      var u = {};
      try {
        if (window.civilEngineerSetting && window.civilEngineerSetting.seo) {
          u = window.civilEngineerSetting.seo;
        }
      } catch (e) {}
      var o = {};
      for (var k in DEF) {
        o[k] = DEF[k];
      }
      for (var j in u) {
        if (u.hasOwnProperty(j)) {
          o[j] = u[j];
        }
      }
      if (!(o.whitelist instanceof Array)) {
        o.whitelist = [];
      }
      return o;
    }

    var C = conf();

    function hostOf(a) {
      try {
        return (a.hostname || "").toLowerCase().replace(/^www\./, "");
      } catch (e) {
        return "";
      }
    }

    var SELF = (location.hostname || "").toLowerCase().replace(/^www\./, "");

    function whitelisted(h) {
      if (!h) {
        return true;
      }
      if (h === SELF) {
        return true;
      }
      for (var i = 0; i < C.whitelist.length; i++) {
        var w = String(C.whitelist[i] || "").toLowerCase().replace(/^www\./, "").replace(/^https?:\/\//, "").replace(/\/.*$/, "");
        if (!w) {
          continue;
        }
        if (h === w || h.slice(-(w.length + 1)) === "." + w) {
          return true;
        }
      }
      return false;
    }

    function isExternal(a) {
      var href = a.getAttribute("href") || "";
      if (!href) {
        return false;
      }
      if (/^(#|javascript:|mailto:|tel:|whatsapp:)/i.test(href)) {
        return false;
      }
      var h = hostOf(a);
      if (!h) {
        return false;
      }
      return h !== SELF;
    }

    function addRel(a, tokens) {
      var cur = (a.getAttribute("rel") || "").split(/\s+/);
      var seen = {},
        out = [];
      var all = cur.concat(tokens);
      for (var i = 0; i < all.length; i++) {
        var t = all[i];
        if (!t) {
          continue;
        }
        if (seen[t]) {
          continue;
        }
        seen[t] = 1;
        out.push(t);
      }
      a.setAttribute("rel", out.join(" "));
    }

    function baseExternalTokens() {
      var t = [];
      if (C.externalNofollow !== false) {
        t.push("nofollow");
      }
      if (C.externalNoopener !== false) {
        t.push("noopener");
      }
      if (C.externalNoreferrer !== false) {
        t.push("noreferrer");
      }
      return t;
    }

    function applyExternal(a, extra) {
      var t = baseExternalTokens();
      if (extra) {
        t = t.concat(extra);
      }
      addRel(a, t);
      if (C.externalNewTab !== false && !a.getAttribute("target")) {
        a.setAttribute("target", "_blank");
        addRel(a, ["noopener"]);
      }
    }

    function isSponsor(a) {
      if (C.sponsorAuto === false) {
        return false;
      }
      try {
        if (a.closest && a.closest(C.sponsorSelector)) {
          return true;
        }
        if (a.matches && a.matches(C.sponsorSelector)) {
          return true;
        }
      } catch (e) {}
      var rel = (a.getAttribute("rel") || "").toLowerCase();
      return rel.indexOf("sponsored") > -1;
    }

    /* --- 1. Link eksternal di area konten & widget HTML/JS --- */
    function scanExternal(root) {
      if (C.enabled === false) {
        return;
      }
      var scopes = [];
      if (C.htmlWidgetAuto !== false) {
        scopes.push(".post-body-artikel", ".post-body", ".widget.HTML", ".Text",
          ".footer-links", ".fnl-inner");
      } else {
        scopes.push(".post-body-artikel", ".post-body");
      }
      for (var i = 0; i < scopes.length; i++) {
        var boxes = root.querySelectorAll(scopes[i]);
        for (var b = 0; b < boxes.length; b++) {
          var links = boxes[b].querySelectorAll("a[href]:not([data-civilengineer-seo])");
          for (var j = 0; j < links.length; j++) {
            var a = links[j];
            a.setAttribute("data-civilengineer-seo", "1");
            if (a.closest("#comments")) {
              continue;
            }
            if (!isExternal(a)) {
              continue;
            } /* link internal tetap dofollow */
            if (whitelisted(hostOf(a))) {
              if (C.externalNewTab !== false && !a.getAttribute("target")) {
                a.setAttribute("target", "_blank");
                addRel(a, ["noopener"]);
              }
              continue;
            }
            applyExternal(a, isSponsor(a) ? ["sponsored"] : null);
          }
        }
      }
    }

    /* --- 2. Tombol berbagi --- */
    function scanShare(root) {
      if (C.shareRel === false) {
        return;
      }
      var links = root.querySelectorAll("a.share-btn[href], .share-box a[href], .civilengineer-share a[href]");
      for (var i = 0; i < links.length; i++) {
        addRel(links[i], ["nofollow", "noopener", "noreferrer"]);
      }
    }

    /* --- 3. Widget Follow Blog --- */
    function scanFollow(root) {
      var mode = String(C.followWidget || "nofollow").toLowerCase();
      var links = root.querySelectorAll(".civilengineer-follow-wrap a[href], .civilengineer-vf a[href], .follow-blog a[href], #follow-blog a[href]");
      for (var i = 0; i < links.length; i++) {
        if (mode === "dofollow") {
          continue;
        }
        addRel(links[i], ["nofollow", "noopener", "noreferrer"]);
      }
    }

    /* --- 4. Widget About (social links) --- */
    function scanAbout(root) {
      var mode = String(C.aboutSocial || "nofollow").toLowerCase();
      var links = root.querySelectorAll(".footer-social a[href], .footer-about a[href], .fa-link, .fa-name");
      for (var i = 0; i < links.length; i++) {
        var a = links[i];
        if (!a.getAttribute) {
          continue;
        }
        if (mode === "dofollow") {
          var rel = (a.getAttribute("rel") || "").replace(/\bnofollow\b/g, "").replace(/\s+/g, " ").trim();
          a.setAttribute("rel", rel || "noopener noreferrer");
          continue;
        }
        addRel(a, ["nofollow", "noopener", "noreferrer"]);
      }
    }

    function run() {
      try {
        scanExternal(document);
      } catch (e) {}
      try {
        scanShare(document);
      } catch (e) {}
      try {
        scanFollow(document);
      } catch (e) {}
      try {
        scanAbout(document);
      } catch (e) {}
    }

    function init() {
      C = conf();
      run();
      var main = document.getElementById("main") || document.body;
      if (main && "MutationObserver" in window) {
        var t = null;
        new MutationObserver(function() {
          if (t) {
            clearTimeout(t);
          }
          t = setTimeout(run, 250);
        }).observe(main, {
          childList: true,
          subtree: true
        });
      }
    }

    if (document.readyState !== "loading") {
      init();
    } else {
      document.addEventListener("DOMContentLoaded", init);
    }
  })();


// --- module-51.js ---
(function() {
    "use strict";

    function fixYear() {
      var y = new Date().getFullYear();
      var span = document.querySelector(".footer-year");
      if (span) span.textContent = y;
      var box = document.querySelector(".footer-copyright-text");
      if (box && !span) {

        var html = box.innerHTML;
        var updated = html.replace(/((?:19|20)\d{2})(?![\s\S]*(?:19|20)\d{2})/, String(y));
        if (updated !== html) box.innerHTML = updated;
      }
    }

    function init() {
      fixYear();
    }
    if (document.readyState !== "loading") init();
    else document.addEventListener("DOMContentLoaded", init);
  })();


// --- module-52.js ---
(function() {
    "use strict";
    var KEY = "civilengineer-cmt-order";

    function lists() {
      var sec = document.getElementById("comments");
      if (!sec) {
        return [];
      }
      var out = [],
        i;

      var top = sec.querySelectorAll(".comment-thread.toplevel-thread > ol");
      for (i = 0; i < top.length; i++) {
        out.push(top[i]);
      }

      var block = sec.querySelector("#comments-block");
      if (block) {
        out.push(block);
      }
      return out;
    }

    function setOrder(order, save) {
      var btn = document.querySelector(".cmt-sort");
      var ls = lists();
      for (var i = 0; i < ls.length; i++) {
        var box = ls[i];
        var cur = box.getAttribute("data-order") || "oldest";
        if (cur !== order) {
          var kids = [],
            n;
          for (n = box.children.length - 1; n >= 0; n--) {
            kids.push(box.children[n]);
          }
          for (n = 0; n < kids.length; n++) {
            box.appendChild(kids[n]);
          }
          box.setAttribute("data-order", order);
        }
      }
      if (btn) {
        btn.setAttribute("data-order", order);
        var lab = btn.querySelector(".cmt-sort-label");
        if (lab) {
          lab.textContent = (order === "newest") ? "Terbaru" : "Terlama";
        }
        btn.setAttribute("aria-label", (order === "newest") ? "Urutan: terbaru dulu" : "Urutan: terlama dulu");
      }
      if (save) {
        try {
          localStorage.setItem(KEY, order);
        } catch (e) {}
      }
    }

    function saved() {
      try {
        return localStorage.getItem(KEY) === "newest" ? "newest" : "oldest";
      } catch (e) {
        return "oldest";
      }
    }

    function init() {
      var sec = document.getElementById("comments");
      if (!sec) {
        return;
      }

      document.addEventListener("click", function(e) {
        var b = e.target && e.target.closest ? e.target.closest(".cmt-sort") : null;
        if (!b) {
          return;
        }
        e.preventDefault();
        setOrder(b.getAttribute("data-order") === "newest" ? "oldest" : "newest", true);
      }, false);

      var t;
      new MutationObserver(function() {
        if (t) {
          clearTimeout(t);
        }
        t = setTimeout(function() {
          setOrder(saved(), false);
        }, 100);
      }).observe(sec, {
        childList: true,
        subtree: true
      });

      setOrder(saved(), false);
    }

    if (document.readyState !== "loading") {
      init();
    } else {
      document.addEventListener("DOMContentLoaded", init);
    }
  })();


// --- module-54.js ---
(function() {
    "use strict";
    var nav = document.getElementById("cssmenu");
    if (!nav) {
      return;
    }

    var MAP = [
      ["mm-i-calc", ["rab", "kalkulator", "calculator", "hitung", "aplikasi rab", "estimasi"]],
      ["mm-i-boq", ["boq", "bill of quantity", "material", "ahsp", "volume", "analisa harga"]],
      ["mm-i-price", ["harga", "biaya", "anggaran", "budget"]],
      ["mm-i-dwg", ["dwg", "autocad", "gambar", "drawing", "desain", "sketsa"]],
      ["mm-i-layers", ["teknis", "metode", "metoda", "pelaksanaan", "konstruksi", "teknologi"]],
      ["mm-i-survey", ["survey", "survei", "alat berat", "ukur", "pengukuran", "surveying", "topografi"]],
      ["mm-i-book", ["dasar", "manajemen", "panduan", "pengetahuan", "teori", "belajar", "edukasi", "materi"]],
      ["mm-i-standard", ["standar", "sni", "regulasi", "spesifikasi", "k3", "hse", "mutu"]],
      ["mm-i-bridge", ["jembatan", "bridge"]],
      ["mm-i-concrete", ["beton", "concrete", "semen"]],
      ["mm-i-steel", ["baja", "steel", "besi"]],
      ["mm-i-drain", ["drainase", "gorong", "saluran", "air", "irigasi", "plumbing"]],
      ["mm-i-excel", ["excel", "spreadsheet", "tabel", "template"]],
      ["mm-i-pdf", ["pdf", "dokumen", "file", "arsip"]],
      ["mm-i-video", ["video", "tutorial", "youtube", "kursus"]],
      ["mm-i-tools", ["software", "tools", "alat", "utilitas", "konverter", "converter"]],
      ["mm-i-download", ["download", "unduh", "koleksi"]],
      ["mm-i-contact", ["kontak", "hubungi", "contact", "tentang", "about"]],
      ["mm-i-article", ["artikel", "blog", "berita", "tulisan", "post"]],
      ["mm-i-search", ["cari", "pencarian", "search"]],
      ["mm-i-home", ["beranda", "home", "utama"]]
    ];

    function pick(text) {
      var t = text.toLowerCase(),
        i, j, k;
      for (i = 0; i < MAP.length; i++) {
        k = MAP[i][1];
        for (j = 0; j < k.length; j++) {
          if (t.indexOf(k[j]) !== -1) {
            return MAP[i][0];
          }
        }
      }
      return "";
    }

    var HAS_ICON = ".mm-i, svg, img, i, [class*='icon'], [class*='ico-'], [class^='fa'], [class*=' fa-']";

    function hasIcon(a) {
      if (a.querySelector(HAS_ICON)) {
        return true;
      }

      var t = (a.textContent || "").trim();
      return /^[^\w\s(]/.test(t) && !/^[A-Za-z0-9]/.test(t);
    }

    var links = nav.querySelectorAll(":scope > ul > li > a");
    for (var i = 0; i < links.length; i++) {
      var a = links[i];

      var dup = a.querySelectorAll("i.mm-i[data-mm-auto]");
      for (var d = 0; d < dup.length; d++) {
        dup[d].parentNode.removeChild(dup[d]);
      }

      if (hasIcon(a)) {
        continue;
      }

      var cls = pick(a.textContent || "");
      if (!cls) {
        a.classList.add("mm-noicon");
        continue;
      }
      var ic = document.createElement("i");
      ic.className = "mm-i " + cls;
      ic.setAttribute("aria-hidden", "true");
      ic.setAttribute("data-mm-auto", "1");
      a.insertBefore(ic, a.firstChild);
    }
  })();


// --- module-55.js ---
(function() {
    "use strict";
    var box = document.getElementById("civilengineer-tts");
    if (!box || !window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
      return;
    }

    var C = {
      ttsArticle: true,
      ttsStaticPage: true,
      ttsContentSelectors: [".post-body-artikel", "#body-post-it"],
      ttsVoicePriority: ["id", "ms", "en"],
      ttsChunkSize: 190,
      ttsExcludeExtra: [],
      ttsLabels: {
        idle: "Dengarkan Artikel",
        playing: "Sedang membacakan\u2026",
        paused: "Dijeda",
        done: "Selesai dibacakan"
      }
    };
    if (typeof optionCivilEngineer === "function") {
      try {
        optionCivilEngineer(C);
      } catch (e0) {}
    }
    var ttsCtx = box.getAttribute("data-tts-context") || "article";
    var ttsOn = ttsCtx === "static" ? (C.ttsStaticPage !== false) : (C.ttsArticle !== false);
    if (!ttsOn) {
      box.parentNode.removeChild(box);
      return;
    }

    var EXCLUDE = [
      "#inline-related-posts", ".inline-related-posts-wrap", ".civilengineer-toc", ".civilengineer-tts",
      ".widget-content", ".adsbygoogle", ".google-auto-placed",
      ".share-box", "#related-posts", ".related-grid", ".post-nav",
      ".civilengineer-print-src", ".tr-caption", ".tr-caption-container",
      "#comments", ".comments", ".comments-threaded", ".comments-non-threaded",
      "script", "style", "noscript", "iframe", "ins", "form", "button", "select", "textarea", "pre"
    ].concat(C.ttsExcludeExtra || []);

    var synth = window.speechSynthesis,
      btnMain = document.getElementById("civilengineer-tts-main"),
      btnStop = document.getElementById("civilengineer-tts-stop"),
      btnCfg = document.getElementById("civilengineer-tts-cfg"),
      panel = document.getElementById("civilengineer-tts-panel"),
      selVoice = document.getElementById("civilengineer-tts-voice"),
      rRate = document.getElementById("civilengineer-tts-rate"),
      rPitch = document.getElementById("civilengineer-tts-pitch"),
      rVol = document.getElementById("civilengineer-tts-vol"),
      oRate = document.getElementById("civilengineer-tts-rate-out"),
      oPitch = document.getElementById("civilengineer-tts-pitch-out"),
      oVol = document.getElementById("civilengineer-tts-vol-out"),
      lbl = box.querySelector(".tts-label"),
      fill = box.querySelector(".tts-progress-fill");

    var chunks = [],
      idx = 0,
      playing = false,
      paused = false,
      voices = [],
      keepAlive = null,
      KEY = "civilengineerTts";

    function loadPref() {
      try {
        return JSON.parse(localStorage.getItem(KEY) || "{}") || {};
      } catch (e) {
        return {};
      }
    }

    function savePref() {
      try {
        localStorage.setItem(KEY, JSON.stringify({
          rate: rRate.value,
          pitch: rPitch.value,
          volume: rVol.value,
          voiceURI: selVoice.value
        }));
      } catch (e) {}
    }
    var pref = loadPref();
    if (pref.rate) {
      rRate.value = pref.rate;
    }
    if (pref.pitch) {
      rPitch.value = pref.pitch;
    }
    if (pref.volume !== undefined && pref.volume !== null && pref.volume !== "") {
      rVol.value = pref.volume;
    }

    function syncOutputs() {
      oRate.textContent = parseFloat(rRate.value).toFixed(1) + "\u00d7";
      oPitch.textContent = parseFloat(rPitch.value).toFixed(1);
      oVol.textContent = Math.round(parseFloat(rVol.value) * 100) + "%";
    }
    syncOutputs();

    function langRank(lang) {
      lang = (lang || "").toLowerCase();
      for (var i = 0; i < C.ttsVoicePriority.length; i++) {
        if (lang.indexOf(C.ttsVoicePriority[i].toLowerCase()) === 0) {
          return i;
        }
      }
      return C.ttsVoicePriority.length;
    }

    function populateVoices() {
      var list = [];
      try {
        list = synth.getVoices() || [];
      } catch (e) {
        list = [];
      }
      if (!list.length) {
        return;
      }
      voices = list.slice().sort(function(a, b) {
        var r = langRank(a.lang) - langRank(b.lang);
        return r !== 0 ? r : (a.name < b.name ? -1 : 1);
      });
      while (selVoice.firstChild) {
        selVoice.removeChild(selVoice.firstChild);
      }
      for (var i = 0; i < voices.length; i++) {
        var o = document.createElement("option");
        o.value = voices[i].voiceURI;
        o.textContent = voices[i].name + " (" + voices[i].lang + ")";
        selVoice.appendChild(o);
      }
      var want = pref.voiceURI,
        found = false,
        j;
      if (want) {
        for (j = 0; j < voices.length; j++) {
          if (voices[j].voiceURI === want) {
            selVoice.value = want;
            found = true;
            break;
          }
        }
      }
      if (!found) {
        for (j = 0; j < voices.length; j++) {
          if ((voices[j].lang || "").toLowerCase().indexOf("id") === 0) {
            selVoice.value = voices[j].voiceURI;
            found = true;
            break;
          }
        }
      }
      if (!found && voices.length) {
        selVoice.value = voices[0].voiceURI;
      }
    }
    populateVoices();
    if (typeof synth.onvoiceschanged !== "undefined") {
      synth.onvoiceschanged = populateVoices;
    }

    function currentVoice() {
      for (var i = 0; i < voices.length; i++) {
        if (voices[i].voiceURI === selVoice.value) {
          return voices[i];
        }
      }
      return null;
    }

    function extractChunks() {
      var out = [],
        title = document.querySelector("h1.post-title"),
        art = null,
        sc;
      for (sc = 0; sc < C.ttsContentSelectors.length; sc++) {
        art = document.querySelector(C.ttsContentSelectors[sc]);
        if (art) {
          break;
        }
      }

      function pushText(t) {
        t = (t || "").replace(/\s+/g, " ").trim();
        if (!t) {
          return;
        }

        var parts = t.match(/[^.!?\u061f\u06d4]+[.!?\u061f\u06d4]*\s*/g) || [t],
          buf = "";
        for (var i = 0; i < parts.length; i++) {
          if (buf && (buf.length + parts[i].length) > C.ttsChunkSize) {
            out.push(buf.trim());
            buf = "";
          }
          buf += parts[i];
          while (buf.length > C.ttsChunkSize * 2) {
            out.push(buf.slice(0, C.ttsChunkSize * 2).trim());
            buf = buf.slice(C.ttsChunkSize * 2);
          }
        }
        if (buf.trim()) {
          out.push(buf.trim());
        }
      }
      if (title) {
        pushText(title.textContent);
      }
      if (art) {
        var clone = art.cloneNode(true),
          bad = clone.querySelectorAll(EXCLUDE.join(",")),
          i;
        for (i = bad.length - 1; i >= 0; i--) {
          if (bad[i].parentNode) {
            bad[i].parentNode.removeChild(bad[i]);
          }
        }
        var blocks = clone.querySelectorAll("p,h2,h3,h4,h5,h6,li,blockquote,td,dt,dd");
        if (blocks.length) {
          for (i = 0; i < blocks.length; i++) {

            if (!blocks[i].querySelector("p,h2,h3,h4,h5,h6,li,blockquote")) {
              pushText(blocks[i].textContent);
            }
          }
        } else {
          pushText(clone.textContent);
        }
      }
      return out;
    }

    function setLabel(t) {
      lbl.textContent = t;
    }

    function setProgress(p) {
      fill.style.width = Math.max(0, Math.min(100, p)) + "%";
    }

    function uiPlaying() {
      box.classList.add("is-playing");
      box.classList.remove("is-paused");
      btnStop.removeAttribute("disabled");
      btnMain.setAttribute("aria-label", "Jeda pembacaan");
      btnMain.setAttribute("title", "Jeda");
      setLabel(C.ttsLabels.playing);
    }

    function uiPaused() {
      box.classList.add("is-paused");
      btnMain.setAttribute("aria-label", "Lanjutkan pembacaan");
      btnMain.setAttribute("title", "Lanjutkan");
      setLabel(C.ttsLabels.paused);
    }

    function uiIdle(done) {
      box.classList.remove("is-playing", "is-paused");
      btnStop.setAttribute("disabled", "disabled");
      btnMain.setAttribute("aria-label", "Dengarkan Artikel");
      btnMain.setAttribute("title", "Dengarkan Artikel");
      setLabel(done ? C.ttsLabels.done : C.ttsLabels.idle);
      if (!done) {
        setProgress(0);
      }
    }

    function startKeepAlive() {
      stopKeepAlive();
      keepAlive = setInterval(function() {
        if (playing && !paused && synth.speaking) {
          try {
            synth.pause();
            synth.resume();
          } catch (e) {}
        }
      }, 10000);
    }

    function stopKeepAlive() {
      if (keepAlive) {
        clearInterval(keepAlive);
        keepAlive = null;
      }
    }

    function speakFrom(i) {
      if (i >= chunks.length) {
        finish();
        return;
      }
      idx = i;
      var u = new SpeechSynthesisUtterance(chunks[i]),
        v = currentVoice();
      if (v) {
        u.voice = v;
        u.lang = v.lang;
      } else {
        u.lang = "id-ID";
      }
      u.rate = parseFloat(rRate.value) || 1;
      u.pitch = parseFloat(rPitch.value) || 1;
      u.volume = parseFloat(rVol.value);
      if (isNaN(u.volume)) {
        u.volume = 1;
      }
      u.onend = function() {
        if (!playing) {
          return;
        }
        setProgress(((i + 1) / chunks.length) * 100);
        speakFrom(i + 1);
      };
      u.onerror = function() {
        if (!playing) {
          return;
        }
        speakFrom(i + 1);
      };
      try {
        synth.speak(u);
      } catch (e) {
        finish();
      }
    }

    function play() {
      chunks = extractChunks();
      if (!chunks.length) {
        return;
      }
      try {
        synth.cancel();
      } catch (e) {}
      playing = true;
      paused = false;
      idx = 0;
      setProgress(0);
      uiPlaying();
      startKeepAlive();
      speakFrom(0);
    }

    function pause() {
      if (!playing || paused) {
        return;
      }
      paused = true;
      try {
        synth.pause();
      } catch (e) {}
      uiPaused();
    }

    function resume() {
      if (!playing || !paused) {
        return;
      }
      paused = false;
      try {
        synth.resume();
      } catch (e) {}

      setTimeout(function() {
        if (playing && !paused) {
          return;
        }
      }, 0);
      setTimeout(function() {
        if (playing && !paused && !synth.speaking) {
          try {
            synth.cancel();
          } catch (e) {}
          speakFrom(idx);
        }
      }, 300);
      uiPlaying();
    }

    function stop(done) {
      playing = false;
      paused = false;
      stopKeepAlive();
      try {
        synth.cancel();
      } catch (e) {}
      uiIdle(done === true);
    }

    function finish() {
      playing = false;
      paused = false;
      stopKeepAlive();
      setProgress(100);
      uiIdle(true);
      setTimeout(function() {
        if (!playing) {
          setProgress(0);
          setLabel(C.ttsLabels.idle);
        }
      }, 4000);
    }

    btnMain.addEventListener("click", function() {
      if (!playing) {
        play();
      } else if (paused) {
        resume();
      } else {
        pause();
      }
    });
    btnStop.addEventListener("click", function() {
      stop(false);
    });
    btnCfg.addEventListener("click", function() {
      var open = btnCfg.getAttribute("aria-expanded") === "true";
      btnCfg.setAttribute("aria-expanded", open ? "false" : "true");
      if (open) {
        panel.setAttribute("hidden", "hidden");
      } else {
        panel.removeAttribute("hidden");
      }
    });

    function onSettingChange() {
      syncOutputs();
      savePref();

      if (playing && !paused) {
        try {
          synth.cancel();
        } catch (e) {}
        speakFrom(idx);
      }
    }
    rRate.addEventListener("change", onSettingChange);
    rPitch.addEventListener("change", onSettingChange);
    rVol.addEventListener("change", onSettingChange);
    rRate.addEventListener("input", syncOutputs);
    rPitch.addEventListener("input", syncOutputs);
    rVol.addEventListener("input", syncOutputs);
    selVoice.addEventListener("change", onSettingChange);

    var selVoiceWrap = selVoice.closest(".tts-voice-wrap");
    if (selVoiceWrap) {
      var openVoiceCaret = function() {
        selVoiceWrap.classList.add("is-open");
      };
      var closeVoiceCaret = function() {
        selVoiceWrap.classList.remove("is-open");
      };
      // Native <select> tidak punya event "open/close" langsung, jadi
      // status ikon didekati dari interaksi yang benar-benar membuka
      // (mousedown, Enter/Space/panah) dan menutup (change, blur, Escape)
      // daftar pilihan tersebut.
      selVoice.addEventListener("mousedown", openVoiceCaret);
      selVoice.addEventListener("keydown", function(e) {
        var k = e.key;
        if (k === "Enter" || k === " " || k === "ArrowDown" || k === "ArrowUp") {
          openVoiceCaret();
        } else if (k === "Escape") {
          closeVoiceCaret();
        }
      });
      selVoice.addEventListener("change", closeVoiceCaret);
      selVoice.addEventListener("blur", closeVoiceCaret);
    }

    function hardStop() {
      playing = false;
      stopKeepAlive();
      try {
        synth.cancel();
      } catch (e) {}
    }
    window.addEventListener("pagehide", hardStop);
    window.addEventListener("beforeunload", hardStop);

    try {
      synth.cancel();
    } catch (e) {}

    window.CivilengineerTTS = {
      config: C,
      play: play,
      pause: pause,
      resume: resume,
      stop: stop,
      extract: extractChunks
    };
  })();

