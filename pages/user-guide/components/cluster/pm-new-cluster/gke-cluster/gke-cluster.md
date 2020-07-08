# GKE Cluster

Google Kubernetes Engine (GKE) provides a managed environment for deploying, managing, and scaling your containerized applications using Google infrastructure. The GKE environment consists of multiple machines (specifically, Compute Engine instances) grouped together to form a cluster. To know more about GKE, click [here](https://cloud.google.com/kubernetes-engine).

Here are the configurations option that will be available to user while configuring GKE for Application deployment. 

![1](imgs\1.jpg)

1. **Cluster Name:** Name of the cluster. CloudPlex provides default values but user can also customize it.

2. **Machine Type:** Select machine type from drop-down.
   To know more about machine types, click [here](https://cloud.google.com/compute/docs/machine-types).

3. **Node Count:** Specify the number of nodes in node pool. 

4. **Custom Advance Settings:** To enable advanced settings related to Cluster, Node Pools, and Legacy Security. 

   > If custom advanced settings are not enabled system will navigate to the **App Design** menu instead of Advanced Settings

**Advanced Settings  - Cluster**

![2](imgs\2.jpg)

1. **Initial Cluster Version:** Select initial cluster version from drop-down. It is the Release Channel to get automatic GKE upgrades as new versions are ready.

**Advanced Settings  - Nodepools**

![3](imgs\3.jpg)

1. **Add Node Pools:** To add more node pools in the cluster. 

2. **Clone:** To clone the current node pool and create new one.

3. **Node Pool:** Name of the node pool.

4. **Machine Type:** Select machine type from drop-down.

5. **Node Count:** Specify the number of nodes in node pool. 

6. **Enable Auto Scaling:** To enable Auto Scaling for this node pool.

   > To know more about this, check out our detailed Auto Scaling guide [here](/pages/user-guide/components/scaling/scaling). 

7. **Image Type:** Select image type from drop-down. The operating system image that runs on each node. 

8. **Boot Disk Type:** Select the type of disk for root volume from drop-down e.g. Persistent SSD. (To know more about disk types, click [here](https://cloud.google.com/kubernetes-engine/docs/how-to/custom-boot-disks)

9. **Boot Disk Size:** Specify the boot disk size, it should be at least 10Gb.

10. **Local SSD Count:** Specify local SSD count. 
    Local SSDs provide high-performance, ephemeral storage to every node in the cluster.

![4](imgs\4.jpg)

1. **Service Account Email:** Will be listed based on the GCP account used. It needs to have required access level as shown in info message in screenshot above. 

2. **Enable Preemptible Nodes:** To enable preemptible nodes.
   Preemptible VMs are Compute Engine VM instances that last a maximum of 24 hours and provide no availability guarantees. Preemptible VMs are priced lower than standard Compute Engine VMs and offer the same machine types and options.

3. **Enable Auto Repair:** To enable auto repair feature for the nodes.

   Auto repair feature helps keep the nodes in cluster in a healthy, running state. When enabled, GKE makes periodic checks on the health state of each node in the cluster. If a node fails consecutive health checks over an extended time period, GKE initiates a repair process for that node.

4. **Enable Auto Upgrade:** To enable auto upgrade. Also specify the auto upgrade start time.
   Auto upgrades helps keep the nodes in the cluster up to date with the cluster master version when master is updated on user's behalf. 

5. **Add Nodetaint:** To configure Node taints. Taints allow a node to repel a set of pods. (To know more about taints click [here](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/))

6. **Add Accelerators:** To use accelerators, add them in the form of Key Value pair.

7. **Add OAuth Scopes:** To add OAuth scopes to request access to Google APIs.

8. **Add Instance Metadata:** To add instance metadata in the form of Key Value pair.