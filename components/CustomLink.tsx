import Link from "next/link";

type CustomLinkProps = {
  href: string;
  text: string;
};

export default function CustomLink({ href, text }: CustomLinkProps) {
  return (
    <span>
      {" "}
      <Link
        href={href}
        title={text}
        className="border-b border-dashed border-neon text-neon font-semibold hover:text-main hover:bg-neon"
      >
        {text}
      </Link>{" "}
    </span>
  );
}
