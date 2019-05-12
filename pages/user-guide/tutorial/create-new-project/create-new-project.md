# Create New Project

In Mega Mesh, you can deploy a project (deployment step where clusters, networks and applications deployment is configured) and manage complex use cases related to mesh, container or serverless using an easy to use drag and drop UI. 

In Mega Mesh, deployment takes place at Project level and it is divided in to these steps:

1. Configure Basic Info
2. Configure Cluster
3. Configure Network
4. Configure Solutions (docker, mesh, serverless)
5. Deploy

Now lets move to guide on how to deploy a project in Cloud Native. 

## Project

Project is level where everything will be configured and the deployment will take place. Below is the step by step guide on how to create a project.

1. Login to the platform, go to the **Projects** menu from top bar and click "**+**" button to create a new project.

   ![1](imgs/1.png)

2. Configure **Basic Info** of **Project**.

   - Enter **Project Name** and **Project ID**.
   - Enter **Description**.
   - Select the **Cloud Provider** and specify necessary account details for the account.
   - Select **Region** as per requirements.

   ![2](imgs/2.png)

3. Click **Next**.

4. Configure **Networks**.

   - Enter **Network Name**.
   - Select **Virtual Private Cloud** from dropdown i.e. **New** or some existing network. (existing networks will be listed based on account details provided while configuring **Basic Info** tab)
     Network type is whether you want to create any new network or use any existing network VPC or Subnet.
     For **New Network** **Type**:
     - Enter **VPC Name**. 
     - Specify **VPC CIDR**.
     - To add Subnet, go to the **Subnets** tab, click "+" icon and specify the **Subnet Name** and **CIDR**.
     - To add Security Group (SG), go to the **Security Groups** tab. (You can add more than one SG as well)
       - Specify the **SG Name** and **Description**.
       - To add rules for inbound traffic click **Add Inbound Rules** and configure the rule. (You can add more than one rule as well)
         - Select the rule **Type** from dropdown e.g. Custom TCP, Custom UDP etc.
         - Specify the rule **Protocol** i.e. TCP, UDP etc. 
         - Specify the **Ports** that will be exposed to traffic. 
         - Specify **Source**. e.g. 0.0.0.0/0. 
           The Source can be an IPv4 addresses or range of IPv4 addresses in CIDR notation.
       - To add rules for outgoing traffic, click **Add Outbound Rules**. (You can add more than one rule as well)
         - Select the rule **Type** from dropdown e.g. Custom TCP, Custom UDP etc.
         - Specify the rule **Protocol** i.e. TCP, UDP etc. 
         - Specify the **Ports** that will be exposed to traffic. 
         - Specify **Source**. e.g. 0.0.0.0/0. 
           The Source can be an IPv4 addresses or range of IPv4 addresses in CIDR notation.

   ![3](imgs/3.png)

   ​	For **Existing Virtual Private Cloud**:

   ​		Select existing **VPC**,  **Subnet** and **Security Group** from dropdown.

   **Note**: To use any existing network template, click the black **Templates** button to get the list of 	templates. 

5. Click **Next**. (Click the green floppy icon to save the network template)

6. Configure **Clusters**.

   - Enter **Cluster Name** and click **Add Node Pools** button.

   ![4](imgs/4.png)

   - Enter **Node Pool Name**.
   - Specify **Node Count** and **Machine Type** from the dropdown.
   - Select **Subnet** and **Security Groups** from dropdown. (You can select upto 5 subnets for AWS and 1 for Azure.)
   - Select **Key Type** from dropdown i.e. **New** or **Existing**.
     Whether you want to create a new Key or use any existing one.
   - Specify the **AMI ID** and **AMI Username**. (you can get these from cloud admin portal)

7. Click **Next**. (Click the green floppy icon to save the Cluster template)