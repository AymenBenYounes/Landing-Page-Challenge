import { FaFacebook,FaInstagram,FaTwitter,FaPinterest } from "react-icons/fa"

const Socials = () => {
  return (
    <div className="bg-DarkMCyan py-3">
      <div className="pt-5 w-middle mx-auto text-DarkCyan">
        <div className='sections pb-4 flex flex-col items-center gap-4'>
          <h1 className="font-extrabold text-3xl text-center">sunnyside</h1>
          <ul className='pt-3 flex gap-10 font-medium'>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className='my-4 social-media text-xl flex gap-4 justify-center items-center'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaPinterest />
        </div>
      </div> 
    </div>
  )
}

export default Socials
