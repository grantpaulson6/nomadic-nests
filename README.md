# Nomadic Nests

This web app emulates Airbnb with a personal spin - the "nests" or rentable places are locations the creator and his wife visited during their travels.  Built using React/Redux with Ruby on Rails powering the backend.

## Key Feautures

* Search nests based on desired criteria

* Filter nests based on map interaction and desired criteria

* Book nests for specific dates

## Data management

Similar to a site with a much larger database, the search functionality always queries the database for a filtered and reduced set of data.  This would make the app more scalable for large quantities of data.  Further front-end filtering for the user is available in a specific filter bar that appears on the index page.  This allows for instant filtering of fields such as price that the user is more likely to adjust, without having to query the database.

## UI

Like Airbnb, Nomadic Nets keeps the layout simple, clean, and minimalist.  A permaneant search field in the navigation bar and a responsive filter bar allows for quick navigation.  A toggle on/off option for the map display allows the user to change their primary filtering approach.
