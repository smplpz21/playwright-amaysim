import { FullConfig } from "@playwright/test";
import dotenv from "dotenv"



async function globalSetup(config: FullConfig){
  dotenv.config({
    path:`.env`,
    override: true
  })
    // if(!process.env.ENV) {
    //   dotenv.config({
    //       path:`.env`,
    //       override: true
    //     })
    //   } else {
    //     dotenv.config({
    //       path:`.env.${process.env.ENV}`,
    //       override: true
    //     })
    //   }
}

export default globalSetup