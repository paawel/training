1. npm i -g create-react-app
2. create-react-app --version
3. create-react-app my-sample-app
4. cd my-sample-app
5. npm start
6. create file User.js inside src
7. import User from './User'; inside App.js
8. <User></User> inside App


import React from 'react';

function User() {
	return (
		<h1>Hello world!</h1>
	)
}

export default User;
