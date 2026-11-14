/* Dedal des Couleurs - interactions
   1 Menu mobile - 2 Rubriques depliables - 3 Filtres et tri - 4 Formulaire */
(function () {
  "use strict";

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /* 1. Menu mobile */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* 2. Rubriques depliables : toutes ouvertes sur grand ecran */
  var details = document.querySelectorAll("details[data-desktop-open]");
  var wide = window.matchMedia("(min-width: 960px)");
  function syncDetails() {
    details.forEach(function (d) {
      if (wide.matches) {
        d.setAttribute("open", "");
      }
    });
  }
  syncDetails();
  if (wide.addEventListener) {
    wide.addEventListener("change", syncDetails);
  }

  /* 3. Filtres et tri des oeuvres */
  var gallery = document.getElementById("gallery");
  if (gallery) {
    var items = Array.prototype.slice.call(gallery.querySelectorAll(".gallery__item"));
    var empty = document.getElementById("gallery-empty");
    var filters = { artist: "all", technique: "all" };

    var applyFilters = function () {
      var visible = 0;
      items.forEach(function (item) {
        var ok = (filters.artist === "all" || item.dataset.artist === filters.artist) &&
                 (filters.technique === "all" || item.dataset.technique === filters.technique);
        item.hidden = !ok;
        if (ok) { visible += 1; }
      });
      empty.hidden = visible !== 0;
    };

    document.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var group = chip.dataset.group;
        filters[group] = chip.dataset.value;
        document.querySelectorAll('.chip[data-group="' + group + '"]').forEach(function (c) {
          c.setAttribute("aria-pressed", c === chip ? "true" : "false");
        });
        applyFilters();
      });
    });

    var sort = document.getElementById("sort");
    sort.addEventListener("change", function () {
      var sorted = items.slice().sort(function (a, b) {
        if (sort.value === "titre") {
          return a.dataset.title.localeCompare(b.dataset.title, "fr");
        }
        return Number(a.dataset.order) - Number(b.dataset.order);
      });
      sorted.forEach(function (item) { gallery.appendChild(item); });
    });
  }

  /* 4. Formulaire d'inscription (les donnees ne sont pas enregistrees) */
  var form = document.getElementById("form-inscription");
  if (form) {
    var success = document.getElementById("succes");

    var setError = function (id, message) {
      var input = document.getElementById(id);
      document.getElementById("err-" + id).textContent = message;
      input.setAttribute("aria-invalid", message ? "true" : "false");
      return message === "";
    };

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      success.textContent = "";
      var prenom = document.getElementById("prenom").value.trim();
      var nom = document.getElementById("nom").value.trim();
      var email = document.getElementById("email").value.trim();

      var emailMsg = "";
      if (email === "") {
        emailMsg = "Saisissez votre adresse e-mail.";
      } else if (!EMAIL_RE.test(email)) {
        emailMsg = "Adresse e-mail invalide. Exemple : nom@domaine.fr";
      }

      var ok = setError("prenom", prenom ? "" : "Saisissez votre prénom.");
      ok = setError("nom", nom ? "" : "Saisissez votre nom.") && ok;
      ok = setError("email", emailMsg) && ok;

      if (ok) {
        success.textContent = "Merci " + prenom + ", votre inscription est prise en compte.";
        form.reset();
      }
    });
  }
})();
