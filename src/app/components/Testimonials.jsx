import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
    weight: ["700", "900"],
    subsets: ['latin']
})
const Testimonials = () => {
    return (
        <div className="my-10">
            <h1 className={`my-10 pt-10 uppercase text-GrayishBlue text-center text-2xl ${fraunces.className} tracking-space`}>Client testimonials</h1>
            <div className='py-10 flex flex-col md:flex-row w-clientSection mx-auto gap-5 justify-center align-center'>
                <div>
                    <section className="flex flex-col justify-center items-center">
                        <img className="mb-8 rounded-full w-3/12 lg:w-3/12" src="./image-emily.jpg" alt="" />
                        <p className="text-VeryDarkDBlue pt-1 font-medium text-center">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    </section>
                    <section className="flex flex-col justify-center items-center my-8">
                        <h2 className={`text-VeryDarkDBlue text-xl font-extrabold ${fraunces.className}`}>Emily R.</h2>
                        <span className="pt-2 text-GrayishBlue font-medium">Marketing Director</span>
                    </section>
                </div>
                <div>
                    <section className="flex flex-col justify-center items-center">
                        <img className="mb-8 rounded-full w-3/12 lg:w-3/12" src="./image-thomas.jpg" alt="" />
                        <p className="text-VeryDarkDBlue font-medium text-center">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                    </section>
                    <section className="flex flex-col justify-center items-center my-8">
                        <h2 className={`text-VeryDarkDBlue text-xl font-extrabold ${fraunces.className}`}>Thomas S.</h2>
                        <span className="pt-2 text-GrayishBlue font-medium">Chief Operating Officer</span>
                    </section>
                </div>
                <div>
                    <section className="flex flex-col justify-center items-center">
                        <img className="mb-8 rounded-full w-3/12 lg:w-3/12" src="./image-jennie.jpg" alt="" />
                        <p className="text-VeryDarkDBlue pt-2 font-medium text-center">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    </section>
                    <section className="flex flex-col justify-center items-center my-8">
                        <h2 className={`text-VeryDarkDBlue text-xl font-extrabold ${fraunces.className}`}>Jennie F.</h2>
                        <span className="pt-2 text-GrayishBlue font-medium">Business Owner</span>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
