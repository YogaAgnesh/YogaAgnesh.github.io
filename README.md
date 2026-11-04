# Yoga Sakthi Agnesh — portfolio website

This folder contains the current static website and the source files needed to maintain it. It is ready for GitHub Pages. No framework, package installation, database, or paid hosting is required.

## Upload to GitHub

1. Open this folder in File Explorer.
2. Select ALL its contents, including the asset folders and dotfiles, and drag the selection into GitHub's **Add file → Upload files** area.
3. Commit the upload to `main`. At the repository's top level you should see `index.html`, `site.css`, the JavaScript files, and the asset folders. Do not upload this enclosing folder as a subfolder, and do not flatten the asset folders.
4. Under **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then **Save**.
5. GitHub will show the website address once its deployment finishes.

An account website uses a repository named `<your-username>.github.io`. A project repository also works and gets a URL with its repository name. Internal page navigation uses hash routes, and asset references are relative.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The empty `.nojekyll` file tells GitHub to serve the static files without Jekyll processing. The initial upload already includes the compiled styling, so no build is required to launch it.

## File map

| File or folder | Purpose |
| --- | --- |
| `index.html` | Entry page, navigation, metadata, script order and content security policy |
| `app.js` | Core project catalog, routes and interactions |
| `resume.js` | Professional experience, contact details and resume link |
| `stickers.js` | Hero introduction, portrait badge and draggable technology logos |
| `review.js` | Current experience strip and about-section presentation |
| `pipelines.js` | Pipeline diagrams and per-project `repositoryUrls` placeholders |
| `certifications.js` | Certification and course content |
| `theme-details.js` | Technology strip and related theme behavior |
| `studio.js`, `visuals.js`, `finishing.js`, `polish.js` | Shared visuals, page presentation and interaction enhancements |
| Separate `.css` files | Editable styling sources, combined in the order listed in the build script |
| `site.css` | Generated stylesheet loaded by the website; do not edit directly |
| `ysa-wordmark.svg` | YSA logo and browser icon |
| `brands/` | Technology and employer logos; `sources.json` records sources |
| `images/` | The two portraits actually used by the website |
| `certificates/` | Badge, certificate image and course PDFs |
| `docs/` | Resume PDF and downloadable project briefs |
| `cursors/` | Custom pointer SVGs |
| `scripts/` | Dependency-free Python build and validation helpers |

The current white-suit hero portrait is the user-requested edited portrait. The about section uses the other supplied portrait. Historical image variants, preview screenshots, deployment archives, local hosting tools and Git history are intentionally absent from this package.

## Make future changes

Open this whole folder in an editor. Keep file and folder names unchanged unless you also update their references. Preserve script order in `index.html`; presentation scripts extend earlier definitions.

For CSS changes, edit the relevant source file, then run this from this folder:

```powershell
python scripts/build-static.py
python scripts/audit-static.py
```

`build-static.py` regenerates `site.css` and updates its content hash in `index.html`. Upload the edited source files, regenerated `site.css`, and updated `index.html` together.

For JavaScript changes, update the relevant script and increment its `?v=` value in `index.html` when releasing, so returning visitors receive the update. If Node.js is installed, check each changed script with `node --check filename.js`.

To preview locally:

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/ in your browser. Press Ctrl+C in the terminal to stop the server. Check mobile widths, page navigation, the menu, project links, certificate downloads and the browser console before uploading changes.

The audit script checks entry asset references, SVG active content, dynamic code evaluation and selected CSP directives. It is not a complete security audit or a substitute for browser testing.

## Content and asset notes

Repository links remain clearly labeled placeholders. Replace the `null` entries in `repositoryUrls` in `pipelines.js` with real project URLs when ready. Planned projects must remain labeled planned until they are implemented and verified.

The resume and certificates included here are downloadable website content. All files uploaded to a public GitHub repository are publicly accessible.

No new reuse license is granted by this package. Third-party logos, fonts and other materials retain their respective owners' rights and applicable terms. Logo source records are retained in `brands/sources.json`. Google Fonts are loaded remotely, with local font fallbacks.
