# LiveSafe Full Stack Assignment:

Your goal is to complete a simple full-stack application. Most of the frontend is written already, and your task is to implement the search functionality, as well as connect the feed to a real backend.

## Installation: 
```
This assignment requires node >= 8.0.0 and npm >= 5.5
```

### Clone the project - 

```
git clone https://github.com/shindepratik/lvsf-pratik.git
```

### Start the server - 

```
cd lvsf-pratik/backend
npm install
npm start
[do this only if console shows nodemon found error] npm install nodemon
```

### Start the app - 

```
cd lvsf-pratik/frontend
npm install
npm start
[do this only if console shows nodemon found error] npm install nodemon
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

A few minor tweaks were made to some of the original files in the frontend folder in order to fulfill the requirements of the assignment. 
The following files were tweaked in the frontend folder - 

* home.component.ts
* news.service.ts
* feed-card.component.ts

## Provided more time, what I would have done next: 

1. Provided an option to filter search results based on either title, user, URL or a combination of any of those options. 
2. Since there is an endpoint to create an entry, would have created an RSS feed for subscribers to get notified when any new entry is made. 
3. Added comments section, sharing option on social media and an option to upvote/downvote an article. 
4. Tweaked the frontend to make it look more vibrant and welcoming.


## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
