import placeholder from "../assets/placeholder.jpg"

function Featured() {
    return (
        <div className={"flex flex-col justify-center items-center overflow-hidden w-full"}>
            <div className={"header font-bold text-3xl m-5"}>
                Featured Movies
            </div>
            <div className={"explore flex overflow-x-auto mx-4 w-full no-scrollbar"}>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">1</button>
                        </div>
                    </div>
                </div>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0 ">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0 ">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0 ">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"header font-bold text-3xl m-5"}>
                Subscriptions
            </div>
            <div className={"subs flex flex-row overflow-x-auto mx-4 w-full no-scrollbar"}>

                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0 ">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0 ">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0 ">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0 ">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0 ">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div
                    className="card card-compact w-96 max-h-80 bg-base-100 shadow-xl object-contain mx-4 flex-shrink-0 ">
                    <figure><img src={placeholder} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured