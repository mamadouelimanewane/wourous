import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <AdminSidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Simple Top Header for Search/Profile */}
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 shadow-sm z-10">
                    <h2 className="text-xl font-bold text-navy-900">Backoffice Management</h2>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-xs font-semibold text-gray-600">Système Opérationnel</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center font-bold border-2 border-gold-500">
                            AD
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
