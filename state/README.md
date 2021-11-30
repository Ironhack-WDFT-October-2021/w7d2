# State
State represents information that a component is in charge of managing that can affect what the component diplays.

The important concept of a React component: a component should only manage its own state, but it should not manage its own props - that's why props are read only.

In fact, props of a component is concretely "the state of another component (parent component)". So props must be managed by their component owner. That's why all React components must act like pure functions with respect to their state (don't mutate the state directly).
### Examples of state

- Logged in? - Whether or not we are logged-in has a big effect on what the user sees in an app.
- User details - User details such as name, email and avatar changes the content of your app slightly.
- Lists of data - Lists of data such as videos on YouTube, products on Amazon, or notifications on Facebook are retrieved from the database and stored as state in a React app. We will store these in arrays so the amount is also part of the state.
- Open or closed? - The open/closed status of menus and popups in the app should also be stored as state. As the user interacts with the app, the different statuses are going to change.
- Form data - As users fill in forms in a React app, our code is going to be storing the information they typed in state. This will also allow us to pre-fill the form’s inputs for things like edit forms.

### Three questions that help determine if a piece of data is state:
1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state.
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.