import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 flex flex-col">


        <section className="p-8 overflow-auto flex-1">{children}</section>
      </main>
    </div>
  );
}
