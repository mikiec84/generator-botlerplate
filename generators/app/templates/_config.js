module.exports = {
  recastToken: '',<% if (mongo === 'yes') { %>
  database: {
    name: 'testbot',
    hostname: 'localhost',
    port: '27017',
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
