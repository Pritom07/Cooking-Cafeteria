const Topbanner = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div
                className="hero"
                style={{
                    backgroundImage: "url(Images/Chef-kitchen.jpg)", height: '550px'
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div>
                        <h1 className="mb-5 text-6xl font-bold text-white">Discover an exceptional cooking class tailored for you</h1>
                        <p className="mb-5 text-white text-lg">
                            Cooking is a delightful blend of art and science, where ingredients come together to create flavorful and nourishing meals. Recipes serve as a guide, offering step-by-step instructions to craft dishes ranging from simple comfort foods to gourmet masterpieces.
                        </p>
                        <div className="mt-2">
                            <button className="btn btn-success rounded-3xl mr-4">Explore Now</button>
                            <button className="text-white rounded-3xl border-2 border-white p-2">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbanner;