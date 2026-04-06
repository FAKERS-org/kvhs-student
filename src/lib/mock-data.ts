export const student = {
  id: "STU-2024-001",
  nameKh: "សុខ ដារា",
  nameEn: "Sokh Dara",
  grade: "Grade 12A",
  gradeKh: "ថ្នាក់ទី ១២A",
  photoUrl: "/avatar-placeholder.png",
  dob: "2008-03-15",
  phone: "012 345 678",
  email: "sokhdara@kvhs.edu.kh",
  address: "ភូមិ​ ព្រៃវែង, ក្រចេះ",
  emergencyContact: {
    name: "សុខ សំណាង",
    nameEn: "Sokh Samnang",
    relation: "ឪពុក",
    phone: "015 678 901",
  },
};

export interface ClassSession {
  id: string;
  subject: string;
  subjectKh: string;
  teacher: string;
  teacherKh: string;
  room: string;
  startTime: string;
  endTime: string;
  day: number; // 0=Mon, 1=Tue, ..., 4=Fri
  color: string;
}

export const weeklySchedule: ClassSession[] = [
  // Monday
  { id: "c1", subject: "Khmer Literature", subjectKh: "អក្សរសាស្ត្រខ្មែរ", teacher: "Mrs. Chea Sophea", teacherKh: "គ្រូ​ ជា​ សុភា", room: "101", startTime: "07:00", endTime: "08:30", day: 0, color: "bg-blue-100 border-blue-400 text-blue-800" },
  { id: "c2", subject: "Mathematics", subjectKh: "គណិតវិទ្យា", teacher: "Mr. Ly Visal", teacherKh: "គ្រូ​ លី​ វិសាល", room: "205", startTime: "08:30", endTime: "10:00", day: 0, color: "bg-green-100 border-green-400 text-green-800" },
  { id: "c3", subject: "Physics", subjectKh: "រូបវិទ្យា", teacher: "Mrs. Noun Sreymom", teacherKh: "គ្រូ​ នួន​ ស្រីមុំ", room: "Lab 1", startTime: "10:15", endTime: "11:45", day: 0, color: "bg-purple-100 border-purple-400 text-purple-800" },
  { id: "c4", subject: "History", subjectKh: "ប្រវត្តិសាស្ត្រ", teacher: "Mr. Pich Vannak", teacherKh: "គ្រូ​ ពិជ​ វណ្ណៈ", room: "102", startTime: "13:00", endTime: "14:30", day: 0, color: "bg-orange-100 border-orange-400 text-orange-800" },
  // Tuesday
  { id: "c5", subject: "English", subjectKh: "អង់គ្លេស", teacher: "Mr. Keo Sopheak", teacherKh: "គ្រូ​ កែវ​ សុភ័ក្ត", room: "103", startTime: "07:00", endTime: "08:30", day: 1, color: "bg-yellow-100 border-yellow-400 text-yellow-800" },
  { id: "c6", subject: "Chemistry", subjectKh: "គីមីវិទ្យា", teacher: "Mrs. Chan Dary", teacherKh: "គ្រូ​ ចាន់​ ដារី", room: "Lab 2", startTime: "08:30", endTime: "10:00", day: 1, color: "bg-red-100 border-red-400 text-red-800" },
  { id: "c7", subject: "Biology", subjectKh: "ជីវវិទ្យា", teacher: "Mr. Heng Rathana", teacherKh: "គ្រូ​ ហេង​ រតនា", room: "Lab 1", startTime: "10:15", endTime: "11:45", day: 1, color: "bg-teal-100 border-teal-400 text-teal-800" },
  { id: "c8", subject: "Mathematics", subjectKh: "គណិតវិទ្យា", teacher: "Mr. Ly Visal", teacherKh: "គ្រូ​ លី​ វិសាល", room: "205", startTime: "13:00", endTime: "14:30", day: 1, color: "bg-green-100 border-green-400 text-green-800" },
  // Wednesday
  { id: "c9", subject: "Khmer Literature", subjectKh: "អក្សរសាស្ត្រខ្មែរ", teacher: "Mrs. Chea Sophea", teacherKh: "គ្រូ​ ជា​ សុភា", room: "101", startTime: "07:00", endTime: "08:30", day: 2, color: "bg-blue-100 border-blue-400 text-blue-800" },
  { id: "c10", subject: "Physics", subjectKh: "រូបវិទ្យា", teacher: "Mrs. Noun Sreymom", teacherKh: "គ្រូ​ នួន​ ស្រីមុំ", room: "Lab 1", startTime: "08:30", endTime: "10:00", day: 2, color: "bg-purple-100 border-purple-400 text-purple-800" },
  { id: "c11", subject: "English", subjectKh: "អង់គ្លេស", teacher: "Mr. Keo Sopheak", teacherKh: "គ្រូ​ កែវ​ សុភ័ក្ត", room: "103", startTime: "10:15", endTime: "11:45", day: 2, color: "bg-yellow-100 border-yellow-400 text-yellow-800" },
  // Thursday
  { id: "c12", subject: "Chemistry", subjectKh: "គីមីវិទ្យា", teacher: "Mrs. Chan Dary", teacherKh: "គ្រូ​ ចាន់​ ដារី", room: "Lab 2", startTime: "07:00", endTime: "08:30", day: 3, color: "bg-red-100 border-red-400 text-red-800" },
  { id: "c13", subject: "Mathematics", subjectKh: "គណិតវិទ្យា", teacher: "Mr. Ly Visal", teacherKh: "គ្រូ​ លី​ វិសាល", room: "205", startTime: "08:30", endTime: "10:00", day: 3, color: "bg-green-100 border-green-400 text-green-800" },
  { id: "c14", subject: "Biology", subjectKh: "ជីវវិទ្យា", teacher: "Mr. Heng Rathana", teacherKh: "គ្រូ​ ហេង​ រតនា", room: "Lab 1", startTime: "10:15", endTime: "11:45", day: 3, color: "bg-teal-100 border-teal-400 text-teal-800" },
  { id: "c15", subject: "History", subjectKh: "ប្រវត្តិសាស្ត្រ", teacher: "Mr. Pich Vannak", teacherKh: "គ្រូ​ ពិជ​ វណ្ណៈ", room: "102", startTime: "13:00", endTime: "14:30", day: 3, color: "bg-orange-100 border-orange-400 text-orange-800" },
  // Friday
  { id: "c16", subject: "English", subjectKh: "អង់គ្លេស", teacher: "Mr. Keo Sopheak", teacherKh: "គ្រូ​ កែវ​ សុភ័ក្ត", room: "103", startTime: "07:00", endTime: "08:30", day: 4, color: "bg-yellow-100 border-yellow-400 text-yellow-800" },
  { id: "c17", subject: "Khmer Literature", subjectKh: "អក្សរសាស្ត្រខ្មែរ", teacher: "Mrs. Chea Sophea", teacherKh: "គ្រូ​ ជា​ សុភា", room: "101", startTime: "08:30", endTime: "10:00", day: 4, color: "bg-blue-100 border-blue-400 text-blue-800" },
  { id: "c18", subject: "Physical Education", subjectKh: "កីឡា", teacher: "Mr. Sam Piseth", teacherKh: "គ្រូ​ សាម​ ពិសិទ្ធ", room: "Court", startTime: "10:15", endTime: "11:45", day: 4, color: "bg-pink-100 border-pink-400 text-pink-800" },
];

