// Importing the Client Secret/ Api keys
import {
  environment,
} from '../environment/env.js';

class GitHub {
  constructor() {
    this.users_url = environment.GITHUB_PROFILE_URL;
    this.repos_url = environment.GITHUB_SEARCH_REPOS_URL
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

    const user_response = await fetch(
      `${this.users_url}/${user}?access_token=${this.token}`);

    const user_data = await user_response.json();

    return {
      profile: user_data
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

  async getRepos(project) {
    const repo_response = await fetch(`${this.repos_url}=${project}+language:assembly&sort=stars&order=desc`);

    const repo_data = await repo_response.json();

    return {
      item: repo_data
    }
  }

  async getTopics(topics) {
    const topic_response = await fetch(
      `https://api.github.com/search/topics?q=ruby+is:featured`, {
        headers: {
          "Accept": "application/vnd.github.v3.text-match+json,application/vnd.github.mercy-preview"
        }
      });
    const topic_data = await topic_response.json()

    return {
      items: topic_data
    }
  }
}

/*  
  We use export default when we are not exporting and defining a class at
  the same time
*/
export default GitHub;