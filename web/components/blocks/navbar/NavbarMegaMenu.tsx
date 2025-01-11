import * as React from "react";
import { Menu, BookOpen, Layers, Github } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@workspace/ui/components/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";

type Content = {
  brand: {
    name: string;
    icon: React.ReactNode;
  };
  navigation: {
    main: {
      id: string;
      label: string;
      subItems: {
        id: string;
        title: string;
        description: string;
        href: string;
      }[];
    }[];
    static: {
      id: string;
      path: string;
      label: string;
      icon: React.ReactNode;
    }[];
  };
  actions: {
    id: string;
    path: string;
    label: string;
    icon: React.ReactNode;
  }[];
};

const content: Content = {
  brand: {
    name: "Buildy/UI",
    icon: <Layers className="h-5 w-5" />,
  },
  navigation: {
    main: [
      {
        id: "getting-started",
        label: "Getting Started",
        subItems: [
          {
            id: "intro",
            title: "Introduction",
            description:
              "Re-usable components built using Radix UI and Tailwind CSS",
            href: "#",
          },
          {
            id: "install",
            title: "Installation",
            description:
              "How to install dependencies and structure your app",
            href: "#",
          },
        ],
      },
      {
        id: "components",
        label: "Components",
        subItems: [
          {
            id: "alert-dialog",
            title: "Alert Dialog",
            description:
              "A modal dialog that interrupts the user with important content",
            href: "#",
          },
          {
            id: "hover-card",
            title: "Hover Card",
            description: "Preview content available behind a link",
            href: "#",
          },
        ],
      },
    ],
    static: [
      {
        id: "docs",
        path: "#",
        label: "Documentation",
        icon: <BookOpen className="h-5 w-5" />,
      },
    ],
  },
  actions: [
    {
      id: "github",
      path: "#",
      label: "GitHub",
      icon: <Github className="h-5 w-5" />,
    },
  ],
} as const;

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  href?: string;
};

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ title, children, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href || ""}
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

const Brand = () => {
  const { name } = content.brand;
  return (
    <div className="flex items-center gap-2">
      <Layers className="h-5 w-5" />
      <span className="font-semibold">{name}</span>
    </div>
  );
};

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] overflow-y-auto">
        <div className="mb-6">
          <Brand />
        </div>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation for mobile devices
        </SheetDescription>
        <nav className="flex flex-col">
          <Accordion type="single" collapsible className="w-full">
            {content.navigation.main.map((section) => (
              <AccordionItem key={section.id} value={section.id}>
                <AccordionTrigger className="text-sm">
                  {section.label}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {section.subItems.map((item) => (
                      <Button
                        key={item.id}
                        variant="ghost"
                        className="justify-start w-full text-sm"
                        asChild
                      >
                        <a href={item.href}>{item.title}</a>
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-4 flex flex-col space-y-2">
            {content.navigation.static.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="justify-start w-full"
                asChild
              >
                <a href={item.path}>
                  {item.icon}
                  {item.label}
                </a>
              </Button>
            ))}
            {content.actions.map((action) => (
              <Button
                key={action.id}
                variant="outline"
                className="justify-start w-full"
                asChild
              >
                <a href={action.path}>
                  {action.icon}
                  {action.label}
                </a>
              </Button>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNavigation = () => (
  <nav className="hidden md:block">
    <NavigationMenu>
      <NavigationMenuList>
        {content.navigation.main.map((navItem) => (
          <NavigationMenuItem key={navItem.id}>
            <NavigationMenuTrigger>{navItem.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                {navItem.subItems.map((subItem) => (
                  <ListItem key={subItem.id} title={subItem.title} href={subItem.href}>
                    {subItem.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {content.navigation.static.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink asChild>
              <a href={item.path} className={navigationMenuTriggerStyle()}>
                {item.label}
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </nav>
);

type NavbarProps = React.ComponentPropsWithoutRef<"header"> & Partial<Content>;

export const NavbarMegaMenu = (props: NavbarProps) => {
  const { actions } = {
    ...content,
    ...props,
  };

  return (
    <>
      <header className="sticky top-0 z-20 w-full border-b bg-background/95">
        <div className="container mx-auto px-4 flex h-14 items-center">
          <div className="mr-4 flex">
            <Brand />
          </div>
          <DesktopNavigation />
          <div className="flex flex-1 items-center justify-end space-x-2">
            <MobileNavigation />
            {actions.map((action) => (
              <Button
                key={action.id}
                variant="outline"
                className="hidden md:flex"
                asChild
              >
                <a href={action.path}>
                  {action.icon}
                  {action.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </header>
      <HeroSection />
    </>
  );
};

const HeroSection = () => (
  <section className="w-full py-16 lg:py-32">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col text-center gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h2 className="max-w-2xl text-3xl md:text-4xl lg:text-6xl font-bold">
            How do use the navbar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Content Hero
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Strict adherence to the current component name
const componentName = "NavbarMegaMenu" as const;