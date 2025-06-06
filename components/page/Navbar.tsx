import { MdFileDownload } from "react-icons/md";
import { useRef } from "react";

export default function Navbar() {
  const hoverBoxRef = useRef<HTMLDivElement>(null);
  const resumePdfPath = "KevinVu_SoftwareEngineer_Resume.pdf";
  const onHover = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    if (hoverBoxRef.current) {
      hoverBoxRef.current.style.transform = `translateX(${offsetLeft}px)`;
      hoverBoxRef.current.style.width = offsetWidth + "px";
    }
  };

  const onLeave = () => {
    if (hoverBoxRef.current) {
      hoverBoxRef.current.style.width = "0px";
    }
  };

  const openResumePdf = () => {
    window.open(resumePdfPath, "_blank");
  };

  return (
    <nav className="mb-12 flex justify-end py-10">
      <h1 className="text-xl"></h1>
      <div className="relative-hover relative" onMouseLeave={onLeave}>
        <div
          ref={hoverBoxRef}
          aria-hidden="true"
          className="hover-box rounded-6 absolute h-full rounded-md bg-neutral-900 transition-all duration-200"
        ></div>
        <ul className="relative z-20 flex">
          <li onMouseOver={onHover} className="flex">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-md px-4 py-2 font-medium tracking-wide text-neutral-100 transition-all duration-100 hover:text-white"
            >
              Projects
            </button>
          </li>
          <li onMouseOver={onHover} className="ml-4 flex">
            <button
              onClick={openResumePdf}
              className="rounded-md px-4 py-2 font-medium tracking-wide text-neutral-100 transition-all duration-100 hover:text-white"
            >
              Resume
              <MdFileDownload className="ml-1 inline-block" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
