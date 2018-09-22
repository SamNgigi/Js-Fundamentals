class CustomLibV3 {
  content(method, data) {
    return {
      method: `${method}`,
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    }
  }

  // GET request.
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
  // POST request.
  async post(url, data) {
    const response = await fetch(url, this.content("POST", data));
    const resData = await response.json();
    return resData;
  }
  // PUT request.
  async put(url, data) {
    const response = await fetch(url, this.content("PUT", data));
    const resData = await response.json();
    return resData;
  }
  // DELETE request.
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
    })
    const resData = await "Resource Deleted";
    return resData;
  }
}