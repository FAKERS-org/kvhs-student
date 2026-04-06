import { useState } from "react";
import { Link } from "react-router-dom";
import { announcements, Announcement } from "@/lib/mock-data";

type FilterType = "all" | "school" | "class";

export default function AnnouncementsPage() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [readIds, setReadIds] = useState<Set<string>>(
    new Set(announcements.filter((a) => a.isRead).map((a) => a.id))
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const markRead = (id: string) => {
    setReadIds((prev) => new Set([...prev, id]));
  };

  const filtered = announcements.filter(
    (a) => filter === "all" || a.type === filter
  );

  const unreadCount = announcements.filter((a) => !readIds.has(a.id)).length;

  return (
    <div className="flex flex-col gap-0">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm px-4 pt-5 pb-4">
        <div className="flex items-center gap-2">
          <Link to="/more" className="text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 font-khmer">សេចក្តីប្រកាស</h1>
          {unreadCount > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ml-1">
              {unreadCount}
            </span>
          )}
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 px-4 py-3 bg-white border-b border-gray-100">
        {(["all", "school", "class"] as FilterType[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 text-xs py-2 rounded-xl font-medium transition-colors font-khmer ${
              filter === f ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {f === "all" ? "ទាំងអស់" : f === "school" ? "🏫 សាលា" : "🎓 ថ្នាក់"}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex flex-col gap-2 p-4">
        {filtered.map((ann) => (
          <AnnouncementCard
            key={ann.id}
            ann={ann}
            isRead={readIds.has(ann.id)}
            expanded={expandedId === ann.id}
            onToggle={() => {
              setExpandedId(expandedId === ann.id ? null : ann.id);
              markRead(ann.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function AnnouncementCard({
  ann,
  isRead,
  expanded,
  onToggle,
}: {
  ann: Announcement;
  isRead: boolean;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`w-full text-left rounded-2xl border shadow-sm overflow-hidden transition-colors ${
        isRead ? "bg-white border-gray-100" : "bg-blue-50 border-blue-200"
      }`}
    >
      <div className="flex items-start gap-3 p-3">
        <div className="flex flex-col items-center gap-1 flex-shrink-0 mt-0.5">
          {ann.isPinned && <span className="text-sm">📌</span>}
          {!isRead && <div className="w-2 h-2 rounded-full bg-blue-500" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2">
            <p className={`text-sm font-semibold font-khmer flex-1 ${isRead ? "text-gray-800" : "text-gray-900"}`}>
              {ann.titleKh}
            </p>
            <span className={`flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
              ann.type === "school" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"
            }`}>
              {ann.type === "school" ? "សាលា" : "ថ្នាក់"}
            </span>
          </div>
          {!expanded && (
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 font-khmer text-left">{ann.bodyKh}</p>
          )}
          <p className="text-[10px] text-gray-400 mt-1">{ann.date}</p>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </div>
      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3">
          <p className="text-sm text-gray-700 font-khmer leading-relaxed">{ann.bodyKh}</p>
        </div>
      )}
    </button>
  );
}
