import { Navbar } from "../../components/layout/Navbar";
import { OrganizationStructuredData, WebSiteStructuredData, SoftwareApplicationStructuredData } from "../../components/ui/StructuredData";

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
