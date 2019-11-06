# K8s Resources

UltreMesh provides full support for Kubernetes resources. 5 types of K8s resources that Ultramesh supports are Container, Kubernetes Secret, Config Maps, Docker Hub and node. These can be configured in platform and can be a part of solution mesh. 

## Container

A container is a standard unit of software that packages all its dependencies and code so that your application runs reliably from one computing environment to another. Docker is a lightweight and standalone executable package that contains all the things needed to run a containerized applications i.e. code, system tools, libraries, runtime etc. Container images become containers on runtime and in case of docker containers, images becomes containers when they run on Docker engine. 

Details of the configurations that can be done for Kubernetes Containers are explained below and also highlighted in the image. 

> **Note:** For every section in the guide below, images are followed by description of the fields highlighted in the image.

![1](imgs\1.jpg)

1. **K8s Resource**: Drop-down to add K8s resources. 

2. **Container Icon**: Click the icon to configure container. 

3. **Name**: Name for the service.

4. **Version:** Version of the service.

5. **Namespace**: Namespace for the service. 

6. **Type**: Type of Pod or Controller i.e. Deployment, StatefulSet, DaemonSet, CronJob, Job.

   > **Deployment:** A Deployment controller provides declarative updates for Pods and ReplicaSets. It changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments.
   >
   > **StatefulSet:** StatefulSet is the workload API object used to manage stateful applications. Manages the deployment and scaling of a set of Pods , and provides guarantees about the ordering and uniqueness of these Pods. Like a Deployment , a StatefulSet manages Pods that are based on an identical container spec. Unlike a Deployment, a StatefulSet maintains a sticky identity for each of their Pods. These pods are created from the same spec, but are not interchangeable: each has a persistent identifier that it maintains across any rescheduling.
   >
   > **DaemonSet:** A DaemonSet ensures that all (or some) Nodes run a copy of a Pod. As nodes are added to the cluster, Pods are added to them. As nodes are removed from the cluster, those Pods are garbage collected. Deleting a DaemonSet will clean up the Pods it created.
   >
   > **Job:** A Job creates one or more Pods and ensures that a specified number of them successfully terminate. As pods successfully complete, the Job tracks the successful completions. When a specified number of successful completions is reached, the task is complete. Deleting a Job will clean up the Pods it created.
   >
   > **CronJob:** A Cron Job creates Jobs on a time-based schedule. It runs a job periodically on a given schedule, written in Cron format.

![2](imgs\2.jpg)

1. **Registry**: Select any saved docker registry from drop-down or create a new one. 
2. **Registry Name**: Specify Name of the registry.
3. **Registry Username** of docker registry.
4. **Registry Password** of docker registry. 
5. **Save Docker Credentials**: To save credentials for future use. 

![3](imgs\3.jpg)

1. **Image Name**: Name of the docker image. 
2. **Tag**: Tag of the docker image.
3. **Enable INIT Container**: Specialized containers that run before app containers in a Pod . Init containers can contain utilities or setup scripts not present in an app image.

**To Configure Volume Container:**

![4](imgs\4.jpg)

1. **Add Static**: To get the options to select Volume and Mount Path.
2. **Volume**: Select volume from drop-down.
3. **Mount Path**: Specify mount path.

**To Configure Environment Variables:**

![5](imgs\5.jpg)

1. **Add Static**: Too add static environment variable. Only Key, Value pair will be needed
2. **Add Dynamic:** To add dynamic variable. For getting the values dynamically on run time from other services in the solution. 

**To Configure Ports:**

![6](imgs\6.jpg)

1. **Ports**: To add Ports. You can also add multiple ports. Name, Host and Container will be needed.

**To Configure Command And Arguments:**

![7](imgs\7.jpg)

1. **Command And Arguments**: To add command and arguments in the fields provided.

**To Configure CI/CD:**

![8](imgs\8.jpg)

1. **Enable CI/CD**: To enable CI/CD
2. **Enable Deployment Pipeline**: Check to enable deployment pipeline e.g. Canary. 
3. **Configure Pipeline**: To configure deployment pipeline. 

**To Configure Resource Quota:**

![9](imgs\9.jpg)

1. **Resource Quota**: To setup resource quota limits. Currently, CPU and Memory resource quota is supported.

   > When allocating compute resources, each container may specify a request and a limit value for either CPU or memory. The quota can be configured to quota either value.
   >
   > **Request:** If the quota has a value specified for requests.cpu or requests.memory, then it requires that every incoming container makes an explicit request for those resources.
   >
   > **Limit:** If the quota has a value specified for limits.cpu or limits.memory, then it requires that every incoming container specifies an explicit limit for those resources.

