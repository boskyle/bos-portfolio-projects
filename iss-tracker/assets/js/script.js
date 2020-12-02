// global so it renitializes (leaflet)
var my_map;

$(document).ready(function () {
    // make population hidden at first
    $('#population_show > span').hide();

    /* function that fetches geonames api for canada, get province/terit. lat and long 
        and pass it as an parameter to the long lat argument of leaflet map api
    */
fetch_canada();


});



// pass coordinate from ajax request based on valid user input

const build_map = (long, lat) => {

  

   if(my_map != undefined) my_map.remove();

    my_map = L.map('map_id');
    my_map.setView([parseFloat(long),parseFloat(lat)], 8);


    
    var marker = L.marker([parseFloat(long),parseFloat(lat)]).addTo(my_map);

    // add tile layer
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYm9za3lsZSIsImEiOiJja2k0eHExeW4wMGtoMnFtb3V4MjV4ZmMxIn0.uvMbmJ3_uKRxEXN9rfaE6w'
}).addTo(my_map);


   






}




const fetch_canada = () => {

    // local array to store json property 'name'
   
    let userInput;
    let provObj;
    var res_name;



   
    
    $.ajax({
        type: "GET",
        url: "http://api.geonames.org/searchJSON?username=boskyle&countryBias=ISO-3166-2&country=ca&featureCode=ADM1",
        data: "data",
        dataType: "json",
        success: function (response) {
            
            // iteration of response (JSON) length  
            for (let i = 0;i<Object.keys(response.geonames).length;i++) {
               provObj=response.geonames;
        }

            // destructure
            // get only the 'name' property  of an array
            res_name = provObj.map(a => a.name);
            $('#province_input').autocomplete({source: res_name});                                    
        }
    });

   

    $('#search_btn').click(function (e) { 
        e.preventDefault();
        userInput=$('#province_input').val();      

        if ($.inArray(userInput,res_name) === -1) {
            alert('Enter a valid province/territory.');
            userInput=$('#province_input').val('');      
        } else 
            {
                // build_map function goes here
                // based on map a.name i want to get
            //    console.log(provObj.map(a => a.name));

                // iterate
               
               for (let i=0;i<provObj.length;i++)   {
                
                if(userInput === provObj[i].name) {
                    console.log(provObj[i].lat+provObj[i].lng);
                    $('#population_show > span').show();
                    $('.population').empty();
                    $('.population').append(provObj[i].population);
                    build_map(provObj[i].lat,provObj[i].lng);
                    break;
                }

               }
         


            }
    });
        // doesnt exist (word)
        
   
}