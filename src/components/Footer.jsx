import { footerLinksServices, footerQuickLinks, footerSocialLinks } from "./constants"

const Footer = () => {
  return (
    <>    
      <div className="py-14 px-[20px] md:p-[50px] lg:px-[100px] lg:py-[100px] bg-stone-900 text-gray-300 text-[14px] flex flex-wrap gap-y-14 md:gap-x-8 lg:gap-x-4">
        <div className="w-full md:w-[42%] lg:w-[30%]">
          <h4 className="text-lg font-semibold uppercase">About</h4>
          <p className="mt-3 text-stone-400 font-[200]">Integer posuere erat a ante venenati dapibus posuere velit aliquet. Fusce dapibus, tellus cursus commodo, tortor mauris sed posuere.</p>
        </div>
        <div className="w-full md:w-[42%] lg:w-[20%]">
          <h5 className="text-lg font-semibold uppercase">Our Services</h5>
          <ul className="mt-3 text-stone-400 flex flex-col gap-2">
            {footerLinksServices.map(link => (
              <li key={link.title}>
                <a href={`${link.link}`} className="block hover:text-sky-500 font-light" >{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-[42%] lg:w-[20%]">
          <h5 className="text-lg font-semibold uppercase">QUICK LINKS</h5>
          <ul className="mt-3 text-stone-400 flex flex-col gap-2">
            {footerQuickLinks.map(link => (
              <li key={link.title}>
                <a href={`${link.link}`} className="block hover:text-sky-500 font-light" >{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-[42%] lg:w-[20%]">
          <h5 className="text-lg font-semibold uppercase">CONNECT WITH US SOCIALLY</h5>
          <ul className="mt-3 text-stone-400 flex flex-col gap-2">
            {footerSocialLinks.map(link => (
              <li key={link.title}>
                <a href={`${link.link}`} className="block hover:text-sky-500 font-light" >{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="uppercase font-[200] bg-stone-950 text-center text-[ghostwhite] text-[14px] p-4">&copy; Copyright 2020. All rights reserved.</div>
    </>
  )
}

export default Footer