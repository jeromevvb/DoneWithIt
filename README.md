# DoneWithIt

A react native application to sell stuff that you don't need anymore  
I'm doing this app to challenge myself and improve my skills about react native


I'm using a backend in nodejs located in server folder. 

Note: This server hasn't been wroted by me.

To start the application:

```
yarn start
```

This command will start server as well. 
To test the application on a real device, make sure to use your IPV4 address as api address in env.ts

For example:
```
const env = {
  dev: {
    apiUrl: "http://192.168.1.23:9000/api",
  },
  staging: {
    apiUrl: "http://192.168.1.23:9000/api",
  },
  prod: {
    apiUrl: "http://192.168.1.23:9000/api",
  },
};
```
 
or use ngrock (https://ngrok.com/)
