<template>
  <div>
    <input type="checkbox" :id="id" v-bind:checked="isDone" />
    <label for="todo-item">{{ label }}</label>
  </div>
</template>
<script>
import uniqueId from 'lodash.uniqueid'

export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean }
  },
  data () {
    return {
      isDone: this.done,
      id: uniqueId('todo-')
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>
