import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "bosco.dev@gmail.com",
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
    {
      icon: Github,
      label: "Github",
      url: "https://github.com/bosco",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/abba-is-haq-b14579321",
    },
    {
      icon: Twitter,
      label: "X",
      url: "https://x.com/_bosco",
    },
  ];

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-32 sm:px-8 sm:py-46"
      id="contact"
    >
      <div className="mb-12 text-center sm:mb-16">
        <h1 className="mb-4 font-mono text-3xl font-bold sm:text-5xl">
          CONTACT
        </h1>
        <div className="w-16 md:w-24 h-1 bg-green-500 mx-auto mb-6 md:mb-8"></div>
        <p className="mx-auto max-w-2xl font-mono text-xs text-foreground/60 sm:text-sm">
          Got an idea in mind? Let's collaborate and build something remarkable.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 items-stretch">
        <div className="border border-foreground/30 p-6 sm:p-8 rounded-3xl">
          <h2 className="mb-6 font-mono text-base font-bold sm:mb-8 sm:text-lg">
            SEND A MESSAGE
          </h2>
          <ContactForm />
        </div>

        <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-8">
          <div>
            <h2 className="mb-4 font-mono text-base font-bold sm:mb-6 sm:text-lg">
              GET IN TOUCH
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-3 border border-foreground/30 p-3 sm:gap-4 sm:p-4 rounded-2xl"
                >
                  <Icon className="h-5 w-5 shrink-0 text-foreground/90 sm:h-6 sm:w-6" />
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-foreground/60 uppercase">
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

          <div>
            <h2 className="mb-4 font-mono text-base font-bold sm:mb-6 sm:text-lg">
              SOCIAL LINKS
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={label}
                  href={url}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/30 p-3 hover:bg-foreground/5 transition sm:h-16 sm:w-16 sm:p-4"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6 text-foreground/90 sm:h-7 sm:w-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
