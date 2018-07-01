import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

var options = {
      headers:
         {'Content-Type': 'application/json',
        'user-key':'5987d14f6c9ef27f78f42cc9aeef103b'
          }
      };

Meteor.methods({
  'Search_Categories'(query) {
    var result = HTTP.call("GET","https://developers.zomato.com/api/v2.1/"+query,options);
    console.log(result);
    return result.data.categories;
  },
  'Search_Cities'(query) {
    var cities = HTTP.call('GET',"https://developers.zomato.com/api/v2.1/cities?q="+query,options);
    return cities.data.location_suggestions;
  },
  'Search_Collections'(query) {
    var collections = HTTP.call("GET","https://developers.zomato.com/api/v2.1/collections?city_id="+query,options);
    return collections.data.collections;
  },
  'Search_Cuisines'(query) {
    var cuisines = HTTP.call("GET","https://developers.zomato.com/api/v2.1/cuisines?city_id="+query,options);
    return cuisines;
  },
  'Search_Establishments'(query) {
    var establishments = HTTP.call("GET","https://developers.zomato.com/api/v2.1/establishments?city_id="+query,options);
    return establishments.data.establishments;
  },
  'Obtain_Location'(query) {
    var location = HTTP.call("GET","https://developers.zomato.com/api/v2.1/locations?query="+query,options);
    return location.data.location_suggestions;
  },
  'Location_Details'(entity_id, entity_type) {
    var location_details = HTTP.call("GET","https://developers.zomato.com/api/v2.1/location_details?entity_id="+entity_id+"&entity_type="+entity_type, options);
    return location_details.data;
  },
  'Restaurant_Details'(res_id) {
    var restaurant_details = HTTP.call("GET","https://developers.zomato.com/api/v2.1/restaurant?res_id="+res_id, options);
    return restaurant_details.data;
  },
  'Review_Details'(res_id) {
    var review_details = HTTP.call("GET","https://developers.zomato.com/api/v2.1/reviews?res_id="+res_id+"&start=1&count=5"+res_id, options);
    return review_details.data.user_reviews;
  },
  'Main_Search_Details'() {
    var main_search_details = HTTP.call("GET","https://developers.zomato.com/api/v2.1/search?entity_id=7&entity_type=city&q=italian&start=10&count=20", options);
    return main_search_details.data;
  },
});













/// checkout daily menu and geo locationa api after
