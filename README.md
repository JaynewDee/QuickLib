#   📘 *QuickLib* 📘

### Book Search Engine utilizing GoogleBooks API  
> ||QuickLib||
<br>

## *DESCRIPTION* 
> This application has been extensively refactored to dispense with fetch API-style routes and instead implement Apollo application-wide to interact with data using GraphQueryLanguage and resolvers.
> 
>>  
>> 

## *Table of Contents*
### (*Internal navigation links*)
- [Development](#development)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Credits](#credits)
- [About the Creator](#about-the-creator)
 
> *Note: The click-through links contained within the discussion sections may send you to an external site.*
___  
___
___
> - ### **DEVELOPMENT**
>>>  *What's under the hood?* <br>
>>>>  
>>>  - As an exercise in the implementation of Apollo client and Apollo server, this app is primarily meant to demonstrate understanding of and the ability of the developer to refactor another developer's codebase to use different, more current technologies.
>>>>  - The refactored app utilizes Apollo as state manager and authenticator of dataflow between server and client.  The traditional route-controller architecture of the previous version has been replaced with resolvers on the server end.  The client uses mutation queries defined by GraphQL on the front-end to serve dynamic data to the react-mediated UI.
___  
___
___  

> - ### **USAGE**
>>>  *Building a book list* <br>
>>>>  
>>>  - The user can create an account with QuickLib and login to begin an authenticated session.
>>>  - The user types search terms into the input field and upon submitting the search the page will populate with the top 10 search results.  
>>>  - The user clicks the save book button to save any book from the results, and the button deactivates to confirm that the book has been saved.
>>>  - At any point during an active session, the user clicks on the collapsed hamburger menu to reveal options.  Clicking on the "See Books" option authenticates and redirects the user to a page populated by all books the user has previously saved.
___  
___
___  
> - ### **SCREENSHOTS**
>>>  *Check it out* <br>
>>>>  
>>>  ![Book search application landing page](/assets/README-imgs/Home.png)  
___
>>>  ![Book search application login window](/assets/README-imgs/login.png)
___
>>>  ![Book search application signup window](/assets/README-imgs/signup.png)
___
>>>  ![Book search application search results](/assets/README-imgs/results.png)
___
>>>  ![Book search application saved books page](/assets/README-imgs/saved.png)
___  
___
___  
> - ### **LIVE**
>>>  *Deployed on Heroku* <br>
>>>>  [Link to deployed App](https://infinite-savannah-26277.herokuapp.com/)
___  
___
___  
> - ### **CREDITS**
>>>>  - SMU Web Dev Bootcamp for initial codebase
>>>   - The developers @ Apollo, React, Express, and Mongoose ... you are awesome.
>>> 
___  
___
___  
<br>

## About the Creator

> ### *Joshua Newell Diehl*
>>>  
>>> is a budding developer currently based in Ft Worth, Texas.  He enjoys coding, long romantic hours dead asleep, walks with his dog Margot, and *creepily* referring to himself in third person.  
>>>>  
>>>> Here are a few of his favorite technologies at the moment:
>>>> - [Redux](https://redux.js.org/)  
>>>> - [Apollo](https://www.apollographql.com/)  
>>>> - [React.js](https://reactjs.org/)  
>>>> - [MongoDB](https://www.mongodb.com/)  
>>>>  
>>  
>>> And here is where you can reach him [||](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR 'Javascript OR Operator') review the work he's been doing:   
>>>
>>> [GitHub](https://github.com/JaynewDee 'Repositories authored by Joshua Newell Diehl')  
>>> [Email](mailto:jdiehl2236@gmail.com)  
>>> [Portfolio](https://jaynewdee.github.io/Personal-Portfolio-Bluev2/)
>>>
>>>> ~ *Let's build something awesome.*

