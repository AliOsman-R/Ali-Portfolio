import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser';
import { Spinner } from '../components/Loader';
import { toast } from 'sonner'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const {t, i18n} = useTranslation()

  const positionStyle =  i18n.language === 'en'? "left-2" : "right-2"

  const setLabelStyle = (type:string) => {
    return type? "translate-y-[-25px] bg-gray-50 text-sm dark:bg-darkColor" : ""
  }

  const setInputStyle = (type:string) => {
    return type? "bg-gray-50 dark:bg-darkColor" : ""
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
     setText:React.Dispatch<React.SetStateAction<string>>) => {
    const text = e.target.value;
    if (text === "" || /\S/.test(text)) {
      setText(text);
    }
  }


  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const serviceId = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID || ""
    const templateId = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID || ""
    const publicKey = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY || ""
    const templateParams = {name, email, message}

    setLoading(true)
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log("Message sent:", result.text);
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Your message has been sent successfully!");
      }, (error) => {
        console.log("Failed to send message:", error.text);
        toast.error("Failed to send your message, please try again.");
      }).finally(() => setLoading(false))
  }
  
  return (
    <div className="dark:text-white">
      <h1 className="text-[28px] font-bold w-full">{t("nav_bar.contact")}</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSend} className="flex flex-col justify-center items-center gap-10 mt-20 max-xl:w-full xl:w-[50%]">
          <h1 className='text-center text-xl font-semibold'>  {t("contact.title")}</h1>
          <div className="relative w-full">
            <input 
              className={`contact-input-style peer ${setInputStyle(name)}`} 
              required 
              type="text" 
              value={name}
              disabled={loading}
              onChange={(e) => handleChange(e, setName)}
            />
            <label className={`contact-label-style ${positionStyle} ${setLabelStyle(name)}`}>
              {t("contact.name")}
            </label>
          </div>
          <div className="relative w-full">
            <input 
              className={`contact-input-style peer ${setInputStyle(email)}`}
              required 
              type="email" 
              value={email}
              disabled={loading}
              onChange={(e)=> handleChange(e, setEmail)}
            />
            <label className={`contact-label-style ${positionStyle} ${setLabelStyle(email)}`}>
              {t("contact.email")}
            </label>
          </div>
          <div className="relative w-full">
            <textarea 
              className={`contact-input-style h-[200px] resize-none peer ${setInputStyle(message)}`}
              required 
              value={message}
              maxLength={1000}
              disabled={loading}
              onChange={(e)=> handleChange(e, setMessage)}
            >
            </textarea>
            <label className={`contact-label-style ${positionStyle} ${setLabelStyle(message)}`}>
            {t("contact.message")}
            </label>
          </div>
          <button 
            disabled={loading}
            className='contact-button-style'
          >
            {loading? <Spinner/> : t("contact.button")}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact