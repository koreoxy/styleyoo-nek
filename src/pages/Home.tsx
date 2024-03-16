import { Button } from "../components/library/Button";
import { Container } from "../components/site/Container";
import { Section } from "../components/site/Section";

export const HomePage = () => {
  return (
    <>
      <div>
        <div className="flex gap-3 items-center py-3">
          <h2 className="text-3xl font-bold">Hello, Welcome to</h2>
          <button className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-100 duration-30 border-2 border-gray-800 hover:border-cyan-200 hover:font-bold rounded-xl py-1 px-2 hidden sm:block">
            Let's surf
          </button>
        </div>
        <h1 className="font-ultra text-3xl sm:text-5xl text-gray-800">
          STYLEYOO/NEK
        </h1>
        <p className="mt-2 text-xl font-medium">
          List Style UI Component for React.js using Tailwindcss
        </p>
        <button className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-100 duration-30 border-2 border-gray-800 hover:border-cyan-200 hover:font-bold rounded-xl py-1 px-2 block sm:hidden mt-2">
          Let's surf
        </button>
      </div>

      <div>
        <h1 className="font-bold text-xl mb-5">Example Style UI Component</h1>

        <Container
          title="Button Component"
          description="Style button component with basic sample"
        >
          <Section title="Primary Button">
            <Button>Default Primary</Button>
            <Button>Default Primary</Button>
            <Button>Default Primary</Button>
          </Section>

          <Section title="Button Hover">
            <Button variant="hover">Default Primary</Button>
            <Button
              variant="hover"
              colors={{
                hoverBg: "hover:bg-rose-100",
                text: "text-rose-400",
                hoverBorder: "border-rose-200",
                focusRing: "focus:ring-rose-200",
              }}
            >
              Hover Rose
            </Button>
            <Button
              variant="hover"
              colors={{
                hoverBg: "hover:bg-fuchsia-100",
                text: "text-fuchsia-400",
                hoverBorder: "border-fuchsia-200",
                focusRing: "focus:ring-fuchsia-200",
              }}
            >
              Fuchsia
            </Button>
            <Button
              variant="hover"
              colors={{
                hoverBg: "hover:bg-indigo-100",
                text: "text-indigo-400",
                hoverBorder: "border-indigo-200",
                focusRing: "focus:ring-indigo-200",
              }}
            >
              Indigo
            </Button>
            <Button
              variant="hover"
              colors={{
                hoverBg: "hover:bg-amber-100",
                text: "text-amber-400",
                hoverBorder: "border-amber-200",
                focusRing: "focus:ring-amber-200",
              }}
            >
              Amber
            </Button>
            <Button
              variant="hover"
              colors={{
                hoverBg: "hover:bg-emerald-100",
                text: "text-emerald-400",
                hoverBorder: "border-emerald-200",
                focusRing: "focus:ring-emerald-200",
              }}
            >
              Emerald
            </Button>
          </Section>
        </Container>
      </div>
    </>
  );
};
