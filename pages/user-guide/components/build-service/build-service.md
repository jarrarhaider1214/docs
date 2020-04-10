# Build Service

Build service can be used to build a docker image and push it to the repository. 

Details of the configurations that can be done for Build service are explained below and also highlighted in the image.

![1](imgs\1.jpg)

1. **Build:** Drop-down to add build service in canvas.
2. **Build Icon:** Drag and drop the service icon to add in canvas. Click on icon to configure the service.

![2](imgs\2.jpg)

1. **Templates:** To reuse any existing service template.
2. **Name:** Name for the service.
3. **Version:** Version of the service
4. **Namespace:** Namespace for the service.
5. **GIT:** Drop-down to select Git profile. You can use any existing/saved profile or a new profile. (Using new Git profile for this guide)
6. **(For New Profile)** **Profile Name:** Profile name for Git.
7. **Private Key:** Private Key of Git.
8. **Save Git Credentials:** To store the Git profile for future use.

![3](imgs\3.jpg)

1. Specify **Git Url**.

2. Specify **Git Branch.**

3. Specify **Docker File Path.**

   > Docker file path should contain file name as well.

4. **Registry**: Drop-down to use a New docker registry or any existing one. (Using new registry for this guide)

5. **Registry Name**: Can also be considered as image repository name. 

6. **Username** of the registry.

7. **Password** of the registry.

8. **Save Docker Credentials**: To save docker registry credentials for future use.

![4](imgs\4.jpg)

1. Specify **Image URL**, where the image will be pushed.
2. Specify **Registry Tag**.
3. **Save** the service.