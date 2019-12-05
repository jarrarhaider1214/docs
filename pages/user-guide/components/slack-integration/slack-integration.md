# Slack Integration

Slack integration allows user to receive notification of important events from the CloudPlex Ultramesh for a particular project. For smooth integration, you need to create a **New Slack App** with required permissions. Process of creating a slack app is explained below.

## How to Creation a Slack Application

1. Go to the link by clicking [here](https://api.slack.com/apps).

2. Click on the **Create an App** button.

3. Enter **App Name**, specify your **Development Slack Workspace** and click **Create App** button.
   ![1](imgs\1.jpg)

4. Go to the **OAuth & Permissions** menu from the sidebar.

   ![2](imgs\2.jpg)

5. Scroll down to the **Scopes** section, click **Add an OAuth Scope** button and add following permissions.

   - **channels : read** (fetch the list of public channels)
   - **groups : read** (fetch the list of private channels)
   - **chat : write : bot** (send notification to channels)

   ![3](imgs\3.jpg)

6. Scroll back to the top and click **Install App to Workspace** button to install the app. 

   ![4](imgs\4.jpg)

7. Once the app is deployed, copy the **OAuth Access Token** (will be generated in the same menu). 

## How to Setup Integration in Ultramesh

1. Go to the **Projects** menu from top bar and select the required project. 

   ![5](imgs\5.jpg) 

2. Go to the **Settings** tab, select **Slack Integration** from left column, paste the token in **Slack Access Token** field and click **Verify** button. 

   ![6](imgs\6.jpg)

3. Once verified, select the channels from **Select Channels** drop-down.

4. Select the **Notification Topics** using toggle buttons to receive notifications and click on **Save Settings** button. 

   **Note**: You can also select more than one channel and topic.

   ![7](imgs\7.png)

5. You will now start receiving notifications for your topics in Slack channels.

