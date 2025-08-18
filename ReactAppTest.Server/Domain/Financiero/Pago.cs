namespace ReactAppTest.Server.Domain.Financiero;

public class Pago
{
    public int Id { get; set; }
    public int ClienteId { get; set; }
    public decimal Importe { get; set; }
    public DateTime Fecha { get; set; }
    public string MedioPago { get; set; } = string.Empty; // Efectivo, transferencia, etc.
    public string? Referencia { get; set; }
}
