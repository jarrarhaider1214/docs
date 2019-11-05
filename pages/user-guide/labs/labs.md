# CloudPlex Training Labs

Welcome to CloudPlex! 

Purpose of these labs is to take user through the end to end process of deployment using prebuilt templates that CloudPlex provides to its new users so that they can get up to speed in no time. Deployment using existing templates will take less than 15 minutes. 

## Lab 1 (AWS) (BookingInfo)

1. Once logged in, click the green **+** icon to start the project creation wizard. 

   ![1](imgs/1.jpg)

2. Configure the **Basic Info** tab.

   - Enter **Project Name** and **Project ID**.

   - Enter **Description**.

   - Select the **Cloud Provider** and specify necessary account details for the account. (For this guide we have selected AWS)

   - Select **Region** as per requirements.

   - Enter the AWS credentials manually. You can also save this profile for future use. Credentials will be stored in vault i.e. Credentials Profile menu.

     > **Note**: To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).

   ![2](imgs/2.jpg)

3. Click **Next** at the top right of screen.

4. Click **Templates** button to get the list of existing/prebuilt network templates. 

   > Select **testforaws1** template.

   ![3](imgs/3.jpg)

   ![4](imgs/4.jpg)

5. Click **Next** at the top right of screen.

6. Click **Templates** button to get the list of existing/prebuilt cluster templates.

   > Select **aws-1** template. Most of fields will automatically get populated on selecting a template.  Other required configurations are explained below.

   ![5](imgs/5.jpg)

   - Select **Subnet** and **Security Groups** from drop-down.

     ![6](imgs/6.jpg)

   - Select **New** from **Key Type** dropdown, enter **Key Name** and click **Generate**. A side menu will open, click **Save** and new SSH key will be generated. 

     ![7](imgs/7.jpg)

   - Rest of the fields will be prepopulated. 

7. Click **Next** at the top right of screen.

8. Click **Templates** button to get the list of existing/prebuilt app templates.

   > Select **bookinfoapp** template

   ![8](imgs/8.jpg)

   ![9](imgs/9.jpg)

9. Click **Save** (green floppy icon at the top right) to save the project.

   ![10](imgs/10.jpg)

10. Click the Project, you just created. 

    ![11](imgs/11.jpg)

11. Click **Start** to deploy the project

    ![12](imgs/12.jpg)

12. Once a project is deployed, go to the **Logs** tab to check the logs. 

    ![13](imgs/13.jpg)

13. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![14](imgs/14.jpg)

14. Don't forget to terminate the project to avoid incurring extra cloud charges. 

    ![15](imgs/15.jpg)

## Lab 2 (AWS) (Hipstershop)

1. Once logged in, click the green **+** icon to start the project creation wizard. 

   ![1](imgs/1.jpg)

2. Configure the **Basic Info** tab.

   - Enter **Project Name** and **Project ID**.

   - Enter **Description**.

   - Select the **Cloud Provider** and specify necessary account details for the account. (For this guide we have selected AWS)

   - Select **Region** as per requirements.

   - Enter the AWS credentials manually. You can also save this profile for future use. Credentials will be stored in vault i.e. Credentials Profile menu.

     > **Note**: To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).

   ![2](imgs/2.jpg)

3. Click **Next** at the top right of screen.

4. Click **Templates** button to get the list of existing/prebuilt network templates. 

   > Select **testforaws1** template.

   ![3](imgs/3.jpg)

   ![4](imgs/4.jpg)

5. Click **Next** at the top right of screen.

6. Click **Templates** button to get the list of existing/prebuilt cluster templates.

   > Select **aws-1** template. Most of fields will automatically get populated on selecting a template.  Other required configurations are explained below.

   ![5](imgs/5.jpg)

   - Select **Subnet** and **Security Groups** from drop-down.

     ![6](imgs/6.jpg)

   - Select **New** from **Key Type** dropdown, enter **Key Name** and click **Generate**. A side menu will open, click **Save** and new SSH key will be generated. 

     ![7](imgs/7.jpg)

   - Rest of the fields will be prepopulated. 

7. Click **Next** at the top right of screen.

8. Click **Templates** button to get the list of existing/prebuilt app templates.

   > Select **hipstershop-app-template** template

   ![16](imgs/16.jpg)

   ![17](imgs\17.jpg)

9. Click **Save** (green floppy icon at the top right) to save the project.

   ![18](imgs/18.jpg)

10. Click the Project, you just created. 

    ![11](imgs/11.jpg)

11. Click **Start** to deploy the project

    ![12](imgs/12.jpg)

12. Once a project is deployed, go to the **Logs** tab to check the logs. 

    ![13](imgs/13.jpg)

13. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![14](imgs/14.jpg)

14. Don't forget to terminate the project to avoid incurring extra cloud charges. 

    ![15](imgs/15.jpg)

## Lab 3 (AWS) (BookingInfo + Custom)

1. Once logged in, click the green **+** icon to start the project creation wizard. 

   ![1](imgs/1.jpg)

2. Configure the **Basic Info** tab.

   - Enter **Project Name** and **Project ID**.

   - Enter **Description**.

   - Select the **Cloud Provider** and specify necessary account details for the account. (For this guide we have selected AWS)

   - Select **Region** as per requirements.

   - Enter the AWS credentials manually. You can also save this profile for future use. Credentials will be stored in vault i.e. Credentials Profile menu.

     > **Note**: To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).

   ![2](imgs/2.jpg)

3. Click **Next** at the top right of screen.

4. Click **Templates** button to get the list of existing/prebuilt network templates. 

   > Select **testforaws1** template.

   ![3](imgs/3.jpg)

   ![4](imgs/4.jpg)

5. Click **Next** at the top right of screen.

6. Click **Templates** button to get the list of existing/prebuilt cluster templates.

   > Select **aws-1** template. Most of fields will automatically get populated on selecting a template.  Other required configurations are explained below.

   ![5](imgs/5.jpg)

   - Select **Subnet** and **Security Groups** from drop-down.

     ![6](imgs/6.jpg)

   - Select **New** from **Key Type** dropdown, enter **Key Name** and click **Generate**. A side menu will open, click **Save** and new SSH key will be generated. 

     ![7](imgs/7.jpg)

   - Rest of the fields will be prepopulated. 

7. Click **Next** at the top right of screen.

8. Click **Templates** button to get the list of existing/prebuilt app templates.

   > Select **hipstershop-app-template** template

9. Click **Save** (green floppy icon at the top right) to save the project.

10. Click the Project, you just created. 

    ![11](imgs/11.jpg)

11. Click **Start** to deploy the project

    ![12](imgs/12.jpg)

12. Once a project is deployed, go to the **Logs** tab to check the logs. 

    ![13](imgs/13.jpg)

13. To check in-depth flow of traffic, go to the **Monitoring** tab.

    ![14](imgs/14.jpg)

14. Don't forget to terminate the project to avoid incurring extra cloud charges. 

    ![15](imgs/15.jpg)

