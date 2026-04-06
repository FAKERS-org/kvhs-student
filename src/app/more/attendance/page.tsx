import { useState } from "react";
import { Link } from "react-router-dom";
import { attendanceHistory, AttendanceStatus } from "@/lib/mock-data";

const statusConfig: Record<
  AttendanceStatus,
  { labelKh: string; color: string; dot: string }
> = {
  present: { labelKh: "មានវត្តមាន", color: "bg-green-100 text-green-700 border-green-200", dot: "bg-green-500" },
  absent: { labelKh: "អវត្តមាន", color: "bg-red-100 text-red-700 border-red-200", dot: "bg-red-500" },
  late: { labelKh: "យឺត", color: "bg-yellow-100 text-yellow-700 border-yellow-200", dot: "bg-yellow-500" },
  excused: { labelKh: "មានច្បាប់", color: "bg-blue-100 text-blue-700 border-blue-200", dot: "bg-blue-500" },
};

const filterOptions: { value: "all" | AttendanceStatus; labelKh: string }[] = [
  { value: "all", labelKh: "ទាំងអស់" },
  { value: "present", labelKh: "មានវត្តមាន" },
  { value: "absent", labelKh: "អវត្តមាន" },
  { value: "late", labelKh: "យឺត" },
  { value: "excused", labelKh: "មានច្បាប់" },
];

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  const days = ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"];
  const months = ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
}

export default function AttendancePage() {
  const [filter, setFilter] = useState<"all" | AttendanceStatus>("all");

  const filtered = filter === "all" ? attendanceHistory : attendanceHistory.filter((r) => r.status === filter);

  const presentCount = attendanceHistory.filter((r) => r.status === "present").length;
  const absentCount = attendanceHistory.filter((r) => r.status === "absent").length;
  const lateCount = attendanceHistory.filter((r) => r.status === "late").length;
  const excusedCount = attendanceHistory.filter((r) => r.status === "excused").length;
  const total = attendanceHistory.length;
  const attendancePct = Math.round((presentCount / total) * 100);

  return (
    <div className="flex flex-col gap-0">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm px-4 pt-5 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <Link to="/more" className="text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 font-khmer">វត្តមាន</h1>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-4 gap-1.5">
          <StatBadge value={presentCount} label="វត្តមាន" color="bg-green-50 text-green-700 border-green-200" />
          <StatBadge value={absentCount} label="អវត្តមាន" color="bg-red-50 text-red-700 border-red-200" />
          <StatBadge value={lateCount} label="យឺត" color="bg-yellow-50 text-yellow-700 border-yellow-200" />
          <StatBadge value={excusedCount} label="ច្បាប់" color="bg-blue-50 text-blue-700 border-blue-200" />
        </div>

        {/* Attendance rate bar */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1 bg-gray-100 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${attendancePct >= 80 ? "bg-green-500" : attendancePct >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
              style={{ width: `${attendancePct}%` }}
            />
          </div>
          <span className="text-xs font-bold text-gray-700">{attendancePct}%</span>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-1 px-4 py-3 overflow-x-auto scrollbar-none bg-white border-b border-gray-100">
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setFilter(opt.value)}
            className={`flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium transition-colors font-khmer ${
              filter === opt.value ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {opt.labelKh}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex flex-col gap-2 p-4">
        {filtered.map((record) => {
          const cfg = statusConfig[record.status];
          return (
            <div
              key={record.date}
              className={`flex items-center gap-3 rounded-xl border p-3 ${cfg.color}`}
            >
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold font-khmer">{formatDate(record.date)}</p>
                {record.subjectKh && (
                  <p className="text-xs opacity-70 font-khmer">{record.subjectKh}</p>
                )}
              </div>
              <span className="text-xs font-bold font-khmer">{cfg.labelKh}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatBadge({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div className={`rounded-xl border p-2 flex flex-col items-center ${color}`}>
      <span className="text-base font-bold">{value}</span>
      <span className="text-[10px] font-khmer">{label}</span>
    </div>
  );
}
