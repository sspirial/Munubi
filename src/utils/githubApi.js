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
};
