namespace ReactAppTest.Server.Domain.Fiscal;

public interface IComprobanteRepository
{
    Task<Comprobante?> GetByIdAsync(int id);
    Task<IEnumerable<Comprobante>> GetAllAsync();
    Task AddAsync(Comprobante comprobante);
    Task UpdateAsync(Comprobante comprobante);
    Task DeleteAsync(int id);
}
