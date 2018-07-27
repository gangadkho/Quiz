# Structo - General Software Quiz

## Task 1

A Simple SocketIO Server that runs on port 8100 by default.
1. Upon sending/emitting _plain text_ request of `time-now` from **client**, the server should respond with the current time (in `time-response` event name)
2. Upon requesting `date-tomorrow` from **client**, the **server** should respond with tomorrow's date (in `tomorrow-response` event name)

Built using Node JS.

### Prerequisites

Softwares needed:

```
Node js (any latest version)
```

### Running

Download or clone the Task 1 directory. In the "Task 1" directory, run the following command:

```
npm install
node index.js
```

This should start server on port 8100. You can change the port used in the config.json file.
Tested with the online client tool (http://amritb.github.io/socketio-client-tool/)

## Task 2

Maximum chain length calculator application.

Built using Java 8. Packaged and run using Maven.

### Prerequisites

Softwares needed:

```
JDK 8 
Maven (any latest version)
```

### Running

Download or clone the Task 1 directory. In the direction "Solution" run the following command:

```
mvn package
```

This should start the application.
Applications asks the input i and j from the user.

```
Valid range values :
i, j > 0
```

If there is an invalid value, default values of i (100) and j (200) are considered.

Application Input 		=> i and j (Positive integers greater than 0)

Application Output 		=> maximum chain length of all numbers in range i and j (including i and j)
