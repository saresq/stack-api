## Stack API - Santa AQ

#### Running the project

To run the project, clone the repo and enter the root folder.
Once inside, exec
    

    npm install && node index.js

#### API Endpoints - All GET methods

**Get actual stack** localhost:4000/api/stack/   
**Push new number** localhost:4000/api/stack/push/:number   
**Pop last number** localhost:4000/api/stack/pop   
**Get max number of the stack** localhost:4000/api/getmax   

---

##### Possible improvements:

- Make api REST and change the endpoints to GET - POST - DELETE (They are all GET at the moment, for testing it directly on the browser)
- Add a validator to check if data is number or not - Added on last commit ✅
- Make a frontend to control all app
- Make a swagger to list all API Endpoints
- Persist data on a database for subsequent runnings
#### Made with ♥ by Santa AQ
