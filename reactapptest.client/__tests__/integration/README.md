# Integration Tests Folder

This folder should contain integration test files for the project. The following files and structure are recommended:

- `*.test.js` or `*.test.tsx`: Integration test files for React components or application flows.
- `setupTests.js` (optional): Test setup file for initializing test environment.
- `__mocks__/`: (optional) Folder for mock implementations used in integration tests.
- `utils/`: (optional) Helper utilities for integration tests.

**Do not include:**
- Unit tests (should be in a separate folder)
- Production source code

Keep this folder focused on integration testing only.