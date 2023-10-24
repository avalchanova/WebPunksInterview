import { useRouter, usePathname, redirect } from "next/navigation"
import Image from "next/image"
import BackButtonSVG from "../../../../public/Icons.svg"

const HomeButton = () => {
  const router = useRouter()
  const path = usePathname()
  const IsItHome = path === "/" ? true : false

  const handleClick = () => (IsItHome ? router.push("/") : router.back())

  const getNavigationText = () => (IsItHome ? "Home" : "Back")

  return (
    <div
      className="flex py-20 justify-center items-center cursor-pointer"
      onClick={handleClick}
    >
      <p className="flex pr-2 gap-16">{getNavigationText()}</p>
      {!IsItHome && (
        <Image
          priority
          src={BackButtonSVG}
          alt="Back Button Image"
          width={20}
          height={20}
        />
      )}
    </div>
  )
}

export default HomeButton
