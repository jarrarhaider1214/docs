# Network

This section will explain the process of Network creation and all the relevant configurations for AWS and Azure. 

## AWS/Azure

Lets move to the step by step process of how to create a network. Configurations for the network are same for both the clouds i.e. AWS and Azure

To configure a **Network**

1. Enter **Network Name**.

2. Select **Virtual Private Cloud** from dropdown i.e. **New** or some existing network. (Existing networks will be listed based on account selected)

   > **Note:** This guide explains the process of New Network Creation, for existing you just need to select Subnet etc from drop-down.

3. Enter **VPC Name**. 

4. Specify **VPC CIDR**.

   ![1](imgs\1.jpg)

5. To add Subnet, go to the **Subnets** tab, click **+** icon and specify the **Subnet Name** and **CIDR**. (You can add multiple Subnets as well)

   ![2](imgs\2.jpg)

6. To add Security Group (SG), go to the **Security Groups** tab. (You can add multiple SGs as well)

7. Specify the **SG Name** and **Description**.

   ![3](imgs\3.jpg)

8. Click the **+** icon on the **Security Group_1** button to add Traffic Rules. (You can add multiple rules as well)

   1. Select the **Rule Type** as per requirement i.e. **Inbound** or **Outbound**.
   2. Specify the rule **Protocol** i.e. TCP, UDP etc. 
   3. Specify **Source**. e.g. 0.0.0.0/0. 
      The Source can be an IPv4 addresses or range of IPv4 addresses in CIDR notation.
   4. Specify the **Ports** that will be exposed to traffic. 
   5. Select the rule **Type** from dropdown e.g. Custom TCP, Custom UDP etc.

   ![4](imgs\4.jpg)

9. Click the **Templates** button on top and click **Save as Template** to save the configurations.

   ![5](imgs\5.jpg)