function Home() {

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
    return (
        <div style={{textAlign:}}>
            <h2>{getGreeting()}</h2>  {/* Add name of the user */}
            <p>This is your space to create your own blog posts! Please see the navigation to see your posts, create new and edit the existing ones!</p>
        </div>
    )
}

export default Home
