// according to examples at https://www.npmjs.com/package/jquery.cookie

export interface IJqueryCookie {
    cookie(key?: string, value?: () => number | string, options?: object): void | string | undefined | object;
    removeCookie(key: string, options?: object): void;
}

export as namespace Jquery;
