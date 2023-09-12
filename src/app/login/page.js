
import Link from "next/link";
import LoginForm from "./form";

const Page = (props) => {
    console.log('props',props)

    return (
        <div className="form">
            <div className="form-heading">
                <h1>Welcome to MyKinsta!</h1>
            </div>
                <div className="nice-to-see">Nice to see you again.</div>
                <div className="form-line"></div>    
                    <LoginForm />
                    <br/>
                    <div>
                        <Link href={'/'} className="forgot-password">Sign up for an account</Link>
                    </div>
                    <br/>

                    <div className="form-hero">
                    <div className="system-status">
                    <svg fill="none" viewBox="0 0 24 24" aria-hidden="true" color="rgb(255, 150, 31)" ><path fill="rgb(255, 150, 31)" d="M11.103 12.08a.895.895 0 0 0 .254.55.899.899 0 0 0 1.54-.55l.42-3.834a1.356 1.356 0 0 0 .033-.322.894.894 0 0 0-.027-.243 1.35 1.35 0 0 0-2.673.242v.027c0 .102.011.2.033.296l.42 3.834ZM12 14.7a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Z"></path><path fill="rgb(255, 150, 31)" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm10-8.2a8.2 8.2 0 1 0 0 16.4 8.2 8.2 0 0 0 0-16.4Z" clip-rule="evenodd"></path></svg>
                    <a href="/" className="">System status</a></div>
                    <div>sdfdf</div>
                    </div>
                    <br/>
                    <footer className="form-footer">
                        This site is protected by reCAPTCHA and the Google 
                        <Link href="/" target="_blank"> Privacy Policy </Link>
                        and
                        <Link href="/" target="_blank" > Terms of Service </Link> apply
                    </footer>
        </div>

    );
}

export default Page;
