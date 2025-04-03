import { useEffect } from "react";
import { useLogin } from "./hooks/useLogin";
import Layout from "./views/layout/layout";

function App() {
  const { login, loading, error } = useLogin();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      login("admin20@hireg.com", "123123").catch((err) =>
        console.error("Login failed:", err)
      );
    }
  }, [login]);

  if (loading) return <p>Logging in...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
