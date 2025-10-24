Perfekt — ditt repo ser **helt korrekt ut** 👏
Nu fixar jag en snygg och komplett **README.md** som passar din inlämning (Snake-spel i .NET med Docker och Kubernetes).

Här är den färdig att klistra in direkt i GitHub:

---

```markdown
# 🐍 k8sMiniApp – Snake Game

Detta projekt är en **miniwebbapplikation** byggd i **ASP.NET Core 8** som körs i en **Docker-container**.  
Applikationen innehåller ett klassiskt **Snake-spel** utvecklat i JavaScript, HTML och CSS.  
Projektet är förberett för **Kubernetes (k8s)** med `deployment.yaml` och `service.yaml` filer.

---

## 🚀 Funktioner

- Klassiskt Snake-spel med poängräkning.  
- Starta om-spelet-knapp (`Starta om`).  
- Styrning med piltangenter eller WASD.  
- Körs i Docker-container via ASP.NET static file hosting.  
- Förberett för Kubernetes-deployment.

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
├── Dockerfile                # Docker-instruktioner för att bygga containern
├── deployment.yaml           # Kubernetes Deployment
├── service.yaml              # Kubernetes Service
├── Program.cs                # ASP.NET Core startfil
├── k8sMiniApp.csproj         # Projektfil
└── appsettings.json          # Konfiguration

````

---

## 🐳 Docker-kommandon

Bygg och kör applikationen lokalt med Docker:

```bash
docker build -t k8sminiapp:dev .
docker run --rm -p 8080:8080 k8sminiapp:dev
````

Öppna sedan spelet i webbläsaren:
👉 [http://localhost:8080](http://localhost:8080)

---

## ☸️ Kubernetes-kommandon (valfritt steg)

Om du vill köra projektet i **Kubernetes (t.ex. Docker Desktop)**:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl get services
```

När `k8sminiapp-service` är igång kan du nå spelet via dess **EXTERNAL-IP** eller `localhost:8080`.

---

## 🧩 Tekniker som används

* **C# / ASP.NET Core 8**
* **HTML5 / CSS3 / JavaScript**
* **Docker**
* **Kubernetes**
* **Visual Studio 2022**

---

## 👨‍💻 Utvecklare

**Albin Stenhoff**
Projekt för kursmoment: *Inlämningsuppgift Kubernetes / Docker Deployment*
2025

---

## 📜 Licens

Detta projekt är fritt att använda i utbildningssyfte.

```

---

Vill du att jag lägger till ett par **screenshots** i README:n (t.ex. spelet i webbläsaren + Docker-terminalen)? Jag kan lägga in Markdown för bilderna också så de visas snyggt i GitHub.
```
