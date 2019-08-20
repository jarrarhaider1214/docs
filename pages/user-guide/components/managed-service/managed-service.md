# Managed Services

As enterprises are moving towards adopting the cloud at scale, it takes time and help to gain skills and experience necessary to manage different clouds like AWS, Azure and GCP end to end. To make it easy to manage cloud, cloud providers have created a managed services. Managed Services from different clouds reduces operational overheads by automating common activities like backup services, monitoring, change requests and provide a lot of other services to provision, run and support your infrastructure. Managed services also provides ongoing optimization of cost and day to day management of infrastructure to make sure everything is working in optimal conditions. By automating the process of system and infrastructure management using these services, businesses can work on value building for their user base rather than worrying about maintaining the whole system.

Ultramesh provides support for multiple managed services from different cloud providers. In Ultramesh, you can make these managed services part of a solution mesh using dynamic parameters.  All the managed services that have been created on cloud platforms, can be consumed in Ultramesh using dynamic parameters. Values for parameters will be fetched on run time.

Details of the configurations that can be done for Managed Services are explained below and also highlighted in the image.

![1](imgs\1.jpg)

1. **AWS Managed Services**: Drop-down to add AWS managed services in canvas. 
2. **Azure Managed Services**: Drop-down to add Azure managed services in canvas.
3. **GCP Managed Services**: Drop-down to add GCP managed services in canvas. 
4. **S3 Service**: Drag and drop the service icon to add in canvas. Click on icon to configure the service.

![2](imgs\2.jpg)

1. **Templates**: To reuse any existing service template.

2. **Name**: Name for the service.

3. **Version**: Version of the service

4. **Namespace**: Namespace for the service.

5. **Region**: Region from which the service details will be fetched.

6. **Profile**: Profile to use to fetch the service. 

7. **Fetch Buckets**: To fetch all the buckets of the selected profile. 

   > **Note:** For RDS and RedShift, instances will be fetched.

8. **Select S3 Bucket**: Bucket to fetch the attributes from.

9. **Select Attributes**: To select attributes of the services that will be used as dynamic parameters.

![3](imgs\3.jpg)

1. **Attributes JSON**: Available Attributes that can be added as dynamic parameters. 
2. **Selected Attributes**: Attributes added that are required as dynamic parameters. Click on the attribute name to add it.

![4](imgs\4.jpg)

1. **Add Parameters**: To add any static parameter. 