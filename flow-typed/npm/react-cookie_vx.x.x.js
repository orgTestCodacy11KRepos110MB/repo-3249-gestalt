// flow-typed signature: 43a4ad6663b2dece76c9501723040d59
// flow-typed version: <<STUB>>/react-cookie_v4.1.1/flow_v0.162.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'react-cookie'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

declare module 'react-cookie' {
  import type { Node as ReactNode } from 'react';

  declare type Cookies = {
    cookies: {
      [string]: string,
    },
    ...
  };

  declare module.exports: {
    useCookies: (Array<string>) => [{ [string]: string }, (string, string) => void],
    CookiesProvider: ({| cookies: Cookies, children: ReactNode |}) => ReactNode,
    ...
  };
}
