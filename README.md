# Maryam Maghsoudi — Personal Portfolio

A responsive personal portfolio for Maryam Maghsoudi, Senior Data Scientist. Designed for **https://maryammagy.github.io/**.

## What is included

- About, expertise, experience, projects, research, certifications, languages, and contact sections.
- Your uploaded portrait, stored locally in `assets/portfolio/maryam-maghsoudi.png`.
- A printable résumé at `/cv/` with a **Print / save PDF** button.
- Mobile navigation, accessible focus states, and reduced-motion support.
- A custom 404 page, search metadata, and redirects for the old portfolio URLs.

The website uses plain HTML, CSS, and JavaScript. **No npm, framework, package installation, or build step is required.**

## Open the project

The download contains an initialized Git repository on the `main` branch, with one initial commit and no remote configured. Extract the entire `maryam-portfolio` folder, including its hidden files, and open a terminal in that folder.

Check the repository:

```sh
git status
```

If your extraction tool did not retain the `.git` directory, initialize it again:

```sh
git init -b main
git add .
git commit -m "Initial portfolio website"
```

## Preview locally

From the project directory, run:

```sh
python -m http.server 8000
```

On systems where Python is named `python3`, use `python3 -m http.server 8000`.

Open **http://localhost:8000/**. Use the local server because asset paths start at the website root.

## Push to your existing GitHub repository

Your existing repository is `maryammagy/maryammagy.github.io`. Run:

```sh
git remote add origin https://github.com/maryammagy/maryammagy.github.io.git
git push -u origin main
```

Sign in using your Git client when prompted. Your previous site was on `master`; pushing this new `main` branch leaves that branch available for recovery. If `main` already contains other commits by the time you push, review and integrate that branch before proceeding.

This is a standalone repository. It is ready to push, but no remote GitHub repository or branch was created by downloading it.

## Publish with GitHub Pages

After pushing `main`:

1. Open the `maryammagy.github.io` repository on GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Choose branch **main** and folder **/(root)**.
5. Select **Save** and wait for the Pages deployment to finish.

The site will appear at **https://maryammagy.github.io/**. Keep `.nojekyll` in the repository root so GitHub serves these static files without the old Jekyll template.

Official setup documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

For the same root URL, use your existing `maryammagy.github.io` repository. A differently named project repository is published under a subpath; its asset paths and metadata would need to be adjusted before publishing there.

## Customize the website

| File | Purpose |
| --- | --- |
| `index.html` | Homepage content and links |
| `assets/portfolio/style.css` | Theme, layout, portrait framing, and print styles |
| `assets/portfolio/main.js` | Navigation, scroll state, and résumé print button |
| `assets/portfolio/maryam-maghsoudi.png` | Original uploaded portrait |
| `assets/portfolio/monogram.svg` | MM logo and favicon |
| `cv/index.html` | Web résumé |
| `404.html` | Missing-page recovery |
| `robots.txt`, `sitemap.xml` | Search engine metadata |

After editing:

```sh
git add .
git commit -m "Update portfolio"
git push
```

The portrait file is unchanged from the upload. Its circular framing is handled in CSS. Update the homepage and web résumé together when experience or qualifications change.

Public profile details were checked in November 2026. Full LinkedIn experience was sign-in restricted, so the work history retains the previously verified résumé information. Certification dates describe issue/test dates.
