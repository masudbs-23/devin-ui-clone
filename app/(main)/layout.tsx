import { Navbar } from "../../components/Navbar";
import { OrganizationStructuredData, WebSiteStructuredData, SoftwareApplicationStructuredData } from "../../components/StructuredData";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationStructuredData />
      <WebSiteStructuredData />
      <SoftwareApplicationStructuredData />
      <Navbar />
      {children}
    </>
  );
}
