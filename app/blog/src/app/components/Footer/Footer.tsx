import Image from "next/image"
import webpunksLogoSVG from "../../../../public/WEBPUNKS.svg"
import webpunksDotSVG from "../../../../public/dot.svg"

function Footer() {
  return (
    <footer>
      <div className="flex flex-col justify-evenly bg-[#0046D2] min-h-[180px] w-full px-20">
        <Image
          priority
          src={webpunksLogoSVG}
          alt="Webpunks logo"
          className="w-[207px] h-[27px]"
        />
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="text-white pr-5 underline">hello@webpunks.com</div>
            <div className="text-white px-5 underline">+3411 444 444</div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="text-white px-5">Terms</div>
            <div>
              <Image priority src={webpunksDotSVG} alt="Dot separator" />
            </div>
            <div className="text-white px-5">Privacy</div>
            <div>
              <Image priority src={webpunksDotSVG} alt="Dot separator" />
            </div>
            <div className="text-white pl-5">© 2023 Webpunks</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
