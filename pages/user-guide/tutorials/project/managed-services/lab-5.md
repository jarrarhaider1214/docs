# Managed Services Consumption

1. Login to CloudPlex and click the **green +** icon to start the project creation wizard. 
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

6. Configure **App**.

   - Go to Cloud **Managed Services** drop-down to get the list of services currently supported in platform.

   ![9](imgs/9.jpg)

   - Drag and drop the required service in solution canvas and configure it. 

     > **Note:** Process of configuration is the same for all the services. 

   - Enter the **Name** and **Version** for the service. 


   ![10](imgs/10.jpg)

   - Select **Profile** from drop-down and click **Fetch Buckets** to fetch the buckets for AWS.

     > **Note:** For RDS and RedShift, Instances will be fetched.

   - Select **S3 Bucket** from the drop-down.

   ![11](imgs/11.jpg)

   - Click **Select Attributes**, click on the attribute value and click **Done** to add it as Dynamic Variable. 

   ![12](imgs/12.jpg)
   ![13](imgs/13.jpg)

   - You can also add other parameters by clicking **Add Parameters** button.

7. Click **Save** to save the service. You can now use these variables to configure other services in your app.