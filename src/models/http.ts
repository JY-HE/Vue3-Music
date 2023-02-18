/*
 * @Author: HeJiaYong
 * @Date: 2023-02-18 15:16:48
 * @LastEditors: HeJiaYong
 * @LastEditTime: 2023-02-18 15:27:33
 * @FilePath: \Vue3-Music\src\models\https.ts
 * @Description:  http请求接口interface
 * 
 */

export interface IResType<T> {
    code: number;
    data?: T;
    msg: string;
    err?: string;
}

export interface IHttp {
    get<T>(url: string, params?: unknown): Promise<T>;

    post<T>(url: string, params?: unknown): Promise<T>;

    upload<T>(url: string, params: unknown): Promise<T>;

    put<T>(url: string, params: unknown): Promise<T>;

    delete<T>(url: string, params: unknown): Promise<T>;

    download(url: string): void;
}