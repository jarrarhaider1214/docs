# Lab 1 (Deployment Using Saved Templates)

1. Login to Mega Mesh and click the green **+** icon to start the project creation wizard. 

   ![1](imgs/1.jpg)

2. Configure the **Basic Info** tab.

   - Enter **Project Name** and **Project ID**.
   - Enter **Description**.
   - Select the **Cloud Provider** and specify necessary account details for the account.
   - Select **Region** as per requirements.
   - Select any saved **Profile** from the drop-down or enter the credentials manually. 

   ![2](imgs/2.jpg)

3. Click **Next**.

4. Configure **Networks**.

   - Click **Templates** button to get the list of saved templates.

   ![3](imgs/3.jpg)

   - Select any saved template and click **Apply**.

   ![4](imgs/4.jpg)

   - Now that template is selected, click **Next**.

   ![5](imgs/5.jpg)

5. Configure **Clusters**.

   - Click **Templates** button to get the list of saved templates.

   ![6](imgs/6.jpg)

   - Select any saved template and click **Apply**.

   ![7](imgs/7.jpg)

   - Now that template is selected, click **Next**.

   ![8](imgs/8.jpg)

6. Configure **Solutions**.

   - Click **Templates** button to get the list of saved templates.

   ![9](imgs/9.jpg)

   - Select any saved template and click **Apply**.

   ![10](imgs/10.jpg)

   - Now that template is selected, click **Save** (green floppy icon at the top right) to save project.

   ![11](imgs/11.jpg)

7. Click the Project, you just created. 

   ![12](imgs/12.jpg)

8. Click **Start** to deploy the project

   ![13](imgs/13.jpg)

9. Go to the **Logs** tab to check logs related to the deployment.

   ![14](imgs/14.jpg)

10. To check the status of **Cluster**, **Network**, and **Solution**, go to the relevant tab.

    ![15](imgs/15.jpg)

    ![16](imgs/16.jpg)

11. Once the solution is deployed, go to the **Monitoring** tab to see detailed graphs related to Mesh performance.

    ![17](imgs/17.jpg)

    # Lab 2 (Deployment Using New Templates)

    1. Login to Mega Mesh and click the green **+** icon to start the project creation wizard. 

       ![1](F:/CloudPlex/user-documentation/pages/user-guide/examples/project/imgs/1.jpg)

    2. Configure the **Basic Info** tab.

       - Enter **Project Name** and **Project ID**.
       - Enter **Description**.
       - Select the **Cloud Provider** and specify necessary account details for the account.
       - Select **Region** as per requirements.
       - Select any saved **Profile** from the drop-down or enter the credentials manually. 

       ![18](imgs\18.jpg)

    3. Click **Next**.

    4. Configure **Networks**.

       - Enter **Network Name**.

       - Select **Virtual Private Cloud** from dropdown i.e. **New** or some existing network. (Existing networks will be listed based on account selected)

         > **Note:** This guide explains the process of New Network Creation, for existing you just need to select Subnet etc from drop-down.

       - Enter **VPC Name**. 

       - Specify **VPC CIDR**.

       ![19](imgs\19.jpg)

       - To add Subnet, go to the **Subnets** tab, click **+** icon and specify the **Subnet Name** and **CIDR**.

       ![20](imgs\20.jpg)

       - To add Security Group (SG), go to the **Security Groups** tab.
       - Specify the **SG Name** and **Description**.
         - Click the **+** icon on the **TEST-SG** button to add Traffic Rules. (You can add multiple rules as well)
         - Select the **Rule Type** as per requirement i.e. **Inbound** or **Outbound**.
         - Specify the rule **Protocol** i.e. TCP, UDP etc. 
         - Specify **Source**. e.g. 0.0.0.0/0. 
           The Source can be an IPv4 addresses or range of IPv4 addresses in CIDR notation.
         - Specify the **Ports** that will be exposed to traffic. 
         - Select the rule **Type** from dropdown e.g. Custom TCP, Custom UDP etc.

       ![21](imgs\21.jpg)

    5. Click **Next**.

    6. Configure **Clusters**.

       - Enter **Cluster Name** and click **Add Node Pools** button. 
       - Enter **Node Pool Name**.
       - Specify **Node Count** and **Machine Type** from the dropdown.

       ![22](imgs\22.jpg)

       - Select **Subnet** and **Security Groups** from dropdown.
       - Select **Key Type** from dropdown i.e. **Existing** in this case.
       - Specify the **AMI ID** and **AMI Username**.
       - For **Root Volume** of node, select **Volume Type** from drop-down.
       - Specify the **Volume Size** and **IOPS** for volume. 

       ![23](imgs\23.jpg)

       - (Optional) Use to toggle button to use **Docker Data Volume** and select the **Volume Type**, **Volume Size** and **IOPS**.
         - Check **Delete on Termination** to delete the volume on Project termination. 

       ![24](imgs\24.jpg)

    7. Click **Next**.

    8. Configure **Solutions**.

       - Drag and drop the **Container** in the package canvas from left column.

       - Click on **Container** icon to configure the settings.

         - Enter the **Name** and **Version**.
         - Enter **Namespace** or select any existing from drop-down.
         - Select the **Type** from drop-down i.e. **Deployment** in this case.

         ![25](imgs\25.jpg)

         - From **Registry** drop-down, click **New** and specify **Registry Name, Username** and **Password**. (Click **Save Docker Credentials** to use for future projects)

         ![26](imgs\26.jpg)

         - Specify **Image Name** and **Tag**.
         - Add **Environment Variable**. It is necessary to add at least one which in our case is **MYSQL_ROOT_PASSWORD**

         ![27](imgs\27.jpg)

         - Click **Add Port +** button and specify the port for Traffic i.e. **8080**

         ![28](imgs\28.jpg)

         - Click **Save.**

    9. Click **Save** (green floppy icon at the top right) to save the project.

       ![29](imgs\29.jpg)

    10. Click the Project, you just created. 

        ![30](imgs\30.jpg)

    11. Click **Start** to deploy the project

        ![31](imgs\31.jpg)