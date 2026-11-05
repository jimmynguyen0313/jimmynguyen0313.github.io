# jimmynguyen0313.github.io

My personal portfolio site: https://jimmynguyen0313.github.io

Plain HTML, CSS and JavaScript with no build step. GitHub Pages serves it straight from `main`.

## Updating content

All the content lives in [`data.js`](data.js):

- **About**: name, title, bio and links in `SITE`
- **Projects**: add an entry to `PROJECTS`. Only `name` and `description` are required; add `images`, `demo` and `repo` when a project has them.
- **Experience, education, skills**: `EXPERIENCE`, `EDUCATION` and `SKILLS`

Screenshots go in `assets/projects/`. A profile photo goes at `assets/profile.jpg`, and a resume at `assets/resume.pdf`. Then set `photo` / `links.resume` in `data.js`.

## Running locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.
