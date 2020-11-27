import Layout from "../components/layout";
import LoginForm from "../components/login_form";
import { authInitialProps } from "../lib/auth";

export default function Login(props) {
  return (
    <Layout title="Login" {...props}>
      <LoginForm />
    </Layout>
  );
}

Login.getInitialProps = authInitialProps();
