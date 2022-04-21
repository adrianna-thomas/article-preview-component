# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to add a shape to the bottom of a div.

```css
.open-share {
  background: var(--Very-Dark-Grayish-Blue);
  padding: 0.35rem;
  position: absolute;
  left: 21rem;
  width: 55%;
  height: 25%;
  border-radius: 15px 15px 15px 15px;
  display: flex;
  display: none;
  justify-content: space-evenly;
  align-items: center;
  top: 40%;
  transform: scale(0.8);
}
```

I learned how to change the display from none to visible by clicking on an element.

```js
document.querySelector(".share-btn").addEventListener("click", function () {
  document.querySelector(".open-share").style.display = "none";
  document.querySelector(".open-share").style.display = "flex";
});
```

### Continued development

Get more comfortable using Javascript. Figure out how to build more complex functions instead of finding a work around. For example to close the pop up share window on the desktop screen size I inserted an "x" icon and made a new function.

### Useful resources

- [Box Shadow Examples](https://getcssscan.com/css-box-shadow-examples) - This helped me decide which box shadow to use. I really liked this site and will use it going forward.
- [Center Triangle at Bottom of Div](http://jsfiddle.net/9AbYc/1/) - This is an helped me understand how to add an arrow shape to the bottom of the div container.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/adrianna-thomas)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
