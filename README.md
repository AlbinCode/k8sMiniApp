# 🐍 k8sMiniApp – Snake Game

Detta projekt är en **miniwebbapplikation** byggd i **ASP.NET Core 8** som körs i en **Docker-container**.  
Applikationen innehåller ett klassiskt **Snake-spel** utvecklat i **JavaScript, HTML och CSS**.  
Projektet är även **förberett för Kubernetes (k8s)** med `deployment.yaml` och `service.yaml`.

---

## 🚀 Funktioner

- Klassiskt Snake-spel med poängräkning  
- Starta om-knapp ("Starta om")  
- Styrning med piltangenter eller WASD  
- Körs via ASP.NET statisk fil-hosting  
- Färdig att byggas och köras i Docker  
- Förberedd för Kubernetes-deployment  

---

## 🧱 Projektstruktur

```
k8sMiniApp/
│
├── wwwroot/                  # Frontend-filer (HTML, CSS, JS)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── Dockerfile                # Docker-instruktioner
├── deployment.yaml           # Kubernetes Deployment
├── service.yaml              # Kubernetes Service
├── Program.cs                # ASP.NET startfil
├── k8sMiniApp.csproj         # Projektfil
└── appsettings.json          # Konfiguration
```

---

## 🐳 Docker-kommandon

### 1️⃣ Bygg containern
```bash
docker build -t k8sminiapp:dev .
```

### 2️⃣ Kör containern
```bash
docker run --rm -p 8080:8080 k8sminiapp:dev
```

### 3️⃣ Öppna webbläsaren
Gå till 👉 **http://localhost:8080**

---

## ☸️ Kubernetes (valfritt)

Om du vill köra appen i Kubernetes (t.ex. via Docker Desktop):

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl get services
```

När `k8sminiapp-service` körs kan du öppna den via `localhost:8080` eller dess `EXTERNAL-IP`.

---

## 🧩 Tekniker

- **C# / ASP.NET Core 8**
- **HTML5 / CSS3 / JavaScript**
- **Docker**
- **Kubernetes**
- **Visual Studio 2022**

---

## 👨‍💻 Utvecklare

**Albin Stenhoff**  
🎓 *Inlämningsuppgift: Kubernetes / Docker Deployment*  
📅 2025

---

## 📜 Licens

Detta projekt är fritt att använda i utbildningssyfte.
