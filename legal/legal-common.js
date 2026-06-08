;(function () {
  "use strict"

  var LANGS = [
    { id: "en", label: "English" },
    { id: "zh", label: "简体中文" },
    { id: "ja", label: "日本語" },
    { id: "ko", label: "한국어" },
    { id: "fr", label: "Français" },
    { id: "de", label: "Deutsch" },
    { id: "es", label: "Español" },
    { id: "pt", label: "Português" },
    { id: "ru", label: "Русский" },
    { id: "hi", label: "हिन्दी" }
  ]

  var LANG_SET = {}
  for (var i = 0; i < LANGS.length; i++) {
    LANG_SET[LANGS[i].id] = true
  }

  var LANG_SELECTOR_LABEL = {
    en: "Language",
    zh: "语言",
    ja: "言語",
    ko: "언어",
    fr: "Langue",
    de: "Sprache",
    es: "Idioma",
    pt: "Idioma",
    ru: "Язык",
    hi: "भाषा"
  }

  function langSelectorLabel(lang) {
    return LANG_SELECTOR_LABEL[lang] || LANG_SELECTOR_LABEL.en
  }

  function detectLang() {
    try {
      var q = new URLSearchParams(window.location.search).get("lang")
      if (q && LANG_SET[q]) {
        return q
      }
    } catch (e) {
      /* ignore */
    }
    var nav = (navigator.language || "en").toLowerCase().split("-")[0]
    return LANG_SET[nav] ? nav : "en"
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
  }

  function renderSections(sections) {
    var html = ""
    for (var i = 0; i < sections.length; i++) {
      var sec = sections[i]
      html += "<h2>" + escapeHtml(sec.h) + "</h2>"
      if (sec.p) {
        for (var j = 0; j < sec.p.length; j++) {
          html += "<p>" + sec.p[j] + "</p>"
        }
      }
      if (sec.ul) {
        html += "<ul>"
        for (var k = 0; k < sec.ul.length; k++) {
          html += "<li>" + sec.ul[k] + "</li>"
        }
        html += "</ul>"
      }
    }
    return html
  }

  function fillSelect(select, lang) {
    select.innerHTML = ""
    for (var i = 0; i < LANGS.length; i++) {
      var opt = document.createElement("option")
      opt.value = LANGS[i].id
      opt.textContent = LANGS[i].label
      if (LANGS[i].id === lang) {
        opt.selected = true
      }
      select.appendChild(opt)
    }
  }

  function applyPage(docKey, pageId) {
    var catalog = window.LEGAL_I18N && window.LEGAL_I18N[docKey]
    if (!catalog) {
      return
    }
    var lang = detectLang()
    var doc = catalog[lang] || catalog.en
    if (!doc) {
      return
    }

    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang
    document.title = doc.title

    var titleEl = document.getElementById("doc-title")
    var updatedEl = document.getElementById("doc-updated")
    var bodyEl = document.getElementById("doc-body")
    var footerEl = document.getElementById("doc-footer")
    var linkEl = document.getElementById("doc-sibling-link")
    var langLabelEl = document.getElementById("lang-label")
    var select = document.getElementById("lang-select")
    var langLabel = langSelectorLabel(lang)

    if (titleEl) {
      titleEl.textContent = doc.title
    }
    if (updatedEl) {
      updatedEl.textContent = doc.updatedLabel
    }
    if (bodyEl) {
      bodyEl.innerHTML = renderSections(doc.sections)
    }
    if (footerEl && doc.footer) {
      footerEl.textContent = doc.footer
    }
    if (linkEl && doc.siblingLink) {
      linkEl.textContent = doc.siblingLink.label
      linkEl.href = doc.siblingLink.href + "?lang=" + encodeURIComponent(lang)
    }
    if (langLabelEl) {
      langLabelEl.textContent = langLabel
    }
    if (select) {
      select.setAttribute("aria-label", langLabel)
      fillSelect(select, lang)
      select.onchange = function () {
        var next = select.value
        var url = new URL(window.location.href)
        url.searchParams.set("lang", next)
        window.location.href = url.toString()
      }
    }
  }

  window.LegalPages = {
    LANGS: LANGS,
    detectLang: detectLang,
    applyPage: applyPage
  }
})()
