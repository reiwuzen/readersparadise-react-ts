import '../styles/welcome.css'
type WelcomeProps = {
    onNext: () => void
}
const Welcome = ({onNext}: WelcomeProps) => {
    return(
        
            <div className="welcomeBox">
                <h3>Welcome</h3>
                <h4>You've come to a Paradise</h4>
                <button onClick={onNext}>Let's Begin</button>

            </div>
        
    )
}
export default Welcome;
export {type WelcomeProps};  