import Link from "next/link";
import { announcements, attendanceHistory, assignments, student } from "@/lib/mock-data";

const menuItems = [
  {
    href: "/more/attendance",
    icon: "📅",
    labelKh: "វត្តមាន",
    labelEn: "Attendance",
    descKh: "ប្រវត្តិវត្តមានរបស់ខ្ញុំ",
    color: "bg-green-50 border-green-200",
    iconBg: "bg-green-100",
  },
  {
    href: "/more/announcements",
    icon: "📢",
    labelKh: "សេចក្តីប្រកាស",
    labelEn: "Announcements",
    descKh: "ព្រឹត្តិការណ៍សាលា និងថ្នាក់",
    color: "bg-blue-50 border-blue-200",
    iconBg: "bg-blue-100",
  },
  {
    href: "/more/assignments",
    icon: "📝",
    labelKh: "កិច្ចការ",
    labelEn: "Assignments",
    descKh: "កិច្ចការ និងការដាក់ស្នើ",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-100",
  },
  {
    href: "/more/profile",
    icon: "👤",
    labelKh: "ប្រវត្តិរូប",
    labelEn: "Profile",
    descKh: "ព័ត៌មានផ្ទាល់ខ្លួន",
    color: "bg-purple-50 border-purple-200",
    iconBg: "bg-purple-100",
  },
];

export default function MorePage() {
  const unreadCount = announcements.filter((a) => !a.isRead).length;
  const pendingAssignments = assignments.filter((a) => !a.isSubmitted).length;
  const presentDays = attendanceHistory.filter((r) => r.status === "present").length;
  const totalDays = attendanceHistory.length;

  return (
    <div className="flex flex-col gap-4 p-4 pt-5">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-gray-900 font-khmer">ច្រើនទៀត</h1>
        <p className="text-xs text-gray-500 font-khmer">ព័ត៌មានបន្ថែម</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-2xl bg-green-50 border border-green-200 p-3 flex flex-col items-center text-center">
          <span className="text-xl font-bold text-green-700">
            {Math.round((presentDays / totalDays) * 100)}%
          </span>
          <span className="text-[10px] text-green-600 font-khmer mt-0.5">វត្តមាន</span>
        </div>
        <div className="rounded-2xl bg-orange-50 border border-orange-200 p-3 flex flex-col items-center text-center">
          <span className="text-xl font-bold text-orange-700">{pendingAssignments}</span>
          <span className="text-[10px] text-orange-600 font-khmer mt-0.5">កិច្ចការ</span>
        </div>
        <div className="rounded-2xl bg-blue-50 border border-blue-200 p-3 flex flex-col items-center text-center">
          <span className="text-xl font-bold text-blue-700">{unreadCount}</span>
          <span className="text-[10px] text-blue-600 font-khmer mt-0.5">ប្រកាស</span>
        </div>
      </div>

      {/* Menu items */}
      <div className="flex flex-col gap-2">
        {menuItems.map((item) => {
          let badge: number | null = null;
          if (item.href === "/more/announcements") badge = unreadCount;
          if (item.href === "/more/assignments") badge = pendingAssignments;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-2xl border p-4 transition-colors active:brightness-95 ${item.color}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${item.iconBg}`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 font-khmer">{item.labelKh}</p>
                <p className="text-xs text-gray-500 font-khmer">{item.descKh}</p>
              </div>
              {badge !== null && badge > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {badge}
                </span>
              )}
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          );
        })}
      </div>

      {/* Student info footer */}
      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-4 flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base">
          {student.nameEn.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 font-khmer">{student.nameKh}</p>
          <p className="text-xs text-gray-500 font-khmer">{student.gradeKh} · {student.id}</p>
        </div>
        <Link
          href="/more/profile"
          className="text-xs text-blue-600 font-khmer"
        >
          មើល →
        </Link>
      </div>
    </div>
  );
}