export type AttendanceStatus = "present" | "absent" | "late" | "excused";

export interface AttendanceRecord {
  date: string; // YYYY-MM-DD
  status: AttendanceStatus;
  subject?: string;
  subjectKh?: string;
}

export const attendanceHistory: AttendanceRecord[] = [
  { date: "2026-04-06", status: "present" },
  { date: "2026-04-05", status: "present" },
  { date: "2026-04-04", status: "late", subject: "Mathematics", subjectKh: "គណិតវិទ្យា" },
  { date: "2026-04-03", status: "present" },
  { date: "2026-04-02", status: "present" },
  { date: "2026-03-30", status: "absent", subject: "Physics", subjectKh: "រូបវិទ្យា" },
  { date: "2026-03-29", status: "present" },
  { date: "2026-03-28", status: "present" },
  { date: "2026-03-27", status: "excused", subject: "English", subjectKh: "អង់គ្លេស" },
  { date: "2026-03-26", status: "present" },
  { date: "2026-03-25", status: "present" },
  { date: "2026-03-23", status: "present" },
  { date: "2026-03-22", status: "present" },
  { date: "2026-03-21", status: "late" },
  { date: "2026-03-20", status: "present" },
  { date: "2026-03-19", status: "present" },
  { date: "2026-03-18", status: "present" },
  { date: "2026-03-16", status: "absent" },
  { date: "2026-03-15", status: "present" },
  { date: "2026-03-14", status: "present" },
  { date: "2026-03-13", status: "present" },
  { date: "2026-03-12", status: "present" },
  { date: "2026-03-11", status: "present" },
  { date: "2026-03-09", status: "present" },
  { date: "2026-03-08", status: "present" },
  { date: "2026-03-07", status: "present" },
  { date: "2026-03-06", status: "late" },
  { date: "2026-03-05", status: "present" },
  { date: "2026-03-04", status: "present" },
  { date: "2026-03-02", status: "present" },
];

