# Cluster

A cluster is a group of machines instances or nodes on which the services can be deployed. Using Mega Mesh, cluster can be formed on AWS (Amazon Web Services), Microsoft Azure and GCP (Google Cloud Platform). 

Details of the configurations that can be done at Cluster level are explained below and also highlighted in the image.

## AWS

![1](imgs\1.jpg)

1. **Node Pool**: Pool of nodes and complete configurations for that node. Node Pools can be more than one. 1st node pool will always be Master node pool
2. Name of the **Node Pool**.
3. **Machine Type**: Instance type based on Cloud Provider selected. 
4. **Node Count**: Number of Nodes in the node pool.
5. **Node Pool Role**: Role of node pool i.e. Master or Slave. (First Node Pool will always be master)
6. **Subnet**: Subnet to associate with the node depending on network.
7. **Security Group**: Security Group to associate with the node depending on network.

![1](imgs\2.jpg)

1. **Key Type**: Key to SSH into nodes i.e. New or Existing.
2. **Enter Key Name**: In case New Key Type is selected.
   After that click **Generate** to get a new key. 
3. **AMI ID**: Image ID that will be used on nodes.
4. **AMI Username**: Username for the image.

![3](imgs\3.jpg)

1. **Volume Type**: Storage disk type i.e. SSD etc. 

   > **Note:** EBS (Elastic Block Store) is a block level storage which can be mounted to the machines or instances and can then be used as any raw block device.

2. **Volume Size**: Size of the disk in GB.

3. **IOPS**: IOPS for the disk.

4. **Docker Data Volume**: To add docker data volume as well.

5. **Down Arrow Button**: To fetch latest AMIs

## Azure

![4](imgs\4.jpg)

1. **Node Pool**: Pool of nodes and complete configurations for that node. Node Pools can be more than one. 1st node pool will always be Master node pool
2. Name of the **Node Pool**.
3. **Machine Type**: Machine type based on Cloud Provider selected. 
4. **Node Count**: Number of Nodes in the node pool.
5. **Node Pool Role**: Role of node pool i.e. Master or Slave. (First Node Pool will always be master)
6. **Subnet**: Subnet to associate with the machine depending on network.
7. **Security Group**: Security Group to associate with the machine depending on network.

![5](imgs\5.jpg)

1. **Disk Type:** Storage disk type i.e. Standard HDD etc. 
2. **Credential Type:** Credential to SSH into nodes. Currently only Key is supported. 
3. **Key Type**: Whether to use Existing key or generate a New one.
4. **Enter Key Name**: In case New Key Type is selected.
5. **Generate**: To generate a new key and use for SSH.

![6](imgs\6.jpg)

1. **Username**: Specify Username for image.
2. **Image Offer**: Group of related images created by a publisher e.g. WindowsServer. 
3. **Image Publisher:** Publisher Name of that Image e.g. MicrosoftWindowsServer
4. **Image SKU:** SKU is like an instance of an offer, such as a major release of a distribution e.g. 2016-Datacenter.
5. **Image Version:**  Version number of an image SKU.
6. **Enable Boot Diagnostics:** To enable and store in Storage Account. 
7. **Docker Data Volume**: To add docker data volume as well.

## GCP

![7](imgs\7.jpg)

1. **Node Pool**: Pool of nodes and complete configurations for that node. Node Pools can be more than one. 1st node pool will always be Master node pool
2. Name of the **Node Pool**.
3. **Machine Type**: Machine type based on Cloud Provider selected. 
4. **Node Count**: Number of Nodes in the node pool.
5. **Node Pool Role**: Role of node pool i.e. Master or Slave. (First Node Pool will always be master)
6. **Subnet**: Subnet to associate with the machine depending on network.

![8](imgs\8.jpg)

1. **Enter Username**: Username for the image
2. **Credential Type:** Credential to SSH into nodes. Currently only Key is supported. 
3. **Key Type**: Whether to use Existing key or generate a New one.
4. **Enter Key Name**: In case New Key Type is selected.
5. **Generate**: To generate a new key and use for SSH.

![9](imgs\9.jpg)

1. **Image Family**: Will be listed based on the GCP account used to create cluster. 
2. **Image Project**: Will be listed based on the image family selected.
3. **Service Account Email:** Will be listed based on the GCP account used. It needs to have required access level as shown in info message in screenshot above. 
4. **Tags**: Tags attached with the cluster. They can be attached while configuring cluster. 
5. **Disk Type:** Type of the disk for root volume e.g. Persistent SSD.
6. **Disk Size**: Size for the root volume disk.
7. **Docker Data Volume**: To add docker data volume as well.