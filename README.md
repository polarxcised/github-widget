# GitHub Widget

A **production-ready** GitHub badge widget that can be easily embedded on any website. It fetches a GitHub user's profile data (avatar, display name, etc.) from the public GitHub API and displays it in a **stylish, customizable** badge.

---

## Quick Start

To use this widget **immediately** on your website, insert a `<div>` with the class `"mini-gh-badge"` and the desired data attributes, then include the script from your GitHub repo via **jsDelivr**:

```html
<!-- Example usage -->
<div class="mini-gh-badge"
     data-user="octocat"
     data-gradient="blue-purple"
     data-border="2px solid #fff"
     data-typewriter="true"
     data-typewriter-speed="150">
</div>

<script src="https://cdn.jsdelivr.net/gh/anshkabra2012/github-widget@latest/widget.js"></script>
```

> **Note:** Replace `YourGitHubUsername` with your actual GitHub username, and `github-widget` with your repository name. If you use tags or specific versions, swap `@latest` with something like `@v1.0.0`.

---

## How It Looks

By default, the widget is a **rounded badge** with:
- A GitHub user avatar
- A typed (or static) display name
- A “View Profile” link

When you hover over the badge, it slightly **lifts** with a shadow effect. You can **customize** the background, border, and typewriter animation using the attributes below.

---

## Data Attributes

Add these attributes to your `<div class="mini-gh-badge">` to customize the badge:

### 1. `data-user`
- **Required**  
- The GitHub username to display (e.g., `octocat`, `torvalds`, etc.).  
- *Default:* `octocat`.

### 2. `data-gradient`
- **Optional**  
- Adds a gradient background. You can use a **preset** or a **custom** gradient.  
- **Presets** (case-sensitive):  
  - `blue-purple`  
  - `red-orange`  
  - `green`  
  - `sunset`  
  - `ocean`  
- **Custom:** Provide a valid CSS gradient value, e.g.,  
  `linear-gradient(135deg, #123456, #654321)`.  
- If omitted, the badge uses a light background (`#f6f8fa`).

### 3. `data-border`
- **Optional**  
- A custom border style (e.g., `3px solid #fff`).  
- If omitted, defaults to `2px solid #d1d5da`.

### 4. `data-typewriter`
- **Optional**  
- Set to `"true"` to enable a **continuous typewriter effect** for the username.  
- If omitted or set to anything else, the text is static.

### 5. `data-typewriter-speed`
- **Optional**  
- The **speed** (in milliseconds) for each character when typing.  
- Only relevant if `data-typewriter="true"`.  
- *Default:* `150`.

---

## Preset Gradients

If you set `data-gradient` to any of the **preset** names below, the badge will use a predefined gradient background:

| Preset         | CSS Value                                     |
| -------------- | --------------------------------------------- |
| **blue-purple**| `linear-gradient(135deg, #667eea, #764ba2)`    |
| **red-orange** | `linear-gradient(135deg, #f85032, #e73827)`    |
| **green**      | `linear-gradient(135deg, #56ab2f, #a8e063)`    |
| **sunset**     | `linear-gradient(135deg, #ff7e5f, #feb47b)`    |
| **ocean**      | `linear-gradient(135deg, #2b5876, #4e4376)`    |

---

## Full Example

Below is a **complete** HTML example demonstrating multiple badges with different configurations:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GitHub Widget Demo</title>
</head>
<body>
  <!-- Badge 1: Preset gradient, custom border, typewriter effect -->
  <div class="mini-gh-badge"
       data-user="octocat"
       data-gradient="blue-purple"
       data-border="3px solid #fff"
       data-typewriter="true"
       data-typewriter-speed="150">
  </div>
  
  <!-- Badge 2: Custom gradient, no typewriter -->
  <div class="mini-gh-badge"
       data-user="torvalds"
       data-gradient="linear-gradient(135deg, #123456, #654321)"
       data-border="2px dashed #333">
  </div>
  
  <!-- Badge 3: Plain background, default border -->
  <div class="mini-gh-badge" data-user="gaearon"></div>
  
  <!-- Include the widget script via jsDelivr (hosted on GitHub) -->
  <script src="https://cdn.jsdelivr.net/gh/YourGitHubUsername/github-widget@latest/widget.js"></script>
</body>
</html>
```

> **Pro Tip:** You can reference a specific **tag** or **commit** instead of using `@latest` to lock in a version.

---

## Local Development

1. **Clone** this repository:
   ```bash
   git clone https://github.com/YourGitHubUsername/github-widget.git
   cd github-widget
   ```

2. **Install dependencies** (optional, for local testing):
   ```bash
   npm install
   ```
   This will install a simple HTTP server (like [http-server](https://www.npmjs.com/package/http-server)).

3. **Start the local server**:
   ```bash
   npm start
   ```
   By default, this should serve files at `http://127.0.0.1:8080`.

4. **Open `index.html`** in your browser or navigate to `http://127.0.0.1:8080/index.html` to see the widget in action.

---

## Customization

Feel free to **edit the CSS** in `widget.js` to match your site’s branding or layout. You can:

- Adjust the **border radius** for a more square or more rounded look.
- Change the **box-shadow** or remove it entirely.
- Modify **hover** effects.
- Swap **fonts** for something else (e.g., `'Roboto'`, `'Open Sans'`, etc.).

---

## Contributing

Contributions are welcome! If you spot a bug or have a feature request, please open an issue or submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).  
Enjoy building with the **GitHub Widget**!
***</> by Ansh Kabra***
