import { Link } from "react-router-dom";
import { student } from "@/lib/mock-data";

export default function ProfilePage() {
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
          <h1 className="text-xl font-bold text-gray-900 font-khmer">ប្រវត្តិរូប</h1>
        </div>
      </div>

      {/* Avatar + Name */}
      <div className="flex flex-col items-center gap-3 py-8 bg-white">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold">
          {student.nameEn.split(" ").map((n) => n[0]).join("")}
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-900 font-khmer">{student.nameKh}</p>
          <p className="text-sm text-gray-500">{student.nameEn}</p>
          <span className="inline-block mt-1 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-0.5 rounded-full font-khmer">
            {student.gradeKh}
          </span>
        </div>
      </div>

      {/* Info sections */}
      <div className="flex flex-col gap-3 p-4">
        {/* Personal info */}
        <InfoSection title="ព័ត៌មានផ្ទាល់ខ្លួន">
          <InfoRow label="លេខសម្គាល់" value={student.id} />
          <InfoRow label="ថ្ងៃខែឆ្នាំកំណើត" value={student.dob} />
          <InfoRow label="ថ្នាក់" value={`${student.gradeKh} (${student.grade})`} />
          <InfoRow label="ទូរស័ព្ទ" value={student.phone} />
          <InfoRow label="អ៊ីមែល" value={student.email} />
          <InfoRow label="អាសយដ្ឋាន" value={student.address} />
        </InfoSection>

        {/* Emergency contact */}
        <InfoSection title="ទំនាក់ទំនងបន្ទាន់">
          <InfoRow label="ឈ្មោះ" value={`${student.emergencyContact.nameEn} (${student.emergencyContact.name})`} />
          <InfoRow label="ទំនាក់ទំនង" value={student.emergencyContact.relation} />
          <InfoRow label="ទូរស័ព្ទ" value={student.emergencyContact.phone} />
        </InfoSection>
      </div>
    </div>
  );
}

function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-100">
        <p className="text-xs font-bold text-gray-600 font-khmer uppercase tracking-wide">{title}</p>
      </div>
      <div className="divide-y divide-gray-50">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 px-4 py-3">
      <p className="text-xs text-gray-500 font-khmer min-w-[100px] pt-0.5">{label}</p>
      <p className="text-sm text-gray-900 font-medium font-khmer flex-1">{value}</p>
    </div>
  );
}
