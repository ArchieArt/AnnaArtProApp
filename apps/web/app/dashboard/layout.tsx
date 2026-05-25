import Sidebar from "../../components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full p-10">
        {children}
      </div>
    </div>
  );
}
