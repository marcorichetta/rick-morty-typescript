# Rick & Morty Episode viewer

This is a small app, part of this Udemy [course](https://www.udemy.com/course/typescript-with-react-hooks-and-context/), that lets you see and like episodes from the show Rick & Morty.

It's made with **Typescript** and **React**, making use of Hooks and Context.

To run it:

```bash
git clone https://github.com/marcorichetta/rick-morty-typescript.git

cd rick-morty-typescript

yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## /src contents

### `App.tsx`

The main component which renders the header and uses a `Switch` to route to the pages defined on `/pages`.

### Components

Presentational component to define the list of episodes brought from the API.

### Pages

The pages that display the list of episodes and the favorite ones.

### `actions.tsx`

It contains 2 functions:

-   `fetchData`: Used on `useEffect` hook to gather the episodes from the API after the homepage is rendered.
-   `toggleFavorite`: An action to like/dislike an episode when you click the '+1' button.

### `interfaces.tsx`

It contains the different types of data used in this application. It's one of the main advantages of using Typescript.

### `Store.tsx`

It uses `Context` and `reducer` to manage how data flow based on actions, and by that, the state of our application.
