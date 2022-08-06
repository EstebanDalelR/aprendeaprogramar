import Image from "next/image";
import getAnchor from "../../utils/getAnchor";
import AnchorImage from "./AnchorImage";

const H2 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h3 id={anchor}>
      <a href={link} className="anchor-link">
        {children}
        <AnchorImage />
      </a>
    </h3>
  );
};

export default H2;
