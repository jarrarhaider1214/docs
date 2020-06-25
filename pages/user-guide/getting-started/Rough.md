## Quick Start

1. **Select** Quick Start from options. 

2. Configure the **Basic Info** tab. (Platform has provided default values for most of the parameters)

   - Select the **Cloud Provider** and specify necessary account details for the account. (For this guide we have selected AWS)

   - Enter **Profile Name** and specify the AWS credentials (Access and Secret Key). You can also save this profile for future use. Credentials will be stored in vault i.e. Credentials Profile menu.

     > **Note**: To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).
     >
     > **Note:** To perform different functions and to deploy application using CloudPlex, it is necessary to have required permissions on cloud. To know about all those permissions click [here.](pages/user-guide/components/cloud-authorization-level/cloud-authorization-level?id=cloud-authorization-level)

   ![2](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.jpg)

3. Click **Next** at the top right of screen.

4. As part of Quick Start project creation, CloudPlex provides preconfigured **Infrastructure** (Cluster and Network). 

   - Click **Download Key** to download SSH key as you might need it in future. 

   ![2.1](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.1.jpg)

5. Click **Next** at the top right of screen.

6. Configure **APP**.

   > **Note**: As part of this guide, we will only configure the minimum settings necessary to deploy the container. For detailed configurations, please check our detailed guide by clicking [here](/pages/user-guide/components/container-services/container-services).

   - Drag and drop the **Container** in the package canvas from left column.

   - Click on **Container** icon to configure the settings. (Platform has provided default values for most of the parameters) 

     - Scroll down and specify **Image Name** and **Tag**.

     - Go to **Environment Variables** menu and add Variable. It is necessary to add at least one variable which in our case is **MYSQL_ROOT_PASSWORD**.

     ![2.2](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.2.jpg)
     ![2.3](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.3.jpg)

     - Go to the **Ports**, click **Add Port** button and specify the port for Traffic i.e. **8080**

     ![2.4](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.4.jpg)
     ![2.5](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.5.jpg)

     - Click **Save.**

7. Click **Save** (green floppy icon at the top right) to save the project.

   ![2.6](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.6.jpg)

8. Click the Project, you just created. 

   ![3](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/3.jpg)

9. Click **Start** to deploy the project

   ![4](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/4.jpg)

10. Once a project is deployed, go to the **Logs** tab to check the logs. 

   ![5](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/5.jpg)

11. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![6](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/6.jpg)

## Use Template

1. **Select** Use Template from options. 

2. Configure the **Basic Info** tab. (Platform has provided default values for most of the parameters)

   - Select the **Cloud Provider** and specify necessary account details for the account. (For this guide we have selected AWS)

   - Enter **Profile Name** and specify the AWS credentials (Access and Secret Key). You can also save this profile for future use. Credentials will be stored in vault i.e. Credentials Profile menu.

     > **Note**: To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).
     >
     > **Note:** To perform different functions and to deploy application using CloudPlex, it is necessary to have required permissions on cloud. To know about all those permissions click [here.](pages/user-guide/components/cloud-authorization-level/cloud-authorization-level?id=cloud-authorization-level)

   ![7](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/7.jpg)

3. Click **Next** at the top right of screen.

4. As part of Use Template project creation, CloudPlex provides preconfigured **Infrastructure** (Cluster and Network) templates. You can select any one from the **CloudPlex Templates** tab. These templates are also customizable.  

5. Click **Next** at the top right of screen.

6. Customize Network configurations as per requirements or click **Next**.

   ![9](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/9.jpg)

7. Configure **Cluster**.

   - Most of the fields are preconfigured, but you can also customize them.
   - Select **Key Type** from dropdown, i.e. **New** in this case, **Enter Key Name** and click **Generate**. A side menu will open, click **Save** and new SSH key will be generated. 

   ![10](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/10.jpg)

8. Click **Next** at the top right of screen.

