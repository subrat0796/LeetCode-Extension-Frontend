// const baseUrl = `http://localhost:5005/api/v1`;
const baseUrl = `https://leetcode-extension-backend.onrender.com/api/v1`;

// Auth Url
export const authUrl = `${baseUrl}/auth`;
export const signInUrl = `${authUrl}/sign-in`;
export const signUpUrl = `${authUrl}/sign-up`;

// User Url
export const userUrl = `${baseUrl}/user`;
export const getUserDetailsUrl = `${userUrl}/get-user-details`;

// Questions Url
export const questionUrl = `${baseUrl}/question`;
export const getAllQuestionsUrl = `${questionUrl}/get-questions`;
