# End-to-End Tests Folder

This folder (`__tests__/e2e/`) should contain files related to end-to-end (E2E) testing for the project.

## Required Files

- **Test Specs:**  
    All E2E test files (e.g., `*.spec.js`, `*.spec.ts`, `*.test.js`, `*.test.ts`)  
    Example: `login.spec.ts`, `user-flow.test.js`

- **Test Utilities (optional):**  
    Helper functions or utilities used by E2E tests  
    Example: `test-helpers.ts`

- **Configuration Files (optional):**  
    E2E test runner configs if needed (e.g., `playwright.config.ts`, `cypress.json`)

## Excluded Files

- Do **not** include unit tests or unrelated source code.
- Do **not** include build artifacts or temporary files.

## Example Structure

```
__tests__/e2e/
├── login.spec.ts
├── user-flow.test.js
├── test-helpers.ts
└── README.md
```