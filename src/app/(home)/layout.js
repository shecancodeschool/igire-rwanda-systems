import "@/globals.css";
import { imb } from "@/utils/fonts";
import Footer from "./components/Footer";
import Navbar from "./components/sections/navBar";
import ProgressBarProvider from "../ProgressBarProvider";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: {
    template: "%s - Igire Rwanda Organization",
    default: "Igire Rwanda Organization",

  },
  description: "Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  keywords: "Igire Rwanda Organization, AWE, Academy for Women Entrepreneurs, IRO, SheCanCODE Bootcamp, SheCanCODE, Igire Rwanda, Women Empowerment, Women Empowerment in Rwanda, Rwanda, Digital Literacy, Entrepreneurship, Gender Gaps, Gender Gap, Empowering young women"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${imb}`}>
        <ProgressBarProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ProgressBarProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
