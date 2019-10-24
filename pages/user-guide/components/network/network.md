# Networking

Networking deals with the configuration related to a network. Network is important for the connectivity of resources and sharing of information over the internet. In order to establish a connection among different nodes, a proper network configuration is required. Network configuration is necessary to detail the type of connection that will be established with the nodes. 

Details of the configurations that can be done at Network level are explained below and also highlighted in the image.

## AWS

![1](imgs\1.jpg)

1. **Network Name**: Name of the network.
2. **Templates**: To get the list of existing network templates stored in platform
3. **Virtual Private Cloud**: VPC to be used for the project. You can use any existing VPC created on cloud or create a new one. 
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
4. **Description**: Description about the security group e.g. traffic details.

![4](imgs\4.jpg)

1. **InboundRule_1**: Configurations of traffic rules.
2. **Rule Type**: Traffic rule type i.e. Inbound/Outbound.
3. **IP Protocol**: Rule protocol i.e. TCP, UDP etc. 
4. **Source Port**: To specify the source port.
5. **Destination Port:** To specify the destination port.
6. **Port Range**: Ports that will be exposed to traffic.
7. **IP Ranges**: To add range of IP in CIDR notation. 

## Azure

![5](imgs\5.jpg)

1. **Network Name**: Name of the network.
2. **Templates**: To get the list of existing network templates stored in platform
3. **Virtual Private Cloud**: VPC to be used for the project. You can use any existing VPC created on cloud or create a new one. 
4. **VPC Name**: Name of the VPC.
5. **CIDR**: IPv4 address in the form of a CIDR block.
6. **Subnets**: Tab to configure subnet settings.
7. **Security Groups**: Tab to configure security groups settings.

![6](imgs\6.jpg)

1. **Add Subnets**: To Add subnets. VPC can have multiple subnets.
2. **Name**: Name of the subnet. 
3. **CIDR**: IPv4 address in the form of a CIDR block.

![7](imgs\7.jpg)

1. **Add Security Groups**: To add security groups. Network can have multiple security groups.
2. **Security Group_1**: This button will add Inbound/Outbound traffic rules for security group. 
3. **Name**: Name of the security group.

![8](imgs\8.jpg)

1. **InboundRule_1**: Configurations of traffic rules.
2. **Rule Type**: Traffic rule type i.e. Inbound/Outbound.
3. **Name:** Name for the rule.
4. **Priority:** Priority of the rule. It should be greater than or equal to 100.
5. **Access:** Access of the rule i.e. Allow, Deny.
6. **Description:** Description related to rule. 
7. **IP Protocol**: Rule protocol i.e. TCP, UDP etc. 
8. **Source Port Range**: To specify the source ports.
9. **Destination Port Range:** To specify the destination ports.
10. **IP Ranges**: To add range of IP in CIDR notation. 

## GCP

![9](imgs\9.jpg)

1. **Network Name**: Name of the network.
2. **Templates**: To get the list of existing network templates stored in platform
3. **Virtual Private Cloud**: VPC to be used for the project. You can use any existing VPC created on cloud or create a new one. 
4. **VPC Name**: Name of the VPC.
5. **Subnets**: Tab to configure subnet settings.
6. **Security Groups**: Tab to configure security groups settings.

![10](imgs\10.jpg)

1. **Add Subnets**: To add subnets. VPC can have multiple subnets.
2. **Name**: Name of the subnet. 
3. **CIDR**: IPv4 address in the form of a CIDR block.

![11](imgs\11.jpg)

1. **Add Security Groups**: To add security groups. Network can have multiple security groups.
2. **Security Group_1**: This button will add Inbound/Outbound traffic rules for security group. 
3. **Name**: Name of the security group.
4. **Description:** Description related to security group.
5. **Priority:** Priority of the security group.
6. **Add Source IP Ranges:** Source IP range in CIDR notation. 
7. **Add Source Tags:** Source tags that will appear at cluster level
8. **Add Target Tags:** Target tags that will appear at cluster level.

![12](imgs\12.jpg)

1. **InboundRule_1**: Configurations of traffic rules.
2. **Rule Type**: Traffic rule type i.e. Inbound/Outbound.
3. **Protocol:** Rule protocol i.e. TCP, UDP etc. 
4. **Port Range:** Traffic port range.
5. **Access:** Access of the rule i.e. Allowed, Denied.