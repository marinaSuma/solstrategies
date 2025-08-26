# Website project built on top of Vue/Nuxt 3.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Project Setup](#project-setup)
- [Development](#development)
- [Deployment](#deployment)
- [Linting and Formatting](#linting-and-formatting)
- [Husky and Commitlint & Git](#husky-and-commitlint--git)
- [Contact Information](#contact-information)

## Technology Stack

The project leverages a variety of modern technologies and tools to provide a rich, seamless user experience.

- **Framework**: Vue / Nuxt 3
- **Type safety**: TypeScript
- **CSS**: SCSS
- **CSS Transformation**: PostCSS
- **Animation**: GSAP
- **State Management**: Pinia
- **Devtools**: Nuxt Devtools
- **Code Linter**: ESLint
- **Formatter**: Prettier
- **Bundler**: Vite
- **Version Control**: Git
- **Commit Linter**: Commitlint

## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

```bash
1. clone the repository
2. navigate into the project directory
3. install dependencies
```

## Development

To start the development server:
`npm run dev`

> default run at localhost:3000

## Deployment

The project can be built for production deployment using the following command:

**build for production and launch server**
`npm run build`
`npm run start`

## Linting and Formatting

This project uses ESLint and Prettier for maintaining code quality. ESLint helps in performing static analysis on the code to quickly find problems, and Prettier formats the code in a consistent style.

### Linting

We have added a script in `package.json` to lint the project using ESLint.

**lint the project**
`npm run lint`

If you want ESLint to fix the problems it can, you can use the lint-fix script.

**automatically fix problems using ESLint**
`npm run lint-fix`

### Formatting

Prettier is used to auto-format your code to keep it consistent with the established style.

**format the project using Prettier**
`npm run prettier`

We also have a script to run both the lint-fix and prettier scripts together.

**automatically fix problems and format the code**
`npm run format`

## Husky and Commitlint & Git

Husky and Commitlint are used in this project to maintain consistent git commit messages.

[Husky](https://typicode.github.io/husky) is a tool that allows us to run scripts at different stages of the git lifecycle, such as before committing (pre-commit) or before pushing (pre-push).

[Commitlint](https://commitlint.js.org/) checks if your commit messages meet the [conventional commit format](https://www.conventionalcommits.org/).

In our case, we use Husky to trigger Commitlint before every commit operation.

### Committing Code

When you commit code, Husky triggers the `commit-msg` hook which then runs Commitlint with the commit message. If the commit message does not meet the Conventional Commit format, Commitlint will throw an error, and the commit will be aborted.

To ensure smooth commits, structure your commit messages in the following format:

`<type>(optional scope): <description>`

Where `type` is one of the predefined types such as `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert` (check `commitlint.config.js` for more).

For example:

- `feat(user-auth): add login functionality`
- `refactor: auth function`

## Contact Information

For further information or assistance, feel free to contact.

- Developer: reksa.andhika@gmail.com - https://reksaandhika.com/

Thank you.
