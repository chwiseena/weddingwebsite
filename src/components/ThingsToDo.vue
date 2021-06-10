<template>
  <div>
    <LocationComponent name="Sunset Beach" address="502 Sunset Blvd, Cape May, NJ 08204" description="If you like sunsets, there's no better spot than Sunset Beach. Featuring a mini-golf course, gift shops featuring Cape May Diamonds, and the remains of the USS Atlantus, Sunset Beach also has a lot to see other than the beautiful view of the sun sinking over the Delaware Bay. Christina once also saw a truck drive into the ocean accidentally here due to it getting stuck before the tide came in!" filename="sunsetBeach.jpg"/>
    <LocationComponent name="Washington Street Mall" address="401 Washington St, Cape May, NJ 08204" description="Washington Street Mall is three blocks of interesting and unique shops on a street completely closed to both car and bicycle traffic. Whether it be for jewelery, art, books, clothing, souvineers, or candy, you will be able to find something you're looking for here! Additionally, many classic Cape May restaurants live in this open-air mall, so enjoy some shopping after dining. Christina's favorite two stores are the Whale's Tale and A Place on Earth!" filename="washingtonStreetMall.jpg"/>
    <LocationComponent name="Cape May Lighthouse" address="215 Light House Ave, Cape May, NJ 08204" description="Climb the 199 steps up the original, cast iron spiral stairway to the top of the 1859 Cape May Lighthouse and see a staggering view of the Delaware Bay and Atlantic Ocean, the surrounding nature trails of Cape May Point State Park, and Cape May Point Borough. Interpretive panels on the grounds, at the base and on the climb tell stories of Lighthouse Keepers, the surrounding area, and how the lighthouse functioned historically and today." filename="lighthouse.png"/>
    <LocationComponent name="Cape May Brewing Company" address="1288 Hornet Rd, West Cape May, NJ 08204" description="Located by the Cape May Airport a little bit away from the ocean, Cape May Brewing Company puts New Jersey on the map as a craft beer state. With its own beer garden with cornhole and giant jenga and multiple beers both seasonal and exclusive to the brewery, Cape May Brewing Company is a great place to get out of the sun for a bit and enjoy a brew or taste a bunch with a flight. Our favorite is the Bog Cranberry Shandy!" filename="brewery.jpg"/>
    <LocationComponent name="Cape May Winery" address="711 Townbank Road, Cape May, NJ 08204" description="If you're looking to imbibe but are not the beer type, Cape May Winery might be more your speed. Feel free to stroll through the vineyard and farmland, partake in a wine tasting session, or enjoy tapas prepared from the vegetables grown onsite with a glass of wine overlooking the beautiful scenery. Since she has been old enough to drink, Christina has come here with her cousins, leaving the husbands and kids behind to enjoy a glass, kick back, and relax!" filename="winery.png"/>
    <LocationComponent name="Historic Cape May Carriage Tours" address="315 Ocean St, Cape May, NJ 08204" description="Enjoy a private horse-drawn carriage ride through Cape May's historic district. Each takes a different route, with different stories and historic information provided by your carriage driver. While Christina is petrified of horses, it's a romantic, historical journey and a great way to see the historic side of Cape May!" filename="horseTour.jpg"/>
    <LocationComponent name="Wildwood Boardwalk" address="3500 Boardwalk, Wildwood, NJ 08260" description="'Watch the Tramcar, please!' If you're looking for a more standard New Jersey boardwalk experience, head one town over to Wildwood. Experience various arcade games, boardwalk snacks, and amusement park rides spanning three amusement piers over 2.5 miles! Thomas has spent a nonzero amount of summers at ultimate frisbee tournaments on the beach that overlooks the boardwalk and can recite the call of the tramcars as well as any local!" filename="wildwoodBoardwalk.jpg"/>
  </div>
</template>

<script>
import LocationComponent from "@/components/LocationComponent.vue";
export default {
  name: "ThingsToDo",
  components: {
    LocationComponent
  }
};
</script>
