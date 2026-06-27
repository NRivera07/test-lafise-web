import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <Header />

        <section className="p-8 overflow-auto flex-1">{children}</section>
      </main>
    </div>
  );
}
