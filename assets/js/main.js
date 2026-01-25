(() => {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("is-open")) return;
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      if (nav.contains(target) || toggle.contains(target)) return;
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".site-nav .nav-link").forEach((a) => {
    if (!(a instanceof HTMLAnchorElement)) return;
    const href = a.getAttribute("href") || "";
    const clean = href.replace(/\/+$/, "") || "/";
    if (clean !== "/" && path.startsWith(clean)) a.setAttribute("aria-current", "page");
    if (clean === "/" && path === "/") a.setAttribute("aria-current", "page");
  });

  const form = document.querySelector("[data-contact-form]");
  if (form instanceof HTMLFormElement) {
    const hint = form.querySelector("[data-form-hint]");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const message = String(fd.get("message") || "").trim();

      const subject = encodeURIComponent(`İletişim Formu: ${name || "İsimsiz"}`);
      const body = encodeURIComponent(
        [
          `Ad Soyad: ${name}`,
          `E‑posta: ${email}`,
          phone ? `Telefon: ${phone}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      );

      const mailto = `mailto:songulbabacanofficial@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailto;

      if (hint instanceof HTMLElement) {
        hint.textContent = "E‑posta uygulamanız açılıyor…";
      }
    });
  }

  const joinModal = document.querySelector("[data-join-modal]");
  const joinForm = document.querySelector("[data-join-form]");
  const joinHint = joinForm?.querySelector("[data-join-hint]") ?? null;
  const openJoinButtons = Array.from(document.querySelectorAll("[data-open-join]"));
  const closeJoinButtons = Array.from(document.querySelectorAll("[data-close-join]"));

  const setJoinHint = (msg) => {
    if (joinHint instanceof HTMLElement) joinHint.textContent = msg;
  };

  const openJoin = () => {
    if (!(joinModal instanceof HTMLElement)) return;
    joinModal.classList.add("is-open");
    joinModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setJoinHint("");

    const firstInput = joinModal.querySelector("input, textarea, button");
    if (firstInput instanceof HTMLElement) firstInput.focus();
  };

  const closeJoin = () => {
    if (!(joinModal instanceof HTMLElement)) return;
    joinModal.classList.remove("is-open");
    joinModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setJoinHint("");
  };

  openJoinButtons.forEach((el) => {
    el.addEventListener("click", (e) => {
      const target = e.currentTarget;
      if (target instanceof HTMLAnchorElement) e.preventDefault();
      openJoin();
    });
  });

  closeJoinButtons.forEach((el) => el.addEventListener("click", () => closeJoin()));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeJoin();
  });

  if (joinForm instanceof HTMLFormElement) {
    joinForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitter = e.submitter;
      const channel =
        submitter instanceof HTMLButtonElement ? submitter.value : String(new FormData(joinForm).get("channel") || "");

      const fd = new FormData(joinForm);
      const name = String(fd.get("name") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const city = String(fd.get("city") || "").trim();
      const note = String(fd.get("note") || "").trim();

      const sponsorCode = "0001109";
      const message = [
        "Merhaba, Farmasi girişimci başvurusu için yazıyorum.",
        `Sponsor Kod: ${sponsorCode}`,
        "",
        `İsim Soyisim: ${name}`,
        `Telefon: ${phone}`,
        city ? `Şehir: ${city}` : null,
        note ? `Not: ${note}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const toPhone = String(joinForm.getAttribute("data-join-phone") || "905423941889").replace(/[^\d]/g, "");

      if (channel === "email") {
        const subject = encodeURIComponent("Farmasi Kayıt Başvurusu (Sponsor Kod: 0001109)");
        const body = encodeURIComponent(message);
        window.location.href = `mailto:songulbabacanofficial@gmail.com?subject=${subject}&body=${body}`;
        setJoinHint("E‑posta uygulamanız açılıyor…");
        closeJoin();
        return;
      }

      const text = encodeURIComponent(message);
      const wa = `https://wa.me/${toPhone}?text=${text}`;
      window.open(wa, "_blank", "noopener,noreferrer");
      setJoinHint("WhatsApp açılıyor…");
      closeJoin();
    });
  }

  // Auto-open join modal on landing (unless recently dismissed)
  (() => {
    if (!(joinModal instanceof HTMLElement)) return;
    window.setTimeout(() => openJoin(), 120);
  })();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").catch(() => {});
    });
  }
})();
