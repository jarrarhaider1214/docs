# Telemetry

CloudPlex Ulramesh offers detailed telemetry of the communication of services in the Mesh. To offer telemetry for the mesh, CloudPlex has integrated Istio telemetry which provides observability of behavior of services and helps operators in troubleshooting, maintaining and optimization of their applications without imposing much burden on service developers.  This telemetry or graphical representation of mesh helps operators in gaining a good understanding of how services are interacting with other services and telemetry components.

Following types of telemetry is generated to provide mesh observability. 

**Distributed Traces (Visualization and Tracing of Traffic):** It generates detailed distributed trace spans for each service in the mesh and provides visualization of a traffic. This helps operators in understanding the call flows, traffic movement and service dependencies in a mesh.

**Metrics/Monitoring:** It generates metrics based of top signals of monitoring i.e. latency, traffic, errors, saturation. It also provides metrics for the mesh control panel. Monitoring dashboard is also provided which is built on top of these metrics and can be customized as well according to requirements. 

**Access Logs:** As there is constant flow of traffic into the services within a mesh, access logs generates detailed records of each requests along with destination and source metadata. This helps in proper auditing and understanding of service behavior down to the individual instance level. 