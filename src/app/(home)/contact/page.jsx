import { Mail, MapPin, Phone } from "lucide-react";
import DefaultBanner from "../components/DefaultBanner";

export const metadata = {
  title: "Contact Us",
  description: "Contact Us. Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  keywords: "Contact Igire Rwanda Organization, Igire Rwanda Organization, AWE, Academy for Women Entrepreneurs, Women training bootcamps near me, women training bootcamps in Rwanda, women in tech, IRO, SheCanCODE Bootcamp, SheCanCODE, Igire Rwanda, Women Empowerment, Women Empowerment in Rwanda, Rwanda, Digital Literacy, Entrepreneurship, Gender Gaps, Gender Gap, Empowering young women",
  openGraph: {
    title: "Contact Us",
    description: "Contact Igire Rwanda Organization.",
    url: "https://www.igirerwanda.org",
    siteName: "Igire Rwanda Organization",
    images: [
      {
        url: "scc15.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Contact Us - Igire Rwanda Organization",
  "url": "https://www.igirerwanda.org",
  "description": "Contact Us. Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  "image": "/scc15.jpg",
  "author": {
    "@type": "Organization",
    "name": "Igire Rwanda Organization",
    "url": "https://www.igirerwanda.org/",
    "image": "/scc15.jpg",
    "sameAs": [
      "https://www.youtube.com/channel/UCh-zTmgW9gWFl4Va__6AsjQ",
      "https://www.facebook.com/igirerwandaorganization",
      "https://www.instagram.com/shecancode_bootcamp",
      "https://twitter.com/ShecancodeRW"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.igirerwanda.org/contact`
  }
}
export default function page() {

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <DefaultBanner title="Contact Us" backgroundImage={'/scc23.jpg'} />
      <section className="flex flex-col items-center justify-center w-full bg-slate-50">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-xl px-5 lg:px-0 py-12 md:py-24 w-full mx-auto">
            <div className="flex flex-col items-start justify-center w-full">
              <h2 className="text-3xl text-start font-bold mb-4">Let's Get In Touch.</h2>
              <p className="text-lg mb-8">We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible.</p>
              <table className="flex flex-col items-start justify-center w-full">
                <tr className="mb-4">
                  <td className="font-semibold text-orange-400"><MapPin /></td>
                  <td>&nbsp;&nbsp;KG 549 St, 36 Kigali</td>
                </tr>
                <tr className="mb-4">
                  <td className="font-semibold text-orange-400"><Mail /></td>
                  <td>&nbsp;&nbsp;education@igirerwanda.org</td>
                </tr>
                <tr className="mb-4">
                  <td className="font-semibold text-orange-400"><Phone /></td>
                  <td>&nbsp;&nbsp;+250 788 293 894</td>
                </tr>
              </table>
            </div>
            <form className="flex flex-col items-center justify-center w-full bg-orange-200 p-8 md:p-16">
              <input type="text" className="w-full border border-black px-3 py-2 mb-4" placeholder="Full name" />
              <input type="text" className="w-full border border-black px-3 py-2 mb-4" placeholder="Email" />
              <textarea className="w-full border border-black px-3 py-2 mb-4" rows={'6'} placeholder="Message"></textarea>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full border border-black">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.553554881119!2d30.072044274050132!3d-1.9306041366678404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca70041075f0d%3A0x8dd8bd686d407d92!2sSheCanCode%20Training%20Center!5e0!3m2!1sfr!2srw!4v1717664442768!5m2!1sfr!2srw" width="350" height="450" className="w-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </>
  )
}
