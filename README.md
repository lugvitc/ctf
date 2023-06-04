# CTF

An open source CTF platform developed by Linux Club VIT Chennai. The CTF Platform has features like creating teams, solving challenges and viewing the positions in the leaderboard!

# Project structure
All the code related to the website are placed inside the `src` directory.
* **components** - contains user-defined react components as required for any of the pages. If you need to add a challenge in the form of a popup-card, or use the loading animation, or use the leaderboard cards, this is where you should import the functionality from.
* **hooks** - contains user-defined react hooks as requried for any of the pages. If you need to send an API request, `useFetch` is the hook you're looking for. Use all the hooks from this directory in your code, or add new ones if needed.
* **pages** - contains all the pages that you see in the website. If you wish to add a new page, create a new `.js` file here.
* **styles** - contains all the css styling that you need to add to all of the pages/components globally.
* **index.js** - contains all the pages shown in the homepage at topbar. If you wish to add pages to the topbar, put their link in this file.

# Test the project locally
* Fork the repo.
* Clone your copy of the repo to your local machine.
* use command `npm install` to install all packages required by the project.
* use command `npm start` to see the website rendered in your localhost.
* Now all the changes made in your local system will reflect in the rendered localhost website.

# Roadmap of features expected
* The leaderboard page should be dynamic. Currently, only when you refresh the leaderboard, the new team positions are shown if there is any change. We need to make it dynamic in the sense where the leaderboard is auto-fetched every 1 or 2 minutes for all users.
* Propose a new styling for the challenges viewing. Currently the challenges are placed one below the other occupying all width. If we can make the challenges in the form of cards, where multiple challenges would be shown in a row (like a typical CTF platform) that would be great. See [picoctf](https://play.picoctf.org/login?redirect=/practice) for demo.
* Add a `points vs time` graph for the leaderboard page where users can see which team was at which position during a specified time. It increases the competition and gives a smoother experience for the user. See the leaderboard graph in [ctfd](https://ctfd.io/) platform for reference.
* Add more animations related to cyber-security in the home page of the CTF platform for better experience.
* If you would like to add any other features as well, feel free to create an issue in github after which you can submit your PR for implementation.

# Contributing
Thank you for your interest in contributing for the project. Checkout the [Contributing Guidelines](https://github.com/lugvitc/ctf/blob/master/CONTRIBUTING.md) before submitting any PR. Submit small changes in a single PR so that it is easier to review (for instance, work on one feature in one PR). 

# trial
