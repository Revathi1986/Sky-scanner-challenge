// Javascript

// Mapping 
originurl = 'http://127.0.0.1:5000/visualization4'

d3.json(originurl).then(function(response) {
    
    origins = Object.values(response.origin_name);
    origins.forEach((origin) =>{
        console.log(origin);
    });

})