var builder = WebApplication.CreateBuilder(args);

var AllowFrontendOrigin = "_AllowFrontendOrigin";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS
builder.Services.AddCors(options =>
{
    // Política para Desarrollo: permite el puerto del dev-server (usando IConfiguration)
    if (builder.Environment.IsDevelopment())
    {
        var devServerPort = builder.Configuration["DEV_SERVER_PORT"] ?? "58585";
        options.AddPolicy(AllowFrontendOrigin,
            policy =>
            {
                policy.WithOrigins($"https://localhost:{devServerPort}")
                      .AllowAnyHeader()
                      .AllowAnyMethod();
            });
    }
    // Política para Producción: permite el dominio de tu aplicación en producción
    else
    {
        options.AddPolicy(AllowFrontendOrigin,
            policy =>
            {
                policy.WithOrigins("https://mi-app.com") // <--- Reemplaza con tu dominio de producción
                      .AllowAnyHeader()
                      .AllowAnyMethod();
            });
    }
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors(AllowFrontendOrigin); // importa el orden

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
