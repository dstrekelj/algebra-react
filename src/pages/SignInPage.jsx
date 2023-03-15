import { SignInForm } from "../components/SignInForm";

export function SignInPage(props) {
    return (
        <div className="sign-in-page">
            <div className="card">
                <SignInForm onSubmit={props.onSubmit} />
            </div>
        </div>
    );
};
