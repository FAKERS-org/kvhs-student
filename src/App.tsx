import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import DashboardPage from "@/app/page";
import SchedulePage from "@/app/schedule/page";
import GradesPage from "@/app/grades/page";
import MorePage from "@/app/more/page";
import AttendancePage from "@/app/more/attendance/page";
import AnnouncementsPage from "@/app/more/announcements/page";
import AssignmentsPage from "@/app/more/assignments/page";
import ProfilePage from "@/app/more/profile/page";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-khmer antialiased">
        <main className="max-w-lg mx-auto pb-20 min-h-screen">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/grades" element={<GradesPage />} />
            <Route path="/more" element={<MorePage />} />
            <Route path="/more/attendance" element={<AttendancePage />} />
            <Route path="/more/announcements" element={<AnnouncementsPage />} />
            <Route path="/more/assignments" element={<AssignmentsPage />} />
            <Route path="/more/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
