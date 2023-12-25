import { useEffect } from 'react'

const GoogleTranslate = () => {
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
    <div id="google_translate_element" className='fixed z-[999999] bottom-[50px] right-[50px] bg-[#036aa153] hover:bg-sky-800 p-2 text-white rounded-lg'></div>
  )
}

export default GoogleTranslate