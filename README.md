This App was created using create-react-app.
It's  a single-page app about spaceships made by SpaceX.
Link to app : https://dragon-one-react.netlify.app


Used packages : antd design Library, axios, Redux (+thunk), sass, and other standard for react-app.


Used APIs:  
            https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f - Dragon v1 data
            https://api.spacexdata.com/v4/dragons - all dragons data
            https://fakestoreapi.com/docs - User data and login implementation

Unfortunately, fakeStoreAPI doesn't give an opportunity to update/patch data, so none of the data can be changed. 
But the logic is written so as if it works.


To run the app on localhost please type : “npm run start”
To run tests : "npm run test"

As for tests - there are no any implemented - 

For the deployment option - GitHub repository is used, and Netlify services.
After each push to master/main branch -
the automatic deployment to Netlify is being made right after “tests” on gitHub "Actions" are done.
In .GitHub folder - there’s a workflow folder - with yml file,
in which settings for Github Actions are placed.
After that -  deployment process starts.
In such way CI/CD is implemented


	

