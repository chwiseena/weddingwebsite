<template>
  <div class="wedding-party">
    <h1>This is a wedding party page</h1>
    <div class="row">
      <div class="column">
        <WeddingPartyMember name="person 1" description="hello" filename="person.png"/>
      </div>
      <div class="column">
        <WeddingPartyMemberAlt name="person 1" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMemberAlt name="person 1" description="hello" filename="person.png"/>
      </div>
      <div class="column">
        <WeddingPartyMember name="person 1" description="hello" filename="person.png"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WeddingPartyMember from "@/components/WeddingPartyMember.vue";
import WeddingPartyMemberAlt from "@/components/WeddingPartyMemberAlt.vue";

export default {
  name: "Home",
  components: {
    WeddingPartyMember,
    WeddingPartyMemberAlt
  }
};
</script>

<style>
.column {
  float: left;
  width: 50%;
}

.row {
  border: 1px solid black;
}

.image-column {
  width: 25%;
}

.image-column-alt {
  width: 25%;
}

.text-column {
  width: 75%;
  text-align: right;
}

.text-column-alt {
  width: 75%;
  text-align: left;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.wedding-party-member-image {
  height: 125px;
  width: 125px;
}
</style>