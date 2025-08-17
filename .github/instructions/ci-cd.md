# CI/CD

- Cada *pull request* dispara:
  - `npm run lint` en `reactapptest.client/`
  - `npm run test` en `reactapptest.client/`
  - `dotnet test` en `ReactAppTest.Server.Tests/`

- En `main`, se corre además:
  - `npm run build`
  - `dotnet build`
