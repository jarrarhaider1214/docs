# Getting Started

Welcome to CloudPlex! 

Purpose of this getting started guide is take user through the end to end process of signing up and deployment. We are excited to have you try our platform. Once you are done with this guide, feel free to share your feedback at info@cloudplex.io. For detailed guide on what CloudPlex has to offer click [here](/overview).

Now, lets move to the process of signing up and deployment

1. Go to [app.cloudplex.io/register](https://app.cloudplex.io/register) and sign up for a new account. 

   ![0a](imgs\0a.jpg)

2. After email verification, you will be able to login to platform.

   > **Note:** First time user signing up using a company domain will have **Super User** access of platform.  For more details on how super user can invite team members, check our guide on Access Management by clicking [here](/pages/user-guide/components/access-management/access-management).

   ![0b](imgs\0b.jpg)

3. Once logged in, click **Create Project** button to start the project creation wizard. 

   ![1](F:\CloudPlex\user-documentation\pages\user-guide\getting-started\imgs\1.1.jpg)

CloudPlex offers 4 types of project creation wizard based on the requirements and expertise level of the user. 

1. Quick Start (Beginner)
   Recommended for the users who want to deploy a project quickly using predefined default configurations. 
2. Use Template (Intermediate)
   Recommended for the users who to deploy a project using different prebuilt templates (Network and Cluster) provided by the platform.
3. Advanced (Expert)
   Recommended for the expert level users who want to customize configurations of Network, Cluster and Applications as per their requirements. 
4. Use Cloning (Expert)
   Recommended for the users who want to use same configurations or configurations with minor changes of any existing project by cloning it. 

![1.1](imgs\1.1.jpg)

## Quick Start (Beginners)

1. **Select** Quick Start (Beginner) from options. 

2. Configure the **Basic Info** tab. (Platform has provided default values for most of the parameters)

   - Select the **Cloud Provider** and specify necessary account details for the account. (For this guide we have selected AWS)

   - Enter **Profile Name** and specify the AWS credentials (Access and Secret Key). You can also save this profile for future use. Credentials will be stored in vault i.e. Credentials Profile menu.

     > **Note**: To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).

   ![2](imgs/2.jpg)

3. Click **Next** at the top right of screen.

4. As part of Quick Start project creation, CloudPlex provides preconfigured **Infrastructure** (Cluster and Network). 

   - Click **Download Key** to download SSH key as you might need it in future. 

   ![2.1](imgs\2.1.jpg)

5. Click **Next** at the top right of screen.

   - Configure **APP**.

      > **Note**: As part of this guide, we will only configure the minimum settings necessary to deploy the container. For detailed configurations, please check our detailed guide by clicking [here](/pages/user-guide/components/container-services/container-services).

   - Drag and drop the **Container** in the package canvas from left column.

   - Click on **Container** icon to configure the settings. (Platform has provided default values for most of the parameters) 

     - Scroll down and specify **Image Name** and **Tag**.

     - Go to **Environment Variables** menu and add Variable. It is necessary to add at least one variable which in our case is **MYSQL_ROOT_PASSWORD**.

     ![2.2](imgs\2.2.jpg)
     ![2.3](imgs\2.3.jpg)

     - Go to the **Ports**, click **Add Port** button and specify the port for Traffic i.e. **8080**

     ![2.4](imgs\2.4.jpg)
     ![2.5](imgs\2.5.jpg)

     - Click **Save.**

6. Click **Save** (green floppy icon at the top right) to save the project.

   ![2.6](imgs\2.6.jpg)

7. Click the Project, you just created. 

   ![17](imgs/17.jpg)

8. Click **Start** to deploy the project

   ![18](imgs/18.jpg)

9. Once a project is deployed, go to the **Logs** tab to check the logs. 

   ![19](imgs/19.jpg)

10. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![20](imgs/20.jpg)

## Use Templates (Intermediate)

1. **Select** Quick Start (Beginner) from options. 

