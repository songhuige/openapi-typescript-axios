import axios from "axios";

export type ClientError = {
  status: number;
  msg?: string;
};

const axiosInstance = axios.create({
  timeout: 30000,
});

export type ApiRequestOptions<T = unknown> = {
  readonly method:
    | "GET"
    | "PUT"
    | "POST"
    | "DELETE"
    | "OPTIONS"
    | "HEAD"
    | "PATCH";
  readonly url: string;
  readonly path?: Record<string, unknown>;
  readonly cookies?: Record<string, unknown>;
  readonly headers?: Record<string, string>;
  readonly query?: Record<string, unknown>;
  readonly formData?: Record<string, unknown>;
  readonly body?: any;
  readonly mediaType?: string;
  readonly responseHeader?: string;
  readonly responseTransformer?: (data: unknown) => Promise<T>;
  readonly errors?: Record<number | string, string>;
};

function getUrl(options: ApiRequestOptions): string {
  const path = options.url.replace(
    /{(.*?)}/g,
    (substring: string, group: string) => {
      if (options.path) {
        if (group in options.path) {
          return encodeURI(String(options.path[group]));
        }
      }
      return substring;
    }
  );

  return path;
}

export function request(options: ApiRequestOptions) {
  const { query, body, formData, method, headers } = options;

  return axiosInstance.request({
    url: getUrl(options),
    params: query,
    data: body ?? formData,
    method,
    headers,
  });
}
