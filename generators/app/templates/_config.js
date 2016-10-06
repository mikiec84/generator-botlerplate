module.exports = {
	name: <%= name %>, <% if (mongo) { %>
  database: {
    host: '',
    port: '27017',
    username: '',
    password: ''
  }, <% } %> <% if (server === 'microsoft bot connector') { %>
  microsoft: {
    appId: '',
    appSecret: '',
  }, <% } %>
}
