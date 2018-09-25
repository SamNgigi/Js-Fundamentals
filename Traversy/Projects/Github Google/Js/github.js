// Importing the Client Secret/ Api keys
import {
  environment,
} from '../environment/env.js';

class GitHub {
  constructor() {
    this.users_url = environment.GITHUB_PROFILE_URL;
    this.repos_url = environment.GITHUB_REPO_SEARCH_URL;
    this.topics_url = environment.GITHUB_TOPIC_SEARCH_URL;
    this.token = environment.GITHUB_ACCESS_TOKEN;
    this.language = "go";
    this.count = 5;
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

    const user_repos = await fetch(
      `${this.users_url}/${user}/repos?per_page=${this.count}&sort=stars&order=desc&access_token=${this.token}`
    )

    const user_data = await user_response.json();
    const user_repo_data = await user_repos.json()

    return {
      profile: user_data,
      repos: user_repo_data
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
    const repo_response = await fetch(
      `${this.repos_url}=${project}+language:${this.language}&sort=stars&order=asc?per_page=${this.count}&access_token=${this.token}`
    );

    const repo_data = await repo_response.json();

    return {
      items: repo_data
    }
  }

  async getTopics(topics) {
    const topic_response = await fetch(
      `${this.topics_url}=${topics}+is:featured&per_page${this.count}?access_token=${this.token}`, {
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