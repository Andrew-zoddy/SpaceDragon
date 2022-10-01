This App was created using create-react-app.
Lin to app : https://coruscating-sprinkles-484913.netlify.app/
The app is a single-page app about spaceships made by SpaceX.

Used packages : antd design Library, axios, Redux (+thunk), sass, jwt-decode


Used APIs:  
            https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f - Dragon v1 data
            https://api.spacexdata.com/v4/dragons - all dragons data
            https://fakestoreapi.com/docs - User data and login implementation

Unfortunately, fakeStoreAPI doesnt give an opportunity to update/patch data, so none of the data can be changed. 
But the logic is written so as if it works.


To run the app on localhost please type : “npm run start”
To run tests : "npm run test"

As for tests - there are no any implemented - 

For the deploy option - GitHub repository is used,
after each push to master/main branch -
the automatic deployment to Netlify is being made right after “tests” are done.
In .github folder - there’s a workflow folder - with yml file,
in which settings for Github Actions are placed.
After that -  deployment process starts.
In such way CI/CD is implemented


	

