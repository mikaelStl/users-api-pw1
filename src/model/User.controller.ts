import User from './User';

const users: User[] = [];

function addUser(user: User) {
    if (!findUser(user.getUsername())) {        
        users.push(user);

        return user.toJSON();
    }
}

function findUser(username: string): any {
    users.map((user) => {
        if (user.getUsername() === username) {
            return user;
        } else {
            return false;
        }
    });
}

function listUsers(): any {
    const usersJSON = users.map((user) => {
        user.toJSON();
    });

    return JSON.stringify(usersJSON);
}

export { addUser, findUser, listUsers }