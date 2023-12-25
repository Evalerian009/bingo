import { useEffect, useState } from 'react'
import GT from './assets/gt.png'

const GoogleTranslate = () => {
  const [ open, setOpen ] = useState(false)

  const handler = () =>((
    setOpen(!open)
  ))
  
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
      );
    };
    useEffect(() => {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
      window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);

  return (
    <div className='fixed z-[999999] bottom-[50px] right-[20px] md:right-[50px] bg-[#036aa153] hover:bg-sky-800 p-2 text-white rounded-lg flex flex-col items-center'>
      <button className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]' onClick={handler}>
        <img src={GT} alt='google-translate' className='w-full h-full' />
      </button>
      <div id="google_translate_element" className={`${open ? 'inline-block' : 'hidden'} transition-all duration-150`} />
    </div>
  )
}

export default GoogleTranslate