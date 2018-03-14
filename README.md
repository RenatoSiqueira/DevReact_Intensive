## Annotations of DevReact BootCamp - Intensive

### Functional Stateless Component example
```
const Comp1 = props => <h1>Teste</h1>
```

### Class es6 example
```
class Name extends Component { ...}
```

### Pure Functions
```
function pure(param1){
    return param1+1
}
```

### Recompose (???)

### Date/Hour/Distance/...
```
const Distancia = props = {
    if(props.unit === 'km'){
        return <p>{(props.distance * 1.60934).toFixed(2)} km</p>
    }
    return <p>{(props.distance).toFixed(2)} mi</p> 
}

const distanciaMi = 10

<Distance distance={DistanceMi} unit={'km'}/>
```

Stopped at 36:42