import { httpClient } from "@/utils/request"

export const testApi = {
  getData: () => {
    return httpClient.get("/test")
  },
}
