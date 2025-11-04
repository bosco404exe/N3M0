import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";
import Link from "next/link";

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "absterr.dev@gmail.com",
    },
    {
      icon: Phone,
      label: "PHONE",
      value: "+234 (0) 814 756 4810",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Kubwa, Abuja",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GITHUB", url: "#" },
    { icon: Linkedin, label: "LINKEDIN", url: "#" },
    { icon: Twitter, label: "TWITTER", url: "#" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-16">
      {/* Header */}
      <div className="mb-12 text-center sm:mb-16">
        <h1 className="mb-4 font-mono text-3xl font-bold sm:text-5xl">
          CONTACT
        </h1>
        <div className="mx-auto mb-6 w-16 border-b-2 border-green-500 sm:w-24" />
        <p className="mx-auto max-w-2xl font-mono text-xs text-gray-600 sm:text-sm">
          Ready to collaborate on your next project? Let's connect and build
          something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 items-stretch">
        {/* Contact Form */}
        <div className="border border-gray-300 p-6 sm:p-8 rounded-3xl">
          <h2 className="mb-6 font-mono text-base font-bold sm:mb-8 sm:text-lg">
            SEND A MESSAGE
          </h2>
          <ContactForm />
        </div>

        {/* Contact Info + Social Links */}
        <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-8">
          {/* Get In Touch */}
          <div>
            <h2 className="mb-4 font-mono text-base font-bold sm:mb-6 sm:text-lg">
              GET IN TOUCH
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-3 border border-gray-300 p-3 sm:gap-4 sm:p-4 rounded-2xl"
                >
                  <Icon className="h-5 w-5 shrink-0 text-gray-900 sm:h-6 sm:w-6" />
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-gray-600 uppercase">
                      {label}
                    </p>
                    <p className="truncate font-mono text-xs sm:text-sm">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="mb-4 font-mono text-base font-bold sm:mb-6 sm:text-lg">
              SOCIAL LINKS
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <Link
                  key={label}
                  href={url}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 p-3 hover:bg-gray-50 transition sm:h-16 sm:w-16 sm:p-4"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6 text-gray-900 sm:h-7 sm:w-7" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
