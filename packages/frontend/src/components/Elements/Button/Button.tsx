import { MoonLoader } from "react-spinners";

const variants = {
  primary: "bg-blue-600 text-white",
  danger: "bg-red-600 text-white",
};

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading,
  className = "",
  ...props
}: Props): JSX.Element => {
  return (
    <button
      {...props}
      className={`${className} ${variants[variant]} ${sizes[size]} border border-gray-300 rounded-md bg-blue-600 text-white hover:opacity-80`}
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <MoonLoader size={15.5} color="white" />
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};
