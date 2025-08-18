namespace ReactAppTest.Server.Domain.Inventario;

public class StockEvent
{
    public int ProductoId { get; set; }
    public int CantidadAnterior { get; set; }
    public int CantidadNueva { get; set; }
    public DateTime Fecha { get; set; } = DateTime.UtcNow;
    public string Motivo { get; set; } = string.Empty;
}