export interface GradeEntry {
  id: string;
  subject: string;
  subjectKh: string;
  midterm: number;
  final: number;
  attendance: number;
  total: number;
  maxScore: number;
  grade: string;
}

export const grades: GradeEntry[] = [
  { id: "g1", subject: "Khmer Literature", subjectKh: "អក្សរសាស្ត្រខ្មែរ", midterm: 78, final: 82, attendance: 10, total: 170, maxScore: 200, grade: "B+" },
  { id: "g2", subject: "Mathematics", subjectKh: "គណិតវិទ្យា", midterm: 85, final: 90, attendance: 10, total: 185, maxScore: 200, grade: "A" },
  { id: "g3", subject: "Physics", subjectKh: "រូបវិទ្យា", midterm: 70, final: 75, attendance: 9, total: 154, maxScore: 200, grade: "B" },
  { id: "g4", subject: "Chemistry", subjectKh: "គីមីវិទ្យា", midterm: 65, final: 72, attendance: 10, total: 147, maxScore: 200, grade: "C+" },
  { id: "g5", subject: "Biology", subjectKh: "ជីវវិទ្យា", midterm: 80, final: 85, attendance: 10, total: 175, maxScore: 200, grade: "B+" },
  { id: "g6", subject: "English", subjectKh: "អង់គ្លេស", midterm: 88, final: 92, attendance: 10, total: 190, maxScore: 200, grade: "A" },
  { id: "g7", subject: "History", subjectKh: "ប្រវត្តិសាស្ត្រ", midterm: 72, final: 78, attendance: 9, total: 159, maxScore: 200, grade: "B" },
  { id: "g8", subject: "Physical Education", subjectKh: "កីឡា", midterm: 90, final: 88, attendance: 10, total: 188, maxScore: 200, grade: "A" },
];

export interface Announcement {
  id: string;
  title: string;
  titleKh: string;
  body: string;
  bodyKh: string;
  date: string;
  type: "school" | "class";
  isRead: boolean;
  isPinned?: boolean;
}

export const announcements: Announcement[] = [
  {
    id: "a1",
    title: "National Exam Registration Deadline",
    titleKh: "កាលបរិច្ឆេទបិទទទួលពាក្យប្រឡងជាតិ",
    body: "All Grade 12 students must complete their registration by April 15. Please bring required documents to the administration office.",
    bodyKh: "សិស្សថ្នាក់ទី១២ទាំងអស់ត្រូវបញ្ចប់ការចុះឈ្មោះត្រឹមថ្ងៃទី១៥ ខែមេសា។ សូមមកការិយាល័យរដ្ឋបាលជាមួយឯកសារដែលត្រូវការ។",
    date: "2026-04-06",
    type: "school",
    isRead: false,
    isPinned: true,
  },
  {
    id: "a2",
    title: "Science Fair This Friday",
    titleKh: "វិទ្យាស្ថានវិទ្យាសាស្ត្រថ្ងៃសុក្រនេះ",
    body: "Class 12A will present their science projects in the main hall at 2:00 PM on Friday.",
    bodyKh: "ថ្នាក់ ១២A នឹងធ្វើបទបង្ហាញគម្រោងវិទ្យាសាស្ត្រនៅសាលធំ ម៉ោង ២:00 ល្ងាចថ្ងៃសុក្រ។",
    date: "2026-04-05",
    type: "class",
    isRead: false,
  },
  {
    id: "a3",
    title: "School Closed - Khmer New Year",
    titleKh: "សាលារៀនបិទ - បុណ្យចូលឆ្នាំខ្មែរ",
    body: "The school will be closed from April 13-16 for Khmer New Year celebration.",
    bodyKh: "សាលារៀននឹងបិទពីថ្ងៃទី ១៣-១៦ ខែមេសា ដើម្បីបុណ្យចូលឆ្នាំខ្មែរ។",
    date: "2026-04-04",
    type: "school",
    isRead: true,
    isPinned: true,
  },
  {
    id: "a4",
    title: "Math Extra Class",
    titleKh: "ថ្នាក់បន្ថែមមុខវិជ្ជាគណិតវិទ្យា",
    body: "Extra math sessions every Tuesday afternoon 3:00–4:30 PM before the exam.",
    bodyKh: "មានថ្នាក់គណិតវិទ្យាបន្ថែមរៀងរាល់ថ្ងៃអង្គារ ម៉ោង ៣:00–៤:30 ល្ងាច មុនពេលប្រឡង។",
    date: "2026-04-03",
    type: "class",
    isRead: true,
  },
  {
    id: "a5",
    title: "Library New Books Available",
    titleKh: "បណ្ណាល័យមានសៀវភៅថ្មី",
    body: "New reference books for Science and Math are now available in the school library.",
    bodyKh: "សៀវភៅយោងថ្មីសម្រាប់វិទ្យាសាស្ត្រ និងគណិតវិទ្យា មានដាក់នៅបណ្ណាល័យសាលាហើយ។",
    date: "2026-04-01",
    type: "school",
    isRead: true,
  },
];

