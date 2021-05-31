<template>
  <div class="wedding-party">
    <div class="row title-row">
      <div class="column">
        <div>Maid of Honor</div>
      </div>
      <div class="column">
        <div>Best Man</div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMOH name="Eimi Satoh" description="Eimi and Christina met as 8th graders in the hallowed halls of Harrington Park School. To Christina, Eimi was the new kid from Japan whom she had befriended. To Eimi, Christina's friendliness was plain confusing. But when Christina gave Eimi a most American homecoming by introducing her to the marvels of Rice-A-Roni, Eimi knew Christina was the real deal." descriptionTwo=" The complementarity of Christina's kindness and Eimi's frankness has sustained their friendship over the years. Eimi will tell you without hesitation that 'that color is not your color,' but she'll also be the first to celebrate when you find one that works. It's landed her in hot water at times, but that's exactly why she'll be working to keep all the important bits and pieces running smoothly as maid of honor. She will be taking occasional breaks from her duties to break it down on the dance floor." filename="Eimi.jpeg"/>
      </div>
      <div class="column">
        <WeddingPartyBM name="Nicholas Ferris" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row title-row">
      <div class="column">
        <div>Bridal Party</div>
      </div>
      <div class="column">
        <div>Grooms Party</div>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMember name="Aster Schmidt" description="hello" filename="person.png"/>
      </div>
      <div class="column">
        <WeddingPartyMemberAlt name="Andrew Hutcheson" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMemberAlt name="Cassie Smith" description="When Cassie started at ClearCompany right out of college a few years ago, she had no idea that her quirky desk neighbor, Chris, would become one her closest friends. Where Chris is open and friendly, Cassie is more reserved and quiet, so it took some time to really get to know each other. However, after many discussions of work gossip, sharing each other's weeby interests, and getting forced to attend a party at a mostly empty apartment, the friendship was set and there was no going back." filename="cassie.jpg"/>
      </div>
      <div class="column">
        <WeddingPartyMember name="Doug 'Tugs' Caristo" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMember name="Caitlyn Backer" description="hello" filename="person.png"/>
      </div>
      <div class="column">
        <WeddingPartyMemberAlt name="Evan 'JP' Gainza" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMemberAlt name="CJ Walker" description="hello" filename="person.png"/>
      </div>
      <div class="column">
        <WeddingPartyMember name="Jonathan 'Squeegee' Chisholm" description="Jonathan met both Christina and Tom during their time together at Lehigh University. An ultimate frisbee teammate of Tom's, he was lucky enough to be present when the lucky couple first met each other. A steadfast friend to each individually and self-proclaimed number one fan of them as a couple, Jonathan lived in Boston with Christina and Tom for their first three years in the city. He looks forward to meeting (and tossing one back with) more friends and family of the bride and groom." filename="jonathan.jpeg"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMember name="Danielle Schiraldi" description="hello" filename="person.png"/>
      </div>
      <div class="column">
        <WeddingPartyMemberAlt name="Mike Medica" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMemberAlt name="Jenn Bateman" description="hello" filename="person.png"/>
      </div>
      <div class="column">
        <WeddingPartyMember name="Myles Ferris" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMember name="Jessica Lloyd" description="hello" filename="person.png"/>
      </div>
      <div class="column">
        <WeddingPartyMemberAlt name="Neil Petersen" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMemberAlt name="Katherine Porfirio" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMember name="Seneca Rasey" description="hello" filename="person.png"/>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <WeddingPartyMemberAlt name="Trisha Arora" description="hello" filename="person.png"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WeddingPartyMember from "@/components/WeddingPartyMember.vue";
import WeddingPartyMemberAlt from "@/components/WeddingPartyMemberAlt.vue";
import WeddingPartyBM from "@/components/WeddingPartyBM.vue";
import WeddingPartyMOH from "@/components/WeddingPartyMOH.vue";

export default {
  name: "Home",
  components: {
    WeddingPartyMember,
    WeddingPartyMemberAlt,
    WeddingPartyBM,
    WeddingPartyMOH
  }
};
</script>

<style>

.title-row {
  font-size: 30px;
  font-style: italic;
  padding-top: 30px;
}
.column {
  float: left;
  width: 50%;
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

.wedding-party-member {
  padding: 10px;
}

.wedding-party-member-image {
  height: 125px;
  width: 125px;
  padding-top: 14px;
}

.wedding-party-member-name {
  font-size: 22px;
  padding-bottom: 4px;
}

.wedding-party-member-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
    padding-left: 15%;
}

.wedding-party-member-description-alt {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
    padding-right: 15%;
}
</style>