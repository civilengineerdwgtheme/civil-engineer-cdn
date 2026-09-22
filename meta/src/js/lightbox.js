// CivilEngineerDWG Lightbox runtime
// Extracted from the validated developer template.
// Blogger markup and optional image-credit configuration remain inline.

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
