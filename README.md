## Run test using CMD/Powershell/Terminal
- Download repo as ZIP
- Extract ZIP in your chosen directory
- Open **CMD/Powershell/Terminal**
- Go to the project directory

```bash
  cd <my-project>
```

- Install dependencies
```bash
  npm install -D @playwright/test@next
  npx playwright install --with-deps
```
- Run script

```bash
  npm run <script-name>
```
## Scripts
QA and UAT environment urls are using dummy url for now
![image](https://github.com/smplpz21/playwright-amaysim/assets/171405309/d62363a0-2ea5-4261-87e1-58769315fcb6)

## Sample test run
![image](https://github.com/smplpz21/playwright-amaysim/assets/171405309/0759d651-ca0c-4d52-9fce-e77fb5a8dbf6)



## View HTML report
Run command below
```bash
  npx playwright show-report
```
![image](https://github.com/smplpz21/playwright-amaysim/assets/171405309/45c13cbd-bb8a-4c66-a7fa-1162fadf5475)
![image](https://github.com/smplpz21/playwright-amaysim/assets/171405309/b20c7f9d-0543-4ae4-896d-0817d0297505)
