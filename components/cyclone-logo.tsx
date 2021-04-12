import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "../lib/constants";

type Props = {
  version: String;
};

const DesktopLogo = () => {
  return (
    <Image
      width={275}
      height={30}
      src='https://files.possibleweb.com/file/01brands/possibleweb/logos/possible-web-wordpress-management.png'
      alt='Possible Web Cyclone Logo'
    />
  );
};

const MobileLogo = () => {
  return (
    <Image
      width={64}
      height={50}
      src='https://files.possibleweb.com/file/01brands/cyclone-copy.png'
      alt='Possible Web Cyclone Logo'
    />
  );
};

const CycloneLogo = ({ version }: Props) => {
  console.log("Version", version);
  return (
    <Link href='/'>
      <a>
        <span className='sr-only'>{SITE_NAME}</span>
        {version === "mobile" ? <MobileLogo /> : <DesktopLogo />}
      </a>
    </Link>
  );
};

export default CycloneLogo;
