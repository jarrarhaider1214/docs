# Scaling

As MegaMesh is a cloud management platform, it provides all the necessary cloud solutions and features to its users. In the IT world it is difficult to predict the growth of applications, storage capacity with time. To maintain consistent performance of different workloads over time, it is necessary that IT managers keep the resource requirement in check. Keeping this use case in mind, CloudPlex have provided the feature of Scaling to their users. Now in order to keep up with the workload, you can easily scale up/down your resources as per requirements.

MegaMesh provides a comprehensive auto-scaling solution. It has the ability to scale infrastructure dynamically by continuously monitoring the applications, keeping track of resource consumption and adjusting the capacity of resources for high performance. 

MegaMesh provides an interactive and easy to navigate UI to define scaling policy. 

There are two types of scaling supported in platform:

1. Container Scaling
2. Node Scaling

Below are the details of the configurations required to setup scaling in platform.

## Container Scaling

Whenever the resources consumption of the container gets too high or low (based on threshold set), scaling action will be performed. For each container service, users will be able to configure policy configuration. 

**Configurations**

User can configure scaling using multiple metrics. Following metrics are available in platform.

- CPU
- Memory 
- Storage

Threshold value of chosen metrics in can be defined in two forms

- Average Value
- Average Utilization

User can also define the MIN and MAX value for number of replicas of running containers. Whenever the threshold is reached, number of replicas will automatically adjust in the range defined by the user.

User can define only one container policy for each container service in the Project.

Now let’s move to step by step process on how to setup Container scaling.

**Container Scaling**

1. Go to the **Mesh** tab, configure **Container**, navigate to the **Scaling** menu and **Enable Scaling**.

   ![3](imgs/3.jpg)

   ![3.2](imgs\3.2.jpg)

2. Specify **MIN** and **MAX** number for container replicas. 

   ![4](imgs/4.jpg)

3. Click **Add Metrics** and configure the threshold for scaling. (You can add more than 1 metrics as well)

   - Select **Target Value Kind** from drop-down i.e. **Utilization** % of resource, Value, Average. 
   - Specify the **Target Value** for the **Kind** selected above.
   - Select the **Target Value Unit** e.g. Mega, Giga etc. 
   - Select **Resource Kind** e.g. CPU, Memory etc. If the threshold is reached for this resource scaling will be initiated. 

   ![5](imgs/5.jpg)

4. Click **Save** to save scaling configurations.

## Node Scaling

If any pod gets into pending state due to insufficient capacity in the cluster or if the nodes in the clusters are underutilized due to low number of running containers, In these cases, MegaMesh will automatically scale up (launch a new node) and scale down (terminate the idle node) respectively on Cloud provider selected by the user in the Project.

**Configuration** 

Whenever a new node gets launched by autoscaling, CP will fetch its details and show it in Project. It will also clean up the details of terminated node from the Project UI.

Node scaling can only be defined for Node Pools but can't be defined for Master Pool (First Node Pool). Other than the first Master pool scaling can be defined for all the node pools. 

Now let’s move to step by step process on how to setup Node scaling.

**Node Scaling**

1. Once container scaling is enabled and configured, click **Configure NodePool Auto Scaling** to configure node scaling.

   ![1](imgs/1.jpg)

2. Select the Token from drop-down.

   > **Note:** Token is necessary for the access level required to provision the nodes.
   >
   > **Note:** Process to create a Token is explained at the end of this guide. 

3. Select the Node Pool **Name** from drop-down for scaling. 

   > **Note**: 1st node pool is always Master Pool and user can’t define a scaling on it.

4. Specify the **Max Scaling Group Size** i.e. the number that pool can be scaled to in case of resource requirement and click **Update**. (Conditions will be set at container level scaling)

   Similarly, you can set scaling for other node pools as well by selecting the pool from drop-down and clicking update.

   ![2](imgs/2.jpg)

# Token

This section allows you to generate a token with no expiry to provide necessary access control for long running process i.e AutoScaling.
In Autoscaling this allows Kubernertes cluster to communicate with the Ultramesh.
Using this token Ultramesh authenticates and registers newly provisioned node into already deployed Kubernetes cluster.

To generate a token.

1. Click the username at top right to get the drop-down and go to **Profile** menu. 

   ![6](imgs\6.jpg)

2. Go to the **Token** menu and click **Add Token** button. A Token will now be generated and appear in the drop-down while configuring scaling. 

   ![7](imgs\7.jpg)