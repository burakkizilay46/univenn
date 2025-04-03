import { useMutation, gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(email: $username, password: $password) {
      success
      message
      token
      isNewUser
      type
      unlockAccountPath
    }
  }
`;

export const useLogin = () => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const login = async (username: string, password: string) => {
    const response = await loginMutation({
      variables: { username, password },
    });
    const newToken = response.data?.login?.token;
    if (newToken) {
      localStorage.setItem("token", newToken);
    }
    return newToken;
  };

  return { login, data, loading, error };
};
