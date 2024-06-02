## Pre-requisites
- NodeJS and NPM should be installed in your machine
- Open **CMD/Powershell/Terminal**
- Check NODE and NPM version by running code below
```bash
  node -v
  npm -v
```
![image](https://github.com/smplpz21/playwright-amaysim/assets/171405309/ec6ce010-ffed-41c1-ace6-083ce4f87f2a)


#### _*If NodeJs and NPM is not yet installed, Install according to your machine using this link [NodeJS Installer](https://nodejs.org/en/download/prebuilt-installer). NPM will automatically be installed._
## Run test using CMD/Powershell/Terminal
- Download repo as ZIP
- Extract ZIP in your chosen directory
- Open **CMD/Powershell/Terminal**
- Go to the project directory

```bash
  cd <my-project>
```
![image](https://github.com/smplpz21/playwright-amaysim/assets/171405309/fdb69e45-3264-4441-baab-91f4a7ebea83)




- Install dependencies
```bash
  npm install -D @playwright/test@next
```
- Run script

```bash
  npm run <script-name>
```
## Scripts
QA and UAT environment urls are using dummy url for now
![image](https://github.com/smplpz21/playwright-amaysim/assets/171405309/9b03f582-c51f-4f18-8c28-1be4ad79392c)


## Sample test run
![image](https://github.com/smplpz21/playwright-amaysim/assets/171405309/ece35029-4096-4a1b-afa7-97df89dabb5d)





## View HTML report
Run command below
```bash
  npx playwright show-report
```
![image](https://github.com/smplpz21/playwright-amaysim/assets/171405309/d4401322-e53d-40a0-8911-21c4d5a1821d)

