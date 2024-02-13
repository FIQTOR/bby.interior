import { SiAdobephotoshop, SiOpenscad, SiSketchup } from "react-icons/si";

interface iconProps {
  className?: string;
}

export const Lumion = ({ className }: iconProps) => (
  <div className='w-7 h-7 bg-blue-900 p-1'>
    <svg viewBox="0 0 30 40" xmlns="http://www.w3.org/2000/svg" role="img" className={`w-full h-full fill-blue-300 ${className}`}><path fillRule="evenodd" clipRule="evenodd" d="M0 0V13.3333C0 20.6972 5.98889 26.6666 13.3768 26.6666V13.3333C13.3768 5.96943 7.38787 0 0 0ZM0 26.667H16.2848C23.6726 26.667 29.6615 32.6364 29.6615 40.0003H13.3768C5.98889 40.0003 0 34.0308 0 26.667Z"></path></svg>
  </div>
)

export const Enscape = ({ className }: iconProps) => (
  <div className='w-7 h-7 bg-blue-900'>
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_47_6559)"><rect width="40" height="40" fill="white"></rect><path d="M0 0V40H40V0H0Z" fill="#F7941D"></path><path d="M31.9236 16.5689L21.6858 25.1153C20.7087 25.9314 19.2943 25.9318 18.3164 25.1165L11.8864 19.7541C11.63 19.5403 11.5137 19.2007 11.5847 18.8733L12.0777 16.6C12.1323 16.349 12.4239 16.2366 12.6309 16.3866L18.5727 20.6996C19.4263 21.3189 20.5771 21.3189 21.4303 20.6984L30.8487 13.8525C30.9397 13.7863 30.9774 13.6626 30.9413 13.5514L29.9233 10.4369C29.8992 10.3637 29.8438 10.3047 29.772 10.2768L20.967 6.84864C20.346 6.60651 19.6577 6.60651 19.0364 6.84824L10.2273 10.2768C10.1559 10.3047 10.1002 10.3637 10.0761 10.4369L6.6806 20.8395C6.64852 20.9377 6.67418 21.0452 6.7468 21.1184L18.0581 32.5076C19.1523 33.6091 20.8514 33.6091 21.9453 32.5072L33.2562 21.1151C33.3268 21.044 33.3517 20.9393 33.3204 20.8439L31.9236 16.5689ZM19.1295 10.9193C19.6859 10.661 20.3172 10.661 20.874 10.9193L24.7829 12.7334L21.0368 15.0052C20.3938 15.3948 19.6092 15.3948 18.9662 15.0052L15.2205 12.7334L19.1295 10.9193Z" fill="#F1F5F9"></path></g><defs><clipPath id="clip0_47_6559"><rect width="40" height="40" fill="white"></rect></clipPath></defs></svg>
  </div >
)


// Language
export const Sketchup = ({ className }: iconProps) => (<SiSketchup className={`fill-blue-900 ${className}`} />)
export const Adobephotoshop = ({ className }: iconProps) => (<SiAdobephotoshop className={`fill-blue-950 ${className}`} />)