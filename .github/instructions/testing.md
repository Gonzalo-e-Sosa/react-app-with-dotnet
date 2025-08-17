# Estrategia de Testing en el Monolito (.NET + React)

## Niveles de Prueba
1. **Unit Tests (React + .NET)**
   - React: usar `Vitest` + `Testing Library`.
   - .NET: usar `xUnit`.
   - Los tests deben colocarse junto al archivo de código con extensión `.test.tsx` o `.Tests.cs`.

2. **Integration Tests**
   - React: testear componentes que usen hooks y stores.
   - .NET: testear repositorios y servicios con base de datos en memoria.

3. **E2E Tests**
   - Usar `Playwright`.
   - Escenarios críticos: login, checkout, dashboards.
   - Los tests se ubican en `__tests__/e2e`.

4. **Visual Regression Tests**
   - Usar `Storybook` + `@storybook/testing-library`.
   - No se usa Chromatic, las pruebas visuales se ejecutan localmente con Playwright.

## Estructura de carpetas
reactapptest.client
├─__tests__/
    ├─ unit/
    │   └─ Button.test.tsx
    ├─ integration/
    │   └─ LoginForm.test.tsx
    └─ e2e/
        └─ login.spec.ts
ReactAppTest.Server.Tests


## Convenciones
- Usar **AAA (Arrange-Act-Assert)** en los tests.
- Los nombres de los tests deben describir el comportamiento esperado.
- Cada PR debe pasar todos los tests antes de mergearse.
