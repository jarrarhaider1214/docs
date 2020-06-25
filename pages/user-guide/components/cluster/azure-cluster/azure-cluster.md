# Azure

![1](imgs/1.jpg)

1. **Node Pool**: Pool of nodes and complete configurations for that node. Node Pools can be more than one. 1st node pool will always be Master node pool
2. Name of the **Node Pool**.
3. **Machine Type**: Machine type based on Cloud Provider selected. 
4. **Node Count**: Number of Nodes in the node pool.
5. **Node Pool Role**: Role of node pool i.e. Master or Slave. (First Node Pool will always be master)
6. **Subnet**: Subnet to associate with the machine depending on network.
7. **Security Group**: Security Group to associate with the machine depending on network.

![2](imgs/2.jpg)

1. **Disk Type:** Storage disk type i.e. Standard HDD etc. 
2. **Credential Type:** Credential to SSH into nodes. Currently only Key is supported. 
3. **Key Type**: Whether to use Existing key or generate a New one.
4. **Enter Key Name**: In case New Key Type is selected.
5. **Generate**: To generate a new key and use for SSH.

![3](imgs/3.jpg)

1. **Username**: Specify Username for image.
2. **Image Offer**: Group of related images created by a publisher e.g. WindowsServer. 
3. **Image Publisher:** Publisher Name of that Image e.g. MicrosoftWindowsServer
4. **Image SKU:** SKU is like an instance of an offer, such as a major release of a distribution e.g. 2016-Datacenter.
5. **Image Version:**  Version number of an image SKU.
6. **Enable Boot Diagnostics:** To enable and store in Storage Account. 
7. **New Storage Account:** To attach new storage account with node.
8. **Docker Data Volume**: To add docker data volume as well.