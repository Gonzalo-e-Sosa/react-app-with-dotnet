namespace ReactAppTest.Server.Domain.Fiscal;

public interface IProveedorRepository
{
    Task<Proveedor?> GetByIdAsync(int id);
    Task<IEnumerable<Proveedor>> GetAllAsync();
    Task AddAsync(Proveedor proveedor);
    Task UpdateAsync(Proveedor proveedor);
    Task DeleteAsync(int id);
}
