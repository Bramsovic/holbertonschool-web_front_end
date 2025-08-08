<p align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="Sass" width="60" height="60"/>
  <h1 align="center">Sass/SCSS Fundamentals</h1>
  <p align="center">Holberton School • SCSS CLI Module</p>
</p>

<p align="center">
  <a href="https://sass-lang.com/"><img src="https://img.shields.io/badge/Sass-Dart%20Sass-cc6699" alt="Dart Sass"></a>
  <a href="#🗂️-repo-structure"><img src="https://img.shields.io/badge/📁-Structure-brightgreen" alt="Structure"></a>
  <a href="#📋-tasks-overview"><img src="https://img.shields.io/badge/📋-Tasks-blue" alt="Tasks"></a>
</p>

---

## 📝 Project Description

This project plunges you **directly into the heart of Sass/SCSS**: you will write `.scss` files, compile them with the `sass` command, and inspect their console outputs.  
The goal: master **variables**, **nesting**, **mixins**, **loops**, and **extends**, while leveraging **debug** to trace your code.

---

## 🗂️ Repo Structure

```bash
holbertonschool-web_front_end/
└── sass_scss/
    ├── 0-debug_log.scss
    ├── 1-color_variable.scss
    ├── 2-color_variables.scss
    ├── 3-nested_tag.scss
    ├── 4-nested_class.scss
    ├── 5-nested_child.scss
    ├── 6-nested_hover.scss
    ├── 7-nested_deeper.scss
    ├── 8-mixin_margins.scss
    ├── 9-extend_list.scss
    ├── 10-colors.scss
    ├── 10-import_colors.scss
    ├── 11-photos.scss
    ├── 11-loop_photos.scss
    └── 12-loop_header.scss
````

---

## 📋 Tasks Overview

|  #  | File                                        | Objective                                                                                      | Command & Expected Output                      |
| :-: | ------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------- |
|  0  | `0-debug_log.scss`                          | Print “Hello world” in the debug output                                                        | `sass 0-debug_log.scss` → `DEBUG: Hello world` |
|  1  | `1-color_variable.scss`                     | Define a variable for `#3D3D3D` and apply it to `body` and `p`                                 | `sass 1-color_variable.scss`                   |
|  2  | `2-color_variables.scss`                    | Use two variables (`text`, `bg`): apply text color to `body`, `p` and bg color to `body`, `h2` | `sass 2-color_variables.scss`                  |
|  3  | `3-nested_tag.scss`                         | Nested declarations: remove margin/padding from `body`, add `margin: 10px` to `body p`         | `sass 3-nested_tag.scss`                       |
|  4  | `4-nested_class.scss`                       | Nest `.red` inside `body` with a different color                                               | `sass 4-nested_class.scss`                     |
|  5  | `5-nested_child.scss`                       | Use direct child selector: `body > .red`                                                       | `sass 5-nested_child.scss`                     |
|  6  | `6-nested_hover.scss`                       | `button { color: red; &:hover { color: green } }`                                              | `sass 6-nested_hover.scss`                     |
|  7  | `7-nested_deeper.scss`                      | Cascading nesting: `body h1`, then `body h1.smaller`                                           | `sass 7-nested_deeper.scss`                    |
|  8  | `8-mixin_margins.scss`                      | Create a mixin for left/right margins                                                          | `sass 8-mixin_margins.scss`                    |
|  9  | `9-extend_list.scss`                        | Use `@extend`: have `.success` & `.warning` inherit from `.info`                               | `sass 9-extend_list.scss`                      |
|  10 | `10-colors.scss`<br>`10-import_colors.scss` | Define `$red`, `$green`, `$blue` then import and apply to `.red`, `.green`, `.blue`            | `sass 10-import_colors.scss`                   |
|  11 | `11-photos.scss`<br>`11-loop_photos.scss`   | Use `@each` to generate `.photo-<name>` classes with `image-url`                               | `sass 11-loop_photos.scss`                     |
|  12 | `12-loop_header.scss`                       | Use `@for` to create `h1`–`h5` with `font-size: 1px`–`5px`                                     | `sass 12-loop_header.scss`                     |

---

## ⚙️ Prerequisites & Compilation

1. Install **Dart Sass** (or a compatible Sass compiler)
2. In the `sass_scss/` directory, compile a file:

   ```bash
   sass 3-nested_tag.scss
   ```
3. Compare the console output with the expected example at the top of each task file.

---

## 📚 Resources

* **Sass Documentation** – [https://sass-lang.com/documentation](https://sass-lang.com/documentation)
* **MDN SCSS Guide** – [https://developer.mozilla.org/docs/Web/CSS/Sass](https://developer.mozilla.org/docs/Web/CSS/Sass)
* **Holberton School** – internal courses & Slack

