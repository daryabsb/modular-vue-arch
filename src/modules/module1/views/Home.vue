<template>
 <div>
   <div>This is module 1</div>
   <div> State Data: {{ data.stateData }}</div>
   <button @click="triggerAction">Trigger Action</button>
 </div>
</template>
<script>
import { computed } from 'vue';
import { useStore, useGetters } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const triggerAction=()=>{
      store.dispatch('module1/getData')
    }

    return {
      triggerAction,
      data: computed(()=>store.state.module1.module1Data)
    }
  },
};
</script>
