# ServicePlex

Service Plex is part of [ViziPlex](/pages/user-guide/components/viziplex/viziplex?id=viziplex). Purpose of this guide is to show how a user can use ServicePlex to add a MySQL service to a deployed application and redeploy it with this added service. 

With ServicePlex, you can add Kubernetes-ready services to your app in seconds. User can choose from 1000s of kubernetes-ready reusable components in the ServicePlex hub and simply drop them in the application. CloudPlex takes care of the all the integration heavy-lifting. 

- We will start with the book info application. To build this application, see our previous video on how to build your first application with CloudPlex.
- Now that you have configured your application let’s deploy it in the cloud.
- Click on the deploy button to select infrastructures on which you want to deploy your application. You may select one or more infrastructures. 
- Now that the application has been deployed, let’s edit the deployed application
- Click on the app tab and then on the edit button to open the application. 
- Click on the next button to get to ViziPlex.
- Open up ServicePlex by clicking on the service hub button 
- Type MySQL in the search bar and click on the filter button
- Scroll down and select the stable MySQL service
- Click on the options and select add to canvas to add the service to your application
- Back on the design canvas in ViziPlex you can drag the service to a more convenient location
- Now let’s create a dependency between the services. Drag an arrow from the MySQL service and drop it on the Ratings service. 
- Now that your application has been reconfigured, it is time to redeploy it. 
- Click on the deploy button to redeploy your application
- You will be redirected to logging.
- Once the application redeploys you can check the status of your application by clicking on the status tab where you can see the real-time status of your services, including the new services you just added. 
- You can see the application you just deployed by copying the  Ingress IP address from the status tab 
- Open a new browser tab and paste the ingress IP address. You will see your application deployed on the Kubernetes cluster you created with KubePlex. 
- Do not forget to terminate your application when you are done.
- Click on the terminate button to delete all your resources from your infrastructure.
- Do not forget to terminate your infrastructure when you are done with it as well. 
- Note, you will not be able to terminate your infrastructure until all applications deployed on it are terminated first. 

## Conclusion

You just used ServicePlex to add MySQL to a deployed application using CloudPlex, the Kubernetes Application Platform for Developers