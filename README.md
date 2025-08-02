
# 📝 notepad-app

A full-stack Dockerized note-taking web app built with **React** (frontend) and **Flask** (backend), using **MongoDB** for storage. The app is containerized with **Docker**, served via **Nginx**, and deployed on **IBM Cloud Kubernetes Service (IKS)** with optional HTTPS.

---

## 📌 Features

- Add, view, and delete notes
- Responsive React frontend
- RESTful API with Flask backend
- MongoDB database
- Dockerized multi-container setup
- Kubernetes deployment on IBM Cloud
- HTTPS via Ingress + TLS

---

## 🧱 Tech Stack

| Frontend | Backend | Database | DevOps / Cloud |
|----------|---------|----------|----------------|
| React.js | Flask   | MongoDB  | Docker, Kubernetes, IBM Cloud, Nginx |

---

## 📂 Project Structure

```

notepad-app/
├── client/                     # React frontend
│   └── src/
│   └── public/
│   └── package.json
├── server/                     # Flask backend
│   └── app.py
│   └── requirements.txt
├── nginx/                      # Nginx reverse proxy config
│   └── default.conf
├── kubernetes/                 # Deployment manifests for IBM Cloud
│   └── \*.yaml
├── screenshots/                # App screenshots
│   └── home.png
│   └── create-note.png
│   └── mobile-view\.png
├── docker-compose.yml
└── README.md

````

---

## 🖼️ Screenshots

### ✅ Home Page
<img width="1920" height="1080" alt="Screenshot (18)" src="https://github.com/user-attachments/assets/26ec98d4-b158-4aaf-9a74-5af20bfdf9c7" />


### 📝 Creating a Note
<img width="1920" height="1080" alt="Screenshot (19)" src="https://github.com/user-attachments/assets/1236a668-04ca-4d38-af58-645beb18ac2e" />

## 🐳 Docker (Local Development)

<img width="1920" height="1080" alt="Screenshot (31)" src="https://github.com/user-attachments/assets/77dfcfe3-540e-48d9-93ec-d972c81b1206" />
<img width="1920" height="1080" alt="Screenshot (31)" src="https://github.com/user-attachments/assets/b8bfe994-5ec4-449b-ba75-9964cbc0cd62" />




* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5005](http://localhost:5005)

---

## ☁️ IBM Cloud Kubernetes Deployment

### ✅ 1. IBM CLI Login

```bash
ibmcloud login
ibmcloud ks cluster ls
ibmcloud cr login
```

### 🚀 2. Create Cluster

```bash
ibmcloud ks cluster create classic --name notepad-cluster --zone eu-de-1 --workers 1 --flavor bx2.4x16
```

### 📦 3. Build & Push Images

```bash
docker build -t us.icr.io/your-namespace/notepad-client ./client
docker build -t us.icr.io/your-namespace/notepad-server ./server

docker push us.icr.io/your-namespace/notepad-client
docker push us.icr.io/your-namespace/notepad-server
```

### ⚙️ 4. Apply Kubernetes YAMLs

```bash
kubectl apply -f kubernetes/
```

---

## 🔐 HTTPS via Ingress

You can enable HTTPS using:

* IBM Cloud Ingress + TLS Certificate via UI
* Or: Cert-manager + Let’s Encrypt + NGINX Ingress Controller

Update `ingress.yaml` to include TLS configuration.

---

## ⚠️ Common Issues

* `P0005 IAM token` error: means your account isn't linked properly to IBM IAM.
* NodePort issues: prefer using Ingress for public routing.
* Volume mounts for MongoDB (if using persistent storage)

---

## ✅ TODO

* Add user auth
* Note editing
* Offline note saving
* Theme support (dark mode)

---

## 🧑‍💻 Author

**Ishita Chaurasia**
GitHub: [@ishcares](https://github.com/ishcares)

### 🧑‍💻 Author

**Ishita Chaurasia**
GitHub: [@ishcares](https://github.com/ishcares)


