import {
  ArrowUpRight,
  CalendarCheck,
  Contact2,
  Github,
  Linkedin,
  Mail,
  MailPlusIcon,
  MessageCircleMore,
  Phone,
  PhoneOutgoing,
  Twitter,
  User2,
} from "lucide-react";
import Link from "next/link";
import CustomLink from "../../../components/CustomLink";

export default function ContactPage() {
  return (
    <section className="w-full my-12 px-12 xl:px-24">
      <p className="text-sm text-gray-400 mb-3">
        <span className="text-neon">contact$</span> cat contact.md
      </p>

      <div className="flex items-center mb-8">
        <Contact2 size={24} className="inline-block mr-2 text-neon" />
        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col gap-4 md:px-12 lg:px-4">
          <div className="w-full max-w-sm flex flex-col gap-2 p-4">
            <h3 className="text-xl pb-1 border-b border-gray-600/30 mb-2">
              Contact
            </h3>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <p>kspavanbhat@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <p>+91 9632672475</p>
            </div>
            <div className="flex items-center gap-2">
              <CalendarCheck size={18} />
              <Link href="https://calendar.app.google/xgju7bGfQSpQEdSw9">
                Connect for 30 mins
              </Link>
              <ArrowUpRight size={12} />
            </div>
          </div>
          <div className="w-full max-w-sm flex flex-col gap-2 p-4">
            <h3 className="text-xl pb-1 border-b border-gray-600/30 mb-2">
              Socials
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Twitter size={16} className="inline-block mr-2" />
                <CustomLink text="@ksp_bhat" href="https://x.com/ksp_bhat" />
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="inline-block mr-2" />
                <CustomLink
                  href="https://linkedin.com/in/pavan-ks-bhat"
                  text="Pavan KS Bhat"
                />
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} className="inline-block mr-2" />
                <CustomLink
                  href="https://github.com/PavanBhat007"
                  text="PavanBhat007"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-2/3 py-4 md:px-12">
          <h3 className="text-lg text-center mb-4">Drop a Message!</h3>
          <form className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-4 border border-gray-600/50 rounded-lg p-4">
              <label htmlFor="name" className="text-neon font-semibold"><User2 size={16} /></label>
              <input type="text" name="name" placeholder="What's your name?" className="w-full flex-1 bg-transparent outline-none" />
            </div>
            <div className="flex items-center gap-4 border border-gray-600/50 rounded-lg p-4">
              <label htmlFor="name" className="text-neon font-semibold"><PhoneOutgoing size={16}></PhoneOutgoing></label>
              <input type="tel" name="name" placeholder="What's your contact number?" className="w-full flex-1 bg-transparent outline-none" />
            </div>
            <div className="flex items-center gap-4 border border-gray-600/50 rounded-lg p-4">
              <label htmlFor="name" className="text-neon font-semibold"><MailPlusIcon size={16} /></label>
              <input type="email" name="name" placeholder="What's your e-mail?" className="w-full flex-1 bg-transparent outline-none" />
            </div>
            <div className="flex flex-col gap-4 border border-gray-600/50 rounded-lg p-4">
              <label htmlFor="name" className="text-neon font-semibold flex items-center gap-4"><MessageCircleMore size={16} /><span>Write a Message</span></label>
              <textarea className="bg-transparent w-full outline-none" rows={6} />
            </div>

            <button type="submit" className="w-fit mx-auto bg-neon text-[#0b0f14] px-4 py-2 rounded-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
