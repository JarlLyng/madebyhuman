# Contributing to Made by Human

Thank you for your interest in contributing! Made by Human is an open project — everyone is welcome to bring badges, ideas, text, design, or code.

## How to contribute

1. **Fork** the repository
2. **Create a branch** for your changes (`git checkout -b feat/my-change`)
3. **Make your changes** and test locally (`npm run dev`)
4. **Run the build** to verify (`npm run build`)
5. **Create a pull request** to `main`

## Branch protection

The `main` branch is protected:
- All changes must go through pull requests
- The CI build must pass before merging
- Force pushes are blocked

## Development setup

```bash
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## What to contribute

### Badge designs
New badge concepts are welcome. Place SVG files in `public/badges/` with both white and black variants. Add the badge data to `src/lib/badges.ts`.

### Code improvements
Bug fixes, accessibility improvements, performance optimizations, and new features are all appreciated. Check the [open issues](https://github.com/JarlLyng/madebyhuman/issues) for ideas.

### Content
Improvements to copy, translations, or documentation. The about page is at `src/app/about/page.tsx`.

## Code style

- TypeScript with strict types
- Tailwind CSS for styling
- Follow existing patterns in the codebase
- Run `npm run lint` before submitting

## Commit messages

Use clear, descriptive commit messages:
- `feat: add new badge design`
- `fix: correct badge download on Safari`
- `docs: update contributing guidelines`

## Questions?

Open an [issue](https://github.com/JarlLyng/madebyhuman/issues) or start a [discussion](https://github.com/JarlLyng/madebyhuman/discussions).
