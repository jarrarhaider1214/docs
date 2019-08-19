# Project

Project is where all the previous modules cluster, network, solution will be configured together and the services will be deployed on the nodes. The purpose of the environment is to use the cluster, solution, network and deploy the microservices after detailed configuration. The other features of the CloudPlex platform like financial charges, costing etc. also use data based on projects.

Details of the configurations that can be done at Project level (Basic Info) are explained below and also highlighted in the image.

![1](imgs\1.jpg)

1. **Back Button**: Can be used to navigate to the previous menu.
2. **Next Button**: Can be used to navigate to the next step.
3. Configurations required to be completed at Project level for deployment. 
4. **Project Name**: Name of the Project.
5. **Project ID**: Unique ID of the project.
6. **Description**: Any description related to the project.
7. **Kubernetes Type: N/A**

![2](imgs\2.jpg)

1. **Provider**: Cloud Type for deployment i.e. AWS, Azure, GCP
2. **Region**: Region for deployment. Regions will be listed based on cloud provider selected.
3. **Profile**: Credential Profile to access the cloud resources. You can create a new profile or use any of the existing one. 
4. **Profile Name**: In case of new profile to save the cloud credentials. 
5. **Access Key**: Access key of the AWS account.
6. **Access Secret**: Secret key of the AWS account.

> **Note:** Access and Secret key is needed only for AWS account. For GCP and Azure, their required credentials will be needed

> **Note:** Details of configurations of Cluster, Network and Solutions are explained in other sections. 