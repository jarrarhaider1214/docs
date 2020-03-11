# App

This section will explain the process of App creation and all the relevant configurations for different types of services.

Now let's move to the step by step process of how to configure an App. 

1. Enter **Solution Name**.

   ![1](imgs\1.jpg)

2. To use any existing template for this App click **Templates** button or configure the App from scratch by selecting services from left column. (We will be configuring a new one in this guide)

   > You can also upload a YAML file for solution app and its configurations.

3. Drag and drop the services from left column on the canvas. You can add multiple services as per requirements. 

   ![2](imgs\2.jpg)

4. Create dependency graph between services to set the order of execution. Select any service, drag and drop the arrow sign on to the dependent service to create a graph.

   > Only the dependent services will be able to use dynamic parameters. e.g. in the image below container service can set dynamic parameters and get the value from Secret service but cant get any value from AWS RDS service.

   ![3](imgs\3.jpg)

5. Click on the service icon to configure the service. 

   > For detailed guide on configurations for each type of service, check our [components](/pages/user-guide/components/components) guide.

   ![4](imgs\4.jpg)

6. You can also use the bar available at bottom to set the zoom level or to auto fix the layout of graph.

   ![5](imgs\5.jpg)

7. Click save (green floppy icon at the top right) to save solution.