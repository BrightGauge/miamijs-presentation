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
First we are going to create a folder named *reducers* in our Movies module, and then create a `movies.js` file that will contain our movies reducer
```.js
// src/Movies/reducers/movies.js
export const GET_MOVIES = 'MOVIES/GET_MOVIES'
```
First we are going to create an action type of `GET_MOVIES`, in order to set new movies through our movies reducer

```.js
const initialState = []
```
Then, we are going to create an object to hold the initial state for our movies, in this case an empty array

```.js
export default function movies(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_MOVIES:
      return payload
    default:
      return state
  }
}
```
To finish off, we will create our reducer function that will take the current movie state, which we are defaulting to `initialState` if not defined yet, and the current action being passed in.

We are then decomposing the type of the action, and the data, defined as `payload`, from the action that is coming in.

Then, because every reducer acts on every single action regardless of it being related to this piece of the state or not, we need to act only on the action types we care about for our `movies` reducer, in this case, we want to react to an action that has the `GET_MOVIES` type, and take the data sent, and set it as the new list of movies

Because redux recreates the entire state tree on every single action, we need to make sure that if the action getting through is not important to this reducer, we always return the original state back, as you can see here in the `default` case.

### 4. Add the `movies` reducer to our App's root reducer
```.js
// src/index.js
import moviesReducer from 'Movies/reducers/movies'

const rootReducer = combineReducers({
  movies: moviesReducer,
})
```
Once the reducer is created, we need to add it to our `rootReducer` in order for redux to be aware that it exists


### 5. Connect `<YearPieChart />` and get `movies` from the Redux Tree
Now we need a way to pull the movies we added from our state tree and on to the components that require them to render
```.js
// src/Movies/components/MovieCharts/YearPieChart.jsx
import { connect } from 'react-redux'
```
First, we need to import the `connect` utility from `react-redux` in order to connect this component to the redux state tree

```.js
const mapStateToProps = (state, props) => ({
  movies: state.movies,
})
```
Next we need to define a function that we will pass to `connect` that will give us access to the state tree and the current Component props

```.js
export default connect(mapStateToProps)(YearPieChart)
```
Finally, we are going to wrap our `YearPieChart` component in the `connect` function so that this component is aware of the Redux state tree and can grab any state that it needs to render itself.


### 6. Connect `<RatingBarChart />` and get `movies` from the Redux Tree
```.js
// src/Movies/components/MovieCharts/RatingBarChart.jsx
import { connect } from 'react-redux'

...

const mapStateToProps = (state, props) => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(RatingBarChart)
```
Again, we are going to connect the `RatingBarChart` component to the Redux state tree using the `connect` utility


### 7. Connect `<MoviesTableBody />` and get `movies` from the Redux Tree
```.js
// src/Movies/components/MoviesTableBody/MoviesTableBody.jsx
import { connect } from 'react-redux'

...

const mapStateToProps = (state, props) => ({
  movies: state.movies,
})

export default connect(mapStateToProps)(MoviesTableBody)
```
And also for the `MoviesTableBody` component


### 8. Clean up the `<MoviesSearch />` component to no longer pass movies to the children components
```.js
render() {
  return (
    <Segment.Group horizontal className="bg movies">
      <Segment basic className="movies-filters">
        <MovieFilters onSearch={this.searchMovies} />
        <Divider />
        <YearPieChart />
        <Divider />
        <RatingBarChart />
      </Segment>
      <Segment basic className="movies-table">
        <MoviesTable />
      </Segment>
    </Segment.Group>
  )
}
```
Now that we are accessing the movies directly from the redux state tree, we can clean up our `MoviesSearch` component to no longer deal with movies.

Let's remove the movies being passed in to the components we connected to the redux state tree.


### 9. Create the Movies actions
As you can see there is no data on the page anymore, and that is because our `movies` state is an empty string.

Remember the reducer that we created for movies? Well, now we need to create an action that will fire the `GET_MOVIES` type and send the appropriate `payload`, in this case, our local movies database

```.js
// src/Movies/actions/movies.js
import localMoviesDB from 'Movies/database'
import { GET_MOVIES } from 'Movies/reducers/movies'
```
First we are going to import our local movies database, so we can pass that along to our reducer through our action.  
We are also importing our action type from our reducer so we can always have the correct string even if it changes.

```.js
export const getMovies = () => {
  return { type: GET_MOVIES, payload: localMoviesDB }
}
```
Next we are going to create a function called `getMovies` that will return `action` that has the `GET_MOVIES` type, and is sending our local database as the `payload`.


### 10. Connect `<MoviesSearch />` and map `getMovies` action to dispatch and call on mount
Next we need to call the new action from inside a component. In this case it makes sense for our `MoviesSearch` container to call it since all of the components that rely on movies are being rendered there.
```.js
import { connect } from 'react-redux'
import { getMovies } from 'Movies/actions/movies'
```
First, let's import the `getMovies` action we just created. We also need to import `connect` in order to make this component redux aware

```.js
const mapStateToProps = () => {}

const reduxActions = {
  getMovies: getMovies,
}

export default connect(mapStateToProps, reduxActions)(MoviesSearch)
```
Next we are going to pass in an object of redux actions that we want for this component to have access to.
We need to do this in order for `connect` to wrap our actions in a special redux function that knows how to interact with the redux state container.

```.js
MoviesSearch.propTypes = {
  getMovies: PropTypes.func.isRequired,
}
```
`getMovies` gets passed to `connect`, and then `connect` is going to pass the function down to our original component via props, so we need to define the `getMovies` PropType in the current component.

**Note:** Make sure to import `PropTypes`, otherwise we will get an error while trying to define this

```.js
constructor(props) {
  super(props)
  this.searchMovies = this.searchMovies.bind(this)
  this.props.getMovies()
}
```
Finally we need to call that function in the constructor, or when this component mounts, so we can initialize the movies list with the new data
**Note:** we need to make sure to call `super` with `props`, otherwise `this.props` will be undefined.

```.js
render() {
  const { movies } = this.props // DELETE
  ...
}
```
Let's also remove `movies` from `render`


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
