Perfect! Here’s your full, detailed `README.md` including **project structure**, **IBM Cloud deployment**, and everything else.

---

## 📝 notepad-app

A full-stack Dockerized note-taking web app built with **React** (frontend) and **Flask** (backend), using **MongoDB** for persistent storage. The app is containerized using Docker, served through **Nginx**, and deployed on **IBM Cloud Kubernetes Service (IKS)** with optional HTTPS support.

---

### 📌 Features

* Add, view, and delete notes
* Responsive and interactive React frontend
* Flask REST API with MongoDB integration
* Dockerized multi-container architecture
* Kubernetes deployment on IBM Cloud
* HTTPS (via Ingress + TLS certificate)

---

### 🧱 Tech Stack

| Frontend | Backend | Database | DevOps / Cloud                       |
| -------- | ------- | -------- | ------------------------------------ |
| React.js | Flask   | MongoDB  | Docker, Kubernetes, IBM Cloud, Nginx |

---

### 📂 Project Structure

```
notepad-app/
├── client/                     # React frontend
│   └── src/
│       └── components/         # React components (Note, NoteList, etc.)
│       └── App.js
│       └── index.js
│   └── public/
│   └── package.json
│
├── server/                     # Flask backend
│   └── app.py                  # Main Flask app
│   └── requirements.txt
│
├── nginx/                      # Nginx reverse proxy config
│   └── default.conf
│
├── kubernetes/                 # Kubernetes deployment YAMLs
│   └── client-deployment.yaml
│   └── server-deployment.yaml
│   └── mongo-deployment.yaml
│   └── nginx-deployment.yaml
│   └── ingress.yaml
│
├── docker-compose.yml         # For local dev setup
├── .dockerignore
├── .gitignore
└── README.md
```

---

### 🐳 Docker (Local Development)

Run all services locally:

```bash
docker-compose up --build
```

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5005](http://localhost:5005)

---

### ☁️ Deploying on IBM Cloud Kubernetes Service (IKS)

#### ✅ 1. Prerequisites

* [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cli-getting-started)
* [IBM Cloud Container Registry](https://cloud.ibm.com/docs/Registry?topic=Registry-getting-started)
* [IBM Kubernetes Service (IKS)](https://cloud.ibm.com/kubernetes/catalog)

Login:

```bash
ibmcloud login
ibmcloud ks cluster ls
ibmcloud cr login
```

---

#### 🚀 2. Create Cluster

```bash
ibmcloud ks cluster create classic --name notepad-cluster --zone eu-de-1 --workers 1 --flavor bx2.4x16
```

---

#### 📦 3. Build and Push Docker Images

Tag and push images to IBM Cloud Container Registry:

```bash
docker build -t us.icr.io/your-namespace/notepad-client ./client
docker build -t us.icr.io/your-namespace/notepad-server ./server

docker push us.icr.io/your-namespace/notepad-client
docker push us.icr.io/your-namespace/notepad-server
```

---

#### ⚙️ 4. Apply Kubernetes Manifests

```bash
kubectl apply -f kubernetes/
```

Make sure `kubernetes/*.yaml` files use the correct image URLs (from IBM Container Registry).

---

#### 🔐 5. HTTPS with Ingress + TLS

You can use:

* IBM Cloud Ingress Controller (via Console)
* Or: cert-manager + NGINX Ingress Controller (for Let’s Encrypt auto TLS)

Update `ingress.yaml` to include TLS block.

---

### ⚠️ Common Challenges

* IAM token exchange errors (`P0005`)
  → Ensure your account is properly linked to IAM.

* Kubernetes networking (NodePort vs Ingress)

* TLS/SSL for secure access

---

### ✅ TODOs

* Add login & user authentication
* Allow note editing
* Save notes offline (IndexedDB)
* Add UI themes (dark/light mode)

---

### 🧑‍💻 Author

**Ishita Chaurasia**
GitHub: [@ishcares](https://github.com/ishcares)


