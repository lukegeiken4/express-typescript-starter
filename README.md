# Express API Typescript Starter
Starter project for an Express Typescript API.

Utilizes npm module Controlli for controller response and param handling.
Checkout the [Starter Controller](https://github.com/lukegeiken4/express-typescript-starter/blob/master/src/controllers/starter.controller.ts) to see Controlli in action.

## Sections
- [Technology](#tech)  
- [Steps to run](#run)  
- [API Layout](#layout)  
- [License](#license)  

### <a name="tech"></a> Technology
- Node
- Typescript
- Express
- RXJS
- Jasmine
- Karma
- [Controlli](https://www.npmjs.com/package/controlli)

### <a name="run"></a> Steps to run
Make sure Node and NPM are up to date
```sh
$ git clone https://github.com/lukegeiken4/express-typescript-starter.git
$ cd express-typescript-start
$ npm i
$ npm run start
```
Server is now running on http://localhost:3001


### <a name="layout"></a> API Layout
```
src
│   app.ts
│   server.ts
|
|    // Controllers handle API params logic and response handling.
|    // Controllers call internal services
|____controllers
|    |   base.controller.ts
|    |   starter.controller.ts
|
|    // Internal Services handle endpoint logic. They do NOT use other internal services.
|    // They use repositories for data CRUD opertaions
|____internal-services
|    |   starter.service.ts
|
|____models
|    |   errors.model.ts
|    |   profile.model.ts
|    |   review.model.ts
|
|    // Providers are generic classes to handle CRUD options for a specific data source
|    // (DB, Storage, Cache, etc...) 
|____providers
|    |   mongo.provider.ts
|
|    // Repositories handle database logic. They are more specific providers that handle a certain data source type
|    // Repository functions can be action specific to help with code readability.
|    // (Db Collections, Storage Queue/Director, etc...)
|____repositories
|    |   base.repository.ts
|    |   starter.repository.ts  // Ex: This to to do specific CRUD actions on the Profile collection in Mongo DB
|
|    // Sets up the endpoint routes and their controller.function() action
|____routes
|    |   index.ts
|
|    // Shared Services handle shared controller/internal-services logic.
|    // They do NOT use other internal-services or shared-services.
|    // They use repositories for data CRUD opertaions
|____shared-services
|    |   params.service.ts  // Ex: Handles shared controller params logic checks
```

## <a name="license"></a> License
 
The MIT License (MIT)

Copyright (c) 2019 Luke Geiken

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
