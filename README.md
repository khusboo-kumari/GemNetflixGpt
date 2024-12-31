# create react app 
- Configured tailwind css into the app 
- Header 
- Routing of App 
- Login Form 
- Sign up Form 
- Form Validation 
- useRef Hook 
- use firebase , create firebase config in utils folder and      paste that code from firebase 
- Deploying our app to production . 
- Create Sign Up user account in Firebase . 
- Implement Sign In user Api 
- Created Redux Store with userSlice 
- Implemented Sign Out 
- Update Profile 
- BugFix : Sign Up user displayName and profile picture update 
- BugFix : If the user is not logged in Redirect /browse to login Page and vice - versa 
- Unsubscribed to the onAuthStateChanged 
- use Constant for  images etc which are reused .  ( Add hardcoded values to the constant file ). 
- Register TMDB API & create an app & get access token . 
- Get Data from TMDB Now playing Movie Lists  API . 
- Custom Hook for now Playing Movies . 
- Create movieSlice . 
- Update store with movies data . 
- Planning for MainContainer & secondary container . 
- Fetch Data for Trailer Video 
- Update Store with Trailer video data . 
- Embedded the Youtube video and make it autplay and mute . 
- Tailwind Classes . 
- Build Secondary Component . 
- Build Movie List 
- Build Movie Card 
- TMDB Image CDN URL 
- usePopularMovies Custom hook, and similary for popular movies, top rated and upComing Movies . 
- GPT Search Page
- GPT Search Bar 
- (***)(BONUS) Multi-language Feature in our App  
- Now, adding GPT Feature to our App  .  




* For the redux and dispatch function, we will use Firebase utility function called  onAuth State  Change . 


# rafce -> react arrow function component export . 


# Features 
- Login / SignUp Page 
  - Once u r loggedIn, redirect to browse space . 
- Browse space ( only comes after Authentication ) .  
    - Header 
    - Main Movie 
       - Tailer in the  Background 
	- Title & Description 
	- MovieSuggestions 
		- MovieLists * N ( which is vertically Scrollable ) . 

   - NetflixGpt 
        - Search Bar 
	- Movie Suggestions 


# For authentication and forms 
   - Lets use Formik library (formik.org)