# Bygg fas
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Kopiera allt
COPY . ./
RUN dotnet publish -c Release -o out

# Kör fas
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .

# Starta appen
ENTRYPOINT ["dotnet", "k8sMiniApp.dll"]
