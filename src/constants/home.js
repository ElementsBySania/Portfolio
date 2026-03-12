// src/constants/home.js
export const HOME = {
  hero: {
    greeting: "Hello, I'm",
    name: "Sania Bahar",
    title: "Graphic Designer",
    subtitle: "I craft visual identities that make brands impossible to ignore. Specialist in branding, motion graphics, and editorial design.",
    cta_primary: { label: "View My Work", href: "/portfolio" },
    cta_secondary: { label: "Let's Talk", href: "/contact" },
    stats: [
      { value: "8+", label: "Years Experience" },
      { value: "120+", label: "Projects Delivered" },
      { value: "40+", label: "Happy Clients" },
    ]
  },
  featured_work: {
    title: "Selected Works",
    items: [
      {
        id: 1,
        title: "Lumina Brand Identity",
        category: "Branding",
        image: "/images/portfolio/lumina.jpg",
        href: "/portfolio/lumina"
      },
      {
        id: 2,
        title: "Echo Magazine",
        category: "Editorial",
        image: "/images/portfolio/echo.jpg",
        href: "/portfolio/echo"
      },
      {
        id: 3,
        title: "Pulse Motion Graphics",
        category: "Motion",
        image: "/images/portfolio/pulse.jpg",
        href: "/portfolio/pulse"
      }
    ]
  },
  testimonials: [
    {
      text: "Sania transformed our brand from something generic to a market standout. The attention to detail is unparalleled.",
      author: "Sarah Jenkins",
      position: "CEO, TechFlow"
    },
    {
      text: "Working with Sania was a seamless experience. They really understood our vision and brought it to life with style.",
      author: "Marcus Thorne",
      position: "Founder, GreenLeaf"
    }
  ],
  clients: [
    { name: "TechFlow", logo: "techflow" },
    { name: "GreenLeaf", logo: "greenleaf" },
    { name: "Aura", logo: "aura" },
    { name: "Vortex", logo: "vortex" },
    { name: "Nova", logo: "nova" }
  ]
}
