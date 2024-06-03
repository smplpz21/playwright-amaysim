Pre-requisites
-NodeJS and NPM should be installed in your machine
-Open CMD/Powershell/Terminal
-Check NODE and NPM version by running code below
  Run below commands:
  node -v
  npm -v

*If NodeJs and NPM are not yet installed, Install NODEJS according to your machine using this link - https://nodejs.org/en/download/prebuilt-installer. NPM will automatically be installed.

-Extract ZIP in your chosen directory
-Open CMD/Powershell/Terminal
-Go to the project directory
  Run below command:
  cd <name-of-project>

-Install dependencies
  Run below command:
  npm install -D @playwright/test@next

-Run script
  Run below command:
  npm run test-prod-chromium

-Show HTML report
  Run below command:
  npx playwright show-report
