
import { PopupButton } from "react-calendly";

type Props = {
  url: string;
  buttonText?: string;
};

export default function CalendlyPopupButton({ url, buttonText = "Book Free Consultation" }: Props) {
  // rootElement is required for accessibility/modal stacking in some implementations.
  const rootEl = typeof window !== "undefined" ? document.getElementById("root") : null;

  if (!rootEl) return null;
  
  return (
    <PopupButton
      url={url}
      rootElement={rootEl}
      text={buttonText}
      styles={{}}
    />
  );
}
