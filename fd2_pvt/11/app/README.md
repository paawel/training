0. react-detector
1. npm i -g create-react-app
2. create-react-app --version
3. create-react-app my-sample-app
4. cd my-sample-app
5. npm start
6. create file User.js inside src
7. import User from './User'; inside App.js
8. <User name={name} age={22} /> inside App, name as a variable before return


1.
Видит .test на любой вложенности

it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
});

function sum(a,b) {
    return a+b;
}


2.
import React from 'react';

const strong = {
    color: "red"
};

function User(props) {
    return (
        <div>
            <h1>Hello <strong style={strong}>world!</strong></h1>
            <h2>{props.name}</h2>
            <h2>{props.age}</h2>
            <button onClick={clickMe}>Click</button>
        </div>
    );
}

function clickMe() {
    alert(1);
}

export default User;




