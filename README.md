# Simply Business Todo App

This is my code test for Simply Business.

## Notes

I've decided to use NextJS as a starting point for the App, to allow me to get started immediately with React and not worry about webpack/babel set up.

## Getting it up and running

1. Clone the repo
2. Run `yarn install`
3. Start the server with `yarn dev`
4. View the app on [http://localhost:3000](http://localhost:3000)

## Running tests

To run the end to end cypress tests, run `yarn run cypress open` (assuming the app is running on port 3000).

## Additional plans

I ran out of time, after about 3 hours I was left with all the User Stories complete (and tested apart from the mark as complete story).

Unfortunately this hasn't given me time to show off any CSS, however perhaps briefly outlining my plans might help.

The next steps I would have done with more time would have been:

1. Write the missing test for marking items as complete
2. Add CSS Modules to Next
3. Style some of the components, such as button and checkbox, as they would be nice self contained styling bits of work. Using :before and :after pseudo elements and labels properly I would also make the Checkboxes and buttons accessible.
4. Unit tests for some of the components that have any logic in them. Using Jest and react-testing-library or jest, this shouldn't be difficult
5. I guess the rest of the styles and layout work.
