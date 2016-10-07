module.exports = {
  recastToken: '',<% if (mongo === 'yes') { %>
  database: {
    name: '',
    hostname: '',
    port: '',
    username: '',
    password: ''
  },<% } %><% if (server === 'microsoft bot connector') { %>
  microsoft: {
    appId: '',
    appSecret: '',
  },<% } %> <% if (server === 'kik') { %>
  kik: {
    username: '',
    apiKey: '',
    baseUrl: '',
  },<% } %> <% if (server === 'messenger') { %>
  messenger: {
    pageAccessToken: '',
    validationToken: '',
  },<% } %> <% if (server === 'slack') { %>
  slack: {
    token: '',
  },<% } %>
}