9. Configure **APP**.

   > **Note**: As part of this guide, we will only configure the minimum settings necessary to deploy the container. For detailed configurations, please check our detailed guide by clicking [here](/pages/user-guide/components/container-services/container-services).

   - Drag and drop the **Container** in the package canvas from left column.

   - Click on **Container** icon to configure the settings. (Platform has provided default values for most of the parameters) 

     - Scroll down and specify **Image Name** and **Tag**.
     - Go to **Environment Variables** menu and add Variable. It is necessary to add at least one variable which in our case is **MYSQL_ROOT_PASSWORD**.

     ![2.2](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.2.jpg)
     ![2.3](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.3.jpg)

     - Go to the **Ports**, click **Add Port** button and specify the port for Traffic i.e. **8080**

     ![2.4](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.4.jpg)
     ![2.5](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.5.jpg)

     - Click **Save.**

10. Click **Save** (green floppy icon at the top right) to save the project.

![2.6](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.6.jpg)

11. Click the Project, you just created. 

    ![3](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/3.jpg)

12. Click **Start** to deploy the project

    ![4](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/4.jpg)

13. Once a project is deployed, go to the **Logs** tab to check the logs. 

    ![5](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/5.jpg)

14. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![6](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/6.jpg)

## Advanced

1. **Select** Advanced from options. 

2. Configure the **Basic Info** tab. (Platform has provided default values for most of the parameters)

   - Select the **Cloud Provider** and specify necessary account details for the account. (For this guide we have selected AWS)

   - Enter **Profile Name** and specify the AWS credentials (Access and Secret Key). You can also save this profile for future use. Credentials will be stored in vault i.e. Credentials Profile menu.

     > **Note**: To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).
     >
     > **Note:** To perform different functions and to deploy application using CloudPlex, it is necessary to have required permissions on cloud. To know about all those permissions click [here.](pages/user-guide/components/cloud-authorization-level/cloud-authorization-level?id=cloud-authorization-level)

   ![11](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/11.jpg)

3. Click **Next** at the top right of screen.

4. Customize Network configurations as per requirements.

   > **Note:** Most of the fields are prepopulated with default values but you can also customize the configurations as per your requirements. 

   - Specify VPC **CIDR**.
   - Specify Subnet **CIDR**. (You can also add multiple subnets by clicking the **+** icon)

   ![12](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/12.jpg)

   - (Optional) Go to **Security Group** tab, to add Inbound or Outbound traffic rules. 

   ![13](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/13.jpg)

5. Click **Next** at the top right of screen.

6. Configure **Cluster**.

   - Most of the fields are preconfigured, but you can also customize them.
   - Select **Key Type** from dropdown, i.e. **New** in this case, **Enter Key Name** and click **Generate**. A side menu will open, click **Save** and new SSH key will be generated. 

   ![14](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/14.jpg)

7. Click **Next** at the top right of screen.

8. Configure **APP**.

   > **Note**: As part of this guide, we will only configure the minimum settings necessary to deploy the container. For detailed configurations, please check our detailed guide by clicking [here](/pages/user-guide/components/container-services/container-services).

   - Drag and drop the **Container** in the package canvas from left column.

   - Click on **Container** icon to configure the settings. (Platform has provided default values for most of the parameters) 

     - Scroll down and specify **Image Name** and **Tag**.
     - Go to **Environment Variables** menu and add Variable. It is necessary to add at least one variable which in our case is **MYSQL_ROOT_PASSWORD**.

     ![2.2](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.2.jpg)
     ![2.3](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.3.jpg)

     - Go to the **Ports**, click **Add Port** button and specify the port for Traffic i.e. **8080**

     ![2.4](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.4.jpg)
     ![2.5](F:/CloudPlex/user-documentation/pages/user-guide/getting-started/imgs/2.5.jpg)

     - Click **Save.**

9. Click **Save** (green floppy icon at the top right) to save the project.

![2.6](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/2.6.jpg)

11. Click the Project, you just created. 

    ![3](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/3.jpg)

12. Click **Start** to deploy the project

    ![4](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/4.jpg)

13. Once a project is deployed, go to the **Logs** tab to check the logs. 

    ![5](C:/Users/HP/Documents/Documents/CP/docs/pages/user-guide/getting-started/imgs/5.jpg)

14. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![6](imgs\6.jpg)