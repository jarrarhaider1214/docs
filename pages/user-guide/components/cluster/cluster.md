# Cluster

A cluster is a group of machines instances or nodes on which the services can be deployed. Using Mega Mesh, cluster can be formed on AWS (Amazon Web Services) and Microsoft Azure. 

Details of the configurations that can be done at Cluster level are explained below and also highlighted in the image.

![1](imgs\1.jpg)

![2](imgs\2.jpg)

1. **Node Pool**: Pool of nodes and complete configurations for that node. Node Pools can be more than one. 1st node pool will always be Master node pool
2. Name of the **Node Pool** set based on Project ID.
3. **Node Count**: Number of Nodes in the node pool.
4. **Node Pool Role**: Role of node pool i.e. Master or Slave.
5. **Machine Type**: Instance type based on Cloud Provider selected. 
6. **Subnet**: Subnet to associate with the node depending on network.
7. **Security Group**: Security Group to associate with the node depending on network.
8. **Key Type**: Key to SSH into nodes i.e. New or Existing.
9. **AMI ID**: Image ID that will be used on nodes.
10. **AMI Username**: Username for the image.
11. **Volume Type**: Storage disk type i.e. SSD etc. 

    > **Note:** EBS (Elastic Block Store) is a block level storage which can be mounted to the machines or instances and can then be used as any raw block device.
12. **Volume Size**: Size of the disk in GB.
13. **IOPS**: IOPS for the disk.
14. **Delete on Termination**: Whether to delete the disk on Project termination or not.



