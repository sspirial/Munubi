import axios from 'axios';

const GITHUB_USERNAME = 'sspirial'; // Replace with your GitHub username
const GITHUB_API_URL = 'https://api.github.com';

/**
 * Fetch repositories from the GitHub API.
 * @returns {Promise<Array>} List of repositories.
 */
export const fetchRepositories = async () => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`, {
      params: {
        sort: 'updated',
        per_page: 10, // Limit to 10 repositories
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

/**
 * Fetch user profile data from the GitHub API.
 * @returns {Promise<Object>} User profile data.
 */
export const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

// Utility to get top N projects by stars, forks, and recent update
export function getTopProjects(repos, count = 3) {
  return repos
    .map(repo => ({
      ...repo,
      // Score: prioritize stars, then forks, then recent update
      score: (repo.stargazers_count || 0) * 3 + (repo.forks_count || 0) * 2 + (new Date(repo.updated_at).getTime() / 1e12)
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}
