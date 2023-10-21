import Image from "next/image"
import webpunksLogoSVG from "../../../../public/WEBPUNKS.svg"
import webpunksDotSVG from "../../../../public/dot.svg"
import styles from "./styles.module.css"

function Footer() {
  return (
    <footer>
      <div
        className={`flex flex-col justify-evenly bg-[#0046D2] min-h-[180px] w-full px-20 ${styles.tabletFooterContainer}`}
      >
        <Image
          priority
          src={webpunksLogoSVG}
          alt="Webpunks logo"
          className="w-[207px] h-[27px]"
        />
        <div
          className={`flex flex-row justify-between ${styles.tabletTextContainer}`}
        >
          <div className={`flex flex-row ${styles.tabletText}`}>
            <div className="text-white pr-5 underline">hello@webpunks.com</div>
            <div className="text-white px-5 underline">+3411 444 444</div>
          </div>
          <div
            className={`flex flex-row justify-center ${styles.tabletText} ${styles.tabletPrivacyContainer}`}
          >
            <div className="text-white pr-2 ">Terms</div>
            <div>
              <Image priority src={webpunksDotSVG} alt="Dot separator" />
            </div>
            <div className="text-white px-2">Privacy</div>
            <div>
              <Image priority src={webpunksDotSVG} alt="Dot separator" />
            </div>
            <div className="text-white pl-2">© 2023 Webpunks</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
