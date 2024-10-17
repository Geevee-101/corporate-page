import Link from "next/link";
import FooterLink from "../FooterLink";
import { iconMail, iconMap, iconMessage } from "@/app/assets/images";
import IconLinkdin from "../IconLinkdin";
import IconTwitter from "../IconTwitter";
import IconFacebook from "../IconFacebook";

export default function Footer() {
  return (
    <footer className="text-white bg-gray-700">
      <div className="container mx-auto grid grid-rows-[auto_auto] lg:grid-cols-[auto_auto] py-16">
        <div className="grid grid-rows-[40px_auto] pb-8 lg:pb-0 border-b-2 lg:border-b-0 lg:border-r-2 border-secondaryDark">
          <div></div>
          <div className="flex gap-4 justify-center lg:justify-start">
            <h4>Get Social</h4>
            <div className="flex gap-2">
              <IconLinkdin linkPath="" />
              <IconTwitter linkPath="" />
              <IconFacebook linkPath="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-8 lg:pt-0 gap-3 md:gap-0 md:justify-between">
          <FooterLink
            linkPath=""
            linkIcon={iconMail}
            linkIconAlt="mail icon"
            title="Email Us"
            details="info@volcanic.com"
          />
          <FooterLink
            linkPath=""
            linkIcon={iconMessage}
            linkIconAlt="message icon"
            title="Get In Touch"
            details="UK: 0161 217 1517"
          />
          <FooterLink
            linkPath=""
            linkIcon={iconMap}
            linkIconAlt="map icon"
            title="Find Us"
            details="Dale House Floor 8, Tiviot Dale Stockport, SK1 1TB"
          />
        </div>
      </div>
    </footer>
  );
}
