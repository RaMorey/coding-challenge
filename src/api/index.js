import querystring from 'query-string';

export async function getApplication(id) {
  const response = await fetch(`http://localhost:3001/api/applications/${id}`);
  return await response.json();
}

export async function getApplications(params) {
  const response = await fetch(`http://localhost:3001/api/applications/?${querystring.stringify(params)}`);
  return await response.json();
}

//include try catch for error handling?