//Service Wrkers act as a proxy server b/w web applications, the browser and the network (when available)
//For effective offline experiences
//They allow access to push notifications and background sync apis

//Service Worker is an event-driven worker regitered against an origin and a path.
//It takes the form of a javascript file that controls webpage/site it is associated with by 
//intercepting and modifying navigation and resource requests and caching resources in a very granular
//fashion thus giving us more control on how app behaves when network is not available.

//they run in worker context and hence doesnt have DOM access and runs on a different thread. Its fully
//ASYNC
//It runs only over HTTPS due to security reasons.Cannot be used in private browsing mode.
//They make heavy usage of promises
//First Register the service worker
//Lifecycle: Download --> Install --> Activate

//Worker in Waiting --> When existing service worker is available the newer version gets installed in 
//                      the background but not yet activated.


