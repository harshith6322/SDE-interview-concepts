# Docker Cheat Sheet

## Basic Docker Commands

1. **Run MongoDB Container**  
   `docker run mongo --img`
   `docker run img-name`

2. **List Running Containers**  
   `docker ps`
   `docker ps -a` for all hidden containers

3. **Run MongoDB in Detached Mode with Port Forwarding**  
   `docker run -d -p 27017:27017 mongo`

   - `-p`: Forward the port from host (Windows) to Docker.
   - `-d`: Detached mode, runs the container in the background.

4. **Kill MongoDB Container**  
   `docker kill mongo`

5. **Remove an Image**  
   `docker rmi imgname`
   `docker rmi -f mongo` to remove force fully
   `docker rm -f $(docker ps -aq)` to remove every image

6. **Build Docker Image**  
   `docker build`
   `docker build -t image_name --no-cache` -t = tagName
   <!-- This creates an image with the name my_image and, if you don't specify a tag, Docker uses :latest as the default tag. -->

7. **Push Image to a Registry**
   `docker login`
   `docker push`

8. **Check Container Logs**  
   `docker logs <container_id>`

9. **docker pause**
   ` docker pause mongo`
   `docker unpause mongo`

10. **logs**
    `docker logs <id>`
    `docker ps -a`

---

## Creating a Docker Image

**Dockerfile Example:**

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json .
COPY prisma .

RUN npm install

COPY . .

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
```

### Steps:

1. **Build Image**  
   `docker build -t image_name .`

2. **Add .dockerignore**  
   Prevents copying `node_modules` to Docker.

3. **Run Container with Environment Variables**  
   `docker run -p 3000:3000 -e DATABASE_URL="your_database_url" image_name`
   - `-e`: Used to pass environment variables.

---

## Inspecting and Interacting with Containers

1. **List All Contents of a Container Directory**  
   `docker exec <container_name_or_id> ls /path/to/directory`

2. **Run an Interactive Shell in a Container**  
   `docker exec -it <container_name_or_id> /bin/bash`
   `docker exec -it <id> psql -U postgres` --- this for psql cli

---

## Docker Concepts

### Layers in Docker

Docker builds images in layers, caching each step to make image builds faster and resource-efficient. Here’s an example of layers in a Dockerfile:

```dockerfile
FROM node:20          # Layer 1: Base image
WORKDIR /app          # Layer 2: Working directory
COPY . .              # Layer 3: Copy all files
RUN npm install       # Layer 4: Install dependencies
RUN npx prisma generate  # Layer 5: Generate Prisma client
RUN npm run build     # Layer 6: Build the project
```

---

## Volumes in Docker

Volumes are used to store data even after the container is stopped.

1. **Create a Volume**  
   `docker volume create vol-1`

2. **Run Container with Volume**  
   `docker run -v vol-1:/data/db -p 27017:27017 mongo`

   - `-v vol-1:/data/db`: Mounts `vol-1` volume to `/data/db` inside the container.

---

## Docker Networks

Networks allow multiple containers to communicate with each other.

1. **Create a Custom Network**  
   `docker network create my_custom_network`

2. **Run Backend Container on Custom Network**  
   `docker run -d -p 3000:3000 --name backend --network my_custom_network image_tag`

3. **Run MongoDB Container on Custom Network**  
   `docker run -d -v volume_database:/data/db --name mongo --network my_custom_network -p 27017:27017 mongo`

Your notes on Docker cover many key concepts, but there are a few additional important topics that you might want to consider:

### Additional Docker Concepts

#### 1. **Dockerfile Best Practices**

- **Minimizing Layers**: Combine commands like `RUN`, `COPY`, etc., when possible to reduce the number of layers, making the image smaller.
  ```Dockerfile
  RUN apt-get update && apt-get install -y package1 package2
  ```
- **Multi-Stage Builds**: This allows you to separate the build and production stages, reducing the final image size.

  ```Dockerfile
  FROM node:20 AS builder
  WORKDIR /app
  COPY . .
  RUN npm install && npm run build

  FROM node:20
  WORKDIR /app
  COPY --from=builder /app/dist /app
  EXPOSE 3000
  CMD ["node", "index.js"]
  ```

#### 2. **Docker Compose**

- Useful for managing multi-container Docker applications. A `docker-compose.yml` file defines services, networks, and volumes in one place.
  ```yaml
  version: "3"
  services:
    app:
      image: app_image
      ports:
        - "3000:3000"
      environment:
        - DATABASE_URL=your_database_url
      networks:
        - app-network
    mongo:
      image: mongo
      volumes:
        - data:/data/db
      ports:
        - "27017:27017"
      networks:
        - app-network
  volumes:
    data:
  networks:
    app-network:
  ```

#### 3. **Docker Swarm**

- A native clustering and orchestration tool for Docker containers. It helps manage distributed containers in a cluster.
- Commands:
  - `docker swarm init`: Initialize Docker swarm.
  - `docker service create`: Create a service that runs across the swarm.

#### 4. **Docker Health Checks**

- Allows Docker to check the health of your containerized application.
  ```Dockerfile
  HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:3000/ || exit 1
  ```

#### 5. **Bind Mounts**

- Bind mounts allow you to mount a specific file or directory from your host system into a container, as opposed to a volume, which is managed by Docker.

  ```bash
  docker run -v /path/to/host/directory:/container/directory my_image

  docker run -d
    -v /host/folder1:/container/folder1
    -v /host/folder2:/container/folder2
    <image_name>

  ```
