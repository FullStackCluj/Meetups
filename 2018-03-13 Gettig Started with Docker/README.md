# Workshop: Gettig started with docker

![Docker](http://1000logos.net/wp-content/uploads/2017/07/Docker-Logo.png)

A workshop where we will show you how to work with Docker, Docker Compose, Docker Swarm and how to setup different project types in Docker containers. You can bring your laptops and test everything in your own setup with your own code. We will show you how to install and configure everything locally and the steps you need to take to deploy online.

## Why Docker
A *Docker container* runs natively on Linux and shares the kernel of the host machine with other containers. It runs a discrete process, taking no more memory than any other executable, making it lightweight.

By contrast, a *virtual machine (VM)* runs a full-blown “guest” operating system with virtual access to host resources through a hypervisor. In general, VMs provide an environment with more resources than most applications need.
![Docker Infrastructure](https://www.docker.com/sites/default/files/Container%402x.png)
![VM Infrastructure](https://www.docker.com/sites/default/files/VM%402x.png)

## Instalation

#### Mac Os X
* Install [Docker For Mac](https://docs.docker.com/docker-for-mac/install/#download-docker-for-mac).

#### Windows
* Install [Docker For Windows](https://docs.docker.com/docker-for-windows/install/#download-docker-for-windows).

#### Linux
* Install Docker CE
```
sudo apt-get remove docker docker-engine docker.io
```
```
sudo apt-get update
```
```
sudo apt-get install \
  apt-transport-https \
  ca-certificates \
  curl \
  software-properties-common
```
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
```
sudo add-apt-repository \
  "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) \
  stable"
```
```
sudo apt-get update
```
```
sudo apt-get install docker-ce
```
```
sudo groupadd docker
```
```
sudo usermod -aG docker $USER
```
* Install Docker Compose
```(bash)
sudo curl -L https://github.com/docker/compose/releases/download/1.19.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```
* Install Docker Machine
```(bash)
curl -L https://github.com/docker/machine/releases/download/v0.14.0/docker-machine-`uname -s`-`uname -m` >/tmp/docker-machine && \
sudo install /tmp/docker-machine /usr/local/bin/docker-machine
```
#### References
* [Install Docker](https://docs.docker.com/install/#supported-platforms)
* [Install Docker Compose](https://docs.docker.com/compose/install/)
* [Install Docker Machie](https://docs.docker.com/machine/install-machine/)

## Basic notions

### Docker Image
An image is an executable package that includes everything needed to run an application–the code, a runtime, libraries, environment variables, and configuration files.
### Docker Container
A container is a runtime instance of an image–what the image becomes in memory when executed (that is, an image with state, or a user process).
### Dockerfile
 A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.
### Docker Compose File
Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

## Usual commands
* `docker build -t <tag> .` build a docker image with a set `<tag>`.
* `docker images` list all docker images
* `docker rmi <image-id>` remove an image
* `docker run -d --name <name> -p <port> -e <env> -v <host>:<path> <image>` start a container with the name `<name>` running on port `<port>` with env variables `<env>` with `<host>` folder mapped to `<path>` in contaier based on `<image>`
* `docker ps` list all running containers
* `docker ps -a` list all contaiers running or not
* `docker stop <container>` stop a running container
* `docker restart <container>` restart a running container

![Demo Time](http://a.memegen.com/g7x44i.gif)