import { useState } from "react";
import { weeklySchedule, ClassSession } from "@/lib/mock-data";

const days = [
  { label: "ចន្ទ", abbr: "Mon", value: 0 },
  { label: "អង្គារ", abbr: "Tue", value: 1 },
  { label: "ពុធ", abbr: "Wed", value: 2 },
  { label: "ព្រហស្បតិ៍", abbr: "Thu", value: 3 },
  { label: "សុក្រ", abbr: "Fri", value: 4 },
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = useState(0); // Monday as "today"
  const [expandedClass, setExpandedClass] = useState<string | null>(null);

  const dayClasses = weeklySchedule
    .filter((c) => c.day === selectedDay)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  return (
    <div className="flex flex-col gap-0 pb-2">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="px-4 pt-5 pb-3">
          <h1 className="text-xl font-bold text-gray-900 font-khmer">កាលវិភាគ</h1>
          <p className="text-xs text-gray-500 font-khmer">ម៉ោងរៀនប្រចាំសប្តាហ៍</p>
        </div>
        {/* Day tabs */}
        <div className="flex gap-1 px-4 pb-3 overflow-x-auto scrollbar-none">
          {days.map((day) => {
            const count = weeklySchedule.filter((c) => c.day === day.value).length;
            return (
              <button
                key={day.value}
                onClick={() => setSelectedDay(day.value)}
                className={`flex-1 min-w-[56px] flex flex-col items-center py-2 px-2 rounded-xl text-xs font-medium transition-colors font-khmer ${
                  selectedDay === day.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span>{day.label}</span>
                <span className={`text-[10px] mt-0.5 ${selectedDay === day.value ? "text-blue-100" : "text-gray-400"}`}>
                  {count} ម៉ោង
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Class list */}
      <div className="flex flex-col gap-2 p-4">
        {dayClasses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <span className="text-4xl mb-3">📚</span>
            <p className="font-khmer text-sm">គ្មានមុខវិជ្ជាថ្ងៃនេះ</p>
          </div>
        ) : (
          dayClasses.map((cls) => (
            <ClassCard
              key={cls.id}
              cls={cls}
              expanded={expandedClass === cls.id}
              onToggle={() =>
                setExpandedClass(expandedClass === cls.id ? null : cls.id)
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

function ClassCard({
  cls,
  expanded,
  onToggle,
}: {
  cls: ClassSession;
  expanded: boolean;
  onToggle: () => void;
}) {
  const borderColor = cls.color.split(" ").find((c) => c.startsWith("border-")) ?? "border-gray-300";
  const bgColor = cls.color.split(" ").find((c) => c.startsWith("bg-")) ?? "bg-gray-50";
  const textColor = cls.color.split(" ").find((c) => c.startsWith("text-")) ?? "text-gray-700";

  return (
    <button
      onClick={onToggle}
      className={`w-full text-left rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden`}
    >
      <div className={`flex items-center gap-3 p-3 border-l-4 ${borderColor}`}>
        <div className="flex flex-col items-center min-w-[52px]">
          <span className="text-xs font-bold text-gray-700">{cls.startTime}</span>
          <span className="text-[10px] text-gray-400">{cls.endTime}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 font-khmer">{cls.subjectKh}</p>
          <p className="text-xs text-gray-500 font-khmer">{cls.teacherKh}</p>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${bgColor} ${textColor}`}>
          {cls.room}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </div>
      {expanded && (
        <div className={`px-4 py-3 ${bgColor} bg-opacity-50 border-t border-gray-100`}>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-gray-500 font-khmer">មុខវិជ្ជា</p>
              <p className="font-medium text-gray-800">{cls.subject}</p>
            </div>
            <div>
              <p className="text-gray-500 font-khmer">បន្ទប់រៀន</p>
              <p className="font-medium text-gray-800 font-khmer">បន្ទប់ {cls.room}</p>
            </div>
            <div>
              <p className="text-gray-500 font-khmer">គ្រូ</p>
              <p className="font-medium text-gray-800 font-khmer">{cls.teacherKh}</p>
            </div>
            <div>
              <p className="text-gray-500 font-khmer">ម៉ោង</p>
              <p className="font-medium text-gray-800">
                {cls.startTime} – {cls.endTime}
              </p>
            </div>
          </div>
        </div>
      )}
    </button>
  );
}
