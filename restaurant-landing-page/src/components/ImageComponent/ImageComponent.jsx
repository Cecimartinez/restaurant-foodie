export const ImageComponent = ({src, alt, className})=> {
  return (
    <>
        <img src={src} alt={alt}className={className} />
    </>
  )
}