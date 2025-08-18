using System.Threading.Tasks;

namespace ReactAppTest.Server.Adapters.AFIP;

/// <summary>
/// Implementación mock de IAfipService para desarrollo y testing.
/// </summary>
public class AfipServiceMock : IAfipService
{
    public Task<bool> ValidarCUITAsync(string cuit)
    {
        // Simula validación: acepta cualquier CUIT de 11 dígitos
        return Task.FromResult(cuit.Length == 11);
    }

    public Task<string> AutorizarComprobanteAsync(string tipo, decimal importe, string cuitCliente)
    {
        // Simula autorización: devuelve un CAE ficticio
        return Task.FromResult($"MOCK-CAE-{tipo}-{importe:0.00}-{cuitCliente}");
    }
}
