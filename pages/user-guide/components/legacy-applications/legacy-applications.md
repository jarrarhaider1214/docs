# Legacy Application

Ultramesh provide supports for legacy applications as well. You can add a legacy-style application to any existing deployed solution.

To get started with a legacy application, you'll need your service's IP address and port. Provide those in the Legacy Application field, and on saving system will automatically generate a service entry and attach with legacy service.  On successful deployment of Mesh, the system will generate bash scripts and provide downloadable certificates for the legacy nodes. 

Each bash script will have complete mesh expansion setup process and will need to be run on the nodes by the user.

> VM (legacy application) must have IP connectivity to the endpoints in the mesh deployed by user. Platform will use public IP for Kubernetes cluster and legacy application will also need to be on public interface.
>
> Mesh expansion VMs must have access to a DNS server that resolves names to Kubernetes cluster IP addresses. Options include exposing the Kubernetes DNS server through an internal load balancer, using a Core DNS server, or configuring the IPs in any other DNS server accessible from the VM.

Details of the configurations that can be done for Legacy Service are explained below and also highlighted in the image.

![1](imgs\1.jpg)

1. **Others**: Drop-down to add Legacy service.
2. **Legacy Icon**: Click the icon to configure service.
3. **Name**: Name for the service.
4. **Version**: Version of the service.
5. **Namespace**: Namespace for the service
6. **IP**: IP of the service.
7. **Port**: To add running process ports. 
