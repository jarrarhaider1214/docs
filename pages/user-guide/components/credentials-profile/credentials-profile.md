# Credentials Profile

Credential profile menu lets you save your credentials for AWS, Azure and other credentials that might be needed to setup project and for deployment. You can save your credentials for docker registry, APIs etc. These stored credentials can then be later used to configure a project or solution.

Purpose of this is to make it as easy as possible for the user to deploy the project. MegaMesh aims to provide a seamless experience of deployment. By storing the credentials, user won't have to manually provide the credentials to gain the access of resource everytime and be done with deployment in under 5 minutes. 

Different type of Credentials can be saved and fetched while configuring different modules in the platform. Explained below is the process of storing credentials in platform. 

## Cloud Profile

Cloud Profile can be saved while configuring the Basic Info tab of project. 

1. Select the **Cloud Provider** e.g. AWS.

2. Select **New** from **Profile** drop-down.

3. Enter **Profile Name**.

4. Specify **Access Key** and **Secret Key** for AWS account.

   > Different credentials will be needed for each cloud provider.

5. Click **Save Profile**.

   ![1](imgs\1.jpg)

6. **Template Name** will get populated automatically. 

7. Select **Team** from drop-down to provide access of this profile.

8. Click **Save**. You will now be able to select this profile from drop-down for future projects. 

   ![2](imgs\2.jpg)

## Docker Registry

Docker registry credentials can be saved while configuring the container service. 

1. Select **New** from **Registry** drop-down.

2. Enter **Registry Name**.

3. Specify the **Registry Username** and **Password**. 

4. Click **Save Docker Credentials** button. You will now be able to select these credentials from drop-down to configure other container services.

   ![3](imgs\3.jpg)

## Git Credentials

Git credentials can be saved while configuring the Serverless service. 

1. Select **New** from **Git** drop-down.

2. Enter **Profile Name**.

3. Specify the **Repository Name** and **Private Key**

4. Click **Save Git Credentials** button. You will now be able to select these credentials from drop-down to configure other Serverless services.

   ![4](imgs\4.jpg)