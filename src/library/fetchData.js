useEffect(() => {
    const fetchPromise = fetch('../../../assets/data/properties.json', {
        method: 'GET'
    });

    fetchPromise
        .then(response => {
            return response.json();
        }, err => console.log(err))
        .then(people => {
            console.log(people)
        })
        .catch(err => console.log(err))

    //     const names = people.map(person => person.name).join("\n");
    // let promise = new Promise( (resolve, reject) => {

    //     let name = 'Paul'
      
    //     if (name === 'Paul') {
    //      resolve("Promise resolved successfully");
    //     }
    //     else {
    //      reject(Error("Promise rejected"));
    //     }
    //    });
      
    //    let obj = {newName: ''};
      
    //    promise.then( result => {
    //    console.log("res", result)
    //    }, function(error) {
    //     console.log({name: error});
    //    });
    props.initPropertiesJSON(properties);
    setScreenMaxWidth(size.width);
}, [size]);


/**
* Actions
*/

import * as Actions from "../actions";

export function fetchProducts() {
    let properties = require('../assets/data/properties.json');

    return dispatch => {
      dispatch(Actions.fetchPropertiesBegin());
      return fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(handleErrors)
        .then(res => {
            // console.log(res)
            // return res.json();
            return properties;
        })
        .then(json => {
          dispatch(Actions.fetchPropertiesSuccess(json));
          return json;
        })
        .catch(error => dispatch(Actions.fetchPropertiesFailur(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
}


