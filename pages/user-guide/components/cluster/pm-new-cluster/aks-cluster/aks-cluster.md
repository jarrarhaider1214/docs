# AKS Cluster

Azure Kubernetes Service (AKS) makes it simple to deploy a managed Kubernetes cluster in Azure. AKS reduces the complexity and operational overhead of managing Kubernetes by offloading much of that responsibility to Azure. To know more about AKS, click [here](https://azure.microsoft.com/en-us/services/kubernetes-service/).

Here are the configurations option that will be available to user while configuring AKS for Application deployment. 

![1](imgs\1.jpg)

1. **Cluster Name:** Name of the cluster. CloudPlex provides default values but user can also customize it.

2. **Machine Type:** Select machine type from drop-down.
   To know more about machine types, click [here](https://azure.microsoft.com/en-us/pricing/details/virtual-machines/series).

3. **Node Count:** Specify the number of nodes in node pool. 

4. **Custom Advance Settings:** To enable advanced settings related to Cluster, Node Pools, and Networking & Security.

   > If custom advanced settings are not enabled system will navigate to the **App Design** menu instead of Advanced Settings

**Advanced Settings  - Cluster**

![2](imgs\2.jpg)

1. **Kubernetes Version:** Select Kubernetes Version from drop-down to install on cluster.

2. **DNS Prefix:** To add prefix for hostnames that will be created.

3. **Enable Private Cluster:** To enable private cluster. 

4. **Enable RBAC:** To enable RBAC for this cluster.

5. **Configure Service Principal:** To generate a service principal on cluster creation. 
   A service principal is needed to dynamically create and manage other Azure resources such as an Azure load balancer or container registry (ACR).

   > To generate a service principal, user will need to provide Azure Client ID and Client Secret. The user must have permissions to register an application with Azure AD tenant

6. **Add IP Ranges:** To add IP addresses in CIDR Notation.

7. **Add Cluster Tags:** To add cluster tags in the form of Key Value pairs.

**Advanced Settings  - Nodepools**

![3](imgs\3.jpg)

1. **Add Node Pools:** To add more node pools in the cluster. 

2. **Clone:** To clone the current node pool and create new one.

3. **Node Pool:** Name of the node pool.

4. **Machine Type:** Select machine type from drop-down.

5. **Node Count:** Specify the number of nodes in node pool. 

6. **Subnet:** Select subnet from drop-down.

7. **Disk Size:** Specify size of the root volume disk in GBs. It should be between 41 And 2048 GBs.

8. **Max Pods Per Node:** Specify maximum number of pods per node. It should be greater than or equal to  40. 

9. **Enable Public IP:** To enable public IP.

10. **Enable Auto Scaling:** To enable Auto Scaling for this node pool.

    > To know more about this, check out our detailed Auto Scaling guide [here](/pages/user-guide/components/scaling/scaling). 

11. **Add Node Labels:** To add labels with node in the form of Key Value pairs.

**Advanced Settings  - Networking & Security**

![4](imgs\4.jpg)

1. **HTTP Application Routing:** To enable HTTP application routing.
   The HTTP application routing makes it easy to access applications that are deployed to AKS cluster. When enabled, it configures an Ingress controller in AKS cluster.
2. **Configure Expert Options:** To configure expert options. If enabled, user can provide POD CIDR, Service CIDR, DNS Service IP and Docker Bridge CIDR.  (To know more about these, click [here](https://docs.microsoft.com/en-us/azure/aks/configure-kubenet#create-an-aks-cluster-in-the-virtual-network))