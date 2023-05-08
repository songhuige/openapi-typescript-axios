import type { AxiosResponse } from "axios";

declare global {
  type AxiosPromise<T> = Promise<AxiosResponse<T>>;
}
