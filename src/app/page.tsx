import { Link } from "react-router-dom";
import { attendanceHistory, announcements, weeklySchedule, assignments, student } from "@/lib/mock-data";

function getTodayClasses() {
  // Use Monday (day 0) as "today" for demo since 2026-04-06 is a Monday
  const todayDay = 0;
  return weeklySchedule
    .filter((c) => c.day === todayDay)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
}

function getCurrentAttendanceStatus() {
  const today = attendanceHistory[0];
  return today;
}

function getUpcomingAssignments() {
  return assignments
    .filter((a) => !a.isSubmitted)
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 3);
}

function getUnreadAnnouncements() {
  return announcements.filter((a) => !a.isRead).slice(0, 3);
}

const statusColors: Record<string, string> = {
  present: "bg-green-100 text-green-700 border-green-200",
  absent: "bg-red-100 text-red-700 border-red-200",
  late: "bg-yellow-100 text-yellow-700 border-yellow-200",
  excused: "bg-blue-100 text-blue-700 border-blue-200",
};

const statusLabelsKh: Record<string, string> = {
  present: "មានវត្តមាន",
  absent: "អវត្តមាន",
  late: "យឺត",
  excused: "មានច្បាប់",
};

export default function DashboardPage() {
  const todayClasses = getTodayClasses();
  const attendanceToday = getCurrentAttendanceStatus();
  const upcomingAssignments = getUpcomingAssignments();
  const unreadAnnouncements = getUnreadAnnouncements();

  return (
    <div className="flex flex-col gap-4 p-4 pt-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 font-khmer">ថ្ងៃចន្ទ, ០៦ មេសា ២០២៦</p>
          <h1 className="text-xl font-bold text-gray-900 font-khmer leading-tight">
            សួស្តី, {student.nameKh} 👋
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
          {student.nameEn.split(" ").map((n) => n[0]).join("")}
        </div>
      </div>

      {/* Attendance Status Card */}
      <div className={`rounded-2xl border p-4 ${statusColors[attendanceToday?.status ?? "present"]}`}>
        <div className="flex items-center gap-3">
          <div className="text-2xl">
            {attendanceToday?.status === "present" ? "✅" :
             attendanceToday?.status === "absent" ? "❌" :
             attendanceToday?.status === "late" ? "⏰" : "📋"}
          </div>
          <div>
            <p className="text-xs font-medium opacity-70 font-khmer">វត្តមានថ្ងៃនេះ</p>
            <p className="text-base font-bold font-khmer">
              {statusLabelsKh[attendanceToday?.status ?? "present"]}
            </p>
          </div>
        </div>
      </div>

      {/* Today's Classes */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-bold text-gray-700 font-khmer">ម៉ោងរៀនថ្ងៃនេះ</h2>
          <Link to="/schedule" className="text-xs text-blue-600 font-khmer">មើលទាំងអស់ →</Link>
        </div>
        <div className="flex flex-col gap-2">
          {todayClasses.slice(0, 3).map((cls) => (
            <div
              key={cls.id}
              className={`flex items-center gap-3 rounded-xl border-l-4 p-3 bg-white shadow-sm ${cls.color.split(" ").filter(c => c.startsWith("border")).join(" ")}`}
            >
              <div className="flex flex-col items-center min-w-[52px]">
                <span className="text-xs font-semibold text-gray-600">{cls.startTime}</span>
                <span className="text-[10px] text-gray-400">{cls.endTime}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate font-khmer">{cls.subjectKh}</p>
                <p className="text-xs text-gray-500 truncate font-khmer">{cls.teacherKh} · បន្ទប់ {cls.room}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Assignments */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-bold text-gray-700 font-khmer">កិច្ចការជិតដល់</h2>
          <Link to="/more/assignments" className="text-xs text-blue-600 font-khmer">មើលទាំងអស់ →</Link>
        </div>
        <div className="flex flex-col gap-2">
          {upcomingAssignments.map((task) => {
            const dueDate = new Date(task.dueDate);
            const today = new Date("2026-04-06");
            const daysLeft = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
            return (
              <div key={task.id} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm border border-gray-100">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${daysLeft <= 2 ? "bg-red-500" : "bg-orange-400"}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate font-khmer">{task.titleKh}</p>
                  <p className="text-xs text-gray-500 font-khmer">{task.subjectKh}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${daysLeft <= 2 ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"}`}>
                  {daysLeft}d
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* New Announcements */}
      {unreadAnnouncements.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold text-gray-700 font-khmer">សេចក្តីប្រកាសថ្មី</h2>
            <Link to="/more/announcements" className="text-xs text-blue-600 font-khmer">មើលទាំងអស់ →</Link>
          </div>
          <div className="flex flex-col gap-2">
            {unreadAnnouncements.map((ann) => (
              <div key={ann.id} className="flex items-start gap-3 rounded-xl bg-white p-3 shadow-sm border border-gray-100">
                {ann.isPinned && <span className="text-base">📌</span>}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900 truncate font-khmer">{ann.titleKh}</p>
                    <span className={`flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded-full font-medium ${ann.type === "school" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
                      {ann.type === "school" ? "សាលា" : "ថ្នាក់"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 font-khmer">{ann.bodyKh}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
