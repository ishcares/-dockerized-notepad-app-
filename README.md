

# 📝 notepad-app

A full-stack web application for managing notes, featuring a **React frontend**, **Flask backend**, **MongoDB database**, and **Docker-based deployment**. It supports containerized hosting, reverse proxy via **Nginx**, and is ready for deployment on **IBM Cloud** using Kubernetes.

---

## 📂 Project Structure

```

notepad-app/
├── client/                     # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/                     # Flask backend
│   ├── app.py
│   └── requirements.txt
├── nginx/                      # Nginx reverse proxy config
│   └── default.conf
├── kubernetes/                 # Deployment manifests for IBM Cloud
│   └── \*.yaml
├── screenshots/                # App screenshots
│   ├── home.png
│   ├── create-note.png
│   └── mobile-view\.png
├── docker-compose.yml
└── README.md

````

---

## 📬 Postman API Testing for `notepad-app`

Use the following REST endpoints to test your Flask API:

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | `/api/notes`       | Fetch all notes         |
| POST   | `/api/notes`       | Create a new note       |
| PUT    | `/api/notes/:id`   | Update an existing note |
| DELETE | `/api/notes/:id`   | Delete a note           |

### 🔄 Sample `POST` Request

**URL**: `http://localhost:5005/api/notes`  
**Body**:

```json
{
  "title": "Sample Note",
  "content": "This is a sample note for testing.",
  "date": "2025-08-02"
}
````


---

## 🐳 Docker Workflow



```bash
docker build -t notepad-frontend ./client
docker build -t notepad-backend ./server
```

```bash
# Frontend on port 3000
docker run -d -p 3000:80 --name notepad-frontend notepad-frontend

# Backend on port 5005
docker run -d -p 5005:5005 --name notepad-backend notepad-backend
```


```bash
docker-compose up --build
```

📍 This will expose:

* Frontend → [http://localhost:3000](http://localhost:3000)
* Backend API → [http://localhost:5005/api/notes](http://localhost:5005/api/notes)



---

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

---

## ☁️ Deploy on IBM Cloud

Refer to the `kubernetes/*.yaml` files for IBM Cloud Kubernetes deployment:

1. ✅ Push Docker images to IBM Container Registry:

   ```bash
   docker tag <image> jp.icr.io/<namespace>/<image-name>
   docker push jp.icr.io/<namespace>/<image-name>
   ```

2. 🧠 Create a cluster or use Code Engine.

3. 🚀 Apply manifests:

   ```bash
   kubectl apply -f kubernetes/
   ```

> See IBM Cloud documentation for more: [https://cloud.ibm.com/docs](https://cloud.ibm.com/docs)

---

## 🧠 Environment Setup

Create a `.env` file (if needed) for Flask:

```env
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/<dbname>
FLASK_ENV=development
```

---

## 📦 Backend Dependencies

If not using Docker, install Flask dependencies manually:

```bash
cd server
pip install -r requirements.txt
```

🔧 Common Issues & Solutions

| Problem                       | Fix                                                          |
| ----------------------------- | ------------------------------------------------------------ |
| 🔄 Docker services can't talk | Use `docker-compose` so all services share a default network |
| 🌐 CORS errors                | Backend uses `flask-cors`, Nginx handles proxy headers       |
| 🧭 IBM namespace/auth         | Run `ibmcloud cr namespace-add`, `ibmcloud cr login`         |

----

----
🚀 Future Enhancements
🔐 JWT Auth + Role Management

⏰ Due Dates, Priority Filters

📊 Mongo Aggregation & Usage Stats

☁️ Code Engine Deployment + CI/CD

✅ Unit + Integration Testing (Jest + Supertest)

----

----

🧠 Why This Project Stands Out
✅ Practical DevOps (Docker + IBM Cloud)
✅ Structured backend + modular frontend
✅ Full SDLC: dev → test → containerize → deploy
✅ Clean docs, ideal for cloud environments
✅ Scalable, real-world architecture

----

----
## 👩‍💻 Author

**Ishita Chaurasia**  
🔗 GitHub: [github.com/ishcares](https://github.com/ishcares)  
📧 Email: ishita.chaurasia@example.com  
----



