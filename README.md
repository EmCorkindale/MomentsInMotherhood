Home image from Vecteezy.com

What was your requirements gathering and design process? 
Drew the website out on paper and wrte out the requirements. Thought about I would want from a website as a new parent.

Was it useful/successful?
It was very useful for me to have a drawn out layout.

Give a high level overview of your application and its features:

Where does its data come from (external/internal APIs)?
I have used an external API for the recipe page, and an external API for the map on the groups page. I have also used internal JSON files for the groups, and suburb data. Al of this has been imported in a mixture of ways. I used axios to fetch the recipe data. I imported the internal files, and i used an anchor tag to get the map data.

How is this data processed and displayed?
See above. I maped the recipe api and displayed the link, image, and title in a mui grid. The map is displayed using react leaflet properties. 
The suburbs json file is displayed in a dropdown select from mui.
The groups json is used in the map component to display locations of groups in the area, and also in a div that displays which groups are in the suburb slected in the dropdown.

How can the user interact with your application?
There is a subscription form, an app bar with pages to navigate, a recipe page, a milestones page where users can click on and expand cards with milestones at different ages, and they can select their baby's age from a dropdown select which opens a mui dialogue with milestones.

How have you structured/broken up your components/code?
I have a data file, a components file, an assets file, a pages file, and a hooks file.

What kinds of React hooks have you used (eg. state, context, effect, navigate)? 
How?
I have used useState in several different places, e.g: to update my select components and to andle opening the dialogue, in my custom hook to set and update the value of the subscription form.
useEffect: to fetch my api data using axios.
useReducer: for my fetch response in the recipe api component.
useNavigate: to navigate between pages.

Have you created and used any custom hooks?
(With help from the slides!) I used a custom hook to make a simplified subscription form component.

What external tools/libraries have you used (eg. bootstrap/axios/MUI)? How? Why?
Axios for data fetching, and MUI for styling.

How might you extend the features of your application in future?
I would have liked a search feature for the recipes section, and a frequently visited pages section on the homepage.