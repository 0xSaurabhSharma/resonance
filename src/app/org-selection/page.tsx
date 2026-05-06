import { OrganizationList } from "@clerk/nextjs";

const OrgSelectionPage = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-background">
        <OrganizationList
          hidePersonal
          afterCreateOrganizationUrl={"/"}
          afterSelectOrganizationUrl={"/"}
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-lg",
            },
          }}
        />
      </div>
    </>
  );
};

export default OrgSelectionPage;
