# Telemetry

CloudPlex offers detailed telemetry of the communication of services in the application. To offer telemetry for the application, CloudPlex has integrated Istio telemetry which provides observability of behavior of services and helps operators in troubleshooting, maintaining and optimization of their applications without imposing much burden on service developers.  This telemetry or graphical representation of application helps operators in gaining a good understanding of how services are interacting with other services and telemetry components.

Following types of telemetry is generated to provide application observability. 

**Live Cluster Health:** Live cluster health generates and provides all the data live related to the cluster, e.g. CPU usage, memory usage, in the form of visual dashboard. For more details, click [here](/pages/user-guide/tutorials/telemetry/live-cluster-health/live-cluster-health).

**Distributed Traces (Visualization and Tracing of Traffic):** It generates detailed distributed trace spans for each service in the application and provides visualization of a traffic. This helps operators in understanding the call flows, traffic movement and service dependencies in an app. For more details, click [here](/pages/user-guide/tutorials/telemetry/visualize-trace-traffic/visualize-trace-traffic).

**Metrics/Monitoring:** It generates metrics based of top signals of monitoring i.e. latency, traffic, errors, saturation. It also provides metrics for the app control panel. Monitoring dashboard is also provided which is built on top of these metrics and can be customized as well according to requirements. For more details, click [here](/pages/user-guide/tutorials/telemetry/monitoring/monitoring).

**Access Logs:** As there is constant flow of traffic into the services within an application, access logs generates detailed records of each requests along with destination and source metadata. This helps in proper auditing and understanding of service behavior down to the individual instance level. For more details, click [here](/pages/user-guide/tutorials/telemetry/container-logging/container-logging).