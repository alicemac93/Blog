import { useSelector } from "react-redux";
import { selectActiveUser } from "../../features/adminSide/users/UsersSlice";

function Home() {
    const user = useSelector(selectActiveUser);

    const getGreeting = () => {
        let today = new Date();
        let date = today.toLocaleString();
        let hour = today.getHours();
        let timeOfTheDay;

        if (hour < 12) {
            timeOfTheDay = "Good morning,";
        } else if (hour < 19) {
            timeOfTheDay = "Good afternoon,";
        } else if (hour > 19) {
            timeOfTheDay = "Good evening,";
        } else {
            timeOfTheDay = "It is too late to be writing articles now! do it in the morning."
        }
        let message = `${timeOfTheDay} it is ${date}`

        return message;
    }

    const getUserName = () => {
        if (user) {
            return user.charAt(0).toUpperCase() + user.slice(1) + ',';
        } else {
            return ''
        }
    }

    return (
        <div className="greeting-container">
            <h2>{getUserName()} {getGreeting()}</h2>
            <p>{`This is your space to create your own blog posts! Please ${user ? 'use navigation' : 'log in '} to see your posts, create new and edit the existing ones!`}</p>
        </div>
    )
}

export default Home
