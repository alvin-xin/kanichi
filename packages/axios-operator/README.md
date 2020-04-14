
###### axios-operator

> 通过自定义操作符，完成接口请求与Observable的融合

###### Usage

```typescript
const requestUnfinished = axios({
    method: "GET",
    url: `${BaseURL}/api/v6/task/unfinished`,
    headers: {
        Authorization: `Bearer ${studentToken}`
    }
})
export const getUnfinishExercise = (studentToken: string) => requestObservable(requestUnfinished)
```
> requestUnfinished 可以替换成任何返回promise的请求库，比如fetch、umi-request等

```typescript
pipe(
    request((token: string) => getUnfinishExercise(token))
)
```
> 操作符使用方式
