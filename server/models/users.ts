import { Schema, model } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    username: string;
    bio: string;
    description: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String },
    email: { type: String, required: true },
    username: { type: String, required: true },
    bio: { type: String },
    description: { type: String },
    password: { type: String }
}, {
    timestamps: true
});

const User = model<IUser>('User', userSchema);
export default User;