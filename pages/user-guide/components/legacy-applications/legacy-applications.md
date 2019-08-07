# Legacy Application

MegaMesh provide supports for the legacy applications as well. You can make legacy applications part of the solution mesh. Multiple legacy applications can be part of mesh as per the application requirements. 

Once IP and running process port is provided, on saving system will automatically generate a service entry and attach with legacy service.  On successful deployment of Mesh, system will generate bash scripts and provide downloadable certificates for the legacy nodes. 

Each bash script will have complete mesh expansion setup process and will need to be run on the nodes by the user.

> VM (legacy application) must have IP connectivity to the endpoints in the mesh deployed by user. Platform will use public IP for Kubernetes cluster and legacy application will also need to be on public interface.
>
> Mesh expansion VMs must have access to a DNS server that resolves names to Kubernetes cluster IP addresses. Options include exposing the Kubernetes DNS server through an internal load balancer, using a Core DNS server, or configuring the IPs in any other DNS server accessible from the VM.