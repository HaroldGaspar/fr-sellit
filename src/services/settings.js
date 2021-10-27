// export const API_URL = "http://hakhi.xyz:8000"
export const API_URL = "http://localhost:8000"
console.log(process.env.api_host)
require("dotenv").config() //{ path: "./.e" })

// export const port = process.env.PORT
// export const api = process.env.API_URL
console.log("form config", process.env)
