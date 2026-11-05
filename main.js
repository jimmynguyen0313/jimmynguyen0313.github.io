(function () {
  const site = window.SITE;
  const $ = (sel) => document.querySelector(sel);

  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k === "html") node.innerHTML = v;
      else node.setAttribute(k, v);
    }
    for (const c of [].concat(children)) if (c) node.append(c);
    return node;
  };

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" stroke="none" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg>',
    resume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 7-5 5 5 5M16 7l5 5-5 5"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
  };

  // ── Header / about ──────────────────────────────────────────
  const initials = site.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2);
  $("#brand").textContent = initials;
  $("#hero-name").textContent = site.name.split(" ")[0];
  $("#hero-eyebrow").textContent = [site.title, site.location].filter(Boolean).join(" · ");
  $("#footer-name").textContent = site.name;
  $("#year").textContent = new Date().getFullYear();
  site.bio.forEach((p) => $("#hero-bio").append(el("p", { text: p })));

  const avatar = $("#avatar");
  if (site.photo) avatar.append(el("img", { src: site.photo, alt: "" }));
  else avatar.textContent = initials;

  const linkButtons = (primaryEmail) => {
    const L = site.links;
    const items = [
      L.email && { key: "email", label: "Email", href: `mailto:${L.email}` },
      L.github && { key: "github", label: "GitHub", href: L.github },
      L.linkedin && { key: "linkedin", label: "LinkedIn", href: L.linkedin },
      L.resume && { key: "resume", label: "Resume", href: L.resume },
    ].filter(Boolean);
    return items.map((it) => {
      const external = !it.href.startsWith("mailto:");
      const a = el("a", {
        class: "btn" + (primaryEmail && it.key === "email" ? " btn--primary" : ""),
        href: it.href,
        target: external ? "_blank" : null,
        rel: external ? "noopener" : null,
      });
      a.innerHTML = ICONS[it.key];
      a.append(el("span", { text: it.label }));
      return a;
    });
  };
  $("#hero-links").append(...linkButtons(false));
  $("#contact-links").append(...linkButtons(true));

  // ── Projects ────────────────────────────────────────────────
  const lightbox = $("#lightbox");
  const openLightbox = (img) => {
    lightbox.querySelector("img").src = img.src;
    lightbox.querySelector("img").alt = img.alt || "";
    lightbox.querySelector(".lightbox__caption").textContent = img.alt || "";
    lightbox.showModal();
  };
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox__close")) lightbox.close();
  });

  const gallery = (images, name) => {
    let i = 0;
    const frame = el("button", { class: "gallery__frame", type: "button", "aria-label": `Enlarge screenshot of ${name}` });
    const img = el("img", { loading: "lazy", decoding: "async" });
    frame.append(img);
    const wrap = el("div", { class: "gallery" }, [frame]);
    const dots = el("div", { class: "gallery__dots" });

    const show = (n) => {
      i = (n + images.length) % images.length;
      img.src = images[i].src;
      img.alt = images[i].alt || `${name} screenshot ${i + 1}`;
      [...dots.children].forEach((d, k) => d.setAttribute("aria-current", k === i ? "true" : "false"));
    };
    frame.addEventListener("click", () => openLightbox(images[i]));

    if (images.length > 1) {
      const prev = el("button", { class: "gallery__nav gallery__nav--prev", type: "button", "aria-label": "Previous screenshot", html: ICONS.prev });
      const next = el("button", { class: "gallery__nav gallery__nav--next", type: "button", "aria-label": "Next screenshot", html: ICONS.next });
      prev.addEventListener("click", () => show(i - 1));
      next.addEventListener("click", () => show(i + 1));
      images.forEach((_, k) => {
        const d = el("button", { class: "gallery__dot", type: "button", "aria-label": `Screenshot ${k + 1}` });
        d.addEventListener("click", () => show(k));
        dots.append(d);
      });
      wrap.append(prev, next, dots);
    }
    show(0);
    return wrap;
  };

  const list = $("#project-list");
  window.PROJECTS.forEach((p) => {
    const hasMedia = p.images && p.images.length;
    const card = el("article", { class: "project reveal" + (hasMedia ? "" : " project--text") });

    if (hasMedia) card.append(gallery(p.images, p.name));

    const body = el("div", { class: "project__body" });
    const head = el("div", { class: "project__head" }, [
      el("h3", { class: "project__name", text: p.name }),
      p.date && el("span", { class: "project__date mono", text: p.date }),
    ]);
    body.append(head, el("p", { class: "project__desc", text: p.description }));

    if (p.highlights && p.highlights.length) {
      const ul = el("ul", { class: "project__points" });
      p.highlights.forEach((h) => ul.append(el("li", { text: h })));
      body.append(ul);
    }
    if (p.tags && p.tags.length) {
      const tags = el("ul", { class: "tags", "aria-label": "Technologies" });
      p.tags.forEach((t) => tags.append(el("li", { text: t })));
      body.append(tags);
    }

    const actions = el("div", { class: "project__actions" });
    if (p.demo) {
      const a = el("a", { class: "btn btn--primary", href: p.demo, target: "_blank", rel: "noopener" });
      a.innerHTML = ICONS.external;
      a.append(el("span", { text: "Live Demo" }));
      actions.append(a);
    }
    if (p.repo) {
      const a = el("a", { class: "btn", href: p.repo, target: "_blank", rel: "noopener" });
      a.innerHTML = ICONS.code;
      a.append(el("span", { text: "Code" }));
      actions.append(a);
    }
    if (actions.children.length) body.append(actions);
    if (p.note) body.append(el("p", { class: "project__note", text: p.note }));

    card.append(body);
    list.append(card);
  });

  // ── Experience / education / skills ─────────────────────────
  window.EXPERIENCE.forEach((x) => {
    const ul = el("ul");
    x.points.forEach((pt) => ul.append(el("li", { text: pt })));
    $("#experience-list").append(
      el("article", { class: "job reveal" }, [
        el("div", { class: "job__head" }, [
          el("div", {}, [
            el("h3", { class: "job__role", text: x.role }),
            el("p", { class: "job__org", text: [x.org, x.detail].filter(Boolean).join(" · ") }),
          ]),
          el("span", { class: "mono job__date", text: x.date }),
        ]),
        ul,
      ])
    );
  });

  window.EDUCATION.forEach((e) => {
    $("#education-list").append(
      el("div", { class: "edu__item reveal" }, [
        el("div", {}, [el("h4", { text: e.school }), el("p", { text: e.degree })]),
        el("span", { class: "mono", text: e.date }),
      ])
    );
  });

  Object.entries(window.SKILLS).forEach(([group, items]) => {
    const tags = el("ul", { class: "tags" });
    items.forEach((t) => tags.append(el("li", { text: t })));
    $("#skills-list").append(el("div", { class: "skills__group reveal" }, [el("h4", { text: group }), tags]));
  });

  // ── Theme toggle ────────────────────────────────────────────
  $("#theme-toggle").addEventListener("click", () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  // ── Reveal on scroll ────────────────────────────────────────
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("is-visible"));
  }
})();
