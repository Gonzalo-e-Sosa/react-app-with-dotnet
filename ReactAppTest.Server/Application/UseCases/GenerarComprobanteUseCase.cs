using ReactAppTest.Server.Domain.Fiscal;
using ReactAppTest.Server.Domain.Inventario;

namespace ReactAppTest.Server.Application.UseCases;

/// <summary>
/// Caso de uso para generar un comprobante/factura y actualizar stock.
/// </summary>
public class GenerarComprobanteUseCase
{
    private readonly IComprobanteRepository _comprobanteRepo;
    private readonly IProductoRepository _productoRepo;

    public GenerarComprobanteUseCase(IComprobanteRepository comprobanteRepo, IProductoRepository productoRepo)
    {
        _comprobanteRepo = comprobanteRepo;
        _productoRepo = productoRepo;
    }

    /// <summary>
    /// Genera un comprobante y descuenta stock de los productos involucrados.
    /// </summary>
    public async Task<int> EjecutarAsync(Comprobante comprobante)
    {
        // Validar stock
        foreach (var detalle in comprobante.Detalles)
        {
            var producto = await _productoRepo.GetByIdAsync(detalle.ProductoId);
            if (producto == null)
                throw new Exception($"Producto {detalle.ProductoId} no encontrado");
            if (producto.Stock < detalle.Cantidad)
                throw new Exception($"Stock insuficiente para producto {producto.Nombre}");
        }

        // Descontar stock
        foreach (var detalle in comprobante.Detalles)
        {
            var producto = await _productoRepo.GetByIdAsync(detalle.ProductoId);
            producto!.Stock -= detalle.Cantidad;
            await _productoRepo.UpdateAsync(producto);
        }

        // Guardar comprobante
        await _comprobanteRepo.AddAsync(comprobante);
        return comprobante.Id;
    }
}
