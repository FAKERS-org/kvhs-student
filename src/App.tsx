import './App.css'

const student = {
  name: 'សុខ សុភា',
  nameEn: 'Sok Sophea',
  id: 'KV-2024-001',
  grade: 'ថ្នាក់ទី ១២',
  section: 'អក្សរ',
  school: 'វិទ្យាល័យក្រវាន់ហ៊ុនសែន',
  schoolEn: 'Kravanh Hun Sen High School',
  year: '2024–2025',
  photoUrl: null as string | null,
}

const subjects = [
  { name: 'ភាសាខ្មែរ', score: 88, total: 100 },
  { name: 'គណិតវិទ្យា', score: 75, total: 100 },
  { name: 'ភាសាអង់គ្លេស', score: 82, total: 100 },
  { name: 'រូបវិទ្យា', score: 70, total: 100 },
  { name: 'គីមីវិទ្យា', score: 65, total: 100 },
  { name: 'ជីវវិទ្យា', score: 79, total: 100 },
  { name: 'ប្រវត្តិវិទ្យា', score: 90, total: 100 },
  { name: 'ភូមិវិទ្យា', score: 84, total: 100 },
]

function gradeLabel(score: number): { label: string; color: string } {
  if (score >= 90) return { label: 'A', color: 'text-green-600' }
  if (score >= 80) return { label: 'B', color: 'text-blue-600' }
  if (score >= 70) return { label: 'C', color: 'text-yellow-600' }
  if (score >= 60) return { label: 'D', color: 'text-orange-500' }
  return { label: 'F', color: 'text-red-600' }
}

function ScoreBar({ score, total }: { score: number; total: number }) {
  const pct = (score / total) * 100
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="w-10 text-right text-sm font-semibold text-gray-700">
        {score}
      </span>
    </div>
  )
}

function App() {
  const totalScore = subjects.reduce((s, sub) => s + sub.score, 0)
  const maxScore = subjects.reduce((s, sub) => s + sub.total, 0)
  const average = Math.round(totalScore / subjects.length)

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow p-6 flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-3xl font-bold shrink-0">
            {student.photoUrl
              ? <img src={student.photoUrl} alt={student.nameEn} className="w-20 h-20 rounded-full object-cover" />
              : student.nameEn[0]}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">{student.name}</h1>
            <p className="text-sm text-gray-500">{student.nameEn}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {student.id}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                {student.grade} — {student.section}
              </span>
            </div>
          </div>
        </div>

        {/* School Info Card */}
        <div className="bg-white rounded-2xl shadow p-5">
          <div className="flex items-start gap-3">
            <div className="text-2xl">🏫</div>
            <div>
              <p className="font-semibold text-gray-800">{student.school}</p>
              <p className="text-sm text-gray-500">{student.schoolEn}</p>
              <p className="text-sm text-gray-400 mt-1">ឆ្នាំសិក្សា {student.year}</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl shadow p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">ពិន្ទុសរុប</p>
            <p className="text-2xl font-bold text-gray-900">{totalScore}<span className="text-sm font-normal text-gray-400">/{maxScore}</span></p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">មធ្យមភាគ</p>
            <p className="text-2xl font-bold text-blue-600">{average}%</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">ថ្នាក់</p>
            <p className={`text-2xl font-bold ${gradeLabel(average).color}`}>{gradeLabel(average).label}</p>
          </div>
        </div>

        {/* Subjects Card */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">លទ្ធផលប្រឡង</h2>
          <ul className="space-y-4">
            {subjects.map((sub) => {
              const { label, color } = gradeLabel(sub.score)
              return (
                <li key={sub.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700">{sub.name}</span>
                    <span className={`text-xs font-bold ${color}`}>{label}</span>
                  </div>
                  <ScoreBar score={sub.score} total={sub.total} />
                </li>
              )
            })}
          </ul>
        </div>

        <p className="text-center text-xs text-gray-400">© {new Date().getFullYear()} {student.school}</p>
      </div>
    </div>
  )
}

export default App
