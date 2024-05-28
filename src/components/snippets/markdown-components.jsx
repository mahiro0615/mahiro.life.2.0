import Image from "next/image";
import Link from "next/link";


export const markdownComponents = {
    img: (props) => (
      <span className="block relative group">
        <Image
          {...props}
          height={3000}
          width={1500}
          alt={props.alt}
          className="my-0 w-full rounded-lg object-contain"
        />
      </span>
    ),
    a: ({ href, children }) => {
      // is an internal link
      if (href.includes("mahiro.life") || !href.includes("://")) {
        return <Link href={href}>{children}</Link>;
      }
  
      // is an external link
      return (
        <a href={href} target="_blank" rel="nofollow">
          {children}
        </a>
      );
    },
  };