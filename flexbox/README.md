# Flexbox — Techium Website (Holberton School)

A project to refactor the **Techium** static site using Flexbox only (HTML & CSS). You’ll progressively replace float-based layouts, align content on both axes, and build an article hero.

## Resources

* A Complete Guide to Flexbox (CSS-Tricks)
* Flexbox Froggy, Flexbox Defense
* Flexbox Cheatsheet
* CSS Flexible Box Layout — MDN
* afonsopacifer/awesome-flexbox
* Build with Flexbox, Flexplorer
* CSS Flexible Box Layout Module Level 1 (spec)
* FLEX visual cheatsheet

## Learning Objectives

* Understand what Flexbox is and when to use it
* Convert float layouts to Flexbox
* Align elements horizontally/vertically
* Master main vs cross axis
* Distinguish container vs item properties
* Use Flex shorthands appropriately
* Plan a page “with flex in mind”

## Requirements

* All files end with a newline
* A `README.md` at the project root is mandatory
* **No external libraries** (HTML/CSS only; no Node/React/Vue/Bootstrap, etc.)
* Keep code readable and consistent

## Project Files & Assets

* Use the provided HTML/CSS starter files (tasks 0 → 10)
* Download and place required images into `/images` at the repo root
* Additional article files are provided for later tasks

## Getting Started

1. Work inside `holbertonschool-web_front_end/flexbox`.
2. For each task, start from the **previous task’s** files.
3. Open files in a browser or simple static server. No build step needed.

## Directory Structure

```
flexbox/
├─ images/
├─ 0-index.html … 0-styles.css
├─ …
├─ 10-article.html … 10-styles.css
├─ …
├─ 14-article.html … 14-styles.css
└─ README.md
```

## Task Overview (no solutions)

* **0.** Convert the grid container to Flexbox and remove float-based artifacts.
* **1.** Add semantic section classes to the main sections.
* **2.** Reverse the visual order of the “Latest News” cards using Flexbox.
* **3.** Merge duplicate lists in Services and allow items to wrap.
* **4.** Adjust service card spacing with a consistent gutter approach.
* **5.** Make the header layout flexible and distribute space between logo and nav.
* **6.** Turn the navbar into a flex layout and simplify item spacing.
* **7.** Vertically align header elements.
* **8.** Simplify the hero banner layout with a columnar flex structure.
* **9.** Improve vertical alignment in “About Us”.
* **10.** Introduce a reusable homepage hero and update hero styles; prepare article page.
* **11.** Build the article hero with background image and overlay.
* **12.** Create the main article structure with content and aside.
* **13.** Add a meta list (author, date, tags) in the aside.
* **14.** Add share icons in the aside.

## Accessibility & Semantics

* Use proper landmarks (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
* Logical heading order; descriptive alt text; clear link text; sufficient contrast

## Validation & QA

* Validate HTML/CSS with W3C tools
* Test at common breakpoints (mobile → desktop)
* Manually verify header/nav alignment, services wrapping/spacing, latest news order, and article hero overlay stacking

## Git

* Repo: `holbertonschool-web_front_end`
* Dir: `flexbox`
* Make small, task-scoped commits with clear messages