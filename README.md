This App was created using create-react-app.
It's  a single-page app about spaceships made by SpaceX. <br/>
Link to app : https://dragon-one-react.netlify.app <br/>

To start the app on your machine: <br/>
1. Clone repo
2. Type npm i in Terminal
3. if there are outdated packages please type npm update
4. Start project using npm run start <br/>
<br/>
<br/>

Used packages : antd design Library, axios, Redux (+thunk), sass, and other standard for react-app.
<br/>

Used APIs:  
            https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f - Dragon v1 data
            https://api.spacexdata.com/v4/dragons - all dragons data
            https://fakestoreapi.com/docs - User data and login implementation
<br/>
Unfortunately, fakeStoreAPI doesn't give an opportunity to update/patch data, so none of the data can be changed. 
But the logic is written so as if it works.

<br/>
To run the app on localhost please type : “npm run start”
To run tests : "npm run test"
<br/>
As for tests - there are no any implemented - 
<br/>
For the deployment option - GitHub repository is used, and Netlify services.
After each push to master/main branch -
the automatic deployment to Netlify is being made right after “tests” on gitHub "Actions" are done.

<br/>

	

