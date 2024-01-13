import React, {useState, useEffect} from "react";
import Carousel from "react-simply-carousel";

function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % 10);
        }, 3000);


        return () => clearInterval(intervalId);
    }, []);

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
                            background: "black",
                            width: "100vw",
                            height: 600,
                            textAlign: "center",
                            lineHeight: "240px",
                            boxSizing: "border-box",
                        }}
                        key={index}
                    >
                        <img
                            src={`path/to/your/image-${index}.jpg`} // Replace with the actual path
                            alt={`Image ${index}`}
                            style={{maxWidth: "100%", maxHeight: "100%"}}
                        />
                    </div>
                ))}
            </Carousel>
            <div className={"absolute top-0 left-0 h-full ml-6"}>
                <div className={"theText flex flex-col justify-evenly h-full"}>
                    <div>
                        <h1 className={"lg:text-7xl text-xl md:text-5xl m-3"}>
                            Welcome to streamy!
                        </h1>
                    </div>
                    <div>
                        <h2 className={"text-sm lg:text-md md:text-2xl m-3"}>
                            A place to stream your favorite movies with your friends!
                        </h2>
                    </div>
                    <div>
                        <p className={"text-md flex-wrap m-3"}>
                            Get started by choosing your favorite movie and inviting your friends to watch with you!
                        </p>
                    </div>
                </div>
            </div>

            <div className={"lg:w-1/2 w-1/2 absolute top-0 right-0 h-full"}>
                <div className={"flex flex-col items-center justify-center h-full wra["}>
                    <div>
                        <h1 className={"lg:text-2xl text-md md:text-lg m-3"}>
                            Make an account and open up your own online theater!
                        </h1>
                    </div>
                    <div>
                        <button
                            className={"btn lg:btn-wide btn-sm sm:btn-sm md:btn-md lg:btn-lg hover:glass"}
                            onClick={() => {
                                console.log("Get Started button clicked");
                            }}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
