# Cluster

A cluster is a group of machines instances or nodes on which the services can be deployed. Using Mega Mesh, cluster can be formed on AWS (Amazon Web Services) and Microsoft Azure. 

Details of the configurations that can be done at Cluster level are explained below and also highlighted in the image.

![1](imgs\1.jpg)

1. **Node Pool**: Pool of nodes and complete configurations for that node. Node Pools can be more than one. 1st node pool will always be Master node pool
2. Name of the **Node Pool** set based on Project ID.
3. **Machine Type**: Instance type based on Cloud Provider selected. 
4. **Node Count**: Number of Nodes in the node pool.
5. **Node Pool Role**: Role of node pool i.e. Master or Slave. (First Node Pool will always be master)
6. **Subnet**: Subnet to associate with the node depending on network.
7. **Security Group**: Security Group to associate with the node depending on network.

![1](imgs\2.jpg)

1. **Key Type**: Key to SSH into nodes i.e. New or Existing.
2. **SSH Key**: In case New Key Type is selected.
3. **AMI ID**: Image ID that will be used on nodes.
4. **AMI Username**: Username for the image.

![3](imgs\3.jpg)

1. **Volume Type**: Storage disk type i.e. SSD etc. 

   > **Note:** EBS (Elastic Block Store) is a block level storage which can be mounted to the machines or instances and can then be used as any raw block device.

2. **Volume Size**: Size of the disk in GB.

3. **IOPS**: IOPS for the disk.

4. **Docker Data Volume**: To add docker data volume as well.

5. **Down Arrow Button**: To fetch latest AMIs
