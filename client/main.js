import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';



/*Meteor.call('Search_Categories','categories',(err,result) => {
    if(err)
    {
      console.log(err);
    }
    else {
      console.log('result');
      Session.set('categories',result);
        }
  });

  Template.categories.helpers({
    categories(){
      return Session.get('categories');
      }
  });



Template.cities.helpers({
  cities(){
    return Session.get('cities');
    }
});

Template.collections.events({
  'submit #city_form'(event,collections) {
    event.preventDefault();
    var City = event.target.city_name.value;
    Session.set('city',City);
    city = Session.get('city');
    Meteor.call('Search_Cities',city,(err,result) => {
        if(err)
        {
          console.log(err);
        }
        else {
          Session.set('city_id',result[0].id);
          city_id =Session.get('city_id');
          Meteor.call('Search_Collections',city_id,(err,result) => {
            if(err)
            {
              console.log(err);
            }
            else {
              Session.set('collections',result);
            }
          });
          }
      });

  }
});*/



/*


    Meteor.call('Search_Establishments',7,(err,result) => {
        if(err)
        {
          console.log(err);
        }
        else {
        Session.set('establishments',result);
            }
      });


      Template.establishments.helpers({
        establishments(){
          return Session.get('establishments');
          }
      });*/
      Tracker.autorun(function(){ //changes the template whenever daara changes
      Template.location_details.events({
        'submit #location_form'(event,location_details) {     //on submitting the form we get teh derails of location ffromm user innput and obtain entity_id entity_type for location informarion and city_id for collection information
          event.preventDefault();
          var location = event.target.location_name.value;    //location_name is the name
          console.log(location);
          Session.set('location',location);                   //Only Session can do this
          location_name = Session.get('location');
          console.log(location_name);
          Meteor.call('Obtain_Location',location_name,(err,result) => {
          if(err)
          {
            console.log(err);
          }
          else {

          Session.set('entity_id',result[0].entity_id);       //the first element of array/Change it
          Session.set('entity_type',result[0].entity_type);
          Session.set('collection_city_id',result[0].city_id);
          id = Session.get('entity_id');
          type = Session.get('entity_type');
          city_id = Session.get('collection_city_id');
          console.log(id);
          console.log(city_id);
          Meteor.call('Location_Details',id,type,(err,result) => {  //calling methods in server
              if(err)
              {
                console.log(err);
              }
              else {

              Session.set('location_details',result);
                  }
            });
                  Meteor.call('Search_Collections',city_id,(err,result) => {
                    if(err)
                    {
                      console.log(err);
                    }
                    else {
                      console.log(result);
                      Session.set('collections',result);
                    }
        });
      }
});
}
});
});
        Template.location_details.helpers({  //only helpers can send data to templates not events and we have to define different functions inside the helper
          location_details(){
            return Session.get('location_details'); //return places the data where the template is located and we manipulate the data inside teh tepmlaye
            }
        });


        Template.collections.helpers({
          collections(){
            return Session.get('collections');
            }
        });

        Meteor.call('Search_Cuisines',city_id,(err,result) => {
            if(err)
            {
              console.log(err);
            }
            else {
              console.log(result);
              console.log(result.data);
              console.log(result.data.cuisines);
              console.log(result.data.cuisines[0].cuisine);//no need;
              console.log(result.data.cuisines[0].cuisine.cuisine_name);
            Session.set('cuisines',result.data.cuisines);
                }
          });


          Template.cuisines.helpers({
            cuisines(){
              return Session.get('cuisines');
              }
          });
/*
        Template.location.helpers({
          location(){
            return Session.get('location');
            }
        });
*/




/*
          Meteor.call('Restaurant_Details',16774318,(err,result) => {
              if(err)
              {
                console.log(err);
              }
              else {
              Session.set('restaurant_details',result);
                  }
            });


            Template.restaurant_details.helpers({
              restaurant_details(){
                return Session.get('restaurant_details');
                }
            });

            Meteor.call('Review_Details',18423075,(err,result) => {
                if(err)
                {
                  console.log(err);
                }
                else {
                Session.set('review_details',result);
                    }
              });


              Template.review_details.helpers({
                review_details(){
                  return Session.get('review_details');
                  }
              });

              Meteor.call('Main_Search_Details',18423075,(err,result) => {
                  if(err)
                  {
                    console.log(err);
                  }
                  else {
                  console.log(result);
                  Session.set('main_search_details',result);
                      }
                });


                Template.main_search_details.helpers({
                  main_search_details(){
                    return Session.get('main_search_details');
                    }
                });*/

//this is how you get data result.data.categories[0].categories.id for categories.
