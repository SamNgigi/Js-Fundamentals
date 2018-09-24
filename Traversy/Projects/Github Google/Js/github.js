// Importing the Client Secret/ Api keys
import {
  environment,
  test
} from '../environment/env.js';

class GitHub {
  constructor() {
    this.client_id = environment.GITHUB_CLIENT_ID;
    this.client_secret = environment.GITHUB_CLIENT_SECRET;
  }

  async getUser(user) {
    const user_response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&${this.client_secret}`);

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