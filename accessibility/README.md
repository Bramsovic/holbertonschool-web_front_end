# Accessibility

This project contains a set of small accessibility fixes based on the **Techium** HTML/CSS template. Each task focuses on one a11y rule (keyboard, landmarks, titles, labels, contrast, etc.) and must be implemented in a separate file.

## Repo

- **GitHub repository:** `holbertonschool-web_front_end`
- **Directory:** `accessibility/`

## Files / Tasks

### 0. Make the "works" card focus visible
- **Folder:** `keyboard/`
- **Files:** `01-styles.css`, `01-index.html`
- Fix the focus state on `.card-work` so keyboard users (TAB) can see the title just like on hover.

### 1. Add the skip-links
- **Folder:** `skip-links/`
- **Files:** `01-index.html`, `01-article.html`, `01-styles.css`
- Add skip links (`Skip to primary navigation`, `Skip to main content`) right after `<body>`, make them visible on focus.

### 2. Elements must have sufficient color contrast
- **Folder:** `fix-a11y/`
- **File:** `01-index.html`
- Remove the low-contrast inline styles and check with Axe.

### 3. Documents must have `<title>`
- **File:** `fix-a11y/02-index.html`
- Add `<title>Homepage - A fake website</title>`.

### 4. `<html>` must have `lang`
- **File:** `fix-a11y/03-index.html`
- Add `lang="en"` on `<html>`.

### 5. Images must have alternate text
- **File:** `fix-a11y/04-index.html`
- Add `alt="Name of the logo"` on the logo and empty alt on decorative hero image.

### 6. Form elements must have labels
- **File:** `fix-a11y/05-index.html`
- Add a visually hidden label, improve the input (`type="email"`, `autocomplete="email"`, `required`), and use a real button.

### 7. Links must have discernible text
- **File:** `fix-a11y/06-index.html`
- Add `aria-label="Facebook"` / `aria-label="Twitter"` on icon-only links.

### 8. Zooming and scaling must not be disabled
- **File:** `fix-a11y/07-index.html`
- Remove `user-scalable=no` from the viewport meta.

### 9. Heading levels and landmarks
- **File:** `fix-a11y/08-index.html`
- Fix the heading hierarchy (h1 → h2 → h3) and avoid using h1 for decorative numbers.

### 10. Document must have one main landmark
- **File:** `fix-a11y/09-index.html`
- Use semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.

### 11. More than 2 elements become list
- **File:** `fix-a11y/10-index.html`
- Convert repeated inline elements into proper `<ul><li>` lists (nav, package list).

## How to test

1. Open each HTML file in the browser.
2. Test keyboard navigation (TAB, SHIFT+TAB).
3. Run **Axe DevTools** or **Lighthouse → Accessibility** in DevTools.
4. Check that:
   - there is **1 main landmark**,
   - focus is always visible,
   - links have text or `aria-label`,
   - zoom is not blocked.

## Notes
- Keep the HTML structure from the starter files.
- Do **one change per task/file** (don’t mix tasks).
- Use the `a11y-` prefix for IDs when it helps to document purpose.
