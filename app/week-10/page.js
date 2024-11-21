"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function LandingPage() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    if (user) {
        console.log("User :", user.uid);
    }

    return (
        <main className="m-6 md:m-12 p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto">
            <header>
                <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Welcome</h1>
            </header>
            {user ? (
                <section className="flex flex-col space-y-6">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-lg font-medium text-gray-700">
                            Welcome <span className="text-indigo-600 font-semibold">{user.displayName}</span>
                        </p>
                        <div className="flex items-center space-x-4">
                            <p className="text-sm text-gray-500">{user.email}</p>
                            <button className="relative hover:scale-110 transition-transform duration-200">
                                <img src={user.photoURL} alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-indigo-500" />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Link href="/week-10/shopping-list">
                            <div className="bg-amber-400 text-white rounded-md px-4 py-2 w-48 text-center hover:bg-amber-500 transition-all duration-300 ease-in-out transform hover:scale-105">
                                Go To Shopping List
                            </div>
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={handleSignOut}
                        className="w-full md:w-32 py-2 mt-6 bg-blue-600 text-white text-lg rounded-md shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                    >
                        Sign Out
                    </button>
                </section>
            ) : (
                <section className="text-center mt-8">
                    <button
                        type="button"
                        onClick={handleSignIn}
                        className="text-lg bg-indigo-600 text-white rounded-md py-2 px-6 shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
                    >
                        Sign In
                    </button>
                </section>
            )}
        </main>
    );
}
