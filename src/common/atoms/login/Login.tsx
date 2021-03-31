import { Button } from '../button/Button';
import { signInWithRedirect, signOut } from '../../functions/firebase/FirebaseAuth';
import React, { useCallback } from 'react';

const _LoginButton = () => <Button text="sign in" click={() => signInWithRedirect()} size='small'/>;
export const Login = () => useCallback(() => _LoginButton(), []);

const _Loading = () => <div>now loading...</div>;
export const Loading = () => useCallback(() => _Loading(), []);

const _LogoutButton = () => <Button text="sign out" click={signOut} size='small'/>;
export const Logout = () => useCallback(() => _LogoutButton(), []);