2. Configure the **Basic Info** tab. (Most of fields will be prepopulated by default)

   - Enter **Project Name** and **Project ID**.

   - Enter **Description**.

   - Select the **Cloud Provider** and specify necessary account details for the account. (For this guide we have selected AWS)

   - Select **Region** as per requirements.

   - Enter the AWS credentials manually. You can also save this profile for future use. Credentials will be stored in vault i.e. Credentials Profile menu.

     > **Note**: To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).

   ![2](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/2.jpg)

3. Click **Next** at the top right of screen.

4. Configure **Networks**.

   - Enter **Network Name**.

   - Select **Virtual Private Cloud** from dropdown i.e. **New** or some existing network. (Existing networks will be listed based on AWS account selected)

     > **Note:** We will configure New AWS Network as part of this guide. 

   - Enter **VPC Name**. 

   - Specify **VPC CIDR**.

   ![3](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/3.jpg)

   - To add Subnet, go to the **Subnets** tab, click **+** icon and specify the **Subnet Name** and **CIDR**.

   ![4](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/4.jpg)

   - To add Security Group (SG), go to the **Security Groups** tab.
   - Specify the **SG Name** and **Description**.
     - Click the **+** icon on the **TEST-SG** button to add Traffic Rules. (You can add multiple rules as well)
     - Select the **Rule Type** as per requirement i.e. **Inbound** or **Outbound**.
     - Specify the **IP Protocol** i.e. TCP, UDP etc. 
     - Specify the **Source** and **Destination** **Ports**.
     - Specify the **Port Range** that will be exposed to traffic.
     - Add **IP Ranges** in CIDR notation. 

   ![5](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/5.jpg)

   ![6](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/6.jpg)

5. Click **Next** at the top right of screen.

6. Configure **Clusters**.

   - Enter **Cluster Name** and click **Add Node Pools** button. 

   - Enter **Node Pool** name.

   - Select **Machine Type** from the dropdown and specify **Node Count**.

     > **Note**: 1st node pool is always master pool. So node count will remain 1 for this.

   - Select **Subnet** from dropdown to associate with node pool.

   ![7](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/7.jpg)

   - Select **Security Groups** from dropdown.
   - Select **Key Type** from dropdown i.e. **New** in this case and click **Generate**. A side menu will open, click **Save** and new SSH key will be generated. 
   - Specify the **AMI ID** and **AMI Username**.
   - For **Root Volume** of node, select **Volume Type** from drop-down.
   - Specify the **Volume Size** and **IOPS** for volume. 

   ![8](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/8.jpg)

   - (Optional) Use to toggle button to use **Docker Data Volume** and select the **Volume Type**, **Volume Size** and **IOPS**.
     - Check **Delete on Termination** to delete the volume on Project termination. 

   ![9](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/9.jpg)

7. Click **Next** at the top right of screen.

   1. Configure **Mesh**.

      > **Note**: As part of this guide, we will only configure the minimum settings necessary to deploy the container. For detailed configurations, please check our detailed guide by clicking [here](/pages/user-guide/components/container-services/container-services).

   - Drag and drop the **Container** in the package canvas from left column.

   - Click on **Container** icon to configure the settings.

     - Enter the **Name** and **Version**.
     - Enter **Namespace**.
     - Select the **Type** from drop-down i.e. **Deployment** in this case.

     ![10](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/10.jpg)

     - Set the container **Replica** i.e. 1 in our case.
     - Specify **Image Name** and **Tag**.

     ![11](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/11.jpg)

     - Go to **Environment Variables** menu and add Variable. It is necessary to add at least one which in our case is **MYSQL_ROOT_PASSWORD**

     ![12](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/12.jpg)

     ![13](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/13.jpg)

     - Go to the **Ports**, click **Add Port** button and specify the port for Traffic i.e. **8080**

     ![14](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/14.jpg)

     ![15](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/15.jpg)

     - Click **Save.**

8. Click **Save** (green floppy icon at the top right) to save the project.

![16](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/16.jpg)

11. Click the Project, you just created. 

    ![17](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/17.jpg)

12. Click **Start** to deploy the project

    ![18](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/18.jpg)

13. Once a project is deployed, go to the **Logs** tab to check the logs. 

    ![19](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/19.jpg)

14. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![20](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/20.jpg)



