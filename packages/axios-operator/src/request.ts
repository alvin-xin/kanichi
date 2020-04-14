/**
 * @format
 * @Author: Alvin
 * @Date 2020-04-15
 * @Last modified by: Alvin
 * @Last modified time: 2020-04-15
 */
import {Observable, PartialObserver, Subscriber} from "rxjs";

class Request extends Subscriber<Function> {
    constructor(
        destination: PartialObserver<any> | ((value: any) => void),
        private readonly func: Function
    ) {
        super(destination);
        this.func = func;
    }

    protected _next(value: any): void {
        const o$ = this.func(value);

        o$.subscribe({
            next: (value: any) => {
                // @ts-ignore
                this.destination.next(value);
            }
        })
    }
}

export const request = (func: any) => (source: Observable<any>) => source.lift({
    call(subscriber: Subscriber<any>, source: any): any {
        source.subscribe(new Request(subscriber, func))
    }
});
