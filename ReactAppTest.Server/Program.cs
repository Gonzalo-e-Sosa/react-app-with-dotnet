
using ReactAppTest.Server.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var AllowFrontendOrigin = "_AllowFrontendOrigin";


// Add DbContext with SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS
builder.Services.AddCors(options =>
{
    // Pol�tica para Desarrollo: permite el puerto del dev-server (usando IConfiguration)
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
    // Pol�tica para Producci�n: permite el dominio de tu aplicaci�n en producci�n
    else
    {
        options.AddPolicy(AllowFrontendOrigin,
            policy =>
            {
                policy.WithOrigins("https://mi-app.com") // <--- Reemplaza con tu dominio de producci�n
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
