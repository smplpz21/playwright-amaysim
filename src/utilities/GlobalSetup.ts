import { FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig){
    if(!process.env.ENV) {
        require('dotenv').config({
          path:`./env/.env`,
          override: true
        })
      } else {
        require('dotenv').config({
          path:`./env/.env.${process.env.ENV}`,
          override: true
        })
      }
}

export default globalSetup