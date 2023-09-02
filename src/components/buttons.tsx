"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button className="btn btn-primary mr-5 btn-sm" onClick={() => signIn()}>
      Get Started Free
    </button>
  );
};

export const LoginText = () => {
  return (
    <p className="text-primary mr-5 " onClick={() => signIn()}>
      Sign In
    </p>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button className="btn btn-primary mr-5 btn-sm" onClick={() => signOut()}>
      Logout
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
