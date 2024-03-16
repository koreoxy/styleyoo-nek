import { twMerge } from "tailwind-merge";

// TYPE COLORS
type PrimaryColors = {
  bg?: string;
  hoverBg?: string;
  focusRing?: string;
};

type SecondaryColors = {
  text?: string;
  hoverBorder?: string;
  hoverBg?: string;
  focusRing?: string;
};

type TertiaryColors = {
  text?: string;
  hoverText?: string;
  focusRing?: string;
};

type HoverColors = {
  border?: string;
  hoverBorder?: string;
  hoverBg?: string;
  text?: string;
  focusRing?: string;
};

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonComponent = {
  (
    props: BaseButtonProps & { variant?: "primary"; colors?: PrimaryColors }
  ): JSX.Element;
  (
    props: BaseButtonProps & { variant?: "secondary"; colors?: SecondaryColors }
  ): JSX.Element;
  (
    props: BaseButtonProps & { variant?: "tertiary"; colors?: TertiaryColors }
  ): JSX.Element;
  (
    props: BaseButtonProps & { variant?: "hover"; colors?: HoverColors }
  ): JSX.Element;
};

export const Button: ButtonComponent = ({
  variant = "primary",
  colors = {},
  ...props
}) => {
  // Base clasess
  const baseClasses: string =
    "inline-flex items-center justify center gap-2 rounded-md px-4 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

  const generateVariantClasses = (variant: string, colorProps: any) => {
    switch (variant) {
      case "primary":
        return `border border-transparent py-3 text-white ${
          colorProps.bg || "bg-emerald-500"
        } ${colorProps.hoverBg || "hover:bg-emerald-600"} ${
          colorProps.focusRing || "focus:ring-emerald-500"
        }`;
      case "hover":
        return `mx-1 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ${
          colorProps.hoverBg || "hover:bg-cyan-100"
        } duration-30  border-2 ${colorProps.border || "border-cyan-300"} ${
          colorProps.hoverBorder || "hover:border-cyan-200"
        } hover:font-bold rounded-xl py-3 ${
          colorProps.text || "text-gray-800"
        } ${colorProps.focusRing || "focus:ring-cyan-200"}`;
      default:
        return "";
    }
  };

  // Generate variant classses base ont the extracted color pros
  const variantClasses = generateVariantClasses(variant, colors);

  // Merge the base classes with the variant classes and any additional classes
  const mergedClasses = twMerge([baseClasses, variantClasses]); //   Generate variatn

  return <button className={mergedClasses} {...props} />;
};
