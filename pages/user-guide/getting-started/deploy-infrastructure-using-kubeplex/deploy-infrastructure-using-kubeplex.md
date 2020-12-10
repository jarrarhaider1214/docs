# Deploy Infrastructure using KubePlex

The purpose of this guide is to take user through the process of Infrastructure deployment using KubePlex. For a video guide, please click [here](https://drive.google.com/drive/u/1/folders/1QBTD2U07BuK1DeB9QzfcU4pIsp_g1dlI)

**Step 1: Create and Configure a Kubernetes Cluster**

1. To create a new provider managed Kubernetes cluster, click the **Create** new infrastructure button.

   ![1](imgs/1.png)

2. Select **Create New Provider Managed** Kubernetes cluster.

   ![2](imgs/2.png)

3. Provide basic information.
   For this video, we will use Azure managed Kubernetes (AKS) as an example. You must have an account with Azure.

4. Provide your Azure credentials and save them as a profile for future use

5. Select the Region & Zone where you want to deploy your infrastructure.

6. You can select either an existing resource group, if you have one; or create a new resource group. 

7. Click on the **Next** button.

   ![3](imgs/3.png)

8. CloudPlex automatically configures a complete network for you. 

9. One  VPC, Two subnets, One Security Group, One Route Table, and One Internet Gateway are added and configured by the platform. 

   ![4](imgs/4.png)

10. CloudPlex gives you the option to deploy a private cluster. 

    1. Nodes in a private cluster are allocated private IP addresses only. 
    2. To deploy a private cluster, enable the Private IP option. 
    3. Cloudplex will automatically configure route tables and an internet gateway.

    ![5](imgs/5.png)

11. You can further customize your network based on your requirements. Click on the plus button to add new subnets and security groups and configure them accordingly.

    ![6](imgs/6.png)

12. Cloudplex gives you three levels of configuration options, “simple”, “advanced”, and “expert”. 

    1. In simple mode, CloudPlex requires machine type and number of nodes from the user and the rest of the configuration will be populated by the platform.

       ![7](imgs/7.png)

    2. In advanced mode, you are able to customize your Kubernetes cluster including addition of multiple node pools, selection of Kubernetes version, and other features. Details vary from cloud to cloud.

       > For an in depth guide on this, click [here](/pages/user-guide/components/cluster/pm-new-cluster/aks-cluster/aks-cluster?id=aks-cluster).

       ![8](imgs/8.png)

    3. In expert mode, you are also able to customize networking and other complex features. Details vary from cloud to cloud.

       > For an in depth guide on this, click [here](/pages/user-guide/components/cluster/pm-new-cluster/aks-cluster/aks-cluster?id=aks-cluster).

       ![9](imgs/9.png)

13. CloudPlex selects simple mode as the default option. We are using the default option for this video,
    You have selected a Kubernetes cluster on Azure with the default configuration. This completes your cluster.

**Step 2: Provision your Infrastructure**

1. Click on the **Start** button to start deploying the infrastructure you have created on Azure.

   ![10](imgs/10.png)

2. You will see the **Logs** as the deployment progresses.

   ![11](imgs/11.png)

3. Click on the **Cluster** tab to see the live status of your cluster.
   Cluster live status is a complete dashboard that gives you the live status about the health and consumption of the nodes in your cluster.

   ![12](imgs/12.png)

4. To avoid unnecessary costs, don’t forget to terminate your infrastructure when you are done.
   Click on the terminate button to delete all your resources from Azure.

   ![13](imgs/13.png)

**Conclusion**
You just used KubePlex to deploy a provider managed kubernetes cluster with CloudPlex, the kubernetes application platform for developers 