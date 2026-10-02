/**
 * Eklavya Computers - Centralized Business Configuration
 * -------------------------------------------------------------
 * This configuration file houses all business information, contact details,
 * placeholders, and WhatsApp message templates.
 * 
 * Replace placeholder values below with confirmed business details before production launch.
 */

const EKLAVYA_CONFIG = {
  // Institute Identity
  INSTITUTE_NAME: "Eklavya Computers",
  TAGLINE: "Build Your Digital Skills. Shape Your Future.",
  SUBTITLE: "Learn MS-CIT, Tally, and programming with practical computer training at Eklavya Computers.",
  
  // Contact Details
  PHONE_DISPLAY: "+91 98901 17281",
  PHONE_TEL: "+919890117281",
  
  WHATSAPP_NUMBER: "+91 98901 17281",
  WHATSAPP_RAW: "919890117281",
  
  // Location & Physical Address
  ADDRESS_DISPLAY: "63, Deshmukh Nagar, Shivaji Nagar Road, Garkheda Parisar, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431005",
  LOCALITY: "Chhatrapati Sambhajinagar (Aurangabad)",
  REGION: "Maharashtra",
  POSTAL_CODE: "431005",
  COUNTRY: "India",
  GOOGLE_MAPS_URL: "https://maps.app.goo.gl/Bx7hT397SziSuRh26",
  GOOGLE_MAPS_EMBED_URL: "https://maps.google.com/maps?q=Eklavya+Computers+Garkheda+Parisar+Aurangabad&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // Business Hours
  // [ACTION REQUIRED BEFORE LAUNCH: Confirm specific operating hours]
  BUSINESS_HOURS: "Monday – Saturday: 8:00 AM – 8:00 PM (Batch timings on enquiry)",

  // Pre-formatted WhatsApp Enquiry Messages
  WHATSAPP_MESSAGES: {
    default: "Hello, I would like to know more about the courses at Eklavya Computers.",
    mscit: "Hello, I would like to enquire about the MS-CIT course at Eklavya Computers.",
    tally: "Hello, I would like to enquire about the Tally / Accounting course at Eklavya Computers.",
    c_prog: "Hello, I would like to enquire about the C Programming course at Eklavya Computers.",
    cpp_prog: "Hello, I would like to enquire about the C++ Programming course at Eklavya Computers.",
    java_prog: "Hello, I would like to enquire about the Java Programming course at Eklavya Computers.",
    adv_java: "Hello, I would like to enquire about the Advanced Java course at Eklavya Computers.",
    fees: "Hello, I would like to enquire about the course fees at Eklavya Computers.",
    batches: "Hello, I would like to know about upcoming batches and admission at Eklavya Computers."
  },
  // Social Channels (Optional / Configurable)
  SOCIAL_LINKS: {
    facebook: "",
    instagram: "",
    youtube: ""
  }
};

// Prevent runtime mutations
if (typeof Object.freeze === "function") {
  Object.freeze(EKLAVYA_CONFIG);
  Object.freeze(EKLAVYA_CONFIG.WHATSAPP_MESSAGES);
  Object.freeze(EKLAVYA_CONFIG.SOCIAL_LINKS);
}

// Export for Node/CommonJS environments if imported
if (typeof module !== "undefined" && module.exports) {
  module.exports = EKLAVYA_CONFIG;
}
