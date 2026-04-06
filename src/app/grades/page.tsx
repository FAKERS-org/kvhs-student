import { useState } from "react";
import { grades, GradeEntry } from "@/lib/mock-data";

function getGradeColor(grade: string) {
  if (grade.startsWith("A")) return "text-green-700 bg-green-100";
  if (grade.startsWith("B")) return "text-blue-700 bg-blue-100";
  if (grade.startsWith("C")) return "text-yellow-700 bg-yellow-100";
  return "text-red-700 bg-red-100";
}

function getScorePercent(total: number, max: number) {
  return Math.round((total / max) * 100);
}

function getBarColor(pct: number) {
  if (pct >= 85) return "bg-green-500";
  if (pct >= 70) return "bg-blue-500";
  if (pct >= 55) return "bg-yellow-500";
  return "bg-red-500";
}

export default function GradesPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const avg = Math.round(
    grades.reduce((sum, g) => sum + getScorePercent(g.total, g.maxScore), 0) / grades.length
  );

  return (
    <div className="flex flex-col gap-0">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm px-4 pt-5 pb-4">
        <h1 className="text-xl font-bold text-gray-900 font-khmer">ពិន្ទុ</h1>
        <p className="text-xs text-gray-500 font-khmer">ឆមាស ១ · ឆ្នាំសិក្សា ២០២៥–២០២៦</p>
      </div>

      {/* Summary Card */}
      <div className="mx-4 mt-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
        <p className="text-sm opacity-80 font-khmer">មធ្យមភាគសរុប</p>
        <div className="flex items-end gap-2 mt-1">
          <span className="text-4xl font-bold">{avg}%</span>
          <span className="text-sm opacity-70 mb-1 font-khmer">
            ({grades.filter(g => g.grade.startsWith("A")).length} មុខA ·{" "}
            {grades.filter(g => g.grade.startsWith("B")).length} មុខB)
          </span>
        </div>
        <div className="mt-3 bg-white/20 rounded-full h-2">
          <div
            className="bg-white rounded-full h-2 transition-all"
            style={{ width: `${avg}%` }}
          />
        </div>
      </div>

      {/* Grade list */}
      <div className="flex flex-col gap-2 p-4">
        {grades.map((g) => (
          <GradeCard
            key={g.id}
            grade={g}
            expanded={expandedId === g.id}
            onToggle={() => setExpandedId(expandedId === g.id ? null : g.id)}
          />
        ))}
      </div>

      {/* Export button */}
      <div className="px-4 pb-4">
        <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-blue-600 text-white py-3 font-semibold text-sm font-khmer active:bg-blue-700 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          ទាញយករបាយការណ៍ PDF
        </button>
      </div>
    </div>
  );
}

function GradeCard({
  grade,
  expanded,
  onToggle,
}: {
  grade: GradeEntry;
  expanded: boolean;
  onToggle: () => void;
}) {
  const pct = getScorePercent(grade.total, grade.maxScore);
  const barColor = getBarColor(pct);
  const gradeColor = getGradeColor(grade.grade);

  return (
    <button
      onClick={onToggle}
      className="w-full text-left rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="flex items-center gap-3 p-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-sm font-bold text-gray-900 font-khmer">{grade.subjectKh}</p>
            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-lg ${gradeColor}`}>
              {grade.grade}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-gray-100 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all ${barColor}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs text-gray-600 font-semibold min-w-[36px] text-right">
              {pct}%
            </span>
          </div>
        </div>
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
        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
          <div className="grid grid-cols-3 gap-3 text-center">
            <ScoreItem label="ពាក់កណ្ដាលឆមាស" labelEn="Midterm" value={grade.midterm} max={100} />
            <ScoreItem label="ចុងឆមាស" labelEn="Final" value={grade.final} max={100} />
            <ScoreItem label="វត្តមាន" labelEn="Attendance" value={grade.attendance} max={10} />
          </div>
          <div className="mt-3 flex justify-between items-center text-sm">
            <span className="text-gray-600 font-khmer">ពិន្ទុសរុប</span>
            <span className="font-bold text-gray-900">{grade.total} / {grade.maxScore}</span>
          </div>
        </div>
      )}
    </button>
  );
}

function ScoreItem({ label, value, max }: { label: string; labelEn: string; value: number; max: number }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-lg font-bold text-gray-900">{value}</span>
      <span className="text-[10px] text-gray-400 font-khmer">/{max}</span>
      <span className="text-[10px] text-gray-600 font-khmer text-center leading-tight">{label}</span>
    </div>
  );
}
