<template>
  <f7-page
    :ref="pageRef"
    :ptr="true"
    @page:init="onPageInit"
    @ptr:refresh="onRefresh">

    <poliwag-navbar 
      title="Times"
      back-link="返回">
    </poliwag-navbar>

    <poliwag-list 
      :data="pageData"
      @swipeout-button:click="savePocket">
    </poliwag-list>

  </f7-page>
</template>

<script>
import mixin from "@/mixin";

export default {
  mixins: [mixin],

  data() {
    return {
      region: "times"
    };
  }
};
</script>
