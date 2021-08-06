# Content Layout Challenge

Style the `http://localhost:3000/content-layout` page (showing 3 responsive content elements) using flex-box / grid with the breakpoints defined below. Maximum width of the entire content area on desktop should be 1200px. [View the video example.](https://www.loom.com/share/ff22e61d7e914976913985aa2390efbb)

Add as much or as little custom SCSS to the `/src/assets/scss/_content-element.scss` file to adjust the layout/styles of elements. Define custom variables (if needed) in the `/src/assets/scss/_variables.scss` file.

The project includes Bootstrap 5.1.0 CSS if you would like to take advantage of that, but it's not required.

### Breakpoints

- **360px:** each content element is full-width and stacked one on top of the other, with each content element also being in a stacked view (author area above content area)
- **576px:** each content element is full-width and stacked one on top of the other, with each content element having author area on the left, content area on the right (with text left-aligned)
- **768px:** each content element is at most 50% of the page width, with each content element being in a stacked view
- **992px+:** each content element is at most 1/3 of the page width, with each content element being in a stacked view.

## Project Setup

Clone the repo and setup locally using `yarn install`.

Run the app locally using `yarn start`.

View the app locally at `http://localhost:3000/`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
