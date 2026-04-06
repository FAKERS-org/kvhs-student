"use client";

import { useState } from "react";
import Link from "next/link";
import { assignments, Assignment } from "@/lib/mock-data";

function getDaysLeft(dueDate: string) {
  const due = new Date(dueDate);
  const today = new Date("2026-04-06");
  return Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

function DueBadge({ daysLeft }: { daysLeft: number }) {
  if (daysLeft < 0) return <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-khmer font-semibold">ផុតកំណត់</span>;
  if (daysLeft === 0) return <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-khmer font-semibold">ថ្ងៃនេះ</span>;
  if (daysLeft <= 2) return <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-khmer font-semibold">{daysLeft} ថ្ងៃ</span>;
  return <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-semibold">{daysLeft}d</span>;
}

export default function AssignmentsPage() {
  const [submittedIds, setSubmittedIds] = useState<Set<string>>(
    new Set(assignments.filter((a) => a.isSubmitted).map((a) => a.id))
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"pending" | "submitted" | "all">("pending");

  const sorted = [...assignments].sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  const filtered = sorted.filter((a) => {
    if (filter === "pending") return !submittedIds.has(a.id);
    if (filter === "submitted") return submittedIds.has(a.id);
    return true;
  });

  return (
    <div className="flex flex-col gap-0">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm px-4 pt-5 pb-4">
        <div className="flex items-center gap-2">
          <Link href="/more" className="text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 font-khmer">កិច្ចការ</h1>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 px-4 py-3 bg-white border-b border-gray-100">
        {(["pending", "submitted", "all"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-1 text-xs py-2 rounded-xl font-medium transition-colors font-khmer ${
              filter === f ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {f === "pending" ? "រង់ចាំ" : f === "submitted" ? "បានដាក់" : "ទាំងអស់"}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex flex-col gap-2 p-4">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <span className="text-4xl mb-3">✅</span>
            <p className="font-khmer text-sm">
              {filter === "pending" ? "គ្មានកិច្ចការចុះ!" : "គ្មានទិន្នន័យ"}
            </p>
          </div>
        ) : (
          filtered.map((task) => (
            <AssignmentCard
              key={task.id}
              task={task}
              isSubmitted={submittedIds.has(task.id)}
              expanded={expandedId === task.id}
              onToggle={() => setExpandedId(expandedId === task.id ? null : task.id)}
              onSubmit={() => setSubmittedIds((prev) => new Set([...prev, task.id]))}
            />
          ))
        )}
      </div>
    </div>
  );
}

function AssignmentCard({
  task,
  isSubmitted,
  expanded,
  onToggle,
  onSubmit,
}: {
  task: Assignment;
  isSubmitted: boolean;
  expanded: boolean;
  onToggle: () => void;
  onSubmit: () => void;
}) {
  const daysLeft = getDaysLeft(task.dueDate);

  return (
    <div className={`rounded-2xl border shadow-sm overflow-hidden ${isSubmitted ? "bg-gray-50 border-gray-100" : "bg-white border-gray-100"}`}>
      <button onClick={onToggle} className="w-full text-left flex items-start gap-3 p-3">
        <div className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center ${isSubmitted ? "bg-green-500" : "border-2 border-gray-300"}`}>
          {isSubmitted && (
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className={`text-sm font-bold font-khmer ${isSubmitted ? "line-through text-gray-400" : "text-gray-900"}`}>
              {task.titleKh}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 font-khmer">{task.subjectKh}</span>
            <span className="text-gray-300">·</span>
            <DueBadge daysLeft={daysLeft} />
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 flex-shrink-0 mt-1 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="border-t border-gray-100 px-4 py-3 bg-gray-50">
          <p className="text-sm text-gray-700 font-khmer mb-3 leading-relaxed">{task.descriptionKh}</p>
          <p className="text-xs text-gray-500 mb-3">Due: {task.dueDate}</p>
          {!isSubmitted && (
            <button
              onClick={onSubmit}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white py-2.5 text-sm font-semibold font-khmer active:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              ដាក់ស្នើ
            </button>
          )}
        </div>
      )}
    </div>
  );
}
