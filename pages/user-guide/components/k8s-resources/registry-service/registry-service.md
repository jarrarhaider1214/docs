# Registry Services

Registry services can be used to fetch the image details from the respective cloud repo e.g. AWS ECR. Registry service can be used to:

1. Fetch image details from registry and deploy the container using CloudPlex
2. Fetch image details from cloud registry and migrate to any other cloud.

Details of how the image can be fetched from registry are explained below and also highlighted in the image. (For this guide, we have fetched image details from Azure registry)

>  For every section in the guide below, images are followed by description of the fields highlighted in the image.

![1](imgs/1.jpg) 

1. **K8s Resource**: Drop-down to add K8s resources. 
2. **Azure Registry**: Click the icon to fetch image details from Azure registry.
3. **Profile:** Select credential profile from the drop-down. (To know more about Credentials Profile menu, click [here](/pages/user-guide/components/credentials-profile/credentials-profile).)
4. **Search:** To fetch container registries from that profile. 
5. **Registry:** Select registry to get the list of repositories.

![2](imgs/2.jpg)

![3](imgs/3.jpg)

1. **Select Repository:** Select repository to fetch the image details.

   > Once the image is fetched, you can deploy right away or save this image as template for future use.