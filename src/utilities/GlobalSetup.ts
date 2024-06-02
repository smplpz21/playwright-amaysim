import { FullConfig } from "@playwright/test";
import dotenv from "dotenv"

async function globalSetup(config: FullConfig){
    if(!process.env.ENV) {
      dotenv.config({
          path:`./env/.env`,
          override: true
        })
      } else {
        dotenv.config({
          path:`./env/.env.${process.env.ENV}`,
          override: true
        })
      }
}

export default globalSetup