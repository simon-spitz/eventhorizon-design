import type { ImageMetadata } from "astro";
import transitionCover from "../assets/images/home/transition-expertise.webp";
import thaCover from "../assets/images/home/tha.webp";
import agencyCover from "../assets/images/home/102-agency.webp";
import remCover from "../assets/images/home/rem-core-drilling.webp";
import synchronicityCover from "../assets/images/home/synchronicity.webp";
import eventHorizonCover from "../assets/images/home/event-horizon.webp";
import transitionDesktop from "../assets/images/projects/transition-expertise/desktop.webp";
import transitionPhone1 from "../assets/images/projects/transition-expertise/phone-01.webp";
import transitionPhone2 from "../assets/images/projects/transition-expertise/phone-02.webp";
import transitionPhone3 from "../assets/images/projects/transition-expertise/phone-03.webp";
import thaDesktop from "../assets/images/projects/tha/desktop.webp";
import thaPhone1 from "../assets/images/projects/tha/phone-01.webp";
import thaPhone2 from "../assets/images/projects/tha/phone-02.webp";
import thaPhone3 from "../assets/images/projects/tha/phone-03.webp";
import agencyDesktop from "../assets/images/projects/102-agency/desktop.webp";
import agencyPhone1 from "../assets/images/projects/102-agency/phone-01.webp";
import agencyPhone2 from "../assets/images/projects/102-agency/phone-02.webp";
import agencyPhone3 from "../assets/images/projects/102-agency/phone-03.webp";
import remDesktop from "../assets/images/projects/rem-core-drilling/desktop.webp";
import remPhone1 from "../assets/images/projects/rem-core-drilling/phone-01.webp";
import remPhone2 from "../assets/images/projects/rem-core-drilling/phone-02.webp";
import remPhone3 from "../assets/images/projects/rem-core-drilling/phone-03.webp";
import synchronicityDesktop from "../assets/images/projects/synchronicity/desktop.webp";
import synchronicityPhone1 from "../assets/images/projects/synchronicity/phone-01.webp";
import synchronicityPhone2 from "../assets/images/projects/synchronicity/phone-02.webp";
import synchronicityPhone3 from "../assets/images/projects/synchronicity/phone-03.webp";
import eventHorizonDesktop from "../assets/images/projects/event-horizon/desktop.webp";
import eventHorizonPhone1 from "../assets/images/projects/event-horizon/phone-01.webp";
import eventHorizonPhone2 from "../assets/images/projects/event-horizon/phone-02.webp";
import eventHorizonPhone3 from "../assets/images/projects/event-horizon/phone-03.webp";

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  kind: string;
  cms: string;
  url?: string;
  summary: string;
  cover: ImageMetadata;
  desktop: ImageMetadata;
  phones: ImageMetadata[];
  alt: string;
}

export const projects: Project[] = [
  {
    slug: "transition-expertise",
    title: "Transition Expertise",
    shortTitle: "Transition Expertise",
    kind: "Business website",
    cms: "Squarespace",
    url: "https://www.transitionexpertise.com/",
    summary: "A responsive Squarespace business website for Transition Expertise, presented across desktop and mobile layouts.",
    cover: transitionCover,
    desktop: transitionDesktop,
    phones: [transitionPhone1, transitionPhone2, transitionPhone3],
    alt: "Transition Expertise website shown on desktop and mobile screens",
  },
  {
    slug: "tha-park-ecovillage",
    title: "THA Park Ecovillage Findhorn Ltd",
    shortTitle: "THA Ltd",
    kind: "Organisation website",
    cms: "Squarespace",
    url: "https://www.tha-ltd.org/",
    summary: "A responsive Squarespace organisation website for THA Park Ecovillage Findhorn Ltd, shown across desktop and mobile layouts.",
    cover: thaCover,
    desktop: thaDesktop,
    phones: [thaPhone1, thaPhone2, thaPhone3],
    alt: "THA Park Ecovillage Findhorn website shown on desktop and mobile screens",
  },
  {
    slug: "102-agency",
    title: "102 Agency corporate website",
    shortTitle: "102 Agency",
    kind: "Corporate website",
    cms: "Odoo",
    summary: "A corporate website for 102 Agency, delivered in Odoo and designed to work across desktop and mobile layouts.",
    cover: agencyCover,
    desktop: agencyDesktop,
    phones: [agencyPhone1, agencyPhone2, agencyPhone3],
    alt: "102 Agency website shown on desktop and mobile screens",
  },
  {
    slug: "rem-core-drilling",
    title: "REM Core Drilling business website",
    shortTitle: "REM Core Drilling",
    kind: "Business website",
    cms: "Squarespace",
    url: "https://www.rem-dv.co.uk/",
    summary: "A responsive Squarespace business website for REM Core Drilling, with layouts tailored to desktop and mobile screens.",
    cover: remCover,
    desktop: remDesktop,
    phones: [remPhone1, remPhone2, remPhone3],
    alt: "REM Core Drilling website shown on desktop and mobile screens",
  },
  {
    slug: "synchronicity",
    title: "Synchronicity corporate website",
    shortTitle: "Synchronicity",
    kind: "Corporate website",
    cms: "Odoo",
    summary: "A corporate website for Synchronicity, delivered in Odoo and presented across desktop and mobile layouts.",
    cover: synchronicityCover,
    desktop: synchronicityDesktop,
    phones: [synchronicityPhone1, synchronicityPhone2, synchronicityPhone3],
    alt: "Synchronicity website shown on desktop and mobile screens",
  },
  {
    slug: "event-horizon-design",
    title: "Event Horizon Design website",
    shortTitle: "Event Horizon Design",
    kind: "Portfolio website",
    cms: "Squarespace",
    url: "https://www.eventhorizon-design.com/",
    summary: "The previous Event Horizon Design portfolio website, built in Squarespace and adapted across desktop and mobile layouts.",
    cover: eventHorizonCover,
    desktop: eventHorizonDesktop,
    phones: [eventHorizonPhone1, eventHorizonPhone2, eventHorizonPhone3],
    alt: "Event Horizon Design website shown on desktop and mobile screens",
  },
];
