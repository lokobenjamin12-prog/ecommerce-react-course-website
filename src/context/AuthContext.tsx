import { createContext, useContext, useState, type ReactNode } from "react";

// 1. Create the context with a default value (null)
const AuthContext = createContext<any>(null); 

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  // 2. Define the state you want to share across your app
  const [user, setUser] = useState<any>(
    localStorage.getItem("currentUserEmail")
    ? { email: localStorage.getItem("currentUserEmail")}
     : null
  );

  function signUp(email: string, password: string){
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    if (users.find((u: any) => u.email === email )){
        return { success: false, error: "Email already exists "};
    }
    const newUser = {email, password};
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUserEmail", email);

    setUser({ email });

    return { success: true };
  }

  function login(email: string, password: string) {

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user= users.find(
        (u: any) => u.email === email && u.password === password
    );
    if(!user){
        return { success: false, error: "Invalid email or password"};
    }

    localStorage.setItem("currentUserEmail", email);
    setUser({ email }); 

    return { success: true };
  }

  function logout(){
    localStorage.removeItem("currentUserEmail");
    setUser(null);
  }

  // 3. Pass that state into the "value" prop
  return (
    <AuthContext.Provider value={{ signUp, user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth(){
  const context =  useContext( AuthContext);
  
  return context;
};