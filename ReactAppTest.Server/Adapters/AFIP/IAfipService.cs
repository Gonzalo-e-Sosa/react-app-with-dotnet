namespace ReactAppTest.Server.Adapters.AFIP;

/// <summary>
/// Puerto para integración con AFIP (facturación electrónica, validación CUIT, etc).
/// </summary>
public interface IAfipService
{
    Task<bool> ValidarCUITAsync(string cuit);
    Task<string> AutorizarComprobanteAsync(string tipo, decimal importe, string cuitCliente);
}
