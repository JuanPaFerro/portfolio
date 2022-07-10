// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    data: [
      {
        title: "EPROG",
        subtitle: "_digital-tv",
        image: "https://i.postimg.cc/z3Yz4r50/tv.jpg",
        details:
          "E-ProgTV, web application that manages the Electronic Programming Guide (EPG) of Cuban Television. It implements the Digital Terrestrial Multimedia Broadcast (DTMB) standard. Developed with Node.js, Angular 4 and MongoDB.",
        link: "",
        technologies: ["angular", "html", "css", "javascript"],
      },
      {
        title: "EPROG V2.0",
        subtitle: "_digital-tv",
        image: "https://i.postimg.cc/4x2QZqVs/tv-digital.jpg",
        details:
          "New version of the E-ProgTV system. Migrate to new, more scalable and secure technologies and expand their functionalities",
        link: "",
        technologies: ["angular", "html", "css", "javascript"],
      },
      {
        title: "E-Prog Analytics",
        subtitle: "_analytics",
        image: "https://i.postimg.cc/2jsCVSdK/analytics.jpg",
        details:
          "An analytical services module for the EPROG v2.0 system. It allows programming editors to quickly and accurately have relevant information about their television channels.",
        link: "",
        technologies: ["angular", "html", "css", "javascript"],
      },
      {
        title: "Feedback System",
        subtitle: "_feedback",
        image: "https://i.postimg.cc/gjXtChgq/feedback.jpg",
        details:
          "Comment system to receive complaints and suggestions from the public regarding the television billboard.",
        link: "",
        technologies: ["angular", "html", "css", "javascript"],
      },
      {
        title: "AeroStore",
        subtitle: "_e-shop",
        image: "https://i.postimg.cc/Y0BtcBvQ/aerostore-screenshot.png",
        details:
          "E-commerce style page based on a system of loyalty points redeemable for products.",
        link: "https://aero-store.vercel.app/",
        technologies: ["react", "html", "css", "javascript"],
      },
      {
        title: "Portfolio",
        subtitle: "_portfolio",
        image: "https://i.ibb.co/5vc7wd8/portfolio.png",
        details:
          "This portfolio was created using NextJS, a ReactJS based framework and TailwindCSS.",
        link: "https://portfolio-juanpaferro.vercel.app",
        technologies: ["react", "html", "css", "javascript", "tailwind", "next"],
      },
    ],
  });
}
