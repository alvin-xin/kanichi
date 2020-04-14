/**
 * @format
 * @Author: Alvin
 * @Date 2020-04-15
 * @Last modified by: Alvin
 * @Last modified time: 2020-04-15
 */
import {AxiosError, AxiosPromise, AxiosResponse} from "axios";
import {Observable} from "rxjs";

// 导出request操作符
export { request } from "./request";

// 将axios的 Promise执行链转成Observable类型数据流
export const requestObservable = (response: AxiosPromise) => new Observable<any>(subscriber => {
    response
        .then((response: AxiosResponse) => {
            subscriber.next(response.data);
            subscriber.complete();
        })
        .catch((err: AxiosError) => {
            subscriber.error(err);
            subscriber.complete();
        });
});

