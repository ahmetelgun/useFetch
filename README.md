## useFetch
Fetch hook for React
### Installation
```
npm install @ahmetelgun/usefetch
```

### Usage
```javascript
import useFetch from "@ahmetelgun/usefetch";
.
.
const [data, loading, error] = useFetch("url");

if(loading){
    return <div>loading</div>;
}
else if(error){
    return <div>error</div>;
}
else if (data){
    return <div>data</div>
}
```

```javascript
import useFetch from "@ahmetelgun/usefetch";
.
.
const [data, loading, error, callFetch] = useFetch();
if(expression){
    callFetch("url")
}
if(another_expression){
    callFetch("url") 
    //if you call callFetch function before the old request ends, old request is aborted.
}
```

```javascript
import useFetch from "@ahmetelgun/usefetch";
.
.
const options = {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
}
const [data, loading, error, callFetch] = useFetch("url", options);
.
.
callFetch("url", options /*or different options*/)
//data, loading and error are reset every time you call callFetch function.
```