**To Configure Probing:**

![10](imgs\10.jpg)

1. **Probe**: To configure Liveness and Readiness probes. 

   > **Liveness:** The kubelet uses liveness probes to know when to restart a Container. For example, liveness probes could catch a deadlock, where an application is running, but unable to make progress. Restarting a Container in such a state can help to make the application more available despite bugs
   >
   > **Readiness:** The kubelet uses readiness probes to know when a Container is ready to start accepting traffic. A Pod is considered ready when all of its Containers are ready. One use of this signal is to control which Pods are used as backends for Services. 

![11](imgs\11.jpg)

1. **Handler:** Handler for probe i.e. Exec, Http Get, TCP Socket. 
2. **Initial Delay Seconds**: Number of seconds after the container has started before liveness or readiness probes are initiated. 
3. **Timeout Seconds:** Number of seconds after which the probe times out.
4. **Period Seconds:** How often (in seconds) to perform the probe.
5. **Success Threshold:**  Minimum consecutive successes for the probe to be considered successful after having failed. 
6. **Failure Threshold:** When a Pod starts and the probe fails, Kubernetes will try Failure Threshold times before giving up. Giving up in case of liveness probe means restarting the Pod. In case of readiness probe the Pod will be marked Unready. Defaults to 3. Minimum value is 1.

**To Configure RBAC:**

![12](imgs\12.jpg)

1. **Enable RBAC**: To enable and configure Role Based Access Control for the service. 
2. **Add Resource Based Roles**: To add resource based roles for the container. Resources includes Nodes etc. 
3. **Add Service Based Roles**: To add service based roles for the container e.g. mysql related tasks.

![13](imgs\13.jpg)

1. **Add Resource Based Roles**: To add resource based roles. You can add more than one as well.
2. **Resource:** Select resource from drop-down e.g. Endpoints, Nodes etc. Resources are on which we want to give access to this role. 
3. **Action**: Actions allowed for the resource selected e.g. Create, Update etc. You can can select more than one action as well.
4. **AddAPI Groups**: To add API group. You can add more than one API group. It is that specific API which will have access. 

![14](imgs\14.jpg)

1. **Add Service Based Roles**: To add service based roles for the container. You can add more than one as well.
2. **Method**: Method of the role e.g. Get, Post etc. You can select more than one from the drop-down
3. **ADDPaths**: To add paths. It is the path of http request e.g. /raccon, /api/solutions/create etc.

**To Configure Resiliency**:

![15](imgs\15.jpg)

1. **Fault Injection:** To configure fault injection.

   > To inject faults to test the resiliency of application.

2. **Fault Injection Abort**: Aborts are crash failures. They mimic failures in upstream services. Aborts usually manifest in the form of HTTP error codes or TCP connection failures.

3. **Percentage**: Percent of requests to stimulate a failure for.

4. **HTTP Status:** HTTP status code e.g. 400

5. **Fault Injection Delay:** Delays are timing failures. They mimic increased network latency or an overloaded upstream service.

6. **Percentage:** Percent of requests to introduce a delay for. 

7. **Delay:** Delay in seconds.

![16](imgs\16.jpg)

1. **Circuit Breaker:** To configure circuit breaker. 

   > **Circuit breaking** is an important pattern for creating resilient microservice applications. It allows to write applications that limit the impact of failures, latency spikes, and other undesirable effects of network peculiarities.

2. **Max Request:** Maximum number of requests to a backend. 

3. **Max Pending Requests:** Maximum number of pending HTTP requests to a destination. 

4. **Max Requests Per Connection:** Maximum number of requests per connection to a backend. Setting this parameter to 1 disables keep alive.

5. **Max Retries:** Maximum number of retries that can be outstanding to all hosts in a cluster at a given time.

**To Configure Ingress:**

![17](imgs\17.jpg)

1. **Enable Ingress Traffic:** To enable ingress traffic for an Istio service mesh.
2. **Weight:** Weight of the service. 
3. **AddURLs:** To add URLs. You can add more than one URL.
4. **Timeout:** Timeout for http requests. 
5. **Port**: Select the port from the drop-down.

**To Configure Scaling:**

![18](imgs\18.jpg)

1. **Scaling**: To setup scaling. Check our scaling guide [here](/pages/user-guide/components/scaling/scaling).

**To Configure Security Context:**

![19](imgs\19.jpg)

