namespace ReactAppTest.Server.Domain.Inventario;

public class Producto
{
    public int Id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public string Codigo { get; set; } = string.Empty;
    public decimal Precio { get; set; }
    public int Stock { get; set; }
}
