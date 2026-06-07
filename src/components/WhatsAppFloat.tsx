import { WHATSAPP_URL } from "@/lib/site";

/** Floating WhatsApp button — visible on every page. */
export default function WhatsAppFloat() {
  return (
    <div className="wa-float">
      <span className="pulse" aria-hidden="true" />
      <a href={WHATSAPP_URL} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <span className="wa-txt">Chat with us</span>
        <svg viewBox="0 0 32 32" fill="#fff" aria-hidden="true">
          <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.3.8.8-4.2-.2-.4C5.6 18.6 5.1 16.8 5.1 15 5.1 9.5 9.9 5.1 16 5.1S26.9 9.5 26.9 15 22.1 24.8 16 24.8zm5.8-7.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" />
        </svg>
      </a>
    </div>
  );
}
