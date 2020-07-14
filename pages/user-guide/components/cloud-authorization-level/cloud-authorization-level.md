# Cloud Authorization Level

Purpose of this guide is to list down all the permissions and access level or any other requirements needed to successfully start an application from Cloudplex, this also includes permission to manage K8s clusters as well. Before using profiles on CloudPlex to deploy applications, user will need to make sure that profile has these permissions or roles at cloud level.

## AWS

Here are the permissions required for AWS:

- CloudPlex profile will be made using AWS Credentials i.e. Access and Secret Key.
- Programmatic access.
- Region and zone.
- CloudPlex token. 
- Permission to create VPC, Subnet, Firewall, NIC, NAT Gateway and Routes.
- Permission to create an SSH Key Pair.
- Permission to create Role, Policy and IAM profile. 
- Permission to create/get/modify Instance.
- Permission to create/get an Instance profile.
- Permission to enable Scaling.
- Permission to create/attach/get Volumes(EBS Block Device).

## GCP

Here are the permission required for GCP:

- CloudPlex profile will be made using Google Application Credentials.
- Google Engine API should be enabled.
- An Admin, Editor or Composer Worker role.
- Region and zone.
- CloudPlex token. 
- Permission to create/get VPC, Subnet, Firewalls and Routers. 
- Permission to create/get SSH Key.
- Permission to create/get a VM Instance.
- Permission to create/get an Instance template.
- Permission to create/get Instance group manager.
- Permission to create/attach a disk to VM Instance. 
- To access Cluster/VM, users can download an SSH private key from the platform.

## GKE

Here are the permission required for GKE:

- CloudPlex profile will be made using Google Application Credentials.

- Google Kubernetes Engine API should be enabled.

- Kubernetes Engine Admin, Kubernetes Engine Developer, Editor or Composer Worker role.

- Region and zone.

- CloudPlex token. 

- Permission to create/get VPC, Subnet, Firewalls and Routers. 

- Permission to create/get a Kubernetes Cluster.

  **Kubernetes Level Permissions:**

- Permission to create a Cluster role and Cluster role binding.

- Permission to create HPA, Load Balancer, Network Policy and view Kubernetes dashboard. 

## Azure

Here are the permission required for Azure:

- CloudPlex profile will be made using Client_Id, Client_Secret , Region , Subscription_Id and Tenant_Id.
- Region and zone.
- CloudPlex token.
-  Service administrator role.
- Read-write permission of Microsoft.Network
  - Permission to create/get Network (Resource Group, VPC, Subnets)
  - Permission to create/attack/get Security Groups.
  - Permission to create/get Public Gateway & Load Balancer.
- Read-write, start and restart the permission of Microsoft.Compute
  - Permission to create/get a Virtual Machine.
  - Permission to add Roles.
  - Permission to create/get a Virtual Machine service set.
  - Permission to create/get NIC and public IP.
  - Permission to create/attach OS and Data Disk.
  - Permission to enable Diagnostics Profile
- Read-write permissions of Microsoft.Storage
  - Permission to create a Storage Account.

## AKS 

Here are the permission required for AKS:

- CloudPlex profile will be made using Client_Id, Client_Secret , Region , Subscription_Id and Tenant_Id.
- Region and zone.
- CloudPlex token.
- Service Administrator role.
- Read-write permission of Microsoft.Network
  - Permission to create/get network (Resource Group, VPC, Subnets)
  - Permission to create/attack/get Security Groups.
  - Permission to create/get Public Gateway.
- Read-write permission of Microsoft.ContainerService
  - Permission to create a Managed Cluster.
  - Permission to generate APIServerAccessProfile and ServicePrincipal

**Kubernetes Level Permissions:**

- Permission to create a Cluster role and Cluster role binding.
- Permission to create a Load Balancer. 

## DO

Here are the permission required for DO:

- CloudPlex profile will be made using DO access token with read/write permission.
- Region 
- CloudPlex token
- To access the Droplet, the user can download an SSH Key from the platform. 

## DOKS

Here are the permission required for DOKS:

- CloudPlex profile will be made using DO access token with read/write permission.

- Region (Kubernetes is not offered in NYC2, AMS2, or SFO1.)

- CloudPlex token.

- No Network required.

- To access the Kubernetes Cluster, the user can download a Config file from the platform. 

  **Kubernetes Level Permissions:**

- Permission to create a Cluster role and Cluster role binding.

## IKS

Here are the permission required for IKS:

- CloudPlex profile will be made using Region and IAM_Key.

- Region and zone.

- CloudPlex token.

- An Admin, Editor role.

- Permission to create/get  VPC, Public Gateway, Resource Group and Security Group. 

- Permission to create/get Cluster and Worker Pool.

  **Kubernetes Level Permissions**

- Permission to create a Cluster role and Cluster role binding.

- Permission to create a Load Balancer. 