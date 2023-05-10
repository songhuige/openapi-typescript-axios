type OpenAPIConfig = {
  apiVersion: 2 | 3;
  services: Array<{
    name: string;
    url: string;
  }>;
};

type APIMethod<PS, URL extends keyof PS> = keyof PS[URL];

type APIStates<
  PS,
  URL extends keyof PS,
  M extends APIMethod<PS, URL>
> = PS[URL][M] extends { responses: infer R }
  ? R extends { [index: number]: any }
    ? keyof R
    : never
  : never;

type RequestParam<
  PS,
  URL extends keyof PS,
  M extends APIMethod<PS, URL>
> = PS[URL][M] extends {
  parameters?: {
    query?: infer Q;
    path?: infer P;
    body?: infer B;
    formData?: infer F;
  };
  requestBody?: {
    content: {
      "application/json": infer RB;
    };
  };
}
  ? Q & P & (B extends Record<string, unknown> ? B[keyof B] : unknown) & F & RB
  : Record<string, any> | void;

type ResponseBody<
  PS,
  URL extends keyof PS,
  M extends APIMethod<PS, URL>,
  STATE extends APIStates<PS, URL, M>
> = PS[URL][M] extends { responses: infer R }
  ? {
      [RK in keyof R]: R[RK] extends never
        ? never
        : R[RK] extends { schema?: infer S }
        ? S
        : R[RK] extends { content: { "application/json": infer C } }
        ? C
        : RK extends "default"
        ? R[RK]
        : unknown;
    }[STATE]
  : never;

type API<
  PS,
  URL extends keyof PS,
  M extends APIMethod<PS, URL>,
  STATE extends APIStates<PS, URL, M>
> = (
  param: RequestParam<PS, URL, M>,
  ...rest: any
) => ResponseBody<PS, URL, M, STATE>;
