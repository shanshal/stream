import React, {useState, useEffect} from "react";
import Carousel from "react-simply-carousel";

function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        // Automatically change the active slide every 3 seconds (adjust the interval as needed)
        const intervalId = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % 10); // Assuming there are 10 slides
        }, 3000);

        // Cleanup function to clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount

    return (
        <div className={"w-full relative"}>
            <Carousel
                className={"z-0 opacity-15 absolute top-0 left-0"}
                containerProps={{
                    style: {
                        width: "100%",
                    },
                }}
                preventScrollOnSwipe
                swipeTreshold={50}
                activeSlideIndex={activeSlide}
                activeSlideProps={{}}
                onRequestChange={setActiveSlide}
                itemsToShow={1}
                speed={500}
                centerMode
            >
                {Array.from({length: 10}).map((item, index) => (
                    <div
                        className={"opacity-40"}
                        style={{
                            background: "yellow",
                            width: "100vw",
                            height: 600,
                            textAlign: "center",
                            lineHeight: "240px",
                            boxSizing: "border-box",
                        }}
                        key={index}
                    >
                        <img
                            src={`path/to/your/image-${index}.jpg`} // Replace with the actual path to your images
                            alt={`Image ${index}`}
                            style={{maxWidth: "100%", maxHeight: "100%"}}
                        />
                    </div>
                ))}
            </Carousel>
            <div className={"lg:w-1/2 w-3/4 absolute top-0 left-0 h-full ml-6"}>
                <div className={"theText flex flex-col justify-evenly h-full"}>
                    <div>
                    <h1 className={"lg:text-7xl text-3xl md:text-5xl text-primary_text m-3"}>
                        Welcome to streamy!
                    </h1>
                    </div>
                    <div>
                    <h2 className={"text-xl lg:text-3xl md:text-2xl text-secondary_text m-3"}>
                        A place to stream your favorite movies with your friends!
                    </h2>
                    </div>
                    <div>
                    <p className={"text-lg text-secondary_text flex-wrap m-3"}>
                        Get started by choosing your favorite movie and inviting your friends to watch with you!
                    </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Home;
