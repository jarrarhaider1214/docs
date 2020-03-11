# Managed Services

As enterprises are moving towards adopting the cloud at scale, it takes time and help to gain skills and experience necessary to manage different clouds like AWS, Azure and GCP end to end. To make it easy to manage cloud, cloud providers have created a managed services. Managed Services from different clouds reduces operational overheads by automating common activities like backup services, monitoring, change requests and provide a lot of other services to provision, run and support your infrastructure. Managed services also provides ongoing optimization of cost and day to day management of infrastructure to make sure everything is working in optimal conditions. By automating the process of system and infrastructure management using these services, businesses can work on value building for their user base rather than worrying about maintaining the whole system.

CloudPlex provides support for multiple managed services from different cloud providers. In CloudPlex, you can make these managed services part of a solution application using dynamic parameters.  All the managed services that have been created on cloud platforms, can be consumed in CloudPlex using dynamic parameters. Values for parameters will be fetched on run time.

Details of the configurations that can be done for Managed Services are explained below and also highlighted in the image.

![1](imgs\1.jpg)

1. **AWS Managed Services**: Drop-down to add AWS managed services in canvas. 
2. **Azure Managed Services**: Drop-down to add Azure managed services in canvas.
3. **GCP Managed Services**: Drop-down to add GCP managed services in canvas. 

![2](imgs\2.jpg)

> **Note:** As part of this guide, S3 is being used. Process of fetching the attributes is same for all the services. 

1. **Templates**: To reuse any existing service template.

2. **Name**: Name for the service.

3. **Version**: Version of the service

4. **Profile**: Profile to use to fetch the service. 

5. **Fetch Buckets**: To fetch all the buckets of the selected profile. 

   > **Note:** For RDS and RedShift, instances will be fetched.

6. **Select S3 Bucket**: Bucket to fetch the attributes from.

7. **Select Attributes**: To select attributes of the services that will be used as dynamic parameters.

![3](imgs\3.jpg)

1. **Attributes JSON**: Available Attributes that can be added as dynamic parameters. 
2. **Selected Attributes**: Attributes added that are required as dynamic parameters. Click on the attribute name to add it.

![4](imgs\4.jpg)

1. **Add Parameters**: To add any static parameter. 