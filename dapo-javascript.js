<script>
  class ApiClient {
    constructor(baseURL) {
      this.baseURL = baseURL;
      this.token = null;
    }
  
    setToken(token) {
      this.token = token;
    }
  
    async request(endpoint, options = {}) {
      const headers = {
        ...options.headers,
        'Authorization': `Bearer ${this.token}`,
      };
  
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers,
      });
  
      return response.json();
    }
  }

  const client = new ApiClient('https://api.example.com');
  client.setToken('your-bearer-token');
  
  // Example API request
  client.request('/data', {
    method: 'GET',
  }).then(data => console.log(data));
</script>
