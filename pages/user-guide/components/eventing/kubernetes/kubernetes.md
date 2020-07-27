# Kubernetes

Knative/Eventing offers a consistent, Kubernetes-based platform for reliable, secure and scalable asynchronous event delivery from packaged or app-created event sources to on-cluster and off-cluster consumers. To know more about Knative eventing, click [here](https://knative.dev/docs/eventing/).

While configuring Application, drag and drop **Kubernetes** from left pallet (**Eventing** drop-down) and in to the canvas to configure it.

![1](imgs/1.jpg)

1. **Service ID:** Id of the service. System will automatically assign id to the service but user can customize it.
2. **Name**: Name for the service.
3. **Version**: Version of the service.
4. **Namespace**: Namespace for the service.
5. **Resources:** Select resources from drop-down. Resource can be **Secrets** or **Events**. You can select both resources as well.
6. **Verbs**: Select verb for the resources selected. Verbs can be **Get**, **List**, and **Watch**. You can select all three verbs as well.