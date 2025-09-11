# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic
Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added `globals` to `devDependencies` as part of replacing `eslint` with
  `@eslint/js@9.35.0`.
- Added CSS scroll snapping to slides.

### Changed

- Upgraded the Node.js version listed in `engines` to be between `24.2.0` and
  `25.0.0`.
- Upgraded `styelint` to `16.24.0`.
- Upgraded `stylelint-config-dfranklinau` to `2.0.0`.
- Replaced `eslint` with `@eslint/js@9.35.0`.
- Upgraded `eslint-config-prettier` to `10.1.8`.
- Replaced `.eslintrc.js` with `eslint.config.js` and updated the ESLint
  configuration to a new default via `npm init @eslint/config@latest`.
- Upgraded `prettier` to `3.6.2`.

### Removed

- Removed `-slide-` from CSS custom properties relating to colours, spacing and
  typography.
- Renamed `--slides-css-spacing-offset` to `--slides-css-spacing-margin`.

## [0.3.1] - 2025-09-09

### Added

- Added padding to the default `.slide` style.

### Changed

- Moved the CSS and JavaScript files within a `src` directory.
- Changed the value of slide margins from `15rem` to `20mm`.

### Fixed

- Updated the version number in `package-lock.json`.

## [0.3.0] - 2023-10-14

### Added

- Added support for toggling a "DRAFT" overlay on slides.
- Added ESLint.
- Added Prettier.

### Changed

- Defined `slides.*.js` as an Immediately Invoked Function Expression (IIFE).
- Reworked the npm scripts. `npm start` will run linters and fixers, while `npm
  run lint` and `npm run fix` will perform either task individually.

## [0.2.1] - 2023-10-12

### Added

- Added version information to the JavaScript plugin.

### Fixed

- Fixed the section in the README outlining the included files.
- Fixed the `npm run lint` script to not include the version in the file name to
  run `stylelint` against.

## [0.2.0] - 2023-10-12

### Added

- Added an optional JavaScript plugin.
- Added support for `X of Y` styled page numbers via the JavaScript plugin.
- Added the `stylelint-config-dfranklinau` Stylelint plugin.
- Added an `.editorconfig` file.

### Fixed

- Resolved `comment-whitespace-inside` errors.
- Resolved `no-duplicate-selectors` errors.

## [0.1.0] - 2023-06-10

### Added

- Everything.

[Unreleased]: https://github.com/dfranklinau/website-generator/compare/v0.3.1...HEAD
[0.3.1]: https://github.com/dfranklinau/website-generator/releases/tag/v0.3.1
[0.3.0]: https://github.com/dfranklinau/website-generator/releases/tag/v0.3.0
[0.2.1]: https://github.com/dfranklinau/website-generator/releases/tag/v0.2.1
[0.2.0]: https://github.com/dfranklinau/website-generator/releases/tag/v0.2.0
[0.1.0]: https://github.com/dfranklinau/website-generator/releases/tag/v0.1.0
