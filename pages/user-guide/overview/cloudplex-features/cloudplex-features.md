# CloudPlex Features

CloudPlex is full of advanced features, some of the major ones are listed below.

### Manifest Management ###

With CloudPlex, developers no longer need to manually create complex YAML manifest and config files. Developers just configure Docker containers using a drag-n-drop visual interface. The platform performs validation and generates all related manifest and config files.

### Volume Management

Developers provide basic information about the size of the volume and identity of the container. CloudPlex automatically configures storage class, persistent volume, persistent volume claim, and their associations. CloudPlex provides a uniform interface for all public clouds.

### Istio Integration

No need to manually configure Istio. CloudPlex provides an intuitive visual interface to visually configure and manage all the capabilities of Istio including connectivity, security, traffic control, and observability of services. CloudPlex always deploys applications as service mesh.

### Knative Integration

CloudPlex visual interface enables you to create scalable, secure, and serverless functions in seconds, without manually installing or configuring Knative. CloudPlex also provides a whole set of event management features including connecting and triggering events through visual interface.

### Container Integration

Developers can access containers on all major public container registries using the easy CloudPlex visual interface, without directly interacting with them. Docker Hub, Amazon ECR, Azure Container Registry, Google Container Registry (GCR) and JFrog Container Registry are ready to be used with CloudPlex.

### Hybrid Integration

With the CloudPlex Mesh Designer, you can easily create a hybrid application consisting of containers, serverless functions, provider-managed services, third-party APIs, and your legacy, VM-based applications through a visual, drag & drop experience.

### Deployment Pipelines

Visual design of deployment pipelines with Canary, Blue/Green or Highlander strategies with manual and automatic Canary analysis.

### Network & Traffic Management

Network and Traffic Management is a critical function in a cloud application. CloudPlex greatly simplifies the networking and traffic management of Kubernetes applications. Developers use a visual interface for fine-grain traffic control, retry policies, and circuit breakers.

### Kubernetes RBAC

Kubernetes RBAC regulates access to services. Developers just have to provide information about resources and permission. CloudPlex automatically creates and configures Service Accounts, Roles, and Role Bindings.

### Kubernetes Cluster Support

To overcome the limitations of provider-managed Kubernetes clusters, CloudPlex provides the flexibility of creating and running your own Kubernetes cluster on any public cloud (AWZ, Azure, GCP, Digital Ocean, IBM) using a visual interface.. Developers can start a new Kubernetes cluster from scratch with a rich set of network, infrastructure and Kubernetes configuration options.

### Associate Pods to Nodes

There are some circumstances where developers may need more control on a node where a pod lands. In CloudPlex, you can visualize your nodes and deployments in a single view and simply attach deployments to specific nodes through a visual interface. Node labeling and selectors are automatically handled by the platform.

### Autoscaling

Automatically sets up Metrics Server for each public cloud provider. For pod autoscaling, developers provide minimum and maximum values for replicas and resource quotas. For node autoscaling, developers select a CloudPlex provided node template.

### Health Dashboard

Understand service health with the mesh health dashboard, which provides a detailed look into health, latency and error rate of each component in the mesh.

### Service Status Dashboard

Allows navigation and search of service components and to receive detailed information on each component, such as its ports, variables, and virtual service rules.

### Service Flow Diagram 

An easy-to-understand service flow diagram provides a powerful way to visualize what is actually happening within your application. Know which components are communicating with each other and locate errors.

### Access Control 

Access to cluster, services, and other resources based on user defined roles and policies. Platform provides a rich set of roles and policies out of the box.

### Data Security 

CloudPlex fully integrates HashiCorp Vault with an intuitive visual interface to securely store all the passwords, ssh keys and cloud credentials. The platform centrally manages and enforces access to secrets and systems. It provides encryption of data in transit and at rest.

### Slack Automation

Automatically integrates with Slack channel for each project in CloudPlex. All project status notifications, monitoring and alerts are automatically sent via Slack channel.

### CI/CD Integration

CloudPlex also provides easy integration with all the major CI/CD tools. You can integrate that without even disrupting your existing development, testing and deployment processes. 

![1](imgs\1.jpg)

### Dynamic Variables

CloudPlex provides the feature of dynamic variables for parameter passing. You dont need to hard code anything in the applications. Dynamic variables can be stored in the platform and passed to the services and applications on deployment or execution. All types of variables can be stored e.g. IDs, passwords, endpoints, namespace etc. 

![2](imgs\2.jpg)

### Integration with Legacy Applications

CloudPlex intuitive UI also provides fully automated integration of legacy applications. Using simple steps you can fully automate and integrate your legacy applications with the platform and make them part of your application. 

You can deploy agents remotely on legacy application VM and establish remote connectivity by using minimal user intervention. 

![3](imgs\3.jpg)

### Monitoring & Alerts

For timely monitoring and issue diagnosis, you can setup alerts as well in CloudPlex. Alerts can be setup for monitoring of different app components like CPU, Memory, usage and latency.  Threshold can be set on which the platform which generate alerts. 

Alerts notifications can be configured using webhooks for different collaboration platforms like slack etc. 

Using monitoring and alerts, you can keep a timely check on the behavior and activity pattern of different components in a app. 

![4](imgs\4.jpg)

### Multiple Cloud Support

CloudPlex supports different clouds and all the tools to make the process of deployment efficient and hassle free. It also provides support for multiple Kubernetes Cluster across multiple clouds.

![5](imgs\5.jpg)

### Reusable Templates

CloudPlex architecture supports reusable templates. Users can benefit from the templates optimized and configured by the security and network experts by using it for their applications. 

Developers can focus on their other core tasks and let experts take care of their security and networks settings by providing reusable templates. 

### Service Flow Diagram

CloudPlex interactive drag and drop UI provides service flow diagram. This decreases the process of understanding the whole flow of services deployment. 

CloudPlex provide a flow diagram using which user can easily visualize whole process of what will happen with service application. Using this user can at once understand which components  are communicating with which other components and any issue arrived at any point can be taken care of in no time. Real time flow of services can also be be visualized. 

![6](imgs\6.jpg)

### Service Application

In CloudPlex, you can stitch together hybrid applications containing multiple microservices, serverless functions, managed services and APIs. 

Platform App Designer provides:

1. For serverless, when you commit the code into the code repo, pulls the code, builds it, creates a transient container and execute on-demand.
2. Library of open source and commercially available microservices.

### Tools Integration

CloudPlex has integrated multiple cloud native tools with the platform. Instead of manually downloading and configuring each tool separately, user can setup up the whole thing in CloudPlex in one go and get everything up and running in under **30 minutes**. Some of the major cloud native tools integrated with CloudPlex are - Docker, Kubernetes, Istio, Knative, Grafana, Prometheus, Kiali.

### Kubernetes Labs

Learn Kubernetes through our hands-on labs. These labs target the key pain points of Kubernetes encountered by developers and are specially designed to make developers productive very quickly.