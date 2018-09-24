// Importing the Client Secret/ Api keys
import {
  environment,
} from '../environment/env.js';

class GitHub {
  constructor() {
    this.users_url = environment.GITHUB_PROFILE_URL
    this.token = environment.GITHUB_ACCESS_TOKEN;
  }

  async getUser(user = "SamNgigi") {

    /*
      Setting default params pre-ES6

      * function foo(a, b) {
       * a = typeof a !== 'undefined' ? a : 42;
       * b = typeof b !== 'undefined' ? b : 'default_b';
        ...
      *}
    */

    const user_response = await fetch(`${this.users_url}/${user}?access_token=${this.token}`);

    const userData = await user_response.json();

    return {
      profile: userData
    }
    /*  
      *Note if we defined userData as profile e.g
      const profile = await user_response.json();
      *We would return an object profile e.g
      return {
        profile
      }
    */
  }
}

/*  
  We use export default when we are not exporting and defining a class at
  the same time
*/
export default GitHub;