import type { ImageMetadata } from "astro";
import cullerneGardensImage from "../assets/images/projects/cullerne-gardens/feature.jpg";
import macHubImage from "../assets/images/projects/mac-hub/feature.jpg";
import cullerneHouseImage from "../assets/images/projects/cullerne-house/feature.jpg";
import transitionImage from "../assets/images/projects/transition-expertise/desktop.webp";
import thaImage from "../assets/images/projects/tha/desktop.webp";
import remImage from "../assets/images/projects/rem-core-drilling/desktop.webp";
import agencyImage from "../assets/images/projects/102-agency/desktop.webp";
import synchronicityImage from "../assets/images/projects/synchronicity/desktop.webp";

export interface Project {
  slug: string;
  title: string;
  kind: string;
  platform: string;
  url?: string;
  summary: string;
  services: string[];
  image: ImageMetadata;
  alt: string;
  group: "recent" | "earlier";
  imagePosition?: string;
}

export const projects: Project[] = [
  {
    slug: "cullerne-house",
    title: "Cullerne House",
    kind: "Venue and accommodation website",
    platform: "Squarespace",
    url: "https://www.cullernehouse.org/",
    summary:
      "Business analysis and website delivery for a Findhorn venue with three distinct offers: room hire, B&B accommodation and public workshops. I clarified requirements, mapped the user journeys, and evaluated, selected and implemented the supporting booking and availability systems.",
    services: ["Business analysis", "Website project management", "Digital marketing", "System selection and implementation", "UX and content structure"],
    image: cullerneHouseImage,
    alt: "Cullerne House seen through its garden in Findhorn",
    group: "recent",
    imagePosition: "center",
  },
  {
    slug: "mac-hub",
    title: "MAC Hub",
    kind: "Creative venue website",
    platform: "Squarespace",
    url: "https://www.mac-hub.uk/",
    summary:
      "Business analysis and website delivery for a creative venue in Findhorn. I clarified how its spaces and booking process needed to work, then evaluated, selected, implemented and configured LemonBooking alongside the website.",
    services: ["Business analysis", "Website project management", "Digital marketing", "System selection and implementation", "Content structure"],
    image: macHubImage,
    alt: "Exterior of MAC Hub at The Park in Findhorn",
    group: "recent",
    imagePosition: "center",
  },
  {
    slug: "cullerne-gardens",
    title: "Cullerne Gardens",
    kind: "Community food project",
    platform: "Squarespace",
    url: "https://www.cullernegardens.uk/",
    summary:
      "Business analysis and website delivery for a community-supported agriculture project. I worked through how veg-box subscriptions, the online shop and support routes needed to connect, then evaluated, selected and implemented Ooooby as part of the customer journey.",
    services: ["Business analysis", "Website project management", "Digital marketing", "System selection and implementation", "UX and content structure"],
    image: cullerneGardensImage,
    alt: "Cullerne Gardens growing area and polytunnels in Findhorn",
    group: "recent",
    imagePosition: "center",
  },
  {
    slug: "transition-expertise",
    title: "Transition Expertise",
    kind: "Business website",
    platform: "Squarespace",
    url: "https://www.transitionexpertise.com/",
    summary:
      "Business analysis, content structure and website delivery for Transition Expertise, translated into a clear and responsive business website.",
    services: ["Business analysis", "Digital marketing", "Content structure", "Website delivery"],
    image: transitionImage,
    alt: "Transition Expertise website homepage",
    group: "earlier",
  },
  {
    slug: "tha-park-ecovillage",
    title: "THA Park Ecovillage Findhorn Ltd",
    kind: "Organisation website",
    platform: "Squarespace",
    url: "https://www.tha-ltd.org/",
    summary:
      "Business analysis and website delivery for THA Park Ecovillage Findhorn Ltd, organising complex company and community information into a structure people can use.",
    services: ["Business analysis", "Digital marketing", "Content structure", "Website delivery"],
    image: thaImage,
    alt: "THA Park Ecovillage Findhorn website homepage",
    group: "earlier",
  },
  {
    slug: "rem-core-drilling",
    title: "REM Core Drilling",
    kind: "Business website",
    platform: "Squarespace",
    url: "https://www.rem-dv.co.uk/",
    summary:
      "A straightforward and responsive business website designed and delivered for REM Core Drilling.",
    services: ["Website design", "Responsive delivery"],
    image: remImage,
    alt: "REM Core Drilling website homepage",
    group: "earlier",
  },
  {
    slug: "102-agency",
    title: "102 Agency",
    kind: "Corporate website",
    platform: "Odoo",
    summary: "Business analysis and responsive website delivery for a specialist agency.",
    services: ["Business analysis", "Digital marketing", "Website delivery"],
    image: agencyImage,
    alt: "102 Agency website homepage",
    group: "earlier",
  },
  {
    slug: "synchronicity",
    title: "Synchronicity",
    kind: "Corporate website",
    platform: "Odoo",
    summary: "Business analysis and responsive corporate website delivery.",
    services: ["Business analysis", "Digital marketing", "Website delivery"],
    image: synchronicityImage,
    alt: "Synchronicity website homepage",
    group: "earlier",
  },
];

export const recentProjects = projects.filter((project) => project.group === "recent");
export const earlierProjects = projects.filter((project) => project.group === "earlier");
