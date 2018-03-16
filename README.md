## Annotations of DevReact BootCamp - Intensive

## LESSON 1
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

### StoryBook

#### Commands to Install
```
npm i --save-dev @storybook/cli
getstorybook
yarn run storybook

Note¹: Command Build for export to html
```


### Styled Components
```
import styled from 'styled-components'

const Red = styled.span`
    color: red;    
`

const Box = styled.p`
    background-color: grey;
`

const Distancia = props = {
    if(props.unit === 'km'){
        return <Box>{(props.distance * 1.60934).toFixed(2)} <Red>km</Red></Box>
    }
    return <p>{(props.distance).toFixed(2)} mi</p> 
}
```

## LESSON 2
### Children 