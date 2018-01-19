# Steps to Setup Redux

### 1. Add dependencies
**redux**: The redux library providing the predictable state container functionality  
**react-redux**: Provides react specific functionality for interacting with redux  
**redux-devtools**: Provides debugging tools for redux in the browser  
```.sh
yarn add redux react-redux
yarn add redux-devtools -D
```
  
### 2. Create the store and add it to your app
```.js
  // src/index.js
  import { createStore, combineReducers } from 'redux'
  import { Provider } from 'react-redux'

  const rootReducer = combineReducers({})
```  
We first need to create our root reducer function that will be sending each piece of the redux tree to the reducer in charge of that piece.
___

```.js
const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```
Then, we must create our store which the redux library gives us a utility function in order to do this. The first argument will be the root reducer function we just created. The second argument is any initial data we want our redux tree state to initialize with, and for the third argument, createStore allows us to pass in middleware that hooks into the redux state cycle in order to extend redux, in this case we are going to add the devtools middleware in order to easily debug redux.
___

```.js
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
Finally we need to wrap our `<App />` with the `<Provider />` component provided by `react-redux` in order to easily access the store within our App components.

### 3. Create the Movies reducer


### 4. Create the Movies actions



### 5. Connect `<MoviesTableBody />` and get `movies` from the Redux Tree


### 6. Connect `<YearPieChart />` and get `movies` from the Redux Tree


### 7. Connect `<RatingBarChart />` and get `movies` from the Redux Tree


### 8. Connect `<MoviesSearch />` and map `getMovies` action to dispatch and call on mount


### 9. Create the Filters reducer


### 10. Create the Filters actions


### 11. Connect `<FilterForm />` and get `filters` from the Redux Tree


### 12. Connect `<FilterForm />` and map `changeFilters` action to dispatch and call on mount


### 13. Create Movies selector for `movies` filtered by `filters`


### 14. Create the Movies `getFilteredMovies` selector


### 15. Connect `<MoviesTableBody />`, `<YearPieChart />`, `<RatingBarChart />` to the `getFilteredMovies` selector


### 16. Create the Active Movie reducer


### 17. Create the Active Movie actions


### 18. Connect `<MoviesTableBody />` and get `activeMovie` from the Redux Tree and map `setActiveMovie` action to dispatch


### Done
