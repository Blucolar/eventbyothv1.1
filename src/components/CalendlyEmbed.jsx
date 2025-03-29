"use client";

import { useState } from "react";
import { PopupModal } from "react-calendly";

const CalendlyPopup = ({title}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-white px-4 py-4 rounded"
      >
        {title}
      </button>

      {isOpen && (
        <PopupModal
          url="https://calendly.com/eventsbyoth/30min?hide_gdpr_banner=1&background_color=f8efe0&primary_color=e88413" // Replace with your Calendly link
          rootElement={document.body} // ✅ Required to prevent error
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
        />
      )}
    </div>
  );
};

export default CalendlyPopup;
