# Networking

Networking deals with the configuration related to a network. Network is important for the connectivity of resources and sharing of information over the internet. In order to establish a connection among different nodes, a proper network configuration is required. Network configuration is necessary to detail the type of connection that will be established with the nodes. 

Details of the configurations that can be done at Network level are explained below and also highlighted in the image.

![1](imgs\1.jpg)

1. **Network Name**: Name of the network.
2. **Templates**: To get the list of existing network templates stored in platform
3. **Virtual Network Cloud**: VPC to be used for the project. You can use any existing VPC created on cloud or create a new one. 
4. **VPC Name**: Name of the VPC.
5. **CIDR**: IPv4 address in the form of a CIDR block.
6. **Subnets**: Tab to configure subnet settings.
7. **Security Groups**: Tab to configure security groups settings.

![2](imgs\2.jpg)

1. **Add Subnets**: To Add subnets. VPC can have multiple subnets.
2. **Name**: Name of the subnet. 
3. **CIDR**: IPv4 address in the form of a CIDR block.

![3](imgs\3.jpg)

1. **Add Security Groups**: To add security groups. Network can have multiple security groups.
2. **Security Group_1**: This button will add Inbound/Outbound traffic rules for security group. 
3. **Name**: Name of the security group
4. **Description**: Any description about the security group e.g. traffic details.

![4](imgs\4.jpg)

1. **InboundRule_1**: Configurations of traffic rules.
2. **Rule Type**: Traffic rule type i.e. Inbound/Outbound.
3. **Protocol**: rule protocol i.e. TCP, UDP etc. 
4. **Source**: An IPv4 addresses or range of IPv4 addresses in CIDR notation.
5. **Port Range**: Ports that will be exposed to traffic.
6. **Type**: Rule type to be selected from dropdown e.g. Custom TCP, Custom UDP etc.