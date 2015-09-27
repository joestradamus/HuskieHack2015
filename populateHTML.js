var sdk, census;
        $(document).ready(function() {
            sdk = new CitySDK();
            census = sdk.modules.census;
            var apiKey = "d4950eab815cf385f4dc9b31e72c05c5dcc126dc";
            census.enable(apiKey);
        });
        function submit() { 
            var request = {
                zip: 53233,         //change zip here based on user input
                variables: [
                    "income",
                    "population",
                    "employment_unemployed",
                    "median_gross_rent",
                ],
                /* Options for level:
                                     "tract"
                                     "state"
                                     "county"
                                     "blockGroup"
                                     "place"    */
                level: "blockGroup"
            }
            census.APIRequest(request, function(response) {
                var pop = response.data[0].population;
                var unemploy = response.data[0].employment_unemployed;
                var income = response.data[0].income;
                var rent = response.data[0].median_gross_rent;
                console.log(response);
                //console.log(rent);
            });
        }