# Cloud Native Security Policy Management

Please refer to our [video guide for a walkthrough](https://drive.google.com/file/d/1JfFWJU_FilmG-z7sXFZlX2X3Ykc-ryxR) on how to perform the below mentioned operations in platform. 

## Manage Secrets and Protect Sensitive Data

In the guide, we will show you how to Manage Secrets and Protect Sensitive Data with the CloudPlex platform. 

CloudPlex integrates the HashiCorp vault. We use strong access control policies to keep your data secure at all times. 

It provides secrets management, data encryption, and identity-based access control to tokens, passwords, certificates, encryption keys for protecting secrets, and other sensitive data.

**Store Cloud Provider Credentials in CloudPlex Managed Vault**

1. Let us show you how to safely store cloud provider credentials in CloudPlex managed vault. 

2. To create a new profile select Credential profiles.

   ![1](imgs/1.jpg)

3. Click on the create new profile button and select your desired profile type.

   ![2](imgs/2.jpg)

4. For this guide, let’s select AWS.

5. Provide basic information.

6. Provide your AWS credentials and save your profile.

   ![3](imgs/3.jpg)

7. All the sensitive information is stored in the CloudPlex managed vault .

8. The vault encrypts data in flight, and at rest and has strong access control policies to keep your data secure at all times.

**Manage SSH Keys**

1. Let us show you how to manage SSH keys with CloudPlex secure vault 

2. To create a new SSH key, Go to the cluster tab.

3. Select New from key type dropdown.

4. Provide a name for the SSH key and click on the generate button.

   ![4](imgs/4.jpg)

5. CloudPlex will generate a 4096-bit key and store it in the vault.

6. Only you can access and manage your secrets in the vault.

7. CloudPlex automatically downloads your generated key only at the time of generating. The key is not accessible after that.

   ![5](imgs/5.jpg)

8. The platform uses this SSH key to start your machines and deploy the CloudPlex agent on it.

9. You can use the downloaded key to manually access your deployed cluster.

**Store Sensitive Information Used in an Application**

1. Every application needs to be configured. The configuration parameters may include sensitive data that should not be exposed. It is not an acceptable security practice to save sensitive data within your container image.

2. The CloudPlex platform provides a secrets service which is the interface to input sensitive data such as passwords, tokens,  certificates, and ssh keys. Any data entered in a secrets service is encrypted and stored in a secure vault and also becomes part of Kubernetes secrets.

3. Let us show you how to store sensitive data using the CloudPlex Secrets service. 

4. Drag-n-Drop CloudPlex Secrets service from pallet.

   ![6](imgs/6.jpg)

5. Click on add new string secret

   ![7](imgs/7.jpg)

6. Provide the key, value pair. CloudPlex gives you an option to paste sensitive data in the text field or directly upload a file.

7. Click on save service and then click on the save application button. 

8. Once you save the application, CloudPlex stores the secrets service data directly in the secure vault, and the rest of the application will be stored in the database, hence protecting your sensitive data.

**Conclusion:**

Now you are all set to manage and protect your sensitive data with CloudPlex, the Kubernetes application platform for developers. 