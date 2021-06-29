<template>
  <div>
    <PlacesToStaySpecialComponent name="Congress Hall" address="200 Congress Place, Cape May, NJ 08204" description="The dream wedding spot of all of Christina's cousins, Congress Hall is where the ceremony, coctail hour, and reception will be occuring! Stay nice and close in this luxury hotel which began life in 1816 as a simple boarding house for summer visitors to one of America's earliest seaside resorts." descriptionExtra="Note: If you decide to book here, use the code 'de Lescinskis'. Be sure to follow the capitalization and spacing!" url="https://www.caperesorts.com/congress-hall" filename="congressHall.jpg"/>
    <PlacesToStayComponent name="Beach Shack" address="205 Beach Ave, Cape May, NJ 08204" description="Just steps from the beach and with one of the best beach restaurants/bars in Cape May, the Beach Shack is a great option. Stylish and relaxed, the Beach Shack is Cape May's fresh and fun alternative for beach lovers who want a retreat the whole family can enjoy together." url="https://www.caperesorts.com/beach-shack" filename="beachShack.jpg"/>
    <PlacesToStayComponent name="Sandpiper" address="11 Beach Ave, Cape May, NJ 08204" description="The Sandpiper Beach Club is the perfect solution for travelers who want a little more space to stretch out and savor the seashore. Each of the Sandpiper's 51 suites boast full kitchens, spacious living rooms, separate bedrooms and private balconies, many with stunning views of the ocean. The Sandpiper is the ideal blend of contemporary style, convenience and beach house charm—with all the amenities of a full-scale resort." url="https://www.caperesorts.com/sandpiper" filename="sandpiper.jpg"/>
    <PlacesToStayComponent name="Summer Station" address="217 Beach Ave, Cape May, NJ 08204" description="While Cape May is known for its cuisine, Summer Station offers the convenience of a full kitchen. Stay close to the action of the wedding and the salt of the shore, but be able to go back to your room in order to return to standard creature comforts of the home. Sumer Station has an imposing facade that blends with the stately Victorian homes, and accommodations that offer a gracious vacation lifestyle." url="https://summerstationhotel.com/" filename="summerStation.png"/>
    <PlacesToStayComponent name="Book a Home in Cape May!" address="Cape May, NJ 08204" description="Feel like turning this wedding weekend into a full on vacation? It is very common for groups to rent one of the multiple beach houses in Cape May, a tradition Christina's family has taken part in for over sixty summers! There are a myriad of homes to choose from to fit whatever need you and your group require. Make the most out of your trip to Cape May by shacking up with a bunch of friends!" url="https://www.capemayrentals.com/" filename="rentAHouse.jpg" />
    <div class="places-to-stay-footnote">Obviously, multiple other options are available for lodging both inside and outside of Cape May! Feel free to explore options that work best for you. However, we wanted to provide you with some easy-to-find, closeby lodging. Either way, we look forward to seeing you at the wedding itself!</div>
  </div>
</template>

<script>
import PlacesToStayComponent from "@/components/PlacesToStayComponent.vue";
import PlacesToStaySpecialComponent from "@/components/PlacesToStaySpecialComponent.vue";
export default {
  name: "PlacesToStay",
  components: {
    PlacesToStayComponent,
    PlacesToStaySpecialComponent
  }
};
</script>

<style>
  .places-to-stay-footnote {
    font-size: 12px;
    font-style: italic;
    padding: 0 30% 10px;
  }
</style>
