## Provider Managed - Existing Kubernetes Cluster

1. **Select** Use Existing Kubernetes Cluster from Provided Managed section.  

2. Configure the **Basic Info** tab. (Platform provides default values for most of the parameters)

   - Select the **Cloud Provider**. (For this guide we have selected Azure Kubernetes Service)

   ![6](imgs/6.jpg)

3. Click **Next** at the top right of screen.

4. Configure **Cluster**.
   From here you can connect your existing kubernetes cluster with CloudPlex.  

   - Download YML file. 

   - Configure kubectl (client) with your existing kubernetes cluster that you want to import. 

   - Run following command on downloaded YML file. 

     ```
     kubectl apply -f agent.yml
     ```

   > Download Config file of the cluster from the cloud and apply agent on that as shown in the picture below.

   ![6.1](imgs/6.1.png)

   - Once pod is in running state, click **Verify Connect** to verify the connection with cluster. 

   ![6.2](imgs/6.2.png)

5. Click **Next** at the top right of screen.

6. Select **App Type**.
   **Select New Application**: To deploy new CloudPlex managed application on existing kubernetes cluster. (creating new application as part of this guide)
   **Select Existing Application:** To migrate application from any kubernetes cluster to CloudPlex. 

   ![6.3](imgs/6.3.png)

7. Click **Next** at the top right of screen.

8. Design application using **App Designer**.

   > As part of this guide, we will only configure the minimum settings necessary to deploy the container. For detailed configurations, please check our detailed guide by clicking [here](/pages/user-guide/components/container-services/container-services).

   - Drag and drop the **Container** in the package canvas from left column.

   - Click on **Container** icon to configure the settings. (Platform has provided default values for most of the parameters) 

     - Specify **Image Name** and **Tag**.
     - Go to **Environment Variables** menu and add Variable. It is necessary to add at least one variable which in our case is **MYSQL_ROOT_PASSWORD**.

     ![2.2](imgs/2.2.jpg)
     ![2.3](imgs/2.3.jpg)

     - Go to the **Ports**, click **Add Port** button and specify the port for Traffic i.e. **8080**

     ![2.4](imgs/2.4.jpg)

     - Click **Save.**

9. Click **Save** (green floppy icon at the top right) to save the application.

   ![2.5](imgs/2.5.jpg)

10. Click **Start** to deploy the application.

    ![3](imgs/3.jpg)

11. Once an application is started, platform automatically redirect to **Logs** tab. Logs help in monitoring of different phases of application deployment.

![4](imgs/4.jpg)

11. To check in-depth flow of traffic, go to the **Monitoring** tab.

![5](imgs/5.jpg)