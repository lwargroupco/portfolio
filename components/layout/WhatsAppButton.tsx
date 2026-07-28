const WHATSAPP_NUMBER = "923144010027";
const PREFILLED_MESSAGE =
  "Hi LWAR Group, I'd like to know more about your services.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    PREFILLED_MESSAGE,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with LWAR Group on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none hidden max-w-0 overflow-hidden whitespace-nowrap rounded-lg bg-[#0d2b1c] px-0 py-2.5 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:max-w-xs group-hover:px-4 group-hover:opacity-100 sm:inline-block">
        Chat on WhatsApp
      </span>

      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 motion-reduce:animate-none" />

        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform duration-200 group-hover:scale-105">
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="h-7 w-7 fill-white"
          >
            <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.66 4.523 1.803 6.383L4 29l7.804-1.766A11.94 11.94 0 0 0 16.004 27C22.632 27 28 21.627 28 15S22.632 3 16.004 3Zm7.03 17.09c-.297.836-1.47 1.53-2.412 1.73-.642.135-1.48.243-4.302-.923-3.61-1.494-5.933-5.156-6.115-5.395-.176-.238-1.462-1.946-1.462-3.712 0-1.767.905-2.633 1.226-2.994.297-.335.647-.42.863-.42.216 0 .432.002.622.012.216.01.482-.082.755.575.297.72.997 2.487 1.086 2.667.09.18.15.39.03.628-.12.238-.18.386-.36.596-.18.21-.378.469-.54.63-.18.18-.367.375-.157.735.21.36.937 1.545 2.01 2.502 1.382 1.233 2.547 1.615 2.906 1.795.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.207 1.706Z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
