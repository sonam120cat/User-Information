1.	Installation Steps.
=>check for node and npm in the system,run the below commands for checking availability of node and npm respecively.
node --version
npm --version
If above commands give error then:
=>Step 1: Download the Installer
  Download the Windows Installer from NodeJs official website(https://nodejs.org/en/download). Make sure you have downloaded the latest version of NodeJs. It includes the NPM package manager.
=>Step 2: Install Node.js and NPM
  After choosing the path, double-click to install .msi binary files to initiate the installation process. Then give access to run the application.

  You will get a welcome message on your screen and click the “Next” button. The installation process will start.
  Choose PaChoose Path to Install Node.js
  By clicking on the Next button, you will get a custom page setup on the screen. Make sure you choose npm package manager , not the default of Node.js runtime . This way, we can install Node and NPM simultaneously.

  =>After this process ends you can check with above mentioned commands(node --version , npm --version) if node and npm get installed correctly.

=>For getting angular in the system ,run the following command:
npm install - g @angular/cli
To check if it gets correctly installed, run the following command
ng version

If you get error then set the path for angular in Environment varaibles.
=>Search for environment variable in your system.
Under User variables:
=>Click on New,set the variable name as PATH  and in the value add these two paths in two seperate lines.
C:\Users\Sushil Kumar\AppData\Roaming\npm----For NPM
C:\Users\Sushil Kumar\AppData\Roaming\npm\node_modules\@angular\cli\bin----For Angular
=>Close the opened command prompts and then again check for angular version.

2.	Building the Application
=>Execute the below command to create a new angular project
ng new userinformation
While creating application it would be asked to choose for angular routing then type "Yes" for it.It would also be asked for choosing stylesheet for the application.
=>For creating a new component ,execute the below command:
ng generate component userinformation
=>For creating a new service in a seperate folder ,execute below command
ng generate service share/utility
=>For running the application,execute the below command:
npm start.

3.	How to run the Application Locally
=>Take clone from git repo following the below command:
  git clone -b master https://github.com/sonam120cat/User-Information.git
=>navigate inside the application - Open the application in visual studio code(IDE).
open the terminal for running the application (shortcut Ctrl + `).
Execute this command : npm install (For getting node modules).

=>Execute the following command to run the application:
npm start.

