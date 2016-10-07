module.exports = {
	name: <%= name %>, <% if (mongo === 'yes') { %>
  database: {
    host: '',
    port: '27017',
    username: '',
    password: ''
  }, <% } %> <% if (server === 'microsoft bot connector') { %>
  microsoft: {
    appId: '',
    appSecret: '',
  }, <% } %> <% if (server === 'kik') { %>
  kik: {
    username: '',
    apiKey: '',
    baseUrl: '',
  }, <% } %> <% if (server === 'messenger') { %>
  messenger: {
    pageAccessToken: '',
    validationToken: '',
  }, <% } %> <% if (server === 'slack') { %>
  slack: {
    token: '',
  },
     <% } %>


}
