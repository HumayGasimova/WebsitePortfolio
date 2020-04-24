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