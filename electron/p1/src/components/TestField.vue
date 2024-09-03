<template>
    <form>
        <fieldset>
          <legend>Feedback</legend>
          <div>
            <label for="fname">First name: </label>
            <input id="fname" name="fname" type="text" required />
          </div>
          <div>
            <label for="lname">Last name: </label>
            <input id="lname" name="lname" type="text" required />
          </div>
          <div>
            <label for="email">
              Email address (include if you want a response):
            </label>
            <input id="email" name="email" type="email" />
          </div>
          <div><button>{{buttonLabel}}</button></div>
        </fieldset>
      </form>
</template>
<script>
import { testString1 } from '../modules/myModule1.js'
export default {
  data() {
    return {
      buttonLabel: testString1()
    };
  }
};
</script>