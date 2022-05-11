# dataLayer
TypeScript package for Google Tag Manager's dataLayer implementation

## Instalation

Using npm:
```shell
$ npm i @metricasboss/typescript-datalayer
```

## Usage
You can see more in the example folder

```ts
//App.ts

import dataLayer from '@metricasboss/typescript-datalayer';

function App() {

  const countClick = () => {
    dataLayer.customEvent('countClicked', {'name': 'test'})
  }
  return (
    <div className="App">
      <button type="button" onClick={countClick}>
            {`Click me`}
        </button>
    </div>
  )
}

```


## Todo
[ ] Add suport to GA4 events
[ ] Implement Unit Tests
