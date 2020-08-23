## useEffect

Fetch hook for React

### Installation

npm install @ahmetelgun/usefetch

### Usage
```javascript
import useFetch from "@ahmetelgun/usefetch";
const [data, loading, error] = useFetch("endpoint");

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
const [data, loading, error, callFetch] = useFetch();
if(expression){
    callFetch("endpoint")
}
if(another_expression){
    callFetch("endpoint") 
    //if you call callFetch function before the old request ends, old request is aborted.
}
```