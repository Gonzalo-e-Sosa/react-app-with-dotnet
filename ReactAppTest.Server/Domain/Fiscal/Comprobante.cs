namespace ReactAppTest.Server.Domain.Fiscal;

public class Comprobante
{
    public int Id { get; set; }
    public string Tipo { get; set; } = string.Empty; // A, B, C, Nota de crédito, etc.
    public DateTime Fecha { get; set; }
    public int ClienteId { get; set; }
    public decimal Importe { get; set; }
    public decimal Impuestos { get; set; }
    public string Numero { get; set; } = string.Empty;
    public List<ComprobanteDetalle> Detalles { get; set; } = new();
}

public class ComprobanteDetalle
{
    public int Id { get; set; }
    public int ProductoId { get; set; }
    public int Cantidad { get; set; }
    public decimal PrecioUnitario { get; set; }
    public decimal Subtotal => Cantidad * PrecioUnitario;
}
