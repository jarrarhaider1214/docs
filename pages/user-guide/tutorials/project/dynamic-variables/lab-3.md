# Deployment Using Dynamic Variables

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

   - Drag and drop 2 **Containers** in the package canvas from left column and create dependency between the two using arrow.

     > **Note:** Dynamic variables can only be used in the service that will be executed once the first service is deployed and connected using arrow i.e. container 2 in picture below.
     >
     > As container 2 is dependent on container 1, it will be deployed once container 1 is in running state, we can use dynamic variables in container 2 to fetch different values on runtime from container 1.

   ![9](imgs/9.jpg)

   - Click on **Container** icons to configure the settings.
   - To use dynamic variables, click on Container 2 icon and scroll down to **Add Dynamic Variables** button.

   ![10](imgs/10.jpg)

   - Configure Dynamic Variable.

     - Select **Service** from drop-down. 

       > **Note:** Only those services will be listed from which values can** be fetched which in our case was container 1

     - Specify **Key**.

     - Dynamic Variables that can be used are listed below. Select any variable from the list, system will automatically generate the dynamic variable and populate the Value.

     - Click **Save**

   ![11](imgs/11.jpg)

   - Dynamic Variable will now be added. Complete rest of the configurations and click **Save**.

   ![12](imgs\12.jpg)

7. Click **Save** (green floppy icon at the top right) to save the project.

   ![13](imgs\13.jpg)

8. Click the Project, you just created. 

   ![14](imgs/14.jpg)

9. Click **Start** to deploy the project

   ![15](imgs/15.jpg)