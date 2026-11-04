import { WHATSAPP_HREF } from "@/content/site";

export function WhatsAppIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.004 3.2c-7.068 0-12.8 5.732-12.8 12.8 0 2.257.59 4.46 1.71 6.404L3.2 28.8l6.564-1.722a12.75 12.75 0 0 0 6.24 1.622h.005c7.066 0 12.796-5.732 12.796-12.8 0-3.42-1.332-6.636-3.75-9.054A12.714 12.714 0 0 0 16.004 3.2Zm0 23.344h-.004a10.6 10.6 0 0 1-5.404-1.48l-.388-.23-4.018 1.054 1.072-3.918-.252-.402a10.586 10.586 0 0 1-1.626-5.64c0-5.854 4.764-10.618 10.622-10.618 2.836 0 5.502 1.106 7.508 3.112a10.55 10.55 0 0 1 3.11 7.51c0 5.856-4.764 10.612-10.62 10.612Zm5.826-7.948c-.318-.16-1.888-.932-2.18-1.038-.292-.106-.504-.16-.716.16-.212.318-.824 1.038-1.01 1.25-.186.212-.372.24-.69.08-.318-.16-1.346-.496-2.564-1.582-.948-.846-1.588-1.89-1.774-2.208-.186-.318-.02-.49.14-.648.144-.142.318-.372.478-.558.16-.186.212-.318.318-.532.106-.212.054-.398-.026-.558-.08-.16-.718-1.728-.984-2.366-.258-.62-.522-.536-.718-.546l-.61-.01c-.212 0-.558.08-.85.398-.292.318-1.116 1.09-1.116 2.658s1.142 3.084 1.302 3.296c.16.212 2.248 3.434 5.446 4.814.76.328 1.354.524 1.816.672.764.242 1.46.208 2.01.126.614-.092 1.888-.772 2.154-1.516.266-.744.266-1.382.186-1.516-.08-.132-.292-.212-.61-.372Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      title="Falar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.42)] transition duration-300 hover:scale-108 hover:bg-[#1ebe5d] hover:shadow-[0_16px_38px_rgba(37,211,102,0.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6 sm:size-15"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/45 animate-ping [animation-duration:2.6s]"
      />
      <WhatsAppIcon className="relative size-7 sm:size-8" />
    </a>
  );
}


