import Container from "@/components/Container";
import ProfileSidebar from "@/components/ProfileSidebar";

export default async function ProfileLayout({ children }) {

  return(
    <>
      <Container>
        <div className="flex max-md:flex-col gap-4">
          <ProfileSidebar
            active="dashboard"
            className="max-sm:grow shrink-0 max-md:w-full md:sticky md:self-start md:top-20"
          />
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {children}
          </div>
        </div>
      </Container>
    </>
  );
}