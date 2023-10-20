import Image, { ImageProps } from "next/image"
import { PostContents, PostCover } from "../../../../types/Post"
import styles from "./styles.module.css"

interface ImageRendererProps {
  src: PostCover
  alt: PostContents["title"]
  width: ImageProps["width"] // width and height are mandatory props for Nextjs
  height: ImageProps["height"]
  priority?: ImageProps["priority"]
  className?: ImageProps["className"]
}

function ImageRenderer({ ...props }: ImageRendererProps) {
  return (
    <div>
      <Image
        src={props.src.desktop}
        alt={props.alt}
        priority={props.priority}
        className={`${styles.image} ${styles.desktop} ${props.className}`}
        width={props.width}
        height={props.height}
      />
      <Image
        src={props.src.tablet}
        alt={props.alt}
        priority={props.priority}
        className={`${styles.image} ${styles.tablet} ${props.className}`}
        width={props.width}
        height={props.height}
      />
      <Image
        src={props.src.mobile}
        alt={props.alt}
        priority={props.priority}
        className={`${styles.image} ${styles.mobile} ${props.className}`}
        width={props.width}
        height={props.height}
      />
    </div>
  )
}

export default ImageRenderer