export interface Assignment {
  id: string;
  title: string;
  titleKh: string;
  subject: string;
  subjectKh: string;
  dueDate: string;
  isSubmitted: boolean;
  description: string;
  descriptionKh: string;
}

export const assignments: Assignment[] = [
  {
    id: "as1",
    title: "Physics Lab Report",
    titleKh: "របាយការណ៍ពិសោធន៍រូបវិទ្យា",
    subject: "Physics",
    subjectKh: "រូបវិទ្យា",
    dueDate: "2026-04-08",
    isSubmitted: false,
    description: "Write a lab report on the pendulum experiment conducted in class.",
    descriptionKh: "សរសេររបាយការណ៍ពិសោធន៍អំពីការពិសោធន៍រំយ៉ូលដែលបានធ្វើក្នុងថ្នាក់។",
  },
  {
    id: "as2",
    title: "Math Problem Set Ch. 7",
    titleKh: "លំហាត់គណិតវិទ្យា ជំពូក ៧",
    subject: "Mathematics",
    subjectKh: "គណិតវិទ្យា",
    dueDate: "2026-04-10",
    isSubmitted: false,
    description: "Complete exercises 1–20 on page 145.",
    descriptionKh: "ធ្វើលំហាត់ទី ១–២០ ទំព័រ ១៤៥។",
  },
  {
    id: "as3",
    title: "English Essay: My Future",
    titleKh: "អត្ថបទអង់គ្លេស: អនាគតរបស់ខ្ញុំ",
    subject: "English",
    subjectKh: "អង់គ្លេស",
    dueDate: "2026-04-12",
    isSubmitted: false,
    description: "Write a 300-word essay about your future plans after high school.",
    descriptionKh: "សរសេរអត្ថបទ ៣០០ ពាក្យអំពីផែនការអនាគតរបស់អ្នកក្រោយមធ្យមសិក្សា។",
  },
  {
    id: "as4",
    title: "Chemistry Worksheet",
    titleKh: "សន្លឹកលំហាត់គីមីវិទ្យា",
    subject: "Chemistry",
    subjectKh: "គីមីវិទ្យា",
    dueDate: "2026-04-07",
    isSubmitted: true,
    description: "Balancing chemical equations worksheet.",
    descriptionKh: "សន្លឹកលំហាត់តុល្យសមីការគីមី។",
  },
  {
    id: "as5",
    title: "History Essay: Angkor Wat",
    titleKh: "អត្ថបទប្រវត្តិសាស្ត្រ: អង្គរវត្ត",
    subject: "History",
    subjectKh: "ប្រវត្តិសាស្ត្រ",
    dueDate: "2026-04-15",
    isSubmitted: false,
    description: "Write about the historical significance of Angkor Wat.",
    descriptionKh: "សរសេរអំពីសារៈសំខាន់ប្រវត្តិសាស្ត្ររបស់អង្គរវត្ត។",
  },
];
