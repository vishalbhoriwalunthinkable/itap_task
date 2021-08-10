import apiCall from "./apiRequests";

export function fetchUsers() {
  return apiCall({
    endpoint: "users",
  });
}
