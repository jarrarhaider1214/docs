# AWS

![1](imgs/1.jpg)

1. **Network Name**: Name of the network.
2. **Templates**: To get the list of existing network templates stored in platform.
3. **Virtual Private Cloud**: VPC to be used for the project. You can use any existing VPC created on cloud or create a new one. 
4. **VPC Name**: Unique name of the virtual private cloud where resources will be lauched.
5. **CIDR**: IPv4 address in the form of a CIDR block.
6. **Subnets**: Tab to configure subnet settings.Subnet is a logical subdivision of an VPC.
7. **Security Groups**: Tab to configure security groups settings.A security group acts as a virtual firewall for your instance to control inbound and outbound traffic.

![2](imgs/2.jpg)

1. **Add Subnets**: To add subnets. VPC can have multiple subnets.
2. **Name**: Name of the subnet. 
3. **CIDR**: IPv4 address in the form of a CIDR block.

![3](imgs/3.jpg)

1. **Add Security Groups**: To add security groups. Network can have multiple security groups.
2. **Security Group_1**: This button will add Inbound/Outbound traffic rules for security group. 
3. **Name**: Name of the security group
4. **Description**: Description about the security group e.g. traffic details.

![4](imgs/4.jpg)

1. **InboundRule_1**: Configurations of traffic rules.
2. **Rule Type**: Traffic rule type i.e. Inbound/Outbound.
3. **IP Protocol**: Rule protocol i.e. TCP, UDP,ICMP etc. 
4. **Source Port**: To specify the source port.
5. **Destination Port:** To specify the destination port.
6. **Port Range**: Ports that will be exposed to traffic.
7. **IP Ranges**: To add range of IP in CIDR notation. 
