import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        // Redirect if already logged in (based on token in localStorage)
        if (localStorage.getItem("token")) {
            navigate("/dasbroad");
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await axios.post(
                "http://localhost:5050/api/Login",
                { email, password },
                { withCredentials: true }
            );


            localStorage.setItem("token", res.data.token);
            setEmail("");
            setPassword("");
            navigate("/"); // ✅ redirect after login
        } catch (err) {
            setError(err?.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side */}
            <div className="w-1/2 h-screen bg-[url('/img/Group-47725-Photoroom.png')] bg-cover bg-center flex items-center justify-center">
                <img
                    src="/img/Roadmap%20Design%20(1).jpg"
                    alt="Login Illustration"
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* Right Side */}
            <div className="w-1/2 bg-white flex items-center justify-center">
                <div className="w-full max-w-md p-10">
                    <h1 className="text-[40px] text-center font-semibold text-[#1F1F1F]">Login</h1>
                    <p className="text-[16px] text-center text-[#667085] font-medium mt-2">
                        Welcome Back! Please enter your details.
                    </p>

                    {error && (
                        <div className="text-red-600 font-medium text-center my-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4 mt-6">
                        <div>
                            <label className="block mb-1 text-[#1F1F1F] font-medium">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border border-[#E1E1E1] rounded-md text-sm focus:outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-[#1F1F1F] font-medium">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 border border-[#E1E1E1] rounded-md text-sm focus:outline-none"
                                required
                            />
                        </div>

                        <div className="flex justify-between items-center">
                            <label className="flex items-center text-sm text-[#667085]">
                                <input type="checkbox" className="mr-2 w-4 h-4" />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-[#667085]">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#60E5AE] text-[#1F1F1F] py-3 rounded-md font-semibold text-lg"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="text-center mt-6 text-[#667085] text-sm">
                        Don’t have an account?{" "}
                        <span className="text-[#1F1F1F] font-semibold">Sign Up</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
