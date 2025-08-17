# Patrones de diseño aprobados

- **Frontend**
  - State management: usar MobX stores con inversión de dependencias.
  - Componentes compartidos deben ser *presentational components* (sin lógica de negocio).
  - HOCs para cross-cutting concerns (auth, modals, logging).

- **Backend**
  - Repositorios: aplicar patrón Repository + Unit of Work.
  - Observadores: usar Observer para eventos de dominio.
  - Inyección de dependencias: usar contenedor nativo de .NET.
  - Aplicar *CQRS* en casos donde haya comandos y consultas complejas.
