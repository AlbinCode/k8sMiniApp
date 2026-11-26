# k8sMiniApp

A small web app packaged the way production services are: an **ASP.NET Core 8** app in a multi-stage **Docker** image, deployed to **Kubernetes** with a Deployment and a LoadBalancer Service. The app itself is a browser Snake game in HTML, CSS and JavaScript, served as static files.

![.NET 8](https://img.shields.io/badge/.NET-8-512BD4) ![Docker](https://img.shields.io/badge/Docker-multi--stage-2496ED) ![Kubernetes](https://img.shields.io/badge/Kubernetes-Deployment%20%2B%20Service-326CE5)

## What it shows

- Multi-stage Dockerfile: build with the .NET SDK image, run on the smaller ASP.NET runtime image
- Kubernetes manifests (`deployment.yaml`, `service.yaml`) that expose the app on port 8080
- Static file hosting in ASP.NET Core
- The game: score counter, restart button, arrow keys or WASD

## Run with Docker

```bash
docker build -t k8sminiapp:dev .
docker run --rm -p 8080:8080 k8sminiapp:dev
```

Open http://localhost:8080.

## Run on Kubernetes

For example with Docker Desktop's built-in cluster:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl get services
```

When `k8sminiapp-service` is running, open it on `localhost:8080` or its `EXTERNAL-IP`.

## Project structure

```
wwwroot/            Game frontend (index.html, style.css, script.js)
Program.cs          ASP.NET Core host
Dockerfile          Multi-stage image build
deployment.yaml     Kubernetes Deployment
service.yaml        Kubernetes Service (LoadBalancer)
```

## Tech stack

C# · ASP.NET Core 8 · HTML, CSS, JavaScript · Docker · Kubernetes
