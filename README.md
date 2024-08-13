[<img src="https://essentials.supersaas.dev/supersaas-banner.png">](http://supersaas.dev?ref=github-vextension)

# Modernized Chrome Extension Vite Starter

> A [Vite](https://vitejs.dev/) Powered `Modernized Chrome Extension Manifest V3` ([Chrome](https://developer.chrome.com/docs/extensions/mv3/getstarted/)) Starter Template.

|  Page Type   |                                                             Light Mode                                                              |                                                             Dark Mode                                                              |
| :----------: | :---------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
|  Popup Page  |  ![](https://cdn.jsdelivr.net/gh/xiaoluoboding/image-hub-for-repo@latest/chrome-ext-mv3-starter/202107_extpreview_popup_light.png)  |  ![](https://cdn.jsdelivr.net/gh/xiaoluoboding/image-hub-for-repo@latest/chrome-ext-mv3-starter/202107_extpreview_popup_dark.png)  |
| Options Page | ![](https://cdn.jsdelivr.net/gh/xiaoluoboding/image-hub-for-repo@latest/chrome-ext-mv3-starter/202107_extpreview_options_light.png) | ![](https://cdn.jsdelivr.net/gh/xiaoluoboding/image-hub-for-repo@latest/chrome-ext-mv3-starter/202107_extpreview_options_dark.png) |

## Features

- ⚡️ **Instant HMR** - use **Vite** on dev (no more refresh!)
- 🥝 Vue 3 - Composition API, [`<script setup>` syntax](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md) and more!
- 💬 Effortless communications - powered by [`webext-bridge`](https://github.com/antfu/webext-bridge) and [VueUse](https://github.com/antfu/vueuse) storage
- 🧭 Vue Router support - Navigation to pages
- 🍃 [Tailwind CSS](https://tailwindcss.com/) - on-demand CSS utilities
- 🦾 [TypeScript](https://www.typescriptlang.org/) - type safe
- 📦 [Components auto importing](./src/components)
- 🌟 [Icons](./src/components) - Access to icons from any iconset directly
- 🌛 Dark Mode - support toggle dark mode
- 📃 Dynamic `manifest.json` with full type support

## Pre-packed

### WebExtension Libraries

- [`webextension-polyfill-ts`](https://github.com/Lusito/webextension-polyfill-ts) - WebExtension browser API Polyfill with types
- [`webext-bridge`](https://github.com/antfu/webext-bridge) - effortlessly communication between contexts

### Vite Plugins

- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - components auto import

### Vue Plugins

- [`vue-global-api`](https://github.com/antfu/vue-global-api) - use Vue Composition API globally
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

### UI Frameworks

- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - A utility-first CSS framework for rapid UI development.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) - icons as Vue components

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [tsup](https://github.com/egoist/tsup) - Zero config TypeScript bundler powered by esbuild
- [esno](https://github.com/antfu/esno) - TypeScript / ESNext node runtime powered by esbuild
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - Run multiple npm-scripts in parallel or sequential

## Use the Template

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/xiaoluoboding/chrome-ext-mv3-starter/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

> If you don't have pnpm installed, run: npm install -g pnpm

```bash
npx degit xiaoluoboding/chrome-ext-mv3-starter my-extension
cd my-extension
pnpm i
```

## Usage

### Folders

- `src` - background scripts and content scripts & frontend for the extension (popup and options).
  - `manifest.ts` - manifest for the extension.
- `extension` - extension package root, also holds assets.
- `scripts` - development helper scripts.

### Development

```bash
pnpm dev
```

Then **load extension in browser with the `extension/` folder**,

### Build

To build the extension, run

```bash
pnpm build
```

And then pack files under `extension`.

## Credits

This is a template derived from [antfu/vitesse-webext](https://github.com/antfu/vitesse-webext) and [xiaoluoboding/chrome-ext-mv3-starter](https://github.com/xiaoluoboding/chrome-ext-mv3-starter)


## License

[MIT](./LICENSE) - [@xiaoluoboding](https://github.com/xiaoluoboding)
