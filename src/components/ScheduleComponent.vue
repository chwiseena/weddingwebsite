<template>
<div class="schedule-day">
        <div class="schedule-time-header">{{timeHeader}}</div>
        <div class="schedule-location-header">{{locationHeader}}</div>
        <div class="schedule-information">{{scheduleInformation}}</div>
        <div class="schedule-additional-information">{{additionalInformation}}</div>
    </div>
</template>

<script>
export default {
  name: "Registry",
  props: {
    timeHeader: {
        type: String,
    },
    locationHeader: {
        type: String,
    },
    scheduleInformation: {
        type: String,
    },
    additionalInformation: {
        type: String
    }
  }
};
</script>