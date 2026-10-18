const BASE_URL = 'https://dummyjson.com';

export async function httpGet(path) {
  const response = await fetch(`${BASE_URL}${path}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}