Here are detailed markdown notes on SSH access, installing software, and setting up a reverse proxy with NGINX on an Ubuntu virtual machine (VM):

---

# SSH to Other Computers

### 1. Set Permissions for Key File

To ensure the key file has the correct permissions, run:

```bash
chmod 700 keyfile
```

> **Note**: Do not write this command output to a file.

### 2. Set DNS to 8.8.8.8 in Ubuntu

Edit the `resolv.conf` file to update the DNS server:

```bash
sudo vi /etc/resolv.conf
```

Add or edit the following line:

```
nameserver 8.8.8.8
```

### 3. Install Node.js in Ubuntu Machine

1. Install NVM (Node Version Manager):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
   ```
2. Install Node.js version 20:
   ```bash
   nvm install 20
   ```
3. Verify Node.js installation:
   ```bash
   node -v
   ```

### 4. SSH into an EC2 Instance

To connect to an EC2 instance, use:

```bash
ssh -i /path/to/your-key-file.pem ubuntu@ec2-instance-public-dns
```

### 5. Copy Files to an EC2 Instance using SCP

To transfer files securely from your local machine to the EC2 instance:

```bash
scp -i /path/to/my-key.pem -r /local/path/to/backend ubuntu@ec2-1-2-3-4.compute-1.amazonaws.com:/home/ubuntu/
```

---

# Setting Up Reverse Proxy with NGINX

### 1. Install NGINX

To install NGINX, update the package list and install:

```bash
sudo apt update
sudo apt install nginx
```

### 2. Configure NGINX as a Reverse Proxy

Edit the NGINX configuration file:

1. Remove the existing configuration (optional):
   ```bash
   sudo rm /etc/nginx/nginx.conf
   ```
2. Open the configuration file for editing:

   ```bash
   sudo vi /etc/nginx/nginx.conf
   ```

3. Add the following configuration:

   ```nginx
   events {
       # Event directives...
   }

   http {
       server {
           listen 80;
           server_name be1.100xdevs.com;

           location / {
               proxy_pass http://localhost:8080;
               proxy_http_version 1.1;
               proxy_set_header Upgrade $http_upgrade;
               proxy_set_header Connection 'upgrade';
               proxy_set_header Host $host;
               proxy_cache_bypass $http_upgrade;
           }
       }
   }
   ```

### 3. Reload NGINX to Apply Changes

After updating the configuration, reload NGINX:

```bash
sudo nginx -s reload
```

---

# Install Docker in Ubuntu

To install Docker and start the Docker service:

1. Install Docker:
   ```bash
   sudo apt-get install docker.io -y
   ```
2. Start Docker service:
   ```bash
   sudo service docker start
   ```
3. Verify Docker installation:
   ```bash
   sudo docker ps
   ```

---
