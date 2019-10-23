# Cluster

This section will explain the process of cluster creation and all the relevant configurations for AWS, Azure and GCP. 

## AWS

Lets move to the step by step process of how to create an AWS cluster.

To configure a **Cluster**

1. Enter **Cluster Name** and click **Add Node Pools** button.

   > **Note:** You can add more than one Node Pool as well.  

2. Enter **Node Pool** name.

3. Select **Machine Type** from the dropdown and specify **Node Count**.

   > **Note**: Node count for first node pool will always be **1** as it will be used for master node.  

4. Select **Subnet** from dropdown to associate with node pool. (You can select upto 5 subnets)

   ![1](imgs\1.jpg)

5. Select **Key Type** from dropdown i.e. **New** or **Existing**.
   Whether you want to create a new Key or use any existing one.

6. Specify the **AMI ID** and **AMI Username**. (you can get these from cloud admin portal)

7. For **Root Volume** of node, select **Volume Type** from drop-down.

8. Specify the **Volume Size** and **IOPS** for volume. 

   ![2](imgs\2.jpg)

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

    2. Enter **Node Pool Name**.

    3. Select **Machine Type** from the dropdown and specify **Node Count**.

       > **Note**: Node count for first node pool will always be **1** as it will be used for master node.  

       ![5](imgs\5.jpg)

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

        ![7](imgs\7.jpg)

    11. Click the **Templates** button on top and click **Save as Template** to save the configurations.

        ![8](imgs\8.jpg)

## GCP

Lets move to the step by step process of how to create an GCP cluster.

To configure a **Cluster**.

1. Enter **Cluster Name** and click **Add Node Pools** button. 

   > **Note:** You can add more than one Node Pool as well. 

2. Enter **Node Pool Name**.

3. Select **Machine Type** from the dropdown and specify **Node Count**.

   > **Note**: Node count for first node pool will always be **1** as it will be used for master node.  

   ![9](imgs\9.jpg)

4. Select **Subnet** from dropdown. (You can select only 1 subnet)

5. Enter **Username**.

6. Select **Credential Type** from dropdown i.e. **Key**.
   This will be used for node.

7. Select **Key Type** from drop-down i.e. **New** or **Existing**.

   - For **New**, **Enter Key Name**  and generate or for **Existing** select existing **SSH Key** from drop-down.

   ![10](imgs\10.jpg)

8. Select the **Image Family**, **Image Project**, and **Service Account Email** from drop-down (based on profile selected in Basic Info tab of project).

   > **Note:** Make sure service account has Compute Admin and Service Account User Role of GCP.

9. Delete the **Tags** if any. (Tags can be added while configuring the GCP Network)

10. For **Root Volume** of node, select **Disk Type** from drop-down and specify **Disk Size**.

11. (Optional) Use to toggle button to use **Docker Data Volume** and specify the **Disk Type**, and **Disk Size**.

    ![11](imgs\11.jpg)

12. Click the **Templates** button on top and click **Save as Template** to save the configurations.

    ![12](imgs\12.jpg)