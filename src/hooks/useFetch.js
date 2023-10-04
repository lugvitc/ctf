export default function useFetch() {
  // const apiURL = 'https://backmagic.herokuapp.com/api';
  // const apiURL = 'https://dolphin-app-653c7.ondigitalocean.app/api';
  // const apiURL = 'https://backmagic-jirrg.ondigitalocean.app/api';
  // const apiURL = 'http://127.0.0.1:5000/api';
  // const apiURL = 'https://king-prawn-app-o4bg6.ondigitalocean.app/api'
  const apiURL = "http://backend.lugvitc.org/api";

  const api = (path, init) => fetch(apiURL + path, init);

  const apiPost = (path, object) =>
    api(path, {
      method: "POST",
      headers: {
        ContentType: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(object),
    });

  const apiAsTeam = async (path) => {
    const res = api(path, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("access-token")}`,
        "Access-Control-Allow-Origin": "*",
      },
    });
    const response = res.clone();
    if (res.status !== 401) {
      const data = await res.json();
      if (data && data.access_token)
        window.localStorage.setItem("access-token", data.access_token);
    } else {
      window.localStorage.setItem("access-token", "");
    }
    return response;
  };

  const apiPostAsTeam = async (path, object) => {
    const res = await api(path, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("access-token")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(object),
    });
    const response = res.clone();
    if (res.ok) {
      const data = await res.json();
      if (data && data.access_token)
        window.localStorage.setItem("access-token", data.access_token);
    } else {
      window.localStorage.setItem("access-token", "");
    }
    return response;
  };

  const apiPostGetJsonAsTeam = async (path, object) => {
    const res = await api(path, {
      method: object ? "POST" : "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("access-token")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: object ? JSON.stringify(object) : undefined,
    });
    if (res.ok) {
      const data = await res.json();
      const ans = data;
      if (data && data.access_token) {
        window.localStorage.setItem("access-token", data.access_token);
        delete ans["access_token"];
      }
      return ans;
    } else {
      window.localStorage.setItem("access-token", "");
    }
  };

  return {
    api,
    apiPost,
    apiAsTeam,
    apiPostAsTeam,
    apiPostGetJsonAsTeam,
  };
}
