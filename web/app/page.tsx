import { LayoutTemplate, Github } from "lucide-react"
import { HeroSplitWithGallery } from "@/components/blocks/hero/HeroSplitWithGallery"
import { ButtonProps } from "@workspace/ui/components/button"
import { BadgeProps } from "@workspace/ui/components/badge"

type CustomContent = {
  badge?: BadgeProps & {
    text: string
  }
  title: string
  description: string
  buttons?: Array<ButtonProps & {
    id: string
    text: string
    icon?: React.ReactNode
    external?: boolean
    href?: string
  }>
  images: {
    grid: {
      className: string
      items: Array<{
        id: string
        src: string
        className: string
      }>
    }
  }
}

const customContent: CustomContent = {
  badge: {
    text: "BuildY/UI",
    className: "text-white bg-violet-800 px-2 py-1"
  },
  title: "UI/UX Design System",
  description: "BuildY/UI is a design system for building modern and beautiful websites",
  buttons: [
    {
      id: "components",
      text: "UI Components",
      className: "text-white bg-violet-500 hover:bg-violet-600",
      href: "https://ui.hinddy.com/components",
      external: true,
      icon: <LayoutTemplate className="w-4 h-4 ml-2 inline-block" />
    },
    {
      id: "github",
      text: "GitHub",
      className: "text-secondary bg-slate-100 hover:bg-slate-200",
      href: "https://github.com/alexy-os/react-shadcn-uiblocks",
      external: true,
      icon: <Github className="w-4 h-4 ml-2 inline" />
    }
  ],
  images: {
    grid: {
      className: "grid grid-cols-2 gap-8 h-full w-full p-2 md:p-8",
      items: [
        {
          id: "image1",
          src: "https://img.freepik.com/free-photo/happy-woman-glasses-makes-winning-gesture-sincerely-rejoices-lady-with-red-lipstick-dressed-gray-sweater-looking-laptop_197531-13467.jpg",
          className: "w-full h-full object-cover rounded-md"
        },
        {
          id: "image2",
          src: "https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg",
          className: "w-full h-full object-cover rounded-md row-span-2"
        },
        {
          id: "image3",
          src: "https://img.freepik.com/free-photo/view-old-tree-lake-with-snow-covered-mountains-cloudy-day_181624-28954.jpg",
          className: "w-full h-full object-cover rounded-md"
        }
      ]
    }
  }
}

export default function Page() {
  return <HeroSplitWithGallery className="w-full h-screen bg-gradient-to-br from-slate-950 to-violet-950" {...customContent } />
}
