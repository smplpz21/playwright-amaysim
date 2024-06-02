import { FullConfig } from "@playwright/test";
import dotenv from "dotenv"

async function globalSetup(config: FullConfig){
  dotenv.config({
    path:`./env/.env.${process.env.ENV}`,
    override: true
  })
}

export default globalSetup