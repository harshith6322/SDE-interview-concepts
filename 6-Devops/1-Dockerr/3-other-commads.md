## Additional Docker Concepts & Commands

### 1. **Dockerfile Optimizations**

- **Reducing Image Size with Alpine**: Use Alpine-based images, which are minimal and lightweight.

  ```Dockerfile
  FROM node:20-alpine
  ```

- **Combining Commands**: Group commands in one `RUN` statement to minimize layers and reduce image size.

  ```Dockerfile
  RUN apt-get update && apt-get install -y package1 package2 && rm -rf /var/lib/apt/lists/*
  ```

- **Multi-Stage Builds**: Separate build and production stages to keep the final image minimal by copying only necessary files.

  ```Dockerfile
  FROM node:20 AS build
  WORKDIR /app
  COPY . .
  RUN npm install && npm run build

  FROM node:20-alpine
  WORKDIR /app
  COPY --from=build /app/dist /app
  CMD ["node", "index.js"]
  ```

### 2. **Docker Compose Commands**

- **Start All Services**:
  ```bash
  docker-compose up -d
  ```
- **Stop All Services**:
  ```bash
  docker-compose down
  ```
- **Rebuild and Start**: Useful if you have made changes in the `Dockerfile` or configurations.
  ```bash
  docker-compose up --build
  ```

### 3. **Docker Swarm Commands**

- **Initialize Swarm Mode**:
  ```bash
  docker swarm init
  ```
- **Create and Deploy a Service**:
  ```bash
  docker service create --name web -p 80:80 nginx
  ```
- **List Services in Swarm**:
  ```bash
  docker service ls
  ```
- **Scale Service**: Increase or decrease the number of replicas.
  ```bash
  docker service scale web=5
  ```

### 4. **Docker Volume Commands**

- **List All Volumes**:
  ```bash
  docker volume ls
  ```
- **Remove a Volume**:
  ```bash
  docker volume rm vol-1
  ```

### 5. **Docker Network Commands**

- **Inspect Network**: View detailed network information.
  ```bash
  docker network inspect my_custom_network
  ```
- **Remove a Network**:
  ```bash
  docker network rm my_custom_network
  ```

### 6. **Docker Health Checks**

Add health checks to monitor the state of your containers:

```Dockerfile
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:3000/ || exit 1
```

- **View Health Status of a Container**:
  ```bash
  docker inspect --format='{{json .State.Health}}' <container_id>
  ```

### 7. **Image and Container Cleanup**

- **Remove Unused Images**:
  ```bash
  docker image prune -a
  ```
- **Remove All Stopped Containers**:
  ```bash
  docker container prune
  ```

### 8. **Bind Mounts**

Bind mounts allow you to share specific files/directories from your host to a container:

```bash
docker run -v /path/on/host:/path/in/container image_name
```

### 9. **Saving and Loading Docker Images**

- **Save an Image to a File**:
  ```bash
  docker save -o image.tar image_name
  ```
- **Load an Image from a File**:
  ```bash
  docker load -i image.tar
  ```

### 10. **Tagging Images**

Tags are used to identify specific versions of Docker images:

```bash
docker tag source_image:tag target_image:tag
```

### 11. **Docker Events and Stats**

- **Monitor Docker Events**: Get real-time event logs from Docker.
  ```bash
  docker events
  ```
- **Check Container Stats**: Monitor resource usage of running containers.
  ```bash
  docker stats
  ```

### 12. **Export and Import Containers**

- **Export a Container’s Filesystem**:
  ```bash
  docker export container_name > container_name.tar
  ```
- **Import an Exported Filesystem as a New Image**:
  ```bash
  cat container_name.tar | docker import - imported_image_name
  ```

### 13. **Attach to Running Container**

Attach to a running container for debugging:

```bash
docker attach <container_id>
```

### 14. **Docker Secret Management**

Useful for managing sensitive information like passwords, API keys, etc., in a secure way (Docker Swarm required).

- **Create a Secret**:
  ```bash
  echo "my_secret_password" | docker secret create my_secret -
  ```
- **List Secrets**:
  ```bash
  docker secret ls
  ```

### 15. **Docker Environment Variables**

- **Pass Environment Variables when Running a Container**:
  ```bash
  docker run -e MY_VARIABLE=my_value image_name
  ```
- **Set Default Environment Variables in Dockerfile**:
  ```Dockerfile
  ENV MY_VARIABLE default_value
  ```

---

These additional commands and concepts should help you navigate Docker more effectively, whether working with development, deployment, or orchestration. Let me know if you need explanations for any specific commands or if you have other questions!
