import { useRef } from 'react';
import emailjs from 'emailjs-com';
import type { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

export default function Formulario() {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation()

  const enviarEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_r02nhfz',
      'template_d8qzo9o',
      formRef.current,
      'oj2MWs7-IHUBmdza1'
    ).then(() => {
      alert('Mensagem enviada com sucesso!');
      formRef.current?.reset();
    }).catch((error) => {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar. Tente novamente.');
    });

  }

  return (
    <section id="contato" className="flex flex-col items-center justify-center w-full h-auto bg-gray-900 text-gray-100">
      <form className="h-[400px] mt-12 lg:mt-0 w-[96%] lg:w-[25%] bg-gray-800 rounded-lg flex flex-col items-center justify-center"
        ref={formRef}
        onSubmit={enviarEmail}
      >
        <h2 className="text-2xl pb-6">{t('title-form')}</h2>
        <input className="w-[80%] p-2 mt-2 text-white-100 focus:outline-none focus:ring-0  bg-transparent border-b-2 border-blue-800" type="text" placeholder={t('input-name')}
          name="from_name"
          required
        />
        <input className="w-[80%] p-2 mt-2 text-white-100 focus:outline-none focus:ring-0 bg-transparent border-b-2 border-blue-800" type="text" placeholder={t('input-number')}
          name="email"
          required
        />
        <textarea className="w-[80%] p-2 mt-2 h-28 resize-none border-blue-800 rounded text-white-100 border-2 focus:outline-none focus:ring-0 bg-transparent" placeholder={t('input-message')}
          name="message"
          required
        >

        </textarea>
        <button type="submit" className="w-[80%] p-2 text-xl bg-blue-700 text-gray-100 rounded-lg mt-6 transition duration-1000 hover:bg-blue-400">{t('btn')}</button>
      </form>
    </section>
  )
}