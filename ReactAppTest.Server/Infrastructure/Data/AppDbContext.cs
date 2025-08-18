using Microsoft.EntityFrameworkCore;
using ReactAppTest.Server.Domain.Fiscal;
using ReactAppTest.Server.Domain.Inventario;
using ReactAppTest.Server.Domain.Financiero;

namespace ReactAppTest.Server.Infrastructure.Data;

/// <summary>
/// DbContext principal de la aplicación.
/// </summary>
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Comprobante> Comprobantes => Set<Comprobante>();
    public DbSet<ComprobanteDetalle> ComprobanteDetalles => Set<ComprobanteDetalle>();
    public DbSet<Cliente> Clientes => Set<Cliente>();
    public DbSet<Proveedor> Proveedores => Set<Proveedor>();
    public DbSet<Usuario> Usuarios => Set<Usuario>();
    public DbSet<Producto> Productos => Set<Producto>();
    public DbSet<Pago> Pagos => Set<Pago>();
    // Puedes agregar más DbSet según crezca el dominio

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        // Configuraciones adicionales (relaciones, restricciones, etc.)
    }
}
