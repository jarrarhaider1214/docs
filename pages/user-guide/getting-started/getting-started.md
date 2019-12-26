# Getting Started

Welcome to CloudPlex! 

Purpose of this getting started guide is take user through the end to end process of signing up and deployment. We are excited to have you try our platform. Once you are done with this guide, feel free to share your feedback at info@cloudplex.io. For detailed guide on what CloudPlex has to offer click [here](/overview).

Now, lets move to the process of signing up and deployment

1. Go to [app.cloudplex.io/register](https://app.cloudplex.io/register) and sign up for a new account. 

   ![0](imgs\0.jpg)

2. After email verification, you will be able to login to platform.

   > **Note:** First time user signing up using a company domain will have **Super User** access of platform.  For more details on how super user can invite team members, check our guide on Access Management by clicking [here](/pages/user-guide/components/access-management/access-management).

   ![0.1](imgs\0.1.jpg)

3. Once logged in, click **Create Project** button to start the project creation wizard. 

![1](imgs\1.jpg)

CloudPlex offers 4 types of project creation wizard based on the requirements and expertise level of the user. 

1. Quick Start
   Recommended for the users who want to deploy a project quickly using predefined default configurations. 
2. Use Template
   Recommended for the users who to deploy a project using different prebuilt templates (Network and Cluster) provided by the platform.
3. Advanced
   Recommended for the expert level users who want to customize configurations of Network, Cluster and Applications as per their requirements. 
4. Use Cloning
   Recommended for the users who want to use same configurations or configurations with minor changes of any existing project by cloning it. 

![1.1](imgs\1.1.jpg)

## Quick Start

1. **Select** Quick Start from options. 

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

6. Configure **APP**.

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

7. Click **Save** (green floppy icon at the top right) to save the project.

   ![2.6](imgs\2.6.jpg)

8. Click the Project, you just created. 

   ![3](imgs/3.jpg)

9. Click **Start** to deploy the project

   ![4](imgs/4.jpg)

10. Once a project is deployed, go to the **Logs** tab to check the logs. 

   ![5](imgs/5.jpg)

11. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![6](imgs/6.jpg)

## Use Template

1. **Select** Use Template from options. 

2. Configure the **Basic Info** tab. (Platform has provided default values for most of the parameters)

   - Select the **Cloud Provider** and specify necessary account details for the account. (For this guide we have selected AWS)

   - Enter **Profile Name** and specify the AWS credentials (Access and Secret Key). You can also save this profile for future use. Credentials will be stored in vault i.e. Credentials Profile menu.

     > **Note**: To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).

   ![7](imgs/7.jpg)

3. Click **Next** at the top right of screen.

4. As part of Use Template project creation, CloudPlex provides preconfigured **Infrastructure** (Cluster and Network) templates. You can select any one from the **CloudPlex Templates** tab. These templates are also customizable.  

5. Click **Next** at the top right of screen.

6. Customize Network configurations as per requirements or click **Next**.

   ![9](imgs\9.jpg)

7. Configure **Cluster**.

   - Most of the fields are preconfigured, but you can also customize them.
   - Select **Key Type** from dropdown, i.e. **New** in this case, **Enter Key Name** and click **Generate**. A side menu will open, click **Save** and new SSH key will be generated. 

   ![10](imgs\10.jpg)

8. Click **Next** at the top right of screen.

9. Configure **APP**.

   > **Note**: As part of this guide, we will only configure the minimum settings necessary to deploy the container. For detailed configurations, please check our detailed guide by clicking [here](/pages/user-guide/components/container-services/container-services).

   - Drag and drop the **Container** in the package canvas from left column.

   - Click on **Container** icon to configure the settings. (Platform has provided default values for most of the parameters) 

     - Scroll down and specify **Image Name** and **Tag**.
     - Go to **Environment Variables** menu and add Variable. It is necessary to add at least one variable which in our case is **MYSQL_ROOT_PASSWORD**.

     ![2.2](imgs/2.2.jpg)
     ![2.3](imgs/2.3.jpg)

     - Go to the **Ports**, click **Add Port** button and specify the port for Traffic i.e. **8080**

     ![2.4](imgs/2.4.jpg)
     ![2.5](imgs/2.5.jpg)

     - Click **Save.**

10. Click **Save** (green floppy icon at the top right) to save the project.

   ![2.6](imgs/2.6.jpg)

11. Click the Project, you just created. 

    ![3](imgs/3.jpg)

12. Click **Start** to deploy the project

    ![4](imgs/4.jpg)

13. Once a project is deployed, go to the **Logs** tab to check the logs. 

    ![5](imgs/5.jpg)

14. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![6](imgs/6.jpg)
