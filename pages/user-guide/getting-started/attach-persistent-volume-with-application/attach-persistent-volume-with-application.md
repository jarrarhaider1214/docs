# Attach Persistent Volume with Application

A Persistent Volume (PV) is a piece of storage in the cluster that gets provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource. PVs are volume plugins like Volumes, but have a lifecycle independent of any individual Pod that uses the PV. The simplest way to create a persistent volume is statically, that is, you allocate the volume independently and then tell Kubernetes to take over. To know more about PV, click [here](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) or check our guide on how to manage persistent volume [here](https://cloudplex.io/tutorial/persistent-volumes-tutorial/).

The purpose of this guide is to take user through the process of attaching a persistent volume with application and deployment. For a video guide, please click [here](https://drive.google.com/file/d/129MO_dYTHKg4AuchSQ4TkAp5TI4LqEzV/view?usp=sharing).

**Configure the Persistent Volume with MySQL Container**

Here is how we can attach a persistent volume with MySQL application.

1. Click on the **Create** new application button.

   ![1](imgs/1.png)

2. **Select** create new application and provide basic information.

   ![2](imgs/2.png)

3. Click on the **Next** button.

   ![3](imgs/3.png)

4. Before attaching a volume to the MySQL container, we need to first create and configure a CloudPlex secret service and a mysql container.

5. To configure the service, Drag-n-drop **Secret** service from pallet to the canvas.

6. Click on the service to open the configuration panel on the right side.

7. The platform will populate the default values of service (Service Id, Service Name, Namespace)

8. Update Service Id and Service Name to **mysql-secret**

   ![3.1](imgs/3.1.png)

9. By default, the type of secret is Opaque, you can choose different types according to your use case.

10. Click on Add secret string and type **MYSQL_ROOT_PASSWORD** in key and the Password in the value field. For this guide, type **5dzo2MsriVJNYTTtud8gOyDc3A** in the value field.

    ![3.2](imgs/3.2.png)

11. Click on **Save** button to save service

12. Drag-n-drop the **Docker Hub** service from pallet to the canvas.

13. Drag the arrow from Secret service to container service.

14. Click on the service to open the configuration panel on the right side.

15. Type **MySQL** in the search bar and click on the **search** button.

16. Select MySQL service.

    ![4](imgs/4.png)

17. Click on **Environment Variables** and click on **Add Dynamic** parameters

    ![4.1](imgs/4.1.png)

18. Select **mysql-secret** from the service drop-down.

19. Type **MYSQL_ROOT_PASSWORD** in the key field.

20. Expand Service Attributes and Secrets Data and select **MYSQL_ROOT_PASSWORD.** Cloudplex automatically generates dynamic  parameters for you.

    ![4.2](imgs/4.2.png)

21. Click on the **Save** button to save the parameters.

22. Click on the **Save** button to save the service.

    ![4.3](imgs/4.3.png)

23. Now that you have created a MySQL container and a CloudPlex secret service, let’s attach persistent volume.

    > There are many types of volumes, such as persistentVolume, hostPath, and emptyDir. CloudPlex provides support for all these volume types and an easy to use interface to use all of them.

24. Click on the MySQL container and click on **Advanced Configurations**.

    ![5](imgs/5.png)

25. Select **Container Volumes.** For this video, let's select **Persistent Volume**. Click on new to create a new Persistent Volume. CloudPlex will take you to the volume configurations panel. 

    ![6](imgs/6.png)

26. CloudPlex automatically populates default values for persistent volume. (Service Id, Service Name, Namespace)

27. Select **ReadWriteMany** from the Access Mode and enter **10Gi** in both the request and limit quantities.

    ![7](imgs/7.png)

28. Click on the **Save** button to save the service.

29. Saving will take you back to container service configurations. Now, provide the volume mount path of **/var/lib/mysql**. 

    ![8](imgs/8.png)

30. Click on the **Save** button to save the service.

    > All the Kubernetes manifests required to create a persistent volume (persistent volume claim, storageclass) are automatically created by the platform.

**Deploy MySQL on the Cluster**

1. Before you deploy your application, define and configure the Kubernetes cluster you want to deploy it on.

   > For detailed guide, click [here](/pages/user-guide/getting-started/deploy-infrastructure-using-kubeplex/deploy-infrastructure-using-kubeplex?id=deploy-infrastructure-using-kubeplex).

2. Click on the **Deploy** button and select infrastructure to start deploying the application on using the infrastructure you created with KubePlex.

   ![9](imgs/9.png)

3. You will see logs as the application deployment progresses.

   ![10](imgs/10.png)

4. Go the **KubePlex** tab from left bar, select the **Deployed** infrastructure and click on the **Cluster** tab to see the live status of your cluster.

   ![11](imgs/11.png)

5. “Cluster live status” is a complete dashboard that gives you the “live status” about the health and consumption of the nodes in your cluster.

   ![12](imgs/12.png)

6. You can see the status of the application you just deployed by clicking on the **ViziPlex** tab from left bar, select the **Deployed** application and navigate to the status page to see the real time status of the MySQL service.

   ![13](imgs/13.png)

   ![14](imgs/14.png)

7. To avoid unnecessary costs, don’t forget to terminate your **Application** and then **Infrastructure** when you are done.

8. Click on the **ViziPlex** tab and then on the terminate button to delete all your resources from your infrastructure.

   ![15](imgs/15.png)

9. Do not forget to terminate your infrastructure as well when you are done with it.

   ![16](imgs/16.png)

**Conclusion**

You just deployed MySQL server with a persistent volume using CloudPlex, the Kubernetes Application Platform for Developers. 