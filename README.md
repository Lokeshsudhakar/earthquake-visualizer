Earthquake Visualizer
UI Take-Home Challenge Solution — Geography Student Earthquake Map

Overview
Earthquake Visualizer is a web application to help students and enthusiasts visualize recent earthquake activity around the globe.
It fetches live earthquake data from the USGS Earthquake API and plots events on an interactive world map using React and Leaflet.

The app lets you filter earthquakes by minimum magnitude, explore details about each quake, and pan/zoom to different regions for discovery.

Live Demo
Try the app live: https://glowing-brigadeiros-5ab20d.netlify.app/



Technology Stack:


Frontend: React

Mapping: React-Leaflet (Leaflet.js)

Data: USGS Earthquake API (no authentication required)

Styling: [Your method — e.g. CSS Modules, Tailwind CSS, plain CSS]

Features
Global Map showing recent earthquakes

Magnitude Filter: use the slider to show only quakes stronger than chosen value

Zoom/Pan the map, explore regions interactively

Click for Details: markers show location, magnitude, and time

Responsive & User-Friendly design

Error Handling: Shows message if data cannot be loaded



Requirements (per Challenge PDF):


Uses React for UI

Uses public API (USGS for earthquake data)

Interactive map (Leaflet)

Magnitude filtering (slider)

Deployed and live on Netlify

Code available on GitHub

Simple, intuitive UI targeted for students


Getting Started-
You can run or modify this app locally:

Clone the repository

cmd:
git clone https://github.com/Lokeshsudhakar/earthquake-visualizer
cd earthquake-visualizer


Install dependencies-

cmd:
npm install


Start development server-

cmd:
npm start
App runs at http://localhost:3000


Build for production

cmd:
npm run build


Deployment-
Netlify
This app is auto-deployed from GitHub using Netlify.
You can connect this repo to your own Netlify account and set:

Build command: npm run build
Publish directory: build

SPA Routing with React Router
If you add React Router, create public/_redirects with:

text
/* /index.html 200
Code Structure
/src/App.js — Main logic: fetch data, filter, and render map

/src/components/Map.js — Map setup and marker rendering

/src/components/Slider.js — Magnitude filter UI

/public/index.html — Root file for map container

Demo Video
( Drive VIDEO DEMO LINK)

Screenshots
(https://drive.google.com/drive/folders/1HQQSlQvbjZbYAEIH7M54uZvOFfY9dH5y)

License
MIT

Contact
For questions or collaboration, contact katari lokesh at lokeshsudhakar218@gmail.com
