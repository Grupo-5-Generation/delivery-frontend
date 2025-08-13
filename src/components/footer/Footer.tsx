import { GithubLogoIcon } from "@phosphor-icons/react";
function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-[#434522] text-white">
        <div className="w-full px-8 flex justify-between items-center py-4">
          <div className="flex gap-2">
            <p className="text-lg">Acesse nosso Github: </p>

            <a href="https://github.com/Grupo-5-Generation" target="_blank">
              <GithubLogoIcon size={28} weight="bold" />
            </a>
          </div>
          <p className="text-xl font-bold">Grupo 5 | {data}</p>
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Footer;
