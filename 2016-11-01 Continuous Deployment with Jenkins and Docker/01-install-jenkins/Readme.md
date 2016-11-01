Step 01 - Jenkins
=================

Jenkins Build Server
--------------------

In this step we are going to install a Jenkins master container that uses
one or multiple Jenkins slave containers to build and deploy a docker project.

### Initial Setup

Create VMs for the master and slave jenkins nodes.

#### Create Jenkins VM

> docker-machine create --virtualbox-cpu-count '2' --virtualbox-memory '3072' --virtualbox-disk-size '20000' --driver virtualbox fullstack-01

or

> docker-machine create --vmwarefusion-cpu-count '2' --vmwarefusion-memory-size '3072' --vmwarefusion-disk-size '20000' --driver vmwarefusion fullstack-01

#### Create Staging VM

> docker-machine create --virtualbox-cpu-count '2' --virtualbox-memory '3072' --virtualbox-disk-size '20000' --driver virtualbox fullstack-02

or

> docker-machine create --vmwarefusion-cpu-count '2' --vmwarefusion-memory-size '3072' --vmwarefusion-disk-size '20000' --driver vmwarefusion fullstack-02

### Start VM

> docker-machine start fullstack-01
> eval "$(docker-machine env fullstack-01)"

### Start Domain Proxy

> ./start-proxy.sh

### Start Jenkins Master

> ./start-master.sh

### Start Jenkins Slave

> ./start-slave.sh
