import User from "@models/User";

export const createUser = data => {
    return User.create(data);
}