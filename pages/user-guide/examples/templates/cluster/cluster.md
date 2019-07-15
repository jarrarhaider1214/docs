# Cluster

This section will explain the process of cluster creation and all the relevant configurations for AWS and Azure. 

## AWS

Lets move to the step by step process of how to create an AWS cluster.

To configure a **Cluster**

1. Enter **Cluster Name** and click **Add Node Pools** button. 

   > **Note:** You can add more than one Node Pool as well. 

   ![1](imgs\1.jpg)

2. Enter **Node Pool Name**.

3. Specify **Node Count** and **Machine Type** from the dropdown.

   > **Note**: Note count for first node pool will always be **1** as it will be used for master node.  

4. Select **Subnet** and **Security Groups** from dropdown. (You can select upto 5 subnets)

5. Select **Key Type** from dropdown i.e. **New** or **Existing**.
   Whether you want to create a new Key or use any existing one.

6. Specify the **AMI ID** and **AMI Username**. (you can get these from cloud admin portal)

   ![2](imgs\2.jpg)

7. For **Root Volume** of node, select **Volume Type** from drop-down.

8. Specify the **Volume Size** and **IOPS** for volume. 

9. (Optional) Use to toggle button to use **Docker Data Volume** and select the **Volume Type**, **Volume Size** and **IOPS**.

   - Check **Delete on Termination** if you want to delete the volume on Project termination. 

   ![3](imgs\3.jpg)

10. Click the **Templates** button on top and click **Save as Template** to save the configurations.

    ![4](imgs\4.jpg)

    ## Azure

    Lets move to the step by step process of how to create an Azure cluster.

    To configure a **Cluster**.

    1. Enter **Cluster Name** and click **Add Node Pools** button. 

       > **Note:** You can add more than one Node Pool as well. 

       ![5](imgs\5.jpg)

    2. Enter **Node Pool Name**.

    3. Specify **Node Count** and **Machine Type** from the dropdown.

       > **Note**: Note count for first node pool will always be **1** as it will be used for master node.  

    4. Select **Subnet** and **Security Groups** from dropdown. (You can select only 1 subnet)

    5. Select Volume **Disk Type** from drop-down.

    6. Select **Credential Type** from dropdown i.e. **Key** or **Password**.
       Whether you want to use a Key or Password for node.

    7. Select **Key Type** from drop-down i.e. **New** or **Existing**.

       1. For **New**, **Enter SSH Key** or for **Existing** select one from drop-down.

       ![6](imgs\6.jpg)

    8. Specify the **Image Username**, **Image Offer**, **Image Publisher**, **Image SKU** and **Image Version**. (you can get these from cloud admin portal)

    9. Check the boxes to **Enable Boot Diagnostics** or to create a **New Storage Account**. 

    10. (Optional) Use to toggle button to use **Docker Data Volume** and specify the **Disk Type**, and **Disk Size**.

        ![7](F:\CloudPlex\user-documentation\pages\user-guide\examples\templates\cluster\imgs\7.jpg)

    11. Click the **Templates** button on top and click **Save as Template** to save the configurations.

        ![8](imgs\8.jpg)