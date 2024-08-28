import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

const url = 'https://api.example.com/user/1';

async function getUser() {
  const user = await fetchData<User>(url);
  console.log(user.name); // TypeScript знає, що user має властивість name
}

