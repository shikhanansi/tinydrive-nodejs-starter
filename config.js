// Replace this with your api key from the "API Key Manager" at the tiny.cloud account page
exports.apiKey = '0u7ewodzfullt54r03xqrer202glzi0768zyetkrkoa42nag';

// Replace the contents of the private.key file with the one from the "JWT Key Manager" at the tiny.cloud account page
exports.privateKeyFile = './private.key';

// This is the fake database that the login authenticates against
exports.users = [
  { username: 'johndoe', password: 'password', fullname: 'John Doe' },
  { username: 'janedoe', password: 'password', fullname: 'Jane Doe' }
];

// If this is enabled the root of Tiny Drive will be within a directory named as the user login
exports.scopeUser = false;
