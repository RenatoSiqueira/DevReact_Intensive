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
```
const Box = props => {
    return <div>{props.children}<div>
}

How to use: 
<Box>Value to pass with props</Box>
<Box><h1>Value to pass with props</h1></Box>
```

### High Order Component [HOC]
- Component receives component
- withHTTP [case of study]

### React Router DOM
- It´s a react router for web
- Don´t use 'path' instruction for 404 error treatment
- Use 'switch' for prevent stack up routes

### Redux
- Lesson 2 - Redux with node only for simple example
- Lesson 2 - Adding the redux concepts


## LESSON 3
- Redux
- Redux-Saga
- Runs Live 