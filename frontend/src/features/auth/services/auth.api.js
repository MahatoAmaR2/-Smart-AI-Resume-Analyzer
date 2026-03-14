import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

export async function register({ username, email, password }) {
  try {
    const response = await axiosInstance.post("/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
  }
}

export async function login({ email, password }) {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
  }
}

export async function logout() {
  try {
    const response = await axiosInstance.get("/logout");
    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
  }
}

export async function getMe() {
  try {
    const response = await axiosInstance.get("/get-me");
    return response.data;
  } catch (error) {
    console.error("GetMe error:", error);
  }
}
