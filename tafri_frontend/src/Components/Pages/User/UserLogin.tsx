// UserLogin.tsx
import React, { useEffect, useState } from "react";
import { UserLoginCollection } from "../../Collection interface/UserLoginCollection";
import { useNavigate } from "react-router-dom";
import { checkEmail, logout } from "../../Validations/validations"; // Ensure useUser is imported
import { userDTO } from "../../DTOs/userDTO";
// import { useUser } from "../Context/userContext";

type Props = {
	onLogin: (user : userDTO) => void;
}

const UserLogin = ({ onLogin } : Props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errors, setErrors] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    // const { setUser } = useUser(); // Access setUser from context

    useEffect(() => {
        const login = localStorage.getItem("UserLogin");
        if (login) {
            navigate("/");
        }
    }, [navigate]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailval = e.target.value;
        setEmail(emailval);
        setErrors((prevError) => ({
            ...prevError,
            email: checkEmail(emailval),
        }));
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log("Login called");
        e.preventDefault();

        const obj: UserLoginCollection = {
            userEmail: email,
            userPassword: password,
        };

        try {
            const response = await fetch("/api/Users/ValidateUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error(errorMessage);
                return;
            }

            const userData: userDTO = await response.json(); // Ensure it matches userDTO
            console.log(userData);

            localStorage.setItem("UserLogin", "true");
			onLogin(userData);
            navigate("/", { state: { user: userData } });
        } catch (err) {
            console.error("Error logging in", err);
        }
    };

    return (
        <div>
            <form className="loginForm" onSubmit={handleLogin}>
                <input
					name="email"
                    type="text"
                    className="emailInput"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                <br />
                <br />
                <input
					name="password"
                    type="password"
                    className="passwordInput"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <button className="submitButton" type="submit">
                    Login
                </button>
            </form>
            <button onClick={() => logout(navigate)}>Logout</button>
        </div>
    );
};

export default UserLogin;
