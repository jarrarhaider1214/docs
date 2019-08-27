# Visualize & Trace Traffic

Distributed tracing is what provides a way to monitor and understand behavior of traffic by monitoring and visualizing requests as they flow through a mesh. These traces helps mesh operators in understanding the source of latency and services dependencies within the mesh. 

Integration with distributed tracing systems happens in two different ways: Envoy-based and Mixer-based tracing integrations. For both the approaches, applications forward the tracing headers for subsequent outgoing requests.

> **Envoy-Based Tracing:**  Envoy (the sidecar proxy) sends tracing data directly to tracing backends on behalf of the applications being proxied.
>
> **Mixer-Based Tracing:** Mixer provides the integration with tracing backends. Mixer integration allows additional levels of operator control of the distributed tracing, including fine-grained selection of the data included in trace spans. It also provides the ability to send traces to backends not supported by Envoy directly.

Number of tracing backends are also supported including Jaeger, LightStep, Zipkin, and Datadog. Operators control the sampling rate for trace generation (that is, the rate at which tracing data is generated per request). This gives operators further control of the amount and rate of tracing data being produced for their mesh.