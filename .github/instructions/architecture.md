# Arquitectura del proyecto

El monolito está dividido en dos capas principales:

- **Frontend (React, carpeta `reactapptest.client/`)**
  - Arquitectura basada en *feature folders*.
  - Hooks se organizan en `/reactapptest.client/src/hooks` 
  - Stores se definen en `/reactapptest.client/src/store`.
  - Componentes reutilizables que no dependen de stores especificas y su contrato se basa en props se crean en `/reactapptest.client/src/components`

- **Backend (.NET, carpeta `Server/`)**
  - Arquitectura en capas:
    - `Domain/` → Entidades y reglas de negocio.
    - `Application/` → Casos de uso.
    - `Infrastructure/` → Repositorios, APIs externas, persistencia.
    - `Presentation/` → Controladores y endpoints.

Se debe favorecer el **principio de inversión de dependencias**: las capas superiores nunca dependen de detalles concretos de infraestructura.

