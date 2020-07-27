# GKE Cluster

Google Kubernetes Engine (GKE) provides a managed environment for deploying, managing, and scaling your containerized applications using Google infrastructure. The GKE environment consists of multiple machines (specifically, Compute Engine instances) grouped together to form a cluster. To know more about GKE, click [here](https://cloud.google.com/kubernetes-engine).

Here are the configurations option that will be available to user while configuring GKE for Application deployment. 

![1](imgs\1.jpg)

1. **Cluster Name:** Name of the cluster. CloudPlex provides default values but user can also customize it.

2. **Machine Type:** Select machine type from drop-down.
   To know more about machine types, click [here](https://cloud.google.com/compute/docs/machine-types).

   > Minimum 4 CPU machine is required for deployment.

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

   > Minimum 4 CPU machine is required for deployment.

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

4. **Enable Auto Upgrade:** To enable auto upgrade. Also specify the auto upgrade start time as per [ISO 8601 standards](https://www.ietf.org/rfc/rfc3339.txt).
   Auto upgrades helps keep the nodes in the cluster up to date with the cluster master version when master is updated on user's behalf. 

5. **Add Nodetaint:** To configure Node taints. Taints allow a node to repel a set of pods. (To know more about taints click [here](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/))

6. **Add Accelerators:** To use accelerators, add them in the form of Key Value pair.

7. **Add OAuth Scopes:** To add OAuth scopes to request access to Google APIs.

8. **Add Instance Metadata:** To add instance metadata in the form of Key Value pair.

**Advanced Settings  - Legacy Security**

![5](imgs\5.jpg)

1. **Enable Legacy Authorization:** Enable legacy authorization to support in-cluster permissions for existing clusters or workflows
2. **Logging Service:**  Logging service the cluster should use to write logs. 
   Currently available options: logging.googleapis.com/kubernetes, logging.googleapis.com or none.
3. **Monitoring Service:** Monitoring service the cluster should use to write metrics. 
   Currently available options: monitoring.googleapis.com/kubernetes, monitoring.googleapis.com or none.
4. **Enable Expert Settings:** To enable expert settings. 
   Enabling expert settings will enable **Networking & Security** and **Logging & Monitoring** tab. 
5. (**Expert Settings Enabled**) **Enable Basic Authenticator:** To enable basic authenticator.
    It allows a user to authenticate to the cluster with a username and password which may not be confidential when transmitted.
6. (**Expert Settings & Basic Authenticator Enabled**) **Issue A Client Certificate:** 
   This base64-encoded public certificate can be used to authenticate to the cluster endpoint.

**Advanced Settings  - Networking & Security**

![6](imgs\6.jpg)

1. **Cluster Type (Private Cluster):** This field will remain disabled as currently private cluster is not supported by CloudPlex. 

   > Support for private cluster will be added soon 

2. **Pod Address Range:** Specify the pod address range. All pods in the cluster will be assigned an IP address from this range.

3. **Enable HTTP Load Balancing:** To enable http load balancing.
   It is required to use the Google Cloud Load Balancer with Kubernetes Ingress.

4. **Enable Network Policy:** To enable network policy.
   Network Policy API allows the cluster administrator to specify what pods are allowed to communicate with each other.

5. **Enable Maser Authorized Networks:** To enable master authorized network. You will need to add Key Value pairs for this.
   It can be used to block untrusted non-GCP source IPs from accessing the Kubernetes master through HTTPS.

6. **Add Master Authorized Network Config:** To add more than one Key Value pairs.

7. **Enable VPC Native Traffic Route:** To enable VPC native traffic route. You will need to provide Service Address Range and Maximum Pods Per Node.
   This feature uses alias IP and provides a more secure and native integration with Google Cloud Platform services

8. **Service Address Range:** Cluster services will be assigned an IP address from service address IP address range.

9. **Maximum Pods Per Node:** This value is used to optimize the partitioning of cluster's IP address range to sub-ranges at node level.

**Advanced Settings  - Logging & Monitoring**

![7](imgs\7.jpg)

1. **BigData Dataset:** To enable GKE usage metering.

   > You will need to first create the BigQuery/BigData dataset, and then configure clusters to use it. 

2. **Enable Network Egress Metering:** To enable egress metering

   > Measuring network egress requires a network metering agent (NMA) running o n each node.

3. **Enable Resource Consumption Metering:** To enable resource consumption metering.
   When resource consumption metering is enabled, the actual CPU and memory usage is exported to a BigQuery table named gke_cluster_resource_consumption.

4. **Enable Cloud TPU:** To enable Cloud TPUs to accelerate machine learning workloads in your cluster. 

5. **(Cloud TPU Enabled)** **Cloud TPU Address Range:** Specify TPU address range.
   All Cloud TPU nodes in the cluster are assigned an IP address from this range.

