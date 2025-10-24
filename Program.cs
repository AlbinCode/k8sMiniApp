using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Logga vilken mapp som används, syns i terminalen
app.Logger.LogInformation("Content root: {root}", app.Environment.ContentRootPath);

// Servera statiska filer
app.UseStaticFiles();

// Tvinga "/" att skicka just din index.html
app.MapGet("/", async ctx =>
{
    await ctx.Response.SendFileAsync("wwwroot/index.html");
});

// Health
app.MapGet("/health", () => Results.Ok("ready"));
app.MapGet("/alive", () => Results.Ok("alive"));

app.Run();
