# Legacy Application

CloudPlex provide supports for legacy applications. You can add a legacy-style application to any existing deployed solution.

To get started with a legacy application, you'll need your service's IP address and port. Provide those in the Legacy Application field, and on saving system will automatically generate a service entry and attach with legacy service.  On successful deployment of application, the system will generate bash scripts and provide downloadable certificates for the legacy nodes. 

Each bash script will have complete app expansion setup process and will need to be run on the nodes by the user.

> VM (legacy application) must have IP connectivity to the endpoints in the app deployed by user. Platform will use public IP for Kubernetes cluster and legacy application will also need to be on public interface.
>
> Application expansion VMs must have access to a DNS server that resolves names to Kubernetes cluster IP addresses. Options include exposing the Kubernetes DNS server through an internal load balancer, using a Core DNS server, or configuring the IPs in any other DNS server accessible from the VM.

Details of the configurations that can be done for Legacy Service are explained below and also highlighted in the image.

![1](imgs/1.jpg)

1. **Others**: Drop-down to add Legacy service.
2. **Legacy Icon**: Click the icon to configure service.
3. **Service ID:** Id of the service. System will automatically assign id to the service but user can customize it.
4. **Name**: Name for the service.
5. **Version**: Version of the service.
6. **Namespace**: Namespace for the service
7. **IP**: IP of the service.
8. **Port**: To add running process ports. 
