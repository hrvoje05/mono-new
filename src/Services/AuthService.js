class AuthService {
  async loginUser(username, password) {
    let loginUrl = "https://api.baasic.com/v1/vehicles-031/login";
    let response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=password&username=h.javorovic&password=Monobaasic!`,
    });

    return localStorage.setItem(
      "userToken",
      await response.json().then((res) => res.access_token)
    );
  }
}

export default AuthService;
