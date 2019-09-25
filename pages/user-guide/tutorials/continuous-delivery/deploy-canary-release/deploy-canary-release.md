# Deploy Canary Release

This guide explains step by step process of deploying a canary release. Canary deployment can be automated and manual. 

**Manual Canary Deployment:**

To configure CI/CD:

1. Go the **Mesh** tab while configuring a **Project** and add container.

2.  Select container to configure it and go to the **CI/CD** menu. 

   ![1](imgs\1.jpg)

3. **Enable CI/CD** and **Deployment Pipeline** and click **Configure Pipeline**. 

   ![2](imgs\2.jpg)

4. Enter **Pipeline Name**, **Pipeline Description** and select the **Type** from drop-down i.e. **Canary**. 

   To configure **Traffic Weight**, click **Add Stage**. You can add multiple stages as well. 

   ![3](imgs\3.jpg)

5. Select **Manual** from drop-down. Specify **Canary**, **Baseline** and **Current** threshold. 

   Similarly, you can add more stages as well and keep on increasing the threshold level as per requirements. 

   ![4](imgs\4.jpg)

6. Click **Save**, configure the rest of Project and deploy the solution. 

7. Go to the **CICD** menu from top bar and click **Pipelines**. 

   All the pipelines created will be listed here. 

   ![5](imgs\5.jpg)

8. Using the **Actions** button, you can start pipeline or check the configurations of pipelines. 

   Table will be updated based on deployment. In case of manual, you will have to manually run the pipeline for each stage.