1. **Security Context:** A security context defines privilege and access control settings for a Pod or Container.
2. **Capabilities Add:** With Linux capabilities, you can grant certain privileges to a process without granting all the privileges of the root user. To add Linux capabilities for a Container, select the capabilities from the drop-down
3. **Capabilities Drop:** To drop Linux capabilities for a Container, select the capabilities from the drop-down.
4. **Run As Group:** Run As User field specifies the user ID that all processes will run with for any Containers in the Pod. 
5. **Run As Group:** Run As Group field specifies the primary group ID for all processes within any containers of the Pod. If this field is omitted, the primary group ID of the containers will be root(0).
6. **Proc Mount:** Allowed ProcMount types e.g. Unmasked. 

![20](imgs\20.jpg)

1. **Run as NonRoot:** Require the container to run without root privileges.
2. **Read Only FileSystem:** Requires that containers must run with a read-only root filesystem (i.e. no writable layer)
3. **Privileged**: It determines if any container in a pod can enable privileged mode. By default a container is not allowed to access any devices on the host, but a privileged container is given access to all devices on the host.
4. **Allow Privilege Escalation:** Gates whether or not a user is allowed to set the security context of a container to allowPrivilegeEscalation=true. Setting it to false, i.e. unchecked radio button, ensures that no child process of a container can gain more privileges than its parent.
5. **SE Linux Options:**  Linux kernel security module that provides a mechanism for supporting access control security policies.
6. **Users:**  Name of the user. 
7. **Role**: Name of the role.
8. **Type**: Type of option. 
9. **Level**: SE Linux security levels.

**To Configure Node Selector:**

![21](imgs\21.jpg)

1. **AddNode Selectors:** To add node selectors i.e. Key, Value.

**To Configure Label Selector:**

![22](imgs\22.jpg)


1. **Label Selector:** To configure label selector and to add match expressions or labels.

   > Using a label selector, the client/user can identify a set of objects. The label selector is the core grouping primitive in Kubernetes.

2. **Add Match Expression:** To add match expressions. 

3. **Key:** Key for match expression.

4. **Operator:** Operator for match expression e.g. Exists, In etc. 

5. **AddValues:** To add other values if needed.

6. **AddMatch Labels**: To add match labels.

## Kubernetes Secret

Objects that let user store and manage sensitive information e.g. passwords, OAuth, ssh keys etc. Storing all this private information in a secret is a much more secure and flexible way than putting it verbatim in Pod definition or in a container image. It also reduces the risk of accidental exposure. To use secret, pod must reference the secret. 

Details of the configurations that can be done for Kubernetes Secret are explained below and also highlighted in the image.

![23](imgs\23.jpg)

1. **K8s Resource**: Drop-down to add K8s resources. 
2. **Secret Icon**: Click the icon to configure Secret. 
3. **Name**: Name for the service.
4. **Version:** Version of the service.
5. **Namespace**: Namespace for the service. 
6. **Type**: Type of secret i.e. Opaque or TLS.
7. **Add String Secrets**: To add string secrets. You can add more than one string secrets. 
8. **Add Base64 Secrets**: To add Base64 secrets. You can add more than one base64 secrets.
9. **Upload**: To upload a file for Value. 

## Config Maps

Allow to decouple configuration artifacts from image content to keep containerized applications portable. ConfigMap stores configuration data as key-value pairs. The data can be consumed in pods or provide the configurations for system components such as controllers. ConfigMap is similar to Secrets, but provides a means of working with strings that don’t contain sensitive information. Users and system components alike can store configuration data in ConfigMap.

Details of the configurations that can be done for Config Maps are explained below and also highlighted in the image.

![24](imgs\24.jpg)

1. **K8s Resource**: Drop-down to add K8s resources. 

2. **Configmaps Icon**: Click the icon to configure config maps. 

3. **Name**: Name for the service.

4. **Version:** Version of the service.

5. **Namespace**: Namespace for the service.

6. **Add DataS**: Directory, file, or literal value to draw the data from.

   > **Key**: File name or the key you provided on the command line.
   >
   > **Value**: File contents or the literal value you provided on the command line.

## Docker Hub

World’s largest repository of container images with an array of content sources including community developers, open source projects and independent software vendors building and distributing their code in containers. Users can get access to free public repositories for storing and sharing images or can choose subscription plan for private repos.

## Node

Using node service, you can apply multiple labels on nodes poles. These labels, applied on node poles, will then later be used as node selector while configuring the container service.

Details of the configurations that can be done for Kubernetes Containers are explained below and also highlighted in the image. 

![25](imgs\25.jpg)

1. **K8s Resource**: Drop-down to add K8s resources. 
2. **Node Icon**: Click the icon to configure node service. 
3. **Name**: Name for the service.
4. **Version:** Version of the service.
5. **Node Pool**: Select the Node Pool from drop-down. You can select multiple node pools as well
6. **Add Labels:** To add Key Value pair as label.