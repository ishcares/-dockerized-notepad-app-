
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

-----

## 📬 Postman API Testing for `notepad-app`

If `postman-collection.json` is not available, you can test the API manually using the following endpoints:

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/notes`     | List all notes          |
| POST   | `/api/notes`     | Create a new note       |
| PUT    | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note           |

### 🔄 Sample Request

**POST** `http://localhost:5005/api/notes`

```json
{
  "title": "Sample Note",
  "content": "This is a sample note for testing.",
  "date": "2025-08-02"
}

---

## 🐳 Docker Workflow (for `notepad-app`)

### 🔧 Build Docker Images

```bash
docker build -t notepad-frontend ./client
docker build -t notepad-backend ./server
```

### 🚀 Run Containers

```bash
docker run -d -p 3000:80 --name notepad-frontend notepad-frontend
docker run -d -p 5005:5005 --name notepad-backend notepad-backend
```

### 🧩 Or Use Docker Compose

If you have a `docker-compose.yml`, run:

```bash
docker-compose up --build
```

This will run:

* Frontend at `http://localhost:3000`
* Backend at `http://localhost:5005/api/notes`

---

Let me know if you want a `postman-collection.json` generated from these endpoints or markdown with images embedded.

This will run:
* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5005](http://localhost:5005)



🚀 Run Containers

docker run -d -p 3000:80 --name notepad-frontend notepad-frontend
docker run -d -p 5005:5005 --name notepad-backend notepad-backend


## 🖼️ Screenshots

### ✅ Home Page
<img width="1920" height="1080" alt="Screenshot (18)" src="https://github.com/user-attachments/assets/26ec98d4-b158-4aaf-9a74-5af20bfdf9c7" />


### 📝 Creating a Note
<img width="1920" height="1080" alt="Screenshot (19)" src="https://github.com/user-attachments/assets/1236a668-04ca-4d38-af58-645beb18ac2e" />


## 🐳 Docker (Container)
<img width="1920" height="1080" alt="Screenshot (31)" src="https://github.com/user-attachments/assets/77dfcfe3-540e-48d9-93ec-d972c81b1206" />
<img width="1920" height="1080" alt="Screenshot (33)" src="https://github.com/user-attachments/assets/cfaf5701-c10f-4656-b379-14b93afe1ca7" />


## 🐳 Docker (Images)
<img width="1920" height="1080" alt="Screenshot (32)" src="https://github.com/user-attachments/assets/9fee3bd6-bb61-41e8-b136-cbd0cf2fd583" />




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




