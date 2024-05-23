import { motion } from "framer-motion"

const Contacts = () => {
  return <div className="border-b border-neutral-500 pb-20">
    <motion.h2 
     whileInView={{opacity:1,y:0}}
     initial={{opacity:0,y:-100}}
     transition={{duration:0.5}}
    className="my-10 text-center text-4xl ">Get In Touch</motion.h2>
    <div className="text-center tracking-tighter">
        <p className="my-4">N-6 , Sector-6, Vashi ,Navi Mumbai ,Pincode :400703</p>
        <p className="my-4">+91-8268222674</p>
        <a href="mailto:shobhitsinghid@gmail.com" className="border-b">shobhitsinghid@gmail.com</a>
    </div>
  </div>
}

export default Contacts
