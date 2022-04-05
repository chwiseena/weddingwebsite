<template>
  <div class="schedule">
      <div class="schedule-date">Sunday, April 3rd to Thursday, April 7th</div>
      <ScheduleComponent timeHeader='24/7' locationHeader='Cape May' scheduleInformation='Tom and Christina are arriving in Cape May a bit earlier to handle last-minute wedding needs. If you arrive early, feel free to reach out to see the soon-to-be newlyweds!' additionalInformation='' />
      <div class="schedule-date">Friday, April 8th</div>
      <ScheduleComponent timeHeader='10:00 AM' locationHeader='Ocean entrance in front of Congress Hall' scheduleInformation='Join Christina in a polar plunge!' additionalInformation='' />
      <ScheduleComponent timeHeader='9:00 PM' locationHeader='Carneys' scheduleInformation='Welcome Drinks!' additionalInformation='' />
      <div class="schedule-date">Saturday, April 9th</div>
      <ScheduleComponent timeHeader='4:30 PM' locationHeader='Congress Hall Front Lawn' scheduleInformation='Ceremony' additionalInformation='' />
      <ScheduleComponent timeHeader='5:00 PM' locationHeader='Congress Hall Front Lawn' scheduleInformation='Cocktail Hour' additionalInformation='- Note that the cocktail hour will be outside, so please prepare for potentially chilly weather!' />
      <ScheduleComponent timeHeader='6:00 PM' locationHeader='Congress Hall Ballroom' scheduleInformation='Reception' additionalInformation='' />
      <ScheduleComponent timeHeader='10:00 PM' locationHeader='Congress Hall Boiler Room' scheduleInformation='After Party!' additionalInformation='' />
  </div>
</template>

<script>
import ScheduleComponent from "@/components/ScheduleComponent.vue";

export default {
  name: "Schedule",
  components: {
    ScheduleComponent
  }
};
</script>

<style>
.schedule {
  background-color:rgba(255, 255, 255, 0.80);
  height: 100%;
}

.schedule-date {
  font-size: 28px;
  text-align: left;
  padding: 10px 20% 5px;
}

.schedule-time-header {
  font-size: 16px;
  text-align: left;
  padding: 0px 22%;
  font-style: italic;
}

.schedule-location-header {
  font-size: 16px;
  text-align: left;
  padding: 0px 22%;
  font-style: italic;
}

.schedule-information {
  font-size: 20px;
  text-align: left;
  padding: 0px 25%;
}

.schedule-additional-information {
  font-size: 14px;
  font-style: italic;
  text-align: left;
  padding: 0px 25% 10px 27%;
}

</style>