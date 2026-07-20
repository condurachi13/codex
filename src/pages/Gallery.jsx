import DetailPage from "../components/DetailPage";
import { galleryImages, pageData } from "./pageData";
export default () => (
  <DetailPage page={pageData.gallery} gallery={galleryImages} />
);
